// Paradigmas de programación

const names = [
    "Juan",
    "Elizabeth",
    "Roberto",
    "Milagros",
    "Vanessa",
    "Pedro",
    "Ana",
    "Carlos"
];
let longNames = [];

// Programación Imperativa
/*  
    usando el arreglo anterior,
    verifica cuáles son nombres 
    largos y los separa en otro arreglo
    (Siendo nombres largos >=7 caracteres)
*/
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length >= 7) {
        longNames.push(name);
    }
}

console.log("Programación Imperativa: ", longNames);
// Programación Imperativa:  (4) ['Elizabeth', 'Roberto', 'Milagros', 'Vanessa']


// Programación Declarativa
/*  
    usando el arreglo anterior,
    verifica cuáles son nombres 
    largos y los separa en otro arreglo
    (Siendo nombres largos >=7 caracteres)
*/
longNames = names.filter(name => name.length >= 7);

console.log("Programación Declarativa: ", longNames);
// Programación Declarativa:  (4) ['Elizabeth', 'Roberto', 'Milagros', 'Vanessa']