const inquire = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'que desea hacer?',
        choices: [
            {
                name: 'crear contacto',  // name: 'crear contacto'
                value: '1'
            },
            {
                name: 'listar contactos',  // name: 'listar contactos',
                value: '2'
            },
            {
                name: 'actualizar contacto', // name: 'actualizar contacto',
                value: '3'
            },
            {
                name: 'eliminar contacto', // name: 'eliminar contacto',
                value: '4'
            },

            {
                name: 'salir',
                value: '5'
            }
        ]
    }
];
const inquireMenu = async () => {
    console.clear()
    console.log('=========================================================='.green);
    console.log('seleccione una opcion'.yellow);
    console.log('==========================================================\n'.green);

    const {opcion} = await inquire.prompt(questions)
    return opcion;
}

const pausa = async () => {
    let questions = [
        {
            type: 'confirm',
            name: 'opcion',
            message: `precione ${'Enter'.yellow} para continuar`
        }
    ]
    console.log('\n');
    await inquire.prompt(questions)
}


module.exports = {  inquireMenu, pausa };