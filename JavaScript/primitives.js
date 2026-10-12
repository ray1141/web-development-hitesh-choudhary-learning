// Number
let num1 = 100;
console.log(typeof num1);
let num2 = new Number(200);
console.log(typeof num2);
console.log(num2);

//Boolean
let isActive = true;
console.log(typeof isActive);

//Null and Undefined
let firstName;
let lastName = null;
console.log(firstName);
console.log(lastName);
console.log(typeof firstName);
console.log(typeof lastName);

//String
let str1 = `Hello`;
let greeting = `Hello ${str1}`;
console.log(typeof str1);
console.log(greeting);

//Symbol
let sym1 = Symbol("ans");
let sym2 = Symbol("ans");
console.log(typeof sym1);
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2); // false
