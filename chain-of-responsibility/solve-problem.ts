class Trouble {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  getNumber(): number {
    return this.number;
  }

  getProblemString(): string {
    return `Trouble: ${this.number}`;
  }
}

abstract class Support {
  private name: string;
  private next: Support;

  constructor(name: string) {
    this.name = name;
  }

  setNext(next: Support): Support {
    this.next = next;

    return next;
  }

  support(trouble: Trouble): void {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next != null) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }

  done(trouble: Trouble): void {
    console.log(`${trouble.getNumber()} was resolved.`);
  }

  fail(trouble: Trouble): void {
    console.log(`${trouble.getNumber()} cannot be resolved.`);
  }

  abstract resolve(trouoble: Trouble): boolean;
}

class NoSupport extends Support {
  resolve(trouble: Trouble): boolean {
    return false;
  }
}

class LimitSupport extends Support {
  private limit: number;

  constructor(name: string, limit: number) {
    super(name);

    this.limit = limit;
  }

  resolve(trouble: Trouble): boolean {
    return trouble.getNumber() < this.limit;
  }
}

class OddSupport extends Support {
  resolve(trouble: Trouble): boolean {
    return trouble.getNumber() % 2 === 1;
  }
}

class SpecialSupport extends Support {
  private num: number;

  constructor(name: string, num: number) {
    super(name);

    this.num = num;
  }

  resolve(trouble: Trouble): boolean {
    return trouble.getNumber() === this.num;
  }
}

const alice: NoSupport = new NoSupport('Alice');
const bob: LimitSupport = new LimitSupport('Bob', 100);
const charlie: OddSupport = new OddSupport('Charlie');
const diana: SpecialSupport = new SpecialSupport('Diana', 134);

alice.setNext(bob).setNext(charlie).setNext(diana);

for (let i: number = 0; i < 400; i++) {
  alice.support(new Trouble(i));
}
