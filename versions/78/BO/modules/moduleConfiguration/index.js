const BOBasePage = require('../../BObasePage.js');

/**
 * BO module configuration page, base page for all specific module pages
 * @class
 * @extends BOBasePage
 */
class ModuleConfiguration extends BOBasePage {
  /**
   * @constructs
   * Creating module configuration page (selectors and static messages)
   */
  constructor() {
    super();

    this.pageTitle = 'Configure';

    // Selectors
    this.titleBlock = '.page-title';
    this.subtitleBlock = '.page-subtitle';
  }

  /**
   * Get page title
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getPageTitle(page) {
    return this.getTextContent(page, this.titleBlock);
  }

  /**
   * Get page subtitle
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getPageSubtitle(page) {
    return this.getTextContent(page, this.subtitleBlock);
  }
}

module.exports = new ModuleConfiguration();
