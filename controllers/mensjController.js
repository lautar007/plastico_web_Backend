const path = require('path');
const fs = require('fs');

const mensajeControler = {
    traerMensajes: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/mensajes.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let mensajes = JSON.parse(dbJson);
        res.send(mensajes)
    },
    crearMensaje: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/mensajes.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let mensajes = JSON.parse(dbJson);

        let mensajito = {
            id: Date.now(),
            nombre: req.body.nombre,
            mail: req.body.mail,
            telefono: req.body.telefono,
            mensaje: req.body.mensaje
        }

        mensajes.push(mensajito);

        let newMensajes = JSON.stringify(mensajes);
        fs.writeFile(dbJsonPath, newMensajes, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          });

        res.send('Esto es una ruta de tipo post para crear mensajes')
    },
    eliminarMensaje: (req, res) =>{
        let {nombre} = req.body;

        let dbJsonPath = path.resolve(__dirname, '../0-data/mensajes.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let mensajes = JSON.parse(dbJson);

        mensajes = mensajes.filter(el => el.nombre !== nombre);

        let newMensajes = JSON.stringify(mensajes);
        fs.writeFile(dbJsonPath, newMensajes, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          });

        res.send('Esto es una ruta de tipo delete para eliminar mensajes')
    }
}

module.exports = mensajeControler