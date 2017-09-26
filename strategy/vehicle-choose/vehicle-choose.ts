interface VehicleStrategy {
  calculate(distance: number, isJammed: boolean): object;
}

class Car implements VehicleStrategy {
  calculate(distance: number, isJammed: boolean): object {
    const speed: number = 60;

    return {};
  }
}

class Subway implements VehicleStrategy {
  calculate(distance: number, isJammed: boolean): object {
    const speed: number = 100;

    return {};
  }
}

class Traveler {
  private vehicle: VehicleStrategy;

  setOff(): void {}
}
