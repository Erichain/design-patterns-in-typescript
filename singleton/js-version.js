class Singleton {
  static instance = new Singleton();

  constructor() {
    if (typeof new.target !== Singleton) {
      return new Error('Can\'t directly create instancel!')
    }

    this.instance = null;
  }

  static createInstance() {
    return this.instance;
  }
}

const instance1 = Singleton.createInstance();
const instance2 = Singleton.createInstance();

console.log(instance1 === instance2)
