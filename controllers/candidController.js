const path = require('path');
const fs = require('fs');

const candidControler = {
    traerCandidatos: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/candidatos.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let candidatos = JSON.parse(dbJson);
        res.send(candidatos)
    },

    cargarCandidato: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/candidatos.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let candidatos = JSON.parse(dbJson);
        let candidato = {
            id: Date.now(),
            nombre: req.body.nombre,
            edad: req.body.edad,
            mail: req.body.mail,
            telefono: req.body.telefono,
            newsletter: req.body.newsletter,
            pasantia: req.body.pasantia
        }
        candidatos.push(candidato);
        let newCandidatos = JSON.stringify(candidatos);
        fs.writeFile(dbJsonPath, newCandidatos, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          })
        res.send('Esto es un post a candidatos. Lo estamos probando')
    },

    eliminarCandidato: (req, res) => {
        let {nombre} = req.body;

        let dbJsonPath = path.resolve(__dirname, '../0-data/candidatos.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let candidatos = JSON.parse(dbJson);

        let delCandidatos = candidatos.filter(el => el.nombre !== nombre);

        let newCandidatos = JSON.stringify(delCandidatos);
        fs.writeFile(dbJsonPath, newCandidatos, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          })

        res.send('Esto es un delete a los candidatos.')
    }
}

module.exports = candidControler