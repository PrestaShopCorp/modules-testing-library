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

const moduleName = 'Advertising block';
const moduleTag = 'ps_advertising';
const moduleFilepath = `${process.cwd()}/tests/ui/data/ps_advertising.zip`;

describe(`Check prestashop version ${global.PS_VERSION}`, async () => {
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

  it('should check PS version', async () => {
    const psVersion = await loginPage.getPrestashopVersion(page);
    await expect(psVersion).to.contains(global.PS_VERSION);
  });

  it('should login into BO', async () => {
    await loginPage.login(page);
    await dashboardPage.closeOnboardingModal(page);

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

  it('should upload the module using the modal', async () => {
    const result = await moduleManagerPage.uploadModule(page, moduleFilepath);
    await expect(result).to.be.true;
  });

  it('should check that the module was installed', async () => {
    await page.click(moduleManagerPage.uploadModuleModalCloseButton);
    await dashboardPage.goToSubMenu(
      page,
      dashboardPage.modulesParentLink,
      dashboardPage.moduleManagerLink,
    );
    const isModuleVisible = await moduleManagerPage.searchModule(page, moduleTag, moduleName);
    await expect(isModuleVisible).to.be.true;
  });

  it('should check that the module is enabled', async () => {
    const isModuleEnabled = await moduleManagerPage.isModuleEnabled(page, moduleName);
    await expect(isModuleEnabled).to.be.true;
  });
});
