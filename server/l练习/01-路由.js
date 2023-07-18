const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
// 解析 application/json
app.use(bodyParser.json());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/demo');
const db = mongoose.connection;

db.once('open', () => {
    console.log("数据库连接成功")
    //创建结构对象
});
//失败回调
db.on('error', () => {
    console.log("数据库启动失败")
})
//关闭回调
db.on('close', () => {
    console.log("关闭成功")
})
//登录
app.get('/login', (req, res) => {
    res.end('login');
})

app.post('/login', (req, res) => {
    res.end('login')
})
//用户信息
app.get('/user/:id/:name', (req, res) => {
    res.send(req.params)
    console.log(req.params)
})
//表单发送
app.all('/form', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.end('login');
})
//发送axios
app.options('/axios', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.end('login');
})
app.get('/axios', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    let data = {
        name: 'da',
        id: 13
    }
    //接收params数据
    console.log(req.query);
    res.send(data);
})
app.post('/axios', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    let data=req.body
    let UserSchema = new mongoose.Schema({
        username: String,
        password: Number
    })
    //创建模型对象 对文档进行操作
    let UserModel = mongoose.model('users', UserSchema);
    //添加
    UserModel.create({
        username: data.username,
        password: data.password
    });
    //关闭数据库(项目中实际不会添加)
    console.log("添加成功")
    mongoose.disconnect();
})

app.listen(3000, () => {
    console.log("服务器启动")
})