require('color')

const{inquireMenu, pausa, leerInput, listaContactosBorrar } = require('./helpers/inquirer');
const Contactos = require('././models/Contactos');
const { saveDB, leerDB  } = require('././helpers/saveFile');

const main = async () => {   
    console.log('Hello World!');
    let opt = ''
    const contactos = new Contactos();

    const contactosDB = await leerDB();

    if (contactosDB) {
        // establecer el listado de contactos
        contactos.getContacto(contactosDB);
    }

    do {
        // imprimir el menu 
        opt = await inquireMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Description:');
                contactos.crearContacto(desc);
                break;
            case '2':
                console.log(contactos._listado,'Listar contactos');
                break
            case '4':
                const id =  await listaContactosBorrar(contactos.listadoArr);
                break
            default:
                break;
        }

        saveDB(contactos.listadoArr)
        // console.log(contacto);
        
        await pausa();
        // if (opt !== '0') await pausa();
    } while (opt !== '0')

}

main();