(this["webpackJsonphexagon-quilt"]=this["webpackJsonphexagon-quilt"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a(8),o=a.n(c),r=(a(14),a(5)),s=(a(15),a(4)),l=a(2),b={name:"1jpcp03",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center;"},d={name:"1w7etyh",styles:"width:100%;z-index:10;color:blue;font-size:24px;font-weight:bold;text-align:center;background-color:rgba(255, 255, 255, 0.6);"},u=function(e){var t=e.image,a=(e.idx,e.fabric),i=e.debug;return Object(n.a)("div",{css:Object(l.a)({position:"relative",clipPath:"polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",overflow:"hidden",width:115,height:102,margin:"0 0 0 -27px",backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(a,"/").concat(a).concat(t,".jpg)"),backgroundPosition:"center",":nth-child(even)":{marginTop:50}},"")},!0===i&&Object(n.a)("div",{css:b},Object(n.a)("div",{css:d},"".concat(t))))};var p=function(e){var t=e.setCounts,a=e.hueWidth,i=e.quiltSectionWidth,c=e.quiltSectionHeight,o=e.fabric,r=e.debug,b=[],d="",p="",g="",m=[25];return Object(n.a)("div",{className:"Quilt",css:Object(l.a)({width:85*i,display:"grid",gridTemplateColumns:"repeat(".concat(i,", 85px)"),gridTemplateRows:"repeat(".concat(c,", 100px)"),margin:"20px auto",paddingTop:20,paddingBottom:20,paddingRight:30},"")},Object(s.a)(Array(i*c).keys()).map((function(e,c){var s=function(e,n){var i,c,o=[b[n-e-1],b[n-e],b[n-e+1]],r=[o[0]%a,o[1]%a,o[2]%a],s=1,l=s%a,u=!0,h=!0;do{i=1,c=27,i=Math.ceil(i),c=Math.floor(c),l=(s=Math.floor(Math.random()*(c-i))+i)%a,u=o.indexOf(s)>-1,h=r.indexOf(l)>-1}while(m.indexOf(s)>-1||s===d||l===g||s===p||u||h);return p=d,d=s,g=l,b.push(s),t(s),s}(i,c);return Object(n.a)(u,{key:"hexi-key-".concat(e),idx:c,image:s,debug:r,fabric:o})})))},g={name:"6ymaip",styles:"border-bottom:1px solid grey;margin-bottom:10px;padding-bottom:10px;"},m={name:"1l2zrv3",styles:"display:grid;grid-template-columns:repeat(5, 1fr);"},h={name:"jmbq56",styles:"margin-bottom:6px;"},j={name:"ybjnkk",styles:"font-weight:bold;font-size:16px;text-shadow:0px 0px 2px white;"},O=function(e){var t=e.counts,a=e.hueWidth,i=e.fabric,c=120*a;return Object(n.a)("aside",{css:Object(l.a)({margin:"auto",padding:"1px 20px 20px 20px",width:c,backgroundColor:"#fff",borderRadius:"5px",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.3)"},"")},Object(n.a)("h2",null,"Color Key"),Object(n.a)("div",{css:Object(l.a)({display:"grid",gridTemplateColumns:"repeat(5, 120px)",width:c,fontWeight:"bold",fontSize:24},"")},Object(s.a)(Array(5).keys()).map((function(e,t){return Object(n.a)("div",{key:"Hue-".concat((t+1)%a),css:g},"Hue: ".concat((t+1)%a))}))),Object(n.a)("div",{css:m},Object(s.a)(Array(26).keys()).map((function(e,a){var c=-1!==[25].indexOf(a+1),o=t[a+1]||0;return Object(n.a)("div",{css:h,key:"Image-".concat(a+1)},!c&&Object(n.a)("div",{css:j},Object(n.a)("span",null,"#".concat(a+1,": ")),Object(n.a)("span",{css:Object(l.a)({color:(o<4||o>6)&&"red"},"")},"".concat(t[a+1]||0," Hexis"))),Object(n.a)("div",{key:"orig-image-order-".concat(a+1),css:Object(l.a)({width:120,height:50,backgroundRepeat:"no-repeat",backgroundImage:"url(./images/".concat(i,"/").concat(i).concat(a+1,".jpg)"),backgroundPosition:"center"},"")}))}))))},x={name:"1rvb81",styles:"margin:10px;padding:0;font-size:1.2rem;"},f={name:"in3yi3",styles:"font-weight:bold;"},y=function(e){var t=e.title,a=e.description;return Object(n.a)("p",{css:x},Object(n.a)("span",{css:f},t)," ",a)},v={name:"1tmnpkw",styles:"display:flex;justify-content:flex-start;align-items:center;margin-top:10px;margin-bottom:10px;"},w={name:"y2gfd5",styles:"margin:0;padding:0;width:200px;text-align:right;"},k=function(e){var t=e.label,a=e.children;return Object(n.a)("label",{css:v},Object(n.a)("p",{css:w},t),a)},C={name:"qxz2hf",styles:"margin:20px auto;display:flex;justify-content:space-around;align-items:center;width:calc(100% - 40px);"},S={name:"vrsytd",styles:"border-top:1px solid rgba(0, 0, 0, 0.3);border-bottom:1px solid rgba(0, 0, 0, 0.3);padding-bottom:55px;margin:20px auto;"},W={name:"rm9e7r",styles:"margin-top:40px;margin-bottom:40px;"};var q=function(){var e={},t=Object(i.useState)(18),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(i.useState)(7),l=Object(r.a)(s,2),b=l[0],d=l[1],u=Object(i.useState)("beeCreative"),g=Object(r.a)(u,2),m=g[0],h=g[1],j=Object(i.useState)(!1),x=Object(r.a)(j,2),f=x[0],v=x[1];return Object(n.a)("main",{className:"App"},Object(n.a)("header",{css:C},Object(n.a)("div",null,Object(n.a)("h1",null,"Hexagon Quilt Randomizer"),Object(n.a)("div",null,Object(n.a)(y,{title:"Github:",description:Object(n.a)("a",{href:"https://github.com/knitcodemonkey/hexagon-quilt-map"},"https://github.com/knitcodemonkey/hexagon-quilt-map")}),Object(n.a)(y,{title:"Sample Fabric:",description:'"Bee Creative" by Deb Strain'}),Object(n.a)(y,{title:"Hexagons Wide:",description:c}),Object(n.a)(y,{title:"Hexagons Tall:",description:b}))),Object(n.a)("form",null,Object(n.a)(k,{label:"Hexagons Wide:"},Object(n.a)("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)}})),Object(n.a)(k,{label:"Hexagons Tall:"},Object(n.a)("input",{type:"text",value:b,onChange:function(e){return d(e.target.value)}})),Object(n.a)(k,{label:"Fabric:"},Object(n.a)("select",{value:m,onChange:function(e){return h(e.target.value)}},Object(n.a)("option",{value:"beeCreative"},"Bee Creative by Deb Strain"))),Object(n.a)(k,{label:"Show Image Number:"},Object(n.a)("select",{value:f,onChange:function(){return v(!f)}},Object(n.a)("option",{value:!0},"Yes"),Object(n.a)("option",{value:!1},"No"))))),Object(n.a)("article",{css:S},Object(n.a)(p,{setCounts:function(t){e[t]=(e[t]||0)+1},hueWidth:5,quiltSectionWidth:c,quiltSectionHeight:b,debug:f,fabric:m})),Object(n.a)("footer",{css:W},Object(n.a)(O,{counts:e,hueWidth:5,fabric:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.a)(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d5a320c7.chunk.js.map