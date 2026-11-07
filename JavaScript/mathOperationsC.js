//named export

const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mul = function (a, b) {
  a * b;
};

module.exports = {
  add,
  sub,
  mul,
};
