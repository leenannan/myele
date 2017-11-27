<template>
    <div id="list">
		<el-table :data="tableData" border style="width: 100%">
			    <el-table-column prop="date" label="日期" width="180">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="地址">
			    </el-table-column>
			     <el-table-column label="操作" width="100">
				      <template slot-scope="scope">
				        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				        <el-button type="text" size="small">编辑</el-button>
				      </template>
		       </el-table-column>
		  </el-table>
    </div>
</template>

<script>
  export default {
  	name:"Table",
    methods: {
      handleClick(row) {
        console.log(row);
        this.$router.push({
          path: `/staffs/${row.id}`
        })
      }
    },

    data() {
      return {
        tableData: [
        {
          id:"01",
          date: '2016-05-03',
          name: '王虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
        	id:"02",
          date: '2016-05-02',
          name: '王小',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
        	id:"03",
          date: '2016-05-04',
          name: '小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 15弄',
          zip: 200333
        }, {
        	id:"04",
          date: '2016-05-01',
          name: '王虎',
          province: '上海',
          city: '普陀区',
          address: '上海市区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
<style scoped>
    #list .el-table th{

    text-align: center!important;
    }
	
.el-table td.is-center, .el-table th.is-center{}
</style>