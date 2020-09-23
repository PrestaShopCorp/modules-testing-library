require('module-alias/register');
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
    if (mapper[file] === undefined) {
      throw new Error(`no reference found for file ${file}`);
    }

    // do we have a version for this file ?
    const {combinations} = mapper[file];
    if (combinations[this.version] === undefined) {
      throw new Error(`no reference found for version ${this.version} for file ${file}`);
    }

    // if this version redirects us to a new version, get this one !
    if (combinations[this.version].type === 'version') {
      return combinations[combinations[this.version].target].target;
    }

    // return the correct target for this version and this file
    return combinations[this.version].target;
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
