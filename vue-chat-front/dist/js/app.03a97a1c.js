(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return l.p+"js/"+({chat:"chat",login:"login"}[e]||e)+"."+{chat:"da6ab05a",login:"764923f6"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={login:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({chat:"chat",login:"login"}[e]||e)+"."+{chat:"31d6cfe0",login:"1cf3c4c5"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";n("7db0"),n("c975"),n("a434"),n("b0c0");var r=n("2b0e"),o=n("2f62");r["a"].use(o["a"]);var a={state:{login:!1,user:null},mutations:{SET_LOGIN_USER:function(e,t){e.user=t,localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(t))},SET_LOGIN_USER_SOCKET:function(e,t){e.user.socket=t},SET_LOGIN:function(e,t){e.login=t}},getters:{getLoginUser:function(e){return e.user},getLogin:function(e){return e.login}}},s={state:{users:[]},mutations:{SET_USER:function(e,t){var n=e.users.find((function(e){return e.socket===t.socket}));"undefined"===typeof n&&e.users.push(t)},REMOVE_USER:function(e,t){var n=e.users.find((function(e){return e.socket===t})),r=e.users.indexOf(n);e.users.splice(r,1)}},getters:{getUsers:function(e){return e.users},getUser:function(e){return function(t){var n=e.users.find((function(e){return e.name===t.name}));if("undefined"!==typeof n)return n}},getUserBySocket:function(e){return function(t){var n=e.users.find((function(e){return e.socket===t}));if("undefined"!==typeof n)return n}}}},i={state:{messages:[]},mutations:{SET_MESSAGE:function(e,t){e.messages.push(t)}},getters:{getMessages:function(e){return e.messages}}},l=new o["a"].Store({modules:{login:a,users:s,messages:i}});t["a"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ChatHeader"),n("router-view"),n("div",{staticClass:"styx-chat__footer"})],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"styx-chat__header"},[n("AmparoLogo"),e.login?n("ChatLogged"):e._e()],1)},i=[],l=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"styx-chat__logged"},[n("div",{staticClass:"styx-chat__logged__avatar"},[n("img",{attrs:{src:e.user.avatar}})])])},u=[],f=n("2f62"),d={computed:Object(l["a"])({},Object(f["b"])({user:"getLoginUser"}))},v=d,h=n("2877"),g=Object(h["a"])(v,c,u,!1,null,"965af6d8",null),p=g.exports,m=n("b335"),b=n.n(m),y={components:{AmparoLogo:b.a,ChatLogged:p},computed:Object(l["a"])({},Object(f["b"])({login:"getLogin"}))},_=y,w=Object(h["a"])(_,s,i,!1,null,"0e1f0464",null),S=w.exports,E={components:{ChatHeader:S}},O=E,x=(n("5c0b"),Object(h["a"])(O,o,a,!1,null,null,null)),L=x.exports,j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc"),n("d3b7");var z=n("8c4f"),C=n("4360");r["a"].use(z["a"]);var k=[{path:"/",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/chat",name:"Chat",component:function(){return n.e("chat").then(n.bind(null,"293a"))},meta:{requiresAuth:!0}}],V=new z["a"]({mode:"history",base:"/",routes:k});V.beforeEach((function(e,t,n){var r=C["a"].getters.getLogin;e.matched.some((function(e){return e.meta.requiresAuth}))&&!r&&n("/"),n()}));var A=V;r["a"].config.productionTip=!1,new r["a"]({router:A,store:C["a"],render:function(e){return e(L)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b335:function(e,t,n){n("99af");var r=n("ded3"),o=n("4082");e.exports={functional:!0,render:function(e,t){var n=t._c,a=(t._v,t.data),s=t.children,i=void 0===s?[]:s,l=a.class,c=a.staticClass,u=a.style,f=a.staticStyle,d=a.attrs,v=void 0===d?{}:d,h=o(a,["class","staticClass","style","staticStyle","attrs"]);return n("svg",r({class:[l,c],style:[u,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 132.292 58.852",height:"222.434",width:"500"},v)},h),i.concat([n("path",{staticStyle:{"line-height":"normal","font-variant-ligatures":"normal","font-variant-position":"normal","font-variant-caps":"normal","font-variant-numeric":"normal","font-variant-alternates":"normal","font-feature-settings":"normal","text-indent":"0","text-align":"start","text-decoration-line":"none","text-decoration-style":"solid","text-decoration-color":"#000","text-transform":"none","text-orientation":"mixed","white-space":"normal","shape-padding":"0",isolation:"auto","mix-blend-mode":"normal","solid-color":"#000","solid-opacity":"1"},attrs:{d:"M45.4.016l-9.988 16.14H21.757l-.84.363-.877.379-.86.372h15.542L18.685 43.186 7.302 49.757l-.83.48-.6.747-4.264 5.31-1.474 1.837-.134.721 1.474-1.835L6.7 50.505l11.597-6.695 2.04-1.178.386-.624L36.033 17.27h7.25v3.167l-.7.774-7.964 22.93-9.153 5.81-1.35 2.012-1.081 1.61-.229.672-.047.14 1.357-2.022 1.51-2.248 9.253-5.877.095-.06.117-.337-.345.22.345-.22 7.153-20.597 1.04-1.147v6.981h.347V17.27h.644v11.81h1.123V17.27h.002v-1.114h-.002V2.864l.002-.004v-.726zm-1.125 3.935v12.205h-.644V4.992zm-.991 1.603V7.96l-.707.78-.295.867-.308.904-.301.887 1.61-1.778v6.536h-6.56z",color:"#000","font-weight":"400","font-family":"sans-serif",overflow:"visible"}}),n("path",{attrs:{d:"M49.065 16.124l-.233.26-1.652 1.843-1.123 1.253v9.597h1.123v-9.168l2.41-2.688 1.268 1.402v4.426l-.706.78-.295.866-.308.905-.302.887 1.611-1.779v4.369h.348v-10.07l.645.713v9.357h1.123v-9.168l2.31-2.578 1.172 1.294v4.409l-.706.779-.295.866-.308.905-.301.887 1.61-1.778v4.384h.347V19.009l.536.591.108.12v9.357h1.123v-8.633l-.998-1.103-.125-.138-1.93-2.132-.757-.838-.232.26-1.554 1.734-.999 1.114zM89.747 0L89.5.245 84.197 5.55l-1.123 1.123V22.404l1.123 1.123L89.5 28.83l.246.246.794-.794 2.025-2.026 6.113 17.604.345.22-.345-.22.117.337.095.06 9.254 5.877 1.51 2.248 1.357 2.021-.048-.139-.229-.672-1.08-1.61-1.35-2.011-9.154-5.811-6.312-18.176 2.723-2.724.347-.347.535-.535 1.123-1.123v-3.99 2.111l14 22.624.387.624 2.04 1.177 11.596 6.696 5.228 6.511 1.474 1.836-.134-.722-1.475-1.836-4.263-5.31-.6-.748-.83-.479-11.383-6.572L97.57 17.266h12.477l-.86-.372-.877-.379-.84-.363h-9.904V7.82l-1.123-1.123-.535-.535-.347-.347L90.541.794zm.738 1.23l5.077 5.077v9.845h-5.077V9.64l1.589 1.754-.302-.887-.308-.905-.295-.866-.684-.756zm-.39.01v14.912h-5.898V7.138zm5.814 5.414l.535.535v8.963h-.535zM84.197 17.266h5.898v10.57l-5.898-5.897zm6.288 0h5.077v5.504l-2.85 2.85-1.524-4.389-.703-.776zm5.424 0h.535v4.622l-.535.535zm-5.424 4.849l1.041 1.15.913 2.628-1.954 1.954zM62.462 16.207l-.246.246-.873.873-.348.348-.643.643-1.123 1.123v9.637h1.123V23.32l.643.708v5.048h.348V24.41l1.374 1.51.234.258.246-.246 2.2-2.2 1.123-1.123v-1.94l-1.123-1.234-2.18-2.397zm.51 1.078l2.425 2.667v3.29l-2.434 2.434-1.62-1.781v-4.981zm-1.977 1.976v4.251l-.643-.708v-2.899zM78.358 16.207l-.246.246-1.864 1.864-1.123 1.123v9.637h1.123V23.32l2.365 2.6.234.258.246-.246.372-.372 1.481 1.584v1.932h.348V25.874l-.348-.372-.687-.735 1.034-1.034 1.123-1.123v-1.94l-1.123-1.234-2.18-2.397zm.51 1.078l2.425 2.667v3.29l-1.271 1.271-3.774-4.036v-.572zm-2.62 4.836l2.98 3.186-.369.369-2.611-2.872zM70.41 16.207l-.246.246-1.864 1.864-1.123 1.123v9.637H68.3v-4.09h4.052v4.09h.347v-4.09h.644v4.091h1.123v-7.895l.003.004v-.517l-.003-.003-1.12-1.231-.647-.711-.347-.382-1.186-1.304zm.51 1.078l1.432 1.574v5.014H68.3v-3.968zm1.779 1.956l.644.708v3.924h-.644z"}})]))}}}});
//# sourceMappingURL=app.03a97a1c.js.map