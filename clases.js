/*
//FUNCION CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
//propiedades o parametros
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    //agregar método
    this.informacion = function(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }
}
var mi_primer_auto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

mi_primer_auto.informacion();
/* primer mensaje
console.log(mi_primer_auto);
console.log(mi_primer_auto.marca);
*/

// EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
 }
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);