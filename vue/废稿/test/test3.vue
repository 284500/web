<template>
    <!-- 设置标签动态的设置属性时，需要使用v-bind
<img src="/public/images/1.jpg" alt="第一张"> -->
    <button @click="changeint">切换图片</button>
    <img :[attrname]="attrvalue" :src="imgPath" alt="第一张">
    <div :=attrs>adada</div>
</template>

<script setup>
import { ref } from "vue"
const imgPath = ref("/public/images/1.jpg")
const changeint = () => {
    imgPath.value = "/public/images/2.jpg"
}
const attrs = {
    id: "box1",
    class: "hello"
}
const attrname="title"
const attrvalue="这是一张图片"
</script>

<style></style>