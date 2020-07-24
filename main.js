import Vue from 'vue'
import store from './store'
import App from './App'

import Json from './Json' //测试用数据

/*======================= 引入电商样式模板 ===============================*/
import './style/ec/ec.css' 
/*======================= 引入电商样式模板 ===============================*/

/*======================= 引入自定义样式 ===============================*/
import './style/luckcss/luck.css' 
/*======================= 引入自定义样式 ===============================*/

/*======================= ColorUi ===============================*/
import "./style/colorui/main.css";
import "./style/colorui/icon.css";
import cuCustom from './style/colorui/components/cu-custom.vue'
import basics from './style/colorui/pages/basics/home.vue'
import components from './style/colorui/pages/component/home.vue'
import plugin from './style/colorui/pages/plugin/home.vue'
Vue.component('cu-custom',cuCustom)
Vue.component('basics',basics)
Vue.component('components',components)
Vue.component('plugin',plugin)
/*======================= ColorUi ===============================*/

/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {msg, json, prePage};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
window.$this = app;