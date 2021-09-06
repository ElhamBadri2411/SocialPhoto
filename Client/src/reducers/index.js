import { combineReducers } from "redux";

import posts from "./posts";

export const reducers = combineReducers({ // combines all the reducers in posts
  posts,
});
