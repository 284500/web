var reverse = function(head) {
	let prev = null; //前一个元素
	while (head) {
		[head.next, prev, head] = [prev, head, head.next]
	}
}

var change = function(head) {
	let p = head;
	let prev = null;
	while (p) {
		var next = p.next;
		p.next = prev;
		prev = p;
		p = next;
	}

}