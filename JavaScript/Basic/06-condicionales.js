// if , else if, else

// if (si)
let age = 38;

if (age == 37){
    console.log("la edad es 37");
} else {
    console.log("la edad no es 37");
}


// else if
if (age == 37){
    console.log("la edad es 37");
} else if (age < 18){
    console.log("es menor de edad");
}
else {
    console.log("la edad no es 37 ni es menor de edad");
}


// Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// switch (opciones) 

let day = 0;
let nameday
if (day == 0){
nameday = "lunes";
} else if (day == 1){
    nameday = "martes";
} else if (day == 2){
    nameday = "miercoles";
} else if (day == 3){
    nameday = "jueves";
} else {
    nameday = "no es un dia de la semana";}
console.log(nameday);

switch (day) {
    case 0:
        nameday = "lunes";
        break;
    case 1:
        nameday = "martes";
        break;
    case 2:
        nameday = "miercoles";
        break;
    case 3:
        nameday = "jueves";
        break;
    default:
        nameday = "no es un dia de la semana";
        break;
}

console.log(nameday);


