require('module-alias/register');

const VersionSelectResolver = require('@resolvers/versionSelectResolver');

const versionSelectResolver = new VersionSelectResolver(global.INSTALL.PS_VERSION);
const BOBasePage = versionSelectResolver.require('BO/BObasePage.js');

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
