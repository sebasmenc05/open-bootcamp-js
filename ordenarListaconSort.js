//como ordenar arrays
// metodo .sort()

const array = [2,5,7,8,234,3,2345,9,1]
console.log(array)

array.sort((a, b) => {
    if (a<b){
        return -1
    } else if (a>b){
        return -1
    } else {
        return 0
    }
})

console.log(array)

// ordenar array numéricos
const arrayNumerico = [3, 4534,3453,234,123,450,2342,2342342,2,5]
arrayNumerico.sort((a,b)=> a - b)
console.log(arrayNumerico)


//ordenar objetos

let Productos = [
    {nombre: "fideos", marca: "marolio", precio: 34},
    {nombre: "arroz", marca: "amanda", precio: 50},
    {nombre: "yerba", marca: "playadito", precio: 24}
]

Productos.sort((a,b) => a.precio - b.precio
)
console.log(Productos)