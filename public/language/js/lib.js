/*! jQuery v1.6.3 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.3",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type=checkbox>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null
,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);
return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$/,bB=/\r?\n/g,bC=/#.*$/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bG=/^(?:GET|HEAD)$/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$/i,ct=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.11"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Resizable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){e(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:
this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",
b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=
null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+
this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=
[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,
a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,
c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.11"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=
b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};
if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-
g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,
height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=
e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,
d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?
d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=
a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&
/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/
(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;
/*
 * jQuery UI Datepicker 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function (d, C) {
    function M() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        d.extend(this._defaults, this.regional[""]);
        this.dpDiv = N(d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function N(a) {
        return a.bind("mouseout", function (b) {
            b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            b.length && b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (b) {
            b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            if (!(d.datepicker._isDisabledDatepicker(J.inline ? a.parent()[0] : J.input[0]) || !b.length)) {
                b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                b.addClass("ui-state-hover");
                b.hasClass("ui-datepicker-prev") && b.addClass("ui-datepicker-prev-hover");
                b.hasClass("ui-datepicker-next") && b.addClass("ui-datepicker-next-hover")
            }
        })
    }
    function H(a, b) {
        d.extend(a, b);
        for (var c in b) if (b[c] == null || b[c] == C) a[c] = b[c];
        return a
    }
    d.extend(d.ui, {
        datepicker: {
            version: "1.8.16"
        }
    });
    var B = (new Date).getTime(),
        J;
    d.extend(M.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (a) {
            H(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function (a, b) {
            var c = null;
            for (var e in this._defaults) {
                var f = a.getAttribute("date:" + e);
                if (f) {
                    c = c || {};
                    try {
                        c[e] = eval(f)
                    } catch (h) {
                        c[e] = f
                    }
                }
            }
            e = a.nodeName.toLowerCase();
            f = e == "div" || e == "span";
            if (!a.id) {
                this.uuid += 1;
                a.id = "dp" + this.uuid
            }
            var i = this._newInst(d(a), f);
            i.settings = d.extend({}, b || {}, c || {});
            if (e == "input") this._connectDatepicker(a, i);
            else f && this._inlineDatepicker(a, i)
        },
        _newInst: function (a, b) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: b,
                dpDiv: !b ? this.dpDiv : N(d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
            }
        },
        _connectDatepicker: function (a, b) {
            var c = d(a);
            b.append = d([]);
            b.trigger = d([]);
            if (!c.hasClass(this.markerClassName)) {
                this._attachments(c, b);
                c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, f, h) {
                    b.settings[f] = h
                }).bind("getData.datepicker", function (e, f) {
                    return this._get(b, f)
                });
                this._autoSize(b);
                d.data(a, "datepicker", b);
                b.settings.disabled && this._disableDatepicker(a)
            }
        },
        _attachments: function (a, b) {
            var c = this._get(b, "appendText"),
                e = this._get(b, "isRTL");
            b.append && b.append.remove();
            if (c) {
                b.append = d('<span class="' + this._appendClass + '">' + c + "</span>");
                a[e ? "before" : "after"](b.append)
            }
            a.unbind("focus", this._showDatepicker);
            b.trigger && b.trigger.remove();
            c = this._get(b, "showOn");
            if (c == "focus" || c == "both") a.focus(this._showDatepicker);
            if (c == "button" || c == "both") {
                c = this._get(b, "buttonText");
                var f = this._get(b, "buttonImage");
                b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: c,
                    title: c
                }) : d('<button type="button"></button>').addClass(this._triggerClass).html(f == "" ? c : d("<img/>").attr({
                    src: f,
                    alt: c,
                    title: c
                })));
                a[e ? "before" : "after"](b.trigger);
                b.trigger.click(function () {
                    d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]);
                    return false
                })
            }
        },
        _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b = new Date(2009, 11, 20),
                    c = this._get(a, "dateFormat");
                if (c.match(/[DM]/)) {
                    var e = function (f) {
                            for (var h = 0, i = 0, g = 0; g < f.length; g++) if (f[g].length > h) {
                                h = f[g].length;
                                i = g
                            }
                            return i
                        };
                    b.setMonth(e(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    b.setDate(e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                }
                a.input.attr("size", this._formatDate(a, b).length)
            }
        },
        _inlineDatepicker: function (a, b) {
            var c = d(a);
            if (!c.hasClass(this.markerClassName)) {
                c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (e, f, h) {
                    b.settings[f] = h
                }).bind("getData.datepicker", function (e, f) {
                    return this._get(b, f)
                });
                d.data(a, "datepicker", b);
                this._setDate(b, this._getDefaultDate(b), true);
                this._updateDatepicker(b);
                this._updateAlternate(b);
                b.settings.disabled && this._disableDatepicker(a);
                b.dpDiv.css("display", "block")
            }
        },
        _dialogDatepicker: function (a, b, c, e, f) {
            a = this._dialogInst;
            if (!a) {
                this.uuid += 1;
                this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                d("body").append(this._dialogInput);
                a = this._dialogInst = this._newInst(this._dialogInput, false);
                a.settings = {};
                d.data(this._dialogInput[0], "datepicker", a)
            }
            H(a.settings, e || {});
            b = b && b.constructor == Date ? this._formatDate(a, b) : b;
            this._dialogInput.val(b);
            this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null;
            if (!this._pos) this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)];
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1]  + "px");
            a.settings.onSelect = c;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            d.blockUI && d.blockUI(this.dpDiv);
            d.data(this._dialogInput[0], "datepicker", a);
            return this
        },
        _destroyDatepicker: function (a) {
            var b = d(a),
                c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                d.removeData(a, "datepicker");
                if (e == "input") {
                    c.append.remove();
                    c.trigger.remove();
                    b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
                } else if (e == "div" || e == "span") b.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (a) {
            var b = d(a),
                c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                if (e == "input") {
                    a.disabled = false;
                    c.trigger.filter("button").each(function () {
                        this.disabled = false
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })
                } else if (e == "div" || e == "span") {
                    b = b.children("." + this._inlineClass);
                    b.children().removeClass("ui-state-disabled");
                    b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = d.map(this._disabledInputs, function (f) {
                    return f == a ? null : f
                })
            }
        },
        _disableDatepicker: function (a) {
            var b = d(a),
                c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                if (e == "input") {
                    a.disabled = true;
                    c.trigger.filter("button").each(function () {
                        this.disabled = true
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })
                } else if (e == "div" || e == "span") {
                    b = b.children("." + this._inlineClass);
                    b.children().addClass("ui-state-disabled");
                    b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = d.map(this._disabledInputs, function (f) {
                    return f == a ? null : f
                });
                this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function (a) {
            if (!a) return false;
            for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] == a) return true;
            return false
        },
        _getInst: function (a) {
            try {
                return d.data(a, "datepicker")
            } catch (b) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (a, b, c) {
            var e = this._getInst(a);
            if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? d.extend({}, d.datepicker._defaults) : e ? b == "all" ? d.extend({}, e.settings) : this._get(e, b) : null;
            var f = b || {};
            if (typeof b == "string") {
                f = {};
                f[b] = c
            }
            if (e) {
                this._curInst == e && this._hideDatepicker();
                var h = this._getDateDatepicker(a, true),
                    i = this._getMinMaxDate(e, "min"),
                    g = this._getMinMaxDate(e, "max");
                H(e.settings, f);
                if (i !== null && f.dateFormat !== C && f.minDate === C) e.settings.minDate = this._formatDate(e, i);
                if (g !== null && f.dateFormat !== C && f.maxDate === C) e.settings.maxDate = this._formatDate(e, g);
                this._attachments(d(a), e);
                this._autoSize(e);
                this._setDate(e, h);
                this._updateAlternate(e);
                this._updateDatepicker(e)
            }
        },
        _changeDatepicker: function (a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function (a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function (a, b) {
            if (a = this._getInst(a)) {
                this._setDate(a, b);
                this._updateDatepicker(a);
                this._updateAlternate(a)
            }
        },
        _getDateDatepicker: function (a, b) {
            (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b);
            return a ? this._getDate(a) : null
        },
        _doKeyDown: function (a) {
            var b = d.datepicker._getInst(a.target),
                c = true,
                e = b.dpDiv.is(".ui-datepicker-rtl");
            b._keyEvent = true;
            if (d.datepicker._datepickerShowing) switch (a.keyCode) {
            case 9:
                d.datepicker._hideDatepicker();
                c = false;
                break;
            case 13:
                c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv);
                c[0] && d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]);
                if (a = d.datepicker._get(b, "onSelect")) {
                    c = d.datepicker._formatDate(b);
                    a.apply(b.input ? b.input[0] : null, [c, b])
                } else d.datepicker._hideDatepicker();
                return false;
            case 27:
                d.datepicker._hideDatepicker();
                break;
            case 33:
                d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
                break;
            case 34:
                d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
                break;
            case 35:
                if (a.ctrlKey || a.metaKey) d.datepicker._clearDate(a.target);
                c = a.ctrlKey || a.metaKey;
                break;
            case 36:
                if (a.ctrlKey || a.metaKey) d.datepicker._gotoToday(a.target);
                c = a.ctrlKey || a.metaKey;
                break;
            case 37:
                if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, e ? +1 : -1, "D");
                c = a.ctrlKey || a.metaKey;
                if (a.originalEvent.altKey) d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
                break;
            case 38:
                if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, -7, "D");
                c = a.ctrlKey || a.metaKey;
                break;
            case 39:
                if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, e ? -1 : +1, "D");
                c = a.ctrlKey || a.metaKey;
                if (a.originalEvent.altKey) d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
                break;
            case 40:
                if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, +7, "D");
                c = a.ctrlKey || a.metaKey;
                break;
            default:
                c = false
            } else if (a.keyCode == 36 && a.ctrlKey) d.datepicker._showDatepicker(this);
            else c = false;
            if (c) {
                a.preventDefault();
                a.stopPropagation()
            }
        },
        _doKeyPress: function (a) {
            var b = d.datepicker._getInst(a.target);
            if (d.datepicker._get(b, "constrainInput")) {
                b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat"));
                var c = String.fromCharCode(a.charCode == C ? a.keyCode : a.charCode);
                return a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1
            }
        },
        _doKeyUp: function (a) {
            a = d.datepicker._getInst(a.target);
            if (a.input.val() != a.lastVal) try {
                if (d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) {
                    d.datepicker._setDateFromField(a);
                    d.datepicker._updateAlternate(a);
                    d.datepicker._updateDatepicker(a)
                }
            } catch (b) {
                d.datepicker.log(b)
            }
            return true
        },
        _showDatepicker: function (a) {
            a = a.target || a;
            if (a.nodeName.toLowerCase() != "input") a = d("input", a.parentNode)[0];
            if (!(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)) {
                var b = d.datepicker._getInst(a);
                if (d.datepicker._curInst && d.datepicker._curInst != b) {
                    d.datepicker._datepickerShowing && d.datepicker._triggerOnClose(d.datepicker._curInst);
                    d.datepicker._curInst.dpDiv.stop(true, true)
                }
                var c = d.datepicker._get(b, "beforeShow");
                c = c ? c.apply(a, [a, b]) : {};
                if (c !== false) {
                    H(b.settings, c);
                    b.lastVal = null;
                    d.datepicker._lastInput = a;
                    d.datepicker._setDateFromField(b);
                    if (d.datepicker._inDialog) a.value = "";
                    if (!d.datepicker._pos) {
                        d.datepicker._pos = d.datepicker._findPos(a);
                        d.datepicker._pos[1] += a.offsetHeight
                    }
                    var e = false;
                    d(a).parents().each(function () {
                        e |= d(this).css("position") == "fixed";
                        return !e
                    });
                    if (e && d.browser.opera) {
                        d.datepicker._pos[0] -= document.documentElement.scrollLeft;
                        d.datepicker._pos[1] -= document.documentElement.scrollTop
                    }
                    c = {
                        left: d.datepicker._pos[0],
                        top: d.datepicker._pos[1] 
                    };
                    d.datepicker._pos = null;
                    b.dpDiv.empty();
                    b.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    });
                    d.datepicker._updateDatepicker(b);
                    c = d.datepicker._checkOffset(b, c, e);
                    b.dpDiv.css({
                        position: d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute",
                        display: "none",
                        left: c.left + "px",
                        top: c.top + "px"
                    });
                    if (!b.inline) {
                        c = d.datepicker._get(b, "showAnim");
                        var f = d.datepicker._get(b, "duration"),
                            h = function () {
                                var i = b.dpDiv.find("iframe.ui-datepicker-cover");
                                if (i.length) {
                                    var g = d.datepicker._getBorders(b.dpDiv);
                                    i.css({
                                        left: -g[0],
                                        top: -g[1] - b.dpDiv.outerHeight(),
                                        width: b.dpDiv.outerWidth(),
                                        height: b.dpDiv.outerHeight()
                                    })
                                }
                            };
                        b.dpDiv.zIndex(d(a).zIndex() + 1);
                        d.datepicker._datepickerShowing = true;
                        d.effects && d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h) : b.dpDiv[c || "show"](c ? f : null, h);
                        if (!c || !f) h();
                        b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus();
                        d.datepicker._curInst = b
                    }
                }
            }
        },
        _updateDatepicker: function (a) {
            this.maxRows = 4;
            var b = d.datepicker._getBorders(a.dpDiv);
            J = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            var c = a.dpDiv.find("iframe.ui-datepicker-cover");
            c.length && c.css({
                left: -b[0],
                top: -b[1],
                width: a.dpDiv.outerWidth(),
                height: a.dpDiv.outerHeight()
            });
            a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            b = this._getNumberOfMonths(a);
            c = b[1];
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            c > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + c).css("width", 17 * c + "em");
            a.dpDiv[(b[0] != 1 || b[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
            if (a.yearshtml) {
                var e = a.yearshtml;
                setTimeout(function () {
                    e === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                    e = a.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (a) {
            var b = function (c) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[c] || c
                };
            return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function (a, b, c) {
            var e = a.dpDiv.outerWidth(),
                f = a.dpDiv.outerHeight(),
                h = a.input ? a.input.outerWidth() : 0,
                i = a.input ? a.input.outerHeight() : 0,
                g = document.documentElement.clientWidth + d(document).scrollLeft(),
                j = document.documentElement.clientHeight + d(document).scrollTop();
            b.left -= this._get(a, "isRTL") ? e - h : 0;
            b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0;
            b.top -= c && b.top == a.input.offset().top + i ? d(document).scrollTop() : 0;
            b.left -= Math.min(b.left, b.left + e > g && g > e ? Math.abs(b.left + e - g) : 0);
            b.top -= Math.min(b.top, b.top + f > j && j > f ? Math.abs(f + i) : 0);
            return b
        },
        _findPos: function (a) {
            for (var b = this._get(this._getInst(a), "isRTL"); a && (a.type == "hidden" || a.nodeType != 1 || d.expr.filters.hidden(a));) a = a[b ? "previousSibling" : "nextSibling"];
            a = d(a).offset();
            return [a.left, a.top]
        },
        _triggerOnClose: function (a) {
            var b = this._get(a, "onClose");
            if (b) b.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a])
        },
        _hideDatepicker: function (a) {
            var b = this._curInst;
            if (!(!b || a && b != d.data(a, "datepicker"))) if (this._datepickerShowing) {
                a = this._get(b, "showAnim");
                var c = this._get(b, "duration"),
                    e = function () {
                        d.datepicker._tidyDialog(b);
                        this._curInst = null
                    };
                d.effects && d.effects[a] ? b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv[a == "slideDown" ? "slideUp" : a == "fadeIn" ? "fadeOut" : "hide"](a ? c : null, e);
                a || e();
                d.datepicker._triggerOnClose(b);
                this._datepickerShowing = false;
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if (d.blockUI) {
                        d.unblockUI();
                        d("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function (a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (a) {
            if (d.datepicker._curInst) {
                a = d(a.target);
                a[0].id != d.datepicker._mainDivId && a.parents("#" + d.datepicker._mainDivId).length == 0 && !a.hasClass(d.datepicker.markerClassName) && !a.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog && d.blockUI) && d.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            if (!this._isDisabledDatepicker(a[0])) {
                this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c);
                this._updateDatepicker(e)
            }
        },
        _gotoToday: function (a) {
            a = d(a);
            var b = this._getInst(a[0]);
            if (this._get(b, "gotoCurrent") && b.currentDay) {
                b.selectedDay = b.currentDay;
                b.drawMonth = b.selectedMonth = b.currentMonth;
                b.drawYear = b.selectedYear = b.currentYear
            } else {
                var c = new Date;
                b.selectedDay = c.getDate();
                b.drawMonth = b.selectedMonth = c.getMonth();
                b.drawYear = b.selectedYear = c.getFullYear()
            }
            this._notifyChange(b);
            this._adjustDate(a)
        },
        _selectMonthYear: function (a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        },
        _selectDay: function (a, b, c, e) {
            var f = d(a);
            if (!(d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]))) {
                f = this._getInst(f[0]);
                f.selectedDay = f.currentDay = d("a", e).html();
                f.selectedMonth = f.currentMonth = b;
                f.selectedYear = f.currentYear = c;
                this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
            }
        },
        _clearDate: function (a) {
            a = d(a);
            this._getInst(a[0]);
            this._selectDate(a, "")
        },
        _selectDate: function (a, b) {
            a = this._getInst(d(a)[0]);
            b = b != null ? b : this._formatDate(a);
            a.input && a.input.val(b);
            this._updateAlternate(a);
            var c = this._get(a, "onSelect");
            if (c) c.apply(a.input ? a.input[0] : null, [b, a]);
            else a.input && a.input.trigger("change");
            if (a.inline) this._updateDatepicker(a);
            else {
                this._hideDatepicker();
                this._lastInput = a.input[0];
                typeof a.input[0] != "object" && a.input.focus();
                this._lastInput = null
            }
        },
        _updateAlternate: function (a) {
            var b = this._get(a, "altField");
            if (b) {
                var c = this._get(a, "altFormat") || this._get(a, "dateFormat"),
                    e = this._getDate(a),
                    f = this.formatDate(c, e, this._getFormatConfig(a));
                d(b).each(function () {
                    d(this).val(f)
                })
            }
        },
        noWeekends: function (a) {
            a = a.getDay();
            return [a > 0 && a < 6, ""]
        },
        iso8601Week: function (a) {
            a = new Date(a.getTime());
            a.setDate(a.getDate() + 4 - (a.getDay() || 7));
            var b = a.getTime();
            a.setMonth(0);
            a.setDate(1);
            return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        },
        parseDate: function (a, b, c) {
            if (a == null || b == null) throw "Invalid arguments";
            b = typeof b == "object" ? b.toString() : b + "";
            if (b == "") return null;
            var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            e = typeof e != "string" ? e : (new Date).getFullYear() % 100 + parseInt(e, 10);
            for (var f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, h = (c ? c.dayNames : null) || this._defaults.dayNames, i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames, j = c = -1, l = -1, u = -1, k = false, o = function (p) {
                    (p = A + 1 < a.length && a.charAt(A + 1) == p) && A++;
                    return p
                }, m = function (p) {
                    var D = o(p);
                    p = new RegExp("^\\d{1," + (p == "@" ? 14 : p == "!" ? 20 : p == "y" && D ? 4 : p == "o" ? 3 : 2) + "}");
                    p = b.substring(q).match(p);
                    if (!p) throw "Missing number at position " + q;
                    q += p[0].length;
                    return parseInt(p[0], 10)
                }, n = function (p, D, K) {
                    p = d.map(o(p) ? K : D, function (w, x) {
                        return [[x, w]]
                    }).sort(function (w, x) {
                        return -(w[1].length - x[1].length)
                    });
                    var E = -1;
                    d.each(p, function (w, x) {
                        w = x[1];
                        if (b.substr(q, w.length).toLowerCase() == w.toLowerCase()) {
                            E = x[0];
                            q += w.length;
                            return false
                        }
                    });
                    if (E != -1) return E + 1;
                    else throw "Unknown name at position " + q;
                }, s = function () {
                    if (b.charAt(q) != a.charAt(A)) throw "Unexpected literal at position " + q;
                    q++
                }, q = 0, A = 0; A < a.length; A++) if (k) if (a.charAt(A) == "'" && !o("'")) k = false;
            else s();
            else switch (a.charAt(A)) {
            case "d":
                l = m("d");
                break;
            case "D":
                n("D", f, h);
                break;
            case "o":
                u = m("o");
                break;
            case "m":
                j = m("m");
                break;
            case "M":
                j = n("M", i, g);
                break;
            case "y":
                c = m("y");
                break;
            case "@":
                var v = new Date(m("@"));
                c = v.getFullYear();
                j = v.getMonth() + 1;
                l = v.getDate();
                break;
            case "!":
                v = new Date((m("!") - this._ticksTo1970) / 1E4);
                c = v.getFullYear();
                j = v.getMonth() + 1;
                l = v.getDate();
                break;
            case "'":
                if (o("'")) s();
                else k = true;
                break;
            default:
                s()
            }
            if (q < b.length) throw "Extra/unparsed characters found in date: " + b.substring(q);
            if (c == -1) c = (new Date).getFullYear();
            else if (c < 100) c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100);
            if (u > -1) {
                j = 1;
                l = u;
                do {
                    e = this._getDaysInMonth(c, j - 1);
                    if (l <= e) break;
                    j++;
                    l -= e
                } while (1)
            }
            v = this._daylightSavingAdjust(new Date(c, j - 1, l));
            if (v.getFullYear() != c || v.getMonth() + 1 != j || v.getDate() != l) throw "Invalid date";
            return v
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7,
        formatDate: function (a, b, c) {
            if (!b) return "";
            var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                f = (c ? c.dayNames : null) || this._defaults.dayNames,
                h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
            c = (c ? c.monthNames : null) || this._defaults.monthNames;
            var i = function (o) {
                    (o = k + 1 < a.length && a.charAt(k + 1) == o) && k++;
                    return o
                },
                g = function (o, m, n) {
                    m = "" + m;
                    if (i(o)) for (; m.length < n;) m = "0" + m;
                    return m
                },
                j = function (o, m, n, s) {
                    return i(o) ? s[m] : n[m]
                },
                l = "",
                u = false;
            if (b) for (var k = 0; k < a.length; k++) if (u) if (a.charAt(k) == "'" && !i("'")) u = false;
            else l += a.charAt(k);
            else switch (a.charAt(k)) {
            case "d":
                l += g("d", b.getDate(), 2);
                break;
            case "D":
                l += j("D", b.getDay(), e, f);
                break;
            case "o":
                l += g("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                break;
            case "m":
                l += g("m", b.getMonth() + 1, 2);
                break;
            case "M":
                l += j("M", b.getMonth(), h, c);
                break;
            case "y":
                l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                break;
            case "@":
                l += b.getTime();
                break;
            case "!":
                l += b.getTime() * 1E4 + this._ticksTo1970;
                break;
            case "'":
                if (i("'")) l += "'";
                else u = true;
                break;
            default:
                l += a.charAt(k)
            }
            return l
        },
        _possibleChars: function (a) {
            for (var b = "", c = false, e = function (h) {
                    (h = f + 1 < a.length && a.charAt(f + 1) == h) && f++;
                    return h
                }, f = 0; f < a.length; f++) if (c) if (a.charAt(f) == "'" && !e("'")) c = false;
            else b += a.charAt(f);
            else switch (a.charAt(f)) {
            case "d":
            case "m":
            case "y":
            case "@":
                b += "0123456789";
                break;
            case "D":
            case "M":
                return null;
            case "'":
                if (e("'")) b += "'";
                else c = true;
                break;
            default:
                b += a.charAt(f)
            }
            return b
        },
        _get: function (a, b) {
            return a.settings[b] !== C ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function (a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"),
                    e = a.lastVal = a.input ? a.input.val() : null,
                    f, h;
                f = h = this._getDefaultDate(a);
                var i = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, e, i) || h
                } catch (g) {
                    this.log(g);
                    e = b ? "" : e
                }
                a.selectedDay = f.getDate();
                a.drawMonth = a.selectedMonth = f.getMonth();
                a.drawYear = a.selectedYear = f.getFullYear();
                a.currentDay = e ? f.getDate() : 0;
                a.currentMonth = e ? f.getMonth() : 0;
                a.currentYear = e ? f.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function (a, b, c) {
            var e = function (h) {
                    var i = new Date;
                    i.setDate(i.getDate() + h);
                    return i
                },
                f = function (h) {
                    try {
                        return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), h, d.datepicker._getFormatConfig(a))
                    } catch (i) {}
                    var g = (h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date,
                        j = g.getFullYear(),
                        l = g.getMonth();
                    g = g.getDate();
                    for (var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = u.exec(h); k;) {
                        switch (k[2] || "d") {
                        case "d":
                        case "D":
                            g += parseInt(k[1], 10);
                            break;
                        case "w":
                        case "W":
                            g += parseInt(k[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            l += parseInt(k[1], 10);
                            g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
                            break;
                        case "y":
                        case "Y":
                            j += parseInt(k[1], 10);
                            g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
                            break
                        }
                        k = u.exec(h)
                    }
                    return new Date(j, l, g)
                };
            if (b = (b = b == null || b === "" ? c : typeof b == "string" ? f(b) : typeof b == "number" ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && b.toString() == "Invalid Date" ? c : b) {
                b.setHours(0);
                b.setMinutes(0);
                b.setSeconds(0);
                b.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(b)
        },
        _daylightSavingAdjust: function (a) {
            if (!a) return null;
            a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function (a, b, c) {
            var e = !b,
                f = a.selectedMonth,
                h = a.selectedYear;
            b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            if ((f != a.selectedMonth || h != a.selectedYear) && !c) this._notifyChange(a);
            this._adjustInstDate(a);
            if (a.input) a.input.val(e ? "" : this._formatDate(a))
        },
        _getDate: function (a) {
            return !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _generateHTML: function (a) {
            var b = new Date;
            b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
            var c = this._get(a, "isRTL"),
                e = this._get(a, "showButtonPanel"),
                f = this._get(a, "hideIfNoPrevNext"),
                h = this._get(a, "navigationAsDateFormat"),
                i = this._getNumberOfMonths(a),
                g = this._get(a, "showCurrentAtPos"),
                j = this._get(a, "stepMonths"),
                l = i[0] != 1 || i[1] != 1,
                u = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)),
                k = this._getMinMaxDate(a, "min"),
                o = this._getMinMaxDate(a, "max");
            g = a.drawMonth - g;
            var m = a.drawYear;
            if (g < 0) {
                g += 12;
                m--
            }
            if (o) {
                var n = this._daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate()));
                for (n = k && n < k ? k : n; this._daylightSavingAdjust(new Date(m, g, 1)) > n;) {
                    g--;
                    if (g < 0) {
                        g = 11;
                        m--
                    }
                }
            }
            a.drawMonth = g;
            a.drawYear = m;
            n = this._get(a, "prevText");
            n = !h ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(m, g - j, 1)), this._getFormatConfig(a));
            n = this._canAdjustMonth(a, -1, m, g) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + a.id + "', -" + j + ", 'M');\" title=\"" + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>" : f ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>";
            var s = this._get(a, "nextText");
            s = !h ? s : this.formatDate(s, this._daylightSavingAdjust(new Date(m, g + j, 1)), this._getFormatConfig(a));
            f = this._canAdjustMonth(a, +1, m, g) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + a.id + "', +" + j + ", 'M');\" title=\"" + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : f ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>";
            j = this._get(a, "currentText");
            s = this._get(a, "gotoCurrent") && a.currentDay ? u : b;
            j = !h ? j : this.formatDate(j, s, this._getFormatConfig(a));
            h = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + B + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>" : "";
            e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? h : "") + (this._isInRange(a, s) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._gotoToday('#" + a.id + "');\">" + j + "</button>" : "") + (c ? "" : h) + "</div>" : "";
            h = parseInt(this._get(a, "firstDay"), 10);
            h = isNaN(h) ? 0 : h;
            j = this._get(a, "showWeek");
            s = this._get(a, "dayNames");
            this._get(a, "dayNamesShort");
            var q = this._get(a, "dayNamesMin"),
                A = this._get(a, "monthNames"),
                v = this._get(a, "monthNamesShort"),
                p = this._get(a, "beforeShowDay"),
                D = this._get(a, "showOtherMonths"),
                K = this._get(a, "selectOtherMonths");
            this._get(a, "calculateWeek");
            for (var E = this._getDefaultDate(a), w = "", x = 0; x < i[0]; x++) {
                var O = "";
                this.maxRows = 4;
                for (var G = 0; G < i[1]; G++) {
                    var P = this._daylightSavingAdjust(new Date(m, g, a.selectedDay)),
                        t = " ui-corner-all",
                        y = "";
                    if (l) {
                        y += '<div class="ui-datepicker-group';
                        if (i[1] > 1) switch (G) {
                        case 0:
                            y += " ui-datepicker-group-first";
                            t = " ui-corner-" + (c ? "right" : "left");
                            break;
                        case i[1] - 1:
                            y += " ui-datepicker-group-last";
                            t = " ui-corner-" + (c ? "left" : "right");
                            break;
                        default:
                            y += " ui-datepicker-group-middle";
                            t = "";
                            break
                        }
                        y += '">'
                    }
                    y += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + t + '">' + (/all|left/.test(t) && x == 0 ? c ? f : n : "") + (/all|right/.test(t) && x == 0 ? c ? n : f : "") + this._generateMonthYearHeader(a, g, m, k, o, x > 0 || G > 0, A, v) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var z = j ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
                    for (t = 0; t < 7; t++) {
                        var r = (t + h) % 7;
                        z += "<th" + ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + s[r] + '">' + q[r] + "</span></th>"
                    }
                    y += z + "</tr></thead><tbody>";
                    z = this._getDaysInMonth(m, g);
                    if (m == a.selectedYear && g == a.selectedMonth) a.selectedDay = Math.min(a.selectedDay, z);
                    t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7;
                    z = Math.ceil((t + z) / 7);
                    this.maxRows = z = l ? this.maxRows > z ? this.maxRows : z : z;
                    r = this._daylightSavingAdjust(new Date(m, g, 1 - t));
                    for (var Q = 0; Q < z; Q++) {
                        y += "<tr>";
                        var R = !j ? "" : '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(r) + "</td>";
                        for (t = 0; t < 7; t++) {
                            var I = p ? p.apply(a.input ? a.input[0] : null, [r]) : [true, ""],
                                F = r.getMonth() != g,
                                L = F && !K || !I[0] || k && r < k || o && r > o;
                            R += '<td class="' + ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (r.getTime() == P.getTime() && g == a.selectedMonth && a._keyEvent || E.getTime() == r.getTime() && E.getTime() == P.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !D ? "" : " " + I[1] + (r.getTime() == u.getTime() ? " " + this._currentClass : "") + (r.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!F || D) && I[2] ? ' title="' + I[2] + '"' : "") + (L ? "" : ' onclick="DP_jQuery_' + B + ".datepicker._selectDay('#" + a.id + "'," + r.getMonth() + "," + r.getFullYear() + ', this);return false;"') + ">" + (F && !D ? "&#xa0;" : L ? '<span class="ui-state-default">' + r.getDate() + "</span>" : '<a class="ui-state-default' + (r.getTime() == b.getTime() ? " ui-state-highlight" : "") + (r.getTime() == u.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + '" href="#">' + r.getDate() + "</a>") + "</td>";
                            r.setDate(r.getDate() + 1);
                            r = this._daylightSavingAdjust(r)
                        }
                        y += R + "</tr>"
                    }
                    g++;
                    if (g > 11) {
                        g = 0;
                        m++
                    }
                    y += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && G == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    O += y
                }
                w += O
            }
            w += e + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            a._keyEvent = false;
            return w
        },
        _generateMonthYearHeader: function (a, b, c, e, f, h, i, g) {
            var j = this._get(a, "changeMonth"),
                l = this._get(a, "changeYear"),
                u = this._get(a, "showMonthAfterYear"),
                k = '<div class="ui-datepicker-title">',
                o = "";
            if (h || !j) o += '<span class="ui-datepicker-month">' + i[b] + "</span>";
            else {
                i = e && e.getFullYear() == c;
                var m = f && f.getFullYear() == c;
                o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" >";
                for (var n = 0; n < 12; n++) if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth())) o += '<option value="' + n + '"' + (n == b ? ' selected="selected"' : "") + ">" + g[n] + "</option>";
                o += "</select>"
            }
            u || (k += o + (h || !(j && l) ? "&#xa0;" : ""));
            if (!a.yearshtml) {
                a.yearshtml = "";
                if (h || !l) k += '<span class="ui-datepicker-year">' + c + "</span>";
                else {
                    g = this._get(a, "yearRange").split(":");
                    var s = (new Date).getFullYear();
                    i = function (q) {
                        q = q.match(/c[+-].*/) ? c + parseInt(q.substring(1), 10) : q.match(/[+-].*/) ? s + parseInt(q, 10) : parseInt(q, 10);
                        return isNaN(q) ? s : q
                    };
                    b = i(g[0]);
                    g = Math.max(b, i(g[1] || ""));
                    b = e ? Math.max(b, e.getFullYear()) : b;
                    g = f ? Math.min(g, f.getFullYear()) : g;
                    for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" >"; b <= g; b++) a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>";
                    a.yearshtml += "</select>";
                    k += a.yearshtml;
                    a.yearshtml = null
                }
            }
            k += this._get(a, "yearSuffix");
            if (u) k += (h || !(j && l) ? "&#xa0;" : "") + o;
            k += "</div>";
            return k
        },
        _adjustInstDate: function (a, b, c) {
            var e = a.drawYear + (c == "Y" ? b : 0),
                f = a.drawMonth + (c == "M" ? b : 0);
            b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + (c == "D" ? b : 0);
            e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, b)));
            a.selectedDay = e.getDate();
            a.drawMonth = a.selectedMonth = e.getMonth();
            a.drawYear = a.selectedYear = e.getFullYear();
            if (c == "M" || c == "Y") this._notifyChange(a)
        },
        _restrictMinMax: function (a, b) {
            var c = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            b = c && b < c ? c : b;
            return b = a && b > a ? a : b
        },
        _notifyChange: function (a) {
            var b = this._get(a, "onChangeMonthYear");
            if (b) b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function (a) {
            a = this._get(a, "numberOfMonths");
            return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a
        },
        _getMinMaxDate: function (a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function (a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function (a, b) {
            return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function (a, b, c, e) {
            var f = this._getNumberOfMonths(a);
            c = this._daylightSavingAdjust(new Date(c, e + (b < 0 ? b : f[0] * f[1]), 1));
            b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
            return this._isInRange(a, c)
        },
        _isInRange: function (a, b) {
            var c = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            return (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime())
        },
        _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff");
            b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function (a, b, c, e) {
            if (!b) {
                a.currentDay = a.selectedDay;
                a.currentMonth = a.selectedMonth;
                a.currentYear = a.selectedYear
            }
            b = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(e, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
    });
    d.fn.datepicker = function (a) {
        if (!this.length) return this;
        if (!d.datepicker.initialized) {
            d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);
            d.datepicker.initialized = true
        }
        var b = Array.prototype.slice.call(arguments, 1);
        if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget")) return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
        if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string") return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
        return this.each(function () {
            typeof a == "string" ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a)
        })
    };
    d.datepicker = new M;
    d.datepicker.initialized = false;
    d.datepicker.uuid = (new Date).getTime();
    d.datepicker.version = "1.8.16";
    window["DP_jQuery_" + B] = d
})(jQuery);;

