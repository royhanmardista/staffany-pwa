(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Adfj:function(n,t,e){"use strict";(function(n){function r(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var o,i,l,a,f,u,c,s,p,m,d=e("Y3FI"),h=e("UutA"),x=function(t){return n(M,null,n(z,null,t.name),n(A,null,t.number))},g=h.a.div(o||(o=r(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n\n  padding: 14px;\n"]))),b=h.a.button(i||(i=r(['\n  height: 60px;\n\n  background: #fdcc71;\n  border-radius: 4px;\n  border: none;\n\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n\n  color: #ffffff;\n\n  margin-bottom: 8px;\n']))),y=h.a.p(l||(l=r(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n']))),w=h.a.p(a||(a=r(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-bottom: 10px;\n']))),j=h.a.button(f||(f=r(['\n  width: 41px;\n  height: 22px;\n\n  background: #ffffff;\n\n  border: 1px solid #9b9b9b;\n  border-radius: 4px;\n\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #000000;\n']))),v=h.a.div(u||(u=r(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),O=h.a.div(c||(c=r(["\n  border-top: 1px solid #d9d9d9;\n"]))),z=h.a.p(s||(s=r(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #5e5e5e;\n\n  margin: 0px;\n  margin-top: 15px;\n']))),A=h.a.p(p||(p=r(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n  margin-top: 10px;\n']))),M=h.a.div(m||(m=r(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));t.a=function(){return n(g,null,n(v,null,n(y,null,"Section 3X"),n(j,null,"S3X")),n(w,null,"Potato Org"),n(O,null),n(b,{onClick:function(){return Object(d.c)("/")}},"💪 Work More"),n(v,null,n(x,{name:"CLOCK IN",number:"09:00"}),n(x,{name:"CLOCK OUT",number:"18:00"}),n(x,{name:"BREAK",number:"30 m"})))}}).call(this,e("hosL").h)},oHjU:function(n,t,e){"use strict";e.r(t),function(n){function r(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,l,a=[],f=!0,u=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;f=!1}else for(;!(f=(r=i.call(e)).done)&&(a.push(r.value),a.length!==t);f=!0);}catch(n){u=!0,o=n}finally{try{if(!f&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(u)throw o}}return a}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var l,a,f,u=e("QRet"),c=e("UutA"),s=e("Adfj"),p=c.a.h1(l||(l=r(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 32px;\n\n  color: #000000;\n\n  margin: 0px;\n']))),m=c.a.h2(a||(a=r(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n\n  color: #000000;\n\n  margin: 0px;\n  margin-bottom: 20px;\n']))),d=c.a.div(f||(f=r(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));t.default=function(){var t=o(Object(u.k)(Date.now()),2),e=t[0];return n(d,null,n(p,null,"Hey Royhan Mardista!"),n(m,null,new Date(e).toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),n(s.a,null))}}.call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-home3.chunk.a0bec.js.map