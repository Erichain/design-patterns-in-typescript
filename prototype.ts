namespace Prototype {
  interface Product {
    use(): void;
    createClone(): Product;
  }

  class Manager {
    private showcase: Object;

    register(protonName: string, proto: Product): void {
      this.showcase[protonName] = proto;
    }

    create(protoName: string): Product {
      const p: Product = this.showcase[protoName];
      return p.createClone();
    }
  }

  class UnderlinePen implements Product {
    private ulChar: string;

    constructor(ulChar: string) {
      this.ulChar = ulChar;
    }

    use() {
      console.log(this.ulChar);
    }

    createClone() {}
  }

  class MessageBox implements Product {
    private decoChar: string;

    constructor(decoChar: string) {
      this.decoChar = decoChar;
    }

    use() {}

    createClone() {}
  }

  const manager: Manager = new Manager();
  const ulPen: UnderlinePen = new UnderlinePen('*');
  const deco: MessageBox = new MessageBox('/');
  manager.register('strong', ulPen);
  manager.register('warning', deco);

  const p1: Product = manager.create('strong');
  const p2: Product = manager.create('warning');

  p1.use();
  p2.use();
}
