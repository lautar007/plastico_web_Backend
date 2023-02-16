const path = require('path');
const fs = require('fs');

const tareaControler = {
    traertareas: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/tareas.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let tareas = JSON.parse(dbJson);
        res.send(tareas)
    }
}

module.exports = tareaControler