const numGen = function* () {
  yield 1;
  yield 2;
  yield 3;
};

let gen = numGen();
let gen2 = numGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);
