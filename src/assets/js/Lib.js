require('assets/css/common.css');
require('swiper/dist/css/swiper.css')

//注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import {
	AlertPlugin,
	LoadingPlugin
} from 'vux'

import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';  //轮播组件
import VueRecyclerviewNew from 'vue-recyclerview';  //列表组件
import infiniteScroll from 'vue-infinite-scroll';
import YDUI from 'vue-ydui';  //引入YDUI
import 'vue-ydui/dist/ydui.px.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */




//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(VueAwesomeSwiper);
Vue.use(VueRecyclerviewNew);
Vue.use(infiniteScroll);
Vue.use(YDUI);
//--- VUX UI 注册 END --



import C from './conf';
import M from './common';

import vueFilter from './vueFilter';

//解决click点击300毫秒延时问题
import FastClick from 'fastclick';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
FastClick.attach(document.body);

export default {
	M,
	C,
	swiper,
	swiperSlide
}