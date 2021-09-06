import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// eslint-disable-next-line
export default (posts = [], action) => { // all the reducers
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; // if the action is FETCH_ALL return all the posts (which are stored in the payload at this poing)
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post  // if the action is LIKE, checks all the posts and sees if the id matches the post we are trying to like
      );
    case CREATE:
      return [...posts, action.payload]; // if the action is CREATE, adds the new posts to the payload
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post //same as like
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload); // if the action is DELETE removes the post we are trying to delete from the posts
    default:
      return posts;
  }
};
