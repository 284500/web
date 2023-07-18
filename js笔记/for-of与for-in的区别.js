// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值

// for in总是得到对象的key或数组、字符串的下标

// for of总是得到对象的value或数组、字符串的值

var arr = [1, 2, 3]

for (let index in arr) {
	console.log(arr[index]);
}

for (let value in arr) {
	console.log(arr);
}