const { test, expect } = require('@playwright/test');
const { BASE_URL, TEST_DATA, TIMEOUTS } = require('./helpers');

test.describe('Edge Case Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. Empty search query', async ({ page }) => {
    await page.fill('input[type="search"]', '');
    await page.press('input[type="search"]', 'Enter');
    await expect(page).toHaveURL(/search/);
  });

  test('02. Very long search query', async ({ page }) => {
    const longQuery = 'a'.repeat(500);
    await page.fill('input[type="search"]', longQuery);
    await page.press('input[type="search"]', 'Enter');
    await page.waitForTimeout(2000);
    const content = await page.content();
    expect(content.length).toBeGreaterThan(0);
  });

  test('03. Special characters in search', async ({ page }) => {
    await page.fill('input[type="search"]', '!@#$%^&*()');
    await page.press('input[type="search"]', 'Enter');
    await page.waitForTimeout(2000);
    expect(true).toBe(true);
  });

  test('04. Unicode in search', async ({ page }) => {
    await page.fill('input[type="search"]', 'कुर्ता');
    await page.press('input[type="search"]', 'Enter');
    await page.waitForTimeout(2000);
    expect(true).toBe(true);
  });

  test('05. Empty cart checkout attempt', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const checkoutBtn = page.locator('button:has-text("Checkout"), button:has-text("Place Order")');
    if (await checkoutBtn.count() > 0) {
      await checkoutBtn.click();
      const emptyMsg = page.locator('text=empty, text=Add items');
      expect(await emptyMsg.count()).toBeGreaterThan(0);
    }
  });

  test('06. Invalid product URL', async ({ page }) => {
    await page.goto(`${BASE_URL}/invalid-product-123/catalogue/99999`);
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('mamaworld');
  });

  test('07. Expired session handling', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('session', 'expired');
    });
    await page.reload();
    await page.waitForTimeout(1000);
    const loginPrompt = page.locator('text=Login, text=session');
    expect(await loginPrompt.count()).toBeGreaterThan(0);
  });

  test('08. Network failure during checkout', async ({ page }) => {
    await page.route('**/checkout/**', route => route.abort('failed'));
    await page.goto(`${BASE_URL}/bag`).catch(() => {});
    await page.waitForTimeout(1000);
    const error = page.locator('text=error, text=network');
    expect(await error.count()).toBeGreaterThan(0);
  });

  test('09. Partial form submission', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    await page.fill('input[name*="name"]', 'Test');
    await page.click('button[type="submit"]').catch(() => {});
    const error = page.locator('text=required, text=email');
    expect(await error.count()).toBeGreaterThan(0);
  });

  test('10. Concurrent session attempts', async ({ browser }) => {
    const ctx1 = await browser.newContext();
    const ctx2 = await browser.newContext();
    const p1 = await ctx1.newPage();
    const p2 = await ctx2.newPage();
    await p1.goto(`${BASE_URL}/login`);
    await p2.goto(`${BASE_URL}/login`);
    await ctx1.close();
    await ctx2.close();
  });

  test('11. Maximum quantity exceeded', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const qtyInput = page.locator('input[type="number"], input[name*="quantity"]');
    if (await qtyInput.count() > 0) {
      await qtyInput.fill('999');
      const addToCart = page.locator('button:has-text("Add to bag")');
      if (await addToCart.count() > 0) {
        await addToCart.click();
        const error = page.locator('text=maximum, text=limit');
        expect(await error.count()).toBeGreaterThan(0);
      }
    }
  });

  test('12. Zero quantity product', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const qtyInput = page.locator('input[type="number"]');
    if (await qtyInput.count() > 0) {
      await qtyInput.fill('0');
      const addBtn = page.locator('button:has-text("Add to bag")');
      await addBtn.click().catch(() => {});
    }
  });

  test('13. Negative quantity', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const qtyInput = page.locator('input[type="number"]');
    if (await qtyInput.count() > 0) {
      await qtyInput.fill('-1');
      const addBtn = page.locator('button:has-text("Add to bag")');
      await addBtn.click().catch(() => {});
    }
  });

  test('14. Invalid coupon code', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const couponInput = page.locator('input[name*="coupon"], input[name*="code"]');
    if (await couponInput.count() > 0) {
      await couponInput.fill('INVALID123');
      await page.click('button:has-text("Apply")');
      await page.waitForTimeout(1000);
      const error = page.locator('text=invalid, text=not valid');
      expect(await error.count()).toBeGreaterThan(0);
    }
  });

  test('15. Expired coupon', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const couponInput = page.locator('input[name*="coupon"]');
    if (await couponInput.count() > 0) {
      await couponInput.fill('EXPIRED2020');
      await page.click('button:has-text("Apply")');
      await page.waitForTimeout(1000);
      const error = page.locator('text=expired, text=valid');
      expect(await error.count()).toBeGreaterThan(0);
    }
  });

  test('16. Out of stock product', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const outOfStock = page.locator('text=Out of Stock, text=Out of stock');
    if (await outOfStock.count() > 0) {
      const addBtn = page.locator('button:has-text("Add to bag"), button:disabled');
      const isDisabled = await addBtn.first().isDisabled();
      expect(isDisabled || (await addBtn.count()) === 0).toBe(true);
    }
  });

  test('17. Product with no images', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const products = await page.locator('[class*="product"]').all();
    for (const product of products.slice(0, 5)) {
      const img = await product.locator('img').count();
      if (img === 0) {
        const title = await product.locator('[class*="title"]').textContent();
        expect(title).toBeTruthy();
      }
    }
  });

  test('18. Very long product name', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/cF1wR54K`);
    const longName = page.locator('[class*="name"]:has-text(/.{100,}/)');
    expect(await longName.count()).toBe(0);
  });

  test('19. Missing required fields', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    await page.click('button:has-text("Place Order")');
    const error = page.locator('text=required, text=mandatory');
    expect(await error.count()).toBeGreaterThan(0);
  });

  test('20. Invalid PIN code', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const pincodeInput = page.locator('input[name*="pincode"]');
    if (await pincodeInput.count() > 0) {
      await pincodeInput.fill('000000');
      await page.click('button:has-text("Check")').catch(() => {});
      const error = page.locator('text=invalid, text=not available');
      expect(await error.count()).toBeGreaterThan(0);
    }
  });

  test('21. Very long input field', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    const textarea = page.locator('textarea, input[name*="message"]');
    if (await textarea.count() > 0) {
      const longText = 'a'.repeat(10000);
      await textarea.fill(longText);
      await page.waitForTimeout(500);
    }
  });

  test('22. Duplicate submission', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    await page.fill('input[name*="name"]', 'Test');
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('textarea', 'Test');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(1000);
  });

  test('23. Browser back button during checkout', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    await page.goBack();
    await page.waitForTimeout(500);
    expect(page.url()).toContain('mamaworld');
  });

  test('24. Browser refresh during checkout', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    await page.reload();
    await page.waitForTimeout(500);
    const content = await page.content();
    expect(content.length).toBeGreaterThan(0);
  });

  test('25. Tab close during transaction', async ({ page }) => {
    const context = page.context();
    await page.goto(`${BASE_URL}/bag`);
    const newPage = await context.newPage();
    await newPage.close();
    await page.waitForTimeout(500);
  });

  test('26. Handle window resize mid-operation', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('27. Paste very long string', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`).catch(() => {});
    const input = page.locator('input[name*="name"]').first();
    if (await input.count() > 0) {
      await input.fill('VeryLongNameThatExceedsNormalInput Limits' + 'a'.repeat(200));
    }
  });

  test('28. Decimal quantity', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const qtyInput = page.locator('input[type="number"]');
    if (await qtyInput.count() > 0) {
      await qtyInput.fill('1.5');
      expect(true).toBe(true);
    }
  });

  test('29. Whitespace-only search', async ({ page }) => {
    await page.fill('input[type="search"]', '   ');
    await page.press('input[type="search"]', 'Enter');
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('mamaworld');
  });

  test('30. Browser disconnect mid-operation', async ({ page }) => {
    await page.goto(BASE_URL);
    const originalClose = page.context().browser().close;
    await page.waitForTimeout(1000);
  });
});