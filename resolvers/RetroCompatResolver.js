/* eslint-disable */

const overrideMapping = require('./class-extends');

module.exports = class RetroCompatResolver {
  constructor(version) {
    this.version = version;
  }

  getRequire(objPath) {
    const key = `${objPath}__${this.version}`;
    if (undefined !== overrideMapping[key]) {
      return `${overrideMapping[key].filepath}`;
    }

    return `${this.getBaseDir()}/${objPath}`;
  }

  require(objPath) {
    return require(this.getRequire(objPath));
  }

  getBaseDir() {
    return process.cwd();
  }
};
