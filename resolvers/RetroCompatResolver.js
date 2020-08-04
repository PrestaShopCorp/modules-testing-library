/* eslint-disable */

const overrideMapping = require('./class-extends');

module.exports = class RetroCompatResolver {
  constructor(version) {
    this.version = version;
  }

  getRequire(objPath, mapping) {
    const key = `${objPath}__${this.version}`;
    if (undefined !== mapping[key]) {
        return mapping[key].filepath;
    }

    return objPath;
  }

  require(objPath) {
    const baseDir = process.cwd();
    const fileRequired = this.getRequire(objPath, overrideMapping);
    const absolutePathFile = baseDir + '/' + fileRequired;

    return require(absolutePathFile);
  }
};
