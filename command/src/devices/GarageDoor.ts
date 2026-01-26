class GarageDoor {
  private description: string | undefined;

  GarageDoor(description: string){
    this.description = description;
  }

  public on(){
    console.log(`GarageDoor open`);
  }
  public off(){
    console.log(`GarageDoor closed`);
  }
}

export default GarageDoor;