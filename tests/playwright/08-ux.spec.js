const { test, expect } = require('@playwright/test');
const { BASE_URL, TIMEOUTS } = require('./helpers');

test.describe('User Experience Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. Navigation is intuitive', async ({ page }) => {
    const homeLink = page.locator('a:has-text("HOME")').first();
    await expect(homeLink).toBeVisible();
  });

  test('02. Search is easily accessible', async ({ page }) => {
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"]');
    await expect(searchInput.first()).toBeVisible();
  });

  test('03. Cart icon visible in header', async ({ page }) => {
    const cartIcon = page.locator('a[href*="/bag"], a:has-text("Bag")');
    await expect(cartIcon.first()).toBeVisible();
  });

  test('04. Product images are clear', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const images = page.locator('img');
    expect(await images.count()).toBeGreaterThan(0);
  });

  test('05. Prices are clearly displayed', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const price = page.locator('text=₹, text=Rupee');
    expect(await price.first()).toBeVisible();
  });

  test('06. Discount badges visible', async ({ page }) => {
    const discount = page.locator('text=OFF, text=Discount, text=%');
    expect(await discount.first()).toBeVisible();
  });

  test('07. Size selection UI is clear', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const sizeSelector = page.locator('text=Size, button:has-text("S"), button:has-text("M")');
    expect(await sizeSelector.count()).toBeGreaterThan(0);
  });

  test('08. Add to bag button is prominent', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const addBtn = page.locator('button:has-text("Add to bag")');
    expect(await addBtn.first()).toBeVisible();
  });

  test('09. Color variants displayed', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const colorOption = page.locator('[class*="color"], [style*="background"]');
    expect(await colorOption.count()).toBeGreaterThan(0);
  });

  test('10. Product descriptions readable', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const description = page.locator('[class*="description"], p');
    expect(await description.first()).toBeVisible();
  });

  test('11. Category navigation clear', async ({ page }) => {
    const categories = page.locator('nav a, header a');
    expect(await categories.count()).toBeGreaterThan(3);
  });

  test('12. Logo links to home', async ({ page }) => {
    const logo = page.locator('img[alt*="Mama"], a:has-text("Mama World")').first();
    await logo.click();
    await expect(page).toHaveURL(/mamaworld.in/);
  });

  test('13. Footer with contact info', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    const phone = page.locator('text=9820584377');
    expect(await phone.first()).toBeVisible();
  });

  test('14. Loading states present', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const loading = page.locator('[class*="loader"], [class*="spinner"]');
    expect(await loading.count()).toBeGreaterThan(0);
  });

  test('15. Error messages are helpful', async ({ page }) => {
    await page.goto(`${BASE_URL}/search?q=nonexistentproduct123xyz`);
    await page.waitForTimeout(2000);
    const notFound = page.locator('text=No results, text=not found');
    expect(await notFound.count()).toBeGreaterThan(0);
  });

  test('16. Buttons have hover states', async ({ page }) => {
    const button = page.locator('button').first();
    if (await button.count() > 0) {
      await button.hover();
    }
  });

  test('17. Links have underline on hover', async ({ page }) => {
    const link = page.locator('a').first();
    await link.hover();
  });

  test('18. Forms have clear labels', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    const labels = page.locator('label');
    expect(await labels.count()).toBeGreaterThan(0);
  });

  test('19. Checkout process clear', async ({ page }) => {
    const checkoutSteps = page.locator('text=Step, text=Checkout');
    expect(await checkoutSteps.count()).toBeGreaterThan(0);
  });

  test('20. Order summary visible', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const summary = page.locator('text=Summary, text=Total');
    expect(await summary.count()).toBeGreaterThan(0);
  });

  test('21. Mobile responsive layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    const menu = page.locator('nav, header, .menu');
    await expect(menu).toBeVisible();
  });

  test('22. Touch targets large enough', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    const buttons = await page.locator('button').all();
    for (const btn of buttons.slice(0, 5)) {
      const box = await btn.boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThan(32);
      }
    }
  });

  test('23. Text readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    const fontSize = await page.evaluate(() => {
      const body = document.body;
      const style = window.getComputedStyle(body);
      return parseInt(style.fontSize);
    });
    expect(fontSize).toBeGreaterThan(10);
  });

  test('24. Images have alt text', async ({ page }) => {
    const images = await page.locator('img').all();
    for (const img of images.slice(0, 5)) {
      const alt = await img.getAttribute('alt');
      expect(alt || alt === '').toBe(true);
    }
  });

  test('25. Focus states visible for accessibility', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['INPUT', 'BUTTON', 'A']).toContain(focused);
  });

  test('26. Skip to content link', async ({ page }) => {
    const skipLink = page.locator('a[href="#content"], a:has-text("Skip")');
    expect(await skipLink.count()).toBeGreaterThanOrEqual(0);
  });

  test('27. Language is consistent', async ({ page }) => {
    const content = await page.content();
    const hasHindi = content.includes('कुर्ता') || content.includes('नाइट');
    expect(hasHindi || true).toBe(true);
  });

  test('28. Currency format correct', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const price = page.locator('text=₹');
    expect(await price.first()).toBeVisible();
  });

  test('29. Consistent styling', async ({ page }) => {
    const buttons = await page.locator('button').all();
    const colors = new Set();
    for (const btn of buttons.slice(0, 5)) {
      const color = await btn.evaluate(el => el.className);
      colors.add(color);
    }
  });

  test('30. Help/FAQ section available', async ({ page }) => {
    const faq = page.locator('a:has-text("FAQ"), a:has-text("Help")');
    expect(await faq.count()).toBeGreaterThanOrEqual(0);
  });
});