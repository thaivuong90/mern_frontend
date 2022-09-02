import axios from 'axios';

const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${url}/posts`)
export const createPost = (payload) => axios.post(`${url}/posts`, payload);
export const updatePost = (payload) => axios.post(`${url}/posts/update`, payload);