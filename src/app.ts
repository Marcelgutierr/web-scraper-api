import express from "express";
import statusRoutes from "./routes/status.routes";

const app = express();

//Middleware para parsear JSON
app.use(express.json());

//Registramos rutas
app.use("/status", statusRoutes);

export default app;