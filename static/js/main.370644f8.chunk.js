(this["webpackJsonpkivid-affiliates"]=this["webpackJsonpkivid-affiliates"]||[]).push([[1],{55:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=55},56:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=56},57:function(e,t,n){var c={"./ion-icon.entry.js":[82,12]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=57,e.exports=r},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),a=n(30),i=n.n(a),s=n(20),o=n(12),l=n(46),j=(n(66),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(76),n(18)),u=n(2),d=n.n(u),b=n(4),h=n(14),O=n(49),x=n(37),p="kivid-affiliates:token",f=function(){return localStorage[p]},v=function(e){return localStorage[p]=e},m=["headers"],g={headers:{"Content-Type":"application/json",Accept:"application/json","App-Type":2}},w=function(e){401===e.status&&(localStorage.removeItem(p),window.location.reload())},k=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c,r,a,i,s,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},c=n.headers,r=Object(x.a)(n,m),(a=f())&&(g.headers.Authorization="Bearer ".concat(a)),e.next=5,fetch(t,Object(j.a)({headers:Object(j.a)(Object(j.a)({},g.headers),c)},r));case 5:return i=e.sent,console.log({response:i}),e.next=9,i.json();case 9:if(s=e.sent,w(i),i.ok||401===i.status){e.next=13;break}throw new Error(s.message);case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return k(e)},N=function(e,t){return k(e,{method:"POST",body:JSON.stringify(t)})},S=function(e){return{get:function(t){return y("".concat(e,"/").concat(t))},getAll:function(){return y("".concat(e))},create:function(t){return N("".concat(e),t)},post:function(t){return N("".concat(e),t)},save:function(t,n){return function(e,t){return k(e,{method:"PUT",body:JSON.stringify(t)})}("".concat(e,"/").concat(t),n)},update:function(t,n){return function(e,t){return k(e,{method:"PATCH",body:JSON.stringify(t)})}("".concat(e,"/").concat(t),n)},remove:function(t){return n="".concat(e,"/").concat(t),k(n,{method:"DELETE"});var n}}},z={users:function(){return"https://back.kivid.com.br/api/users"},user:function(){return"https://back.kivid.com.br/api/user"},auth:function(){return"https://back.kivid.com.br/api/auth"},signIn:function(){return"".concat(z.auth(),"/login")},signUp:function(){return"".concat(z.auth(),"/sign-up")},signOut:function(){return"".concat(z.auth(),"/logout")},sales:function(){return"https://back.kivid.com.br/api/affiliate-invitations"}},C=(S(z.users),function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(z.signIn(),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(z.signUp(),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=f(),t=Object(O.a)(e?z.user():null,k,{refreshInterval:0}),n=t.data,c=t.error,r=t.mutate,a=t.isValidating,i=null===n||void 0===n?void 0:n.data;console.log({user:i});var s=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return n=e.sent,v(n.access_token),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){return y(z.sales())};return{data:n,mutate:r,user:null===n||void 0===n?void 0:n.data,isValidating:a,isLoading:!c&&!(null===n||void 0===n?void 0:n.data),token:e,signUp:o,signIn:s,getSalesList:l}},I=n(11),D=function(){var e=E().signUp,t=Object(c.useState)({name:"",email:"",password:""}),n=Object(h.a)(t,2),r=n[0],a=n[1],i=function(){var t=Object(b.a)(d.a.mark((function t(n,c){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(c),t.next=4,e(c);case 4:r=t.sent,console.log({userCreated:r});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(I.jsxs)(o.o,{children:[Object(I.jsx)(o.j,{children:Object(I.jsxs)(o.w,{children:[Object(I.jsx)(o.v,{children:"Cadastro"}),Object(I.jsx)(o.d,{slot:"start",children:Object(I.jsx)(o.b,{text:"Login"})})]})}),Object(I.jsxs)(o.h,{fullscreen:!0,children:[Object(I.jsx)(o.j,{collapse:"condense",children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{size:"large",children:"Cadastro"})})}),Object(I.jsxs)("form",{className:"ion-margin-top ion-margin-bottom",onSubmit:function(e){return i(e,r)},children:[Object(I.jsxs)(o.m,{children:[Object(I.jsx)(o.n,{position:"floating",children:"Nome"}),Object(I.jsx)(o.l,{type:"text",value:null===r||void 0===r?void 0:r.name,onIonChange:function(e){return a(Object(j.a)(Object(j.a)({},r),{},{name:e.detail.value}))},autocapitalize:"words",autocomplete:"name",required:!0})]}),Object(I.jsxs)(o.m,{children:[Object(I.jsx)(o.n,{position:"floating",children:"E-mail"}),Object(I.jsx)(o.l,{type:"email",value:null===r||void 0===r?void 0:r.email,onIonChange:function(e){return a(Object(j.a)(Object(j.a)({},r),{},{email:e.detail.value}))},autocomplete:"email",required:!0})]}),Object(I.jsxs)(o.m,{children:[Object(I.jsx)(o.n,{position:"floating",children:"Senha"}),Object(I.jsx)(o.l,{type:"text",value:null===r||void 0===r?void 0:r.password,onIonChange:function(e){return a(Object(j.a)(Object(j.a)({},r),{},{password:e.detail.value}))},autocomplete:"new-password",required:!0})]}),Object(I.jsxs)("div",{className:"ion-margin-top ion-padding",children:[Object(I.jsx)(o.c,{type:"submit",expand:"block",shape:"round",size:"large",children:"Cadastrar"}),Object(I.jsx)(o.r,{className:"ion-justify-content-center ion-margin-top",children:Object(I.jsx)(o.c,{type:"button",fill:"clear",shape:"round",size:"small",routerLink:"/login",routerDirection:"back",children:"J\xe1 tenho conta"})})]})]})]})]})},T=n(29),_=function(){var e=E().user;return Object(I.jsxs)(o.o,{children:[Object(I.jsx)(o.j,{children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{children:null===e||void 0===e?void 0:e.nickname})})}),Object(I.jsxs)(o.h,{fullscreen:!0,children:[Object(I.jsx)(o.j,{collapse:"condense",children:Object(I.jsx)(o.w,{children:Object(I.jsxs)(o.v,{size:"large",children:["Ol\xe1, ",null===e||void 0===e?void 0:e.nickname,"."]})})}),Object(I.jsx)(o.e,{children:Object(I.jsx)(o.f,{className:"py-6 px-7",children:Object(I.jsxs)("div",{className:"flex items-center justify-between",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("div",{className:"text-base",children:"Seu c\xf3digo de vendedor"}),Object(I.jsx)("div",{className:"text-white text-2xl mt-1",style:{letterSpacing:"0.05em"},children:Object(I.jsx)("b",{children:null===e||void 0===e?void 0:e.id})})]}),Object(I.jsx)(o.k,{icon:T.c,color:"medium",className:"text-5xl ml-6 opacity-20",style:{"--ionicon-stroke-width":16}})]})})})]})]})},U=function(){var e=E().getSalesList,t=Object(c.useState)(null),n=Object(h.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){Object(b.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:n=t.sent,c=n.data,console.log({sales:c}),a(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}),[]);var i=function(e){return new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format(e)};return Object(I.jsxs)(o.o,{children:[Object(I.jsx)(o.j,{children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{children:"Vendas"})})}),Object(I.jsxs)(o.h,{fullscreen:!0,children:[Object(I.jsx)(o.j,{collapse:"condense",children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{size:"large",children:"Vendas"})})}),Object(I.jsxs)("section",{className:"ion-padding",children:[Object(I.jsxs)("div",{children:["Quantidade de vendas: ",Object(I.jsx)("b",{children:(null===r||void 0===r?void 0:r.length)||0})]}),Object(I.jsxs)("div",{className:"mt-1",children:["Total recebido: ",Object(I.jsx)("b",{children:(null===r||void 0===r?void 0:r.length)&&function(){var e=null===r||void 0===r?void 0:r.reduce((function(e,t){return e+.1*t.plan_type.price}),0);return i(e)}()||0})]})]}),Object(I.jsx)("section",{className:"my-4",children:(null===r||void 0===r?void 0:r.map((function(e){return Object(I.jsx)(o.e,{children:Object(I.jsx)(o.f,{className:"p-4",children:Object(I.jsxs)(o.i,{children:[Object(I.jsx)(o.r,{children:Object(I.jsxs)(o.g,{size:"12",children:[Object(I.jsx)("p",{children:"Nome do cliente"}),Object(I.jsx)("p",{className:"text-white",children:e.buyer.name})]})}),Object(I.jsxs)(o.r,{children:[Object(I.jsxs)(o.g,{size:"6",children:[Object(I.jsx)("p",{children:"Plano comprado"}),Object(I.jsx)("p",{className:"text-white",children:e.plan_type.name})]}),Object(I.jsxs)(o.g,{size:"6",children:[Object(I.jsx)("p",{children:"Valor do plano"}),Object(I.jsx)("p",{className:"text-white",children:i(e.plan_type.price)})]})]}),Object(I.jsxs)(o.r,{children:[Object(I.jsxs)(o.g,{size:"6",children:[Object(I.jsx)("p",{children:"Data da compra"}),Object(I.jsx)("p",{className:"text-white",children:new Date(e.created_at).toLocaleDateString()})]}),Object(I.jsxs)(o.g,{size:"6",children:[Object(I.jsx)("p",{children:"Valor do recebido"}),Object(I.jsxs)("p",{className:"text-white",children:[10,"% (",(t=e.plan_type.price,i(.1*t)),")"]})]})]})]})})},e.id);var t})))||Object(I.jsx)("div",{className:"ion-padding",children:"Voc\xea n\xe3o tem vendas realizadas."})})]})]})},P=function(){return Object(I.jsxs)(o.o,{children:[Object(I.jsx)(o.j,{children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{children:"Tab 3"})})}),Object(I.jsxs)(o.h,{fullscreen:!0,children:[Object(I.jsx)(o.j,{collapse:"condense",children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{size:"large",children:"Tab 3"})})}),Object(I.jsx)("section",{})]})]})},F=function(){var e=Object(s.f)();return Object(I.jsxs)(o.u,{children:[Object(I.jsxs)(o.q,{children:[Object(I.jsx)(s.b,{exact:!0,path:"".concat(e.path,"/tab1"),children:Object(I.jsx)(_,{})}),Object(I.jsx)(s.b,{exact:!0,path:"".concat(e.path,"/tab2"),children:Object(I.jsx)(U,{})}),Object(I.jsx)(s.b,{path:"".concat(e.path,"/tab3"),children:Object(I.jsx)(P,{})}),Object(I.jsx)(s.b,{exact:!0,path:e.path,children:Object(I.jsx)(s.a,{to:"".concat(e.path,"/tab1")})})]}),Object(I.jsxs)(o.s,{slot:"bottom",children:[Object(I.jsxs)(o.t,{tab:"tab1",href:"".concat(e.path,"/tab1"),children:[Object(I.jsx)(o.k,{icon:T.b}),Object(I.jsx)(o.n,{children:"In\xedcio"})]}),Object(I.jsxs)(o.t,{tab:"tab2",href:"".concat(e.path,"/tab2"),children:[Object(I.jsx)(o.k,{icon:T.a}),Object(I.jsx)(o.n,{children:"Vendas"})]}),Object(I.jsxs)(o.t,{tab:"tab3",href:"".concat(e.path,"/tab3"),children:[Object(I.jsx)(o.k,{icon:T.d}),Object(I.jsx)(o.n,{children:"Perfil"})]})]})]})},V=function(){var e=E().signIn,t=Object(s.e)(),n=Object(c.useState)({email:"",password:""}),r=Object(h.a)(n,2),a=r[0],i=r[1],l=function(){var n=Object(b.a)(d.a.mark((function n(c,r){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),console.log(r),n.prev=2,n.next=5,e(r);case 5:a=n.sent,console.log({response:a}),t.replace("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),alert(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,t){return n.apply(this,arguments)}}();return Object(I.jsxs)(o.o,{children:[Object(I.jsx)(o.j,{children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{children:"Login"})})}),Object(I.jsxs)(o.h,{fullscreen:!0,children:[Object(I.jsx)(o.j,{collapse:"condense",children:Object(I.jsx)(o.w,{children:Object(I.jsx)(o.v,{size:"large",children:"Login"})})}),Object(I.jsxs)("form",{className:"ion-margin-top ion-margin-bottom",onSubmit:function(e){return l(e,a)},children:[Object(I.jsxs)(o.m,{children:[Object(I.jsx)(o.n,{position:"floating",children:"E-mail"}),Object(I.jsx)(o.l,{type:"email",name:"email",value:null===a||void 0===a?void 0:a.email,onIonChange:function(e){return i(Object(j.a)(Object(j.a)({},a),{},{email:e.detail.value}))},autocomplete:"email",required:!0})]}),Object(I.jsxs)(o.m,{children:[Object(I.jsx)(o.n,{position:"floating",children:"Senha"}),Object(I.jsx)(o.l,{type:"password",value:null===a||void 0===a?void 0:a.password,onIonChange:function(e){return i(Object(j.a)(Object(j.a)({},a),{},{password:e.detail.value}))},autocomplete:"current-password",name:"password",required:!0})]}),Object(I.jsxs)("div",{className:"ion-margin-top ion-padding",children:[Object(I.jsx)(o.c,{type:"submit",expand:"block",shape:"round",size:"large",children:"Entrar"}),Object(I.jsx)(o.r,{className:"ion-justify-content-center ion-margin-top",children:Object(I.jsx)(o.c,{type:"button",fill:"clear",shape:"round",size:"small",routerLink:"/cadastro",children:"N\xe3o tenho conta"})})]})]})]})]})},q=["children"],J=function(e){var t=e.children,n=Object(x.a)(e,q);return Object(I.jsx)(s.b,Object(j.a)(Object(j.a)({},n),{},{children:f()?t:Object(I.jsx)(s.a,{to:"/login"})}))};Object(o.F)();var A=function(){var e=E().token;return Object(I.jsx)(o.a,{children:Object(I.jsx)(l.a,{children:Object(I.jsxs)(o.q,{children:[Object(I.jsx)(s.b,{exact:!0,path:"/cadastro",children:Object(I.jsx)(D,{})}),Object(I.jsx)(s.b,{exact:!0,path:"/login",children:e?Object(I.jsx)(s.a,{to:"/"}):Object(I.jsx)(V,{})}),Object(I.jsx)(J,{path:"/home",children:Object(I.jsx)(F,{})}),Object(I.jsx)(s.b,{exact:!0,path:"/",children:Object(I.jsx)(s.a,{to:"/home"})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(14).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[78,2,3]]]);
//# sourceMappingURL=main.370644f8.chunk.js.map