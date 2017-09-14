class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  construct(): void {
    this.builder.createTitle('Greeting');
    this.builder.createString('See....');
    this.builder.createItems(['hello', 'world']);
    this.builder.close();
  }
}

abstract class Builder {
  abstract createTitle(title: string): string;
  abstract createItems(items: Array<string>): string;
  abstract createString(text: string): string;
  abstract close(): string;
}

class ConcreteBuilder extends Builder {
  createString(text: string): string {
    return text;
  }

  createItems(item: Array<string>): string {
    return item.join('');
  }

  createTitle(title: string): string {
    return title;
  }

  close(): string {
    return 'closed...';
  }
}

const myBuilder: Builder = new ConcreteBuilder();
const myDirector: Director = new Director(myBuilder);
myDirector.construct();