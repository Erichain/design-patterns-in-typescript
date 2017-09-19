namespace NamesListIterator {
  interface NamesIterator {
    next(): string;
    hasNext(): boolean;
  }

  interface NamesList {
    iterator(): NamesIterator;
  }

  class ConcreteNamesList implements NamesList {
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

    iterator(): ConcreteNamesIterator {
      return new ConcreteNamesIterator(this);
    }
  }

class ConcreteNamesIterator implements NamesIterator {
  private namesList: ConcreteNamesList;
  private currentIndex: number = 0;

  constructor(namesList: ConcreteNamesList) {
    this.namesList = namesList;
  }

  hasNext(): boolean {
    return this.currentIndex < this.namesList.getLength();
  }

  next(): string {
    const currentName: string = this.namesList.getNameByIndex(this.currentIndex);
    this.currentIndex++;

    return currentName;
  }
}

  const namesList: ConcreteNamesList = new ConcreteNamesList();

  namesList.add('a');
  namesList.add('b');
  namesList.add('c');

  const it: ConcreteNamesIterator = namesList.iterator();

  while (it.hasNext()) {
    it.next();
  }
}
