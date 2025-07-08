class Stereo {
    private description: string | undefined;
    private volume: number = 0;
    private tittleCd: string | undefined;

    Stereo(description: string){
        this.description = description;
    }

    public on(){
        console.log(`Stereo ${this.description} on.`);
    }

    public off(){
        console.log(`Stereo ${this.description} off.`);
    }

    public setCD(tittle: string){
        this.tittleCd = tittle;
    }

    public setVolume (volume: number){
        this.volume = volume;
    }
}

export default Stereo;