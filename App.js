const express = require('express');
const path = require('path');
const cors = require('cors');

const rutaPublic = require('./routes/publicaciones');
const rutaMensj = require('./routes/mensajes');
const rutaPortada = require('./routes/portadas');
const rutaCandid = require('./routes/candidatos');

let app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/public', rutaPublic);
app.use('/candidatos', rutaCandid);
app.use('/mensajes', rutaMensj);
app.use('/portadas', rutaPortada);

app.get('/', (req, res) => {
    res.send('Bienvenido al Back-End de Plastico Estudio!')
});

app.listen(3030, ()=>{
    console.log('Servidor Corriendo y Escuchando');
})


