<template>
	<div class="bgc">
        <el-dropdown :hide-on-click="true"  class="avatar-container">
          <i class="el-icon-caret-bottom el-icon--right"></i>
          <el-dropdown-menu slot="dropdown"  class="avatar-container">
                <router-link class='inlineBlock' to="/home">
			    	<el-dropdown-item>首页</el-dropdown-item>
			    </router-link>
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">退出登录</span>
                </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="avatar-wrapper">
			<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
			}
		},
		methods:{
			logout(){
				console.log(1);
			}
		}
	}
</script>
<style scoped>
   .bgc{
   	height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    background-color: #eef1f6;
    margin-left: 180px;
   }
   .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-caret-bottom {
    font-size: 22px;
  }
  .el-dropdown-menu{
  	width: 100px;
  	top:10px;
  }
  .avatar-wrapper{
   	float: right;
   }
  .el-dropdown{
  	float: right;
  	padding:0 20px;
  }
   .user-avatar{
   	width: 40px	;
   	height: 40px;
   	border-radius: 10px;
   	vertical-align: middle;
    margin-bottom: 2px;
   }

</style>