(this["webpackJsonphuman-node"]=this["webpackJsonphuman-node"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(147),c=a(1),s=a.n(c),i=a(43),r=a.n(i),o=a(34),l=(a(94),a(6)),d=a(30),j=a(9),b=a(149),m=a(0);function h(e){var t=e.children,a=void 0===t?"":t;return Object(m.jsx)("div",{id:"page_container",className:"flex-grow flex flex-col justify-center items-stretch",children:a})}function u(){return Object(m.jsx)("div",{})}var x=a(20),O=a(150),v=a(145),p=a(139),g=a(148),f=["className","children","shadow","component","align","bold","span"];function N(e){var t,a=e.className,n=void 0===a?"":a,c=e.children,s=void 0===c?"":c,i=e.shadow,r=void 0!==i&&i,o=e.component,d=void 0===o?"div":o,j=e.align,b=e.bold,h=void 0!==b&&b,u=e.span,O=void 0!==u&&u,v=Object(x.a)(e,f);return Object(m.jsx)(g.a,Object(l.a)(Object(l.a)({},v),{},{component:O?"span":d,align:j,className:"".concat(r?"filter drop-shadow":"","\n      text-").concat(null!==(t=null===v||void 0===v?void 0:v.color)&&void 0!==t?t:"","\n      ").concat(n," "),fontWeight:h?"bold":"",children:s}))}var S=["to","target","children","variant","color","className","fullWidth","textVariant"];function y(e){var t=e.to,a=void 0===t?"#":t,n=e.target,c=void 0===n?"":n,s=e.children,i=void 0===s?"":s,r=(e.variant,e.color,e.className),o=void 0===r?"":r,l=(e.fullWidth,e.textVariant),j=(Object(x.a)(e,S),!String(a).includes("http")),b="string"===typeof i?Object(m.jsx)(N,{color:"inherit",variant:l,children:i}):i;return j?Object(m.jsx)(d.b,{to:a,target:c,className:"".concat(o),children:b}):Object(m.jsx)("a",{href:a,target:c,rel:"_blank"===c?"noreferrer noopener":"",className:"".concat(o),children:b})}var w=a(14);function z(e){var t=e.children,a=void 0===t?"":t,n=e.to,c=void 0===n?"#":n,s=e.size,i=void 0===s?"medium":s,r=e.className,o=void 0===r?"":r,l=e.startIcon,d=void 0===l?"":l,j=c===Object(w.f)().pathname;return Object(m.jsx)(y,{to:c,children:Object(m.jsxs)(N,{variant:"small"===i?"h5":"h4",className:"\n          flex items-center\n          uppercase cursor-pointer\n          border-b ".concat(j?"border-white":"border-transparent"," hover:border-white\n          transition-all duration-200\n          py-1 pl-2\n          ").concat(o,"\n        "),children:[d&&Object(m.jsx)("div",{className:"mr-2",children:d}),a]})})}var T=a.p+"static/media/logo-white.c23a725f.svg",A=a.p+"static/media/logo.583960b7.svg",I="HUM\u0394NODE",k=["src","title","alt"];function P(e){var t=e.src,a=void 0===t?"":t,n=e.title,c=void 0===n?"":n,s=e.alt,i=void 0===s?"":s,r=Object(x.a)(e,k);return Object(m.jsx)("img",Object(l.a)({src:null!==a&&void 0!==a?a:"",alt:i||c||I},r))}function F(e){var t=e.variant,a=void 0===t?"image":t,n=e.color,c=void 0===n?"primary":n;return Object(m.jsx)(y,{to:"/",children:"image"===a?Object(m.jsx)(P,{src:"white"===c?T:A,alt:I,className:"sm-max:w-11 sm-max:h-11"}):Object(m.jsx)(N,{variant:"h3",className:"uppercase",children:I})})}function E(){return Object(m.jsx)("div",{className:"fixed w-screen pt-10",children:Object(m.jsx)(b.a,{maxWidth:"xl",children:Object(m.jsxs)(v.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(m.jsx)(v.a,{item:!0,sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:Object(m.jsx)(z,{to:"/about",children:"About"})}),Object(m.jsx)(v.a,{item:!0,className:"absolute left-0 w-full",children:Object(m.jsxs)(p.a,{justifyContent:"space-between",alignItems:"center",spacing:2,children:[Object(m.jsx)(F,{}),Object(m.jsx)(F,{variant:"text"})]})}),Object(m.jsx)(v.a,{item:!0,sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:Object(m.jsx)(z,{to:"/network",children:"Network"})})]})})})}var C=["isAuth"];function H(e){e.isAuth,Object(x.a)(e,C);return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)(O.a,{}),Object(m.jsx)(E,{})]})}var B=a(25),W=a(141),_=a(142),U=a(151),D=a(152);function M(e){var t=e.children,a=void 0===t?"":t,n=e.background,c=void 0===n?"head-top":n,s=e.showHome,i=void 0!==s&&s,r=String(c).split(" "),o=Object(B.a)(r,2),l=o[0],d=o[1];return Object(m.jsxs)("div",{className:"relative bg-".concat(d," bg-center bg-fixed bg-no-repeat bg-120 sm:bg-185"),children:[i&&Object(m.jsx)(b.a,{maxWidth:"xl",className:"",children:Object(m.jsxs)(U.a,{sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:[Object(m.jsx)("div",{className:"absolute top-1/2 sm-max:hidden",children:Object(m.jsx)(z,{size:"small",className:"opacity-40",startIcon:Object(m.jsx)(W.a,{}),to:"/",children:"Home"})}),Object(m.jsx)("div",{className:"absolute left-0 bottom-12 w-full flex justify-center sm:hidden",children:Object(m.jsx)(y,{to:"/",children:Object(m.jsx)(D.a,{size:"small",children:Object(m.jsx)(_.a,{fontSize:"large"})})})})]})}),Object(m.jsxs)("div",{className:"\n          relative\n          min-h-screen\n          sm:bg-".concat(l," bg-").concat(l,"-sm\n          bg-cover bg-center bg-fixed\n          flex flex-col items-stretch\n          overflow-x-hidden\n          scroll-thumb\n          transition-all duration-300\n        "),children:[Object(m.jsx)("div",{className:"bg-head-top sm:bg-head-top sm-max:bg-head-top"}),Object(m.jsx)("div",{className:"bg-head-top-sm sm:bg-head-top-sm sm-max:bg-head-top-sm"}),Object(m.jsx)("div",{className:"bg-head-eye sm:bg-head-eye sm-max:bg-head-eye"}),Object(m.jsx)("div",{className:"bg-head-eye-sm sm:bg-head-eye-sm sm-max:bg-head-eye-sm"}),Object(m.jsx)("div",{className:"bg-head-eye-rect-sm sm:bg-head-eye-rect-sm sm-max:bg-head-eye-rect-sm"}),Object(m.jsx)("div",{className:"bg-rect-01 sm:bg-rect-01 sm-max:bg-rect-01"}),Object(m.jsx)("div",{className:"bg-rect-02 sm:bg-rect-02 sm-max:bg-rect-02"}),Object(m.jsx)("div",{className:"bg-rect-03 sm:bg-rect-03 sm-max:bg-rect-03"}),a]})]})}function R(e){var t=e.children,a=void 0===t?"":t,n=e.maxWidth,c=void 0===n?"md":n,s=e.background,i=void 0===s?"head-top":s,r=e.showHome,l=void 0!==r&&r,d=Object(o.b)((function(e){var t;return null===e||void 0===e||null===(t=e.auth)||void 0===t?void 0:t.isAuth}));return Object(m.jsxs)(M,{background:i,showHome:l,children:[Object(m.jsx)(H,{isAuth:d}),Object(m.jsx)(h,{children:Object(m.jsx)(b.a,{maxWidth:c,children:a})}),Object(m.jsx)(u,{})]})}var J=a(146),L=a.p+"static/media/rect-01-sm.d7f709c6.svg";function Y(){return Object(m.jsxs)(p.a,{spacing:3,alignItems:"center",className:"w-full",children:[Object(m.jsxs)(v.a,{container:!0,spacing:10,justifyContent:"center",children:[Object(m.jsxs)(v.a,{item:!0,children:[Object(m.jsx)(N,{className:"py-6",variant:"h4",children:"TESTNET"}),Object(m.jsx)(N,{className:"opacity-20",variant:"h5",children:"OCT 2021"})]}),Object(m.jsx)(v.a,{item:!0,children:Object(m.jsx)(P,{src:L})}),Object(m.jsxs)(v.a,{item:!0,children:[Object(m.jsx)(N,{className:"py-6",variant:"h4",children:"MAINNET"}),Object(m.jsx)(N,{className:"opacity-20",variant:"h5",children:"JUN 2022"})]})]}),Object(m.jsx)(N,{className:"py-4",variant:"h4",children:"FULL DECENTRALIZATION"}),Object(m.jsx)(N,{className:"opacity-20 pb-4",variant:"h5",children:"JUN 2026"}),Object(m.jsx)(J.a,{variant:"outlined",color:"inherit",children:Object(m.jsx)("span",{className:"px-16",children:"See More"})})]})}var V=a.p+"static/media/papersButton.81c6a95f.svg",G=a.p+"static/media/papersButtonSm.d959edb4.svg";function K(){return Object(m.jsx)("div",{className:"cursor-pointer filter hover:blur transition-all duration-300",children:Object(m.jsxs)(y,{to:"/paper",children:[Object(m.jsx)("div",{className:"sm-max:hidden",children:Object(m.jsx)(P,{src:V,alt:"Papers"})}),Object(m.jsx)("div",{className:"sm:hidden",children:Object(m.jsx)(P,{src:G,alt:"Papers"})})]})})}var Z=a.p+"static/media/pathButton.d14424df.svg",q=a.p+"static/media/pathButtonSm.e70d6c81.svg";function Q(){return Object(m.jsx)("div",{className:"cursor-pointer filter hover:blur transition-all duration-300",children:Object(m.jsxs)(y,{to:"#",children:[Object(m.jsx)("div",{className:"sm-max:hidden",children:Object(m.jsx)(P,{src:Z,alt:"Path"})}),Object(m.jsx)("div",{className:"sm:hidden",children:Object(m.jsx)(P,{src:q,alt:"Papers"})})]})})}var X=a.p+"static/media/testNetButton.e712d103.svg",$=a.p+"static/media/testNetButtonSm.c079778d.svg";function ee(){return Object(m.jsx)("div",{className:"cursor-pointer filter hover:blur transition-all duration-300",children:Object(m.jsxs)(y,{to:"#",children:[Object(m.jsx)("div",{className:"sm-max:hidden",children:Object(m.jsx)(P,{src:X,alt:"TestNet"})}),Object(m.jsx)("div",{className:"sm:hidden",children:Object(m.jsx)(P,{src:$,alt:"Papers"})})]})})}function te(){return Object(m.jsx)("div",{className:"sm-max:absolute bottom-12 w-full",children:Object(m.jsxs)(v.a,{container:!0,justifyContent:"center",alignItems:"center",children:[Object(m.jsx)(v.a,{item:!0,className:"pr-4",children:Object(m.jsx)(K,{})}),Object(m.jsx)(v.a,{item:!0,className:"px-4",children:Object(m.jsx)(Q,{})}),Object(m.jsx)(v.a,{item:!0,className:"pl-4",children:Object(m.jsx)(ee,{})})]})})}function ae(){return Object(m.jsx)(R,{children:Object(m.jsx)(te,{})})}function ne(){return Object(m.jsxs)(v.a,{container:!0,justifyContent:"center",children:[Object(m.jsx)(v.a,{item:!0,className:"px-10",children:Object(m.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(m.jsx)(N,{className:"pb-10",color:"primary",variant:"h4",children:"COMMUNITY:"}),Object(m.jsx)(z,{size:"small",children:"Twitter"}),Object(m.jsx)(z,{size:"small",children:"Telegram"}),Object(m.jsx)(z,{size:"small",children:"Reddit"}),Object(m.jsx)(z,{size:"small",children:"Github"}),Object(m.jsx)(z,{size:"small",children:"Youtube"})]})}),Object(m.jsx)(v.a,{item:!0,className:"px-10",children:Object(m.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(m.jsx)(N,{className:"pb-10",color:"primary",variant:"h4",children:"UPDATES:"}),Object(m.jsx)(z,{size:"small",children:"Blog"}),Object(m.jsx)(z,{size:"small",children:"Forum"})]})}),Object(m.jsx)(v.a,{item:!0,className:"px-10",children:Object(m.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(m.jsx)(N,{className:"pb-10",color:"primary",variant:"h4",children:"WRITE TO:"}),Object(m.jsx)(z,{size:"small",children:"core@humanode.io"})]})})]})}function ce(){return Object(m.jsxs)(v.a,{container:!0,spacing:10,justifyContent:"center",children:[Object(m.jsx)(v.a,{item:!0,children:Object(m.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(m.jsx)(N,{className:"pb-10",color:"primary",variant:"h4",children:"PAPERS"}),Object(m.jsx)(z,{size:"small",children:"WhitePaper"}),Object(m.jsx)(z,{size:"small",children:"LightPaper"})]})}),Object(m.jsx)(v.a,{item:!0,children:Object(m.jsxs)(p.a,{spacing:3,alignItems:"flex-start",children:[Object(m.jsx)(N,{className:"pb-10",color:"primary",variant:"h4",children:"TL;DR"}),Object(m.jsx)(z,{size:"small",children:"one-paper"}),Object(m.jsx)(z,{size:"small",children:"factSheet"}),Object(m.jsx)(z,{size:"small",children:"deck"})]})})]})}var se=[{path:"/",exact:!0,auth:!1,component:ae},{path:"/network",exact:!0,auth:!1,component:function(){return Object(m.jsx)(R,{background:"head-eye",maxWidth:"xl",showHome:!0,children:Object(m.jsx)(ne,{})})}},{path:"/paper",exact:!0,auth:!1,component:function(){return Object(m.jsx)(R,{background:"head-eye rect-01",maxWidth:"xl",showHome:!0,children:Object(m.jsx)(ce,{})})}},{path:"/about",exact:!0,auth:!1,component:function(){return Object(m.jsx)(R,{background:"head-eye rect-03",maxWidth:"xl",showHome:!0,children:Object(m.jsx)(Y,{})})}}],ie=[{path:"/home",exact:!0,auth:!0,component:ae}],re=[].concat(Object(j.a)(se),Object(j.a)(ie)),oe=["component"],le=function(e){var t=e.component,a=Object(x.a)(e,oe),n=Object(o.b)((function(e){var t;return Boolean(null===e||void 0===e||null===(t=e.auth)||void 0===t?void 0:t.isAuth)}));return Object(m.jsx)(w.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return n?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(t,Object(l.a)({},e))}):Object(m.jsx)(w.a,{to:{pathname:"/",state:{from:e.location}}})}}))},de=["component"],je=function(e){var t=e.component,a=Object(x.a)(e,de);return Object(m.jsx)(w.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(t,Object(l.a)({},e))})}}))},be=["component","fallback","isAuthenticated"],me=function(e){var t=e.component,a=e.fallback,n=e.isAuthenticated,c=Object(x.a)(e,be);return Object(m.jsx)(w.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return n?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(t,Object(l.a)({},e))}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(a,Object(l.a)({},e))})}}))};var he=function(){return Object(m.jsx)(d.a,{basename:"/",children:re.map((function(e){return e.auth&&e.fallback?Object(m.jsx)(me,Object(l.a)({},e),e.path):e.auth?Object(m.jsx)(le,Object(l.a)({},e),e.path):Object(m.jsx)(je,Object(l.a)({},e),e.path)}))})},ue=(a(99),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))}),xe=a(57);function Oe(e){try{JSON.parse(e)}catch(t){return!1}return!0}function ve(e){if(!Oe(e))return!1;var t=JSON.parse(e);return(null===t||void 0===t?void 0:t.length)>=0}var pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Boolean(t)?ve(String(e))?String(e):"[]":Oe(String(e))?String(e):"{}"},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return JSON.parse(pe(e,t))},fe="YYYY-MM-DD HH:mm:ss",Ne=a(48),Se=a.n(Ne),ye=localStorage.getItem("access_token");Se.a.defaults.headers.common.Authorization="Bearer ".concat(ye),Se.a.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&Ye.dispatch("RESET_AUTH"),Promise.reject(e)}));var we,ze,Te,Ae,Ie=Se.a,ke=a(75),Pe=a(56),Fe=a.n(Pe),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t?"function"===typeof t?t(e):Object(ke.isObject)(t)?Object(l.a)(Object(l.a)({},e),t):e:e},Ce=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Fe()(null===t||void 0===t?void 0:t.expire_at,fe,!0).isAfter(Fe()()),n=null!==(e=null===t||void 0===t?void 0:t.token)&&void 0!==e?e:"";return a&&(Ie.defaults.headers.common.Authorization="Bearer ".concat(n)),Object(l.a)(Object(l.a)({},t),{},{isAuth:a})},He={},Be=Object(l.a)(Object(l.a)({},He),null!==(we=null===(ze=ge(localStorage.getItem(I)))||void 0===ze?void 0:ze.app)&&void 0!==we?we:{}),We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,c=void 0===n?null:n;switch(a){case"SET_APP":case"UPDATE_APP":return Ce(Ee(e,c));case"RESET_APP":return He;default:return e}},_e=a(76),Ue={user:{},isAuth:!1,token:""},De=Object(l.a)(Object(l.a)({},Ue),null!==(Te=null===(Ae=ge(localStorage.getItem(I)))||void 0===Ae?void 0:Ae.auth)&&void 0!==Te?Te:{}),Me=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,a=null!==(e=null===t||void 0===t?void 0:t.token)&&void 0!==e?e:"";if(a){var n,c=Object(_e.a)(a,{complete:!0}),s=new Date,i=c.exp>s.getTime()/1e3,r=4===(null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.user_type_id);if(i&&a&&r)return Object(l.a)(Object(l.a)({},null!==t&&void 0!==t?t:Ue),{},{isAuth:!0})}return t},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,c=void 0===n?null:n;switch(a){case"SET_AUTH":case"UPDATE_AUTH":return Ce(Ee(e,c));case"CHECK_AUTH":return Me(e,c);case"RESET_AUTH":return Ue;default:return e}},Je={auth:Re,app:We},Le=Object(xe.b)(Object(xe.a)(Je));Le.subscribe((function(){var e=Le.getState();window.sessionStorage.setItem("mya-store",JSON.stringify(e))}));var Ye=Le,Ve=a(5),Ge=a(77),Ke="#F8C16C",Ze="#C62A1F",qe=Object(Ge.a)(),Qe=Object(Ge.a)({palette:{mode:"dark",primary:{main:"#F8C16C",contrastText:"#FFFFFF"},secondary:{main:"#CB3939"},warning:{main:Ke},error:{main:Ze}},shape:{borderRadius:0},typography:{fontFamily:["Futura PT"],fontSize:14,fontWeightMedium:300,fontWeightRegular:300,letterSpacing:"0.1em",h2:Object(Ve.a)({fontSize:50,letterSpacing:"0.5em"},qe.breakpoints.down("sm"),{fontSize:15,letterSpacing:"0.5em"}),h3:Object(Ve.a)({fontSize:27,letterSpacing:"0.5em"},qe.breakpoints.down("sm"),{fontSize:14,letterSpacing:"0.5em"}),h4:Object(Ve.a)({fontSize:24,letterSpacing:"0.5em"},qe.breakpoints.down("sm"),{fontSize:13,letterSpacing:"0.5em"}),h5:Object(Ve.a)({fontSize:20,letterSpacing:"0.5em"},qe.breakpoints.down("sm"),{fontSize:13,letterSpacing:"0.5em"}),h6:Object(Ve.a)({fontSize:18},qe.breakpoints.down("sm"),{fontSize:13}),button:Object(Ve.a)({fontSize:16},qe.breakpoints.down("sm"),{fontSize:13}),body1:{fontSize:14},body2:{fontSize:14},caption:{fontSize:12}},components:{MuiButton:{styleOverrides:{root:{fontSize:14,fontWeight:400,letterSpacing:"0.15em"},sizeMedium:{padding:"23px 26px"},containedPrimary:{backgroundImage:"linear-gradient(96.04deg, ".concat(Ze," -14.31%, ").concat(Ke," 152.85%) ;")}}}}});r.a.render(Object(m.jsx)(o.a,{store:Ye,children:Object(m.jsx)(n.a,{theme:Qe,children:Object(m.jsx)(he,{})})}),document.getElementById("root")),ue()},94:function(e,t,a){},99:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.0a917d3c.chunk.js.map