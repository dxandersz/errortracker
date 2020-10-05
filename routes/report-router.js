const express = require('express');
const reportRouter = express.Router();

const reportsController = require('../controllers/reports-controller');

reportRouter.get('/', reportsController.index);
reportRouter.get('/:id', reportsController.show);
reportRouter.get(
    '/:id/edit',
    authHelpers.loginRequired,
    reportsController.edit
);
reportRouter.post('/', authHelpers.loginRequired, reportsController.create);
reportRouter.put('/:id', authhelpers.loginRequired, reportsController.update);
reportRouter.delete('/:id', authHelpers.loginRequired, reportsController.delete);

module.exports = reportRouter;