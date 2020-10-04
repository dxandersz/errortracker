const express = require('express');
const reportRouter = express.Router();

const reportsController = require('../controllers/reports-controller');

reportRouter.get('/', reportsController.index);
reportRouter.get('/:id([0-9]+)', reportsController.show);
reportRouter.post('/', reportsController.create);
reportRouter.put('/:id', reportsController.update);
reportRouter.delete('/:id', reportsController.delete);

module.exports = reportRouter;