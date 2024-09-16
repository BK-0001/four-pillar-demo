class Course {
  constructor() {
    if (this.constructor.name === "Course") {
      throw new Error("Abstract class should not be instantiated directly");
    }
  }

  takeStudent() {
    throw new Error("abstract methods must be implemented");
  }
}

class OOP extends Course {
  takeStudent() {
    console.log(
      "taking students and students must complete some courses blah blah blah........."
    );
  }
}

const oop = new OOP();
console.log(oop.takeStudent());
