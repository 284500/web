浅拷贝

在栈中开辟一个新的空间, 存放拷贝的一份数据， 基本数据类型的值会全部拷贝一遍， 而引用类型则只是复制地址存放在新开辟的栈空间中， 当原引用类型的数据改变时拷贝得到的对象也会改变，
简单来说浅拷贝是拷贝得到的对象会受原对象的影响。
实现浅拷贝的方法

1. 引用类型的直接赋值
let a = {
	name: 'song'
}
let b = a
a.name = 'jian'
console.log(b);


2. Object.create()
let a = {
	name: song
}
let b = Object.create(a)

3. arr.concat() 数组拼接
let arr = [1, '1', true, null, undefined, {
	n: 'as'
}]
let newArr = arr.concat()
arr[0] = 2
arr[5].n = 'qw'
console.log(newArr);

4. arr.slice() 数组删除
let arr = [1, '1', true, null, undefined, {
	n: 'as'
}]
let newArr = arr.slice() //从0砍到最后一位，返回出一个新的数组
arr[0] = 2
arr[5].n = 'qw'
console.log(newArr);


5. object.assign() 对象合并
let obj1 = {
	a: 1,
	b: {
		c: 2
	},
	sym: Symbol(1)
}

let obj2 = {}
Object.assign(obj2, obj1)
obj1.a = 3
obj1.b.c = 4
console.log(obj2);


深拷贝

与浅拷贝相对应， 它不仅会在栈中开辟一个空间存放数据， 如果被拷贝对象有引用类型时， 它也会在堆中开辟另一个空间来存放引用类型的数据， 这样两个对象指向的是不同的地址；
深拷贝得到的对象就不会受原对象的影响。

1. JSON.parse(JSON.stringify(obj))

let obj = {
	name: 'ada',
	age: 20
};
let newobj = JSON.parse(JSON.stringify(obj));

2. 递归赋值
用typeof方法判断实参是否为对象， 创建一个空对象(数组也是对象)， 用for key in obj遍历原对象， obj[key] 是基本类型才直接赋值， 如果是引用类型， 就需要循环递归一层一层找到基本类型赋值。

function deepCopy(obj) {
	if (typeof obj !== 'object' || obj === null) return
	let newObj = obj instanceof Array ? [] : {}
	//循环遍历对象
	for (let key in obj) {
		// obj[key] 是原始类型才直接赋值，是引用类型就循环递归
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			// 递归实现多层引用类型的赋值
			newObj[key] = deepCopy(obj[key])
		} else {
			//直接赋值
			newObj[key] = obj[key]
		}

	}
	return newObj
}。

3. structuredClone函数

let obj = {
	name: 'ada',
	age: 20
};
let newobj = structuredClone(obj);