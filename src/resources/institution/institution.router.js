const express = require('express');
const institutionRouter = express.Router();
const institutionController = require('./institution.controller');

institutionRouter.get('/', institutionController.listUsers);

institutionRouter.get('/:institutionId', institutionController.getUser);

institutionRouter.post('/', institutionController.createUser);

institutionRouter.patch('/:institutionId', institutionController.updateUser);

institutionRouter.delete('/:institutionId', institutionController.deleteUser);

institutionRouter.post('/auth', institutionController.auth);

module.exports = institutionRouter;
