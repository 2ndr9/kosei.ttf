(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{10:function(n,e,t){"use strict";t.r(e);var i=t(1),o=t.n(i),r=t(3),c=t.n(r),u=t(4),d=t(0),l=o.a.forwardRef((function(n,e){var t=e,o=null,r=null,c=function(){return t.current.getContext("2d")},l=function(n){o=null,r=null},s=function(n,e){var t=c();t.beginPath(),t.globalAlpha=1,null===o||null===r?t.moveTo(n,e):t.moveTo(o,r),t.lineTo(n,e),t.lineCap="square",t.lineWidth=5,t.strokeStyle="#000000",t.stroke(),o=n,r=e},a=Object(i.useState)(),w=Object(u.a)(a,2),h=(w[0],w[1]),f=function(){var n=t.current;h(n.toDataURL("image/png",.85))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("canvas",{id:"canvas",onMouseDown:function(n){if(0===n.button){var e=t.current.getBoundingClientRect(),i=~~(n.clientX-e.left),o=~~(n.clientY-e.top);s(i,o)}},onMouseMove:function(n){if(1===n.buttons){var e=t.current.getBoundingClientRect(),i=~~(n.clientX-e.left),o=~~(n.clientY-e.top);s(i,o)}},onMouseUp:l,onMouseOut:l,ref:t,style:{border:"2px solid"}}),Object(d.jsx)("button",{onClick:function(){c().clearRect(0,0,window.innerWidth,window.innerWidth),f()},children:"\u30ea\u30bb\u30c3\u30c8"}),Object(d.jsx)("button",{onClick:f,children:"\u4fdd\u5b58"})]})})),s=function(){var n=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=n.current.getContext("2d"),t=function(){e.canvas.height=window.innerHeight>window.innerWidth?.8*window.innerWidth:.8*window.innerHeight,e.canvas.width=window.innerHeight>window.innerWidth?.8*window.innerWidth:.8*window.innerHeight};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(d.jsx)("section",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"\u3042"}),Object(d.jsx)(l,{ref:n})]})})};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(s,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4a1b5f30.chunk.js.map