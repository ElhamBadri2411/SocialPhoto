import * as api from "../api";

//action creator
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post); // makes the request to the api and recieves the data

    dispatch({ type: "UPDATE", payload: data }); // dispatches an action, redux
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id); // makes the request to the api and recieves the data

    dispatch({ type: "LIKE", payload: data }); // dispatches an action, redux
  } catch (error) {
    console.log(error);
  }
};
