const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
    this.baseURL = 'https://mamaworld.in';
  }

  async navigate(path = '') {
    await this.page.goto(`${this.baseURL}${path}`, { waitUntil: 'networkidle' });
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async fill(selector, value) {
    await this.page.fill(selector, value);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async waitForSelector(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async getAttribute(selector, attribute) {
    return await this.page.getAttribute(selector, attribute);
  }

  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async press(key) {
    await this.page.keyboard.press(key);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async waitForLoadState(state = 'networkidle') {
    await this.page.waitForLoadState(state);
  }

  async scrollTo(selector) {
    await this.page.evaluate((el) => {
      el.scrollIntoView();
    }, await this.page.$(selector));
  }

  async hover(selector) {
    await this.page.hover(selector);
  }

  async getCount(selector) {
    return await this.page.locator(selector).count();
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `tests/reports/screenshots/${name}.png` });
  }
}

module.exports = { BasePage };