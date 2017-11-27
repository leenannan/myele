<template>
	<div class="msg">
	    {{msg}}
	</div>
</template>

<script type="text/javascript">
	export default {
		name:"Detail",
		data(){
			return {
				msg:"我是详情页面"+Math.random()
			}
		},
		created(){
           
		},
		methods:{
			getUrlPage: function() {
			return location.href.match(/(?:#|\?)page\-(\d+)/);
		  }
	   }

	}
</script>

<style scoped>
	.msg{
		width:100%;
		height: 100%;
	}
</style>