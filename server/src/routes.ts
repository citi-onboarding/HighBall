import express from 'express';
import CupController from '@controllers/CupController'
import UserController from '@controllers/UserController'

const routes = express.Router();
const userController = new UserController();
const cupController = new CupController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/cup', cupController.create);
routes.get('/cup', cupController.get);
routes.delete('/cup/:id', cupController.delete);
routes.put('/cup/:id', cupController.update);

export default routes;