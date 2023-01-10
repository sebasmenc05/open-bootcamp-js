// trabajando con objetos
let obj = {
    id:4,
    nombre: "juan",
    apellido: "gonzalez",
    librofav: "el principito",
    isdevelop: false
}
// con el metodo .sort() ordenamos listas que muta la lista original

let listaDePeliculas = [
    {titulo: "titanic", anyo: 1990},
    {titulo: "et", anyo: 1998},
    {titulo: "lo que el viento se llevo", anyo: 1994},
    {titulo: "matrix", anyo: 1993}
]

listaDePeliculas.sort((a,b) => a.anyo - b.anyo)
console.log(listaDePeliculas)