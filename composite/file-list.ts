abstract class Entry {
  abstract getSize(): number;
  abstract getName(): string;
  abstract printList(prefix: string): void;
}

class MyFile extends Entry {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    super();

    this.name = name;
    this.size = size;
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.name}(${this.size})`)
  }
}

class Directory extends Entry {
  private fileList: Array<MyFile> = [];
  private name: string;

  constructor(name: string) {
    super();

    this.name = name;
  }

  addFile(file: MyFile) {
    this.fileList.push(file);
  }

  getSize(): number {
    let size: number = 0;

    for (let file of this.fileList) {
      size += file.getSize();
    }

    return size;
  }

  getName(): string {
    return this.name;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this.name}(${this.getSize()})`);
    console.log('\n--------------------------\n');

    for (let file of this.fileList) {
      file.printList(prefix);
    }
  }
}

const file1: MyFile = new MyFile('a', 10);
const file2: MyFile = new MyFile('b', 20);
const file3: MyFile = new MyFile('c', 30);
const directory: Directory = new Directory('d1');

directory.addFile(file1);
directory.addFile(file2);
directory.addFile(file3);

directory.printList('usr:');
