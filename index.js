const V177 = require('./v177');
const fs = require('fs');
const Commun = require('./commun');

class Main {
    constructor(version) {
        switch (version) {
        case '177':
            fs.existsSync(pathToFile);
            let v177 = new V177('177');
            v177.logger();
            break;
        case '176':
        case '175':
            let commun = new Commun('commun');
            commun.logger();
            break;

        default:
            let commun1 = new Commun('commun1');
            commun1.logger();
        }
    }
}

new Main('177');
new Main('174');
new Main('175');
