namespace Bridge {
  class Display {
    private impl: StringDisplay;

    constructor(impl: StringDisplay) {
      this.impl = impl;
    }

    open() {
      this.impl.rawOpen();
    }

    print() {
      this.impl.rawPrint();
    }

    close() {
      this.impl.rawClose();
    }

    display() {
      this.open();
      this.print();
      this.close();
    }
  }

  class CountDisplay extends Display {
    constructor(impl: StringDisplay) {
      super(impl);
    }

    multiDisplay(times: number): void {
      for (let i = 0; i < times; i++) {
        this.print();
      }
    }
  }

  abstract class StringDisplay {
    abstract rawOpen(): void;
    abstract rawPrint(): void;
    abstract rawClose(): void;
  }

  class StringDisplayImpl extends StringDisplay {
    rawOpen(): void {}

    rawPrint(): void {}

    rawClose(): void {}
  }
}
