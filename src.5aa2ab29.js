parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=[],t=[],n='Please fill the word split with comma(,) e.g. "a,b,c,d"',i="button-spin",d="button-edit",o=document.getElementById("button-speak"),u=document.getElementById("form-words"),r=document.getElementById("words"),l=document.getElementById("display-word"),a=document.getElementById("display-word-count"),c=new SpeechSynthesisUtterance;c.onstart=function(){var e,t;o.setAttribute("disabled",!0),null===(e=document.getElementById(d))||void 0===e||e.setAttribute("disabled",!0),null===(t=document.getElementById(i))||void 0===t||t.setAttribute("disabled",!0)},c.onend=function(){var t,n;(o.removeAttribute("disabled"),null===(t=document.getElementById(d))||void 0===t||t.removeAttribute("disabled"),0!==e.length)&&(null===(n=document.getElementById(i))||void 0===n||n.removeAttribute("disabled"))};var s=function(){c.text=l.innerText,window.speechSynthesis.speak(c)},m=function(e){return Math.floor(Math.random()*e)},b=function(e){return e[m(e.length)]},v=function(e){e.querySelectorAll("input, textarea, button").forEach(function(e){e.setAttribute("readonly",!0),e.setAttribute("disabled",!0)})},f=function(e){e.querySelectorAll("input, textarea, button").forEach(function(e){e.removeAttribute("readonly"),e.removeAttribute("disabled")})},y=function(){if(!o.disabled&&(e=r.value?r.value.split(","):[])&&e.length>0){var n=b(e);e=e.filter(function(e){return e!==n}),t.push(n),r.value=e,l.innerText=n,a.innerHTML=e.length||0,console.log(t),s()}},p=function(){l.innerText=n,u.removeAttribute("style"),document.getElementById(i).remove(),document.getElementById(d).remove()},g=function(){var e=document.createElement("button");e.innerText="Spin",e.type="button",e.id=i,e.addEventListener("click",function(e){e.target.setAttribute("disabled",!0),y(),e.target.removeAttribute("disabled")}),document.body.appendChild(e)},E=function(){var e=document.createElement("button");e.innerText="Back to Edit",e.type="button",e.id=d,e.addEventListener("click",function(e){p()}),document.body.appendChild(e)};u.addEventListener("submit",function(e){e.preventDefault(),e.target.style.display="none",t=[],g(),E(),a.innerHTML=r.value?r.value.split(",").length:0}),o.addEventListener("click",function(){s()}),l.innerText=n;
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-k5or8r/src.5aa2ab29.js.map