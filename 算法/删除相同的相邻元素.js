var removeDuplicates = function(arr) {
	let stack = [];
	for (item of arr) {
		let prev = stack.pop();
		if (item != prev) {
			stack.push(prev);
			stack.push(item);
		}
	}
	stack.shift();
	return stack;
}

var a = removeDuplicates([2, 3, 3, 2, 1, 5]);
console.log(a)