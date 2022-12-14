import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

export default function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onLike = React.useCallback(() => {
    dispatch(
      actions.updatePost.updatePostRequest({
        ...post,
        likeCount: post.likeCount + 1,
      })
    );
  }, [post, dispatch]);

  const onDelete = React.useCallback(() => {
    dispatch(actions.deletePost.deletePostRequest(post._id));
  }, [post, dispatch]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.title}
        subheader={moment(post.updatedAt).format("DD/MM/YYYY HH:MM")}
        action={
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        }
      ></CardHeader>
      <CardMedia
        image={post.attachment}
        className={classes.media}
        title="Title"
      ></CardMedia>
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onLike}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {post.likeCount} likes
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
