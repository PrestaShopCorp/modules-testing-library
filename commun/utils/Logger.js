module.exports =  class Logger {
    constructor(version) {
      this.version = version;
    }

    log(msg) {
        console.log(`${msg} !!!!!!`);
        console.log(`${this.version} !!!!!!`);
    }
}
