import { Router } from "express";
import { create, addMemberController } from "./group.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import groupMiddleware from "../middleware/groupMember.middleware.js";

const router = Router();

router.post("/create", authMiddleware, create);
router.post(
  "/:groupId/members",
  authMiddleware,
  groupMiddleware,
  addMemberController,
);

export default router;
