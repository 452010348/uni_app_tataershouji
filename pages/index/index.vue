<template>
	<view class="container">

		<view class="bg-white">
			
		
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<!-- <view class="titleNview-placing"></view> -->
			
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
			
		</view>
	
		
		
		
		<!-- 分类头 -->
		<navigator class="d-flex flex-between flex-center-y p-x-2 m-t-2" :url="'/pages/index/index'">
			<h4>职业专长</h4>
			<text>更多</text>
		</navigator>
	
		<!-- 分类 -->
		<view class="d-flex flex-wrap flex-around m-y-3">
			<view class="d-flex d-flex-column flex-center-x m-x-2" v-for="(item,i) in 3" :key="i">
				<image src="/static/temp/c3.png" style="width:50px;height:50px;"></image>
				<view v-if="false">阴阳快餐</view>
			</view>
		</view>
		
		
		<view class="bg-gradual-orange text-center shadow-blur p-y-1 w-33 " style="border-radius: 0 40upx 40upx 0;">塔塔严选机</view>

		<view class="p-2 text-center">
			<view class="radius shadow-warp bg-white">
				<view class="flex">
					<view class="flex-sub bg-grey margin-xs radius">1</view>
					<view class="flex-sub bg-grey margin-xs radius">
						<swiper class="screen-swiper" :class="true?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
						 :autoplay="true" interval="5000" duration="500">
							<swiper-item v-for="(item,index) in swiperList" :key="index">
								<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
								<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		
		<view class="flex p-x-2">
			<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
			<view class="flex-sub bg-grey padding-sm margin-xs radius">1</view>
		</view>

		
		<navigator class="d-flex flex-between flex-center-y p-x-2 m-t-2" :url="'/pages/index/index'">
			<h4>塔塔店铺</h4>
			<text>更多</text>
		</navigator>

		<scroll-view scroll-x class="p-2">
			<view class="d-flex d-box-left">
				<view v-for="(item, index) in 10" :key="index" class="d-flex d-flex-column max-w-02 m-r-2" @click="navToDetailPage(item)">
					<view style="overflow: hidden;border-radius: 100%;">
						<image style="width: 80px;height: 75px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg" mode="aspectFill" ></image>
					</view>
					<text class="text-ellipsis-1">古黛妃 短袖t恤女夏装2019新款韩版宽松</text>
					<text class="color-red-4">￥179</text>
				</view>
			</view>
		</scroll-view>
		</view>
		
		<view class="d-flex flex-between flex-center-y p-x-2 m-t-2 border-bottom bg-white p-y-2" :url="'/pages/index/index'">
			<h4>塔塔店铺</h4>
		</view>
		
		<view class="bg-white p-2">
			
			
			<navigator :url="`../user/edit?page=index&id=${index}`" open-type="navigate" class="d-flex flex-between p-y-3 border-bottom" v-for="(item,index) in 10" :key="index">
				<image style="width:240upx;height:180upx;" src="../../static/emptyCart.jpg" mode=""></image>
				
				<view class="flex-1 d-flex d-flex-column flex-between p-l-1">
					<text>2020全信经龙是用电梯工厂提货</text>
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
			
		</view>
		
		
	</view>
</template>

<script>

	export default {

		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: [],
				
			
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}],
			};
		},

		onLoad() {
			this.loadData();
		},
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			this.$api.msg('点击了搜索框');
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
	/* #ifdef MP */
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */

	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			// height: 426upx;
			height: 326upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
</style>
