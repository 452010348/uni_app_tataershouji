<template>
	<view class="w-100 h-100">
		<!-- #ifdef MP-WEIXIN -->
		<login-weixin></login-weixin>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<login-h5></login-h5>
		<!-- #endif -->
	</view>
</template>

<script>
	import login_weixin from './components/login_weixin.vue';
	import login_h5 from './components/login_h5.vue';
	export default {
		components: {
			"login-weixin":login_weixin ,
			"login-h5":login_h5,
		},
		data() {
			return {
			};
		},
		onLoad(){
		},
		watch:{
		
		},
		computed:{
		},
		methods: {
		}
	}
</script>

<style lang='scss'>
</style>
