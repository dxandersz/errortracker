const express = require('express');
const userRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const usersController = require('../controllers/users-controller');

userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});


userRouter.get('/', authHelpers.loginRequired, usersController.index);
userRouter.get('/:id([0-9]+)', usersController.show);
userRouter.delete('/:id', usersController.delete);
userRouter.post('/', usersController.create);
userRouter.put('/:id', usersController.update)

module.exports = userRouter;