/**
 * Farbtastic Color Picker 1.2
 * Â© 2008 Steven Wittens
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
(function($){

	jQuery.fn.farbtastic = function (callback) {
	  $.farbtastic(this, callback);
	  return this;
	};

	jQuery.farbtastic = function (container, callback) {
	  var container = $(container).get(0);
	  return container.farbtastic || (container.farbtastic = new jQuery._farbtastic(container, callback));
	}

	jQuery._farbtastic = function (container, callback) {
	  // Store farbtastic object
	  var fb = this;

	  // Insert markup
	  $(container).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');
	  var e = $('.farbtastic', container);
	  fb.wheel = $('.wheel', container).get(0);
	  // Dimensions
	  fb.radius = 84;
	  fb.square = 100;
	  fb.width = 194;

	  // Fix background PNGs in IE6
	  if (navigator.appVersion.match(/MSIE [0-6]\./)) {
		$('*', e).each(function () {
		  if (this.currentStyle.backgroundImage != 'none') {
			var image = this.currentStyle.backgroundImage;
			image = this.currentStyle.backgroundImage.substring(5, image.length - 2);
			$(this).css({
			  'backgroundImage': 'none',
			  'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')"
			});
		  }
		});
	  }

	  /**
	   * Link to the given element(s) or callback.
	   */
	  fb.linkTo = function (callback) {
		// Unbind previous nodes
		if (typeof fb.callback == 'object') {
		  $(fb.callback).unbind('keyup', fb.updateValue);
		}

		// Reset color
		fb.color = null;

		// Bind callback or elements
		if (typeof callback == 'function') {
		  fb.callback = callback;
		}
		else if (typeof callback == 'object' || typeof callback == 'string') {
		  fb.callback = $(callback);
		  fb.callback.bind('keyup', fb.updateValue);
		  if (fb.callback.get(0).value) {
			fb.setColor(fb.callback.get(0).value);
		  }
		}
		return this;
	  }
	  fb.updateValue = function (event) {
		if (this.value && this.value != fb.color) {
		  fb.setColor(this.value);
		}
	  }

	  /**
	   * Change color with HTML syntax #123456
	   */
	  fb.setColor = function (color) {
		var unpack = fb.unpack(color);
		if (fb.color != color && unpack) {
		  fb.color = color;
		  fb.rgb = unpack;
		  fb.hsl = fb.RGBToHSL(fb.rgb);
		  fb.updateDisplay();
		}
		return this;
	  }

	  /**
	   * Change color with HSL triplet [0..1, 0..1, 0..1]
	   */
	  fb.setHSL = function (hsl) {
		fb.hsl = hsl;
		fb.rgb = fb.HSLToRGB(hsl);
		fb.color = fb.pack(fb.rgb);
		fb.updateDisplay();
		return this;
	  }

	  /////////////////////////////////////////////////////

	  /**
	   * Retrieve the coordinates of the given event relative to the center
	   * of the widget.
	   */
	  fb.widgetCoords = function (event) {
		var x, y;
		var el = event.target || event.srcElement;
		var reference = fb.wheel;

		if (typeof event.offsetX != 'undefined') {
		  // Use offset coordinates and find common offsetParent
		  var pos = { x: event.offsetX, y: event.offsetY };

		  // Send the coordinates upwards through the offsetParent chain.
		  var e = el;
		  while (e) {
			e.mouseX = pos.x;
			e.mouseY = pos.y;
			pos.x += e.offsetLeft;
			pos.y += e.offsetTop;
			e = e.offsetParent;
		  }

		  // Look for the coordinates starting from the wheel widget.
		  var e = reference;
		  var offset = { x: 0, y: 0 }
		  while (e) {
			if (typeof e.mouseX != 'undefined') {
			  x = e.mouseX - offset.x;
			  y = e.mouseY - offset.y;
			  break;
			}
			offset.x += e.offsetLeft;
			offset.y += e.offsetTop;
			e = e.offsetParent;
		  }

		  // Reset stored coordinates
		  e = el;
		  while (e) {
			e.mouseX = undefined;
			e.mouseY = undefined;
			e = e.offsetParent;
		  }
		}
		else {
		  // Use absolute coordinates
		  var pos = fb.absolutePosition(reference);
		  x = (event.pageX || 0*(event.clientX + $('html').get(0).scrollLeft)) - pos.x;
		  y = (event.pageY || 0*(event.clientY + $('html').get(0).scrollTop)) - pos.y;
		}
		// Subtract distance to middle
		return { x: x - fb.width / 2, y: y - fb.width / 2 };
	  }

	  /**
	   * Mousedown handler
	   */
	  fb.mousedown = function (event) {
		// Capture mouse
		if (!document.dragging) {
		  $(document).bind('mousemove', fb.mousemove).bind('mouseup', fb.mouseup);
		  document.dragging = true;
		}

		// Check which area is being dragged
		var pos = fb.widgetCoords(event);
		fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) * 2 > fb.square;

		// Process
		fb.mousemove(event);
		return false;
	  }

	  /**
	   * Mousemove handler
	   */
	  fb.mousemove = function (event) {
		// Get coordinates relative to color picker center
		var pos = fb.widgetCoords(event);

		// Set new HSL parameters
		if (fb.circleDrag) {
		  var hue = Math.atan2(pos.x, -pos.y) / 6.28;
		  if (hue < 0) hue += 1;
		  fb.setHSL([hue, fb.hsl[1], fb.hsl[2]]);
		}
		else {
		  var sat = Math.max(0, Math.min(1, -(pos.x / fb.square) + .5));
		  var lum = Math.max(0, Math.min(1, -(pos.y / fb.square) + .5));
		  fb.setHSL([fb.hsl[0], sat, lum]);
		}
		return false;
	  }

	  /**
	   * Mouseup handler
	   */
	  fb.mouseup = function () {
		// Uncapture mouse
		$(document).unbind('mousemove', fb.mousemove);
		$(document).unbind('mouseup', fb.mouseup);
		document.dragging = false;
	  }

	  /**
	   * Update the markers and styles
	   */
	  fb.updateDisplay = function () {
		// Markers
		var angle = fb.hsl[0] * 6.28;
		$('.h-marker', e).css({
		  left: Math.round(Math.sin(angle) * fb.radius + fb.width / 2) + 'px',
		  top: Math.round(-Math.cos(angle) * fb.radius + fb.width / 2) + 'px'
		});

		$('.sl-marker', e).css({
		  left: Math.round(fb.square * (.5 - fb.hsl[1]) + fb.width / 2) + 'px',
		  top: Math.round(fb.square * (.5 - fb.hsl[2]) + fb.width / 2) + 'px'
		});

		// Saturation/Luminance gradient
		$('.color', e).css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5])));

		// Linked elements or callback
		if (typeof fb.callback == 'object') {
		  // Set background/foreground color
		  $(fb.callback).css({
			backgroundColor: fb.color,
			color: fb.hsl[2] > 0.5 ? '#000' : '#fff'
		  });

		  // Change linked value
		  $(fb.callback).each(function() {
			if (this.value && this.value != fb.color) {
			  this.value = fb.color;
			}
		  });
		}
		else if (typeof fb.callback == 'function') {
		  fb.callback.call(fb, fb.color);
		}
	  }

	  /**
	   * Get absolute position of element
	   */
	  fb.absolutePosition = function (el) {
		var r = { x: el.offsetLeft, y: el.offsetTop };
		// Resolve relative to offsetParent
		if (el.offsetParent) {
		  var tmp = fb.absolutePosition(el.offsetParent);
		  r.x += tmp.x;
		  r.y += tmp.y;
		}
		return r;
	  };

	  /* Various color utility functions */
	  fb.pack = function (rgb) {		
		var r = Math.round(rgb[0] * 255);
		var g = Math.round(rgb[1] * 255);
		var b = Math.round(rgb[2] * 255);
		return '#' + (r < 16 ? '0' : '') + r.toString(16) +
			   (g < 16 ? '0' : '') + g.toString(16) +
			   (b < 16 ? '0' : '') + b.toString(16);
	  }

	  fb.unpack = function (color) {
		if (color.length == 7) {
		  return [parseInt('0x' + color.substring(1, 3)) / 255,
			parseInt('0x' + color.substring(3, 5)) / 255,
			parseInt('0x' + color.substring(5, 7)) / 255];
		}
		else if (color.length == 4) {
		  return [parseInt('0x' + color.substring(1, 2)) / 15,
			parseInt('0x' + color.substring(2, 3)) / 15,
			parseInt('0x' + color.substring(3, 4)) / 15];
		}
	  }

	  fb.HSLToRGB = function (hsl) {
		var m1, m2, r, g, b;
		var h = hsl[0], s = hsl[1], l = hsl[2];
		m2 = (l <= 0.5) ? l * (s + 1) : l + s - l*s;
		m1 = l * 2 - m2;
		return [this.hueToRGB(m1, m2, h+0.33333),
			this.hueToRGB(m1, m2, h),
			this.hueToRGB(m1, m2, h-0.33333)];
	  }

	  fb.hueToRGB = function (m1, m2, h) {
		h = (h < 0) ? h + 1 : ((h > 1) ? h - 1 : h);
		if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
		if (h * 2 < 1) return m2;
		if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
		return m1;
	  }

	  fb.RGBToHSL = function (rgb) {
		var min, max, delta, h, s, l;
		var r = rgb[0], g = rgb[1], b = rgb[2];
		min = Math.min(r, Math.min(g, b));
		max = Math.max(r, Math.max(g, b));
		delta = max - min;
		l = (min + max) / 2;
		s = 0;
		if (l > 0 && l < 1) {
		  s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
		}
		h = 0;
		if (delta > 0) {
		  if (max == r && max != g) h += (g - b) / delta;
		  if (max == g && max != b) h += (2 + (b - r) / delta);
		  if (max == b && max != r) h += (4 + (r - g) / delta);
		  h /= 6;
		}
		return [h, s, l];
	  }

	  // Install mousedown handler (the others are set on the document on-demand)
	  $('*', e).mousedown(fb.mousedown);

		// Init color
	  fb.setColor('#000000');

	  // Set linked elements/callback
	  if (callback) {
		fb.linkTo(callback);
	  }
	}
})(jQuery);


// Simple Set Clipboard System
// Author: Joseph Huckaby

var ZeroClipboard = {
	
	version: "1.0.7",
	clients: {}, // registered upload clients on page, indexed by id
	moviePath: 'ZeroClipboard.swf', // URL to movie
	nextId: 1, // ID of next movie
	
	$: function(thingy) {
		// simple DOM lookup utility function
		if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
		if(!thingy) return;
		if (!thingy.addClass) {
			// extend element with a few useful methods
			thingy.hide = function() { this.style.display = 'none'; };
			thingy.show = function() { this.style.display = ''; };
			thingy.addClass = function(name) { this.removeClass(name); this.className += ' ' + name; };
			thingy.removeClass = function(name) {
				var classes = this.className.split(/\s+/);
				var idx = -1;
				for (var k = 0; k < classes.length; k++) {
					if (classes[k] == name) { idx = k; k = classes.length; }
				}
				if (idx > -1) {
					classes.splice( idx, 1 );
					this.className = classes.join(' ');
				}
				return this;
			};
			thingy.hasClass = function(name) {
				return !!this.className.match( new RegExp("\\s*" + name + "\\s*") );
			};
		}
		return thingy;
	},
	
	setMoviePath: function(path) {
		// set path to ZeroClipboard.swf
		this.moviePath = path;
	},
	
	dispatch: function(id, eventName, args) {
		// receive event from flash movie, send to client		
		var client = this.clients[id];
		if (client) {
			client.receiveEvent(eventName, args);
		}
	},
	
	register: function(id, client) {
		// register new client to receive events
		this.clients[id] = client;
	},
	
	getDOMObjectPosition: function(obj, stopObj) {
		// get absolute coordinates for dom element
		var info = {
			left: 0, 
			top: 0, 
			width: obj.width ? obj.width : obj.offsetWidth, 
			height: obj.height ? obj.height : obj.offsetHeight
		};

		while (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
			info.top += obj.offsetTop;
			obj = obj.offsetParent;
		}

		return info;
	},
	
	Client: function(elem) {
		// constructor for new simple upload client
		this.handlers = {};
		
		// unique ID
		this.id = ZeroClipboard.nextId++;
		this.movieId = 'ZeroClipboardMovie_' + this.id;
		
		// register client with singleton to receive flash events
		ZeroClipboard.register(this.id, this);
		
		// create movie
		if (elem) this.glue(elem);
	}
};

ZeroClipboard.Client.prototype = {
	
	id: 0, // unique ID for us
	ready: false, // whether movie is ready to receive events or not
	movie: '/js/ZeroClipboard.swf', // reference to movie object
	clipText: '', // text to copy to clipboard
	handCursorEnabled: true, // whether to show hand cursor, or default pointer cursor
	cssEffects: true, // enable CSS mouse effects on dom container
	handlers: null, // user event handlers
	
	glue: function(elem, appendElem, stylesToAdd) {
		// glue to DOM element
		// elem can be ID or actual DOM element object
		this.domElement = ZeroClipboard.$(elem);
		
		// float just above object, or zIndex 99 if dom element isn't set
		var zIndex = 99999;
		if (this.domElement.style.zIndex) {
			zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
		}
		
		if (typeof(appendElem) == 'string') {
			appendElem = ZeroClipboard.$(appendElem);
		}
		else if (typeof(appendElem) == 'undefined') {
			appendElem = document.getElementsByTagName('body')[0];
		}
		
		// find X/Y position of domElement
		var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);
		
		// create floating DIV above element
		this.div = document.createElement('div');
		var style = this.div.style;
		style.position = 'absolute';
		style.left = '' + box.left + 'px';
		style.top = '' + box.top + 'px';
		style.width = '' + box.width + 'px';
		style.height = '' + box.height + 'px';
		style.zIndex = zIndex;
		
		if (typeof(stylesToAdd) == 'object') {
			for (addedStyle in stylesToAdd) {
				style[addedStyle] = stylesToAdd[addedStyle];
			}
		}
		
		// style.backgroundColor = '#f00'; // debug
		
		appendElem.appendChild(this.div);
		
		this.div.innerHTML = this.getHTML( box.width, box.height );
	},
	
	getHTML: function(width, height) {
		// return HTML for movie
		var html = '';
		var flashvars = 'id=' + this.id + 
			'&width=' + width + 
			'&height=' + height;
			
		if (navigator.userAgent.match(/MSIE/)) {
			// IE gets an OBJECT tag
			var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
			html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+width+'" height="'+height+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+flashvars+'"/><param name="wmode" value="transparent"/></object>';
		}
		else {
			// all other browsers get an EMBED tag
			html += '<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+width+'" height="'+height+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" wmode="transparent" />';
		}
		return html;
	},
	
	hide: function() {
		// temporarily hide floater offscreen
		if (this.div) {
			this.div.style.left = '-2000px';
		}
	},
	
	show: function() {
		// show ourselves after a call to hide()
		this.reposition();
	},
	
	destroy: function() {
		// destroy control and floater
		if (this.domElement && this.div) {
			this.hide();
			this.div.innerHTML = '';
			
			var body = document.getElementsByTagName('body')[0];
			try { body.removeChild( this.div ); } catch(e) {;}
			
			this.domElement = null;
			this.div = null;
		}
	},
	
	reposition: function(elem) {
		// reposition our floating div, optionally to new container
		// warning: container CANNOT change size, only position
		if (elem) {
			this.domElement = ZeroClipboard.$(elem);
			if (!this.domElement) this.hide();
		}
		
		if (this.domElement && this.div) {
			var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
			var style = this.div.style;
			style.left = '' + box.left + 'px';
			style.top = '' + box.top + 'px';
		}
	},
	
	setText: function(newText) {
		// set text to be copied to clipboard
		this.clipText = newText;
		if (this.ready) this.movie.setText(newText);
	},
	
	addEventListener: function(eventName, func) {
		// add user event listener for event
		// event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
		if (!this.handlers[eventName]) this.handlers[eventName] = [];
		this.handlers[eventName].push(func);
	},
	
	setHandCursor: function(enabled) {
		// enable hand cursor (true), or default arrow cursor (false)
		this.handCursorEnabled = enabled;
		if (this.ready) this.movie.setHandCursor(enabled);
	},
	
	setCSSEffects: function(enabled) {
		// enable or disable CSS effects on DOM container
		this.cssEffects = !!enabled;
	},
	
	receiveEvent: function(eventName, args) {
		// receive event from flash
		eventName = eventName.toString().toLowerCase().replace(/^on/, '');
				
		// special behavior for certain events
		switch (eventName) {
			case 'load':
				// movie claims it is ready, but in IE this isn't always the case...
				// bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
				this.movie = document.getElementById(this.movieId);
				if (!this.movie) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 1 );
					return;
				}
				
				// firefox on pc needs a "kick" in order to set these in certain cases
				if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
					var self = this;
					setTimeout( function() { self.receiveEvent('load', null); }, 100 );
					this.ready = true;
					return;
				}
				
				this.ready = true;
				this.movie.setText( this.clipText );
				this.movie.setHandCursor( this.handCursorEnabled );
				break;
			
			case 'mouseover':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('hover');
					if (this.recoverActive) this.domElement.addClass('active');
				}
				break;
			
			case 'mouseout':
				if (this.domElement && this.cssEffects) {
					this.recoverActive = false;
					if (this.domElement.hasClass('active')) {
						this.domElement.removeClass('active');
						this.recoverActive = true;
					}
					this.domElement.removeClass('hover');
				}
				break;
			
			case 'mousedown':
				if (this.domElement && this.cssEffects) {
					this.domElement.addClass('active');
				}
				break;
			
			case 'mouseup':
				if (this.domElement && this.cssEffects) {
					this.domElement.removeClass('active');
					this.recoverActive = false;
				}
				break;
		} // switch eventName
		
		if (this.handlers[eventName]) {
			for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
				var func = this.handlers[eventName][idx];
			
				if (typeof(func) == 'function') {
					// actual function reference
					func(this, args);
				}
				else if ((typeof(func) == 'object') && (func.length == 2)) {
					// PHP style object + method, i.e. [myObject, 'myMethod']
					func[0][ func[1] ](this, args);
				}
				else if (typeof(func) == 'string') {
					// name of function
					window[func](this, args);
				}
			} // foreach event handler defined
		} // user defined handler for event
	}
	
};


/*
 * imgAreaSelect jQuery plugin
 * version 0.9.8
 *
 * Copyright (c) 2008-2011 Michal Wojciechowski (odyniec.net)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://odyniec.net/projects/imgareaselect/
 *
 */

