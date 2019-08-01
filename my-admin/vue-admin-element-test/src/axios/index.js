import axios from 'axios';



const Get=(url,params) => {
    return axios({
        method:'get',
        url,
        params:params
    });
};

const Post=(url,params) => {
    return axios({
        method:'post',
        url,
        data:params
    });
};

export default {Get,Post};