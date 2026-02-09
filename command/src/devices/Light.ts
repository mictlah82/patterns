class Light {
    constructor(
        private description:string
    ) {}

    public on() {
        console.log(`${this.description} Light on.`);
    }

    public off() {
        console.log(`${this.description} Light off.`);
    }

}

export default Light;