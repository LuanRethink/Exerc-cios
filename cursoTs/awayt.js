function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();
  await retornarValor();
  console.log("esperou 1 " + valor);
  await retornarValor();
  console.log("esperou dnv 2 " + valor);
  await retornarValor();
  console.log("Esperou mais uma vez 3 " + valor);
}

async function chamarExecutar() {
  const val = await executar();
  console.log(val);
}

chamarExecutar();
