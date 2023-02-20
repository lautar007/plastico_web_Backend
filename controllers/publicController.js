const path = require('path');
const fs = require('fs');

const publicControler = {
    //Función para traer todas las publicaciones:
    traerTodo: (req, res) => {
        let dbJsonPath = path.resolve(__dirname, '../0-data/publicaciones.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let publicaciones = JSON.parse(dbJson);
        res.send(publicaciones)
    },
    //Función para traer una publicación por ID:
    traerPorId: (req, res) =>{
        let id = req.params.id;
        let dbJsonPath = path.resolve(__dirname, '../0-data/publicaciones.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let publicaciones = JSON.parse(dbJson);
        let publiById = publicaciones.filter( el => el.id == id)
        res.send(publiById)
    },
    //Función para crear una nueva publicación:
    crearPublicacion: (req, res) =>{
        let dbJsonPath = path.resolve(__dirname, '../0-data/publicaciones.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let publicaciones = JSON.parse(dbJson);
        let newPublic = {
            id: Date.now(),
            titulo: req.body.titulo,
            fecha: req.body.fecha,
            contenido: req.body.contenido,
            imagen: req.body.imagen,
            categoria: req.body.categoria,
            galeria: req.body.galeria,
            subtitulo: req.body.subtitulo
        }
        publicaciones.push(newPublic);
        let newPublicaciones = JSON.stringify(publicaciones)
        fs.writeFile(dbJsonPath, newPublicaciones, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          })

        res.send('Esto es la ruta de post para crear una nueva publicación!!')
    },
    //Función para eliminar una publicación:
    eliminarPublicacion: (req, res) =>{
        let{titulo} = req.body;

        let dbJsonPath = path.resolve(__dirname, '../0-data/publicaciones.json');
        let dbJson = fs.readFileSync(dbJsonPath);
        let publicaciones = JSON.parse(dbJson);

        let eliminarPublic = publicaciones.filter(el => el.titulo !== titulo);

        let newPublicaciones = JSON.stringify(eliminarPublic)
        fs.writeFile(dbJsonPath, newPublicaciones, (err) => {
            if (err) throw err;
            console.log('the JSON was replace succesfully');
          })

        res.send('Esta es la ruta para eliminar una publicación. El titulo es: ' + titulo)
    }
}

module.exports = publicControler