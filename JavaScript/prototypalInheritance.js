const Person = function (name) {
  this.name = name;
};

Person.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}`);
};

let anshika = new Person("Anshika");
anshika.greet();
