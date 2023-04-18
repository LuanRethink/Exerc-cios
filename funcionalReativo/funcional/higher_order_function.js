function ex(fn, ...params) {
  return function (initialText) {
    return `${initialText} ${fn(...params)}`;
  };
}

function sum(a, b, c) {
  return a + b + c;
}
function mult(a, b) {
  return a * b;
}

const f1 = ex(sum, 1, 2, 3)("Resultado da soma é:");
const f2 = ex(mult, 3, 4)("Resultado da multiplicação é:");

const x = 3;
