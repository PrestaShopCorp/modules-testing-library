const BOBasePage = require('../../BObasePage.js');

/**
 * BO module catalog page
 * @class
 * @extends BOBasePage
 */
class ModuleCatalog extends BOBasePage {
  /**
   * @constructs
   * Creating module catalog page (selectors and static messages)
   */
  constructor() {
    super();

    this.pageTitle = 'Modules catalog •';
    this.installMessageSuccessful = moduleTag => `Install action on module ${moduleTag} succeeded.`;

    // Selectors
    this.searchModuleTagInput = '#search-input-group input.pstaggerAddTagInput';
    this.searchModuleButton = '#module-search-button';
    this.moduleBloc = moduleName => `#modules-list-container-all div[data-name='${moduleName}']:not([style])`;
    this.installModuleButton = moduleName => `${this.moduleBloc(moduleName)} form>button.module_action_menu_install`;
    this.configureModuleButton = moduleName => `${this.moduleBloc(moduleName)} div.module-actions a[href*='configure']`;
  }

  /*
  Methods
   */

  /**
   * Search Module in Page module Catalog
   * @param page {Page} Browser tab
   * @param moduleTag {string} Tag of the module
   * @param moduleName {string} Name of the module
   * @return {Promise<boolean>}
   */
  async searchModule(page, moduleTag, moduleName) {
    await page.type(this.searchModuleTagInput, moduleTag);
    await page.click(this.searchModuleButton);

    return this.elementVisible(page, this.moduleBloc(moduleName), 2000);
  }

  /**
   * Install Module and waiting for successful massage
   * @param page {Page} Browser tab
   * @param moduleName {string} Name of the module
   * @returns {Promise<string>}
   */
  async installModule(page, moduleName) {
    if (await this.elementNotVisible(page, this.moduleBloc(moduleName), 2000)) {
      throw new Error('Can\'t found the module');
    } else if (await this.elementNotVisible(page, this.installModuleButton(moduleName), 2000)) {
      throw new Error('Module already installed');
    }

    await page.click(this.installModuleButton(moduleName));
    return this.getTextContent(page, this.growlMessageBlock);
  }

  /**
   * Go to module configuration page
   * @param page {Page} Browser tab
   * @param moduleName {string} Name of the module
   * @returns {Promise<void>}
   */
  async goToConfigurationPage(page, moduleName) {
    await this.clickAndWaitForNavigation(page, this.configureModuleButton(moduleName));
  }
}

module.exports = new ModuleCatalog();
