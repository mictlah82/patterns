class DvdPlayer {
  private title: string='';
  public on():void{
    console.log('CdPlayer on.');
  }
  public off():void{
    console.log('CdPlayer off');
  }
  public setDvd(title: string){
    this.title = title;
  }
  public play(){
    console.log(`Start ${this.title} movie`);
  }
  public stop(){
    console.log(`Stop ${this.title} movie`);
  }
}

export {DvdPlayer}