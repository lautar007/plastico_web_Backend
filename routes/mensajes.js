const express = require('express');
const router = express.Router();

const path = require('path');

const controller = require('../controllers/mensjController');

    router.get('/', controller.traerMensajes);


    module.exports = router