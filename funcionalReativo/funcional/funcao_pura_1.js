const PI = 3.14;
//Influenciado por uma constante exterior *impura
function circArea(radius) {
  return radius * radius * PI;
}
// Influenciado por uma função externa *impura
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

// Influcienciada apelas pelos valores passados por parametro *pura
function sum(a, b) {
  return a + b;
}
// Tem um efeito coleteral observável *impura
let num = 0;
function sum(a, b) {
  num++;
  return a + b;
}

function setUserAge(user, age) {
  user.name = age;
  return user;
}

const luan = { name: "luan", ageR: 11 };
console.log(setUserAge(luan, 12));
console.log(luan);
