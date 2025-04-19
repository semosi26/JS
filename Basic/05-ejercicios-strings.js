// 1. concatena dos cadenas de texto
let palabra1 = 'primera palabra';
let palabra2 = 'segunda palabra';
console.log(palabra1)
console.log(palabra2)
console.log(palabra1 + ' ' + palabra2);

// 2. muestra la longitud de la cadena de texto
console.log('La longitud de la cadena de la primera palabra es: ' + palabra1.length);

// 3. muestra el primer y ultimo caracter de la cadena de texto
console.log('el primer caracter es: ' + palabra1[0]);
console.log('el ultimo caracter es: ' + palabra1[14]);

// 4. convierte a mayusculas y minusculas un string
console.log('la palabra en mayusculas es: ' + palabra1.toUpperCase());

// 5. crea una cadena de texto en varias lineas 
let palabra3 =`Esta es 
               la tercera palabra`;
console.log(palabra3);

// 6. interpola el valor de una variable en un string
console.log(`estas son todas las palabras
    palabra1: ${palabra1}
    palabra2: ${palabra2}
    palabra3: ${palabra3}`);

// 7. reemplaza todos los espacios en blanco de un string por guiones
console.log(palabra1.replace(/ /g, '-'));
// 8. comprueba si una cadena de texto contiene una palabra en concreto
console.log(palabra1.includes('primera'));
// 9. comprueba si dos strings son iguales
console.log(palabra1 === palabra2);
// 10. comprueba si dos strings tienen la misma longitud
console.log(palabra1.length === palabra2.length);