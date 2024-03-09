import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "http://localhost:3000/api",
});

// instanceAxios.interceptors.request.use((config) => {});
// instanceAxios.interceptors.response.use(() => {});
