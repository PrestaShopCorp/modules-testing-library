const BOBasePage = require('../../BObasePage.js');

class ModuleCatalog extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'Modules catalog •';
    this.installMessageSuccessful = moduleTag => `Install action on module ${moduleTag} succeeded.`;

    // Selectors
    this.searchModuleTagInput = '#search-input-group input.pstaggerAddTagInput';
    this.searchModuleButton = '#module-search-button';
    this.moduleBloc = moduleName => `#modules-list-container-all div[data-name='${moduleName}']:not([style])`;
    this.installModuleButton = moduleName => `${this.moduleBloc(moduleName)} form>button.module_action_menu_install`;
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
}

module.exports = new ModuleCatalog();
