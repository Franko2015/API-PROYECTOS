import { Router } from 'express';
import { getAll, getOne, edit, create, del } from '../controller/proyecto.controller.js'

const router = Router();

// Get All
router.get('/proyectos', getAll);

// Get One
router.get('/proyectos/:id', getOne);

// Update
router.put('/proyectos/:id', edit);

// Create
router.post('/proyectos', create);

// Delete
router.delete('/proyectos/:id', del);

export const Proyecto = router;