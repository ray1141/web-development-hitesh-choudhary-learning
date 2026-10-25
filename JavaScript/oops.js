//object creation
const car = {
  make: "Tata",
  model: "Nexon",
  year: 2025,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

//constructor function
const Person = function (name, age) {
  ((this.name = name), (this.age = age));
};

const anshika = new Person("Anshika", 23);
// console.log(anshika.name);

//prototypal chain
const Animal = function (type) {
  this.type = type;
};

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
Array.prototype.customMethod = function () {
  return `Custom method ${this}`;
};
const arr = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5, 6];
// console.log(arr.customMethod());
// console.log(arr2.customMethod());

//class
class Vehicle {
  //ctor
  constructor(make, model) {
    ((this.make = make), (this.model = model));
  }

  //methods
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

//inheritence
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritence example`;
  }
}

const myCar = new Car("Tata", "Nexon");
// console.log(myCar.start());
// console.log(myCar.drive());

const vehicle1 = new Vehicle("Tata", "Nexon");
// console.log(vehicle1.make);

//Encapsulation
class BankAccount {
  #balance = 0; //not available

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

const account = new BankAccount();
account.deposit(100);
// console.log(account.getBalance());

//Abstraction
class CoffeeMachine {
  start() {
    //call DB
    //filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    console.log(this.start());
    console.log(this.brewCoffee());
  }
}

const myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brew());
// myMachine.pressStartButton();

//Polymorphism
class Bird {
  fly() {
    return "Flying...";
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

const bird = new Bird();
const penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// console.log(Calculator.add(2, 3));

//Getters and Setters
class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    if (salary < 0) throw new Error("Salary cannot be in negative");
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary.`;
  }

  set salary(salary) {
    if (salary < 0) console.error("Invalid salary");
    else this._salary = salary;
  }
}
const emp = new Employee("Alice", 50000);
console.log(emp.salary);
emp.salary = 50000;
