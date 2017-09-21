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

    for (let i = 0; i < 3; i++) {
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
