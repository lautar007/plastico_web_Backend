const path = require('path');
const fs = require('fs');

const publicControler = {
    traerTodo: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/publicaciones.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let publicaciones = JSON.parse(dbJson);
        res.send(publicaciones)
    }
}

module.exports = publicControler