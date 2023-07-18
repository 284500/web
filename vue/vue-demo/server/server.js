// const  mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost/student')
//   .then(()=>{
//     console.log('创建成功')
//   }).catch(err=>{
//     console.log(err,'创建失败')
//   })
const express=require('express')
const app=express()
const userApi=require('./api/userApi')
const port=8000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/user',userApi)
app.listen(port,()=>{
  console.log("服务器已经启动")
})
