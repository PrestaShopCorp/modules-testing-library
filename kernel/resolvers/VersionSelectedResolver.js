require('module-alias/register');
const configClassMap = require('./configClassMap');

module.exports = class VersionSelectedResolver {
  constructor(version, customConfigClassMap) {
    this.version = version;
    this.customConfigClassMap = customConfigClassMap;
  }

  getFilePath(selector, mapper) {
    const custom = mapper.find(el => el.version === 'custom' && el.selector === selector);
    const specificVersion = mapper.find(el => el.version === this.version && el.selector === selector);
    const common = mapper.find(el => el.version === 'common' && el.selector === selector);

    if (undefined !== custom) {
      return custom.filepath;
    }

    if (undefined !== specificVersion) {
      return specificVersion.filepath;
    }

    return common.filepath;
  }

  arrayMerge(configClassMap, customConfigClassMap = []) {
    return configClassMap.concat(customConfigClassMap);
  }

  require(baseObj) {
    const objMerge = this.arrayMerge(configClassMap, this.customConfigClassMap);
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(
      this.getFilePath(baseObj, objMerge),
    );
  }
};
