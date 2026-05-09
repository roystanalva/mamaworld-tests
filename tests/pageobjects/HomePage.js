const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.logo = 'img[alt*="Mama"]';
    this.navMenu = 'nav, header';
    this.homeLink = 'a:has-text("HOME")';
    this.nightWearLink = 'a:has-text("MATERNITY NIGHT WEAR")';
    this.coordSetLink = 'a:has-text("MATERNITY CO-ORD SET")';
    this.newArrivalsLink = 'a:has-text("NEW ARRIVALS")';
    this.bestSellerLink = 'a:has-text("BESTSELLER")';
    this.searchInput = 'input[type="search"]';
    this.bagLink = 'a:has-text("Bag")';
    this.footer = 'footer';
    this.phoneContact = 'text=9820584377';
    this.whatsappContact = 'text=WhatsApp';
    this.emailContact = 'text=sdnenwani@gmail.com';
    this.addressContact = 'text=Vikhroli';
  }

  async verifyLogoVisible() {
    await this.waitForSelector(this.logo);
    return await this.isVisible(this.logo);
  }

  async verifyNavigationMenu() {
    await this.waitForSelector(this.navMenu);
    return await this.isVisible(this.navMenu);
  }

  async clickHomeLink() {
    await this.click(this.homeLink);
  }

  async clickNightWearLink() {
    await this.click(this.nightWearLink);
  }

  async clickCoordSetLink() {
    await this.click(this.coordSetLink);
  }

  async searchForProduct(query) {
    await this.fill(this.searchInput, query);
    await this.press('Enter');
  }

  async navigateToBag() {
    await this.click(this.bagLink);
  }

  async verifyFooterVisible() {
    return await this.isVisible(this.footer);
  }

  async getContactPhone() {
    return await this.getText(this.phoneContact);
  }
}

module.exports = { HomePage };