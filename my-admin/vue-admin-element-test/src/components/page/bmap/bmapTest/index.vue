<template>
    <div class="bmapTest-container">
      地图测试页。。。。
    </div>
</template>

<script>
import axios from 'axios';
 export default {
    name:'BmapTest',
    data() {
        return {
            
        }
    },
    mounted() {

      //  axios.get('http://www.localhost:7000/api/demo',{
      //    headers: {'Content-Type':'application/json;charset=utf-8'}
      //  }).then(res => {
      //    consloe.log(res);
      //  }).catch(err =>{
      //    console.log(err);
      //  })
      var instance = axios.create({headers: {'content-type': 'application/x-www-form-urlencoded'}});
        instance.get('http://www.localhost:7000/api/demo').then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      //  axios({
      //    baseURL:'http://www.localhost:7000/',
      //    url:'/api/demo',
      //    method:'get',
      //    headers: {'Content-Type':'application/json;charset=utf-8'},
      //    responseType: 'json'
      //  }).then(res => {
      //    consloe.log(res);
      //  }).catch(err =>{
      //    console.log(err);
      //    console.log('失败')
      //  })
    },
    methods: {
        
    },
    computed: {
        
    },
    
 }
</script>

<style scoped>

</style>