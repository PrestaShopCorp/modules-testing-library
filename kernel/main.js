const overrideMapping = require('./override-mapping');


module.exports =  class Main {
    constructor(version) {
        this.version = version;
    }

    getMap(objPath){
        const key = `${objPath}__${this.version}`
        if(undefined !==  overrideMapping[key]){
            console.log('found')
            return require(`${overrideMapping[key]['filepath']}`);

        }
        console.log('not found', objPath)
        return require(`${objPath}`);
    }
}
