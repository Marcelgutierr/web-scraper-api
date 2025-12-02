import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        ok: true,
        message: "API funcionando correctamente",
        timestamp: new Date().toISOString(),
    });
});

export default router;