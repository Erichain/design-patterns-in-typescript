interface Observer {
  update(generator: NumberGenerator): void;
}

abstract class NumberGenerator {
  private observers: Array<Observer> = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  deleteObeserver(): void {}

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  abstract getNumber(): number;
  abstract execute(): void;
}

class RandomNumberGenerator extends NumberGenerator {
  private number: number;

  getNumber(): number {
    return this.number;
  }

  execute(): void {
    for (let i = 0; i < 10; i++) {
      this.number = Math.floor(Math.random() * 20);
      super.notifyObservers();
    }
  }
}

class DigitObserver implements Observer {
  update(generator: NumberGenerator): void {
    console.log(generator.getNumber());
  }
}

const gen: NumberGenerator = new RandomNumberGenerator();
const observer: Observer = new DigitObserver();
gen.addObserver(observer);
gen.execute();
