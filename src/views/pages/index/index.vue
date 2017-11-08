<template>
<div id="app">
	<c-head></c-head>
	<c-swiper></c-swiper>
  <!-- <div class="app"
     style="height: 1200px;background-color: #ccc;width: 400px;margin: 0 auto;"
     v-infinite-scroll="loadMore"
     infinite-scroll-disabled="busy"
     infinite-scroll-distance="10">
</div> -->
<ul id="latestevents" class="index-topics-wrap" style="display: block;">
	<li class="index-topics-last"  :key="item.href" v-for="(item,index) in items"  v-infinite-scroll="loadMore"  infinite-scroll-disabled="busy" infinite-scroll-distance="10">
		<a :href="item.href" title="Keepin' it sweet &amp; sassy">
			<div class="lazy-placeholder layoutImg off" style="width: 375px; height: 220px; line-height: 220px;">VIPshop</div>
			<img class="lazy-lable" :src="item.img" :data-src="item.img" data-width="750" data-height="440" style="width: 375px; height: 220px; display: inline-block;">
			<div class="index-topic-wrap">
				<p class="index-topic-title">Keepin' it sweet &amp; sassy</p>
				<span class="activeThirdName">
					UP TO 80% OFF
				</span>
			</div>
		</a>
	</li>
</ul>
</div>
</template>

<script>
import Lib from "assets/js/Lib";

import { Cell, Group, Divider } from "vux";
import CHead from "components/c-head/c-head.vue";
import CSwiper from "components/c-swiper/c-swiper.vue";

export default {
  data() {
    return {
      busy: false,
      items: [
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171102/o1btu21sc849xhjGgfQ0Ab9cJ78KzAoF.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171102/o1btu1rn0b2WeRtKb64mr8cCWLhgblmk.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171102/o1btu1nmrbgT5Jflw4h__8xrUwqY759Z.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171102/o1btu0kio2adEJKARs4x98hezvOK1Cpn.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171102/o1btu04s1t5aXEc3IY4oE9h4ZWXze3tr.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171102/o1bttv52269CDc7H5Q4Bg89Nn9eadW3s.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171101/o1bttm87d2azK5d__wkoxbGri-QLRv5U.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171101/o1bttmc4u082jECeoDAxs8mN-NUiETMj.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171101/o1bttmvrno8IlvkAXTkaha1cwMLrNP2m.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        },
        {
          href: "/views/pages/list.html",
          logo: "VIPSHOP",
          img:
            "https://img-global.vip.com/photos/activity/20171101/o1bttn6q64eJAFdRqskl4b8OT5REgg3j.jpg",
          width: "750",
          height: "440",
          title: "Keepin' it sweet &amp; sassy",
          discount: "UP TO 80% OFF"
        }
      ]
    };
  },
  components: {
    Cell,
    Group,
    Divider,
    CHead,
    CSwiper
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate() {},
  //在挂载开始之前被调用
  beforeMount() {},
  //已成功挂载，相当ready()
  computed: {},
  mounted() {},
  //相关操作事件
  methods: {
    loadMore: function() {
       var self = this;
        self.busy = true;
        console.log('loading... ' + new Date());
        // setTimeout(function () {
        //   var app = document.querySelector('.app')
        //   var height = app.clientHeight;
        //   app.style.height = height + 300 + 'px';
        //   console.log('end... ' + new Date());
        //   self.busy = false
        // }, 1000)
    }
  }
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

/**  列表样式  */
.index-topics-wrap {
  display: none;
  margin-top: 0.5rem;
}
.index-topics-wrap li {
  margin-bottom: 0.5rem;
}
.layoutImg.off {
  display: none;
}
.layoutImg {
  color: #ccc;
  background: #efefef;
  font-size: 1.5625rem;
  font-weight: 700;
  text-align: center;
}
.index-topic-wrap {
  padding: 0.75rem 0;
  background-color: #fff;
  text-align: center;
}
.index-topic-wrap .index-topic-title {
  font-size: 1rem;
  color: #333;
  text-align: center;
  font-weight: 700;
  margin-bottom: 0.3rem;
  line-height: 1.19rem;
  min-height: 1.19rem;
}
.index-topic-wrap .activeThirdName {
  margin-right: 0.75rem;
}
.index-topic-wrap span {
  font-size: 0.81rem;
  color: #f22796;
}
.index-topic-wrap .topic-time {
  font-size: 0.81rem;
  color: #999;
  line-height: 1rem;
  min-height: 1rem;
  display: inline-block;
}
</style>
