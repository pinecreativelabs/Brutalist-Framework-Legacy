//////////////////////////////////////////////////////////////////////////////
//  BELL - Brutal Extension Element Library  2.4                            //
//////////////////////////////////////////////////////////////////////////////

/* Audio Player */
!function(d){var i='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" style="margin-top: -4px;"><path fill="white" stroke="white" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/></svg>',a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" style="margin-top: -4px;"><path fill="white" stroke="white" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"/></svg>',s=!1;function o(t){d("audio").each(function(){this!=t&&this.pause()}),d(t).data("played_already",1),d(".baudio-play").html(i),t.paused?(d(t).parent().find(".baudio-play").html(a),t.play()):t.pause()}function r(t){if(s){var i=s.offset().left,a=d(s.siblings(".baudio-progress")[0]);t.pageX<i?a.css("width",0):t.pageX>i+s.width()?a.css("width","100%"):a.css("width",t.pageX-i)}}d.fn.fraudio=function(){this.filter("audio").each(function(){$fraudio=d('<div class="baudio-wrap">\t\t\t<audio></audio>\t\t\t<div class="baudio-play-wrap">\t\t\t\t<span class="baudio-play">\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" style="margin-top: -4px;"><path fill="white" stroke="white" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/></svg>\t\t\t\t</span>\t\t\t</div>\t\t\t<div class="baudio-text">\t\t\t\t<div class="baudio-title"></div>\t\t\t\t<div class="baudio-artist"></div>\t\t\t</div>\t\t\t<div class="baudio-progress"></div>\t\t\t<div class="baudio-progress-click"></div>\t\t</div>'),$fraudio.find("audio").replaceWith(d(this).clone()),$fraudio.find(".baudio-title").html(d(this).attr("data-title")),$fraudio.find(".baudio-artist").html(d(this).attr("data-artist")),d(this).attr("autoplay")&&($fraudio.find("audio").data("played_already",1),$fraudio.find(".baudio-play").html(a)),d(this).replaceWith($fraudio)}),d(".baudio-play").click(function(){o(d(this).closest(".baudio-wrap").find("audio")[0])}),d(".baudio").on("timeupdate",function(){if(!s){var t=d(this).siblings(".baudio-progress")[0];d(t).css("width",this.currentTime/this.duration*100+"%")}}),d("audio").on("ended",function(){d(this).parent().find(".baudio-play").html(i)}),d(".baudio-progress-click").on("mousedown",function(){var t=d(this).siblings("audio")[0];d(t).data("played_already")?s=d(this):o(t)}),d(document).on("mousemove",r),d(document).on("mouseup mouseleave",function(t){if(s){r(t);var i=s.siblings("audio")[0];i.currentTime=t.offsetX/s.width()*i.duration,s=!1}})},d(function(){d(".baudio").fraudio()})}(jQuery);

/* Video Player */
function browserSniff(){var e,n,t,o=(navigator.appVersion,navigator.userAgent),r=navigator.appName,i=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10);return navigator.appVersion.indexOf("Windows NT")!==-1&&navigator.appVersion.indexOf("rv:11")!==-1?(r="IE",i="11;"):(n=o.indexOf("MSIE"))!==-1?(r="IE",i=o.substring(n+5)):(n=o.indexOf("Chrome"))!==-1?(r="Chrome",i=o.substring(n+7)):(n=o.indexOf("Safari"))!==-1?(r="Safari",i=o.substring(n+7),(n=o.indexOf("Version"))!==-1&&(i=o.substring(n+8))):(n=o.indexOf("Firefox"))!==-1?(r="Firefox",i=o.substring(n+8)):(e=o.lastIndexOf(" ")+1)<(n=o.lastIndexOf("/"))&&(r=o.substring(e,n),i=o.substring(n+1),r.toLowerCase()==r.toUpperCase()&&(r=navigator.appName)),(t=i.indexOf(";"))!==-1&&(i=i.substring(0,t)),(t=i.indexOf(" "))!==-1&&(i=i.substring(0,t)),s=parseInt(""+i,10),isNaN(s)&&(i=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10)),[r,s]}function showControls(e){e.setAttribute("controls","controls")}function togglePlay(e,n){e[e.paused?"play":"pause"](),e.paused?n.classList.remove("is-playing"):n.classList.add("is-playing")}function updateButton(e,n){var t=e.paused?iconPlay:iconPause;n.forEach(function(e){return e.innerHTML=t})}function skip(){video.currentTime+=parseFloat(this.dataset.skip)}function toggleVolume(e,n){var t=e.volume,o=iconVolumeMedium;1==t?(t=0,o=iconVolumeMute):.5==t?(t=1,o=iconVolumeMedium):(t=.5,o=iconVolumeLow),e.volume=t,n.innerHTML=o}function handleRangeUpdate(){video[this.name]=this.value}function handleProgress(e,n){var t=e.currentTime/e.duration*100;n.style.flexBasis=t+"%"}function scrub(e,n,t){var o=e.offsetX/t.offsetWidth*n.duration;n.currentTime=o}function wrapPlayers(){document.querySelectorAll("video").forEach(function(e){var n=document.createElement("div");n.classList.add("vplay__player"),e.parentNode.insertBefore(n,e),n.appendChild(e)})}function buildControls(e){var n=[];return n.push('<button class="'+e+'__button--big toggle" title="Toggle Play">'+iconPlay+"</button>"),n.push('<div class="'+e+'__controls vplay__controls">'),n.push('<button class="'+e+'__button toggle" title="Toggle Video">'+iconPlay+"</button>",'<div class="progress">','<div class="progress__filled"></div>',"</div>",'<button class="'+e+'__button volume" title="Volume">'+iconVolumeMedium+"</button>",'<button class="'+e+'__button fullscreen" title="Full Screen">'+iconExpand+"</button>"),n.push("</div>"),n.join("")}function attachSkin(e){return void 0!==e&&""!=e?e:"default"}function showTitle(e,n){return void 0!==n&&""!=n&&'<div class="'+e+'__title">'+n+"</div>"}function addOverlay(e,n){if(1==n)e.classList.add("vplay__overlay");else{if(2!=n)return;e.classList.add("vplay__overlay--2")}}function addColor(e,n){if(void 0!==n&&""!=n){var t=e.querySelectorAll("button");e.querySelector(".progress__filled").style.background=n,t.forEach(function(e){return e.style.color=n})}}function toggleFullScreen(e,n){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?(e.classList.remove("vplay__fullscreen"),document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),isFullscreen=!1,n.innerHTML=iconExpand):(e.classList.add("vplay__fullscreen"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),isFullscreen=!0,n.innerHTML=iconCompress)}function onFullScreen(e,n){null!==document.webkitFullscreenElement||(n.classList.remove("vplay__fullscreen"),n.querySelector(".fullscreen").innerHTML=iconExpand)}function addListenerMulti(e,n,t){for(var o=n.split(" "),r=0,i=o.length;r<i;r++)e.addEventListener(o[r],t,!1)}!function(){function e(e){this.element=e}var n=function(e){return new RegExp("(^| )"+e+"( |$)")},t=function(e,n,t){for(var o=0;o<e.length;o++)n.call(t,e[o])};e.prototype={add:function(){t(arguments,function(e){this.contains(e)||(this.element.className+=" "+e)},this)},remove:function(){t(arguments,function(e){this.element.className=this.element.className.replace(n(e),"")},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(e){return n(e).test(this.element.className)},replace:function(e,n){this.remove(e),this.add(n)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new e(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=e.prototype.replace)}(),function(){if("function"==typeof NodeList.prototype.forEach)return!1;NodeList.prototype.forEach=Array.prototype.forEach}();var obj={};obj.browserInfo=browserSniff(),obj.browserName=obj.browserInfo[0],obj.browserVersion=obj.browserInfo[1],wrapPlayers();var players=document.querySelectorAll(".vplay__player"),iconPlay='<i class="vplay-play"></i>',iconPause='<i class="vplay-pause"></i>',iconVolumeMute='<i class="vplay-volume-mute"></i>',iconVolumeMedium='<i class="vplay-volume-medium"></i>',iconVolumeLow='<i class="vplay-volume-low"></i>',iconExpand='<i class="vplay-expand"></i>',iconCompress='<i class="vplay-compress"></i>';players.forEach(function(e){var n=e.querySelector("video"),t=attachSkin(n.dataset.skin);e.classList.add(t),addOverlay(e,n.dataset.overlay);var o=showTitle(t,n.dataset.title);o&&e.insertAdjacentHTML("beforeend",o);var r=buildControls(t);e.insertAdjacentHTML("beforeend",r),addColor(e,n.dataset.color);var i=e.querySelector("."+t+"__controls"),s=e.querySelector(".progress"),l=e.querySelector(".progress__filled"),c=e.querySelectorAll(".toggle"),a=(e.querySelectorAll("[data-skip]"),e.querySelectorAll("."+t+"__slider"),e.querySelector(".volume")),u=e.querySelector(".fullscreen");"IE"!==obj.browserName||8!==obj.browserVersion&&9!==obj.browserVersion||(showControls(n),i.style.display="none"),n.addEventListener("click",function(){togglePlay(this,e)}),n.addEventListener("play",function(){updateButton(this,c)}),n.addEventListener("pause",function(){updateButton(this,c)}),n.addEventListener("timeupdate",function(){handleProgress(this,l)}),c.forEach(function(t){return t.addEventListener("click",function(){togglePlay(n,e)})}),a.addEventListener("click",function(){toggleVolume(n,a)});var d=!1;s.addEventListener("click",function(e){scrub(e,n,s)}),s.addEventListener("mousemove",function(e){return d&&scrub(e,n,s)}),s.addEventListener("mousedown",function(){return d=!0}),s.addEventListener("mouseup",function(){return d=!1}),u.addEventListener("click",function(n){return toggleFullScreen(e,u)}),addListenerMulti(e,"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",function(n){return onFullScreen(n,e)})});

/* Gifplayer */
var Zepto=function(){function L(t){return null==t?String(t):C[O.call(t)]||"object"}function j(t){return"function"==L(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function z(t){return"object"==L(t)}function D(t){return z(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function V(t){return"number"==typeof t.length}function _(t){return s.call(t,function(t){return null!=t})}function B(t){return t.length>0?n.fn.concat.apply([],t):t}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function F(t){return t in c?c[t]:c[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function I(t,e){return"number"!=typeof e||l[q(t)]?e:e+"px"}function R(t){var e,n;return f[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]}function H(t){return"children"in t?u.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function J(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function U(n,i,r){for(e in i)r&&(D(i[e])||$(i[e]))?(D(i[e])&&!D(n[e])&&(n[e]={}),$(i[e])&&!$(n[e])&&(n[e]=[]),U(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function X(t,e){return null==e?n(t):n(t).filter(e)}function Y(t,e,n,i){return j(e)?e.call(t,n,i):e}function W(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function G(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function K(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function Q(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)Q(t.childNodes[n],e)}var t,e,n,i,S,T,r=[],o=r.concat,s=r.filter,u=r.slice,a=window.document,f={},c={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/^(?:body|html)$/i,g=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],y=["after","prepend","before","append"],w=a.createElement("table"),E=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:w,thead:w,tfoot:w,td:E,th:E,"*":a.createElement("div")},x=/complete|loaded|interactive/,N=/^[\w-]*$/,C={},O=C.toString,P={},A=a.createElement("div"),Z={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},$=Array.isArray||function(t){return t instanceof Array};return P.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=A).appendChild(t),i=~P.qsa(r,e).indexOf(t),o&&A.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},T=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},P.fragment=function(e,i,r){var o,s,f;return p.test(e)&&(o=n(a.createElement(RegExp.$1))),o||(e.replace&&(e=e.replace(d,"<$1></$2>")),i===t&&(i=h.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,o=n.each(u.call(f.childNodes),function(){f.removeChild(this)})),D(r)&&(s=n(o),n.each(r,function(t,e){v.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},P.Z=function(t,e){return new J(t,e)},P.isZ=function(t){return t instanceof P.Z},P.init=function(e,i){var r;if(!e)return P.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&h.test(e))r=P.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=P.qsa(a,e)}else{if(j(e))return n(a).ready(e);if(P.isZ(e))return e;if($(e))r=_(e);else if(z(e))r=[e],e=null;else if(h.test(e))r=P.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=P.qsa(a,e)}}return P.Z(r,e)},n=function(t,e){return P.init(t,e)},n.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){U(t,n,e)}),t},P.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=N.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=j,n.isWindow=k,n.isArray=$,n.isPlainObject=D,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=S,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(t,e){var n,r,o,i=[];if(V(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return B(i)},n.each=function(t,e){var n,i;if(V(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){C["[object "+e+"]"]=e.toLowerCase()}),n.fn={constructor:P.Z,length:0,forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,splice:r.splice,indexOf:r.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=P.isZ(e)?e.toArray():e;return o.apply(P.isZ(this)?this.toArray():this,n)},map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(u.apply(this,arguments))},ready:function(t){return x.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?u.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return j(t)?this.not(this.not(t)):n(s.call(this,function(e){return P.matches(e,t)}))},add:function(t,e){return n(T(this.concat(n(t,e))))},is:function(t){return this.length>0&&P.matches(this[0],t)},not:function(e){var i=[];if(j(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):V(e)&&j(e.item)?u.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return z(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!z(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!z(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(P.qsa(this[0],t)):this.map(function(){return P.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:P.matches(i,t));)i=i!==e&&!M(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return X(e,t)},parent:function(t){return X(T(this.pluck("parentNode")),t)},children:function(t){return X(this.map(function(){return H(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return X(this.map(function(t,e){return s.call(H(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=R(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=j(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=j(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(Y(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(z(n))for(e in n)W(this,e,n[e]);else W(this,n,Y(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){W(this,t)},this)})},prop:function(t,e){return t=Z[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(g,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?K(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=Y(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=Y(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;if(!n.contains(a.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[S(t)]||r.getPropertyValue(t);if($(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[S(e)]||r.getPropertyValue(e)}),s}}var u="";if("string"==L(t))i||0===i?u=q(t)+":"+I(t,i):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?u+=q(e)+":"+I(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+u})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(G(t))},F(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=G(this),o=Y(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&G(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return G(this,"");i=G(this),Y(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(F(t)," ")}),G(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=Y(this,e,r,G(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=m.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!m.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?k(s)?s["inner"+i]:M(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,Y(this,r,t,s[e]()))})}}),y.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:P.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&Q(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),P.Z.prototype=J.prototype=n.fn,P.uniq=T,P.deserializeValue=K,n.zepto=P,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!a&&t.e in f||!!e}function g(t){return c[t]||a&&f[t]||t}function v(e,i,r,o,u,a,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=u,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=a;var l=a||r;s.proxy=function(t){if(t=N(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function N(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(x,function(t,n){var r=i[t];e[t]=function(){return this[n]=w,r&&r.apply(i,arguments)},e[n]=E}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function C(t){var e,i={originalEvent:t};for(e in t)b.test(e)||t[e]===n||(i[e]=t[e]);return N(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},u={},a="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var u=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return u._zid=l(e),u}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},E=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,x={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,u,a,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,u,e,f)}),h):(o(s)||r(a)||a===!1||(a=u,u=s,s=n),(a===n||u===!1)&&(a=u,u=n),a===!1&&(a=E),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,a),a.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(C(e),{currentTarget:o,liveFired:r}),(c||a).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,a,u,s,l||c)}))},t.fn.off=function(e,i,s){var u=this;return e&&!o(e)?(t.each(e,function(t,e){u.off(t,i,e)}),u):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=E),u.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):N(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,u){i=C(o(e)?t.Event(e):e),i._args=n,i.target=u,t.each(h(u,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),N(n)}}(Zepto);
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
var freezeframe = (function($) {
  var images, options, is_touch_device;
  //////////////////////////////////////////////////////////////////////////////
  //  Private Methods                                                         //
  //////////////////////////////////////////////////////////////////////////////
  // decorated console.warn message
  var warn = function(_message) {
    console.warn('✨ freezeframe.js ✨ : ' + _message);
  }
  // does freezeframe instance have any captured images?
  var has_images = function() {
    return this.images.length > 0;
  }
  // filter captured images by selector and warn if none found
  var filter = function(_selector, _images) {
    var filtered_images;
    if (_selector != undefined && _images.length > 1) {
      filtered_images = _images.filter($(_selector));
      if (filtered_images.length == 0) {
        warn('no images found for selector "' + _selector + '"');
        return false;
      }
    } else {
      filtered_images = _images;
    }
    return filtered_images;
  }
  // reset .gif to first frame and write to canvas
  var process = function ($_image) {
    var ff = this,
      $canvas = $_image.siblings('canvas'),
      transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend',
      image_width = $_image[0].clientWidth,
      image_height = $_image[0].clientHeight;
    $canvas.attr({
      'width': image_width, 'height': image_height
    });
    context = $canvas[0].getContext('2d');
    context.drawImage($_image[0], 0, 0, image_width, image_height);
    $canvas.addClass('ff-canvas-ready').on(transitionEnd, function() {
      $(this).off(transitionEnd);
      $_image.addClass('ff-image-ready');

      // remove the loading icon style from the container
      $_image.parent().removeClass('ff-loading-icon');
    });
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Constructor                                                             //
  //////////////////////////////////////////////////////////////////////////////
  function freezeframe(_options) {
    var options;
    // default options
    this.options = {
      selector : '.freezeframe',
      animation_play_duration: 5000,
      non_touch_device_trigger_event: 'hover',
	    overlay: false
    }
    // new selector as string
    options = typeof _options == 'string' ? { 'selector': _options } : _options;
    // new options
    if (options) {
      for (attribute in options) {
        if (attribute in this.options) {
          this.options[attribute] = options[attribute];
        } else {
          warn(attribute + ' not a valid option');
        }
      }
    }
    // is this a touch device?
    this.is_touch_device = ('ontouchstart' in window || 'onmsgesturechange' in window);
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Capture Images                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.capture = function(_selector) {
    var selector;
    // Passed in string or default string
    if (_selector !== undefined) {
      selector = _selector;
    } else if (this.options.selector !== undefined) {
      selector = this.options.selector;
    } else {
      warn('no selector passed to capture function or set in options');
      return false;
    }
    // Empty jQuery/Zepto object to add into
    if (this.images == undefined) {
      this.images = $();
    }
    // Add new selection, jQuery/Zepto keeps it non redundant
    this.images = this.images.add($('img' + selector));
    // Get non gifs outta there
    for (i = 0; i < this.images.length; i++) {
      if (this.images[i].src.split('.').pop().toLowerCase().substring(0, 3) !== 'gif') {
        this.images.splice(i, 1);
      }
    }
    // If nothing was found, throw a fit
    if (this.images.length == 0) {
      warn("no gifs found for selector '" + selector + "'");
      return false;
    }
    return this;
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Setup Elements                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.setup = function(_setupOptions) {
    if (!(_setupOptions == undefined)) {
      var _selector = _setupOptions.selector;
      var _overlay = _setupOptions.overlay;
    }
    var ff = this,
      setup_required = this.images.not('.ff-setup'),
      container_classnames = ['ff-container', 'ff-loading-icon'];
    if (!has_images.call(ff)) {
      warn('unable to run setup(), no images captured');
      return this;
    }
    if (setup_required.length == 0) {
      warn('unable to run setup(), no images require setup');
      return this;
    }
    filter.call(ff, _selector, setup_required).each(function(e) {
      var $image = $(this);
      $image.addClass('ff-setup ff-image');
      if ($image.hasClass('freezeframe-responsive')) {
        container_classnames.push('ff-responsive');
      }
      $canvas = $('<canvas />', {
        class: 'ff-canvas'
      }).attr({
        width: 0, height: 0
      });
      var $group = $image.add($canvas);
      $group.wrapAll(
        $('<div />', {
          class: container_classnames.join(' ')
        })
      );
	    if (ff.options.overlay) {
        $overlay = $('<div />', {
          class: 'ff-overlay'
        }).insertAfter($image);
  	  }
      $canvas.insertBefore($image);
    });
    imagesLoaded(setup_required).on('progress', function(instance, image) {
      process.call(ff, $(image.img));
    });
    return this;
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Attach Hover / Click Events                                             //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.attach = function(_selector) {
    var ff = this,
      click_timeout,
      images;
    if (!has_images.call(ff)) {
      warn('unable to run attach(), no images captured');
      return this; 
    }
    filter.call(ff, _selector, ff.images).each(function(e) {
      var $image = $(this);
      var $canvas = $(this).siblings('canvas');
      var $overlay = $(this).siblings('.ff-overlay');
      // hover
      if ((!ff.is_touch_device && ff.options.non_touch_device_trigger_event == 'hover')) {
        $image.on('mouseenter', function() {
          if ($image.hasClass('ff-image-ready')) {
            $image.attr('src', $image[0].src);
            $canvas.removeClass('ff-canvas-ready').addClass('ff-canvas-active');
            if (ff.options.overlay) { $overlay.addClass('ff-overlay-active'); }
          }
        })
        $image.on('mouseleave', function() {
          if ($image.hasClass('ff-image-ready')) {
            $canvas.removeClass('ff-canvas-active').addClass('ff-canvas-ready');
            if (ff.options.overlay) {
              $overlay.removeClass('ff-overlay-active');
            }
          }
        })
      }
      // click
      if ((!ff.is_touch_device && ff.options.non_touch_device_trigger_event == 'click') || (ff.is_touch_device)) {
        var click_timeout;
        $image.on('click', function() {
          var clicked = $canvas.hasClass('ff-canvas-active');
          if ($image.hasClass('ff-image-ready')) {
            if (clicked) {
              if (ff.options.animation_play_duration != Infinity) {
                clearTimeout(click_timeout);
              }
              $canvas.removeClass('ff-canvas-active').addClass('ff-canvas-ready');
              if (ff.options.overlay) {
                $overlay.removeClass('ff-overlay-active');
              }
            } else {
              $image.attr('src', $image[0].src);
              $canvas.removeClass('ff-canvas-ready').addClass('ff-canvas-active');
              if (ff.options.overlay) {
                $overlay.addClass('ff-overlay-active');
              }
              if (ff.options.animation_play_duration != Infinity) {
                click_timeout = setTimeout(function() {
                  $canvas.removeClass('ff-canvas-active').addClass('ff-canvas-ready');
                }, ff.options.animation_play_duration);
              }
            }
          }
        })
      }
    })
    return this;
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Trigger Animation                                                       //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.trigger = function(_selector) {
    var ff = this,
      errors = 0;
    filter.call(ff, _selector, ff.images).each(function(e) {
      if ($(this).hasClass('ff-image-ready')) {
        $(this).attr('src', $(this)[0].src);
        $(this).siblings('canvas').removeClass('ff-canvas-ready').addClass('ff-canvas-active');
      } else {
        warn('image not done processing ! ' + $(this).attr('src'));
        errors ++;
      }
    });
    return errors == 0;
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Release Animation                                                       //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.release = function(_selector) {
    var ff = this,
      errors = 0;
    filter.call(ff, _selector, ff.images).each(function(e) {
      if ($(this).hasClass('ff-image-ready')) {
        $(this).siblings('canvas').removeClass('ff-canvas-active').addClass('ff-canvas-ready');
      } else {
        warn('image not done processing ! ' + $(this).attr('src'));
        errors ++;
      }
    });
    return errors == 0 ? true : false;
  }
  //////////////////////////////////////////////////////////////////////////////
  //  Freeze Images                                                           //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.freeze = function() {
    this.capture().setup().attach(); // ✨ tada ✨
    return this;
  }
  return freezeframe;
})($);
// jQuery/Zepto plugin
$.fn.freezeframe = function(_options) {
  if (this.length == 0) {
    console.warn('✨ freezeframe.js ✨ : no images found for selector ' + this.selector);
    return false;
  }
  var ff = new freezeframe(_options);
  ff.images = this;
  ff.setup().attach();
  var self = this;
  var methods = ['trigger', 'release'];
  methods.forEach(function(method) {
    self[method] = function() {
      ff[method](self.selector);
      return self;
    };
  });
  return this;
};
/* Initiate GIF Player */
$(function() {
    first = new freezeframe('.gifplay-h').freeze();
    second = new freezeframe({overlay:true,
      'selector': '.gifplay',
      'animation_play_duration': Infinity,
      'non_touch_device_trigger_event': 'click'
    }).freeze();
});

/* TIMELINE */
!function(t){var i=function(i){var e={top:t(window).scrollTop(),left:t(window).scrollLeft(),right:t(window).scrollLeft()+t(window).width(),bottom:t(window).scrollTop()+t(window).height()},n=i.offset();return n.right=n.left+i.outerWidth(),n.bottom=n.top+i.outerHeight(),!(e.right<n.left||e.left>n.right||e.bottom<n.top||e.top>n.bottom)};t.fn.verticalTimeline=function(e){var n=t.extend({startLeft:!0,alternate:!0,animate:!1,arrows:!0},e);return this.each(function(){var e=t(this).children("div");t(this).addClass("timeline"),e.each(function(){t(this).addClass("timeline-content").wrap('<div class="timeline-point"><div class="timeline-block"></div></div>')}),t(this).find(".timeline-point").each(function(){if(t(this).prepend('<div class="timeline-icon"></div>'),t(this).find("[data-vticon=true]").length){var i=t(this).find("[data-vticon=true]").html();t(this).find(".timeline-icon").append(i),t(this).find("[data-vticon=true]").remove()}}),n.alternate?n.startLeft?t(this).find(".timeline-point:odd").each(function(){t(this).find(".timeline-block").addClass("timeline-right")}):t(this).find(".timeline-point:even").each(function(){t(this).find(".timeline-block").addClass("timeline-right")}):t(this).find(".timeline-block").addClass("timeline-"+n.startSide),n.animate&&t(this).find(".timeline-block").each(function(){var e=this;t(this).addClass("vt-animate-"+n.animate),i(t(this))&&t(this).removeClass("vt-animate-"+n.animate),t(window).on("scroll",function(){i(t(e))&&t(e).removeClass("vt-animate-"+n.animate)})}),t(this).find(".timeline-content").each(function(){var i=t(this).data("tldate"),e=t(this).data("vtside");i&&t(this).parent().prepend('<span class="timeline-date">'+i+"</span>"),e&&(t(this).parent().removeClass("timeline-right"),t(this).parent().addClass("timeline-"+e))}),n.arrows||t(this).find(".timeline-block").addClass("vt-noarrows")})}}(jQuery);
$(document).ready(function(){
	$('.timeline').verticalTimeline();
	$('.timeline-r').verticalTimeline({startLeft: false});
	$('.timeline-na').verticalTimeline({alternate: false});
	$('.timeline-san').verticalTimeline({animate: 'slide'});
	$('.timeline-r-san').verticalTimeline({startLeft: false, animate: 'slide'});
});

/* PRESENTER */
!function o(h,r,l){function a(e,t){if(!r[e]){if(!h[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(u)return u(e,!0);var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var n=r[e]={exports:{}};h[e][0].call(n.exports,function(t){return a(h[e][1][t]||t)},n,n.exports,o,h,r,l)}return r[e].exports}for(var u="function"==typeof require&&require,t=0;t<l.length;t++)a(l[t]);return a}({1:[function(t,e,i){"use strict";var r,s,u,c,n=function(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t};function o(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function h(t,e){if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),this.el=t,this.opt=r.extend({},s,e),this.__timer=-1,!(this.opt.effect in this.opt.effects))throw new Error("Effect "+this.opt.effect+" does not exist");this.$container=this.opt.container?r(this.opt.container):r(this.el),this.$items=this.opt.items?r(this.opt.items):this.$container.children(),this.$links=r(this.opt.links),this.$prev=r(this.opt.prev),this.$next=r(this.opt.next),this._bindResize(),this._bindControl(),this.opt.useSwipe&&(this._bindTouch(),this._bindMouse()),this.opt.autoPlay&&this.start(),this.$items.hide(),this.show(this.opt.idx,!0)}r=jQuery,s={container:null,items:null,prev:null,next:null,links:null,idx:0,vertical:!1,duration:300,loop:!0,autoPlay:!1,delay:5e3,useSwipe:!0,swipeChangeOn:.5,swipeRatio:function(t,e){return this.opt.vertical?e:t},activeClass:"is-active",disabledClass:"is-disabled",hideArrows:!1,hideLinks:!1,effect:"slide",effects:{slide:{oldSlideCSS:function(t,e,i){var s=t<e&&(!this.opt.loop||0!==t||e!==this.count-1)||this.opt.loop&&t===this.count-1&&0===e?-1:1;return this.opt.vertical?{top:s*i*100+"%"}:{left:s*i*100+"%"}},newSlideCSS:function(t,e,i){var s=t<e&&(!this.opt.loop||0!==t||e!==this.count-1)||this.opt.loop&&t===this.count-1&&0===e?1:-1;return this.opt.vertical?{top:s*(1-i)*100+"%"}:{left:s*(1-i)*100+"%"}},resetSlideCSS:function(){return this.opt.vertical?{top:""}:{left:""}}},fade:{oldSlideCSS:function(t,e,i){return{opacity:1-i,zIndex:1}},newSlideCSS:function(t,e,i){return{opacity:i,zIndex:2}},resetSlideCSS:function(){return{opacity:"",zIndex:""}}}},beforeChange:null,afterChange:null,duringChange:null},u=window.Symbol?window.Symbol("slider"):"__slider",n(h,[{key:"showPrev",value:function(t){var e=this._getPrevIdx();-1!==e&&this.show(e,t)}},{key:"showNext",value:function(t){var e=this._getNextIdx();-1!==e&&this.show(e,t)}},{key:"show",value:function(i,t){var e,s,n,o,h=this;i!==this.idx?i<0&&i>this.count-1?console.warn("Trying to show slide out of range: "+i):(this.isPlaying&&(this.__wasPlaying=!0,this.stop()),e=t?0:this.opt.duration,s=this.idx,n=-1!==s?this.$items.eq(s):r(),o=this.$items.eq(i),this.opt.beforeChange&&this.opt.beforeChange.call(this,s,i),n.length&&n.css(this._getPrevSlideCSS(s,i,0)).animate(this._getPrevSlideCSS(s,i,1),{duration:e,complete:function(){n.css(h._getResetSlideCSS()).hide()}}),o.css(this._getNextSlideCSS(s,i,0)).show().animate(this._getNextSlideCSS(s,i,1),{duration:e,complete:function(){o.css(h._getResetSlideCSS()),h.opt.afterChange&&h.opt.afterChange.call(h,s,i),h.__wasPlaying&&(h.start(),delete h.__wasPlaying)},progress:function(t,e){h.opt.duringChange&&h.opt.duringChange.call(h,s,i,e)}}),this.idx=i,this.check()):console.warn("Trying to show current slide")}},{key:"start",value:function(){var t=this;this.stop(),this.__timer=setTimeout(function(){t.showNext()},this.opt.delay)}},{key:"stop",value:function(){-1!==this.__timer&&(clearTimeout(this.__timer),this.__timer=-1)}},{key:"check",value:function(){this.$links.removeClass(this.opt.activeClass).eq(this.idx).addClass(this.opt.activeClass),this.count<=1?(this.opt.hideArrows&&(this.$prev.hide(),this.$next.hide()),this.opt.hideLinks&&this.$links.hide()):(this.opt.hideArrows&&(this.$prev.show(),this.$next.show()),this.opt.hideLinks&&this.$links.show()),-1===this._getPrevIdx()?this.$prev.addClass(this.opt.disabledClass):this.$prev.removeClass(this.opt.disabledClass),-1===this._getNextIdx()?this.$next.addClass(this.opt.disabledClass):this.$next.removeClass(this.opt.disabledClass)}},{key:"resize",value:function(){var t=this.$container.offset(),e=this.$container.outerWidth(),i=this.$container.outerHeight();this.__offset={x:t.left,y:t.top},this.__size={x:e,y:i}}},{key:"_getPrevIdx",value:function(){var t=this.idx-1;return t<0?this.opt.loop?this.count-1:-1:t}},{key:"_getNextIdx",value:function(){var t=this.idx+1;return t>this.count-1?this.opt.loop?0:-1:t}},{key:"_bindResize",value:function(){var t=this;this.__resize=function(){t.resize()},r(window).on("resize",this.__resize),this.resize()}},{key:"_unbindResize",value:function(){r(window).off("resize",this.__resize),delete this.resize}},{key:"_bindControl",value:function(){var i=this;this.__prevClick=function(t){t.preventDefault(),i.showPrev()},this.__nextClick=function(t){t.preventDefault(),i.showNext()},this.__linksClick=function(t){t.preventDefault();var e=i.$links.index(t.target);e!==i.idx&&i.show(e)},this.$prev.on("click",this.__prevClick),this.$next.on("click",this.__nextClick),this.$links.on("click",this.__linksClick)}},{key:"_unbindControl",value:function(){this.$prev.off("click",this.__prevClick).removeClass(this.opt.disabledClass),this.$next.off("click",this.__nextClick).removeClass(this.opt.disabledClass),this.$links.off("click",this.__linksClick).removeClass(this.opt.activeClass),delete this.__prevClick,delete this.__nextClick,delete this.__linksClick}},{key:"_bindTouch",value:function(){var i=this;this.__touchStart=function(t){var e=i._getTouch(t);e&&(i._startSwipe(e),i.$container.on("touchmove",i.__touchMove).on("touchend",i.__touchEnd).on("touchcancel",i.__touchCancel))},this.__touchMove=function(t){var e=i._getTouch(t);e&&i._moveSwipe(e)},this.__touchEnd=function(t){var e=i._getTouch(t);e&&i._endSwipe(e),i.$container.off("touchmove",i.__touchMove).off("touchend",i.__touchEnd).off("touchcancel",i.__touchCancel)},this.__touchCancel=function(){i._endSwipe(),i.$container.off("touchmove",i.__touchMove).off("touchend",i.__touchEnd).off("touchcancel",i.__touchCancel)},this.$container.on("touchstart",this.__touchStart)}},{key:"_unbindTouch",value:function(){this.$container.off("touchstart",this.__touchStart),delete this.__touchStart,delete this.__touchMove,delete this.__touchEnd,delete this.__touchCancel}},{key:"_bindMouse",value:function(){var i=this;this.__mouseDown=function(t){var e=i._getMouse(t);e&&(i._startSwipe(e),i.$container.on("mousemove",i.__mouseMove).on("mouseup",i.__mouseUp))},this.__mouseMove=function(t){var e=i._getMouse(t);e&&i._moveSwipe(e)},this.__mouseUp=function(t){var e=i._getMouse(t);e&&i._endSwipe(e),i.$container.off("mousemove",i.__mouseMove).off("mouseup",i.__mouseUp)},this.$container.on("mousedown",this.__mouseDown)}},{key:"_unbindMouse",value:function(){this.$container.off("mousedown",this.__mouseDown),delete this.__mouseDown,delete this.__mouseMove,delete this.__mouseUp}},{key:"_getPrevSlideCSS",value:function(t,e,i){return this.opt.effects[this.opt.effect].oldSlideCSS.call(this,t,e,i)}},{key:"_getNextSlideCSS",value:function(t,e,i){return this.opt.effects[this.opt.effect].newSlideCSS.call(this,t,e,i)}},{key:"_getResetSlideCSS",value:function(){return this.opt.effects[this.opt.effect].resetSlideCSS.call(this)}},{key:"_startSwipe",value:function(t){this.point=t,this.isPlaying&&(this.__wasPlaying=!0,this.stop())}},{key:"_moveSwipe",value:function(t){if(!this.point)return!0;var e,i,s,n=(t.x-this.point.x)/this.__size.x,o=(t.y-this.point.y)/this.__size.y,h=this.opt.swipeRatio.call(this,n,o),r=h<0?this._getNextIdx():this._getPrevIdx();-1!==r&&(r!==this.__newIdx&&(void 0!==this.__newIdx&&this.$items.eq(this.__newIdx).css(this._getResetSlideCSS()).hide(),this.__newIdx=r,this.$items.eq(this.__newIdx).show()),-1!==this.__newIdx&&(e=this.$items.eq(this.idx),i=this.$items.eq(this.__newIdx),s=Math.abs(h),e.css(this._getPrevSlideCSS(this.idx,this.__newIdx,s)),i.css(this._getNextSlideCSS(this.idx,this.__newIdx,s)),this.opt.duringChange&&this.opt.duringChange.call(this,this.idx,this.__newIdx,s)))}},{key:"_endSwipe",value:function(t){var e,i,s,n,o,h,r,l,a,u=this;if(!this.point)return!0;void 0!==this.__newIdx&&(e=t?(t.x-this.point.x)/this.__size.x:0,i=t?(t.y-this.point.y)/this.__size.y:0,s=this.opt.swipeRatio.call(this,e,i),n=this.$items.eq(this.idx),o=this.$items.eq(this.__newIdx),h=Math.abs(s),r=this.opt.duration*h,l=this.idx,a=this.__newIdx,h>=this.opt.swipeChangeOn?(this.opt.beforeChange&&this.opt.beforeChange.call(this,l,a),n.animate(this._getPrevSlideCSS(l,a,1),{duration:r,complete:function(){n.css(u._getResetSlideCSS()).hide()}}),o.animate(this._getNextSlideCSS(l,a,1),{duration:r,complete:function(){o.css(u._getResetSlideCSS()),u.opt.afterChange&&u.opt.afterChange.call(u,l,a)},progress:function(t,e){u.opt.duringChange&&u.opt.duringChange.call(u,l,a,h+e*(1-h))}}),this.idx=this.__newIdx,this.check(),this.__wasPlaying&&(this.start(),delete this.__wasPlaying)):(n.animate(this._getPrevSlideCSS(l,a,0),{duration:r,complete:function(){n.css(u._getResetSlideCSS())}}),o.animate(this._getNextSlideCSS(l,a,0),{duration:r,complete:function(){o.css(u._getResetSlideCSS()).hide()},progress:function(t,e){u.opt.duringChange&&u.opt.duringChange.call(u,l,a,h-e*h)}})),delete this.__newIdx),delete this.point}},{key:"_getTouch",value:function(t){var e=t.touches;return e&&e.length||(e=t.targetTouches),e&&e.length||(e=t.changedTouches),e&&1===e.length?{x:e[0].pageX-this.__offset.x,y:e[0].pageY-this.__offset.y}:null}},{key:"_getMouse",value:function(t){return{x:t.pageX-this.__offset.x,y:t.pageY-this.__offset.y}}},{key:"destroy",value:function(){this.stop(),this._unbindResize(),this._unbindControl(),this.opt.useSwipe&&(this._unbindTouch(),this._unbindMouse()),this.$items.stop(!0,!0).css({display:""}).css(this._getResetSlideCSS()),this.$prev.css({display:""}).removeClass(this.opt.disabledClass),this.$next.css({display:""}).removeClass(this.opt.disabledClass),this.$links.css({display:""}).removeClass(this.opt.activeClass)}},{key:"count",get:function(){return this.$items.length}},{key:"isPlaying",get:function(){return-1!==this.__timer}}]),c=h,r.fn.extend({slider:function(t){if("string"==typeof t){for(var e=[],i=arguments.length,s=Array(1<i?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];for(var o=0;o<this.length;o++){var h,r,l=this.get(o)[u];if(!l)throw new Error("Can't call "+t+": Slider is not initialized");if(void 0===l[t])throw new Error("Can't call "+t+": no such method or property");if(/^_/.test(t))throw new Error("Can't call "+t+": it isn't public");"function"==typeof l[t]?(h=l[t].apply(l,s),e.push(h),"destroy"===t&&delete this.get(o)[u]):(r=l[t],e.push(r))}return 0===this.length?void 0:1===this.length?e[0]:e}for(var a=0;a<this.length;a++){if(this.get(a)[u])throw new Error("Slider is already initialized");this.get(a)[u]=new c(this.get(a),t)}return this}})},{}]},{},[1]);
$(document).ready(function(){
$('.presenter-wrap').slider({
    container: $('.presenter-wrap .presenter'),
    items: $('.presenter .pslide'),
    prev: $('.presenter-wrap .slide-prev'),
    next: $('.presenter-wrap .slide-next'),
    links: $('.presenter .slider-link'),
	useSwipe: true, duration: 500, delay: 5000, loop: false  });
});

/* PISS (Paginated Inline Synchronous Search) */
function showPage(e){var t=jQuery(e).attr("data-cur-page"),r=jQuery(e).attr("data-item-per-page"),i=jQuery(e).find(".piss-item").not(".piss-item-out"),n=(jQuery(this).next(),(t-1)*r),a=t*r-1;jQuery(e).find(".piss-item").addClass("piss-item-hidden");for(var s=0;s<i.length;s++)n<=s&&s<=a&&jQuery(i[s]).removeClass("piss-item-hidden")}function getFilteredCount(e,t){var i=0,n=t.toLowerCase();return e.filter(function(){var r,e=jQuery(this).attr("data-tags");void 0!==e?(r=!1,e=e.toLowerCase().split(" "),jQuery.each(e,function(e,t){t===n&&(r=!0)}),r||-1<jQuery(this).html().trim().toLowerCase().indexOf(n)?(i++,jQuery(this).removeClass("piss-item-out")):jQuery(this).addClass("piss-item-out")):-1<jQuery(this).html().trim().toLowerCase().indexOf(n)?(i++,jQuery(this).removeClass("piss-item-out")):jQuery(this).addClass("piss-item-out")}),i}jQuery.fn.hip=function(e){var t,r=4,s=12,i="7.5px",n="center",a="auto",p="",o="",h="",d="",l="",m=!1,u="center",c="Search",g="",y="",f="",w="",x="",j=jQuery(this);if(!(0<j.length))throw new Error("Element not found");null!=e&&(e.hasOwnProperty("itemsPerRow")&&(r=e.itemsPerRow),e.hasOwnProperty("itemsPerPage")&&(s=e.itemsPerPage),e.hasOwnProperty("itemGaps")&&(i=e.itemGaps),e.hasOwnProperty("paginationPos")&&(n=e.paginationPos),e.hasOwnProperty("itemHeight")&&(a=e.itemHeight),e.hasOwnProperty("filter")&&(m=e.filter),e.hasOwnProperty("filterPos")&&(u=e.filterPos),e.hasOwnProperty("filterText")&&(c=e.filterText)),t={hs:r,sm:r,md:r,lg:r},null!=e&&e.hasOwnProperty("dynItemsPerRow")&&(e.dynItemsPerRow.hasOwnProperty("hs")&&(t.hs=e.dynItemsPerRow.hs),e.dynItemsPerRow.hasOwnProperty("sm")&&(t.sm=e.dynItemsPerRow.sm),e.dynItemsPerRow.hasOwnProperty("md")&&(t.md=e.dynItemsPerRow.md),e.dynItemsPerRow.hasOwnProperty("lg")&&(t.lg=e.dynItemsPerRow.lg));for(var v=0;v<r;v++)p+=100/r+"% ";for(v=0;v<t.hs;v++)o+=100/t.hs+"% ";for(v=0;v<t.sm;v++)h+=100/t.sm+"% ";for(v=0;v<t.md;v++)d+=100/t.md+"% ";for(v=0;v<t.lg;v++)l+=100/t.lg+"% ";for(v=0;v<Math.ceil(s/r);v++)g+=a+" ";for(v=0;v<Math.ceil(s/t.hs);v++)y+=a+" ";for(v=0;v<Math.ceil(s/t.sm);v++)f+=a+" ";for(v=0;v<Math.ceil(s/t.md);v++)w+=a+" ";for(v=0;v<Math.ceil(s/t.lg);v++)x+=a+" ";var Q=jQuery("head");return Q.prepend("<style>@media (min-width: 480px) {\n  .piss-grid{\n    grid-template-columns: "+o+";\ngrid-template-rows: "+y+"  }\n}\n@media (min-width: 768px) {\n  .piss-grid{\n    grid-template-columns: "+h+";\ngrid-template-rows: "+f+"  }\n}\n@media (min-width: 992px) {\n  .piss-grid{\n    grid-template-columns: "+d+";\ngrid-template-rows: "+w+"  }\n}\n@media (min-width: 1200px) {\n  .piss-grid{\n    grid-template-columns: "+l+";\ngrid-template-rows: "+x+"  }\n}</style>"),Q.prepend("<style>.piss-grid{\n  display: grid;\n  grid-gap: "+i+"px;\ngrid-template-columns: "+p+";grid-template-rows: "+g+"}\n.piss-pagination{text-align: "+n+";}.piss-pagination {\n  display: block;\n}\n.piss-pagination a {\ncolor: black;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n.piss-pagination a.active {\n  font-weight: bold;\n}.piss-item{padding: "+i+";}.piss-item-hidden, .piss-item-out{display: none !important;}</style>"),j.attr("data-item-per-page",s),j.addClass("piss-grid"),jQuery.each(j,function(e,t){for(var r=jQuery(t).find(".piss-item").length,i=Math.ceil(r/s),n='<div class="piss-pagination"><a href="#prev">&laquo;</a>',a=1;a<=i;a++)n+=1===a?'<a class="active" href="#'+a+'">'+a+"</a>":'<a href="#'+a+'">'+a+"</a>";n+='<a href="#next">&raquo;</a>\n</div>',jQuery(t).after(n),jQuery(t).attr("data-cur-page","1"),showPage(t),m&&(jQuery(t).before('<div class="piss-filter">\n  <label class="piss-search">\n    <input class="piss-search-input" type="text" placeholder="'+c+'"/>\n  </label>\n</div>'),Q.prepend("<style>\n  .piss-filter{\n    width: 100%;\n    text-align: "+u+';\n  }\n  .piss-search {\n    display: inline-block;\n    position: relative;\n    height: 35px;\n    width: 80px;\n    box-sizing: border-box;\n    margin: 0px 8px 7px 0px;\n    padding: 5px 9px 0px 9px;\n    border: 3px solid ;\n    border-radius: 25px;\n    transition: all 200ms ease;\n    cursor: text;\n  }\n  .piss-search:after {\n    content: "";\n    position: absolute;\n    width: 3px;\n    height: 20px;\n    right: -5px;\n    top: 21px;\n    background: ;\n    border-radius: 3px;\n    transform: rotate(-45deg);\n    transition: all 200ms ease;\n  }\n  .piss-search.active, .piss-search:hover {\n    width: 200px;\n    margin-right: 0px;\n  }\n  .piss-search.active:after, .piss-search:hover:after {\n    height: 0px;\n  }\n  .piss-search input {        width: 100% !important;\n    border: none !important;\n    box-sizing: border-box !important;\n    font-family: Helvetica;\n    font-size: 15px;\n    color: inherit !important;\n    background: transparent !important;\n    outline-width: 0px;\n    padding: 0 !important;\n    margin: 0 !important;}</style>'))}),this},jQuery(document).on("click",".piss-pagination a",function(e){e.preventDefault();var t=jQuery(this).parent().prev(".piss-grid"),r=t.attr("data-cur-page"),i=t.attr("data-item-per-page"),n=t.find(".piss-item").length,a=Math.ceil(n/i),s=jQuery(this).attr("href").toString().replace("#","");"prev"===s?!isNaN(r)&&1<parseInt(r)&&(t.attr("data-cur-page",parseInt(r)-1),jQuery(this).parent().find("a").removeClass("active"),jQuery(this).parent().find("a[hrefjQuery='#"+(parseInt(r)-1)+"']").addClass("active")):"next"===s?!isNaN(r)&&parseInt(r)<a&&(t.attr("data-cur-page",parseInt(r)+1),jQuery(this).parent().find("a").removeClass("active"),jQuery(this).parent().find("a[hrefjQuery='#"+(parseInt(r)+1)+"']").addClass("active")):!isNaN(s)&&parseInt(s)<=a&&(t.attr("data-cur-page",parseInt(s)),jQuery(this).parent().find("a").removeClass("active"),jQuery(this).parent().find("a[hrefjQuery='#"+parseInt(s)+"']").addClass("active")),showPage(t)}),jQuery(".piss-search-input").on("focus",function(){jQuery(this).parent("label").addClass("active")}),jQuery(".piss-search-input").on("blur",function(){0==jQuery(this).val().length&&jQuery(this).parent("label").removeClass("active")}),jQuery(document).on("keyup",".piss-search-input",function(){var e=jQuery(this).parent().parent().next(),t=jQuery(this).parent().parent().next().next(),r=e.attr("data-item-per-page"),i=e.find(".piss-item"),n=Math.ceil(getFilteredCount(i,jQuery(this).val())/r);console.log(n),""===jQuery(this).val()?t.find("a").not(":first").not(":last").removeClass("piss-item-hidden"):t.find("a").not(":first").not(":last").each(function(e,t){e<=n-1?jQuery(t).removeClass("piss-item-hidden"):jQuery(t).addClass("piss-item-hidden")}),t.find("a[hrefjQuery='#1']").click()});

/* EXIT INTENT */
!function(y){function x(){y(".ei-container").fadeOut(function(){y(this).remove()}),y(".ei-layer").fadeOut(function(){y(this).remove()}),y.removeData(document.body,"stick_var")}y.stickToMe=function(e){var l=y.extend({},{layer:"",fadespeed:400,trigger:["top"],maxtime:0,mintime:0,delay:0,interval:0,maxamount:0,cookie:!1,bgclickclose:!0,escclose:!0,onleave:function(e){},disableleftscroll:!0},e);y(l.layer).hide();var u,r,m=(new Date).getTime(),f=y(window).height(),g=y(window).width(),t=!1,p=0,v=0,b=!0,k=0;/Chrome/.test(navigator.userAgent)&&(r=!0,y(document).width()>g&&1==l.disableleftscroll&&(b=!1));var o=parseFloat(y(l.layer).css("height")),n=parseFloat(y(l.layer).css("width")),i={backgroundcss:{"z-index":"1000",display:"none"},boxcss:{"z-index":"1000",position:"fixed",left:"50%",top:"50%",height:o+"px",width:n+"px","margin-left":-n/2+"px","margin-top":-o/2+"px"}};function h(){t=!1,y(document).bind("mousemove.bindoffset",function(e){t&&(y(document).bind("mouseleave",function(e){setTimeout(function(){c(e)},l.delay)}),y(document).unbind("mousemove.bindoffset")),t=!0})}function c(e){var t,o,n=document.documentElement?document.documentElement.scrollTop:document.body.scrollTop,i=document.documentElement?document.documentElement.scrollLeft:document.body.scrollLeft,n=y(document).scrollTop()>n?y(document).scrollTop():n,i=y(document).scrollLeft()>i?y(document).scrollLeft():i;o=-1==Math.round(e.pageX)||-1==Math.round(e.pageY)||-3==e.pageX||-3==e.pageY?(t=-k+n,u-i):(t=-e.pageY+n,e.pageX-i);var c,a,d=f/g*o-f,s=-f/g*o<=t?d<=t?"top":"right":d<=t?"left":"bottom";/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)&&t<0&&-f<t&&0<o&&o<g||(-1==y.inArray(s,l.trigger)&&-1==y.inArray("all",l.trigger)||(c=(new Date).getTime())-m>=l.mintime&&(c-m<=l.maxtime||0==l.maxtime)&&(p<l.maxamount||0==l.maxamount)&&(c-v>=l.interval||0==l.interval)&&b&&(a=function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(-1!=i.indexOf(t))return i.substring(t.length,i.length)}return 0}("ck_stick_visit"),(0==l.cookie||1==l.cookie&&(a<l.maxamount||0==l.maxamount))&&(l.onleave.call(this,s),""!=l.layer&&1!=y.data(document.body,"stick_var")&&(y.data(document.body,"stick_var",1),y('<div class="ei-layer"></div>').appendTo("body").css(l.backgroundcss).fadeIn(l.fadespeed),y('<div class="ei-container"></div>').appendTo("body"),y(l.layer).clone().show().css(l.boxcss).appendTo(".ei-container"),l.bgclickclose&&y(".ei-layer").click(function(){x()}),l.escclose&&y("body").keyup(function(e){27==e.which&&x()})),p++,1==l.cookie&&(a++,document.cookie="ck_stick_visit="+a+"; path=/"),v=(new Date).getTime())),r&&(y(document).unbind("mouseleave"),h()))}y.extend(!0,l,i),y(document).bind("mousemove",function(e){u=e.pageX,k=e.pageY}),y(document).bind("mouseleave",function(e){setTimeout(function(){c(e)},l.delay)}),r&&(y(document).unbind("mouseleave"),h()),y(window).resize(function(e){f=y(window).height(),g=y(window).width()})},y.stick_close=function(){x()}}(jQuery);

/* Printer */
!function (t) { t.fn.kinziPrint = function (e) { var i = t.extend({ importCSS: !0, importStyles: !1, loadCSS: "", printContainer: !0, header: null, footer: null, printDelay: 500, debug: !1 }, e); let n = "", r = ""; if (i.importCSS && t('link[rel="stylesheet"]').each(function () { n += '<link href="' + t(this).attr("href") + '" rel="stylesheet" />' }), i.importStyles && t('style[type="text/css"]').each(function () { n += '<style type="text/css">', n += t(this).text(), n += "</style>" }), i.loadCSS) if (t.isArray(i.loadCSS)) for (var a = 0; a < i.loadCSS.length; a++)n += '<link href="' + i.loadCSS[a] + '" rel="stylesheet" />'; else n += '<link href="' + i.loadCSS + '" rel="stylesheet" />'; r += '<table class="kinzi-print-table" style="width:100%;" cellpadding="0" cellspacing="0">', r += '<thead class="kinzi-print-header" style="display: table-header-group !important;">', r += "<tr>", r += "<td>", i.header && (r += i.header), r += '<span style=" font-size: 0 !important; line-height: 0 !important;">&nbsp;</span>', r += "</td>", r += "</tr>", r += "</thead>", r += '<tfoot class="kinzi-print-footer" style="display: table-footer-group !important;">', r += "<tr>", r += "<td>", i.footer && (r += i.footer), r += '<span style=" font-size: 0 !important; line-height: 0 !important;">&nbsp;</span>', r += "</td>", r += "</tr>", r += "</tfoot>", r += '<tbody class="kinzi-print-body" style="display: table-row-group !important;">', r += "<tr>", r += "<td>", r += '<div class="kinzi-print-wrapper">', i.printContainer ? r += t(this)[0].outerHTML : r += t(this).html(), r += "</div>", r += '<div class="page-break" style="font-size: 0 !important; line-height: 0 !important; page-break-before: always !important;">&nbsp;</div>', r += "</td>", r += "</tr>", r += "</tbody>", r += "</table>"; var s = ""; return i.debug || (s = "display:none !important;"), t('iframe[name="kinziprint"]').remove(), t("<iframe>", { name: "kinziprint", class: "kinzi-print", style: s }).appendTo("body").contents().find("body").append(n + r).css({ margin: "0" }), setTimeout(function () { window.frames.kinziprint.focus(), window.frames.kinziprint.print() }, i.printDelay), !1 } }(jQuery);
/* INITIALIZE PRINTER */
function printer(){
    $('.printer').kinziPrint({
		importCSS: true,
		header: $('.headprint').html(),
		footer: $('.footprint').html(),
		debug:true
    });
}

/* Megamenu */
$(document).ready(function(){
	"use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before('<a href="#" class="menu-mobile">Menu</a>');
    $('.menu > ul > li').hover(function (e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover
    $('.menu > ul > li').click(function () {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)
    $('.menu-mobile').click(function (e) {
        $('.menu > ul').toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
});