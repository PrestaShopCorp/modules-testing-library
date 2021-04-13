const CommonPage = require('../../commonPage');

/**
 * BO parent page, contains functions that can be used in every BO page
 * @class
 * @extends CommonPage
 */
class BOBasePage extends CommonPage {
  /**
   * @constructs
   * Setting up Selectors to use on all BO pages
   */
  constructor() {
    super();

    // Successful Messages
    this.successfulCreationMessage = 'Successful creation.';
    this.successfulUpdateMessage = 'Successful update.';
    this.successfulDeleteMessage = 'Successful deletion.';
    this.successfulMultiDeleteMessage = 'The selection has been successfully deleted.';

    // top navbar
    this.userProfileIconNonMigratedPages = '#employee_infos a';
    this.userProfileIcon = '#header_infos #header-employee-container';
    this.userProfileLogoutLink = 'a#header_logout';
    this.shopVersionBloc = '#shop_version';
    this.headerShopNameLink = '#header_shopname';

    // Header links
    this.helpButton = '#product_form_open_help';

    // left navbar
    this.dashboardLink = '#tab-AdminDashboard';
    // SELL
    // Orders
    this.ordersParentLink = 'li#subtab-AdminParentOrders';
    this.ordersLink = '#subtab-AdminOrders';
    // Invoices
    this.invoicesLink = '#subtab-AdminInvoices';
    // Credit slips
    this.creditSlipsLink = '#subtab-AdminSlip';
    // Delivery slips
    this.deliverySlipslink = '#subtab-AdminDeliverySlip';
    // Shopping carts
    this.shoppingCartsLink = '#subtab-AdminCarts';

    // Catalog
    this.catalogParentLink = 'li#subtab-AdminCatalog';
    // Products
    this.productsLink = '#subtab-AdminProducts';
    // Categories
    this.categoriesLink = '#subtab-AdminCategories';
    // Monitoring
    this.monitoringLink = '#subtab-AdminTracking';
    // Brands And Suppliers
    this.brandsAndSuppliersLink = '#subtab-AdminParentManufacturers';
    // files
    this.filesLink = '#subtab-AdminAttachments';
    // Discounts
    this.discountsLink = '#subtab-AdminParentCartRules';
    // Stocks
    this.stocksLink = '#subtab-AdminStockManagement';

    // Customers
    this.customersParentLink = 'li#subtab-AdminParentCustomer';
    this.customersLink = '#subtab-AdminCustomers';
    this.addressesLink = '#subtab-AdminAddresses';

    // Customer Service
    this.customerServiceParentLink = '#subtab-AdminParentCustomerThreads';
    this.customerServiceLink = '#subtab-AdminCustomerThreads';
    // Order Messages
    this.orderMessagesLink = '#subtab-AdminOrderMessage';
    // Merchandise returns
    this.merchandiseReturnsLink = '#subtab-AdminReturn';

    // Improve
    // Modules
    this.modulesParentLink = '#subtab-AdminParentModulesSf';
    this.moduleCatalogueLink = '#subtab-AdminParentModulesCatalog';
    this.moduleManagerLink = '#subtab-AdminModulesSf';

    // Design
    this.designParentLink = '#subtab-AdminParentThemes';
    // Theme & logo
    this.themeAndLogoLink = '#subtab-AdminThemesParent';
    // Theme Catalog
    this.themeCatalog = '#subtab-AdminThemesCatalog , #subtab-AdminPsMboTheme';
    // Pages
    this.pagesLink = '#subtab-AdminCmsContent';
    // Positions
    this.positionsLink = '#subtab-AdminModulesPositions';
    // Image settings
    this.imageSettingsLink = '#subtab-AdminImages';
    // Link widget
    this.linkWidgetLink = '#subtab-AdminLinkWidget';

    // Shipping
    this.shippingParentLink = '#subtab-AdminParentShipping';
    // Carriers
    this.carriersLink = '#subtab-AdminCarriers';
    // Preferences
    this.shippingPreferencesLink = '#subtab-AdminShipping';

    // Payment
    this.paymentParentLink = '#subtab-AdminParentPayment';
    // Payment methods
    this.paymentMethodsLink = '#subtab-AdminPayment';
    // Preferences
    this.paymentPreferencesLink = '#subtab-AdminPaymentPreferences';

    // International
    this.internationalParentLink = '#subtab-AdminInternational';
    // Localization
    this.localizationLink = '#subtab-AdminParentLocalization';
    // Locations
    this.locationLink = '#subtab-AdminParentCountries';
    // Taxes
    this.taxesLink = '#subtab-AdminParentTaxes';
    // Translations
    this.translationsLink = '#subtab-AdminTranslations';

    // Shop Parameters
    this.shopParametersParentLink = '#subtab-ShopParameters';
    // General
    this.shopParametersGeneralLink = '#subtab-AdminParentPreferences';
    // Order Settings
    this.orderSettingsLink = '#subtab-AdminParentOrderPreferences';
    // Product Settings
    this.productSettingsLink = '#subtab-AdminPPreferences';
    // Customer Settings
    this.customerSettingsLink = '#subtab-AdminParentCustomerPreferences';
    // Contact
    this.contactLink = '#subtab-AdminParentStores';
    // traffic and SEO
    this.trafficAndSeoLink = '#subtab-AdminParentMeta';
    // Search
    this.searchLink = '#subtab-AdminParentSearchConf';

    // Advanced Parameters
    this.advancedParametersLink = '#subtab-AdminAdvancedParameters';
    // Information
    this.informationLink = '#subtab-AdminInformation';
    // Performance
    this.performanceLink = '#subtab-AdminPerformance';
    // Administration
    this.administrationLink = '#subtab-AdminAdminPreferences';
    // E-mail
    this.emailLink = '#subtab-AdminEmails';
    // Import
    this.importLink = '#subtab-AdminImport';
    // Team
    this.teamLink = '#subtab-AdminParentEmployees';
    // Database
    this.databaseLink = '#subtab-AdminParentRequestSql';
    // logs
    this.logsLink = '#subtab-AdminLogs';
    // Webservice
    this.webserviceLink = '#subtab-AdminWebservice';
    // Multistore
    this.multistoreLink = '#subtab-AdminShopGroup';

    this.sideMenuActiveLink = link => `${link}.link-active`;

    // welcome module
    this.onboardingCloseButton = 'button.onboarding-button-shut-down';
    this.onboardingStopButton = 'a.onboarding-button-stop';

    // Growls
    this.growlDefaultDiv = '#growls-default';
    this.growlMessageBlock = `${this.growlDefaultDiv} .growl-message:last-of-type`;
    this.growlCloseButton = `${this.growlDefaultDiv} .growl-close`;

    // Alert Text
    this.alertBlock = 'div.alert';
    this.alertSuccessBlock = `${this.alertBlock}.alert-success`;
    this.alertDangerBlock = `${this.alertBlock}.alert-danger`;
    this.alertInfoBlock = `${this.alertBlock}.alert-info`;
    this.alertSuccessBlockParagraph = `${this.alertSuccessBlock} div.alert-text p`;
    this.alertDangerBlockParagraph = `${this.alertDangerBlock} div.alert-text p`;
    this.alertInfoBlockParagraph = `${this.alertInfoBlock} p.alert-text`;

    // Alert Box
    this.alertBoxBloc = 'div.alert-box';
    this.alertBoxTextSpan = `${this.alertBoxBloc} p.alert-text span`;
    this.alertBoxButtonClose = `${this.alertBoxBloc} button.close`;

    // Modal dialog
    this.confirmationModal = '#confirmation_modal.show';
    this.modalDialog = `${this.confirmationModal} .modal-dialog`;
    this.modalDialogYesButton = `${this.modalDialog} button.continue`;

    // Symfony Toolbar
    this.sfToolbarMainContentDiv = 'div[id*=\'sfToolbarMainContent\']';
    this.sfCloseToolbarLink = 'a[id*=\'sfToolbarHideButton\']';

    // Sidebar
    this.rightSidebar = '#right-sidebar';
    this.helpDocumentURL = `${this.rightSidebar} div.quicknav-scroller._fullspace object`;
  }

