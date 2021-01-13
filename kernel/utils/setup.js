/** @module setup */
const helper = require('./helpers');

/**
 * @function
 *
 * @name before
 * @desc First mocha hook that run to create a unique browser to use for that run
 */
before(async function () {
  this.browser = await helper.createBrowser();
});

/**
 * @function
 *
 * @name after
 * @desc Last hook that run to close the browser created in the before function
 */
after(async function () {
  await helper.closeBrowser(this.browser);
});
