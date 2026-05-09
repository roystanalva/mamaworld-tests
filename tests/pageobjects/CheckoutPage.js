const { BasePage } = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutPageUrl = '/checkout';
    this.nameInput = 'input[name*="name"]';
    this.addressInput = 'input[name*="address"]';
    this.cityInput = 'input[name*="city"]';
    this.pincodeInput = 'input[name*="pincode"]';
    this.phoneInput = 'input[type="tel"]';
    this.emailInput = 'input[type="email"]';
    this.codOption = 'text=COD, text=Cash on Delivery';
    this.cardOption = 'text=Card';
    this.netbankingOption = 'text=Net Banking';
    this.upiOption = 'text=UPI';
    this.placeOrderButton = 'button:has-text("Place Order")';
    this.orderSummary = 'text=Order, text=Summary';
    this.termsCheckbox = 'input[type="checkbox"]';
  }

  async navigateToCheckout() {
    await this.navigate(this.checkoutPageUrl);
  }

  async fillShippingAddress(address) {
    await this.fill(this.nameInput, address.name);
    await this.fill(this.addressInput, address.address);
    await this.fill(this.cityInput, address.city);
    await this.fill(this.pincodeInput, address.pincode);
    await this.fill(this.phoneInput, address.phone);
    await this.fill(this.emailInput, address.email);
  }

  async selectPaymentMethod(method) {
    switch (method.toLowerCase()) {
      case 'cod':
        await this.click(this.codOption);
        break;
      case 'card':
        await this.click(this.cardOption);
        break;
      case 'netbanking':
        await this.click(this.netbankingOption);
        break;
      case 'upi':
        await this.click(this.upiOption);
        break;
    }
  }

  async acceptTerms() {
    await this.click(this.termsCheckbox);
  }

  async placeOrder() {
    await this.click(this.placeOrderButton);
  }
}

module.exports = { CheckoutPage };