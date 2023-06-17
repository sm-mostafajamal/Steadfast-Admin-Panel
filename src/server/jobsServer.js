import axios from "axios";

// const baseURL = "https://steadfast-d3c4.onrender.com/api/jobs";
const baseURL = "http://localhost:3001/api/jobs";
let token = null;
export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getAllJobs = () => axios.get(baseURL).then((res) => res.data);

export const create = async (newPost) => {
  const config = {
    headers: { Authorization: token },
  };
  const res = await axios.post(baseURL, newPost, config);
  return res.data;
};
export const update = (updatePost) =>
  axios.put(`${baseURL}/${updatePost.id}`, updatePost).then((res) => res.data);

export const deletePost = (id) =>
  axios.delete(`${baseURL}/${id}`).then((res) => res.data);
