// loops o bucles
// los bucles nos permiten ejecutar un bloque de instrucciones varias veces
// se utilizan para realizar tareas repetitivas o iterativas
// los bucles se utilizan para recorrer arrays, objetos, strings y otros tipos de datos iterables

// for 
// for lo que hace es ejecutar un bloque de instrucciones varias veces

for (let i = 0; i<5; i++) {
    console.log(`hola ${i}`)
}


const numbers = [1,2,3,4,5,6,7]
for (let i = 0; i<numbers.length; i++) {
    console.log(`Elemento : ${numbers[i]}`)
}


// while 
// while lo que hace es ejecutar un bloque de instrucciones mientras una condición sea verdadera
let i = 0
while (i<5) {
    console.log(`hola ${i}`)
    i++
}

// do while
// do while lo que hace es ejecutar un bloque de instrucciones mientras una condición sea verdadera
i =6
do {
    console.log(`hola ${i}`)
    i++
} while (i<5)

// for off
// for of lo que hace es ejecutar un bloque de instrucciones para cada elemento de un iterable
myArray = [1,2,3,4,5]
mySet = new Set(['sebastian','jose','more','silva'])
myMap = new Map([
    ['name','sebastian'],
    ['email','sebitas.gmail.com'],
    ['age',24],
])

myString = "Hola JS"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// buenas practicas
// uso de break y continue

// continue sirve para saltar la iteracion actual y continuar con la siguiente
// break sirve para salir del bucle

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
    console.log(`hola ${i}`)
}


