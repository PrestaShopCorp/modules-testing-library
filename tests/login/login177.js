const helper = require('../../commun/utils/helpers');
const LoggerHandler = require('../../commun/utils/LoggerHandler');
const loginCommon = require('../../v177/commonTests/loginBO');

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
  it('should login in BO 177', async function () {
    const loggerHandler = new LoggerHandler('177');
    loggerHandler.log('TESTING');

    await loginCommon.loginBO(this, page);
  });
});
