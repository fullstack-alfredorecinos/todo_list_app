import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUser = () =>{

}

const creatUser = async(body) =>{
    const data = await prisma.user.create({
        data: {
            name: body.name,
            status: false,
            dueDate: body.dueDate,
            userId: body.userId
        }
    });
    return data;
}

const updateUser = async() =>{

}

const deleteUser = async() =>{

}

const login = async() =>{

}

const logOut = async() =>{

}



export default {
    getUser,
    creatUser,
    updateUser,
    deleteUser
}