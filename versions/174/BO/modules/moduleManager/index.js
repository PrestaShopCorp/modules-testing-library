const BOBasePage = require('../../BObasePage.js');

class ModuleManager extends BOBasePage {
  constructor() {
    super();

    this.pageTitle = 'Manage installed modules •';
    this.successfulEnableMessage = moduleTag => `Enable action on module ${moduleTag} succeeded.`;
    this.successfulDisableMessage = moduleTag => `Disable action on module ${moduleTag} succeeded.`;

    // Header selectors
    this.selectionSubTab = '#subtab-AdminModulesCatalog';

    // Selectors
    this.searchModuleTagInput = '#search-input-group input.pstaggerAddTagInput';
    this.searchModuleButton = '#module-search-button';
    this.allModulesBlock = '.module-item-list';
    this.moduleBlock = moduleName => `${this.allModulesBlock}[data-name='${moduleName}']`;
    this.enableModuleButton = moduleName => `${this.moduleBlock(moduleName)} button.module_action_menu_enable`;
    this.configureModuleButton = moduleName => `${this.moduleBlock(moduleName)} button.module_action_menu_configure`;
    this.actionsDropdownButton = moduleName => `${this.moduleBlock(moduleName)} button.dropdown-toggle`;

    // Status dropdown selectors
    this.statusDropdownMenu = 'div.ps-dropdown-menu[aria-labelledby=\'module-status-dropdown\']';
    this.statusDropdownItemLink = ref => `${this.statusDropdownMenu} ul li[data-status-ref='${ref}'] a`;

    // Categories selectors
    this.categoriesSelectDiv = '#categories';
    this.categoriesDropdownDiv = 'div.ps-dropdown-menu.dropdown-menu.module-category-selector';
    this.categoryDropdownItem = cat => `${this.categoriesDropdownDiv} li[data-category-display-name='${cat}']`;

    // Upload selectors
    this.uploadModuleButton = '#page-header-desc-configuration-add_module';
    this.uploadModuleModal = '#module-modal-import';
    this.uploadModuleModalCloseButton = '#module-modal-import-closing-cross';
    this.importDropZone = '#importDropzone';
    this.uploadModuleModalFileInput = `${this.importDropZone} input`;
    this.uploadModuleModalProcessing = `${this.importDropZone} > div.module-import-processing`;
    this.uploadModuleModalSuccess = `${this.importDropZone} > div.module-import-success`;

    // Disable selectors
    this.disableModuleButton = moduleName => `${this.moduleBlock(moduleName)} button.module_action_menu_disable`;
    this.disableModal = moduleTag => `#module-modal-confirm-${moduleTag}-disable`;
    this.confirmDisableModalLink = moduleTag => `${this.disableModal(moduleTag)} a.module_action_modal_disable`;
  }

  /*
  Methods
   */

  /**
   * Go to selection subTab
   * @param page
   * @return {Promise<void>}
   */
  async goToSelectionPage(page) {
    await this.clickAndWaitForNavigation(page, this.selectionSubTab);
  }

  /**
   * Search Module in Page module Catalog
   * @param page
   * @param moduleTag, Tag of Module
   * @param moduleName, Name of module
   * @return {Promise<void>}
   */
  async searchModule(page, moduleTag, moduleName) {
    await page.type(this.searchModuleTagInput, moduleTag);
    await page.click(this.searchModuleButton);

    return this.elementVisible(page, this.moduleBlock(moduleName), 10000);
  }

  /**
   * Click on button configure of a module
   * @param page
   * @param moduleName, Name of module
   * @return {Promise<void>}
   */
  async goToConfigurationPage(page, moduleName) {
    if (await this.elementNotVisible(page, this.configureModuleButton(moduleName), 1000)) {
      await Promise.all([
        page.click(this.actionsDropdownButton(moduleName)),
        this.waitForVisibleSelector(page, `${this.actionsDropdownButton(moduleName)}[aria-expanded='true']`),
      ]);
    }

    await this.clickAndWaitForNavigation(page, this.configureModuleButton(moduleName));
  }

  /**
   * Get status of module (enable/disable)
   * @param page
   * @param moduleName
   * @return {Promise<boolean>}
   */
  isModuleEnabled(page, moduleName) {
    return this.elementNotVisible(page, this.disableModuleButton(moduleName), 1000);
  }

  /**
   * Upload a module and returns a success or failure
   * @param page
   * @param filePath
   * @returns {Promise<boolean>}
   */
  async uploadModule(page, filePath) {
    await page.click(this.uploadModuleButton);
    await this.waitForVisibleSelector(page, this.uploadModuleModal);

    const handle = await page.$(this.uploadModuleModalFileInput);
    await handle.setInputFiles(filePath);

    await page.waitForSelector(this.uploadModuleModalProcessing, {state: 'hidden'});

    return this.elementVisible(page, this.uploadModuleModalSuccess, 2000);
  }

  /**
   * Close upload module modal
   * @param page
   * @return {Promise<void>}
   */
  async closeUploadModuleModal(page) {
    await page.click(this.uploadModuleModalCloseButton);
    await page.waitForSelector(this.uploadModuleModalCloseButton, {state: 'hidden'});
  }

  /**
   * Disable module
   * @param page
   * @param moduleTag
   * @param moduleName
   * @return {Promise<string>}
   */
  async disableModule(page, moduleTag, moduleName) {
    // Open dropdown of disable button is not displayed as first button
    if (await this.elementNotVisible(page, this.disableModuleButton(moduleName), 1000)) {
      await page.click(this.actionsDropdownButton(moduleName));
    }

    // Click on disable module and wait for modal to be displayed
    await Promise.all([
      page.click(this.disableModuleButton(moduleName)),
      this.waitForVisibleSelector(page, this.disableModal(moduleTag)),
    ]);

    // Confirm delete in modal and get successful message
    const [textResult] = await Promise.all([
      this.getGrowlMessageContent(page),
      page.click(this.confirmDisableModalLink(moduleTag)),
    ]);

    await this.closeGrowlMessage(page);

    return textResult;
  }

  /**
   * Enable module
   * @param page
   * @param moduleName
   * @return {Promise<string>}
   */
  async enableModule(page, moduleName) {
    const [textResult] = await Promise.all([
      this.getGrowlMessageContent(page),
      page.click(this.enableModuleButton(moduleName)),
    ]);

    await this.closeGrowlMessage(page);

    return textResult;
  }
}

module.exports = new ModuleManager();
