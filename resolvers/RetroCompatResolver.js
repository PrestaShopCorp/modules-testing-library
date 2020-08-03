const overrideMapping = require('./class-extends');

module.exports =  class RetroCompatResolver {
    constructor(version) {
        this.version = version;
    }

    require(objPath){
        const key = `${objPath}__${this.version}`
        if(undefined !==  overrideMapping[key]){
            return require(`${overrideMapping[key]['filepath']}`);
        }

        return require(process.cwd()+'/'+objPath);
    }
}
