<template>
<div id="app">
	<div> 我是列表页 </div>
</div>
</template>

<script>
import Lib from "assets/js/Lib";
export default {
  data() {
      return{}
  },
  components: {
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
</style>
