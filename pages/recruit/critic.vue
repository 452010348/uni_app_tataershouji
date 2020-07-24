<template>
	<view class="h-100">
		<view class="d-flex d-flex-column flex-between h-100 bg-white-1">
			<view class="flex-1 scoll-hide h-100">
				
				<scroll-view class="p-x-2 h-100" scroll-y="true">

					<view class="p-y-2 m-b-4" v-for="(iten,i) in 1" :key="i">
						<view class="d-flex p-y-2">
							<image src="../../static/missing-face.png" style="width: 90upx;height: 90upx;" mode=""></image>
							<view class="flex-1 d-flex d-flex-column flex-between p-l-1">
								<view class="d-flex flex-between">
									<view class=""><text class="f-s-2 f-w-6">各种证件办理</text></view>
									<view class=""><text class="cu-btn round xl" :class="{'bg-blue':true}">+ 收藏</text></view>
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
						
						<view class="m-b-2">
							<text class='m-b-1 cu-tag radius light bg-blue' v-for="(item,i) in 1" :key="i">#求购</text>
							<text class="m-b-1 cu-tag radius light bg-grey">玄灰</text>
							<text class="m-b-1 cu-tag radius light bg-cyan">玄灰</text>
						</view>
						
						<view class="m-b-1"><text>证件办理</text></view>
						
						<view class="d-flex d-flex-column">
							<image style="width: 100%;height:350upx;margin:0 5upx;" src="../../static/componentBg.png" mode="" v-for="(iten,i) in 3" :key="i"></image>
						</view>
						
						<view class="d-flex flex-around m-t-2">
							<view class="text-gray text-sm"><text class="cuIcon-attentionfill margin-lr-xs"></text> 10</view>
							<view class="text-gray text-sm"><text class="cuIcon-messagefill margin-lr-xs"></text> 30</view>
							<view class="text-gray text-sm"><text class="cuIcon-appreciatefill margin-lr-xs"></text> 20</view>
						</view>
						
						<view class="f-s-3 f-w-6 m-t-2">全部评论(2)</view>
						
						<view class="d-flex m-t-2">
							<image src="../../static/missing-face.png" style="width: 60upx;height:60upx;" mode=""></image>
							<view class="flex-1 d-flex-column p-l-1">
								
								<view class="d-flex flex-between">
									<view class="">
										<text class="f-s-2 f-w-6">全部评论(2)</text>
										<text class="f-s-0 m-l-1 color-black-4">2020-6-5 14:07:46</text>
									</view>
									<text class="color-blue-2">回复</text>
								</view>
								
								<view class="m-t-2 f-s-0 color-black-3">
									2020-6-5 14:35:25
								</view>
								<view class="m-y-2">
									13年的工厂塔吊要吗？100米高dsa的撒旦sadsadasddsadsa的撒旦sad爱思dsa的撒旦
									 的撒旦sadsad撒
								</view>
								
								<view class="d-flex flex-between radius shadow bg-white-4 p-2">
									<view class="flex-1 solid m-r-1 d-flex">
										<input class="f-s-2 p-x-1 flex-1 h-100" placeholder="回复内容" type="text" value="" />
									</view>
									<view class="cu-btn round line-blue sm">提交</view>
								</view>
							</view>
							
						</view>
							
					</view>

				</scroll-view>
			</view>
			
			
			<view class="cu-bar input">
				<view class="action"><text class="cuIcon-write text-grey"></text></view>
				<input placeholder="请输入评论" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" class="solid-bottom" :focus="false" maxlength="300" cursor-spacing="10"></input>
				<button class="cu-btn bg-green shadow-blur">发表</button>
				<view class="action" style="padding-left:0px;margin-right: 0px;"><text class="cuIcon-forward text-grey"></text></view>
			</view>
			
		</view>
		
		<view class="issue d-flex flex-center-x flex-center-y bg-gradual-blue  shadow-blur">
			<text class="color-white-0 cuIcon-write"></text>
		</view>
	</view>
</template>

<script>
	// import {mapState} from 'vuex';
	import uniFab from '@/style/uni/components/uni-fab/uni-fab.vue'
	export default {
		components: {
			uniFab
		},
		data() {
			return {
				InputBottom:0,
				
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: ['left','right'],
				vertical: ['bottom','top'],
				direction: ['horizontal',"vertical"],
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF'
				},
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
			InputFocus(e) {
				this.InputBottom = e.detail.height
				console.log( this.InputBottom )
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style lang='scss'>
page{height: 100%;}


	
.issue{
	position: fixed;
	bottom:300upx;
	right:60upx;
	border-radius: 50%;
	width: 65px;
	height: 65px;
}
	
.issue .cuIcon-write:before{
	font-size:35px;
}
</style>



