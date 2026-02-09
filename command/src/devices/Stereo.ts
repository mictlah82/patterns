const limVolume: [min:number, max:number]= [0,10]
class Stereo {
    private volume:number = 5;
    constructor(){}

    public on(){
        console.log(`Stereo on.`);
    }

    public off(){
        console.log(`Stereo off.`);
    }

    public setCD(tittle: string){

    }

    public volumeUp():void{
        if (this.volume <= limVolume[1]){
            this.volume++;
        }
    }
    public volumeDown():void{
        if (this.volume >= limVolume[0]){
            this.volume--;
        }
    }
}

export default Stereo;