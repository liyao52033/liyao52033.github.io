(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{480:function(e,s,t){},508:function(e,s,t){"use strict";t(480)},525:function(e,s,t){"use strict";t.r(s);t(51);var o=t(32),a={name:"Login",data:()=>({username:"",password:""}),methods:{login(){let{expiration:e,token:s}=this.$themeConfig.loginInfo;if("admin"===this.username&&"wahz99977"===this.password){const t=JSON.stringify({name:this.username,time:Math.round((new Date).getTime()/1e3),expire:86400*e,accesskey:s});window.localStorage.setItem(o.a,t),this.$router.push("/",()=>{dialog.DialogToast("登录成功",{messageType:"success",position:"topCenter",closeTime:3})},e=>{dialog.DialogToast("系统错误",{messageType:"error",position:"topCenter",closeTime:3})})}else dialog.DialogToast("账号或密码错误!",{messageType:"error",position:"topCenter",closeTime:3})}}},i=(t(508),t(1)),n=Object(i.a)(a,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-form"},[s("Date"),e._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-header"},[e._v("账号")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),e._v(" "),s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-header"},[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),e._v(" "),s("div",{staticClass:"btn-row"},[s("button",{staticClass:"btn",on:{click:e.login}},[e._v("\n\t\t登录\n\t\t")])])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);