(function($) {

/*
 * Math functions will be used extensively, so it's convenient to make a few
 * shortcuts
 */    
var abs = Math.abs,
    max = Math.max,
    min = Math.min,
    round = Math.round;

/**
 * Create a new HTML div element
 * 
 * @return A jQuery object representing the new element
 */
function div() {
    return $('<div/>');
}

/**
 * imgAreaSelect initialization
 * 
 * @param img
 *            A HTML image element to attach the plugin to
 * @param options
 *            An options object
 */
$.imgAreaSelect = function (img, options) {
    var 
        /* jQuery object representing the image */ 
        $img = $(img),
        
        /* Has the image finished loading? */
        imgLoaded,
        
        /* Plugin elements */
        
        /* Container box */
        $box = div(),
        /* Selection area */
        $area = div(),
        /* Border (four divs) */
        $border = div().add(div()).add(div()).add(div()),
        /* Outer area (four divs) */
        $outer = div().add(div()).add(div()).add(div()),
        /* Handles (empty by default, initialized in setOptions()) */
        $handles = $([]),
        
        /*
         * Additional element to work around a cursor problem in Opera
         * (explained later)
         */
        $areaOpera,
        
        /* Image position (relative to viewport) */
        left, top,
        
        /* Image offset (as returned by .offset()) */
        imgOfs = { left: 0, top: 0 },
        
        /* Image dimensions (as returned by .width() and .height()) */
        imgWidth, imgHeight,
        
        /*
         * jQuery object representing the parent element that the plugin
         * elements are appended to
         */
        $parent,
        
        /* Parent element offset (as returned by .offset()) */
        parOfs = { left: 0, top: 0 },
        
        /* Base z-index for plugin elements */
        zIndex = 0,
                
        /* Plugin elements position */
        position = 'absolute',
        
        /* X/Y coordinates of the starting point for move/resize operations */ 
        startX, startY,
        
        /* Horizontal and vertical scaling factors */
        scaleX, scaleY,
        
        /* Current resize mode ("nw", "se", etc.) */
        resize,
        
        /* Selection area constraints */
        minWidth, minHeight, maxWidth, maxHeight,
        
        /* Aspect ratio to maintain (floating point number) */
        aspectRatio,
        
        /* Are the plugin elements currently displayed? */
        shown,
        
        /* Current selection (relative to parent element) */
        x1, y1, x2, y2,
        
        /* Current selection (relative to scaled image) */
        selection = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 },
        
        /* Document element */
        docElem = document.documentElement,
        
        /* Various helper variables used throughout the code */ 
        $p, d, i, o, w, h, adjusted;

    /*
     * Translate selection coordinates (relative to scaled image) to viewport
     * coordinates (relative to parent element)
     */
    
    /**
     * Translate selection X to viewport X
     * 
     * @param x
     *            Selection X
     * @return Viewport X
     */
    function viewX(x) {
        return x + imgOfs.left - parOfs.left;
    }

    /**
     * Translate selection Y to viewport Y
     * 
     * @param y
     *            Selection Y
     * @return Viewport Y
     */
    function viewY(y) {
        return y + imgOfs.top - parOfs.top;
    }

    /*
     * Translate viewport coordinates to selection coordinates
     */
    
    /**
     * Translate viewport X to selection X
     * 
     * @param x
     *            Viewport X
     * @return Selection X
     */
    function selX(x) {
        return x - imgOfs.left + parOfs.left;
    }

    /**
     * Translate viewport Y to selection Y
     * 
     * @param y
     *            Viewport Y
     * @return Selection Y
     */
    function selY(y) {
        return y - imgOfs.top + parOfs.top;
    }
    
    /*
     * Translate event coordinates (relative to document) to viewport
     * coordinates
     */
    
    /**
     * Get event X and translate it to viewport X
     * 
     * @param event
     *            The event object
     * @return Viewport X
     */
    function evX(event) {
        return event.pageX - parOfs.left;
    }

    /**
     * Get event Y and translate it to viewport Y
     * 
     * @param event
     *            The event object
     * @return Viewport Y
     */
    function evY(event) {
        return event.pageY - parOfs.top;
    }

    /**
     * Get the current selection
     * 
     * @param noScale
     *            If set to <code>true</code>, scaling is not applied to the
     *            returned selection
     * @return Selection object
     */
    function getSelection(noScale) {
        var sx = noScale || scaleX, sy = noScale || scaleY;
        
        return { x1: round(selection.x1 * sx),
            y1: round(selection.y1 * sy),
            x2: round(selection.x2 * sx),
            y2: round(selection.y2 * sy),
            width: round(selection.x2 * sx) - round(selection.x1 * sx),
            height: round(selection.y2 * sy) - round(selection.y1 * sy) };
    }
    
    /**
     * Set the current selection
     * 
     * @param x1
     *            X coordinate of the upper left corner of the selection area
     * @param y1
     *            Y coordinate of the upper left corner of the selection area
     * @param x2
     *            X coordinate of the lower right corner of the selection area
     * @param y2
     *            Y coordinate of the lower right corner of the selection area
     * @param noScale
     *            If set to <code>true</code>, scaling is not applied to the
     *            new selection
     */
    function setSelection(x1, y1, x2, y2, noScale) {
        var sx = noScale || scaleX, sy = noScale || scaleY;
        
        selection = {
            x1: round(x1 / sx || 0),
            y1: round(y1 / sy || 0),
            x2: round(x2 / sx || 0),
            y2: round(y2 / sy || 0)
        };
        
        selection.width = selection.x2 - selection.x1;
        selection.height = selection.y2 - selection.y1;
    }

    /**
     * Recalculate image and parent offsets
     */
    function adjust() {
        /*
         * Do not adjust if image width is not a positive number. This might
         * happen when imgAreaSelect is put on a parent element which is then
         * hidden.
         */
        if (!$img.width())
            return;
        
        /*
         * Get image offset. The .offset() method returns float values, so they
         * need to be rounded.
         */
        imgOfs = { left: round($img.offset().left), top: round($img.offset().top) };
        
        /* Get image dimensions */
        imgWidth = $img.innerWidth();
        imgHeight = $img.innerHeight();
        
        imgOfs.top += ($img.outerHeight() - imgHeight) >> 1;
        imgOfs.left += ($img.outerWidth() - imgWidth) >> 1;

        /* Set minimum and maximum selection area dimensions */
        minWidth = round(options.minWidth / scaleX) || 0;
        minHeight = round(options.minHeight / scaleY) || 0;
        maxWidth = round(min(options.maxWidth / scaleX || 1<<24, imgWidth));
        maxHeight = round(min(options.maxHeight / scaleY || 1<<24, imgHeight));
        
        /*
         * Workaround for jQuery 1.3.2 incorrect offset calculation, originally
         * observed in Safari 3. Firefox 2 is also affected.
         */
        if ($().jquery == '1.3.2' && position == 'fixed' &&
            !docElem['getBoundingClientRect'])
        {
            imgOfs.top += max(document.body.scrollTop, docElem.scrollTop);
            imgOfs.left += max(document.body.scrollLeft, docElem.scrollLeft);
        }

        /* Determine parent element offset */ 
        parOfs = /absolute|relative/.test($parent.css('position')) ?
            { left: round($parent.offset().left) - $parent.scrollLeft(),
                top: round($parent.offset().top) - $parent.scrollTop() } :
            position == 'fixed' ?
                { left: $(document).scrollLeft(), top: $(document).scrollTop() } :
                { left: 0, top: 0 };
                
        left = viewX(0);
        top = viewY(0);
        
        /*
         * Check if selection area is within image boundaries, adjust if
         * necessary
         */
        if (selection.x2 > imgWidth || selection.y2 > imgHeight)
            doResize();
    }

    /**
     * Update plugin elements
     * 
     * @param resetKeyPress
     *            If set to <code>false</code>, this instance's keypress
     *            event handler is not activated
     */
    function update(resetKeyPress) {
        /* If plugin elements are hidden, do nothing */
        if (!shown) return;

        /*
         * Set the position and size of the container box and the selection area
         * inside it
         */
        $box.css({ left: viewX(selection.x1), top: viewY(selection.y1) })
            .add($area).width(w = selection.width).height(h = selection.height);

        /*
         * Reset the position of selection area, borders, and handles (IE6/IE7
         * position them incorrectly if we don't do this)
         */ 
        $area.add($border).add($handles).css({ left: 0, top: 0 });

        /* Set border dimensions */
        $border
            .width(max(w - $border.outerWidth() + $border.innerWidth(), 0))
            .height(max(h - $border.outerHeight() + $border.innerHeight(), 0));

        /* Arrange the outer area elements */
        $($outer[0]).css({ left: left, top: top,
            width: selection.x1, height: imgHeight });
        $($outer[1]).css({ left: left + selection.x1, top: top,
            width: w, height: selection.y1 });
        $($outer[2]).css({ left: left + selection.x2, top: top,
            width: imgWidth - selection.x2, height: imgHeight });
        $($outer[3]).css({ left: left + selection.x1, top: top + selection.y2,
            width: w, height: imgHeight - selection.y2 });
        
        w -= $handles.outerWidth();
        h -= $handles.outerHeight();
        
        /* Arrange handles */
        switch ($handles.length) {
        case 8:
            $($handles[4]).css({ left: w >> 1 });
            $($handles[5]).css({ left: w, top: h >> 1 });
            $($handles[6]).css({ left: w >> 1, top: h });
            $($handles[7]).css({ top: h >> 1 });
        case 4:
            $handles.slice(1,3).css({ left: w });
            $handles.slice(2,4).css({ top: h });
        }

        if (resetKeyPress !== false) {
            /*
             * Need to reset the document keypress event handler -- unbind the
             * current handler
             */
            if ($.imgAreaSelect.keyPress != docKeyPress)
                $(document).unbind($.imgAreaSelect.keyPress,
                    $.imgAreaSelect.onKeyPress);

            if (options.keys)
                /*
                 * Set the document keypress event handler to this instance's
                 * docKeyPress() function
                 */
                $(document)[$.imgAreaSelect.keyPress](
                    $.imgAreaSelect.onKeyPress = docKeyPress);
        }

        /*
         * Internet Explorer displays 1px-wide dashed borders incorrectly by
         * filling the spaces between dashes with white. Toggling the margin
         * property between 0 and "auto" fixes this in IE6 and IE7 (IE8 is still
         * broken). This workaround is not perfect, as it requires setTimeout()
         * and thus causes the border to flicker a bit, but I haven't found a
         * better solution.
         * 
         * Note: This only happens with CSS borders, set with the borderWidth,
         * borderOpacity, borderColor1, and borderColor2 options (which are now
         * deprecated). Borders created with GIF background images are fine.
         */ 
        if ($.browser.msie && $border.outerWidth() - $border.innerWidth() == 2) {
            $border.css('margin', 0);
            setTimeout(function () { $border.css('margin', 'auto'); }, 0);
        }
    }
    
    /**
     * Do the complete update sequence: recalculate offsets, update the
     * elements, and set the correct values of x1, y1, x2, and y2.
     * 
     * @param resetKeyPress
     *            If set to <code>false</code>, this instance's keypress
     *            event handler is not activated
     */
    function doUpdate(resetKeyPress) {
        adjust();
        update(resetKeyPress);
        x1 = viewX(selection.x1); y1 = viewY(selection.y1);
        x2 = viewX(selection.x2); y2 = viewY(selection.y2);
    }
    
    /**
     * Hide or fade out an element (or multiple elements)
     * 
     * @param $elem
     *            A jQuery object containing the element(s) to hide/fade out
     * @param fn
     *            Callback function to be called when fadeOut() completes
     */
    function hide($elem, fn) {
        options.fadeSpeed ? $elem.fadeOut(options.fadeSpeed, fn) : $elem.hide(); 
    }

    /**
     * Selection area mousemove event handler
     * 
     * @param event
     *            The event object
     */
    function areaMouseMove(event) {
        var x = selX(evX(event)) - selection.x1,
            y = selY(evY(event)) - selection.y1;
        
        if (!adjusted) {
            adjust();
            adjusted = true;

            $box.one('mouseout', function () { adjusted = false; });
        }

        /* Clear the resize mode */
        resize = '';

        if (options.resizable) {
            /*
             * Check if the mouse pointer is over the resize margin area and set
             * the resize mode accordingly
             */
            if (y <= options.resizeMargin)
                resize = 'n';
            else if (y >= selection.height - options.resizeMargin)
                resize = 's';
            if (x <= options.resizeMargin)
                resize += 'w';
            else if (x >= selection.width - options.resizeMargin)
                resize += 'e';
        }

        $box.css('cursor', resize ? resize + '-resize' :
            options.movable ? 'move' : '');
        if ($areaOpera)
            $areaOpera.toggle();
    }

    /**
     * Document mouseup event handler
     * 
     * @param event
     *            The event object
     */
    function docMouseUp(event) {
        /* Set back the default cursor */
        $('body').css('cursor', '');
        /*
         * If autoHide is enabled, or if the selection has zero width/height,
         * hide the selection and the outer area
         */
        if (options.autoHide || selection.width * selection.height == 0)
            hide($box.add($outer), function () { $(this).hide(); });

        $(document).unbind('mousemove', selectingMouseMove);
        $box.mousemove(areaMouseMove);
        
        options.onSelectEnd(img, getSelection());
    }

    /**
     * Selection area mousedown event handler
     * 
     * @param event
     *            The event object
     * @return false
     */
    function areaMouseDown(event) {
        if (event.which != 1) return false;

        adjust();

        if (resize) {
            /* Resize mode is in effect */
            $('body').css('cursor', resize + '-resize');

            x1 = viewX(selection[/w/.test(resize) ? 'x2' : 'x1']);
            y1 = viewY(selection[/n/.test(resize) ? 'y2' : 'y1']);
            
            $(document).mousemove(selectingMouseMove)
                .one('mouseup', docMouseUp);
            $box.unbind('mousemove', areaMouseMove);
        }
        else if (options.movable) {
            startX = left + selection.x1 - evX(event);
            startY = top + selection.y1 - evY(event);

            $box.unbind('mousemove', areaMouseMove);

            $(document).mousemove(movingMouseMove)
                .one('mouseup', function () {
                    options.onSelectEnd(img, getSelection());

                    $(document).unbind('mousemove', movingMouseMove);
                    $box.mousemove(areaMouseMove);
                });
        }
        else
            $img.mousedown(event);

        return false;
    }

    /**
     * Adjust the x2/y2 coordinates to maintain aspect ratio (if defined)
     * 
     * @param xFirst
     *            If set to <code>true</code>, calculate x2 first. Otherwise,
     *            calculate y2 first.
     */
    function fixAspectRatio(xFirst) {
        if (aspectRatio)
            if (xFirst) {
                x2 = max(left, min(left + imgWidth,
                    x1 + abs(y2 - y1) * aspectRatio * (x2 > x1 || -1)));    
                y2 = round(max(top, min(top + imgHeight,
                    y1 + abs(x2 - x1) / aspectRatio * (y2 > y1 || -1))));
                x2 = round(x2);
            }
            else {
                y2 = max(top, min(top + imgHeight,
                    y1 + abs(x2 - x1) / aspectRatio * (y2 > y1 || -1)));
                x2 = round(max(left, min(left + imgWidth,
                    x1 + abs(y2 - y1) * aspectRatio * (x2 > x1 || -1))));
                y2 = round(y2);
            }
    }

    /**
     * Resize the selection area respecting the minimum/maximum dimensions and
     * aspect ratio
     */
    function doResize() {
        /*
         * Make sure the top left corner of the selection area stays within
         * image boundaries (it might not if the image source was dynamically
         * changed).
         */
        x1 = min(x1, left + imgWidth);
        y1 = min(y1, top + imgHeight);
        
        if (abs(x2 - x1) < minWidth) {
            /* Selection width is smaller than minWidth */
            x2 = x1 - minWidth * (x2 < x1 || -1);

            if (x2 < left)
                x1 = left + minWidth;
            else if (x2 > left + imgWidth)
                x1 = left + imgWidth - minWidth;
        }

        if (abs(y2 - y1) < minHeight) {
            /* Selection height is smaller than minHeight */
            y2 = y1 - minHeight * (y2 < y1 || -1);

            if (y2 < top)
                y1 = top + minHeight;
            else if (y2 > top + imgHeight)
                y1 = top + imgHeight - minHeight;
        }

        x2 = max(left, min(x2, left + imgWidth));
        y2 = max(top, min(y2, top + imgHeight));
        
        fixAspectRatio(abs(x2 - x1) < abs(y2 - y1) * aspectRatio);

        if (abs(x2 - x1) > maxWidth) {
            /* Selection width is greater than maxWidth */
            x2 = x1 - maxWidth * (x2 < x1 || -1);
            fixAspectRatio();
        }

        if (abs(y2 - y1) > maxHeight) {
            /* Selection height is greater than maxHeight */
            y2 = y1 - maxHeight * (y2 < y1 || -1);
            fixAspectRatio(true);
        }

        selection = { x1: selX(min(x1, x2)), x2: selX(max(x1, x2)),
            y1: selY(min(y1, y2)), y2: selY(max(y1, y2)),
            width: abs(x2 - x1), height: abs(y2 - y1) };

        update();

        options.onSelectChange(img, getSelection());
    }

    /**
     * Mousemove event handler triggered when the user is selecting an area
     * 
     * @param event
     *            The event object
     * @return false
     */
    function selectingMouseMove(event) {
        x2 = /w|e|^$/.test(resize) || aspectRatio ? evX(event) : viewX(selection.x2);
        y2 = /n|s|^$/.test(resize) || aspectRatio ? evY(event) : viewY(selection.y2);

        doResize();

        return false;        
    }

    /**
     * Move the selection area
     * 
     * @param newX1
     *            New viewport X1
     * @param newY1
     *            New viewport Y1
     */
    function doMove(newX1, newY1) {
        x2 = (x1 = newX1) + selection.width;
        y2 = (y1 = newY1) + selection.height;

        $.extend(selection, { x1: selX(x1), y1: selY(y1), x2: selX(x2),
            y2: selY(y2) });

        update();

        options.onSelectChange(img, getSelection());
    }

    /**
     * Mousemove event handler triggered when the selection area is being moved
     * 
     * @param event
     *            The event object
     * @return false
     */
    function movingMouseMove(event) {
        x1 = max(left, min(startX + evX(event), left + imgWidth - selection.width));
        y1 = max(top, min(startY + evY(event), top + imgHeight - selection.height));

        doMove(x1, y1);

        event.preventDefault();     
        return false;
    }

    /**
     * Start selection
     */
    function startSelection() {
        $(document).unbind('mousemove', startSelection);
        adjust();

        x2 = x1;
        y2 = y1;       
        doResize();

        resize = '';

        if (!$outer.is(':visible'))
            /* Show the plugin elements */
            $box.add($outer).hide().fadeIn(options.fadeSpeed||0);

        shown = true;

        $(document).unbind('mouseup', cancelSelection)
            .mousemove(selectingMouseMove).one('mouseup', docMouseUp);
        $box.unbind('mousemove', areaMouseMove);

        options.onSelectStart(img, getSelection());
    }

    /**
     * Cancel selection
     */
    function cancelSelection() {
        $(document).unbind('mousemove', startSelection)
            .unbind('mouseup', cancelSelection);
        hide($box.add($outer));
        
        setSelection(selX(x1), selY(y1), selX(x1), selY(y1));
        
        /* If this is an API call, callback functions should not be triggered */
        if (!this instanceof $.imgAreaSelect) {
            options.onSelectChange(img, getSelection());
            options.onSelectEnd(img, getSelection());
        }
    }

    /**
     * Image mousedown event handler
     * 
     * @param event
     *            The event object
     * @return false
     */
    function imgMouseDown(event) {
        /* Ignore the event if animation is in progress */
        if (event.which != 1 || $outer.is(':animated')) return false;

        adjust();
        startX = x1 = evX(event);
        startY = y1 = evY(event);

        /* Selection will start when the mouse is moved */
        $(document).mousemove(startSelection).mouseup(cancelSelection);

        return false;
    }
    
    /**
     * Window resize event handler
     */
    function windowResize() {
        doUpdate(false);
    }

    /**
     * Image load event handler. This is the final part of the initialization
     * process.
     */
    function imgLoad() {
        imgLoaded = true;

        /* Set options */
        setOptions(options = $.extend({
            classPrefix: 'imgareaselect',
            movable: true,
            parent: 'body',
            resizable: true,
            resizeMargin: 10,
            onInit: function () {},
            onSelectStart: function () {},
            onSelectChange: function () {},
            onSelectEnd: function () {}
        }, options));

        $box.add($outer).css({ visibility: '' });
        
        if (options.show) {
            shown = true;
            adjust();
            update();
            $box.add($outer).hide().fadeIn(options.fadeSpeed||0);
        }

        /*
         * Call the onInit callback. The setTimeout() call is used to ensure
         * that the plugin has been fully initialized and the object instance is
         * available (so that it can be obtained in the callback).
         */
        setTimeout(function () { options.onInit(img, getSelection()); }, 0);
    }

    /**
     * Document keypress event handler
     * 
     * @param event
     *            The event object
     * @return false
     */
    var docKeyPress = function(event) {
        var k = options.keys, d, t, key = event.keyCode;
        
        d = !isNaN(k.alt) && (event.altKey || event.originalEvent.altKey) ? k.alt :
            !isNaN(k.ctrl) && event.ctrlKey ? k.ctrl :
            !isNaN(k.shift) && event.shiftKey ? k.shift :
            !isNaN(k.arrows) ? k.arrows : 10;

        if (k.arrows == 'resize' || (k.shift == 'resize' && event.shiftKey) ||
            (k.ctrl == 'resize' && event.ctrlKey) ||
            (k.alt == 'resize' && (event.altKey || event.originalEvent.altKey)))
        {
            /* Resize selection */
            
            switch (key) {
            case 37:
                /* Left */
                d = -d;
            case 39:
                /* Right */
                t = max(x1, x2);
                x1 = min(x1, x2);
                x2 = max(t + d, x1);
                fixAspectRatio();
                break;
            case 38:
                /* Up */
                d = -d;
            case 40:
                /* Down */
                t = max(y1, y2);
                y1 = min(y1, y2);
                y2 = max(t + d, y1);
                fixAspectRatio(true);
                break;
            default:
                return;
            }

            doResize();
        }
        else {
            /* Move selection */
            
            x1 = min(x1, x2);
            y1 = min(y1, y2);

            switch (key) {
            case 37:
                /* Left */
                doMove(max(x1 - d, left), y1);
                break;
            case 38:
                /* Up */
                doMove(x1, max(y1 - d, top));
                break;
            case 39:
                /* Right */
                doMove(x1 + min(d, imgWidth - selX(x2)), y1);
                break;
            case 40:
                /* Down */
                doMove(x1, y1 + min(d, imgHeight - selY(y2)));
                break;
            default:
                return;
            }
        }

        return false;
    };

    /**
     * Apply style options to plugin element (or multiple elements)
     * 
     * @param $elem
     *            A jQuery object representing the element(s) to style
     * @param props
     *            An object that maps option names to corresponding CSS
     *            properties
     */
    function styleOptions($elem, props) {
        for (option in props)
            if (options[option] !== undefined)
                $elem.css(props[option], options[option]);
    }

    /**
     * Set plugin options
     * 
     * @param newOptions
     *            The new options object
     */
    function setOptions(newOptions) {
        if (newOptions.parent)
            ($parent = $(newOptions.parent)).append($box.add($outer));
        
        /* Merge the new options with the existing ones */
        $.extend(options, newOptions);

        adjust();

        if (newOptions.handles != null) {
            /* Recreate selection area handles */
            $handles.remove();
            $handles = $([]);

            i = newOptions.handles ? newOptions.handles == 'corners' ? 4 : 8 : 0;

            while (i--)
                $handles = $handles.add(div());
            
            /* Add a class to handles and set the CSS properties */
            $handles.addClass(options.classPrefix + '-handle').css({
                position: 'absolute',
                /*
                 * The font-size property needs to be set to zero, otherwise
                 * Internet Explorer makes the handles too large
                 */
                fontSize: 0,
                zIndex: zIndex + 1 || 1
            });
            
            /*
             * If handle width/height has not been set with CSS rules, set the
             * default 5px
             */
            if (!parseInt($handles.css('width')) >= 0)
                $handles.width(5).height(5);
            
            /*
             * If the borderWidth option is in use, add a solid border to
             * handles
             */
            if (o = options.borderWidth)
                $handles.css({ borderWidth: o, borderStyle: 'solid' });

            /* Apply other style options */
            styleOptions($handles, { borderColor1: 'border-color',
                borderColor2: 'background-color',
                borderOpacity: 'opacity' });
        }

        /* Calculate scale factors */
        scaleX = options.imageWidth / imgWidth || 1;
        scaleY = options.imageHeight / imgHeight || 1;

        /* Set selection */
        if (newOptions.x1 != null) {
            setSelection(newOptions.x1, newOptions.y1, newOptions.x2,
                newOptions.y2);
            newOptions.show = !newOptions.hide;
        }

        if (newOptions.keys)
            /* Enable keyboard support */
            options.keys = $.extend({ shift: 1, ctrl: 'resize' },
                newOptions.keys);

        /* Add classes to plugin elements */
        $outer.addClass(options.classPrefix + '-outer');
        $area.addClass(options.classPrefix + '-selection');
        for (i = 0; i++ < 4;)
            $($border[i-1]).addClass(options.classPrefix + '-border' + i);

        /* Apply style options */
        styleOptions($area, { selectionColor: 'background-color',
            selectionOpacity: 'opacity' });
        styleOptions($border, { borderOpacity: 'opacity',
            borderWidth: 'border-width' });
        styleOptions($outer, { outerColor: 'background-color',
            outerOpacity: 'opacity' });
        if (o = options.borderColor1)
            $($border[0]).css({ borderStyle: 'solid', borderColor: o });
        if (o = options.borderColor2)
            $($border[1]).css({ borderStyle: 'dashed', borderColor: o });

        /* Append all the selection area elements to the container box */
        $box.append($area.add($border).add($areaOpera).add($handles));

        if ($.browser.msie) {
            if (o = $outer.css('filter').match(/opacity=(\d+)/))
                $outer.css('opacity', o[1]/100);
            if (o = $border.css('filter').match(/opacity=(\d+)/))
                $border.css('opacity', o[1]/100);
        }
        
        if (newOptions.hide)
            hide($box.add($outer));
        else if (newOptions.show && imgLoaded) {
            shown = true;
            $box.add($outer).fadeIn(options.fadeSpeed||0);
            doUpdate();
        }

        /* Calculate the aspect ratio factor */
        aspectRatio = (d = (options.aspectRatio || '').split(/:/))[0] / d[1];

        $img.add($outer).unbind('mousedown', imgMouseDown);
        
        if (options.disable || options.enable === false) {
            /* Disable the plugin */
            $box.unbind('mousemove', areaMouseMove).unbind('mousedown', areaMouseDown);
            $(window).unbind('resize', windowResize);
        }
        else {
            if (options.enable || options.disable === false) {
                /* Enable the plugin */
                if (options.resizable || options.movable)
                    $box.mousemove(areaMouseMove).mousedown(areaMouseDown);
    
                $(window).resize(windowResize);
            }

            if (!options.persistent)
                $img.add($outer).mousedown(imgMouseDown);
        }
        
        options.enable = options.disable = undefined;
    }
    
    /**
     * Remove plugin completely
     */
    this.remove = function () {
        /*
         * Call setOptions with { disable: true } to unbind the event handlers
         */
        setOptions({ disable: true });
        $box.add($outer).remove();
    };
    
    /*
     * Public API
     */
    
    /**
     * Get current options
     * 
     * @return An object containing the set of options currently in use
     */
    this.getOptions = function () { return options; };
    
    /**
     * Set plugin options
     * 
     * @param newOptions
     *            The new options object
     */
    this.setOptions = setOptions;
    
    /**
     * Get the current selection
     * 
     * @param noScale
     *            If set to <code>true</code>, scaling is not applied to the
     *            returned selection
     * @return Selection object
     */
    this.getSelection = getSelection;
    
    /**
     * Set the current selection
     * 
     * @param x1
     *            X coordinate of the upper left corner of the selection area
     * @param y1
     *            Y coordinate of the upper left corner of the selection area
     * @param x2
     *            X coordinate of the lower right corner of the selection area
     * @param y2
     *            Y coordinate of the lower right corner of the selection area
     * @param noScale
     *            If set to <code>true</code>, scaling is not applied to the
     *            new selection
     */
    this.setSelection = setSelection;
    
    /**
     * Cancel selection
     */
    this.cancelSelection = cancelSelection;
    
    /**
     * Update plugin elements
     * 
     * @param resetKeyPress
     *            If set to <code>false</code>, this instance's keypress
     *            event handler is not activated
     */
    this.update = doUpdate;

    /* 
     * Traverse the image's parent elements (up to <body>) and find the
     * highest z-index
     */
    $p = $img;

    while ($p.length) {
        zIndex = max(zIndex,
            !isNaN($p.css('z-index')) ? $p.css('z-index') : zIndex);
        /* Also check if any of the ancestor elements has fixed position */ 
        if ($p.css('position') == 'fixed')
            position = 'fixed';

        $p = $p.parent(':not(body)');
    }
    
    /*
     * If z-index is given as an option, it overrides the one found by the
     * above loop
     */
    zIndex = options.zIndex || zIndex;

    if ($.browser.msie)
        $img.attr('unselectable', 'on');

    /*
     * In MSIE and WebKit, we need to use the keydown event instead of keypress
     */
    $.imgAreaSelect.keyPress = $.browser.msie ||
        $.browser.safari ? 'keydown' : 'keypress';

    /*
     * There is a bug affecting the CSS cursor property in Opera (observed in
     * versions up to 10.00) that prevents the cursor from being updated unless
     * the mouse leaves and enters the element again. To trigger the mouseover
     * event, we're adding an additional div to $box and we're going to toggle
     * it when mouse moves inside the selection area.
     */
    if ($.browser.opera)
        $areaOpera = div().css({ width: '100%', height: '100%',
            position: 'absolute', zIndex: zIndex + 2 || 2 });

    /*
     * We initially set visibility to "hidden" as a workaround for a weird
     * behaviour observed in Google Chrome 1.0.154.53 (on Windows XP). Normally
     * we would just set display to "none", but, for some reason, if we do so
     * then Chrome refuses to later display the element with .show() or
     * .fadeIn().
     */
    $box.add($outer).css({ visibility: 'hidden', position: position,
        overflow: 'hidden', zIndex: zIndex || '0' });
    $box.css({ zIndex: zIndex + 2 || 2 });
    $area.add($border).css({ position: 'absolute', fontSize: 0 });
    
    /*
     * If the image has been fully loaded, or if it is not really an image (eg.
     * a div), call imgLoad() immediately; otherwise, bind it to be called once
     * on image load event.
     */
    img.complete || img.readyState == 'complete' || !$img.is('img') ?
        imgLoad() : $img.one('load', imgLoad);

    /* 
     * MSIE 9.0 doesn't always fire the image load event -- resetting the src
     * attribute seems to trigger it. The check is for version 7 and above to
     * accommodate for MSIE 9 running in compatibility mode.
     */   
   if ($.browser.msie && $.browser.version >= 7)
        img.src = img.src;
};

/**
 * Invoke imgAreaSelect on a jQuery object containing the image(s)
 * 
 * @param options
 *            Options object
 * @return The jQuery object or a reference to imgAreaSelect instance (if the
 *         <code>instance</code> option was specified)
 */
$.fn.imgAreaSelect = function (options) {
    options = options || {};

    this.each(function () {
        /* Is there already an imgAreaSelect instance bound to this element? */
        if ($(this).data('imgAreaSelect')) {
            /* Yes there is -- is it supposed to be removed? */
            if (options.remove) {
                /* Remove the plugin */
                $(this).data('imgAreaSelect').remove();
                $(this).removeData('imgAreaSelect');
            }
            else
                /* Reset options */
                $(this).data('imgAreaSelect').setOptions(options);
        }
        else if (!options.remove) {
            /* No exising instance -- create a new one */
            
            /*
             * If neither the "enable" nor the "disable" option is present, add
             * "enable" as the default
             */ 
            if (options.enable === undefined && options.disable === undefined)
                options.enable = true;

            $(this).data('imgAreaSelect', new $.imgAreaSelect(this, options));
        }
    });
    
    if (options.instance)
        /*
         * Return the imgAreaSelect instance bound to the first element in the
         * set
         */
        return $(this).data('imgAreaSelect');

    return this;
};

})(jQuery);


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Latitude/longitude spherical geodesy formulae & scripts (c) Chris Veness 2002-2010            */
/*   - www.movable-type.co.uk/scripts/latlong.html                                                */
/*                                                                                                */
/*  Sample usage:                                                                                 */
/*    var p1 = new LatLon(51.5136, -0.0983);                                                      */
/*    var p2 = new LatLon(51.4778, -0.0015);                                                      */
/*    var dist = p1.distanceTo(p2);          // in km                                             */
/*    var brng = p1.bearingTo(p2);           // in degrees clockwise from north                   */
/*    ... etc                                                                                     */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Note that minimal error checking is performed in this example code!                           */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/**
 * Creates a point on the earth's surface at the supplied latitude / longitude
 *
 * @constructor
 * @param {Number} lat: latitude in numeric degrees
 * @param {Number} lon: longitude in numeric degrees
 * @param {Number} [rad=6371]: radius of earth if different value is required from standard 6,371km
 */
function LatLon(lat, lon, rad) {
  if (typeof(rad) == 'undefined') rad = 6371;  // earth's mean radius in km
  // only accept numbers or valid numeric strings
  this._lat = typeof(lat)=='number' ? lat : typeof(lat)=='string' && lat.trim()!='' ? +lat : NaN;
  this._lon = typeof(lon)=='number' ? lon : typeof(lon)=='string' && lon.trim()!='' ? +lon : NaN;
  this._radius = typeof(rad)=='number' ? rad : typeof(rad)=='string' && trim(lon)!='' ? +rad : NaN;
}


/**
 * Returns the distance from this point to the supplied point, in km 
 * (using Haversine formula)
 *
 * from: Haversine formula - R. W. Sinnott, "Virtues of the Haversine",
 *       Sky and Telescope, vol 68, no 2, 1984
 *
 * @param   {LatLon} point: Latitude/longitude of destination point
 * @param   {Number} [precision=4]: no of significant digits to use for returned value
 * @returns {Number} Distance in km between this point and destination point
 */
LatLon.prototype.distanceTo = function(point, precision) {
  // default 4 sig figs reflects typical 0.3% accuracy of spherical model
  if (typeof precision == 'undefined') precision = 4;  
  
  var R = this._radius;
  var lat1 = this._lat.toRad(), lon1 = this._lon.toRad();
  var lat2 = point._lat.toRad(), lon2 = point._lon.toRad();
  var dLat = lat2 - lat1;
  var dLon = lon2 - lon1;

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1) * Math.cos(lat2) * 
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d.toPrecisionFixed(precision);
}


/**
 * Returns the (initial) bearing from this point to the supplied point, in degrees
 *   see http://williams.best.vwh.net/avform.htm#Crs
 *
 * @param   {LatLon} point: Latitude/longitude of destination point
 * @returns {Number} Initial bearing in degrees from North
 */
LatLon.prototype.bearingTo = function(point) {
  var lat1 = this._lat.toRad(), lat2 = point._lat.toRad();
  var dLon = (point._lon-this._lon).toRad();

  var y = Math.sin(dLon) * Math.cos(lat2);
  var x = Math.cos(lat1)*Math.sin(lat2) -
          Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
  var brng = Math.atan2(y, x);
  
  return (brng.toDeg()+360) % 360;
}


/**
 * Returns final bearing arriving at supplied destination point from this point; the final bearing 
 * will differ from the initial bearing by varying degrees according to distance and latitude
 *
 * @param   {LatLon} point: Latitude/longitude of destination point
 * @returns {Number} Final bearing in degrees from North
 */
LatLon.prototype.finalBearingTo = function(point) {
  // get initial bearing from supplied point back to this point...
  var lat1 = point._lat.toRad(), lat2 = this._lat.toRad();
  var dLon = (this._lon-point._lon).toRad();

  var y = Math.sin(dLon) * Math.cos(lat2);
  var x = Math.cos(lat1)*Math.sin(lat2) -
          Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
  var brng = Math.atan2(y, x);
          
  // ... & reverse it by adding 180°
  return (brng.toDeg()+180) % 360;
}


/**
 * Returns the midpoint between this point and the supplied point.
 *   see http://mathforum.org/library/drmath/view/51822.html for derivation
 *
 * @param   {LatLon} point: Latitude/longitude of destination point
 * @returns {LatLon} Midpoint between this point and the supplied point
 */
LatLon.prototype.midpointTo = function(point) {
  lat1 = this._lat.toRad(), lon1 = this._lon.toRad();
  lat2 = point._lat.toRad();
  var dLon = (point._lon-this._lon).toRad();

  var Bx = Math.cos(lat2) * Math.cos(dLon);
  var By = Math.cos(lat2) * Math.sin(dLon);

  lat3 = Math.atan2(Math.sin(lat1)+Math.sin(lat2),
                    Math.sqrt( (Math.cos(lat1)+Bx)*(Math.cos(lat1)+Bx) + By*By) );
  lon3 = lon1 + Math.atan2(By, Math.cos(lat1) + Bx);

  return new LatLon(lat3.toDeg(), lon3.toDeg());
}


/**
 * Returns the destination point from this point having travelled the given distance (in km) on the 
 * given initial bearing (bearing may vary before destination is reached)
 *
 *   see http://williams.best.vwh.net/avform.htm#LL
 *
 * @param   {Number} brng: Initial bearing in degrees
 * @param   {Number} dist: Distance in km
 * @returns {LatLon} Destination point
 */
LatLon.prototype.destinationPoint = function(brng, dist) {
  dist = typeof(dist)=='number' ? dist : typeof(dist)=='string' && dist.trim()!='' ? +dist : NaN;
  dist = dist/this._radius;  // convert dist to angular distance in radians
  brng = brng.toRad();  // 
  var lat1 = this._lat.toRad(), lon1 = this._lon.toRad();

  var lat2 = Math.asin( Math.sin(lat1)*Math.cos(dist) + 
                        Math.cos(lat1)*Math.sin(dist)*Math.cos(brng) );
  var lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(dist)*Math.cos(lat1), 
                               Math.cos(dist)-Math.sin(lat1)*Math.sin(lat2));
  lon2 = (lon2+3*Math.PI)%(2*Math.PI) - Math.PI;  // normalise to -180...+180

  return new LatLon(lat2.toDeg(), lon2.toDeg());
}


/**
 * Returns the point of intersection of two paths defined by point and bearing
 *
 *   see http://williams.best.vwh.net/avform.htm#Intersection
 *
 * @param   {LatLon} p1: First point
 * @param   {Number} brng1: Initial bearing from first point
 * @param   {LatLon} p2: Second point
 * @param   {Number} brng2: Initial bearing from second point
 * @returns {LatLon} Destination point (null if no unique intersection defined)
 */
LatLon.intersection = function(p1, brng1, p2, brng2) {
  brng1 = typeof brng1 == 'number' ? brng1 : typeof brng1 == 'string' && trim(brng1)!='' ? +brng1 : NaN;
  brng2 = typeof brng2 == 'number' ? brng2 : typeof brng2 == 'string' && trim(brng2)!='' ? +brng2 : NaN;
  lat1 = p1._lat.toRad(), lon1 = p1._lon.toRad();
  lat2 = p2._lat.toRad(), lon2 = p2._lon.toRad();
  brng13 = brng1.toRad(), brng23 = brng2.toRad();
  dLat = lat2-lat1, dLon = lon2-lon1;
  
  dist12 = 2*Math.asin( Math.sqrt( Math.sin(dLat/2)*Math.sin(dLat/2) + 
    Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)*Math.sin(dLon/2) ) );
  if (dist12 == 0) return null;
  
  // initial/final bearings between points
  brngA = Math.acos( ( Math.sin(lat2) - Math.sin(lat1)*Math.cos(dist12) ) / 
    ( Math.sin(dist12)*Math.cos(lat1) ) );
  if (isNaN(brngA)) brngA = 0;  // protect against rounding
  brngB = Math.acos( ( Math.sin(lat1) - Math.sin(lat2)*Math.cos(dist12) ) / 
    ( Math.sin(dist12)*Math.cos(lat2) ) );
  
  if (Math.sin(lon2-lon1) > 0) {
    brng12 = brngA;
    brng21 = 2*Math.PI - brngB;
  } else {
    brng12 = 2*Math.PI - brngA;
    brng21 = brngB;
  }
  
  alpha1 = (brng13 - brng12 + Math.PI) % (2*Math.PI) - Math.PI;  // angle 2-1-3
  alpha2 = (brng21 - brng23 + Math.PI) % (2*Math.PI) - Math.PI;  // angle 1-2-3
  
  if (Math.sin(alpha1)==0 && Math.sin(alpha2)==0) return null;  // infinite intersections
  if (Math.sin(alpha1)*Math.sin(alpha2) < 0) return null;       // ambiguous intersection
  
  //alpha1 = Math.abs(alpha1);
  //alpha2 = Math.abs(alpha2);
  // ... Ed Williams takes abs of alpha1/alpha2, but seems to break calculation?
  
  alpha3 = Math.acos( -Math.cos(alpha1)*Math.cos(alpha2) + 
                       Math.sin(alpha1)*Math.sin(alpha2)*Math.cos(dist12) );
  dist13 = Math.atan2( Math.sin(dist12)*Math.sin(alpha1)*Math.sin(alpha2), 
                       Math.cos(alpha2)+Math.cos(alpha1)*Math.cos(alpha3) )
  lat3 = Math.asin( Math.sin(lat1)*Math.cos(dist13) + 
                    Math.cos(lat1)*Math.sin(dist13)*Math.cos(brng13) );
  dLon13 = Math.atan2( Math.sin(brng13)*Math.sin(dist13)*Math.cos(lat1), 
                       Math.cos(dist13)-Math.sin(lat1)*Math.sin(lat3) );
  lon3 = lon1+dLon13;
  lon3 = (lon3+Math.PI) % (2*Math.PI) - Math.PI;  // normalise to -180..180º
  
  return new LatLon(lat3.toDeg(), lon3.toDeg());
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * Returns the distance from this point to the supplied point, in km, travelling along a rhumb line
 *
 *   see http://williams.best.vwh.net/avform.htm#Rhumb
 *
 * @param   {LatLon} point: Latitude/longitude of destination point
 * @returns {Number} Distance in km between this point and destination point
 */
LatLon.prototype.rhumbDistanceTo = function(point) {
  var R = this._radius;
  var lat1 = this._lat.toRad(), lat2 = point._lat.toRad();
  var dLat = (point._lat-this._lat).toRad();
  var dLon = Math.abs(point._lon-this._lon).toRad();
  
  var dPhi = Math.log(Math.tan(lat2/2+Math.PI/4)/Math.tan(lat1/2+Math.PI/4));
  var q = (!isNaN(dLat/dPhi)) ? dLat/dPhi : Math.cos(lat1);  // E-W line gives dPhi=0
  // if dLon over 180° take shorter rhumb across 180° meridian:
  if (dLon > Math.PI) dLon = 2*Math.PI - dLon;
  var dist = Math.sqrt(dLat*dLat + q*q*dLon*dLon) * R; 
  
  return dist.toPrecisionFixed(4);  // 4 sig figs reflects typical 0.3% accuracy of spherical model
}

/**
 * Returns the bearing from this point to the supplied point along a rhumb line, in degrees
 *
 * @param   {LatLon} point: Latitude/longitude of destination point
 * @returns {Number} Bearing in degrees from North
 */
LatLon.prototype.rhumbBearingTo = function(point) {
  var lat1 = this._lat.toRad(), lat2 = point._lat.toRad();
  var dLon = (point._lon-this._lon).toRad();
  
  var dPhi = Math.log(Math.tan(lat2/2+Math.PI/4)/Math.tan(lat1/2+Math.PI/4));
  if (Math.abs(dLon) > Math.PI) dLon = dLon>0 ? -(2*Math.PI-dLon) : (2*Math.PI+dLon);
  var brng = Math.atan2(dLon, dPhi);
  
  return (brng.toDeg()+360) % 360;
}

/**
 * Returns the destination point from this point having travelled the given distance (in km) on the 
 * given bearing along a rhumb line
 *
 * @param   {Number} brng: Bearing in degrees from North
 * @param   {Number} dist: Distance in km
 * @returns {LatLon} Destination point
 */
