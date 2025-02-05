import { Router } from "express";
import viewsRouter from "./views/index.views.js";
import apiRouter from "./api/index.api.js";

const router = Router()
router.use("/", viewsRouter)
router.use("/api", apiRouter)

export default router