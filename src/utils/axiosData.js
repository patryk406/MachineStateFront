import axios from "axios";

export const initialInstance = axios.create({
  baseURL: "https://randomuser.me/api/",
});

initialInstance.interceptors.request.use((req) => {
  return req;
});

initialInstance.interceptors.response.use((res) => {
  return res.data.results;
});
