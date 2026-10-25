//WAY 1
const computer = {
  cpu: 12,
};
const lenovo = {
  screen: "HD",
  __proto__: computer,
};
let hp = {};
// console.log(computer);
// console.log(`computer `, computer.__proto__);
// console.log(lenovo.__proto__); //will only show cpu:12 which is computer's property

//newer way
const genericCar = {
  tyres: 4,
};
const tesla = {
  driver: "AI",
};

//WAY 2
Object.setPrototypeOf(tesla, genericCar);
console.log("tesla ", tesla);
console.log("tesla ", genericCar);
console.log(tesla.tyres);
console.log("tesla ", Object.getPrototypeOf(tesla));
