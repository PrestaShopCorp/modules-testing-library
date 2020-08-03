const helper = require('../../utils/helpers');
const OverrideMapper = require('../../kernel/main');

// Importing pages

let browserContext;
let page;

const overrideMapper = new OverrideMapper('178');
let loginCommon = overrideMapper.getMap('/home/david/Workspace/PrestaShop/poc-extends-qa/commonTests/loginBO.js');


describe('Log in 178', async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);

    page = await helper.newTab(browserContext);
  });
  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });
  it('should login in BO 178', async function () {
    await loginCommon.loginBO(this, page);
  });
});
