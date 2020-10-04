const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');

userRouter.get('/', usersController.index);

userRouter.get('/:id[0-9]+)', usersController.show);

userRouter.delete('/:id', usersController.delete);

userRouter.post('/', usersController.create);

userRouter.put('/:id', usersController.update)


module.exports = userRouter;