// sets 
// el set sirve para guardar valores unicos, no se repiten
// no se pueden acceder por indice, no tienen orden
// no se pueden acceder por propiedades, no tienen propiedades
// a diferencia de los arrays, no tienen metodos como pop, push, shift, unshift
// no tienen length, no tienen clear


let myset = new Set()
console.log(myset)

// inicializar un set con valores
myset = new Set(["sebastian","jose","more","silva"])
console.log(myset)

// metodos comunes

// add agrega un elemento al set
myset.add("sebitas2611") // se agrega el final
console.log(myset)

// delete elimina un elemento del set
// no tenemos accedo directo a los indices
myset.delete("sebastian") // se elimina el elemento
console.log(myset)

console.log(myset[4]) // undefined, no se puede acceder por indice

console.log(myset.delete("jose")) // true, se elimina el elemento
console.log(myset)
console.log(myset.delete("Jose")) // false, no se encuentra el elemento
console.log(myset.delete(4))
console.log(myset.delete(3))
console.log(myset)

// has
// verifica si el elemento existe en el set
console.log(myset.has("more")) // true, existe el elemento
console.log(myset.has("Jose")) // false, no existe el elemento

//size
// devuelve el tamaño del set
console.log(myset.size) 

// convertir un set a array
let myarray = Array.from(myset)
console.log(myarray)

// convertir un array a set
myset = new Set(myarray)
console.log(myset)

/* los elementos de un set tienen que ser 
totalmente identicos , si cambiamos un solo caracter no es el mismo elemento
// por ejemplo "sebastian" y "Sebastian" son diferentes
*/