  /*
  Methods
   */
  /**
   * Open a subMenu if closed and click on a sublink
   * @param page {Page} Browser tab
   * @param parentSelector {string} String of the parent element on menu
   * @param linkSelector {string} String of the child element to click on
   * @returns {Promise<void>}
   */
  async goToSubMenu(page, parentSelector, linkSelector) {
    if (await this.elementNotVisible(page, `${parentSelector}.open`, 1000)) {
      // open the block
      await this.scrollTo(page, parentSelector);

      await Promise.all([
        page.click(parentSelector),
        this.waitForVisibleSelector(page, `${parentSelector}.open`),
      ]);
    }

    await this.scrollTo(page, linkSelector);
    await this.clickAndWaitForNavigation(page, linkSelector);
    await this.waitForVisibleSelector(page, this.sideMenuActiveLink(linkSelector));
  }

  /**
   * Returns to the dashboard then logout
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async logoutBO(page) {
    if (await this.elementVisible(page, this.userProfileIcon, 1000)) {
      await page.click(this.userProfileIcon);
    } else {
      await page.$eval(this.userProfileIconNonMigratedPages, el => el.click());
    }
    await this.waitForVisibleSelector(page, this.userProfileLogoutLink);
    await this.clickAndWaitForNavigation(page, this.userProfileLogoutLink);
  }

  /**
   * Close the onboarding modal if exists
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async closeOnboardingModal(page) {
    if (await this.elementVisible(page, this.onboardingCloseButton, 1000)) {
      await page.click(this.onboardingCloseButton);
      await this.waitForVisibleSelector(page, this.onboardingStopButton);
      await page.click(this.onboardingStopButton);
    }
  }

  /**
   * Click on View My Shop and wait for page to open in a new Tab
   * @param page {Page} Browser tab
   * @return FOPage, page opened
   */
  async viewMyShop(page) {
    return this.openLinkWithTargetBlank(page, this.headerShopNameLink);
  }

