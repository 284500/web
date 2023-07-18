函数调用方法不同, this的值也不同

1, 函数形式调用, this指向window

function fn() {
	console.log(this);
}
fn();
2, 方法形式调用, this指向调用的对象
const obj = {
	name: "obj",
	fn
};
obj.fn()
3, 构造函数里, this是新建的对象

function Person() {
	this.name = 'ada';
	this.age = 18;
	this.sayhello = function() {
		console.log(this.name + this.age);
	}
}
var person = new Person();
person.sayhello();
4, 箭头函数没有this, 箭头函数指向的是外部的this

let fn = () => {
	console.log(this);
}