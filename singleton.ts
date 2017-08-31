class SingleTon {
  static instance: SingleTon = new SingleTon();

  private constructor() {
    console.log('Get a instance...');
  }

  static getInstance() {
    return this.instance;
  }
}

const instance: SingleTon = SingleTon.getInstance();