LatLon.prototype.rhumbDestinationPoint = function(brng, dist) {
  var R = this._radius;
  var d = parseFloat(dist)/R;  // d = angular distance covered on earth's surface
  var lat1 = this._lat.toRad(), lon1 = this._lon.toRad();
  brng = brng.toRad();

  var lat2 = lat1 + d*Math.cos(brng);
  var dLat = lat2-lat1;
  var dPhi = Math.log(Math.tan(lat2/2+Math.PI/4)/Math.tan(lat1/2+Math.PI/4));
  var q = (!isNaN(dLat/dPhi)) ? dLat/dPhi : Math.cos(lat1);  // E-W line gives dPhi=0
  var dLon = d*Math.sin(brng)/q;
  // check for some daft bugger going past the pole
  if (Math.abs(lat2) > Math.PI/2) lat2 = lat2>0 ? Math.PI-lat2 : -(Math.PI-lat2);
  lon2 = (lon1+dLon+3*Math.PI)%(2*Math.PI) - Math.PI;
 
  return new LatLon(lat2.toDeg(), lon2.toDeg());
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


/**
 * Returns the latitude of this point; signed numeric degrees if no format, otherwise format & dp 
 * as per Geo.toLat()
 *
 * @param   {String} [format]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to display
 * @returns {Number|String} Numeric degrees if no format specified, otherwise deg/min/sec
 *
 * @requires Geo
 */
LatLon.prototype.lat = function(format, dp) {
  if (typeof format == 'undefined') return this._lat;
  
  return Geo.toLat(this._lat, format, dp);
}

/**
 * Returns the longitude of this point; signed numeric degrees if no format, otherwise format & dp 
 * as per Geo.toLon()
 *
 * @param   {String} [format]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to display
 * @returns {Number|String} Numeric degrees if no format specified, otherwise deg/min/sec
 *
 * @requires Geo
 */
LatLon.prototype.lon = function(format, dp) {
  if (typeof format == 'undefined') return this._lon;
  
  return Geo.toLon(this._lon, format, dp);
}

/**
 * Returns a string representation of this point; format and dp as per lat()/lon()
 *
 * @param   {String} [format]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to display
 * @returns {String} Comma-separated latitude/longitude
 *
 * @requires Geo
 */
LatLon.prototype.toString = function(format, dp) {
  if (typeof format == 'undefined') format = 'dms';
  
  if (isNaN(this._lat) || isNaN(this._lon)) return '-,-';
  
  return Geo.toLat(this._lat, format, dp) + ', ' + Geo.toLon(this._lon, format, dp);
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

// ---- extend Number object with methods for converting degrees/radians

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

/** Converts radians to numeric (signed) degrees */
if (typeof(Number.prototype.toDeg) === "undefined") {
  Number.prototype.toDeg = function() {
    return this * 180 / Math.PI;
  }
}

/** 
 * Formats the significant digits of a number, using only fixed-point notation (no exponential)
 * 
 * @param   {Number} precision: Number of significant digits to appear in the returned string
 * @returns {String} A string representation of number which contains precision significant digits
 */
if (typeof(Number.prototype.toPrecisionFixed) === "undefined") {
  Number.prototype.toPrecisionFixed = function(precision) {
    if (isNaN(this)) return 'NaN';
    var numb = this < 0 ? -this : this;  // can't take log of -ve number...
    var sign = this < 0 ? '-' : '';
    
    if (numb == 0) { n = '0.'; while (precision--) n += '0'; return n };  // can't take log of zero
  
    var scale = Math.ceil(Math.log(numb)*Math.LOG10E);  // no of digits before decimal
    var n = String(Math.round(numb * Math.pow(10, precision-scale)));
    if (scale > 0) {  // add trailing zeros & insert decimal as required
      l = scale - n.length;
      while (l-- > 0) n = n + '0';
      if (scale < n.length) n = n.slice(0,scale) + '.' + n.slice(scale);
    } else {          // prefix decimal and leading zeros if required
      while (scale++ < 0) n = '0' + n;
      n = '0.' + n;
    }
    return sign + n;
  }
}

/** Trims whitespace from string (q.v. blog.stevenlevithan.com/archives/faster-trim-javascript) */
if (typeof(String.prototype.trim) === "undefined") {
  String.prototype.trim = function() {
    return String(this).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Geodesy representation conversion functions (c) Chris Veness 2002-2010                        */
/*   - www.movable-type.co.uk/scripts/latlong.html                                                */
/*                                                                                                */
/*  Sample usage:                                                                                 */
/*    var lat = Geo.parseDMS('51° 28' 40.12? N');                                                 */
/*    var lon = Geo.parseDMS('000° 00' 05.31? W');                                                */
/*    var p1 = new LatLon(lat, lon);                                                              */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

var Geo = {};  // Geo namespace, representing static class

/**
 * Parses string representing degrees/minutes/seconds into numeric degrees
 *
 * This is very flexible on formats, allowing signed decimal degrees, or deg-min-sec optionally
 * suffixed by compass direction (NSEW). A variety of separators are accepted (eg 3º 37' 09"W) 
 * or fixed-width format without separators (eg 0033709W). Seconds and minutes may be omitted. 
 * (Note minimal validation is done).
 *
 * @param   {String|Number} dmsStr: Degrees or deg/min/sec in variety of formats
 * @returns {Number} Degrees as decimal number
 * @throws  {TypeError} dmsStr is an object, perhaps DOM object without .value?
 */
Geo.parseDMS = function(dmsStr) {
  if (typeof deg == 'object') throw new TypeError('Geo.parseDMS - dmsStr is [DOM?] object');
  
  // check for signed decimal degrees without NSEW, if so return it directly
  if (typeof dmsStr === 'number' && isFinite(dmsStr)) return Number(dmsStr);
  
  // strip off any sign or compass dir'n & split out separate d/m/s
  var dms = String(dmsStr).trim().replace(/^-/,'').replace(/[NSEW]$/i,'').split(/[^0-9.,]+/);
  if (dms[dms.length-1]=='') dms.splice(dms.length-1);  // from trailing symbol
  
  if (dms == '') return NaN;
  
  // and convert to decimal degrees...
  switch (dms.length) {
    case 3:  // interpret 3-part result as d/m/s
      var deg = dms[0]/1 + dms[1]/60 + dms[2]/3600; 
      break;
    case 2:  // interpret 2-part result as d/m
      var deg = dms[0]/1 + dms[1]/60; 
      break;
    case 1:  // just d (possibly decimal) or non-separated dddmmss
      var deg = dms[0];
      // check for fixed-width unseparated format eg 0033709W
      if (/[NS]/i.test(dmsStr)) deg = '0' + deg;  // - normalise N/S to 3-digit degrees
      if (/[0-9]{7}/.test(deg)) deg = deg.slice(0,3)/1 + deg.slice(3,5)/60 + deg.slice(5)/3600; 
      break;
    default:
      return NaN;
  }
  if (/^-|[WS]$/i.test(dmsStr.trim())) deg = -deg; // take '-', west and south as -ve
  return Number(deg);
}

/**
 * Convert decimal degrees to deg/min/sec format
 *  - degree, prime, double-prime symbols are added, but sign is discarded, though no compass
 *    direction is added
 *
 * @private
 * @param   {Number} deg: Degrees
 * @param   {String} [format=dms]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to use - default 0 for dms, 2 for dm, 4 for d
 * @returns {String} deg formatted as deg/min/secs according to specified format
 * @throws  {TypeError} deg is an object, perhaps DOM object without .value?
 */
Geo.toDMS = function(deg, format, dp) {
  if (typeof deg == 'object') throw new TypeError('Geo.toDMS - deg is [DOM?] object');
  if (isNaN(deg)) return 'NaN';  // give up here if we can't make a number from deg
  
    // default values
  if (typeof format == 'undefined') format = 'dms';
  if (typeof dp == 'undefined') {
    switch (format) {
      case 'd': dp = 4; break;
      case 'dm': dp = 2; break;
      case 'dms': dp = 0; break;
      default: format = 'dms'; dp = 0;  // be forgiving on invalid format
    }
  }
  
  deg = Math.abs(deg);  // (unsigned result ready for appending compass dir'n)
  
  switch (format) {
    case 'd':
      d = deg.toFixed(dp);     // round degrees
      if (d<100) d = '0' + d;  // pad with leading zeros
      if (d<10) d = '0' + d;
      dms = d + '\u00B0';      // add º symbol
      break;
    case 'dm':
      var min = (deg*60).toFixed(dp);  // convert degrees to minutes & round
      var d = Math.floor(min / 60);    // get component deg/min
      var m = (min % 60).toFixed(dp);  // pad with trailing zeros
      if (d<100) d = '0' + d;          // pad with leading zeros
      if (d<10) d = '0' + d;
      if (m<10) m = '0' + m;
      dms = d + '\u00B0' + m + '\u2032';  // add º, ' symbols
      break;
    case 'dms':
      var sec = (deg*3600).toFixed(dp);  // convert degrees to seconds & round
      var d = Math.floor(sec / 3600);    // get component deg/min/sec
      var m = Math.floor(sec/60) % 60;
      var s = (sec % 60).toFixed(dp);    // pad with trailing zeros
      if (d<100) d = '0' + d;            // pad with leading zeros
      if (d<10) d = '0' + d;
      if (m<10) m = '0' + m;
      if (s<10) s = '0' + s;
      dms = d + '\u00B0' + m + '\u2032' + s + '\u2033';  // add º, ', " symbols
      break;
  }
  
  return dms;
}

/**
 * Convert numeric degrees to deg/min/sec latitude (suffixed with N/S)
 *
 * @param   {Number} deg: Degrees
 * @param   {String} [format=dms]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to use - default 0 for dms, 2 for dm, 4 for d
 * @returns {String} Deg/min/seconds
 */
Geo.toLat = function(deg, format, dp) {
  var lat = Geo.toDMS(deg, format, dp);
  return lat=='' ? '' : lat.slice(1) + (deg<0 ? 'S' : 'N');  // knock off initial '0' for lat!
}

/**
 * Convert numeric degrees to deg/min/sec longitude (suffixed with E/W)
 *
 * @param   {Number} deg: Degrees
 * @param   {String} [format=dms]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to use - default 0 for dms, 2 for dm, 4 for d
 * @returns {String} Deg/min/seconds
 */
Geo.toLon = function(deg, format, dp) {
  var lon = Geo.toDMS(deg, format, dp);
  return lon=='' ? '' : lon + (deg<0 ? 'W' : 'E');
}

/**
 * Convert numeric degrees to deg/min/sec as a bearing (0º..360º)
 *
 * @param   {Number} deg: Degrees
 * @param   {String} [format=dms]: Return value as 'd', 'dm', 'dms'
 * @param   {Number} [dp=0|2|4]: No of decimal places to use - default 0 for dms, 2 for dm, 4 for d
 * @returns {String} Deg/min/seconds
 */
Geo.toBrng = function(deg, format, dp) {
  deg = (Number(deg)+360) % 360;  // normalise -ve values to 180º..360º
  var brng =  Geo.toDMS(deg, format, dp);
  return brng.replace('360', '0');  // just in case rounding took us up to 360º!
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/*!
 * ExColor for jQuery, V. 1.2
 * http://modcoder.org/
 *
 * Settings wizard http://modcoder.org/?ptab=jquery&item=excolor#wizard
 *
 * Copyright 2011, ModCoder
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Thu May 12 21:36:33 2011
 */

jQuery.fn.modcoder_excolor = function (C) {
    var C = jQuery.extend({
        hue_bar: 0,
        hue_slider: 0,
        sb_slider: 0,
        color_box: true,
        demo_mode: false,
        show_color_on_border: false,
        border_color: 'black',
        sb_border_color: 'black',
        anim_speed: 'slow',
        round_corners: true,
        shadow: true,
        shadow_size: 4,
        shadow_color: '#8a8a8a',
        background_color: 'silver',
        backlight: true,
        input_text_color: 'black',
        input_background_color: 'white',
        label_color: 'black',
        effect: 'none',
        z_index: 'none',
        callback_on_ok: function () {
            var a = ''
        }
    }, C);
    return this.each(function () {
        var j = 'mel',
            moved_slider = 'mel',
            correct_x = 0,
            correct_y = 0,
            pos_sel = 0,
            pos_slider = 0,
            huebox = 0,
            wrapper = 0,
            pos_wrap = 0,
            pos_huebox = 0,
            hue = 0,
            sbbox = 0,
            sb_sel = 0,
            saturation = 1,
            brightness = 1,
            slider = 0,
            colsample = 0,
            inp_r = 0,
            inp_g = 0,
            inp_b = 0,
            inp_hex = 0,
            hexto = 0,
            ok_but = 0,
            close_but = 0,
            aitem = this,
            aitem_pos = jQuery(this).offset(),
            opened = false,
            isample = 0,
            click_flag = 0,
            click_to = 0,
            userok = false,
            parsex = '',
            inputhex = '',
            root_path = '/images/',
            looper = 0,
            switcher = 0;
        moved_slider = jQuery('script');
        for (var i = 0; i < moved_slider.length; i++) {
            j = '' + jQuery(moved_slider[i]).attr('src');
            j = j.toLowerCase();
            j = j.split('jquery.modcoder.excolor.js');
            if (j.length == 2) {
                root_path = '/images/';
            }
        }
        var k = new Image();
        var l = new Image();
        var m = new Image();
        var n = new Image();
        var o = new Image();
        var p = new Image();
        var q = new Image();
        var t = new Image();
        k.src = root_path + 'sel.gif';
        l.src = root_path + 'slider.gif';
        m.src = root_path + 'bg.png';
        n.src = root_path + 'hue.png';
        o.src = root_path + 'ok.png';
        p.src = root_path + 'shbg.png';
        q.src = root_path + 'transp0.gif';
        t.src = root_path + 'transp.gif';
        moved_slider = 'mel';
        j = 'mel';
		
        jQuery(aitem).mouseenter(function () {
            clearTimeout(click_to);
            click_to = setTimeout(function () {
                click_flag = true
            }, 100)
        }).mouseleave(function () {
            clearTimeout(click_to);
            click_to = setTimeout(function () {
                click_flag = false
            }, 100)
        });
        if (C.color_box) {
            //jQuery(aitem).wrap('<span style="margin:0;padding:0 ' + jQuery(aitem).outerHeight() + 'px 0 0;display:inline-block;border:none;background:none;line-height:auto;"></span>')
        }
        var u = '',
            rad3px = '',
            radwrap = '',
            shadow = '',
            backlight = '';
        if (C.round_corners) {
            u = '-khtml-border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;';
            rad3px = '-khtml-border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;';
            radwrap = '-khtml-border-radius: 0 7px 7px 7px;-moz-border-radius: 0 7px 7px 7px;-webkit-border-radius: 0 7px 7px 7px;border-radius: 0 7px 7px 7px;'
        }
        if (C.shadow) {
            shadow = 'box-shadow:0 ' + C.shadow_size + 'px ' + (C.shadow_size * 2) + 'px 0 ' + C.shadow_color + ';-webkit-box-shadow:0 ' + C.shadow_size + 'px ' + (C.shadow_size * 2) + 'px 0 ' + C.shadow_color + ';-moz-box-shadow:0 ' + C.shadow_size + 'px ' + (C.shadow_size * 2) + 'px 0 ' + C.shadow_color + ';'
        }
        if (C.backlight) {
            backlight = 'background-position:0 0;background-repeat:no-repeat;background-image:url(' + root_path + 'shbg.png);'
        }
        var w = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        w[8] = 8;
        w[46] = 46;
        var y = new Array();
        y['0'] = 1;
        y['1'] = 1;
        y['2'] = 1;
        y['3'] = 1;
        y['4'] = 1;
        y['5'] = 1;
        y['6'] = 1;
        y['7'] = 1;
        y['8'] = 1;
        y['9'] = 1;
        y['A'] = 1;
        y['B'] = 1;
        y['C'] = 1;
        y['D'] = 1;
        y['E'] = 1;
        y['F'] = 1;
        y['a'] = 1;
        y['b'] = 1;
        y['c'] = 1;
        y['d'] = 1;
        y['e'] = 1;
        y['f'] = 1;
        var z = new Array();
        z[0] = 'system keys';
        z[8] = 'backspace';
        z[118] = 'ctrl v';
        z[86] = 'ctrl v';
        z[99] = 'ctrl c';
        z[67] = 'ctrl c';
        var A = ' ' + Math.random();
        A = A.split('.');
        A = 'mc' + A[1];
        var B = jQuery(aitem).parent().offset();
        //jQuery(aitem).parent().append('&nbsp;<input class="modcoder_excolor_clrbox" readonly="readonly" id="' + A + '" type="text" style="display:none;cursor:pointer;width:' + (jQuery(aitem).outerHeight() - 4) + 'px;height:' + (jQuery(aitem).outerHeight() - 4) + 'px;background:none;' + rad3px + 'border:1px solid ' + C.border_color + ';" />');
        jQuery(aitem).clone().show().addClass('mds' + A).css('position', 'absolute').css('visibility', 'hidden').appendTo('body');
        setTimeout(function () {
            var a = jQuery('body > .mds' + A);
            jQuery(aitem).parent().find('#' + A).css('width', (jQuery(a).outerHeight() - 2) + 'px');
            jQuery(a).remove()
        }, 300);
        // isample = jQuery(aitem).parent().find('#' + A).mouseenter(function () {
            // clearTimeout(click_to);
            // click_to = setTimeout(function () {
                // click_flag = true
            // }, 50)
        // }).mouseleave(function () {
            // clearTimeout(click_to);
            // click_to = setTimeout(function () {
                // click_flag = false
            // }, 50)
        // }).focus(function () {
            // jQuery(aitem).focus()
        // });
		isample = jQuery(aitem).next().next();
        if (C.color_box) {
            setTimeout(function () {
                jQuery(isample).show()
            }, 150)
        }
        init_color();

        function init_color() {
            parsex = jQuery.trim(jQuery(aitem).val() + '');
            inputhex = '';
            if (parsex == '') {
                jQuery(isample).val('').css('background', 'url(' + root_path + 'transp.gif) repeat');
                jQuery(wrapper).find('input').val('')
            } else {
                for (var i = 0; i < parsex.length; i++) {
                    if (parsex.charAt(i) != '#' && (parsex.charAt(i) + '') in y) {
                        if (inputhex.length < 6) {
                            inputhex += parsex.charAt(i) + ''
                        }
                    }
                }
                switch (inputhex.length) {
                case 0:
                    inputhex = '000000' + inputhex;
                    break;
                case 1:
                    inputhex = '00000' + inputhex;
                    break;
                case 2:
                    inputhex = '0000' + inputhex;
                    break;
                case 3:
                    inputhex = '000' + inputhex;
                    break;
                case 4:
                    inputhex = '00' + inputhex;
                    break;
                case 5:
                    inputhex = '0' + inputhex;
                    break
                }
                parsex = hex2rgb(inputhex);
                parsex = rgb2hsv(parsex['r'], parsex['g'], parsex['b']);
                hue = 120 - Math.round(parsex['h'] * 1 / 3);
                if (hue < 0) {
                    hue = 0
                }
                if (hue > 119) {
                    hue = 119
                }
                saturation = parsex['s'];
                brightness = parsex['v'];
                jQuery(isample).css('background', '#' + inputhex)
            }
            if (C.show_color_on_border) {
                jQuery(aitem).css('border-color', '#' + inputhex)
            }
        };

        function action_exit() {
            if (!opened) {
                return false
            }
            jQuery(slider).remove();
            jQuery(sb_sel).remove();
            jQuery(switcher).remove();
            click_flag = true;
            switch (C.effect) {
            case 'zoom':
                jQuery(wrapper).animate({
                    width: '0px',
                    height: '0px'
                }, C.anim_speed, function () {
                    action_ok();
                    jQuery(wrapper).remove()
                });
                break;
            case 'slide':
                jQuery(wrapper).slideUp(C.anim_speed, function () {
                    action_ok();
                    jQuery(wrapper).remove()
                });
                break;
            case 'fade':
                jQuery(wrapper).fadeTo(C.anim_speed, 0, function () {
                    action_ok();
                    jQuery(wrapper).remove()
                });
                break;
            default:
                action_ok();
                jQuery(wrapper).remove();
                break
            }
            opened = false
        };

        function action_ok() {
            if (userok) {
                var a = '#' + rgb2hex(jQuery(inp_r).val() * 1, jQuery(inp_g).val() * 1, jQuery(inp_b).val() * 1);
                if (jQuery.trim(jQuery(inp_r).val()) == '' && jQuery.trim(jQuery(inp_g).val()) == '' && jQuery.trim(jQuery(inp_b).val()) == '') {
                    jQuery(isample).css('background', 'url(' + root_path + 'transp.gif) repeat');
                    jQuery(aitem).val('')
                } else {
                    jQuery(isample).css('background', a);
                    if (C.show_color_on_border) {
                        jQuery(aitem).css('border-color', a)
                    }
                    jQuery(aitem).val(a)
                }
                userok = false;
                C.callback_on_ok()
            }
        };

        function draw_rgb() {
            var a = rgb2hsv(jQuery(inp_r).val() * 1, jQuery(inp_g).val() * 1, jQuery(inp_b).val() * 1);
            hue = -1 * (Math.round(a['h'] * 1 / 3) - 120);
            if (hue < 0) {
                hue = 0
            }
            if (hue > 119) {
                hue = 119
            }
            saturation = a['s'];
            brightness = a['v'];
            jQuery(slider).css('left', pos_huebox.left + 'px').css('top', (pos_huebox.top + hue) + 'px');
            init_positions();
            init_colors();
            jQuery(inp_hex).val(rgb2hex(jQuery(inp_r).val() * 1, jQuery(inp_g).val() * 1, jQuery(inp_b).val() * 1))
        };

        function hex_valid_and_draw() {
            var a = true,
                hexistr = '';
            hexistr = jQuery.trim(jQuery(inp_hex).val());
            switch (hexistr.length) {
            case 1:
                hexistr = '00000' + hexistr;
                break;
            case 2:
                hexistr = '0000' + hexistr;
                break;
            case 3:
                hexistr = '000' + hexistr;
                break;
            case 4:
                hexistr = '00' + hexistr;
                break;
            case 5:
                hexistr = '0' + hexistr;
                break
            }
            if (hexistr.length > 0) {
                for (var i = 0; i < hexistr.length; i++) {
                    if (!((hexistr.charAt(i) + '') in y)) {
                        a = false
                    }
                }
            }
            if (a) {
                if (hexistr == '') {
                    hue = 119;
                    saturation = 0;
                    brightness = 0
                } else {
                    var b = hex2rgb(hexistr);
                    jQuery(inp_r).val(b['r']);
                    jQuery(inp_g).val(b['g']);
                    jQuery(inp_b).val(b['b']);
                    var b = rgb2hsv(b['r'], b['g'], b['b']);
                    hue = -1 * (Math.round(b['h'] * 1 / 3) - 120);
                    if (hue < 0) {
                        hue = 0
                    }
                    if (hue > 119) {
                        hue = 119
                    }
                    saturation = b['s'];
                    brightness = b['v']
                }
                jQuery(slider).css('left', pos_huebox.left + 'px').css('top', (pos_huebox.top + hue) + 'px');
                init_positions();
                init_colors();
                if (hexistr == '') {
                    jQuery(colsample).css('background-image', 'url(' + root_path + 'transp.gif)').css('background-repeat', 'repeat');
                    jQuery(isample).val('').css('background', 'url(' + root_path + 'transp.gif) repeat');
                    jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) -20px 0 no-repeat');
                    jQuery(wrapper).find('input').val('')
                }
            }
        };

        function update_inputs() {
            var a = hsb2rgb_hex(-1 * (hue - 119) * 3, saturation, brightness, 'rgb');
            jQuery(inp_r).val(Math.round(a['r']) * 1);
            jQuery(inp_g).val(Math.round(a['g']) * 1);
            jQuery(inp_b).val(Math.round(a['b']) * 1);
            jQuery(inp_hex).val(rgb2hex(a['r'], a['g'], a['b']))
        };

        function hsb2rgb_hex(a, b, c, d) {
            var h = a / 360;
            var s = b / 100;
            var v = c / 100;
            var e = new Array();
            var f, var_i, var_1, var_2, var_3, var_r, var_g;
            if (s == 0) {
                e['r'] = v * 255;
                e['g'] = v * 255;
                e['b'] = v * 255
            } else {
                f = h * 6;
                var_i = Math.floor(f);
                var_1 = v * (1 - s);
                var_2 = v * (1 - s * (f - var_i));
                var_3 = v * (1 - s * (1 - (f - var_i)));
                if (var_i == 0) {
                    var_r = v;
                    var_g = var_3;
                    var_b = var_1
                } else if (var_i == 1) {
                    var_r = var_2;
                    var_g = v;
                    var_b = var_1
                } else if (var_i == 2) {
                    var_r = var_1;
                    var_g = v;
                    var_b = var_3
                } else if (var_i == 3) {
                    var_r = var_1;
                    var_g = var_2;
                    var_b = v
                } else if (var_i == 4) {
                    var_r = var_3;
                    var_g = var_1;
                    var_b = v
                } else {
                    var_r = v;
                    var_g = var_1;
                    var_b = var_2
                };
                e['r'] = Math.round(var_r * 255);
                e['g'] = Math.round(var_g * 255);
                e['b'] = Math.round(var_b * 255)
            }
            if (d == 'hex') {
                return rgb2hex(e['r'], e['g'], e['b'])
            } else if (d == 'rgb') {
                return (e)
            } else {
                return (e)
            }
        };

        function hex2rgb(h) {
            var a = new String();
            a = h;
            a.toUpperCase();
            h = a;
            var i, x = '0123456789ABCDEF',
                c = '';
            var b = new Array();
            if (h) {
                h = h.toUpperCase();
                for (i = 0; i < 6; i += 2) {
                    switch (i) {
                    case 0:
                        b['r'] = (16 * x.indexOf(h.charAt(i)) + x.indexOf(h.charAt(i + 1))) * 1;
                        break;
                    case 2:
                        b['g'] = (16 * x.indexOf(h.charAt(i)) + x.indexOf(h.charAt(i + 1))) * 1;
                        break;
                    case 4:
                        b['b'] = (16 * x.indexOf(h.charAt(i)) + x.indexOf(h.charAt(i + 1))) * 1;
                        break
                    }
                }
            }
            return b
        };

        function rgb2hsv(a, c, d) {
            var e = 0,
                maxrgb = 0,
                delta = 0,
                h = 0,
                s = 0,
                b = 0;
            var f = new Array();
            h = 0.0;
            e = Math.min(Math.min(a, c), d);
            maxrgb = Math.max(Math.max(a, c), d);
            delta = (maxrgb - e);
            b = maxrgb;
            if (maxrgb != 0.0) {
                s = 255.0 * delta / maxrgb
            } else {
                s = 0.0
            }
            if (s != 0.0) {
                if (a == maxrgb) {
                    h = (c - d) / delta
                } else {
                    if (c == maxrgb) {
                        h = 2.0 + (d - a) / delta
                    } else {
                        if (d == maxrgb) {
                            h = 4.0 + (a - c) / delta
                        }
                    }
                }
            } else {
                h = -1.0
            }
            h = h * 60;
            if (h < 0.0) {
                h = h + 360.0
            }
            f['h'] = Math.round(h);
            f['s'] = Math.round(s * 100 / 255);
            f['v'] = Math.round(b * 100 / 255);
            if (f['h'] > 360) {
                f['h'] = 360
            }
            if (f['s'] > 100) {
                f['s'] = 100
            }
            if (f['v'] > 100) {
                f['v'] = 100
            }
            return f
        };

        function rgb2hex(r, g, b) {
            var a = new Array();
            a[0] = r;
            a[1] = g;
            a[2] = b;
            var c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            var d = '';
            for (var i = 0; i < a.length; i++) {
                dec = parseInt(a[i]);
                d += c[parseInt(dec / 16)] + c[dec % 16]
            }
            return d
        };

        function init_positions() {
            jQuery(slider).css('left', pos_huebox.left + 'px').css('top', (pos_huebox.top + hue) + 'px');
            jQuery(sb_sel).css('left', (pos_sbbox.left + Math.round(saturation * 1.3) - 4) + 'px').css('top', (pos_sbbox.top + jQuery(sbbox).height() - 4 - Math.round(brightness * 1.3)) + 'px')
        };

        function init_colors() {
            jQuery(sbbox).css('background-color', '#' + hsb2rgb_hex(-1 * (hue - 119) * 3, 100, 100, 'hex'));
            jQuery(colsample).css('background-color', '#' + hsb2rgb_hex(-1 * (hue - 119) * 3, saturation, brightness, 'hex')).css('background-image', 'none');
            jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat')
        };
        setTimeout(function () {
            aitem_pos = jQuery(aitem).offset()
        }, 200);

        function run_modcoder_colorpicker() {
            var b = -1 * C.hue_bar * 20,
                cz_index = C.z_index,
                zindex1, zindex2;
            if (isNaN(cz_index * 1)) {
                zindex1 = zindex2 = ''
            } else {
                cz_index = cz_index * 1;
                zindex1 = 'z-index:' + cz_index + ';';
                zindex2 = 'z-index:' + (cz_index + 1) + ';'
            }
            var c = '<div id="modcoder_sample_wrapper" style="width:62px;height:30px;float:left;background:none;border:1px solid ' + C.border_color + ';margin:0;padding:0;' + u + '"><div id="modcoder_sample" style="width:60px;height:28px;border:1px solid white;float:left;padding:0;margin:0;' + u + '"></div></div>';
            init_color();
            jQuery('body').append('<div style="display:none;' + zindex1 + 'width:265px;height:162px;position:absolute;overflow:hidden;padding:0;margin:0;' + radwrap + shadow + '" id="modcoder_colorpicker" id="modcoder_colorpicker_class"><div id="modcoder_colorpicker_wrapper" style="height:140px;width:244px;margin:0;padding:10px 9px 10px 10px;float:left;overflow:hidden;background-color:' + C.background_color + ';border:1px solid ' + C.border_color + ';' + backlight + radwrap + '"><div id="modcoder_grad_wrap" style="width:140px;height:140px;float:left;background:none;padding:0;margin:0;border:none;"><div id="modcoder_grad" style="width:132px;height:132px;border:4px solid ' + C.sb_border_color + ';padding:0;margin:0;' + u + '"><div style="width:130px;height:130px;float:left;background-image:url(' + root_path + 'bg.png);background-position:0 0;background-repeat:no-repeat;border:1px solid white;padding:0;margin:0;"></div></div></div><div id="modcoder_hue_wrap" style="width:20px;height:130px;float:left;padding:15px 8px 0px 10px;margin:0;border:none;"><div id="modcoder_hue" style="width:20px;height:130px;float:left;background:url(' + root_path + 'hue.png) ' + b + 'px 0 no-repeat;margin:0;padding:0;border:none;"></div></div><div id="modcoder_data" style="float:left;font-size:10px;font-family: Verdana, Arial, Helvetica, Sans-serif;width:66px;height:140px;margin:0;padding:0;border:none;">' + c + '<div class="modcoder_dataitem" style="float:left;padding:6px 0 0 0;margin:0;border:none;"><b style="display:inline-block;width:13px;text-align:left;font-size:10px;font-family: Verdana, Arial, Helvetica, Sans-serif;font-weight:bold;color:' + C.label_color + ';line-height:13px;">R</b><input style="line-height:13px;padding:1px 0;margin:0;color:' + C.input_text_color + ';border:1px solid ' + C.border_color + ';background:' + C.input_background_color + ';width:49px;font-size:10px;text-align:center;' + rad3px + '" id="modcoder_r" class="modcoder_input modcoder_rgb" type="text" size="3" maxlength="3" /></div><div class="modcoder_dataitem" style="float:left;padding:3px 0 0 0;margin:0;border:none;"><b style="display:inline-block;width:13px;text-align:left;font-size:10px;font-family: Verdana, Arial, Helvetica, Sans-serif;font-weight:bold;color:' + C.label_color + ';line-height:13px;">G</b><input style="line-height:13px;padding:1px 0;margin:0;color:' + C.input_text_color + ';border:1px solid ' + C.border_color + ';background:' + C.input_background_color + ';width:49px;font-size:10px;text-align:center;' + rad3px + '" id="modcoder_g" class="modcoder_input modcoder_rgb" type="text" size="3" maxlength="3" /></div><div class="modcoder_dataitem" style="float:left;padding:3px 0 0 0;margin:0;border:none;"><b style="display:inline-block;width:13px;text-align:left;font-size:10px;font-family: Verdana, Arial, Helvetica, Sans-serif;font-weight:bold;color:' + C.label_color + ';line-height:13px;">B</b><input style="padding:1px 0;margin:0;color:' + C.input_text_color + ';border:1px solid ' + C.border_color + ';background:' + C.input_background_color + ';width:49px;font-size:10px;text-align:center;' + rad3px + '" id="modcoder_b" class="modcoder_input modcoder_rgb" type="text" size="3" maxlength="3" /></div><div class="modcoder_dataitem" style="float:left;padding:6px 0;margin:0;border:none;"><b style="display:inline-block;width:13px;text-align:left;font-size:10px;font-family: Verdana, Arial, Helvetica, Sans-serif;font-weight:bold;color:' + C.label_color + ';line-height:13px;">#</b><input style="padding:1px 0;margin:0;color:' + C.input_text_color + ';border:1px solid ' + C.border_color + ';background:' + C.input_background_color + ';width:49px;font-size:10px;text-align:center;' + rad3px + '" id="modcoder_hex" class="modcoder_input" type="text" size="6" maxlength="6" /></div><div style="width:66px;height:15px;padding:0;margin:0;border:none;float:left;"><div id="modcoder_ok" style="margin:0;padding:0;width:47px;height:15px;float:left;cursor:pointer;background-image:url(' + root_path + 'ok.png);background-position: 0 0;background-repeat:no-repeat;"></div><div id="modcoder_close" style="margin:0;padding:0;width:15px;height:15px;float:right;cursor:pointer;background-image:url(' + root_path + 'ok.png);background-position: -47px 0;background-repeat:no-repeat;"></div></div></div></div></div><div style="display:none;' + zindex2 + 'width:11px;height:11px;position:absolute;background: url(' + root_path + 'sel.gif) ' + (-1 * C.sb_slider * 11) + 'px 0 no-repeat;margin:0;padding:0;border:none;" id="modcoder_picker"></div><div style="display:none;' + zindex2 + 'width:20px;height:11px;position:absolute;background: url(' + root_path + 'slider.gif) ' + (-1 * C.hue_slider * 20) + 'px 0 no-repeat;margin:0;padding:0;border:none;cursor:n-resize;" id="modcoder_slider"></div><div id="modcoder_switcher" style="border:1px solid ' + C.border_color + ';display:none;' + zindex2 + 'padding:0;margin:0;font-size:1px;line-height:1px;width:20px;height:12px;background:url(' + root_path + 'transp0.gif) 0 0 no-repeat;position:absolute;cursor:pointer;' + rad3px + '"></div>');
            aitem_pos = jQuery(aitem).offset();
            wrapper = jQuery('body > div#modcoder_colorpicker').css('left', aitem_pos.left + 'px').css('top', (aitem_pos.top + jQuery(aitem).outerHeight()) + 'px').mouseenter(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = true
                }, 50)
            }).mouseleave(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = false
                }, 50)
            });
            inp_hex = jQuery(wrapper).find('input#modcoder_hex');
            switcher = jQuery('body > div#modcoder_switcher');
            slider = jQuery('body > div#modcoder_slider');
            sb_sel = jQuery('body > div#modcoder_picker');
            switch (C.effect) {
            case 'zoom':
                jQuery(wrapper).css('width', '0px').css('height', '0px').show().animate({
                    width: '265px',
                    height: '162px'
                }, C.anim_speed, function () {
                    jQuery(this).show();
                    jQuery('body > div#modcoder_slider, body > div#modcoder_picker').show();
                    jQuery(switcher).show()
                });
                break;
            case 'slide':
                jQuery(wrapper).slideDown(C.anim_speed, function () {
                    jQuery(this).show();
                    jQuery('body > div#modcoder_slider, body > div#modcoder_picker').show();
                    jQuery(switcher).show()
                });
                break;
            case 'fade':
                jQuery('body > div#modcoder_colorpicker, body > div#modcoder_slider, body > div#modcoder_picker, body > div#modcoder_switcher').fadeTo(1, 0, function () {
                    jQuery(this).show().fadeTo(C.anim_speed, 1)
                });
                break;
            default:
                jQuery(wrapper).show();
                jQuery(switcher).show();
                jQuery('body > div#modcoder_slider, body > div#modcoder_picker').show();
                break
            }
            huebox = jQuery(wrapper).find('div#modcoder_hue');
            sbbox = jQuery(wrapper).find('div#modcoder_grad div');
            colsample = jQuery(wrapper).find('#modcoder_sample');
            inp_r = jQuery(wrapper).find('input#modcoder_r');
            inp_g = jQuery(wrapper).find('input#modcoder_g');
            inp_b = jQuery(wrapper).find('input#modcoder_b');
            ok_but = jQuery(wrapper).find('#modcoder_ok');
            close_but = jQuery(wrapper).find('#modcoder_close');
            pos_wrap = jQuery(wrapper).offset();
            pos_sbbox = jQuery(sbbox).offset();
            pos_huebox = jQuery(huebox).offset();
            jQuery(switcher).click(function () {
                if (jQuery.trim(jQuery(inp_r).val()) == '' && jQuery.trim(jQuery(inp_g).val()) == '' && jQuery.trim(jQuery(inp_b).val()) == '') {
                    jQuery(colsample).css('background-image', 'none');
                    jQuery(this).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat');
                    update_inputs()
                } else {
                    jQuery(colsample).css('background-image', 'url(' + root_path + 'transp.gif)').css('background-repeat', 'repeat');
                    jQuery(wrapper).find('input').val('');
                    jQuery(this).css('background', 'url(' + root_path + 'transp0.gif) -20px 0 no-repeat')
                }
            }).css('left', (pos_huebox.left - 1) + 'px').css('top', (pos_huebox.top - 15) + 'px').mouseenter(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = true
                }, 50)
            }).mouseleave(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = false
                }, 50)
            });
            jQuery(slider).mouseenter(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = true
                }, 50)
            }).mouseleave(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = false
                }, 50)
            });
            jQuery(sb_sel).mouseenter(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = true
                }, 50)
            }).mouseleave(function () {
                clearTimeout(click_to);
                click_to = setTimeout(function () {
                    click_flag = false
                }, 50)
            }).dblclick(function (e) {
                jQuery(ok_but).click()
            });
            jQuery(sb_sel).mousedown(function (e) {
                pos_sel = jQuery(this).offset();
                correct_x = e.pageX - pos_sel.left;
                correct_y = e.pageY - pos_sel.top;
                j = this;
                jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat');
                e.preventDefault()
            }).click(function (e) {});
            jQuery(slider).mousedown(function (e) {
                pos_slider = jQuery(this).offset();
                correct_x = e.pageX - pos_slider.left;
                correct_y = e.pageY - pos_slider.top;
                moved_slider = this;
                jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat');
                e.preventDefault()
            });
            jQuery(huebox).mousedown(function (e) {
                if (e.pageY >= (pos_huebox.top + 5) && e.pageY <= ((pos_huebox.top + jQuery(huebox).height()) - 6)) {
                    hue = e.pageY - pos_huebox.top - 5;
                    if (hue < 0) hue = 0;
                    if (hue > 119) hue = 119;
                    jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat');
                    init_positions();
                    init_colors();
                    update_inputs();
                    pos_slider = jQuery(slider).offset();
                    correct_x = e.pageX - pos_slider.left;
                    correct_y = e.pageY - pos_slider.top;
                    moved_slider = slider;
                    e.preventDefault()
                }
            });
            jQuery(sbbox).mousedown(function (e) {
                saturation = Math.round((e.pageX - pos_sbbox.left - 1) / 1.3);
                if (saturation > 100) {
                    saturation = 100
                }
                if (saturation < 1) {
                    saturation = 1
                }
                brightness = -1 * (Math.round((e.pageY - pos_sbbox.top - 1) / 1.3) - 100);
                if (brightness > 100) {
                    brightness = 100
                }
                if (brightness < 1) {
                    brightness = 1
                }
                jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat');
                init_positions();
                jQuery(colsample).css('background-color', '#' + hsb2rgb_hex(-1 * (hue - 119) * 3, saturation, brightness, 'hex')).css('background-image', 'none');
                update_inputs();
                j = sb_sel;
                pos_sel = jQuery(j).offset();
                correct_x = e.pageX - pos_sel.left;
                correct_y = e.pageY - pos_sel.top;
                e.preventDefault()
            });
            jQuery(wrapper).find('input.modcoder_input').keypress(function (a) {
                if (jQuery(this).hasClass('modcoder_rgb')) {
                    if (!((String.fromCharCode(a.which) * 1) in w) && !(a.which in z)) {
                        a.preventDefault()
                    }
                } else {
                    if (!(String.fromCharCode(a.which) in y) && !(a.which in z)) {
                        a.preventDefault()
                    }
                }
            }).change(function () {
                if (jQuery(this).hasClass('modcoder_rgb')) {
                    if (jQuery(this).val() == '') {
                        jQuery(this).val('0')
                    }
                    if (isNaN(jQuery(this).val() * 1)) {
                        jQuery(this).val('0')
                    }
                    if (jQuery(this).val() * 1 > 255) {
                        jQuery(this).val('255')
                    }
                    if (jQuery(this).val() * 1 < 0) {
                        jQuery(this).val('0')
                    }
                    draw_rgb()
                } else {
                    hex_valid_and_draw()
                }
            }).keyup(function () {
                if (jQuery(this).hasClass('modcoder_rgb')) {
                    if (jQuery(this).val() == '') {
                        jQuery(this).val('0')
                    }
                    if (isNaN(jQuery(this).val() * 1)) {
                        jQuery(this).val('0')
                    }
                    if (jQuery(this).val() * 1 > 255) {
                        jQuery(this).val('255')
                    }
                    if (jQuery(this).val() * 1 < 0) {
                        jQuery(this).val('0')
                    }
                    draw_rgb()
                } else {
                    hex_valid_and_draw()
                }
            });
            inp_hex[0].onpaste = inp_hex[0].oninput = function (e) {
                clearTimeout(hexto);
                hexto = setTimeout(function () {
                    hex_valid_and_draw()
                }, 100)
            };
            inp_r[0].onpaste = inp_r[0].oninput = inp_g[0].onpaste = inp_g[0].oninput = inp_b[0].onpaste = inp_b[0].oninput = function (e) {
                if (jQuery(this).val() == '') {
                    jQuery(this).val('0')
                }
                if (isNaN(jQuery(this).val() * 1)) {
                    jQuery(this).val('0')
                }
                if (jQuery(this).val() * 1 > 255) {
                    jQuery(this).val('255')
                }
                if (jQuery(this).val() * 1 < 0) {
                    jQuery(this).val('0')
                }
                clearTimeout(hexto);
                hexto = setTimeout(function () {
                    draw_rgb()
                }, 100)
            };
            jQuery(ok_but).click(function () {
                userok = true;
                action_exit()
            }).mouseenter(function () {
                jQuery(this).css('background-position', '0 -15px')
            }).mouseleave(function () {
                jQuery(this).css('background-position', '0 0')
            });
            jQuery(close_but).click(function () {
                action_exit()
            }).mouseenter(function () {
                jQuery(this).css('background-position', '-47px -15px')
            }).mouseleave(function () {
                jQuery(this).css('background-position', '-47px 0')
            });
            init_positions();
            jQuery(inp_hex).val(inputhex);
            hex_valid_and_draw();
            opened = true;
            if (inputhex == '') {
                jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) -20px 0 no-repeat')
            } else {
                jQuery(switcher).css('background', 'url(' + root_path + 'transp0.gif) 0 0 no-repeat')
            }
        };
        jQuery(document).mouseup(function (e) {
            j = 'mel';
            moved_slider = 'mel'
        }).mousemove(function (e) {
            if (j != 'mel') {
                e.preventDefault();
                var a = 0,
                    tty = 0;
                a = e.pageX - correct_x;
                if (a < (pos_sbbox.left - 4)) {
                    a = pos_sbbox.left - 4
                }
                if (a > (pos_sbbox.left + 125)) {
                    a = pos_sbbox.left + 125
                }
                tty = e.pageY - correct_y;
                if (tty < (pos_sbbox.top - 4)) {
                    tty = pos_sbbox.top - 4
                }
                if (tty > (pos_sbbox.top + 125)) {
                    tty = pos_sbbox.top + 125
                }
                jQuery(j).css('left', a + 'px').css('top', tty + 'px');
                brightness = -1 * (Math.round((tty - pos_sbbox.top + 5) / 1.3) - 100) + 1;
                saturation = Math.round((a - pos_sbbox.left + 5) / 1.3);
                if (brightness == 1) {
                    brightness = 0
                }
                if (saturation == 1) {
                    saturation = 0
                }
                jQuery(colsample).css('background-color', '#' + hsb2rgb_hex(-1 * (hue - 119) * 3, saturation, brightness, 'hex')).css('background-image', 'none');
                update_inputs()
            }
            if (moved_slider != 'mel') {
                e.preventDefault();
                hue = e.pageY - pos_huebox.top - correct_y;
                if (hue < 0) {
                    hue = 0
                }
                if (hue > 119) {
                    hue = 119
                }
                jQuery(moved_slider).css('left', pos_huebox.left + 'px').css('top', (pos_huebox.top + hue) + 'px');
                init_colors();
                update_inputs()
            }
        }).keydown(function (a) {
            if (a.keyCode == '27') {
                a.preventDefault();
                action_exit()
            }
            if (a.keyCode == '13') {
                a.preventDefault();
                jQuery(ok_but).click()
            }
        }).click(function () {
            if (!click_flag) {
                action_exit()
            }
        });
        jQuery(aitem).click(function () {
            if (!opened) {
                jQuery('body > div#modcoder_slider, body > div#modcoder_picker, body > div#modcoder_colorpicker').stop().remove();
                setTimeout(function () {
                    run_modcoder_colorpicker()
                }, 50)
            }
        }).keyup(function () {
            if (opened) {
                init_color();
                update_inputs();
                init_positions();
                jQuery(inp_hex).val(inputhex);
                hex_valid_and_draw()
            }
        });
		jQuery(aitem).next().find('.colorsettings').click(function(e){
			if(e) e.preventDefault();
			jQuery(aitem).click();
		});
        jQuery(isample).click(function () {
            jQuery(aitem).click()
        });
        if (C.demo_mode) {
            jQuery(isample).click()
        }
    })
};

