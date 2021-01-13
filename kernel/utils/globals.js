/**
 * @namespace FO
 * @desc FO global vars
 */
global.FO = {
  /**
   * @memberOf FO
   * @type {string}
   * @desc FO shop URL
   * @default localhost/
   */
  URL: process.env.URL_FO || 'http://localhost/',
};

/**
 * @global
 * @desc PrestaShop version to test (minor version)
 * @default 1.7.7
 * @type {string}
 */
global.PS_VERSION = process.env.PS_VERSION || '1.7.7';


/**
 * @namespace BO
 * @desc BO global vars
 */
global.BO = {
  /**
   * @memberOf BO
   * @type {string}
   * @desc BO shop URL
   * @default localhost/admin-dev/
   */
  URL: process.env.URL_BO || `${global.FO.URL}admin-dev/`,

  /**
   * @memberOf BO
   * @type {string}
   * @desc BO default email account
   * @default demo@prestashop.com
   */
  EMAIL: process.env.LOGIN || 'demo@prestashop.com',

  /**
   * @memberOf BO
   * @type {string}
   * @desc BO default password account
   * @default prestashop_demo
   */
  PASSWD: process.env.PASSWD || 'prestashop_demo',

  /**
   * @memberOf BO
   * @type {string}
   * @desc BO default firstname account
   * @default demo
   */
  FIRSTNAME: process.env.FIRSTNAME || 'demo',

  /**
   * @memberOf BO
   * @type {string}
   * @desc BO default lastname account
   * @default demo
   */
  LASTNAME: process.env.LASTNAME || 'demo',
};

/**
 * @namespace BROWSER
 * @desc Global vars for browser to create
 */
global.BROWSER = {
  /**
   * @memberOf BROWSER
   * @type {string}
   * @desc Browser type to create (chromium | webkit | firefox)
   * @default chromium
   */
  name: process.env.BROWSER || 'chromium',

  /**
   * @memberOf BROWSER
   * @type {string}
   * @desc Language for the browser to create
   * @default en-GB
   */
  lang: 'en-GB',

  /**
   * @memberOf BROWSER
   * @type {int}
   * @desc Width size of the browser to create
   * @const
   */
  width: 1680,

  /**
   * @memberOf BROWSER
   * @type {int}
   * @desc Height size of the browser to create
   * @const
   */
  height: 900,

  /**
   * @memberOf BROWSER
   * @type {Array}
   * @desc Array to disable sandbox for the browser
   * @const
   */
  sandboxArgs: ['--no-sandbox', '--disable-setuid-sandbox'],

  /**
   * @memberOf BROWSER
   * @type {boolean}
   * @desc To enable download on tests
   * @const
   */
  acceptDownloads: true,

  /**
   * @memberOf BROWSER
   * @namespace config
   */
  config: {
    /**
     * @memberOf config
     * @type {boolean}
     * @desc To test in HEADLESS mode
     * @default true
     */
    headless: JSON.parse(process.env.HEADLESS || true),

    /**
     * @memberOf config
     * @type {int}
     * @desc Global timeout for Playwright
     * @default 0 (Set to default Playwright timeout)
     */
    timeout: 0,

    /**
     * @memberOf config
     * @type {int}
     * @desc Slows down Playwright operations by the specified amount of milliseconds
     * @default 5 milliseconds
     */
    slowMo: parseInt(process.env.SLOWMO, 10) || 5,
  },
};
