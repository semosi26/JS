// Desestructuración
// es una forma de extraer valores de un objeto o array y asignarlos a variables individuales.

let array = [1,2,3,4]

let person = {
    name: 'sebastian',
    age: 24,
    alias: 'more'
}

let myValue =array[0]
console.log(myValue)

let myName = person.name
console.log(myName)

// Desestructuración de arrays
let [myvalue0, myvalue1, myvalue2,myvalue3] = array
console.log(myvalue0, myvalue1, myvalue2, myvalue3)

// Desestructuración de arrays con valores predeterminados
let [myvalue4, myvalue5, myvalue6,myvalue7,myvalue8=0] = array
console.log(myvalue4, myvalue5, myvalue6, myvalue7, myvalue8)
// aqui no importa el nombre de la variable, solo el orden de los elementos del array


// ignorar elementos array

let [myvalue9, , ,myvalue12] = array
console.log(myvalue9, myvalue12)

// Desestructuración de objetos
// aqui si importa el nombre de la variable, ya que se asigna el valor de la propiedad del objeto a la variable
let {name, age, alias} = person
console.log(name, age, alias)
console.log(alias)

// sintaxis objetos con valores predeterminados

/* esto solo funciona para email
no funciona para las nuevas variables ya que esa key no 
existen en el objeto person

    let {name2, age2, alias2, email = 'sebitas.gmail.com'} = person
    console.log(name2, age2, alias2, email)
    
*/

// Desestructuración de objetos anidados

let person3 = {
    name:'sebastian',
    age: 24,
    alias: 'more',
    walk: function(){
        console.log('la persona camina')
    },
    job: {
        name: 'programador',
        exp: 15,
        work: function(){
            console.log('la persona trabaja')
        }
    }
}

let {name:name4, job:{name:jobname}} = person3 // esta es una manera de cambiar el nombre de la variable
console.log(name4)
console.log(jobname)
console.log(person3)

// propagacion (...)
// es una forma de copiar los valores de un objeto o array a otro objeto o array

let array2 = [...array]
console.log(array2)

let array3 = [...array, 5,6,7,8]
console.log(array3)

// combinacion de arrays

let array4 =[...array2, ...array3]
console.log(array4)

// sintaxis de propagacion en objetos

let person4 = {...person3}
console.log(person4)