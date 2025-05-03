// exportacion de modulos
// sirve para exportar modulos y funciones de un archivo a otro


// funciones 
export function add(a, b) { 
    return a + b;
}
console.log(add(2, 3));

// propiedades

export const PI = 3.14;
export let name = 'Juan';


// clases
export class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        return PI * this.radius ** 2;
    }
}



// exportacion por defecto
// sirve para exportar una sola funcion o variable de un archivo a otro
export default function substract(a,b){
    return a - b;
}



