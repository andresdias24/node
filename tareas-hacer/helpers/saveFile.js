const fs = require('fs');

const file = './db/db.json';


const saveDB = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const leerDB = () => {
    const file = './db/db.json';
    if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf-8');
        // console.log(JSON.parse(data));
        return JSON.parse(data);
    }
    return [];
}



module.exports = {
    saveDB,
    leerDB
}