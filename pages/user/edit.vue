<template>
	<view class="container">
		<form>
			<view class="cu-form-group margin-top" @click="changeHead">
				<view class="title">头像</view>
				<view class="cu-avatar lg round margin-left" :style="{'background-image':`url(${url})`}"></view>
			</view>
			<view class="cu-form-group">
				<view class="title">昵称</view>
				<input placeholder="编辑昵称" name="input" v-model="value" :value="value"></input>
			</view>
			<view class="p-2">
				<button type="default">确认修改</button>
			</view>
		</form>
	</view>
</template>


<script>

import { mapState } from 'vuex';
export default {
	components: {
		
	},
	data() {
		return {
			url:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
			value:"你好",
			
			imgList:[]
		};
	},
	onLoad() {},

	computed: {
		...mapState(['hasLogin', 'userInfo']),
	},
	methods: {
		changeHead(){
			console.log("点击换头像")

			uni.chooseImage({
				count: 4, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: (res) => {
					this.url = res.tempFilePaths
				}
			});

		}
	},
	watch:{
		"value":function(e){
			console.log(e)
		}
	}
};
</script>
<style lang="scss">

</style>
