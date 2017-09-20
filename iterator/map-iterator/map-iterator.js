class BooksMap {
  constructor() {
    this.booksMap = {};
  }

  addBook(key, value) {
    Object.assign(this.booksMap, {
      [key]: value,
    });
  }

  deleteBookByKey(key) {
    delete this.booksMap[key];
  }

  getBookByKey(key) {
    return this.booksMap[key];
  }

  getBookKeys() {
    return Object.keys(this.booksMap);
  }

  getBooksCount() {
    return Object.keys(this.booksMap).length;
  }

  iterator() {
    return new BooksIterator(this);
  }
}

class BooksIterator {
  constructor(booksMapInstance) {
    this.booksMapInstance = booksMapInstance;
    this.currentIndex = 0;
  }

  next() {
    const currentKey = this.booksMapInstance.getBookKeys()[this.currentIndex];
    const currentItem = this.booksMapInstance.getBookByKey(currentKey);

    this.currentIndex++;

    return currentItem;
  }

  hasNext() {
    return this.currentIndex < this.booksMapInstance.getBooksCount();
  }
}

const books = new BooksMap();

books.addBook('a', 'book1');
books.addBook('b', 'book2');
books.addBook('c', 'book3');

const it = books.iterator();

while (it.hasNext()) {
  console.log(it.next());
}
