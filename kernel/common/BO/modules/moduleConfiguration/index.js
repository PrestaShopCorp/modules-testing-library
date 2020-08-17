require('module-alias/register');
const VersionSelectResolver = require('@resolvers/VersionSelectResolver');

const versionSelectResolver = new VersionSelectResolver(global.INSTALL.PS_VERSION);
const BOBasePage = versionSelectResolver.require('kernel/common/BO/BObasePage.js');

class ModuleConfiguration extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'Configure';

    // Selectors
    this.titleBlock = '.page-title';
    this.subtitleBlock = '.page-subtitle';
  }

  /**
   * Get page title
   * @param page
   * @return {Promise<string>}
   */
  getPageTitle(page) {
    return this.getTextContent(page, this.titleBlock);
  }

  /**
   * Get page subtitle
   * @param page
   * @return {Promise<string>}
   */
  getPageSubtitle(page) {
    return this.getTextContent(page, this.subtitleBlock);
  }
}

module.exports = new ModuleConfiguration();
