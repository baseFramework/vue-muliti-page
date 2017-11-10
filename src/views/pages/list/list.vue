<template>
<div id="app">
  <c-head></c-head>
  <div class="list-content">
    <div class="list-banner">
        <img src="https://img-global.vip.com/photos/activity/20171102/o1bu08tt7e3NQAoL-0QdE9tfQdZAM_VV.jpg" />
    </div>
    <c-products></c-products>
  </div>
</div>
</template>

<script>
import Lib from "assets/js/Lib";
import CHead from "components/c-head-normal/c-head-normal.vue";
import CProducts from "components/c-products/c-products.vue";
export default {
  data() {
      return{}
  },
  components: {
    CHead,
    CProducts,
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate() {},
  //在挂载开始之前被调用
  beforeMount() {},
  //已成功挂载，相当ready()
  
  //相关操作事件
  methods: {}
};
</script>

<style lang="less">
.note {
  color: #666;
  padding: 10px;
  font-size: 12px;
}
.note p {
  line-height: 25px;
}

.weui-cells {
  font-size: 14px !important;
}

/*
 * less 展示
 */
.lessTest {
  .listbox {
    border-radius: 10px;
    font-size: 14px;
  }
  .boxcontent {
    padding: 15px;
  }
}
.index-swiper-wrap{
	margin-top: 50px;
}
.swiper-content{
	height: 80px;
	line-height: 80px;
	text-align: center;
}

.list-content{
  margin-top: 44px;
}

.list-banner{
  height: 10rem;
  line-height: 10rem;
  overflow: hidden;
  img{
    width: 100%;
  }
}

.list-flex01 {
    display: -webkit-box;
    padding-top: 0;
    color: #000;
    padding-top: .4rem;
}

.list-flex .goodsName {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    min-height: 1.5rem;
    line-height: 1rem;
    overflow: hidden;
    color: #999;
    font-size: .75rem;
    font-weight: 400;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-word;
    margin-bottom: 1.5rem;
    padding-top: .5rem;
}
</style>
