// Programación funcional
/*
    El tipo de funciones que usaremos en este caso se llaman 'funciones de primera clase',
    que significa que pueden ser tratadas tanto como funciones como variables en javascript.
 */

/* 
    Esta función es pura:  Se usa para obtener la raiz cúbica de un número
        Si el input es el mismo, el resultado siempre será el mismo.
*/

console.log("Función pura:")
const cubeRoot = num => Math.pow(num, 1 / 3);
console.log("Raiz cúbica de 16:", cubeRoot(16))
console.log("\n")

/*
    Esta función es impura:  Se usa para generar un entero aleatorio
        El mismo argumento puede producir diferentes resultados.
*/
console.log("Función impura:")

const randInt = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
};

console.log("Entero aleatorio entre 1-10:", randInt(1, 10))
console.log("\n")


/*
    Función recursiva que muestra en consola el factorial de un número dado.
*/

console.log("Función recursiva:")

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1);

console.log("Factorial de 4 (4x3x2x1):", factorial(4))
console.log("\n")

/*
    Funciones de orden superior: Funciones que reciben otras funciones como parámetros
    o retornan una función como resultado.

    REFERENCIA: Archivo oops.js --> para escoger la lista de nombres largos.
*/