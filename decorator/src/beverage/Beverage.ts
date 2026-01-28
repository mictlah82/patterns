type SizeType = 'small' | 'medium' | 'large' | '';

abstract class Beverage {
    protected description: string = 'Unknown Beverage';
    protected size: SizeType = '';
    public getDescription(): string {
        return this.description;
    }
    public abstract cost(): number;
    
    public getSize(): SizeType{
        return this.size;
    };

    public setSize(size: SizeType): void {
        this.size = size;
    };
}
export { Beverage, SizeType };