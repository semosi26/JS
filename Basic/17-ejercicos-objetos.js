// 1. crea un objeto con 3 propiedades

let personaje = {
    nombre: 'edward newgate',
    alias: 'barba blanca',
    fruta: 'gura gura no mi'
}

// 2. accede y muestra su valor
console.log(personaje)
// 3. agrega una nueva propiedad
personaje.rival = 'roger'
console.log(personaje)
// 4. Elimina una de las 3 primeras propiedades
delete personaje.alias
console.log(personaje)

// 5. agrega una funcion e invocala

personaje.comandantes = function() {
    console.log('Marco, Jozu, Vista, Thatch')
}
console.log(personaje)
personaje.comandantes()

// 6. itera las propiedades del objeto

for (let key in personaje) {
    console.log(key + ': ' + personaje[key])
}

// 7. crea un objeto anidado

personaje.alidos ={
    nombre: 'Jimbe',
    alias: 'El caballero de los mares',
    fruta: 'sin fruta'
}
console.log(personaje)

// 8.  accede y muestra el valor de las propiedades anidadas

console.log(personaje.alidos.alias)
