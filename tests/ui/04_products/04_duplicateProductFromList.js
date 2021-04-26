require('module-alias/register');

const {expect} = require('chai');

// Get resolver
const VersionSelectResolver = require('@resolvers/versionSelectResolver');

const versionSelectResolver = new VersionSelectResolver(global.PS_VERSION);

// Import utils
const helper = require('@utils/helpers');

// Import pages
const loginPage = versionSelectResolver.require('BO/login');
const dashboardPage = versionSelectResolver.require('BO/dashboard');
const productsPage = versionSelectResolver.require('BO/catalog/products');
const addProductPage = versionSelectResolver.require('BO/catalog/products/add.js');

// Import data
const {Products} = require('@data/demo/products');

let browserContext;
let page;

let numberOfProducts = 0;

/*
Go to products page
Filter products by name
Duplicate product
Filter by name of the duplicated product
Delete the duplicated product
*/

describe('Duplicate product from list', async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  it('should login in BO', async () => {
    await loginPage.goTo(page, global.BO.URL);
    const loginPageTitle = await loginPage.getPageTitle(page);
    await expect(loginPageTitle).to.contains(loginPage.pageTitle);

    await loginPage.login(page);
    await dashboardPage.closeOnboardingModal(page);

    const dashboardPageTitle = await dashboardPage.getPageTitle(page);
    await expect(dashboardPageTitle).to.contains(dashboardPage.pageTitle);
  });

  it('should go to products page', async () => {
    await dashboardPage.goToSubMenu(
      page,
      dashboardPage.catalogParentLink,
      dashboardPage.productsLink,
    );

    await productsPage.closeSfToolBar(page);

    const pageTitle = await productsPage.getPageTitle(page);
    await expect(pageTitle).to.contains(productsPage.pageTitle);
  });

  it('should reset all filters and get number of products', async () => {
    numberOfProducts = await productsPage.resetAndGetNumberOfLines(page);
    await expect(numberOfProducts).to.be.above(0);
  });

  it(`should filter product by name '${Products.demo_5.name}'`, async () => {
    await productsPage.filterProducts(page, 'name', Products.demo_5.name);

    const textColumn = await productsPage.getProductNameFromList(page, 1);
    await expect(textColumn).to.contains(Products.demo_5.name);
  });

  it('should duplicate product', async () => {
    // Duplicate product from list
    const textResult = await productsPage.duplicateProduct(page, 1);
    await expect(textResult).to.contain(addProductPage.duplicateSuccessfulMessage);
  });

  it('should check duplicated product name', async () => {
    const productName = await addProductPage.getProductName(page);
    await expect(productName).to.contain(`copy of ${Products.demo_5.name}`);
  });

  it('should delete duplicated product', async () => {
    const textResult = await addProductPage.deleteProduct(page);
    await expect(textResult).to.contain(productsPage.productDeletedSuccessfulMessage);
  });

  it('should reset all filters', async () => {
    const numberOfProductsAfterReset = await productsPage.resetAndGetNumberOfLines(page);
    await expect(numberOfProductsAfterReset).to.be.equal(numberOfProducts);
  });
});
