(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,n){e.exports={title:"Statistics_title__3PVIg",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(e,t,n){e.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}},,,,function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,n){e.exports={message:"Notification_message__eciZi"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(5),s=n.n(i),o=(n(16),n(6)),r=n(7),l=n(11),d=n(10),u=n(8),b=n.n(u),j=n(0),h=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(j.jsx)("div",{children:n.map((function(e,n){return Object(j.jsx)("button",{type:"button",onClick:t,className:b.a.button,children:e},n)}))})},g=n(9),f=n.n(g),x=function(e){var t=e.message;return Object(j.jsx)("p",{className:f.a.message,children:t})},O=n(1),m=n.n(O),v=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(j.jsxs)("ul",{className:m.a.list,children:[Object(j.jsxs)("li",{className:m.a.item,children:["Good: ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("li",{className:m.a.item,children:["Neutral: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("li",{className:m.a.item,children:["Bad: ",Object(j.jsx)("span",{children:a})]}),Object(j.jsxs)("li",{className:m.a.item,children:["Total: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("li",{className:m.a.item,children:["Positive feedback: ",Object(j.jsxs)("span",{children:[i,"%"]})]})]})},p=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:m.a.title,children:"Statistics"}),0===c?Object(j.jsx)(x,{message:"No feedback given"}):Object(j.jsx)(v,{good:t,neutral:n,bad:a,total:c,positivePercentage:i})]})},_=n(4),k=n.n(_),N=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{className:k.a.container,children:[Object(j.jsx)("h2",{className:k.a.title,children:t}),n]})},F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return Math.round(100*e.state.good/t)},e.handleIncrement=function(t){var n=t.target.textContent.toLowerCase();"good"===n?e.setState((function(e){return{good:e.good+1}})):"neutral"===n?e.setState((function(e){return{neutral:e.neutral+1}})):"bad"===n&&e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(N,{title:"Please leave feedback",children:[Object(j.jsx)(h,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.handleIncrement}),Object(j.jsx)(p,{good:t,neutral:n,bad:a,total:c,positivePercentage:i})]})})}}]),n}(a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),P()}],[[18,1,2]]]);
//# sourceMappingURL=main.3b806ece.chunk.js.map