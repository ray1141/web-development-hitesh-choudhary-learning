const Person = function (name, age) {
  ((this.name = name), (this.age = age));
};

const Car = function (make, model) {
  ((this.make = make), (this.model = model));
};

const Tea = function (type) {
  ((this.type = type), (this.describe = () => `This is a cup of ${this.type}`));
};
const myCar = new Car("Toyota", "Camry");
// console.log(myCar);

const myNewCar = new Car("Tata", "Nexon");
// console.log(myNewCar);

const lemonTea = new Tea("lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());

const Animal = function (species) {
  this.species = species;
};

Animal.prototype.sound = function () {
  return `${this.species} makes a sound.`;
};

const dog = new Animal("Dog");
// console.log(dog.sound());

const cat = new Animal("Cat");
// console.log(cat.sound());

const Drink = function (name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword.");
  }
  this.name = name;
};

const tea = new Drink("tea");
// const coffee = Drink("coffee");
