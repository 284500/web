var person = new Object();
person.name = "孙悟空";
person.sayname = function() {
	alert(this.name);
}

class Man {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayname() {
		alert(this.name)
	}
}
var man = new Man('ada', 18);
console.log(man);
console.log(person)