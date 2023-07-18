自执行函数也叫立执行函数
是将函数的声明和调用合并在一起

1： 在函数表达式后加括号， 可以立即执行函数
let fn = function() {
	console.log("可以执行")
}();
2： 在函数声明后加括号， 不可以立即执行函数

function fn() {
	console.log("不可以执行")
}();

function() {
	console.log("不可以执行")
}();
3: javascript中， 括号内不允许包含语句，
但可以是表达式, 会将函数声明识别成函数表达式
	(function fn() {
		console.log("可以执行")
	})();
(function() {
	console.log("可以执行")
})();
//自执行函数的形式
// 形式1
// (function() {console.log('自己执行1')})()
// 形式2
// (function() { console.log('自己执行2')}())