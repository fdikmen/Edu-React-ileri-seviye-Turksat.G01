import api from "../../API";
const apiUrl = "/posts";

export const getPosts = async () => {
  return await api.get(apiUrl);
};

export const getPostById = async (id) => {
  return await api.get(`${apiUrl}/${id}`);
};

export const addPost = async (initialPost) => {
  return await api.post(apiUrl, initialPost);
};

export const updatePost = async (post) => {
  return await api.put(`${apiUrl}/${post.id}`, post);
};

export const deletePost = async (id) => {
  return await api.delete(`${apiUrl}/${id}`);
};
