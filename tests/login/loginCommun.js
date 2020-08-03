const helper = require('../../commun/utils/helpers');
const loginCommon = require('../../commun/commonTests/loginBO');
// Importing pages

let browserContext;
let page;
describe('Log in Commun', async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });
  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });
  it('should login in BO Commun', async function () {
    await loginCommon.loginBO(this, page);
  });
});
