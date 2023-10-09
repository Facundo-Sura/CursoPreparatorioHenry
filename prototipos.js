/*
Array.prototype.mayores_que_tres = function() {
    var arreglo_modificado = [];
    for (let i=0; i<this.length; i++) {
        if (this[i] > 3) {
            arreglo_modificado.push(false);
        }
         else {
            arreglo_modificado.push(this[i]);
         }
    }
    return arreglo_modificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevo_arreglo = arreglo.mayores_que_tres();

console.log(nuevo_arreglo);
*/

class Latino_america {
    constructor() {
        this.paises = [];
    }
}

Latino_america.prototype.agregar_pais = function(pais) {
    this.paises.push(pais);
};

var continente = new Latino_america();
continente.agregar_pais("Mexico");
console.log(continente.paises); 
