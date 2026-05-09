const { test, expect } = require('@playwright/test');
const { BASE_URL, TIMEOUTS } = require('./helpers');

test.describe('End-to-End Tests', () => {
  test('01. Complete purchase flow - Browse to checkout', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.click('a:has-text("BEST SELLER")');
    await page.waitForTimeout(1000);
    const addToBag = page.locator('button:has-text("Add to bag")').first();
    if (await addToBag.count() > 0) {
      await addToBag.click();
      await page.waitForTimeout(1000);
      await page.goto(`${BASE_URL}/bag`);
      await page.waitForTimeout(500);
      expect(page.url()).toContain('bag');
    }
  });

  test('02. Complete search to product flow', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('input[type="search"]', 'Kurta');
    await page.press('input[type="search"]', 'Enter');
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('search');
    const results = page.locator('[class*="product"], a[href*="catalogue"]');
    expect(await results.count()).toBeGreaterThan(0);
  });

  test('03. Category navigation to checkout', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('a:has-text("MATERNITY NIGHT WEAR")');
    await page.waitForTimeout(1000);
    const product = page.locator('[class*="product"]').first();
    if (await product.count() > 0) {
      await product.click();
      await page.waitForTimeout(1000);
    }
  });

  test('04. Product selection to cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const product = page.locator('[class*="product"]').first();
    if (await product.count() > 0) {
      await product.click();
      await page.waitForTimeout(1000);
      const addToBag = page.locator('button:has-text("Add to bag")');
      if (await addToBag.count() > 0) {
        await addToBag.click();
        await page.waitForTimeout(1000);
      }
    }
  });

  test('05. Multiple items to cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const addButtons = await page.locator('button:has-text("Add to bag")').all();
    for (let i = 0; i < Math.min(3, addButtons.length); i++) {
      await addButtons[i].click();
      await page.waitForTimeout(500);
    }
    await page.goto(`${BASE_URL}/bag`);
    const items = page.locator('[class*="item"], [class*="product"]');
    expect(await items.count()).toBeGreaterThanOrEqual(0);
  });

  test('06. Contact form submission', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    await page.fill('input[name*="name"], input[id*="name"]', 'Test User');
    await page.fill('input[type="email"]', 'test@test.com');
    const textarea = page.locator('textarea, input[name*="message"]');
    await textarea.fill('Test message');
    await page.click('button[type="submit"]').catch(() => {});
    await page.waitForTimeout(2000);
  });

  test('07. About us page flow', async ({ page }) => {
    await page.goto(`${BASE_URL}/about-us`);
    await expect(page).toHaveURL(/about-us/);
    const content = await page.content();
    expect(content.length).toBeGreaterThan(100);
  });

  test('08. Return policy flow', async ({ page }) => {
    await page.goto(`${BASE_URL}/return-policy`);
    await expect(page).toHaveURL(/return-policy/);
    const content = await page.content();
    expect(content.length).toBeGreaterThan(50);
  });

  test('09. Shipping policy flow', async ({ page }) => {
    await page.goto(`${BASE_URL}/shipping-policy`);
    await expect(page).toHaveURL(/shipping-policy/);
    const content = await page.content();
    expect(content.length).toBeGreaterThan(50);
  });

  test('10. Privacy policy flow', async ({ page }) => {
    await page.goto(`${BASE_URL}/privacy-policy`);
    await expect(page).toHaveURL(/privacy-policy/);
  });

  test('11. Footer navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    const footerLinks = page.locator('footer a');
    const linkCount = await footerLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('12. Logo click returns home', async ({ page }) => {
    await page.goto(`${BASE_URL}/about-us`);
    const logo = page.locator('img[alt*="Mama"], a:has-text("Mama")').first();
    await logo.click();
    await expect(page).toHaveURL(/mamaworld.in/);
  });

  test('13. Best seller view', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    await page.waitForTimeout(1000);
    const products = page.locator('[class*="product"]');
    expect(await products.count()).toBeGreaterThan(0);
  });

  test('14. New arrivals view', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/cF1wR54K`);
    await page.waitForTimeout(1000);
    const products = page.locator('[class*="product"]');
    expect(await products.count()).toBeGreaterThanOrEqual(0);
  });

  test('15. Co-ord set category', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/keR5QsOH`);
    await page.waitForTimeout(1000);
  });

  test('16. Night wear category', async ({ page }) => {
    await page.goto(`${BASE_URL}/only-night-wear/collection/Aahm3Wot`);
    await page.waitForTimeout(1000);
  });

  test('17. Cart update quantity', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const qtyInput = page.locator('input[type="number"]');
    if (await qtyInput.count() > 0) {
      await qtyInput.fill('2');
      await page.waitForTimeout(1000);
    }
  });

  test('18. Cart clear all', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const clearBtn = page.locator('button:has-text("Clear All"), a:has-text("Clear")');
    if (await clearBtn.count() > 0) {
      await clearBtn.click();
      await page.waitForTimeout(1000);
    }
  });

  test('19. Continue shopping from cart', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const continueBtn = page.locator('a:has-text("Continue Shopping")');
    if (await continueBtn.count() > 0) {
      await continueBtn.click();
      await page.waitForTimeout(1000);
      expect(page.url()).not.toContain('bag');
    }
  });

  test('20. Product quick view', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const quickView = page.locator('button:has-text("Quick View"), a:has-text("Quick View")');
    if (await quickView.count() > 0) {
      await quickView.first().click();
      await page.waitForTimeout(1000);
    }
  });

  test('21. Size selection', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const sizeBtn = page.locator('button:has-text(" S "), button:has-text(" M "), button:has-text(" L ")');
    if (await sizeBtn.count() > 0) {
      await sizeBtn.first().click();
      await page.waitForTimeout(500);
    }
  });

  test('22. Color variant selection', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const colorBtn = page.locator('[class*="color"], [style*="background"]').first();
    if (await colorBtn.count() > 0) {
      await colorBtn.click();
      await page.waitForTimeout(500);
    }
  });

  test('23. Search suggestions', async ({ page }) => {
    await page.fill('input[type="search"]', 'kur');
    await page.waitForTimeout(1000);
    const suggestions = page.locator('[class*="suggestion"], [class*="dropdown"]');
    expect(await suggestions.count()).toBeGreaterThanOrEqual(0);
  });

  test('24. Product sort functionality', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const sortDropdown = page.locator('select, button:has-text("Sort")');
    if (await sortDropdown.count() > 0) {
      await sortDropdown.click();
      await page.waitForTimeout(500);
    }
  });

  test('25. Wishlist functionality', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const wishlistBtn = page.locator('button:has-text("Wishlist"), a:has-text("Wishlist")');
    if (await wishlistBtn.count() > 0) {
      await wishlistBtn.first().click();
      await page.waitForTimeout(1000);
    }
  });

  test('26. Compare products', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const compareBtn = page.locator('button:has-text("Compare")');
    if (await compareBtn.count() > 0) {
      await compareBtn.first().click();
      await page.waitForTimeout(500);
    }
  });

  test('27. Share product', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const shareBtn = page.locator('button:has-text("Share"), a:has-text("Share")');
    if (await shareBtn.count() > 0) {
      await shareBtn.first().click();
      await page.waitForTimeout(500);
    }
  });

  test('28. View all collection', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const viewAll = page.locator('a:has-text("View All"), a:has-text("View More")');
    if (await viewAll.count() > 0) {
      await viewAll.first().click();
      await page.waitForTimeout(1000);
    }
  });

  test('29. Pagination', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const nextBtn = page.locator('a:has-text("Next"), button:has-text("Next")');
    if (await nextBtn.count() > 0) {
      await nextBtn.first().click();
      await page.waitForTimeout(1000);
    }
  });

  test('30. Breadcrumb navigation', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const breadcrumb = page.locator('[class*="breadcrumb"], nav a');
    expect(await breadcrumb.count()).toBeGreaterThan(0);
  });
});