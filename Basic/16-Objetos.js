// Objetos
// los objetos son una coleccion de propiedades y metodos
// los objetos son una coleccion de pares clave-valor

// todo lo que no es un dato primitivo es un objeto en javascript

// sintaxis
let person ={
    name: 'sebastian',
    age: 24,
    alias: 'more',
}

console.log(person)

// acceso a propiedades
// notacion de punto
person.name
console.log(person.name)

// notacion de corchetes
person['name']
console.log(person['name'])

// modificar propiedades
person.name = 'jose'
console.log(person.name)

console.log(typeof person.age)
person.age = "37"  // esto es por que js es de tipado debil
console.log(person.age)
console.log(typeof person.age)

// eliminacion de propiedades
delete person.age
console.log(person)


// nueva propiedad
person.email = 'sebitas.gmail.com'
console.log(person)

person['age'] = 24
console.log(person)

// metodos (funciones) en objetos

let person2 = {
    name:'sebastian',
    age: 24,
    alias: 'more',
    walk: function(){
        console.log('la persona camina')
    }
}

person2.walk()

// Anidacion de objetos
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
console.log(person3)
person3.job.work()
console.log(person3.job.name)

// igualdad de objetos
let person4 = {
    name:'jose',
    alias: 'more',
    email: 'sebitas.gmail.com',
    age: 24}
console.log(person)
console.log(person4)

console.log(person == person4) // false, porque son objetos diferentes
console.log(person === person4) // false, porque son objetos diferentes

console.log(person.name == person4.name) // true, porque son objetos diferentes


// iteracion de objetos
// se utiliza el for in para iterar sobre las propiedades de un objeto
for (let key in person) {
    console.log(key + ': ' + person[key])
}

// en metodo se utiliza ${this.name}