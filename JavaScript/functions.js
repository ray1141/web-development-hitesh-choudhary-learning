//function named makeTea that takes one parameter, typeOfTea, and returns a string like Making green tea when called with green tea. Store the result in a variable named teaOrder.

/*const makeTea = function (typeOfTea) {
  if (typeOfTea == "green tea") return "Making green tea";
};
const teaOrder = makeTea("green tea");
console.log(teaOrder);
*/

//function named orderTea that takes one parameter, teaType. Inside this function, create another function confirmOrder that returns a message like Order confirmed for chai. Call confirmOrder from within orderTea and return the result.

/*const orderTea = function (teaType) {
  const confirmOrder = function () {
    return "Order confirmed for chai";
  };
  return confirmOrder();
};
console.log(orderTea("chai"));
*/

//arrow function names calculateTotal that takes two parameters: price and quantity. The function should return the total cost by multiplying the price and quantity. Store the result in a variable named totalCost.

/*const calculateTotal = (price, quantity) => price * quantity;

const totalCost = calculateTotal(100, 10);
console.log(totalCost);
*/

//function names processTeaOrder that takes another function, makeTea as a parameter and calls it with the argument earl grey. Return the result of calling makeTea.

/*const makeTea = function (tea) {
  return `making ${tea} tea`;
};
const processTeaOrder = function (teafn) {
  return makeTea("earl grey");
};
console.log(processTeaOrder(makeTea));
*/

//function named createTeaMaker that returns another function. The returned function should take one parameter, teaType and return a message like Making green tea. Store the returned function in a variable named teaMaker and call it with green tea.

const createTypeOfTea = function (teaType) {
  return `Making ${teaType}`;
};
const createTeaMaker = function (tea) {
  return createTypeOfTea(tea);
};
const teaMaker = createTeaMaker("green tea");
console.log(teaMaker);
