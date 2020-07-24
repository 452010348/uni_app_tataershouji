<template>
	<view class="d-flex d-flex-column h-100">
		
		<view class="flex-1 scoll-hide">
			<scroll-view class="h-100" scroll-y="true" >

				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
					<swiper-item><view class="swiper-item uni-bg-red">A</view></swiper-item>
				</swiper>
				
				<view class="bg-white p-2">
					<view class="d-flex flex-between flex-center-y">
						<view class="f-s-3 f-w-7 text-ellipsis-1 flex-1">2012年广西雄起6015-8塔吊45米</view>
						<view class="f-s-5 color-red-3 f-w-7">21.5万</view>
					</view>
					
					<view class="color-black-4 m-b-2">设备编号：12927395</view>
					
					<view class="p-2 radius light bg-yellow d-flex flex-between flex-center-y">
						<text class="lg text-gray cuIcon-safe" style="color:#f37b1d;"></text>
						<text class="f-s-1 flex-1" style="color:#f37b1d;">保费低至600元 低保费/搞保额/快速办理/极速理赔</text>
						<text class="lg text-gray cuIcon-right" style="color:#f37b1d;"></text>
					</view>
				</view>
				
				<view class="bg-white m-y-2">
					
					<navigator url="" class="d-flex flex-between flex-center-y p-2 border-bottom">
						<text class="f-s-3 f-w-9">基本信息</text>
						<text class="f-s-0 color-black-4">查看更多 ></text>
					</navigator>
					
					<view class="p-y-2">
						<view class="d-flex flex-around p-x-2">
							<view class="d-flex d-flex-column flex-1">
								<text class="color-black-4">生产厂家</text>
								<text class="color-black-0 f-s-2 f-w-6">广西雄起</text>
							</view>
							
							<view class="d-flex d-flex-column flex-1">
								<text class="color-black-4">出厂时间</text>
								<text class="color-black-0 f-s-2 f-w-6">2012</text>
							</view>
							
							<view class="d-flex d-flex-column flex-1">
								<text class="color-black-4">型号</text>
								<text class="color-black-0 f-s-2 f-w-6">2020-6-30</text>
							</view>
						</view>
						
						<view class="d-flex flex-around p-x-2 p-t-1">
							<view class="d-flex d-flex-column flex-1">
								<text class="color-black-4">生产铭牌</text>
								<text class="color-black-0 f-s-2 f-w-6">有</text>
							</view>
							
							<view class="d-flex d-flex-column flex-1">
								<text class="color-black-4">高度(米)</text>
								<text class="color-black-0 f-s-2 f-w-6">45</text>
							</view>
							
							<view class="d-flex d-flex-column flex-1">
								<text class="color-black-4">附着装置(道)</text>
								<text class="color-black-0 f-s-2 f-w-6">0</text>
							</view>
						</view>
					</view>
				
					
				</view>
				
				<view class="bg-white p-2">
					<view class="d-flex">
						<view class="cu-avatar lg round margin-right" style="background-image: url(&quot;https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg&quot;);"></view>
						<view class="flex-1 d-flex d-flex-column flex-between">
							<text class="f-s-3 f-w-7 text-ellipsis-1">严选机管家-李秀华</text>
							<text :class="{'color-orange-0':true}" class="text-ellipsis-1">管理着1台严选机</text>
						</view>
						<view class="d-flex flex-center-y">
							<button class="cu-btn bg-orange">进入店铺</button>
						</view>
					</view>
					<view class="p-t-2">2012年起做电梯租债业务,管理过上百台塔吊、电梯，现加盟塔塔严选机合作人，负责武汉塔吊、电梯二手交易市场，用专用的服务为您勾选好设备</view>
				</view>
				
				
			</scroll-view>
		</view>
		
		<view class="bg-white">
			
			<view class="d-flex flex-center-y">
				<view style="height:70upx" class="flex-1 bg-gradual-orange text-center shadow-blur d-flex flex-wrap flex-center-x flex-center-y">
					<text class="cuIcon-dianhua f-s-5 m-r-1"></text>
					<text>立即电话咨询</text>
				</view>
			</view>
			
		</view>

		<view class="fixed-b-r d-flex d-flex-column flex-center-x">
			
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
