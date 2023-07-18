const  mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/demo2')
  .then(()=>{
    console.log('创建成功')
  }).catch(err=>{
    console.log(err,'创建失败')
  })