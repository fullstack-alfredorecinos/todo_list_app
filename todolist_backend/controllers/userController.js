// import libroServicio from "../services/taskServicio.js";
const users = [
    {
    id: 1,
    name: "user 1",
    description: "This is user 1",
    completed: false
    },
    {
    id: 2,
    name: "user 2",
    description: "This is user 2",
    completed: false
    }

]

const getUsers = (req, res) =>{
    const data = users;
    res.status(200).json({
        message: "List user",
        data: data,
    });
}

const creatUsers = (req, res) =>{
    // console.log(req.body);
    const data = req.body;
    users.push(data);
    res.status(201).json({message: "user created", data: data});
    // res.json(data);
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

function login(){}
function logOut(){}

export default {
    getUsers,
    creatUsers,
    updateUsers,
    deleteUsers
}