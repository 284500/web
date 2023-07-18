<template>
  <div class="tab-wrapper">
    <header class="tab-head">
       <div @click="current=0" class="tab-button" :class="{active:current===0}">热门球员</div>
       <div @click="current=1" class="tab-button" :class="{active:current===1}">热门球队</div>
    </header>
    <div class="main" style="color:#fff; font-size: 20px;">
      <div v-show="current===0">球员</div>
      <div>球队</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
 const current=ref(0)
</script>
<style scoped>
.tab-wrapper{
box-sizing: border-box;
width:800px;
padding: 20px;
background-color: rgb(45,93,211);
position: fixed;
top:0;
left: 0;
}
.tab-head{
    display: flex;
    border-radius: 20px;
    overflow: hidden;
}
.tab-button{
    background-color: #fff;
    font-size:30px;
    padding: 10px 0;
    flex:auto;
    cursor: pointer;
    transition: 0.5s;
}
.active{
    background-color: rgb(187,3,52);
    color:#fff;
}
.tab-button:not(.active):hover{
    color: rgb(187,3,52);
}
</style>