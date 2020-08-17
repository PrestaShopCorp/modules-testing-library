const CommonModuleManagerPage = require('@kernel/common/BO/modules/moduleManager');

class ModuleManager extends CommonModuleManagerPage.constructor {
  constructor() {
    super();

    // @override title
    this.pageTitle = 'Manage installed modules •';
  }
}

module.exports = new ModuleManager();
