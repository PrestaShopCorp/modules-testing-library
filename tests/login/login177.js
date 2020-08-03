const helper = require('../../commun/utils/helpers');
const loginCommon = require('../../commun/tests/loginBO');
// Importing pages

let browserContext;
let page;
describe('Log in 177', async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });
  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });
  it('should login in BO', async function () {
    await loginCommon.loginBO(this, page);
  });
});
