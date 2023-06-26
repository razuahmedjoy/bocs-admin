import axios from "axios";

// const apiURL = import.meta.env.VITE_BACKEND_URL + "api/user/";
const apiURL = process.env.REACT_APP_SERVER_URL + "api/user/";
// create a axios instance
const userAxiosInstance = axios.create({
    baseURL: apiURL,
  
});

export default userAxiosInstance;