const path = require('path');
const fs = require('fs');

const portadaControler = {
    traerPortadas: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/portadas.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let portadas = JSON.parse(dbJson);
        res.send(portadas)
    }
}

module.exports = portadaControler