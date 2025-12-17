import express, {json} from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

//midleware formato json
app.use(express.json());

// CORS headers for frontend (vite dev server http://localhost:5173)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        return res.sendStatus(200);
    }
    next();
});

//middleware para rutas
app.use('/task', taskRoutes);
app.use('/user', userRoutes); 

//Petición del puerto
const port = process.env.PORT;

//Escuchando el servidor
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});
