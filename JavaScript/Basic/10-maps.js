// Map (o diccionario en otros lenguajes)
// no puede haber repetidos en clave (key)
 
// delacracion de un mapa
let myMap =new Map()
console.log(myMap) 

// inicializar un mapa con valores
myMap = new Map([
    ["name","sebastian"],
    ["email","sebitas.gmail.com"],
    ["age",24],
])
console.log(myMap)

// metodos y propiedades

// set 
myMap.set("alias","sebitas") // agrega un elemento al mapa
myMap.set("name","sebastian more") // actualiza el elemento
console.log(myMap)

// get (para recuperar el valor de una clave)
console.log(myMap.get("name")) // me regresa: sebastian more
console.log(myMap.get("alias")) // me regresa: sebitas

// has (para verificar si existe la clave)
console.log(myMap.has("name")) // true, existe la clave
console.log(myMap.has("alias")) // true, existe la clave
console.log(myMap.has("alias2")) // false, no existe la clave

// delete (para eliminar un elemento del mapa)
console.log(myMap.delete("email")) // true, se elimina el elemento
console.log(myMap) // me regresa el mapa sin el elemento eliminado


console.log(myMap.keys()) // devuelve un iterador con las claves del mapa
console.log(myMap.values()) // devuelve un iterador con los valores del mapa
console.log(myMap.entries()) // devuelve un iterador con las entradas del mapa (clave, valor)


//size (para obtener el tamaño del mapa)
console.log(myMap.size)

// clear (para eliminar todos los elementos del mapa)
myMap.clear() // elimina todos los elementos del mapa
console.log(myMap) // me regresa un mapa vacio





