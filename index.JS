console.log("esta es la puerta de entrada al proyecto");

const miFunction = val => {
    if (typeof val === "number"){
        return val *2
    }
    throw new Error ("el valor debe ser un numero")
}
let num = 8 
try {
const doble = miFunction(num)
console.log(miFunction)
}
catch (e){
    console.log("ERROR")

}
finally {
    console.log("esto se ejecuta con error o sin el error")
}