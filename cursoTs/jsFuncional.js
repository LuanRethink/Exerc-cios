function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const somarABC = somar(1)(2)(3);
console.log(somarABC);

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
