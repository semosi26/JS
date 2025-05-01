// crea un clase que riciba dos propiedades
class PrimeroClass {
    constructor(name,apellido){
        this.name=name;
        this.apellido = apellido
    }
    saludar(){
        console.log(`${this.name} ${this.apellido} te saluda`)
    }
}
let person1= new PrimeroClass ('sebas','more')
console.log(person1)
// anade un metodo a la clase que utilice las propiedades
person1.saludar()
// muestra los valores de las propiedades e invoca a la funcion


// añade un metodo estatico a la primera clase
console.log(person1.name)
console.log(person1.apellido)
person1.saludar()

//  haz uso del metodo estatico
class SumClass {
    static saludar(name,apellido){
        return `${name} ${apellido} te saluda`
    }
}
SumClass.saludar('sebas','more')


// crea una clase que haga uso de herencia

class alumno extends PrimeroClass{
    constructor(name,apellido,curso){
        super(name,apellido);
        this.curso = curso
    }
}
let alumno1 = new alumno('sebas','more','javascript')
console.log(alumno1)

// crea una clase que haga uso de getters y setters

class wifi {
    #password

    constructor(name, password){
        this.name = name;
        this.#password = password
    }
    get password(){
        return this.#password
    }
    set password(password){
        this.#password=password	
    }
}

let casa1 = new wifi('casa', '123456')
console.log(casa1)
console.log(casa1.password)

casa1.password = '654321' // se modifica la propiedad privada a traves del setter
console.log(casa1.password)


