const v173BOBasePage = require('@versions/v173/BO/BObasePage');

module.exports = class BOBasePage extends v173BOBasePage {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Open a subMenu if closed and click on a sublink
   * @param page
   * @param parentSelector
   * @param linkSelector
   * @returns {Promise<void>}
   */
  async goToSubMenu(page, parentSelector, linkSelector) {
    await this.clickAndWaitForNavigation(page, this.dashboardLink);

    if (await this.elementNotVisible(page, `${parentSelector}.-active`, 1000)) {
      // open the block
      await this.scrollTo(page, parentSelector);

      await Promise.all([
        page.hover(parentSelector),
        this.waitForVisibleSelector(page, `${parentSelector}.hover`),
      ]);
    }

    await this.clickAndWaitForNavigation(page, linkSelector);
  }
};
