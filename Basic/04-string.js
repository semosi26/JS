// strings

//Concatenation de cadenas
let myname = 'sebastian';
let greeting = "Hola, " + myname + "!";
console.log(greeting);

// longitud
console.log(greeting.length); 

// acceso a caracteres
console.log(greeting[0]);
console.log(greeting[2]);

// metodos comunes
console.log(greeting.toUpperCase()); // convierte a mayusculas
console.log(greeting.toLowerCase()); // convierte a minusculas
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("sebastian"));
console.log(greeting.includes("Hola")); // verifica si contiene la palabra
console.log(greeting.includes("sebastian"));
console.log(greeting.includes("Sebastian"));
console.log(greeting.slice(0, 4)); // corta la cadena desde el 0 al 4
console.log(greeting.slice(0, 8)); // corta la cadena desde el 0 al 8
console.log(greeting.replace("sebastian", "Sebitas")); // reemplaza la palabra

// template literals (plantillas literales)

let mensaje = `Hola, este es mi
curso de JavaScript`;
console.log(mensaje);
let email = 'sebitas@gmail.com'
// interpolacion de variables esto solo funciona con comillas invertidas
console.log(`Hola, ${myname} tu email es ${email}`);