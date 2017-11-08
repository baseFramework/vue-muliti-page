<template>
	<div class="index-swiper-wrap">
		<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			<!-- slides -->
			<swiper-slide>
				<div class="swiper-content">
          <img src="https://img-global.vip.com/photos/bannerAdverImage/20171106/o1bua6kn6a1QxzKMMEAvQaDv_EjjRZxb.jpg" />
        </div>
			</swiper-slide>
			<swiper-slide>
				<div class="swiper-content">
          <img src="https://img-global.vip.com/photos/bannerAdverImage/20171106/o1bua78re95iKxYwFA1P_b5oTbrR5B73.jpg" />
        </div>
			</swiper-slide>
			<swiper-slide>
				<div class="swiper-content">
            <img src="https://img-global.vip.com/photos/bannerAdverImage/20171106/o1bua5j7uvv2KG5LsAvQ_bsSr71QF1ri.jpg" />
        </div>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import Lib from "assets/js/Lib";

export default {
  name: "c-swiper",
  data() {
    return {
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        autoplay: 1000,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper) {
          console.log(swiper);
        }
      }
    };
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate() {},
  //在挂载开始之前被调用
  beforeMount() {},
  //已成功挂载，相当ready()
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  //相关操作事件
  methods: {}
};
</script>

<style lang="less">
.index-swiper-wrap {
  margin-top: 50px;
}
.swiper-content {
  text-align: center;
  height: 200px;
  line-height: 200px;
  img {
    width: 100%;
  }
}
</style>

