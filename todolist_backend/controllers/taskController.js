// import libroServicio from "../services/taskServicio.js";
const tasks = [
    {
    id: 1,
    name: "Task 1",
    description: "This is task 1",
    completed: false
    },
    {
    id: 2,
    name: "Task 2",
    description: "This is task 2",
    completed: false
    }

]

const getTasks = (req, res) =>{
    const data = tasks;
    res.status(200).json({
        message: "List Task",
        data: data,
    });
}

const creatTasks = (req, res) =>{
    // console.log(req.body);
    const data = req.body;
    tasks.push(data);
    res.status(201).json({message: "Task created", data: data});
    // res.json(data);
}

const updateTasks = (req, res) =>{
    const data = req.body;
    const id = req.params.id;
    console.log(req);
    console.log(data);
    console.log(id);
    // const data = tasks;
    // res.json(data);
}

const deleteTasks = (req, res) =>{
    const id = req.params.id;
    console.log(id);
    // const data = tasks;
    // res.json(data);
}

export default {
    getTasks,
    creatTasks,
    updateTasks,
    deleteTasks
}

// const obtenerLibro = async (req, res) =>{
//     const datos = await libroServicio.obtenerLibro();
//     res.json(datos);
// };

// const crearLibro = async (req, res) => {
//     const body = req.body;
//     const datos = await libroServicio.crearLibro(body);
//     res.json(datos);
// };

// const actualizarLibro = async (req, res) => {
//     const body = req.body;
//     const id = req.params.id;
//     const datos = await libroServicio.actualizarLibro(body, id);
//     res.json(datos);
// };

// const eliminarLibro = async (req, res) => {
//     const id = req.params.id;
//     const datos = await libroServicio.eliminarLibro(id);
//     res.json(datos);
// }

// export default {
//     obtenerLibro,
//     crearLibro,
//     actualizarLibro,
//     eliminarLibro
// };

