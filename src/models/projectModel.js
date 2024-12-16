import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

const ProjectModel = {
    async getAllProjects() {
        return await prisma.project.findMany();
    }
}

export default ProjectModel;