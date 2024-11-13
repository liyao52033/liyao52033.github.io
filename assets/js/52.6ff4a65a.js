(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{534:function(e,s,t){"use strict";t.r(s);var n=t(1),a=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[e._v("#")]),e._v(" 问题描述")]),e._v(" "),s("p",[e._v("需要在dom渲染后，获取dom来进行页面自动滚动到需要的位置。\n在mounted阶段用document.querySelector()以及this.$refs获取元素均获取不到。用两种方式获取元素，打印出来的结果都是undefined。\n有解答说用this.nextTick(function(){…})，试了一下结果还是undefined")]),e._v(" "),s("h2",{attrs:{id:"分析原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析原因"}},[e._v("#")]),e._v(" 分析原因")]),e._v(" "),s("p",[e._v("1、Vue 推荐使用 template 来创建 HTML。但是模板毕竟是模板，不是真实的dom节点。vue会先利用对象中的render 函数**，**生成虚拟节点并挂载，挂载的真实DOM是进行异步渲染的，并且在修改完状态后也是异步的方式进行渲染。代码中将document.querySelector操作定义为同步任务，此时事件队列应该是：")]),e._v(" "),s("ul",[s("li",[e._v("同步队列：获取dom元素，")]),e._v(" "),s("li",[e._v("异步队列：从虚拟节点转真实节点并进行渲染")])]),e._v(" "),s("p",[e._v("根据先同步后异步的执行流程，是获取不到dom元素的；")]),e._v(" "),s("p",[e._v("2、在mounted阶段，若需要获取的元素或组件有v-if，v-for属性。v-if的初始化结果为false。v-for"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E9%81%8D%E5%8E%86&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[e._v("遍历"),s("OutboundLink")],1),e._v("的数组初始化阶段无值。（即mounted阶段后，根据获得的后台数据来动态操作dom）这两种情况都会导致mounted阶段获取元素的语句获取不到dom。")]),e._v(" "),s("h2",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),s("p",[e._v("1、把获取元素的语句放在异步获取到数据，赋值给data中的key之后进行。同时需要给获取元素的语句加上setTimeout。因为setTimeout是宏任务，会在vue的render函数执行之后再执行。")]),e._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[e._v(' mounted() {\n        setTimeout(() => {\n            if (this.$route.path !== "/") {\n                let rightbar = document.querySelector(".right-menu-wrapper");\n                let arrow = document.querySelector(".page-nav-centre-next");\n\n                if (rightbar) {\n                    arrow.style.right = "16rem";\n                } else {\n                    arrow.style.right = "2rem"; \n                }\n            }\n        }, 200);\n      \n    },\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("p",[e._v("2、把获取元素的语句放到updated周期中执行。这种情况下每次视图更新之后都会执行一次获取元素的语句，如果不需要每次视图更新之后都执行，可以在mounted周期中，使用可以在mounted周期中，使用this.$once让获取元素的语句只在updated阶段执行一次。")]),e._v(" "),s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[e._v("mounted() {\n   this.$once(“hook: updated”, function() {…})\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);