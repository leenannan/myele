<template>
<div class="side">
  <!-- 消失隐藏侧边栏 -->
  
  <!-- 侧边栏 -->    
	  <el-row class="tac">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
          <el-col class="contain">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              background-color="#324157"
              text-color="#fff"
              active-text-color="#20A0FF" :collapse="isCollapse"
              unique-opened router>
                      <el-menu-item index="index">
                           <i class="el-icon-location"></i>
                          <span class="sb-cn">首页</span>
                      </el-menu-item>
                      <el-submenu index="2">
                          <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>前言</span>
                          </template>
                          <el-submenu index="1-4">
                              <template slot="title">选项4</template>
                              <el-menu-item index="1-4-1">选项1</el-menu-item>
                          </el-submenu>
                      </el-submenu>
                      <el-submenu index="3">
                          <template slot="title">
                              <i class="el-icon-location"></i>
                              <span slot="title">导航一</span>
                          </template>
                          <el-menu-item index="staffs">选项1</el-menu-item>
                      </el-submenu>
                      <el-submenu index="4">
                          <template slot="title">
                              <i class="el-icon-location"></i>
                              <span slot="title">导航二</span>
                          </template>
                          <el-menu-item index="chart">选项2</el-menu-item>
                      </el-submenu>
                      <el-submenu index="5">
                          <template slot="title">
                              <i class="el-icon-location"></i>
                              <span slot="title">导航三</span>
                          </template>
                          <el-menu-item index="site">选项3</el-menu-item>
                      </el-submenu>
            </el-menu>
          </el-col>
    </el-row>
</div>
</template>

<script>
  export default {
     data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .tac{
    text-align: left;
  }
  .app-wrapper[data-v-007a274d] {
      position: relative;
      height: 100%;
      width: 100%;
  }
  h5{
    text-align: center;
    color:#fff;
  }
  .app-wrapper .sidebar-container[data-v-007a274d]{
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
  }
  .contain{
    height: 100%;
    width: 180px;
    background-color: #324157;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .el-submenu__title{width: 100%;}
  .el-menu li{width: 100%}
  .el-menu-item{width: 100%;}
  .side{float: left;}
  .el-menu.el-menu-vertical-demo{
    width:180px;
  }
</style>

