import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {loginUsers,users} from './data/users';

let _users=users;

export default {
   /*
   mock bootsrap 
   */

   bootsrap() {
    var mock=new MockAdapter(axios);

    //模拟成功请求
    mock.onGet('/success').reply(200,{
        msg:'success'
    });


    //模拟失败请求
    mock.onGet('/error').reply(500,{
        msg:'failure'
    });

    //模拟登录请求
    mock.onPost('/login').reply(config => {
           let {username,password} =JSON.parse(config.data);
           return new Promise((resolve,reject) => {
               let user = null;
               setTimeout(() => {
                   let hasUser=loginUsers.some(u => {
                       if(u.username===username&&u.password===password) {
                          user = JSON.parse(JSON.stringify(u));
                          user.password=undefined;
                          return true;
                       }
                   });

                   if(hasUser) {
                       resolve([200,{code:200,msg:'请求成功',user,token:'abcdedfhijklmnokrjsuvmxyz'}]);
                   }else {
                       resolve([200,{code:500,msg:'账号或密码错误',user}]);
                   }
               },1000);
           });
    });

    //模拟获取用户角色
    mock.onGet('/userinfo').reply(config => {
        let {Authorization}=config.headers;
        
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if(Authorization) {
                    resolve([200,{code:200,msg:'请求成功',role:'admin'}]);
                }
                else {
                    resolve([200,{code:500,msg:'没有token'}]);
                }
            },1000);
        });
    });

    //模拟获取用户列表(全部或者单个，单个需要传name值)
    mock.onGet('/user/list').reply(config =>{
        let {name}=config.params;
        
        let mockUsers=_users.filter(u => {
            if(name&&u.name.indexOf(name)==-1) return false;
            return true;
        });

        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve([200,{users:mockUsers}]);
            },1000);
        });
    });

   }
}