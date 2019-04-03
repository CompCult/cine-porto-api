const express = require('express');
const userRouter = express.Router();
const userController = require('./user.controller');

userRouter.get('/', userController.listUsers);

userRouter.get('/:userId', userController.getUser);

userRouter.post('/', userController.createUser);

userRouter.patch('/:userId', userController.updateUser);

userRouter.delete('/:userId', userController.deleteUser);

module.exports = userRouter;
