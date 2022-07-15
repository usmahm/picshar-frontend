import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_BASE_API_URL);

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
});

api.defaults.withCredentials = true;

api.interceptors.request.use(
  undefined,
  (error) => Promise.reject(error.response),
);

api.interceptors.response.use(
  undefined,
  (error) => Promise.reject(error.response),
);

export default api;
