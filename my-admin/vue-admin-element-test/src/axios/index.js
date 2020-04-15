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


// axios.get('/user/list',{
//     params:{},
//     headers:[]
// }).then(res=> {

// }).catch(err => {

// });
// axios.all([aixos.get('',{}),axios.post('',{})]).then(axios.spread(function(ahone,antwo) {

// }))

// var instance=axios.create({
//     baseURL:'',
//     timeout:1000,
//     headers:{}
// })

// //AXIOS全局配置
// axios.defaults.baseURL='';
// axios.defaults.headers.commom['Authorization']=AUTH_TOKEN;

// 实例
// var instance=axios.create({

// })

// axios.interceptors.request.use(function(config) {
//     //处理
//     return config;
// },function (err) {
//     //处理
//     return Promise.reject(err);
// })
// axios.interceptors.response.use(function (config) {

// })

// axios.interceptors.request.eject()