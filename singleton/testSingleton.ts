import Singleton from "./Singleton";

const instances = [1,2,3,4,5,6,7,8,9,10].map(_ => {
    return Singleton.getInstance();
});

const printValues = (nomVar: string, values:Array<Singleton>)=>{
    let maxValue = 0;
    for (const instance of values){
        if (instance instanceof Singleton){
            if (maxValue < instance.getNumOfInstances()){
                maxValue = instance.getNumOfInstances();
            }
        }
    }
    console.log(nomVar, ":", maxValue);
}

const instancesResult = Promise.all(instances);

instancesResult
  .then((values)=>{printValues.bind(this); printValues("01",values)})
  .catch((reason)=>console.log(reason));
