//导入数据库
const mongoose = require('mongoose')
//设置strictQuery为true
mongoose.set('strictQuery',true);
//连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/demo');
const db = mongoose.connection;
//设置回调
db.once('open', () => {
    //console.log("数据库连接成功")
    //创建结构对象
    //添加
    UserModel.create({
        username: data.username,
        password: data.password,
        email:data.email
    });
    //关闭数据库(项目中实际不会添加)
    console.log("添加成功")
    mongoose.disconnect();
});
//失败回调
db.on('error', () => {
    console.log("数据库启动失败")
})
//关闭回调
db.on('close', () => {
    console.log("关闭成功")
})

