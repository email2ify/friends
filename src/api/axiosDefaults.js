import axios from "axios";

//using axios to connect with the api
axios.defaults.baseURL = "https://friends12.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

// Interceptors for both resquest and response
export const axiosReq = axios.create();
export const axiosRes = axios.create();
