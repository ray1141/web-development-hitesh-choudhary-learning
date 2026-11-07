const person = {
  name: "Anshika",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet();
const greetFn = person.greet;
greetFn();

//to grab the context
const boundGreet = person.greet.bind({ name: "Aarav" });
boundGreet();

//bind, call and apply
