import * as api from '../api';

//action creator
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", data });
  } catch (error) {
    console.error(error.message);
  }

  //const action = { type: "FETCH_ALL", payload: [] };

  //dispatch(action);
};
