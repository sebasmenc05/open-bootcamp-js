// arrays
// Acceder a los arrays de acuerdo a su posicion

let num1 = 90
let arrays  = [1, 4, "hola mundo", false, {id: 5}, num1]
console.log(arrays[1])
console.log(arrays[0]) //con el inide 0 se selecciona el primer elemento del array

//Introducir nuevos valores con .push() que agrega al final y .unshift() que agrega al principio
arrays.push("esto va al final","ahora va esto")
arrays.unshift("este strin va al principio", 34,56)
console.log(arrays)

//metodos para eliminar elementos del array.pop() que quita el ultimo 
//array.shift() que quita al principio
arrays.pop()
arrays.shift()
console.log(arrays)

//Metodo para añadir modifica o quitar elemetos de un array con splice()

arrays.splice(3,1)
console.log(arrays)
arrays.splice(3,0,"hola munod", "esto va por aqui")
console.log(arrays)

