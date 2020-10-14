const fs = require('fs');
require('module-alias/register');

/*
Supported patch versions:
- 1.7.4.4
- 1.7.5.2
- 1.7.6.8
- 1.7.7.0
- 1.7.8.0
 */

module.exports = class VersionSelectResolver {
  constructor(version, ConfigClassMap) {
    this.version = version;
    this.configClassMap = ConfigClassMap;
  }

  /**
   * Get file path to require
   * @param file
   * @return {string}
   */
  getFilePath(file) {
    if (this.configClassMap) {
      // do we have a reference for this file in the configClassMap ?
      const referenceExists = this.configClassMap.find(el => el.file === file);

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
    const basepath = process.cwd();

    if (!fs.existsSync(`${basepath}/versions/${versionForFilepath}`)) {
      throw new Error(`Couldn't find the folder for version '${this.version}'`);
    }

    if (!fs.existsSync(`${basepath}/versions/${versionForFilepath}/${file}`)) {
      throw new Error(`Couldn't find the file '${file}' in version folder '${this.version}'`);
    }

    return `@versions/${versionForFilepath}/${file}`;
  }

  /**
   * Get file path and require it
   * @param selector
   * @return {any}
   */
  require(selector) {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(
      this.getFilePath(selector),
    );
  }
};
