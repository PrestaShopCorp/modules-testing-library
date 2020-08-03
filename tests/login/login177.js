const helper = require('../../utils/helpers');
const OverrideMapper = require('../../kernel/main');

// Importing pages

let browserContext;
let page;

const overrideMapper = new OverrideMapper('177');
let loginCommon = overrideMapper.getMap('commonTests/loginBO2.js');

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
    await loginCommon.loginBO(this, page);
  });
});
