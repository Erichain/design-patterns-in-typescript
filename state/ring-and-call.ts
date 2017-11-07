interface Context {
  changeState(state: State): void;
  setClock(hour: number): void;
  callSecurityCenter(msg: string): void;
  recordLog(msg: string): void;
}

interface State {
  doClock(context: Context, hour: number): void;
  doUse(context: Context): void;
  doAlarm(context: Context): void;
  doPhone(context: Context): void;
}

class DayState implements State {
  static instance: State = null;

  static getInstance(): State {
    if (!this.instance) {
      this.instance = new DayState();
    }

    return this.instance;
  }

  doClock(context: Context, hour: number): void {
    if (hour < 9 && hour >= 17) {
      context.changeState(DayState.getInstance());
    }
  }

  doUse(context: Context): void {
    context.recordLog('Use in day time');
  }

  doAlarm(context: Context): void {
    context.callSecurityCenter('alarm in day time');
  }

  doPhone(context: Context): void {
    context.callSecurityCenter('normal call in day time');
  }

  getState(): string {
    return 'day time';
  }
}

class NightState implements State {
  static instance: State = null;

  static getInstance(): State {
    if (!this.instance) {
      this.instance = new DayState();
    }

    return this.instance;
  }

  doClock(context: Context, hour: number): void {
    if (hour >= 9 && hour < 17) {
      context.changeState(NightState.getInstance());
    }
  }

  doUse(context: Context): void {
    context.recordLog('Use in night time');
  }

  doAlarm(context: Context): void {
    context.callSecurityCenter('alarm in night time');
  }

  doPhone(context: Context): void {
    context.callSecurityCenter('record call in night time');
  }

  getState(): string {
    return 'night time';
  }
}

class SafeFrame implements Context {
  private state: State = DayState.getInstance();

  changeState(state: State): void {
    this.state = state;
  }

  setClock(hour: number): void {
    this.state.doClock(this, hour);
  }

  callSecurityCenter(msg: string): void {
    console.log(msg);
  }

  recordLog(msg: string): void {
    console.log(msg);
  }
}

const frame: SafeFrame = new SafeFrame();


