global.FO = {
  URL: process.env.URL_FO || 'http://localhost/',
};

global.BO = {
  URL: process.env.URL_BO || `${global.FO.URL}admin-dev/`,
  EMAIL: process.env.LOGIN || 'demo@prestashop.com',
  PASSWD: process.env.PASSWD || 'prestashop_demo',
  FIRSTNAME: process.env.FIRSTNAME || 'demo',
  LASTNAME: process.env.LASTNAME || 'demo',
};

global.INSTALL = {
  URL: process.env.URL_INSTALL || `${global.FO.URL}install-dev/`,
  LANGUAGE: process.env.INSTALL_LANGUAGE || 'en',
  COUNTRY: process.env.INSTALL_COUNTRY || 'fr',
  DB_NAME: process.env.DB_NAME || 'prestashopdb',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWD: process.env.DB_PASSWD || '',
  SHOPNAME: process.env.SHOPNAME || 'Prestashop',
  PS_VERSION: process.env.PS_VERSION || '1.7.7.0',
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
