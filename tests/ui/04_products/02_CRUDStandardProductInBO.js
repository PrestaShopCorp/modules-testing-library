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
const ProductFaker = require('@data/faker/product');

const productToCreate = {
  type: 'Standard product',
  productHasCombinations: false,
};
const productData = new ProductFaker(productToCreate);
const editedProductData = new ProductFaker(productToCreate);


let browserContext;
let page;

// Create, read, update and delete Standard product in BO
describe('Create, read, update and delete Standard product in BO', async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  // Steps
  it('should login in BO', async () => {
    await loginPage.goTo(page, global.BO.URL);
    const loginPageTitle = await loginPage.getPageTitle(page);
    await expect(loginPageTitle).to.contains(loginPage.pageTitle);

    await loginPage.login(page);
    await dashboardPage.closeOnboardingModal(page);

    const dashboardPageTitle = await dashboardPage.getPageTitle(page);
    await expect(dashboardPageTitle).to.contains(dashboardPage.pageTitle);
  });

  it('should go to Products page', async () => {
    await dashboardPage.goToSubMenu(
      page,
      dashboardPage.catalogParentLink,
      dashboardPage.productsLink,
    );

    await productsPage.closeSfToolBar(page);
    const pageTitle = await productsPage.getPageTitle(page);
    await expect(pageTitle).to.contains(productsPage.pageTitle);
  });

  it('should reset all filters', async () => {
    await productsPage.resetFilterCategory(page);
    const numberOfProducts = await productsPage.resetAndGetNumberOfLines(page);
    await expect(numberOfProducts).to.be.above(0);
  });

  it('should create Product', async () => {
    await productsPage.goToAddProductPage(page);
    const createProductMessage = await addProductPage.createEditBasicProduct(page, productData);
    await expect(createProductMessage).to.equal(addProductPage.settingUpdatedMessage);
  });

  it('should edit Product', async () => {
    const createProductMessage = await addProductPage.createEditBasicProduct(page, editedProductData);
    await expect(createProductMessage).to.equal(addProductPage.settingUpdatedMessage);
  });

  it('should delete Product and be on product list page', async () => {
    const testResult = await addProductPage.deleteProduct(page);
    await expect(testResult).to.equal(productsPage.productDeletedSuccessfulMessage);

    const pageTitle = await productsPage.getPageTitle(page);
    await expect(pageTitle).to.contains(productsPage.pageTitle);
  });
});
