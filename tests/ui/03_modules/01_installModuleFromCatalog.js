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
const moduleCatalogPage = versionSelectResolver.require('BO/modules/moduleCatalog/index.js');
const moduleConfigurationPage = versionSelectResolver.require('BO/modules/moduleConfiguration/index.js');

// Browser vars
let browserContext;
let page;

const moduleToInstall = {
  name: 'Customer follow-up',
  tag: 'ps_reminder',
};

/*
Log in into BO
Go to module catalog page
Search a module
Install module
 */
describe('Install a module from modules catalog', async () => {
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

  it('should go to modules catalog page', async () => {
    if (global.PS_VERSION.includes('1.7.4')) {
      await dashboardPage.goToSubMenu(
        page,
        dashboardPage.modulesParentLink,
        dashboardPage.moduleManagerLink,
      );

      await moduleManagerPage.goToSelectionPage(page);
    } else {
      await dashboardPage.goToSubMenu(
        page,
        dashboardPage.modulesParentLink,
        dashboardPage.moduleCatalogueLink,
      );
    }

    const pageTitle = await moduleCatalogPage.getPageTitle(page);
    await expect(pageTitle).to.contains(moduleCatalogPage.pageTitle);
  });

  it('should search a module', async () => {
    const isModuleVisible = await moduleCatalogPage.searchModule(page, moduleToInstall.tag, moduleToInstall.name);

    await expect(isModuleVisible).to.be.true;
  });

  it('should install the module', async () => {
    const textResult = await moduleCatalogPage.installModule(page, moduleToInstall.name);

    await expect(textResult).to.contain(moduleCatalogPage.installMessageSuccessful(moduleToInstall.tag));
  });

  it('should go to configuration page', async () => {
    await moduleCatalogPage.goToConfigurationPage(page, moduleToInstall.name);

    // Check module name
    const pageSubtitle = await moduleConfigurationPage.getPageSubtitle(page);
    await expect(pageSubtitle).to.contain(moduleToInstall.name);
  });
});
