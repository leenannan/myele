<template>
	<div>
		我是详情页面
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"Bookdetail",
		created(){
            const bookID = this.$route.params.id;
            console.log(bookID,"000000000000");
            console.log(this.$route,"route");
            console.log(this.$router,"router");
		}
	}
</script>
<style scoped>
	
</style>