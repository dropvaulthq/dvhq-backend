import ProjectModel from '../models/projectModel.js';

const ProjectController = {
    async getAllProjects(req, res) {
        try {
            const projects = await ProjectModel.getAllProjects();
            res.status(200).json([projects]);
        } catch (e) {
            res.status(500).json({ e: 'Failed to fetch project' });
        }
    }
}

export default ProjectController;