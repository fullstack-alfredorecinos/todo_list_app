import { Router } from "express";
import userController from "../controllers/userController.js"; 
// Importando middleware que hace la validación inicial
import validate from "../midlewares/validate.js";

const router = Router();



router.post("/login", userController.login);
router.post("/", userController.creatUsers);
router.use(validate.validateRequest);  //Middleware de la aplicación o policía que proteje las rutas
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);
// router.post("/login", userController.login);

export default router;


