require('module-alias/register');

const {expect} = require('chai');
const helper = require('@utils/helpers');
const VersionSelectedResolver = require('@resolvers/VersionSelectedResolver');

// Importing pages

let browserContext;
let page;
const version = '1.7.8';
const versionSelectedResolver = new VersionSelectedResolver(version);
const loginPage = versionSelectedResolver.require('kernel/common/BO/login/index.js');

describe(`Check prestashop version ${version}`, async () => {
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
    await expect(psVersion).to.contains('1.7.6.3');
  });
});
