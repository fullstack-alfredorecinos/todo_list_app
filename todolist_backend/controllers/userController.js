import userService from "../services/userService.js";

const getUsers = async(req, res) =>{
    const data = await userService.getUser();
    res.status(200).json({
        message: "List user",
        data: data,
    });
}

/**
 * CREAR USUARIOS
 {
"name": "{{$randomFullName}}",
"email": "{{$randomEmail}}",
"password": "123"
}
 */

const creatUsers = async(req, res) =>{
    const body = req.body;
    const data = await userService.creatUser(body);
    res.status(201).json({message: "user created", data: data});

}

const updateUsers = async(req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const data = await userService.updateUser(body, id);
    res.status(201).json({message: "Users updated", data: data});
}

const deleteUsers = async(req, res) =>{
    const id = req.params.id;
    const data = await userService.deleteUser(id);
    res.status(201).json({message: "Users deleted", data: data});
}

const login = async(req, res) =>{
    const body = req.body;
    // console.log(body);
    const data = await userService.login(body);
    res.status(200).json(data);
}
function logOut(){}

export default {
    getUsers,
    creatUsers,
    updateUsers,
    deleteUsers,
    login
}