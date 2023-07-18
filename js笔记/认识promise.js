//promise主要解决异步中回调函数的问题
//promise就是一个存储数据的容器
拥有一套特殊的存储数据方式, 可以存储异步调用的结果

//promise创建时，需要添加一个函数作为参数
//promise里的回调函数在创建时调用
//resolve和reject是两个函数。
promise最终存储的是这两个函数的值
const promise = new Promise((resolve, reject) => {
	//resolve
})
console.log(promise)

//promise读取数据
//通过then方法读取数据
//then里面传入两个回调作为参数
， 第一个为执行成功返回(resolve), 第二个为执行失败调用(reject)

promise.then((result) => {}, (reson) => {})