<template>

		<view class="d-flex d-flex-column h-100">
			
			<view class="bg-white">
				<view class="cu-bar search bg-white" :style="[{top:CustomBar + 'px'}]">

					<navigator class="p-l-2" url="../public/select_the_city?back=../phone/phone">
						<text class="sm text-gray cuIcon-location"></text>
						<text class="m-l-1">柳州</text>
					</navigator>
					
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
					</view>
					
					<view class="action">
						<button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
					</view>
				</view>
				
				<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
					<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in navList" :key="index" @tap="tabSelect" :data-id="index">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			
			
			<view class="p-t-1"></view>
			

				
			<scroll-view class="flex-1 bg-white p-x-2" scroll-y="true" style="height: 100vh;">

				<navigator :url="`../public/equipment_details?page=phone&id=${index}`" class="d-flex flex-between p-y-3 border-bottom" v-for="(item,index) in 10" :key="index">
					<image style="width:240upx;height:180upx;" src="../../static/emptyCart.jpg" mode=""></image>
					
					<view class="flex-1 d-flex d-flex-column flex-between p-l-1">
						<text>2020全信经龙是用电梯工厂提货</text>
						<view class="d-flex flex-between color-black-3">
							<view class="d-box-center-y">
								<text class="sm text-gray cuIcon-timefill"></text>
								<text class="m-l-1">2020-6-2</text>
							</view>
							<view class="d-box-center-y">
								<text class="sm text-gray cuIcon-location"></text>
								<text class="m-l-1">天津市</text>
							</view>
						</view>
						<view class="d-flex flex-between">
							<view class="d-flex flex-center-y">
								<image style="width: 55upx;height: 50upx;" src="../../static/missing-face.png" mode=""></image>
							</view>
							<view class="flex-1 d-flex d-flex-column flex-between p-x-1">
								<view class="flex-1 text-ellipsis-1 f-s-0 color-black-1">京东龙升</view>
								<view class="flex-1">
									<text class="f-s-0 color-black-3">在售设备</text>	
									<text class="f-s-0 color-yellow-2">3台</text>
									<text class="cu-tag line-blue sm m-l-1">电梯</text>
								</view>
							</view>
							<text class="flex-center-y color-red-3 f-s-md">25万</text>
						</view>
					</view>
				</navigator>
				
			</scroll-view>

			


		</view>

</template>

<script>
	// import {mapState} from 'vuex';
	export default {
		components: {
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				scrollLeft: 0,
				
				
				navList:[
					{name:"全部",id:0},
					{name:"塔吊",id:1},
					{name:"电梯",id:2},
				]
			};
		},
		onLoad(){
			console.log("默认当前城市",)
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
						console.log(res)
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			    }
			});
		},
		onShow(){
			const city = uni.getStorageSync('city');
			if(!!city){
				console.log("检索到城市:", city)
			}else{
				console.log("默认当前城市",)
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
							console.log(res)
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
				    }
				});
			}
		},
		watch:{
		
		},
		computed:{
			// ...mapState(['hasLogin'])
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style lang='scss'>
	page {
		height: 100%; overflow: hidden;
	}
	

	
</style>



