// Target
interface Print {
  printWeak(): string;
  printStrong(): string;
}

// Adaptee
class Banner {
  private banner: string;

  constructor(banner: string) {
    this.banner = banner;
  }

  printWithParen(): string {
    return `(${this.banner})`;
  }

  printWithAster(): string {
    return `*${this.banner}*`;
  }
}

// Adapter
class PrintBanner extends Banner implements Print {
  constructor(banner: string) {
    super(banner);
  }

  printWeak() {
    return super.printWithParen();
  }

  printStrong() {
    return super.printWithAster();
  }
}

// Client
const pb: PrintBanner = new PrintBanner('12V');
pb.printStrong();
pb.printWeak();
