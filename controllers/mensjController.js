const path = require('path');
const fs = require('fs');

const mensajeControler = {
    traerMensajes: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/mensajes.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let mensajes = JSON.parse(dbJson);
        res.send(mensajes)
    }
}

module.exports = mensajeControler