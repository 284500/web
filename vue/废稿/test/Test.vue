<template>
  <h2>点击一下{{ props.count+props.obj.count}}</h2>

  <!-- prop属性无法修改 -->
  <!-- <button @click="props.count++">点击一下</button> -->
  <!-- <button @click="$emit('myclick')">传递父元素事件</button> -->
  <button @click="emits('myclick')"></button>
  <hr>
</template>

<script setup>
// prop可以传对象，以及设置参数类型
 const props=defineProps({
    obj:{
        type:Number,
        required:true,
        validtor(value){
            return value !==0
        }
    },
    count:Number
    })
const  emits=defineEmits(["myclick"])
</script>

<style>

</style>