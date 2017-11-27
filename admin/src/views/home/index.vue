<template>
	<div class='conta'>
		   <span>首页</span>
		<div class="charts">
			<div id="main" :style="{width:'300px',height:'300px'}">
			</div>
		</div>
     <router-link to = "/index" tag="a">呵呵呵</router-link>
    <ul>
      <li v-for = "item in routerLinks">
         <router-link :to = "{name:item.name,params:{id:item.id}}" tag="a">{{item.name}}</router-link>
      </li>
    </ul>
	</div>
</template>
<script type="text/javascript">
  import echarts from 'echarts';
  
	export default {
		name:"Index",
		data () {
            return {
                charts: '',
                opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                opinionData:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
                ],
                routerLinks:[
                  {name:"Bookdetail",id:'1'},
                  {name:"Bookdetail",id:'2'},
                ]
            }
        },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                   formatter: '{a}<br/>{b}:{c} ({d}%)'
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion
                 },
                 series: [
                   {
                     name:'访问来源',
                     type:'pie',
                     radius:['50%','70%'],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                           fontSize: '30',
                           fontWeight: 'blod'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ]
               })
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
            })
        }
	}
</script>

<style scoped lang='less'>
  .conta{
        position: relative;
        text-align: left;
        span{
          color:red;
        }
    }
	.manage-back{
		font-size: 12px;
		display: block;
	}
  .router-link-active{
    color:green;
    text-decoration: underline;
    font-weight: 700;
  }
</style>