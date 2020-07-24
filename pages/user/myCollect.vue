<template>
	<view class="container h-100 scoll-hide">
		<view class="d-flex d-flex-column h-100">
			
				
			<scroll-view class="flex-1 bg-white p-x-2" scroll-y="true" style="height: 100vh;">
				
				
				<navigator :url="`../recruit/critic?page=critic&id=${i}`" class="border-bottom  p-y-2" v-for="(iten,i) in 10" :key="i">
					<view class="d-flex p-y-2">
						<image src="../../static/missing-face.png" style="width: 90upx;height: 90upx;" mode=""></image>
						<view class="flex-1 d-flex d-flex-column flex-between p-l-1">
							<view class="d-flex flex-between">
								<view class=""><text class="f-s-2 f-w-6">各种证件办理</text></view>
								<view class=""><text class="cu-btn round xl" :class="{'bg-blue':true}">已收藏</text></view>
							</view>
							<view class="d-flex flex-between color-black-3">
								<view class="d-box-center-y">
									<text class="sm text-gray cuIcon-timefill"></text>
									<text class="m-l-1">2020-6-2</text>
								</view>
								<view class="d-box-center-">
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

					<!-- <view class="d-flex flex-around">
						<view class="text-gray text-sm"><text class="cuIcon-attentionfill margin-lr-xs"></text> 10</view>
						<view class="text-gray text-sm"><text class="cuIcon-messagefill margin-lr-xs"></text> 30</view>
						<view class="text-gray text-sm"><text class="cuIcon-appreciatefill margin-lr-xs"></text> 20</view>
					</view> -->
					
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
				scrollLeft: 0
			};
		},
		onLoad(){
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



