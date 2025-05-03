/*
datos primitivos:
son los datos en los que se fundamenta nuestra interacción con el lenguaje
son datos basicos, inmutables y representan un solo valor
    string (cadena de texto)
    number
    boolean
    null
    undefined
    symbol (es un valor único e inmutable que se utiliza como identificador de propiedades de objetos)
    bigint (es un tipo de dato que permite representar números enteros de tamaño arbitrario)

*/

// string
let myname = "Juan";
let alias = 'Juanito';
let email = 'Vjg4y@example.com';

// number 
let age = 25;
let height = 1.80;

// boolean
let isEstudiante = false;
let isProfesor = true;

// undefined
let undefinedVariable;
console.log(undefinedVariable);

// null
let nullVariable = null;
console.log(nullVariable);

//symbol
let symbol1 = Symbol('mysymbol');

// bigint
let bigInt = BigInt(1234567890123456789012345678901234567890);
let bigInt2 = 1234567890123456789012345678901234567890n; //n al final indica que es un bigint


// mostramos los tipos de datos
console.log(typeof myname);