(this["webpackJsonpreact-cats"]=this["webpackJsonpreact-cats"]||[]).push([[0],{36:function(e,A,t){},37:function(e,A,t){},38:function(e,A,t){},40:function(e,A,t){},59:function(e,A,t){},60:function(e,A,t){},61:function(e,A,t){},67:function(e,A,t){},68:function(e,A,t){},69:function(e,A,t){"use strict";t.r(A);var c=t(1),s=t.n(c),n=t(29),a=t.n(n),r=(t(36),t(8)),i=(t(37),t(19)),l=t(13),j=(t(38),t(0)),d=function(e){var A=e.setCats,t=e.id,s=e.url,n=e.liked,a=Object(c.useState)(!0),i=Object(r.a)(a,2),d=i[0],b=i[1];Object(c.useEffect)((function(){var e=new Image;return e.src=s,e.addEventListener("load",(function(){return b(!1)})),function(){e.removeEventListener("load",(function(){return b(!1)}))}}),[s]);var u=Object(j.jsxs)("div",{style:{backgroundImage:"url("+s+")"},className:"cats__img-wrap",children:[Object(j.jsx)("div",{onClick:function(){A(n?function(e){var A=e.findIndex((function(e){return e.id===t})),c=e.slice();return c[A]=Object(l.a)(Object(l.a)({},c[A]),{},{liked:!1}),c}:function(e){var A=e.findIndex((function(e){return e.id===t})),c=e.slice();return c[A]=Object(l.a)(Object(l.a)({},c[A]),{},{liked:!0}),c})},className:n?"cats__heart liked":"cats__heart"}),Object(j.jsx)("div",{className:"cats__gradient"})]});return d?Object(j.jsx)("div",{className:"cats__placeholder",children:Object(j.jsx)("div",{className:"cats__placeholder-effect"})}):u},b=(t(40),t(30)),u=t.n(b),o=(t(59),function(){return Object(j.jsxs)("div",{className:"loader",children:[Object(j.jsx)("div",{className:"loader__1"}),Object(j.jsx)("div",{className:"loader__2"}),Object(j.jsx)("div",{className:"loader__3"}),Object(j.jsx)("div",{className:"loader__4"})]})}),f=function(e){var A,t=e.cats,s=e.setCats,n=e.page,a=e.setPage,l=Object(c.useRef)(n),b=Object(c.useState)(!1),f=Object(r.a)(b,2),v=f[0],h=f[1];return Object(c.useEffect)((function(){l.current===n&&0!==t.length||v||(h(!0),u.a.get("https://api.thecatapi.com/v1/images/search?size=med&limit=".concat(15,"&page=").concat(n),{headers:{"x-api-key":"16a45f53-5444-4cc2-9a01-5b27f1204950"}}).then((function(e){h(!1),s((function(A){var t=e.data.map((function(e){return{id:e.id,url:e.url,liked:!1}}));return[].concat(Object(i.a)(A),Object(i.a)(t))}))})))}),[n]),Object(c.useEffect)((function(){function e(e){var A=e.target.documentElement;v||A.scrollHeight-A.scrollTop-60<=A.clientHeight&&a(++n)}return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[v,n,a]),t.length>0&&(A=t.map((function(e){return Object(j.jsx)(d,{setCats:s,id:e.id,url:e.url,liked:e.liked},e.id)}))),Object(j.jsxs)("div",{className:"cats",children:[Object(j.jsx)("div",{className:"cats__container",children:A}),v||0===t.length?Object(j.jsx)(o,{}):null]})},v=(t(60),t(9)),h=(t(61),function(e){var A=e.setSelected,t=e.linkClass;var s=Object(c.useState)(!1),n=Object(r.a)(s,2),a=n[0],i=n[1];return Object(j.jsxs)("header",{className:"mobile",children:[Object(j.jsx)("div",{className:!0===a?"mobile__wrap mobile__wrap_show":"mobile__wrap",children:Object(j.jsxs)("ul",{className:"mobile__nav",children:[Object(j.jsx)("li",{onClick:function(){i((function(e){return!e})),A("/")},className:t("/"),children:Object(j.jsx)(v.b,{to:"/",children:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})}),Object(j.jsx)("li",{onClick:function(){i((function(e){return!e})),A("/liked-cats")},className:t("/liked-cats"),children:Object(j.jsx)(v.b,{to:"/liked-cats",children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})})]})}),Object(j.jsx)("div",{onClick:function(){return i((function(e){return!e}))},className:!0===a?"mobile__burger-wrap mobile__burger-wrap_active":"mobile__burger-wrap",children:Object(j.jsx)("div",{className:"mobile__burger"})}),Object(j.jsx)("div",{onClick:function(){return i((function(e){return!e}))},className:!0===a?"mobile__bg mobile__bg_show":"mobile__bg"})]})}),O=(t(67),function(e){var A=e.setSelected,t=e.linkClass;return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{onClick:function(){return A("/")},className:t("/"),children:Object(j.jsx)(v.b,{to:"/",children:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})}),Object(j.jsx)("li",{onClick:function(){return A("/liked-cats")},className:t("/liked-cats"),children:Object(j.jsx)(v.b,{to:"/liked-cats",children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"})})]})})})}),w=t(2),x=function(){var e=Object(w.e)(),A=Object(c.useState)(e.pathname),t=Object(r.a)(A,2),s=t[0],n=t[1];function a(e){return s===e?"nav__item selected":"nav__item"}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{setSelected:n,linkClass:a}),Object(j.jsx)(O,{setSelected:n,linkClass:a})]})},C=(t(68),function(e){var A,t=e.likedCats,c=e.setCats;return t.length>0&&(A=t.map((function(e){var A=e.id,t=e.url,s=e.liked;return Object(j.jsx)(d,{setCats:c,id:A,url:t,liked:s},A)}))),t.length>0?Object(j.jsx)("div",{className:"liked-cats__container",children:A}):Object(j.jsxs)("div",{className:"no-cats",children:[Object(j.jsx)("img",{className:"no-cats__img",src:"data:image/png;base64,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",alt:"cat"}),Object(j.jsx)("h2",{className:"no-cats__title",children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043a\u043e\u0442\u043e\u0432..."})]})});var Q=function(){var e=Object(c.useState)([]),A=Object(r.a)(e,2),t=A[0],s=A[1],n=Object(c.useState)(0),a=Object(r.a)(n,2),i=a[0],l=a[1],d=t.filter((function(e){return e.liked}));return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(v.a,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(w.a,{exact:!0,path:"/",children:Object(j.jsx)(f,{page:i,setPage:l,cats:t,setCats:s})}),Object(j.jsx)(w.a,{exact:!0,path:"/liked-cats",children:Object(j.jsx)(C,{setCats:s,likedCats:d})})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6ba49a2e.chunk.js.map