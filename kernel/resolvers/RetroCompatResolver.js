/* eslint-disable */
require('module-alias/register');

const overrideMapping = require('./class-extends');

module.exports = class RetroCompatResolver {
  constructor(version, classExtensFiles) {
    this.version = version;
    this.classExtensFiles = classExtensFiles;
  }

  getRequire(baseObj, mapper) {
    const key = `${baseObj}__${this.version}`;
    if (undefined !== mapper[key]) {
        return mapper[key].filepath;
    }

    return baseObj;
  }

  mergeMapping(config, configPath = {}) {
    return Object.assign(config, configPath);
  }

  require(baseObj) {
    const objMerge = this.mergeMapping(overrideMapping, this.classExtensFiles);
    return require(
      this.getRequire(baseObj, objMerge),
    );
  }
};
