class Light {
    private description: string | undefined;

    Light(description: string) {
        this.description = description;
    }

    public on() {
        console.log(`Light ${this.description} on.`);
    }

    public off() {
        console.log(`Light ${this.description} off.`);
    }

}

export default Light;