const LoggerCommun = require('./Logger');
const LoggerV177 = require('../../v177/utils/Logger');


module.exports =  class LoggerHandler {
    constructor(version) {
      this.version = version;
      this.logger = new LoggerCommun(this.version);
      switch (this.version) {
        case '177':
            this.logger = new LoggerV177(this.version);

            break;
        case '176':
        case '175':
            this.logger = new LoggerCommun(this.version);
            break;
        }

    }

    log(msg) {
        this.logger.log(` ${msg} === ${this.version} ------`);
    }
}
