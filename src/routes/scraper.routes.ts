import {Router} from "express";
import { scrapeController } from "../controllers/scraper.controller";

const router = Router();

router.get("/", scrapeController);

export default router;
