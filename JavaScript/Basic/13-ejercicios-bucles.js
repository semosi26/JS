// 1. crea un bucle que sume todos los numeros del 1 al 20
let suma = 0
for ( let i = 0 ; i<=20 ; i++) {
suma += i
}
console.log(`la suma es : ${suma}`)


// 2. crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let suma2 = 0
for (let i=1; i<=100; i++){
suma2 += i
} 
console.log(`la suma es : ${suma2}`)


// 3. crea un bucle que imprima todos los numeros pares entre 1 y 50

//creamos los 50 primeros numeros
let numeros = [];

for (let i = 1; i <= 50; i++) {
  numeros.push(i); // se agrega al final
}

let numeros_pares = []
i=0

while (i < numeros.length) {
  if ( numeros[i] % 2 == 0) {
    numeros_pares.push(numeros[i]);    
} 
i++;
}
console.log(numeros_pares)

// 4. dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myarray = ["sebastian","jose","adriana","marcela"]
for (let i=0; i<myarray.length; i++){
    console.log(myarray[i])
}
// 5. escribe un bucle que cuente el numero de vocales en una cadena de texto
let texto = "PERUANOS";
let vocales = ['a', 'e', 'i', 'o', 'u'];  // Array de vocales
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i].toLowerCase())) {
    contador++;
  }
}

console.log(`Número de vocales: ${contador}`);


// 6. dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

let numeros2 = [1,2,3,4,5,6]
let multiplicacion = 1
for (let i = 0 ; i < numeros2.length ; i++) {
    multiplicacion *= numeros2[i]
}
console.log(`este es el producto: ${multiplicacion}`)



// 7. escribe un bucle que imprima la tabla de multiplicar del 5
for (let i =1 ; i<=12; i++){
console.log(`5 x ${i} = ${5*i}`)    
} 
// 8. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

let numeros3 = [5,6 ,10,8,12,15,1]
let mayores = []

for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i]>=10){
        mayores.push(numeros3[i])
    }
}
console.log(mayores)