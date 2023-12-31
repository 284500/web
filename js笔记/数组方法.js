1. join()（ 数组转字符串）
数组转字符串， 方法只接收一个参数： 即默认为逗号分隔符（）。

	<
	script >
	var arr = [1, 2, 3, 4];
console.log(arr.join()); //1,2,3,4
console.log(arr.join(":")); //1:2:3:4
console.log(arr); //[1,2,3,4],原数组不变
<
/script>
join() 实现重复字符串

	<
	script >
	function repeatStr(str, n) {
		return new Array(n + 1).join(str);
	}
console.log(repeatStr("嗨", 3)); //嗨嗨嗨
console.log(repeatStr("Hi", 3)); //HiHiHi
console.log(repeatStr(1, 3)); //111
<
/script>
2. push() 和pop()（ 数组尾操作）
push()： 方法可向数组的末尾添加一个或多个元素， 并返回新的长度。

pop()： 方法用于删除并返回数组的最后一个元素。

	<
	script >
	var arr = [1, 2, 3, 4];
//push
var push_arr = arr.push("Tom", "Sun");
console.log(arr); //[1,2,3,4,"Tom","Sun"];
console.log(push_arr); // 6
//pop
var pop_arr = arr.pop();
console.log(arr); //[1,2,3,4,"Tom"];
console.log(pop_arr); // Sun	
<
/script>
3. shift() 和 unshift()（ 数组首操作）
shift()： 方法用于把数组的第一个元素从其中删除， 并返回第一个元素的值。

unshift()： 方法可向数组的开头添加一个或更多元素， 并返回新的长度。

	<
	script >
	var arr = [1, 2, 3, 4];
//shift
var shift_arr = arr.shift();
console.log(arr); // [2, 3, 4]
console.log(shift_arr); // 1
//unshift
var unshift_arr = arr.unshift("Tom");
console.log(arr); // ["Tom", 2, 3, 4]
console.log(unshift_arr); // 4
<
/script>
4. sort()（ 排序）
方法用于对数组的元素进行排序。

	<
	script >
	var arr = [1, 100, 5, 20];
console.log(arr.sort()); // [1, 100, 20, 5]
console.log(arr); // [1, 100, 20, 5] (原数组改变)	
<
/script>
请注意， 上面的代码没有按照数值的大小对数字进行排序， 是按照字符编码的顺序进行排序， 要实现这一点， 就必须使用一个排序函数：

升序：

	<
	script >
	var arr = [1, 100, 5, 20];

function sortNumber(a, b) {
	return a - b
};
console.log(arr.sort(sortNumber)); //[1, 5, 20, 100]
console.log(arr); //[1, 5, 20, 100] (原数组改变)
<
/script>
降序：

	<
	script >
	var arr = [1, 100, 5, 20];

function sortNumber(a, b) {
	return b - a
};
console.log(arr.sort(sortNumber)); // [100, 20, 5, 1]
console.log(arr); // [100, 20, 5, 1] (原数组改变)
<
/script>
5. reverse()（ 反转数组）
方法用于颠倒数组中元素的顺序。

	<
	script >
	var arr = [12, 25, 5, 20];
console.log(arr.reverse()); // [20, 5, 25, 12]
console.log(arr); // [20, 5, 25, 12] (原数组改变)
<
/script>
6. concat()（ 连接两个或多个数组）
concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组， 而仅仅会返回被连接数组的一个副本。 在没有给 concat() 方法传递参数的情况下， 它只是复制当前数组并返回副本。

	<
	script >
	var arr = [1, 2, 3, 4];
var arr2 = [11, 12, 13]
var arrCopy = arr.concat(arr2);
console.log(arr.concat()); // [1, 2, 3, 4] (复制数组)
console.log(arrCopy); // [1, 2, 3, 4, 11, 12, 13]
console.log(arr); // [1, 2, 3, 4] (原数组未改变)
<
/script>
如果传入的参数是一个二维数组呢？

	<
	script >
	var arr = [1, 2, 3, 4];
var arr2 = [11, [12, 13]]
var arrCopy = arr.concat(arr2);
console.log(arrCopy); // [1, 2, 3, 4, 11, Array(2)]
console.log(arr); // [1, 2, 3, 4] (原数组未改变)
<
/script>
从上面代码中可以看出concat方法只能将传入数组中的每一项添加到数组中， 如果传入数组中有些项是数组， 那么也会把这一数组项当作一项添加到arrCopy中。


7. slice()（ 数组截取）

arr.slice(start, end);

start： 可选。 规定从何处开始选取。 如果是负数， 那么它规定从数组尾部开始算起的位置。 也就是说， - 1 指最后一个元素， - 2 指倒数第二个元素， 以此类推。

