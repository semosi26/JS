// Excepcion

// produce una excepcion
let myObjeto
//console.log(myObjeto)
//console.log(myObjeto.email)

// try-catch
// sirve para manejar errores en el código
try { // "intenta de ejecutar el bloque de código"
console.log(myObjeto.email)
console.log('finaliza la ejecucion sin errores')
}
catch{
    // "si hay un error, ejecuta este bloque de código"
    console.log('finaliza la ejecucion con errores')
}

// captura del error

try { // "intenta de ejecutar el bloque de código"
    console.log(myObjeto.email)
    }
    catch (error){
        // "si hay un error, ejecuta este bloque de código"
        console.log('se ha producido un error:',error.message)	
    }
    
// finally
// sirve para ejecutar un bloque de código independientemente de si se produce un error o no

try {
    console.log(myObjeto.email)
}
catch (error){
    console.log('se ha producido un error:',error.message)
}
finally{
    console.log('este codigo se ejecuta siempre')
    
}

// no esta soportado

// try{
// }
// finally{
//}

// lanzamiento de errores

// trow
// sirve para lanzar un error

throw new Error('se ha producido un error');
