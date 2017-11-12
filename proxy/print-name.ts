interface Printable {
  setPrintName(name: string): void;
  getPrintName(): string;
  print(): void;
}

class RealPrint implements Printable {
  private printName: string;

  constructor(name: string) {
    this.printName = name;
  }

  setPrintName(name: string): void {
    this.printName = name;
  }

  getPrintName(): string {
    return this.printName;
  }

  print(): void {
    console.log(this.printName);
  }
}

class ProxyPrint implements Printable {
  private printName: string;
  private real: RealPrint = null;

  constructor(name: string) {
    this.printName = name;
  }

  setPrintName(name: string): void {
    if (this.real) {
      this.real.setPrintName(name);
    }

    this.printName = name;
  }

  getPrintName(): string {
    return this.printName;
  }

  print(): void {
    this.realize();
    this.real.print();
  }

  realize(): void {
    if (!this.real) {
      this.real = new RealPrint(this.printName);
    }
  }
}