end： 可选。 规定从何处结束选取。 该参数是数组片断结束处的数组下标。 如果没有指定该参数， 那么切分的数组包含从 start 到数组结束的所有元素。 如果这个参数是负数， 那么它规定的是从数组尾部开始算起的元素。

返回值： 返回一个新的数组， 包含从 start 到 end（ 不包括该元素） 的 arr 中的元素。

	<
	script >
	var arr = [1, 4, 6, 8, 12];
var arrCopy1 = arr.slice(1);
var arrCopy2 = arr.slice(0, 4);
var arrCopy3 = arr.slice(1, -2);
var arrCopy4 = arr.slice(-5, 4);
var arrCopy5 = arr.slice(-4, -1)
console.log(arrCopy1); // [4, 6, 8, 12]
console.log(arrCopy2); // [1, 4, 6, 8] 
console.log(arrCopy3); // [4, 6] 
console.log(arrCopy4); // [1, 4, 6, 8]
console.log(arrCopy5); // [4, 6, 8]
console.log(arr); // [1, 4, 6, 8, 12] (原数组未改变) 
<
/script>

8. splice()（ 数组更新）

splice() 方法向 / 从数组中添加 / 删除项目， 然后返回被删除的项目。（ 该方法会改变原始数组）

arr.splice(index, howmany, item1, ....., itemX)

index： 必需。 整数， 规定添加 / 删除项目的位置， 使用负数可从数组结尾处规定位置。

howmany： 必需。 要删除的项目数量。 如果设置为 0， 则不会删除项目。

item1, ..., itemX： 可选。 向数组添加的新项目。

返回值： 含有被删除的元素的数组， 若没有删除元素则返回一个空数组。

	<
	script >
	var arr = ["张三", "李四", "王五", "小明", "小红"];
/**************删除"王五"****************/
var arrReplace1 = arr.splice(2, 1);
console.log(arrReplace1); // ["王五"] 
console.log(arr); // ["张三", "李四", "小明", "小红"] (原数组改变)
//删除多个
var arrReplace2 = arr.splice(1, 2);
console.log(arrReplace2); //  ["李四", "小明"] 
console.log(arr); // ["张三", "小红"]
/**************添加"小刚"****************/
var arrReplace3 = arr.splice(1, 0, "小刚");
console.log(arrReplace3); // [] (没有删除元素，所以返回的是空数组)
console.log(arr); // ["张三", "小刚", "小红"]
//添加多个
var arrReplace4 = arr.splice(3, 0, "刘一", "陈二", "赵六");
console.log(arrReplace4); // []
console.log(arr); // ["张三", "小刚", "小红", "刘一", "陈二", "赵六"]
/**************"王五"替换"小刚"****************/
var arrReplace5 = arr.splice(1, 1, "王五");
console.log(arrReplace5); // ["小刚"]
console.log(arr); // ["张三", "王五", "小红", "刘一", "陈二", "赵六"]
//替换多个
var arrReplace6 = arr.splice(1, 4, "李四");
console.log(arrReplace6); // ["王五", "小红", "刘一", "陈二"]
console.log(arr); // ["张三", "李四", "赵六"]
<
/script>

ES5数组新增方法：
2 个索引方法： indexOf() 和 lastIndexOf()
两个方法都返回要查找的项在数组中首次出现的位置， 在没找到的情况下返回 - 1

indexOf() -- -- -- --array.indexOf(item, start)（ 从数组的开头（ 位置 0） 开始向后查找）

item： 必须。 查找的元素。

start： 可选的整数参数。 规定在数组中开始检索的位置。 如省略该参数， 则将从array[0] 开始检索。

lastIndexOf() -- -- -- --array.lastIndexOf(item, start)（ 从数组的末尾开始向前查找）

item： 必须。 查找的元素。

start： 可选的整数参数。 规定在数组中开始检索的位置。 如省略该参数， 则将从 array[array.length - 1] 开始检索。

	<
	script >
	var arr = [1, 4, 7, 10, 7, 18, 7, 26];
console.log(arr.indexOf(7)); // 2
console.log(arr.lastIndexOf(7)); // 6
console.log(arr.indexOf(7, 4)); // 4
console.log(arr.lastIndexOf(7, 2)); // 2
console.log(arr.indexOf(5)); // -1		
<
/script>

ES6数组新增方法（ 注意浏览器兼容）
1. Array.from()
方法是用于类似数组的对象（ 即有length属性的对象） 和可遍历对象转为真正的数组。

	<
	script >
	let json = {
		'0': '卢',
		'1': '本',
		'2': '伟',
		length: 3
	}
let arr = Array.from(json);
console.log(arr); // ["卢", "本", "伟"]	
<
/script>
2. Array.of()
方法是将一组值转变为数组， 参数不分类型， 只分数量， 数量为0返回空数组。

	<
	script >
	let arr1 = Array.of(1, 2, 3);
