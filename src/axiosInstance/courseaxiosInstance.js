import axios from "axios";

const apiURL = import.meta.env.VITE_BACKEND_URL + "/api/course/";

// create a axios instance
const courseAxiosInstance = axios.create({
    baseURL: apiURL,
  
});

export default courseAxiosInstance;