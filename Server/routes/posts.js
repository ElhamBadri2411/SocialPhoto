import express from "express";

//uses express for different routes

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts); // when sending a get request to the server, calls the getPosts function
router.post("/", createPost); // when sending a post request to the server, calls the createPost function
router.patch("/:id", updatePost); // when sending a patch request to the server with an id, calls the updatePost function
router.delete("/:id", deletePost); // when sending a delete request to the server with an id, calls the deletePost function
router.patch("/:id/likePost", likePost); // when sending a patch request to the server with an id, calls the likePost function
export default router;
