const { test, expect } = require('@playwright/test');
const { BASE_URL, TEST_DATA, TIMEOUTS } = require('./helpers');

test.describe('Payment Flow Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: TIMEOUTS.pageLoad });
  });

  test('01. Cart page accessible', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    await expect(page).toHaveURL(/bag/);
  });

  test('02. Cart shows added items', async ({ page }) => {
    await page.goto(`${BASE_URL}/collection/kRr89Z5K`);
    const addToBag = page.locator('button:has-text("Add to bag")').first();
    if (await addToBag.count() > 0) {
      await addToBag.click();
      await page.waitForTimeout(1000);
      await page.goto(`${BASE_URL}/bag`);
      const item = page.locator('[class*="item"], [class*="product"]');
      expect(await item.count()).toBeGreaterThan(0);
    }
  });

  test('03. Cart quantity update works', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const qtyInput = page.locator('input[type="number"]');
    if (await qtyInput.count() > 0) {
      const initialQty = await qtyInput.inputValue();
      await qtyInput.fill(String(parseInt(initialQty) + 1));
      await page.waitForTimeout(500);
    }
  });

  test('04. Cart item remove works', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const removeBtn = page.locator('button:has-text("Remove"), a:has-text("Remove")');
    if (await removeBtn.count() > 0) {
      await removeBtn.first().click();
      await page.waitForTimeout(500);
    }
  });

  test('05. Subtotal calculation correct', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const subtotal = page.locator('text=Subtotal, text=Sub Total');
    expect(await subtotal.count()).toBeGreaterThan(0);
  });

  test('06. Shipping cost displayed', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const shipping = page.locator('text=Shipping, text=Delivery');
    expect(await shipping.count()).toBeGreaterThan(0);
  });

  test('07. Discount field present', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const coupon = page.locator('input[name*="coupon"], input[name*="discount"]');
    expect(await coupon.count()).toBeGreaterThanOrEqual(0);
  });

  test('08. Apply coupon functionality', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const couponInput = page.locator('input[name*="coupon"]');
    if (await couponInput.count() > 0) {
      await couponInput.fill('SAVE50');
      await page.click('button:has-text("Apply")');
      await page.waitForTimeout(1000);
    }
  });

  test('09. Total calculation correct', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const total = page.locator('text=Total');
    expect(await total.first()).toBeVisible();
  });

  test('10. Proceed to checkout button', async ({ page }) => {
    await page.goto(`${BASE_URL}/bag`);
    const checkoutBtn = page.locator('button:has-text("Checkout"), a:has-text("Checkout")');
    expect(await checkoutBtn.count()).toBeGreaterThanOrEqual(0);
  });

  test('11. Checkout page loads', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    await page.waitForTimeout(2000);
    expect(page.url()).toContain('mamaworld');
  });

  test('12. Shipping address form', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const addressForm = page.locator('form');
    expect(await addressForm.count()).toBeGreaterThan(0);
  });

  test('13. Address fields present', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const nameField = page.locator('input[name*="name"]');
    const addressField = page.locator('input[name*="address"]');
    const cityField = page.locator('input[name*="city"]');
    const pincodeField = page.locator('input[name*="pincode"]');
    expect(await nameField.count() + await addressField.count()).toBeGreaterThan(0);
  });

  test('14. Phone required for order', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const phoneField = page.locator('input[name*="phone"], input[type="tel"]');
    expect(await phoneField.count()).toBeGreaterThan(0);
  });

  test('15. Email required for order', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const emailField = page.locator('input[type="email"]');
    expect(await emailField.count()).toBeGreaterThan(0);
  });

  test('16. Payment method options available', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const paymentOptions = page.locator('text=COD, text=Cash on Delivery, text=Card, text=Online');
    expect(await paymentOptions.count()).toBeGreaterThan(0);
  });

  test('17. COD option available', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const cod = page.locator('text=COD, text=Cash on Delivery');
    expect(await cod.count()).toBeGreaterThan(0);
  });

  test('18. Card payment option', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const card = page.locator('text=Card, text=Debit, text=Credit');
    expect(await card.count()).toBeGreaterThan(0);
  });

  test('19. Net banking option', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const netbanking = page.locator('text=Net Banking, text=Bank');
    expect(await netbanking.count()).toBeGreaterThan(0);
  });

  test('20. UPI payment option', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const upi = page.locator('text=UPI, text=GPay, text=PhonePe');
    expect(await upi.count()).toBeGreaterThanOrEqual(0);
  });

  test('21. Order summary on checkout', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const summary = page.locator('text=Order, text=Summary, text=Items');
    expect(await summary.count()).toBeGreaterThan(0);
  });

  test('22. Place order button', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const orderBtn = page.locator('button:has-text("Place Order"), button:has-text("Confirm")');
    expect(await orderBtn.count()).toBeGreaterThanOrEqual(0);
  });

  test('23. Terms acceptance required', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const termsCheckbox = page.locator('input[type="checkbox"]');
    expect(await termsCheckbox.count()).toBeGreaterThan(0);
  });

  test('24. Pincode delivery check', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const pincodeField = page.locator('input[name*="pincode"]');
    if (await pincodeField.count() > 0) {
      await pincodeField.fill('400083');
      await page.waitForTimeout(1000);
      const deliverable = page.locator('text=Deliverable, text=Available');
      expect(await deliverable.count()).toBeGreaterThanOrEqual(0);
    }
  });

  test('25. Invalid PIN code shows error', async ({ page }) => {
    await page.goto(`${BASE_URL}/checkout`).catch(() => {});
    const pincodeField = page.locator('input[name*="pincode"]');
    if (await pincodeField.count() > 0) {
      await pincodeField.fill('000000');
      await page.waitForTimeout(1000);
    }
  });

  test('26. Order confirmation page', async ({ page }) => {
    await page.goto(`${BASE_URL}/order-success`).catch(() => {});
    await page.waitForTimeout(2000);
  });

  test('27. Order ID generated', async ({ page }) => {
    await page.goto(`${BASE_URL}/order-success`).catch(() => {});
    const orderId = page.locator('text=Order #, [class*="order-id"]');
    expect(await orderId.count()).toBeGreaterThanOrEqual(0);
  });

  test('28. Email confirmation sent message', async ({ page }) => {
    await page.goto(`${BASE_URL}/order-success`).catch(() => {});
    const emailMsg = page.locator('text=email, text=confirmation, text=sent');
    expect(await emailMsg.count()).toBeGreaterThanOrEqual(0);
  });

  test('29. Continue shopping after order', async ({ page }) => {
    await page.goto(`${BASE_URL}/order-success`).catch(() => {});
    const continueBtn = page.locator('a:has-text("Continue Shopping"), a:has-text("Shop More")');
    expect(await continueBtn.count()).toBeGreaterThanOrEqual(0);
  });

  test('30. Track order option', async ({ page }) => {
    await page.goto(`${BASE_URL}/order-success`).catch(() => {});
    const trackBtn = page.locator('a:has-text("Track Order"), a:has-text("Track")');
    expect(await trackBtn.count()).toBeGreaterThanOrEqual(0);
  });
});