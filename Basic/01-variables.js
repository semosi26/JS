// En JS tenemos tres formas de declarar variables:

// var: es la forma inicial que se tenia para declarar variables
// pero es la forma que no se usa, ya que tiene un alcance global y no es recomendable usarla
var helloWorld  = "Hello JavaScript!";
console.log(helloWorld);

helloWorld = "Hello de nuevo JS!";
console.log(helloWorld);


// let y const son las maneras que se debe usar para declarar variables en JS

// let
let helloWorld2 = "Hello JavaScript!2";
console.log(helloWorld2);

helloWorld2 = "Hello JavaScript!   2";
console.log(helloWorld2);

// const
// es una constante, no se puede cambiar el valor de la variable
const helloWorld3 = "Hello JavaScript!3";
console.log(helloWorld3);

// el siguiente codigo da error porque no se puede cambiar el valor de la variable
// helloWorld3 = "Hello JavaScript!   3";
// console.log(helloWorld3);