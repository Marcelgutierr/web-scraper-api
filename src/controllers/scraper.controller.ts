import { Request, Response } from "express";
import { scrapeWithCheerio } from "../services/scraper.service";
import { isValidURL } from "../utils/validateURL";
import { blockedDomains } from "../utils/blockedDomains"; 


// export const runScraper = async (req: Request, res: Response) => {
//     try {
//         const {url, type} = req.body;

//         //Validación básica
//         if(!url){
//             return res.status(400).json({ ok:false, error: "El campo 'url' es obligatorio."});
//         }

//         if (!type){
//             return res.status(400).json({ ok:false, error: "El campo 'type' es obligatorio."});
//         }

//         // Aqui más adelante llamaremos al servicio scraper
//         // Ejemplo: const data = await scraperService.scrape(url, type);

//         return res.json({
//             ok:true,
//             message: "Controlador funcionando. Fase 5 agregará scraping real.",
//             received: {url, type}
//         });
//     }catch (error: any){
//         return res.status(500).json({
//             ok:false,
//             error: "Error interno del servidor",
//             details: error.message
//         });
//     }
// };


export const scrapeController = async (req: Request, res: Response) => {
    const url = req.query.url as string;

    //Validar URL
    if(!url) {
        return res.status(400).json({
            ok: false,
            message: "Debe proporcionar una URL válida en ?url=",
        });
    }

    //Validación de URL
    if(!isValidURL(url)) {
        return res.status(400).json({
            ok: false,
            message: "La URL proporcionada no es válida.",
        });
    }

    //Evitar scraping de dominios bloqueados
    const hostname = new URL(url).hostname;
    
    if(blockedDomains.includes(hostname)) {
        return res.status(403).json({
            ok: false,
            message: "El dominio proporcionado está bloqueado.",
        });
    }

    const result = await scrapeWithCheerio(url);
    return res.json(result);
};