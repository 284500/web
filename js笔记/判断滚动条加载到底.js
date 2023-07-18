window.onscroll = function() {
	//获取网页的总高度
	var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	//clientHeight是网页在浏览器中的可视高度
	var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
	//scrollTop是浏览器滚动条的top位置
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	//判断到底部了,为了避免一些问题，设置距离底部50px时就执行代码
	console.log(scrollTop + clientHeight, htmlHeight);
	if (scrollTop + clientHeight > htmlHeight - 50) {
		pagenum++; // 页码+1
		render();
	}
}