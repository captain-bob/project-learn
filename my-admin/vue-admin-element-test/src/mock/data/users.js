import Mock from 'mockjs';
// var Mock = require('mockjs');

const loginUsers=[
  {
    id:1,
    username:'admin',
    password:'123456',
    name:'君莫笑'
  } 
];

const users=[];

for(let i=0;i<90;i++) {
    users.push(Mock.mock(
        {
            id:Mock.Random.guid(),
            name:Mock.Random.cname(),
            addr:Mock.mock('@county(true)'),
            'age|1-60':1,
            birth:Mock.mock('@date'),
            sex:Mock.mock('@integer(0,1)')
        }
    ));
};
// console.log(users);
export {loginUsers,users};