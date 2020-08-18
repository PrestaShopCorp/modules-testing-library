const CommonModuleManagerPage = require('@kernel/common/BO/modules/moduleManager');

class ModuleManager extends CommonModuleManagerPage.constructor {
  constructor() {
    super();

    // @override title
    this.pageTitle = 'Module selection';
  }
}

module.exports = new ModuleManager();
