import taskService from "../services/taskService.js";

const getTasks = async (req, res) =>{
    const data = await taskService.getTask();
    res.status(200).json({
        message: "List Task",
        data: data,
    });
}

const creatTasks = async (req, res) =>{
    const body = req.body;
    const data = await taskService.creatTask(body);
    res.status(201).json({message: "Task created", data: data});
    // res.json(data);
}

const updateTasks = async(req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const data = await taskService.updateTask(id, body);
    res.status(200).json({message: "Task updated", data: data});

}

const deleteTasks = async (req, res) =>{
    const id = req.params.id;
    const data = await taskService.deleteTask(id);
    res.status(200).json({message: "Task deleted", data: data});
}

export default {
    getTasks,
    creatTasks,
    updateTasks,
    deleteTasks
}
