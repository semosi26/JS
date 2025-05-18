// Funciones avanzadas

// ciudadanos de primera clase
// funciones que se pueden pasar como argumentos a otras funciones

// podriamos guardar la funcion en una constante, variable
const greet =function (name){
    console.log(`hola ${name}`)
}
greet("sebastian")

// podemos pasar la funcion como argumento a otra funcion
function processGreeting (greetFunction,name){
    greetFunction(name)
}

function returnGreeting(){
    return greet
}

processGreeting(greet,"sebastian")

const greet2 = returnGreeting()
greet2("sebastian")



// ARROW FUNCTIONS AVANZADAS
//sirven para crear funciones anonimas

// return implicito
// sirve para crear funciones anonimas que retornen un valor
const multiply = (a,b) => a * b
console.log(multiply(2,5))


// - this lexico
// sirve para saber en que contexto se esta ejecutando la funcion
const handler = {
    name: "sebastian",
    greeting: function(){
        console.log(`hola ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`hola ${this.name}`)
    } // las arrow functions crean su propio contexto
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresion de funcion invocada inmediatamente)
// sirve para crear funciones anonimas que se ejecuten inmediatamente

// - IIFE clasico

( function(){
    console.log("IIFE clasico")
} )();


( () => {
    console.log("IIFE CON ARROW FUNCTION")
} )();


// PARAMETREOS Rest (...)
// sirve para recibir un numero indefinido de parametros


//function suma (...numbers){
//   console.log(numbers)
// }
// sum(1,2,3,4,5) // retorna [1,2,3,4,5]
// sum(10,15) // retorna [10,15]

function sum(...numbers){
    let result = 0
    for(let number of numbers){
        result += number
    }
    return result
}

console.log(sum(1,2,3,4,5))
console.log(sum(10,15))



// Operador Spread (...)
// sirve para pasar un array como argumento a una funcion

const numbers = [1,2,3,4,5]
function sumWithSpread(a,b,c){
    return a + b + c
}
console.log(sumWithSpread(1,2,3)) // sin spread
console.log(sumWithSpread(...numbers)) // que tengas mas valores que los que necesitas no hay problema
// el problema es cuanto numbers tiene menos valores que los que necesita la funcion


// CLOSURES (Clausuras)

function createCounter(){
    let counter = 0
    return function executeCounter(){
        counter++
        console.log(`Contador: ${counter}`)
    }
}

createCounter()
createCounter()


const counter = createCounter()
counter()
counter()
counter()



// Recursividad 
// es una funcion que se llama a si misma

function factorial(n){
    if (n<=1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5))

// CURRYING
// es una tecnica para convertir una funcion que recibe muchos argumentos en una secuencia de funciones que reciben un solo argumento


function currySum(a){
    return function(b){
        return function(c){
            return sum(a,b,c)
        }
    }

}

const sumAB = currySum(1)(2)
console.log(sumAB(3))
console.log(sumAB(4))
console.log(sumAB(5))