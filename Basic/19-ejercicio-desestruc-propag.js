// 1. usa desestructuracion para extraer los dos primeros elementos de un array
let myArray = [1,2,3,'sebastian','more']
let [primerElemento, segundoElemento] = myArray
console.log(primerElemento, segundoElemento)

// 2. usa desestructuracion en un array y asigna un valor predeterminado a una variable
let [tercerElemento, , , ,cuartoElemento,quintoElemento=0] = myArray
console.log( tercerElemento,cuartoElemento,quintoElemento)

// 3. usa desestructuracion para extraer dos propiedades de un objeto

let myPerson = {
	name: 'sebastian',
	apellido: 'more',
	edad: 24,
	presentacion : function(){
		console.log(`mi nombre es ${this.name}`)
}
}
myPerson.presentacion()
let {name, apellido} = myPerson
console.log(name,apellido)


// 4. usa desestructuracion para extraer dos propiedades de un objeto 
// y asignarlas a nuevas variables con nombres diferentes

let {name:name2, apellido:apellido2} = myPerson
console.log(name2,apellido2)

// 5. usa desestructuracion para extraer dos propiedades de un objeto anidado
myPerson.job = {
    name: 'programador',
    exp: 15
}
console.log(myPerson)

let {name:name3, job:{name:jobName}} = myPerson
console.log(name3,jobName)


// 6. usa propagacion para combinar dos arrays en uno nuevo
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [...array1,...array2]
console.log(array3)

// 7. usa propagacion para crear una copia de un array
let array4 = [...array3]
console.log(array4)

// 8. Usa propagacion para combinar dos objetos en uno nuevo

let per1 = {
    name: 'sebastian'
}
let per2 = {
    age: 24
}
let per3 = {
    ...per1,
    ...per2
}
console.log(per3)

// 9.   usa propagacion para crear una copia de un objeto
let per4 = {
    ...per3
}
console.log(per4)

// 10. combina desestructuracion y propagacion