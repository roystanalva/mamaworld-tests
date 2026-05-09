const { test, expect } = require('@playwright/test');
const { BASE_URL, TEST_DATA, TIMEOUTS } = require('./helpers');

test.describe('User Registration Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. Registration page loads', async ({ page }) => {
    const registerLink = page.locator('a:has-text("Register"), a:has-text("Sign Up"), a[href*="register"]');
    try {
      await registerLink.first().click({ timeout: 3000 });
    } catch (e) {
      await page.goto(`${BASE_URL}/register`);
    }
    await expect(page).toHaveURL(/register|signup|account/i);
  });

  test('02. Registration form accepts name input', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const nameInput = page.locator('input[name*="name"], input[id*="name"]');
    await nameInput.fill('Test User');
    await expect(nameInput).toHaveValue('Test User');
  });

  test('03. Registration form accepts email', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('newuser@test.com');
    await expect(emailInput).toHaveValue('newuser@test.com');
  });

  test('04. Registration form accepts phone number', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const phoneInput = page.locator('input[type="tel"], input[name*="phone"]');
    await phoneInput.fill(TEST_DATA.validPhone);
    await expect(phoneInput).toHaveValue(TEST_DATA.validPhone);
  });

  test('05. Registration form accepts password', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('Test@123456');
    await expect(passwordInput).toHaveValue('Test@123456');
  });

  test('06. Registration form accepts confirm password', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const confirmPasswordInput = page.locator('input[name*="confirm"], input[id*="confirm"]');
    await confirmPasswordInput.fill('Test@123456');
    await expect(confirmPasswordInput).toHaveValue('Test@123456');
  });

  test('07. Empty name shows validation error', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.click('button:has-text("Register"), button:has-text("Sign Up")');
    const errorMessage = page.locator('text=required, text=name');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('08. Empty email shows validation error', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const nameInput = page.locator('input[name*="name"]');
    await nameInput.fill('Test User');
    await page.click('button:has-text("Register")');
    const errorMessage = page.locator('text=required, text=email');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('09. Invalid email format rejected', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('invalid-email');
    await page.click('button:has-text("Register")');
    const errorMessage = page.locator('text=valid email, text=Invalid');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('10. Duplicate email shows error', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.fill('input[name*="name"]', 'Test User');
    await page.fill('input[type="email"]', TEST_DATA.validEmail);
    await page.fill('input[type="tel"]', TEST_DATA.validPhone);
    await page.fill('input[type="password"]', 'Test@123456');
    await page.fill('input[name*="confirm"]', 'Test@123456');
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(3000);
    const errorMessage = page.locator('text=already exists, text=already registered, text=in use');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('11. Password mismatch shows error', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.fill('input[name*="name"]', 'Test User');
    await page.fill('input[type="email"]', 'unique@test.com');
    await page.fill('input[type="tel"]', '9876543210');
    await page.fill('input[type="password"]', 'Test@123456');
    await page.fill('input[name*="confirm"]', 'Different@123456');
    await page.click('button:has-text("Register")');
    const errorMessage = page.locator('text=match, text=same');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('12. Weak password shows warning', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('123');
    const warningMessage = page.locator('text=weak, text=strong, text=minimum');
    expect(await warningMessage.count()).toBeGreaterThan(0);
  });

  test('13. Short password rejected', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('abc');
    await page.click('button:has-text("Register")');
    const errorMessage = page.locator('text=characters, text=minimum');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('14. Terms and conditions checkbox present', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const termsCheckbox = page.locator('input[type="checkbox"], label:has-text("Terms")');
    expect(await termsCheckbox.count()).toBeGreaterThan(0);
  });

  test('15. Privacy policy link present', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const privacyLink = page.locator('a:has-text("Privacy Policy"), a:has-text("Privacy")');
    expect(await privacyLink.count()).toBeGreaterThan(0);
  });

  test('16. Phone number format validation', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const phoneInput = page.locator('input[type="tel"]');
    await phoneInput.fill('12345');
    await page.click('button:has-text("Register")');
    const errorMessage = page.locator('text=digits, text=10, text=valid');
    expect(await errorMessage.count()).toBeGreaterThan(0);
  });

  test('17. Register button is clickable', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const registerButton = page.locator('button:has-text("Register"), button:has-text("Sign Up")');
    await expect(registerButton.first()).toBeEnabled();
  });

  test('18. Registration via phone OTP', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const otpOption = page.locator('a:has-text("OTP"), button:has-text("OTP")');
    if (await otpOption.count() > 0) {
      await otpOption.click();
      const otpInput = page.locator('input[class*="otp"], input[maxlength="1"]');
      expect(await otpInput.count()).toBeGreaterThan(0);
    }
  });

  test('19. Registration success shows confirmation', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.fill('input[name*="name"]', 'New User');
    await page.fill('input[type="email"]', 'newuser' + Date.now() + '@test.com');
    await page.fill('input[type="tel"]', '9' + Math.floor(Math.random() * 9000000000 + 1000000000));
    await page.fill('input[type="password"]', 'Test@123456');
    await page.fill('input[name*="confirm"]', 'Test@123456');
    const termsCheckbox = page.locator('input[type="checkbox"]');
    if (await termsCheckbox.count() > 0) {
      await termsCheckbox.first().check();
    }
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(3000);
    const successMessage = page.locator('text=success, text=verified, text=Registered');
    expect(await successMessage.count()).toBeGreaterThan(0);
  });

  test('20. Registration page accessibility', async ({ page }) => {
    await page.goto(`${BASE_URL}/register`, { timeout: TIMEOUTS.navigation }).catch(() => {});
    await page.waitForTimeout(1000);
    const form = page.locator('form');
    expect(await form.count()).toBeGreaterThan(0);
  });

  test('21. Fields have proper labels', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const nameLabel = page.locator('label:has-text("Name")');
    const emailLabel = page.locator('label:has-text("Email")');
    expect(await nameLabel.count() + await emailLabel.count()).toBeGreaterThan(0);
  });

  test('22. Required field indicators present', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const requiredIndicator = page.locator('text=*, label:has-text("*")');
    expect(await requiredIndicator.count()).toBeGreaterThan(0);
  });

  test('23. Registration handles special characters in name', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const nameInput = page.locator('input[name*="name"]');
    await nameInput.fill("O'Brien, John-Smith");
    await expect(nameInput).toHaveValue("O'Brien, John-Smith");
  });

  test('24. Registration clears form after success', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.fill('input[name*="name"]', 'New User');
    await page.fill('input[type="email"]', 'new' + Date.now() + '@test.com');
    await page.fill('input[type="tel"]', '9' + Math.floor(Math.random() * 9000000000 + 1000000000));
    await page.fill('input[type="password"]', 'Test@123456');
    await page.fill('input[name*="confirm"]', 'Test@123456');
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(3000);
    await page.goto(`${BASE_URL}/register`);
    const nameInput = page.locator('input[name*="name"]');
    await expect(nameInput).toHaveValue('');
  });

  test('25. Redirect to login after registration', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.fill('input[name*="name"]', 'New User');
    await page.fill('input[type="email"]', 'new' + Date.now() + '@test.com');
    await page.fill('input[type="tel"]', '9' + Math.floor(Math.random() * 9000000000 + 1000000000));
    await page.fill('input[type="password"]', 'Test@123456');
    await page.fill('input[name*="confirm"]', 'Test@123456');
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(3000);
    const currentUrl = page.url();
    expect(currentUrl.includes('login') || currentUrl.includes('success')).toBeTruthy();
  });

  test('26. Registration via social accounts', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const googleButton = page.locator('button:has-text("Google"), a:has-text("Google")');
    const facebookButton = page.locator('button:has-text("Facebook"), a:has-text("Facebook")');
    const hasSocialLogin = (await googleButton.count() + await facebookButton.count()) > 0;
    expect(hasSocialLogin).toBeTruthy();
  });

  test('27. Password strength indicator', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const passwordInput = page.locator('input[type="password"]');
    await passwordInput.fill('Str0ngP@ss!');
    const strengthBar = page.locator('[class*="strength"], [class*="progress"]');
    expect(await strengthBar.count()).toBeGreaterThan(0);
  });

  test('28. Email verification required', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    await page.fill('input[name*="name"]', 'Test User');
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'Test@123456');
    await page.fill('input[name*="confirm"]', 'Test@123456');
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(2000);
    const verifyMessage = page.locator('text=verify, text=verification, text=email');
    expect(await verifyMessage.count()).toBeGreaterThan(0);
  });

  test('29. Registration stores data correctly', async ({ page }) => {
    try {
      await page.click('a:has-text("Register")');
    } catch (e) {}
    const emailInput = page.locator('input[type="email"]');
    const testEmail = 'test' + Date.now() + '@test.com';
    await emailInput.fill(testEmail);
    await page.click('button:has-text("Register")');
    await page.waitForTimeout(2000);
    await page.goto(`${BASE_URL}/login`);
    await emailInput.fill(testEmail);
    await page.fill('input[type="password"]', 'Test@123456');
    await page.click('button:has-text("Login")');
    await page.waitForTimeout(2000);
    const loggedIn = page.url().includes('account') || page.url().includes('profile');
    expect(loggedIn || !page.url().includes('/login')).toBe(true);
  });

  test('30. Registration form responsive design', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/register`, { timeout: TIMEOUTS.navigation }).catch(() => {});
    await page.waitForTimeout(1000);
    const form = page.locator('form');
    expect(await form).toBeVisible();
  });
});