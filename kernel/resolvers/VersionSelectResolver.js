require('module-alias/register');
const configClassMap = require('./configClassMap');

module.exports = class VersionSelectResolver {
  constructor(version, customConfigClassMap) {
    this.version = version;
    this.customConfigClassMap = customConfigClassMap;
  }

  getFilePath(selector, mapper) {
    const custom = mapper.find(el => el.version === 'custom' && el.selector === selector);
    const specificVersion = mapper.find(el => el.version === this.version && el.selector === selector);
    const common = mapper.find(el => el.version === 'common' && el.selector === selector);

    if (undefined !== custom) {
      return `${process.cwd()}/${custom.filepath}`;
    }

    if (undefined !== specificVersion) {
      const filepath = this.getAbsolutePath(specificVersion.filepath);

      return filepath;
    }

    const filepath = this.getAbsolutePath(common.filepath);

    return filepath;
  }

  getAbsolutePath(filepath) {
    return filepath.replace('@', `${process.cwd()}/node_modules/prestashop_test_lib/`);
  }

  arrayMerge(configClassMap, customConfigClassMap = []) {
    return configClassMap.concat(customConfigClassMap);
  }

  require(selector) {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(
      this.getFilePath(
        selector,
        this.customConfigClassMap !== null ? this.arrayMerge(configClassMap, this.customConfigClassMap) : configClassMap,
      ),
    );
  }
};
