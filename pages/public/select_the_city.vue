<template>
	<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in flist" :key="item.id" class="f-item b-b" :class="{ active: item.id === currentId }" @click="tabtap(item)">{{ item.name }}</view>
		</scroll-view>

		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-' + item.id">
				<text class="s-item">{{ item.name }}</text>
				<view class="t-list">
					<view @click="navToList(titem)" v-if="titem.pid === item.id" class="t-item" v-for="titem in tlist" :key="titem.id">
						<!-- <image :src="titem.picture"></image> -->
						<text>{{ titem.name }}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import citydata from './citydata.js';
export default {
	data() {
		return {
			sizeCalcState: false,
			tabScrollTop: 0,
			currentId: 1,

			allList: [],

			flist: [],
			slist: [],
			tlist: [],

			back: '返回地址'
		};
	},
	onLoad(option) {
		this.loadData();
		console.log('打印出上个页面传递的参数:', option.back);
		this.back = option.back;
	},
	methods: {
		async loadData() {
			var id = -1;
			for (var name in citydata) {
				id++;
				this.allList.push({
					id: id,
					name: name,
					list: citydata[name]
				});
			}
			this.allList.forEach(el => {
				//一级
				this.flist.push({
					id: el.id,
					name: el.name
				});

				//三级
				el.list.forEach((ol, i) => {
					this.tlist.push({
						// id:i,
						pid: el.id,
						name: ol
					});
				});
			});

			//二级
			this.slist = [].concat(this.flist);
		},
		//一级分类点击
		tabtap(item) {
			console.log('一级分类点击', item);
			if (!this.sizeCalcState) {
				this.calcSize();
			}

			this.currentId = item.id;
			let index = this.slist.findIndex(sitem => sitem.id === item.id);
			this.tabScrollTop = this.slist[index].top;
		},
		//右侧栏滚动
		asideScroll(e) {
			console.log('右侧栏滚动');
			if (!this.sizeCalcState) {
				this.calcSize();
			}
			let scrollTop = e.detail.scrollTop;
			let tabs = this.slist.filter(item => item.top <= scrollTop).reverse();
			if (tabs.length > 0) {
				// this.currentId = tabs[0].pid;
				this.currentId = tabs[0].id;
			}
		},
		//计算右侧栏每个tab的高度等信息
		calcSize() {
			console.log('计算右侧栏每个tab的高度等信息');
			let h = 0;
			this.slist.forEach(item => {
				let view = uni.createSelectorQuery().select('#main-' + item.id);
				view
					.fields(
						{
							size: true
						},
						data => {
							item.top = h;
							h += data.height;
							item.bottom = h;
						}
					)
					.exec();
			});
			this.sizeCalcState = true;
		},
		navToList(item) {
			uni.showToast({
				title: item.name + ',' + this.back,
				duration: 1500,
				mask: false,
				icon: 'none'
			});
			var url = this.back;
			console.log(url)
			uni.setStorageSync('city', item.name);
			uni.switchTab({url:url})

		}
	}
};
</script>

<style lang="scss">
page,
.content {
	height: 100%;
	background-color: #f8f8f8;
}

.content {
	display: flex;
}
.left-aside {
	flex-shrink: 0;
	width: 200upx;
	height: 100%;
	background-color: #fff;
}
.f-item {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100upx;
	font-size: 28upx;
	color: $font-color-base;
	position: relative;
	&.active {
		color: $base-color;
		background: #f8f8f8;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			height: 36upx;
			width: 8upx;
			background-color: $base-color;
			border-radius: 0 4px 4px 0;
			opacity: 0.8;
		}
	}
}

.right-aside {
	flex: 1;
	overflow: hidden;
	padding-left: 20upx;
}
.s-item {
	display: flex;
	align-items: center;
	height: 70upx;
	padding-top: 8upx;
	font-size: 28upx;
	color: $font-color-dark;
}
.t-list {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	background: #fff;
	padding-top: 12upx;
	&:after {
		content: '';
		flex: 99;
		height: 0;
	}
}
.t-item {
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 176upx;
	font-size: 26upx;
	color: #666;
	padding-bottom: 20upx;

	image {
		width: 140upx;
		height: 140upx;
	}
}
</style>
