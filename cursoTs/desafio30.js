let carrinho = [
  { name: "Caneta", amount: 10, price: 7.99, isFragile: true },
  { name: "Impressora", amount: 1, price: 649.5, isFragile: true },
  { name: "Caderno", amount: 4, price: 27.1, isFragile: false },
  { name: "Lapis", amount: 3, price: 5.82, isFragile: false },
  { name: "Tesoura", amount: 1, price: 19.2, isFragile: true },
];

const resposta2 = carrinho
  .filter((item) => item.isFragile === true)
  .map((item) => item.amount * item.price);

const resposta3 = (funct) => {
  return Number(
    funct.reduce(function (soma, i) {
      return soma + i;
    }) / funct.length
  ).toFixed(2);
};
//console.log(typeof resposta3(resposta2));
//console.log();

const arrayL = [1, 2, 3, 4, 5, 6];
// console.log(
//   arrayL.reduce((acc, el) => {
//     console.log(acc + " " + el);
//     return acc + el;
//   })
// );

let a = 0;

console.log(a++);
