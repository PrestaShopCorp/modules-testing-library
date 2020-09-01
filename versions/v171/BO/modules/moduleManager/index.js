const v173ModuleManagerPage = require('@versions/v173/BO/modules/moduleManager');

class ModuleManager extends v173ModuleManagerPage.constructor {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();

    this.pageTitleH2 = 'h2.title';
  }

  /* @override methods */

  /**
   * @override
   * Get page title
   * @param page
   * @returns {Promise<string>}
   */
  async getPageTitle(page) {
    return this.getTextContent(page, this.pageTitleH2);
  }
}

module.exports = new ModuleManager();
