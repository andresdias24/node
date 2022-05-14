const {v4: uudiv4} = require('uuid');

class Contacto {
    id = '';
    nombre = '';

    constructor(nombre) {
        this.id = uudiv4();
        this.nombre = nombre;
    }
}

module.exports = Contacto