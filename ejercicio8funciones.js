function simpreTrue() {
  return true;
}

console.log(simpreTrue());

async function mensajeAsincrono() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Hola soy una promesa");
}

function* generadorIndicePares() {
  let indice = 0;
  while (true) {
    yield indice;
    indice += 2;
  }
}
