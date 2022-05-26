import express from 'express';
import UserController from '@controllers/UserController'
import QuoteController from '@controllers/QuoteController'

const routes = express.Router();
const userController = new UserController();
const userController = new QuoteController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/quote', QuoteController.create);


export default routes;
