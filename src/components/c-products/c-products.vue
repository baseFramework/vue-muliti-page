<template>
    <div class="products-wrap">
        <section id="list-list" class="list-list">
            <ul class="list-ul clearfix">
                <li :key="item.id" v-for="item in items" data-remaintime="" :data-productcount="item.id " data-buttonstatus="1" data-productid="V0009545901">
                    <a :href="item.href">
                        <div class="imgBox">
                            <div :href="item.href">
                                <div class="layoutImg off">VIPshop</div>
                            </div>
                            <div :href="item.href">
                                <img :src="item.img" :data-src="item.img" :data-width="item.width" :data-height="item.height" :alt="item.title" data-pin-url="https://us.vip.com/blue-round-neck-pullover-cropped-sleeve-standard-women-s-shirt_pV0009545901" data-pin-media="https://img-global.vip.com/product/V0009545901-1-1100X1390-1504879303085.jpg" :data-pin-description="item.desc" style="display: inline-block;">
                            </div>
                        </div>
                        <div class="list-flex">
                            <div class="list-flex01">
                                        <p class="goodsTitle"><span class="goodsPrice">{{item.goodsPrice}}</span><span class="pastPrice">{{item.pastPrice}}</span></p>
                                <span class="price-off">{{item.percent}}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import Lib from "assets/js/Lib";
export default {
  data() {
    return {
      items: [
        {
          id: "46",
          href: "/views/pages/detail.html",
          img:
            "https://img-global.vip.com/product/V0009545901-1-368X464-1504879303085.jpg",
          width: "224",
          height: "283",
          title:
            "Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt",
          desc:
            "#VIPshop Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt❤ Get more outfit ideas and style inspiration from fashion designers at VIP.com.",
          goodsPrice: "€40.79",
          pastPrice: "€175.1",
          percent: "-77%"
        },
        {
          id: "47",
          href: "/views/pages/detail.html",
          img:
            "https://img-global.vip.com/product/V0013147201-1-368X464-1507720175235.jpg",
          width: "224",
          height: "283",
          title:
            "Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt",
          desc:
            "#VIPshop Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt❤ Get more outfit ideas and style inspiration from fashion designers at VIP.com.",
          goodsPrice: "33.79",
          pastPrice: "€65.1",
          percent: "-77%"
        },
        {
          id: "48",
          href: "/views/pages/detail.html",
          img:
            "https://img-global.vip.com/product/V0013129801-1-368X464-1507719059593.jpg",
          width: "224",
          height: "283",
          title:
            "Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt",
          desc:
            "#VIPshop Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt❤ Get more outfit ideas and style inspiration from fashion designers at VIP.com.",
          goodsPrice: "33.14",
          pastPrice: "€65.1",
          percent: "-77%"
        },
        {
          id: "49",
          href: "/views/pages/detail.html",
          img:
            "https://img-global.vip.com/product/V0013144101-1-368X464-1507719926198.jpg",
          width: "224",
          height: "283",
          title:
            "Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt",
          desc:
            "#VIPshop Blue Round Neck Pullover Cropped Sleeve Standard Women's Shirt❤ Get more outfit ideas and style inspiration from fashion designers at VIP.com.",
          goodsPrice: "40.14",
          pastPrice: "€65.1",
          percent: "-77%"
        },
      ]
    };
  }
};
</script>

<style lang="less">
.list-list {
  position: relative;
}
.list-list .list-ul {
  font-size: 0;
  -webkit-overflow-scrolling: touch;
  padding: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.list-list .list-ul li:nth-child(2n+1) {
    padding-right: .35rem;
}
.list-list .list-ul li:nth-child(2n) {
    padding-left: .35rem;
}
.clearfix {
  clear: both;
}
.imgBox {
  position: relative;
  z-index: 0;
  width: 100%;
  margin: 0 auto;
}
.imgBox {
  width: 170px;
  height: 214.7767857142857px;
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
.layoutImg {
  width: 170px;
  height: 214.7767857142857px;
  line-height: 214.7767857142857px;
}
.imgBox img {
  display: none;
  width: 100%;
}
.imgBox img {
  width: 170px;
  height: 214.7767857142857px;
}
.list-ul img {
  width: 170px;
  height: 214.7767857142857px;
}
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
img {
  display: inline-block;
}

.list-flex01 .goodsTitle {
  -webkit-box-flex: 1;
}
.goodsTitle {
  color: #000;
  font-size: 0.75rem;
  overflow: hidden;
}
.goodsTitle,
.menu-crumbs {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodsPrice {
  color: #333;
  font-size: 1rem;
  font-weight: 700;
  display: block;
  line-height: 1.19rem;
  margin-bottom: 0.13rem;
}
.goodsTitle .pastPrice {
  color: #999;
  text-decoration: line-through;
}

.price-off {
  font-size: 0.88rem;
  color: #ec008c;
}
</style>
