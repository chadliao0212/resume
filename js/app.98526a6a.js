(function(t){function e(e){for(var r,c,l=e[0],i=e[1],s=e[2],u=0,p=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);A&&A(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/resume/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var A=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var r={"./KFC.png":"888a","./about.me.jpeg":"9a00","./logo.png":"cf05","./logo.svg":"9b19"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="1771"},"3dec":function(t,e,n){"use strict";var r=n("dd99"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"App",data:function(){return{}}},l=c,i=(n("5c0b"),n("2877")),s=n("6544"),A=n.n(s),u=n("7496"),p=Object(i["a"])(l,a,o,!1,null,null,null),d=p.exports;A()(p,{VApp:u["a"]});var v=n("f309");r["a"].use(v["a"]);var f=new v["a"]({theme:{dark:!0,themes:{dark:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),b=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-application--wrap overflow-hidden",attrs:{id:"app-layput"}},[n("app-bar"),n("app-page"),n("app-footer",{staticClass:"d-flex d-sm-none"})],1)},x=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{id:"app-bar",dark:"",fixed:"",dense:""}},[n("v-toolbar-title",{staticClass:"font-weight-black"},[t._v("CHAD LIAO")]),n("v-spacer"),t._l(t.buttons,(function(e,r){return n("v-btn",{key:r,staticClass:"d-none d-sm-flex",attrs:{text:""},on:{click:function(n){return t.jumpPage(e.link)}}},[n("span",[t._v(t._s(e.text))])])}))],2)},g=[],h={data:function(){return{buttons:[{text:"首頁",link:"/home-page"},{text:"關於我",link:"/about-me"},{text:"關於專案",link:"/about-project"}]}},methods:{jumpPage:function(t){this.$router.push(t)}}},k=h,V=n("40dc"),j=n("8336"),O=n("2fa4"),S=n("2a7f"),C=Object(i["a"])(k,y,g,!1,null,null,null),E=C.exports;A()(C,{VAppBar:V["a"],VBtn:j["a"],VSpacer:O["a"],VToolbarTitle:S["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",{attrs:{id:"app-page"}},[n("v-container",{staticStyle:{"max-width":"960px"},attrs:{fluid:""}},[n("router-view")],1)],1)},L=[],P=n("a523"),Z=n("f6c4"),w={},D=Object(i["a"])(w,T,L,!1,null,null,null),z=D.exports;A()(D,{VContainer:P["a"],VMain:Z["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{id:"app-footer",fixed:"",horizontal:""}},t._l(t.buttons,(function(e,r){return n("v-btn",{key:r,attrs:{text:""},on:{click:function(n){return t.jumpPage(e.link)}}},[n("span",[t._v(t._s(e.text))])])})),1)},X=[],M={data:function(){return{buttons:[{text:"首頁",link:"/home-page"},{text:"關於我",link:"/about-me"},{text:"關於專案",link:"/about-project"}]}},methods:{jumpPage:function(t){this.$router.push(t)}}},_=M,R=n("b81c"),U=Object(i["a"])(_,B,X,!1,null,null,null),G=U.exports;A()(U,{VBottomNavigation:R["a"],VBtn:j["a"]});var N={components:{"app-bar":E,"app-page":z,"app-footer":G}},I=N,q=(n("3dec"),Object(i["a"])(I,m,x,!1,null,null,null)),J=q.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-card",{attrs:{id:"view-about",flat:"",tile:"",color:"#121212"}},[r("v-img",{attrs:{height:"300",src:n("9a00")}}),r("v-card-text",[r("div",[t._v(t._s(t.aboutMe.name)+" "+t._s(t.aboutMe.englishName)+" "+t._s(t.aboutMe.birthday))]),r("div",{domProps:{innerHTML:t._s(t.aboutMe.description)}})])],1)],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("experience",{attrs:{experience:t.aboutMe.experience}}),r("skill",{attrs:{skills:t.aboutMe.skills}}),r("connection",{attrs:{connection:t.aboutMe.connection}})],1)],1)},K=[],Q=n("c9e2"),Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",tile:"",color:"#121212"}},[n("v-card-title",[t._v(" "+t._s(t.experience.title)+" ")]),t._l(t.experience.payload,(function(e,r){return n("v-card-text",{key:r,attrs:{color:e.color,small:""}},[n("div",[t._v(" "+t._s(e.duration)+" ")]),n("div",[n("strong",{staticClass:"pr-4"},[t._v(t._s(e.company))]),t._v(" "+t._s(e.jobTitle)+" ")]),t._l(e.projects,(function(e,r){return n("div",{key:r,staticClass:"mt-4"},[n("strong",[t._v(t._s(e.title))]),n("div",[t._v(t._s(e.content))])])}))],2)}))],2)},H=[],F={props:["experience"]},$=F,tt=n("b0af"),et=n("99d9"),nt=Object(i["a"])($,Y,H,!1,null,null,null),rt=nt.exports;A()(nt,{VCard:tt["a"],VCardText:et["c"],VCardTitle:et["d"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",tile:"",color:"#121212"}},[n("v-card-title",[t._v(" "+t._s(t.skills.title)+" ")]),t._l(t.skills.payload,(function(e,r){return n("div",{key:r},[n("v-card-subtitle",{staticClass:"pt-0"},[t._v(" "+t._s(e.name)+" ")]),n("v-card-text",{staticClass:"pt-0"},t._l(e.items,(function(r,a){return n("span",{key:a},[t._v(" "+t._s(r)+" "),e.items.length-1!==a?n("span",[t._v("/")]):t._e()])})),0)],1)}))],2)},ot=[],ct={props:["skills"]},lt=ct,it=Object(i["a"])(lt,at,ot,!1,null,null,null),st=it.exports;A()(it,{VCard:tt["a"],VCardSubtitle:et["b"],VCardText:et["c"],VCardTitle:et["d"]});var At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",tile:"",color:"#121212"}},[n("v-card-title",[t._v(t._s(t.connection.title))]),t._l(t.connection.payload,(function(e,r){return n("v-card-text",{key:r,staticClass:"pt-0"},[n("v-icon",[t._v(t._s(e.icon))]),t._v(t._s(e.name)+":"+t._s(e.content)+" ")],1)}))],2)},ut=[],pt={props:["connection"]},dt=pt,vt=n("132d"),ft=Object(i["a"])(dt,At,ut,!1,null,null,null),bt=ft.exports;A()(ft,{VCard:tt["a"],VCardText:et["c"],VCardTitle:et["d"],VIcon:vt["a"]});var mt={data:function(){return{tabs:null,aboutMe:Q}},components:{experience:rt,skill:st,connection:bt}},xt=mt,yt=n("62ad"),gt=n("adda"),ht=n("0fd9"),kt=Object(i["a"])(xt,W,K,!1,null,null,null),Vt=kt.exports;A()(kt,{VCard:tt["a"],VCardText:et["c"],VCol:yt["a"],VImg:gt["a"],VRow:ht["a"]});var jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"view-about"}},[n("v-card",{attrs:{color:"basil",flat:""}},[n("v-card-text",[t._v("123123")])],1)],1)},Ot=[],St={data:function(){return{tabs:null}}},Ct=St,Et=Object(i["a"])(Ct,jt,Ot,!1,null,null,null),Tt=Et.exports;A()(Et,{VCard:tt["a"],VCardText:et["c"]});var Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.projects,(function(e,a){return r("v-card",{key:a,staticClass:"mx-auto fill-height",attrs:{dark:"","max-width":"400"}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"8"}},[r("v-card-title",{domProps:{innerHTML:t._s(e.title)}}),t._l(e.categories,(function(e,n){return r("v-chip",{key:n,staticClass:"ma-2",attrs:{small:"",color:e.color}},[t._v(" "+t._s(e.name)+" ")])}))],2),r("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"4"}},[r("v-img",{attrs:{src:n("1771")("./"+e.image)}})],1)],1),r("v-card-text",{domProps:{innerHTML:t._s(e.content)}}),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{outlined:""}},[t._v("詳細內容")])],1)],1)})),1)},Pt=[],Zt=n("aad6"),wt={data:function(){return{projects:Zt["a"]}}},Dt=wt,zt=n("cc20"),Bt=Object(i["a"])(Dt,Lt,Pt,!1,null,null,null),Xt=Bt.exports;A()(Bt,{VBtn:j["a"],VCard:tt["a"],VCardActions:et["a"],VCardText:et["c"],VCardTitle:et["d"],VChip:zt["a"],VCol:yt["a"],VImg:gt["a"],VRow:ht["a"],VSpacer:O["a"]}),r["a"].use(b["a"]);var Mt=[{path:"/",name:"Layout",component:J,children:[{path:"/home-page",name:"Home-Page",component:Xt},{path:"/about-me",name:"About-Me",component:Vt},{path:"/about-project",name:"About-Project",component:Tt}]}],_t=new b["a"]({mode:"history",base:"/resume/",routes:Mt}),Rt=_t;r["a"].config.productionTip=!1,new r["a"]({vuetify:f,router:Rt,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"888a":function(t,e,n){t.exports=n.p+"img/KFC.21df62be.png"},"9a00":function(t,e){t.exports="data:image/jpeg;base64,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"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},"9c0c":function(t,e,n){},aad6:function(t){t.exports=JSON.parse('{"a":[{"title":"肯德基點餐網站<br/>流程再設計","categories":[{"name":"UI / UX","color":"#14BAD0"},{"name":"產品服務分析","color":"#67CA4E"}],"content":"肯德基點餐網站流程再設計肯德基點餐網站流程再設計<br/>肯德基點餐網站流程再設計肯德基點餐網站流程再設計","image":"KFC.png"}]}')},c9e2:function(t){t.exports=JSON.parse('{"name":"廖彥宇","englishName":"Chad","birthday":"1992-now","description":"由工業設計，轉換為UI/UX設計的設計師，5年的工作經驗，認為產品和服務，皆是由需求而來，相信透過設計思考與方法，創造價値和改變生活 </br></br> 希望將設計思維帶進生活，有目的的實現目標，帶來更好的生活體驗</br></br> 工作上擅長團隊合作與溝通，透過設計方法，和團隊交流協作達到共識，同時學習帶領設計工作方，以及產品時程的分配與把控</br></br> 工作外，練習side project、參加讀書會和演講會，從中學習新事物與獲得靈感；以運動和投資，建立自律的心態，希望讓生活不僅規律，也不失彈性與有趣的新體驗","experience":{"title":"經驗","payload":[{"company":"百星科技","duration":"2018.12-now","jobTitle":"UI/UX 設計師","color":"cyan","projects":[{"title":"ERP按需生產系統","content":"為公司列印業務，整合線下工廠設備與生產流程，將流程資訊轉移至線上，收集生產數據，透過分析，改善流程問題與提高生產效率"},{"title":"列印驅動服務","content":"整合列印設備，透過線上整合資料傳輸與渲染，直接驅動線下列印設備生產"}]}]},"skills":{"title":"工具","payload":[{"name":"UI / UX","items":["Figma","Sketch"]},{"name":"2D","items":["PS ","AI"]},{"name":"協作工具","items":["Miro","Invition","Versions"]},{"name":"前端","items":["Html","Css"]}]},"connection":{"title":"聯絡","payload":[{"name":"email","content":"exj212@gmail.com","icon":"mdi-email"},{"name":"linkin","content":"chadliao","icon":"mdi-linkedin"}]}}')},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dd99:function(t,e,n){}});
//# sourceMappingURL=app.98526a6a.js.map