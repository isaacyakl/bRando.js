/*!
 * bRando.js v0.1.3
 * https://isaacyakl.github.io/brandojs
 *
 * by Isaac 'yak' L. <i@isaacyakl.com> (https://www.isaacyakl.com/)
 * Built: 1/3/2023, 12:52:43 AM GMT-08:00
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bRando=e():t.bRando=e()}(this,(function(){return function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{create:function(){return s}});var r=JSON.parse('{"Xv":{"KM":"bRando"}}');function n(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class i{get CSSSelector(){return this._CSSSelector}get nodes(){return this._nodes}get backgrounds(){return this._backgrounds}set backgrounds(t){if(Array.isArray(t)&&t.every((t=>"string"==typeof t)))this._backgrounds=t;else{let t=Array.from(document.scripts).find((t=>t.src.includes(r.Xv.KM))),e=void 0===t?"./img/":`${t.src.substring(0,t.src.lastIndexOf(`${r.Xv.KM}.js`))}img/`;this._backgrounds=[`url("${e}alex-knight-vaA6EQiUSo4-unsplash_result.jpg") center/cover no-repeat`,`url("${e}waranont-joe-T7qyLNPwgKA-unsplash_result.jpg") center/cover no-repeat`]}}get timeout(){return this._timeout}set timeout(t){this._timeout=t&&t>0?t:7500,-1!==this._changer&&(this.pause(),this.play())}get random(){return this._random}set random(t){this._random="boolean"!=typeof t||t}get transition(){return this._transition}set transition(t){this._transition="string"!=typeof t?"5000ms":t}get currentBackgroundIndex(){return this._currentBackgroundIndex}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,"_CSSSelector",""),n(this,"_backgrounds",[]),n(this,"_timeout",0),n(this,"_random",!0),n(this,"_transition",""),n(this,"_originalCSSBackgrounds",[]),n(this,"_originalCSSPositions",[]),n(this,"_originalCSSZIndexes",[]),n(this,"_changer",-1),n(this,"_isAfterOpaque",!1),n(this,"_currentBackgroundIndex",-1),this._CSSSelector="string"!=typeof t.CSSSelector?"body":t.CSSSelector,this._nodes=document.querySelectorAll(this.CSSSelector),this.backgrounds=t.backgrounds,this.timeout=t.timeout,this.random=t.random,this.transition=t.transition,this.nodes.forEach((t=>{this._originalCSSBackgrounds.push(t.style.background),this._originalCSSPositions.push(t.style.position),this._originalCSSZIndexes.push(t.style.zIndex),t.style.position="relative"})),this._styleElement=document.createElement("style"),this._CSSBackgroundVarName=`--bRandoBg${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSOpacityVarName=`--bRandoOpacity${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSTransitionVarName=`--bRandoTransition${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._CSSContentVarName=`--bRandoContent${this.CSSSelector.replace(/[^a-z0-9]/gi,"")}`,this._styleElement.innerText=`${this.CSSSelector}::after{background:var(${this._CSSBackgroundVarName});content:var(${this._CSSContentVarName});position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:var(${this._CSSOpacityVarName});transition: var(${this._CSSTransitionVarName});}`,document.head.append(this._styleElement),this.nodes.forEach((t=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.transition}`),t.style.setProperty(this._CSSContentVarName,"''"),t.style.zIndex="0"})),this.play()}play(){this.pause(),this._changer=window.setInterval((()=>{this.next()}),this.timeout)}pause(){window.clearInterval(this._changer),this._changer=-1}next(){const t=()=>{let t;do{t=Math.floor(Math.random()*this.backgrounds.length)}while(this.currentBackgroundIndex===t);return t};-1!==this._changer&&this.play(),this.backgrounds.length>1?this._currentBackgroundIndex=this.random?t():this.currentBackgroundIndex===this.backgrounds.length-1?this._currentBackgroundIndex=0:this.currentBackgroundIndex+1:-1===this._currentBackgroundIndex&&(this._currentBackgroundIndex=0),this.nodes.forEach((t=>{t.style.setProperty(this._CSSTransitionVarName,`opacity ${this.transition}`),this._isAfterOpaque?(t.style.background=this.backgrounds[this.currentBackgroundIndex],t.style.setProperty(this._CSSOpacityVarName,"0")):(t.style.setProperty(this._CSSBackgroundVarName,this.backgrounds[this.currentBackgroundIndex]),t.style.setProperty(this._CSSOpacityVarName,"1"))})),this._isAfterOpaque=!this._isAfterOpaque}remove(){this.pause(),this.nodes.forEach(((t,e)=>{t.style.setProperty(this._CSSOpacityVarName,"0"),t.style.setProperty(this._CSSContentVarName,"none"),t.style.background=this._originalCSSBackgrounds[e],t.style.position=this._originalCSSPositions[e],t.style.zIndex=this._originalCSSZIndexes[e]})),this._styleElement.remove()}isRunning(){return-1!==this._changer}}function s(t){return new i(t)}return e}()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFvQixRQUM3RHJDLEVBQWtCeUIsTUFBTUMsV0FBYTNELEtBQUt3RCx3QkFBd0I4QixHQUNsRXJELEVBQWtCeUIsTUFBTUcsU0FBVzdELEtBQUs0RCxzQkFBc0IwQixHQUM5RHJELEVBQWtCeUIsTUFBTUssT0FBUy9ELEtBQUs4RCxxQkFBcUJ3QixFQUFFLElBRS9EdEYsS0FBS2dFLGNBQWNxQixRQUNwQixDQUtBRSxZQUNDLE9BQTBCLElBQW5CdkYsS0FBSzJDLFFBQ2IsRUMzS00sU0FBUzZDLEVBQU9uQyxHQUN0QixPQUFPLElBQUlwQyxFQUFPb0MsRUFDbkIsQyxTTnBCQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYlJhbmRvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYlJhbmRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iUmFuZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iUmFuZG8vLi9zcmMvYlJhbmRvLnRzIiwid2VicGFjazovL2JSYW5kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiUmFuZG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYlJhbmRvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhY2thZ2VKU09OIGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgY3JlYXRpbmcgYSBDU1MgYmFja2dyb3VuZCBwcm9wZXJ0eSBjaGFuZ2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGJSYW5kbyB7XHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9DU1NTZWxlY3Rvcjogc3RyaW5nID0gXCJcIjtcclxuXHRwdWJsaWMgZ2V0IENTU1NlbGVjdG9yKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fQ1NTU2VsZWN0b3I7XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX25vZGVzOiBOb2RlTGlzdDtcclxuXHRwdWJsaWMgZ2V0IG5vZGVzKCk6IE5vZGVMaXN0IHtcclxuXHRcdHJldHVybiB0aGlzLl9ub2RlcztcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfYmFja2dyb3VuZHM6IHN0cmluZ1tdID0gW107XHJcblx0cHVibGljIGdldCBiYWNrZ3JvdW5kcygpOiBzdHJpbmdbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fYmFja2dyb3VuZHM7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgYmFja2dyb3VuZHModmFsdWU6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdEFycmF5LmlzQXJyYXkodmFsdWUpICYmXHJcblx0XHRcdHZhbHVlLmV2ZXJ5KChiKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBiID09PSBcInN0cmluZ1wiO1xyXG5cdFx0XHR9KVxyXG5cdFx0KSB7XHJcblx0XHRcdHRoaXMuX2JhY2tncm91bmRzID0gdmFsdWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgc2NyaXB0RWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnNjcmlwdHMpLmZpbmQoKGUpID0+IGUuc3JjLmluY2x1ZGVzKHBhY2thZ2VKU09OLmRldGFpbHMuc3R5bGl6ZWROYW1lKSk7XHJcblxyXG5cdFx0XHRsZXQgc2NyaXB0c1BhdGggPSBzY3JpcHRFbCA9PT0gdW5kZWZpbmVkID8gXCIuL2ltZy9cIiA6IGAke3NjcmlwdEVsLnNyYy5zdWJzdHJpbmcoMCwgc2NyaXB0RWwuc3JjLmxhc3RJbmRleE9mKGAke3BhY2thZ2VKU09OLmRldGFpbHMuc3R5bGl6ZWROYW1lfS5qc2ApKX1pbWcvYDtcclxuXHJcblx0XHRcdC8vIGRlbW8gYmFja2dyb3VuZHNcclxuXHRcdFx0Ly8gcHJldHRpZXItaWdub3JlXHJcblx0XHRcdHRoaXMuX2JhY2tncm91bmRzID0gW1xyXG5cdFx0XHRcdGB1cmwoXCIke3NjcmlwdHNQYXRofWFsZXgta25pZ2h0LXZhQTZFUWlVU280LXVuc3BsYXNoX3Jlc3VsdC5qcGdcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdGAsIFxyXG5cdFx0XHRcdGB1cmwoXCIke3NjcmlwdHNQYXRofXdhcmFub250LWpvZS1UN3F5TE5Qd2dLQS11bnNwbGFzaF9yZXN1bHQuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXRgLFxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF90aW1lb3V0OiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBnZXQgdGltZW91dCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RpbWVvdXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUgPiAwKSB7XHJcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSB2YWx1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSA3NTAwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2NoYW5nZXIgIT09IC0xKSB7XHJcblx0XHRcdHRoaXMucGF1c2UoKTtcclxuXHRcdFx0dGhpcy5wbGF5KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgX3JhbmRvbTogYm9vbGVhbiA9IHRydWU7XHJcblx0cHVibGljIGdldCByYW5kb20oKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmFuZG9tO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IHJhbmRvbSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fcmFuZG9tID0gdHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIiA/IHRydWUgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBfdHJhbnNpdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHRwdWJsaWMgZ2V0IHRyYW5zaXRpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl90cmFuc2l0aW9uO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IHRyYW5zaXRpb24odmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5fdHJhbnNpdGlvbiA9IHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiA/IFwiNTAwMG1zXCIgOiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NCYWNrZ3JvdW5kczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX29yaWdpbmFsQ1NTUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfb3JpZ2luYWxDU1NaSW5kZXhlczogc3RyaW5nW10gPSBbXTtcclxuXHRwcm90ZWN0ZWQgX2NoYW5nZXI6IG51bWJlciA9IC0xO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfc3R5bGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRwcm90ZWN0ZWQgX2lzQWZ0ZXJPcGFxdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU0JhY2tncm91bmRWYXJOYW1lOiBzdHJpbmc7XHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9DU1NPcGFjaXR5VmFyTmFtZTogc3RyaW5nO1xyXG5cdHByb3RlY3RlZCByZWFkb25seSBfQ1NTVHJhbnNpdGlvblZhck5hbWU6IHN0cmluZztcclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX0NTU0NvbnRlbnRWYXJOYW1lOiBzdHJpbmc7XHJcblxyXG5cdHByb3RlY3RlZCBfY3VycmVudEJhY2tncm91bmRJbmRleDogbnVtYmVyID0gLTE7XHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBHZXQgdGhlIGluZGV4IG9mIHRoZSBiYWNrZ3JvdW5kIGN1cnJlbnRseSBiZWluZyBkaXNwbGF5ZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBjdXJyZW50QmFja2dyb3VuZEluZGV4KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudEJhY2tncm91bmRJbmRleDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBiYWNrZ3JvdW5kIGNoYW5nZXIgaW5zdGFuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuIFRvIGNyZWF0ZSBhIGRlbW8gaW5zdGFuY2UsIG9taXQgdGhlIG9wdGlvbnMgcGFyYW1ldGVyLlxyXG5cdCAqIEBjb25zdHJ1Y3RvclxyXG5cdCAqIEBjb25zdHJ1Y3RzIGJSYW5kb1xyXG5cdCAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBvZiBvcHRpb25hbCBvcHRpb25zXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogeyBDU1NTZWxlY3Rvcj86IHN0cmluZzsgYmFja2dyb3VuZHM/OiBzdHJpbmdbXTsgdGltZW91dD86IG51bWJlcjsgcmFuZG9tPzogYm9vbGVhbjsgdHJhbnNpdGlvbj86IHN0cmluZyB9ID0ge30pIHtcclxuXHRcdHRoaXMuX0NTU1NlbGVjdG9yID0gdHlwZW9mIG9wdGlvbnMuQ1NTU2VsZWN0b3IgIT09IFwic3RyaW5nXCIgPyBcImJvZHlcIiA6IG9wdGlvbnMuQ1NTU2VsZWN0b3I7XHJcblx0XHR0aGlzLl9ub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5DU1NTZWxlY3Rvcik7XHJcblx0XHR0aGlzLmJhY2tncm91bmRzID0gb3B0aW9ucy5iYWNrZ3JvdW5kcztcclxuXHRcdHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcclxuXHRcdHRoaXMucmFuZG9tID0gb3B0aW9ucy5yYW5kb207XHJcblx0XHR0aGlzLnRyYW5zaXRpb24gPSBvcHRpb25zLnRyYW5zaXRpb247XHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0dGhpcy5fb3JpZ2luYWxDU1NCYWNrZ3JvdW5kcy5wdXNoKChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kKTsgLy8gYmFja3VwIHRoZSBvcmlnaW5hbCBDU1MgYmFja2dyb3VuZCBwcm9wZXJ0eVxyXG5cdFx0XHR0aGlzLl9vcmlnaW5hbENTU1Bvc2l0aW9ucy5wdXNoKChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wb3NpdGlvbik7IC8vIGJhY2t1cCB0aGUgb3JpZ2luYWwgQ1NTIHBvc2l0aW9uIHByb3BlcnR5XHJcblx0XHRcdHRoaXMuX29yaWdpbmFsQ1NTWkluZGV4ZXMucHVzaCgoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuekluZGV4KTsgLy8gYmFja3VwIHRoZSBvcmlnaW5hbCBDU1Mgei1pbmRleCBwcm9wZXJ0eVxyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIHNldCBlYWNoIGVsZW1lbnQgdG8gYmUgcmVsYXRpdmVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5fQ1NTQmFja2dyb3VuZFZhck5hbWUgPSBgLS1iUmFuZG9CZyR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XHJcblx0XHR0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSA9IGAtLWJSYW5kb09wYWNpdHkke3RoaXMuQ1NTU2VsZWN0b3IucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIlwiKX1gO1xyXG5cdFx0dGhpcy5fQ1NTVHJhbnNpdGlvblZhck5hbWUgPSBgLS1iUmFuZG9UcmFuc2l0aW9uJHt0aGlzLkNTU1NlbGVjdG9yLnJlcGxhY2UoL1teYS16MC05XS9naSwgXCJcIil9YDtcclxuXHRcdHRoaXMuX0NTU0NvbnRlbnRWYXJOYW1lID0gYC0tYlJhbmRvQ29udGVudCR7dGhpcy5DU1NTZWxlY3Rvci5yZXBsYWNlKC9bXmEtejAtOV0vZ2ksIFwiXCIpfWA7XHJcblx0XHR0aGlzLl9zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7dGhpcy5DU1NTZWxlY3Rvcn06OmFmdGVye2JhY2tncm91bmQ6dmFyKCR7dGhpcy5fQ1NTQmFja2dyb3VuZFZhck5hbWV9KTtjb250ZW50OnZhcigke3RoaXMuX0NTU0NvbnRlbnRWYXJOYW1lfSk7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDotMTtvcGFjaXR5OnZhcigke3RoaXMuX0NTU09wYWNpdHlWYXJOYW1lfSk7dHJhbnNpdGlvbjogdmFyKCR7dGhpcy5fQ1NTVHJhbnNpdGlvblZhck5hbWV9KTt9YDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHRoaXMuX3N0eWxlRWxlbWVudCk7XHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU09wYWNpdHlWYXJOYW1lLCBcIjBcIik7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NUcmFuc2l0aW9uVmFyTmFtZSwgYG9wYWNpdHkgJHt0aGlzLnRyYW5zaXRpb259YCk7XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NDb250ZW50VmFyTmFtZSwgXCInJ1wiKTtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5wbGF5KCk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIFBsYXlzIHRoZSBiYWNrZ3JvdW5kIGNoYW5nZXIgaXQgaXMgY2FsbGVkIG9uLlxyXG5cdCAqL1xyXG5cdHBsYXkoKTogdm9pZCB7XHJcblx0XHR0aGlzLnBhdXNlKCk7XHJcblx0XHR0aGlzLl9jaGFuZ2VyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0dGhpcy5uZXh0KCk7XHJcblx0XHR9LCB0aGlzLnRpbWVvdXQpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBQYXVzZXMgdGhlIGJhY2tncm91bmQgY2hhbmdlciBpdCBpcyBjYWxsZWQgb24uXHJcblx0ICovXHJcblx0cGF1c2UoKTogdm9pZCB7XHJcblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9jaGFuZ2VyKTtcclxuXHRcdHRoaXMuX2NoYW5nZXIgPSAtMTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogU3dpdGNoZXMgdG8gdGhlIG5leHQgYmFja2dyb3VuZCBvZiB0aGUgY2hhbmdlciBpdCBpcyBjYWxsZWQgb24uXHJcblx0ICovXHJcblx0bmV4dCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGdldE5ld1JhbmRvbUJhY2tncm91bmRJbmRleCA9ICgpOiBudW1iZXIgPT4ge1xyXG5cdFx0XHRsZXQgbmV3SW5kZXg6IG51bWJlcjtcclxuXHRcdFx0ZG8ge1xyXG5cdFx0XHRcdG5ld0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5iYWNrZ3JvdW5kcy5sZW5ndGgpO1xyXG5cdFx0XHR9IHdoaWxlICh0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kSW5kZXggPT09IG5ld0luZGV4KTtcclxuXHRcdFx0cmV0dXJuIG5ld0luZGV4O1xyXG5cdFx0fTtcclxuXHRcdC8vIGlmIGEgY2hhbmdlciBleGlzdHMgcmVzZXQgaXRcclxuXHRcdGlmICh0aGlzLl9jaGFuZ2VyICE9PSAtMSkge1xyXG5cdFx0XHR0aGlzLnBsYXkoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmJhY2tncm91bmRzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0dGhpcy5fY3VycmVudEJhY2tncm91bmRJbmRleCA9IHRoaXMucmFuZG9tID8gZ2V0TmV3UmFuZG9tQmFja2dyb3VuZEluZGV4KCkgOiB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kSW5kZXggPT09IHRoaXMuYmFja2dyb3VuZHMubGVuZ3RoIC0gMSA/ICh0aGlzLl9jdXJyZW50QmFja2dyb3VuZEluZGV4ID0gMCkgOiB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kSW5kZXggKyAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLl9jdXJyZW50QmFja2dyb3VuZEluZGV4ID09PSAtMSkge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50QmFja2dyb3VuZEluZGV4ID0gMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU1RyYW5zaXRpb25WYXJOYW1lLCBgb3BhY2l0eSAke3RoaXMudHJhbnNpdGlvbn1gKTtcclxuXHRcdFx0aWYgKCF0aGlzLl9pc0FmdGVyT3BhcXVlKSB7XHJcblx0XHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuX0NTU0JhY2tncm91bmRWYXJOYW1lLCB0aGlzLmJhY2tncm91bmRzW3RoaXMuY3VycmVudEJhY2tncm91bmRJbmRleF0pO1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIxXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5iYWNrZ3JvdW5kc1t0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kSW5kZXhdO1xyXG5cdFx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2lzQWZ0ZXJPcGFxdWUgPSAhdGhpcy5faXNBZnRlck9wYXF1ZTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgaXQgaXMgY2FsbGVkIG9uIGZyb20gRE9NIGFuZCByZXZlcnRzIGFsbCBzZWxlY3RlZCBIVE1MIGVsZW1lbnRzIHRvIHRoZWlyIG9yaWdpbmFsIHN0YXRlLlxyXG5cdCAqL1xyXG5cdHJlbW92ZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMucGF1c2UoKTtcclxuXHRcdHRoaXMubm9kZXMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG5cdFx0XHQvLyBoaWRlIHBzZXVkbyA6OmFmdGVyIGVsZW1lbnRzXHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLl9DU1NPcGFjaXR5VmFyTmFtZSwgXCIwXCIpO1xyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuc2V0UHJvcGVydHkodGhpcy5fQ1NTQ29udGVudFZhck5hbWUsIFwibm9uZVwiKTtcclxuXHRcdFx0KGUgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLl9vcmlnaW5hbENTU0JhY2tncm91bmRzW2ldOyAvLyByZXN0b3JlIG9yaWdpbmFsIENTUyBiYWNrZ3JvdW5kIHByb3BlcnR5XHJcblx0XHRcdChlIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wb3NpdGlvbiA9IHRoaXMuX29yaWdpbmFsQ1NTUG9zaXRpb25zW2ldOyAvLyByZXN0b3JlIG9yaWdpbmFsIENTUyBwb3NpdGlvbiBwcm9wZXJ0eVxyXG5cdFx0XHQoZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuekluZGV4ID0gdGhpcy5fb3JpZ2luYWxDU1NaSW5kZXhlc1tpXTsgLy8gcmVzdG9yZSBvcmlnaW5hbCBDU1Mgei1pbmRleCBwcm9wZXJ0eVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9zdHlsZUVsZW1lbnQucmVtb3ZlKCk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGJhY2tncm91bmQgY2hhbmdlciBpcyBydW5uaW5nLlxyXG5cdCAqIEByZXR1cm5zIFRoZSBzdGF0ZSBvZiB0aGUgY2hhbmdlclxyXG5cdCAqL1xyXG5cdGlzUnVubmluZygpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLl9jaGFuZ2VyICE9PSAtMSA/IHRydWUgOiBmYWxzZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgYlJhbmRvIH0gZnJvbSBcIi4vYlJhbmRvXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIGJSYW5kbyBpbnN0YW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgb3B0aW9ucy5cclxuICpcclxuICogQHJlbWFya3MgVG8gY3JlYXRlIGEgZGVtbyBpbnN0YW5jZSBmb3IgdGVzdGluZywgb21pdCB0aGUgb3B0aW9ucyBwYXJhbWV0ZXIuXHJcbiAqIGBgYFxyXG4gKiBsZXQgZGVtbyA9IGJSYW5kby5jcmVhdGUoKTsgLy8gQXR0YWNoZXMgdG8gPGJvZHk+IGVsZW1lbnQgYnkgZGVmYXVsdFxyXG4gKiBgYGBcclxuICogQGV4YW1wbGVcclxuICogLy8gU2V0IG9wdGlvbnNcclxuICogY29uc3Qgb3B0aW9ucyA9IHtcclxuICogXHRDU1NTZWxlY3RvcjogXCJtYWluXCIsXHJcbiAqIFx0YmFja2dyb3VuZHM6IFtcclxuICogXHRcdFwicGlua1wiLFxyXG4gKiBcdFx0XCJicm93blwiLFxyXG4gKiBcdFx0XCJ0ZWFsXCJcclxuICogXHRdLFxyXG4gKiBcdHRpbWVvdXQ6IDUwMDAsXHJcbiAqIFx0cmFuZG9tOiBmYWxzZSxcclxuICogXHR0cmFuc2l0aW9uOiBcIjUwMG1zIGVhc2UtaW4tb3V0XCIsXHJcbiAqIH07XHJcbiAqXHJcbiAqIGxldCBiYWNrZ3JvdW5kQ2hhbmdlciA9IGJSYW5kby5jcmVhdGUob3B0aW9ucyk7IC8vIENyZWF0ZSBuZXcgYmFja2dyb3VuZCBjaGFuZ2VyXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBvZiBvcHRpb25zXHJcbiAqIEByZXR1cm5zIEEgbmV3IHsgQGxpbmsgYlJhbmRvIH0gaW5zdGFuY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUob3B0aW9ucz86IHsgQ1NTU2VsZWN0b3I/OiBzdHJpbmc7IGJhY2tncm91bmRzPzogc3RyaW5nW107IHRpbWVvdXQ/OiBudW1iZXI7IHJhbmRvbT86IGJvb2xlYW47IHRyYW5zaXRpb24/OiBzdHJpbmcgfSk6IGJSYW5kbyB7XHJcblx0cmV0dXJuIG5ldyBiUmFuZG8ob3B0aW9ucyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInRoaXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsImJSYW5kbyIsIkNTU1NlbGVjdG9yIiwiX0NTU1NlbGVjdG9yIiwibm9kZXMiLCJfbm9kZXMiLCJiYWNrZ3JvdW5kcyIsIl9iYWNrZ3JvdW5kcyIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5IiwiYiIsInNjcmlwdEVsIiwiZnJvbSIsImRvY3VtZW50Iiwic2NyaXB0cyIsImZpbmQiLCJlIiwic3JjIiwiaW5jbHVkZXMiLCJwYWNrYWdlSlNPTiIsInNjcmlwdHNQYXRoIiwidW5kZWZpbmVkIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJ0aW1lb3V0IiwiX3RpbWVvdXQiLCJfY2hhbmdlciIsInBhdXNlIiwicGxheSIsInJhbmRvbSIsIl9yYW5kb20iLCJ0cmFuc2l0aW9uIiwiX3RyYW5zaXRpb24iLCJjdXJyZW50QmFja2dyb3VuZEluZGV4IiwiX2N1cnJlbnRCYWNrZ3JvdW5kSW5kZXgiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIl9vcmlnaW5hbENTU0JhY2tncm91bmRzIiwicHVzaCIsInN0eWxlIiwiYmFja2dyb3VuZCIsIl9vcmlnaW5hbENTU1Bvc2l0aW9ucyIsInBvc2l0aW9uIiwiX29yaWdpbmFsQ1NTWkluZGV4ZXMiLCJ6SW5kZXgiLCJfc3R5bGVFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9DU1NCYWNrZ3JvdW5kVmFyTmFtZSIsInJlcGxhY2UiLCJfQ1NTT3BhY2l0eVZhck5hbWUiLCJfQ1NTVHJhbnNpdGlvblZhck5hbWUiLCJfQ1NTQ29udGVudFZhck5hbWUiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kIiwic2V0UHJvcGVydHkiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsIm5leHQiLCJjbGVhckludGVydmFsIiwiZ2V0TmV3UmFuZG9tQmFja2dyb3VuZEluZGV4IiwibmV3SW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJfaXNBZnRlck9wYXF1ZSIsInJlbW92ZSIsImkiLCJpc1J1bm5pbmciLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9