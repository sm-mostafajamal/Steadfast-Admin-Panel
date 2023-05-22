import axios from "axios";

const baseURL = "http://localhost:3001/jobs";
export const getAllJobs = () => axios.get(baseURL).then((res) => res.data);

export const newPost = (newPost) =>
  axios.post(baseURL, newPost).then((res) => res.data);

export const deletePost = (id) =>
  axios.delete(`${baseURL}/${id}`, id).then((res) => res.data);
