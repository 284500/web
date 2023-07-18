<template>
    <div class="content">
      <div class="form">
        <el-form ref="form" :model="Form" label-width="80px">
          <el-form-item label="商品名称">
            <el-input v-model="Form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="Form.price"></el-input>
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input v-model="Form.description"></el-input>
          </el-form-item>
          <el-form-item>
            <el-upload list-type="picture-card" :on-preview="handlePictureCardPreview"
               :before-upload="beforeProductUpload">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
  
    </div>
  </template>
  <script setup>
  import { ref, reactive } from 'vue'
  import axios from 'axios';
  
  let Form = reactive({
    name: '',
    imageurl: [],
    price: '',
    description: ''
  });
  let dialogImageUrl = ref();
  let dialogVisible = ref(false)
  
  function handlePictureCardPreview(file) {
    //图片预览
    dialogImageUrl.value = file.url;
    dialogVisible.value = true;
  }
  function beforeProductUpload(file){
          return new Promise(function(resolve, reject) {
            var reader = new FileReader()
           reader.readAsDataURL(file)
            reader.onload = function(event) {
              Form.imageurl.push(event.target.result)
              console.log(dialogImageUrl)
            }
          })
        }
  function submit(){
    let form={
            name:Form.name,
            imgdata:Form.imageurl,
            price:Form.price,
            description:Form.description
    }
    axios({
      method:'post',
      url:'/api/portrait',
      data:form
    })
  }
  </script>
  <style scoped>
  .form {
    background-color: aqua;
    padding: 20px;
  }
  </style>