const Contacto = require('./contacto');

/**
 * _listado: {
 *         {uuid-412431324-4123412-412 : {id:12 nombre: 'Juan'}}
 */
class Contactos {

    _listado  = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const contacto = this._listado[key] 
            listado.push(contacto);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarContacto(id = '') {
        if (this._listado[id]) {
        delete this._listado[id];
        }
    }


    getContacto(contactos = []) {
        return this._listado[contactos.id] = contactos;
    }
    

    crearContacto(nombre = '') {
        const contacto = new Contacto(nombre);
        this._listado[contacto.id] = contacto;
        return contacto;
    }
}

module.exports = Contactos;