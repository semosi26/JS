// funciones
// una funcion es un conjunto de instrucciones que se ejecutan cuando se llama a ella
// se utilizan para realizar tareas repetitivas o iterativas

// simple
function myFunc(){
    console.log('hola funcion')
}

myFunc()
myFunc()

for (let i =0 ; i<5 ; i++){
    myFunc()
}


// con parametros
function myFunc2(name){
    console.log(`hola ${name}`)
}

myFunc2('sebastian')
myFunc2('sebitas')

// funcion anonimas

const myfunc3 = function (name){
    console.log(`hola ${name}`)
}

myfunc3('sebastian more')


// arrow functions
// forma mas concisa de escribir funciones

const myFunc4 = (name) => {
    console.log(`hola ${name}`)
}

myFunc4('sebastian more')


// parametros

function sum(a,b){
    console.log(a+b)
}
sum(5,10)

function defaulSum(a=0,b=0){
    console.log(a+b)
}
defaulSum()
defaulSum(5)
defaulSum(5,10)


// retornos de valores
function sum2(a,b){
    return a+b
}
let result = sum2(5,10)
console.log(result)

//forEach
// Sirve para recorrer arrays
const numbers = [1,2,3,4,5,6,7]
numbers.forEach((values) => console.log(values))
