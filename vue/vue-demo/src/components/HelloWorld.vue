<template>
  <div id="top_bg">
			<div id="top">
			<ul class="left">
				<li><a href="#">登录</a></li>
				<li><a href="#">注册</a></li>
			</ul>
			<ul class="right">
				<li  class="list" @click="myclick"><span>个人中心</span>
				<div id="list_cur" v-if="flag">
					<a href="#">已完成订单</a>
					<a href="#">未完成订单</a>
					<a href="#">我的保险</a>
					<a href="#">账号安全</a>
					<a href="#">个人信息</a>
					<a href="#">联系人</a>
				</div>
				</li>
				<li class="line">|</li>
				<li class="list"><span>使用须知</span></li>
				<li class="line">|</li>
				<li class="list"><span>收藏夹</span></li>
				<li class="line">|</li>
				<li class="list"><span>货物快运</span></li>
				<li class="line">|</li>
				<li class="list"><span>联系我们</span></li>
				<li class="line">|</li>
			</ul>
			</div>
		</div>
		<div id="nav_bg">
			<div class="nav">
				<h2><img width="98px" height="57px;" src="../assets/QQ图片20200222131701.jpg"/></h2>
				<ul>
					<li><a href="#">汽车票</a></li>
					<li><a href="#">时刻表</a></li>
					<li><a href="#">汽车站</a></li>
					<li><a href="#">酒店预定</a></li>
				</ul>
			</div>
		</div>
		<div id="banner"><img width="980px;" height="519px;" src="../assets/9.jpg"/>
		</div>
		<ul id="week">
			<li><a href="#">01月27日<br/>周三</a></li>
			<li><a href="#" class="next">01月28日<br/>周四</a></li>
			<li><a href="#" class="next">01月29日<br/>周五</a></li>
			<li><a href="#" class="next">01月30日<br/>周六</a></li>
			<li><a href="#" class="next">01月31日<br/>周日</a></li>
			<li><a href="#" class="next">02月01日<br/>周一</a></li>
			<li><a href="#" class="next">02月02日<br/>周二</a></li>
		</ul>
		<table id="tbl" class="table">
			<tr class="title">
				<th>出发时间</th>
				<th>出发点</th>
				<th>车次</th>
				<th>票价</th>
				<th>购票</th>
			</tr>
			<tr>
				<td class="txt1">6.30</td>
				<td class="txt2"><span class="red">起始</span>南昌西<br/><span class="blue">终点</span>昌北</td>
				<td>一等票</td>
				<td>$<span class="colors">100</span></td>
				<td><a href="#" class="buy">购票</a></td>
			</tr>
			<tr>
				<td class="txt1">6.30</td>
				<td class="txt2"><span class="red">起始</span><br/><span class="blue">终点</span></td>
				<td>二等票</td>
				<td>$<span class="colors">70</span></td>
				<td><a href="#" class="buy">购票</a></td>
			</tr>
		</table>
		<div id="footer">
			赶集网版权所有2021-9-18日
		</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      flag:false
    }
  },
  methods:{
    myclick(){
      this.flag=!this.flag
    }
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
body,ul,p,dl,dt,dd,h1,table,tr,td,th,h2,li{
	margin: 0;
	padding: 0;
	list-style: none;
	outline: none;
	border: 0;
}
body{
	color:blue;
	font-size: 12px;
	font-family: "微软雅黑";
}
a:link,a:visited{text-decoration: none; color:blue;}
a:hover{text-decoration: none;}
#top_bg{width: 100%;
height: 30px;
background: #F7F7F7;}
#top{
	width: 980px;
	height: 30px;
	line-height: 30px;
	margin: 0 auto;
}
.left{float:left;}
.right{float:right;}
#top li{
	float:left;
	padding: 0px 10px 0px 0px;
}
#top .line{color: #CCC;}
.right li{
	cursor: pointer;
	border: 1px solid #f7f7f7;
}
.right li span{padding: 0px 9px;}
.right .list{position: relative;}
.right #list_cur{
	width: 95px;
	position: absolute;
	left: -1px;
	top: 30px;
	background-color: #FFF;
	border: 1px solid #EEE;
}
.right #list_cur a{
	display: block;
	padding: 0 10px;
	line-height: 28px;
	color: #6C6C6C}
.right #list_cur a:hoover{background: #F5F5F5;}
/* 导航 */
#nav_bg{
	width:100%;
	height: 95px;
	background-color: #fff;
	border-bottom: 5px solid #d3d3d3;
}
.nav{
	width: 980px;
	margin: 5px auto 0;
	height: 100px;
}
.nav h2{
	height: 70px;
	padding-top: 25px;
	float: left;
}
.nav ul{
	float:left;
}
.nav ul li{
	float:left;
}
.nav ul li a{
	display: block;
	padding: 0 40px;
	height: 95px;
	line-height: 95px;
	font-size: 14px;
	border-bottom: 5px solid #D3D3D3;
}
.nav ul li a:hover{
	color:blue;
	border-bottom: 5px solid blue;
}
/* banner */
#banner{
	width: 980px;
	height: 519px;
	margin: 0 auto;
}
#week{
	width: 980px;
	height: 80px;
	margin: 30px auto;
}
#week li
{float:left;}
#week a{
	display: inline-block;
	width: 137px;
	height: 50px;
	text-align: center;
	padding-top: 28px;
	background: #FFF8F2;
	border: 2px solid #D3D3D3;
}
#week .next{border-left: 0;}
#week a:hover{
	background: #FFF;
	border-bottom: 2px solid #FFF;
}
/* 表格 */	
.table{
	width: 980px;
	border-collapse: collapse;
	margin: 0 auto;
	border: 1px solid #e8e8e8;
	font-size: 14px;
}
.table tr{
	height:90px;
	text-align: center;
	background-color: #ffe8c8;
}
.table .title{
	background-color: #f8f8f8;
	height: 30px;
	color: #999;
	font-size: 16px;
}
.txt1,.colors{
	font-size: 24px;
	color: #ff7000;
}
.table .txt2{
	width: 120px;
	text-align: left;
}
.red,.blue{
	display: inline-block;
	width: 18px;
	background: #ff7600;
	color: #fff;
	line-height: 18px;
	text-align: center;
}
.blue{background: #06F;}
.buy{
	width: 100px;
	height: 30px;
	background: #ff7600;
	display: inline-block;
	line-height: 30px;
	color: #fff;
}
.buy:link,.buy:visited{color: #FFF;}
.buy:hover{border: #ff9942;}
.table .even{background-color: white}
#footer{
	width: 100%;
	height: 80px;
	color: #555;
	text-align: center;
	line-height: 80px;
	margin-top: 50px;
	font-size: 14px;
}
</style>