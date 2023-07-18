<template>
    <div class="container">
      <h1 class="title">创建你的账号</h1>
      <div v-for="item in fields" :key=item class="inputContainer">
        <div class="field">{{item.title}}<span v-if="item.required" style="color: red;">*</span></div>
        <input v-model="item.model" class="input" :type="item.type" />
        <div class="tip" v-if="index == 2">请确认密码程度需要大于6位</div>
      </div>
      <div class="subContainer">
        <div class="setting">偏好设置</div>
        <input v-model="receiveMsg" class="checkbox" type="checkbox" /><label class="label">接收更新邮件</label>
      </div>
      <button @click="createAccount" class="btn">创建账号</button>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        fields: [
          {
            title: "用户名",
            required: true,
            type: "text",
            model: ""
          }, {
            title: "邮箱地址",
            required: false,
            type: "text",
            model: ""
          }, {
            title: "密码",
            required: true,
            type: "password",
            model: ""
          }
        ],
        receiveMsg: false
      }
    },
    computed: {
      name: {
        get() {
          return this.fields[0].model
        },
        set(value) {
          this.fields[0].model = value
        }
      },
      email: {
        get() {
          return this.fields[1].model
        },
        set(value) {
          this.fields[1].model = value
        }
      },
      password: {
        get() {
          return this.fields[2].model
        },
        set(value) {
          this.fields[2].model = value
        }
      }
    },
    methods: {
      emailCheck() {
        var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        if (!verify.test(this.email)) {
          return false
        } else {
          return true
        }
      },
      createAccount() {
        if (this.name.length == 0) {
          alert("请输入用户名")
          return
        } else if (this.password.length <= 6) {
          alert("密码设置需要大于6位字符")
          return
        } else if (this.email.length > 0 && !this.emailCheck(this.email)) {
          alert("请输入正确的邮箱")
          return
        }
        alert("注册成功")
        console.log(`name:${this.name}\npassword:${this.password}\nemail:${this.email}\nreceiveMsg:${this.receiveMsg}`)
      }
    }
  };
  </script>
  <style>
  .container {
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;
    width: 300px;
  }
  
  .title {
    font-size: 45px;
  }
  
  .input {
    width: 90%;
  }
  
  .inputContainer {
    text-align: left;
    margin-bottom: 20px;
  }
  
  .subContainer {
    text-align: left;
  }
  
  .field {
    font-size: 14px;
  }
  
  .input {
    border-radius: 6px;
    height: 25px;
    margin-top: 10px;
    border-color: silver;
    border-style: solid;
    background-color: cornsilk;
  }
  
  .tip {
    margin-top: 5px;
    font-size: 12px;
    color: gray;
  }
  
  .setting {
    font-size: 9px;
    color: black;
  }
  
  .label {
    font-size: 12px;
    margin-left: 5px;
    height: 20px;
    vertical-align: middle;
  }
  
  .checkbox {
    height: 20px;
    vertical-align: middle;
  }
  
  .btn {
    border-radius: 10px;
    height: 40px;
    width: 300px;
    margin-top: 30px;
    background-color: deepskyblue;
    border-color: blue;
    color: white;
  }
  </style>
  