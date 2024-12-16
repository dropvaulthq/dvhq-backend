import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

async function main(){
    const project = await prisma.project.findMany()
    console.log(project);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        await prisma.$disconnect();
        process.exit();
    })