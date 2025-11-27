import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUser = () =>{

}

const creatUser = async(body) =>{
    const data = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
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