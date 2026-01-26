class SingletonSimple {
    constructor(value){
        this.value = value;
        if (typeof SingletonSimple.instance === 'object'){
            return SingletonSimple.instance;
        }
        SingletonSimple.instance = this;
        return this;
    }

}

export default SingletonSimple;