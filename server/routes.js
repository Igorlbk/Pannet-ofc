import express from 'express';
import {usuarioController} from './src/Controllers/usuarioController.js';

const routes = express.Router()

routes.get('/usuario/get', usuarioController.getUser)
routes.post('/usuario/insert', usuarioController.insertUser)
//routes.put('/usuario/update/:userID', usuarioController.updateUser)
routes.delete('/usuario/delete/:id_usuario', usuarioController.deleteUser)
routes.post('/usuario/login', usuarioController.loginUser)
routes.post('/usuario/getProfile', usuarioController.getUserProfile)

export default routes;