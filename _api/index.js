import axiosInstance from './axios/Instance';
import { errorHandler } from './errorHandler';

export const api = (options , authorize , dontHandleError) => {

    let opts = options
    if(authorize){
        opts = { 
            ...options,
            headers : {
                'Authorization' : localStorage.getItem('Authorization')
            }
        }
    }

    return axiosInstance({...opts})
        .then((response) => {
            return response;
        })
        .catch((error) => errorHandler(error, dontHandleError));
};