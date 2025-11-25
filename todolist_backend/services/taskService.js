import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTask = async () =>{
    const data = await prisma.task.findMany();
    return data;
}

const creatTask = async(body) =>{
    const data = await prisma.task.create({
        data: {
            name: body.name,
            status: false,
            dueDate: body.dueDate,
            userId: body.userId
        }
    });
    return data;
}

const updateTask = async (_id, body) =>{
    const data = await prisma.task.update({
        where: {
            id: _id,
        },
        data: {
            name: body.name,
            status: body.status,
            dueDate: body.dueDate,
            userId: body.userId,
        }
    });

    return data;
}

const deleteTask = async(id) =>{
    const data = await prisma.task.delete({
        where: {
            id: id,
        },

    });
    return data;
}

export default {
    getTask,
    creatTask,
    updateTask,
    deleteTask
}