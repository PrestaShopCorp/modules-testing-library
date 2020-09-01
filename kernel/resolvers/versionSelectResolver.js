require('module-alias/register');
const configClassMap = require('./configClassMap');

module.exports = class VersionSelectResolver {
  constructor(version, customConfigClassMap) {
    this.version = version;
    this.customConfigClassMap = customConfigClassMap;
  }

  /**
   * Get file path to require
   * @param selector
   * @param mapper
   * @return {string}
   */
  getFilePath(selector, mapper) {
    const custom = mapper.find(el => el.version === 'custom' && el.selector === selector);
    const specificVersion = mapper.find(el => el.version === this.version && el.selector === selector);
    const common = mapper.find(el => el.version === 'common' && el.selector === selector);

    if (undefined !== custom) {
      return `${process.cwd()}/${custom.filepath}`;
    }

    if (undefined !== specificVersion) {
      return specificVersion.filepath;
    }

    return common.filepath;
  }

  /**
   * Get path to lib
   * @param filepath
   * @return {string}
   */
  getAbsolutePath(filepath) {
    return filepath.replace('@', `${process.cwd()}/node_modules/prestashop_test_lib/`);
  }

  /**
   * Merge class maps
   * @param configClassMap
   * @param customConfigClassMap
   * @return {[]}
   */
  arrayMerge(configClassMap, customConfigClassMap = []) {
    return configClassMap.concat(customConfigClassMap);
  }

  /**
   * Get file path and require it
   * @param selector
   * @return {any}
   */
  require(selector) {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(
      this.getFilePath(
        selector,
        this.customConfigClassMap !== null
          ? this.arrayMerge(configClassMap, this.customConfigClassMap) : configClassMap,
      ),
    );
  }
};
