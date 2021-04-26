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

const ProductFaker = require('@data/faker/product');

const productToCreate = {
  type: 'Standard product',
  productHasCombinations: false,
};
const productData = new ProductFaker(productToCreate);

let browserContext;
let page;


// Create Standard product in BO and Delete it with DropDown Menu
describe('Create Standard product in BO and Delete it with DropDown Menu', async () => {
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

  it('should go to Products page', async () => {
    await addProductPage.goToSubMenu(
      page,
      addProductPage.catalogParentLink,
      addProductPage.productsLink,
    );

    const pageTitle = await productsPage.getPageTitle(page);
    await expect(pageTitle).to.contains(productsPage.pageTitle);
  });

  it('should delete product with from DropDown Menu', async () => {
    const deleteTextResult = await productsPage.deleteProduct(page, productData);
    await expect(deleteTextResult).to.equal(productsPage.productDeletedSuccessfulMessage);
  });

  it('should reset all filters', async () => {
    await productsPage.resetFilterCategory(page);
    const numberOfProducts = await productsPage.resetAndGetNumberOfLines(page);
    await expect(numberOfProducts).to.be.above(0);
  });
});
