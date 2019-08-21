import axios from 'axios';
import store from '../store';



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(store.state.token) {
        config.headers.Authorization=store.state.token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});




const Get = (url, params) => {
    return axios({
        method: 'get',
        url,
        params: params
    });
};

const Post = (url, params) => {
    return axios({
        method: 'post',
        url,
        data: params
    });
};

export default { Get, Post };