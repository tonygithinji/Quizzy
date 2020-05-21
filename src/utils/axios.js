import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://opentdb.com/"
});
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default axiosInstance;