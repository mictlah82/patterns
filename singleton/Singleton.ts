class Singleton {
    private static oneInstance:Singleton;
    private count = 0;

    private constructor(){
        this.count = this.count + 1;
    }

    public static async getInstance():Promise<Singleton>{
        if(!this.oneInstance){
            this.oneInstance = new Singleton();
        }
        return this.oneInstance;
    }

    public getNumOfInstances (){
        return this.count;
    }
}

export default Singleton;