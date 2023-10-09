/*var deportes ={
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};*/
/*
var persona = {nombre: "Lucas", edad: 26, estudios:{esProgramador: true}};

//console.log(persona.edad);
persona.nombre = 'Martin';
//console.log(persona.nombre);
persona.edad = 32;
//console.log(persona.edad);

var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
delete autos.marcas;
console.log(autos.marcas);*/
/*
var mis_funciones = {
    saludar: function () {
        console.log('Hola');
    },
};

mis_funciones.saludar();*/
/*
var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'soquetes']};
//console.log(atuendos.manos);

atuendos["piernas"] = ['Bermudas', 'Pantalones'];
//console.log(atuendos);

var comidas = {};
var diferencia_de_notaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Verduras']
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferencia_de_notaciones("saludable", "no_saludable");
console.log(comidas);*/
/*
var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tiene_propiedad = libro.hasOwnProperty('autor');
//console.log(tiene_propiedad);

var todas_las_propiedades = Object.keys(libro);
console.log(todas_las_propiedades);*/
/*
  var mundo = {continentes: 7, paises: 195, oceanos: 5};
  for (var prop in mundo){
    console.log('Esta es la propiedad: '+prop);
    console.log('Este es el valor: '+mundo[prop]);
  }*/

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueña: 'María López',
    info: function () {
        console.log('Mi perro es un '+this.raza);
    },
};

mascota.info();