import express from "express";
import {
  createPost,
  deletePost,
  getPost,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", getPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);

export default router;
