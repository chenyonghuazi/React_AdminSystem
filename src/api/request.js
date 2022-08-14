import axios from "axios";

const instance = axios.create({
    baseURL:'http://127.0.0.1:3000/api',
    timeout:5000
})

instance.interceptors.request.use(
    (config)=>{
        //console.log(config)
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default instance