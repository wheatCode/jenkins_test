(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[14],{596:function(t,e,a){"use strict";var c=a(60),i=a(61);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a(0)),r=(0,c(a(62)).default)(n.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");e.default=r},603:function(t,e,a){"use strict";a(0);var c=a(133),i=a.n(c),n=a(7);e.a=function(t){return Object(n.jsx)(i.a,{})}},642:function(t,e,a){"use strict";a(0);var c=a(208),i=a(565),n=a(564),r=a(7),s=Object(c.a)((function(t){return{root:{width:"100%"},thumb:{width:104,height:72},gridCell:{marginBottom:14},title:{fontSize:16,fontWeight:500},location:{fontSize:14,color:"#979797"},distance:{fontSize:12,color:"#979797"},divider:{margin:t.spacing(2,0)},background:{height:"1px",backgroundColor:"rgba(0, 0, 0, 0.12)"}}}));e.a=function(t){var e=s(),a=t.data;return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(i.a,{cellHeight:72,cols:1,children:a.map((function(t){return Object(r.jsxs)(n.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",className:e.gridCell,item:!0,xs:12,children:[Object(r.jsx)(n.a,{item:!0,xs:4,children:Object(r.jsx)("img",{src:t.coverImage,alt:t.title,className:e.thumb})}),Object(r.jsxs)(n.a,{item:!0,xs:8,container:!0,direction:"column",alignItems:"flex-start",children:[Object(r.jsx)(n.a,{item:!0,xs:12,className:e.title,children:t.title}),Object(r.jsx)(n.a,{item:!0,xs:12,className:e.location,children:t.location.name}),Object(r.jsxs)(n.a,{item:!0,xs:12,className:e.distance,children:["\u5168\u7a0b\u7d04",t.distance,"\u516c\u91cc"]}),Object(r.jsx)(n.a,{item:!0,xs:12})]})]},t.id)}))})})}},895:function(t,e,a){"use strict";var c=a(60),i=a(61);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a(0)),r=(0,c(a(62)).default)(n.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");e.default=r},971:function(t,e,a){"use strict";a.r(e);var c=a(27),i=a.n(c),n=a(52),r=a(33),s=a(228),o=a(0),l=a(208),d=a(553),h=a(564),x=a(111),j=a.n(x),b=a(642),p=a(603),u=a(87),f=a(596),m=a.n(f),g=a(895),O=a.n(g),v=a(7),k=Object(l.a)((function(t){var e;return{root:{flexGrow:1,width:"100%",fontFamily:"NotoSansCJKtc"},backArrow:{position:"absolute",top:"0",left:"0",color:"#fff",display:"block",width:"40px",height:"40px"},favoriteIcon:{width:"40px",height:"40px",position:"absolute",top:"0",right:"20%",display:"block",color:"#ffffff"},shareIcon:{width:"40px",height:"40px",position:"absolute",top:"0",right:"0",display:"block",color:"#ffffff"},bar:{height:"56px",backgroundColor:"transparent"},Img:{width:"100%",height:"179px"},title:{height:"36px",textIndent:"5%",fontSize:"22px",fontWeight:"bold",lineHeight:"1.64",letterSpacing:"0.46px",color:"#232323"},text:{height:"84px",margin:"16px 16px 24px",fontSize:"14px",lineHeight:"1.5",letterSpacing:"0.5px",color:"#232323"},background:{margin:"24px 16px",height:"1px",backgroundColor:"rgba(0, 0, 0, 0.12)"},textlist:(e={width:"74px",height:"27px"},Object(s.a)(e,"width","100%"),Object(s.a)(e,"textIndent","5%"),Object(s.a)(e,"fontSize","18px"),Object(s.a)(e,"fontWeight","bold"),e),trailList:{padding:" 5%"},arrow:{width:"24px",height:"24px",margin:"1px 32px 2px 0",objectFit:"contain"}}})),w=(j.a.create({baseURL:"https://go-hiking-backend-laravel.herokuapp.com/",headers:{"X-Secure-Code":"12345678"}}),j.a.create({baseURL:"http://09da54f0b81b.ngrok.io",headers:{"X-Secure-Code":"12345678"}}));e.default=function(t){var e=k(),a=Object(o.useState)([]),c=Object(r.a)(a,2),s=c[0],l=c[1],x=Object(o.useState)([]),j=Object(r.a)(x,2),f=j[0],g=j[1],N=t.match.params.id;console.log(N);var S=function(){var t=Object(n.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/api/article/"+e).then((function(t){g(t.data),l(t.data.trails)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){S(N)}),[N]),console.log(f),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:e.root,children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)("img",{src:f.image,className:e.Img}),Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(u.Link,{to:"/home",className:e.backArrow,children:Object(v.jsx)(p.a,{})})}),Object(v.jsx)(h.a,{className:e.favoriteIcon,children:Object(v.jsx)(m.a,{})}),Object(v.jsx)(h.a,{className:e.shareIcon,children:Object(v.jsx)(O.a,{})}),Object(v.jsx)("div",{className:e.title,children:f.title}),Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)("div",{className:e.text,children:f.content})}),Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)("div",{className:e.background})}),Object(v.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(v.jsx)("div",{className:e.textlist,children:"\u6b65\u9053\u63a8\u85a6"}),Object(v.jsx)("div",{className:e.trailList,children:Object(v.jsx)(b.a,{data:s})})]})]})})})}}}]);
//# sourceMappingURL=14.33f9ea44.chunk.js.map