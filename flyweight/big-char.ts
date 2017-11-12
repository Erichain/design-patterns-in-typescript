class BigChar {
  private charName: string;
  private fontData: string;
  
  constructor(charName: string) {
    this.charName = charName;
    
    // process text files
  }
  
  print(): void {
    console.log(this.fontData);
  }
}

class BigCharFactory {
  private charMap: object = {};
  static instance: BigCharFactory = null;

  static getInstance(): BigCharFactory {
    if (!this.instance) {
      return new BigCharFactory();
    }

    return this.instance;
  }

  getBigChar(charName: string): BigChar {
    const bigCharInstance: BigChar = this.charMap[charName];

    if (!bigCharInstance) {
      const newBigCharInstance: BigChar = new BigChar(charName);
      this.charMap[charName] = newBigCharInstance;

      return newBigCharInstance;
    }

    return bigCharInstance;
  }
}

class bigString {
  private bigChars: Array<BigChar> = [];

  constructor(bigString: string) {
    const factory: BigCharFactory = BigCharFactory.getInstance();

    for (let i = 0; i < bigString.length; i++) {
      this.bigChars[i] = factory.getBigChar(bigString[i]);
    }
  }

  print(): void {
    for (let bigChar of this.bigChars) {
      bigChar.print();
    }
  }
}
