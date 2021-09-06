import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import download from "./images/download.png";
import Form from "./components/Form/Form.jsx";
import Posts from "./components/Posts/Posts.jsx";

import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(0); //keeps track of the current id for liking updating and deleting purposes
  const classes = useStyles(); // styles from material UI
  const dispatch = useDispatch(); // used to dispatch the actions from action creators

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]); // every time current id is changed or we dispatch any action we also dispatch a getPosts action

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={download} alt="icon" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts
                setCurrentId={
                  setCurrentId
                } /*Passes down functions to child components*/
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form
                currentId={currentId}
                setCurrentId={
                  setCurrentId
                } /*Passes down functions to child components*/
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
