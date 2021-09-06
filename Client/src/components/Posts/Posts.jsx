import React from "react";
import Post from "./Post/Post.jsx";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts); // gets all the posts
  const classes = useStyles(); // styles

  return !posts.length ? ( // it there are no posts we just render a loading icon, if not we render all the posts
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map(
        (
          post // rendering all the posts in
        ) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Posts;
