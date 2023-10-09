class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log("Hola, mi nombre es: " + this.nombre + ", tengo " + this.edad);
    }
}

class Programador extends Persona {
    constructor(nombre, edad, años_de_experiencia) {
        //herencia : super
        super(nombre, edad);
        this.años_de_experiencia = años_de_experiencia;
    }

    codear() {
        console.log("Soy "+this.nombre+". Codeo desde hace "+this.años_de_experiencia+"años.");
    }
}
var martin = new Persona('Martin', 26);
var programador = new Programador('Maria', 37, 4);
/*martin.saludar();
programador.codear();*/
programador.saludar();