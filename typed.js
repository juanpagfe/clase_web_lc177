// Tipado dinámico en JavaScript

/*
    Crearemos una variable llamada 'test' que utilizaremos para 
    explicar el tipado dinámico.
 */

let test;

// Probando cadenas de texto
test = "Es una cadena de texto"
console.log(typeof(test)) // string

// Probando los distintos tipos de números
//  punto-flotantes
test = 3.2
console.log(typeof(test)) // number

//  enteros
test = 14
console.log(typeof(test)) // number

// bigint
test = 223283238822838228382283n
console.log(typeof(test)) // bigint

// Probando booleanos
test = false
console.log(typeof(test)) // boolean

// Probando nulos
test = null
console.log(typeof(test)) // object

// Probando objetos
test = { a: "Valor de a", b: 23, c: true }
console.log(typeof(test)) // object
