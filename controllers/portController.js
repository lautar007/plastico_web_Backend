const path = require('path');
const fs = require('fs');

const portadaControler = {
    traerPortadas: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/portadas.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let portadas = JSON.parse(dbJson);
        res.send(portadas)
    },
    cambiarPortadas: (req, res) =>{
        let dbJsonPath = path.resolve(__dirname, '../0-data/portadas.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let portadas = JSON.parse(dbJson);

        portadas[0] = {
            imagenA: req.body.imagenA,
            imagenB: req.body.imagenB
        }

        let newPortada = JSON.stringify(portadas);
        fs.writeFile(dbJsonPath, newPortada, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          })

        res.send('Esta es una ruta de tipo post para cambiar las portadas');
    }
}

module.exports = portadaControler