var showAlertForm = {
	layer:$('#layerValidateFormid'),
	classLayer:'layerClass',
	fade:null,
	timeWait:null,
	showDuration:300,
	hideDuration:500,
	init:function(){
		var that = this;
		that.layer = $('#layerValidateFormid');
		if (that.layer.length <= 0){
			that.layer = jQuery('<div />')
						.attr('id','layerValidateFormid')
						.addClass(that.classLayer)						
						.css({'opacity':'0','top':'-5000px','position':'absolute','overflow': 'hidden','backgroundColor':'#E10061','color':'#ffffff'})
						.html('<p class="message"></p>')
						.appendTo(jQuery('body'));
		}
	},
	showLayer: function(element, message, settings) {
		var that = this,
			ofs = {
				top: 0,
				left: 0,
				width: 0,
				height: 0,				
				autoWidth:false,
				nofocus:false,
				zIdx:1,				
				lineHeight:null
			};
			
		ofs = $.extend(ofs, settings);
		
		if (that.layer.length <= 0){
			that.init();
		}		
		that.layer.css("width","auto");
		that.layer.children()[0].innerHTML = message;
		var elementCoords = element.offset();		
		var elementHeight = element.innerHeight();
		var elementWidth = element.width();		
		that.layer.css({
			'top': elementCoords.top + elementHeight + ofs.top,
			'left': elementCoords.left + ofs.left,
			'width': (ofs.autoWidth) ? 'auto' : elementWidth + ofs.width,						
			zIndex:  ofs.zIdx
		});
		if(ofs.lineHeight!=null){
			that.layer.css({
				'line-height': ofs.lineHeight + 'px'
			});
		}
		
		if (!ofs.nofocus){
			element.focus();
		}
		that.layer.stop().fadeTo(that.showDuration,1);
		clearInterval(that.timeWait);
		that.timeWait = setInterval(function(){
			clearInterval(that.timeWait);
			that.layer.stop().fadeTo(that.hideDuration, 0, function(){
				that.layer.css('top', -50000);
			});
		},2000);
	},
	initElement:function(element,initmessage){
		if (element.length > 0){
			element.unbind('focus').unbind('blur').bind({
				focus:function(){
					if (jQuery.trim(element.val())==initmessage){
						element.val('');
					}
				},
				blur:function(){
					if (jQuery.trim(element.val())==""){
						element.val(initmessage);
					}
				}
			});
		}
	}
};



/**
 * @preserve
 * FullCalendar v1.5.1
 * http://arshaw.com/fullcalendar/
 *
 * Use fullcalendar.css for basic styling.
 * For event drag & drop, requires jQuery UI draggable.
 * For event resizing, requires jQuery UI resizable.
 *
 * Copyright (c) 2011 Adam Shaw
 * Dual licensed under the MIT and GPL licenses, located in
 * MIT-LICENSE.txt and GPL-LICENSE.txt respectively.
 *
 * Date: Sat Apr 9 14:09:51 2011 -0700
 *
 */
 
(function($, undefined) {


var defaults = {

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	
	// editing
	//editable: false,
	//disableDragging: false,
	//disableResizing: false,
	
	allDayDefault: true,
	ignoreTimezone: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	
	// time formats
	titleFormat: {
		month: 'MMMM yyyy',
		week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
		day: 'dddd, MMM d, yyyy'
	},
	columnFormat: {
		month: 'ddd',
		week: 'ddd M/d',
		day: 'dddd M/d'
	},
	timeFormat: { // for event elements
		'': 'h(:mm)t' // default
	},
	
	// locale
	isRTL: false,
	firstDay: 0,
	monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	buttonText: {
		prev: '&nbsp;&#9668;&nbsp;',
		next: '&nbsp;&#9658;&nbsp;',
		prevYear: '&nbsp;&lt;&lt;&nbsp;',
		nextYear: '&nbsp;&gt;&gt;&nbsp;',
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	
	// jquery-ui theming
	theme: false,
	buttonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e'
	},
	
	//selectable: false,
	unselectAuto: true,
	
	dropAccept: '*'
	
};

// right-to-left defaults
var rtlDefaults = {
	header: {
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonText: {
		prev: '&nbsp;&#9658;&nbsp;',
		next: '&nbsp;&#9668;&nbsp;',
		prevYear: '&nbsp;&gt;&gt;&nbsp;',
		nextYear: '&nbsp;&lt;&lt;&nbsp;'
	},
	buttonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w'
	}
};



var fc = $.fullCalendar = { version: "1.5.1" };
var fcViews = fc.views = {};


$.fn.fullCalendar = function(options) {


	// method calling
	if (typeof options == 'string') {
		var args = Array.prototype.slice.call(arguments, 1);
		var res;
		this.each(function() {
			var calendar = $.data(this, 'fullCalendar');
			if (calendar && $.isFunction(calendar[options])) {
				var r = calendar[options].apply(calendar, args);
				if (res === undefined) {
					res = r;
				}
				if (options == 'destroy') {
					$.removeData(this, 'fullCalendar');
				}
			}
		});
		if (res !== undefined) {
			return res;
		}
		return this;
	}
	
	
	// would like to have this logic in EventManager, but needs to happen before options are recursively extended
	var eventSources = options.eventSources || [];
	delete options.eventSources;
	if (options.events) {
		eventSources.push(options.events);
		delete options.events;
	}
	

	options = $.extend(true, {},
		defaults,
		(options.isRTL || options.isRTL===undefined && defaults.isRTL) ? rtlDefaults : {},
		options
	);
	
	
	this.each(function(i, _element) {
		var element = $(_element);
		var calendar = new Calendar(element, options, eventSources);
		element.data('fullCalendar', calendar); // TODO: look into memory leak implications
		calendar.render();
	});
	
	
	return this;
	
};


// function for adding/overriding defaults
function setDefaults(d) {
	$.extend(true, defaults, d);
}



 
function Calendar(element, options, eventSources) {
	var t = this;
	
	
	// exports
	t.options = options;
	t.render = render;
	t.destroy = destroy;
	t.refetchEvents = refetchEvents;
	t.reportEvents = reportEvents;
	t.reportEventChange = reportEventChange;
	t.rerenderEvents = rerenderEvents;
	t.changeView = changeView;
	t.select = select;
	t.unselect = unselect;
	t.prev = prev;
	t.next = next;
	t.prevYear = prevYear;
	t.nextYear = nextYear;
	t.today = today;
	t.gotoDate = gotoDate;
	t.incrementDate = incrementDate;
	t.formatDate = function(format, date) { return formatDate(format, date, options) };
	t.formatDates = function(format, date1, date2) { return formatDates(format, date1, date2, options) };
	t.getDate = getDate;
	t.getView = getView;
	t.option = option;
	t.trigger = trigger;
	
	
	// imports
	EventManager.call(t, options, eventSources);
	var isFetchNeeded = t.isFetchNeeded;
	var fetchEvents = t.fetchEvents;
	
	
	// locals
	var _element = element[0];
	var header;
	var headerElement;
	var content;
	var tm; // for making theme classes
	var currentView;
	var viewInstances = {};
	var elementOuterWidth;
	var suggestedViewHeight;
	var absoluteViewElement;
	var resizeUID = 0;
	var ignoreWindowResize = 0;
	var date = new Date();
	var events = [];
	var _dragElement;
	
	
	
	/* Main Rendering
	-----------------------------------------------------------------------------*/
	
	
	setYMD(date, options.year, options.month, options.date);
	
	
	function render(inc) {
		if (!content) {
			initialRender();
		}else{
			calcSize();
			markSizesDirty();
			markEventsDirty();
			renderView(inc);
		}
	}
	
	
	function initialRender() {
		tm = options.theme ? 'ui' : 'fc';
		element.addClass('fc');
		if (options.isRTL) {
			element.addClass('fc-rtl');
		}
		if (options.theme) {
			element.addClass('ui-widget');
		}
		content = $("<div class='fc-content' style='position:relative'/>")
			.prependTo(element);
		header = new Header(t, options);
		headerElement = header.render();
		if (headerElement) {
			element.prepend(headerElement);
		}
		changeView(options.defaultView);
		$(window).resize(windowResize);
		// needed for IE in a 0x0 iframe, b/c when it is resized, never triggers a windowResize
		if (!bodyVisible()) {
			lateRender();
		}
	}
	
	
	// called when we know the calendar couldn't be rendered when it was initialized,
	// but we think it's ready now
	function lateRender() {
		setTimeout(function() { // IE7 needs this so dimensions are calculated correctly
			if (!currentView.start && bodyVisible()) { // !currentView.start makes sure this never happens more than once
				renderView();
			}
		},0);
	}
	
	
	function destroy() {
		$(window).unbind('resize', windowResize);
		header.destroy();
		content.remove();
		element.removeClass('fc fc-rtl ui-widget');
	}
	
	
	
	function elementVisible() {
		return _element.offsetWidth !== 0;
	}
	
	
	function bodyVisible() {
		return $('body')[0].offsetWidth !== 0;
	}
	
	
	
	/* View Rendering
	-----------------------------------------------------------------------------*/
	
	// TODO: improve view switching (still weird transition in IE, and FF has whiteout problem)
	
	function changeView(newViewName) {
		if (!currentView || newViewName != currentView.name) {
			ignoreWindowResize++; // because setMinHeight might change the height before render (and subsequently setSize) is reached

			unselect();
			
			var oldView = currentView;
			var newViewElement;
				
			if (oldView) {
				(oldView.beforeHide || noop)(); // called before changing min-height. if called after, scroll state is reset (in Opera)
				setMinHeight(content, content.height());
				oldView.element.hide();
			}else{
				setMinHeight(content, 1); // needs to be 1 (not 0) for IE7, or else view dimensions miscalculated
			}
			content.css('overflow', 'hidden');
			
			currentView = viewInstances[newViewName];
			if (currentView) {
				currentView.element.show();
			}else{
				currentView = viewInstances[newViewName] = new fcViews[newViewName](
					newViewElement = absoluteViewElement =
						$("<div class='fc-view fc-view-" + newViewName + "' style='position:absolute'/>")
							.appendTo(content),
					t // the calendar object
				);
			}
			
			if (oldView) {
				header.deactivateButton(oldView.name);
			}
			header.activateButton(newViewName);
			
			renderView(); // after height has been set, will make absoluteViewElement's position=relative, then set to null
			
			content.css('overflow', '');
			if (oldView) {
				setMinHeight(content, 1);
			}
			
			if (!newViewElement) {
				(currentView.afterShow || noop)(); // called after setting min-height/overflow, so in final scroll state (for Opera)
			}
			
			ignoreWindowResize--;
		}
	}
	
	
	
	function renderView(inc) {
		if (elementVisible()) {
			ignoreWindowResize++; // because renderEvents might temporarily change the height before setSize is reached

			unselect();
			
			if (suggestedViewHeight === undefined) {
				calcSize();
			}
			
			var forceEventRender = false;
			if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {
				// view must render an entire new date range (and refetch/render events)
				currentView.render(date, inc || 0); // responsible for clearing events
				setSize(true);
				forceEventRender = true;
			}
			else if (currentView.sizeDirty) {
				// view must resize (and rerender events)
				currentView.clearEvents();
				setSize();
				forceEventRender = true;
			}
			else if (currentView.eventsDirty) {
				currentView.clearEvents();
				forceEventRender = true;
			}
			currentView.sizeDirty = false;
			currentView.eventsDirty = false;
			updateEvents(forceEventRender);
			
			elementOuterWidth = element.outerWidth();
			
			header.updateTitle(currentView.title);
			var today = new Date();
			if (today >= currentView.start && today < currentView.end) {
				header.disableButton('today');
			}else{
				header.enableButton('today');
			}
			
			ignoreWindowResize--;
			currentView.trigger('viewDisplay', _element);
		}
	}
	
	
	
	/* Resizing
	-----------------------------------------------------------------------------*/
	
	
	function updateSize() {
		markSizesDirty();
		if (elementVisible()) {
			calcSize();
			setSize();
			unselect();
			currentView.clearEvents();
			currentView.renderEvents(events);
			currentView.sizeDirty = false;
		}
	}
	
	
	function markSizesDirty() {
		$.each(viewInstances, function(i, inst) {
			inst.sizeDirty = true;
		});
	}
	
	
	function calcSize() {
		if (options.contentHeight) {
			suggestedViewHeight = options.contentHeight;
		}
		else if (options.height) {
			suggestedViewHeight = options.height - (headerElement ? headerElement.height() : 0) - vsides(content);
		}
		else {
			suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
		}
	}
	
	
	function setSize(dateChanged) { // todo: dateChanged?
		ignoreWindowResize++;
		currentView.setHeight(suggestedViewHeight, dateChanged);
		if (absoluteViewElement) {
			absoluteViewElement.css('position', 'relative');
			absoluteViewElement = null;
		}
		currentView.setWidth(content.width(), dateChanged);
		ignoreWindowResize--;
	}
	
	
	function windowResize() {
		if (!ignoreWindowResize) {
			if (currentView.start) { // view has already been rendered
				var uid = ++resizeUID;
				setTimeout(function() { // add a delay
					if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {
						if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {
							ignoreWindowResize++; // in case the windowResize callback changes the height
							updateSize();
							currentView.trigger('windowResize', _element);
							ignoreWindowResize--;
						}
					}
				}, 200);
			}else{
				// calendar must have been initialized in a 0x0 iframe that has just been resized
				lateRender();
			}
		}
	}
	
	
	
	/* Event Fetching/Rendering
	-----------------------------------------------------------------------------*/
	
	
	// fetches events if necessary, rerenders events if necessary (or if forced)
	function updateEvents(forceRender) {
		if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {
			refetchEvents();
		}
		else if (forceRender) {
			rerenderEvents();
		}
	}
	
	
	function refetchEvents() {
		fetchEvents(currentView.visStart, currentView.visEnd); // will call reportEvents
	}
	
	
	// called when event data arrives
	function reportEvents(_events) {
		events = _events;
		rerenderEvents();
	}
	
	
	// called when a single event's data has been changed
	function reportEventChange(eventID) {
		rerenderEvents(eventID);
	}
	
	
	// attempts to rerenderEvents
	function rerenderEvents(modifiedEventID) {
		markEventsDirty();
		if (elementVisible()) {
			currentView.clearEvents();
			currentView.renderEvents(events, modifiedEventID);
			currentView.eventsDirty = false;
		}
	}
	
	
	function markEventsDirty() {
		$.each(viewInstances, function(i, inst) {
			inst.eventsDirty = true;
		});
	}
	


	/* Selection
	-----------------------------------------------------------------------------*/
	

	function select(start, end, allDay) {
		currentView.select(start, end, allDay===undefined ? true : allDay);
	}
	

	function unselect() { // safe to be called before renderView
		if (currentView) {
			currentView.unselect();
		}
	}
	
	
	
	/* Date
	-----------------------------------------------------------------------------*/
	
	
	function prev() {
		renderView(-1);
	}
	
	
	function next() {
		renderView(1);
	}
	
	
	function prevYear() {
		addYears(date, -1);
		renderView();
	}
	
	
	function nextYear() {
		addYears(date, 1);
		renderView();
	}
	
	
	function today() {
		date = new Date();
		renderView();
	}
	
	
	function gotoDate(year, month, dateOfMonth) {
		if (year instanceof Date) {
			date = cloneDate(year); // provided 1 argument, a Date
		}else{
			setYMD(date, year, month, dateOfMonth);
		}
		renderView();
	}
	
	
	function incrementDate(years, months, days) {
		if (years !== undefined) {
			addYears(date, years);
		}
		if (months !== undefined) {
			addMonths(date, months);
		}
		if (days !== undefined) {
			addDays(date, days);
		}
		renderView();
	}
	
	
	function getDate() {
		return cloneDate(date);
	}
	
	
	
	/* Misc
	-----------------------------------------------------------------------------*/
	
	
	function getView() {
		return currentView;
	}
	
	
	function option(name, value) {
		if (value === undefined) {
			return options[name];
		}
		if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
			options[name] = value;
			updateSize();
		}
	}
	
	
	function trigger(name, thisObj) {
		if (options[name]) {
			return options[name].apply(
				thisObj || _element,
				Array.prototype.slice.call(arguments, 2)
			);
		}
	}
	
	
	
	/* External Dragging
	------------------------------------------------------------------------*/
	
	if (options.droppable) {
		$(document)
			.bind('dragstart', function(ev, ui) {
				var _e = ev.target;
				var e = $(_e);
				if (!e.parents('.fc').length) { // not already inside a calendar
					var accept = options.dropAccept;
					if ($.isFunction(accept) ? accept.call(_e, e) : e.is(accept)) {
						_dragElement = _e;
						currentView.dragStart(_dragElement, ev, ui);
					}
				}
			})
			.bind('dragstop', function(ev, ui) {
				if (_dragElement) {
					currentView.dragStop(_dragElement, ev, ui);
					_dragElement = null;
				}
			});
	}
	

}

function Header(calendar, options) {
	var t = this;
	
	
	// exports
	t.render = render;
	t.destroy = destroy;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	
	
	// locals
	var element = $([]);
	var tm;
	


	function render() {
		tm = options.theme ? 'ui' : 'fc';
		var sections = options.header;
		if (sections) {
			element = $("<table class='fc-header' style='width:100%'/>")
				.append(
					$("<tr/>")
						.append(renderSection('left'))
						.append(renderSection('center'))
						.append(renderSection('right'))
				);
			return element;
		}
	}
	
	
	function destroy() {
		element.remove();
	}
	
	
	function renderSection(position) {
		var e = $("<td class='fc-header-" + position + "'/>");
		var buttonStr = options.header[position];
		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				if (i > 0) {
					e.append("<span class='fc-header-space'/>");
				}
				var prevButton;
				$.each(this.split(','), function(j, buttonName) {
					if (buttonName == 'title') {
						e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
						if (prevButton) {
							prevButton.addClass(tm + '-corner-right');
						}
						prevButton = null;
					}else{
						var buttonClick;
						if (calendar[buttonName]) {
							buttonClick = calendar[buttonName]; // calendar method							
						}
						else if (fcViews[buttonName]) {
							buttonClick = function() {
								button.removeClass(tm + '-state-hover'); // forget why
								calendar.changeView(buttonName);
							};
						}
						if (buttonClick) {
							var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null; // why are we using smartProperty here?
							var text = smartProperty(options.buttonText, buttonName); // why are we using smartProperty here?
							var button = $(
								"<span class='fc-button fc-button-" + buttonName + " " + tm + "-state-default'>" +
									"<span class='fc-button-inner'>" +
										((buttonName=='next')?"<span class='fc-button-text "+buttonName+"'>&nbsp;</span>":"")+
										"<span class='fc-button-content'>" +
											(icon ?
												"<span class='fc-icon-wrap'>" +
													"<span class='ui-icon ui-icon-" + icon + "'/>" +
												"</span>" :
												text
												) +
										"</span>" +
										((buttonName=='prev')?"<span class='fc-button-text "+buttonName+"'>&nbsp;</span>":"")+
										"<span class='fc-button-effect'><span></span></span>" +
									"</span>" +
								"</span>"
							);
							updateButtonText(button, buttonName);
							if (button) {
								button
									.click(function() {
										if (!button.hasClass(tm + '-state-disabled')) {
											buttonClick();
										}
									})
									.mousedown(function() {
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-down');
									})
									.mouseup(function() {
										button.removeClass(tm + '-state-down');
									})
									.hover(
										function() {
											button
												.not('.' + tm + '-state-active')
												.not('.' + tm + '-state-disabled')
												.addClass(tm + '-state-hover');
										},
										function() {
											button
												.removeClass(tm + '-state-hover')
												.removeClass(tm + '-state-down');
										}
									)
									.appendTo(e);
								if (!prevButton) {
									button.addClass(tm + '-corner-left');
								}
								prevButton = button;
							}
						}
					}
				});
				if (prevButton) {
					prevButton.addClass(tm + '-corner-right');
				}
			});			
		}
		return e;
	}
	
	function updateButtonText(button, buttonName){
		var td = new Date();
		var m = td.getMonth();
		var arrMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		if(buttonName == 'prev'){			
			button.find('.fc-button-text').text(arrMonths[(m-1) >= 0 ? m-1 : arrMonths.length-1]);
		}else if(buttonName == 'next'){
			button.find('.fc-button-text').text(arrMonths[(m+1) >= arrMonths.length ? 0 : m+1]);			
		}
	}
	
	function updateTitle(html) {
		element.find('h2')
			.html(html);
	}
	
	
	function activateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-active');
	}
	
	
	function deactivateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-active');
	}
	
	
	function disableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-disabled');
	}
	
	
	function enableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-disabled');
	}


}

fc.sourceNormalizers = [];
fc.sourceFetchers = [];

var ajaxDefaults = {
	dataType: 'json',
	cache: false
};

var eventGUID = 1;


function EventManager(options, _sources) {
	var t = this;
	
	
	// exports
	t.isFetchNeeded = isFetchNeeded;
	t.fetchEvents = fetchEvents;
	t.addEventSource = addEventSource;
	t.removeEventSource = removeEventSource;
	t.updateEvent = updateEvent;
	t.renderEvent = renderEvent;
	t.removeEvents = removeEvents;
	t.clientEvents = clientEvents;
	t.normalizeEvent = normalizeEvent;
	
	
	// imports
	var trigger = t.trigger;
	var getView = t.getView;
	var reportEvents = t.reportEvents;
	
	
	// locals
	var stickySource = { events: [] };
	var sources = [ stickySource ];
	var rangeStart, rangeEnd;
	var currentFetchID = 0;
	var pendingSourceCnt = 0;
	var loadingLevel = 0;
	var cache = [];
	
	
	for (var i=0; i<_sources.length; i++) {
		_addEventSource(_sources[i]);
	}
	
	
	
	/* Fetching
	-----------------------------------------------------------------------------*/
	
	
	function isFetchNeeded(start, end) {
		return !rangeStart || start < rangeStart || end > rangeEnd;
	}
	
	
	function fetchEvents(start, end) {
		rangeStart = start;
		rangeEnd = end;
		cache = [];
		var fetchID = ++currentFetchID;
		var len = sources.length;
		pendingSourceCnt = len;
		for (var i=0; i<len; i++) {
			fetchEventSource(sources[i], fetchID);
		}
	}
	
	
	function fetchEventSource(source, fetchID) {
		_fetchEventSource(source, function(events) {
			if (fetchID == currentFetchID) {
				if (events) {
					for (var i=0; i<events.length; i++) {
						events[i].source = source;
						normalizeEvent(events[i]);
					}
					cache = cache.concat(events);
				}
				pendingSourceCnt--;
				if (!pendingSourceCnt) {
					reportEvents(cache);
				}
			}
		});
	}
	
	
	function _fetchEventSource(source, callback) {
		var i;
		var fetchers = fc.sourceFetchers;
		var res;
		for (i=0; i<fetchers.length; i++) {
			res = fetchers[i](source, rangeStart, rangeEnd, callback);
			if (res === true) {
				// the fetcher is in charge. made its own async request
				return;
			}
			else if (typeof res == 'object') {
				// the fetcher returned a new source. process it
				_fetchEventSource(res, callback);
				return;
			}
		}
		var events = source.events;
		if (events) {
			if ($.isFunction(events)) {
				pushLoading();
				events(cloneDate(rangeStart), cloneDate(rangeEnd), function(events) {
					callback(events);
					popLoading();
				});
			}
			else if ($.isArray(events)) {
				callback(events);
			}
			else {
				callback();
			}
		}else{
			var url = source.url;
			if (url) {
				var success = source.success;
				var error = source.error;
				var complete = source.complete;
				var data = $.extend({}, source.data || {});
				var startParam = firstDefined(source.startParam, options.startParam);
				var endParam = firstDefined(source.endParam, options.endParam);
				if (startParam) {
					data[startParam] = Math.round(+rangeStart / 1000);
				}
				if (endParam) {
					data[endParam] = Math.round(+rangeEnd / 1000);
				}
				pushLoading();
				$.ajax($.extend({}, ajaxDefaults, source, {
					data: data,
					success: function(events) {
						events = events || [];
						var res = applyAll(success, this, arguments);
						if ($.isArray(res)) {
							events = res;
						}
						callback(events);
					},
					error: function() {
						applyAll(error, this, arguments);
						callback();
					},
					complete: function() {
						applyAll(complete, this, arguments);
						popLoading();
					}
				}));
			}else{
				callback();
			}
		}
	}
	
	
	
	/* Sources
	-----------------------------------------------------------------------------*/
	

	function addEventSource(source) {
		source = _addEventSource(source);
		if (source) {
			pendingSourceCnt++;
			fetchEventSource(source, currentFetchID); // will eventually call reportEvents
		}
	}
	
	
	function _addEventSource(source) {
		if ($.isFunction(source) || $.isArray(source)) {
			source = { events: source };
		}
		else if (typeof source == 'string') {
			source = { url: source };
		}
		if (typeof source == 'object') {
			normalizeSource(source);
			sources.push(source);
			return source;
		}
	}
	

	function removeEventSource(source) {
		sources = $.grep(sources, function(src) {
			return !isSourcesEqual(src, source);
		});
		// remove all client events from that source
		cache = $.grep(cache, function(e) {
			return !isSourcesEqual(e.source, source);
		});
		reportEvents(cache);
	}
	
	
	
	/* Manipulation
	-----------------------------------------------------------------------------*/
	
	
	function updateEvent(event) { // update an existing event
		var i, len = cache.length, e,
			defaultEventEnd = getView().defaultEventEnd, // getView???
			startDelta = event.start - event._start,
			endDelta = event.end ?
				(event.end - (event._end || defaultEventEnd(event))) // event._end would be null if event.end
				: 0;                                                      // was null and event was just resized
		for (i=0; i<len; i++) {
			e = cache[i];
			if (e._id == event._id && e != event) {
				e.start = new Date(+e.start + startDelta);
				if (event.end) {
					if (e.end) {
						e.end = new Date(+e.end + endDelta);
					}else{
						e.end = new Date(+defaultEventEnd(e) + endDelta);
					}
				}else{
					e.end = null;
				}
				e.title = event.title;
				e.url = event.url;
				e.allDay = event.allDay;
				e.className = event.className;
				e.editable = event.editable;
				e.color = event.color;
				e.backgroudColor = event.backgroudColor;
				e.borderColor = event.borderColor;
				e.textColor = event.textColor;
				normalizeEvent(e);
			}
		}
		normalizeEvent(event);
		reportEvents(cache);
	}
	
	
	function renderEvent(event, stick) {
		normalizeEvent(event);
		if (!event.source) {
			if (stick) {
				stickySource.events.push(event);
				event.source = stickySource;
			}
			cache.push(event);
		}
		reportEvents(cache);
	}
	
	
	function removeEvents(filter) {
		if (!filter) { // remove all
			cache = [];
			// clear all array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = [];
				}
			}
		}else{
			if (!$.isFunction(filter)) { // an event ID
				var id = filter + '';
				filter = function(e) {
					return e._id == id;
				};
			}
			cache = $.grep(cache, filter, true);
			// remove events from array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = $.grep(sources[i].events, filter, true);
				}
			}
		}
		reportEvents(cache);
	}
	
	
	function clientEvents(filter) {
		if ($.isFunction(filter)) {
			return $.grep(cache, filter);
		}
		else if (filter) { // an event ID
			filter += '';
			return $.grep(cache, function(e) {
				return e._id == filter;
			});
		}
		return cache; // else, return all
	}
	
	
	
	/* Loading State
	-----------------------------------------------------------------------------*/
	
	
	function pushLoading() {
		if (!loadingLevel++) {
			trigger('loading', null, true);
		}
	}
	
	
	function popLoading() {
		if (!--loadingLevel) {
			trigger('loading', null, false);
		}
	}
	
	
	
	/* Event Normalization
	-----------------------------------------------------------------------------*/
	
	
	function normalizeEvent(event) {
		var source = event.source || {};
		var ignoreTimezone = firstDefined(source.ignoreTimezone, options.ignoreTimezone);
		event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
		if (event.date) {
			if (!event.start) {
				event.start = event.date;
			}
			delete event.date;
		}
		event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));
		event.end = parseDate(event.end, ignoreTimezone);
		if (event.end && event.end <= event.start) {
			event.end = null;
		}
		event._end = event.end ? cloneDate(event.end) : null;
		if (event.allDay === undefined) {
			event.allDay = firstDefined(source.allDayDefault, options.allDayDefault);
		}
		if (event.className) {
			if (typeof event.className == 'string') {
				event.className = event.className.split(/\s+/);
			}
		}else{
			event.className = [];
		}
		// TODO: if there is no start date, return false to indicate an invalid event
	}
	
	
	
	/* Utils
	------------------------------------------------------------------------------*/
	
	
	function normalizeSource(source) {
		if (source.className) {
			// TODO: repeat code, same code for event classNames
			if (typeof source.className == 'string') {
				source.className = source.className.split(/\s+/);
			}
		}else{
			source.className = [];
		}
		var normalizers = fc.sourceNormalizers;
		for (var i=0; i<normalizers.length; i++) {
			normalizers[i](source);
		}
	}
	
	
	function isSourcesEqual(source1, source2) {
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
	}
	
	
	function getSourcePrimitive(source) {
		return ((typeof source == 'object') ? (source.events || source.url) : '') || source;
	}


}


fc.addDays = addDays;
fc.cloneDate = cloneDate;
fc.parseDate = parseDate;
fc.parseISO8601 = parseISO8601;
fc.parseTime = parseTime;
fc.formatDate = formatDate;
fc.formatDates = formatDates;



/* Date Math
-----------------------------------------------------------------------------*/

var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
	DAY_MS = 86400000,
	HOUR_MS = 3600000,
	MINUTE_MS = 60000;
	

function addYears(d, n, keepTime) {
	d.setFullYear(d.getFullYear() + n);
	if (!keepTime) {
		clearTime(d);
	}
	return d;
}


function addMonths(d, n, keepTime) { // prevents day overflow/underflow
	if (+d) { // prevent infinite looping on invalid dates
		var m = d.getMonth() + n,
			check = cloneDate(d);
		check.setDate(1);
		check.setMonth(m);
		d.setMonth(m);
		if (!keepTime) {
			clearTime(d);
		}
		while (d.getMonth() != check.getMonth()) {
			d.setDate(d.getDate() + (d < check ? 1 : -1));
		}
	}
	return d;
}


function addDays(d, n, keepTime) { // deals with daylight savings
	if (+d) {
		var dd = d.getDate() + n,
			check = cloneDate(d);
		check.setHours(9); // set to middle of day
		check.setDate(dd);
		d.setDate(dd);
		if (!keepTime) {
			clearTime(d);
		}
		fixDate(d, check);
	}
	return d;
}


