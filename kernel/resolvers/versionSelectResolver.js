const fs = require('fs');
require('module-alias/register');
const path = require('path');

/*
Supported patch versions:
- 1.7.4.4
- 1.7.5.2
- 1.7.6.8
- 1.7.7.0
- 1.7.8.0
 */

/**
 * Class to get import needed files for the given version
 * @class
 */
class VersionSelectResolver {
  /**
   * @constructs
   * Creating a resolver
   *
   * @param {string} version PrestaShop version
   * @param {json} ConfigClassMap Optional parameter for added or override classes
   */
  constructor(version, ConfigClassMap) {
    this.version = version;
    this.configClassMap = ConfigClassMap;
  }

  /**
   * Get file path to require
   *
   * @param {string} selector Base path of the file to import
   * @return {string} Final path of the file to import
   */
  getFilePath(selector) {
    if (this.configClassMap) {
      // Search a reference for this file in the configClassMap
      const referenceExists = this.configClassMap.find(el => el.file === selector);

      if (referenceExists) {
        // we have this file in the configClassMap
        const {versions} = referenceExists;
        if (versions[this.version]) {
          // we have the file for the correct version !
          return versions[this.version];
        }
      }
    }

    // either we don't have the file in configClassMap or we don't have a target for this version
    const versionForFilepath = this.version.replace(/\./g, '');
    const basePath = path.resolve(__dirname, '../..');

    if (!fs.existsSync(`${basePath}/versions/${versionForFilepath}`)) {
      throw new Error(`Couldn't find the folder for version '${this.version}'`);
    }

    if (!fs.existsSync(`${basePath}/versions/${versionForFilepath}/${selector}`)) {
      throw new Error(`Couldn't find the file '${selector}' in version folder '${this.version}'`);
    }

    return `${basePath}/versions/${versionForFilepath}/${selector}`;
  }

  /**
   * Get file path and require it
   *
   * @param {string} selector Base path of the file to import
   * @return {Module} Object of the path given
   */
  require(selector) {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(
      this.getFilePath(selector),
    );
  }
}

module.exports = VersionSelectResolver;
