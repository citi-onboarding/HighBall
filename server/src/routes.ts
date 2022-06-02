import express from 'express';
import CupController from '@controllers/CupController'
import UserController from '@controllers/UserController'

import PurposeController from '@controllers/PurposeController'

const routes = express.Router();
const userController = new UserController();
const cupController = new CupController();

const purposeController = new PurposeController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/cup', cupController.create);
routes.get('/cup', cupController.get);
routes.delete('/cup/:id', cupController.delete);
routes.put('/cup/:id', cupController.update);

routes.post('/purpose', purposeController.create);
routes.get('/purpose', purposeController.get);
routes.put('/purpose/:id', purposeController.update);

export default routes;
