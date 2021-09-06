import axios from "axios";

const url = "http://localhost:5000/posts";

// uses axios to make api calls
export const fetchPosts = () => axios.get(url); // sends a get request to the server
export const createPost = (newPost) => axios.post(url, newPost); // sends a post request to the server with a new post to be created
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost); // sends a patch request to the server with the information of the updated post and id

export const deletePost = (id) => axios.delete(`${url}/${id}`); // sends a delete request to the server with the id of the post to be deleted

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`); // sends a patch request to the server with the id of the post to be liked