function fixDate(d, check) { // force d to be on check's YMD, for daylight savings purposes
	if (+d) { // prevent infinite looping on invalid dates
		while (d.getDate() != check.getDate()) {
			d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS);
		}
	}
}


function addMinutes(d, n) {
	d.setMinutes(d.getMinutes() + n);
	return d;
}


function clearTime(d) {
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0); 
	d.setMilliseconds(0);
	return d;
}


function cloneDate(d, dontKeepTime) {
	if (dontKeepTime) {
		return clearTime(new Date(+d));
	}
	return new Date(+d);
}


function zeroDate() { // returns a Date with time 00:00:00 and dateOfMonth=1
	var i=0, d;
	do {
		d = new Date(1970, i++, 1);
	} while (d.getHours()); // != 0
	return d;
}


function skipWeekend(date, inc, excl) {
	inc = inc || 1;
	while (!date.getDay() || (excl && date.getDay()==1 || !excl && date.getDay()==6)) {
		addDays(date, inc);
	}
	return date;
}


function dayDiff(d1, d2) { // d1 - d2
	return Math.round((cloneDate(d1, true) - cloneDate(d2, true)) / DAY_MS);
}


function setYMD(date, y, m, d) {
	if (y !== undefined && y != date.getFullYear()) {
		date.setDate(1);
		date.setMonth(0);
		date.setFullYear(y);
	}
	if (m !== undefined && m != date.getMonth()) {
		date.setDate(1);
		date.setMonth(m);
	}
	if (d !== undefined) {
		date.setDate(d);
	}
}



/* Date Parsing
-----------------------------------------------------------------------------*/


function parseDate(s, ignoreTimezone) { // ignoreTimezone defaults to true
	if (typeof s == 'object') { // already a Date object
		return s;
	}
	if (typeof s == 'number') { // a UNIX timestamp
		return new Date(s * 1000);
	}
	if (typeof s == 'string') {
		if (s.match(/^\d+(\.\d+)?$/)) { // a UNIX timestamp
			return new Date(parseFloat(s) * 1000);
		}
		if (ignoreTimezone === undefined) {
			ignoreTimezone = true;
		}
		return parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
	}
	// TODO: never return invalid dates (like from new Date(<string>)), return null instead
	return null;
}


function parseISO8601(s, ignoreTimezone) { // ignoreTimezone defaults to false
	// derived from http://delete.me.uk/2005/03/iso8601.html
	// TODO: for a know glitch/feature, read tests/issue_206_parseDate_dst.html
	var m = s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
	if (!m) {
		return null;
	}
	var date = new Date(m[1], 0, 1);
	if (ignoreTimezone || !m[14]) {
		var check = new Date(m[1], 0, 1, 9, 0);
		if (m[3]) {
			date.setMonth(m[3] - 1);
			check.setMonth(m[3] - 1);
		}
		if (m[5]) {
			date.setDate(m[5]);
			check.setDate(m[5]);
		}
		fixDate(date, check);
		if (m[7]) {
			date.setHours(m[7]);
		}
		if (m[8]) {
			date.setMinutes(m[8]);
		}
		if (m[10]) {
			date.setSeconds(m[10]);
		}
		if (m[12]) {
			date.setMilliseconds(Number("0." + m[12]) * 1000);
		}
		fixDate(date, check);
	}else{
		date.setUTCFullYear(
			m[1],
			m[3] ? m[3] - 1 : 0,
			m[5] || 1
		);
		date.setUTCHours(
			m[7] || 0,
			m[8] || 0,
			m[10] || 0,
			m[12] ? Number("0." + m[12]) * 1000 : 0
		);
		var offset = Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0);
		offset *= m[15] == '-' ? 1 : -1;
		date = new Date(+date + (offset * 60 * 1000));
	}
	return date;
}


function parseTime(s) { // returns minutes since start of day
	if (typeof s == 'number') { // an hour
		return s * 60;
	}
	if (typeof s == 'object') { // a Date object
		return s.getHours() * 60 + s.getMinutes();
	}
	var m = s.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
	if (m) {
		var h = parseInt(m[1], 10);
		if (m[3]) {
			h %= 12;
			if (m[3].toLowerCase().charAt(0) == 'p') {
				h += 12;
			}
		}
		return h * 60 + (m[2] ? parseInt(m[2], 10) : 0);
	}
}



/* Date Formatting
-----------------------------------------------------------------------------*/
// TODO: use same function formatDate(date, [date2], format, [options])


function formatDate(date, format, options) {
	return formatDates(date, null, format, options);
}


function formatDates(date1, date2, format, options) {
	options = options || defaults;
	var date = date1,
		otherDate = date2,
		i, len = format.length, c,
		i2, formatter,
		res = '';
	for (i=0; i<len; i++) {
		c = format.charAt(i);
		if (c == "'") {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == "'") {
					if (date) {
						if (i2 == i+1) {
							res += "'";
						}else{
							res += format.substring(i+1, i2);
						}
						i = i2;
					}
					break;
				}
			}
		}
		else if (c == '(') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ')') {
					var subres = formatDate(date, format.substring(i+1, i2), options);
					if (parseInt(subres.replace(/\D/, ''), 10)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '[') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ']') {
					var subformat = format.substring(i+1, i2);
					var subres = formatDate(date, subformat, options);
					if (subres != formatDate(otherDate, subformat, options)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '{') {
			date = date2;
			otherDate = date1;
		}
		else if (c == '}') {
			date = date1;
			otherDate = date2;
		}
		else {
			for (i2=len; i2>i; i2--) {
				if (formatter = dateFormatters[format.substring(i, i2)]) {
					if (date) {
						res += formatter(date, options);
					}
					i = i2 - 1;
					break;
				}
			}
			if (i2 == i) {
				if (date) {
					res += c;
				}
			}
		}
	}
	return res;
};


var dateFormatters = {
	s	: function(d)	{ return d.getSeconds() },
	ss	: function(d)	{ return zeroPad(d.getSeconds()) },
	m	: function(d)	{ return d.getMinutes() },
	mm	: function(d)	{ return zeroPad(d.getMinutes()) },
	h	: function(d)	{ return d.getHours() % 12 || 12 },
	hh	: function(d)	{ return zeroPad(d.getHours() % 12 || 12) },
	H	: function(d)	{ return d.getHours() },
	HH	: function(d)	{ return zeroPad(d.getHours()) },
	d	: function(d)	{ return d.getDate() },
	dd	: function(d)	{ return zeroPad(d.getDate()) },
	ddd	: function(d,o)	{ return o.dayNamesShort[d.getDay()] },
	dddd: function(d,o)	{ return o.dayNames[d.getDay()] },
	M	: function(d)	{ return d.getMonth() + 1 },
	MM	: function(d)	{ return zeroPad(d.getMonth() + 1) },
	MMM	: function(d,o)	{ return o.monthNamesShort[d.getMonth()] },
	MMMM: function(d,o)	{ return o.monthNames[d.getMonth()] },
	yy	: function(d)	{ return (d.getFullYear()+'').substring(2) },
	yyyy: function(d)	{ return d.getFullYear() },
	t	: function(d)	{ return d.getHours() < 12 ? 'a' : 'p' },
	tt	: function(d)	{ return d.getHours() < 12 ? 'am' : 'pm' },
	T	: function(d)	{ return d.getHours() < 12 ? 'A' : 'P' },
	TT	: function(d)	{ return d.getHours() < 12 ? 'AM' : 'PM' },
	u	: function(d)	{ return formatDate(d, "yyyy-MM-dd'T'HH:mm:ss'Z'") },
	S	: function(d)	{
		var date = d.getDate();
		if (date > 10 && date < 20) {
			return 'th';
		}
		return ['st', 'nd', 'rd'][date%10-1] || 'th';
	}
};



fc.applyAll = applyAll;


/* Event Date Math
-----------------------------------------------------------------------------*/


function exclEndDay(event) {
	if (event.end) {
		return _exclEndDay(event.end, event.allDay);
	}else{
		return addDays(cloneDate(event.start), 1);
	}
}


function _exclEndDay(end, allDay) {
	end = cloneDate(end);
	return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);
}


function segCmp(a, b) {
	return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start);
}


function segsCollide(seg1, seg2) {
	return seg1.end > seg2.start && seg1.start < seg2.end;
}



/* Event Sorting
-----------------------------------------------------------------------------*/


// event rendering utilities
function sliceSegs(events, visEventEnds, start, end) {
	var segs = [],
		i, len=events.length, event,
		eventStart, eventEnd,
		segStart, segEnd,
		isStart, isEnd;
	for (i=0; i<len; i++) {
		event = events[i];
		eventStart = event.start;
		eventEnd = visEventEnds[i];
		if (eventEnd > start && eventStart < end) {
			if (eventStart < start) {
				segStart = cloneDate(start);
				isStart = false;
			}else{
				segStart = eventStart;
				isStart = true;
			}
			if (eventEnd > end) {
				segEnd = cloneDate(end);
				isEnd = false;
			}else{
				segEnd = eventEnd;
				isEnd = true;
			}
			segs.push({
				event: event,
				start: segStart,
				end: segEnd,
				isStart: isStart,
				isEnd: isEnd,
				msLength: segEnd - segStart
			});
		}
	} 
	return segs.sort(segCmp);
}


// event rendering calculation utilities
function stackSegs(segs) {
	var levels = [],
		i, len = segs.length, seg,
		j, collide, k;
	for (i=0; i<len; i++) {
		seg = segs[i];
		j = 0; // the level index where seg should belong
		while (true) {
			collide = false;
			if (levels[j]) {
				for (k=0; k<levels[j].length; k++) {
					if (segsCollide(levels[j][k], seg)) {
						collide = true;
						break;
					}
				}
			}
			if (collide) {
				j++;
			}else{
				break;
			}
		}
		if (levels[j]) {
			levels[j].push(seg);
		}else{
			levels[j] = [seg];
		}
	}
	return levels;
}



/* Event Element Binding
-----------------------------------------------------------------------------*/


function lazySegBind(container, segs, bindHandlers) {
	container.unbind('mouseover').mouseover(function(ev) {
		var parent=ev.target, e,
			i, seg;
		while (parent != this) {
			e = parent;
			parent = parent.parentNode;
		}
		if ((i = e._fci) !== undefined) {
			e._fci = undefined;
			seg = segs[i];
			bindHandlers(seg.event, seg.element, seg);
			$(ev.target).trigger(ev);
		}
		ev.stopPropagation();
	});
}



/* Element Dimensions
-----------------------------------------------------------------------------*/


function setOuterWidth(element, width, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.width(Math.max(0, width - hsides(e, includeMargins)));
	}
}


function setOuterHeight(element, height, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.height(Math.max(0, height - vsides(e, includeMargins)));
	}
}


// TODO: curCSS has been deprecated (jQuery 1.4.3 - 10/16/2010)


function hsides(element, includeMargins) {
	return hpadding(element) + hborders(element) + (includeMargins ? hmargins(element) : 0);
}


function hpadding(element) {
	return (parseFloat($.curCSS(element[0], 'paddingLeft', true)) || 0) +
	       (parseFloat($.curCSS(element[0], 'paddingRight', true)) || 0);
}


function hmargins(element) {
	return (parseFloat($.curCSS(element[0], 'marginLeft', true)) || 0) +
	       (parseFloat($.curCSS(element[0], 'marginRight', true)) || 0);
}


function hborders(element) {
	return (parseFloat($.curCSS(element[0], 'borderLeftWidth', true)) || 0) +
	       (parseFloat($.curCSS(element[0], 'borderRightWidth', true)) || 0);
}


function vsides(element, includeMargins) {
	return vpadding(element) +  vborders(element) + (includeMargins ? vmargins(element) : 0);
}


function vpadding(element) {
	return (parseFloat($.curCSS(element[0], 'paddingTop', true)) || 0) +
	       (parseFloat($.curCSS(element[0], 'paddingBottom', true)) || 0);
}


function vmargins(element) {
	return (parseFloat($.curCSS(element[0], 'marginTop', true)) || 0) +
	       (parseFloat($.curCSS(element[0], 'marginBottom', true)) || 0);
}


function vborders(element) {
	return (parseFloat($.curCSS(element[0], 'borderTopWidth', true)) || 0) +
	       (parseFloat($.curCSS(element[0], 'borderBottomWidth', true)) || 0);
}


function setMinHeight(element, height) {
	height = (typeof height == 'number' ? height + 'px' : height);
	element.each(function(i, _element) {
		_element.style.cssText += ';min-height:' + height + ';_height:' + height;
		// why can't we just use .css() ? i forget
	});
}



/* Misc Utils
-----------------------------------------------------------------------------*/


//TODO: arraySlice
//TODO: isFunction, grep ?


function noop() { }


function cmp(a, b) {
	return a - b;
}


function arrayMax(a) {
	return Math.max.apply(Math, a);
}


function zeroPad(n) {
	return (n < 10 ? '0' : '') + n;
}


function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
	if (obj[name] !== undefined) {
		return obj[name];
	}
	var parts = name.split(/(?=[A-Z])/),
		i=parts.length-1, res;
	for (; i>=0; i--) {
		res = obj[parts[i].toLowerCase()];
		if (res !== undefined) {
			return res;
		}
	}
	return obj[''];
}


function htmlEscape(s) {
	return s.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function cssKey(_element) {
	return _element.id + '/' + _element.className + '/' + _element.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, '');
}


function disableTextSelection(element) {
	element
		.attr('unselectable', 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
}


/*
function enableTextSelection(element) {
	element
		.attr('unselectable', 'off')
		.css('MozUserSelect', '')
		.unbind('selectstart.ui');
}
*/


function markFirstLast(e) {
	e.children()
		.removeClass('fc-first fc-last')
		.filter(':first-child')
			.addClass('fc-first')
		.end()
		.filter(':last-child')
			.addClass('fc-last');
}


function setDayID(cell, date) {
	cell.each(function(i, _cell) {
		_cell.className = _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[date.getDay()]);
		// TODO: make a way that doesn't rely on order of classes
	});
}


function getSkinCss(event, opt) {
	var source = event.source || {};
	var eventColor = event.color;
	var sourceColor = source.color;
	var optionColor = opt('eventColor');
	var backgroundColor =
		event.backgroundColor ||
		eventColor ||
		source.backgroundColor ||
		sourceColor ||
		opt('eventBackgroundColor') ||
		optionColor;
	var borderColor =
		event.borderColor ||
		eventColor ||
		source.borderColor ||
		sourceColor ||
		opt('eventBorderColor') ||
		optionColor;
	var textColor =
		event.textColor ||
		source.textColor ||
		opt('eventTextColor');
	var statements = [];
	if (backgroundColor) {
		statements.push('background-color:' + backgroundColor);
	}
	if (borderColor) {
		statements.push('border-color:' + borderColor);
	}
	if (textColor) {
		statements.push('color:' + textColor);
	}
	return statements.join(';');
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}



fcViews.month = MonthView;

function MonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'month');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addMonths(date, delta);
			date.setDate(1);
		}
		var start = cloneDate(date, true);
		start.setDate(1);
		var end = addMonths(cloneDate(start), 1);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var firstDay = opt('firstDay');
		var nwe = opt('weekends') ? 0 : 1;
		if (nwe) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		addDays(visStart, -((visStart.getDay() - Math.max(firstDay, nwe) + 7) % 7));
		addDays(visEnd, (7 - visEnd.getDay() + Math.max(firstDay, nwe)) % 7);
		var rowCnt = Math.round((visEnd - visStart) / (DAY_MS * 7));
		if (opt('weekMode') == 'fixed') {
			addDays(visEnd, (6 - rowCnt) * 7);
			rowCnt = 6;
		}
		t.title = formatDate(start, opt('titleFormat'));
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(6, rowCnt, nwe ? 5 : 7, true);
	}
	
	
}

fcViews.basicWeek = BasicWeekView;

function BasicWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicWeek');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDates = calendar.formatDates;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta * 7);
		}
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		if (!weekends) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(1, 1, weekends ? 7 : 5, false);
	}
	
	
}

fcViews.basicDay = BasicDayView;

//TODO: when calendar's date starts out on a weekend, shouldn't happen


function BasicDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicDay');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta);
			if (!opt('weekends')) {
				skipWeekend(date, delta < 0 ? -1 : 1);
			}
		}
		t.title = formatDate(date, opt('titleFormat'));
		t.start = t.visStart = cloneDate(date, true);
		t.end = t.visEnd = addDays(cloneDate(t.start), 1);
		renderBasic(1, 1, 1, false);
	}
	
	
}

setDefaults({
	weekMode: 'fixed'
});


function BasicView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderBasic = renderBasic;
	t.setHeight = setHeight;
	t.setWidth = setWidth;
	t.renderDayOverlay = renderDayOverlay;
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // for selection (kinda hacky)
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	t.defaultEventEnd = defaultEventEnd;
	t.getHoverListener = function() { return hoverListener };
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.dayOfWeekCol = dayOfWeekCol;
	t.dateCell = dateCell;
	t.cellDate = cellDate;
	t.cellIsAllDay = function() { return true };
	t.allDayRow = allDayRow;
	t.allDayBounds = allDayBounds;
	t.getRowCnt = function() { return rowCnt };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	BasicEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var clearEvents = t.clearEvents;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var daySelectionMousedown = t.daySelectionMousedown;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var head;
	var headCells;
	var body;
	var bodyRows;
	var bodyCells;
	var bodyFirstCells;
	var bodyCellTopInners;
	var daySegmentContainer;
	
	var viewWidth;
	var viewHeight;
	var colWidth;
	
	var rowCnt, colCnt;
	var coordinateGrid;
	var hoverListener;
	var colContentPositions;
	
	var rtl, dis, dit;
	var firstDay;
	var nwe;
	var tm;
	var colFormat;
	
	
	
	/* Rendering
	------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-grid'));
	
	
	function renderBasic(maxr, r, c, showNumbers) {
		rowCnt = r;
		colCnt = c;
		updateOptions();
		var firstTime = !body;
		if (firstTime) {
			buildSkeleton(maxr, showNumbers);
		}else{
			clearEvents();
		}
		updateCells(firstTime);
	}
	
	
	
	function updateOptions() {
		rtl = opt('isRTL');
		if (rtl) {
			dis = -1;
			dit = colCnt - 1;
		}else{
			dis = 1;
			dit = 0;
		}
		firstDay = opt('firstDay');
		nwe = opt('weekends') ? 0 : 1;
		tm = opt('theme') ? 'ui' : 'fc';
		colFormat = opt('columnFormat');
	}
	
	
	
	function buildSkeleton(maxRowCnt, showNumbers) {
		var s;
		var headerClass = tm + "-widget-header";
		var contentClass = tm + "-widget-content";
		var i, j;
		var table;
		
		s =
			"<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +
			"<thead>" +
			"<tr>";
		for (i=0; i<colCnt; i++) {
			s +=
				"<th class='fc- " + headerClass + "'/>"; // need fc- for setDayID
		}
		s +=
			"</tr>" +
			"</thead>" +
			"<tbody>";
		for (i=0; i<maxRowCnt; i++) {
			s +=
				"<tr class='fc-week" + i + "'>";
			for (j=0; j<colCnt; j++) {
				s +=
					"<td class='fc- " + contentClass + " fc-day" + (i*colCnt+j) + "'>" + // need fc- for setDayID
					"<div>" +
					(showNumbers ?
						"<div class='fc-day-number'/>" :
						''
						) +
					"<div class='fc-day-content'>" +
					"<div style='position:relative'>&nbsp;</div>" +
					"</div>" +
					"</div>" +
					"</td>";
			}
			s +=
				"</tr>";
		}
		s +=
			"</tbody>" +
			"</table>";
		table = $(s).appendTo(element);
		
		head = table.find('thead');
		headCells = head.find('th');
		body = table.find('tbody');
		bodyRows = body.find('tr');
		bodyCells = body.find('td');
		bodyFirstCells = bodyCells.filter(':first-child');
		bodyCellTopInners = bodyRows.eq(0).find('div.fc-day-content div');
		
		markFirstLast(head.add(head.find('tr'))); // marks first+last tr/th's
		markFirstLast(bodyRows); // marks first+last td's
		bodyRows.eq(0).addClass('fc-first'); // fc-last is done in updateCells
		
		dayBind(bodyCells);
		
		daySegmentContainer =
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(element);
	}
	
	
	
	function updateCells(firstTime) {
		var dowDirty = firstTime || rowCnt == 1; // could the cells' day-of-weeks need updating?
		var month = t.start.getMonth();
		var today = clearTime(new Date());
		var cell;
		var date;
		var row;
	
		if (dowDirty) {
			headCells.each(function(i, _cell) {
				cell = $(_cell);
				date = indexDate(i);
				cell.html(formatDate(date, colFormat));
				setDayID(cell, date);
			});
		}
		
		bodyCells.each(function(i, _cell) {
			cell = $(_cell);
			date = indexDate(i);
			if (date.getMonth() == month) {
				cell.removeClass('fc-other-month');
			}else{
				cell.addClass('fc-other-month');
			}
			if (+date == +today) {
				cell.addClass(tm + '-state-highlight fc-today');
			}else{
				cell.removeClass(tm + '-state-highlight fc-today');
			}
			cell.find('div.fc-day-number').text(date.getDate());
			if (dowDirty) {
				setDayID(cell, date);
			}
		});
		
		bodyRows.each(function(i, _row) {
			row = $(_row);
			if (i < rowCnt) {
				row.show();
				if (i == rowCnt-1) {
					row.addClass('fc-last');
				}else{
					row.removeClass('fc-last');
				}
			}else{
				row.hide();
			}
		});
	}
	
	
	
	function setHeight(height) {
		viewHeight = height;
		
		var bodyHeight = viewHeight - head.height();
		var rowHeight;
		var rowHeightLast;
		var cell;
			
		if (opt('weekMode') == 'variable') {
			rowHeight = rowHeightLast = Math.floor(bodyHeight / (rowCnt==1 ? 2 : 6));
		}else{
			rowHeight = Math.floor(bodyHeight / rowCnt);
			rowHeightLast = bodyHeight - rowHeight * (rowCnt-1);
		}
		
		bodyFirstCells.each(function(i, _cell) {
			if (i < rowCnt) {
				cell = $(_cell);
				setMinHeight(
					cell.find('> div'),
					(i==rowCnt-1 ? rowHeightLast : rowHeight) - vsides(cell)
				);
			}
		});
		
	}
	
	
	function setWidth(width) {
		viewWidth = width;
		colContentPositions.clear();
		colWidth = Math.floor(viewWidth / colCnt);
		setOuterWidth(headCells.slice(0, -1), colWidth);
	}
	
	
	
	/* Day clicking and binding
	-----------------------------------------------------------*/
	
	
	function dayBind(days) {
		days.click(dayClick)
			.mousedown(daySelectionMousedown);
	}
	
	
	function dayClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var index = parseInt(this.className.match(/fc\-day(\d+)/)[1]); // TODO: maybe use .data
			var date = indexDate(index);
			trigger('dayClick', this, date, true, ev);
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	------------------------------------------------------*/
	
	
	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive
		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}
		var rowStart = cloneDate(t.visStart);
		var rowEnd = addDays(cloneDate(rowStart), colCnt);
		for (var i=0; i<rowCnt; i++) {
			var stretchStart = new Date(Math.max(rowStart, overlayStart));
			var stretchEnd = new Date(Math.min(rowEnd, overlayEnd));
			if (stretchStart < stretchEnd) {
				var colStart, colEnd;
				if (rtl) {
					colStart = dayDiff(stretchEnd, rowStart)*dis+dit+1;
					colEnd = dayDiff(stretchStart, rowStart)*dis+dit+1;
				}else{
					colStart = dayDiff(stretchStart, rowStart);
					colEnd = dayDiff(stretchEnd, rowStart);
				}
				dayBind(
					renderCellOverlay(i, colStart, i, colEnd-1)
				);
			}
			addDays(rowStart, 7);
			addDays(rowEnd, 7);
		}
	}
	
	
	function renderCellOverlay(row0, col0, row1, col1) { // row1,col1 is inclusive
		var rect = coordinateGrid.rect(row0, col0, row1, col1, element);
		return renderOverlay(rect, element);
	}
	
	
	
	/* Selection
	-----------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		return cloneDate(startDate);
	}
	
	
	function renderSelection(startDate, endDate, allDay) {
		renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true); // rebuild every time???
	}
	
	
	function clearSelection() {
		clearOverlays();
	}
	
	
	function reportDayClick(date, allDay, ev) {
		var cell = dateCell(date);
		var _element = bodyCells[cell.row*colCnt + cell.col];
		trigger('dayClick', _element, date, allDay, ev);
	}
	
	
	
	/* External Dragging
	-----------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			var d = cellDate(cell);
			trigger('drop', _dragElement, d, true, ev, ui);
		}
	}
	
	
	
	/* Utilities
	--------------------------------------------------------*/
	
	
	function defaultEventEnd(event) {
		return cloneDate(event.start);
	}
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		headCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		bodyRows.each(function(i, _e) {
			if (i < rowCnt) {
				e = $(_e);
				n = e.offset().top;
				if (i) {
					p[1] = n;
				}
				p = [n];
				rows[i] = p;
			}
		});
		p[1] = n + e.outerHeight();
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	
	colContentPositions = new HorizontalPositionCache(function(col) {
		return bodyCellTopInners.eq(col);
	});
	
	
	function colContentLeft(col) {
		return colContentPositions.left(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}
	
	
	
	
	function dateCell(date) {
		return {
			row: Math.floor(dayDiff(date, t.visStart) / 7),
			col: dayOfWeekCol(date.getDay())
		};
	}
	
	
	function cellDate(cell) {
		return _cellDate(cell.row, cell.col);
	}
	
	
	function _cellDate(row, col) {
		return addDays(cloneDate(t.visStart), row*7 + col*dis+dit);
		// what about weekends in middle of week?
	}
	
	
	function indexDate(index) {
		return _cellDate(Math.floor(index/colCnt), index%colCnt);
	}
	
	
	function dayOfWeekCol(dayOfWeek) {
		return ((dayOfWeek - Math.max(firstDay, nwe) + colCnt) % colCnt) * dis + dit;
	}
	
	
	
	
	function allDayRow(i) {
		return bodyRows.eq(i);
	}
	
	
	function allDayBounds(i) {
		return {
			left: 0,
			right: viewWidth
		};
	}
	
	
}

function BasicEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.compileDaySegs = compileSegs; // for DayEventRenderer
	t.clearEvents = clearEvents;
	t.bindDaySeg = bindDaySeg;
	
	
	// imports
	DayEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	//var setOverflowHidden = t.setOverflowHidden;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var reportEvents = t.reportEvents;
	var reportEventClear = t.reportEventClear;
	var eventElementHandlers = t.eventElementHandlers;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var getHoverListener = t.getHoverListener;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var getRowCnt = t.getRowCnt;
	var getColCnt = t.getColCnt;
	var renderDaySegs = t.renderDaySegs;
	var resizableDayEvent = t.resizableDayEvent;
	
	
	
	/* Rendering
	--------------------------------------------------------------------*/
	
	
	function renderEvents(events, modifiedEventId) {
		reportEvents(events);
		renderDaySegs(compileSegs(events), modifiedEventId);
	}
	
	
	function clearEvents() {
		reportEventClear();
		getDaySegmentContainer().empty();
	}
	
	
	function compileSegs(events) {
		var rowCnt = getRowCnt(),
			colCnt = getColCnt(),
			d1 = cloneDate(t.visStart),
			d2 = addDays(cloneDate(d1), colCnt),
			visEventsEnds = $.map(events, exclEndDay),
			i, row,
			j, level,
			k, seg,
			segs=[];
		for (i=0; i<rowCnt; i++) {
			row = stackSegs(sliceSegs(events, visEventsEnds, d1, d2));
			for (j=0; j<row.length; j++) {
				level = row[j];
				for (k=0; k<level.length; k++) {
					seg = level[k];
					seg.row = i;
					seg.level = j; // not needed anymore
					segs.push(seg);
				}
			}
			addDays(d1, 7);
			addDays(d2, 7);
		}
		return segs;
	}
	
	
	function bindDaySeg(event, eventElement, seg) {
		if (isEventDraggable(event)) {
			draggableDayEvent(event, eventElement);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableDayEvent(event, eventElement, seg);
		}
		eventElementHandlers(event, eventElement);
			// needs to be after, because resizableDayEvent might stopImmediatePropagation on click
	}
	
	
	
	/* Dragging
	----------------------------------------------------------------------------*/
	
	
	function draggableDayEvent(event, eventElement) {
		var hoverListener = getHoverListener();
		var dayDelta;
		eventElement.draggable({
			zIndex: 9,
			delay: 50,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta);
					clearOverlays();
					if (cell) {
						//setOverflowHidden(true);
						dayDelta = rowDelta*7 + colDelta * (opt('isRTL') ? -1 : 1);
						renderDayOverlay(
							addDays(cloneDate(event.start), dayDelta),
							addDays(exclEndDay(event), dayDelta)
						);
					}else{
						//setOverflowHidden(false);
						dayDelta = 0;
					}
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (dayDelta) {
					eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui);
				}else{
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}
				//setOverflowHidden(false);
			}
		});
	}


}

fcViews.agendaWeek = AgendaWeekView;

function AgendaWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaWeek');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var formatDates = calendar.formatDates;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta * 7);
		}
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		if (!weekends) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderAgenda(weekends ? 7 : 5);
	}
	

}

fcViews.agendaDay = AgendaDayView;

function AgendaDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaDay');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta);
			if (!opt('weekends')) {
				skipWeekend(date, delta < 0 ? -1 : 1);
			}
		}
		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);
		t.title = formatDate(date, opt('titleFormat'));
		t.start = t.visStart = start;
		t.end = t.visEnd = end;
		renderAgenda(1);
	}
	

}

setDefaults({
	allDaySlot: true,
	allDayText: 'all-day',
	firstHour: 6,
	slotMinutes: 30,
	defaultEventMinutes: 120,
	axisFormat: 'h(:mm)tt',
	timeFormat: {
		agenda: 'h:mm{ - h:mm}'
	},
	dragOpacity: {
		agenda: .5
	},
	minTime: 0,
	maxTime: 24
});


// TODO: make it work in quirks mode (event corners, all-day height)
// TODO: test liquid width, especially in IE6


