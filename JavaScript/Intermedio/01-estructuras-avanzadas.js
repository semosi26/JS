// ESTRUCUTURAS AVANZADAS
// ARRAYS AVANZADOS
// - METODOS FUNCIONALES

// forEach
// sirve para recorrer cada uno de los elementos de un arrays

let numbers = [1,2,3,4,5]   
numbers.forEach(values => console.log(values))

// map
// sirve para recorrer cada uno de los elementos de un arrays y retornar un nuevo array con los elementos modificados
let double = numbers.map(element => element * 2)
console.log(double) // [2,4,6,8,10]


// filter
// sirve para recorrer cada uno de los elementos de un arrays y retornar un nuevo array con los elementos filtrados

let number_filter = numbers.filter(element => element % 2 === 0)
console.log(number_filter) // [2,4]


// reduce 

let sum = numbers.reduce((result, current) => result + current,0)
console.log(sum)



// - Manipulacion de Arrays

// flat 
let nesterArray = [1,[2,[3,[4]]]]
let flatArray = nesterArray.flat(1)
console.log(flatArray)
flatArray = nesterArray.flat(2)
console.log(flatArray)
flatArray = nesterArray.flat(3)
console.log(flatArray)


// flatMap
// sirve para recorrer cada uno de los elementos de un arrays y retornar un nuevo array con los elementos modificados

let phrases = ['hola mundo','adios mundo']
let words = phrases.flatMap(phrase => phrase.split(' '))
console.log(words)



// ordenacion

// sort 
// se basa en orden alfabetico

// sirve para ordenar los elementos de un 
let unsorted = ["b","a","d","c","z"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3,4,1,6,10]
sorted = unsorted.sort((a,b) => a - b)
console.log(sorted)

// reverse
// sirve para invertir el orden de los elementos de un array

sorted.reverse()
console.log(sorted)

//- busqueda 

console.log(sorted.includes(3))
console.log(sorted.includes(5))


// find
// sirve para encontrar el primer elemento que cumpla con la condicion

console.log(sorted.find(element => element % 2 == 0))

// findIndex
// sirve para encontrar el indice del primer elemento que cumpla con la condicion
console.log(sorted.findIndex(element => element % 2 == 0))



// SET AVANZADOS