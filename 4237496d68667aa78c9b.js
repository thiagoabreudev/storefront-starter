(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{359:function(t,e,o){"use strict";o.r(e);var n=o(24),c=o(37);const r=n.$ecomConfig.get("currency")||"BRL",a=t=>{const e={currency:r,content_ids:[t.sku],content_name:t.name,value:Object(c.a)(t),content_type:"product"};return t.categories&&t.categories.length&&(e.content_category=t.category_tree||t.categories[0].name),e};var s=o(15);e.default=(t={})=>{if("function"==typeof window.fbq){const o=(e,o={},n=!1)=>{t.debug&&console.log("fbq",e,o),window.fbq(n?"trackCustom":"track",e,o)};(t=>{const e=window.storefront&&window.storefront.context;e&&"products"===e.resource&&t("ViewContent",a(e.body))})(o),(t=>{const e=window.storefrontApp&&window.storefrontApp.router;if(e){let o,n,c;const a=()=>{const{amount:t}=window.storefrontApp,e={value:t&&t.total||s.a.data&&s.a.data.subtotal||0,currency:r,contents:[],content_type:"product"};return s.a.data&&Array.isArray(s.a.data.items)&&s.a.data.items.forEach((({sku:t,quantity:o})=>{e.contents.push({id:t,quantity:o})})),e},i=(e,c)=>{const r=a(),s={...r,checkout_step:e,checkout_option:c};e<=1||!o?(t("InitiateCheckout",r),t("Checkout",s,!0),o=!0):n||(t("CheckoutOption",s,!0),n=!0)},u=e=>{c||(t("Purchase",{...a(),order_id:e}),c=!0)},d=({name:t,params:e})=>{switch(t){case"cart":i(1,"Review Cart");break;case"checkout":i(2,"Confirm Purchase");break;case"confirmation":u(e.id)}};e.currentRoute&&d(e.currentRoute),e.afterEach(d)}})(o),e=o,s.a.on("addItem",(({item:t})=>{e("AddToCart",a(t))}))}var e}}}]);
//# sourceMappingURL=4237496d68667aa78c9b.js.map