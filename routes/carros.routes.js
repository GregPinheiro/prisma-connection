const { Router } = require('express');
const routes = Router();
const carrosController = require('../controllers/carros.controller');

routes.get('/', carrosController.getCarros);
routes.get('/:id', carrosController.getOneCar);

module.exports = routes