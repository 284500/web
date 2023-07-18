//引入express
const express=require('express');
//创建应用对象
const app=express();
//创建路由规划
app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello ajax');});
app.post('/server',(request,response)=>{
    //设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //处理自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('hello ajax');});
//将post改成all可以接受任意类型的请求
app.all('/json-server',(request,response)=>{
    //设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //处理自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'aada',
        age:18,
        sex:'man'
    };
    //将对象进行字符串转换
    let str =JSON.stringify(data);
    response.send(str);});
//延时响应
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{response.send('延迟响应')
},3000);
});
//axios请求
app.all('/axios',(request,response)=>{
    //设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //处理自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'aada',
        age:18,
        sex:'man'
    };
    //将对象进行字符串转换
    let str =JSON.stringify(data);
    response.send(str);});
//fetch发送ajax
app.all('/fetch-server',(request,response)=>{
    //设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //处理自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data={
        name:'aada',
        age:18,
        sex:'man'
    };
    //将对象进行字符串转换
    let str =JSON.stringify(data);
    response.send(str);});
//jsonp实现跨域
app.all('/jsonp',(request,response)=>{
    const data={
        exist:1,
        msg:'用户已经存在'
    };
    let str=JSON.stringify(data);
    response.end(`handle(${str})`);
})
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已经启动")
})
