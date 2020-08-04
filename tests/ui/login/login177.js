const helper = require('../../../utils/helpers');
const RetroCompatResolver = require('../../../resolvers/RetroCompatResolver');

// Importing pages

let browserContext;
let page;
const version = '177';
const retroCompatResolver = new RetroCompatResolver(version);
const loginCommon = retroCompatResolver.require('commonTests/loginBO2.js');

describe(`Log in ${version}`, async () => {
  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);

    page = await helper.newTab(browserContext);
  });
  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });
  it(`should login in BO ${version}`, async function () {
    await loginCommon.loginBO(this, page);
  });
});
