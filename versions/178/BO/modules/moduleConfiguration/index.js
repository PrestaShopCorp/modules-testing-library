const BOBasePage = require('../../BObasePage.js');

class ModuleConfiguration extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'Configure';

    // Selectors
    this.titleBlock = 'h2.page-title';
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
