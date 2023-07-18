使用闭包主要为了设计私有的方法和变量。

优点是可以避免变量的污染
缺点是闭包会常驻内存， 会增大内存使用量， 使用不当很容易造成内存泄露。
在js中， 函数即闭包， 函数才会产生作用域的概念。
1， 函数作为返回值

function f1() {
	var counter = 1;

	function f2() {
		counter += 1;
	}
	return f2;
}
var number = f1();
number();

2, 函数作为参数被传递

var counter = 10;
let fn = function(x) {
	counter += x;
};
(function(f) {
	var counter = 100;
	f(15);
})(fn);
这里的counter是10, 不是100;

3. for循环与闭包(自执行函数)
var data = [];
for (var i = 0; i < 3; i++) {
	(function(j) {
		data[j] = () => {
			console.log(j)
		}
	})(i)
}
data[0]();
data[1]();
data[2]();

4. 回调函数就是使用闭包

window.n = 999;
setTimeout(function f1() {
	console.log(window.n);
}, 1000)