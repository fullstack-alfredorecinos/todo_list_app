import taskService from "../services/taskService.js";

const getTasks = (req, res) =>{
    const data = taskService.getTask();
    res.status(200).json({
        message: "List Task",
        data: data,
    });
}

const creatTasks = (req, res) =>{
    const body = req.body;
    const data = taskService.creatTask(body);
    res.status(201).json({message: "Task created", data: data});
    // res.json(data);
}

const updateTasks = (req, res) =>{
    const body = req.body;
    const id = req.params.id;
    const data = taskService.updateTask(id, body);
    res.status(200).json({message: "Task updated", data: data});

}

const deleteTasks = (req, res) =>{
    const id = req.params.id;
    const data = taskService.deleteTask(id);
    res.status(200).json({message: "Task deleted", data: data});
}

export default {
    getTasks,
    creatTasks,
    updateTasks,
    deleteTasks
}
