(this["webpackJsonpwebdev-pub"]=this["webpackJsonpwebdev-pub"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(3),i=c.n(r),j=(c(13),c(0)),b=function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("h1",{children:"WebDev Hub"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{href:"/",children:"Home"}),Object(j.jsx)("a",{href:"/create",children:"New Book"})]})]})},a=c(4),o=function(e){var t=e.blogs;return Object(j.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(j.jsxs)("div",{className:"blog-preview",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("p",{children:["Written by ",e.author]}),Object(j.jsxs)("h3",{children:["Thumbnail ",e.thumbnail]})]},e.id)}))})},l=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://guarded-waters-84193.herokuapp.com/blogs").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{children:" Web Development Books Under One Roof "}),c&&Object(j.jsx)(o,{blogs:c})]})};var h=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(l,{})})]})};i.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.45a3106d.chunk.js.map