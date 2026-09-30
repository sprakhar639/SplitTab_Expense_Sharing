import { Router } from "express";
import { create, addGroupMember } from "./group.controller.js";

const router = Router();

router.post("/create", create);

export default router;
