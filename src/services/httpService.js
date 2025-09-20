import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

//! axios configs
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, //? http-only cookies
});

//! api requests object
const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
