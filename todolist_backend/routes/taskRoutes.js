import { Router } from "express";
import taskController from "../controllers/taskController.js"; 
// Importando middleware que hace la validación inicial
import validate from "../midlewares/validate.js";

const router = Router();

router.use(validate.validateRequest); //Middleware de la aplicación o policía que proteje todas las rutas

router.get("/", taskController.getTasks);
router.post("/", taskController.creatTasks);
router.put("/:id", taskController.updateTasks);
router.delete("/:id", taskController.deleteTasks);

export default router;


