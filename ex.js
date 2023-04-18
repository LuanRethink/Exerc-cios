var luiz = {
  nome: "luiz",
  idade: 50,
  outro: {
    nome: "outro",
    idade: 99,
  },
  arr: [
    "",
    "a",
    5,
    {
      tu: () => console.log("Clonou"),
    },
  ],
  my: () => null,
};

function deepClone(obj) {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }
  let clone = {};
  if (Array.isArray(obj)) {
    clone = obj;
  } else
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        clone[key] = deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }

  return clone;
}

var ar = deepClone(luiz);

luiz.nome = "luan";
luiz.arr[3] = () => {
  null;
};

console.log(luiz, ar);
