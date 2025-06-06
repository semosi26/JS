// 1. crea una funcion que reciba dos numeros y devuelva la suma de ellos
function suma(a=0,b=0){
    console.log(a+b)
    }
    suma(10,5)
    
// 2. crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
let numeros = [1,2,3,4]
function numMayor (numeros){
    if (numeros.length === 0 ){
    return null}
    
    let mayor = numeros[0]
    for (let i=0; i<numeros.length; i++){
        if (numeros[i]>= mayor){
            mayor = numeros[i]
        }
    }
return mayor
}

console.log(numMayor(numeros))

// 3. crea una funcion que reciba un string y devuelva el numero de vocales que tiene

let vocales = ['a','e','i','o','u']
let palabra = 'marcela more'
function contarVocales(palabra) {
let contar = 0
for (i=0; i<palabra.length;i++){
if (vocales.includes(palabra[i].toLowerCase())){
contar +=1}
} 
return contar
}
console.log(contarVocales(palabra))


// 4. crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas
let palabra2 = ['marcela', 'sebastian', 'capibara']
function arrayMayuscula(palabra2) {
    let nuevoArray = []
    for (i=0 ; i < palabra2.length ; i++){
        if(typeof palabra2[i]==='string'){
            nuevoArray.push(palabra2[i].toUpperCase())
        } else {
            continue
        }		
    }
	return nuevoArray
}

console.log(arrayMayuscula(palabra2))



// 5. crea una funcion que reciba un numero y devuelva true si es primo, y false en caso constrario
function numeroPrimo(numero) {
    if (numero <= 1) {
      console.log('El número no es primo');
      return;
    }
    
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        console.log(`${numero} no es un número primo`);
        return;
      }
    }
    
    console.log(`${numero} es un número primo`);
  }
  
    numeroPrimo(7)

    

// 6. crea una funcion que reciba dos arrays y devuelva un nuevo un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(arr1, arr2) {
    return arr1.filter(elemento => arr2.includes(elemento));
  }
  
  // Prueba con tus arrays:
  let array1 = [1, 2, 3, 4, 5, 'marcela'];
  let array2 = ['sebastian', 5, 6, 'marcela', 8, 9];
  
  let comunes = elementosComunes(array1, array2);
  console.log(comunes); 
  
// 7. crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares

let arrayNumeros = [1,2,3,4,5,6,7,8]

function sumaPares (arrayNumeros) {
    let pares = 0
    for (let i=0 ;i < arrayNumeros.length ; i++ ){
        if ( arrayNumeros[i] % 2 == 0){
            pares += arrayNumeros[i]
        } 
}
return pares
}

console.log(sumaPares(arrayNumeros))



// 8. crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado
let arrayNumeros2 = [1,2,3,4,5,6,7,8]
function sumaPotencia (arrayNumeros2) {
    let potencia = []
    for (let i=0 ;i < arrayNumeros2.length ; i++ ){
        potencia.push(arrayNumeros2[i]**2)
    }
return potencia
}

console.log(sumaPotencia(arrayNumeros2))