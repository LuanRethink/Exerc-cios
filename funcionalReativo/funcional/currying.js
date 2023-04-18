function textoTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        const tamanho = (texto || "").trim().length;
        console.log(!!(tamanho < min || tamanho > max));
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

const forcarTamanhoPadrao = textoTamanhoEntre(4)(255);

const p1 = { nome: "a", preco: 14, desc: 0.25 };
forcarTamanhoPadrao("Nome inválido")(p1.nome);
