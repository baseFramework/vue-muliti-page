# Vue 多页面脚手架

## 背景：  
`vue2.0`已经上线有一段时间了， 现在`vue2.5`也都已经发布了，对于`vue.js`来说相信大家都已经很熟悉了。然而对于团队来说，
由于过去种种的原因，目前项目还是使用`zeptos.js` + `gulp.js` 的方式进行开发， 同时部分页面因为兼容seo友好的情况下，进行后端渲染，后端为`java`的`freemarker` 模板， 因此对于整个项目的前端升级一直即为头痛。

随着`webpack2`的发布，以及其模块化和当下业界的支持，今天基于其他同学的一些参考以及改造，编写了一套`vue.js`的多页面脚手架，用于常态业务的逐步升级

## 开发环境准备 

1. `Node.js` v6.x  `npm` v5.5.1
2. `windows 7`以及上  与 `mac os`


## 运行项目

``` bash
安装前端项目工程依赖包
npm install

开发运行环境;运行命令后，浏览器自动打开 http://localhost:8091/views/pages/index.html
npm run dev

开发完成后打包命令，会生成dist文件夹 可通过启动静态服务指向dist目录访问
npm run build

```

## 访问效果：

![首页效果](http://7xawfk.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-11-10%20%E4%B8%8B%E5%8D%884.04.37.png "首页效果")

![Editor preferences pane](http://7xawfk.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-11-10%20%E4%B8%8B%E5%8D%884.04.47.png)

## 主要功能

 1. 全局统一使用的模块`Lib.js`库 -> 公用第三方库插件，公用js,css 以及静态资源可在Lib.js中调用
 2. 支持字体图标
 3. 构建时，对css打包的支持
 4. 提取公共模块
 5. 可自定义页面模块名，例如 http:// localhost:8091/`views`/pages/index.html，`views`就是我们线上的模块名
 7. 支持多级目录
 8. 模块下静态文件可直接调用
 9. 基于`webpack2`，更高的构建速度，包体积更小，全面支持`ES6 Modules`
 10. 热更新，效率提升神器呀
 11. 支持`Less`css预处理
 12. 获取多页面的url参数的方法

## 目录结构

``` 
webpack
 |---build
 |---src
     |---assets    #资源
     |---css/common.css  #css
     |---font/    #字体图标
     |---js/common.js    #自己定义的全局通用事件
     |---js/conf.js    #项目的配置
     |---js/Lib.js    #暴露接口给组件调用	
 |---components 组件
     |---c-head 
        |---c-head.vue  head组件
     |---c-products 
        |---c-products.vue  产品列表组件
	  |---c-swiper 
        |---c-swiper.vue  轮播图组件
|---views    #各个页面模块，模块名可以自定义哦！
     |---pages    #页面模块
        |---index	首页模块
            |---index.html
            |---index.vue
            |---index.js
        |---list  列表页模块
            |---list.html
            |---list.vue
            |---list.js
        |---detail   详情页页模块
            |---detail.html
            |---detail.vue
            |---detail.js
......
     
```


## 总结

此项目脚手架为[vue2多页面脚手架][3]， 目前还在开发预演中，要使用到生产环境上请大家谨慎选择 谢谢！


## 项目借鉴
- 本次项目主要借鉴于蓝狐同学的[vue-cli-multi-page][1]
- 目前项目主要仿造唯品海外网站[us.vip.com][2]

[1]:https://github.com/bluefox1688/vue-cli-multi-page "vue-cli-multi-page"
[2]:https://us.vip.com "us.vip.com"
[3]:https://github.com/baseFramework/vue-muliti-page "vue2多页面脚手架"

 
