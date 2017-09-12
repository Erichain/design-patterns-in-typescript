// Abstract Class
abstract class AbstractDisplay {
  abstract open(): void;
  abstract close(): void;
  abstract print(): void;

  display(): void {
    this.open();

    for (let i = 0; i < 5; i++) {
      this.print();
    }

    this.close();
  }
}

// Concrete Class
class StringDisplay extends AbstractDisplay {
  private displayStr: string;

  constructor(displayStr: string) {
    super();
    this.displayStr = displayStr;
  }

  open() {
    console.log('Start displaying...');
  }

  close() {
    console.log('Display end...');
  }

  print() {
    console.log(this.displayStr);
  }
}

const sd = new StringDisplay('Hello World');
sd.display();
sd.display();
