const BOBasePage = require('../../BObasePage.js');

/**
 * BO add product page
 * @class
 * @extends BOBasePage
 */
class AddProduct extends BOBasePage {
  /**
   * @constructs
   * Creating add product page (selectors and static messages)
   */
  constructor() {
    super();

    this.pageTitle = 'Product •';
    // Text Message
    this.settingUpdatedMessage = 'Settings updated.';
    this.duplicateSuccessfulMessage = 'Product successfully duplicated.';
    this.errorMessage = 'Unable to update settings.';

    // Selectors
    this.productNameInput = '#form_step1_name_1';
    this.productTypeSelect = '#form_step1_type_product';
    this.productReferenceInput = '#form_step6_reference';
    this.productQuantityInput = '#form_step1_qty_0_shortcut';
    this.productPriceAtiInput = '#form_step1_price_ttc_shortcut';
    this.saveProductButton = 'input#submit[value=\'Save\']';
    this.productOnlineSwitch = '.product-footer div.switch-input';
    this.productOnlineTitle = 'h2.for-switch.online-title';
    this.productShortDescriptionIframe = '#form_step1_description_short';
    this.productDescriptionIframe = '#form_step1_description';
    this.productTaxRuleSelect = '#step2_id_tax_rules_group_rendered';
    this.productDeleteLink = '.product-footer a.delete';
    this.dangerMessageShortDescription = '#form_step1_description_short .has-danger li';

    this.packItemsInput = '#form_step1_inputPackItems';
    this.packQuantityInput = '#form_step1_inputPackItems-curPackItemQty';
  }

  /*
  Methods
   */

  /**
   * Set value on tinyMce textarea
   * @param page {Page} Browser tab
   * @param selector {string} Selector of the tinymce input
   * @param value {string} Value to set on the input
   * @returns {Promise<void>}
   */
  async setValueOnTinymceInput(page, selector, value) {
    // Select all
    await page.click(`${selector} .mce-edit-area`, {clickCount: 3});

    // Delete all text
    await page.keyboard.press('Backspace');

    // Fill the text
    await page.keyboard.type(value);
  }

  /**
   * Set Name, type of product, Reference, price ATI, description and short description
   * @param page {Page} Browser tab
   * @param productData {json} Product attributes to set on inputs
   * @return {Promise<void>}
   */
  async setBasicSetting(page, productData) {
    await this.setValue(page, this.productNameInput, productData.name);
    await this.setValueOnTinymceInput(page, this.productDescriptionIframe, productData.description);
    await this.setValueOnTinymceInput(page, this.productShortDescriptionIframe, productData.summary);
    await this.selectByVisibleText(page, this.productTypeSelect, productData.type);
    await this.setValue(page, this.productReferenceInput, productData.reference);
    if (await this.elementVisible(page, this.productQuantityInput, 500)) {
      await this.setValue(page, this.productQuantityInput, productData.quantity.toString());
    }
    await this.selectByVisibleText(page, this.productTaxRuleSelect, productData.taxRule);
    await this.setValue(page, this.productPriceAtiInput, productData.price.toString());
  }

  /**
   * Set product online or offline
   * @param page {Page} Browser tab
   * @param wantedStatus {boolean} wanted status to set on product
   * @return {Promise<void>}
   */
  async setProductStatus(page, wantedStatus) {
    const isProductOnline = await this.getOnlineButtonStatus(page);

    if (isProductOnline !== wantedStatus) {
      await page.click(this.productOnlineSwitch);
      await this.closeGrowlMessage(page);
    }
  }

  /**
   * Save product and close the growl message linked to
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async saveProduct(page) {
    const [growlTextMessage] = await Promise.all([
      this.getGrowlMessageContent(page),
      page.click(this.saveProductButton),
    ]);

    await this.closeGrowlMessage(page);

    return growlTextMessage;
  }

  /**
   * Create basic product
   * @param page {Page} Browser tab
   * @param productData {json} Product attributes to set on inputs
   * @returns {Promise<string>}
   */
  async createEditBasicProduct(page, productData) {
    await this.setBasicSetting(page, productData);
    await this.setProductStatus(page, productData.status);

    return this.saveProduct(page);
  }

  /**
   * @override
   * Select, unselect checkbox
   * @param page {Page} Browser tab
   * @param checkboxSelector {string} selector of checkbox
   * @param valueWanted {boolean} true if we want to select checkBox, false otherwise
   * @return {Promise<void>}
   */
  async changeCheckboxValue(page, checkboxSelector, valueWanted = true) {
    if (valueWanted !== (await this.isCheckboxSelected(page, checkboxSelector))) {
      await page.$eval(checkboxSelector, el => el.click());
    }
  }

  /**
   * Delete product
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteProduct(page) {
    await Promise.all([
      this.waitForVisibleSelector(page, this.modalDialog),
      page.click(this.productDeleteLink),
    ]);
    await this.clickAndWaitForNavigation(page, this.modalDialogYesButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }


  /**
   * Get the error message when short description is too long
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getErrorMessageWhenSummaryIsTooLong(page) {
    return this.getTextContent(page, this.dangerMessageShortDescription);
  }

  /**
   * Get online product status
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  getOnlineButtonStatus(page) {
    return this.elementVisible(page, this.productOnlineTitle, 1000);
  }


  /**
   * Get product name from input
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getProductName(page) {
    return this.getAttributeContent(page, this.productNameInput, 'value');
  }

  /**
   * Set product
   * @param page {Page} Browser tab
   * @param productData {json} Product attributes to set on inputs
   * @returns {Promise<string>}
   */
  async setProduct(page, productData) {
    await this.setBasicSetting(page, productData);
    await this.setProductStatus(page, productData.status);
    return this.saveProduct(page);
  }
}

module.exports = new AddProduct();
