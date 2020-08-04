/* eslint-disable */

const overrideMapping = require('./class-extends');

module.exports = class RetroCompatResolver {
  constructor(version) {
    this.version = version;
  }

  getRequire(objPath, overrideMapping) {
    const key = `${objPath}__${this.version}`;
    if (undefined !== overrideMapping[key]) {
      return `${overrideMapping[key].filepath}`;
    }
    return process.cwd() + '/' + objPath;
  }

  require(objPath) {
    return require(this.getRequire(objPath), overrideMapping);
  }
};
