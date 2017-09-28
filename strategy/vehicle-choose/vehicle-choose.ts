interface VehicleStrategy {
  setOff(): object;
}

class Car implements VehicleStrategy {
  setOff(): object {
    const speed: number = 60;

    return {};
  }
}

class Subway implements VehicleStrategy {
  setOff(): object {
    const speed: number = 100;

    return {};
  }
}

class Traveler {
  private vehicle: VehicleStrategy;

  constructor(vehicle: VehicleStrategy) {
    this.vehicle = vehicle;
  }

  setOff(): object {
    return this.vehicle.setOff();
  }
}

const carTravler: Traveler = new Traveler(new Car());
const subwayTraveler: Traveler = new Traveler(new Subway());
carTravler.setOff();
subwayTraveler.setOff();

