(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),r=n.n(c),i=(n(15),n(2)),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&t((function(e){return[r].concat(Object(s.a)(e))}))},children:Object(u.jsx)("input",{type:"text",placeholder:"Ingresa una categoria",value:r,onChange:function(e){o(e.target.value)}})})},d=n(7),j=n(6),l=n.n(j),b=n(9),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Ftmx0ADU6kkfDNb7tRGbwbieRvlpdZc0",e.next=3,fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("Ftmx0ADU6kkfDNb7tRGbwbieRvlpdZc0","&q=").concat(encodeURI(t),"&limit=10"));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,c=a.data,r=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=f,p=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),1e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash animate__slower\t3s",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.createElement)(p,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))}))})]})},h=function(){var e=Object(a.useState)(["Hunter X"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3f1a41de.chunk.js.map