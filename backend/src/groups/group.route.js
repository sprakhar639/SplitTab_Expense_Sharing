import { Router } from "express";
import { create} from "./group.controller.js";

const router = Router();

router.post("/create", create);

export default router;
