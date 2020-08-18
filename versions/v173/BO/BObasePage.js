const CommonBOBasePage = require('@kernel/common/BO/BObasePage');

module.exports = class BOBasePage extends CommonBOBasePage {
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
    if (await this.elementNotVisible(page, `${parentSelector}.-active`, 1000)) {
      // open the block
      await this.scrollTo(page, parentSelector);

      await Promise.all([
        page.hover(parentSelector),
        this.waitForVisibleSelector(page, `${parentSelector}.hover`),
      ]);
    }

    await this.clickAndWaitForNavigation(page, linkSelector);
    await this.waitForVisibleSelector(page, this.sideMenuActiveLink(parentSelector));
  }
};
