import { Product } from './interfaces';
abstract class ProductBase implements Product {
    constructor(public id: number, public name: string, public icon: string) {}

    validate(): boolean {
        throw new Error('Not implemented');
    }
}

export class FoodProduct extends ProductBase {
    // properties/fields

    // functions
    validate(): boolean {
        return !!this.id && !!this.name && !!this.icon;
    }
}

class SportingGoodsProduct extends ProductBase {
    constructor(id: number, name: string, icon: string) {
        super(id, name, icon);
    }
}
