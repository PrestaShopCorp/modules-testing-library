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
    const referenceExists = mapper.find(el => el.file === file);

    if (!referenceExists) {
      throw new Error(`No reference found for file '${file}'`);
    }

    const {combinations} = referenceExists;

    if (!combinations[this.version]) {
      if (!combinations.latest) {
        throw new Error(`No 'latest' reference found for file '${file}'`);
      }
      if (combinations.latest.version) {
        throw new Error(`You cannot have a 'version' type for the 'latest' version ! (file '${file}')`);
      }
      if (!combinations.latest.filepath) {
        throw new Error(`You need a 'filepath' entry for the 'latest' version ! (file '${file}')`);
      }
      return combinations.latest.filepath;
    }

    // if this version redirects us to a new version, recursively search for a type = file !
    let curVersion = this.version;
    let iterator = 1;
    const maxIterations = 5;
    while (combinations[curVersion].version) {
      curVersion = combinations[curVersion].version;
      iterator += 1;
      if (iterator > maxIterations) {
        throw new Error(`Couldn't find a type file after ${maxIterations} recursive searches for `
        + `version '${this.version}' and file '${file}' (stopped at version '${curVersion}')`);
      }
    }
    // return the correct target for this version and this file
    return combinations[curVersion].filepath;
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
