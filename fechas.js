const fecha = new Date
console.log(fecha)
new Date (1990, 5 , 12)
const fechaDeNac = new Date(1990, 5, 12)
console.log(fechaDeNac)
// los meses comienzan desde 0 ejemplo enero seria 0 y diciembre 11

let fechaHoy = fecha > fechaDeNac
console.log(fechaHoy)

console.log(fechaDeNac.getMonth() +1)

console.log(fechaDeNac.getFullYear())

