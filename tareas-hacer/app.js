require('color')

const{inquireMenu, pausa } = require('./helpers/inquirer');


console.clear();
const main = async () => {   
    console.log('Hello World!');
    let opt = ''

    do {
        opt = await inquireMenu();
        console.log({opt});
        
        await pausa();
        // if (opt !== '0') await pausa();
    } while (opt !== '0')

}

main();