const express = require('express');
const router = express.Router();
const  mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/student')
  .then(()=>{
    console.log('创建成功')
  }).catch(err=>{
    console.log(err,'创建失败')
  })
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;