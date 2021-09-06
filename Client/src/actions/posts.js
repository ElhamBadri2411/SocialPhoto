import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";
import * as api from "../api";

//action creators for redux part
/*
What happens here is that every time the user does a post action (create, update, delete etc) an action is created using the
functions in this file using thunk to get data from the server. then it is dispatched and sent to the store to change the state
to have the UI updated accordingly in the client side.
*/

export const getPosts = () => async (dispatch) => {
  // the function header is special (uses thunk)
  try {
    const { data } = await api.fetchPosts(); // uses fetchPosts function from the api file and receives the data
    dispatch({ type: FETCH_ALL, payload: data }); // dispatches an action of type FETCH_ALL and stores the data in the payload
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post); // uses createPost function from the api file and receives the data
    dispatch({ type: CREATE, payload: data }); // dispatches an action of type CREATE and stores the data in the payload
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post); // makes the request to the api using the updatePost function and receives the data

    dispatch({ type: UPDATE, payload: data }); // dispatches an action, of type UPDATE and stores the data in the payload
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); // uses the deletePost function from the api file to delete the post

    dispatch({ type: DELETE, payload: id }); // dispatches an action of type DELETE and stores the id in the payload
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  // same thing as UPDATE just differentiating it for organization purposes
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
