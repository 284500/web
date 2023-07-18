返回值为函数的函数

function somefn() {
	return "高级函数"
}

function outer(cb) {
	return () => {
		console.log("记录日志");

		const result = cb();
		return result;
	}
}

let result = outer(somefn);
console.log(result);