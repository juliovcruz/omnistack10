const { Router } = require('express');
const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/pokes', DevController.index);
routes.post('/pokes', DevController.store);

routes.get('/search', SearchController.index)
module.exports = routes;