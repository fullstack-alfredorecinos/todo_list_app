import express, {json} from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();

//midleware formato json
app.use(express.json());

//middleware para rutas
app.use('/task', taskRoutes); 

//Petición del puerto
const port = process.env.PORT;

//Escuchando el servidor
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});
