(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_11月份问题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11月份问题总结"}},[t._v("#")]),t._v(" 11月份问题总结")]),t._v(" "),s("h4",{attrs:{id:"_1-乾坤子应用接入报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-乾坤子应用接入报错"}},[t._v("#")]),t._v(" 1. 乾坤子应用接入报错")]),t._v(" "),s("p",[t._v("按照"),s("a",{attrs:{href:"https://qiankun.umijs.org/zh/guide/tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("乾坤官网手册"),s("OutboundLink")],1),t._v("，配置好了主和子应用。"),s("br"),t._v("\n主应用：http://localhost:9530/"),s("br"),t._v("\n子应用：http://localhost:9531/")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("import { registerMicroApps, start } from 'qiankun';\n\nregisterMicroApps([\n  {\n    name: 'marketing', // Hwork 物料\n    entry: '//localhost:9531',\n    container: '#app-main',\n    activeRule: '/marketing/Materialreleased'\n  }\n]);\n\n// 启动 qiankun\nstart();\n")])])]),s("ul",[s("li",[t._v("(1) SKIP_BECAUSE_BROKEN: [qiankun]: Target container with xxx not existed while marketing mounting!"),s("br"),t._v("\n子应用的js、css资源都加载成功，可是dom没有挂载上。\n"),s("img",{attrs:{src:"/f2e-spec/images/summary/november_2021/1.webp",alt:""}})])]),t._v(" "),s("blockquote",[s("p",[t._v("原因：子应用"),s("code",[t._v("index.html")]),t._v("加载了高德地图的js导致，该js首次加载时会使用document.write去复写一次整个html，导致html中不存在子应用容器的div。"),s("br"),t._v("\n解决：升级高德地图js为最新的"),s("a",{attrs:{href:"https://lbs.amap.com/api/jsapi-v2/summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.0版本"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://webapi.amap.com/maps?v=2.0&key=69ce8f833120cb4e31669f380ac48d40&plugin=AMap.Autocomplete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);