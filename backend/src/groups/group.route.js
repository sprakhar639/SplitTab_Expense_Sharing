import { Router } from "express";
import { create} from "./group.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post("/create",authMiddleware,create);

export default router;
