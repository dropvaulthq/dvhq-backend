import ProjectModel from '../models/projectModel';

const ProjectService = {
    async calculateProjectStats() {
        const projects = await ProjectModel.getAllProjects();
        const totalProjects = projects.lenghth;
        return { totalProjects };
    }
}

export default ProjectService