let arr2 = Array.of([1, 2, 3]);
let arr3 = Array.of(undefined);
let arr4 = Array.of();
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [[1, 2, 3]]
console.log(arr3); // [undefined]
console.log(arr4); // []
<
/script>
3. find()
方法返回通过测试（ 函数内判断） 的数组的第一个元素的值。 方法为数组中的每个元素都调用一次函数执行。 当数组中的元素在测试条件时返回 true 时, find
	() 返回符合条件的元素， 之后的值不会再调用执行函数。 如果没有符合条件的元素返回 undefined。

回调函数可以接收3个参数， 依次为当前的值（ currentValue）、 当前的位置（ index）、 原数组（ arr）

注意： find() 对于空数组， 函数是不会执行的。 find() 并没有改变数组的原始值。

	<
	script >
	let Arr = [1, 2, 5, 7, 5, 9];
let result1 = Arr.find(function(currentValue, index, arr) {
	return currentValue > 5;
});
let result2 = Arr.find(function(currentValue, index, arr) {
	return currentValue > 9;
});
console.log(result1); // 7
console.log(result2); // undefined
<
/script>
find() 实现根据id取出数组中的对象

	<
	script >
	let Arr = [{
			id: 1,
			name: "张三"
		},
		{
			id: 2,
			name: "李四"
		}
	];
let obj = Arr.find(function(currentValue, index, arr) {
	return currentValue.id === 1;
});
console.log(obj.name); // 张三
<
/script>

4. findIndex()
findIndex和find差不多， 不过默认返回的是索引， 如果没有符合条件的元素返回 - 1

	<
	script >
	let Arr = [1, 2, 5, 7, 5, 9];
let result1 = Arr.findIndex(function(currentValue, index, arr) {
	return currentValue > 5;
});
let result2 = Arr.findIndex(function(currentValue, index, arr) {
	return currentValue > 9;
});
console.log(result1); // 3
console.log(result2); // -1
<
/script>
5. fill()
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。 不包括终止索引。

语法： array.fill(value, start, end)

value： 必需。 填充的值。

start： 可选。 开始填充位置。 如果这个参数是负数， 那么它规定的是从数组尾部开始算起。

end： 可选。 停止填充位置(默认为 array.length)。 如果这个参数是负数， 那么它规定的是从数组尾部开始算起。

	<
	script >
	let arr = [1, 2, 3, 4, 5, 6];
arr.fill(0); // [0, 0, 0, 0, 0, 0]
arr.fill(0, 1); // [1, 0, 0, 0, 0, 0] 
arr.fill(0, 1, 2); // [1, 0, 3, 4, 5, 6]
arr.fill(0, -1); // [1, 2, 3, 4, 5, 0]
arr.fill(0, 1, -1); // [1, 0, 0, 0, 0, 6]
<
/script>
6. 遍历数组方法 keys()、 values()、 entries()
这三个方法都是返回一个遍历器对象， 可用for...of循环遍历， 唯一区别： keys() 是对键名的遍历、 values() 对键值的遍历、 entries() 是对键值对的遍历。

keys()

	<
	script >
	let arr = ["a", "b", "c", "d"];
for (let i of arr.keys()) {
	console.log(i);
}
//打印：
// 0
// 1
// 2
// 3
<
/script>
values()

	<
	script >
	let arr = ["a", "b", "c", "d"];
for (let i of arr.values()) {
	console.log(i);
}
//打印：
// a
// b
// c
// d
<
/script>
entries()

	<
	script >
	let arr = ["a", "b", "c", "d"];
for (let i of arr.entries()) {
	console.log(i);
}
//打印：
// [0, "a"]
// [1, "b"]
// [2, "c"]
// [3, "d"]
for (let [idx, item] of arr.entries()) {
	console.log(idx + ":" + item);
}
//打印：
// 0:a
// 1:b
// 2:c
// 3:d
<
/script>

7. includes()
方法用来判断一个数组是否包含一个指定的值， 如果是返回 true， 否则false。

语法： arr.includes(searchElement, fromIndex)

searchElement： 必须。 需要查找的元素值。

fromIndex： 可选。 从该索引处开始查找 searchElement。 如果为负值， 则按升序从 array.length + fromIndex 的索引开始搜索。 默认为 0。


8. copyWithin()
方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中， 会覆盖原有成员

语法： array.copyWithin(target, start, end)

target： 必需。 从该位置开始替换数据。

start： 可选。 从该位置开始读取数据， 默认为 0。 如果为负值， 表示倒数。

end： 可选。 到该位置前停止读取数据， 默认等于数组长度。 如果为负值， 表示倒数。