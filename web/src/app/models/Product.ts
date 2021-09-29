export class Product{

    public readonly id: string;

    public name: string;
    public image: string;
    public price: string;
    public description: string;
    public shortDescription?: string;
    
    constructor(props: Omit<Product, 'id'>){
        Object.assign(this, props);
    }

}