import axios from 'axios';

let axiosInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_BASE_URL,
    headers : {
        'Content-type' : 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
