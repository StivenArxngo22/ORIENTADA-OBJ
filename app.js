
//Objetos
/*const comida = {
    id: 1,
    nombre: 'Manzana',
    color:"rojo",
}

console.log(comida.nombre)*/


//Clases
class Comida {
    constructor(id, nombre, color) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

//metodo
    nombrar(){
        return `${this.nombre} de color ${this.color}`;
    }
}

//heredar calses en js
class Galleta extends Comida {
    constructor(id, nombre, color, sabor) {
        super(id, nombre, color);
        this.sabor = sabor;
    }
    nombrarGalleta(){
        return `Galletas ${this.nombre} sabor ${this.sabor}`
    }
}

const manzana = new Comida(1, 'Manzana', "Rojo");
const pera = new Comida (2, 'pera', 'verde')
const oreo = new Galleta (3, 'oreos', 'negro', 'chocolate')
const chokis = new Galleta (3, 'chokis', 'marron', 'chocolate')

console.log(oreo.nombrarGalleta());
console.log(chokis.nombrarGalleta());
console.log(manzana.nombrar());
console.log(pera.nombrar());
