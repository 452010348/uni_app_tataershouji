<template>
	<view class="h-100 d-flex d-flex-column scoll-hide">
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index == tabCur ? 'text-orange cur' : ''" v-for="(item, index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
					{{ item.name }}
				</view>
			</view>
		</scroll-view>

		<view class="p-t-2"></view>

		<swiper class="flex-1 bg-white h-100" :current="tabCur" @change="on_swiper_change">
			<swiper-item v-for="(item, index) in tabList" :key="index">
				<page-scroll :type="type" :index="index"></page-scroll>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import pageScroll from './page-scroll.vue';

// 缓存每页最多
const MAX_CACHE_DATA = 100;
// 缓存页签数量
const MAX_CACHE_PAGE = 3;
const TAB_PRELOAD_OFFSET = 1;

const arr = [
	{
		id: 'tab01',
		name: '已发布',
		newsid: 0
	},
	{
		id: 'tab02',
		name: '审核中',
		newsid: 23
	},
	{
		id: 'tab03',
		name: '已卖出',
		newsid: 223
	}
];
export default {
	components: {
		pageScroll
	},
	props: {
		tabList: {
			type: Array,
			default: arr
		},
		tabCur: {
			type: [Number, String],
			default: 0
		},
		type: {
			type: [Number, String],
			default: 0
		},
	},
	data() {
		return {};
	},
	onLoad() {},

	computed: {
	},

	onReady() {},
	mounted() {
	},
	methods: {
		tabSelect(e) {
			this.tabCur = e.currentTarget.dataset.id;
		},
		//索引发生改变
		on_swiper_change(event) {
			console.log('on_swiper_change', event.detail.current);
			this.tabCur = event.detail.current;
		}
	},
	watch: {}
};
</script>
<style lang="scss"></style>
