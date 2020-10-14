global.FO = {
  URL: process.env.URL_FO || 'http://localhost/',
};

global.PS_VERSION = process.env.PS_VERSION || '1.7.7';

global.BO = {
  URL: process.env.URL_BO || `${global.FO.URL}admin-dev/`,
  EMAIL: process.env.LOGIN || 'demo@prestashop.com',
  PASSWD: process.env.PASSWD || 'prestashop_demo',
  FIRSTNAME: process.env.FIRSTNAME || 'demo',
  LASTNAME: process.env.LASTNAME || 'demo',
};

global.BROWSER = {
  name: process.env.BROWSER || 'chromium',
  lang: 'en-GB',
  width: 1680,
  height: 900,
  sandboxArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  acceptDownloads: true,
  config: {
    headless: JSON.parse(process.env.HEADLESS || true),
    timeout: 0,
    slowMo: parseInt(process.env.SLOWMO, 10) || 5,
  },
};
