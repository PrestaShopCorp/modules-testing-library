require('module-alias/register');

const {expect} = require('chai');
const helper = require('@utils/helpers');

// Get resolver
const VersionSelectResolver = require('@resolvers/versionSelectResolver');

const versionSelectResolver = new VersionSelectResolver(global.PS_VERSION);

// Import pages
const loginPage = versionSelectResolver.require('BO/login/index.js');
const dashboardPage = versionSelectResolver.require('BO/dashboard/index.js');
const moduleManagerPage = versionSelectResolver.require('BO/modules/moduleManager/index.js');

// Browser vars
let browserContext;
let page;

const moduleData = {
  name: 'Test Library Module',
  tag: 'testlibmodule',
};

/*
Log in into BO
Go to module manager page
Upload zip module
Check that module is installed
 */
describe('Disable and enable module', async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);

    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  it('should login into BO', async () => {
    await loginPage.goTo(page, global.BO.URL);
    const loginPageTitle = await loginPage.getPageTitle(page);
    await expect(loginPageTitle).to.contains(loginPage.pageTitle);

    await loginPage.login(page);
    await dashboardPage.closeOnboardingModal(page);

    const dashboardPageTitle = await dashboardPage.getPageTitle(page);
    await expect(dashboardPageTitle).to.contains(dashboardPage.pageTitle);
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

  it('should check that the module was installed', async () => {
    const isModuleVisible = await moduleManagerPage.searchModule(page, moduleData.tag, moduleData.name);

    await expect(isModuleVisible).to.be.true;
  });

  it('should disable module', async () => {
    const textResult = await moduleManagerPage.disableModule(page, moduleData.tag, moduleData.name);

    await expect(textResult).to.contain(moduleManagerPage.successfulDisableMessage(moduleData.tag));
  });

  it('should enable module', async () => {
    const textResult = await moduleManagerPage.enableModule(page, moduleData.name);

    await expect(textResult).to.contain(moduleManagerPage.successfulEnableMessage(moduleData.tag));
  });
});
