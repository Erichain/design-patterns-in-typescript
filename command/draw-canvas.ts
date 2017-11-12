interface Drawable {
  draw(x: number, y: number): void;
}

interface Command {
  execute(): void;
}

class MacroCommand implements Command {
  private commands: Array<Command>;

  execute(): void {
    for (let command of this.commands) {
      command.execute();
    }
  }

  append(cmd: Command): void {
    if (cmd !== this) {
      this.commands.push(cmd);
    }
  }

  undo(): void {
    if (this.commands.length !== 0) {
      this.commands.pop();
    }
  }

  clear(): void {
    this.commands = [];
    this.commands.length = 0;
  }
}

class DrawCommand implements Command {
  protected drawable: Drawable;
  protected point: Array<number>;

  constructor(drawable: Drawable, position: Array<number>) {
    this.drawable = drawable;
    this.point = position;
  }

  execute(): void {
    this.drawable.draw(this.point[0], this.point[1]);
  }
}

class DrawCanvas implements Drawable {
  private history: MacroCommand;

  constructor(width: number, height: number, history: MacroCommand) {
    this.history = history;
  }

  draw(x: number, y: number): void {
    // implements
  }
}
