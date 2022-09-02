import axios from "axios";

const url = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (payload) => axios.post(`${url}/post`, payload);
export const updatePost = (postId, payload) => {
  return axios.put(`${url}/post/${postId}`, payload);
};

export const deletePost = (postId) => {
  return axios.delete(`${url}/post/${postId}`);
};
