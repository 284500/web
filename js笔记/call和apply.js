call 和apply都可以改变this的指向


call（）： 第一个参数是this值没有变化， 变化的是其余参数都直接传递给函数。 在使用call（） 方法时， 传递给函数的参数必须逐个列举出来。

apply（）： 传递给函数的是参数数组

let obj1 = {
	name: "张三",
	age: 24,
	user: function(args) {
		console.log("姓名：", this.name);
		console.log("年龄：", this.age);
		console.log("参数", args);
	}
}
let obj2 = {
	name: "李四",
	age: 30,
	user: function(args) {
		console.log("姓名：", this.name);
		console.log("年龄：", this.age);
		console.log("参数", args);
	}
}
// 正常的调用
// obj1.user('我是参数');
// obj2.user('我是参数');

// 改变this指向
obj1.user.call(obj2, "我是参数"); // 使用call方法改变
obj2.user.apply(obj1, ["我是参数"]); // 使用apply方法改变