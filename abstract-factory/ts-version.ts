abstract class Item {
  protected caption: string;

  constructor(caption: string) {
    this.caption = caption;
  }

  abstract makeHtml(): string;
}

abstract class Link extends Item {
  protected url: string;

  constructor(caption: string, url: string) {
    super(caption);

    this.url = url;
  }

  abstract makeHtml(): string;
}

abstract class Tray extends Item {
  protected trayList: Array<Item>;
  
  add(item: Item): void {
    this.trayList.push(item);
  }
  
  abstract makeHtml(): string;
}

abstract class Page {
  protected title: string;
  protected author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  add(): void {}

  output(): void {}

  abstract makeHtml(): string;
}

abstract class Factory {
  static getFactory(className: any) {
    return new className();
  }

  abstract createLink(): void;
  abstract createTray(): void;
  abstract createPage(): void;
}
