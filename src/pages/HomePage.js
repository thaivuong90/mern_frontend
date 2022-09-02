import React from "react";
import { Container, Fab } from "@material-ui/core";
import Header from "../components/Header";
import PostList from "../components/PostList";
import CreatePostModal from "../components/CreatePostModal";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal></CreatePostModal>
      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
