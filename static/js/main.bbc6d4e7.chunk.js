(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var i=t(2),o=t.n(i),r=t(15),c=t.n(r),s=t(6),u=t(16),a=t.n(u),l=t(0),d=o.a.forwardRef((function(e,n){var t=n,o=null,r=null,c=function(){return t.current.getContext("2d")},u=Object(i.useState)(),d=Object(s.a)(u,2),j=d[0],h=d[1],b=Object(i.useState)(""),f=Object(s.a)(b,2),w=f[0],p=f[1],v=function(e){var n=t.current;o=null,r=null,h(n.toDataURL("image/png"))},x=function(e,n){var t=c();t.beginPath(),t.globalAlpha=1,null===o||null===r?t.moveTo(e,n):t.moveTo(o,r),t.lineTo(e,n),t.lineCap="square",t.lineWidth=5,t.strokeStyle="#000000",t.stroke(),o=e,r=n};return Object(l.jsxs)("div",{children:[Object(l.jsx)("canvas",{id:"canvas",onMouseDown:function(e){if(0===e.button){var n=t.current.getBoundingClientRect(),i=~~(e.clientX-n.left),o=~~(e.clientY-n.top);x(i,o)}},onMouseMove:function(e){if(1===e.buttons){var n=t.current.getBoundingClientRect(),i=~~(e.clientX-n.left),o=~~(e.clientY-n.top);x(i,o)}},onMouseUp:v,onMouseOut:v,ref:t,style:{border:"2px solid"}}),Object(l.jsx)("button",{onClick:function(){c().clearRect(0,0,window.innerWidth,window.innerWidth);var e=t.current;h(e.toDataURL("image/png"))},children:"\u30ea\u30bb\u30c3\u30c8"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.a.post("https://18.180.152.54/",{base64:String(j).replace(/^.*,/,""),font_name:w}).then((function(e){console.log(e),window.location.href=window.location.href}))},children:[Object(l.jsxs)("p",{children:["font_name:"," ",Object(l.jsx)("input",{type:"text",value:w,onChange:function(e){return p(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"})]})]})})),j=function(){var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){var n=e.current.getContext("2d"),t=function(){n.canvas.height=window.innerHeight>window.innerWidth?.8*window.innerWidth:.8*window.innerHeight,n.canvas.width=window.innerHeight>window.innerWidth?.8*window.innerWidth:.8*window.innerHeight};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(l.jsx)("div",{children:Object(l.jsx)(d,{ref:e})})},h=(t(40),function(e){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{className:"tsuno"}),Object(l.jsx)("p",{}),Object(l.jsx)("textarea",{className:"input",placeholder:"",style:{width:"100%",height:"900px",fontSize:"60px"}})]})});c.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsxs)("div",{style:{display:"inline"},children:[Object(l.jsx)(j,{}),Object(l.jsx)(h,{})]})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bbc6d4e7.chunk.js.map