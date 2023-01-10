//busqueda de un valor dentro de una lista con el metodo .find()

let array = [1, 2, 4, 90, true, false, null]

let buscarElemento = array.find(valor => {
    if (valor === null){
        return true
    }
})
console.log(buscarElemento)

let listaDobjetos = [
    {nombre: "seba",
     apellido: "mencia",
    edad: 32},
    {nombre: "magali",
     apellido: "olmedo",
     edad: 25}

]
/* let buscarObjeto = listaDobjetos.find(o => {
    if (o === "seba"){
        return true
    }
}) */
let buscarObjeto = listaDobjetos.find(o => o.nombre == "seba")
console.log(buscarObjeto.apellido)

// trabajar con .map() .filter() .reduce()

let ciudades = ["buenos aires", "formosa", "san pablo", "floripa"]

ciudades.forEach(v => 
    {console.log(v)
    return 4
}
)

let ciudadesMap = ciudades.map((valor, indice) => `${indice + 1} - ${valor}` 
)
console.log(ciudadesMap)

//metodo .filter()
// con lista de objetos

let Productos = [
    {nombre: "fideos", marca: "marolio", precio: 34},
    {nombre: "arroz", marca: "amanda", precio: 50},
    {nombre: "yerba", marca: "playadito", precio: 24}
]
/* let productosCaros = Productos.filter(obj => {
    if (obj.precio > 25) {
        return true
    } else {
        return false
    }
}) */

let productosCaros = Productos.filter(obj => obj.precio > 30)
console.log(productosCaros)

// utilizar .reduce()

const valores = [3, 5, 678, 48923, 892]
const suma = valores.reduce()