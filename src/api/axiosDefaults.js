import axios from "axios";

//using axios to connect with the api
axios.defaults.baseURL = "https://friends12.herokuapp.com";
// data format by API
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// CORS errors avoidance when sending cookies
axios.defaults.withCredentials = true;

// Interceptors for both resquest and response
export const axiosReq = axios.create();
export const axiosRes = axios.create();
