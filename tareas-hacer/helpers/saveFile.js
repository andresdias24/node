const fs = require('fs');
const saveDB = (data) => {
    const file = './db/db.json';
    fs.writeFileSync(file, JSON.stringify(data));
}

module.exports = {
    saveDB
}