// Interface Aggregate
interface Aggregate {
	iterator(): BookShelfIterator;
}

// Interface Iterator
interface Iterator {
	next(): Book;
	hasNext(): boolean;
}

// concrete aggregate
class BookShelf implements Aggregate {
	private books: Array<Book>;
	private maxLength: number;

	constructor(maxLength: number) {
		this.maxLength = maxLength;
	}

	getBookAt(index: number) {
		return this.books[index];
	}

	appendBook(book: Book) {
		this.books.push(book);
	}

	getLength() {
		return this.books.length;
	}

	iterator() {
		return new BookShelfIterator(this);
	}
}

// concrete iterator
class BookShelfIterator implements Iterator {
	private bookShelf: BookShelf;
	private index: number;

	constructor(bookShelf: BookShelf) {
		this.bookShelf = bookShelf;
	}

	next() {
		const currBook: Book = this.bookShelf.getBookAt(this.index);
		this.index++;

		// return currBook;
	}

	hasNext() {
		return this.index < this.bookShelf.getLength();
	}
}

class Book {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

// main example
const bookshelf: BookShelf = new BookShelf(10);

bookshelf.appendBook(new Book('a'));
bookshelf.appendBook(new Book('b'));
bookshelf.appendBook(new Book('c'));

const it: Iterator = bookshelf.iterator();

while (it.hasNext()) {
	const book: Book = it.next();

	book.getName();
}
