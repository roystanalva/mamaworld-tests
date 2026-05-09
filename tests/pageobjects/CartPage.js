const { BasePage } = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartPageUrl = '/bag';
    this.emptyCartMessage = 'text=empty, text=No items';
    this.quantityInput = 'input[type="number"]';
    this.removeButton = 'button:has-text("Remove")';
    this.subtotalText = 'text=Subtotal';
    this.shippingText = 'text=Shipping';
    this.totalText = 'text=Total';
    this.couponInput = 'input[name*="coupon"]';
    this.applyCouponButton = 'button:has-text("Apply")';
    this.checkoutButton = 'button:has-text("Checkout")';
    this.continueShoppingButton = 'a:has-text("Continue Shopping")';
  }

  async navigateToCart() {
    await this.navigate(this.cartPageUrl);
  }

  async verifyEmptyCartMessage() {
    await this.waitForSelector(this.emptyCartMessage);
    return await this.isVisible(this.emptyCartMessage);
  }

  async updateQuantity(quantity) {
    await this.fill(this.quantityInput, quantity.toString());
  }

  async removeItem() {
    await this.click(this.removeButton);
  }

  async applyCoupon(couponCode) {
    await this.fill(this.couponInput, couponCode);
    await this.click(this.applyCouponButton);
  }

  async proceedToCheckout() {
    await this.click(this.checkoutButton);
  }

  async continueShopping() {
    await this.click(this.continueShoppingButton);
  }

  async getSubtotal() {
    return await this.getText(this.subtotalText);
  }

  async getTotal() {
    return await this.getText(this.totalText);
  }
}

module.exports = { CartPage };