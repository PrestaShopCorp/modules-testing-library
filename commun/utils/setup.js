const helper = require('./helpers');

/**
 * Create unique browser for all mocha run
 */
before(async function () {
  this.browser = await helper.createBrowser();
});

/**
 * Close browser after finish the run
 */
after(async function () {
  await helper.closeBrowser(this.browser);
});
