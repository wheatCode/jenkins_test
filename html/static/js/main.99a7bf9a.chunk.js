(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{202:function(e,t,n){"use strict";var o=n(33),a=n(36),c=n(369),r=n(0),i=n(5),s=n(127),u=n(209),d=n(57),l=n(212),h=n(211),p=n(210),m=(n(203),n(21)),j=(n(111),n(7)),b=Object(i.a)((function(e){return{root:{margin:0,padding:e.spacing(2)}}}))((function(e){var t=e.children,n=e.classes,o=(e.onClose,Object(c.a)(e,["children","classes","onClose"]));return Object(j.jsx)(l.a,Object(a.a)(Object(a.a)({disableTypography:!0,className:n.root},o),{},{children:Object(j.jsx)(d.a,{variant:"h6",children:t})}))})),y=Object(i.a)((function(e){return{root:{padding:e.spacing(2),width:286}}}))(h.a),g=Object(i.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(p.a);t.a=function(e){var t=e.isOpen,n=e.closeDialog,a=e.triggerImageInput,c=e.inputRef,i=e.pData;console.log(i);var l=Object(r.useState)(null),h=Object(o.a)(l,2),p=h[0],x=h[1];return p?Object(j.jsx)(m.c,{to:{pathname:"/cropAvatar",state:{image:p,pData:i}}}):Object(j.jsxs)(u.a,{onClose:n,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(j.jsx)(b,{id:"customized-dialog-title",onClose:!0,children:"\u7de8\u8f2f\u500b\u4eba\u6a94\u6848\u5716\u7247"}),Object(j.jsx)(y,{children:Object(j.jsx)(d.a,{style:{color:"#919191"},gutterBottom:!0,children:"\u8acb\u9078\u64c7\u60a8\u7684\u500b\u4eba\u982d\u8cbc"})}),Object(j.jsx)(g,{children:Object(j.jsx)(s.a,{autoFocus:!0,onClick:!1,style:{color:"#007aff"},children:"\u62cd\u651d\u76f8\u7247"})}),Object(j.jsxs)(g,{children:[Object(j.jsx)("input",{ref:c,type:"file",id:"avatar_img",name:"avatar_img",accept:"image/*",onChange:function(e){!function(e){console.log(e.target.files[0]),x(URL.createObjectURL(e.target.files[0]))}(e)},hidden:!0}),Object(j.jsx)(s.a,{autoFocus:!0,onClick:a,style:{color:"#007aff"},children:"\u5f9e\u76f8\u7c3f\u4e2d\u9078\u53d6"})]}),Object(j.jsx)(g,{children:Object(j.jsx)(s.a,{autoFocus:!0,onClick:n,style:{color:"#007aff"},children:"\u53d6\u6d88"})})]})}},203:function(e,t,n){"use strict";var o=n(33),a=n(0);n(202);t.a=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)();return{isOpen:n,openDialog:function(){c(!0)},closeDialog:function(){c(!1)},inputRef:r,triggerImageInput:function(){r.current.click()}}}},356:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=[{countryCode:"TW",countryName:"\u53f0\u7063",phoneCode:"+886"},{countryCode:"US",countryName:"\u7f8e\u570b",phoneCode:"+1"},{countryCode:"CA",countryName:"\u52a0\u62ff\u5927",phoneCode:"+1"},{countryCode:"UK",countryName:"\u82f1\u570b",phoneCode:"+44"},{countryCode:"AF",countryName:"\u963f\u5bcc\u6c57",phoneCode:"+93"},{countryCode:"AR",countryName:"\u963f\u6839\u5ef7",phoneCode:"+54"},{countryCode:"AT",countryName:"\u5967\u5730\u5229",phoneCode:"+43"},{countryCode:"AU",countryName:"\u6fb3\u5927\u5229\u4e9e",phoneCode:"+61"},{countryCode:"BH",countryName:"\u5df4\u6797",phoneCode:"+973"},{countryCode:"BD",countryName:"\u5b5f\u52a0\u62c9",phoneCode:"+880"},{countryCode:"BE",countryName:"\u6bd4\u5229\u6642",phoneCode:"+32"},{countryCode:"BT",countryName:"\u4e0d\u4e39",phoneCode:"+975"},{countryCode:"BO",countryName:"\u73bb\u5229\u7dad\u4e9e",phoneCode:"+591"},{countryCode:"BR",countryName:"\u5df4\u897f",phoneCode:"+55"},{countryCode:"KH",countryName:"\u67ec\u57d4\u5be8",phoneCode:"+855"},{countryCode:"CM",countryName:"\u5580\u9ea5\u9686",phoneCode:"+237"},{countryCode:"CN",countryName:"\u4e2d\u570b",phoneCode:"+86"},{countryCode:"AI",countryName:"\u5b89\u572d\u62c9",phoneCode:"+1264"},{countryCode:"AG",countryName:"\u5b89\u5730\u74dc",phoneCode:"+1268"},{countryCode:"AW",countryName:"\u963f\u9b6f\u5df4",phoneCode:"+297"},{countryCode:"BM",countryName:"\u767e\u6155\u9054",phoneCode:"+1441"},{countryCode:"DO",countryName:"\u591a\u660e\u5c3c\u52a0",phoneCode:"+1767"},{countryCode:"GD",countryName:"\u683c\u745e\u90a3\u9054",phoneCode:"+1473"},{countryCode:"LC",countryName:"\u8056\u76e7\u897f\u4e9e",phoneCode:"+1758"},{countryCode:"CO",countryName:"\u54e5\u502b\u6bd4\u4e9e",phoneCode:"+57"},{countryCode:"CG",countryName:"\u525b\u679c\u5171\u548c\u570b",phoneCode:"+243"},{countryCode:"CH",countryName:"\u745e\u58eb",phoneCode:"+41"},{countryCode:"DE",countryName:"\u5fb7\u570b",phoneCode:"+49"},{countryCode:"DK",countryName:"\u4e39\u9ea5",phoneCode:"+45"},{countryCode:"EG",countryName:"\u57c3\u53ca",phoneCode:"+20"},{countryCode:"ES",countryName:"\u897f\u73ed\u7259",phoneCode:"+34"},{countryCode:"SV",countryName:"\u85a9\u723e\u74e6\u591a",phoneCode:"+503"},{countryCode:"FI",countryName:"\u82ac\u862d",phoneCode:"+358"},{countryCode:"FJ",countryName:"\u6590\u6fdf",phoneCode:"+679"},{countryCode:"FR",countryName:"\u6cd5\u570b",phoneCode:"+33"},{countryCode:"GE",countryName:"\u55ac\u6cbb\u4e9e",phoneCode:"+995"},{countryCode:"GH",countryName:"\u8fe6\u7d0d",phoneCode:"+233"},{countryCode:"GR",countryName:"\u5e0c\u81d8",phoneCode:"+30"},{countryCode:"GT",countryName:"\u74dc\u5730\u99ac\u62c9",phoneCode:"+502"},{countryCode:"GY",countryName:"\u84cb\u4e9e\u90a3",phoneCode:"+967"},{countryCode:"HT",countryName:"\u6d77\u5730",phoneCode:"+509"},{countryCode:"HN",countryName:"\u5b8f\u90fd\u62c9\u65af",phoneCode:"+504"},{countryCode:"HK",countryName:"\u9999\u6e2f",phoneCode:"+852"},{countryCode:"IN",countryName:"\u5370\u5ea6",phoneCode:"+91"},{countryCode:"IS",countryName:"\u51b0\u5cf6",phoneCode:"+354"},{countryCode:"ID",countryName:"\u5370\u5c3c",phoneCode:"+62"},{countryCode:"IQ",countryName:"\u4f0a\u62c9\u514b",phoneCode:"+964"},{countryCode:"IE",countryName:"\u611b\u723e\u862d",phoneCode:"+353"},{countryCode:"IT",countryName:"\u7fa9\u5927\u5229",phoneCode:"+39"},{countryCode:"JM",countryName:"\u7259\u8cb7\u52a0",phoneCode:"+1876"},{countryCode:"JO",countryName:"\u7d04\u65e6",phoneCode:"+962"},{countryCode:"KZ",countryName:"\u54c8\u85a9\u514b",phoneCode:"+7"},{countryCode:"KE",countryName:"\u80af\u4e9e",phoneCode:"+254"},{countryCode:"JP",countryName:"\u65e5\u672c",phoneCode:"+81"},{countryCode:"KP",countryName:"\u97d3\u570b",phoneCode:"+82"},{countryCode:"KW",countryName:"\u79d1\u5a01\u7279",phoneCode:"+965"},{countryCode:"LU",countryName:"\u76e7\u68ee\u5821",phoneCode:"+352"},{countryCode:"MO",countryName:"\u6fb3\u9580",phoneCode:"+853"},{countryCode:"MK",countryName:"\u99ac\u5176\u9813",phoneCode:"+389"},{countryCode:"MG",countryName:"\u99ac\u9054\u52a0\u65af\u52a0",phoneCode:"+261"},{countryCode:"ML",countryName:"\u99ac\u4f86\u897f\u4e9e",phoneCode:"+60"},{countryCode:"MV",countryName:"\u99ac\u723e\u5730\u592b",phoneCode:"+960"},{countryCode:"MX",countryName:"\u58a8\u897f\u54e5",phoneCode:"+52"},{countryCode:"MA",countryName:"\u6469\u6d1b\u54e5",phoneCode:"+212"},{countryCode:"NO",countryName:"\u632a\u5a01",phoneCode:"+47"},{countryCode:"NR",countryName:"\u8afe\u9b6f",phoneCode:"+674"},{countryCode:"NZ",countryName:"\u7d10\u897f\u862d",phoneCode:"+64"},{countryCode:"NI",countryName:"\u5c3c\u52a0\u62c9\u74dc",phoneCode:"+505"},{countryCode:"NG",countryName:"\u5948\u53ca\u5229\u4e9e",phoneCode:"+234"},{countryCode:"PK",countryName:"\u5df4\u57fa\u65af\u5766",phoneCode:"+92"},{countryCode:"PA",countryName:"\u5df4\u62ff\u99ac",phoneCode:"+507"},{countryCode:"PG",countryName:"\u5df4\u5e03\u4e9e\u7d10\u5e7e\u5167\u4e9e",phoneCode:"+675"},{countryCode:"PT",countryName:"\u8461\u8404\u7259",phoneCode:"+351"},{countryCode:"PY",countryName:"\u5df4\u62c9\u572d",phoneCode:"+595"},{countryCode:"RO",countryName:"\u7f85\u99ac\u5c3c\u4e9e",phoneCode:"+40"},{countryCode:"RU",countryName:"\u4fc4\u7f85\u65af",phoneCode:"+7"},{countryCode:"RW",countryName:"\u76e7\u65fa\u9054",phoneCode:"+250"},{countryCode:"SA",countryName:"\u6c99\u70cf\u5730\u963f\u62c9\u4f2f",phoneCode:"+966"},{countryCode:"SY",countryName:"\u6558\u5229\u4e9e",phoneCode:"+381"},{countryCode:"SC",countryName:"\u585e\u5e2d\u723e",phoneCode:"+248"},{countryCode:"LK",countryName:"\u65af\u91cc\u862d\u5361",phoneCode:"+94"},{countryCode:"SG",countryName:"\u65b0\u52a0\u5761",phoneCode:"+65"},{countryCode:"SD",countryName:"\u8607\u4e39",phoneCode:"+249"},{countryCode:"SE",countryName:"\u745e\u5178",phoneCode:"+46"},{countryCode:"TL",countryName:"\u6cf0\u570b",phoneCode:"+66"},{countryCode:"TO",countryName:"\u6e6f\u52a0\u7fa4\u5cf6",phoneCode:"+676"},{countryCode:"TR",countryName:"\u571f\u8033\u5176",phoneCode:"+90"},{countryCode:"UG",countryName:"\u70cf\u5e72\u9054",phoneCode:"+256"},{countryCode:"UA",countryName:"\u70cf\u514b\u862d",phoneCode:"+380"},{countryCode:"AE",countryName:"\u963f\u62c9\u4f2f\u806f\u5408\u5927\u516c\u570b",phoneCode:"+971"},{countryCode:"UY",countryName:"\u70cf\u62c9\u572d",phoneCode:"+598"},{countryCode:"UZ",countryName:"\u70cf\u8332\u5225\u514b",phoneCode:"+998"},{countryCode:"VE",countryName:"\u59d4\u5167\u745e\u62c9",phoneCode:"+58"},{countryCode:"YE",countryName:"\u8449\u9580",phoneCode:"+967"}]},357:function(e,t,n){"use strict";var o=n(36),a=n(27),c=n.n(a),r=n(52),i=n(33),s=n(111),u=n.n(s),d=n(0),l=u.a.create({baseURL:"http://4b4619ff6741.ngrok.io"});t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(d.useState)(!e),n=Object(i.a)(t,2),a=n[0],s=n[1],u=Object(d.useState)(e||{}),h=Object(i.a)(u,2),p=h[0],m=h[1],j=Object(d.useState)(""),b=Object(i.a)(j,2),y=b[0],g=b[1],x=Object(d.useState)(""),C=Object(i.a)(x,2),f=C[0],O=C[1],N=Object(d.useState)(""),v=Object(i.a)(N,2),I=v[0],T=v[1],w=Object(d.useState)(""),M=Object(i.a)(w,2),k=M[0],_=(M[1],Object(d.useState)("")),L=Object(i.a)(_,2),P=L[0];L[1];Object(d.useEffect)((function(){e||z(1)}),[e]);var z=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting"),e.next=3,l.get("/api/user/"+t).then((function(e){s(!1),e.data.gender=e.data.gender?"\u7537":"\u5973",m(e.data)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.target.value;m(Object(o.a)(Object(o.a)({},p),{},{name:t})),g(""==t?"\u59d3\u540d\u4e0d\u53ef\u70ba\u7a7a":"")},R=function(e){var t=e.target.value;m(Object(o.a)(Object(o.a)({},p),{},{gender:t})),O("\u7537"==t||"\u5973"==t?"":"\u8acb\u586b\u5165 \u7537 \u6216 \u5973")},A=function(e){var t=e.target.value;m(Object(o.a)(Object(o.a)({},p),{},{phone_number:t}));var n=new RegExp(/^\d*$/).test(t);T(n?"":"\u53ea\u5141\u8a31\u6578\u5b57")},S=function(e){m(Object(o.a)(Object(o.a)({},p),{},{birth:e.target.value}))},V=function(e){var t=e.target.value;m(Object(o.a)(Object(o.a)({},p),{},{county:Object(o.a)(Object(o.a)({},p.county),{},{name:t})}))},B=function(e){return new Promise((function(t,n){var o=new FileReader;o.readAsDataURL(e),o.onload=function(){return t(o.result)},o.onerror=function(e){return n(e)}}))},G=function(){var e=Object(r.a)(c.a.mark((function e(t,n){var o,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),console.log(n),!n.croppedImage){e.next=12;break}return e.next=5,fetch(n.croppedImage).then((function(e){return e.blob()}));case 5:return o=e.sent,a=new File([o],"1234567890.jpg",{lastModified:new Date,type:"image/jpeg"}),e.next=9,B(a);case 9:r=e.sent,console.log(r),n.croppedImage=r;case 12:return e.abrupt("return",l.put("/api/user/"+t,{name:n.name,gender:n.gender,phone_number:n.phone_number,birth:n.birth,image:"https://i.imgur.com/X7whEnq.jpg",county:n.county}).then((function(e){return console.log(e),e.status})));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return{isLoading:a,personalInfo:p,handleNameChange:D,handleSexChange:R,handleTelChange:A,handleBirthChange:S,handleCountyChange:V,updateInfo:G,getPersonalInfo:z,validations:{nameValidation:y,genderValidation:f,phoneValidation:I,birthValidation:k,countyValidation:P}}}},426:function(e,t){},524:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(15),c=n(225),r=n(226),i=n(227),s=n(229),u=n(361),d=n.n(u),l=n(363),h=n.n(l),p=n(206),m=n.n(p),j=[{locale:"en",messages:n.e(24).then(n.bind(null,954))},{locale:"ru",messages:n.e(25).then(n.bind(null,955))},{locale:"de",messages:n.e(23).then(n.bind(null,956))}],b=n(79),y=n.n(b),g=n(47),x=n.n(g),C=n(21),f=n(27),O=n.n(f),N=n(52),v=n(33),I=n(359),T=n(208),w=n(127),M=n(133),k=n.n(M),_=n(323),L=n(327),P=n(57),z=n(215),D=function(e){return new Promise((function(t,n){var o=new Image;o.addEventListener("load",(function(){return t(o)})),o.addEventListener("error",(function(e){return n(e)})),o.setAttribute("crossOrigin","anonymous"),o.src=e}))};function R(e){return e*Math.PI/180}function A(e,t){return S.apply(this,arguments)}function S(){return(S=Object(N.a)(O.a.mark((function e(t,n){var o,a,c,r,i,s,u,d=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=d.length>2&&void 0!==d[2]?d[2]:0,e.next=3,D(t);case 3:return a=e.sent,c=document.createElement("canvas"),r=c.getContext("2d"),i=Math.max(a.width,a.height),s=i/2*Math.sqrt(2)*2,c.width=s,c.height=s,r.translate(s/2,s/2),r.rotate(R(o)),r.translate(-s/2,-s/2),r.drawImage(a,s/2-.5*a.width,s/2-.5*a.height),u=r.getImageData(0,0,s,s),c.width=n.width,c.height=n.height,r.putImageData(u,Math.round(0-s/2+.5*a.width-n.x),Math.round(0-s/2+.5*a.height-n.y)),e.abrupt("return",new Promise((function(e){c.toBlob((function(t){e(URL.createObjectURL(t))}),"image/jpeg")})));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=n(7),B=Object(T.a)((function(e){return{root:{flexGrow:1},imgContainer:{display:"flex",justifyContent:"center",marginTop:88},title:{flexGrow:1,marginLeft:32},finishButton:{padding:0,paddingLeft:40}}})),G=function(e){var t=e.location.state.image,n=e.location.state.pData,a=Object(o.useState)({x:0,y:0}),c=Object(v.a)(a,2),r=c[0],i=c[1],s=Object(o.useState)(1),u=Object(v.a)(s,2),d=u[0],l=u[1],h=Object(o.useState)(null),p=Object(v.a)(h,2),m=p[0],j=p[1],b=Object(o.useCallback)((function(e,t){j(t)}),[]),y=Object(o.useCallback)(Object(N.a)(O.a.mark((function o(){var a;return O.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,A(t,m);case 3:a=o.sent,console.log("donee",{croppedImage:a}),e.history.push({pathname:"/editAccount",state:{croppedImage:a,pData:n}}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.error(o.t0);case 11:case"end":return o.stop()}}),o,null,[[0,8]])}))),[m]),g=B();return Object(V.jsxs)("div",{className:g.root,children:[Object(V.jsx)(_.a,{className:g.appBar,position:"relative",style:{background:"#3c5754"},children:Object(V.jsxs)(L.a,{children:[Object(V.jsx)(z.a,{edge:"start",className:g.menuButton,color:"inherit","aria-label":"menu",children:Object(V.jsx)(k.a,{})}),Object(V.jsx)(P.a,{variant:"h6",className:g.title,children:"\u500b\u4eba\u6a94\u6848\u76f8\u7247"}),Object(V.jsx)(w.a,{className:g.finishButton,color:"inherit",edge:"end",onClick:function(){y()},children:"\u4e0b\u4e00\u6b65"})]})}),Object(V.jsx)("div",{className:g.imgContainer,children:Object(V.jsx)("div",{className:g.cropContainer,children:Object(V.jsx)(I.default,{cropShape:"round",image:t,crop:r,zoom:d,aspect:1,onCropChange:i,onZoomChange:l,onCropComplete:b,onImageLoaded:function(e){console.log(e)}})})})]})},E=n(564),U=n(573),F=n(324),K=n(364),H=n(371),J=n(319),Y=n(202),W=n(203),Z=n(356),q=n(357),Q=n(358),X=n.n(Q),$=Object(T.a)((function(e){return{root:{flexGrow:1},top_bar_bg_color:{backgroundColor:"#3c5754",height:56},textfield_container:{marginTop:15,background:"white"},title:{flexGrow:1,marginLeft:32},avatar:{width:96,height:96},gridMargin:{marginTop:32},textfield:{marginTop:8,marginBottom:8,paddingLeft:24,flexGrow:1,width:"100%"},textfield_phone:{marginTop:8,marginBottom:8,flexGrow:1,width:"100%"},textLabel:{paddingLeft:15},finishButton:{padding:0,paddingLeft:40},avatarOverlay:{position:"absolute",bottom:0,height:"20%",width:"100%",backgroundColor:"black",textAlign:"center",verticalAlign:"middle",lineHeight:"150%",color:"white",fontSize:12,opacity:"80%"},avatarContainer:{background:"yellow",width:96,height:96,position:"relative",borderRadius:"50% 50%",margin:0,padding:0,zIndex:100,overflow:"hidden"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var ee=function(e){var t=Object(C.k)(),n=e.location.state.pData,o=Object(q.a)(n),a=o.personalInfo,c=o.handleNameChange,r=o.handleSexChange,i=o.handleTelChange,s=o.handleBirthChange,u=o.handleCountyChange,d=o.updateInfo,l=o.isLoading,h=o.validations,p=void 0===e.location.state?null:e.location.state.croppedImage,m=Object(W.a)(),j=m.isOpen,b=m.openDialog,y=m.closeDialog,g=m.inputRef,x=m.triggerImageInput,f=function(){var e=Object(N.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:a.name,gender:"\u7537"===a.gender?1:0,phone_number:a.phone_number,birth:a.birth,croppedImage:p,image:a.profile_photo_url,county:a.county.name},e.next=3,d(1,n);case 3:200==e.sent&&t.push({pathname:"/personalPage"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=$();return Object(V.jsxs)("div",{className:v.root,children:[Object(V.jsx)(_.a,{position:"static",style:{background:"#3c5754"},children:Object(V.jsxs)(L.a,{children:[Object(V.jsx)(z.a,{edge:"start",className:v.menuButton,color:"inherit","aria-label":"menu",children:Object(V.jsx)(k.a,{})}),Object(V.jsx)(P.a,{variant:"h6",className:v.title,children:"\u500b\u4eba\u6a94\u6848"}),Object(V.jsx)(w.a,{className:v.finishButton,color:"inherit",edge:"end",onClick:function(){h.nameValidation||h.genderValidation||h.phoneValidation||(console.log("yay"),f())},children:"\u5b8c\u6210"})]})}),Object(V.jsxs)(E.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",className:v.gridMargin,children:[Object(V.jsxs)(E.a,{item:!0,xs:12,container:!0,direction:"column",alignItems:"center",justify:"flex-start",spacing:2,children:[Object(V.jsx)(E.a,{item:!0,xs:12,children:Object(V.jsxs)("div",{className:v.avatarContainer,children:[Object(V.jsx)(U.a,{src:p||a.image,className:v.avatar}),Object(V.jsx)("div",{class:v.avatarOverlay,onClick:function(){b()},children:"\u66f4\u63db"})]})}),Object(V.jsx)(E.a,{item:!0,xs:12,container:!0,direction:"column",alignItems:"center",justify:"flex-start",spacing:.5,children:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(E.a,{item:!0,xs:12,children:Object(V.jsx)(P.a,{variant:"h7",style:{color:"#919191"},children:a.email?a.email:"loading"})}),Object(V.jsx)(E.a,{item:!0,xs:12,children:Object(V.jsx)("div",{style:{height:32}})})]})})]}),Object(V.jsx)(E.a,{item:!0,xs:12,container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:Object(V.jsxs)(E.a,{item:!0,xs:12,container:!0,direction:"row",alignItems:"center",justify:"flex-start",className:v.textfield_container,spacing:0,children:[Object(V.jsx)(E.a,{item:!0,xs:12,children:Object(V.jsx)(F.a,{})}),Object(V.jsx)(E.a,{item:!0,xs:3,children:Object(V.jsx)(P.a,{variant:"body1",className:v.textLabel,children:"\u59d3\u540d"})}),Object(V.jsx)(E.a,{item:!0,xs:9,children:Object(V.jsx)(J.a,{id:"standard-basic",placeholder:"\u59d3\u540d",error:!!h.nameValidation,helperText:h.nameValidation?h.nameValidation:"",className:v.textfield,onChange:c,inputProps:{value:a.name}})}),Object(V.jsx)(E.a,{item:!0,xs:3,children:Object(V.jsx)(P.a,{variant:"body1",className:v.textLabel,children:"\u6027\u5225"})}),Object(V.jsx)(E.a,{item:!0,xs:9,children:Object(V.jsx)(J.a,{id:"standard-basic",error:!!h.genderValidation,helperText:h.genderValidation?h.genderValidation:"",placeholder:"\u6027\u5225",onChange:r,className:v.textfield,inputProps:{value:a.gender}})}),Object(V.jsx)(E.a,{item:!0,xs:3,children:Object(V.jsx)(P.a,{variant:"body1",className:v.textLabel,children:"\u570b\u78bc"})}),Object(V.jsx)(E.a,{item:!0,xs:9,children:Object(V.jsxs)("div",{className:v.textfield,children:[Object(V.jsx)(K.a,{labelId:"country-code",id:"country-code",style:{width:"30%"},className:v.textfield,inputProps:{},children:Z.a.map((function(e){return Object(V.jsx)("option",{value:e.phoneCode,children:e.phoneCode},e.countryCode+e.countryName)}))}),Object(V.jsx)(J.a,{id:"standard-basic",placeholder:"\u624b\u6a5f",error:!!h.phoneValidation,helperText:h.phoneValidation?h.phoneValidation:"",style:{width:"70%"},className:v.textfield_phone,onChange:i,inputProps:{value:a.phone_number}})]})}),Object(V.jsx)(E.a,{item:!0,xs:3,children:Object(V.jsx)(P.a,{variant:"body1",className:v.textLabel,children:"\u751f\u65e5"})}),Object(V.jsx)(E.a,{item:!0,xs:9,children:Object(V.jsx)(J.a,{id:"standard-basic",placeholder:"\u751f\u65e5",className:v.textfield,type:"date",onChange:s,InputLabelProps:{shrink:!0},inputProps:{value:a.birth}})}),Object(V.jsx)(E.a,{item:!0,xs:3,children:Object(V.jsx)(P.a,{variant:"body1",className:v.textLabel,children:"\u5c45\u4f4f\u5730"})}),Object(V.jsx)(E.a,{item:!0,xs:9,children:Object(V.jsx)(J.a,{id:"standard-basic",placeholder:"\u5c45\u4f4f\u5730",onChange:u,className:v.textfield,inputProps:{value:a.county?a.county.name:""}})})]})})]}),Object(V.jsx)(Y.a,{isOpen:j,triggerImageInput:x,closeDialog:y,inputRef:g,pData:a}),Object(V.jsx)(H.a,{className:v.backdrop,open:l,children:Object(V.jsx)(X.a,{color:"#36CAAD",loading:l,size:150})})]})},te=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(38)]).then(n.bind(null,957))})),ne=Object(o.lazy)((function(){return n.e(36).then(n.bind(null,958))})),oe=Object(o.lazy)((function(){return Promise.all([n.e(6),n.e(26)]).then(n.bind(null,959))})),ae=Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(22),n.e(9)]).then(n.bind(null,977))})),ce=Object(o.lazy)((function(){return n.e(17).then(n.bind(null,961))})),re=Object(o.lazy)((function(){return n.e(40).then(n.bind(null,962))})),ie=Object(o.lazy)((function(){return n.e(19).then(n.bind(null,963))})),se=Object(o.lazy)((function(){return n.e(20).then(n.bind(null,964))})),ue=Object(o.lazy)((function(){return n.e(39).then(n.bind(null,965))})),de=Object(o.lazy)((function(){return n.e(10).then(n.bind(null,966))})),le=Object(o.lazy)((function(){return n.e(15).then(n.bind(null,981))})),he=Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,967))})),pe=Object(o.lazy)((function(){return n.e(33).then(n.bind(null,968))})),me=Object(o.lazy)((function(){return n.e(8).then(n.bind(null,979))})),je=Object(o.lazy)((function(){return n.e(12).then(n.bind(null,982))})),be=Object(o.lazy)((function(){return Promise.all([n.e(16),n.e(11)]).then(n.bind(null,980))})),ye=Object(o.lazy)((function(){return n.e(21).then(n.bind(null,983))})),ge=Object(o.lazy)((function(){return n.e(37).then(n.bind(null,984))})),xe=Object(o.lazy)((function(){return n.e(27).then(n.bind(null,970))})),Ce=Object(o.lazy)((function(){return n.e(14).then(n.bind(null,971))})),fe=Object(o.lazy)((function(){return n.e(18).then(n.bind(null,985))})),Oe=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,972))})),Ne=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,978))})),ve=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(7),n.e(31)]).then(n.bind(null,973))})),Ie=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,974))})),Te=[Object(V.jsx)(x.a,{path:"/Login1",redirectTo:"/",exact:!0,component:fe}),Object(V.jsx)(x.a,{path:"/signin",redirectTo:"/",exact:!0,component:le}),Object(V.jsx)(x.a,{path:"/signup",redirectTo:"/",exact:!0,component:te}),Object(V.jsx)(x.a,{path:"/verify2",redirectTo:"/",exact:!0,component:pe}),Object(V.jsx)(x.a,{path:"/login1_1",redirectTo:"/",exact:!0,component:Oe}),Object(V.jsx)(x.a,{path:"/login1_2",redirectTo:"/",exact:!0,component:Ne}),Object(V.jsx)(x.a,{path:"/register0_1",redirectTo:"/",exact:!0,component:ve}),Object(V.jsx)(x.a,{path:"/resetPassword",redirectTo:"/",exact:!0,component:Ie}),Object(V.jsx)(x.a,{path:"/password_reset",redirectTo:"/",exact:!0,component:ne}),Object(V.jsx)(C.d,{path:"/searchPage",exact:!0,component:me}),Object(V.jsx)(C.d,{path:"/searchQuick/:id",exact:!0,component:je}),Object(V.jsx)(C.d,{path:"/searchResult",exact:!0,component:be}),Object(V.jsx)(C.d,{path:"/privacyPolicy",exact:!0,component:ge}),Object(V.jsx)(C.d,{path:"/aboutUs",exact:!0,component:xe}),Object(V.jsx)(C.d,{path:"/Home",exact:!0,component:ae}),Object(V.jsx)(C.d,{path:"/about",exact:!0,component:oe}),Object(V.jsx)(C.d,{path:"/columnPage/:id",exact:!0,component:Ce}),Object(V.jsx)(y.a,{path:"/my_account",exact:!0,component:de}),Object(V.jsx)(y.a,{path:"/home",exact:!0,component:ae}),Object(V.jsx)(x.a,{path:"/home_home3",exact:!0,component:he}),Object(V.jsx)(y.a,{path:"/dialog_demo",exact:!0,component:ce}),Object(V.jsx)(y.a,{path:"/toast_demo",exact:!0,component:re}),Object(V.jsx)(y.a,{path:"/filter_demo",exact:!0,component:ie}),Object(V.jsx)(y.a,{path:"/list_page_demo",exact:!0,component:se}),Object(V.jsx)(y.a,{path:"/tabs_demo",exact:!0,component:ue}),Object(V.jsx)(x.a,{path:"/personalPage",exact:!0,component:ye}),Object(V.jsx)(x.a,{path:"/editAccount",exact:!0,component:ee}),Object(V.jsx)(x.a,{path:"/cropAvatar",exact:!0,component:G})],we=n(338),Me=n(343),ke=n(328),_e=n(332),Le=n(339),Pe=n(331),ze=n(346),De=n(329),Re=n(341),Ae=n(333),Se=n(345),Ve=n(344),Be=n(337),Ge=n(342),Ee=n(340),Ue=n(330),Fe=n(334),Ke=n(335),He=n(336),Je=n(109),Ye=n.n(Je),We=n(368),Ze=n.n(We),qe=n(222),Qe=n.n(qe),Xe=[{id:"default"},{id:"red",color:Ye.a[500],source:{palette:{primary:Ye.a,secondary:Ze.a,error:Ye.a}}},{id:"green",color:Qe.a[500],source:{palette:{primary:Qe.a,secondary:Ye.a,error:Ye.a}}}],$e=function(e){var t=e.intl,n=e.updateLocale,o=e.locale,a=e.menuContext,c=e.themeContext,r=e.a2HSContext,i=e.auth,s=a.toggleThis,u=a.isDesktop,d=a.isAuthMenuOpen,l=a.isMiniSwitchVisibility,h=c.themeID,p=c.setThemeID,m=c.isRTL,b=c.toggleThisTheme,y=i.auth,g=i.setAuth,x=r.isAppInstallable,C=r.isAppInstalled,f=r.deferredPrompt,O=j.map((function(e){return{value:void 0,visible:!0,primaryText:t.formatMessage({id:e.locale}),onClick:function(){n(e.locale)},leftIcon:Object(V.jsx)(we.a,{})}})),N=y.isAuthenticated,v=Xe.map((function(e){return{value:void 0,visible:!0,primaryText:t.formatMessage({id:e.id}),onClick:function(){p(e.id)},leftIcon:Object(V.jsx)(Me.a,{style:{color:e.color}})}}));return d||!N?[{value:"/my_account",primaryText:t.formatMessage({id:"my_account",defaultMessage:"My Account"}),leftIcon:Object(V.jsx)(ke.a,{})},{value:"/signin",onClick:N?function(){g({isAuthenticated:!1})}:function(){},visible:!0,primaryText:N?t.formatMessage({id:"sign_out"}):t.formatMessage({id:"sign_in"}),leftIcon:N?Object(V.jsx)(_e.a,{}):Object(V.jsx)(Le.a,{})}]:[{value:"/home",visible:N,primaryText:t.formatMessage({id:"home"}),leftIcon:Object(V.jsx)(Pe.a,{})},{primaryText:t.formatMessage({id:"demos",defaultMessage:"Demos"}),primaryTogglesNestedList:!0,leftIcon:Object(V.jsx)(ze.a,{}),nestedItems:[{value:"/dialog_demo",visible:N,primaryText:t.formatMessage({id:"dialog_demo",defaultMessage:"Dialog"}),leftIcon:Object(V.jsx)(De.a,{})},{value:"/toast_demo",visible:N,primaryText:t.formatMessage({id:"toast_demo",defaultMessage:"Toast"}),leftIcon:Object(V.jsx)(Re.a,{})},{value:"/filter_demo",visible:N,primaryText:t.formatMessage({id:"filter_demo",defaultMessage:"Filter"}),leftIcon:Object(V.jsx)(Ae.a,{})},{value:"/list_page_demo",visible:N,primaryText:t.formatMessage({id:"list_page_demo_menu",defaultMessage:"List Page"}),leftIcon:Object(V.jsx)(Se.a,{})},{value:"/tabs_demo",visible:N,primaryText:t.formatMessage({id:"tabs_demo",defaultMessage:"Tabs Page"}),leftIcon:Object(V.jsx)(Ve.a,{})}]},{value:"/about",visible:!0,primaryText:t.formatMessage({id:"about"}),leftIcon:Object(V.jsx)(Be.a,{})},{divider:!0},{primaryText:t.formatMessage({id:"settings"}),primaryTogglesNestedList:!0,leftIcon:Object(V.jsx)(Ge.a,{}),nestedItems:[{primaryText:t.formatMessage({id:"theme"}),secondaryText:t.formatMessage({id:h}),primaryTogglesNestedList:!0,leftIcon:Object(V.jsx)(Me.a,{}),nestedItems:v},{primaryText:t.formatMessage({id:"language"}),secondaryText:t.formatMessage({id:o}),primaryTogglesNestedList:!0,leftIcon:Object(V.jsx)(we.a,{}),nestedItems:O},{visible:!!u,onClick:function(){s("isMiniSwitchVisibility")},primaryText:t.formatMessage({id:"menu_mini_mode"}),leftIcon:l?Object(V.jsx)(Ee.a,{}):Object(V.jsx)(Ue.a,{})},{onClick:function(){b("isRTL")},primaryText:"".concat(m?"LTR":"RTL"," mode"),leftIcon:m?Object(V.jsx)(Fe.a,{}):Object(V.jsx)(Ke.a,{})}]},{value:null,visible:x&&!C,onClick:function(){f.prompt()},primaryText:t.formatMessage({id:"install",defaultMessage:"Install"}),leftIcon:Object(V.jsx)(He.a,{})}]},et=n(205),tt={auth:{signInURL:"/signin"},routes:Te,locale:{locales:j,defaultLocale:n.n(et)()(["en","de","ru"],"en"),onError:function(e){}},menu:{getMenuItems:$e},theme:{themes:Xe,defaultThemeID:"red",defaultIsDarkMode:!1,defaultIsRTL:!1},pages:{LandingPage:Object(o.lazy)((function(){return n.e(34).then(n.bind(null,952))})),PageNotFound:Object(o.lazy)((function(){return n.e(35).then(n.bind(null,953))}))}},nt=m()(h.a,tt),ot=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(V.jsx)(d.a,{config:nt})}}]),n}(o.Component),at=n(111),ct=n.n(at).a.create({baseURL:"https://go-hiking-backend-laravel.herokuapp.com/"});console.log("https://go-hiking-backend-laravel.herokuapp.com/");var rt={get:function(e){return Object(N.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ct.get(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},post:function(e,t){return Object(N.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ct.post(e,t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}};window.axios=rt,Object(a.render)(Object(V.jsx)(ot,{}),document.getElementById("root"))}},[[524,3,4]]]);
//# sourceMappingURL=main.99a7bf9a.chunk.js.map