import {Router} from "express";
import { scrapeController } from "../controllers/scraper.controller";

const router = Router();

//Ruta para scrapear una página web
router.get("/", scrapeController);

export default router;
