const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

//Vamos a usar el método diskStorage para definir en qué lugar del servidor se alamacenan los archivos y que nombre queremos que tengan. Para eso, este método recibe un objeto literal que a su vez está compuesto por dos métodos:
    //destination: Toma como parámetro tres argumentos: 
        //req: representa el request envíado por el cliente.
        //file: representa el archivo enviado. 
        //callback: funcionalidad que se encarga de guardar el archivo en el destino final.
    //filename: Toma los mismos tres parámetros: req, file, callback. Dentro se define el nombre que deseamos para el archivo.
    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            //En la carpeta folder definimos en que parte queremos que se guarden los archivos desde el formualario.
            let folder = path.join(__dirname, '../images/publicaciones');
            //Ejecutamos el callback con dos parametros, el primero siempre en null y el segundo será la carpeta donde guardamos los archivos, ya definido en la variable folder.
            callback(null, folder)
        },
        filename: (req, file, callback) => {
            //El método now de Date nos dará un número único referido al momento en el que se ejecuta el método. Y con el método extname de path le colocamos el nombre original que tiene el archivo que el cliente envió.
            //Hay que aclarar que esta es solo una forma de ponerle el nombre, pero podemos realizar nuestro propio formato, lo importante es que no se repitan.
            let imageName = Date.now() + path.extname(file.originalname);
            callback(null, imageName)
        }
    })

    const upload = multer({storage});

    const controller = require('../controllers/publicController');

    router.get('/', controller.traerTodo);

    router.get('/:id', controller.traerPorId);

    router.post('/', controller.crearPublicacion);

    router.put('/:id', controller.putPublicacion);

    router.delete('/', controller.eliminarPublicacion);


    module.exports = router