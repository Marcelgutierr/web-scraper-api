import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeWebsite = async (url: string) => {
    //Descargar el HTML
    const response = await axios.get(url);
    const html = response.data;

    //Cargar HTML en Cheerio
    const $ = cheerio.load(html);

    //Obtener <title>
    const title = $("title").text() || "Título no encontrado";

    return {
        url,
        title,
    };
};