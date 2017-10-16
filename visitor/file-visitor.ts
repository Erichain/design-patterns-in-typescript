namespace FileVisitorPattern {
  abstract class Visitor {
    abstract visitFile(file: File): void;
    abstract visitDirectory(directory: Directory): void;
  }

  interface Element {
    accept(v: Visitor): void;
  }

  abstract class VisitorEntry implements Element {
    abstract getName(): string;
    abstract getSize(): number;
  }

  class File extends VisitorEntry {
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

    accept(v: Visitor): void {
      v.visitFile(this);
    }
  }

  class Directory extends VisitorEntry {
    private fileList: Array<File> = [];
    private name: string;

    constructor(name: string) {
      super();

      this.name = name;
    }

    addFile(file: File) {
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

    accept(v: Visitor): void {
      v.visitDirectory(this);
    }

    getFiles(): Array<File> {
      return this.fileList;
    }
  }

  class ListVisitor extends Visitor {
    private currDir: string = '';

    visitFile(file: File): void {
      console.log(`${this.currDir}/${file.getName()}`);
    }

    visitDirectory(directory: Directory): void {
      console.log(`${this.currDir}/${directory.getName()}`);

      for (let file: File of directory.getFiles()) {
        file.accept(this);
      }
    }
  }
}