function AgendaView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderAgenda = renderAgenda;
	t.setWidth = setWidth;
	t.setHeight = setHeight;
	t.beforeHide = beforeHide;
	t.afterShow = afterShow;
	t.defaultEventEnd = defaultEventEnd;
	t.timePosition = timePosition;
	t.dayOfWeekCol = dayOfWeekCol;
	t.dateCell = dateCell;
	t.cellDate = cellDate;
	t.cellIsAllDay = cellIsAllDay;
	t.allDayRow = getAllDayRow;
	t.allDayBounds = allDayBounds;
	t.getHoverListener = function() { return hoverListener };
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	t.getSlotSegmentContainer = function() { return slotSegmentContainer };
	t.getMinMinute = function() { return minMinute };
	t.getMaxMinute = function() { return maxMinute };
	t.getBodyContent = function() { return slotContent }; // !!??
	t.getRowCnt = function() { return 1 };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getSlotHeight = function() { return slotHeight };
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderDayOverlay = renderDayOverlay;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // selection mousedown hack
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	AgendaEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var clearEvents = t.clearEvents;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var reportSelection = t.reportSelection;
	var unselect = t.unselect;
	var daySelectionMousedown = t.daySelectionMousedown;
	var slotSegHtml = t.slotSegHtml;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var dayTable;
	var dayHead;
	var dayHeadCells;
	var dayBody;
	var dayBodyCells;
	var dayBodyCellInners;
	var dayBodyFirstCell;
	var dayBodyFirstCellStretcher;
	var slotLayer;
	var daySegmentContainer;
	var allDayTable;
	var allDayRow;
	var slotScroller;
	var slotContent;
	var slotSegmentContainer;
	var slotTable;
	var slotTableFirstInner;
	var axisFirstCells;
	var gutterCells;
	var selectionHelper;
	
	var viewWidth;
	var viewHeight;
	var axisWidth;
	var colWidth;
	var gutterWidth;
	var slotHeight; // TODO: what if slotHeight changes? (see issue 650)
	var savedScrollTop;
	
	var colCnt;
	var slotCnt;
	var coordinateGrid;
	var hoverListener;
	var colContentPositions;
	var slotTopCache = {};
	
	var tm;
	var firstDay;
	var nwe;            // no weekends (int)
	var rtl, dis, dit;  // day index sign / translate
	var minMinute, maxMinute;
	var colFormat;
	

	
	/* Rendering
	-----------------------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-agenda'));
	
	
	function renderAgenda(c) {
		colCnt = c;
		updateOptions();
		if (!dayTable) {
			buildSkeleton();
		}else{
			clearEvents();
		}
		updateCells();
	}
	
	
	
	function updateOptions() {
		tm = opt('theme') ? 'ui' : 'fc';
		nwe = opt('weekends') ? 0 : 1;
		firstDay = opt('firstDay');
		if (rtl = opt('isRTL')) {
			dis = -1;
			dit = colCnt - 1;
		}else{
			dis = 1;
			dit = 0;
		}
		minMinute = parseTime(opt('minTime'));
		maxMinute = parseTime(opt('maxTime'));
		colFormat = opt('columnFormat');
	}
	
	
	
	function buildSkeleton() {
		var headerClass = tm + "-widget-header";
		var contentClass = tm + "-widget-content";
		var s;
		var i;
		var d;
		var maxd;
		var minutes;
		var slotNormal = opt('slotMinutes') % 15 == 0;
		
		s =
			"<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +
			"<thead>" +
			"<tr>" +
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
		for (i=0; i<colCnt; i++) {
			s +=
				"<th class='fc- fc-col" + i + ' ' + headerClass + "'/>"; // fc- needed for setDayID
		}
		s +=
			"<th class='fc-agenda-gutter " + headerClass + "'>&nbsp;</th>" +
			"</tr>" +
			"</thead>" +
			"<tbody>" +
			"<tr>" +
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
		for (i=0; i<colCnt; i++) {
			s +=
				"<td class='fc- fc-col" + i + ' ' + contentClass + "'>" + // fc- needed for setDayID
				"<div>" +
				"<div class='fc-day-content'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</div>" +
				"</div>" +
				"</td>";
		}
		s +=
			"<td class='fc-agenda-gutter " + contentClass + "'>&nbsp;</td>" +
			"</tr>" +
			"</tbody>" +
			"</table>";
		dayTable = $(s).appendTo(element);
		dayHead = dayTable.find('thead');
		dayHeadCells = dayHead.find('th').slice(1, -1);
		dayBody = dayTable.find('tbody');
		dayBodyCells = dayBody.find('td').slice(0, -1);
		dayBodyCellInners = dayBodyCells.find('div.fc-day-content div');
		dayBodyFirstCell = dayBodyCells.eq(0);
		dayBodyFirstCellStretcher = dayBodyFirstCell.find('> div');
		
		markFirstLast(dayHead.add(dayHead.find('tr')));
		markFirstLast(dayBody.add(dayBody.find('tr')));
		
		axisFirstCells = dayHead.find('th:first');
		gutterCells = dayTable.find('.fc-agenda-gutter');
		
		slotLayer =
			$("<div style='position:absolute;z-index:2;left:0;width:100%'/>")
				.appendTo(element);
				
		if (opt('allDaySlot')) {
		
			daySegmentContainer =
				$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
					.appendTo(slotLayer);
		
			s =
				"<table style='width:100%' class='fc-agenda-allday' cellspacing='0'>" +
				"<tr>" +
				"<th class='" + headerClass + " fc-agenda-axis'>" + opt('allDayText') + "</th>" +
				"<td>" +
				"<div class='fc-day-content'><div style='position:relative'/></div>" +
				"</td>" +
				"<th class='" + headerClass + " fc-agenda-gutter'>&nbsp;</th>" +
				"</tr>" +
				"</table>";
			allDayTable = $(s).appendTo(slotLayer);
			allDayRow = allDayTable.find('tr');
			
			dayBind(allDayRow.find('td'));
			
			axisFirstCells = axisFirstCells.add(allDayTable.find('th:first'));
			gutterCells = gutterCells.add(allDayTable.find('th.fc-agenda-gutter'));
			
			slotLayer.append(
				"<div class='fc-agenda-divider " + headerClass + "'>" +
				"<div class='fc-agenda-divider-inner'/>" +
				"</div>"
			);
			
		}else{
		
			daySegmentContainer = $([]); // in jQuery 1.4, we can just do $()
		
		}
		
		slotScroller =
			$("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>")
				.appendTo(slotLayer);
				
		slotContent =
			$("<div style='position:relative;width:100%;overflow:hidden'/>")
				.appendTo(slotScroller);
				
		slotSegmentContainer =
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(slotContent);
		
		s =
			"<table class='fc-agenda-slots' style='width:100%' cellspacing='0'>" +
			"<tbody>";
		d = zeroDate();
		maxd = addMinutes(cloneDate(d), maxMinute);
		addMinutes(d, minMinute);
		slotCnt = 0;
		for (i=0; d < maxd; i++) {
			minutes = d.getMinutes();
			s +=
				"<tr class='fc-slot" + i + ' ' + (!minutes ? '' : 'fc-minor') + "'>" +
				"<th class='fc-agenda-axis " + headerClass + "'>" +
				((!slotNormal || !minutes) ? formatDate(d, opt('axisFormat')) : '&nbsp;') +
				"</th>" +
				"<td class='" + contentClass + "'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</td>" +
				"</tr>";
			addMinutes(d, opt('slotMinutes'));
			slotCnt++;
		}
		s +=
			"</tbody>" +
			"</table>";
		slotTable = $(s).appendTo(slotContent);
		slotTableFirstInner = slotTable.find('div:first');
		
		slotBind(slotTable.find('td'));
		
		axisFirstCells = axisFirstCells.add(slotTable.find('th:first'));
	}
	
	
	
	function updateCells() {
		var i;
		var headCell;
		var bodyCell;
		var date;
		var today = clearTime(new Date());
		for (i=0; i<colCnt; i++) {
			date = colDate(i);
			headCell = dayHeadCells.eq(i);
			headCell.html(formatDate(date, colFormat));
			bodyCell = dayBodyCells.eq(i);
			if (+date == +today) {
				bodyCell.addClass(tm + '-state-highlight fc-today');
			}else{
				bodyCell.removeClass(tm + '-state-highlight fc-today');
			}
			setDayID(headCell.add(bodyCell), date);
		}
	}
	
	
	
	function setHeight(height, dateChanged) {
		if (height === undefined) {
			height = viewHeight;
		}
		viewHeight = height;
		slotTopCache = {};
	
		var headHeight = dayBody.position().top;
		var allDayHeight = slotScroller.position().top; // including divider
		var bodyHeight = Math.min( // total body height, including borders
			height - headHeight,   // when scrollbars
			slotTable.height() + allDayHeight + 1 // when no scrollbars. +1 for bottom border
		);
		
		dayBodyFirstCellStretcher
			.height(bodyHeight - vsides(dayBodyFirstCell));
		
		slotLayer.css('top', headHeight);
		
		slotScroller.height(bodyHeight - allDayHeight - 1);
		
		slotHeight = slotTableFirstInner.height() + 1; // +1 for border
		
		if (dateChanged) {
			resetScroll();
		}
	}
	
	
	
	function setWidth(width) {
		viewWidth = width;
		colContentPositions.clear();
		
		axisWidth = 0;
		setOuterWidth(
			axisFirstCells
				.width('')
				.each(function(i, _cell) {
					axisWidth = Math.max(axisWidth, $(_cell).outerWidth());
				}),
			axisWidth
		);
		
		var slotTableWidth = slotScroller[0].clientWidth; // needs to be done after axisWidth (for IE7)
		//slotTable.width(slotTableWidth);
		
		gutterWidth = slotScroller.width() - slotTableWidth;
		if (gutterWidth) {
			setOuterWidth(gutterCells, gutterWidth);
			gutterCells
				.show()
				.prev()
				.removeClass('fc-last');
		}else{
			gutterCells
				.hide()
				.prev()
				.addClass('fc-last');
		}
		
		colWidth = Math.floor((slotTableWidth - axisWidth) / colCnt);
		setOuterWidth(dayHeadCells.slice(0, -1), colWidth);
	}
	


	function resetScroll() {
		var d0 = zeroDate();
		var scrollDate = cloneDate(d0);
		scrollDate.setHours(opt('firstHour'));
		var top = timePosition(d0, scrollDate) + 1; // +1 for the border
		function scroll() {
			slotScroller.scrollTop(top);
		}
		scroll();
		setTimeout(scroll, 0); // overrides any previous scroll state made by the browser
	}
	
	
	function beforeHide() {
		savedScrollTop = slotScroller.scrollTop();
	}
	
	
	function afterShow() {
		slotScroller.scrollTop(savedScrollTop);
	}
	
	
	
	/* Slot/Day clicking and binding
	-----------------------------------------------------------------------*/
	

	function dayBind(cells) {
		cells.click(slotClick)
			.mousedown(daySelectionMousedown);
	}


	function slotBind(cells) {
		cells.click(slotClick)
			.mousedown(slotSelectionMousedown);
	}
	
	
	function slotClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var col = Math.min(colCnt-1, Math.floor((ev.pageX - dayTable.offset().left - axisWidth) / colWidth));
			var date = colDate(col);
			var rowMatch = this.parentNode.className.match(/fc-slot(\d+)/); // TODO: maybe use data
			if (rowMatch) {
				var mins = parseInt(rowMatch[1]) * opt('slotMinutes');
				var hours = Math.floor(mins/60);
				date.setHours(hours);
				date.setMinutes(mins%60 + minMinute);
				trigger('dayClick', dayBodyCells[col], date, false, ev);
			}else{
				trigger('dayClick', dayBodyCells[col], date, true, ev);
			}
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	-----------------------------------------------------*/
	

	function renderDayOverlay(startDate, endDate, refreshCoordinateGrid) { // endDate is exclusive
		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}
		var visStart = cloneDate(t.visStart);
		var startCol, endCol;
		if (rtl) {
			startCol = dayDiff(endDate, visStart)*dis+dit+1;
			endCol = dayDiff(startDate, visStart)*dis+dit+1;
		}else{
			startCol = dayDiff(startDate, visStart);
			endCol = dayDiff(endDate, visStart);
		}
		startCol = Math.max(0, startCol);
		endCol = Math.min(colCnt, endCol);
		if (startCol < endCol) {
			dayBind(
				renderCellOverlay(0, startCol, 0, endCol-1)
			);
		}
	}
	
	
	function renderCellOverlay(row0, col0, row1, col1) { // only for all-day?
		var rect = coordinateGrid.rect(row0, col0, row1, col1, slotLayer);
		return renderOverlay(rect, slotLayer);
	}
	

	function renderSlotOverlay(overlayStart, overlayEnd) {
		var dayStart = cloneDate(t.visStart);
		var dayEnd = addDays(cloneDate(dayStart), 1);
		for (var i=0; i<colCnt; i++) {
			var stretchStart = new Date(Math.max(dayStart, overlayStart));
			var stretchEnd = new Date(Math.min(dayEnd, overlayEnd));
			if (stretchStart < stretchEnd) {
				var col = i*dis+dit;
				var rect = coordinateGrid.rect(0, col, 0, col, slotContent); // only use it for horizontal coords
				var top = timePosition(dayStart, stretchStart);
				var bottom = timePosition(dayStart, stretchEnd);
				rect.top = top;
				rect.height = bottom - top;
				slotBind(
					renderOverlay(rect, slotContent)
				);
			}
			addDays(dayStart, 1);
			addDays(dayEnd, 1);
		}
	}
	
	
	
	/* Coordinate Utilities
	-----------------------------------------------------------------------------*/
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		dayHeadCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		if (opt('allDaySlot')) {
			e = allDayRow;
			n = e.offset().top;
			rows[0] = [n, n+e.outerHeight()];
		}
		var slotTableTop = slotContent.offset().top;
		var slotScrollerTop = slotScroller.offset().top;
		var slotScrollerBottom = slotScrollerTop + slotScroller.outerHeight();
		function constrain(n) {
			return Math.max(slotScrollerTop, Math.min(slotScrollerBottom, n));
		}
		for (var i=0; i<slotCnt; i++) {
			rows.push([
				constrain(slotTableTop + slotHeight*i),
				constrain(slotTableTop + slotHeight*(i+1))
			]);
		}
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	
	colContentPositions = new HorizontalPositionCache(function(col) {
		return dayBodyCellInners.eq(col);
	});
	
	
	function colContentLeft(col) {
		return colContentPositions.left(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}
	
	
	
	
	function dateCell(date) { // "cell" terminology is now confusing
		return {
			row: Math.floor(dayDiff(date, t.visStart) / 7),
			col: dayOfWeekCol(date.getDay())
		};
	}
	
	
	function cellDate(cell) {
		var d = colDate(cell.col);
		var slotIndex = cell.row;
		if (opt('allDaySlot')) {
			slotIndex--;
		}
		if (slotIndex >= 0) {
			addMinutes(d, minMinute + slotIndex * opt('slotMinutes'));
		}
		return d;
	}
	
	
	function colDate(col) { // returns dates with 00:00:00
		return addDays(cloneDate(t.visStart), col*dis+dit);
	}
	
	
	function cellIsAllDay(cell) {
		return opt('allDaySlot') && !cell.row;
	}
	
	
	function dayOfWeekCol(dayOfWeek) {
		return ((dayOfWeek - Math.max(firstDay, nwe) + colCnt) % colCnt)*dis+dit;
	}
	
	
	
	
	// get the Y coordinate of the given time on the given day (both Date objects)
	function timePosition(day, time) { // both date objects. day holds 00:00 of current day
		day = cloneDate(day, true);
		if (time < addMinutes(cloneDate(day), minMinute)) {
			return 0;
		}
		if (time >= addMinutes(cloneDate(day), maxMinute)) {
			return slotTable.height();
		}
		var slotMinutes = opt('slotMinutes'),
			minutes = time.getHours()*60 + time.getMinutes() - minMinute,
			slotI = Math.floor(minutes / slotMinutes),
			slotTop = slotTopCache[slotI];
		if (slotTop === undefined) {
			slotTop = slotTopCache[slotI] = slotTable.find('tr:eq(' + slotI + ') td div')[0].offsetTop; //.position().top; // need this optimization???
		}
		return Math.max(0, Math.round(
			slotTop - 1 + slotHeight * ((minutes % slotMinutes) / slotMinutes)
		));
	}
	
	
	function allDayBounds() {
		return {
			left: axisWidth,
			right: viewWidth - gutterWidth
		}
	}
	
	
	function getAllDayRow(index) {
		return allDayRow;
	}
	
	
	function defaultEventEnd(event) {
		var start = cloneDate(event.start);
		if (event.allDay) {
			return start;
		}
		return addMinutes(start, opt('defaultEventMinutes'));
	}
	
	
	
	/* Selection
	---------------------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		if (allDay) {
			return cloneDate(startDate);
		}
		return addMinutes(cloneDate(startDate), opt('slotMinutes'));
	}
	
	
	function renderSelection(startDate, endDate, allDay) { // only for all-day
		if (allDay) {
			if (opt('allDaySlot')) {
				renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);
			}
		}else{
			renderSlotSelection(startDate, endDate);
		}
	}
	
	
	function renderSlotSelection(startDate, endDate) {
		var helperOption = opt('selectHelper');
		coordinateGrid.build();
		if (helperOption) {
			var col = dayDiff(startDate, t.visStart) * dis + dit;
			if (col >= 0 && col < colCnt) { // only works when times are on same day
				var rect = coordinateGrid.rect(0, col, 0, col, slotContent); // only for horizontal coords
				var top = timePosition(startDate, startDate);
				var bottom = timePosition(startDate, endDate);
				if (bottom > top) { // protect against selections that are entirely before or after visible range
					rect.top = top;
					rect.height = bottom - top;
					rect.left += 2;
					rect.width -= 5;
					if ($.isFunction(helperOption)) {
						var helperRes = helperOption(startDate, endDate);
						if (helperRes) {
							rect.position = 'absolute';
							rect.zIndex = 8;
							selectionHelper = $(helperRes)
								.css(rect)
								.appendTo(slotContent);
						}
					}else{
						rect.isStart = true; // conside rect a "seg" now
						rect.isEnd = true;   //
						selectionHelper = $(slotSegHtml(
							{
								title: '',
								start: startDate,
								end: endDate,
								className: ['fc-select-helper'],
								editable: false
							},
							rect
						));
						selectionHelper.css('opacity', opt('dragOpacity'));
					}
					if (selectionHelper) {
						slotBind(selectionHelper);
						slotContent.append(selectionHelper);
						setOuterWidth(selectionHelper, rect.width, true); // needs to be after appended
						setOuterHeight(selectionHelper, rect.height, true);
					}
				}
			}
		}else{
			renderSlotOverlay(startDate, endDate);
		}
	}
	
	
	function clearSelection() {
		clearOverlays();
		if (selectionHelper) {
			selectionHelper.remove();
			selectionHelper = null;
		}
	}
	
	
	function slotSelectionMousedown(ev) {
		if (ev.which == 1 && opt('selectable')) { // ev.which==1 means left mouse button
			unselect(ev);
			var dates;
			hoverListener.start(function(cell, origCell) {
				clearSelection();
				if (cell && cell.col == origCell.col && !cellIsAllDay(cell)) {
					var d1 = cellDate(origCell);
					var d2 = cellDate(cell);
					dates = [
						d1,
						addMinutes(cloneDate(d1), opt('slotMinutes')),
						d2,
						addMinutes(cloneDate(d2), opt('slotMinutes'))
					].sort(cmp);
					renderSlotSelection(dates[0], dates[3]);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], false, ev);
					}
					reportSelection(dates[0], dates[3], false, ev);
				}
			});
		}
	}
	
	
	function reportDayClick(date, allDay, ev) {
		trigger('dayClick', dayBodyCells[dayOfWeekCol(date.getDay())], date, allDay, ev);
	}
	
	
	
	/* External Dragging
	--------------------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				if (cellIsAllDay(cell)) {
					renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
				}else{
					var d1 = cellDate(cell);
					var d2 = addMinutes(cloneDate(d1), opt('defaultEventMinutes'));
					renderSlotOverlay(d1, d2);
				}
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			trigger('drop', _dragElement, cellDate(cell), cellIsAllDay(cell), ev, ui);
		}
	}


}

function AgendaEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.compileDaySegs = compileDaySegs; // for DayEventRenderer
	t.clearEvents = clearEvents;
	t.slotSegHtml = slotSegHtml;
	t.bindDaySeg = bindDaySeg;
	
	
	// imports
	DayEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	//var setOverflowHidden = t.setOverflowHidden;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEvents = t.reportEvents;
	var reportEventClear = t.reportEventClear;
	var eventElementHandlers = t.eventElementHandlers;
	var setHeight = t.setHeight;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var getSlotSegmentContainer = t.getSlotSegmentContainer;
	var getHoverListener = t.getHoverListener;
	var getMaxMinute = t.getMaxMinute;
	var getMinMinute = t.getMinMinute;
	var timePosition = t.timePosition;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var renderDaySegs = t.renderDaySegs;
	var resizableDayEvent = t.resizableDayEvent; // TODO: streamline binding architecture
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var getSlotHeight = t.getSlotHeight;
	var getBodyContent = t.getBodyContent;
	var reportEventElement = t.reportEventElement;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var eventResize = t.eventResize;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var calendar = t.calendar;
	var formatDate = calendar.formatDate;
	var formatDates = calendar.formatDates;
	
	
	
	/* Rendering
	----------------------------------------------------------------------------*/
	

	function renderEvents(events, modifiedEventId) {
		reportEvents(events);
		var i, len=events.length,
			dayEvents=[],
			slotEvents=[];
		for (i=0; i<len; i++) {
			if (events[i].allDay) {
				dayEvents.push(events[i]);
			}else{
				slotEvents.push(events[i]);
			}
		}
		if (opt('allDaySlot')) {
			renderDaySegs(compileDaySegs(dayEvents), modifiedEventId);
			setHeight(); // no params means set to viewHeight
		}
		renderSlotSegs(compileSlotSegs(slotEvents), modifiedEventId);
	}
	
	
	function clearEvents() {
		reportEventClear();
		getDaySegmentContainer().empty();
		getSlotSegmentContainer().empty();
	}
	
	
	function compileDaySegs(events) {
		var levels = stackSegs(sliceSegs(events, $.map(events, exclEndDay), t.visStart, t.visEnd)),
			i, levelCnt=levels.length, level,
			j, seg,
			segs=[];
		for (i=0; i<levelCnt; i++) {
			level = levels[i];
			for (j=0; j<level.length; j++) {
				seg = level[j];
				seg.row = 0;
				seg.level = i; // not needed anymore
				segs.push(seg);
			}
		}
		return segs;
	}
	
	
	function compileSlotSegs(events) {
		var colCnt = getColCnt(),
			minMinute = getMinMinute(),
			maxMinute = getMaxMinute(),
			d = addMinutes(cloneDate(t.visStart), minMinute),
			visEventEnds = $.map(events, slotEventEnd),
			i, col,
			j, level,
			k, seg,
			segs=[];
		for (i=0; i<colCnt; i++) {
			col = stackSegs(sliceSegs(events, visEventEnds, d, addMinutes(cloneDate(d), maxMinute-minMinute)));
			countForwardSegs(col);
			for (j=0; j<col.length; j++) {
				level = col[j];
				for (k=0; k<level.length; k++) {
					seg = level[k];
					seg.col = i;
					seg.level = j;
					segs.push(seg);
				}
			}
			addDays(d, 1, true);
		}
		return segs;
	}
	
	
	function slotEventEnd(event) {
		if (event.end) {
			return cloneDate(event.end);
		}else{
			return addMinutes(cloneDate(event.start), opt('defaultEventMinutes'));
		}
	}
	
	
	// renders events in the 'time slots' at the bottom
	
	function renderSlotSegs(segs, modifiedEventId) {
	
		var i, segCnt=segs.length, seg,
			event,
			classes,
			top, bottom,
			colI, levelI, forward,
			leftmost,
			availWidth,
			outerWidth,
			left,
			html='',
			eventElements,
			eventElement,
			triggerRes,
			vsideCache={},
			hsideCache={},
			key, val,
			contentElement,
			height,
			slotSegmentContainer = getSlotSegmentContainer(),
			rtl, dis, dit,
			colCnt = getColCnt();
			
		if (rtl = opt('isRTL')) {
			dis = -1;
			dit = colCnt - 1;
		}else{
			dis = 1;
			dit = 0;
		}
			
		// calculate position/dimensions, create html
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			top = timePosition(seg.start, seg.start);
			bottom = timePosition(seg.start, seg.end);
			colI = seg.col;
			levelI = seg.level;
			forward = seg.forward || 0;
			leftmost = colContentLeft(colI*dis + dit);
			availWidth = colContentRight(colI*dis + dit) - leftmost;
			availWidth = Math.min(availWidth-6, availWidth*.95); // TODO: move this to CSS
			if (levelI) {
				// indented and thin
				outerWidth = availWidth / (levelI + forward + 1);
			}else{
				if (forward) {
					// moderately wide, aligned left still
					outerWidth = ((availWidth / (forward + 1)) - (12/2)) * 2; // 12 is the predicted width of resizer =
				}else{
					// can be entire width, aligned left
					outerWidth = availWidth;
				}
			}
			left = leftmost +                                  // leftmost possible
				(availWidth / (levelI + forward + 1) * levelI) // indentation
				* dis + (rtl ? availWidth - outerWidth : 0);   // rtl
			seg.top = top;
			seg.left = left;
			seg.outerWidth = outerWidth;
			seg.outerHeight = bottom - top;
			html += slotSegHtml(event, seg);
		}
		slotSegmentContainer[0].innerHTML = html; // faster than html()
		eventElements = slotSegmentContainer.children();
		
		// retrieve elements, run through eventRender callback, bind event handlers
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			eventElement = $(eventElements[i]); // faster than eq()
			triggerRes = trigger('eventRender', event, event, eventElement);
			if (triggerRes === false) {
				eventElement.remove();
			}else{
				if (triggerRes && triggerRes !== true) {
					eventElement.remove();
					eventElement = $(triggerRes)
						.css({
							position: 'absolute',
							top: seg.top,
							left: seg.left
						})
						.appendTo(slotSegmentContainer);
				}
				seg.element = eventElement;
				if (event._id === modifiedEventId) {
					bindSlotSeg(event, eventElement, seg);
				}else{
					eventElement[0]._fci = i; // for lazySegBind
				}
				reportEventElement(event, eventElement);
			}
		}
		
		lazySegBind(slotSegmentContainer, segs, bindSlotSeg);
		
		// record event sides and title positions
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				val = vsideCache[key = seg.key = cssKey(eventElement[0])];
				seg.vsides = val === undefined ? (vsideCache[key] = vsides(eventElement, true)) : val;
				val = hsideCache[key];
				seg.hsides = val === undefined ? (hsideCache[key] = hsides(eventElement, true)) : val;
				contentElement = eventElement.find('div.fc-event-content');
				if (contentElement.length) {
					seg.contentTop = contentElement[0].offsetTop;
				}
			}
		}
		
		// set all positions/dimensions at once
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				eventElement[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
				height = Math.max(0, seg.outerHeight - seg.vsides);
				eventElement[0].style.height = height + 'px';
				event = seg.event;
				if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
					// not enough room for title, put it in the time header
					eventElement.find('div.fc-event-time')
						.text(formatDate(event.start, opt('timeFormat')) + ' - ' + event.title);
					eventElement.find('div.fc-event-title')
						.remove();
				}
				trigger('eventAfterRender', event, event, eventElement);
			}
		}
					
	}
	
	
	function slotSegHtml(event, seg) {
		var html = "<";
		var url = event.url;
		var skinCss = getSkinCss(event, opt);
		var skinCssAttr = (skinCss ? " style='" + skinCss + "'" : '');
		var classes = ['fc-event', 'fc-event-skin', 'fc-event-vert'];
		if (isEventDraggable(event)) {
			classes.push('fc-event-draggable');
		}
		if (seg.isStart) {
			classes.push('fc-corner-top');
		}
		if (seg.isEnd) {
			classes.push('fc-corner-bottom');
		}
		classes = classes.concat(event.className);
		if (event.source) {
			classes = classes.concat(event.source.className || []);
		}
		if (url) {
			html += "a href='" + htmlEscape(event.url) + "'";
		}else{
			html += "div";
		}
		html +=
			" class='" + classes.join(' ') + "'" +
			" style='position:absolute;z-index:8;top:" + seg.top + "px;left:" + seg.left + "px;" + skinCss + "'" +
			">" +
			"<div class='fc-event-inner fc-event-skin'" + skinCssAttr + ">" +
			"<div class='fc-event-head fc-event-skin'" + skinCssAttr + ">" +
			"<div class='fc-event-time'>" +
			htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +
			"</div>" +
			"</div>" +
			"<div class='fc-event-content'>" +
			"<div class='fc-event-title'>" +
			htmlEscape(event.title) +
			"</div>" +
			"</div>" +
			"<div class='fc-event-bg'></div>" +
			"</div>"; // close inner
		if (seg.isEnd && isEventResizable(event)) {
			html +=
				"<div class='ui-resizable-handle ui-resizable-s'>=</div>";
		}
		html +=
			"</" + (url ? "a" : "div") + ">";
		return html;
	}
	
	
	function bindDaySeg(event, eventElement, seg) {
		if (isEventDraggable(event)) {
			draggableDayEvent(event, eventElement, seg.isStart);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableDayEvent(event, eventElement, seg);
		}
		eventElementHandlers(event, eventElement);
			// needs to be after, because resizableDayEvent might stopImmediatePropagation on click
	}
	
	
	function bindSlotSeg(event, eventElement, seg) {
		var timeElement = eventElement.find('div.fc-event-time');
		if (isEventDraggable(event)) {
			draggableSlotEvent(event, eventElement, timeElement);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableSlotEvent(event, eventElement, timeElement);
		}
		eventElementHandlers(event, eventElement);
	}
	
	
	
	/* Dragging
	-----------------------------------------------------------------------------------*/
	
	
	// when event starts out FULL-DAY
	
	function draggableDayEvent(event, eventElement, isStart) {
		var origWidth;
		var revert;
		var allDay=true;
		var dayDelta;
		var dis = opt('isRTL') ? -1 : 1;
		var hoverListener = getHoverListener();
		var colWidth = getColWidth();
		var slotHeight = getSlotHeight();
		var minMinute = getMinMinute();
		eventElement.draggable({
			zIndex: 9,
			opacity: opt('dragOpacity', 'month'), // use whatever the month view was using
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origWidth = eventElement.width();
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					clearOverlays();
					if (cell) {
						//setOverflowHidden(true);
						revert = false;
						dayDelta = colDelta * dis;
						if (!cell.row) {
							// on full-days
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
							resetElement();
						}else{
							// mouse is over bottom slots
							if (isStart) {
								if (allDay) {
									// convert event to temporary slot-event
									eventElement.width(colWidth - 10); // don't use entire width
									setOuterHeight(
										eventElement,
										slotHeight * Math.round(
											(event.end ? ((event.end - event.start) / MINUTE_MS) : opt('defaultEventMinutes'))
											/ opt('slotMinutes')
										)
									);
									eventElement.draggable('option', 'grid', [colWidth, 1]);
									allDay = false;
								}
							}else{
								revert = true;
							}
						}
						revert = revert || (allDay && !dayDelta);
					}else{
						resetElement();
						//setOverflowHidden(false);
						revert = true;
					}
					eventElement.draggable('option', 'revert', revert);
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (revert) {
					// hasn't moved or is out of bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}else{
					// changed!
					var minuteDelta = 0;
					if (!allDay) {
						minuteDelta = Math.round((eventElement.offset().top - getBodyContent().offset().top) / slotHeight)
							* opt('slotMinutes')
							+ minMinute
							- (event.start.getHours() * 60 + event.start.getMinutes());
					}
					eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui);
				}
				//setOverflowHidden(false);
			}
		});
		function resetElement() {
			if (!allDay) {
				eventElement
					.width(origWidth)
					.height('')
					.draggable('option', 'grid', null);
				allDay = true;
			}
		}
	}
	
	
	// when event starts out IN TIMESLOTS
	
	function draggableSlotEvent(event, eventElement, timeElement) {
		var origPosition;
		var allDay=false;
		var dayDelta;
		var minuteDelta;
		var prevMinuteDelta;
		var dis = opt('isRTL') ? -1 : 1;
		var hoverListener = getHoverListener();
		var colCnt = getColCnt();
		var colWidth = getColWidth();
		var slotHeight = getSlotHeight();
		eventElement.draggable({
			zIndex: 9,
			scroll: false,
			grid: [colWidth, slotHeight],
			axis: colCnt==1 ? 'y' : false,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origPosition = eventElement.position();
				minuteDelta = prevMinuteDelta = 0;
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					eventElement.draggable('option', 'revert', !cell);
					clearOverlays();
					if (cell) {
						dayDelta = colDelta * dis;
						if (opt('allDaySlot') && !cell.row) {
							// over full days
							if (!allDay) {
								// convert to temporary all-day event
								allDay = true;
								timeElement.hide();
								eventElement.draggable('option', 'grid', null);
							}
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
						}else{
							// on slots
							resetElement();
						}
					}
				}, ev, 'drag');
			},
			drag: function(ev, ui) {
				minuteDelta = Math.round((ui.position.top - origPosition.top) / slotHeight) * opt('slotMinutes');
				if (minuteDelta != prevMinuteDelta) {
					if (!allDay) {
						updateTimeText(minuteDelta);
					}
					prevMinuteDelta = minuteDelta;
				}
			},
			stop: function(ev, ui) {
				var cell = hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (cell && (dayDelta || minuteDelta || allDay)) {
					// changed!
					eventDrop(this, event, dayDelta, allDay ? 0 : minuteDelta, allDay, ev, ui);
				}else{
					// either no change or out-of-bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					eventElement.css(origPosition); // sometimes fast drags make event revert to wrong position
					updateTimeText(0);
					showEvents(event, eventElement);
				}
			}
		});
		function updateTimeText(minuteDelta) {
			var newStart = addMinutes(cloneDate(event.start), minuteDelta);
			var newEnd;
			if (event.end) {
				newEnd = addMinutes(cloneDate(event.end), minuteDelta);
			}
			timeElement.text(formatDates(newStart, newEnd, opt('timeFormat')));
		}
		function resetElement() {
			// convert back to original slot-event
			if (allDay) {
				timeElement.css('display', ''); // show() was causing display=inline
				eventElement.draggable('option', 'grid', [colWidth, slotHeight]);
				allDay = false;
			}
		}
	}
	
	
	
	/* Resizing
	--------------------------------------------------------------------------------------*/
	
	
	function resizableSlotEvent(event, eventElement, timeElement) {
		var slotDelta, prevSlotDelta;
		var slotHeight = getSlotHeight();
		eventElement.resizable({
			handles: {
				s: 'div.ui-resizable-s'
			},
			grid: slotHeight,
			start: function(ev, ui) {
				slotDelta = prevSlotDelta = 0;
				hideEvents(event, eventElement);
				eventElement.css('z-index', 9);
				trigger('eventResizeStart', this, event, ev, ui);
			},
			resize: function(ev, ui) {
				// don't rely on ui.size.height, doesn't take grid into account
				slotDelta = Math.round((Math.max(slotHeight, eventElement.height()) - ui.originalSize.height) / slotHeight);
				if (slotDelta != prevSlotDelta) {
					timeElement.text(
						formatDates(
							event.start,
							(!slotDelta && !event.end) ? null : // no change, so don't display time range
								addMinutes(eventEnd(event), opt('slotMinutes')*slotDelta),
							opt('timeFormat')
						)
					);
					prevSlotDelta = slotDelta;
				}
			},
			stop: function(ev, ui) {
				trigger('eventResizeStop', this, event, ev, ui);
				if (slotDelta) {
					eventResize(this, event, 0, opt('slotMinutes')*slotDelta, ev, ui);
				}else{
					eventElement.css('z-index', 8);
					showEvents(event, eventElement);
					// BUG: if event was really short, need to put title back in span
				}
			}
		});
	}
	

}


function countForwardSegs(levels) {
	var i, j, k, level, segForward, segBack;
	for (i=levels.length-1; i>0; i--) {
		level = levels[i];
		for (j=0; j<level.length; j++) {
			segForward = level[j];
			for (k=0; k<levels[i-1].length; k++) {
				segBack = levels[i-1][k];
				if (segsCollide(segForward, segBack)) {
					segBack.forward = Math.max(segBack.forward||0, (segForward.forward||0)+1);
				}
			}
		}
	}
}




function View(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.element = element;
	t.calendar = calendar;
	t.name = viewName;
	t.opt = opt;
	t.trigger = trigger;
	//t.setOverflowHidden = setOverflowHidden;
	t.isEventDraggable = isEventDraggable;
	t.isEventResizable = isEventResizable;
	t.reportEvents = reportEvents;
	t.eventEnd = eventEnd;
	t.reportEventElement = reportEventElement;
	t.reportEventClear = reportEventClear;
	t.eventElementHandlers = eventElementHandlers;
	t.showEvents = showEvents;
	t.hideEvents = hideEvents;
	t.eventDrop = eventDrop;
	t.eventResize = eventResize;
	// t.title
	// t.start, t.end
	// t.visStart, t.visEnd
	
	
	// imports
	var defaultEventEnd = t.defaultEventEnd;
	var normalizeEvent = calendar.normalizeEvent; // in EventManager
	var reportEventChange = calendar.reportEventChange;
	
	
	// locals
	var eventsByID = {};
	var eventElements = [];
	var eventElementsByID = {};
	var options = calendar.options;
	
	
	
	function opt(name, viewNameOverride) {
		var v = options[name];
		if (typeof v == 'object') {
			return smartProperty(v, viewNameOverride || viewName);
		}
		return v;
	}

	
	function trigger(name, thisObj) {
		return calendar.trigger.apply(
			calendar,
			[name, thisObj || t].concat(Array.prototype.slice.call(arguments, 2), [t])
		);
	}
	
	
	/*
	function setOverflowHidden(bool) {
		element.css('overflow', bool ? 'hidden' : '');
	}
	*/
	
	
	function isEventDraggable(event) {
		return isEventEditable(event) && !opt('disableDragging');
	}
	
	
	function isEventResizable(event) { // but also need to make sure the seg.isEnd == true
		return isEventEditable(event) && !opt('disableResizing');
	}
	
	
	function isEventEditable(event) {
		return firstDefined(event.editable, (event.source || {}).editable, opt('editable'));
	}
	
	
	
	/* Event Data
	------------------------------------------------------------------------------*/
	
	
	// report when view receives new events
	function reportEvents(events) { // events are already normalized at this point
		eventsByID = {};
		var i, len=events.length, event;
		for (i=0; i<len; i++) {
			event = events[i];
			if (eventsByID[event._id]) {
				eventsByID[event._id].push(event);
			}else{
				eventsByID[event._id] = [event];
			}
		}
	}
	
	
	// returns a Date object for an event's end
	function eventEnd(event) {
		return event.end ? cloneDate(event.end) : defaultEventEnd(event);
	}
	
	
	
	/* Event Elements
	------------------------------------------------------------------------------*/
	
	
	// report when view creates an element for an event
	function reportEventElement(event, element) {
		eventElements.push(element);
		if (eventElementsByID[event._id]) {
			eventElementsByID[event._id].push(element);
		}else{
			eventElementsByID[event._id] = [element];
		}
	}
	
	
	function reportEventClear() {
		eventElements = [];
		eventElementsByID = {};
	}
	
	
	// attaches eventClick, eventMouseover, eventMouseout
	function eventElementHandlers(event, eventElement) {
		eventElement
			.click(function(ev) {
				if (!eventElement.hasClass('ui-draggable-dragging') &&
					!eventElement.hasClass('ui-resizable-resizing')) {
						return trigger('eventClick', this, event, ev);
					}
			})
			.hover(
				function(ev) {
					trigger('eventMouseover', this, event, ev);
				},
				function(ev) {
					trigger('eventMouseout', this, event, ev);
				}
			);
		// TODO: don't fire eventMouseover/eventMouseout *while* dragging is occuring (on subject element)
		// TODO: same for resizing
	}
	
	
	function showEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'show');
	}
	
	
	function hideEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'hide');
	}
	
	
	function eachEventElement(event, exceptElement, funcName) {
		var elements = eventElementsByID[event._id],
			i, len = elements.length;
		for (i=0; i<len; i++) {
			if (!exceptElement || elements[i][0] != exceptElement[0]) {
				elements[i][funcName]();
			}
		}
	}
	
	
	
	/* Event Modification Reporting
	---------------------------------------------------------------------------------*/
	
	
	function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
		var oldAllDay = event.allDay;
		var eventId = event._id;
		moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay);
		trigger(
			'eventDrop',
			e,
			event,
			dayDelta,
			minuteDelta,
			allDay,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
		var eventId = event._id;
		elongateEvents(eventsByID[eventId], dayDelta, minuteDelta);
		trigger(
			'eventResize',
			e,
			event,
			dayDelta,
			minuteDelta,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	
	/* Event Modification Math
	---------------------------------------------------------------------------------*/
	
	
	function moveEvents(events, dayDelta, minuteDelta, allDay) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			if (allDay !== undefined) {
				e.allDay = allDay;
			}
			addMinutes(addDays(e.start, dayDelta, true), minuteDelta);
			if (e.end) {
				e.end = addMinutes(addDays(e.end, dayDelta, true), minuteDelta);
			}
			normalizeEvent(e, options);
		}
	}
	
	
	function elongateEvents(events, dayDelta, minuteDelta) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			e.end = addMinutes(addDays(eventEnd(e), dayDelta, true), minuteDelta);
			normalizeEvent(e, options);
		}
	}
	

}

