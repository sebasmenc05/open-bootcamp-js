// for

for (let i = 1; i < 10; i++) {
    console.log(i)
    
}


// estructura for of
let lista = [1,2,4,8,12,400,1000]
for (const valor of lista) {
    console.log(valor)
}

//estructura for each
lista.forEach (valor => {
    console.log(valor)
})

// estructura for in
let persona = {
    nombre : "seba",
    mencia : "mencia",
    edad : 32,
    isdeveloper : false
}

for (let propiedad in persona){
    console.log (propiedad)
    console.log(persona.propiedad)
}