  /**
   * Set value on tinyMce textarea
   * @param page {Page} Browser tab
   * @param iFrameSelector {string} String to locate the iFrame
   * @param value {string} The value to put on input
   * @return {Promise<void>}
   */
  async setValueOnTinymceInput(page, iFrameSelector, value) {
    const args = {selector: iFrameSelector, vl: value};
    await page.evaluate(async (args) => {
      /* eslint-env browser */
      const iFrameElement = await document.querySelector(args.selector);
      const iFrameHtml = iFrameElement.contentDocument.documentElement;
      const textElement = await iFrameHtml.querySelector('body p');
      textElement.textContent = args.vl;
    }, args);
  }

  /**
   * Close symfony Toolbar
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async closeSfToolBar(page) {
    if (await this.elementVisible(page, `${this.sfToolbarMainContentDiv}[style='display: block;']`, 1000)) {
      await page.click(this.sfCloseToolbarLink);
    }
  }

  /**
   * Check if Submenu is visible
   * @param page {Page} Browser tab
   * @param parentSelector {string} String of the parent element on menu
   * @param linkSelector {string} String of the child element to click on
   * @return {Promise<boolean>}
   */
  async isSubmenuVisible(page, parentSelector, linkSelector) {
    if (await this.elementNotVisible(page, `${parentSelector}.open`, 1000)) {
      // Scroll before opening menu
      await this.scrollTo(page, parentSelector);

      await Promise.all([
        page.click(parentSelector),
        this.waitForVisibleSelector(page, `${parentSelector}.open`),
      ]);

      await this.waitForVisibleSelector(page, `${parentSelector}.open`);
    }
    return this.elementVisible(page, linkSelector, 1000);
  }

  /**
   * Get growl message content
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getGrowlMessageContent(page) {
    return this.getTextContent(page, this.growlMessageBlock, true, 30000);
  }

  /**
   * Close growl message and return its value
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async closeGrowlMessage(page) {
    // Close growl message if exist
    try {
      await page.click(this.growlCloseButton);
      await page.waitForSelector(this.growlMessageBlock, {state: 'hidden'});
    } catch (e) {
      // If element does not exist it's already not visible
    }
  }

  /**
   * Get error message from alert danger block
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getAlertDangerBlockParagraphContent(page) {
    return this.getTextContent(page, this.alertDangerBlockParagraph);
  }

  /**
   * Get text content of alert success block
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getAlertSuccessBlockContent(page) {
    return this.getTextContent(page, this.alertSuccessBlock);
  }

  /**
   * Get text content of alert success block paragraph
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getAlertSuccessBlockParagraphContent(page) {
    return this.getTextContent(page, this.alertSuccessBlockParagraph);
  }

  /**
   * Get text content of alert success block paragraph
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  getAlertInfoBlockParagraphContent(page) {
    return this.getTextContent(page, this.alertInfoBlockParagraph);
  }
}

module.exports = BOBasePage;
