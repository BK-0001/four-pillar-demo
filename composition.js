class Engine {
  components = ["some components"];

  start() {
    console.log("engine has started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }
}

const audi = new Car();

audi.engine.start();
console.log(audi.engine.components);

// composition

const car = {
  engine: {
    horsePower: "200hp"
  }
};

// aggregate

const house = {
  rooms: [{ name: "office" }]
};

// aggregate
const condo = {
  rooms: [{ name: "Playroom" }, { name: "master bedroom" }]
};
