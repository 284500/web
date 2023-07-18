class Stack {
	constructor() {
		this.items = []
	}
	// 入栈 压栈
	push(data) {
		this.items.push(data)
	}
	// 出栈 弹栈
	pop() {
		if (!this.size()) {
			console.warn('当前栈为空，默认返回undefined')
		}
		return this.items.pop()
	}
	// 返回栈顶数据
	peek() {
		if (!this.size()) {
			console.warn('当前栈为空，默认返回undefined')
		}
		return this.items[this.items.length - 1]
	}
	// 清空栈
	clear() {
		this.items = []
	}
	//返回栈中数据个数
	size() {
		return this.items.length
	}
}