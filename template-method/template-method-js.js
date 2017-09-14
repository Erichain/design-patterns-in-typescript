class Display {
  open() {}

  close() {}

  print() {}

  display() {
    this.open();

    for (let i = 0; i < 6; i++) {
      this.print();
    }

    this.close();
  }
}

class ConcreteDisplay extends Display {
  constructor(str) {
    super();

    this.str = str;
  }

  open() {
    console.log('open');
  }

  close() {
    console.log('close');
  }

  print() {
    console.log(this.str);
  }
}

const myDisplay = new ConcreteDisplay('Hahahaha');
myDisplay.display();
