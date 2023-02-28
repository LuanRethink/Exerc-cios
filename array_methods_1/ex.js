//1.

const doubleArray = (arr) => [...arr];

console.log(doubleArray([1, 2, 4, 0]));
// [1, 2, 4, 0]
console.log(doubleArray([1, 2, [7, 10]]));
[1, 2, [7, 10]];

2;

const sliceArray = (arr, number) => {
  number = number || 1;
  const newArr = arr.slice(0, number);
  return newArr;
};

//Por exemplo:
console.log(sliceArray([7, 9, 0, -2], 3));
// [7, 9, 0]
console.log(sliceArray([7, 9, 0, -2]));
// 7
console.log(sliceArray([], 3));
// []
console.log(sliceArray([7, 9, 0, -2], 6));
// [7, 9, 0, -2]
console.log(sliceArray([7, 9, 0, -2], -3));
// []

//3.

const exercicio3 = (arr) =>
  arr.reduce((acc, curr, index) => {
    return index % 3 == 0 && index != 0
      ? `${acc + "." + curr}`
      : `${acc + curr}`;
  }, "");

// Exemplo:
console.log(exercicio3([1, 2, 3, 4, 5, 6, 7, 8]));
//“123.456.78”

//4.

const returnUpToFive = (arr) => arr.filter((arr) => arr.length <= 5);

console.log(
  returnUpToFive([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);
["pato", "oi", "comer"];

// 5.

const returnAges = (arr) => {
  const numbersArray = arr.map((value) => value.age);
  const maxAge = Math.max(...numbersArray);
  const minAge = Math.min(...numbersArray);

  return [minAge, maxAge, maxAge - minAge];
};

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

console.log(returnAges(input));
//[13, 67, 54];
