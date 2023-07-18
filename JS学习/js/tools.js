function getstyle(obj,name)
{
	//obj 要获取样式的元素,name 要获取的样式名
	return getComputedStyle(obj,null)[name];
}
function move(obj,attr,speed,target,callback){
	//obj对象，speed移动速度，target目标位置,attr 要执行动画的样式,callback回调函数
	clearInterval(obj.timer);
	var current=parseInt(getstyle(obj,attr));
	if(current>target){speed=-speed;}
	obj.timer=setInterval(function(){
	obj.style[attr]=parseInt(getstyle(obj,attr))+speed+"px";
	if((speed<0&&parseInt(obj.style[attr])<target)||(speed>0&&parseInt(obj.style[attr])>target))
	{obj.style[attr]=target+"px";}
	if(parseInt(obj.style[attr])==target){
	clearInterval(obj.timer);
	callback&&callback();}
	},30);
}
function addClass(obj,cn){
				if(!hasclass(obj,cn)){obj.className+=" "+cn;}
			}
			//判断是否有指定元素
			function hasclass(obj,cn){
				//创建正则表达式
				//var reg=/\bb2\b/;
				var reg=new RegExp("\\b"+cn+"\\b");
				return reg.test(obj.className);
			}
			//移除
			function removeclass(obj,cn){
				var reg=new RegExp("\\b"+cn+"\\b");
				obj.className=obj.className.replace(reg,"");
			}
			//切换
			function toggleclass(obj,cn){
				if(!hasclass(obj,cn)){addClass(obj,cn);}
				else{removeclass(obj,cn);}
			}