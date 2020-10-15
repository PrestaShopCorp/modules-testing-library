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

/*
Login to BO
Click on view my shop
Check with the URl that it's FO
Go Back to BO
 */
describe('View my shop and go to FO', async () => {
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

  it('should view my shop', async () => {
    // Get new opened tab
    page = await dashboardPage.viewMyShop(page);

    // Get current URL and check that it's not the BO URL
    const currentUrl = await dashboardPage.getCurrentURL(page);
    await expect(currentUrl, 'Failed to open FO, the BO is still displayed').to.not.contain(global.BO.URL);
    await expect(currentUrl, 'Failed to open FO').to.contain(global.FO.URL);
  });

  it('should go back to BO', async () => {
    page = await dashboardPage.closePage(browserContext, page, 0);

    // Get current URL and check BO URL
    const currentUrl = await dashboardPage.getCurrentURL(page);
    await expect(currentUrl, 'Failed to go back to BO').to.contain(global.BO.URL);
  });
});
