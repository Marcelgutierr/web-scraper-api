# Web Scraper API (Node.js + TypeScript)

Este proyecto es una **API REST** construida con **Node.js**, **Express** y **TypeScript**, que incluye un módulo de **Web Scraping** para obtener información desde sitios web seleccionados.

El objetivo es demostrar:
- Arquitectura limpia en Node.js
- Separación en capas (routes, controllers, services)
- Uso de TypeScript de forma profesional
- Futuro uso de colas (BullMQ), Redis y caching
- Buenas prácticas de desarrollo backend

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- ts-node-dev
- Cheerio / Playwright (para scraping)
- Redis (próximamente)
- BullMQ (próximamente)

---

## 📁 Estructura del proyecto

src/
├── routes/ # Rutas de la API
├── controllers/ # Controladores que manejan las solicitudes
├── services/ # Lógica de negocio
├── scraper/ # Módulos de scraping
└── config/ # Configuraciones globales


---

## ▶️ Cómo ejecutar el proyecto

### 1. Instalar dependencias
```bash
npm install

2. Ejecutar en modo desarrollo

npm run dev

3. Abrir en el navegador

http://localhost:3000/

Deberías ver:

{ "message": "API funcionando correctamente" }

🛠️ Scripts disponibles

npm run dev      # Ejecuta el servidor con ts-node-dev