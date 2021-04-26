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

const firstProductData = new ProductFaker({name: 'TO DELETE 1', type: 'Standard product'});
const secondProductData = new ProductFaker({name: 'TO DELETE 2', type: 'Standard product'});

let browserContext;
let page;

let numberOfProducts = 0;

/*
Go to products page
Create 2 products
Enable by bulk actions
Disable by bulk actions
Delete by bulk actions
*/

describe('Bulk actions products', async () => {
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

  [firstProductData, secondProductData].forEach((productData) => {
    it('should create new product', async () => {
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
  });

  describe('Bulk set product status', async () => {
    it('should filter product by name', async () => {
      await productsPage.filterProducts(page, 'name', 'TO DELETE');

      const textColumn = await productsPage.getProductNameFromList(page, 1);
      await expect(textColumn).to.contains('TO DELETE');
    });

    [
      {action: 'enable', status: true},
      {action: 'disable', status: false},
    ].forEach((test) => {
      it(`should ${test.action} products`, async () => {
        const textResult = await productsPage.bulkSetStatus(page, test.status);
        await expect(textResult)
          .to.equal(
            test.status
              ? productsPage.productMultiActivatedSuccessfulMessage
              : productsPage.productMultiDeactivatedSuccessfulMessage,
          );

        for (let row = 1; row <= 2; row++) {
          const productStatus = await productsPage.getProductStatusFromList(page, row);
          await expect(productStatus).to.equal(test.status);
        }
      });
    });

    it('should reset all filters', async () => {
      const numberOfProductsAfterReset = await productsPage.resetAndGetNumberOfLines(page);
      await expect(numberOfProductsAfterReset).to.be.equal(numberOfProducts + 2);
    });
  });

  describe('Bulk delete products', async () => {
    it('should filter product by name', async () => {
      await productsPage.filterProducts(page, 'name', 'TO DELETE');

      const textColumn = await productsPage.getProductNameFromList(page, 1);
      await expect(textColumn).to.contains('TO DELETE');
    });

    it('should delete products with bulk Actions', async () => {
      const deleteTextResult = await productsPage.deleteAllProductsWithBulkActions(page);
      await expect(deleteTextResult).to.equal(productsPage.productMultiDeletedSuccessfulMessage);
    });

    it('should reset all filters', async () => {
      const numberOfProductsAfterReset = await productsPage.resetAndGetNumberOfLines(page);
      await expect(numberOfProductsAfterReset).to.be.equal(numberOfProducts);
    });
  });
});
