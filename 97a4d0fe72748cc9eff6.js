(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{323:function(r,e,t){},362:function(r,e,t){"use strict";var n=t(323);t.n(n).a},369:function(r,e,t){"use strict";t.r(e);t(0),t(20),t(54),t(12),t(34),t(35),t(26),t(83),t(16);var n=t(183),o=t(24),i=t(171);function c(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function s(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var u={name:"EcOrder",components:{EcOrderInfo:t(328).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:function(){return i.a}}},data:function(){return{isReady:this.skipDataLoad,orderBody:s({_id:""},this.order)}},computed:{localOrder:{get:function(){return this.orderBody},set:function(r){this.orderBody=r,this.$emit("update:order",r)}}},methods:{fetchOrder:function(){var r=this,e="/orders/".concat(this.orderBody._id,".json");(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(e):Object(o.e)({url:e})).then((function(e){var t=e.data;r.localOrder=t,r.isReady=!0}))}},watch:{"order._id":function(r){r&&r!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id":function(r){r&&!this.skipDataLoad&&this.fetchOrder()}},created:function(){var r=this;this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then((function(e){r.localOrder=e.find((function(e){return e.number===r.order.number}))||{}})))}},d=(t(362),t(114));function p(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function f(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var l={name:"order",components:{EcOrder:Object(d.a)(u,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("article",{staticClass:"ec-order"},[t("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[r.isReady?t("ec-order-info",{key:"info",attrs:{order:r.localOrder,"skip-first-data-load":""},on:{"update:order":function(e){r.localOrder=e}}}):t("div",{key:"loading"},[t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[r._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){f(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({},Object(n.c)(["orders"]),{number:function(){var r=this.$route.params.number;return/^[0-9]+$/.test(r)&&parseInt(r,10)},order:function(){var r=this,e=this.orders.find((function(e){var t=e._id,n=e.number;return r.number===n||r.$route.params.number===t}));if(!e){var t=this.number;return t?{_id:this.$route.params.id,number:t}:{_id:this.$route.params.number}}return e}})},b=Object(d.a)(l,(function(){var r=this.$createElement,e=this._self._c||r;return e("div",{attrs:{id:"order"}},[e("ec-order",{attrs:{order:this.order}})],1)}),[],!1,null,null,null);e.default=b.exports}}]);
//# sourceMappingURL=97a4d0fe72748cc9eff6.js.map