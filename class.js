class Human {
  constructor(name, age, data) {
    this.name = name;
    this.age = age;
    this.dataOfBirth = data;
  }

  displayInfo() {
    console.log(`Human: name - ${this.name}, age - ${this.age}, birthday - ${this.dataOfBirth}`);
  }
}

class Employee extends Human {
  constructor(name, age, data, salary, department) {
    super(name, age, data);
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Employee: salary - ${this.salary}, department - ${this.department}`)
  }
}

class Developer extends Employee {
  constructor(name, age, data, salary) {
    super(name, age, data, salary);
    this.department = 'Developer';
  }
}

class Manager extends Employee {
  constructor(name, age, data, salary) {
    super(name, age, data, salary);
    this.department = 'Manager';
    this.listDev = [];
  }

  addDeveloper(name, age, data, salary) {
    this.listDev.push(new Developer(name, age, data, salary, this.name));
  }

  deleteDeveloper(name) {
    for (let i = 0; i < this.listDev.length; i++) {
      if (this.listDev[i].name === name) {
        this.listDev.splice(i, 1);
      }
    }
  }

  watchDev() {
    console.log(this.listDev);
  }
}

const ManDimasik = new Manager('Dimasik', 25, '20.12.1992', '2000$');
ManDimasik.addDeveloper('Roks', 23, '23.07.1994', '1300$');
ManDimasik.addDeveloper('Jekob', 22, '18.07.1995', '1200$');
ManDimasik.addDeveloper('Rendj', 23, '23.07.1994', '1300$');
ManDimasik.addDeveloper('Fobs', 22, '18.07.1995', '1200$');
ManDimasik.deleteDeveloper('Rendj');

const ManVitalik = new Manager('Vitalik', 28, '23.03.1995', '1500$');
ManVitalik.addDeveloper('Liana', 22, '11.05.1997', '1400$');
ManVitalik.addDeveloper('Kiti', 24, '11.05.1997', '1400$');
ManVitalik.addDeveloper('Mia', 22, '11.05.1997', '1400$');
ManVitalik.deleteDeveloper('Mia');

ManDimasik.watchDev();
ManVitalik.watchDev();