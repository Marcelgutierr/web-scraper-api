import express, {Application} from "express";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API funcionando correctamente"});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

