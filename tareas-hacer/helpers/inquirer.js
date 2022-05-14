const inquire = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'que desea hacer?',
        choices: [
            {
                name: `${'1.'.red}crear contacto`,
                value: '1'
            },
            {
                name: `${'2.'.red}listar contactos`, 
                value: '2'
            },
            {
                name: `${'3.'.red}actualizar contacto`, 
                value: '3'
            },
            {
                name: `${'4.'.red}eliminar contacto`,
                value: '4'
            },

            {
                name: `${'5.'.red}salir`,
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

const leerInput = async (message) => {
    let questions = [
        {   
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0 ) {
                    return 'ingrese un valor ';
                } 
                return true;
            }
        }
    ];
    const {desc} = await inquire.prompt(questions)
    return desc;
}


module.exports = {  inquireMenu, pausa, leerInput };