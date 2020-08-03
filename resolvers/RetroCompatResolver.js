const overrideMapping = require('./class-extends');


module.exports =  class RetroCompatResolver {
    constructor(version) {
        this.version = version;
    }

    resolve(objPath){
        const key = `${objPath}__${this.version}`
        if(undefined !==  overrideMapping[key]){
            console.log('found')
            return require(`${overrideMapping[key]['filepath']}`);

        }
        console.log('not found', objPath)
        return require(`${objPath}`);
    }
}
