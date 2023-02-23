const express = require('express');
const router = express.Router();

const path = require('path');

const controller = require('../controllers/CandidController.js');

    router.get('/', controller.traerCandidatos);
    router.post('/', controller.cargarCandidato);
    router.delete('/', controller.eliminarCandidato);

    module.exports = router