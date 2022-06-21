import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
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
