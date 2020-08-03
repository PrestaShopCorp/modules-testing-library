export default class Commun {
    constructor(version) {
        this.version = version;
    }

    logger() {
        console.log(`${this.version}.....`);
    }
}
