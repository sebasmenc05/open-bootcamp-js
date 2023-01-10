let persona = {
    nombre: "seba",
    Apellido: "mencia",
    edad: 32,
    altura: 1.79,
    isdevelop: false
}

let edad = persona.edad
console.log(edad)

let amigos = [{
    nombre: "seba", Apellido: "mencia", edad: 32, altura: 1.79,isdevelop: false},
    {nombre: "manu",Apellido: "men", edad: 22,altura: 1.12, isdevelop: true},
    {nombre: "jose", Apellido: "gonz", edad: 42, altura: 1.80, isdevelop: false}
]

let porEdad = amigos.sort((a , b) => b.edad - a.edad)
console.log(porEdad)
