const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');

userRouter.get('/', usersController.index);

userRouter.get('/:id[0-9]+)', usersController.show);

userRouter.delete('/:id[0-9]+)', usersController.delete);

userRouter.post('/', usersController.create);

userRouter.put('/:id[0-9]+)', usersController.update)


module.exports = userRouter;