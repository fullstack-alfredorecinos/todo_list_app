// import libroServicio from "../services/taskServicio.js";

import userService from "../services/userService";

const getUsers = (req, res) =>{
    const data = users;
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

const updateUsers = (req, res) =>{
    const data = req.body;
    const id = req.params.id;
    console.log(req);
    console.log(data);
    console.log(id);
    // const data = users;
    // res.json(data);
}

const deleteUsers = (req, res) =>{
    const id = req.params.id;
    console.log(id);
    // const data = users;
    // res.json(data);
}

// function login(){}
// function logOut(){}

export default {
    getUsers,
    creatUsers,
    updateUsers,
    deleteUsers
}