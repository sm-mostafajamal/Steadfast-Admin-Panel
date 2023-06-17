import axios from "axios";

const baseURL = "http://localhost:3001/api/login";

export const login = (credential) =>
  axios.post(baseURL, credential).then((res) => res.data);
