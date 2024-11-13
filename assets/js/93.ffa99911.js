(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{577:function(_,v,a){"use strict";a.r(v);var t=a(1),s=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"_1、本地代码误发线上"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、本地代码误发线上"}},[_._v("#")]),_._v(" 1、本地代码误发线上")]),_._v(" "),v("p",[_._v("这个问题本质上是由于粗心导致的，很多同学为了自己本地开发方便，可能写了一些模拟数据、特殊逻辑（比如不判断用户权限），但是最后上线前不检查，就直接把特殊逻辑发到线上了，导致各种各样 “哭笑不得” 的问题。")]),_._v(" "),v("p",[_._v("这里有 2 种预防方式：")]),_._v(" "),v("p",[_._v("1）使用 CR（Code Review）机制，在自己的代码发布前，由同事或上级来检查代码，从而提前发现一些问题。")]),_._v(" "),v("p",[_._v("2）不要写仅本地可用的代码、尽量不写和环境有关的特殊逻辑，保证自己写的每行代码都是可发布上线的")]),_._v(" "),v("p",[_._v("虽然这个问题可以预防，但是无法根治，因为人本身就是最大的 Bug，一个再牛的人也可能会犯一些小错误。")]),_._v(" "),v("h3",{attrs:{id:"_2、环境差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、环境差异"}},[_._v("#")]),_._v(" 2、环境差异")]),_._v(" "),v("p",[_._v("很多时候，同一套代码换一个环境可能就跑不通了。比如操作系统、网络连通、依赖服务、依赖版本、防火墙安全设置等等的差异。")]),_._v(" "),v("p",[_._v("举个典型的例子，本地的数据库新增了字段，测试通过了；结果上线前忘了在线上数据库同步新增字段，就导致数据库相关功能崩掉。")]),_._v(" "),v("p",[_._v("要解决这个问题，最好的办法就是尽量保证本地环境和线上环境一致，比如使用 Docker 容器等虚拟化技术来模拟线上环境运行。或者在正式上线前，通过测试环境、预发布环境来测试部署，降低环境差异的风险。")]),_._v(" "),v("p",[_._v("此外还有个建议，对于核心项目，团队内最好能整理出一个规范的部署文档、明确定义项目运行的环境，保证团队成员都能提前知晓这些信息并正确配置环境。")]),_._v(" "),v("h3",{attrs:{id:"_3、配置差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置差异"}},[_._v("#")]),_._v(" 3、配置差异")]),_._v(" "),v("p",[_._v("由于本地和线上的环境可能存在差异，我们适用于本地的项目配置文件不一定适用于线上。")]),_._v(" "),v("p",[_._v("比如 Java 项目的 application.yml 文件，一般会定义项目启动的端口、依赖的数据库服务配置、cookie 配置等。如果在配置文件中指定项目在 8080 端口启动，你自己的电脑上运行可能没问题，但为啥发到线上就运行不起来或无法访问呢？")]),_._v(" "),v("p",[_._v("大概率是因为线上服务器的 8080 端口已经被其他人占用了；或者没有给该端口开启防火墙，导致无法访问。")]),_._v(" "),v("p",[_._v("为了解决这个问题，通常我们会分别为本地和线上指定不同的配置，比如区分 "),v("code",[_._v("application-dev.yml")]),_._v(" 、"),v("code",[_._v("application-prod.yml")]),_._v("  等，不同的环境加载不同的配置文件。")]),_._v(" "),v("p",[_._v("还可以使用一些可视化的配置管理工具（比如 Apollo、Nacos），让管理员统一在工具上发布不同环境的配置，并通过工具校验配置并记录变更，减少人工导致的配置差错。")]),_._v(" "),v("h3",{attrs:{id:"_4、资源路径差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、资源路径差异"}},[_._v("#")]),_._v(" 4、资源路径差异")]),_._v(" "),v("p",[_._v("如果你的项目中引用了本地文件（比如 C 盘的 xxx.txt），那么上线后大概率会报错。因为线上的服务器并没有该路径、或者在该路径下没有文件。")]),_._v(" "),v("p",[_._v("为了解决这个问题，建议大家尽量使用相对路径去加载资源；或者使用集中的分布式文件系统、对象存储服务等，给每个资源一个统一确定的标识（比如网址），保证各机器上都能用相同的路径找到该资源。")]),_._v(" "),v("h3",{attrs:{id:"_5、api-接口差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、api-接口差异"}},[_._v("#")]),_._v(" 5、API 接口差异")]),_._v(" "),v("p",[_._v("这个问题更多地是出现在前端。一般情况下，前端本地调试时请求的是后端的开发服务，而上线后请求的是线上服务。不仅请求的路径不同的，还可能出现跨域问题，导致接口请求失败、无法登录等问题。")]),_._v(" "),v("p",[_._v("所以尽量保证开发和线上接口的路径规范一致，对于跨域问题可以使用 Nginx 网关的反向代理功能统一解决。")]),_._v(" "),v("p",[_._v("另外，在企业开发中，一般开发环境和线上环境的网络是隔离的。如果你的代码依赖一些第三方接口，一定要注意接口的网络连通性、接口的性能差异等问题，提前做好相关的测试。不要等到上线后才发现，我 c，接口怎么调不通啊？！")]),_._v(" "),v("p",[_._v("还有一种情况，在使用有回调功能的第三方服务（比如公众号开发）时经常会出现，那就是忘记了修改第三方服务的回调地址。而且这种错误不好排查，因为你能请求通别人的服务，只不过别人的服务通知不到你罢了。所以要格外留意这种情况。")]),_._v(" "),v("h3",{attrs:{id:"_6、用量差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、用量差异"}},[_._v("#")]),_._v(" 6、用量差异")]),_._v(" "),v("p",[_._v("这是所有上线出 Bug 的情况中，我个人认为最高级的了，而且很难绝对避免。")]),_._v(" "),v("p",[_._v("由于本地、测试等非线上环境，通常比线上真实业务的数据量、调用量、负载压力小很多，所以很多问题不到线上很难发现。")]),_._v(" "),v("p",[_._v("比如你开发自测时，可能用单线程跑的好好的，结果一上线，有 10  个线程同时请求，服务就挂了、或者数据就不一致了。")]),_._v(" "),v("p",[_._v("还有你在开发自测时，可能系统压力很小，数据库、Redis 都跑的很开心。结果一上线，百万个用户一人存个数据，你的数据存储服务就都爆满了。")]),_._v(" "),v("p",[_._v("为了防止这些用量差异带来的问题，我们开发测试过程中不能只是简单地测试功能是否可用，还要使用 JMeter 等专业的压力测试工具，来验证系统的性能、稳定性和可用性。")]),_._v(" "),v("p",[_._v("再扩展一点，即使项目刚上线的时候没问题，也不代表一直没问题。比如外卖系统，一般中午饭点是流量的高峰，可能在这个时候系统扛不住了会崩掉，但其他时候都是正常的。所以对于用户量和规模较大的项目，我们要结合具体的业务和用户使用情况来分析，并采用不同的策略（比如流量的削峰填谷）来优化系统。")])])}),[],!1,null,null,null);v.default=s.exports}}]);