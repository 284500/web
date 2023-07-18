匿名函数： 没有实际名字的函数。
首先我们声明一个普通函数：

//声明一个普通函数，函数的名字叫fn
function fn() {
	console.log("web-chubby");
}
然后将函数的名字去掉即是匿名函数：

//匿名函数，咦，运行时，你会发现报错啦！
function() {
	console.log("web-chubby");
}
到此， 你会发现单独运行一个匿名函数， 由于不符合语法要求， 报错啦！ 解决方法只需要给匿名函数包裹一个括号即可：

	//匿名函数在其它应用场景括号可以省略
	(function() {
		//由于没有执行该匿名函数，所以不会执行匿名函数体内的语句。
		console.log("web-chubby");
	})
如果需要执行匿名函数， 在匿名函数后面加上一个括号即可立即执行！

	(function() {
		//此时会输出web-chubby
		console.log("web-chubby");
	})()
倘若需要传值， 直接将参数写到括号内即可：

	(function(str) {
		//此时会输出web-chubby好帅！
		console.log("web-chubby" + str);
	})("好帅！")