// clases
// las clases son plantillas para crear objetos
// y son una forma de crear objetos en JS

let person = {
    name:'sebastian',
    age: 24,
    alias: 'more'
}
class Person{
    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }

}

// sintaxis

let person1 = new Person('marcela', 20, 'negra')
let person2 = new Person('marina', 51, 'capibara')

console.log(person1)
console.log(person2)
console.log(typeof person1)

// valores por defecto

class DefaultPerson{
    constructor(name = 'sin nombre', age=0, alias='sin alias'){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new DefaultPerson('Brais',14)
console.log(person3)


// acceso a propiedades
console.log(person3.name)
console.log(person3['alias'])

person3.alias = 'el mejor'
console.log(person3.alias)

// Funciones en clases

class Person2 {
    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
    walk(){
        console.log('la persona esta caminando')
    }
}

let person4 = new Person2('roger',30 ,'el rey')
person4.walk()

// propiedades privadas

class Person3 {
    #bank
    constructor(name, age, alias, bank){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank
    }
    pay(){
        this.#bank
    }
}

let person5 = new Person3('roger',30 ,'el rey', 'BANK1234')
console.log(person5)
console.log(person5.bank) // ya no se puede acceder a la propiedad privada

person5.bank = '111111' //  no se puede acceder a la propiedad privada, es como hacer un person5.newbank='111111'
console.log(person5)

// getters y setters

class GetSetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias,bank){
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank
    }
    get name(){  // para acceder a la propiedad privada
        return this.#name
    }
    set bank(bank){ // para modificar la propiedad privada
        this.#bank = bank
    }
    get bank(){  // para acceder a la propiedad privada
        return this.#bank
    }
}

let person6 = new GetSetPerson('roger',30 ,'el rey', 'BANK1234')
console.log(person6)

console.log(person6.name) // se accede a la propiedad privada a traves del getter
person6.bank = '111111' // se modifica la propiedad privada a traves del setter
console.log(person6.bank)



// HERENCIA
// la herencia es una forma de crear una nueva clase a partir de una clase existente
// la nueva clase hereda todas las propiedades y metodos de la clase padre
class Animal {
    constructor(name){
        this.name = name
    }
    sound(){
        console.log('el animal hace un sonido')
    }
}

class Dog extends Animal{

    sound(){
        console.log('guau')
    }
    run(){
        console.log('el perro corre')
    }
}

let mydog = new Dog('terry')
mydog.sound()
mydog.run()
console.log(mydog)


class Fish extends Animal{
    constructor(name,size){
        super(name);
        this.size = size
    }
    swin(){
        console.log('el pez nada')
    }
}

let myFish = new Fish('memo', 10)
console.log(myFish)
myFish.sound()
myFish.swin()


// metodos estaticos
// los metodos estaticos son metodos que se pueden llamar sin crear una instancia de la clase

class mathopertations{
    static sum(a,b){
        return a + b
    }
}

console.log(mathopertations.sum(5,10))