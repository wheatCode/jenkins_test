(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[33],{968:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return w}));var n=o(27),c=o.n(n),a=o(52),r=o(228),i=o(36),l=o(33),s=o(0),u=o(208),d=o(97),f=o(553),p=o(57),g=o(319),h=o(127),j=o(21),b=o(111),x=o.n(b),O=o(7),m=Object(u.a)((function(e){return{container:{display:"flex",flexDirection:"column",height:"768px",width:"100%"},root:{"& > *":{margin:e.spacing(1),width:"25ch"},display:"flex",justifyContent:"space-around",padding:"0 73px 0 74px"},textField:{width:"54px",height:"40px",margin:"48px 0 0",padding:"9px 0 0"}}})),v=Object(d.a)({palette:{primary:{light:"#00d04c",main:"#00d04c",dark:"#00d04c",contrastText:"#00d04c"}}}),y=x.a.create({baseURL:"https://gohiking-server.herokuapp.com/"});function w(e){var t=m(),o=Object(s.useState)({code_one:"",code_two:"",code_three:"",code_four:"",submitted:!1}),n=Object(l.a)(o,2),u=n[0],d=n[1],b=Object(s.useRef)(null),x=Object(s.useRef)(null),w=Object(s.useRef)(null),C=Object(s.useRef)(null),k=Object(s.useState)(-1),_=Object(l.a)(k,2),S=_[0],R=_[1],N=Object(s.useState)(-1),F=Object(l.a)(N,2),W=F[0],D=F[1],I=Object(s.useState)(-1),E=Object(l.a)(I,2),J=E[0],K=E[1],z=Object(s.useState)(-1),H=Object(l.a)(z,2),L=H[0],P=H[1],T={Email:localStorage.getItem("Email")};console.log(T);var U=function(e){var t=e.target,o=t.id,n=t.value;n.length<2&&(d((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},o,n))})),"code_one"==o&&n.length>0&&(R(S=n),console.log(S),x.current.focus()),"code_two"==o&&n.length>0&&(D(W=n),console.log(W),w.current.focus()),"code_three"==o&&n.length>0&&(K(J=n),console.log(J),C.current.focus()),"code_four"==o&&n.length>0&&(P(L=n),console.log(L)))},V=function(e){8===e.keyCode&&"code_two"===e.target.id&&(""!=e.target.value?x.current.focus():b.current.focus()),8===e.keyCode&&"code_three"===e.target.id&&(""!=e.target.value?w.current.focus():x.current.focus()),8===e.keyCode&&"code_four"===e.target.id&&(""===e.target.value?w.current.focus():C.current.focus())},q=Object(s.useState)({verificationCode0:null,verificationCode1:null,verificationCode2:null,verificationCode3:null}),A=Object(l.a)(q,2),B=A[0],G=A[1],M=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("code is like this before: "+B),G({verificationCode0:S,verificationCode1:W,verificationCode2:J,verificationCode3:L}),console.log("code is like this after: "+B);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=Object(s.useRef)(!0);Object(s.useLayoutEffect)((function(){Q.current?Q.current=!1:(console.log("code is like this Effect: "),re())}),[B]);var X=Object(j.k)(),Y=Object(s.useState)(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useState)(""),oe=Object(l.a)(te,2),ne=oe[0],ce=oe[1],ae="",re=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(B),e.next=3,y.post("api/password/confirm",B).then((function(e){console.log("\u9a57\u8b49\u78bc\u6b63\u78ba"),console.log(e.data),localStorage.setItem("token",JSON.stringify(e.data)),console.log(JSON.parse(localStorage.getItem("token"))),console.log("\u5f97\u5230token!"),console.log("ready to go"),X.push("/ResetPassword")})).catch((function(e){console.log("error"),ae=e.response.data,console.log("\u932f\u8aa4\u8cc7\u8a0a\u5982\u4e0b: "+ae.error);var t="\u932f\u8aa4\u8cc7\u8a0a: "+ae.error;ee(t)})).finally((function(){console.log(ae)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie={email:localStorage.getItem("email")},le=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(""),console.log(ie),e.next=4,y.post("api/password/forget",ie).then((function(e){console.log("\u91cd\u65b0\u5bc4\u9001\u6210\u529f!"),ce("\u91cd\u65b0\u5bc4\u9001\u6210\u529f!"),ae=e.data})).catch((function(e){console.log("\u91cd\u65b0\u5bc4\u9001\u5931\u6557!");var t="\u91cd\u65b0\u5bc4\u9001\u5931\u6557: "+ae.error;ee(t),ae=e.response.data})).finally((function(){console.log(ae)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:t.container,children:[Object(O.jsx)(p.a,{style:{margin:"84px auto 0px",width:"123px",height:"36px",fontSize:"24px",fontWeight:"900"},children:"\u8f38\u5165\u9a57\u8b49\u78bc"}),Object(O.jsx)(p.a,{style:{margin:"16px auto 0px",width:"379px",height:"42px",fontSize:"15px",fontWeight:"500",color:"#232323"},children:"\u5df2\u628a\u9a57\u8b49\u78bc\u767c\u81f3\u60a8\u7684\u4fe1\u7bb1 johndoe@example.com\uff0c\u8acb\u78ba\u8a8d\u60a8\u7684\u4fe1\u7bb1\u53ca\u8f38\u51654\u4f4d\u6578\u9a57\u8b49\u78bc\u3002"}),Object(O.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:Object(O.jsxs)(f.a,{theme:v,children:[Object(O.jsx)(g.a,{autoFocus:!0,className:t.textField,id:"code_one",inputRef:b,value:u.code_one,onChange:U,onKeyDown:V}),Object(O.jsx)(g.a,{className:t.textField,id:"code_two",inputRef:x,value:u.code_two,onChange:U,onKeyDown:V}),Object(O.jsx)(g.a,{className:t.textField,id:"code_three",inputRef:w,value:u.code_three,onChange:U,onKeyDown:V}),Object(O.jsx)(g.a,{className:t.textField,id:"code_four",inputRef:C,value:u.code_four,onChange:U,onKeyDown:V,sytyle:{position:"relative",zIndex:"-10"}})]})}),Object(O.jsxs)(p.a,{style:{margin:"16px auto 0 ",color:"#ff3b30"},children:[$," "]}),Object(O.jsxs)(p.a,{style:{margin:"0 auto 0 ",color:"#000000"},children:[ne," "]}),Object(O.jsx)(h.a,{disabled:u.submitted,onClick:M,variant:"contained",style:{backgroundColor:"#00d04c",color:"#ffffff",fontWeight:"700",borderColor:"#00d04c",width:"92%",maxWidth:"379px",Height:"48px",margin:"27px auto 0",borderRadius:"4px"},children:"\u7e7c\u7e8c"}),Object(O.jsx)(h.a,{variant:"outlined",onClick:le,style:{color:"#00d04c",fontWeight:"700",borderColor:"#00d04c",width:"92%",maxWidth:"379px",Height:"48px",margin:"24px auto 0"},children:"\u91cd\u65b0\u767c\u9001\u9a57\u8b49\u78bc"})]})}}}]);
//# sourceMappingURL=33.7699d325.chunk.js.map