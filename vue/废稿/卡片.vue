<template>
	<div class="main">
		<div class="container">
			<div class="card">
					<el-card :body-style="{ padding: '0px'}" :shadow="shadow" v-for="item in items">
						<img :src="'../../public/images/' + item.imgname" class="image">
							<div style="padding: 14px">
								<span>Yummy hamburger</span>
								<div class="bottom">
									<time class="time">{{ currentDate }}</time>
									<el-button text class="button">Operating</el-button>
								</div>
							</div>
					</el-card>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
	items: {
		type: Array,
		required: true,
	}
})
const shadow=ref("hover");
const currentDate = ref(new Date())
</script>
<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.el-card{
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
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
}</style>