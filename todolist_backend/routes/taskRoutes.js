import { Router } from "express";
import taskController from "../controllers/taskController.js"; 
// Importando middleware que hace la validación inicial
import validate from "../midlewares/validate.js";

const router = Router();

router.use(validate.validateRequest); //Middleware de la aplicación o policía que proteje todas las rutas
// router.use(validate.validateRole(["admin", "user"]));
router.get("/", validate.validateRole(["administrador", "estudiante"]), taskController.getTasks);
router.post("/", validate.validateRole(["administrador", "profesor"]), taskController.creatTasks);
router.put("/:id", taskController.updateTasks);
router.delete("/:id", taskController.deleteTasks);

export default router;


