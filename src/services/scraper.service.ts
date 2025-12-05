import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeWithCheerio = async (url: string) => {
    try {
        //1.- Descargar el HTML
        const { data:html} = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; MarcelBot/1.0)"
        },
            timeout: 8000, // 8 segundos
        });

        if(!html || html.length < 50) {
            return {
                ok:false,
                error: "El contenido HTML es demasiado corto o está vacío.",
            }
        }
    


        //2.- Cargar HTML en Cheerio
        const $ = cheerio.load(html);

        //3.- Obtener <title>
        const title = $("title").text() || null;

        //4.- Extraer descripción
        const description = $('meta[name="description"]').attr("content") || null;

        //5.- Extraer encabezados
        const headings = {
            h1: $("h1").map((i, el) => $(el).text().trim()).get(),
            h2: $("h2").map((i, el) => $(el).text().trim()).get(),
            h3: $("h3").map((i, el) => $(el).text().trim()).get(), 
        };

        //6.- Extraer enlaces
        const links = $("a")
            .map((i, el) => ({
                text: $(el).text().trim(),
                href: $(el).attr("href") || null,
            }))
            .get();

        return {
            ok:true,
            url,
            title,
            metadata: {
                description,
                headings,
            },
            content: {
                headings,
                links,
            },
        };
    } catch (error: any) {
        return {
            ok:false,
            error: "No se pudo scrapear la URL",
            details: error.message,
        };
    }
};