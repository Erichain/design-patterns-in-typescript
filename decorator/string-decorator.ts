abstract class Component {
  abstract getRows(): number;
  abstract getColumns(): number;
  abstract getRowTextByIndex(index: number): string;

  show(): void {
    for (let i: number = 0; i < this.getRows(); i++) {
      console.log(this.getRowTextByIndex(i));
    }
  }
}

class StringDisplay extends Component {
  private text: string;

  constructor(text: string) {
    super();

    this.text = text;
  }

  getRows(): number {
    return 1;
  }

  getColumns(): number {
    return this.text.length;
  }

  getRowTextByIndex(index: number): string {
    return index === 0 ? this.text : '';
  }
}

abstract class Decorator extends Component {
  protected component: Component;

  constructor(component: Component) {
    super();

    this.component = component;
  }
}

class ConcreteDecorator extends Decorator {
  private char: string;

  constructor(char: string, component: Component) {
    super(component);

    this.char = char;
  }

  getRows(): number {
    return this.component.getRows();
  }

  getColumns(): number {
    return this.component.getColumns() + 2;
  }

  getRowTextByIndex(index: number): string {
    return `${this.char}${this.component.getRowTextByIndex(index)}${this.char}`
  }
}

class FullBorderDecorator extends Decorator {
  private char: string;

  constructor(char: string, component: Component) {
    super(component);

    this.char = char;
  }

  private makeLineWithChar(char: string, count: number): string {
    let concatedLine: Array<string> = [];

    for (let i: number = 0; i < count; i++) {
      concatedLine.push(char);
    }

    return concatedLine.join('');
  }

  getRows(): number {
    return this.component.getRows() + 2;
  }

  getColumns(): number {
    return this.component.getColumns() + 2;
  }

  getRowTextByIndex(index: number): string {
    if (index === 0 || index === this.component.getRows() + 1) {
      return this.makeLineWithChar(this.char, this.component.getColumns());
    }

    return `${this.char}${this.component.getRowTextByIndex(index - 1)}${this.char}`;
  }
}

const myComponent: Component = new StringDisplay('This is a string');
const myDecorator: Decorator = new ConcreteDecorator('*', myComponent);
const fullBorderDecorator: Decorator = new FullBorderDecorator('$', myDecorator);

myDecorator.show();
fullBorderDecorator.show();
