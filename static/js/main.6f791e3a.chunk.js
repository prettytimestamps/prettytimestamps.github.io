(this.webpackJsonpprettytimestamp=this.webpackJsonpprettytimestamp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),c=a.n(r),i=a(70),o=a(123),l=a(124),d=a(119),j=a(26),m=a.n(j),b=a(16),h=a(118),u=a(17),x=a.n(u),p=a(4);const O=x.a.tz.names(),f=Array.from(new Set(x.a.tz.names().map((e=>x.a.tz(e).zoneAbbr())))).concat(O),g=({tzs:e,addTZ:t})=>{const[a,s]=Object(n.useState)(""),r=Object(n.useMemo)((()=>f.filter((e=>e.indexOf(a)>=0))),[a]);return Object(p.jsx)("div",{style:{width:"100%"},children:Object(p.jsx)(l.a,{icon:Object(p.jsx)(h.a,{}),dropHeight:"small",focusIndicator:!1,suggestions:r,onChange:e=>s(e.currentTarget.value),onSuggestionSelect:e=>{t(e.suggestion)}},`select_${e.length}`)})};var y=a(120),z=a(125);const v=({time:e,tzs:t})=>Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(y.a,{columns:[{property:"name",header:Object(p.jsx)(z.a,{children:"Name"}),primary:!0,render:e=>e},{property:"offset",header:"Offset",render:t=>null==e?"???":x()(parseInt(e,10)).tz(t).format("z")},{property:"time",header:"Time",render:t=>Object(p.jsx)("span",{style:{fontFamily:"'Roboto Mono', monospace"},children:e?x()(parseInt(e,10)).tz(t).format("YYYY-MM-DD HH:mm:ss"):"0000-00-00 00:00:00"})}],data:t})}),w=e=>Object(p.jsx)(i.a,{tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"},...e}),T={global:{font:{family:"Roboto",size:"18px",height:"20px"},colors:{focus:"#0CA7D3"}}};var C=function(){const[e,t]=Object(b.d)("t",b.c),[a,s]=Object(b.d)("z",Object(b.e)(b.a,["UTC",m.a.tz.guess()])),r=Object(n.useCallback)((e=>{t(e.target.value)}),[t]);return Object(p.jsxs)(o.a,{theme:T,children:[Object(p.jsx)(w,{children:"Pretty Timestamp"}),Object(p.jsx)(i.a,{pad:"small",direction:"row",flex:!0,overflow:{horizontal:"hidden"},children:Object(p.jsxs)(i.a,{flex:!0,align:"center",justify:"center",children:[Object(p.jsxs)(i.a,{flex:!0,direction:"row",children:[Object(p.jsx)(i.a,{width:{max:"medium"},pad:"small",children:Object(p.jsx)(l.a,{icon:Object(p.jsx)(d.a,{}),defaultValue:null!==e&&void 0!==e?e:void 0,onChange:r,placeholder:"timestamp..."})}),Object(p.jsx)(i.a,{width:{max:"medium"},pad:"small",children:Object(p.jsx)(g,{tzs:a,addTZ:e=>s([...a,e])})})]}),Object(p.jsx)(v,{time:null!==e&&void 0!==e?e:null,tzs:a})]})})]})},I=a(69),M=a(7);c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(I.a,{children:Object(p.jsx)(b.b,{ReactRouterRoute:M.a,children:Object(p.jsx)(C,{})})})}),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.6f791e3a.chunk.js.map