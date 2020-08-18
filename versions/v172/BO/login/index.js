const CommonLoginPage = require('@kernel/common/BO/login');

class Login extends CommonLoginPage.constructor {
  constructor() {
    super();

    // @override selectors
    this.submitLoginButton = 'button[name=\'submitLogin\']';
  }
}

module.exports = new Login();
