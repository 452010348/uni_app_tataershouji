<template>
	<!-- 
		refresher-enabled="true"
		@refresherpulling="on_refresherpulling"
		@refresherrefresh="on_refresherrefresh"
		@refresherrestore="on_refresherrestore"
		@refresherabort="on_refresherabort" -->
	<scroll-view class="h-100 w-100 scoll-y" scroll-y="true" show-scrollbar="true" :scroll-top="scrollTop" @scrolltoupper="on_scrolltoupper" @scrolltolower="on_scrolltolower">
		<slot></slot>
		{{ type }}-{{ index }}
		<view v-for="(item, i) in 50" :key="i">{{ i }}</view>
	</scroll-view>
</template>

<script>
export default {
	components: {},
	props: {
		type: {
			type: [Number, String],
			default: 0
		},
		index: {
			type: [Number, String],
			default: 0
		}
	},
	data() {
		return {
			scrollTop: 0,
			old: {
				scrollTop: 0
			}
		};
	},
	created() {
		console.log(this.type,this.index);
	},
	watch: {},
	computed: {},
	methods: {
		on_scrolltoupper() {
			console.log('滚动到顶部/左边，会触发 scrolltoupper 事件');
		},
		on_scrolltolower() {
			console.log('滚动到底部/右边，会触发 scrolltolower 事件');
		}
		// on_refresherpulling() {
		// 	console.log('自定义下拉刷新控件被下拉');
		// },
		// on_refresherrefresh() {
		// 	console.log('自定义下拉刷新被触发');
		// },
		// on_refresherrestore() {
		// 	console.log('自定义下拉刷新被复位');
		// },
		// on_refresherabort() {
		// 	console.log('自定义下拉刷新被中止');
		// }
	}
};
</script>

<style lang="scss"></style>
