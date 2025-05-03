// asi se hace un comentario en typescript

/*
Asi se hace un comentario largo en typescript
Este es un ejemplo de un comentario largo
*/

console.log("Hello, Typescript!");


// Variables

var mystring = "Hello, ts";
// mystring = 5 Error
console.log(mystring);


let mystring2: string = "Hello, ts2"; // estamos tipando la variable
mystring2 = "Hello, ts3"; // se puede cambiar el valor de la variable
// mystring2 = 5; // Error, no se puede cambiar el tipo de la variable
mystring2 = "5";

console.log(mystring2);
console.log(typeof mystring2); // string


let myNumber: number = 7 
myNumber = myNumber + 4
console.log(myNumber);
console.log(typeof myNumber);


console.log(mystring + ' ' + myNumber);

let myNumber2 = 7.5
console.log(myNumber2);
console.log(typeof myNumber2);
console.log(myNumber + myNumber2);

let myBool : boolean = false
myBool = true
console.log(myBool);
console.log(typeof myBool);

// myBool = null Error, no se puede asignar null a un booleano
// console.log(myBool);

let myundefined: undefined
// myundefined = "Hello, undefined" Error
console.log(myundefined);




// CONSTANTES
const myConstant: string = "Hello, const"
//myConstant = "Hello, const2" // Error, no se puede cambiar el valor de una constante
console.log(myConstant);


// CONTROLES DE FLUJO
myNumber = 11

if( myNumber == 10  && mystring == 'Hola' ){
    console.log("El valor es 10");
} else if( myNumber == 11 || mystring == 'Hola' ){
    console.log("El valor es 11");
} else {
    console.log("El valor no es 10 ni 11");
}

// FUNCIONES

function myfunction(): string {
    return "Hello, function!";

}


console.log(myfunction())


function myfunction2( a: number, b: number ): number {
    return a + b;
}

console.log(myfunction2(1,2))


// Listas 

let mylist: Array<string> = ['sebas','more','silva']
console.log(mylist)

//Set no admite duplicados
let myset : Set<string> = new Set(['sebas','more','silva','sebas'])
console.log(myset)

myset.add('36');
console.log(myset)

// MAPAS
let mymap : Map<string,number> = new Map([["More",15],["Sebas",18],["Silva",19]])
mymap.set('sebas', 36)

console.log(mymap)
console.log(mymap.get('More'))


// CLASES
class MyPerson {
    name: string
    age: number    
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
}

let myperson = new MyPerson("Sebas", 36)
console.log(myperson)
console.log(myperson.name)