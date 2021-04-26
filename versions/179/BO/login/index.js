const BOBasePage = require('../BObasePage.js');

/**
 * BO dashboard page
 * @class
 * @extends BOBasePage
 */
class Login extends BOBasePage {
  /**
   * @constructs
   * Creating login page (selectors and static messages)
   */
  constructor() {
    super();

    this.pageTitle = 'PrestaShop';
    this.loginErrorText = 'The employee does not exist, or the password provided is incorrect.';

    // Login header selectors
    this.loginHeaderBlock = '#login-header';
    this.psVersionBlock = `${this.loginHeaderBlock} div.text-center`;

    // Login Form selectors
    this.emailInput = '#email';
    this.passwordInput = '#passwd';
    this.submitLoginButton = '#submit_login';
    this.alertDangerDiv = '#error';
    this.alertDangerTextBlock = `${this.alertDangerDiv} li`;
  }

  /*
  Methods
   */

  /**
   * Enter credentials and submit login form
   * @param page {Page} Browser tab
   * @param email {string} Email to set for login
   * @param password {string} Password to set for login
   * @param waitForNavigation {boolean} False if login should fail (No navigation needed)
   * @returns {Promise<void>}
   */
  async login(page, email = global.BO.EMAIL, password = global.BO.PASSWD, waitForNavigation = true) {
    await this.setValue(page, this.emailInput, email);
    await this.setValue(page, this.passwordInput, password);

    // Wait for navigation if login is successful
    if (waitForNavigation) {
      await this.clickAndWaitForNavigation(page, this.submitLoginButton);
    } else {
      await page.click(this.submitLoginButton);
    }
  }

  /**
   * Get login error
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getLoginError(page) {
    return this.getTextContent(page, this.alertDangerTextBlock);
  }

  /**
   * Get prestashop version from login page
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getPrestashopVersion(page) {
    return this.getTextContent(page, this.psVersionBlock);
  }
}

module.exports = new Login();
