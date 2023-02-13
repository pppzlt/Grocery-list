const listRoute = require('./listroute');
const {Router} = require('express');

const apiRoutes = Router();

apiRoutes.use('/list', listRoute);

apiRoutes.use('/api');

module.export = apiRoutes;