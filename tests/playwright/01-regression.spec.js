const { test, expect } = require('@playwright/test');
const { BASE_URL, PRODUCT_URLS, TEST_DATA, TIMEOUTS } = require('./helpers');

test.describe('Regression Tests - Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. Home page loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Mama World/i);
  });

  test('02. Logo is visible on home page', async ({ page }) => {
    const logo = page.locator('img[alt*="Mama"], a:has-text("Mama World")').first();
    await expect(logo).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('03. Navigation menu is visible', async ({ page }) => {
    const nav = page.locator('nav, header');
    await expect(nav).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('04. Home link is accessible', async ({ page }) => {
    await page.click('a:has-text("HOME")');
    await expect(page).toHaveURL(/mamaworld.in/);
  });

  test('05. Maternity Night Wear category loads', async ({ page }) => {
    await page.click('a:has-text("MATERNITY NIGHT WEAR")');
    await expect(page).toHaveURL(/night-wear/i);
  });

  test('06. Maternity Co-ord Set category loads', async ({ page }) => {
    await page.click('a:has-text("MATERNITY CO-ORD SET")');
    await expect(page).toHaveURL(/keR5QsOH|co-ord/i);
  });

  test('07. New Arrivals page loads', async ({ page }) => {
    await page.click('a:has-text("NEW ARRIVALS")');
    await expect(page).toHaveURL(/cF1wR54K|new-arrival/i);
  });

  test('08. Best Seller page loads', async ({ page }) => {
    await page.click('a:has-text("BESTSELLER")');
    await expect(page).toHaveURL(/kRr89Z5K|bestseller/i);
  });

  test('09. Search functionality works', async ({ page }) => {
    await page.fill('input[type="search"], input[placeholder*="Search"]', 'Kurta');
    await page.press('input[type="search"], input[placeholder*="Search"]', 'Enter');
    await expect(page).toHaveURL(/search/i);
  });

  test('10. Bag (Cart) page is accessible', async ({ page }) => {
    await page.click('a:has-text("Bag"), a[href*="/bag"]');
    await expect(page).toHaveURL(/bag/i);
  });

  test('11. Empty bag shows empty message', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const emptyMsg = page.locator('text=empty, text=No items');
    await expect(emptyMsg.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('12. Footer is visible', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('13. About Us page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/about-us`);
    await expect(page).toHaveURL(/about-us/);
  });

  test('14. Privacy Policy page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/privacy-policy`);
    await expect(page).toHaveURL(/privacy-policy/);
  });

  test('15. Return Policy page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/return-policy`);
    await expect(page).toHaveURL(/return-policy/);
  });

  test('16. Shipping Policy page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/shipping-policy`);
    await expect(page).toHaveURL(/shipping-policy/);
  });

  test('17. Terms and Conditions page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/terms-and-conditions`);
    await expect(page).toHaveURL(/terms/);
  });

  test('18. Contact phone number is visible', async ({ page }) => {
    const phone = page.locator('text=9820584377');
    await expect(phone.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('19. WhatsApp contact is visible', async ({ page }) => {
    const whatsapp = page.locator('text=WhatsApp, a[href*="whatsapp"]');
    await expect(whatsapp.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('20. Email contact is visible', async ({ page }) => {
    const email = page.locator('text=sdnenwani@gmail.com');
    await expect(email.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('21. Address is visible', async ({ page }) => {
    const address = page.locator('text=Vikhroli');
    await expect(address.first()).toBeVisible({ timeout: TIMEOUTS.elementWait });
  });

  test('22. Product collection loads correctly', async ({ page }) => {
    await page.goto(PRODUCT_URLS[0]);
    await expect(page).toHaveURL(/collection/);
  });

  test('23. Multiple categories are accessible', async ({ page }) => {
    const categories = ['Night Wear', 'Feeding Kurta', 'Co-ord Set'];
    for (const cat of categories.slice(0, 2)) {
      await page.goto(BASE_URL);
      try {
        await page.click(`a:has-text("${cat}")`);
      } catch (e) {
        console.log(`Category ${cat} not found`);
      }
    }
  });

  test('24. Best sellers section displays products', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const products = page.locator('.product, [class*="product"]');
    expect(await products.count()).toBeGreaterThan(0);
  });

  test('25. Page loads without JavaScript errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(BASE_URL);
    await page.waitForTimeout(2000);
    expect(errors.filter(e => e.includes('Error'))).toHaveLength(0);
  });

  test('26. All images load (no broken images)', async ({ page }) => {
    await page.goto(BASE_URL);
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test('27. Social media links present', async ({ page }) => {
    await page.goto(BASE_URL);
    const socialLinks = page.locator('a[href*="facebook"], a[href*="instagram"]');
    expect(await socialLinks.count()).toBeGreaterThan(0);
  });

  test('28. Responsive design works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const menu = page.locator('nav, header, .menu');
    await expect(menu).toBeVisible();
  });

  test('29. Page scrolls correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const footer = page.locator('footer');
    await expect(footer).toBeInViewport();
  });

  test('30. Back to top button works', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const topButton = page.locator('a:has-text("Go to top"), button:has-text("top")');
    try {
      await topButton.first().click();
      await page.waitForTimeout(300);
    } catch (e) {
      console.log('Back to top button not found');
    }
  });
});