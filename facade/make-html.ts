class PageMaker {
  static makePage(): void {}
}

class DataBase {
  private props: object;

  constructor(props: object) {
    this.props = props;
  }

  getPropByName(propName: string): any {
    return this.props[propName];
  }
}

class HtmlMaker {
  makeHeader(): string {
    return ``;
  }

  makeBody(): string {
    return ``;
  }
}

PageMaker.makePage();
