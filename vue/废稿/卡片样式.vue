<template>
	<div class="header">
		<ul>
			<li><a href="#">ada</a></li>
			<li><a href="#">add</a></li>
			<li><a href="#">dada</a></li>
			<li><a href="#">adad</a></li>
			<li><a href="#">adad</a></li>
		</ul>
	</div>
	<div class="main">
		<div class="container">
			<div class="card">
				<a v-for="item in items">
                <el-card :body-style="{ padding: '0px' }">
					<img :src="'../../public/images/' + item + '.jpg'" class="image">
					<div style="padding: 14px;">
						<span>好吃的汉堡</span>
						<div class="bottom clearfix">
							<time class="time">{{ currentDate }}</time>
							<el-button type="text" class="button">加入购物车</el-button>
						</div>
					</div>
				</el-card>
			</a>				
			</div>
		</div>

	</div>
</template>
<script setup>
import { ref } from 'vue'
const currentDate = ref(new Date())
const items = ref([1, 2, 3, 4, 5, 6, 7])
</script>
<style scoped>
.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: "";
}

.clearfix:after {
	clear: both
}

.header {
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	width: 99vw;
	height: 50px;
	background-color: #050505;
	z-index: 999;
}

.header ul {
	display: flex;
	list-style-type: none;
}

.header ul li {
	width: 50px;
}

.main {
	width: 99vw;
	min-height: 960px;
	background-color: #2196F3;
	display: flex;
	justify-content: center;
	padding: 10px;
	box-sizing: border-box;
}

.card {
	width: 90vw;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	/* grid-template-rows: repeat(auto-fill,minmax(250px,1fr)); */
}
</style>