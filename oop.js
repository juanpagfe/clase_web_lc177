// Programación Orientada a Objetios

// Clase Shape, contiene un método compartido 'getArea()'
class Shape {
    getArea() {
        throw "Tienes que implementar getArea()"
    }
}

/*
    La clase Circle extiende a Shape, por lo tanto,
    al escribir getArea() sobreescribe el anterior.
 */
class Circle extends Shape {

    /*
    El constructor recibe el radio de la circunferencia.
    Además llama al constructor de su super-clase.
    */
    constructor(radius) {
        super()
        this.radius = radius
    }

    /*
     Se sobreescribe getArea() con la fórmula del área
        de la circunferencia
    */
    getArea() {
        return Math.PI * this.radius * 2;
    }
}

/*
    La clase Rectangle extiende a Shape, por lo tanto,
    al escribir getArea() sobreescribe el anterior.
 */
class Rectangle extends Shape {
    /*
    El constructor recibe el alto y ancho del rectángulo.
    Además llama al constructor de su super-clase.
    */
    constructor(height, width) {
        super()
        this.height = height
        this.width = width
    }

    /*
     Se sobreescribe getArea() con la fórmula del área
        del rectángulo
    */
    getArea() {
        return this.height * this.width
    }
}

console.log("Probando el círculo:")
let circle = new Circle(4, 4, 42)

if (circle instanceof Shape)
    console.log("circle es de tipo Shape")

console.log("Área del círculo: ", circle.getArea())
console.log("\n")

console.log("Probando el rectángulo:")
let rectangle = new Rectangle(2, 4);

if (rectangle instanceof Shape)
    console.log("rectangle es de tipo Shape")

console.log("Área del rectángulo: ", rectangle.getArea())
console.log("\n")

/*
Se crea la clase cuadrado que extiende de rectángulo.
Esta a su vez sería una clase Shape por leyes de la
herencia.
No se sobreescribe en este caso getArea(), por lo tanto
tomará la misma fórmula de Rectangle
*/
class Square extends Rectangle {
    //Recibe sólo el tamaño del lado
    constructor(size) {
        /*
        Llama al constructor de su super-clase
        repitiendo el tamaño tanto de ancho como
        de alto.
        */
        super(size, size)
    }
}

console.log("Probando el cuadrado:")
let square = new Square(4, 4);

if (square instanceof Shape)
    console.log("square es de tipo Shape")

if (square instanceof Rectangle)
    console.log("square es de tipo Rectangle")

console.log("Área del cuadrado: ", square.getArea())