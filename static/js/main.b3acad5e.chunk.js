(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={title:"Statistics_title__3PVIg",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(e,t,n){e.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}},,function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,n){e.exports={message:"Notification_message__eciZi"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=(n(13),n(3)),o=n(7),l=n.n(o),j=n(0),u=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(j.jsx)("div",{children:n.map((function(e,n){return Object(j.jsx)("button",{type:"button",onClick:t,className:l.a.button,children:e},n)}))})},b=n(8),d=n.n(b),h=function(e){var t=e.message;return Object(j.jsx)("p",{className:d.a.message,children:t})},O=n(2),x=n.n(O),f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(j.jsxs)("ul",{className:x.a.list,children:[Object(j.jsxs)("li",{className:x.a.item,children:["Good: ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Neutral: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Bad: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Total: ",Object(j.jsx)("span",{children:a})]}),Object(j.jsxs)("li",{className:x.a.item,children:["Positive feedback: ",Object(j.jsxs)("span",{children:[i,"%"]})]})]})},m=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:x.a.title,children:"Statistics"}),0===a?Object(j.jsx)(h,{message:"No feedback given"}):Object(j.jsx)(f,{good:t,neutral:n,bad:c,total:a,positivePercentage:i})]})},g=n(5),p=n.n(g),v=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:p.a.container,children:[Object(j.jsx)("h2",{className:p.a.title,children:t}),n]})};var _=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),s=Object(r.a)(i,2),o=s[0],l=s[1],b=Object(c.useState)(0),d=Object(r.a)(b,2),h=d[0],O=d[1],x=function(){return n+o+h},f=x(),g=function(){var e=x();return Math.round(100*n/e)}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(v,{title:"Please leave feedback",children:[Object(j.jsx)(u,{options:["Good","Neutral","Bad"],onLeaveFeedback:function(e){var t=e.target.textContent.toLowerCase();"good"===t?a((function(e){return e+1})):"neutral"===t?l((function(e){return e+1})):"bad"===t&&O((function(e){return e+1}))}}),Object(j.jsx)(m,{good:n,neutral:o,bad:h,total:f,positivePercentage:g})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root")),N()}],[[15,1,2]]]);
//# sourceMappingURL=main.b3acad5e.chunk.js.map