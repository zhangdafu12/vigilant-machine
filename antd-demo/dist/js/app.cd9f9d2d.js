(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],p=0,f=[];p<o.length;p++)s=o[p],a[s]&&f.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("login")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"name"},[t._v("婚礼云端")]),n("router-view")],1)},o=[],l={name:"login",data:function(){return{login_way:!1}},components:{}},c=l,u=(n("b628"),n("2877")),p=Object(u["a"])(c,s,o,!1,null,"55582f8f",null),f=p.exports,d={name:"app",components:{login:f}},m=d,v=(n("034f"),Object(u["a"])(m,a,i,!1,null,null,null)),b=v.exports,g=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.login_way?n("div",{staticClass:"content"},[n("div",{staticClass:"text"},[t._v("管理员登录")]),t._m(0),n("div",{staticClass:"pass"},[n("a",{on:{click:t.phone_login}},[t._v("密码登录")])])]):n("div",{staticClass:"content"},[n("div",{staticClass:"text"},[t._v("管理员登录")]),n("form",{staticStyle:{"margin-top":"120px"}},[n("label",[t._v("手机号")]),n("input",{staticClass:"cell",attrs:{type:"text",placeholder:"13858000000"}}),n("br"),n("label",{staticClass:"auth_label",attrs:{for:"auth"}},[t._v("验证码")]),n("input",{attrs:{type:"text",id:"auth",placeholder:"650512"}}),n("span",{staticClass:"send_verification",on:{click:t.send}},[t._v(t._s(t.send_msg))]),n("input",{staticClass:"login",attrs:{type:"submit",value:"登 录"}})]),n("div",{staticClass:"pass"},[n("a",{on:{click:t.phone_login}},[t._v("验证码登录")])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticStyle:{"margin-top":"120px"}},[n("label",[t._v("手机号")]),n("input",{staticClass:"cell",attrs:{type:"text",placeholder:"请输入手机号"}}),n("br"),n("label",{attrs:{for:"password"}},[t._v("密码")]),n("input",{attrs:{type:"text",id:"password",placeholder:"请输入密码"}}),n("br"),n("input",{staticClass:"login",attrs:{type:"submit",value:"登 录"}})])}],_={name:"admin",data:function(){return{login_way:!0,send_msg:"获取验证码"}},methods:{send:function(){this.send_msg="已发送"},phone_login:function(){this.login_way=!this.login_way}}},y=_,x=Object(u["a"])(y,A,h,!1,null,"cfb679d2",null),C=x.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"text"},[t._v("登录/注册")]),r("img",{staticClass:"code",attrs:{src:n("a2eb")}}),r("button",{on:{click:t.btnClick}},[r("router-link",{attrs:{to:"/firmRegister"}},[t._v("微信扫码登录/注册")])],1)])},j=[],E={name:"weChat",methods:{btnClick:function(){this.$router.push({name:"firmRegister",params:{userId:123}})}}},R=E,M=Object(u["a"])(R,w,j,!1,null,"7d448967",null),Q=M.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"text"},[t._v("注册")]),n("form",[n("label",{attrs:{for:"firm"}},[t._v("公司")]),n("input",{attrs:{type:"text",id:"firm"}}),n("br"),n("label",{attrs:{for:"post"}},[t._v("职位")]),n("input",{attrs:{type:"text",id:"post"}}),n("br"),n("label",{attrs:{for:"name"}},[t._v("姓名")]),n("input",{attrs:{type:"text",id:"name"}}),n("br"),n("label",{attrs:{for:"cell"}},[t._v("手机")]),n("input",{attrs:{type:"text",id:"cell"}}),n("br"),n("input",{attrs:{type:"submit",value:"确定",id:"confirm"}})])])}],B={name:"register"},O=B,V=Object(u["a"])(O,F,K,!1,null,"44364bc2",null),k=V.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"text"},[t._v("注册")]),r("form",[r("label",{attrs:{for:"firm"}},[t._v("公司名称")]),r("input",{attrs:{type:"text",id:"firm"}}),r("br"),r("label",{attrs:{for:"site"}},[t._v("公司地址")]),r("input",{attrs:{type:"text",id:"site"}}),r("br"),r("label",{attrs:{for:"name"}},[t._v("法人姓名")]),r("input",{attrs:{type:"text",id:"name"}}),r("br"),r("label",{attrs:{for:"business"}},[t._v("营业执照号")]),r("input",{attrs:{type:"number",id:"business"}}),r("br"),r("label",{attrs:{for:"picture"}},[t._v("法人照片")]),r("input",{ref:"inputer",attrs:{type:"file",id:"picture",accept:"image/*"},on:{change:function(e){return t.tirggerFile(e)}}}),r("br"),r("label",{attrs:{for:"license"}},[t._v("营业执照")]),r("input",{attrs:{type:"file",id:"license",accept:"image/*"},on:{change:function(e){return t.tirggerFile2(e)}}}),r("br"),r("input",{attrs:{type:"submit",value:"下一步",id:"next"},on:{click:t.verify}})]),r("div",{staticClass:"upload-first img_up"},[t.legal?r("img",{attrs:{src:t.legal}}):r("img",{attrs:{src:n("76ce")}})]),r("div",{staticClass:"upload-end img_up"},[t.business?r("img",{attrs:{src:t.business}}):r("img",{attrs:{src:n("76ce")}})])])},P=[];function H(t){return new Promise(function(e,n){var r=t.target.files[0],a=new FileReader;a.readAsDataURL(r),a.onload=function(){e(a.result),n(a.result)}})}var q={name:"firmRegister",data:function(){return{legal:"",business:""}},methods:{tirggerFile:function(t){var e=this;H(t).then(function(t){e.legal=t})},tirggerFile2:function(t){var e=this;H(t).then(function(t){e.business=t})},verify:function(){this.$router.push({name:"firmRegisterVerify",params:{userId:123}})}}},N=q,S=Object(u["a"])(N,G,P,!1,null,"664e5fc0",null),U=S.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"text"},[t._v("注册")]),n("form",[n("label",{attrs:{for:"firm"}},[t._v("公司")]),n("input",{attrs:{type:"text",id:"firm"}}),n("br"),n("label",{attrs:{for:"post"}},[t._v("职位")]),n("input",{attrs:{type:"text",id:"post"}}),n("br"),n("label",{attrs:{for:"name"}},[t._v("姓名")]),n("input",{attrs:{type:"text",id:"name"}}),n("br"),n("label",{attrs:{for:"cell"}},[t._v("手机")]),n("input",{attrs:{type:"text",id:"cell"}}),n("br"),n("input",{attrs:{type:"submit",value:"确定",id:"confirm"},on:{click:t.admin_login}})])])},T=[],Y={name:"firmRegisterVerify",methods:{admin_login:function(){this.$router.push({name:"admin",params:{userId:123}})}}},z=Y,I=Object(u["a"])(z,D,T,!1,null,"5a333d1c",null),$=I.exports;r["a"].use(g["a"]);var W=new g["a"]({routes:[{path:"/",name:"weChat",component:Q},{path:"/admin",name:"admin",component:C},{path:"/register",name:"register",component:k},{path:"/firmRegister",name:"firmRegister",component:U},{path:"/firmRegister/Verify",name:"firmRegisterVerify",component:$}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)},router:W}).$mount("#app")},"5ae7":function(t,e,n){},"64a9":function(t,e,n){},"76ce":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABHNCSVQICAgIfAhkiAAAAqtJREFUeJzt3TFr20AYxvHn5MabiTKYDB4KhSzN4o/QoRT6dQqFDB0KaaFQ6Nfp0iItWXRDNHUxFGmIIHjIHSFehHMZ3JSUJrGdN857guc32rL98sfyHQLbBn9479+GED4BeAEgBd3GAfhtjPmwvb39HQBMCKHnvT8EcADAqI7XHSGE8DlN04/m7OzslTEm056ogy4BvEmMMQfak3RUAuB9AmCsPUmHjRMAu9pTdNhuoj1B1zGgEAMKMaAQAwoxoBADCjGgEAMKMaAQAwoxoBADCjGgEAMKMaAQAwoxoBADCjGgEAMKRRuwbVscHR2haRrtUe4VbUBrLZqmQVEUcM5pj3OnKANaa3FycgJg8U7M8zzaiNEFnEwmqKrqn9vatkVRFGjbVmmqu0UVsKoqlGV5633ee2RZFl3EaAI652CtvfcY7z2Oj4+faKLVRBHQOYc8z1c6tq5rFEWx4YlWpx7weruyzqlZ1/V/n5NaVAO2bYssyzCbzdZ+rLU2ioiqAa218N4/+PFlWapvb9QC3tzrPVQMe0SVgFVVPdrpd71H1GKcc0Ht1W+YTqcrrcR7e3vY39/H1tbWE0y1nPoqfG04HGI4HC49bjQaRRMPiChgVzGgEAMKMaAQAwoxoFBUAfv9/tJjYtrCABFtpLsqqndgFz3TeNFNXEUZj8dI06f/or1KwMlk8ujP2TSNSkCVU3gTC4HW4qKyiFxcXDzoKvR9VrkQsQlchYW4CgsxoBADCjGgEAMKMaAQAwoxoBADCjGgEAMKMaAQAwoxoBADCjGgEAMKMaAQAwoxoFAC4FR7iA47TQDc/u0+WkWZAPiKxc+a03ouQwhfkjRNf2IRkdYQQjjc2dnJ//57w/n5+cv5fP4uhPDaGPNcc7hYhRBqY8yPXq/3bTAY/AKAK4+770aQYMGWAAAAAElFTkSuQmCC"},a2eb:function(t,e,n){t.exports=n.p+"img/code.628834d4.png"},b628:function(t,e,n){"use strict";var r=n("5ae7"),a=n.n(r);a.a}});
//# sourceMappingURL=app.cd9f9d2d.js.map