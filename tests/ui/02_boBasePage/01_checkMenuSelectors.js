require('module-alias/register');

const {expect} = require('chai');
const helper = require('@utils/helpers');

// Get resolver
const VersionSelectResolver = require('@resolvers/versionSelectResolver');

const versionSelectResolver = new VersionSelectResolver(global.PS_VERSION);

// Import pages
const loginPage = versionSelectResolver.require('BO/login/index.js');
const dashboardPage = versionSelectResolver.require('BO/dashboard/index.js');

// Browser vars
let browserContext;
let page;

const menuSelectors = [
  {
    parent: dashboardPage.ordersParentLink,
    children: [
      {
        pageName: 'Orders',
        selector: dashboardPage.ordersLink,
      },
      {
        pageName: 'Invoices',
        selector: dashboardPage.invoicesLink,
      },
      {
        pageName: 'Credit Slips',
        selector: dashboardPage.creditSlipsLink,
      },
      {
        pageName: 'Delivery Slips',
        selector: dashboardPage.deliverySlipslink,
      },
      {
        pageName: 'Shopping Carts',
        selector: dashboardPage.shoppingCartsLink,
      },
    ],
  },
  {
    parent: dashboardPage.catalogParentLink,
    children: [
      {
        pageName: 'Products',
        selector: dashboardPage.productsLink,
      },
      {
        pageName: 'Categories',
        selector: dashboardPage.categoriesLink,
      },
      {
        pageName: 'Monitoring',
        selector: dashboardPage.monitoringLink,
      },
      {
        pageName: 'Brands',
        selector: dashboardPage.brandsAndSuppliersLink,
      },
      {
        pageName: 'Files',
        selector: dashboardPage.filesLink,
      },
      {
        pageName: 'Cart Rules',
        selector: dashboardPage.discountsLink,
      },
      {
        pageName: 'Stock',
        selector: dashboardPage.stocksLink,
      },
    ],
  },
  {
    parent: dashboardPage.customersParentLink,
    children: [
      {
        pageName: 'Customers',
        selector: dashboardPage.customersLink,
      },
      {
        pageName: 'Addresses',
        selector: dashboardPage.addressesLink,
      },
    ],
  },
  {
    parent: dashboardPage.customerServiceParentLink,
    children: [
      {
        pageName: 'Customer Service',
        selector: dashboardPage.customerServiceLink,
      },
      {
        pageName: 'Order Messages',
        selector: dashboardPage.orderMessagesLink,
      },
      {
        pageName: 'Merchandise Returns',
        selector: dashboardPage.merchandiseReturnsLink,
      },
    ],
  },
  {
    parent: dashboardPage.modulesParentLink,
    children: [
      {
        pageName: 'Manage',
        selector: dashboardPage.moduleManagerLink,
      },
      {
        pageName: 'Modules catalog',
        selector: dashboardPage.moduleCatalogueLink,
      },
    ],
  },
  {
    parent: dashboardPage.designParentLink,
    children: [
      {
        pageName: 'Theme & Logo',
        selector: dashboardPage.themeAndLogoLink,
      },
      {
        pageName: 'Theme',
        selector: dashboardPage.themeCatalog,
      },
      {
        pageName: 'Pages',
        selector: dashboardPage.pagesLink,
      },
      {
        pageName: 'Positions',
        selector: dashboardPage.positionsLink,
      },
      {
        pageName: 'Image Settings',
        selector: dashboardPage.imageSettingsLink,
      },
    ],
  },
  {
    parent: dashboardPage.shippingParentLink,
    children: [
      {
        pageName: 'Carriers',
        selector: dashboardPage.carriersLink,
      },
      {
        pageName: 'Preferences',
        selector: dashboardPage.shippingPreferencesLink,
      },
    ],
  },
  {
    parent: dashboardPage.paymentParentLink,
    children: [
      {
        pageName: 'Payment Methods',
        selector: dashboardPage.paymentMethodsLink,
      },
      {
        pageName: 'Preferences',
        selector: dashboardPage.paymentPreferencesLink,
      },
    ],
  },
  {
    parent: dashboardPage.internationalParentLink,
    children: [
      {
        pageName: 'Localization',
        selector: dashboardPage.localizationLink,
      },
      {
        pageName: 'Zones',
        selector: dashboardPage.locationLink,
      },
      {
        pageName: 'Taxes',
        selector: dashboardPage.taxesLink,
      },
      {
        pageName: 'Translations',
        selector: dashboardPage.translationsLink,
      },
    ],
  },
  {
    parent: dashboardPage.shopParametersParentLink,
    children: [
      {
        pageName: 'Preferences',
        selector: dashboardPage.shopParametersGeneralLink,
      },
      {
        pageName: 'Order Settings',
        selector: dashboardPage.orderSettingsLink,
      },
      {
        pageName: 'Product Settings',
        selector: dashboardPage.productSettingsLink,
      },
      {
        pageName: 'Customers',
        selector: dashboardPage.customerSettingsLink,
      },
      {
        pageName: 'Contacts',
        selector: dashboardPage.contactLink,
      },
      {
        pageName: 'SEO & URLs',
        selector: dashboardPage.trafficAndSeoLink,
      },
      {
        pageName: 'Search',
        selector: dashboardPage.searchLink,
      },
    ],
  },
  {
    parent: dashboardPage.advancedParametersLink,
    children: [
      {
        pageName: 'Information',
        selector: dashboardPage.informationLink,
      },
      {
        pageName: 'Performance',
        selector: dashboardPage.performanceLink,
      },
      {
        pageName: 'Administration',
        selector: dashboardPage.administrationLink,
      },
      {
        pageName: 'E-mail',
        selector: dashboardPage.emailLink,
      },
      {
        pageName: 'Import',
        selector: dashboardPage.importLink,
      },
      {
        pageName: 'Employees',
        selector: dashboardPage.teamLink,
      },
      {
        pageName: 'SQL Manager',
        selector: dashboardPage.databaseLink,
      },
      {
        pageName: 'Logs',
        selector: dashboardPage.logsLink,
      },
      {
        pageName: 'Webservice',
        selector: dashboardPage.webserviceLink,
      },
    ],
  },
];

describe('Check Menu selectors in BO', async () => {
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);

    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  it('should log in to BO', async () => {
    await loginPage.goTo(page, global.BO.URL);

    await loginPage.login(page);
    await dashboardPage.closeOnboardingModal(page);

    const pageTitle = await dashboardPage.getPageTitle(page);
    await expect(pageTitle).to.contain(dashboardPage.pageTitle);
  });

  menuSelectors.forEach((menuSelector) => {
    menuSelector.children.forEach((child) => {
      it(`should go to ${child.pageName} page`, async () => {
        await dashboardPage.goToSubMenu(
          page,
          menuSelector.parent,
          child.selector,
        );

        const pageTitle = await dashboardPage.getPageTitle(page);
        await expect(pageTitle.toLowerCase()).to.contain(child.pageName.toLowerCase());
      });
    });
  });
});
