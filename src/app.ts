import express from "express";
import statusRoutes from "./routes/status.routes";
import scraperRoutes from "./routes/scraper.routes";

const app = express();

//Middleware para parsear JSON
app.use(express.json());

//Registramos rutas
app.use("/status", statusRoutes);

app.use("/scrape", scraperRoutes);

export default app;