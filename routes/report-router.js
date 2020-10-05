const express = require('express');
const reportRouter = express.Router();

const reportsController = require('../controllers/reports-controller');
const authHelpers = require('../services/auth/auth-helpers');


reportRouter.get('/', reportsController.index);

reportRouter.get('/:id([0-9]+)', reportsController.show);

//reportRouter.get('/:id([0-9]+)/edit', authHelpers.loginRequired, reportsController.edit);

//reportRouter.post('/', authHelpers.loginRequired, reportsController.create);

reportRouter.put('/:id', authHelpers.loginRequired, reportsController.update);

reportRouter.delete('/:id', authHelpers.loginRequired, reportsController.delete);

module.exports = reportRouter;