const express = require('express');
const router = express.Router();

const path = require('path');

const controller = require('../controllers/tareaController');

    router.get('/', controller.traertareas);


    module.exports = router