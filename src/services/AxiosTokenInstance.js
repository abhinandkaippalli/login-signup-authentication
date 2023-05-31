import axios from "axios";
import { GET_USER_TOKEN_GETTER } from "../store/storeConstants";
import store from '../store/store'

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
    // console.log(config); 
    let params = new URLSearchParams();
    let token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
    params.append('auth', token);
    config.params = params;
    return config;
});

export default axiosInstance;