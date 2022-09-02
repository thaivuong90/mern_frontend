import { INIT_STATE } from "../../constants";
import { getPosts, getType, createPost, updatePost, deletePost } from "../actions";

export default function postReducer(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case getType(createPost.createPostFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(updatePost.updatePostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(updatePost.updatePostSuccess):
      const findIndex = state.data.findIndex(
        (item) => item._id === action.payload._id
      );
      state.data[findIndex] = action.payload;
      return {
        ...state,
        isLoading: false,
        data: [...state.data],
      };
    case getType(updatePost.updatePostFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(deletePost.deletePostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(deletePost.deletePostSuccess):
      const deleteIndex = state.data.findIndex(
        (item) => item._id === action.payload
      );
      console.log(deleteIndex);
      state.data.splice(deleteIndex, 1);
      return {
        ...state,
        isLoading: false,
        data: [...state.data],
      };
    case getType(deletePost.deletePostFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
