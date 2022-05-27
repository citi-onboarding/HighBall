import express from 'express';
import UserController from '@controllers/UserController'

import PurposeController from '@controllers/PurposeController'

const routes = express.Router();
const userController = new UserController();

const purposeController = new PurposeController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);


routes.post('/purpose', purposeController.create);
routes.get('/purpose', purposeController.get);
routes.delete('/purpose/:id', purposeController.delete);
routes.put('/purpose/:id', purposeController.update);

export default routes;