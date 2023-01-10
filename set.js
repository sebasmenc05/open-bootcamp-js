/* sets*/

const array = [1,2,3,4,5,6,4,3,2,67]
console.log(array)

/* transfomara set */

const miSet= new Set(array)
console.log(miSet)

// agragar elemento con el metodo .add()
miSet.add(100)
console.log(miSet)

//eliminar elemento con el metodo .delete()
miSet.delete(67)
console.log(miSet)

// eliminar todos los elementos con el metodo .clear()
/* miSet.clear()
console.log(miSet) */



// saber si contienen algun elemento con el metodo .has()
console.log(miSet.has("hola"))

//como saber el tamaño de un set con la propiedad .size

console.log(miSet.size)

//iteración con el foreach

miSet.forEach(valor => {
    console.log(valor)
})

