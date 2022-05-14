require('color')

const{inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Contactos = require('././models/Contactos');
const { saveDB } = require('././helpers/saveFile');

const main = async () => {   
    console.log('Hello World!');
    let opt = ''
    const contactos = new Contactos();

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