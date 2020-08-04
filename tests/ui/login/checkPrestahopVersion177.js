const helper = require('../../../utils/helpers');
const loginPage = require('../../../pages/common/BO/login');

const {expect} = require('chai');

// Importing pages

let browserContext;
let page;
const version = '1.7.7.0';

describe(`Check prestashop version ${version}`, async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);

    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  it(`should go to login page`, async function () {
    await loginPage.goTo(page, global.BO.URL);
    const pageTitle = await loginPage.getPageTitle(page);
    await expect(pageTitle).to.contains(loginPage.pageTitle);
  });

  it(`should check ps version`, async function () {
    const psVersion = await loginPage.getPrestashopVersion(page);
    await expect(psVersion).to.contains(version);
  });
});
