(function(e){function n(n){for(var t,r,s=n[0],c=n[1],u=n[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);g&&g(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],t=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(t=!1)}t&&(i.splice(n--,1),e=s(s.s=a[0]))}return e}var t={},o={index:0},i=[];function r(e){return s.p+"static/js/"+({"pages-cart-cart":"pages-cart-cart","pages-category-main":"pages-category-main","pages-csg-csg":"pages-csg-csg","pages-index-index~pages-msp-msp":"pages-index-index~pages-msp-msp","pages-index-index":"pages-index-index","pages-msp-msp":"pages-msp-msp","pages-member-member":"pages-member-member","pages-myp-myp":"pages-myp-myp","pages-news-news":"pages-news-news"}[e]||e)+"."+{"pages-cart-cart":"8cd412d6","pages-category-main":"9883750c","pages-csg-csg":"8e270ea5","pages-index-index~pages-msp-msp":"952bbfa2","pages-index-index":"54aa8965","pages-msp-msp":"055204ff","pages-member-member":"672b81be","pages-myp-myp":"5326b4e4","pages-news-news":"56ca8506"}[e]+".js"}function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a=o[e];if(0!==a)if(a)n.push(a[2]);else{var t=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=t);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e);var u=new Error;i=function(n){c.onerror=c.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",u.name="ChunkLoadError",u.type=t,u.request=i,a[1](u)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=t,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)s.d(a,t,function(n){return e[n]}.bind(null,t));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var p=0;p<c.length;p++)n(c[p]);var g=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("5718")},"0198":function(e,n,a){"use strict";(function(e){var n=a("4ea4");a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0");var t=n(a("e143")),o={keys:function(){return[]}};e["____AE50A00____"]=!0,delete e["____AE50A00____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"黑马商城",navigationBarBackgroundColor:"#b50e03",backgroundColor:"#F8F8F8"},tabBar:{list:[{pagePath:"pages/index/index",iconPath:"static/icon/home.png",selectedIconPath:"static/icon/home-active.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/news/news",iconPath:"static/icon/news.png",selectedIconPath:"static/icon/news-active.png",text:"资讯",redDot:!1,badge:""},{pagePath:"pages/cart/cart",iconPath:"static/icon/cart.png",selectedIconPath:"static/icon/cart-active.png",text:"购物车",redDot:!1,badge:""},{pagePath:"pages/member/member",iconPath:"static/icon/member.png",selectedIconPath:"static/icon/member-active.png",text:"会员",redDot:!1,badge:""}],color:"#ccc",selectedColor:"#b50e03",backgroundColor:"",borderStyle:"black"}},e.__uniConfig.compilerVersion="3.4.18",e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__AE50A00",e.__uniConfig.appName="hm_shop",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={maps:{qqmap:{key:""}}},e.__uniConfig.qqMapKey="",e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=o.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=o(n);return Object.assign(e[a]||(e[a]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,t.default.component("pages-index-index",(function(e){var n={component:Promise.all([a.e("pages-index-index~pages-msp-msp"),a.e("pages-index-index")]).then(function(){return e(a("ba6c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-news-news",(function(e){var n={component:a.e("pages-news-news").then(function(){return e(a("45ea"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-cart-cart",(function(e){var n={component:a.e("pages-cart-cart").then(function(){return e(a("204b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-member-member",(function(e){var n={component:a.e("pages-member-member").then(function(){return e(a("4c8b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-category-main",(function(e){var n={component:a.e("pages-category-main").then(function(){return e(a("4e3b"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-msp-msp",(function(e){var n={component:Promise.all([a.e("pages-index-index~pages-msp-msp"),a.e("pages-msp-msp")]).then(function(){return e(a("5ede"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-csg-csg",(function(e){var n={component:a.e("pages-csg-csg").then(function(){return e(a("f064"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-myp-myp",(function(e){var n={component:a.e("pages-myp-myp").then(function(){return e(a("5144"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"黑马商城"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/news/news",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"资讯"})},[e("pages-news-news",{slot:"page"})])}},meta:{id:2,name:"pages-news-news",isNVue:!1,maxWidth:0,pagePath:"pages/news/news",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/cart/cart",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[e("pages-cart-cart",{slot:"page"})])}},meta:{id:3,name:"pages-cart-cart",isNVue:!1,maxWidth:0,pagePath:"pages/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/member/member",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"会员"})},[e("pages-member-member",{slot:"page"})])}},meta:{id:4,name:"pages-member-member",isNVue:!1,maxWidth:0,pagePath:"pages/member/member",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/category/main",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"分类"})},[e("pages-category-main",{slot:"page"})])}},meta:{name:"pages-category-main",isNVue:!1,maxWidth:0,pagePath:"pages/category/main",windowTop:44}},{path:"/pages/msp/msp",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"秒杀拍",enablePullDownRefresh:!0})},[e("pages-msp-msp",{slot:"page"})])}},meta:{name:"pages-msp-msp",isNVue:!1,maxWidth:0,pagePath:"pages/msp/msp",windowTop:44}},{path:"/pages/csg/csg",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"超市购"})},[e("pages-csg-csg",{slot:"page"})])}},meta:{name:"pages-csg-csg",isNVue:!1,maxWidth:0,pagePath:"pages/csg/csg",windowTop:44}},{path:"/pages/myp/myp",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"母婴品"})},[e("pages-myp-myp",{slot:"page"})])}},meta:{name:"pages-myp-myp",isNVue:!1,maxWidth:0,pagePath:"pages/myp/myp",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},"0e81":function(e,n,a){"use strict";a("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.myRequest=void 0;var t="https://api-hmugo-web.itheima.net",o=function(e){return new Promise((function(n,a){uni.request({url:t+e.url,method:e.method||"GET",data:e.data||{},success:function(e){if(200!=e.statusCode)return uni.showToast({title:"获取数据失败"});n(e)},fail:function(e){uni.showToast({title:"获取数据失败"}),a(e)}})}))};n.myRequest=o},"3c2e":function(e,n,a){"use strict";a.r(n);var t=a("d867"),o=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=o.a},5718:function(e,n,a){"use strict";var t=a("4ea4"),o=t(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0198"),a("1c31");var i=t(a("84e2")),r=a("0e81"),s=t(a("e143"));s.default.prototype.$myRequest=r.myRequest,s.default.config.productionTip=!1,i.default.mpType="app";var c=new s.default((0,o.default)({},i.default));c.$mount()},"84e2":function(e,n,a){"use strict";a.r(n);var t=a("bfff"),o=a("3c2e");for(var i in o)"default"!==i&&function(e){a.d(n,e,(function(){return o[e]}))}(i);a("fbd5");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);n["default"]=c.exports},8626:function(e,n,a){var t=a("24fb");n=t(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},"917a":function(e,n,a){var t=a("8626");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=a("4f06").default;o("31be2a72",t,!0,{sourceMap:!1,shadowMode:!1})},bfff:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[]},d867:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},fbd5:function(e,n,a){"use strict";var t=a("917a"),o=a.n(t);o.a}});