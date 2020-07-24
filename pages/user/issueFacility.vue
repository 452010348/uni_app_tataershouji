<template>

		<form class="w-100 h-100">

			<view class="cu-form-group">
				<view class="title before-star-red">标题</view>
				<input placeholder="2016年三一重工6012塔吊" name="input" v-model="title" :value="title"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title before-star-red">设备类型</view>
				<input placeholder="" name="input" v-model="facility" :value="facility"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">型号</view>
				<input placeholder="" name="input" v-model="type" :value="type"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title before-star-red">数量</view>
				<uni-number-box :value="numberValue" @change="change" />
			</view>
			
			<view class="cu-form-group">
				<view class="title before-star-red">价格</view>
				<input placeholder="" name="input" v-model="price" :value="price"></input>
				
				<text class="m-r-2">万元</text>
				<radio checked="true" />
				<text class="p-r-1"></text>
				<text>面议</text>
			</view>
			
			<view class="cu-form-group">
				<view class="title before-star-red">电话</view>
				<input placeholder="" name="input" v-model="phone" :value="phone"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title before-star-red">姓名</view>
				<input placeholder="" name="input" v-model="name" :value="name"></input>
				<radio-group>
					 <label class="radio"><radio value="1" :checked="sex==1" />男</label>
					 <text class="p-r-2"></text>
					 <label class="radio"><radio value="0" :checked="sex==0" />女</label>
				 </radio-group>
			</view>
			
			<view class="cu-form-group">
				<view class="title before-star-red">设备所在地</view>
				<input placeholder="" name="input" v-model="address" :value="address"></input>
			</view>
			
			<view class="bg-white margin-top">
				<view class="p-l-3 f-s-4">详情描述</view>
				<view class="p-3">
					<textarea class="padding radius shadow-blur bg-gray w-100" :v-model="description" :value="description" placeholder="塔吊16年的,没有大维修过,保养很好" />	
				</view>
			</view>
			
			
			<view class="cu-bar bg-white margin-top">
				<view class="action">图片上传<text class="f-s-0 color-black-3">(上传图片能大大提高出售几率)</text></view>
				<view class="action">{{imgList.length}}/4</view>
			</view>
			
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			
			
			<view class="p-2">
				<button type="default">确认修改</button>
			</view>
			
		</form>

</template>


<script>
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
import { mapState } from 'vuex';
export default {
	components: {
		uniNumberBox
	},
	data() {
		return {
			numberValue:1,
			name:"千里马",
			
			title:"标题",
			sex:"1",//性别

			price:0,//价格
			phone:"",//电话
			address:"",//地址
			facility:"",//设备
			type:"",//型号
			description:"", //描述
			imgList:[],
			
		};
	},
	onLoad() {},

	computed: {
		...mapState(['hasLogin', 'userInfo']),
	},
	methods: {
		change(e){
			console.log("change")
		},
		ChooseImage() {
			uni.chooseImage({
				count: 4, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: (res) => {
					if (this.imgList.length != 0) {
						this.imgList = this.imgList.concat(res.tempFilePaths)
					} else {
						this.imgList = res.tempFilePaths
					}
				}
			});
		},
		ViewImage(e) {
			uni.previewImage({
				urls: this.imgList,
				current: e.currentTarget.dataset.url
			});
		},
		DelImg(e) {
			uni.showModal({
				title: '召唤师',
				content: '确定要删除这段回忆吗？',
				cancelText: '再看看',
				confirmText: '再见',
				success: res => {
					if (res.confirm) {
						this.imgList.splice(e.currentTarget.dataset.index, 1)
					}
				}
			})
		},
	},
	watch:{
	}
};
</script>
<style lang="scss">
.before-star-red:before{
	content: "* ";
	color:red;
}
</style>
