class Course {
  constructor() {
    if (this.constructor.name === "Course") {
      throw new Error("Abstract class should not be instantiated directly");
    }
  }
}

const oop = new Course();
console.log(oop);
