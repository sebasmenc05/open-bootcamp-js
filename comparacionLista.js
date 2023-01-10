// comprar lista
//metodo.evry()

const array = [3,5,6,-23,234,-234,345,2,-123,-12312,11,-1234]

/* const result = array.every(valor => {
    if(valor === Number){
        return true
    } else {
       return false
    }
}) */

const result = array.every((valor) => valor === Number)
console.log(result)

/* comparar lista */
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]
console.log(ar1===ar2)

const compararArray = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => valor === array2[i])
    return res

}
console.log (compararArray(ar1, ar2))

