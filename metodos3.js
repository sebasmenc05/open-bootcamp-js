let input = "geminis"
// EXPRESIONES REGULARES Y METODOS DE BUSQUEDA

// pagina: regexr.com

let textoLargo = "tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer banana. Êl prefiere pasera por el bosque, oler las flores y recoger las nueces que se caen de los árboles"

console.log(textoLargo.match(/no/g))

console.log(textoLargo.includes("prefiere"))

console.log(textoLargo.startsWith("tito"))
console.log(textoLargo.endsWith(""))
