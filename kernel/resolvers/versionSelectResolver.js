require('module-alias/register');
const merge = require('lodash.merge');
const configClassMap = require('./configClassMap');


module.exports = class VersionSelectResolver {
  constructor(version, customConfigClassMap) {
    this.version = version;
    this.customConfigClassMap = customConfigClassMap;
  }

  /**
   * Get file path to require
   * @param file
   * @param mapper
   * @return {string}
   */
  getFilePath(file, mapper) {
    // do we have a reference for this file ?
    if (mapper.find(el => el.file === file) === undefined) {
      throw new Error(`No reference found for file '${file}'`);
    }

    const {combinations} = mapper.find(el => el.file === file);

    if (combinations[this.version] === undefined) {
      if (combinations.common === undefined) {
        throw new Error(`No 'common' reference found for file '${file}'`);
      }
      if (combinations.common.type === 'version') {
        throw new Error(`You cannot have a 'version' type for the 'common' version ! (file '${file}')`);
      }
      return combinations.common.target;
    }

    // if this version redirects us to a new version, recursively search for a type = file !
    let curVersion = this.version;
    let iterator = 1;
    const maxIterations = 5;
    while (combinations[curVersion].type === 'version') {
      curVersion = combinations[curVersion].target;
      iterator += 1;
      if (iterator > maxIterations) {
        throw new Error(`Couldn't find a type file after ${maxIterations} recursive searches for `
        + `version '${this.version}' and file '${file}' (stopped at version '${curVersion}')`);
      }
    }
    // return the correct target for this version and this file
    return combinations[curVersion].target;
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
    return merge(configClassMap, customConfigClassMap);
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
