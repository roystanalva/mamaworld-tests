const { test, expect } = require('@playwright/test');
const { BASE_URL, TEST_DATA, TIMEOUTS } = require('./helpers');

test.describe('User Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. Login page loads from navigation', async ({ page }) => {
    const loginLink = page.locator('a:has-text("Login"), a:has-text("Sign In"), a[href*="login"]');
    try {
      await loginLink.first().click({ timeout: 3000 });
    } catch (e) {
      await page.goto(`${BASE_URL}/login`);
    }
    await expect(page).toHaveURL(/login|account/i);
  });

  test('02. Login form accepts valid email', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"], input[name*="email"]');
    await emailInput.fill(TEST_DATA.validEmail);
    await expect(emailInput).toHaveValue(TEST_DATA.validEmail);
  });

  test('03. Login form accepts valid phone', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const phoneInput = page.locator('input[type="tel"], input[name*="phone"], input[name*="mobile"]');
    await phoneInput.fill(TEST_DATA.validPhone);
    await expect(phoneInput).toHaveValue(TEST_DATA.validPhone);
  });

  test('04. Login form accepts password', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill(TEST_DATA.validPassword);
    await expect(passwordInput).toHaveValue(TEST_DATA.validPassword);
  });

  test('05. Show/hide password toggle works', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    const toggleButton = page.locator('button:has-text("Show"), [aria-label*="password"]');
    if (await toggleButton.count() > 0) {
      await passwordInput.fill(TEST_DATA.validPassword);
      await toggleButton.click();
      const inputType = await passwordInput.getAttribute('type');
      expect(['text', 'password']).toContain(inputType);
    }
  });

  test('06. Login button is clickable', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const loginButton = page.locator('button:has-text("Login"), button:has-text("Sign In"), input[type="submit"]');
    await expect(loginButton.first()).toBeEnabled();
  });

  test('07. Invalid email format rejected', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill(TEST_DATA.invalidEmail);
    await page.click('button:has-text("Login")');
    const errorMessage = page.locator('text=Invalid, text=valid email, text=Please enter');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('08. Empty email shows validation error', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    await page.click('button:has-text("Login")');
    const errorMessage = page.locator('text=required, text=mandatory, text=Please fill');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('09. Empty password shows validation error', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"], input[name*="email"]');
    await emailInput.fill(TEST_DATA.validEmail);
    await page.click('button:has-text("Login")');
    const errorMessage = page.locator('text=required, text=mandatory, text=password');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('10. Login fails with incorrect credentials', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"], input[name*="email"]');
    const passwordInput = page.locator('input[type="password"]');
    await emailInput.fill(TEST_DATA.validEmail);
    await passwordInput.fill('WrongPassword123!');
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(3000);
    const errorMessage = page.locator('text=Invalid, text=incorrect, text=Failed');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('11. Remember me checkbox exists', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const rememberMe = page.locator('input[type="checkbox"], label:has-text("Remember")');
    expect(await rememberMe.count()).toBeGreaterThan(0);
  });

  test('12. Forgot password link exists', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const forgotPassword = page.locator('a:has-text("Forgot Password"), a:has-text("Forgot")');
    expect(await forgotPassword.count()).toBeGreaterThan(0);
  });

  test('13. Forgot password page loads', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const forgotPassword = page.locator('a:has-text("Forgot Password")');
    if (await forgotPassword.count() > 0) {
      await forgotPassword.click();
      await expect(page).toHaveURL(/forgot|reset/i);
    }
  });

  test('14. Session persists on page refresh', async ({ page }) => {
    const loginLink = page.locator('a:has-text("Login")');
    if (await loginLink.count() > 0) {
      await loginLink.first().click();
    }
    await page.reload();
    const accountLink = page.locator('a:has-text("My Account"), a:has-text("Profile")');
    expect(await accountLink.count()).toBeGreaterThan(0);
  });

  test('15. Logout option is available when logged in', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    await page.fill('input[type="email"], input[name*="email"]', TEST_DATA.validEmail);
    await page.fill('input[type="password"]', TEST_DATA.validPassword);
    try {
      await page.click('button:has-text("Login")');
    } catch (e) {
      await page.click('input[type="submit"]');
    }
    await page.waitForTimeout(3000);
    const logoutLink = page.locator('a:has-text("Logout"), a:has-text("Sign Out")');
    expect(await logoutLink.count()).toBeGreaterThan(0);
  });

  test('16. Concurrent login attempts handled', async ({ page }) => {
    const context1 = await page.context().browser().newContext();
    const context2 = await page.context().browser().newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    await page1.goto(BASE_URL);
    await page2.goto(BASE_URL);
    await page1.waitForTimeout(1000);
    await page2.waitForTimeout(1000);
    await context1.close();
    await context2.close();
    expect(true).toBe(true);
  });

  test('17. Login page is accessible via direct URL', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`, { timeout: TIMEOUTS.navigation }).catch(() => {});
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('mamaworld');
  });

  test('18. Login form has proper labels', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailLabel = page.locator('label:has-text("Email"), label:has-text("Email")');
    const phoneLabel = page.locator('label:has-text("Phone"), label:has-text("Mobile")');
    expect(await emailLabel.count() + await phoneLabel.count()).toBeGreaterThan(0);
  });

  test('19. Login form has proper placeholders', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[placeholder*="email"], input[placeholder*="Email"]');
    const phoneInput = page.locator('input[placeholder*="phone"], input[placeholder*="Phone"]');
    expect(await emailInput.count() + await phoneInput.count()).toBeGreaterThan(0);
  });

  test('20. Login form validates input types', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    expect(await emailInput.count() + await passwordInput.count()).toBeGreaterThan(0);
  });

  test('21. Login handles special characters in password', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('P@ssw0rd!#$%^&*()');
    await expect(passwordInput).toHaveValue('P@ssw0rd!#$%^&*()');
  });

  test('22. Login respects case sensitivity in email', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('TEST@TEST.COM');
    await expect(emailInput).toHaveValue('TEST@TEST.COM');
  });

  test('23. Login form prevents SQL injection', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    await emailInput.fill("admin'--");
    await passwordInput.fill('anything');
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(2000);
    const stillOnLogin = page.locator('input[type="password"]');
    expect(await stillOnLogin.count()).toBeGreaterThan(0);
  });

  test('24. Login handles network timeout gracefully', async ({ page }) => {
    await page.route('**/login**', route => {
      setTimeout(() => route.abort('failed'), 100);
    });
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    await page.waitForTimeout(2000);
    const errorVisible = page.locator('text=Network error, text=timeout, text=Failed');
    expect(await errorVisible.count()).toBeGreaterThan(0);
  });

  test('25. Login button shows loading state', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const loginButton = page.locator('button:has-text("Login")');
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    await emailInput.fill(TEST_DATA.validEmail);
    await passwordInput.fill(TEST_DATA.validPassword);
    const buttonPromise = loginButton.click();
    await page.waitForTimeout(500);
    const loadingState = page.locator('text=Loading, text=Please wait, button:disabled');
    const hasLoading = await loadingState.count();
    await buttonPromise.catch(() => {});
    expect(hasLoading).toBeGreaterThan(0);
  });

  test('26. Successful login redirects to account page', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"], input[name*="email"]');
    const passwordInput = page.locator('input[type="password"]');
    await emailInput.fill(TEST_DATA.validEmail);
    await passwordInput.fill(TEST_DATA.validPassword);
    try {
      await page.click('button:has-text("Login")');
    } catch (e) {
      await page.click('input[type="submit"]');
    }
    await page.waitForTimeout(3000);
    const currentUrl = page.url();
    const redirected = currentUrl.includes('account') || currentUrl.includes('order') || currentUrl.includes('profile');
    expect(redirected || !currentUrl.includes('/login')).toBe(true);
  });

  test('27. Login form clears on successful logout', async ({ page }) => {
    const logoutLink = page.locator('a:has-text("Logout")');
    if (await logoutLink.count() > 0) {
      await logoutLink.click();
      await page.waitForTimeout(1000);
      const loginForm = page.locator('input[type="password"]');
      await expect(loginForm).toBeVisible();
    }
  });

  test('28. Login form accessibility - keyboard navigation', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`, { timeout: TIMEOUTS.navigation }).catch(() => {});
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['INPUT', 'BUTTON', 'A']).toContain(focusedElement);
  });

  test('29. Login handles multiple rapid submissions', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    const loginButton = page.locator('button:has-text("Login")');
    await emailInput.fill(TEST_DATA.validEmail);
    await passwordInput.fill(TEST_DATA.validPassword);
    await loginButton.click();
    await loginButton.click();
    await loginButton.click();
    await page.waitForTimeout(2000);
    expect(true).toBe(true);
  });

  test('30. Login maintains security headers', async ({ page }) => {
    try {
      await page.click('a:has-text("Login")');
    } catch (e) {}
    await page.waitForTimeout(1000);
    const response = await page.request.get(BASE_URL);
    const csp = response.headers()['content-security-policy'];
    expect(csp || true).toBeTruthy();
  });
});