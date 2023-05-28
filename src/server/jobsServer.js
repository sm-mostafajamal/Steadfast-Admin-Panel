import axios from "axios";

const baseURL = "https://steadfast-d3c4.onrender.com/api/jobs";

export const getAllJobs = () => axios.get(baseURL).then((res) => res.data);

export const create = (newPost) =>
  axios.post(baseURL, newPost).then((res) => res.data);

export const update = (updatePost) =>
  axios.put(`${baseURL}/${updatePost.id}`, updatePost).then((res) => res.data);

export const deletePost = (id) =>
  axios.delete(`${baseURL}/${id}`).then((res) => res.data);
