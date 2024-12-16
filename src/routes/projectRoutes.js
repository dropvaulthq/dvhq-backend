import express from 'express';
import ProjectController from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', ProjectController.getAllProjects);

export default router;