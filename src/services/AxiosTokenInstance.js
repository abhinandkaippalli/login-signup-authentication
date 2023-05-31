import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
    // console.log(config); 
    let params = new URLSearchParams();
    params.append('hai', 'Abhi');
    config.params = params;
    return config;
});

export default axiosInstance;