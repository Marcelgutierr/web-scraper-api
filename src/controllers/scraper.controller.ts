import { Request, Response } from "express";
import { scrapeWebsite } from "../services/scraper.service";   

export const scrapeController = async (req: Request, res: Response) => {
    const {url} = req.query;

    //Validar URL
    if(!url || typeof url !== "string") {
        return res.status(400).json({
            ok: false,
            message: "Debe proporcionar una URL válida en ?url=",
        });
    }

    try {
        const data = await scrapeWebsite(url);
        res.json({
            ok:true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            message: "Error al intentar scrapear la página",
        });
    }
};