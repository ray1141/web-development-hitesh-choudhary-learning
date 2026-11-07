console.log("Hello All");
//timer function
const hello = function () {
  console.log("Hi!");
};
setTimeout(() => {
  hello();
}, 2000);

console.log("Not following sequence of code");
