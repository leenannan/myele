<template>
	<div class="idea">
		<div class="content">
            <transition name="move" mode="out-in">
                 <router-view></router-view>
            </transition>
        </div>
	</div>
</template>
<script scoped>
	export default {
		name:"Appmain"
	}
</script>
<style type="text/css">
    .idea{}
	.content{
		/*margin-left: 200px;*/
	}
</style>