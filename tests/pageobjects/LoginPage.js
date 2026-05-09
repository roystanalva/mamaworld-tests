const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginPageUrl = '/login';
    this.emailInput = 'input[type="email"]';
    this.phoneInput = 'input[type="tel"]';
    this.passwordInput = 'input[type="password"]';
    this.loginButton = 'button:has-text("Login")';
    this.rememberMeCheckbox = 'input[type="checkbox"]';
    this.forgotPasswordLink = 'a:has-text("Forgot Password")';
    this.errorMessage = 'text=Invalid, text=incorrect, text=required';
  }

  async navigateToLogin() {
    await this.navigate(this.loginPageUrl);
  }

  async login(emailOrPhone, password) {
    if (emailOrPhone.includes('@')) {
      await this.fill(this.emailInput, emailOrPhone);
    } else {
      await this.fill(this.phoneInput, emailOrPhone);
    }
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async verifyLoginPage() {
    await this.waitForSelector(this.emailInput);
    return await this.isVisible(this.loginInput);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async clickForgotPassword() {
    await this.click(this.forgotPasswordLink);
  }
}

module.exports = { LoginPage };