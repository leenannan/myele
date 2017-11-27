<template>
	<div class="loginBgc">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <h3 class="title">系统登录</h3>
		  <el-form-item label="用户名" prop="admin">
		    <el-input v-model="ruleForm2.admin"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script type="text/javascript">
  import axios from 'axios';
  import {fetch} from '@/api/fetch.js';

	export default {
    name:'Login',
    data() {
      var checkadmin = (rule, value, callback) => {
        if (value==='') {
          return callback(new Error('用户名不能为空'));
        }
        if(!(/^[\w]{3,20}$/.test(value))){ 
          return callback(new Error('3-20位，只能是字母、数字和下划线'));      
        } 
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'));
        } 
        if(!(/^[\w]{6,20}$/.test(value))){ 
          return callback(new Error('6-20位,只能输入字母、数字和下划线'));      
        } 
      };
      
      return {
        ruleForm2: {
          pass: '',
          admin: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          admin: [
            { validator: checkadmin, trigger: 'blur' }
          ]
        }
      };
    },
    created(){
       console.log(fetch.baseUrl);
       console.log(fetch.subDomain);
    },
    methods: {
      submitForm(formName) {
         console.log(fetch.subDomain.accounts.users);

         this.$router.push({ path: '/home' })
         axios.get(fetch.subDomain.accounts.users)
         .then(function(res){
          console.log(res)
         })
         .catch(function(error){
          console.log(error)
         })
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');

        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style type="text/css">
  .loginBgc{
      position: relative;
      height: 100vh;
      background-color: #2d3a4b;
  	}
  .title{
  	color: #fff;
  	margin-bottom: 50px;
  	margin-left: 100px;
  }
  .el-input__inner{
    width: 400px;
    height: 50px;
    line-height: 50px;
  }
  .el-form-item__label{
  	color: #fff;
  	height: 50px;
  	line-height: 50px;
  }
  .el-form{
  	padding-top: 40px;
  	width: 500px;
  	height: 300px;
  	position: absolute;
  	left:50%;
  	top:30%;
  	margin-left: -250px;
  	margin-top: -150px;
  }
   
</style>