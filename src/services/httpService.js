import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

//! axios configs
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, //? http-only cookies
});

//! manage requests and responses
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

//? Handling 401 status code errors and generating a new access token based on the refresh token
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    //! access to the error configs and process like the url of bad request
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      //! prevent loop of requests to the previous process and create new access token!!!
      originalConfig._retry = true;
      try {
        //! create new access token for the user based on refresh token
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        //! request to the previous process
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

//! api requests object
const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
