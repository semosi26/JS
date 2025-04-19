// array
// almacenar varios valores en una sola variable


//declarar un array
let myarray = [] // sintaxis recomendada
let myarray2 = new Array() // sintaxis no recomendada

console.log(myarray, myarray2)

myarray = [3]
myarray2 = new Array(3) // es como reservar espacios 
console.log(myarray, myarray2)

myarray = [1,2,3,4]
myarray2 = new Array(1,2,3,4) 
console.log(myarray, myarray2)

myarray = ["sebastian","jose","more","silva"]
myarray2 = new Array("sebastian","jose","more","silva") 
console.log(myarray, myarray2)

myarray = ["sebastian","jose","more","silva",1,2,3]
myarray2 = new Array("sebastian","jose","more","silva",1,2,3) 
console.log(myarray, myarray2)

myarray2 = new Array(3)
myarray2[0] = 'sebastian'
myarray2[1] = 'more'
myarray2[2] = 'silva'
console.log(myarray2)


myarray = []
// myarray[0] = 'sebastian'
myarray[1] = 'more'
myarray[2] = 'silva'
console.log(myarray)

// metodos comunes
myarray = []
// push y pop
// push agrega un elemento al final del array
myarray.push('sebastian')
myarray.push('more')
myarray.push('silva')
console.log(myarray) // [ 'sebastian', 'more', 'silva' ]

myarray.pop() // elimina el ultimo elemento
console.log(myarray) //[ 'sebastian', 'more' ]

//shift y unshift
// shift elimina el primer elemento
myarray.shift()
console.log(myarray) // [ 'more' ]

// unshift agrega un elemento al inicio del array
myarray.unshift('sebastian')
console.log(myarray) // [ 'sebastian', 'more' ]

myarray.unshift('jose','silva')
console.log(myarray) // [ 'jose', 'silva', 'sebastian', 'more' ]

// length 
console.log(myarray.length) // numero de elementos en el array

// clear
myarray = []
// myarray.length = 0 // otra forma
console.log(myarray)

// slice
// slice devuelve una copia de una parte del array
myarray = ["sebastian","jose","more","silva",1,2,3]
let mynewarray = myarray.slice(0,3)
console.log(mynewarray)

//splice
// splice elimina elementos de un array
