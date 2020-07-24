<template>
	<page-view type="myInvitation" tabCur="0" :tabList="tabList"></page-view>
</template>


<script>

import pageView from "./components/page-view.vue"
export default {
	components: {
		pageView
	},
	data() {
		return {
			tabList: [
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
			],
		};
	},
	onLoad() {},

	computed: {
	},
	methods: {
		
	},
	watch:{
		
	}
};
</script>
<style lang="scss">
page {
	height: 100%; overflow: hidden;
}
</style>