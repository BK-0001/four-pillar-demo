class Database {
  constructor() {
    if (this.constructor.name === "Database") {
      throw new Error("Cannot instantiate abstract class directly");
    }
  }

  connect() {
    throw new Error("abstract method must be implemented!");
  }
}

class Database1 extends Database {
  constructor() {
    super();
  }

  connect() {
    console.log("connecting db1");
  }
}

class Database2 extends Database {
  connect() {
    console.log("connecting db2");
  }
}

const db1 = new Database(); // Database1 {}
db1.connect();

const db2 = new Database2();
db2.connect(); // Not like this { connect: () => {} }
