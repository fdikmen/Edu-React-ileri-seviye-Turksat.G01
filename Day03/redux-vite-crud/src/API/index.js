import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use((config) => {
  console.log(`Request sent to ${config.url}`);
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(`Error: ${error.message}`);
    return Promise.reject(error);
  }
);

export default api;
