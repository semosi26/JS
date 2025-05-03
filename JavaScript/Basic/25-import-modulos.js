// importacion de modulos

import {add, PI,name,Circle} from './24-export-modulos.js';
import resta from './24-export-modulos.js';

//funciones
console.log(add(5,10))

//propiedades
console.log(PI)
console.log(name)

//clases
let circle = new Circle(5);
console.log(circle.radius)
console.log(circle.area())


// importacion por defecto

console.log(resta(5,10))

