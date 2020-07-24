<template>
	<view class="d-flex d-flex-column h-100">
		
		<view class="flex-1 scoll-hide">
			<scroll-view class="h-100" scroll-y="true" >

				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
						<swiper-item>
								<view class="swiper-item uni-bg-red">A</view>
						</swiper-item>
						<swiper-item>
								<view class="swiper-item uni-bg-green">B</view>
						</swiper-item>
						<swiper-item>
								<view class="swiper-item uni-bg-blue">C</view>
						</swiper-item>
				</swiper>
				
				<view class="bg-white p-2">
					<view class="f-s-4 f-w-7" >13年徐工5613</view>
					<view class="m-t-2 f-s-3" style="color:#f37b1d;">21.5万</view>
					<view class="d-flex flex-between color-black-3 m-y-2">
						<view class="d-box-center">
							<text class="sm text-gray cuIcon-attention"></text>
							<text class="m-l-1">查看112次</text>
						</view>
						<view class="d-box-center">
							<text class="m-l-1">数量：1</text>
						</view>
						<view class="d-box-center-y">
							<text class="sm text-gray cuIcon-timefill"></text>
							<text class="m-l-1">2020-6-2</text>
						</view>
					</view>
					<view class="p-2 radius light bg-yellow d-flex flex-between flex-center-y">
						<text class="lg text-gray cuIcon-safe" style="color:#f37b1d;"></text>
						<text class="f-s-1 flex-1" style="color:#f37b1d;">保费低至600元 低保费/搞保额/快速办理/极速理赔</text>
						<text class="lg text-gray cuIcon-right" style="color:#f37b1d;"></text>
					</view>
				</view>
				
				<view class="bg-white m-y-2">
					<view class="d-flex flex-between flex-center-y p-2 border-bottom">
						<text class="f-s-3 f-w-9">基本信息</text>
						<text class="f-s-0 color-black-4">设备编号：147233273</text>
					</view>
					<view class="d-flex flex-around text-center p-y-2">
						<view class="d-flex d-flex-column flex-1 after_border">
							<text class="color-black-4">设备类型</text>
							<text>塔吊</text>
						</view>
						
						<view class="el-divider el-divider--vertical"></view>
						
						<view class="d-flex d-flex-column flex-1">
							<text class="color-black-4">所在地</text>
							<text>湖北省武汉市</text>
						</view>
						
						<view class="el-divider el-divider--vertical"></view>
						
						<view class="d-flex d-flex-column flex-1">
							<text class="color-black-4">发布时间</text>
							<text>2020-6-30</text>
						</view>
					</view>
				</view>
				
				<view class="bg-white m-y-2">
					<view class="d-flex flex-between flex-center-y p-2 border-bottom">
						<text class="f-s-3 f-w-9">详情描述</text>
					</view>
					<view class="p-2">
						<view>dsadas</view>
						<image v-for="(item,i) in 3" :key="i" class="m-b-2" style="width:100%;" src="../../static/componentBg.png" mode=""></image>
					</view>
				</view>
				
			</scroll-view>
		</view>
		
		<view class="bg-white">
			
			<view class="text-center p-y-1">
				<text class="color-orange-3">请告诉TA：我是从他他看到的</text>
			</view>
			
			<view class="d-flex flex-center-y">
				<view class="flex-1 d-flex flex-wrap flex-center-y  p-l-2">
					<view class="cu-avatar lg round" style="width:70upx;height: 70upx;background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
					<text class="m-l-1">默默</text>
				</view>
				<view style="height:70upx" class="flex-1 bg-gradual-orange text-center shadow-blur d-flex flex-wrap flex-center-x flex-center-y">
					<text class="cuIcon-dianhua f-s-5 m-r-1"></text>
					<text>打电话</text>
				</view>
			</view>
			
		</view>

		<view class="fixed-b-r d-flex d-flex-column flex-center-x">
			<view  :class="`bg-gradual-blue shadow-blur`" class="btn-round d-flex d-flex-column flex-center-x flex-center-y">
				<icon class="text-white cuIcon-writefill" style="font-size: 50upx;"></icon>
			</view>
			<view :class="`bg-white shadow-black `" class="btn-round d-flex d-flex-column flex-center-x flex-center-y">
				<icon class="text-blue cuIcon-forwardfill" style="font-size: 35upx;"></icon>
				<text style="font-size: 18upx;">分享</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	// import {mapState} from 'vuex';
	export default {
		components: {
		},
		data() {
			return {
			};
		},
		onLoad(){
			console.log("设备详情")
		},
		watch:{
		
		},
		computed:{
			// ...mapState(['hasLogin'])
		},
		methods: {
		}
	}
</script>

<style lang='scss'>
	page{width: 100%;height: 100%;}
	.el-divider--vertical {
	    display: inline-block;
	    width: 1px;
	    height: 70upx;
	}
	.el-divider {
	    background-color: #DCDFE6;
	    position: relative;
	}
	
	
	.fixed-b-r{
		position: fixed;right: 20px;bottom:60px;
		min-width: 40px;min-height: 40px;
	}
	.btn-round{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-bottom: 20upx;
	}
	.shadow-black{
		box-shadow: 0px 1px 2px #CCCCCC;
	}
</style>
