arguments是函数里的一个隐含参数
arguments是一个类数组对象
函数传入的参数会传入arguments

function fn() {
	console.log(arguments.length)
}
fn(1, 2, 3)

箭头函数不绑定arguments，
取而代之用rest参数...代替arguments对象，
来访问箭头函数的参数列表

function A(a) {
	console.log(arguments);
}
A(1, 2, 3, 4, 5, 8); //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 箭头函数
let B = (b) => {
	console.log(arguments);
}
B(2, 92, 32, 32); // Uncaught ReferenceError: arguments is not defined

// rest参数...
let C = (...c) => {
	console.log(c);
}
C(3, 82, 32, 11323); // [3, 82, 32, 11323]