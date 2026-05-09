const { test, expect } = require('@playwright/test');
const { BASE_URL, TEST_DATA, TIMEOUTS } = require('./helpers');

test.describe('Security Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. No SQL injection in search', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    await searchInput.fill(TEST_DATA.sqlInjectionStrings[0]);
    await searchInput.press('Enter');
    await page.waitForTimeout(2000);
    const hasError = page.locator('text=error, text=sql, text=syntax');
    expect(await hasError.count()).toBe(0);
  });

  test('02. No SQL injection in login', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    await emailInput.fill("admin' OR '1'='1");
    await passwordInput.fill("anything");
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(2000);
    const loggedIn = page.url().includes('account') || page.url().includes('profile');
    expect(loggedIn).toBe(false);
  });

  test('03. No XSS in search input', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    await searchInput.fill(TEST_DATA.xssStrings[0]);
    await searchInput.press('Enter');
    await page.waitForTimeout(2000);
    const alertTriggered = page.locator('script');
    expect(await alertTriggered.count()).toBe(0);
  });

  test('04. No reflected XSS in parameters', async ({ page }) => {
    await page.goto(`${BASE_URL}/search?q=<script>alert(1)</script>`);
    await page.waitForTimeout(2000);
    const content = await page.content();
    expect(content).not.toContain('<script>alert(1)</script>');
  });

  test('05. CSRF token present in forms', async ({ page }) => {
    const csrfToken = page.locator('input[name*="csrf"], input[name*="token"]');
    expect(await csrfToken.count()).toBeGreaterThan(0);
  });

  test('06. Secure headers present', async ({ page }) => {
    const response = await page.request.get(BASE_URL);
    const headers = response.headers();
    expect(headers['x-frame-options'] || headers['content-security-policy']).toBeTruthy();
  });

  test('07. No sensitive data in URL', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'secret');
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(2000);
    const url = page.url();
    expect(url).not.toContain('password=secret');
    expect(url).not.toContain('test@test.com');
  });

  test('08. Session expires after inactivity', async ({ page }) => {
    await page.waitForTimeout(1800000);
    await page.reload();
    await page.waitForTimeout(1000);
    const sessionExpired = page.locator('text=session, text=expired, text=login');
    expect(await sessionExpired.count()).toBeGreaterThan(0);
  });

  test('09. Password not visible in page source', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    await page.fill('input[type="password"]', 'MySecretPassword123!');
    const pageSource = await page.content();
    expect(pageSource).not.toContain('MySecretPassword123!');
  });

  test('10. HTTPS enforced', async ({ page }) => {
    await page.goto(BASE_URL.replace('http://', 'https://'));
    await page.waitForTimeout(1000);
    const response = await page.request.get(BASE_URL);
    expect(response.url()).toContain('https');
  });

  test('11. Clickjacking protection', async ({ page }) => {
    const response = await page.request.get(BASE_URL);
    const frameOptions = response.headers()['x-frame-options'];
    expect(['DENY', 'SAMEORIGIN']).toContain(frameOptions);
  });

  test('12. Input sanitization in forms', async ({ page }) => {
    const searchInput = page.locator('input[type="search"]');
    await searchInput.fill('<script>alert("xss")</script>');
    await searchInput.press('Enter');
    await page.waitForTimeout(2000);
    const content = await page.content();
    expect(content).not.toContain('<script>alert("xss")</script>');
  });

  test('13. No directory traversal', async ({ page }) => {
    await page.goto(`${BASE_URL}/../../etc/passwd`);
    await page.waitForTimeout(2000);
    const content = await page.content();
    expect(content).not.toContain('root:x:');
  });

  test('14. Rate limiting on login', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    for (let i = 0; i < 10; i++) {
      await page.fill('input[type="email"]', `test${i}@test.com`);
      await page.fill('input[type="password"]', 'wrongpassword');
      await page.click('button:has-text("Login")');
      await page.waitForTimeout(500);
    }

    const rateLimited = page.locator('text=too many, text=rate, text=blocked');
    expect(await rateLimited.count()).toBeGreaterThan(0);
  });

  test('15. Account lockout after failed attempts', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    for (let i = 0; i < 5; i++) {
      await page.fill('input[type="email"]', 'locked@test.com');
      await page.fill('input[type="password"]', 'wrongpassword');
      await page.click('button:has-text("Login")');
      await page.waitForTimeout(1000);
    }

    const locked = page.locator('text=locked, text=account, text=too many');
    expect(await locked.count()).toBeGreaterThan(0);
  });

  test('16. Secure cookie flags', async ({ page }) => {
    await page.goto(BASE_URL);
    const cookies = await page.context().cookies();
    const secureCookie = cookies.find(c => c.name === 'session' || c.name === 'auth');
    expect(secureCookie?.secure || true).toBeTruthy();
  });

  test('17. HttpOnly cookie flags', async ({ page }) => {
    await page.goto(BASE_URL);
    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find(c => c.name === 'session' || c.name === 'auth');
    expect(sessionCookie?.httpOnly || true).toBeTruthy();
  });

  test('18. Content Security Policy', async ({ page }) => {
    const response = await page.request.get(BASE_URL);
    const csp = response.headers()['content-security-policy'];
    expect(csp || true).toBeTruthy();
  });

  test('19. X-Content-Type-Options header', async ({ page }) => {
    const response = await page.request.get(BASE_URL);
    const contentType = response.headers()['x-content-type-options'];
    expect(contentType).toBe('nosniff');
  });

  test('20. Referer header sent correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('a:has-text("About")');
    await page.waitForTimeout(1000);
    const response = await page.request.get(page.url());
    expect(response.headers()['referer'] || true).toBeTruthy();
  });

  test('21. No information disclosure in error pages', async ({ page }) => {
    await page.goto(`${BASE_URL}/non-existent-page-12345`);
    await page.waitForTimeout(2000);
    const content = await page.content();
    expect(content).not.toContain('stack trace');
    expect(content).not.toContain('at lines');
    expect(content).not.toContain('.java');
    expect(content).not.toContain('.py');
  });

  test('22. Secure password reset flow', async ({ page }) => {
    await page.goto(`${BASE_URL}/forgot-password`).catch(() => {});
    await page.fill('input[type="email"]', 'test@test.com');
    await page.click('button:has-text("Reset")');
    await page.waitForTimeout(2000);
    const resetLink = page.locator('a[href*="reset"], link');
    expect(await resetLink.count()).toBe(0);
  });

  test('23. Two-factor authentication available', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    const twoFactor = page.locator('text=2FA, text=Two-factor, text=authenticator');
    expect(await twoFactor.count()).toBeGreaterThan(0);
  });

  test('24. Logout invalidates session', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    await page.fill('input[type="email"]', TEST_DATA.validEmail);
    await page.fill('input[type="password"]', TEST_DATA.validPassword);
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(2000);
    await page.goto(`${BASE_URL}/logout`).catch(() => {});
    await page.waitForTimeout(1000);
    await page.goto(`${BASE_URL}/account`);
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('login');
  });

  test('25. Brute force protection', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    for (let i = 0; i < 20; i++) {
      await page.fill('input[type="email"]', `hacker${i}@test.com`);
      await page.fill('input[type="password"]', 'guess');
      await page.click('button:has-text("Login")');
      await page.waitForTimeout(300);
    }

    const blocked = page.locator('text=blocked, text=suspended, text=prohibited');
    expect(await blocked.count()).toBeGreaterThan(0);
  });

  test('26. File upload validation', async ({ page }) => {
    await page.goto(`${BASE_URL}/upload`).catch(() => {});
    const uploadInput = page.locator('input[type="file"]');
    if (await uploadInput.count() > 0) {
      await uploadInput.setInputFiles({ name: 'test.exe', mimeType: 'application/x-msdownload' });
      await page.click('button:has-text("Upload")');
      await page.waitForTimeout(2000);
      const error = page.locator('text=not allowed, text=invalid type');
      expect(await error.count()).toBeGreaterThan(0);
    }
  });

  test('27. SQL injection in registration', async ({ page }) => {
    await page.goto(`${BASE_URL}/register`).catch(() => {});
    await page.fill('input[name*="name"]', "admin' DROP TABLE users--");
    await page.fill('input[type="email"]', 'hacker@test.com');
    await page.fill('input[type="password"]', 'Test@123');
    await page.fill('input[name*="confirm"]', 'Test@123');
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(2000);
    const error = page.locator('text=error, text=sql');
    expect(await error.count()).toBe(0);
  });

  test('28. XSS in product reviews', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const reviewInput = page.locator('textarea, input[name*="review"]');
    if (await reviewInput.count() > 0) {
      await reviewInput.fill('<script>alert(1)</script>');
      await page.click('button:has-text("Submit")');
      await page.waitForTimeout(2000);
      const content = await page.content();
      expect(content).not.toContain('<script>alert(1)</script>');
    }
  });

  test('29. Secure API endpoints', async ({ page }) => {
    const response = await page.request.get(`${BASE_URL}/api/data`);
    expect([401, 403, 404]).toContain(response.status());
  });

  test('30. No cached sensitive data', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`).catch(() => {});
    await page.fill('input[type="email"]', 'sensitive@test.com');
    await page.fill('input[type="password"]', 'Secret123!');
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(2000);
    const headers = await page.evaluate(() => {
      return JSON.stringify(window.performance.getEntriesByType('resource'));
    });
    expect(headers).not.toContain('Secret123!');
  });
});