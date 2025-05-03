// console

// console.log
console.log("Hello World!");

// console.error
console.error("Este es un mensaje de error"); // deberia salir en letra rojas
console.error('error al conectarse a la base de datos:', new Error('concexion fallida'));

// console.warn
console.warn("Este es un mensaje de advertencia"); // deberia salir en amarillo

// console.info

console.info("Este es un mensaje informativo"); // deberia salir en azul


// tambien se puede formatear datos

// console.table

let data = [      
    {name:'brais',age:37},
    {name:'sebastian',age:24},
    {name:'more',age: 25}
]
console.table(data);

// group
console.group('usuario:')
console.log('nombre: brais')
console.log('edad: 37')
console.groupEnd()


// time
console.time('tiempo de ejecucion')
for (let i = 0; i < 10000; i++) {

}
console.timeEnd('tiempo de ejecucion') // debe tener el mismo nombre que el de arriba

// assert
// sirve para lanzar un error si la condicion es falsa
let age = 17
console.assert(age >= 18, 'el usuario debe ser mayor de edad') // si la condicion es falsa, se lanza un error


// count

console.count('contador')
console.count('contador')
console.count('contador')
console.countReset('contador') // reinicia el contador