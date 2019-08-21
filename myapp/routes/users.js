var express = require('express');
var router = express.Router();

var api = require('../config/api');

/* GET users listing. */
router.get('/oo', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/',function(req,res) {
  res.send('hello wordaa');
});
router.get('/api/*',api.get);
router.post('/api/*',api.post);
router.options('/api/*',function(req,res,next) {
  //跨域
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-With,yourHeaderFeild');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.sendStatus(200);/* 让options请求快速返回 */
});

module.exports = router;
