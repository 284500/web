//引入express
const express=require('express');
//创建应用对象
const app=express();
//创建路由规划
app.get('/',(request,response)=>{
    response.send('hello ajax')
})
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已经启动")
})
