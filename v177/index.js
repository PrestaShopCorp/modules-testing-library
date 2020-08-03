const Commun = require('../commun');

module.exports =  class V177 extends Commun {
    constructor(version) {
        super(version);
    }
    logger() {
        console.log(`${this.version} ------`);
    }
}
