const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/user');
module.exports = {
    conn: function (collection) {
        mongoose.createCollection(collection,(err,res)=>{
            if (err) throw err;
            console("创建成功")
        })
    },
    //表和插入对象
    insertOne:function(collection,data){
        mongoose.collection(collection).insertOne(data)
    },
    //表和插入数组
    insertMany: function(collection,array){
        mongoose.collection(collection).insertMany(array)
    },
    //表和查询对象
    find: function(collection,data){
       let res=mongoose.collection(collection).find(data)
       return res;
    },
    //表和修改对象，以及修改结果
    change: function(collection,olddata,newdata){
        mongoose.collection(collection).updateOne(olddata,newdata)
    }
};