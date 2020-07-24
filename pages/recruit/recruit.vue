<template>
	<view class="h-100 scoll-hide">
		<view class="d-flex d-flex-column h-100">

			<view class="bg-white d-flex">
				<navigator url="../public/select_the_city?back=../recruit/recruit" class="p-x-2 d-flex flex-center-y" style="white-space:nowrap">
					<text class="sm text-gray cuIcon-location"></text>
					<text class="m-l-1">全国</text>
				</navigator>
			</view>
			
			<scroll-view scroll-x class="nav bg-white" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in navList" :key="index" @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			
			
			<view class="p-t-1"></view>
				
				
			<scroll-view class="flex-1 bg-white p-x-2" scroll-y="true" style="height: 100vh;">
				
				
				<navigator :url="`../recruit/critic?page=critic&id=${i}`" class="border-bottom  p-y-2" v-for="(iten,i) in 10" :key="i">
					<view class="d-flex p-y-2">
						<image src="../../static/missing-face.png" style="width: 90upx;height: 90upx;" mode=""></image>
						<view class="flex-1 d-flex d-flex-column flex-between p-l-1">
							<view class="">
								各种证件办理
							</view>
							<view class="d-flex flex-between color-black-3">
								<view class="d-box-center-y">
									<text class="sm text-gray cuIcon-timefill"></text>
									<text class="m-l-1">2020-6-2</text>
								</view>
								<view class="d-box-center">
									<text class="sm text-gray cuIcon-location"></text>
									<text class="m-l-1">天津市</text>
								</view>
							</view>
						</view>
					</view>
					<view class="m-b-1">
						<text>证件办理</text>
					</view>
					
					<view class="d-flex flex-between">
						<image style="height: 250upx;margin:0 5upx;" src="../../static/componentBg.png" mode="" v-for="(iten,i) in 3" :key="i"></image>
					</view>
					
					<view class="m-b-2">
						<text class='m-b-1 cu-tag radius light bg-blue' v-for="(item,i) in 1" :key="i">#圆角</text>
						<text class="m-b-1 cu-tag radius light bg-grey">玄灰</text>
						<text class="m-b-1 cu-tag radius light bg-cyan">玄灰</text>
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
					{name:"求职",id:1},
					{name:"招聘",id:2},
					{name:"求购",id:3},
					{name:"租债",id:4},
					{name:"办证",id:5},
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
				
			tapLocation(){
				console.log('测试点击')
			}
		}
	}
</script>

<style lang='scss'>

</style>



