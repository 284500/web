const fs=require('fs')

//传统读取
// fs.readFile('./test/为学.md',(err,data)=>{
// 	if(err) throw err;
// 	console.log(data.toString());
// });
//promise封装
const p= new Promise(function(resolve,reject){
	fs.readFile('./test/为学.md',(err,data)=>{
	if(err) reject(err);
	resolve(data);
})
});
p.then(function(value){
	console.log(value.toString())
},function(reason){
	consloe,log("读取失败")
});