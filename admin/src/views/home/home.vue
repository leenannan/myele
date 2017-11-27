<template>
	<div>
            <Sidebar></Sidebar>
		    <div class="">
		    	<navbar></navbar>
		        <Appmain></Appmain>
		    </div>
		<!-- <ul>
			<li v-for = "item in routerLinks">
				 <router-link :to = 'item.url'>{{item.name}}</router-link>
			</li>
		</ul> -->
	</div>
</template>
<script type="text/javascript">
    import Sidebar from '../layout/Sidebar.vue'
    import Navbar from '../layout/Navbar.vue'
    import Appmain from '../layout/Appmain.vue'
	export default{
		name:"Home",
		data(){
			return{
				routerLinks:[
                  {name:"登录",url:'/'},
                  {name:"首页",url:'/home'}
				]
			}
		},
		components: {
         Sidebar,
         Navbar,
         Appmain
       }
	}
</script>
<style type="text/css">
	ul li{list-style: none;float: left;}
	.app-wrapper[data-v-007a274d] {
    position: relative;
    height: 100%;
    width: 100%;
}
.app-wrapper .main-container{
   position: absolute;
   left:0;
   right: 0;
   margin-left: 200px;
}
</style>