import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7063/api",
  timeout: 3600,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ...`m
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
