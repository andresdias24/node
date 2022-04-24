require('colors');

const mostrarMenu = () => {
    return new Promise((resolve, reject) => {
        console.clear();
        console.log('==========================================================\n'.green);
        console.log('seleccione una opcion'.blue);
        console.log('==========================================================\n'.green);

        console.log(`1. crear contacto`.green);
        console.log(`2. listar contactos`.green);
        console.log(`3. actualizar contacto`.green);
        console.log(`4. eliminar contacto`.green);
        console.log(`5. salir \n`.green);
        console.log('==========================================================\n'.green);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(': ', (opcion) => {
            switch (opcion) {
                case '1':
                    console.log('crear contacto');
                    break;
                case '2':
                    console.log('listar contactos');
                    break;
                case '3':
                    console.log('actualizar contacto');
                    break;
                case '4':
                    console.log('eliminar contacto');
                    break;
                case '5':
                    console.log('salir');
                    readline.close();
                default:
                    console.log('Opción no válida');
                    break;
            }
        });
    });

}

const pausa = () => {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\n precione ${'Enter'.yellow} para continuar\n`, (opcion) => {
            readline.close();
            resolve();
        }  );
    });
}






module.exports = {
    mostrarMenu,
    pausa
}