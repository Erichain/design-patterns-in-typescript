// Creator class
abstract class Creator {
  create(owner: string): Product {
    const product: ConcreteProduct = this.createProduct(owner);
    this.registerProduct(product);

    return product;
  }

  abstract createProduct(owner: string): ConcreteProduct;
  abstract registerProduct(product: ConcreteProduct): void;
}

// abstract class Product
abstract class Product {
  abstract use(): string;
}

// ConcreteCreator class
class ConcreteCreator extends Creator {
  private owners: Array<string>;

  constructor() {
    super();
  }

  createProduct(owner: string) {
    return new ConcreteProduct(owner);
  }

  registerProduct(product: ConcreteProduct) {
    this.owners.push(product.getOwner());
  }

  getOwners(): Array<string> {
    return this.owners;
  }
}

// ConcreteProduct class
class ConcreteProduct extends Product {
  private owner: string;

  constructor(owner: string) {
    super();
    this.owner = owner;
  }

  use() {
    return `Make ${this.owner}'s Card`;
  }

  getOwner(): string {
    return this.owner;
  }
}

const productFactory = new ConcreteCreator();
const card1: Product = productFactory.create('a');
const card2: Product = productFactory.create('b');

card1.use();
card2.use();
