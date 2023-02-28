// 1. Crie uma função que, ao receber uma array, gere um clone desta
// array.
// Por exemplo:

//const doubleArray = (arr) => [...arr];

//console.log(doubleArray([1, 2, 4, 0]));
// // [1, 2, 4, 0]
// console.log(doubleArray([1, 2, [7, 10]]));
// [1, 2, [7, 10]]

// 2. Crie uma função que, ao receber como parâmetros uma array e um
// número (opcional), cria uma outra array com os valores iniciais da
// array original de acordo com o número passado. Método: slice().

// const sliceArray = (arr, number) => {
//   number = number || 1;
//   const newArr = arr.slice(0, number);
//   return newArr;
// };

// //Por exemplo:
// console.log(sliceArray([7, 9, 0, -2], 3));
// // [7, 9, 0]
// console.log(sliceArray([7, 9, 0, -2]));
// // 7
// console.log(sliceArray([], 3));
// // []
// console.log(sliceArray([7, 9, 0, -2], 6));
// // [7, 9, 0, -2]
// console.log(sliceArray([7, 9, 0, -2], -3));
// // []

// 3. Crie uma função que aceite uma array numérica como parâmetro e:
// a. retorne outra array com todos os valores concatenados na forma
// de uma string, e
// b. com um sinal de ponto inserido a cada 3 numerais.

// const exercicio3 = (arr) =>
//   arr.reduce((acc, curr, index) => {
//     return index % 3 == 0 && index != 0
//       ? `${acc + "." + curr}`
//       : `${acc + curr}`;
//   }, "");

// // Exemplo:
// console.log(exercicio3([1, 2, 3, 4, 5, 6, 7, 8]));
// “123.456.78”

// 4 - Crie uma função que receba uma array de strings e retorne outra
// array apenas com os elementos de até 5 caracteres da array original.
// Exemplo:
// teste

// const returnUpToFive = (arr) => (
//   arr.filter((arr) => arr.length <= 5);
// );

// console.log(
//   returnUpToFive([
//     "cachorro",
//     "pato",
//     "oi",
//     "família",
//     "comer",
//     "camping",
//     "aquarela",
//   ])
// );
// ["pato", "oi", "comer"]

//2

// 5. Crie uma função, que utilize map(), que receba uma array de objetos.
// Uma das propriedades de cada objeto é a propriedade age. A função
// deve retornar outra array com 3 dados:
// a. a menor idade;
// b. a maior idade, e
// c. a diferença entre elas.
// Dica: use Math. https://www.w3schools.com/js/js_math.asp
// Exemplo:

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
