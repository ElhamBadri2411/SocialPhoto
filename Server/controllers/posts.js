import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
import express from "express";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); //uses the  PostMessage model to retrieve all posts from the database

    res.status(200).json(postMessages); // responds by returning all posts to the frontend
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body; // gets all the information of a post from the frontend through the request

  // creates a new PostMessage and saves it to the database
  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  // gets the id of the post we are updating from the request
  const { id } = req.params;
  // gets the updated information of the post we are updating from the request
  const { title, message, creator, selectedFile, tags } = req.body;

  // checks if the post exists in the database
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // creates a new Post object with the new information
  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  // finds the post in the database and updates it
  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  // gets the id of the post we are deleting from the request
  const { id } = req.params;

  //checks if the post exists in the database
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // finds the post in the database and removes it
  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  // gets the id of the post we are updating from the request
  const { id } = req.params;

  // checks if the post exists in the database
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  // gets the post from the database
  const post = await PostMessage.findById(id);

  //increments the posts like counter by one
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );

  res.json(updatedPost);
};

export default router;
