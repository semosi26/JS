// 1. crea un array que almacene cinco animales
let animales = ['perro','gato','gallina','burro','caballo']
console.log(animales)

// 2. añade dos más. uno al principio y otro al final
// agregamos uno al principio (unshift)
animales.unshift('raton')
console.log(animales)
// agregamos uno al final (push)
animales.push('leon')
console.log(animales)

// 3. elimina el que se encuentre en tercera posición
animales.splice(2,1)
console.log(animales)

// 4. crea un set que almacene 5 libros
let libros = new Set( ['libro1','libro2','libro3','libro4','libro5'])
console.log(libros)


// 5. añade dos más. Uno de ellos repetido
libros.add('libro6')
console.log(libros)

libros.add('libro1')
console.log(libros)

// 6. elimina uno concreto a tu eleccion
libros.delete('libro6')
console.log(libros)

// 7. crea un mapa que asocie el numero del mes a su nombre
let meses = new Map([
    [1,'enero'],
    [2,'febrero'],
    [3,'marzo'],
])
console.log(meses)

// 8. comprueba si el mes numero 5 existe en el map e imprime su valor 
meses.has(3) ? console.log(meses.get(3)) : console.log('No existe el mes')


// 9. añade al mapa una clave con un array como que almacene los meses del año
meses.set(12, ['enero','febrero','marzo'])
console.log(meses)

// 10. crea un array, tranformalo a un set y almacenalo en un map 
let array = ['sebastian','jose','more','silva']
let set = new Set(array)
let map = new Map()
map.set('array',set)
console.log(map)