function DayEventRenderer() {
	var t = this;

	
	// exports
	t.renderDaySegs = renderDaySegs;
	t.resizableDayEvent = resizableDayEvent;
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEventElement = t.reportEventElement;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventResize = t.eventResize;
	var getRowCnt = t.getRowCnt;
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var allDayRow = t.allDayRow;
	var allDayBounds = t.allDayBounds;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var dayOfWeekCol = t.dayOfWeekCol;
	var dateCell = t.dateCell;
	var compileDaySegs = t.compileDaySegs;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var bindDaySeg = t.bindDaySeg; //TODO: streamline this
	var formatDates = t.calendar.formatDates;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var clearSelection = t.clearSelection;
	
	
	
	/* Rendering
	-----------------------------------------------------------------------------*/
	
	
	function renderDaySegs(segs, modifiedEventId) {
		var segmentContainer = getDaySegmentContainer();
		var rowDivs;
		var rowCnt = getRowCnt();
		var colCnt = getColCnt();
		var i = 0;
		var rowI;
		var levelI;
		var colHeights;
		var j;
		var segCnt = segs.length;
		var seg;
		var top;
		var k;
		segmentContainer[0].innerHTML = daySegHTML(segs); // faster than .html()
		daySegElementResolve(segs, segmentContainer.children());
		daySegElementReport(segs);
		daySegHandlers(segs, segmentContainer, modifiedEventId);
		daySegCalcHSides(segs);
		daySegSetWidths(segs);
		daySegCalcHeights(segs);
		rowDivs = getRowDivs();
		// set row heights, calculate event tops (in relation to row top)
		for (rowI=0; rowI<rowCnt; rowI++) {
			levelI = 0;
			colHeights = [];
			for (j=0; j<colCnt; j++) {
				colHeights[j] = 0;
			}
			while (i<segCnt && (seg = segs[i]).row == rowI) {
				// loop through segs in a row
				top = arrayMax(colHeights.slice(seg.startCol, seg.endCol));
				seg.top = top;
				top += seg.outerHeight;
				for (k=seg.startCol; k<seg.endCol; k++) {
					colHeights[k] = top;
				}
				i++;
			}
			rowDivs[rowI].height(arrayMax(colHeights));
		}
		daySegSetTops(segs, getRowTops(rowDivs));
	}
	
	
	function renderTempDaySegs(segs, adjustRow, adjustTop) {
		var tempContainer = $("<div/>");
		var elements;
		var segmentContainer = getDaySegmentContainer();
		var i;
		var segCnt = segs.length;
		var element;
		tempContainer[0].innerHTML = daySegHTML(segs); // faster than .html()
		elements = tempContainer.children();
		segmentContainer.append(elements);
		daySegElementResolve(segs, elements);
		daySegCalcHSides(segs);
		daySegSetWidths(segs);
		daySegCalcHeights(segs);
		daySegSetTops(segs, getRowTops(getRowDivs()));
		elements = [];
		for (i=0; i<segCnt; i++) {
			element = segs[i].element;
			if (element) {
				if (segs[i].row === adjustRow) {
					element.css('top', adjustTop);
				}
				elements.push(element[0]);
			}
		}
		return $(elements);
	}
	
	
	function daySegHTML(segs) { // also sets seg.left and seg.outerWidth
		var rtl = opt('isRTL');
		var i;
		var segCnt=segs.length;
		var seg;
		var event;
		var url;
		var classes;
		var bounds = allDayBounds();
		var minLeft = bounds.left;
		var maxLeft = bounds.right;
		var leftCol;
		var rightCol;
		var left;
		var right;
		var skinCss;
		var html = '';
		// calculate desired position/dimensions, create html
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			classes = ['fc-event', 'fc-event-skin', 'fc-event-hori'];
			if (isEventDraggable(event)) {
				classes.push('fc-event-draggable');
			}
			if (rtl) {
				if (seg.isStart) {
					classes.push('fc-corner-right');
				}
				if (seg.isEnd) {
					classes.push('fc-corner-left');
				}
				leftCol = dayOfWeekCol(seg.end.getDay()-1);
				rightCol = dayOfWeekCol(seg.start.getDay());
				left = seg.isEnd ? colContentLeft(leftCol) : minLeft;
				right = seg.isStart ? colContentRight(rightCol) : maxLeft;
			}else{
				if (seg.isStart) {
					classes.push('fc-corner-left');
				}
				if (seg.isEnd) {
					classes.push('fc-corner-right');
				}
				leftCol = dayOfWeekCol(seg.start.getDay());
				rightCol = dayOfWeekCol(seg.end.getDay()-1);
				left = seg.isStart ? colContentLeft(leftCol) : minLeft;
				right = seg.isEnd ? colContentRight(rightCol) : maxLeft;
			}
			classes = classes.concat(event.className);
			if (event.source) {
				classes = classes.concat(event.source.className || []);
			}
			url = event.url;
			skinCss = getSkinCss(event, opt);
			if (url) {
				html += "<a href='" + htmlEscape(url) + "'";
			}else{
				html += "<div";
			}
			html +=
				" class='" + classes.join(' ') + "'" +
				" style='position:absolute;z-index:8;left:"+left+"px;" + skinCss + "'" +
				">" +
				"<div" +
				" class='fc-event-inner fc-event-skin'" +
				(skinCss ? " style='" + skinCss + "'" : '') +
				">";
			if (!event.allDay && seg.isStart) {
				html +=
					"<span class='fc-event-time'>" +
					htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +
					"</span>";
			}
			html +=
				"<span class='fc-event-title'>" + htmlEscape(event.title) + "</span>" +
				"</div>";
			if (seg.isEnd && isEventResizable(event)) {
				html +=
					"<div class='ui-resizable-handle ui-resizable-" + (rtl ? 'w' : 'e') + "'>" +
					"&nbsp;&nbsp;&nbsp;" + // makes hit area a lot better for IE6/7
					"</div>";
			}
			html +=
				"</" + (url ? "a" : "div" ) + ">";
			seg.left = left;
			seg.outerWidth = right - left;
			seg.startCol = leftCol;
			seg.endCol = rightCol + 1; // needs to be exclusive
		}
		return html;
	}
	
	
	function daySegElementResolve(segs, elements) { // sets seg.element
		var i;
		var segCnt = segs.length;
		var seg;
		var event;
		var element;
		var triggerRes;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			element = $(elements[i]); // faster than .eq()
			triggerRes = trigger('eventRender', event, event, element);
			if (triggerRes === false) {
				element.remove();
			}else{
				if (triggerRes && triggerRes !== true) {
					triggerRes = $(triggerRes)
						.css({
							position: 'absolute',
							left: seg.left
						});
					element.replaceWith(triggerRes);
					element = triggerRes;
				}
				seg.element = element;
			}
		}
	}
	
	
	function daySegElementReport(segs) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				reportEventElement(seg.event, element);
			}
		}
	}
	
	
	function daySegHandlers(segs, segmentContainer, modifiedEventId) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var event;
		// retrieve elements, run through eventRender callback, bind handlers
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				event = seg.event;
				if (event._id === modifiedEventId) {
					bindDaySeg(event, element, seg);
				}else{
					element[0]._fci = i; // for lazySegBind
				}
			}
		}
		lazySegBind(segmentContainer, segs, bindDaySeg);
	}
	
	
	function daySegCalcHSides(segs) { // also sets seg.key
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var key, val;
		var hsideCache = {};
		// record event horizontal sides
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				key = seg.key = cssKey(element[0]);
				val = hsideCache[key];
				if (val === undefined) {
					val = hsideCache[key] = hsides(element, true);
				}
				seg.hsides = val;
			}
		}
	}
	
	
	function daySegSetWidths(segs) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				element[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
			}
		}
	}
	
	
	function daySegCalcHeights(segs) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var key, val;
		var vmarginCache = {};
		// record event heights
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				key = seg.key; // created in daySegCalcHSides
				val = vmarginCache[key];
				if (val === undefined) {
					val = vmarginCache[key] = vmargins(element);
				}
				seg.outerHeight = element[0].offsetHeight + val;
			}
		}
	}
	
	
	function getRowDivs() {
		var i;
		var rowCnt = getRowCnt();
		var rowDivs = [];
		for (i=0; i<rowCnt; i++) {
			rowDivs[i] = allDayRow(i)
				.find('td:first div.fc-day-content > div'); // optimal selector?
		}
		return rowDivs;
	}
	
	
	function getRowTops(rowDivs) {
		var i;
		var rowCnt = rowDivs.length;
		var tops = [];
		for (i=0; i<rowCnt; i++) {
			tops[i] = rowDivs[i][0].offsetTop; // !!?? but this means the element needs position:relative if in a table cell!!!!
		}
		return tops;
	}
	
	
	function daySegSetTops(segs, rowTops) { // also triggers eventAfterRender
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var event;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				element[0].style.top = rowTops[seg.row] + (seg.top||0) + 'px';
				event = seg.event;
				trigger('eventAfterRender', event, event, element);
			}
		}
	}
	
	
	
	/* Resizing
	-----------------------------------------------------------------------------------*/
	
	
	function resizableDayEvent(event, element, seg) {
		var rtl = opt('isRTL');
		var direction = rtl ? 'w' : 'e';
		var handle = element.find('div.ui-resizable-' + direction);
		var isResizing = false;
		
		// TODO: look into using jquery-ui mouse widget for this stuff
		disableTextSelection(element); // prevent native <a> selection for IE
		element
			.mousedown(function(ev) { // prevent native <a> selection for others
				ev.preventDefault();
			})
			.click(function(ev) {
				if (isResizing) {
					ev.preventDefault(); // prevent link from being visited (only method that worked in IE6)
					ev.stopImmediatePropagation(); // prevent fullcalendar eventClick handler from being called
					                               // (eventElementHandlers needs to be bound after resizableDayEvent)
				}
			});
		
		handle.mousedown(function(ev) {
			if (ev.which != 1) {
				return; // needs to be left mouse button
			}
			isResizing = true;
			var hoverListener = t.getHoverListener();
			var rowCnt = getRowCnt();
			var colCnt = getColCnt();
			var dis = rtl ? -1 : 1;
			var dit = rtl ? colCnt-1 : 0;
			var elementTop = element.css('top');
			var dayDelta;
			var helpers;
			var eventCopy = $.extend({}, event);
			var minCell = dateCell(event.start);
			clearSelection();
			$('body')
				.css('cursor', direction + '-resize')
				.one('mouseup', mouseup);
			trigger('eventResizeStart', this, event, ev);
			hoverListener.start(function(cell, origCell) {
				if (cell) {
					var r = Math.max(minCell.row, cell.row);
					var c = cell.col;
					if (rowCnt == 1) {
						r = 0; // hack for all-day area in agenda views
					}
					if (r == minCell.row) {
						if (rtl) {
							c = Math.min(minCell.col, c);
						}else{
							c = Math.max(minCell.col, c);
						}
					}
					dayDelta = (r*7 + c*dis+dit) - (origCell.row*7 + origCell.col*dis+dit);
					var newEnd = addDays(eventEnd(event), dayDelta, true);
					if (dayDelta) {
						eventCopy.end = newEnd;
						var oldHelpers = helpers;
						helpers = renderTempDaySegs(compileDaySegs([eventCopy]), seg.row, elementTop);
						helpers.find('*').css('cursor', direction + '-resize');
						if (oldHelpers) {
							oldHelpers.remove();
						}
						hideEvents(event);
					}else{
						if (helpers) {
							showEvents(event);
							helpers.remove();
							helpers = null;
						}
					}
					clearOverlays();
					renderDayOverlay(event.start, addDays(cloneDate(newEnd), 1)); // coordinate grid already rebuild at hoverListener.start
				}
			}, ev);
			
			function mouseup(ev) {
				trigger('eventResizeStop', this, event, ev);
				$('body').css('cursor', '');
				hoverListener.stop();
				clearOverlays();
				if (dayDelta) {
					eventResize(this, event, dayDelta, 0, ev);
					// event redraw will clear helpers
				}
				// otherwise, the drag handler already restored the old events
				
				setTimeout(function() { // make this happen after the element's click event
					isResizing = false;
				},0);
			}
			
		});
	}
	

}

//BUG: unselect needs to be triggered when events are dragged+dropped

function SelectionManager() {
	var t = this;
	
	
	// exports
	t.select = select;
	t.unselect = unselect;
	t.reportSelection = reportSelection;
	t.daySelectionMousedown = daySelectionMousedown;
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var defaultSelectionEnd = t.defaultSelectionEnd;
	var renderSelection = t.renderSelection;
	var clearSelection = t.clearSelection;
	
	
	// locals
	var selected = false;



	// unselectAuto
	if (opt('selectable') && opt('unselectAuto')) {
		$(document).mousedown(function(ev) {
			var ignore = opt('unselectCancel');
			if (ignore) {
				if ($(ev.target).parents(ignore).length) { // could be optimized to stop after first match
					return;
				}
			}
			unselect(ev);
		});
	}
	

	function select(startDate, endDate, allDay) {
		unselect();
		if (!endDate) {
			endDate = defaultSelectionEnd(startDate, allDay);
		}
		renderSelection(startDate, endDate, allDay);
		reportSelection(startDate, endDate, allDay);
	}
	
	
	function unselect(ev) {
		if (selected) {
			selected = false;
			clearSelection();
			trigger('unselect', null, ev);
		}
	}
	
	
	function reportSelection(startDate, endDate, allDay, ev) {
		selected = true;
		trigger('select', null, startDate, endDate, allDay, ev);
	}
	
	
	function daySelectionMousedown(ev) { // not really a generic manager method, oh well
		var cellDate = t.cellDate;
		var cellIsAllDay = t.cellIsAllDay;
		var hoverListener = t.getHoverListener();
		var reportDayClick = t.reportDayClick; // this is hacky and sort of weird
		if (ev.which == 1 && opt('selectable')) { // which==1 means left mouse button
			unselect(ev);
			var _mousedownElement = this;
			var dates;
			hoverListener.start(function(cell, origCell) { // TODO: maybe put cellDate/cellIsAllDay info in cell
				clearSelection();
				if (cell && cellIsAllDay(cell)) {
					dates = [ cellDate(origCell), cellDate(cell) ].sort(cmp);
					renderSelection(dates[0], dates[1], true);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], true, ev);
					}
					reportSelection(dates[0], dates[1], true, ev);
				}
			});
		}
	}


}
 
function OverlayManager() {
	var t = this;
	
	
	// exports
	t.renderOverlay = renderOverlay;
	t.clearOverlays = clearOverlays;
	
	
	// locals
	var usedOverlays = [];
	var unusedOverlays = [];
	
	
	function renderOverlay(rect, parent) {
		var e = unusedOverlays.shift();
		if (!e) {
			e = $("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>");
		}
		if (e[0].parentNode != parent[0]) {
			e.appendTo(parent);
		}
		usedOverlays.push(e.css(rect).show());
		return e;
	}
	

	function clearOverlays() {
		var e;
		while (e = usedOverlays.shift()) {
			unusedOverlays.push(e.hide().unbind());
		}
	}


}

function CoordinateGrid(buildFunc) {

	var t = this;
	var rows;
	var cols;
	
	
	t.build = function() {
		rows = [];
		cols = [];
		buildFunc(rows, cols);
	};
	
	
	t.cell = function(x, y) {
		var rowCnt = rows.length;
		var colCnt = cols.length;
		var i, r=-1, c=-1;
		for (i=0; i<rowCnt; i++) {
			if (y >= rows[i][0] && y < rows[i][1]) {
				r = i;
				break;
			}
		}
		for (i=0; i<colCnt; i++) {
			if (x >= cols[i][0] && x < cols[i][1]) {
				c = i;
				break;
			}
		}
		return (r>=0 && c>=0) ? { row:r, col:c } : null;
	};
	
	
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive
		var origin = originElement.offset();
		return {
			top: rows[row0][0] - origin.top,
			left: cols[col0][0] - origin.left,
			width: cols[col1][1] - cols[col0][0],
			height: rows[row1][1] - rows[row0][0]
		};
	};

}

function HoverListener(coordinateGrid) {


	var t = this;
	var bindType;
	var change;
	var firstCell;
	var cell;
	
	
	t.start = function(_change, ev, _bindType) {
		change = _change;
		firstCell = cell = null;
		coordinateGrid.build();
		mouse(ev);
		bindType = _bindType || 'mousemove';
		$(document).bind(bindType, mouse);
	};
	
	
	function mouse(ev) {
		var newCell = coordinateGrid.cell(ev.pageX, ev.pageY);
		if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
			if (newCell) {
				if (!firstCell) {
					firstCell = newCell;
				}
				change(newCell, firstCell, newCell.row-firstCell.row, newCell.col-firstCell.col);
			}else{
				change(newCell, firstCell);
			}
			cell = newCell;
		}
	}
	
	
	t.stop = function() {
		$(document).unbind(bindType, mouse);
		return cell;
	};
	
	
}

function HorizontalPositionCache(getElement) {

	var t = this,
		elements = {},
		lefts = {},
		rights = {};
		
	function e(i) {
		return elements[i] = elements[i] || getElement(i);
	}
	
	t.left = function(i) {
		return lefts[i] = lefts[i] === undefined ? e(i).position().left : lefts[i];
	};
	
	t.right = function(i) {
		return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];
	};
	
	t.clear = function() {
		elements = {};
		lefts = {};
		rights = {};
	};
	
}

})(jQuery);

/*
 * Facebox (for jQuery)
 * version: 1.2 (05/05/2008)
 * @requires jQuery v1.2 or later
 *
 * Examples at http://famspam.com/facebox/
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2007, 2008 Chris Wanstrath [ chris@ozmm.org ]
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=facebox]').facebox()
 *  })
 *
 *  <a href="#terms" rel="facebox">Terms</a>
 *    Loads the #terms div in the box
 *
 *  <a href="terms.html" rel="facebox">Terms</a>
 *    Loads the terms.html page in the box
 *
 *  <a href="terms.png" rel="facebox">Terms</a>
 *    Loads the terms.png image in the box
 *
 *
 *  You can also use it programmatically:
 *
 *    jQuery.facebox('some html')
 *    jQuery.facebox('some html', 'my-groovy-style')
 *
 *  The above will open a facebox with "some html" as the content.
 *
 *    jQuery.facebox(function($) {
 *      $.get('blah.html', function(data) { $.facebox(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The facebox function can also display an ajax page, an image, or the contents of a div:
 *
 *    jQuery.facebox({ ajax: 'remote.html' })
 *    jQuery.facebox({ ajax: 'remote.html' }, 'my-groovy-style')
 *    jQuery.facebox({ image: 'stairs.jpg' })
 *    jQuery.facebox({ image: 'stairs.jpg' }, 'my-groovy-style')
 *    jQuery.facebox({ div: '#box' })
 *    jQuery.facebox({ div: '#box' }, 'my-groovy-style')
 *
 *  Want to close the facebox?  Trigger the 'close.facebox' document event:
 *
 *    jQuery(document).trigger('close.facebox')
 *
 *  Facebox also has a bunch of other hooks:
 *
 *    loading.facebox
 *    beforeReveal.facebox
 *    reveal.facebox (aliased as 'afterReveal.facebox')
 *    init.facebox
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('reveal.facebox', function() { ...stuff to do after the facebox and contents are revealed... })
 *
 */
(function($) {
  $.facebox = function(data, klass) {
    $.facebox.loading()

    if (data.ajax) fillFaceboxFromAjax(data.ajax, klass)
    else if (data.image) fillFaceboxFromImage(data.image, klass)
    else if (data.div) fillFaceboxFromHref(data.div, klass)
    else if ($.isFunction(data)) data.call($)
    else $.facebox.reveal(data, klass)
  }

  /*
   * Public, $.facebox methods
   */

  $.extend($.facebox, {
    settings: {
      opacity      : 0.2,
      overlay      : true,
      loadingImage : '/facebox/loading.gif',
      closeImage   : '/facebox/closelabel.png',
      imageTypes   : [ 'png', 'jpg', 'jpeg', 'gif' ],
      faceboxHtml  : '\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <div class="content"> \
        </div> \
        <a href="#" class="close"><img src="/facebox/closelabel.png" title="close" class="close_image" /></a> \
      </div> \
    </div>'
    },

    loading: function() {
      init()
      if ($('#facebox .loading').length == 1) return true
      showOverlay()

      $('#facebox .content').empty()
      $('#facebox .body').children().hide().end().
        append('<div class="loading"><img src="'+$.facebox.settings.loadingImage+'"/></div>')

      $('#facebox').css({
        top:	getPageScroll()[1] + (getPageHeight() / 10),
        left:	$(window).width() / 2 - 205
      }).show()

      $(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27) $.facebox.close()
        return true
      })
      $(document).trigger('loading.facebox')
    },

    reveal: function(data, klass) {
      $(document).trigger('beforeReveal.facebox')
      if (klass) $('#facebox .content').addClass(klass)
      $('#facebox .content').append(data)
      $('#facebox .loading').remove()
      $('#facebox .body').children().fadeIn('normal')
      $('#facebox').css('left', $(window).width() / 2 - ($('#facebox .popup').width() / 2))
      $(document).trigger('reveal.facebox').trigger('afterReveal.facebox')
    },

    close: function() {
      $(document).trigger('close.facebox')
      return false
    }
  })

  /*
   * Public, $.fn methods
   */

  $.fn.facebox = function(settings) {
    if ($(this).length == 0) return

    init(settings)

    function clickHandler() {
      $.facebox.loading(true)

      // support for rel="facebox.inline_popup" syntax, to add a class
      // also supports deprecated "facebox[.inline_popup]" syntax
      var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
      if (klass) klass = klass[1]

      fillFaceboxFromHref(this.href, klass)
      return false
    }

    return this.bind('click.facebox', clickHandler)
  }

  /*
   * Private methods
   */

  // called one time to setup facebox on this page
  function init(settings) {
    if ($.facebox.settings.inited) return true
    else $.facebox.settings.inited = true

    $(document).trigger('init.facebox')
    makeCompatible()

    var imageTypes = $.facebox.settings.imageTypes.join('|')
    $.facebox.settings.imageTypesRegexp = new RegExp('\.(' + imageTypes + ')$', 'i')

    if (settings) $.extend($.facebox.settings, settings)
    $('body').append($.facebox.settings.faceboxHtml)

    var preload = [ new Image(), new Image() ]
    preload[0].src = $.facebox.settings.closeImage
    preload[1].src = $.facebox.settings.loadingImage

    $('#facebox').find('.b:first, .bl').each(function() {
      preload.push(new Image())
      preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
    })

    $('#facebox .close').click($.facebox.close)
    $('#facebox .close_image').attr('src', $.facebox.settings.closeImage)
  }

  // getPageScroll() by quirksmode.com
  function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
  }

  // Adapted from getPageSize() by quirksmode.com
  function getPageHeight() {
    var windowHeight
    if (self.innerHeight) {	// all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight
  }

  // Backwards compatibility
  function makeCompatible() {
    var $s = $.facebox.settings

    $s.loadingImage = $s.loading_image || $s.loadingImage
    $s.closeImage = $s.close_image || $s.closeImage
    $s.imageTypes = $s.image_types || $s.imageTypes
    $s.faceboxHtml = $s.facebox_html || $s.faceboxHtml
  }

  // Figures out what you want to display and displays it
  // formats are:
  //     div: #id
  //   image: blah.extension
  //    ajax: anything else
  function fillFaceboxFromHref(href, klass) {
    // div
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0]
      var target = href.replace(url,'')
      if (target == '#') return
      $.facebox.reveal($(target).html(), klass)

    // image
    } else if (href.match($.facebox.settings.imageTypesRegexp)) {
      fillFaceboxFromImage(href, klass)
    // ajax
    } else {
      fillFaceboxFromAjax(href, klass)
    }
  }

  function fillFaceboxFromImage(href, klass) {
    var image = new Image()
    image.onload = function() {
      $.facebox.reveal('<div class="image"><img src="' + image.src + '" /></div>', klass)
    }
    image.src = href
  }

  function fillFaceboxFromAjax(href, klass) {
    $.get(href, function(data) { $.facebox.reveal(data, klass) })
  }

  function skipOverlay() {
    return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null
  }

  function showOverlay() {
    if (skipOverlay()) return

    if ($('#facebox_overlay').length == 0)
      $("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')

    $('#facebox_overlay').hide().addClass("facebox_overlayBG")
      .css('opacity', $.facebox.settings.opacity)
      .click(function() { $(document).trigger('close.facebox') })
      .fadeIn(200)
    return false
  }

  function hideOverlay() {
    if (skipOverlay()) return

    $('#facebox_overlay').fadeOut(200, function(){
      $("#facebox_overlay").removeClass("facebox_overlayBG")
      $("#facebox_overlay").addClass("facebox_hide")
      $("#facebox_overlay").remove()
    })

    return false
  }

  /*
   * Bindings
   */

  $(document).bind('close.facebox', function() {
    $(document).unbind('keydown.facebox')
    $('#facebox').fadeOut(function() {
      $('#facebox .content').removeClass().addClass('content')
      hideOverlay()
      $('#facebox .loading').remove()
    })
  })

})(jQuery);


// Copyright 2009 Asa Wilson
// Available under both the GPL and MIT licenses, see license files for more details.

if (typeof jQuery == 'undefined') throw("jQuery could not be found.");

(function($){
  
  $.extend({
    DirtyForm: {
      debug         : false, // print out debug info? works best with firebug.
      changedClass  : 'changed',
      addClassOn    : new Function,
      hasFirebug    : "console" in window && "firebug" in window.console,
      includeHidden : false,
      monitorEvent  : 'blur',
      logger        : function(msg){
                        if(this.debug){
                          msg = "DirtyForm: " + msg;
                          this.hasFirebug ? console.log(msg) : alert(msg);
                        }
                      },
      input_value   : function(input){
                        if(input.is(':radio,:checkbox')){
                          return typeof(input.attr("checked")) == "undefined" ? false : input.attr("checked");
                        } else {
                          return input.val();
                        }
                      }, 
      input_reset   : function(input){
                        if(input.is(':radio,:checkbox')){
                          input.attr('checked', input.data('initial'));
                        } else {
                          input.val(input.data('initial'));
                        }
                        input.trigger($.DirtyForm.monitorEvent + '.dirty_form')
                      },
      input_checker : function(event){
                        var npt = $(event.target), form = npt.parents('.dirtyform'), initial = npt.data("initial"), current = $.DirtyForm.input_value(npt), inputs = event.data.inputs, settings = event.data.settings
                        
                        if(initial != current) {
                          $.DirtyForm.logger("Form "+form.attr('class')+" is dirty. Changed from \""+initial+"\" to \""+current+"\"");
                          $.DirtyForm.logger("Class: "+settings.changedClass);
                          form
                            .data("dirty", true)                                      //TODO: check if we can use an expando property here
                            .trigger("dirty", {target: npt, from: initial, to: current, preventDefault: function(){return false}, stopPropagation: function(){return false}, bubbles: true, cancelable: true});
                          npt
                            .add(settings.addClassOn.apply(npt))
                            .addClass(settings.changedClass);                          // TODO: maybe we need to check if the class exists already?
                            
                        } else {
                          npt
                            .add(settings.addClassOn.apply(npt))
                            .removeClass(settings.changedClass)
                        }
                        
                        if(!inputs.filter('.' + settings.changedClass).size()){
                          form
                            .data("dirty",false)
                            .trigger("clean", {target: npt, preventDefault: function(){return false}, stopPropagation: function(){return false}, bubbles: true, cancelable: true});
                        }
                      }
    }
    
  });
    
  $.fn.clean_form = function(){
    return this.each(function(){
      var dirtyform = $(this)
      if(dirtyform.is('form')) {
        dirtyform.reset().find('.changed:input').each(function(){
          $(this).trigger($.DirtyForm.monitorEvent + '.dirty_form');
        });
      } else {
        var selectorFilters = ':submit,:password,:button';
        if (!settings.includeHidden) {
          selectorFilters = ':hidden,' + selectorFilters;
        }

        $(':input:not(' + selectorFilters + ')', dirtyform).each(function(){
          $.DirtyForm.input_reset($(this));
        });
      }
    })
  }
  
  // will flag a form as dirty if something is changed on the form.
  $.fn.dirty_form = function(){
    var defaults = {
      changedClass  : $.DirtyForm.changedClass,
      addClassOn    : $.DirtyForm.addClassOn,
      dynamic       : $.isFunction($.livequery)
    }
    
    var settings = $.extend(defaults, arguments.length != 0 ? arguments[0] : {});

    return this.each(function(){
      var form = $(this);

      var selectorFilters = ':submit,:password,:button';
      if (!settings.includeHidden) {
        selectorFilters = ':hidden,' + selectorFilters;
      }

      var inputs = $(':input:not(' + selectorFilters + ')', form);

      if( form.hasClass('dirtyform') ){
        // unbind all DirtyForms specific events, then proceed to re-add them
        form.unbind("dirty").unbind("clean");
        inputs.unbind($.DirtyForm.monitorEvent + ".dirty_form");
      }else{
        // mark it as a dirtyform
        $(this).addClass('dirtyform')
      }

      $.DirtyForm.logger('Storing initial data for form ' + form.get(0));
      
      if (settings.dynamic) {
        inputs.livequery(function(){ // use livequery to perform these functions on the new elements added to the form
          $(this)
            .bind($.DirtyForm.monitorEvent + ".dirty_form", {inputs: inputs, settings: settings}, $.DirtyForm.input_checker)
            .data('initial', $.DirtyForm.input_value($(this)))
        });
      }else {
        inputs.each(function(){
          $(this)
            .bind($.DirtyForm.monitorEvent + ".dirty_form", {inputs: inputs, settings: settings}, $.DirtyForm.input_checker)
            .data("initial", $.DirtyForm.input_value($(this)));
        });
      }
    });
  };
  
  
  // this is meant for selecting links that will warn about proceeding if there are any dirty forms on the page
  $.fn.dirty_stopper = function(){
    var defaults = {
      dialog : {
        title: "Warning: Unsaved Changes!",
        height: 300,
        width: 500,
        modal: true,
        resizeable: false,
        autoResize: false,
        overlay: {backgroundColor: "black", opacity: 0.5}
      },
      message : '<br/><p>You have changed form data without saving. All of your changes will be lost.</p><p>Are you sure you want to proceed?</p>'
    }
    
    var settings = $.extend(true, defaults, arguments.length != 0 ? arguments[0] : {});
    
    $.DirtyForm.logger("Setting dirty stoppers")    
    
    return this.each(function(){
      var stopper = $(this);
      
      if ($(this).parents('.ui-tabs-nav').length > 0){
        // FIXME: not sure what the comment below is actually saying. "Unchaining ... made it NOT work"?? (dvd, 03-02-2009)
        // Unchaining these tabs calls made the tab links not work
        var tabs = $(this).parents('.ui-tabs-nav')
        tabs.find('a').unbind('click.dirty_form')
        tabs.unbind('tabsselect.dirty_form')
        tabs.bind('tabsselect.dirty_form', function(event, ui){
          if($('.dirtyform').are_dirty()) {
            event.preventDefault();
            var div = $("<div id='dirty_stopper_dialog'/>").appendTo(document.body)
            var href = $(this).attr('href')
            div.dialog($.extend(settings.dialog, {
              buttons: {
                Proceed: function(){
                  var selected_id = $(ui.tab).parent().siblings('.ui-tabs-selected').find('a').attr('href');
                  // reset the form in the selected tab and make sure it cleans up after itself
                  $('.dirtyform', selected_id).clean_form();
                    
                  // select the tab now that the old tab is clean
                  tabs.tabs('select', $(ui.tab).attr('href'));
                  
                  // close the dialog with fire
                  $(this).dialog('destroy').remove()
                },
                Cancel: function(){$(this).dialog('destroy').remove()}
              }
            })).dialog("moveToTop").append(settings.message);
            // div.append(settings.message);
            return false
          }
        })
      } else {
        stopper.unbind('click.dirty_form')
        stopper.bind('click.dirty_form', function(event){
          if($('.dirtyform').are_dirty()) {
            event.preventDefault();
            var div = $("<div id='dirty_stopper_dialog'/>").appendTo(document.body),
                href = $(this).attr('href');
            div.dialog($.extend({buttons: {
                  Proceed:function(){window.location = href},
                  Cancel:function(){$(this).dialog('destroy').remove(); return false}
                }
              }, settings.dialog)).dialog("moveToTop").append(settings.message);
          }
        });
      }
    });
  }
  
  // not chainable
  // returns false if any of the forms on the page are dirty
  $.fn.are_dirty = function (){
    var dirty = false
    this.each(function(){
      if($(this).data('dirty')) {
        dirty = true;
      }
    })
    return dirty
  }
  
  // This is just for testing purposes...
  $.fn.dirty_checker = function(){    
    $.DirtyForm.logger("Setting dirty checkers!")
    
    return this.each(function(){
      checker = $(this);
      checker.click(function(){
        if($("form").are_dirty()) {
          alert("Dirty Form!!");
        } else {
          alert("Clean Form ...phew!");
        }
      });
    });
  }
  
  // Shortcut to bind a handler to the "ondirty" event
  $.fn.extend({
    dirty: function(fn) {
  		return this.bind('dirty', fn);
  	},
  	clean: function(fn) {
  		return this.bind('clean', fn);
  	}
  });
})(jQuery);
