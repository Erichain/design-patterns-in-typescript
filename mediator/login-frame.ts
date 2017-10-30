interface Meditor {
  createColleagues(): void;
  colleagueChanged(): void;
}

interface Colleague {
  setMediator(meditor: Meditor): void;
  setColleagueEnabled(enabled: boolean): string;
}

class  ColleagueButton implements Colleague {
  private meditor: Meditor;

  setMediator(meditor: Meditor): void {
    this.meditor = meditor;
  }

  setColleagueEnabled(enabled: boolean): string {
    return enabled ? '启用' : '禁用';
  }
}

class ColleagueTextField implements Colleague {
  private mediator: Meditor;
  
  setMediator(mediator: Meditor): void {
    this.mediator = mediator;
  }
  
  setColleagueEnabled(enabled: boolean): string {
    return enabled ? '启用，白色' : '禁用，灰色';
  }
  
  textValueChanged(): void {
    this.mediator.colleagueChanged();
  }
}

class ColleagueCheckbox implements Colleague {
  private meditor: Meditor;

  setColleagueEnabled(enabled: boolean): string {
    return enabled ? '启用' : '禁用';
  }

  setMediator(meditor: Meditor): void {
    this.meditor = meditor;
  }
}

class LoginFrame implements Meditor {
  private checkGuest: ColleagueCheckbox;
  private checkLogin: ColleagueCheckbox;
  private textUser: ColleagueTextField;
  private textPass: ColleagueTextField;
  private buttonOk: ColleagueButton;
  private buttonCancle: ColleagueButton;

  constructor() {
    // add some implementations for UI
  }

  createColleagues(): void {}

  colleagueChanged(): void {
    // change component's state according to state
  }
}
