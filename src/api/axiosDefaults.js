import axios from "axios";

//using axios to connect with the api
//axios.defaults.baseURL = "https://friends12.herokuapp.com/";
axios.defaults.baseURL = "https://8000-email2ify-drffriends-piiegiryrr7.ws-eu101.gitpod.io";

// data format by API
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// CORS errors avoidance when sending cookies
axios.defaults.withCredentials = true;

// Interceptors for both resquest and response
export const axiosReq = axios.create();
export const axiosRes = axios.create();
