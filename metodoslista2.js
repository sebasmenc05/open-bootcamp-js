//como unir listas
//.concat()

let hola = ["hola", 1, 2,3,"buen dia"]
let chau = ["chau", 4,5,6,"buenas noches", "que descanses"]
 let holaChau = hola.concat(chau)
 console.log(holaChau)

let lista4 = [...hola, ...chau]
console.log(lista4)

//como obtener una lista a partir de otra con el metodo .slice()

let arrayN = [hola, true, 45, 1990, "magui", null, "el metodo slice no modifica este array"]
let arrySlice = arrayN.slice(2,4)
console.log(arrySlice)

//COMO ITERAR UNA LISTA

//con un for normal
const listaParaIt = ["hola", 3, 4, 897, false, null, undefined]
for (let i = 0; i<listaParaIt.length; i++){
    console.log(listaParaIt[i]);
}

//con un foreach
let suma
let arraySuma = [3, 657, 4534, 23442, 234234]
listaParaIt.forEach(i => {
    suma += i
    console.log(i)
    
});
console.log (suma)

//busqueda de un valor en una lista con .find()




