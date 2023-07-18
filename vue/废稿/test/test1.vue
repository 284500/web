<template>
<el-switch
  v-model="valu"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
<div>{{ valu }}</div>
<button @click="click">
      {{ valu }}
    </button>
</template>

<script setup>
//setup里面的数据必须设置代理
//ref包装单个值  let myObject=Vue.ref(1)
// ref方法创建了响应式对象后，在setup方法内要修改数据，就需要对
// myObject中的value属性值进行修改
import { ref } from 'vue';
let valu=ref(false)
let count=ref(0)
function click(){
    valu.value=!valu.value
    alert(valu)
}
console.log(count)
</script>