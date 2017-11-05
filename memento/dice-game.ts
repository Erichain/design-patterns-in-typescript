class Gamer {
  private money: number;
  private fruits: Array<string> = [];
  private random: number = Math.random();
  private fruitsname: Array<string> = ['apple', 'banana', 'orange', 'grape'];

  constructor(money: number) {
    this.money = money;
  }

  getMoney(): number {
    return this.money;
  }

  bet(): void {
    const dice: number = Math.floor(this.random * 5) + 1;

    if (dice === 1) {
      this.money += 100;
      console.log('Money increased');
    } else if (dice === 2) {
      this.money = this.money / 2;
      console.log('Money decreased');
    } else if (dice === 6) {
      console.log(`Fruit gained: ${this.getFruit()}`);
    } else {
      console.log('nothing happened');
    }
  }

  createMemento(): Memento {
    const m: Memento = new Memento(this.money);
    for (let fruit of m.getFruits()) {
      m.addFruit(fruit);
    }

    return m;
  }

  restoreMemento(memento: Memento): void {
    this.money = memento.getMoney();
    this.fruits = memento.getFruits();
  }

  getFruit(): string {
    const fruitIndex: number = Math.floor(Math.random() * 3);

    return this.fruitsname[fruitIndex];
  }

  getCurrentState(): string {
    return `Fruit: ${this.getFruit()} - Money: ${this.getMoney()}`;
  }
}

class Memento {
  private money: number;
  private fruits: Array<string> = [];

  constructor(money: number) {
    this.money = money;
  }

  getMoney(): number {
    return this.money;
  }

  addFruit(fruit: string): void {
    this.fruits.push(fruit);
  }

  getFruits(): Array<string> {
    return this.fruits.slice();
  }
}

const gamer: Gamer = new Gamer(100);
let memento: Memento = new Memento(0);

for (let i = 0; i < 10; i++) {
  console.log(`============== ${i}`);
  console.log(`Current state: ${gamer.getCurrentState()}`);

  gamer.bet();

  console.log(`My money is ${gamer.getMoney()}`);

  if (gamer.getMoney() > memento.getMoney()) {
    console.log('Money increased, save current state');
    memento = gamer.createMemento();
  } else if (gamer.getMoney() < memento.getMoney()) {
    console.log('Money decreased, restore previous state');
    gamer.restoreMemento(memento);
  }

  console.log('----------------');
}
