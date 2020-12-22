const BOBasePage = require('../../BObasePage.js');

class ModuleCatalog extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'Module selection •';
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
   * @param page
   * @param moduleTag, Tag of Module
   * @param moduleName, Name of module
   * @return {Promise<boolean>}
   */
  async searchModule(page, moduleTag, moduleName) {
    await page.type(this.searchModuleTagInput, moduleTag);
    await page.click(this.searchModuleButton);

    return this.elementVisible(page, this.moduleBloc(moduleName), 2000);
  }

  /**
   * Install Module and waiting for Successful massage
   * @param page
   * @param moduleName, Name of module
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
   * @param page
   * @param moduleName
   * @returns {Promise<void>}
   */
  async goToConfigurationPage(page, moduleName) {
    await this.clickAndWaitForNavigation(page, this.configureModuleButton(moduleName));
  }
}

module.exports = new ModuleCatalog();
