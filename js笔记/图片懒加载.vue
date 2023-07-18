<template>
	<div ref="container" style="height: 400px; overflow-y: scroll">
		<ul>
			<li v-for="(item, index) in items" :key="index">{{ item }}</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted, onBeforeUnmount } from 'vue'
	import { debounce } from 'lodash'
	const isLoading = ref(false) //loading
	const page = ref(1)
	const items : any = ref([])
	const container : any = ref(null) //ref获取dom元素
	const observer : any = ref(null)
	const fetchData = () => {
		isLoading.value = true
		// TODO: 发送请求获取数据...
		// 模拟异步加载数据
		setTimeout(() => {
			const newItems = Array.from(
				{ length: 10 },
				(item, index) => `Item ${items.value.length + index}`
			)
			items.value = [...items.value, ...newItems]
			isLoading.value = false
		}, 1000)
		console.log(items.value)
	}

	onMounted(() => {
		// 在 options 中将容器元素作为根节点（root）
		const options = {
			root: container.value,
			threshold: 0.5, //将阈值设置为 0.5，表示当观察元素的一半进入视图时就触发回调函数
		}
		observer.value = new IntersectionObserver(
			debounce(([entry] : any) => {
				if (entry.isIntersecting && !isLoading.value) {
					page.value++
					fetchData()
				}
			}, 500),
			options
		)
		// 将观察器对象绑定在列表中的最后一个子元素上，以便能够监听它的可见性变化
		observer.value.observe(container.value.lastElementChild)
	})
	onBeforeUnmount(() => {
		// 停止监听
		observer.value.disconnect()
	})
</script>