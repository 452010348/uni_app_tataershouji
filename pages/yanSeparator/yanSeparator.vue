<template>
	<view class="h-100 scoll-hide">
		<view class="d-flex d-flex-column h-100">
			
			<view class="bg-white">
				<view class="cu-bar search bg-white" :style="[{top:CustomBar + 'px'}]">
					<navigator url="../public/select_the_city?back=../yanSeparator/yanSeparator" class="p-x-2 d-flex flex-center-y" style="white-space:nowrap">
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

				<navigator :url="`../public/equipment_details_yanSeparator?page=equipment_details_yanSeparator&id=${index}`" class="d-flex flex-between p-y-3 border-bottom" v-for="(item,index) in 10" :key="index">
					<image style="width:240upx;height:180upx;" src="../../static/emptyCart.jpg" mode=""></image>
					
					<view class="flex-1 d-flex d-flex-column flex-between p-l-1">
						<view class="d-flex flex-around">
							<text class="bg-orange m-r-1">塔吊</text>
							<text class="flex-1 text-ellipsis-1">2020全信经龙是用电梯工厂提货</text>
						</view>
						<view class="d-flex flex-wrap">
							<text class="xs cu-tag line-orange">真实一手货源</text>
							<text class="xs cu-tag line-green">已检测</text>
							<text class="xs cu-tag line-blue">可试机</text>
						</view>
						<view class="d-flex flex-wrap" style="-webkit-align-items: center;">
							<text class="flex-center-y color-red-3 f-s-md">25万</text>
							<view class="d-box-center-y m-l-1">
								<text class="sm text-gray cuIcon-location"></text>
								<text class="m-l-1">天津市</text>
							</view>
						</view>
					</view>
				</navigator>
				
			</scroll-view>

			

			
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
				CustomBar: this.CustomBar,
				TabCur: 0,
				scrollLeft: 0,
				
				navList:[
					{name:"全部",id:0},
					{name:"塔吊",id:1},
					{name:"电梯",id:2},
					{name:"1-20W",id:3},
					{name:"20-50W",id:4},
					{name:"50W+",id:5},
					{name:"中联",id:6},
					{name:"徐工",id:7},
					{name:"川建",id:8},
					{name:"大汉",id:9},
					{name:"可试机",id:10},
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
			}
		}
	}
</script>

<style lang='scss'>
	page {
		height: 100%; overflow: hidden;
	}
</style>



