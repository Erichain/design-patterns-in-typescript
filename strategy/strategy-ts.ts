interface Strategy {
  nextHand(): Hand;
  study(win: boolean): void;
}

class Hand {
  public static HANDVALUE_GUU: number = 0;
  public static HANDVALUE_CHO: number = 1;
  public static HANDVALUE_PAA: number = 2;
  public static hands: Array<Hand> = [
    new Hand(Hand.HANDVALUE_GUU),
    new Hand(Hand.HANDVALUE_CHO),
    new Hand(Hand.HANDVALUE_PAA),
  ];

  private handValue: number;

  constructor(handValue: number) {
    this.handValue = handValue;
  }
  
  static getHand(handValue: number): Hand {
    return this.hands[handValue];
  }

  private fight(hand: Hand): number {
    if (this === hand) {
      return 0;
    } else if ((this.handValue + 1) % 3 === hand.handValue) {
      return 1;
    }

    return -1;
  }

  isStrongerThan(hand: Hand): boolean {
    return this.fight(hand) === 1;
  }

  isWeakerThan(hand: Hand): boolean {
    return this.fight(hand) === -1;
  }
}

class WinningStrategy implements Strategy {
  private won: boolean = false;
  private prevHand: Hand;
  private random: number;

  constructor(min: number, max: number) {
    this.random = Math.floor(Math.random() * (max - min) + min);
  }

  nextHand(): Hand {
    if (!this.won) {
      this.prevHand = Hand.getHand(this.random);
    }

    return this.prevHand;
  }

  study(win: boolean): void {
    this.won = win;
  }
}

class ProbStrategy implements Strategy {
  private history: Array<Array<number>> = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  private prevHandValue: number = 0;
  private currentHandValue: number = 0;
  private random: number;

  constructor(min: number, max: number) {
    this.random = Math.floor(Math.random() * (max - min) + min);
  }

  nextHand(): Hand {
    let handValue: number = 0;

    return Hand.getHand(handValue);
  }

  getSum(handValue: number): number {
    let sum: number = 0;

    for (let i: number = 0; i < 3; i++) {
      sum += this.history[handValue][i];
    }

    return sum;
  }

  study(): void {}
}

class Player {
  private name: string;
  private strategy: Strategy;

  constructor(name: string, strategy: Strategy) {
    this.name = name;
    this.strategy = strategy;
  }

  nextHand(): Hand {
    return this.strategy.nextHand();
  }

  win(): void {}

  lose(): void {}

  even(): void {}
}

const player1: Player = new Player('a', new WinningStrategy(0, 3));
const player2: Player = new Player('b', new WinningStrategy(0, 3));

for (let i: number = 0; i < 10000; i++) {
  const p1Hand: Hand = player1.nextHand();
  const p2Hand: Hand = player2.nextHand();

  if (p1Hand.isStrongerThan(p2Hand)) {
    player1.win();
    player2.lose();
  } else if (p1Hand.isWeakerThan(p2Hand)) {
    player2.win();
    player1.lose();
  } else {
    player1.even();
    player2.even();
  }
}
