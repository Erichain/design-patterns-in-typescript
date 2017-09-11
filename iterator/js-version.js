class Aggregate {
  constructor() {
    this.items = [];
  }

  appendItem(...item) {
    this.items.push(...item);
  }

  getItemAt(index) {
    return this.items[index];
  }

  getItems() {
    return this.items;
  }

  getLength() {
    return this.items.length;
  }

  iterator() {
    return new Iterator(this);
  }
}

class Iterator {
  constructor(aggregate) {
    this.index = 0;
    this.aggregate = aggregate;
  }

  next() {
    const currentItem = this.aggregate.getItemAt(this.index);

    this.index++;

    return currentItem;
  }

  hasNext() {
    return this.index < this.aggregate.getLength();
  }
}

const myList = new Aggregate();
myList.appendItem(1, 2, 3, 4, 5);

const iterator = myList.iterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
