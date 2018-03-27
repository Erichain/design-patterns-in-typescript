abstract class MazeFactory {
  abstract createMaze(): Maze;
}

class MazeAFactory extends MazeFactory {
  static mazeFactory: MazeFactory = null;

  static getFactory(): MazeFactory {
    if (!this.mazeFactory) {
      this.mazeFactory = new MazeAFactory();
    }

    return this.mazeFactory;
  }

  createMaze(): Maze {
    return new MazeA();
  }
}

class MazeBFactory extends MazeFactory {
  static mazeFactory: MazeFactory = null;

  static getFactory(): MazeFactory {
    if (!this.mazeFactory) {
      this.mazeFactory = new MazeBFactory();
    }

    return this.mazeFactory;
  }

  createMaze(): Maze {
    return new MazeB();
  }
}

class CreateMaze {
  private factory: MazeFactory = null;

  constructor(factory: MazeFactory) {
    this.factory = factory;
  }

  createMaze(): Maze {
    return this.factory.createMaze();
  }
}

abstract class Maze {
  abstract setWall(): void;
  abstract setDoor(): void;
}

class MazeA extends Maze {
  setWall(): void {}

  setDoor(): void {}
}

class MazeB extends Maze {
  setWall(): void {}

  setDoor(): void {}
}

const createMaze: CreateMaze = new CreateMaze(new MazeAFactory());
createMaze.createMaze();

////////////////////////////////////////////////////////////////////////////////

// abstract Item
abstract class Item {
  protected caption: string;

  constructor(caption: string) {
    this.caption = caption;
  }

  abstract makeHtml(): string;
}

// abstract Link
abstract class Link extends Item {
  protected url: string;

  constructor(caption: string, url: string) {
    super(caption);

    this.url = url;
  }

  abstract makeHtml(): string;
}

// abstract Tray
abstract class Tray extends Item {
  protected trayList: Array<Item>;
  
  add(item: Item): void {
    this.trayList.push(item);
  }
  
  abstract makeHtml(): string;
}

// abstract Page
abstract class Page {
  protected title: string;
  protected author: string;
  protected content: Array<Item>;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  add(item: Item): void {
    this.content.push(item);
  }

  output(): void {
    const filename: string = `${this.title}.html`;
    this.makeHtml();

    console.log(`${this.title}.html has been written.`);
  }

  abstract makeHtml(): string;
}

// abstract Factory
abstract class Factory {
  static getFactory(className: any) {
    return new className();
  }

  abstract createLink(caption: string, url: string): ListLink;
  abstract createTray(caption: string): ListTray;
  abstract createPage(title: string, author: string): ListPage;
}

class ListLink extends Link {
  constructor(caption: string, url: string) {
    super(caption, url);
  }

  makeHtml(): string {
    return `<li><a href="${this.url}">${this.caption}</a></li>`;
  }
}

class ListTray extends Tray {
  constructor(caption: string) {
    super(caption);
  }

  makeHtml(): string {
    const htmlArr: Array<string> = [];
    htmlArr.unshift(`<li>${this.caption}<ul>`);

    for (let item of this.trayList) {
      htmlArr.unshift(item.makeHtml());
    }

    htmlArr.unshift('</ul></li>');

    return htmlArr.join('');
  }
}

class ListPage extends Page {
  constructor(title: string, author: string) {
    super(title, author);
  }

  makeHtml(): string {
    const htmlArr: Array<string> = [];
    htmlArr.unshift(`<title>${this.title}</title>`);
    // join some other page string
    for (let item of this.content) {
      htmlArr.unshift(item.makeHtml());
    }

    return htmlArr.join('');
  }
}

class ListFactory extends Factory {
  createLink(caption: string, url: string): ListLink {
    return new ListLink(caption, url);
  }

  createPage(title: string, author: string): ListPage {
    return new ListPage(title, author);
  }

  createTray(caption: string): ListTray {
    return new ListTray(caption);
  }
}

// Main
function createMainPage(pageClass: any) {
  const factory: Factory = Factory.getFactory(pageClass);
  const people: Link = factory.createLink('People', 'www.ssss.com');
  const gmv: Link = factory.createLink('GMV','www.gmv.com');

  const news: Tray = factory.createTray('News');
  news.add(people);
  news.add(gmv);

  const page: Page = factory.createPage('title', 'abcd');
  page.add(news);
  page.output();
}

