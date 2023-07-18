<template>
  <h1>天气不错</h1>
  <div class="box1"></div>
</template>

<script setup>

</script>
<!-- style标签编写样式，会影响到所有的组件 -->
<!-- 使用scoped时，vue会为所有元素生成一个值，如data-v-4013c10e -->
<!-- 随机生成的属性，还会添加到当前组件引入的其他组件的根目录上 -->
<!-- 深度选择器，设置子组件样式.app :deep(box1){} -->
<!-- module css模块，自动对模块类名进行hash来确保唯一性
$style.class -->
<style scoped>
h1{
    background-color: #bfa;
}
.box1{
    width: 200px;
    height: 200px;
    background-color: yellow;
    margin: 0 auto;
}
</style>