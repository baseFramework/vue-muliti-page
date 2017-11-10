<template>
  <div class="header-gap">
    <header class="header-theme-1 header-default">
                <a id="btn-back" href="javascript:void(0)" class="box-default box-0 btn-back box-left" data-isback="true">
                    <i class="header-icon icon-back"></i>
                </a>
            <h1 class="title v-mid-after">Elegant fall staples</h1>
                <a id="gotocart" href="javascript:void(0)" class="box-default box-cart">
                <span class="cart-wrap">
                    <i class="header-icon icon-bag"></i>
                    <i class="icon-quantity" style="display: none;"></i>
                </span>
                    <span id="bag-remaintime" data-label="header-for-bag-remaintime-count"></span>
                </a>
    </header>
    </div>
</template>

<script>
import Lib from "assets/js/Lib";
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
.header-gap {
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
}
.header-theme-1 {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: box;
  position: relative;
  width: 100%;
  height: 2.75rem;
  color: #030303;
  background: #fafafa;
  box-shadow: 0 1px 0 0 rgba(178, 178, 178, 0.5);
}

.header-theme-1 .box-0 {
  min-width: 3.0625rem;
  height: 100%;
}

.header-theme-1 .box-default {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: -o-box;
  display: box;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-box-pack: center;
  box-pack: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-box-align: center;
  box-align: center;
  height: 100%;
}

.header-theme-1 .box-left {
  margin-right: 1rem;
}

.header-theme-1 .title {
  -webkit-box-flex: 1;
  box-flex: 1;
  width: auto;
  height: 2.75rem;
  line-height: 2.75rem;
  font-size: 1.06rem;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: nowrap;
}

.header-theme-1 .box-cart {
  height: 100%;
  width: 4.4625rem;
  position: relative;
}
.header-theme-1 .box-default {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: -o-box;
  display: box;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-box-pack: center;
  box-pack: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-box-align: center;
  box-align: center;
  height: 100%;
}

.header-theme-1 .icon-sidebar {
  display: block;
  width: 1.4375rem;
  height: 1.4375rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(https://m-static-global.vip.com/image/icon-sidebar-1e8d793082.png);
}

.header-theme-1 .cart-wrap {
  display: block;
  position: relative;
}

.header-theme-1 .icon-bag {
  display: block;
}
.header-theme-1 .icon-bag {
  display: block;
  width: 1.4375rem;
  height: 1.4375rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(https://m-static-global.vip.com/image/icon-bag-bdc41faa17.png);
}

.header-theme-1 .icon-quantity {
  top: 0;
}
.icon-quantity {
  display: none;
  position: absolute;
  top: 0.2rem;
  left: 0.9rem;
  width: 0.875rem;
  height: 0.875rem;
  color: #fff;
  background: #ec008c;
  font-size: 0.55rem;
  font-style: normal;
  text-align: center;
  line-height: 0.875rem;
  border-radius: 50%;
}

.header-theme-1 .icon-back {
    display: block;
    background-image: url(https://m-static-global.vip.com/image/icon-v3.0/icon-back-ccde554f34.svg);
}
.header-theme-1 .icon-back, .header-theme-1 .icon-bag, .header-theme-1 .icon-close, .header-theme-1 .icon-edit, .header-theme-1 .icon-home, .header-theme-1 .icon-share, .header-theme-1 .icon-sidebar, .header-theme-1 .icon-to-wish-list {
    width: 1.4375rem;
    height: 1.4375rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
