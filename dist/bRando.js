!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bRando=e():t.bRando=e()}(this,(function(){return function(){"use strict";var t={d:function(e,r){for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.r(e),t.d(e,{create:function(){return n}});class i{get CSSSelector(){return this._CSSSelector}get nodes(){return this._nodes}get backgrounds(){return this._backgrounds}set backgrounds(t){Array.isArray(t)&&t.every((t=>"string"==typeof t))?this._backgrounds=t:this._backgrounds=['url("./img/alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat','url("./img/joel-fulgencio-01fAtHwYqo0-unsplash_result.jpg") center/cover no-repeat','url("./img/pawel-nolbert-4u2U8EO9OzY-unsplash_result.jpg") center/cover no-repeat','url("./img/stephan-valentin-oqYLdbuJDQU-unsplash_result.jpg") center/cover no-repeat','url("./img/waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat',"linear-gradient(80deg, #0662A1 25%, #0864c8 75%)"]}get timeout(){return this._timeout}set timeout(t){this._timeout=t&&t>0?t:7500,-1!==this._changer&&(this.pause(),this.play())}get random(){return this._random}set random(t){this._random="boolean"!=typeof t||t}get CSSTransition(){return this._CSSTransition}set CSSTransition(t){this._CSSTransition="string"!=typeof t?"5000ms":t}get lastBackground(){return this._lastBackground}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,"_CSSSelector",""),r(this,"_backgrounds",[]),r(this,"_timeout",0),r(this,"_random",!0),r(this,"_CSSTransition",""),r(this,"_originalCSSBackgrounds",[]),r(this,"_originalCSSPositions",[]),r(this,"_originalCSSZIndexes",[]),r(this,"_changer",-1),r(this,"_isAfterOpaque",!1),r(this,"_lastBackground",-1),this._CSSSelector="string"!=typeof t.CSSSelector?"body":t.CSSSelector,this._nodes=document.querySelectorAll(this.CSSSelector),this.backgrounds=t.CSSBackgrounds,this.timeout=t.timeoutMs,this.random=t.randomOrder,this.CSSTransition=t.CSSTransition,this.nodes.forEach((t=>{this._originalCSSBackgrounds.push(t.style.background),this._originalCSSPositions.push(t.style.position),this._originalCSSZIndexes.push(t.style.zIndex),t.style.position="relative"})),this._styleElement=document.createElement("style"),this._CSSBackgroundVarName=`--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSOpacityVarName=`--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSTransitionVarName=`--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSContentVarName=`--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._styleElement.innerText=`${this.CSSSelector}::after{background:var(${this._CSSBackgroundVarName});content:var(${this._CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this._CSSOpacityVarName});transition: var(${this._CSSTransitionVarName});}`,document.head.append(this._styleElement),this.nodes.forEach((t=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.CSSTransition}`),t.style.setProperty(this._CSSContentVarName,"''"),t.style.zIndex="0"})),this.play()}play(){this.next(),this._changer=window.setInterval((()=>{this.next()}),this.timeout)}pause(){window.clearInterval(this._changer),this._changer=-1}next(){this.backgrounds.length>1?this._lastBackground=this.random?(()=>{let t;do{t=Math.floor(Math.random()*this.backgrounds.length)}while(this.lastBackground===t);return t})():this.lastBackground===this.backgrounds.length-1?this._lastBackground=0:this.lastBackground+1:-1===this._lastBackground&&(this._lastBackground=0),this.nodes.forEach((t=>{t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.CSSTransition}`),this._isAfterOpaque?(t.style.background=this.backgrounds[this.lastBackground],t.style.setProperty(this._CSSOpacityVarName,"0")):(t.style.setProperty(this._CSSBackgroundVarName,this.backgrounds[this.lastBackground]),t.style.setProperty(this._CSSOpacityVarName,"1"))})),this._isAfterOpaque=!this._isAfterOpaque}remove(){this.pause(),this.nodes.forEach(((t,e)=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSContentVarName,"none"),t.style.background=this._originalCSSBackgrounds[e],t.style.position=this._originalCSSPositions[e],t.style.zIndex=this._originalCSSZIndexes[e]})),this._styleElement.remove()}}function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new i(t)}return e}()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9iUmFuZG8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JSYW5kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JSYW5kby8uL3NyYy9iUmFuZG8udHMiLCJ3ZWJwYWNrOi8vYlJhbmRvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJSYW5kb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJiUmFuZG9cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBiUmFuZG8ge1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTU2VsZWN0b3I6IHN0cmluZyA9IFwiXCI7XHJcblx0cHVibGljIGdldCBDU1NTZWxlY3RvcigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX0NTU1NlbGVjdG9yO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9ub2RlczogTm9kZUxpc3Q7XHJcblx0cHVibGljIGdldCBub2RlcygpOiBOb2RlTGlzdCB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbm9kZXM7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX2JhY2tncm91bmRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHB1YmxpYyBnZXQgYmFja2dyb3VuZHMoKTogc3RyaW5nW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2JhY2tncm91bmRzO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IGJhY2tncm91bmRzKHZhbHVlOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG5cdFx0XHR2YWx1ZS5ldmVyeSgoYikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIjtcclxuXHRcdFx0fSlcclxuXHRcdCkge1xyXG5cdFx0XHR0aGlzLl9iYWNrZ3JvdW5kcyA9IHZhbHVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gZGVtbyBiYWNrZ3JvdW5kc1xyXG5cdFx0XHQvLyBwcmV0dGllci1pZ25vcmVcclxuXHRcdFx0dGhpcy5fYmFja2dyb3VuZHMgPSBbXHJcblx0XHRcdFx0J3VybChcIi4vaW1nL2FsZXgta25pZ2h0LXZhQTZFUWlVU280LXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCcsIFxyXG5cdFx0XHRcdCd1cmwoXCIuL2ltZy9qb2VsLWZ1bGdlbmNpby0wMWZBdEh3WXFvMC11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLCBcclxuXHRcdFx0XHQndXJsKFwiLi9pbWcvcGF3ZWwtbm9sYmVydC00dTJVOEVPOU96WS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxyXG5cdFx0XHRcdCd1cmwoXCIuL2ltZy9zdGVwaGFuLXZhbGVudGluLW9xWUxkYnVKRFFVLXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCcsXHJcblx0XHRcdFx0J3VybChcIi4vaW1nL3dhcmFub250LWpvZS1UN3F5TE5Qd2dLQS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQnLFxyXG5cdFx0XHRcdCdsaW5lYXItZ3JhZGllbnQoODBkZWcsICMwNjYyQTEgMjUlLCAjMDg2NGM4IDc1JSknLFxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF90aW1lb3V0OiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBnZXQgdGltZW91dCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWVvdXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUgPiAwKSB7XHJcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSB2YWx1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSA3NTAwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2NoYW5nZXIgIT09IC0xKSB7XHJcblx0XHRcdHRoaXMucGF1c2UoKTtcclxuXHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3JhbmRvbTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIGdldCByYW5kb20oKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmFuZG9tO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IHJhbmRvbSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fcmFuZG9tID0gdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiA/IHRydWUgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfQ1NTVHJhbnNpdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHRwdWJsaWMgZ2V0IENTU1RyYW5zaXRpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9DU1NUcmFuc2l0aW9uO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IENTU1RyYW5zaXRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fQ1NTVHJhbnNpdGlvbiA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiA/IFwiNTAwMG1zXCIgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NCYWNrZ3JvdW5kczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX29yaWdpbmFsQ1NTUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NaSW5kZXhlczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgX2NoYW5nZXI6IG51bWJlciA9IC0xO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRwcm90ZWN0ZWQgX2lzQWZ0ZXJPcGFxdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU0JhY2tncm91bmRWYXJOYW1lOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9DU1NPcGFjaXR5VmFyTmFtZTogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTVHJhbnNpdGlvblZhck5hbWU6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU0NvbnRlbnRWYXJOYW1lOiBzdHJpbmc7XHJcblxyXG5cdHByb3RlY3RlZCBfbGFzdEJhY2tncm91bmQ6IG51bWJlciA9IC0xO1xyXG5cdHB1YmxpYyBnZXQgbGFzdEJhY2tncm91bmQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9sYXN0QmFja2dyb3VuZDtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IHsgQ1NTU2VsZWN0b3I/OiBzdHJpbmc7IENTU0JhY2tncm91bmRzPzogc3RyaW5nW107IHRpbWVvdXRNcz86IG51bWJlcjsgcmFuZG9tT3JkZXI/OiBib29sZWFuOyBDU1NUcmFuc2l0aW9uPzogc3RyaW5nIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5fQ1NTU2VsZWN0b3IgPSB0eXBlb2Ygb3B0aW9ucy5DU1NTZWxlY3RvciAhPT0gXCJzdHJpbmdcIiA/IFwiYm9keVwiIDogb3B0aW9ucy5DU1NTZWxlY3RvcjtcclxuXHRcdHRoaXMuX25vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLkNTU1NlbGVjdG9yKTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZHMgPSBvcHRpb25zLkNTU0JhY2tncm91bmRzO1xyXG5cdFx0dGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0TXM7XHJcblx0XHR0aGlzLnJhbmRvbSA9IG9wdGlvbnMucmFuZG9tT3JkZXI7XHJcblx0XHR0aGlzLkNTU1RyYW5zaXRpb24gPSBvcHRpb25zLkNTU1RyYW5zaXRpb247XHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0dGhpcy5fb3JpZ2luYWxDU1NCYWNrZ3JvdW5kcy5wdXNoKChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kKTsgLy8gYmFja3VwIHRoZSBvcmlnaW5hbCBDU1MgYmFja2dyb3VuZCBwcm9wZXJ0eVxyXG5cdFx0XHR0aGlzLl9vcmlnaW5hbENTU1Bvc2l0aW9ucy5wdXNoKChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wb3NpdGlvbik7IC8vIGJhY2t1cCB0aGUgb3JpZ2luYWwgQ1NTIHBvc2l0aW9uIHByb3BlcnR5XHJcblx0XHRcdHRoaXMuX29yaWdpbmFsQ1NTWkluZGV4ZXMucHVzaCgoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuekluZGV4KTsgLy8gYmFja3VwIHRoZSBvcmlnaW5hbCBDU1Mgei1pbmRleCBwcm9wZXJ0eVxyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIHNldCBlYWNoIGVsZW1lbnQgdG8gYmUgcmVsYXRpdmVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5fQ1NTQmFja2dyb3VuZFZhck5hbWUgPSBgLS1iUmFuZG9CZyR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XHJcblx0XHR0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSA9IGAtLWJSYW5kb09wYWNpdHkke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xyXG5cdFx0dGhpcy5fQ1NTVHJhbnNpdGlvblZhck5hbWUgPSBgLS1iUmFuZG9UcmFuc2l0aW9uJHt0aGlzLkNTU1NlbGVjdG9yLnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJcIil9YDtcclxuXHRcdHRoaXMuX0NTU0NvbnRlbnRWYXJOYW1lID0gYC0tYlJhbmRvQ29udGVudCR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XHJcblx0XHR0aGlzLl9zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7dGhpcy5DU1NTZWxlY3Rvcn06OmFmdGVye2JhY2tncm91bmQ6dmFyKCR7dGhpcy5fQ1NTQmFja2dyb3VuZFZhck5hbWV9KTtjb250ZW50OnZhcigke3RoaXMuX0NTU0NvbnRlbnRWYXJOYW1lfSk7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDotMTtvcGFjaXR5OnZhcigke3RoaXMuX0NTU09wYWNpdHlWYXJOYW1lfSk7dHJhbnNpdGlvbjogdmFyKCR7dGhpcy5fQ1NTVHJhbnNpdGlvblZhck5hbWV9KTt9YDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHRoaXMuX3N0eWxlRWxlbWVudCk7XHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjBcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NUcmFuc2l0aW9uVmFyTmFtZSwgYG9wYWNpdHkgJHt0aGlzLkNTU1RyYW5zaXRpb259YCk7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NDb250ZW50VmFyTmFtZSwgXCInJ1wiKTtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5wbGF5KCk7XHJcblx0fVxyXG5cclxuXHRwbGF5KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5uZXh0KCk7XHJcblx0XHR0aGlzLl9jaGFuZ2VyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0dGhpcy5uZXh0KCk7XHJcblx0XHR9LCB0aGlzLnRpbWVvdXQpO1xyXG5cdH1cclxuXHRwYXVzZSgpOiB2b2lkIHtcclxuXHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2NoYW5nZXIpO1xyXG5cdFx0dGhpcy5fY2hhbmdlciA9IC0xO1xyXG5cdH1cclxuXHRuZXh0KCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZ2V0TmV3UmFuZG9tQmFja2dyb3VuZEluZGV4ID0gKCk6IG51bWJlciA9PiB7XHJcblx0XHRcdGxldCBuZXdJbmRleDogbnVtYmVyO1xyXG5cdFx0XHRkbyB7XHJcblx0XHRcdFx0bmV3SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmJhY2tncm91bmRzLmxlbmd0aCk7XHJcblx0XHRcdH0gd2hpbGUgKHRoaXMubGFzdEJhY2tncm91bmQgPT09IG5ld0luZGV4KTtcclxuXHRcdFx0cmV0dXJuIG5ld0luZGV4O1xyXG5cdFx0fTtcclxuXHRcdGlmICh0aGlzLmJhY2tncm91bmRzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0dGhpcy5fbGFzdEJhY2tncm91bmQgPSB0aGlzLnJhbmRvbSA/IGdldE5ld1JhbmRvbUJhY2tncm91bmRJbmRleCgpIDogdGhpcy5sYXN0QmFja2dyb3VuZCA9PT0gdGhpcy5iYWNrZ3JvdW5kcy5sZW5ndGggLSAxID8gKHRoaXMuX2xhc3RCYWNrZ3JvdW5kID0gMCkgOiB0aGlzLmxhc3RCYWNrZ3JvdW5kICsgMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5fbGFzdEJhY2tncm91bmQgPT09IC0xKSB7XHJcblx0XHRcdHRoaXMuX2xhc3RCYWNrZ3JvdW5kID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU1RyYW5zaXRpb25WYXJOYW1lLCBgb3BhY2l0eSAke3RoaXMuQ1NTVHJhbnNpdGlvbn1gKTtcclxuXHRcdFx0aWYgKCF0aGlzLl9pc0FmdGVyT3BhcXVlKSB7XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU0JhY2tncm91bmRWYXJOYW1lLCB0aGlzLmJhY2tncm91bmRzW3RoaXMubGFzdEJhY2tncm91bmRdKTtcclxuXHRcdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTT3BhY2l0eVZhck5hbWUsIFwiMVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZHNbdGhpcy5sYXN0QmFja2dyb3VuZF07XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjBcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5faXNBZnRlck9wYXF1ZSA9ICF0aGlzLl9pc0FmdGVyT3BhcXVlO1xyXG5cdH1cclxuXHRyZW1vdmUoKTogdm9pZCB7XHJcblx0XHR0aGlzLnBhdXNlKCk7XHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUsIGkpID0+IHtcclxuXHRcdFx0Ly8gaGlkZSBwc2V1ZG8gOjphZnRlciBlbGVtZW50c1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTT3BhY2l0eVZhck5hbWUsIFwiMFwiKTtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU0NvbnRlbnRWYXJOYW1lLCBcIm5vbmVcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5fb3JpZ2luYWxDU1NCYWNrZ3JvdW5kc1tpXTsgLy8gcmVzdG9yZSBvcmlnaW5hbCBDU1MgYmFja2dyb3VuZCBwcm9wZXJ0eVxyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUucG9zaXRpb24gPSB0aGlzLl9vcmlnaW5hbENTU1Bvc2l0aW9uc1tpXTsgLy8gcmVzdG9yZSBvcmlnaW5hbCBDU1MgcG9zaXRpb24gcHJvcGVydHlcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnpJbmRleCA9IHRoaXMuX29yaWdpbmFsQ1NTWkluZGV4ZXNbaV07IC8vIHJlc3RvcmUgb3JpZ2luYWwgQ1NTIHotaW5kZXggcHJvcGVydHlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fc3R5bGVFbGVtZW50LnJlbW92ZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgYlJhbmRvIGZyb20gXCIuL2JSYW5kb1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShvcHRpb25zOiB7IENTU1NlbGVjdG9yPzogc3RyaW5nOyBDU1NCYWNrZ3JvdW5kcz86IHN0cmluZ1tdOyB0aW1lb3V0TXM/OiBudW1iZXI7IHJhbmRvbU9yZGVyPzogYm9vbGVhbjsgQ1NTVHJhbnNpdGlvbj86IHN0cmluZyB9ID0ge30pOiBiUmFuZG8ge1xyXG5cdHJldHVybiBuZXcgYlJhbmRvKG9wdGlvbnMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJiUmFuZG8iLCJDU1NTZWxlY3RvciIsIl9DU1NTZWxlY3RvciIsIm5vZGVzIiwiX25vZGVzIiwiYmFja2dyb3VuZHMiLCJfYmFja2dyb3VuZHMiLCJBcnJheSIsImlzQXJyYXkiLCJldmVyeSIsImIiLCJ0aW1lb3V0IiwiX3RpbWVvdXQiLCJfY2hhbmdlciIsInBhdXNlIiwicGxheSIsInJhbmRvbSIsIl9yYW5kb20iLCJDU1NUcmFuc2l0aW9uIiwiX0NTU1RyYW5zaXRpb24iLCJsYXN0QmFja2dyb3VuZCIsIl9sYXN0QmFja2dyb3VuZCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkNTU0JhY2tncm91bmRzIiwidGltZW91dE1zIiwicmFuZG9tT3JkZXIiLCJmb3JFYWNoIiwiZSIsIl9vcmlnaW5hbENTU0JhY2tncm91bmRzIiwicHVzaCIsInN0eWxlIiwiYmFja2dyb3VuZCIsIl9vcmlnaW5hbENTU1Bvc2l0aW9ucyIsInBvc2l0aW9uIiwiX29yaWdpbmFsQ1NTWkluZGV4ZXMiLCJ6SW5kZXgiLCJfc3R5bGVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9DU1NCYWNrZ3JvdW5kVmFyTmFtZSIsInJlcGxhY2UiLCJfQ1NTT3BhY2l0eVZhck5hbWUiLCJfQ1NTVHJhbnNpdGlvblZhck5hbWUiLCJfQ1NTQ29udGVudFZhck5hbWUiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kIiwic2V0UHJvcGVydHkiLCJuZXh0Iiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibGVuZ3RoIiwibmV3SW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJnZXROZXdSYW5kb21CYWNrZ3JvdW5kSW5kZXgiLCJfaXNBZnRlck9wYXF1ZSIsInJlbW92ZSIsImkiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9