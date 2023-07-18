class Person {
	// constructor(name, age) {
	// 	this.age = age;
	// 	this.name = name;
	// }
	constructor(o) {
		this.age = o.age;
		this.name = o.name;
	}
	sayhello() {
		console.log(this.name + this.age)
	}
}
// var person =new Person("ada",18)
var person = new Person({
	name: "ada",
	age: 18
});
person.sayhello();
//构造函数

function Man() {
	this.name = "man";
	this.age = "20";
	this.hello = function() {
		console.log(this.name, this.age);
	}
}
var man = new Man();
man.hello();