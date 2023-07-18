const person = {
	name: "ada",
	age: 18
}
console.log(person)
//...将对象结构，再赋值给新对象
const cat = {
	...person,
	price: 18
};
console.log(cat)