(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{596:function(a,t,s){"use strict";s.r(t);var i=s(1),l=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"电梯等待点、关联点、接驳点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电梯等待点、关联点、接驳点"}},[a._v("#")]),a._v(" 电梯等待点、关联点、接驳点")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("背景")]),a._v(" "),t("p",[a._v("规划地图时没有准确理解电梯等待点、关联点、接驳点的具体含义导致电梯业务出问题。")])]),a._v(" "),t("p",[t("strong",[a._v("等待点")]),a._v("：电梯等待点是指电梯业务中申请电梯或者释放电梯的点位，机器人背货在起始楼层到达电梯等待点申请电梯，这个时候可以理解电梯等待点为电梯申请点，货物到了目标楼层机器人进电梯背货出来到电梯等待点，这个等待点可以理解为电梯释放点。")]),a._v(" "),t("p",[t("strong",[a._v("关联点")]),a._v("：电梯关联点就是一个关联点信息，如小车不跨楼层业务，机器人把货物送到电梯后根据配置的电梯关联点信息退出电梯然后执行电梯任务把货物送到指定楼层，货物到达指定楼层后机器人去电梯里接货物。")]),a._v(" "),t("p",[t("strong",[a._v("接驳点")]),a._v("：电梯接驳点是指拓扑地图中规划的电梯对应的点位信息，电梯里需要使用ZZ码。")]),a._v(" "),t("h2",{attrs:{id:"电梯业务中如何规划地图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电梯业务中如何规划地图"}},[a._v("#")]),a._v(" 电梯业务中如何规划地图")]),a._v(" "),t("p",[a._v("按照实际的业务场景，建议一部电梯设置电梯等待点时入口和出口进行分离，电梯申请点和电梯释放点物理上进行区分防止发生堵车，如下等待点和释放点为同一个点会导致堵车问题发生。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012006448.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704110765;9000000000&q-key-time=1704110765;9000000000&q-header-list=host&q-url-param-list=&q-signature=5e8344393a135d1a67c5e6aad949675e07cc1e2a",loading:"lazy"}})]),a._v(" "),t("p",[a._v("如下业务场景中设置两个电梯等待点，电梯申请点和释放点进行分离，有效解决因为一个电梯等待点堵车的情况。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012010932.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111026;8999999999&q-key-time=1704111026;8999999999&q-header-list=host&q-url-param-list=&q-signature=e32e26c8abb16d5258dc78255e4f59aaa66ddac5",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"电梯任务模板配置注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电梯任务模板配置注意事项"}},[a._v("#")]),a._v(" "),t("strong",[a._v("电梯任务模板配置注意事项")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("电梯任务模板分为随梯任务模板和不随梯任务模板，随梯任务不用配置副任务模板，不随梯的任务，目标楼层需要调度其他车辆来搬运货架，所以必须有副任务模板")])]),a._v(" "),t("p",[a._v("机器人是否跨电梯，根据实际的业务场景，如果需要机器人跨电梯那么配置电梯时需要打开“小车跨楼层”开关，若机器人不跨电梯则不需要打开此开关。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012011211.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111064;8999999999&q-key-time=1704111064;8999999999&q-header-list=host&q-url-param-list=&q-signature=012594bb871f6441f1ad92836e4db3a48a56d599",loading:"lazy"}})]),a._v(" "),t("p",[a._v("配置电梯任务模板，接口名称选择“跨电梯任务处理器”。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012011542.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111092;9000000000&q-key-time=1704111092;9000000000&q-header-list=host&q-url-param-list=&q-signature=5333e8d4678b0843dc81d485420e4540a54ef359",loading:"lazy"}})]),a._v(" "),t("p",[a._v("若只有一部电梯并且平台需要同时下发多个电梯任务则电梯任务模板中“是否提升机多任务”需要打开。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012011277.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111118;8999999999&q-key-time=1704111118;8999999999&q-header-list=host&q-url-param-list=&q-signature=baf9b7cd7fab52015635ff719448eea68d0af968",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"等待点配置不合理导致堵车"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#等待点配置不合理导致堵车"}},[a._v("#")]),a._v(" 等待点配置不合理导致堵车")]),a._v(" "),t("h3",{attrs:{id:"案例一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例一"}},[a._v("#")]),a._v(" 案例一")]),a._v(" "),t("p",[a._v("问题描述：2022.9.19 16：11：46，重庆基地B区2栋一楼，机器人编号3595在电梯背货出来后被机器人编号3640堵在门口互相不避让，导致报错空间干涉。")]),a._v(" "),t("p",[a._v("问题分析：通过回放现场监控录像信息定位问题3595电梯里背货出来需要到等待点进行释放电梯如下图。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012012043.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111153;8999999999&q-key-time=1704111153;8999999999&q-header-list=host&q-url-param-list=&q-signature=c60c06a46b0facdec82311853cfb25ae276ed86c",loading:"lazy"}})]),a._v(" "),t("p",[a._v("3640需要去等待点申请电梯，进电梯接货架，如下图。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012013603.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111185;9000000000&q-key-time=1704111185;9000000000&q-header-list=host&q-url-param-list=&q-signature=88178c4339367246482bcfdde4325b2aae0d6d11",loading:"lazy"}})]),a._v(" "),t("p",[a._v("此时3595和3640相互不必让导致任务无法执行。")]),a._v(" "),t("p",[a._v("解决方案：通过设置电梯申请点和释放点进行分离，优化线路来解决此类拥堵问题，新增一个电梯等待点，进行出入口分离，优化线路为单行线。")]),a._v(" "),t("h3",{attrs:{id:"案例二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例二"}},[a._v("#")]),a._v(" "),t("strong",[a._v("案例二")])]),a._v(" "),t("p",[a._v("问题描述：地图规划电梯等待点只有一个，出口和入口是相同的一个点，该场景下会发生从电梯出来的机器人和需要申请电梯的机器人互相堵车的情况。")]),a._v(" "),t("p",[a._v("问题分析：通过分析现场地图规划，发现只有一个等待点，申请点和释放点在同一个物理位置，电梯业务繁忙时容易造成堵车。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012014188.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111283;8999999999&q-key-time=1704111283;8999999999&q-header-list=host&q-url-param-list=&q-signature=99c82a68b2de6458e32bda0ba6d79e6a02697565",loading:"lazy"}})]),a._v(" "),t("p",[a._v("解决方案：通过设置两个电梯等待点，出入口分离，物理上区分两个等待点，如下图红色框设置为释放点，电梯出来单向线到释放点。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012015867.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111335;8999999999&q-key-time=1704111335;8999999999&q-header-list=host&q-url-param-list=&q-signature=95f827ff5f6ff1595b601d8fc7594811328ce178",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"案例三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例三"}},[a._v("#")]),a._v(" 案例三")]),a._v(" "),t("p",[a._v("问题描述：机器人编号1333，任务单号: S01183B1F24849322D ，子任务编号: 183B1F248AB322Q_ECS ，18:36机器人到达电梯等待点236831KL249531后停在原地不动,子任务正在执行状态，机器人编号1332在电梯接驳点中没有出电梯。")]),a._v(" "),t("p",[a._v("问题分析：1332机器人未到达电梯释放点进行释放此时1333到达电梯申请点申请电梯，造成问题产生，地图规划中可以看出电梯申请点和释放点是同一个等待点。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012016138.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111394;8999999999&q-key-time=1704111394;8999999999&q-header-list=host&q-url-param-list=&q-signature=4c712c1fe79026b9b840f2278a8ca3857a5e2836",loading:"lazy"}})]),a._v(" "),t("p",[a._v("解决方案：需要设置电梯申请点和电梯释放点为两个不同的点，避免出口和入口为同一个等待点的情况，如下图可以优化把红框位置设置为电梯释放点来解决此问题。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://aurora-1258839075.cos.ap-shanghai.myqcloud.com/img/202401012017219.png?q-sign-algorithm=sha1&q-ak=AKIDlOsIWjolbMzQrQyRwNfoovASl088zhGh&q-sign-time=1704111444;8999999999&q-key-time=1704111444;8999999999&q-header-list=host&q-url-param-list=&q-signature=f4af58164c556f4d24f3a0a7ab75d33f55b52592",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://v-club.com/home/article/1980",target:"_blank",rel:"noopener noreferrer"}},[a._v("控制器串口对接第三方设备"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);