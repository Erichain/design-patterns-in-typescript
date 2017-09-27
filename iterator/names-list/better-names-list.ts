namespace BetterNamesList {
  interface NamesIterator {
    next(): string;
    hasNext(): boolean;
  }

interface NamesList {
  getIterator(iterator: NamesIterator): NamesIterator;
}

class BetterNamesList implements NamesList {
  private namesList: Array<string> = [];

  add(name: string): void {
    this.namesList.push(name);
  }

  deleteNameByIndex(index: number): void {
    this.namesList.splice(index, 1);
  }

  getNameByIndex(index: number): string {
    return this.namesList[index];
  }

  getLength(): number {
    return this.namesList.length;
  }

  getIterator(iterator: NamesIterator): NamesIterator {
    return iterator;
  }
}

class NamesIteratorByOdd implements NamesIterator {
  private namesList: BetterNamesList;
  private currentIndex: number = 0;

  constructor(namesList: BetterNamesList) {
    this.namesList = namesList;
  }

  hasNext(): boolean {
    return this.currentIndex < this.namesList.getLength();
  }

  next(): string {
    const currentName: string = this.namesList.getNameByIndex(this.currentIndex);
    this.currentIndex = this.currentIndex + 2;

    return currentName;
  }
}

  const namesList: BetterNamesList = new BetterNamesList();

  namesList.add('a');
  namesList.add('b');
  namesList.add('c');

  const it: NamesIterator = namesList.getIterator(new NamesIteratorByOdd(namesList));

  while (it.hasNext()) {
    it.next();
  }
}
