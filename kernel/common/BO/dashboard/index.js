require('module-alias/register');
const BOBasePage = require('@kernel/common/BO/BObasePage');

class Dashboard extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'Dashboard • ';
  }

  /*
  Methods
   */
}

module.exports = new Dashboard();
