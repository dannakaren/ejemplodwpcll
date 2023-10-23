// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/user/login'
router.get(['/projects'], projectController.projects);

// GET '/user/logout'
router.get(['/add'], projectController.add);

// GET '/user/register'
router.get(['/about'], projectController.about);

// Exporto este tramo de ruta
export default router;
