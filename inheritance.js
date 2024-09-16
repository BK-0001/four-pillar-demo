class Animal {
  constructor(name) {
    this.name = name; // this === instance of class and its subclasses
  }

  walk() {
    console.log("walking....");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  attack() {
    console.log("attacking mise");
  }
}

const nabi = new Cat("Nabi");
nabi.walk();
