type Size = 'TALL' | 'GRANDE' | 'VENTI';

abstract class Beverage {
    protected description: string = 'Unknown Beverage';
    protected size: Size = 'TALL';
    public getDescription(): string {
        return this.description;
    }
    public abstract cost(): number;
    
    public getSize(): Size{
        return this.size;
    };

    public setSize(size: Size): void {
        this.size = size;
    };
}
export { Beverage, Size };