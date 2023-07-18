将函数的this与对象绑定, bind可以绑定参数
bind可以用来生成一个新函数

bind, call, apply的区别
三者都可以改变函数的this对象指向。
三者第一个参数都是this要指向的对象， 如果如果没有这个参数或参数为undefined或null， 则默认指向全局window。
三者都可以传参， 但是apply是数组， 而call是参数列表， 且apply和call是一次性传入参数， 而bind可以分为多次传入。
bind 是返回绑定this之后的函数， 便于稍后调用； apply、 call 则是立即执行。
function fn() {
	console.log(this)
}

const obj = {
	name: "ada"
}

const newfn = fn.bind(obj);