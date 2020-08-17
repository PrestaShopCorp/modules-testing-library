require('module-alias/register');

const {expect} = require('chai');
const helper = require('@utils/helpers');
const VersionSelectResolver = require('@resolvers/VersionSelectResolver');

// Importing pages

let browserContext;
let page;

const versionSelectResolver = new VersionSelectResolver(global.INSTALL.PS_VERSION);

const loginPage = versionSelectResolver.require('kernel/common/BO/login/index.js');
const dashboardPage = versionSelectResolver.require('kernel/common/BO/dashboard/index.js');
const moduleManagerPage = versionSelectResolver.require('kernel/common/BO/modules/moduleManager/index.js');

describe(`Check prestashop version ${global.INSTALL.PS_VERSION}`, async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);

    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  it('should go to login page', async () => {
    await loginPage.goTo(page, global.BO.URL);
    const pageTitle = await loginPage.getPageTitle(page);
    await expect(pageTitle).to.contains(loginPage.pageTitle);
  });

  it('should check ps version', async () => {
    const psVersion = await loginPage.getPrestashopVersion(page);
    await expect(psVersion).to.contains(global.INSTALL.PS_VERSION);
  });

  it('should login into BO', async () => {
    await loginPage.login(page);

    const pageTitle = await dashboardPage.getPageTitle(page);
    await expect(pageTitle).to.contains(dashboardPage.pageTitle);
  });

  it('should go to modules manager page', async () => {
    await dashboardPage.goToSubMenu(
      page,
      dashboardPage.modulesParentLink,
      dashboardPage.moduleManagerLink,
    );

    const pageTitle = await moduleManagerPage.getPageTitle(page);
    await expect(pageTitle).to.contains(moduleManagerPage.pageTitle);
  });
});
