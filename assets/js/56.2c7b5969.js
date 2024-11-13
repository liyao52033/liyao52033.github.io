(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{537:function(a,t,s){"use strict";s.r(t);var r=s(1),i=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("首先，调试配置文件不用自己创建，可以直接点击 Debug 窗口的")]),a._v(" "),t("p",[a._v("create a launch.json file")]),a._v(" "),t("p",[a._v("快速创建：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141420794.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213211;8999999999&q-key-time=1705213211;8999999999&q-header-list=&q-url-param-list=&q-signature=cbf60acbdbe8ac298ef9651d0c78fb00c445cdb3",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"launch-attach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launch-attach"}},[a._v("#")]),a._v(" launch/attach")]),a._v(" "),t("p",[a._v("创建 Chrome Debug 配置有两种方式：launch 和 attach：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141420346.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213254;9000000000&q-key-time=1705213254;9000000000&q-header-list=&q-url-param-list=&q-signature=ee9b196f6bda3e07d355d1a257740a8f8fa43f7c",loading:"lazy"}})]),a._v(" "),t("p",[a._v("它们只是 request 的配置不同：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141421187.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213261;9000000000&q-key-time=1705213261;9000000000&q-header-list=&q-url-param-list=&q-signature=5ab9f8b967d6ef4ccbf6bdc116433eaf37b82857",loading:"lazy"}})]),a._v(" "),t("p",[a._v("我们知道，调试就是把浏览器跑起来，访问目标网页，这时候会有一个 ws 的调试服务，我们用 frontend 的 ws 客户端连接上这个 ws 服务，就可以进行调试了。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141421531.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213304;9000000000&q-key-time=1705213304;9000000000&q-header-list=&q-url-param-list=&q-signature=d5da96e9963f6e863867a9aa54023b5e5497ab06",loading:"lazy"}})]),a._v(" "),t("p",[a._v("VSCode 的 Debugger 会多一层适配器协议的转换，但是原理差不多。")]),a._v(" "),t("p",[a._v("launch 的意思是把 url 对应的网页跑起来，指定调试端口，然后 frontend 自动 attach 到这个端口。")]),a._v(" "),t("p",[a._v("但如果你已经有一个在调试模式跑的浏览器了，那直接连接上就行，这时候就直接 attach。")]),a._v(" "),t("p",[a._v("比如我们手动把 Chrome 跑起来，指定调试端口 remote-debugging-port 为 9222，指定用户数据保存目录 user-data-dir 为你自己创建一个目录。")]),a._v(" "),t("p",[a._v("在命令行执行下面的命令：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("/Applications/Google"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" Chrome.app/Contents/MacOS/Google"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" Chrome --remote-debugging-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9222")]),a._v(" --user-data-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("你自己创建的某个目录\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Chrome 跑起来之后，你可以打开几个网页，比如百度、掘金，然后你访问 localhost:9222/json，这时候你就会发现所有的 ws 服务的地址了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141421764.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213316;8999999999&q-key-time=1705213316;8999999999&q-header-list=&q-url-param-list=&q-signature=af501a8a82ef874ac0a25120dfbc2d5d2e844923",loading:"lazy"}})]),a._v(" "),t("p",[a._v("为什么每个页面有单独的 ws 服务呢？")]),a._v(" "),t("p",[a._v("这个很正常呀，每个页面的调试都是独立的，自然就需要单独的 ws 服务。")]),a._v(" "),t("p",[a._v("然后你创建一个 attach 的 Chrome Debug 配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141422175.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213324;8999999999&q-key-time=1705213324;8999999999&q-header-list=&q-url-param-list=&q-signature=2cbe734b6248eac618d0e956d923d3fb1f903806",loading:"lazy"}})]),a._v(" "),t("p",[a._v("点击启动，就会看到 VSCode Debugger 和每一个页面的 ws 调试服务建立起了链接：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141422266.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213335;9000000000&q-key-time=1705213335;9000000000&q-header-list=&q-url-param-list=&q-signature=61f1a358d4d4ffbec6f4bc68f985a1fc6521d006",loading:"lazy"}})]),a._v(" "),t("p",[a._v("比如访问之前的 React 项目，就可以进行调试了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141422996.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213350;9000000000&q-key-time=1705213350;9000000000&q-header-list=&q-url-param-list=&q-signature=26ca6444c5073c1b90757eb980adfcef7497cd8b",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以多个页面一起调试，每个页面都有独立的调试上下文。")]),a._v(" "),t("h2",{attrs:{id:"userdatadir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#userdatadir"}},[a._v("#")]),a._v(" userDataDir")]),a._v(" "),t("p",[a._v("不知道你有没有注意到刚才手动启动 Chrome 的时候，除了指定调试端口 remote-debugging-port 外，还指定了用户数据目录 user-data-dir。")]),a._v(" "),t("p",[a._v("为什么要指定这个呢？")]),a._v(" "),t("p",[a._v("user data dir 是保存用户数据的地方，比如你的浏览记录、cookies、插件、书签、网站的数据等等，在 macOS 下是保存在这个位置：")]),a._v(" "),t("p",[t("code",[a._v("~/Library/Application\\ Support/Google/Chrome")])]),a._v(" "),t("p",[a._v("你还可以删掉 Deault/Cookies，之后再访问之前登陆过的网站试一下，是不是都需要登录了？")]),a._v(" "),t("p",[a._v("这就是用户数据目录的作用。")]),a._v(" "),t("p",[a._v("那为什么启动 Chrome 要手动指定这个呢？都用默认的不行么？")]),a._v(" "),t("p",[a._v("用户数据目录有个特点，就是只能被一个 Chrome 实例所访问，如果你之前启动了 Chrome 用了这个默认的 user data dir，那就不能再启动一个 Chrome 实例用它了。")]),a._v(" "),t("p",[a._v("如果用户数据目录已经跑了一个 Chrome 实例，再跑一个候会报这样的错误：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141423455.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213427;9000000000&q-key-time=1705213427;9000000000&q-header-list=&q-url-param-list=&q-signature=279bd2a3885e9772b557298e1e5aeba30b264af8",loading:"lazy"}})]),a._v(" "),t("p",[a._v("所以我们用调试模式启动 Chrome 的时候，需要单独指定一下 user data dir 的位置。或者你也把之前的 Chrome 实例关掉，这样才能用默认的。")]),a._v(" "),t("p",[a._v("launch 的配置项里也有 userDataDir 的配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141423577.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213396;8999999999&q-key-time=1705213396;8999999999&q-header-list=&q-url-param-list=&q-signature=a118e84975c78f6f721e91f46940f62260eda553",loading:"lazy"}})]),a._v(" "),t("p",[a._v("默认是 true，代表创建一个临时目录来保存用户数据。")]),a._v(" "),t("p",[a._v("你也可以设为 false，使用默认 user data dir 启动 chrome。")]),a._v(" "),t("p",[a._v("这样的好处就是登录状态、历史记录啥的都有：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141424673.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213448;8999999999&q-key-time=1705213448;8999999999&q-header-list=&q-url-param-list=&q-signature=775ed068352e4f653abf5a357fe35868ca44903d",loading:"lazy"}})]),a._v(" "),t("p",[a._v("把 userDataDir 设置为 true 就每次都需要登录了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141424129.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213466;8999999999&q-key-time=1705213466;8999999999&q-header-list=&q-url-param-list=&q-signature=1467365c9bbca74efdb9ce4feb5a9d1bbcb8160a",loading:"lazy"}})]),a._v(" "),t("p",[a._v("你也可以指定一个自定义的路径，这样用户数据就会保存在那个目录下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141424610.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213476;9000000000&q-key-time=1705213476;9000000000&q-header-list=&q-url-param-list=&q-signature=6114e9036028c778fa84aa4c4c7d944cfc2ec879",loading:"lazy"}})]),a._v(" "),t("p",[a._v("更重要的是，你安装的 React DevTools、Vue DevTools 插件都是在默认用户数据目录的，要是用临时数据目录跑调试，那这些不都没了？")]),a._v(" "),t("p",[a._v("比如你 userDataDir 设置为 true 的时候，React DevTools 插件是没有的，需要再安装：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141436636.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705214219;8999999999&q-key-time=1705214219;8999999999&q-header-list=&q-url-param-list=&q-signature=f550c21691e8c9b6019a96838a3f77eb766539fb",loading:"lazy"}})]),a._v(" "),t("p",[a._v("userDataDir 设置为 false 的时候，安装过的插件都可以直接用：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141424118.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213490;8999999999&q-key-time=1705213490;8999999999&q-header-list=&q-url-param-list=&q-signature=ec0c8bb8a0cb92e704490ea9cba6b9cccbd30af5",loading:"lazy"}})]),a._v(" "),t("p",[a._v("但是除了调试用之外，平时也会用到 Chrome 呀，同一个 user data dir 只能跑一个 Chrome 实例的话，那不就冲突了？")]),a._v(" "),t("p",[a._v("这个问题可以用下面的配置解决：")]),a._v(" "),t("h2",{attrs:{id:"runtimeexecutable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtimeexecutable"}},[a._v("#")]),a._v(" runtimeExecutable")]),a._v(" "),t("p",[a._v("调试网页的 JS，需要先把 Chrome 跑起来，默认跑的是 Google Chrome，其实它还有另外一个版本 Canary：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141425265.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213507;9000000000&q-key-time=1705213507;9000000000&q-header-list=&q-url-param-list=&q-signature=27db3e9f245564e5fb68b5525dd586fc6e650d9d",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这是给开发者用的每日构建版，能够快速体验新特性，但是不稳定。")]),a._v(" "),t("p",[a._v("而 Google Chrome 是给普通用户用的，比较稳定。")]),a._v(" "),t("p",[a._v("这俩是独立的，相互之间没影响，可以都用同一个 user data dir 来启动。")]),a._v(" "),t("p",[a._v("你可以在"),t("a",{attrs:{href:"https://www.google.com/intl/zh-CN/chrome/canary/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),t("OutboundLink")],1),a._v("把 canary 下载下来。")]),a._v(" "),t("p",[a._v("然后指定 runtimeExecutable 为 canary，使用默认的用户数据目录启动：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141425726.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213517;8999999999&q-key-time=1705213517;8999999999&q-header-list=&q-url-param-list=&q-signature=083c6eb441a1474e20872cfb78ddc2feefa8ca21",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141425576.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213544;8999999999&q-key-time=1705213544;8999999999&q-header-list=&q-url-param-list=&q-signature=bfc3ce17ddb4a41278c46ecaba27506d16d25b3b",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这样你就可以调试用 canary，平时用 chrome 了，两者都有各自的默认数据目录。")]),a._v(" "),t("p",[a._v("（注意，一定要先安装了 canary，才能指定 canary 跑）")]),a._v(" "),t("p",[a._v("当然，runtimeExecutable 还可以指定用别的浏览器跑：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141425149.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213549;9000000000&q-key-time=1705213549;9000000000&q-header-list=&q-url-param-list=&q-signature=dab51c4fce7b7678dd184f1984b1439bb9de51dc",loading:"lazy"}})]),a._v(" "),t("p",[a._v("可以是 stable，也就是稳定的 Google Chrome，或者 canary，也就是每日构建版的 Google Chrome Canary，还可以是 custom，然后用 CHROME_PATH 环境变量指定浏览器的地址。")]),a._v(" "),t("p",[a._v("不过常用的还是 Chrome 和 Canary。")]),a._v(" "),t("h3",{attrs:{id:"runtimeargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtimeargs"}},[a._v("#")]),a._v(" runtimeArgs")]),a._v(" "),t("p",[a._v("启动 Chrome 的时候，可以指定启动参数，比如每次打开网页都默认调起 Chrome DevTools，就可以加一个 -"),t("code",[a._v("-auto-open-devtools-for-tabs")]),a._v(" 的启动参数：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141426158.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213564;9000000000&q-key-time=1705213564;9000000000&q-header-list=&q-url-param-list=&q-signature=e984c4600413cffb8248299651a034111ca870ff",loading:"lazy"}})]),a._v(" "),t("p",[a._v("效果就是这样的：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141426958.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213574;8999999999&q-key-time=1705213574;8999999999&q-header-list=&q-url-param-list=&q-signature=574f19129a044e600c10cca23e38574ca8f53cd1",loading:"lazy"}})]),a._v(" "),t("p",[a._v("想要无痕模式启动，也就是不加载插件，没有登录状态，就可以加一个 --incognito 的启动参数：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419553.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213189;8999999999&q-key-time=1705213189;8999999999&q-header-list=&q-url-param-list=&q-signature=684478cdf279c001776103db910ab88f49865884",loading:"lazy"}})]),a._v(" "),t("p",[a._v("调试用的浏览器就会以无痕模式启动了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419193.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213208;9000000000&q-key-time=1705213208;9000000000&q-header-list=&q-url-param-list=&q-signature=2857ef628d0a0762126c3467a2694e6a754c2af9",loading:"lazy"}})]),a._v(" "),t("p",[a._v("其实我们设置的 userDataDir 就是指定了 --user-data-dir 的启动参数。")]),a._v(" "),t("h2",{attrs:{id:"sourcemappathoverrides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemappathoverrides"}},[a._v("#")]),a._v(" sourceMapPathOverrides")]),a._v(" "),t("p",[a._v("代码是经过编译打包然后在浏览器运行的，比如这样：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141426749.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213589;8999999999&q-key-time=1705213589;8999999999&q-header-list=&q-url-param-list=&q-signature=f5d0b70850bc3663eddc94c33f905adc97edb6bc",loading:"lazy"}})]),a._v(" "),t("p",[a._v("但我们却可以直接调试源码，这是通过 sourcemap 做到的。")]),a._v(" "),t("p",[a._v("调试工具都支持 sourcemap，并且是默认开启的：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141426137.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213600;9000000000&q-key-time=1705213600;9000000000&q-header-list=&q-url-param-list=&q-signature=486079d498e6fb098bd9909ded9b6aa1fa89146e",loading:"lazy"}})]),a._v(" "),t("p",[a._v("当然也可以关掉:")]),a._v(" "),t("p",[a._v("Chrome DevTools 里这么关（command + shift + p）：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419156.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213192;8999999999&q-key-time=1705213192;8999999999&q-header-list=&q-url-param-list=&q-signature=f2ad5d77472f5b24fe313aef92ff57da4e46c446",loading:"lazy"}})]),a._v(" "),t("p",[a._v("VSCode Debugger 这么关：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141427191.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213620;9000000000&q-key-time=1705213620;9000000000&q-header-list=&q-url-param-list=&q-signature=0ec1ebeda0b2e60155b950764b16d86822cc759a",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这样调试的就是编译后的代码了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419921.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213196;9000000000&q-key-time=1705213196;9000000000&q-header-list=&q-url-param-list=&q-signature=532e908441725f485a78f7aaf8750da2392d9001",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在开启 sourcemap 的情况下，用 Chrome DevTools 可以看到，源文件的路径是 /static/js/bundle.js")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419969.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213195;8999999999&q-key-time=1705213195;8999999999&q-header-list=&q-url-param-list=&q-signature=5cf48b665f45bbe4ade2fdfeebc14b9ce57cc119",loading:"lazy"}})]),a._v(" "),t("p",[a._v("被 sourcemap 到了 /Users/guang/code/test-react-debug/src/index.js")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419285.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213197;9000000000&q-key-time=1705213197;9000000000&q-header-list=&q-url-param-list=&q-signature=b674159e6e6c6044d64441bad98b743b49030b0f",loading:"lazy"}})]),a._v(" "),t("p",[a._v("而在 VSCode 里，这个路径是有对应的文件的，所以就会打开对应文件的编辑器，这样就可以边调试边修改代码")]),a._v(" "),t("p",[a._v("但有的时候，sourcemap 到的文件路径在本地里找不到，这时候代码就只读了，因为没有地方保存：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419965.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213201;9000000000&q-key-time=1705213201;9000000000&q-header-list=&q-url-param-list=&q-signature=ff9391092d16372104c7a1c4d5ce28987d2db0b8",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这种情况就需要对 sourcemap 到的路径再做一次映射：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141419113.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213198;8999999999&q-key-time=1705213198;8999999999&q-header-list=&q-url-param-list=&q-signature=4a2a0c66142aee4c9759c35f9785fe240ead625f",loading:"lazy"}})]),a._v(" "),t("p",[a._v("通过 sourceMapPathOverrides 这个配置项。")]),a._v(" "),t("p",[a._v("默认有这么三个配置：")]),a._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"chrome"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"request"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"launch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"vuejs: chrome"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"webRoot"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${workspaceFolder}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sourceMaps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sourceMapPathOverrides"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"meteor://app/*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${workspaceFolder}/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"webpack:///./~/*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${webRoot}/node_modules/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"webpack://?:*/*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${webRoot}/*"')]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("p",[a._v("分别是把 meteor、webpack 开头的 path 映射到了本地的目录下。")]),a._v(" "),t("p",[t("span",{staticStyle:{color:"red","font-size":"20px"}},[a._v("其中"),t("code",[a._v("?:*")]),a._v("代表匹配任意字符，但不映射，而 * 是用于匹配字符并映射的。")])]),a._v(" "),t("p",[a._v("比如最后一个 webpack://?:"),t("em",[a._v("/")]),a._v(" 到 ${workspaceFolder}/* 的映射，就是把 webpack:// 开头，后面接任意字符 + / 然后是任意字符的路径映射到了本地的项目目录。（workspaceFolder 是一个内置变量，代表项目根目录）")]),a._v(" "),t("p",[a._v("把调试的文件 sourcemap 到的路径映射到本地的文件，这样调试的代码就不再只读了：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141434148.gif?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705214059;8999999999&q-key-time=1705214059;8999999999&q-header-list=&q-url-param-list=&q-signature=58b479d59be2c95ce1f38232a28af7dc06d97156",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[a._v("#")]),a._v(" file")]),a._v(" "),t("p",[a._v("除了启动开发服务器然后连上 url 调试之外，也可以直接指定某个文件，VSCode Debugger 会启动静态服务器提供服务：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141434354.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705214075;9000000000&q-key-time=1705214075;9000000000&q-header-list=&q-url-param-list=&q-signature=0f1760862e171267c2a93865a50ed550886146bf",loading:"lazy"}})]),a._v(" "),t("p",[a._v("index.html 的内容如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141420975.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213207;9000000000&q-key-time=1705213207;9000000000&q-header-list=&q-url-param-list=&q-signature=a405dca30c9501c7072f9aba1b6120655d80f319",loading:"lazy"}})]),a._v(" "),t("p",[a._v("打了个断点，然后启动调试：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141420731.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213208;8999999999&q-key-time=1705213208;8999999999&q-header-list=&q-url-param-list=&q-signature=45170d44780bc2aaae905ebf5e75b6001c88dfb8",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这样就可以直接调试静态网页了。")]),a._v(" "),t("p",[a._v("同样，要修改调试的内容需要把 url 映射到本地文件才行，所以有这样一个 pathMapping 的配置：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img.xiaoying.org.cn/img/202401141420739.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1705213207;9000000000&q-key-time=1705213207;9000000000&q-header-list=&q-url-param-list=&q-signature=0c0e80a8e3a821fa2d3f32d3721f4ce247c93e81",loading:"lazy"}})]),a._v(" "),t("p",[a._v("webRoot 其实就相当于把 / 的 url 映射到了 ${workspaceFoder}/。")]),a._v(" "),t("p",[a._v("这些配置倒是很少用，一般我们还是启动 dev server，再调试某个 url 更多一些。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("这节我们过了一遍 VSCode Chrome Debugger 的配置：")]),a._v(" "),t("ol",[t("li",[a._v("launch：调试模式启动浏览器，访问某个 url，然后连上进行调试")]),a._v(" "),t("li",[a._v("attach：连接某个已经在调试模式启动的 url 进行调试")]),a._v(" "),t("li",[a._v("userDataDir： user data dir 是保存用户数据的地方，比如浏览历史、cookie 等，一个数据目录只能跑一个 chrome，所以默认会创建临时用户数据目录，想用默认的目录可以把这个配置设为 false")]),a._v(" "),t("li",[a._v("runtimeExecutable：切换调试用的浏览器，可以是 stable、canary 或者自定义的")]),a._v(" "),t("li",[a._v("runtimeArgs：启动浏览器的时候传递的启动参数")]),a._v(" "),t("li",[a._v("sourceMapPathOverrides：对 sourcemap 到的文件路径做一次映射，映射到 VSCode workspace 下的文件，这样调试的文件就可以修改了")]),a._v(" "),t("li",[a._v("file：可以直接指定某个文件，然后启动调试")])])])}),[],!1,null,null,null);t.default=i.exports}}]);