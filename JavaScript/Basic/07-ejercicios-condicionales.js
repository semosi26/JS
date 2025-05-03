 // if/else/ else if/ternaria

// 1. imprime por consola tu nombre si una varibale toma su valor
let nombre = 'sebastian'
if (nombre == 'sebastian'){
console.log(nombre)
}

// 2. imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos
let usuario = 'sebitas2611'
let contraseña = '72285'
if (usuario=='sebitas2611' && contraseña == '72284'){
console.log('El usuario y contraseña coinciden')
} else {
console.log('El usuario y/o contraseña no coinciden')
}


// 3. verifica si un numero es positivo, negativo o cero e imprime un mensaje
let numero = 8
if (numero>0){
console.log('El numero es positivo')
} else if (numero<0){
console.log('El numero es negativo')
} else if (numero ==0) {
console.log('el numero es cero')} 


// 4. verifica se una persona puede votar o no (mayor o igual a 18 años) e indica cuantos años le faltan
let edad = 14
if (edad>=18){
console.log('La persona puede votar')
}
else {
let edad_faltante = 18 - edad
console.log(`La persona no puede votar, le faltan ${edad_faltante} años para ser mayor de edad`)
}

// 5. usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

const etapa = edad >= 18 ? "adulto" : "menor";
console.log(`La persona es ${etapa}`);

// 6. muestra en que estacion del año nos encontramos dependiendo del valor de una variable 'mes'

let mes = 'febrero'
if (mes == 'enero' || mes == 'febrero'){
    console.log('verano')
} else if (mes == 'septiembre' || mes == 'octubre'){
    console.log('invierno')}

// 7. muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 'enero'){
    console.log('el mes de enero tiene 31 dias')
} else if (mes == 'febrero'){
    console.log('el mes de febrero tiene 28 dias')
} else if (mes == 'marzo'){
    console.log('el mes de marzo tiene 31 dias')
} else if (mes == 'abril'){
    console.log('el mes de abril tiene 30 dias')}

// switch

// 8. usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma


// 9. usa un switch para hacer de nuevo el ejercicio 6.
switch (mes) {
    case 'enero':
        console.log('verano');
        break;
    case 'febrero': 
        console.log('verano');
        break;
    case 'octubre':
        console.log('invierno');
        break; }


// 10. usa un switch para hacer de nuevo el ejercicio 7.

switch (mes) {
    case 'enero':
        console.log('el mes de enero tiene 31 dias');        
        break;
    case 'febrero': 
        console.log('el mes de febrero tiene 28 dias');
        break;}