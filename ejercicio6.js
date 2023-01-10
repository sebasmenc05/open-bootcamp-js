/* lista de compras */
let listaCompras = [
    {nombre: "arroz", marca:"amanda", precio: 100},
    {nombre: "fideos", marca: "don vicente", precio: 120},
    {nombre: "azucar", marca: "marolio", precio: 110},
    {nombre: "sal", marca: "celusal", precio: 90},
    {nombre: "polenta", marca: "ultrak", precio: 140},
]

/* agrega aceite de girasol */
listaCompras.push({nombre: "aceite de Girasol", marca:"vicente", precio: 200})
console.log(listaCompras)

/* Quita aceite de girasol */
listaCompras.pop({nombre: "aceite de Girasol", marca:"vicente", precio: 200})
console.log(listaCompras)

/* lista de peliculas favoritas */

let listaPeliculas = [
    {nombre: "superman", director: "richart donner", año: 1978},
    {nombre: "matrix", director: "lana wachowski", año:2000},
    {nombre: "jhon wick", director: "chad stalheski", año: 2002}
    
]

let listaDirectores = listaPeliculas.map(valor => valor.director)
console.log(listaDirectores)


let listaTitulos = listaPeliculas.map(valor => valor.nombre)
console.log(listaTitulos)


let nuevaListaConcat = listaTitulos.concat(listaDirectores)
console.log(nuevaListaConcat)

let listaConPropagacion = [...listaDirectores,...listaTitulos]
console.log(listaConPropagacion)