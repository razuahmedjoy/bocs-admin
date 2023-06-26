import axios from "axios";

const apiURL = import.meta.env.VITE_BACKEND_URL + "/api/mentor";

// create a axios instance
const mentorAxiosInstance = axios.create({
    baseURL: apiURL,
  
});

export default mentorAxiosInstance;