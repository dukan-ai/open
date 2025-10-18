(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Qg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bf={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function zS(){if(W_)return xo;W_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return xo.Fragment=e,xo.jsx=i,xo.jsxs=i,xo}var q_;function BS(){return q_||(q_=1,Bf.exports=zS()),Bf.exports}var cr=BS(),If={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function IS(){if(Y_)return te;Y_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(U,et,gt){this.props=U,this.context=et,this.refs=M,this.updater=gt||A}v.prototype.isReactComponent={},v.prototype.setState=function(U,et){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,et,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function B(){}B.prototype=v.prototype;function w(U,et,gt){this.props=U,this.context=et,this.refs=M,this.updater=gt||A}var P=w.prototype=new B;P.constructor=w,C(P,v.prototype),P.isPureReactComponent=!0;var nt=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function D(U,et,gt){var W=gt.ref;return{$$typeof:o,type:U,key:et,ref:W!==void 0?W:null,props:gt}}function R(U,et){return D(U.type,et,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function lt(U){var et={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return et[gt]})}var st=/\/+/g;function pt(U,et){return typeof U=="object"&&U!==null&&U.key!=null?lt(""+U.key):et.toString(36)}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(et){U.status==="pending"&&(U.status="fulfilled",U.value=et)},function(et){U.status==="pending"&&(U.status="rejected",U.reason=et)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,et,gt,W,ot){var St=typeof U;(St==="undefined"||St==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(St){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case o:case e:Mt=!0;break;case g:return Mt=U._init,L(Mt(U._payload),et,gt,W,ot)}}if(Mt)return ot=ot(U),Mt=W===""?"."+pt(U,0):W,nt(ot)?(gt="",Mt!=null&&(gt=Mt.replace(st,"$&/")+"/"),L(ot,et,gt,"",function(ee){return ee})):ot!=null&&(G(ot)&&(ot=R(ot,gt+(ot.key==null||U&&U.key===ot.key?"":(""+ot.key).replace(st,"$&/")+"/")+Mt)),et.push(ot)),1;Mt=0;var Ht=W===""?".":W+":";if(nt(U))for(var Ft=0;Ft<U.length;Ft++)W=U[Ft],St=Ht+pt(W,Ft),Mt+=L(W,et,gt,St,ot);else if(Ft=y(U),typeof Ft=="function")for(U=Ft.call(U),Ft=0;!(W=U.next()).done;)W=W.value,St=Ht+pt(W,Ft++),Mt+=L(W,et,gt,St,ot);else if(St==="object"){if(typeof U.then=="function")return L(ft(U),et,gt,W,ot);throw et=String(U),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function q(U,et,gt){if(U==null)return U;var W=[],ot=0;return L(U,W,"","",function(St){return et.call(gt,St,ot++)}),W}function Z(U){if(U._status===-1){var et=U._result;et=et(),et.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=et)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Tt={map:q,forEach:function(U,et,gt){q(U,function(){et.apply(this,arguments)},gt)},count:function(U){var et=0;return q(U,function(){et++}),et},toArray:function(U){return q(U,function(et){return et})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return te.Activity=S,te.Children=Tt,te.Component=v,te.Fragment=i,te.Profiler=l,te.PureComponent=w,te.StrictMode=r,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,te.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},te.cache=function(U){return function(){return U.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(U,et,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var W=C({},U.props),ot=U.key;if(et!=null)for(St in et.key!==void 0&&(ot=""+et.key),et)!Q.call(et,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&et.ref===void 0||(W[St]=et[St]);var St=arguments.length-2;if(St===1)W.children=gt;else if(1<St){for(var Mt=Array(St),Ht=0;Ht<St;Ht++)Mt[Ht]=arguments[Ht+2];W.children=Mt}return D(U.type,ot,W)},te.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},te.createElement=function(U,et,gt){var W,ot={},St=null;if(et!=null)for(W in et.key!==void 0&&(St=""+et.key),et)Q.call(et,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ot[W]=et[W]);var Mt=arguments.length-2;if(Mt===1)ot.children=gt;else if(1<Mt){for(var Ht=Array(Mt),Ft=0;Ft<Mt;Ft++)Ht[Ft]=arguments[Ft+2];ot.children=Ht}if(U&&U.defaultProps)for(W in Mt=U.defaultProps,Mt)ot[W]===void 0&&(ot[W]=Mt[W]);return D(U,St,ot)},te.createRef=function(){return{current:null}},te.forwardRef=function(U){return{$$typeof:d,render:U}},te.isValidElement=G,te.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},te.memo=function(U,et){return{$$typeof:p,type:U,compare:et===void 0?null:et}},te.startTransition=function(U){var et=O.T,gt={};O.T=gt;try{var W=U(),ot=O.S;ot!==null&&ot(gt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(H,yt)}catch(St){yt(St)}finally{et!==null&&gt.types!==null&&(et.types=gt.types),O.T=et}},te.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},te.use=function(U){return O.H.use(U)},te.useActionState=function(U,et,gt){return O.H.useActionState(U,et,gt)},te.useCallback=function(U,et){return O.H.useCallback(U,et)},te.useContext=function(U){return O.H.useContext(U)},te.useDebugValue=function(){},te.useDeferredValue=function(U,et){return O.H.useDeferredValue(U,et)},te.useEffect=function(U,et){return O.H.useEffect(U,et)},te.useEffectEvent=function(U){return O.H.useEffectEvent(U)},te.useId=function(){return O.H.useId()},te.useImperativeHandle=function(U,et,gt){return O.H.useImperativeHandle(U,et,gt)},te.useInsertionEffect=function(U,et){return O.H.useInsertionEffect(U,et)},te.useLayoutEffect=function(U,et){return O.H.useLayoutEffect(U,et)},te.useMemo=function(U,et){return O.H.useMemo(U,et)},te.useOptimistic=function(U,et){return O.H.useOptimistic(U,et)},te.useReducer=function(U,et,gt){return O.H.useReducer(U,et,gt)},te.useRef=function(U){return O.H.useRef(U)},te.useState=function(U){return O.H.useState(U)},te.useSyncExternalStore=function(U,et,gt){return O.H.useSyncExternalStore(U,et,gt)},te.useTransition=function(){return O.H.useTransition()},te.version="19.2.0",te}var Z_;function Qh(){return Z_||(Z_=1,If.exports=IS()),If.exports}var pu=Qh();const FS=Qg(pu);var Ff={exports:{}},Mo={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function HS(){return j_||(j_=1,(function(o){function e(L,q){var Z=L.length;L.push(q);t:for(;0<Z;){var yt=Z-1>>>1,Tt=L[yt];if(0<l(Tt,q))L[yt]=q,L[Z]=Tt,Z=yt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],Z=L.pop();if(Z!==q){L[0]=Z;t:for(var yt=0,Tt=L.length,U=Tt>>>1;yt<U;){var et=2*(yt+1)-1,gt=L[et],W=et+1,ot=L[W];if(0>l(gt,Z))W<Tt&&0>l(ot,gt)?(L[yt]=ot,L[W]=Z,yt=W):(L[yt]=gt,L[et]=Z,yt=et);else if(W<Tt&&0>l(ot,Z))L[yt]=ot,L[W]=Z,yt=W;else break t}}return q}function l(L,q){var Z=L.sortIndex-q.sortIndex;return Z!==0?Z:L.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,S=null,x=3,y=!1,A=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=L)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function nt(L){if(C=!1,P(L),!A)if(i(m)!==null)A=!0,H||(H=!0,lt());else{var q=i(p);q!==null&&ft(nt,q.startTime-L)}}var H=!1,O=-1,Q=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<Q)}function G(){if(M=!1,H){var L=o.unstable_now();D=L;var q=!0;try{t:{A=!1,C&&(C=!1,B(O),O=-1),y=!0;var Z=x;try{e:{for(P(L),S=i(m);S!==null&&!(S.expirationTime>L&&R());){var yt=S.callback;if(typeof yt=="function"){S.callback=null,x=S.priorityLevel;var Tt=yt(S.expirationTime<=L);if(L=o.unstable_now(),typeof Tt=="function"){S.callback=Tt,P(L),q=!0;break e}S===i(m)&&r(m),P(L)}else r(m);S=i(m)}if(S!==null)q=!0;else{var U=i(p);U!==null&&ft(nt,U.startTime-L),q=!1}}break t}finally{S=null,x=Z,y=!1}q=void 0}}finally{q?lt():H=!1}}}var lt;if(typeof w=="function")lt=function(){w(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,pt=st.port2;st.port1.onmessage=G,lt=function(){pt.postMessage(null)}}else lt=function(){v(G,0)};function ft(L,q){O=v(function(){L(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(L){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var Z=x;x=q;try{return L()}finally{x=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=x;x=L;try{return q()}finally{x=Z}},o.unstable_scheduleCallback=function(L,q,Z){var yt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,L){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Z+Tt,L={id:g++,callback:q,priorityLevel:L,startTime:Z,expirationTime:Tt,sortIndex:-1},Z>yt?(L.sortIndex=Z,e(p,L),i(m)===null&&L===i(p)&&(C?(B(O),O=-1):C=!0,ft(nt,Z-yt))):(L.sortIndex=Tt,e(m,L),A||y||(A=!0,H||(H=!0,lt()))),L},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(L){var q=x;return function(){var Z=x;x=q;try{return L.apply(this,arguments)}finally{x=Z}}}})(Gf)),Gf}var K_;function GS(){return K_||(K_=1,Hf.exports=HS()),Hf.exports}var Vf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function VS(){if(Q_)return Mn;Q_=1;var o=Qh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Mn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Mn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Mn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Mn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Mn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Mn.requestFormReset=function(m){r.d.r(m)},Mn.unstable_batchedUpdates=function(m,p){return m(p)},Mn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.2.0",Mn}var J_;function XS(){if(J_)return Vf.exports;J_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vf.exports=VS(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function kS(){if($_)return Mo;$_=1;var o=GS(),e=Qh(),i=XS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,s=f;break}if(E===s){_=!0,s=u,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,s=u;break}if(E===s){_=!0,s=f,a=u;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),w=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case nt:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case w:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ft=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function U(t){return{current:t}}function et(t){0>Tt||(t.current=yt[Tt],yt[Tt]=null,Tt--)}function gt(t,n){Tt++,yt[Tt]=t.current,t.current=n}var W=U(null),ot=U(null),St=U(null),Mt=U(null);function Ht(t,n){switch(gt(St,n),gt(ot,t),gt(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?p_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=p_(n),t=m_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(W),gt(W,t)}function Ft(){et(W),et(ot),et(St)}function ee(t){t.memoizedState!==null&&gt(Mt,t);var n=W.current,a=m_(n,t.type);n!==a&&(gt(ot,t),gt(W,a))}function Le(t){ot.current===t&&(et(W),et(ot)),Mt.current===t&&(et(Mt),_o._currentValue=Z)}var I,Ve;function ue(t){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",Ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+t+Ve}var Se=!1;function Gt(t,n){if(!t||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(at){var J=at}Reflect.construct(t,[],dt)}else{try{dt.call()}catch(at){J=at}t.call(dt.prototype)}}else{try{throw Error()}catch(at){J=at}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(at){if(at&&J&&typeof at.stack=="string")return[at.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var z=_.split(`
`),K=E.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===K.length)for(s=z.length-1,u=K.length-1;1<=s&&0<=u&&z[s]!==K[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==K[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==K[u]){var ut=`
`+z[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ue(a):""}function Xe(t,n){switch(t.tag){case 26:case 27:case 5:return ue(t.type);case 16:return ue("Lazy");case 13:return t.child!==n&&n!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return Gt(t.type,!1);case 11:return Gt(t.type.render,!1);case 1:return Gt(t.type,!0);case 31:return ue("Activity");default:return""}}function Jt(t){try{var n="",a=null;do n+=Xe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var $t=Object.prototype.hasOwnProperty,N=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,it=o.unstable_shouldYield,xt=o.unstable_requestPaint,_t=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,Wt=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,ne=o.unstable_LowPriority,At=o.unstable_IdlePriority,Nt=o.log,he=o.unstable_setDisableYieldValue,jt=null,Ct=null;function Yt(t){if(typeof Nt=="function"&&he(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(jt,t)}catch{}}var Zt=Math.clz32?Math.clz32:bt,Pe=Math.log,V=Math.LN2;function bt(t){return t>>>=0,t===0?32:31-(Pe(t)/V|0)|0}var ht=256,mt=262144,Rt=4194304;function Xt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function oe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Xt(s):(_&=E,_!==0?u=Xt(_):a||(a=E&~t,a!==0&&(u=Xt(a))))):(E=s&~f,E!==0?u=Xt(E):_!==0?u=Xt(_):a||(a=s&~t,a!==0&&(u=Xt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function nn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ge(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Bn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Po(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,K=t.hiddenUpdates;for(a=_&~a;0<a;){var ut=31-Zt(a),dt=1<<ut;E[ut]=0,z[ut]=-1;var J=K[ut];if(J!==null)for(K[ut]=null,ut=0;ut<J.length;ut++){var at=J[ut];at!==null&&(at.lane&=-536870913)}a&=~dt}s!==0&&mi(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function mi(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function gr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function bs(t,n){var a=n&-n;return a=(a&42)!==0?1:vr(a),(a&(t.suspendedLanes|n))!==0?0:a}function vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ta(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rs(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:I_(t.type))}function Ba(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var ai=Math.random().toString(36).slice(2),Ke="__reactFiber$"+ai,gn="__reactProps$"+ai,ea="__reactContainer$"+ai,Cs="__reactEvents$"+ai,b="__reactListeners$"+ai,X="__reactHandles$"+ai,$="__reactResources$"+ai,tt="__reactMarker$"+ai;function Y(t){delete t[Ke],delete t[gn],delete t[Cs],delete t[b],delete t[X]}function Et(t){var n=t[Ke];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ea]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=y_(t);t!==null;){if(a=t[Ke])return a;t=y_(t)}return n}t=a,a=t.parentNode}return null}function wt(t){if(t=t[Ke]||t[ea]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Pt(t){var n=t[$];return n||(n=t[$]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function zt(t){t[tt]=!0}var Qt=new Set,qt={};function le(t,n){Te(t,n),Te(t+"Capture",n)}function Te(t,n){for(qt[t]=n,t=0;t<n.length;t++)Qt.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vn={},ve={};function Vt(t){return $t.call(ve,t)?!0:$t.call(vn,t)?!1:Fe.test(t)?ve[t]=!0:(vn[t]=!0,!1)}function ke(t,n,a){if(Vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function me(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function an(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ws(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function He(t){if(!t._valueTracker){var n=Sn(t)?"checked":"value";t._valueTracker=ws(t,n,""+t[n])}}function ri(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Sn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var bn=/[\n"\\]/g;function xn(t){return t.replace(bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ds(t,n,a,s,u,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+an(n)):t.value!==""+an(n)&&(t.value=""+an(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Uu(t,_,an(n)):a!=null?Uu(t,_,an(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+an(E):t.removeAttribute("name")}function Us(t,n,a,s,u,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){He(t);return}a=a!=null?""+an(a):"",n=n!=null?""+an(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),He(t)}function Uu(t,n,a){n==="number"&&na(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sr(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+an(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ud(t,n,a){if(n!=null&&(n=""+an(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+an(a):""}function cd(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=an(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),He(t)}function xr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Uv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&fd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&fd(t,f,n[f])}function Lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(t){return Nv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ai(){}var Nu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mr=null,yr=null;function dd(t){var n=wt(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ds(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[gn]||null;if(!u)throw Error(r(90));Ds(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ri(s)}break t;case"textarea":ud(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sr(t,!!a.multiple,n,!1)}}}var Pu=!1;function pd(t,n,a){if(Pu)return t(n,a);Pu=!0;try{var s=t(n);return s}finally{if(Pu=!1,(Mr!==null||yr!==null)&&(El(),Mr&&(n=Mr,t=yr,yr=Mr=null,dd(n),t)))for(n=0;n<t.length;n++)dd(t[n])}}function Ls(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=!1;if(bi)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{zu=!1}var ia=null,Bu=null,Bo=null;function md(){if(Bo)return Bo;var t,n=Bu,a=n.length,s,u="value"in ia?ia.value:ia.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return Bo=u.slice(t,1<s?1-s:void 0)}function Io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function _d(){return!1}function Rn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fo:_d,this.isPropagationStopped=_d,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=Rn(Ia),Os=S({},Ia,{view:0,detail:0}),Ov=Rn(Os),Iu,Fu,Ps,Go=S({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(Iu=t.screenX-Ps.screenX,Fu=t.screenY-Ps.screenY):Fu=Iu=0,Ps=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),gd=Rn(Go),Pv=S({},Go,{dataTransfer:0}),zv=Rn(Pv),Bv=S({},Os,{relatedTarget:0}),Hu=Rn(Bv),Iv=S({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Rn(Iv),Hv=S({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gv=Rn(Hv),Vv=S({},Ia,{data:0}),vd=Rn(Vv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Wv[t])?!!n[t]:!1}function Gu(){return qv}var Yv=S({},Os,{key:function(t){if(t.key){var n=Xv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=Rn(Yv),jv=S({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=Rn(jv),Kv=S({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Qv=Rn(Kv),Jv=S({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=Rn(Jv),t0=S({},Go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=Rn(t0),n0=S({},Ia,{newState:0,oldState:0}),i0=Rn(n0),a0=[9,13,27,32],Vu=bi&&"CompositionEvent"in window,zs=null;bi&&"documentMode"in document&&(zs=document.documentMode);var r0=bi&&"TextEvent"in window&&!zs,xd=bi&&(!Vu||zs&&8<zs&&11>=zs),Md=" ",yd=!1;function Ed(t,n){switch(t){case"keyup":return a0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function s0(t,n){switch(t){case"compositionend":return Td(n);case"keypress":return n.which!==32?null:(yd=!0,Md);case"textInput":return t=n.data,t===Md&&yd?null:t;default:return null}}function o0(t,n){if(Er)return t==="compositionend"||!Vu&&Ed(t,n)?(t=md(),Bo=Bu=ia=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xd&&n.locale!=="ko"?null:n.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!l0[t.type]:n==="textarea"}function bd(t,n,a,s){Mr?yr?yr.push(s):yr=[s]:Mr=s,n=Dl(n,"onChange"),0<n.length&&(a=new Ho("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bs=null,Is=null;function u0(t){l_(t,0)}function Vo(t){var n=Ot(t);if(ri(n))return t}function Rd(t,n){if(t==="change")return n}var Cd=!1;if(bi){var Xu;if(bi){var ku="oninput"in document;if(!ku){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),ku=typeof wd.oninput=="function"}Xu=ku}else Xu=!1;Cd=Xu&&(!document.documentMode||9<document.documentMode)}function Dd(){Bs&&(Bs.detachEvent("onpropertychange",Ud),Is=Bs=null)}function Ud(t){if(t.propertyName==="value"&&Vo(Is)){var n=[];bd(n,Is,t,Ou(t)),pd(u0,n)}}function c0(t,n,a){t==="focusin"?(Dd(),Bs=n,Is=a,Bs.attachEvent("onpropertychange",Ud)):t==="focusout"&&Dd()}function f0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(Is)}function h0(t,n){if(t==="click")return Vo(n)}function d0(t,n){if(t==="input"||t==="change")return Vo(n)}function p0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:p0;function Fs(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!$t.call(n,u)||!In(t[u],n[u]))return!1}return!0}function Ld(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,n){var a=Ld(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ld(a)}}function Od(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Od(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=na(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=na(t.document)}return n}function Wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var m0=bi&&"documentMode"in document&&11>=document.documentMode,Tr=null,qu=null,Hs=null,Yu=!1;function zd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yu||Tr==null||Tr!==na(s)||(s=Tr,"selectionStart"in s&&Wu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&Fs(Hs,s)||(Hs=s,s=Dl(qu,"onSelect"),0<s.length&&(n=new Ho("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function Fa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ar={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionrun:Fa("Transition","TransitionRun"),transitionstart:Fa("Transition","TransitionStart"),transitioncancel:Fa("Transition","TransitionCancel"),transitionend:Fa("Transition","TransitionEnd")},Zu={},Bd={};bi&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ha(t){if(Zu[t])return Zu[t];if(!Ar[t])return t;var n=Ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bd)return Zu[t]=n[a];return t}var Id=Ha("animationend"),Fd=Ha("animationiteration"),Hd=Ha("animationstart"),_0=Ha("transitionrun"),g0=Ha("transitionstart"),v0=Ha("transitioncancel"),Gd=Ha("transitionend"),Vd=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function si(t,n){Vd.set(t,n),le(n,[t])}var Xo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Zn=[],br=0,Ku=0;function ko(){for(var t=br,n=Ku=br=0;n<t;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&Xd(a,u,f)}}function Wo(t,n,a,s){Zn[br++]=t,Zn[br++]=n,Zn[br++]=a,Zn[br++]=s,Ku|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Qu(t,n,a,s){return Wo(t,n,a,s),qo(t)}function Ga(t,n){return Wo(t,null,null,n),qo(t)}function Xd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Zt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function qo(t){if(50<lo)throw lo=0,of=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function S0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,n,a,s){return new S0(t,n,a,s)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,n){var a=t.alternate;return a===null?(a=Fn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function kd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yo(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")Ju(t)&&(_=1);else if(typeof t=="string")_=TS(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Fn(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return Va(a.children,u,f,n);case M:_=8,u|=24;break;case v:return t=Fn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case nt:return t=Fn(13,a,n,u),t.elementType=nt,t.lanes=f,t;case H:return t=Fn(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:_=10;break t;case B:_=9;break t;case P:_=11;break t;case O:_=14;break t;case Q:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Fn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Va(t,n,a,s){return t=Fn(7,t,s,n),t.lanes=a,t}function $u(t,n,a){return t=Fn(6,t,null,n),t.lanes=a,t}function Wd(t){var n=Fn(18,null,null,0);return n.stateNode=t,n}function tc(t,n,a){return n=Fn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qd=new WeakMap;function jn(t,n){if(typeof t=="object"&&t!==null){var a=qd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},qd.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Cr=[],wr=0,Zo=null,Gs=0,Kn=[],Qn=0,aa=null,_i=1,gi="";function Ci(t,n){Cr[wr++]=Gs,Cr[wr++]=Zo,Zo=t,Gs=n}function Yd(t,n,a){Kn[Qn++]=_i,Kn[Qn++]=gi,Kn[Qn++]=aa,aa=t;var s=_i;t=gi;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var f=32-Zt(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,_i=1<<32-Zt(n)+u|a<<u|s,gi=f+t}else _i=1<<f|a<<u|s,gi=t}function ec(t){t.return!==null&&(Ci(t,1),Yd(t,1,0))}function nc(t){for(;t===Zo;)Zo=Cr[--wr],Cr[wr]=null,Gs=Cr[--wr],Cr[wr]=null;for(;t===aa;)aa=Kn[--Qn],Kn[Qn]=null,gi=Kn[--Qn],Kn[Qn]=null,_i=Kn[--Qn],Kn[Qn]=null}function Zd(t,n){Kn[Qn++]=_i,Kn[Qn++]=gi,Kn[Qn++]=aa,_i=n.id,gi=n.overflow,aa=t}var hn=null,ze=null,_e=!1,ra=null,Jn=!1,ic=Error(r(519));function sa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vs(jn(n,t)),ic}function jd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ke]=t,n[gn]=s,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<co.length;a++)fe(co[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),Us(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),cd(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||h_(n.textContent,a)?(s.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),s.onScroll!=null&&fe("scroll",n),s.onScrollEnd!=null&&fe("scrollend",n),s.onClick!=null&&(n.onclick=Ai),n=!0):n=!1,n||sa(t,!0)}function Kd(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:hn=hn.return}}function Dr(t){if(t!==hn)return!1;if(!_e)return Kd(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yf(t.type,t.memoizedProps)),a=!a),a&&ze&&sa(t),Kd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ze=M_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ze=M_(t)}else n===27?(n=ze,xa(t.type)?(t=Rf,Rf=null,ze=t):ze=n):ze=hn?ti(t.stateNode.nextSibling):null;return!0}function Xa(){ze=hn=null,_e=!1}function ac(){var t=ra;return t!==null&&(Un===null?Un=t:Un.push.apply(Un,t),ra=null),t}function Vs(t){ra===null?ra=[t]:ra.push(t)}var rc=U(null),ka=null,wi=null;function oa(t,n,a){gt(rc,n._currentValue),n._currentValue=a}function Di(t){t._currentValue=rc.current,et(rc)}function sc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function oc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),sc(f.return,a,t),s||(_=null);break t}f=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),sc(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ur(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=u.type;In(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===Mt.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}u=u.return}t!==null&&oc(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wa(t){ka=t,wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dn(t){return Qd(ka,t)}function Ko(t,n){return ka===null&&Wa(t),Qd(t,n)}function Qd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},wi===null){if(t===null)throw Error(r(308));wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else wi=wi.next=n;return a}var x0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},M0=o.unstable_scheduleCallback,y0=o.unstable_NormalPriority,Qe={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new x0,data:new Map,refCount:0}}function Xs(t){t.refCount--,t.refCount===0&&M0(y0,function(){t.controller.abort()})}var ks=null,uc=0,Lr=0,Nr=null;function E0(t,n){if(ks===null){var a=ks=[];uc=0,Lr=df(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return uc++,n.then(Jd,Jd),n}function Jd(){if(--uc===0&&ks!==null){Nr!==null&&(Nr.status="fulfilled");var t=ks;ks=null,Lr=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function T0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var $d=L.S;L.S=function(t,n){zm=_t(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&E0(t,n),$d!==null&&$d(t,n)};var qa=U(null);function cc(){var t=qa.current;return t!==null?t:Ne.pooledCache}function Qo(t,n){n===null?gt(qa,qa.current):gt(qa,n.pool)}function tp(){var t=cc();return t===null?null:{parent:Qe._currentValue,pool:t}}var Or=Error(r(460)),fc=Error(r(474)),Jo=Error(r(542)),$o={then:function(){}};function ep(t){return t=t.status,t==="fulfilled"||t==="rejected"}function np(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ai,Ai),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t;default:if(typeof n.status=="string")n.then(Ai,Ai);else{if(t=Ne,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t}throw Za=n,Or}}function Ya(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,Or):a}}var Za=null;function ip(){if(Za===null)throw Error(r(459));var t=Za;return Za=null,t}function ap(t){if(t===Or||t===Jo)throw Error(r(483))}var Pr=null,Ws=0;function tl(t){var n=Ws;return Ws+=1,Pr===null&&(Pr=[]),np(Pr,t,n)}function qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rp(t){function n(k,F){if(t){var j=k.deletions;j===null?(k.deletions=[F],k.flags|=16):j.push(F)}}function a(k,F){if(!t)return null;for(;F!==null;)n(k,F),F=F.sibling;return null}function s(k){for(var F=new Map;k!==null;)k.key!==null?F.set(k.key,k):F.set(k.index,k),k=k.sibling;return F}function u(k,F){return k=Ri(k,F),k.index=0,k.sibling=null,k}function f(k,F,j){return k.index=j,t?(j=k.alternate,j!==null?(j=j.index,j<F?(k.flags|=67108866,F):j):(k.flags|=67108866,F)):(k.flags|=1048576,F)}function _(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function E(k,F,j,ct){return F===null||F.tag!==6?(F=$u(j,k.mode,ct),F.return=k,F):(F=u(F,j),F.return=k,F)}function z(k,F,j,ct){var kt=j.type;return kt===C?ut(k,F,j.props.children,ct,j.key):F!==null&&(F.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Q&&Ya(kt)===F.type)?(F=u(F,j.props),qs(F,j),F.return=k,F):(F=Yo(j.type,j.key,j.props,null,k.mode,ct),qs(F,j),F.return=k,F)}function K(k,F,j,ct){return F===null||F.tag!==4||F.stateNode.containerInfo!==j.containerInfo||F.stateNode.implementation!==j.implementation?(F=tc(j,k.mode,ct),F.return=k,F):(F=u(F,j.children||[]),F.return=k,F)}function ut(k,F,j,ct,kt){return F===null||F.tag!==7?(F=Va(j,k.mode,ct,kt),F.return=k,F):(F=u(F,j),F.return=k,F)}function dt(k,F,j){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=$u(""+F,k.mode,j),F.return=k,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case y:return j=Yo(F.type,F.key,F.props,null,k.mode,j),qs(j,F),j.return=k,j;case A:return F=tc(F,k.mode,j),F.return=k,F;case Q:return F=Ya(F),dt(k,F,j)}if(ft(F)||lt(F))return F=Va(F,k.mode,j,null),F.return=k,F;if(typeof F.then=="function")return dt(k,tl(F),j);if(F.$$typeof===w)return dt(k,Ko(k,F),j);el(k,F)}return null}function J(k,F,j,ct){var kt=F!==null?F.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return kt!==null?null:E(k,F,""+j,ct);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return j.key===kt?z(k,F,j,ct):null;case A:return j.key===kt?K(k,F,j,ct):null;case Q:return j=Ya(j),J(k,F,j,ct)}if(ft(j)||lt(j))return kt!==null?null:ut(k,F,j,ct,null);if(typeof j.then=="function")return J(k,F,tl(j),ct);if(j.$$typeof===w)return J(k,F,Ko(k,j),ct);el(k,j)}return null}function at(k,F,j,ct,kt){if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return k=k.get(j)||null,E(F,k,""+ct,kt);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case y:return k=k.get(ct.key===null?j:ct.key)||null,z(F,k,ct,kt);case A:return k=k.get(ct.key===null?j:ct.key)||null,K(F,k,ct,kt);case Q:return ct=Ya(ct),at(k,F,j,ct,kt)}if(ft(ct)||lt(ct))return k=k.get(j)||null,ut(F,k,ct,kt,null);if(typeof ct.then=="function")return at(k,F,j,tl(ct),kt);if(ct.$$typeof===w)return at(k,F,j,Ko(F,ct),kt);el(F,ct)}return null}function Bt(k,F,j,ct){for(var kt=null,xe=null,It=F,ae=F=0,pe=null;It!==null&&ae<j.length;ae++){It.index>ae?(pe=It,It=null):pe=It.sibling;var Me=J(k,It,j[ae],ct);if(Me===null){It===null&&(It=pe);break}t&&It&&Me.alternate===null&&n(k,It),F=f(Me,F,ae),xe===null?kt=Me:xe.sibling=Me,xe=Me,It=pe}if(ae===j.length)return a(k,It),_e&&Ci(k,ae),kt;if(It===null){for(;ae<j.length;ae++)It=dt(k,j[ae],ct),It!==null&&(F=f(It,F,ae),xe===null?kt=It:xe.sibling=It,xe=It);return _e&&Ci(k,ae),kt}for(It=s(It);ae<j.length;ae++)pe=at(It,k,ae,j[ae],ct),pe!==null&&(t&&pe.alternate!==null&&It.delete(pe.key===null?ae:pe.key),F=f(pe,F,ae),xe===null?kt=pe:xe.sibling=pe,xe=pe);return t&&It.forEach(function(Aa){return n(k,Aa)}),_e&&Ci(k,ae),kt}function Kt(k,F,j,ct){if(j==null)throw Error(r(151));for(var kt=null,xe=null,It=F,ae=F=0,pe=null,Me=j.next();It!==null&&!Me.done;ae++,Me=j.next()){It.index>ae?(pe=It,It=null):pe=It.sibling;var Aa=J(k,It,Me.value,ct);if(Aa===null){It===null&&(It=pe);break}t&&It&&Aa.alternate===null&&n(k,It),F=f(Aa,F,ae),xe===null?kt=Aa:xe.sibling=Aa,xe=Aa,It=pe}if(Me.done)return a(k,It),_e&&Ci(k,ae),kt;if(It===null){for(;!Me.done;ae++,Me=j.next())Me=dt(k,Me.value,ct),Me!==null&&(F=f(Me,F,ae),xe===null?kt=Me:xe.sibling=Me,xe=Me);return _e&&Ci(k,ae),kt}for(It=s(It);!Me.done;ae++,Me=j.next())Me=at(It,k,ae,Me.value,ct),Me!==null&&(t&&Me.alternate!==null&&It.delete(Me.key===null?ae:Me.key),F=f(Me,F,ae),xe===null?kt=Me:xe.sibling=Me,xe=Me);return t&&It.forEach(function(PS){return n(k,PS)}),_e&&Ci(k,ae),kt}function De(k,F,j,ct){if(typeof j=="object"&&j!==null&&j.type===C&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case y:t:{for(var kt=j.key;F!==null;){if(F.key===kt){if(kt=j.type,kt===C){if(F.tag===7){a(k,F.sibling),ct=u(F,j.props.children),ct.return=k,k=ct;break t}}else if(F.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Q&&Ya(kt)===F.type){a(k,F.sibling),ct=u(F,j.props),qs(ct,j),ct.return=k,k=ct;break t}a(k,F);break}else n(k,F);F=F.sibling}j.type===C?(ct=Va(j.props.children,k.mode,ct,j.key),ct.return=k,k=ct):(ct=Yo(j.type,j.key,j.props,null,k.mode,ct),qs(ct,j),ct.return=k,k=ct)}return _(k);case A:t:{for(kt=j.key;F!==null;){if(F.key===kt)if(F.tag===4&&F.stateNode.containerInfo===j.containerInfo&&F.stateNode.implementation===j.implementation){a(k,F.sibling),ct=u(F,j.children||[]),ct.return=k,k=ct;break t}else{a(k,F);break}else n(k,F);F=F.sibling}ct=tc(j,k.mode,ct),ct.return=k,k=ct}return _(k);case Q:return j=Ya(j),De(k,F,j,ct)}if(ft(j))return Bt(k,F,j,ct);if(lt(j)){if(kt=lt(j),typeof kt!="function")throw Error(r(150));return j=kt.call(j),Kt(k,F,j,ct)}if(typeof j.then=="function")return De(k,F,tl(j),ct);if(j.$$typeof===w)return De(k,F,Ko(k,j),ct);el(k,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,F!==null&&F.tag===6?(a(k,F.sibling),ct=u(F,j),ct.return=k,k=ct):(a(k,F),ct=$u(j,k.mode,ct),ct.return=k,k=ct),_(k)):a(k,F)}return function(k,F,j,ct){try{Ws=0;var kt=De(k,F,j,ct);return Pr=null,kt}catch(It){if(It===Or||It===Jo)throw It;var xe=Fn(29,It,null,k.mode);return xe.lanes=ct,xe.return=k,xe}finally{}}}var ja=rp(!0),sp=rp(!1),la=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ye&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=qo(t),Xd(t,null,a),n}return Wo(t,s,n,a),qo(t)}function Ys(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,gr(t,a)}}function pc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var mc=!1;function Zs(){if(mc){var t=Nr;if(t!==null)throw t}}function js(t,n,a,s){mc=!1;var u=t.updateQueue;la=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,K=z.next;z.next=null,_===null?f=K:_.next=K,_=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==_&&(E===null?ut.firstBaseUpdate=K:E.next=K,ut.lastBaseUpdate=z))}if(f!==null){var dt=u.baseState;_=0,ut=K=z=null,E=f;do{var J=E.lane&-536870913,at=J!==E.lane;if(at?(de&J)===J:(s&J)===J){J!==0&&J===Lr&&(mc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Kt=E;J=n;var De=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){dt=Bt.call(De,dt,J);break t}dt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,J=typeof Bt=="function"?Bt.call(De,dt,J):Bt,J==null)break t;dt=S({},dt,J);break t;case 2:la=!0}}J=E.callback,J!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[J]:at.push(J))}else at={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(K=ut=at,z=dt):ut=ut.next=at,_|=J;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;at=E,E=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ut===null&&(z=dt),u.baseState=z,u.firstBaseUpdate=K,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),ma|=_,t.lanes=_,t.memoizedState=dt}}function op(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)op(a[t],n)}var zr=U(null),nl=U(0);function up(t,n){t=Fi,gt(nl,t),gt(zr,n),Fi=t|n.baseLanes}function _c(){gt(nl,Fi),gt(zr,zr.current)}function gc(){Fi=nl.current,et(zr),et(nl)}var Hn=U(null),$n=null;function fa(t){var n=t.alternate;gt(Ze,Ze.current&1),gt(Hn,t),$n===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&($n=t)}function vc(t){gt(Ze,Ze.current),gt(Hn,t),$n===null&&($n=t)}function cp(t){t.tag===22?(gt(Ze,Ze.current),gt(Hn,t),$n===null&&($n=t)):ha()}function ha(){gt(Ze,Ze.current),gt(Hn,Hn.current)}function Gn(t){et(Hn),$n===t&&($n=null),et(Ze)}var Ze=U(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Af(a)||bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ui=0,ie=null,Ce=null,Je=null,al=!1,Br=!1,Ka=!1,rl=0,Ks=0,Ir=null,A0=0;function We(){throw Error(r(321))}function Sc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function xc(t,n,a,s,u,f){return Ui=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Yp:Pc,Ka=!1,f=a(s,u),Ka=!1,Br&&(f=hp(n,a,s,u)),fp(t),f}function fp(t){L.H=$s;var n=Ce!==null&&Ce.next!==null;if(Ui=0,Je=Ce=ie=null,al=!1,Ks=0,Ir=null,n)throw Error(r(300));t===null||$e||(t=t.dependencies,t!==null&&jo(t)&&($e=!0))}function hp(t,n,a,s){ie=t;var u=0;do{if(Br&&(Ir=null),Ks=0,Br=!1,25<=u)throw Error(r(301));if(u+=1,Je=Ce=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Zp,f=n(a,s)}while(Br);return f}function b0(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?Qs(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(ie.flags|=1024),n}function Mc(){var t=rl!==0;return rl=0,t}function yc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ec(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}Ui=0,Je=Ce=ie=null,Br=!1,Ks=rl=0,Ir=null}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ie.memoizedState=Je=t:Je=Je.next=t,Je}function je(){if(Ce===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=Je===null?ie.memoizedState:Je.next;if(n!==null)Je=n,Ce=t;else{if(t===null)throw ie.alternate===null?Error(r(467)):Error(r(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Je===null?ie.memoizedState=Je=t:Je=Je.next=t}return Je}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qs(t){var n=Ks;return Ks+=1,Ir===null&&(Ir=[]),t=np(Ir,t,n),n=ie,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Yp:Pc),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qs(t);if(t.$$typeof===w)return dn(t)}throw Error(r(438,String(t)))}function Tc(t){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ie.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sl(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Li(t,n){return typeof n=="function"?n(t):n}function ll(t){var n=je();return Ac(n,Ce,t)}function Ac(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=_=null,z=null,K=n,ut=!1;do{var dt=K.lane&-536870913;if(dt!==K.lane?(de&dt)===dt:(Ui&dt)===dt){var J=K.revertLane;if(J===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),dt===Lr&&(ut=!0);else if((Ui&J)===J){K=K.next,J===Lr&&(ut=!0);continue}else dt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},z===null?(E=z=dt,_=f):z=z.next=dt,ie.lanes|=J,ma|=J;dt=K.action,Ka&&a(f,dt),f=K.hasEagerState?K.eagerState:a(f,dt)}else J={lane:dt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},z===null?(E=z=J,_=f):z=z.next=J,ie.lanes|=dt,ma|=dt;K=K.next}while(K!==null&&K!==n);if(z===null?_=f:z.next=E,!In(f,t.memoizedState)&&($e=!0,ut&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bc(t){var n=je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);In(f,n.memoizedState)||($e=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function dp(t,n,a){var s=ie,u=je(),f=_e;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!In((Ce||u).memoizedState,a);if(_&&(u.memoizedState=a,$e=!0),u=u.queue,wc(_p.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||Je!==null&&Je.memoizedState.tag&1){if(s.flags|=2048,Fr(9,{destroy:void 0},mp.bind(null,s,u,a,n),null),Ne===null)throw Error(r(349));f||(Ui&127)!==0||pp(s,n,a)}return a}function pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=sl(),ie.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mp(t,n,a,s){n.value=a,n.getSnapshot=s,gp(n)&&vp(t)}function _p(t,n,a){return a(function(){gp(n)&&vp(t)})}function gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function vp(t){var n=Ga(t,2);n!==null&&Ln(n,t,2)}function Rc(t){var n=Tn();if(typeof t=="function"){var a=t;if(t=a(),Ka){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n}function Sp(t,n,a,s){return t.baseState=a,Ac(t,Ce,typeof s=="function"?s:Li)}function R0(t,n,a,s,u){if(fl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,xp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function xp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var E=a(u,s),z=L.S;z!==null&&z(_,E),Mp(t,n,E)}catch(K){Cc(t,n,K)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(u,s),Mp(t,n,f)}catch(K){Cc(t,n,K)}}function Mp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){yp(t,n,s)},function(s){return Cc(t,n,s)}):yp(t,n,a)}function yp(t,n,a){n.status="fulfilled",n.value=a,Ep(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,xp(t,a)))}function Cc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Ep(n),n=n.next;while(n!==s)}t.action=null}function Ep(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tp(t,n){return n}function Ap(t,n){if(_e){var a=Ne.formState;if(a!==null){t:{var s=ie;if(_e){if(ze){e:{for(var u=ze,f=Jn;u.nodeType!==8;){if(!f){u=null;break e}if(u=ti(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ze=ti(u.nextSibling),s=u.data==="F!";break t}}sa(s)}s=!1}s&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tp,lastRenderedState:n},a.queue=s,a=kp.bind(null,ie,s),s.dispatch=a,s=Rc(!1),f=Oc.bind(null,ie,!1,s.queue),s=Tn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=R0.bind(null,ie,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function bp(t){var n=je();return Rp(n,Ce,t)}function Rp(t,n,a){if(n=Ac(t,n,Tp)[0],t=ll(Li)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Qs(n)}catch(_){throw _===Or?Jo:_}else s=n;n=je();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ie.flags|=2048,Fr(9,{destroy:void 0},C0.bind(null,u,a),null)),[s,f,t]}function C0(t,n){t.action=n}function Cp(t){var n=je(),a=Ce;if(a!==null)return Rp(n,a,t);je(),n=n.memoizedState,a=je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Fr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ie.updateQueue,n===null&&(n=sl(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function wp(){return je().memoizedState}function ul(t,n,a,s){var u=Tn();ie.flags|=t,u.memoizedState=Fr(1|n,{destroy:void 0},a,s===void 0?null:s)}function cl(t,n,a,s){var u=je();s=s===void 0?null:s;var f=u.memoizedState.inst;Ce!==null&&s!==null&&Sc(s,Ce.memoizedState.deps)?u.memoizedState=Fr(n,f,a,s):(ie.flags|=t,u.memoizedState=Fr(1|n,f,a,s))}function Dp(t,n){ul(8390656,8,t,n)}function wc(t,n){cl(2048,8,t,n)}function w0(t){ie.flags|=4;var n=ie.updateQueue;if(n===null)n=sl(),ie.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Up(t){var n=je().memoizedState;return w0({ref:n,nextImpl:t}),function(){if((ye&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Lp(t,n){return cl(4,2,t,n)}function Np(t,n){return cl(4,4,t,n)}function Op(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pp(t,n,a){a=a!=null?a.concat([t]):null,cl(4,4,Op.bind(null,n,t),a)}function Dc(){}function zp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Sc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Bp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Sc(n,s[1]))return s[0];if(s=t(),Ka){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Uc(t,n,a){return a===void 0||(Ui&1073741824)!==0&&(de&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Im(),ie.lanes|=t,ma|=t,a)}function Ip(t,n,a,s){return In(a,n)?a:zr.current!==null?(t=Uc(t,a,s),In(t,n)||($e=!0),t):(Ui&42)===0||(Ui&1073741824)!==0&&(de&261930)===0?($e=!0,t.memoizedState=a):(t=Im(),ie.lanes|=t,ma|=t,n)}function Fp(t,n,a,s,u){var f=q.p;q.p=f!==0&&8>f?f:8;var _=L.T,E={};L.T=E,Oc(t,!1,n,a);try{var z=u(),K=L.S;if(K!==null&&K(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=T0(z,s);Js(t,n,ut,kn(t))}else Js(t,n,s,kn(t))}catch(dt){Js(t,n,{then:function(){},status:"rejected",reason:dt},kn())}finally{q.p=f,_!==null&&E.types!==null&&(_.types=E.types),L.T=_}}function D0(){}function Lc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Hp(t).queue;Fp(t,u,n,Z,a===null?D0:function(){return Gp(t),a(s)})}function Hp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gp(t){var n=Hp(t);n.next===null&&(n=t.alternate.memoizedState),Js(t,n.next.queue,{},kn())}function Nc(){return dn(_o)}function Vp(){return je().memoizedState}function Xp(){return je().memoizedState}function U0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=ua(a);var s=ca(n,t,a);s!==null&&(Ln(s,n,a),Ys(s,n,a)),n={cache:lc()},t.payload=n;return}n=n.return}}function L0(t,n,a){var s=kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)?Wp(n,a):(a=Qu(t,n,a,s),a!==null&&(Ln(a,t,s),qp(a,n,s)))}function kp(t,n,a){var s=kn();Js(t,n,a,s)}function Js(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(t))Wp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(u.hasEagerState=!0,u.eagerState=E,In(E,_))return Wo(t,n,u,0),Ne===null&&ko(),!1}catch{}finally{}if(a=Qu(t,n,u,s),a!==null)return Ln(a,t,s),qp(a,n,s),!0}return!1}function Oc(t,n,a,s){if(s={lane:2,revertLane:df(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(n)throw Error(r(479))}else n=Qu(t,a,s,2),n!==null&&Ln(n,t,2)}function fl(t){var n=t.alternate;return t===ie||n!==null&&n===ie}function Wp(t,n){Br=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,gr(t,a)}}var $s={readContext:dn,use:ol,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};$s.useEffectEvent=We;var Yp={readContext:dn,use:ol,useCallback:function(t,n){return Tn().memoizedState=[t,n===void 0?null:n],t},useContext:dn,useEffect:Dp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ul(4194308,4,Op.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ul(4194308,4,t,n)},useInsertionEffect:function(t,n){ul(4,2,t,n)},useMemo:function(t,n){var a=Tn();n=n===void 0?null:n;var s=t();if(Ka){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Tn();if(a!==void 0){var u=a(n);if(Ka){Yt(!0);try{a(n)}finally{Yt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=L0.bind(null,ie,t),[s.memoizedState,t]},useRef:function(t){var n=Tn();return t={current:t},n.memoizedState=t},useState:function(t){t=Rc(t);var n=t.queue,a=kp.bind(null,ie,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Dc,useDeferredValue:function(t,n){var a=Tn();return Uc(a,t,n)},useTransition:function(){var t=Rc(!1);return t=Fp.bind(null,ie,t.queue,!0,!1),Tn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ie,u=Tn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ne===null)throw Error(r(349));(de&127)!==0||pp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dp(_p.bind(null,s,f,t),[t]),s.flags|=2048,Fr(9,{destroy:void 0},mp.bind(null,s,f,a,n),null),a},useId:function(){var t=Tn(),n=Ne.identifierPrefix;if(_e){var a=gi,s=_i;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=A0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nc,useFormState:Ap,useActionState:Ap,useOptimistic:function(t){var n=Tn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Oc.bind(null,ie,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tc,useCacheRefresh:function(){return Tn().memoizedState=U0.bind(null,ie)},useEffectEvent:function(t){var n=Tn(),a={impl:t};return n.memoizedState=a,function(){if((ye&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Pc={readContext:dn,use:ol,useCallback:zp,useContext:dn,useEffect:wc,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Bp,useReducer:ll,useRef:wp,useState:function(){return ll(Li)},useDebugValue:Dc,useDeferredValue:function(t,n){var a=je();return Ip(a,Ce.memoizedState,t,n)},useTransition:function(){var t=ll(Li)[0],n=je().memoizedState;return[typeof t=="boolean"?t:Qs(t),n]},useSyncExternalStore:dp,useId:Vp,useHostTransitionStatus:Nc,useFormState:bp,useActionState:bp,useOptimistic:function(t,n){var a=je();return Sp(a,Ce,t,n)},useMemoCache:Tc,useCacheRefresh:Xp};Pc.useEffectEvent=Up;var Zp={readContext:dn,use:ol,useCallback:zp,useContext:dn,useEffect:wc,useImperativeHandle:Pp,useInsertionEffect:Lp,useLayoutEffect:Np,useMemo:Bp,useReducer:bc,useRef:wp,useState:function(){return bc(Li)},useDebugValue:Dc,useDeferredValue:function(t,n){var a=je();return Ce===null?Uc(a,t,n):Ip(a,Ce.memoizedState,t,n)},useTransition:function(){var t=bc(Li)[0],n=je().memoizedState;return[typeof t=="boolean"?t:Qs(t),n]},useSyncExternalStore:dp,useId:Vp,useHostTransitionStatus:Nc,useFormState:Cp,useActionState:Cp,useOptimistic:function(t,n){var a=je();return Ce!==null?Sp(a,Ce,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tc,useCacheRefresh:Xp};Zp.useEffectEvent=Up;function zc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=kn(),u=ua(s);u.payload=n,a!=null&&(u.callback=a),n=ca(t,u,s),n!==null&&(Ln(n,t,s),Ys(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=kn(),u=ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ca(t,u,s),n!==null&&(Ln(n,t,s),Ys(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=ca(t,s,a),n!==null&&(Ln(n,t,a),Ys(n,t,a))}};function jp(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Fs(a,s)||!Fs(u,f):!0}function Kp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Bc.enqueueReplaceState(n,n.state,null)}function Qa(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Qp(t){Xo(t)}function Jp(t){console.error(t)}function $p(t){Xo(t)}function hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ic(t,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,n)},a}function em(t){return t=ua(t),t.tag=3,t}function nm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){tm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){tm(n,a,s),typeof u!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function N0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ur(n,a,u,!0),a=Hn.current,a!==null){switch(a.tag){case 31:case 13:return $n===null?Tl():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===$o?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),cf(t,s,u)),!1;case 22:return a.flags|=65536,s===$o?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),cf(t,s,u)),!1}throw Error(r(435,a.tag))}return cf(t,s,u),Tl(),!1}if(_e)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==ic&&(t=Error(r(422),{cause:s}),Vs(jn(t,a)))):(s!==ic&&(n=Error(r(423),{cause:s}),Vs(jn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=jn(s,a),u=Ic(t.stateNode,s,u),pc(t,u),qe!==4&&(qe=2)),!1;var f=Error(r(520),{cause:s});if(f=jn(f,a),oo===null?oo=[f]:oo.push(f),qe!==4&&(qe=2),n===null)return!0;s=jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ic(a.stateNode,s,t),pc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=em(u),nm(u,t,a,s),pc(a,u),!1}a=a.return}while(a!==null);return!1}var Fc=Error(r(461)),$e=!1;function pn(t,n,a,s){n.child=t===null?sp(n,null,a,s):ja(n,t.child,a,s)}function im(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return Wa(n),s=xc(t,n,a,_,f,u),E=Mc(),t!==null&&!$e?(yc(t,n,u),Ni(t,n,u)):(_e&&E&&ec(n),n.flags|=1,pn(t,n,s,u),n.child)}function am(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ju(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,rm(t,n,f,s,u)):(t=Yo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Yc(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fs,a(_,s)&&t.ref===n.ref)return Ni(t,n,u)}return n.flags|=1,t=Ri(f,s),t.ref=n.ref,t.return=n,n.child=t}function rm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Fs(f,s)&&t.ref===n.ref)if($e=!1,n.pendingProps=s=f,Yc(t,u))(t.flags&131072)!==0&&($e=!0);else return n.lanes=t.lanes,Ni(t,n,u)}return Hc(t,n,a,s,u)}function sm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return om(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qo(n,f!==null?f.cachePool:null),f!==null?up(n,f):_c(),cp(n);else return s=n.lanes=536870912,om(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Qo(n,f.cachePool),up(n,f),ha(),n.memoizedState=null):(t!==null&&Qo(n,null),_c(),ha());return pn(t,n,u,a),n.child}function to(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function om(t,n,a,s,u){var f=cc();return f=f===null?null:{parent:Qe._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Qo(n,null),_c(),cp(n),t!==null&&Ur(t,n,s,!0),n.childLanes=u,null}function dl(t,n){return n=ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function lm(t,n,a){return ja(n,t.child,null,a),t=dl(n,n.pendingProps),t.flags|=2,Gn(n),n.memoizedState=null,t}function O0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=dl(n,s),n.lanes=536870912,to(null,t);if(vc(n),(t=ze)?(t=x_(t,Jn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:aa!==null?{id:_i,overflow:gi}:null,retryLane:536870912,hydrationErrors:null},a=Wd(t),a.return=n,n.child=a,hn=n,ze=null)):t=null,t===null)throw sa(n);return n.lanes=536870912,null}return dl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(vc(n),u)if(n.flags&256)n.flags&=-257,n=lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if($e||Ur(t,n,a,!1),u=(a&t.childLanes)!==0,$e||u){if(s=Ne,s!==null&&(_=bs(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ga(t,_),Ln(s,t,_),Fc;Tl(),n=lm(t,n,a)}else t=f.treeContext,ze=ti(_.nextSibling),hn=n,_e=!0,ra=null,Jn=!1,t!==null&&Zd(n,t),n=dl(n,s),n.flags|=4096;return n}return t=Ri(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Hc(t,n,a,s,u){return Wa(n),a=xc(t,n,a,s,void 0,u),s=Mc(),t!==null&&!$e?(yc(t,n,u),Ni(t,n,u)):(_e&&s&&ec(n),n.flags|=1,pn(t,n,a,u),n.child)}function um(t,n,a,s,u,f){return Wa(n),n.updateQueue=null,a=hp(n,s,a,u),fp(t),s=Mc(),t!==null&&!$e?(yc(t,n,f),Ni(t,n,f)):(_e&&s&&ec(n),n.flags|=1,pn(t,n,a,f),n.child)}function cm(t,n,a,s,u){if(Wa(n),n.stateNode===null){var f=Rr,_=a.contextType;typeof _=="object"&&_!==null&&(f=dn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},hc(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?dn(_):Rr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(zc(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Bc.enqueueReplaceState(f,f.state,null),js(n,s,f,u),Zs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=Qa(a,E);f.props=z;var K=f.context,ut=a.contextType;_=Rr,typeof ut=="object"&&ut!==null&&(_=dn(ut));var dt=a.getDerivedStateFromProps;ut=typeof dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||K!==_)&&Kp(n,f,s,_),la=!1;var J=n.memoizedState;f.state=J,js(n,s,f,u),Zs(),K=n.memoizedState,E||J!==K||la?(typeof dt=="function"&&(zc(n,a,dt,s),K=n.memoizedState),(z=la||jp(n,a,z,s,J,K,_))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),f.props=s,f.state=K,f.context=_,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,dc(t,n),_=n.memoizedProps,ut=Qa(a,_),f.props=ut,dt=n.pendingProps,J=f.context,K=a.contextType,z=Rr,typeof K=="object"&&K!==null&&(z=dn(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==dt||J!==z)&&Kp(n,f,s,z),la=!1,J=n.memoizedState,f.state=J,js(n,s,f,u),Zs();var at=n.memoizedState;_!==dt||J!==at||la||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof E=="function"&&(zc(n,a,E,s),at=n.memoizedState),(ut=la||jp(n,a,ut,s,J,at,z)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,at,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,at,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=z,s=ut):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,pl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ja(n,t.child,null,u),n.child=ja(n,null,a,u)):pn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ni(t,n,u),t}function fm(t,n,a,s){return Xa(),n.flags|=256,pn(t,n,a,s),n.child}var Gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vc(t){return{baseLanes:t,cachePool:tp()}}function Xc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Xn),t}function hm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Ze.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?fa(n):ha(),(t=ze)?(t=x_(t,Jn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:aa!==null?{id:_i,overflow:gi}:null,retryLane:536870912,hydrationErrors:null},a=Wd(t),a.return=n,n.child=a,hn=n,ze=null)):t=null,t===null)throw sa(n);return bf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(ha(),u=n.mode,E=ml({mode:"hidden",children:E},u),s=Va(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Vc(a),s.childLanes=Xc(t,_,a),n.memoizedState=Gc,to(null,s)):(fa(n),kc(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=Wc(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),E=s.fallback,u=n.mode,s=ml({mode:"visible",children:s.children},u),E=Va(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ja(n,t.child,null,a),s=n.child,s.memoizedState=Vc(a),s.childLanes=Xc(t,_,a),n.memoizedState=Gc,n=to(null,s));else if(fa(n),bf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var K=_.dgst;_=K,s=Error(r(419)),s.stack="",s.digest=_,Vs({value:s,source:null,stack:null}),n=Wc(t,n,a)}else if($e||Ur(t,n,a,!1),_=(a&t.childLanes)!==0,$e||_){if(_=Ne,_!==null&&(s=bs(_,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,Ga(t,s),Ln(_,t,s),Fc;Af(E)||Tl(),n=Wc(t,n,a)}else Af(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,ze=ti(E.nextSibling),hn=n,_e=!0,ra=null,Jn=!1,t!==null&&Zd(n,t),n=kc(n,s.children),n.flags|=4096);return n}return u?(ha(),E=s.fallback,u=n.mode,z=t.child,K=z.sibling,s=Ri(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,K!==null?E=Ri(K,E):(E=Va(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,to(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Vc(a):(u=E.cachePool,u!==null?(z=Qe._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=tp(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Xc(t,_,a),n.memoizedState=Gc,to(t.child,s)):(fa(n),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function kc(t,n){return n=ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ml(t,n){return t=Fn(22,t,null,n),t.lanes=0,t}function Wc(t,n,a){return ja(n,t.child,null,a),t=kc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),sc(t.return,n,a)}function qc(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function pm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=Ze.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,gt(Ze,_),pn(t,n,s,a),s=_e?Gs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,a,n);else if(t.tag===19)dm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),qc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}qc(n,!0,a,null,f,s);break;case"together":qc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ni(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ur(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ri(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Yc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function P0(t,n,a){switch(n.tag){case 3:Ht(n,n.stateNode.containerInfo),oa(n,Qe,t.memoizedState.cache),Xa();break;case 27:case 5:ee(n);break;case 4:Ht(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hm(t,n,a):(fa(n),t=Ni(t,n,a),t!==null?t.sibling:null);fa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ur(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return pm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(Ze,Ze.current),s)break;return null;case 22:return n.lanes=0,sm(t,n,a,n.pendingProps);case 24:oa(n,Qe,t.memoizedState.cache)}return Ni(t,n,a)}function mm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)$e=!0;else{if(!Yc(t,a)&&(n.flags&128)===0)return $e=!1,P0(t,n,a);$e=(t.flags&131072)!==0}else $e=!1,_e&&(n.flags&1048576)!==0&&Yd(n,Gs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ya(n.elementType),n.type=t,typeof t=="function")Ju(t)?(s=Qa(t,s),n.tag=1,n=cm(null,n,t,s,a)):(n.tag=0,n=Hc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=im(null,n,t,s,a);break t}else if(u===O){n.tag=14,n=am(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return Hc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Qa(s,n.pendingProps),cm(t,n,s,u,a);case 3:t:{if(Ht(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,dc(t,n),js(n,s,null,a);var _=n.memoizedState;if(s=_.cache,oa(n,Qe,s),s!==f.cache&&oc(n,[Qe],a,!0),Zs(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=fm(t,n,s,a);break t}else if(s!==u){u=jn(Error(r(424)),n),Vs(u),n=fm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ze=ti(t.firstChild),hn=n,_e=!0,ra=null,Jn=!0,a=sp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xa(),s===u){n=Ni(t,n,a);break t}pn(t,n,s,a)}n=n.child}return n;case 26:return pl(t,n),t===null?(a=b_(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(a=n.type,t=n.pendingProps,s=Ul(St.current).createElement(a),s[Ke]=n,s[gn]=t,mn(s,a,t),zt(s),n.stateNode=s):n.memoizedState=b_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ee(n),t===null&&_e&&(s=n.stateNode=E_(n.type,n.pendingProps,St.current),hn=n,Jn=!0,u=ze,xa(n.type)?(Rf=u,ze=ti(s.firstChild)):ze=u),pn(t,n,n.pendingProps.children,a),pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=s=ze)&&(s=fS(s,n.type,n.pendingProps,Jn),s!==null?(n.stateNode=s,hn=n,ze=ti(s.firstChild),Jn=!1,u=!0):u=!1),u||sa(n)),ee(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,yf(u,f)?s=null:_!==null&&yf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=xc(t,n,b0,null,null,a),_o._currentValue=u),pl(t,n),pn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=ze)&&(a=hS(a,n.pendingProps,Jn),a!==null?(n.stateNode=a,hn=n,ze=null,t=!0):t=!1),t||sa(n)),null;case 13:return hm(t,n,a);case 4:return Ht(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ja(n,null,s,a):pn(t,n,s,a),n.child;case 11:return im(t,n,n.type,n.pendingProps,a);case 7:return pn(t,n,n.pendingProps,a),n.child;case 8:return pn(t,n,n.pendingProps.children,a),n.child;case 12:return pn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),pn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Wa(n),u=dn(u),s=s(u),n.flags|=1,pn(t,n,s,a),n.child;case 14:return am(t,n,n.type,n.pendingProps,a);case 15:return rm(t,n,n.type,n.pendingProps,a);case 19:return pm(t,n,a);case 31:return O0(t,n,a);case 22:return sm(t,n,a,n.pendingProps);case 24:return Wa(n),s=dn(Qe),t===null?(u=cc(),u===null&&(u=Ne,f=lc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},hc(n),oa(n,Qe,u)):((t.lanes&a)!==0&&(dc(t,n),js(n,null,null,a),Zs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),oa(n,Qe,s)):(s=f.cache,oa(n,Qe,s),s!==u.cache&&oc(n,[Qe],a,!0))),pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Oi(t){t.flags|=4}function Zc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Vm())t.flags|=8192;else throw Za=$o,fc}else t.flags&=-16777217}function _m(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!U_(n))if(Vm())t.flags|=8192;else throw Za=$o,fc}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ge():536870912,t.lanes|=n,Xr|=n)}function eo(t,n){if(!_e)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Be(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function z0(t,n,a){var s=n.pendingProps;switch(nc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return Be(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Di(Qe),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Dr(n)?Oi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ac())),Be(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Oi(n),f!==null?(Be(n),_m(n,f)):(Be(n),Zc(n,u,null,s,a))):f?f!==t.memoizedState?(Oi(n),Be(n),_m(n,f)):(Be(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Oi(n),Be(n),Zc(n,u,t,s,a)),null;case 27:if(Le(n),a=St.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Oi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Be(n),null}t=W.current,Dr(n)?jd(n):(t=E_(u,s,a),n.stateNode=t,Oi(n))}return Be(n),null;case 5:if(Le(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Oi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Be(n),null}if(f=W.current,Dr(n))jd(n);else{var _=Ul(St.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[Ke]=n,f[gn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(mn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Oi(n)}}return Be(n),Zc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Oi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Dr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=hn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ke]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||h_(t.nodeValue,a)),t||sa(n,!0)}else t=Ul(t).createTextNode(s),t[Ke]=n,n.stateNode=t}return Be(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Dr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ke]=n}else Xa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),t=!1}else a=ac(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Gn(n),n):(Gn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Be(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Dr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ke]=n}else Xa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Be(n),u=!1}else u=ac(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Gn(n),n):(Gn(n),null)}return Gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),Be(n),null);case 4:return Ft(),t===null&&gf(n.stateNode.containerInfo),Be(n),null;case 10:return Di(n.type),Be(n),null;case 19:if(et(Ze),s=n.memoizedState,s===null)return Be(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)eo(s,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,eo(s,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)kd(a,t),a=a.sibling;return gt(Ze,Ze.current&1|2),_e&&Ci(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&_t()>Ml&&(n.flags|=128,u=!0,eo(s,!1),n.lanes=4194304)}else{if(!u)if(t=il(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!_e)return Be(n),null}else 2*_t()-s.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,u=!0,eo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_t(),t.sibling=null,a=Ze.current,gt(Ze,u?a&1|2:a&1),_e&&Ci(n,s.treeForkCount),t):(Be(n),null);case 22:case 23:return Gn(n),gc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Di(Qe),Be(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function B0(t,n){switch(nc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Di(Qe),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Gn(n),n.alternate===null)throw Error(r(340));Xa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Gn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(Ze),null;case 4:return Ft(),null;case 10:return Di(n.type),null;case 22:case 23:return Gn(n),gc(),t!==null&&et(qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Di(Qe),null;case 25:return null;default:return null}}function gm(t,n){switch(nc(n),n.tag){case 3:Di(Qe),Ft();break;case 26:case 27:case 5:Le(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Gn(n);break;case 13:Gn(n);break;case 19:et(Ze);break;case 10:Di(n.type);break;case 22:case 23:Gn(n),gc(),t!==null&&et(qa);break;case 24:Di(Qe)}}function no(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(E){be(n,n.return,E)}}function da(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var z=a,K=E;try{K()}catch(ut){be(u,z,ut)}}}s=s.next}while(s!==f)}}catch(ut){be(n,n.return,ut)}}function vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lp(n,a)}catch(s){be(t,t.return,s)}}}function Sm(t,n,a){a.props=Qa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){be(t,n,s)}}function io(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){be(t,n,u)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){be(t,n,u)}else a.current=null}function xm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){be(t,t.return,u)}}function jc(t,n,a){try{var s=t.stateNode;rS(s,t.type,a,n),s[gn]=n}catch(u){be(t,t.return,u)}}function Mm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xa(t.type)||t.tag===4}function Kc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Mm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ai));else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Qc(t,n,a),t=t.sibling;t!==null;)Qc(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);mn(n,s,a),n[Ke]=t,n[gn]=a}catch(f){be(t,t.return,f)}}var Pi=!1,tn=!1,Jc=!1,Em=typeof WeakSet=="function"?WeakSet:Set,un=null;function I0(t,n){if(t=t.containerInfo,xf=Il,t=Pd(t),Wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,E=-1,z=-1,K=0,ut=0,dt=t,J=null;e:for(;;){for(var at;dt!==a||u!==0&&dt.nodeType!==3||(E=_+u),dt!==f||s!==0&&dt.nodeType!==3||(z=_+s),dt.nodeType===3&&(_+=dt.nodeValue.length),(at=dt.firstChild)!==null;)J=dt,dt=at;for(;;){if(dt===t)break e;if(J===a&&++K===u&&(E=_),J===f&&++ut===s&&(z=_),(at=dt.nextSibling)!==null)break;dt=J,J=dt.parentNode}dt=at}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:t,selectionRange:a},Il=!1,un=n;un!==null;)if(n=un,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,un=t;else for(;un!==null;){switch(n=un,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Bt=Qa(a.type,u);t=s.getSnapshotBeforeUpdate(Bt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Kt){be(a,a.return,Kt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,un=t;break}un=n.return}}function Tm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Bi(t,a),s&4&&no(5,a);break;case 1:if(Bi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){be(a,a.return,_)}else{var u=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){be(a,a.return,_)}}s&64&&vm(a),s&512&&io(a,a.return);break;case 3:if(Bi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lp(t,n)}catch(_){be(a,a.return,_)}}break;case 27:n===null&&s&4&&ym(a);case 26:case 5:Bi(t,a),n===null&&s&4&&xm(a),s&512&&io(a,a.return);break;case 12:Bi(t,a);break;case 31:Bi(t,a),s&4&&Rm(t,a);break;case 13:Bi(t,a),s&4&&Cm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Y0.bind(null,a),dS(t,a))));break;case 22:if(s=a.memoizedState!==null||Pi,!s){n=n!==null&&n.memoizedState!==null||tn,u=Pi;var f=tn;Pi=s,(tn=n)&&!f?Ii(t,a,(a.subtreeFlags&8772)!==0):Bi(t,a),Pi=u,tn=f}break;case 30:break;default:Bi(t,a)}}function Am(t){var n=t.alternate;n!==null&&(t.alternate=null,Am(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Y(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Cn=!1;function zi(t,n,a){for(a=a.child;a!==null;)bm(t,n,a),a=a.sibling}function bm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:tn||vi(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||vi(a,n);var s=Ge,u=Cn;xa(a.type)&&(Ge=a.stateNode,Cn=!1),zi(t,n,a),ho(a.stateNode),Ge=s,Cn=u;break;case 5:tn||vi(a,n);case 6:if(s=Ge,u=Cn,Ge=null,zi(t,n,a),Ge=s,Cn=u,Ge!==null)if(Cn)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){be(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){be(a,n,f)}break;case 18:Ge!==null&&(Cn?(t=Ge,v_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Qr(t)):v_(Ge,a.stateNode));break;case 4:s=Ge,u=Cn,Ge=a.stateNode.containerInfo,Cn=!0,zi(t,n,a),Ge=s,Cn=u;break;case 0:case 11:case 14:case 15:da(2,a,n),tn||da(4,a,n),zi(t,n,a);break;case 1:tn||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Sm(a,n,s)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,zi(t,n,a),tn=s;break;default:zi(t,n,a)}}function Rm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qr(t)}catch(a){be(n,n.return,a)}}}function Cm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qr(t)}catch(a){be(n,n.return,a)}}function F0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Em),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Em),n;default:throw Error(r(435,t.tag))}}function vl(t,n){var a=F0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Z0.bind(null,t,s);s.then(u,u)}})}function wn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(xa(E.type)){Ge=E.stateNode,Cn=!1;break t}break;case 5:Ge=E.stateNode,Cn=!1;break t;case 3:case 4:Ge=E.stateNode.containerInfo,Cn=!0;break t}E=E.return}if(Ge===null)throw Error(r(160));bm(f,_,u),Ge=null,Cn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)wm(n,t),n=n.sibling}var oi=null;function wm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wn(n,t),Dn(t),s&4&&(da(3,t,t.return),no(3,t),da(5,t,t.return));break;case 1:wn(n,t),Dn(t),s&512&&(tn||a===null||vi(a,a.return)),s&64&&Pi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=oi;if(wn(n,t),Dn(t),s&512&&(tn||a===null||vi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[tt]||f[Ke]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),mn(f,s,a),f[Ke]=t,zt(f),s=f;break t;case"link":var _=w_("link","href",u).get(s+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}f=u.createElement(s),mn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=w_("meta","content",u).get(s+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}f=u.createElement(s),mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ke]=t,zt(f),s=f}t.stateNode=s}else D_(u,t.type,t.stateNode);else t.stateNode=C_(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?D_(u,t.type,t.stateNode):C_(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&jc(t,t.memoizedProps,a.memoizedProps)}break;case 27:wn(n,t),Dn(t),s&512&&(tn||a===null||vi(a,a.return)),a!==null&&s&4&&jc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(wn(n,t),Dn(t),s&512&&(tn||a===null||vi(a,a.return)),t.flags&32){u=t.stateNode;try{xr(u,"")}catch(Bt){be(t,t.return,Bt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,jc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Jc=!0);break;case 6:if(wn(n,t),Dn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Bt){be(t,t.return,Bt)}}break;case 3:if(Ol=null,u=oi,oi=Ll(n.containerInfo),wn(n,t),oi=u,Dn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(Bt){be(t,t.return,Bt)}Jc&&(Jc=!1,Dm(t));break;case 4:s=oi,oi=Ll(t.stateNode.containerInfo),wn(n,t),Dn(t),oi=s;break;case 12:wn(n,t),Dn(t);break;case 31:wn(n,t),Dn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,vl(t,s)));break;case 13:wn(n,t),Dn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xl=_t()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,vl(t,s)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,K=Pi,ut=tn;if(Pi=K||u,tn=ut||z,wn(n,t),tn=ut,Pi=K,Dn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Pi||tn||Ja(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=z.stateNode;var dt=z.memoizedProps.style,J=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Bt){be(z,z.return,Bt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Bt){be(z,z.return,Bt)}}}else if(n.tag===18){if(a===null){z=n;try{var at=z.stateNode;u?S_(at,!0):S_(z.stateNode,!1)}catch(Bt){be(z,z.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,vl(t,a))));break;case 19:wn(n,t),Dn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,vl(t,s)));break;case 30:break;case 21:break;default:wn(n,t),Dn(t)}}function Dn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Mm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Kc(t);gl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(xr(_,""),a.flags&=-33);var E=Kc(t);gl(t,E,_);break;case 3:case 4:var z=a.stateNode.containerInfo,K=Kc(t);Qc(t,K,z);break;default:throw Error(r(161))}}catch(ut){be(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Bi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tm(t,n.alternate,n),n=n.sibling}function Ja(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),Ja(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Sm(n,n.return,a),Ja(n);break;case 27:ho(n.stateNode);case 26:case 5:vi(n,n.return),Ja(n);break;case 22:n.memoizedState===null&&Ja(n);break;case 30:Ja(n);break;default:Ja(n)}t=t.sibling}}function Ii(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Ii(u,f,a),no(4,f);break;case 1:if(Ii(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(K){be(s,s.return,K)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)op(z[u],E)}catch(K){be(s,s.return,K)}}a&&_&64&&vm(f),io(f,f.return);break;case 27:ym(f);case 26:case 5:Ii(u,f,a),a&&s===null&&_&4&&xm(f),io(f,f.return);break;case 12:Ii(u,f,a);break;case 31:Ii(u,f,a),a&&_&4&&Rm(u,f);break;case 13:Ii(u,f,a),a&&_&4&&Cm(u,f);break;case 22:f.memoizedState===null&&Ii(u,f,a),io(f,f.return);break;case 30:break;default:Ii(u,f,a)}n=n.sibling}}function $c(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xs(a))}function tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xs(t))}function li(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Um(t,n,a,s),n=n.sibling}function Um(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:li(t,n,a,s),u&2048&&no(9,n);break;case 1:li(t,n,a,s);break;case 3:li(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xs(t)));break;case 12:if(u&2048){li(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){be(n,n.return,z)}}else li(t,n,a,s);break;case 31:li(t,n,a,s);break;case 13:li(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?li(t,n,a,s):ao(t,n):f._visibility&2?li(t,n,a,s):(f._visibility|=2,Hr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&$c(_,n);break;case 24:li(t,n,a,s),u&2048&&tf(n.alternate,n);break;default:li(t,n,a,s)}}function Hr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,z=s,K=_.flags;switch(_.tag){case 0:case 11:case 15:Hr(f,_,E,z,u),no(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Hr(f,_,E,z,u):ao(f,_):(ut._visibility|=2,Hr(f,_,E,z,u)),u&&K&2048&&$c(_.alternate,_);break;case 24:Hr(f,_,E,z,u),u&&K&2048&&tf(_.alternate,_);break;default:Hr(f,_,E,z,u)}n=n.sibling}}function ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:ao(a,s),u&2048&&$c(s.alternate,s);break;case 24:ao(a,s),u&2048&&tf(s.alternate,s);break;default:ao(a,s)}n=n.sibling}}var ro=8192;function Gr(t,n,a){if(t.subtreeFlags&ro)for(t=t.child;t!==null;)Lm(t,n,a),t=t.sibling}function Lm(t,n,a){switch(t.tag){case 26:Gr(t,n,a),t.flags&ro&&t.memoizedState!==null&&AS(a,oi,t.memoizedState,t.memoizedProps);break;case 5:Gr(t,n,a);break;case 3:case 4:var s=oi;oi=Ll(t.stateNode.containerInfo),Gr(t,n,a),oi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=ro,ro=16777216,Gr(t,n,a),ro=s):Gr(t,n,a));break;default:Gr(t,n,a)}}function Nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function so(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,Pm(s,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(t),t=t.sibling}function Om(t){switch(t.tag){case 0:case 11:case 15:so(t),t.flags&2048&&da(9,t,t.return);break;case 3:so(t);break;case 12:so(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sl(t)):so(t);break;default:so(t)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,Pm(s,t)}Nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:da(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}t=t.sibling}}function Pm(t,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,un=s;else t:for(a=t;un!==null;){s=un;var u=s.sibling,f=s.return;if(Am(s),s===a){un=null;break t}if(u!==null){u.return=f,un=u;break t}un=f}}}var H0={getCacheForType:function(t){var n=dn(Qe),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return dn(Qe).controller.signal}},G0=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ne=null,ce=null,de=0,Ae=0,Vn=null,pa=!1,Vr=!1,ef=!1,Fi=0,qe=0,ma=0,$a=0,nf=0,Xn=0,Xr=0,oo=null,Un=null,af=!1,xl=0,zm=0,Ml=1/0,yl=null,_a=null,rn=0,ga=null,kr=null,Hi=0,rf=0,sf=null,Bm=null,lo=0,of=null;function kn(){return(ye&2)!==0&&de!==0?de&-de:L.T!==null?df():Rs()}function Im(){if(Xn===0)if((de&536870912)===0||_e){var t=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),Xn=t}else Xn=536870912;return t=Hn.current,t!==null&&(t.flags|=32),Xn}function Ln(t,n,a){(t===Ne&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),va(t,de,Xn,!1)),_n(t,a),((ye&2)===0||t!==Ne)&&(t===Ne&&((ye&2)===0&&($a|=a),qe===4&&va(t,de,Xn,!1)),Si(t))}function Fm(t,n,a){if((ye&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=s?k0(t,n):uf(t,n,!0),f=s;do{if(u===0){Vr&&!s&&va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!V0(a)){u=uf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=oo;var z=E.current.memoizedState.isDehydrated;if(z&&(Wr(E,_).flags|=256),_=uf(E,_,!1),_!==2){if(ef&&!z){E.errorRecoveryDisabledLanes|=f,$a|=f,u=4;break t}f=Un,Un=u,f!==null&&(Un===null?Un=f:Un.push.apply(Un,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Wr(t,0),va(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:va(s,n,Xn,!pa);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=xl+300-_t(),10<u)){if(va(s,n,Xn,!pa),oe(s,0,!0)!==0)break t;Hi=n,s.timeoutHandle=__(Hm.bind(null,s,a,Un,yl,af,n,Xn,$a,Xr,pa,f,"Throttled",-0,0),u);break t}Hm(s,a,Un,yl,af,n,Xn,$a,Xr,pa,f,null,-0,0)}}break}while(!0);Si(t)}function Hm(t,n,a,s,u,f,_,E,z,K,ut,dt,J,at){if(t.timeoutHandle=-1,dt=n.subtreeFlags,dt&8192||(dt&16785408)===16785408){dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ai},Lm(n,f,dt);var Bt=(f&62914560)===f?xl-_t():(f&4194048)===f?zm-_t():0;if(Bt=bS(dt,Bt),Bt!==null){Hi=f,t.cancelPendingCommit=Bt(Zm.bind(null,t,n,f,a,s,u,_,E,z,ut,dt,null,J,at)),va(t,f,_,!K);return}}Zm(t,n,f,a,s,u,_,E,z)}function V0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!In(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function va(t,n,a,s){n&=~nf,n&=~$a,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Zt(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&mi(t,a,n)}function El(){return(ye&6)===0?(uo(0),!1):!0}function lf(){if(ce!==null){if(Ae===0)var t=ce.return;else t=ce,wi=ka=null,Ec(t),Pr=null,Ws=0,t=ce;for(;t!==null;)gm(t.alternate,t),t=t.return;ce=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,lS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Hi=0,lf(),Ne=t,ce=a=Ri(t.current,null),de=n,Ae=0,Vn=null,pa=!1,Vr=Oe(t,n),ef=!1,Xr=Xn=nf=$a=ma=qe=0,Un=oo=null,af=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Zt(s),f=1<<u;n|=t[u],s&=~f}return Fi=n,ko(),a}function Gm(t,n){ie=null,L.H=$s,n===Or||n===Jo?(n=ip(),Ae=3):n===fc?(n=ip(),Ae=4):Ae=n===Fc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,ce===null&&(qe=1,hl(t,jn(n,t.current)))}function Vm(){var t=Hn.current;return t===null?!0:(de&4194048)===de?$n===null:(de&62914560)===de||(de&536870912)!==0?t===$n:!1}function Xm(){var t=L.H;return L.H=$s,t===null?$s:t}function km(){var t=L.A;return L.A=H0,t}function Tl(){qe=4,pa||(de&4194048)!==de&&Hn.current!==null||(Vr=!0),(ma&134217727)===0&&($a&134217727)===0||Ne===null||va(Ne,de,Xn,!1)}function uf(t,n,a){var s=ye;ye|=2;var u=Xm(),f=km();(Ne!==t||de!==n)&&(yl=null,Wr(t,n)),n=!1;var _=qe;t:do try{if(Ae!==0&&ce!==null){var E=ce,z=Vn;switch(Ae){case 8:lf(),_=6;break t;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var K=Ae;if(Ae=0,Vn=null,qr(t,E,z,K),a&&Vr){_=0;break t}break;default:K=Ae,Ae=0,Vn=null,qr(t,E,z,K)}}X0(),_=qe;break}catch(ut){Gm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,wi=ka=null,ye=s,L.H=u,L.A=f,ce===null&&(Ne=null,de=0,ko()),_}function X0(){for(;ce!==null;)Wm(ce)}function k0(t,n){var a=ye;ye|=2;var s=Xm(),u=km();Ne!==t||de!==n?(yl=null,Ml=_t()+500,Wr(t,n)):Vr=Oe(t,n);t:do try{if(Ae!==0&&ce!==null){n=ce;var f=Vn;e:switch(Ae){case 1:Ae=0,Vn=null,qr(t,n,f,1);break;case 2:case 9:if(ep(f)){Ae=0,Vn=null,qm(n);break}n=function(){Ae!==2&&Ae!==9||Ne!==t||(Ae=7),Si(t)},f.then(n,n);break t;case 3:Ae=7;break t;case 4:Ae=5;break t;case 7:ep(f)?(Ae=0,Vn=null,qm(n)):(Ae=0,Vn=null,qr(t,n,f,7));break;case 5:var _=null;switch(ce.tag){case 26:_=ce.memoizedState;case 5:case 27:var E=ce;if(_?U_(_):E.stateNode.complete){Ae=0,Vn=null;var z=E.sibling;if(z!==null)ce=z;else{var K=E.return;K!==null?(ce=K,Al(K)):ce=null}break e}}Ae=0,Vn=null,qr(t,n,f,5);break;case 6:Ae=0,Vn=null,qr(t,n,f,6);break;case 8:lf(),qe=6;break t;default:throw Error(r(462))}}W0();break}catch(ut){Gm(t,ut)}while(!0);return wi=ka=null,L.H=s,L.A=u,ye=a,ce!==null?0:(Ne=null,de=0,ko(),qe)}function W0(){for(;ce!==null&&!it();)Wm(ce)}function Wm(t){var n=mm(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,n===null?Al(t):ce=n}function qm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=um(a,n,n.pendingProps,n.type,void 0,de);break;case 11:n=um(a,n,n.pendingProps,n.type.render,n.ref,de);break;case 5:Ec(n);default:gm(a,n),n=ce=kd(n,Fi),n=mm(a,n,Fi)}t.memoizedProps=t.pendingProps,n===null?Al(t):ce=n}function qr(t,n,a,s){wi=ka=null,Ec(n),Pr=null,Ws=0;var u=n.return;try{if(N0(t,u,n,a,de)){qe=1,hl(t,jn(a,t.current)),ce=null;return}}catch(f){if(u!==null)throw ce=u,f;qe=1,hl(t,jn(a,t.current)),ce=null;return}n.flags&32768?(_e||s===1?t=!0:Vr||(de&536870912)!==0?t=!1:(pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Hn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ym(n,t)):Al(n)}function Al(t){var n=t;do{if((n.flags&32768)!==0){Ym(n,pa);return}t=n.return;var a=z0(n.alternate,n,Fi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=t}while(n!==null);qe===0&&(qe=5)}function Ym(t,n){do{var a=B0(t.alternate,t);if(a!==null){a.flags&=32767,ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ce=t;return}ce=t=a}while(t!==null);qe=6,ce=null}function Zm(t,n,a,s,u,f,_,E,z){t.cancelPendingCommit=null;do bl();while(rn!==0);if((ye&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Ku,Po(t,a,f,_,E,z),t===Ne&&(ce=Ne=null,de=0),kr=n,ga=t,Hi=a,rf=f,sf=u,Bm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,j0(Lt,function(){return $m(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=q.p,q.p=2,_=ye,ye|=4;try{I0(t,n,a)}finally{ye=_,q.p=u,L.T=s}}rn=1,jm(),Km(),Qm()}}function jm(){if(rn===1){rn=0;var t=ga,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=q.p;q.p=2;var u=ye;ye|=4;try{wm(n,t);var f=Mf,_=Pd(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&Od(E.ownerDocument.documentElement,E)){if(z!==null&&Wu(E)){var K=z.start,ut=z.end;if(ut===void 0&&(ut=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ut,E.value.length);else{var dt=E.ownerDocument||document,J=dt&&dt.defaultView||window;if(J.getSelection){var at=J.getSelection(),Bt=E.textContent.length,Kt=Math.min(z.start,Bt),De=z.end===void 0?Kt:Math.min(z.end,Bt);!at.extend&&Kt>De&&(_=De,De=Kt,Kt=_);var k=Nd(E,Kt),F=Nd(E,De);if(k&&F&&(at.rangeCount!==1||at.anchorNode!==k.node||at.anchorOffset!==k.offset||at.focusNode!==F.node||at.focusOffset!==F.offset)){var j=dt.createRange();j.setStart(k.node,k.offset),at.removeAllRanges(),Kt>De?(at.addRange(j),at.extend(F.node,F.offset)):(j.setEnd(F.node,F.offset),at.addRange(j))}}}}for(dt=[],at=E;at=at.parentNode;)at.nodeType===1&&dt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ct=dt[E];ct.element.scrollLeft=ct.left,ct.element.scrollTop=ct.top}}Il=!!xf,Mf=xf=null}finally{ye=u,q.p=s,L.T=a}}t.current=n,rn=2}}function Km(){if(rn===2){rn=0;var t=ga,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=q.p;q.p=2;var u=ye;ye|=4;try{Tm(t,n.alternate,n)}finally{ye=u,q.p=s,L.T=a}}rn=3}}function Qm(){if(rn===4||rn===3){rn=0,xt();var t=ga,n=kr,a=Hi,s=Bm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,kr=ga=null,Jm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(_a=null),ta(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,u=q.p,q.p=2,L.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var E=s[_];f(E.value,{componentStack:E.stack})}}finally{L.T=n,q.p=u}}(Hi&3)!==0&&bl(),Si(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===of?lo++:(lo=0,of=t):lo=0,uo(0)}}function Jm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xs(n)))}function bl(){return jm(),Km(),Qm(),$m()}function $m(){if(rn!==5)return!1;var t=ga,n=rf;rf=0;var a=ta(Hi),s=L.T,u=q.p;try{q.p=32>a?32:a,L.T=null,a=sf,sf=null;var f=ga,_=Hi;if(rn=0,kr=ga=null,Hi=0,(ye&6)!==0)throw Error(r(331));var E=ye;if(ye|=4,Om(f.current),Um(f,f.current,_,a),ye=E,uo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{q.p=u,L.T=s,Jm(t,n)}}function t_(t,n,a){n=jn(a,n),n=Ic(t.stateNode,n,2),t=ca(t,n,2),t!==null&&(_n(t,2),Si(t))}function be(t,n,a){if(t.tag===3)t_(t,t,a);else for(;n!==null;){if(n.tag===3){t_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_a===null||!_a.has(s))){t=jn(a,t),a=em(2),s=ca(n,a,2),s!==null&&(nm(a,s,n,t),_n(s,2),Si(s));break}}n=n.return}}function cf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new G0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(ef=!0,u.add(a),t=q0.bind(null,t,n,a),n.then(t,t))}function q0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ne===t&&(de&a)===a&&(qe===4||qe===3&&(de&62914560)===de&&300>_t()-xl?(ye&2)===0&&Wr(t,0):nf|=a,Xr===de&&(Xr=0)),Si(t)}function e_(t,n){n===0&&(n=ge()),t=Ga(t,n),t!==null&&(_n(t,n),Si(t))}function Y0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(t,a)}function Z0(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),e_(t,a)}function j0(t,n){return N(t,n)}var Rl=null,Yr=null,ff=!1,Cl=!1,hf=!1,Sa=0;function Si(t){t!==Yr&&t.next===null&&(Yr===null?Rl=Yr=t:Yr=Yr.next=t),Cl=!0,ff||(ff=!0,Q0())}function uo(t,n){if(!hf&&Cl){hf=!0;do for(var a=!1,s=Rl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Zt(42|t)+1)-1,f&=u&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,r_(s,f))}else f=de,f=oe(s,s===Ne?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Oe(s,f)||(a=!0,r_(s,f));s=s.next}while(a);hf=!1}}function K0(){n_()}function n_(){Cl=ff=!1;var t=0;Sa!==0&&oS()&&(t=Sa);for(var n=_t(),a=null,s=Rl;s!==null;){var u=s.next,f=i_(s,n);f===0?(s.next=null,a===null?Rl=u:a.next=u,u===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(Cl=!0)),s=u}rn!==0&&rn!==5||uo(t),Sa!==0&&(Sa=0)}function i_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Zt(f),E=1<<_,z=u[_];z===-1?((E&a)===0||(E&s)!==0)&&(u[_]=nn(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ne,a=de,a=oe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ae===2||Ae===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&T(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&T(s),ta(a)){case 2:case 8:a=Dt;break;case 32:a=Lt;break;case 268435456:a=At;break;default:a=Lt}return s=a_.bind(null,t),a=N(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&T(s),t.callbackPriority=2,t.callbackNode=null,2}function a_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(bl()&&t.callbackNode!==a)return null;var s=de;return s=oe(t,t===Ne?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Fm(t,s,n),i_(t,_t()),t.callbackNode!=null&&t.callbackNode===a?a_.bind(null,t):null)}function r_(t,n){if(bl())return null;Fm(t,n,!0)}function Q0(){uS(function(){(ye&6)!==0?N(Wt,K0):n_()})}function df(){if(Sa===0){var t=Lr;t===0&&(t=ht,ht<<=1,(ht&261888)===0&&(ht=256)),Sa=t}return Sa}function s_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zo(""+t)}function o_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function J0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=s_((u[gn]||null).action),_=s.submitter;_&&(n=(n=_[gn]||null)?s_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Ho("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Sa!==0){var z=_?o_(u,_):new FormData(u);Lc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=_?o_(u,_):new FormData(u),Lc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var pf=0;pf<ju.length;pf++){var mf=ju[pf],$0=mf.toLowerCase(),tS=mf[0].toUpperCase()+mf.slice(1);si($0,"on"+tS)}si(Id,"onAnimationEnd"),si(Fd,"onAnimationIteration"),si(Hd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(_0,"onTransitionRun"),si(g0,"onTransitionStart"),si(v0,"onTransitionCancel"),si(Gd,"onTransitionEnd"),Te("onMouseEnter",["mouseout","mouseover"]),Te("onMouseLeave",["mouseout","mouseover"]),Te("onPointerEnter",["pointerout","pointerover"]),Te("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function l_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],z=E.instance,K=E.currentTarget;if(E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=K;try{f(u)}catch(ut){Xo(ut)}u.currentTarget=null,f=z}else for(_=0;_<s.length;_++){if(E=s[_],z=E.instance,K=E.currentTarget,E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=K;try{f(u)}catch(ut){Xo(ut)}u.currentTarget=null,f=z}}}}function fe(t,n){var a=n[Cs];a===void 0&&(a=n[Cs]=new Set);var s=t+"__bubble";a.has(s)||(u_(n,t,2,!1),a.add(s))}function _f(t,n,a){var s=0;n&&(s|=4),u_(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[wl]){t[wl]=!0,Qt.forEach(function(a){a!=="selectionchange"&&(eS.has(a)||_f(a,!1,t),_f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,_f("selectionchange",!1,n))}}function u_(t,n,a,s){switch(I_(n)){case 2:var u=wS;break;case 8:u=DS;break;default:u=Lf}a=u.bind(null,n,a,t),u=void 0,!zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function vf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=Et(E),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=f=_;continue t}E=E.parentNode}}s=s.return}pd(function(){var K=f,ut=Ou(a),dt=[];t:{var J=Vd.get(t);if(J!==void 0){var at=Ho,Bt=t;switch(t){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":at=Zv;break;case"focusin":Bt="focus",at=Hu;break;case"focusout":Bt="blur",at=Hu;break;case"beforeblur":case"afterblur":at=Hu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Qv;break;case Id:case Fd:case Hd:at=Fv;break;case Gd:at=$v;break;case"scroll":case"scrollend":at=Ov;break;case"wheel":at=e0;break;case"copy":case"cut":case"paste":at=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Sd;break;case"toggle":case"beforetoggle":at=i0}var Kt=(n&4)!==0,De=!Kt&&(t==="scroll"||t==="scrollend"),k=Kt?J!==null?J+"Capture":null:J;Kt=[];for(var F=K,j;F!==null;){var ct=F;if(j=ct.stateNode,ct=ct.tag,ct!==5&&ct!==26&&ct!==27||j===null||k===null||(ct=Ls(F,k),ct!=null&&Kt.push(fo(F,ct,j))),De)break;F=F.return}0<Kt.length&&(J=new at(J,Bt,null,a,ut),dt.push({event:J,listeners:Kt}))}}if((n&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",at=t==="mouseout"||t==="pointerout",J&&a!==Nu&&(Bt=a.relatedTarget||a.fromElement)&&(Et(Bt)||Bt[ea]))break t;if((at||J)&&(J=ut.window===ut?ut:(J=ut.ownerDocument)?J.defaultView||J.parentWindow:window,at?(Bt=a.relatedTarget||a.toElement,at=K,Bt=Bt?Et(Bt):null,Bt!==null&&(De=c(Bt),Kt=Bt.tag,Bt!==De||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(at=null,Bt=K),at!==Bt)){if(Kt=gd,ct="onMouseLeave",k="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Sd,ct="onPointerLeave",k="onPointerEnter",F="pointer"),De=at==null?J:Ot(at),j=Bt==null?J:Ot(Bt),J=new Kt(ct,F+"leave",at,a,ut),J.target=De,J.relatedTarget=j,ct=null,Et(ut)===K&&(Kt=new Kt(k,F+"enter",Bt,a,ut),Kt.target=j,Kt.relatedTarget=De,ct=Kt),De=ct,at&&Bt)e:{for(Kt=nS,k=at,F=Bt,j=0,ct=k;ct;ct=Kt(ct))j++;ct=0;for(var kt=F;kt;kt=Kt(kt))ct++;for(;0<j-ct;)k=Kt(k),j--;for(;0<ct-j;)F=Kt(F),ct--;for(;j--;){if(k===F||F!==null&&k===F.alternate){Kt=k;break e}k=Kt(k),F=Kt(F)}Kt=null}else Kt=null;at!==null&&c_(dt,J,at,Kt,!1),Bt!==null&&De!==null&&c_(dt,De,Bt,Kt,!0)}}t:{if(J=K?Ot(K):window,at=J.nodeName&&J.nodeName.toLowerCase(),at==="select"||at==="input"&&J.type==="file")var xe=Rd;else if(Ad(J))if(Cd)xe=d0;else{xe=f0;var It=c0}else at=J.nodeName,!at||at.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?K&&Lu(K.elementType)&&(xe=Rd):xe=h0;if(xe&&(xe=xe(t,K))){bd(dt,xe,a,ut);break t}It&&It(t,J,K),t==="focusout"&&K&&J.type==="number"&&K.memoizedProps.value!=null&&Uu(J,"number",J.value)}switch(It=K?Ot(K):window,t){case"focusin":(Ad(It)||It.contentEditable==="true")&&(Tr=It,qu=K,Hs=null);break;case"focusout":Hs=qu=Tr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,zd(dt,a,ut);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":zd(dt,a,ut)}var ae;if(Vu)t:{switch(t){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else Er?Ed(t,a)&&(pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(xd&&a.locale!=="ko"&&(Er||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Er&&(ae=md()):(ia=ut,Bu="value"in ia?ia.value:ia.textContent,Er=!0)),It=Dl(K,pe),0<It.length&&(pe=new vd(pe,t,null,a,ut),dt.push({event:pe,listeners:It}),ae?pe.data=ae:(ae=Td(a),ae!==null&&(pe.data=ae)))),(ae=r0?s0(t,a):o0(t,a))&&(pe=Dl(K,"onBeforeInput"),0<pe.length&&(It=new vd("onBeforeInput","beforeinput",null,a,ut),dt.push({event:It,listeners:pe}),It.data=ae)),J0(dt,t,K,a,ut)}l_(dt,n)})}function fo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ls(t,a),u!=null&&s.unshift(fo(t,u,f)),u=Ls(t,n),u!=null&&s.push(fo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function nS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function c_(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var E=a,z=E.alternate,K=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||K===null||(z=K,u?(K=Ls(a,f),K!=null&&_.unshift(fo(a,K,z))):u||(K=Ls(a,f),K!=null&&_.push(fo(a,K,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var iS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function f_(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(aS,"")}function h_(t,n){return n=f_(n),f_(t)===n}function we(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||xr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&xr(t,""+s);break;case"className":me(t,"class",s);break;case"tabIndex":me(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":me(t,a,s);break;case"style":hd(t,s,f);break;case"data":if(n!=="object"){me(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=zo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&we(t,n,"name",u.name,u,null),we(t,n,"formEncType",u.formEncType,u,null),we(t,n,"formMethod",u.formMethod,u,null),we(t,n,"formTarget",u.formTarget,u,null)):(we(t,n,"encType",u.encType,u,null),we(t,n,"method",u.method,u,null),we(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=zo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ai);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=zo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":fe("beforetoggle",t),fe("toggle",t),ke(t,"popover",s);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ke(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lv.get(a)||a,ke(t,a,s))}}function Sf(t,n,a,s,u,f){switch(a){case"style":hd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?xr(t,s):(typeof s=="number"||typeof s=="bigint")&&xr(t,""+s);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ai);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ke(t,a,s)}}}function mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",t),fe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:we(t,n,f,_,a,null)}}u&&we(t,n,"srcSet",a.srcSet,a,null),s&&we(t,n,"src",a.src,a,null);return;case"input":fe("invalid",t);var E=f=_=u=null,z=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":_=ut;break;case"checked":z=ut;break;case"defaultChecked":K=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:we(t,n,s,ut,a,null)}}Us(t,f,E,z,K,_,u,!1);return;case"select":fe("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:we(t,n,u,E,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Sr(t,!!s,n,!1):a!=null&&Sr(t,!!s,a,!0);return;case"textarea":fe("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:we(t,n,_,E,a,null)}cd(t,s,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:we(t,n,z,s,a,null)}return;case"dialog":fe("beforetoggle",t),fe("toggle",t),fe("cancel",t),fe("close",t);break;case"iframe":case"object":fe("load",t);break;case"video":case"audio":for(s=0;s<co.length;s++)fe(co[s],t);break;case"image":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"embed":case"source":case"link":fe("error",t),fe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:we(t,n,K,s,a,null)}return;default:if(Lu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Sf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&we(t,n,E,s,a,null))}function rS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,E=null,z=null,K=null,ut=null;for(at in a){var dt=a[at];if(a.hasOwnProperty(at)&&dt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":z=dt;default:s.hasOwnProperty(at)||we(t,n,at,null,s,dt)}}for(var J in s){var at=s[J];if(dt=a[J],s.hasOwnProperty(J)&&(at!=null||dt!=null))switch(J){case"type":f=at;break;case"name":u=at;break;case"checked":K=at;break;case"defaultChecked":ut=at;break;case"value":_=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==dt&&we(t,n,J,at,s,dt)}}Ds(t,_,E,z,K,ut,f,u);return;case"select":at=_=E=J=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":at=z;default:s.hasOwnProperty(f)||we(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==z&&we(t,n,u,f,s,z)}n=E,a=_,s=at,J!=null?Sr(t,!!a,J,!1):!!s!=!!a&&(n!=null?Sr(t,!!a,n,!0):Sr(t,!!a,a?[]:"",!1));return;case"textarea":at=J=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:we(t,n,E,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":J=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&we(t,n,_,u,s,f)}ud(t,J,at);return;case"option":for(var Bt in a)if(J=a[Bt],a.hasOwnProperty(Bt)&&J!=null&&!s.hasOwnProperty(Bt))switch(Bt){case"selected":t.selected=!1;break;default:we(t,n,Bt,null,s,J)}for(z in s)if(J=s[z],at=a[z],s.hasOwnProperty(z)&&J!==at&&(J!=null||at!=null))switch(z){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:we(t,n,z,J,s,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)J=a[Kt],a.hasOwnProperty(Kt)&&J!=null&&!s.hasOwnProperty(Kt)&&we(t,n,Kt,null,s,J);for(K in s)if(J=s[K],at=a[K],s.hasOwnProperty(K)&&J!==at&&(J!=null||at!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:we(t,n,K,J,s,at)}return;default:if(Lu(n)){for(var De in a)J=a[De],a.hasOwnProperty(De)&&J!==void 0&&!s.hasOwnProperty(De)&&Sf(t,n,De,void 0,s,J);for(ut in s)J=s[ut],at=a[ut],!s.hasOwnProperty(ut)||J===at||J===void 0&&at===void 0||Sf(t,n,ut,J,s,at);return}}for(var k in a)J=a[k],a.hasOwnProperty(k)&&J!=null&&!s.hasOwnProperty(k)&&we(t,n,k,null,s,J);for(dt in s)J=s[dt],at=a[dt],!s.hasOwnProperty(dt)||J===at||J==null&&at==null||we(t,n,dt,J,s,at)}function d_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,E=u.duration;if(f&&E&&d_(_)){for(_=0,E=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],K=z.startTime;if(K>E)break;var ut=z.transferSize,dt=z.initiatorType;ut&&d_(dt)&&(z=z.responseEnd,_+=ut*(z<E?1:(E-K)/(z-K)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xf=null,Mf=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function p_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function oS(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var __=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(t){return g_.resolve(null).then(t).catch(cS)}:__;function cS(t){setTimeout(function(){throw t})}function xa(t){return t==="head"}function v_(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Qr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ho(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ho(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[tt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&ho(t.ownerDocument.body);a=u}while(a);Qr(n)}function S_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Y(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function fS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ti(t.nextSibling),t===null)break}return null}function hS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ti(t.nextSibling),t===null))return null;return t}function x_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ti(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$?"||t.data==="$~"}function bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function dS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rf=null;function M_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function y_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function E_(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Y(t)}var ei=new Map,T_=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gi=q.d;q.d={f:pS,r:mS,D:_S,C:gS,L:vS,m:SS,X:MS,S:xS,M:yS};function pS(){var t=Gi.f(),n=El();return t||n}function mS(t){var n=wt(t);n!==null&&n.tag===5&&n.type==="form"?Gp(n):Gi.r(t)}var Zr=typeof document>"u"?null:document;function A_(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),T_.has(u)||(T_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),mn(n,"link",t),zt(n),s.head.appendChild(n)))}}function _S(t){Gi.D(t),A_("dns-prefetch",t,null)}function gS(t,n){Gi.C(t,n),A_("preconnect",t,n)}function vS(t,n,a){Gi.L(t,n,a);var s=Zr;if(s&&t&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xn(a.imageSizes)+'"]')):u+='[href="'+xn(t)+'"]';var f=u;switch(n){case"style":f=jr(t);break;case"script":f=Kr(t)}ei.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(po(f))||n==="script"&&s.querySelector(mo(f))||(n=s.createElement("link"),mn(n,"link",t),zt(n),s.head.appendChild(n)))}}function SS(t,n){Gi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(s)+'"][href="'+xn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ei.has(f)&&(t=S({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}s=a.createElement("link"),mn(s,"link",t),zt(s),a.head.appendChild(s)}}}function xS(t,n,a){Gi.S(t,n,a);var s=Zr;if(s&&t){var u=Pt(s).hoistableStyles,f=jr(t);n=n||"default";var _=u.get(f);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(po(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&Cf(t,a);var z=_=s.createElement("link");zt(z),mn(z,"link",t),z._p=new Promise(function(K,ut){z.onload=K,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(f,_)}}}function MS(t,n){Gi.X(t,n);var a=Zr;if(a&&t){var s=Pt(a).hoistableScripts,u=Kr(t),f=s.get(u);f||(f=a.querySelector(mo(u)),f||(t=S({src:t,async:!0},n),(n=ei.get(u))&&wf(t,n),f=a.createElement("script"),zt(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function yS(t,n){Gi.M(t,n);var a=Zr;if(a&&t){var s=Pt(a).hoistableScripts,u=Kr(t),f=s.get(u);f||(f=a.querySelector(mo(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=ei.get(u))&&wf(t,n),f=a.createElement("script"),zt(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function b_(t,n,a,s){var u=(u=St.current)?Ll(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=Pt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=Pt(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(po(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||ES(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=Pt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+xn(t)+'"'}function po(t){return'link[rel="stylesheet"]['+t+"]"}function R_(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function ES(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),mn(n,"link",a),zt(n),t.head.appendChild(n))}function Kr(t){return'[src="'+xn(t)+'"]'}function mo(t){return"script[async]"+t}function C_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xn(a.href)+'"]');if(s)return n.instance=s,zt(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),zt(s),mn(s,"style",u),Nl(s,a.precedence,t),n.instance=s;case"stylesheet":u=jr(a.href);var f=t.querySelector(po(u));if(f)return n.state.loading|=4,n.instance=f,zt(f),f;s=R_(a),(u=ei.get(u))&&Cf(s,u),f=(t.ownerDocument||t).createElement("link"),zt(f);var _=f;return _._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),mn(f,"link",s),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(u=t.querySelector(mo(f)))?(n.instance=u,zt(u),u):(s=a,(u=ei.get(f))&&(s=S({},a),wf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),zt(u),mn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Nl(s,a.precedence,t));return n.instance}function Nl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function w_(t,n,a){if(Ol===null){var s=new Map,u=Ol=new Map;u.set(a,s)}else u=Ol,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[tt]||f[Ke]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(f):s.set(_,[f])}}return s}function D_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function TS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function U_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function AS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=jr(s.href),f=n.querySelector(po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Pl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,zt(f);return}f=n.ownerDocument||n,s=R_(s),(u=ei.get(u))&&Cf(s,u),f=f.createElement("link"),zt(f);var _=f;_._p=new Promise(function(E,z){_.onload=E,_.onerror=z}),mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Pl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Df=0;function bS(t,n){return t.stylesheets&&t.count===0&&Bl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Df===0&&(Df=62500*sS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Df?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Bl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(RS,t),zl=null,Pl.call(t))}function RS(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var s=a.get(null);else{a=new Map,zl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=Pl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:w,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function CS(t,n,a,s,u,f,_,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.hiddenUpdates=Bn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function L_(t,n,a,s,u,f,_,E,z,K,ut,dt){return t=new CS(t,n,a,_,z,K,ut,dt,E),n=1,f===!0&&(n|=24),f=Fn(3,null,null,n),t.current=f,f.stateNode=t,n=lc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},hc(f),t}function N_(t){return t?(t=Rr,t):Rr}function O_(t,n,a,s,u,f){u=N_(u),s.context===null?s.context=u:s.pendingContext=u,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ca(t,s,n),a!==null&&(Ln(a,t,n),Ys(a,t,n))}function P_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uf(t,n){P_(t,n),(t=t.alternate)&&P_(t,n)}function z_(t){if(t.tag===13||t.tag===31){var n=Ga(t,67108864);n!==null&&Ln(n,t,67108864),Uf(t,67108864)}}function B_(t){if(t.tag===13||t.tag===31){var n=kn();n=vr(n);var a=Ga(t,n);a!==null&&Ln(a,t,n),Uf(t,n)}}var Il=!0;function wS(t,n,a,s){var u=L.T;L.T=null;var f=q.p;try{q.p=2,Lf(t,n,a,s)}finally{q.p=f,L.T=u}}function DS(t,n,a,s){var u=L.T;L.T=null;var f=q.p;try{q.p=8,Lf(t,n,a,s)}finally{q.p=f,L.T=u}}function Lf(t,n,a,s){if(Il){var u=Nf(s);if(u===null)vf(t,n,s,Fl,a),F_(t,s);else if(LS(u,t,n,a,s))s.stopPropagation();else if(F_(t,s),n&4&&-1<US.indexOf(t)){for(;u!==null;){var f=wt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Xt(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var z=1<<31-Zt(_);E.entanglements[1]|=z,_&=~z}Si(f),(ye&6)===0&&(Ml=_t()+500,uo(0))}}break;case 31:case 13:E=Ga(f,2),E!==null&&Ln(E,f,2),El(),Uf(f,2)}if(f=Nf(s),f===null&&vf(t,n,s,Fl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else vf(t,n,s,null,a)}}function Nf(t){return t=Ou(t),Of(t)}var Fl=null;function Of(t){if(Fl=null,t=Et(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function I_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case Wt:return 2;case Dt:return 8;case Lt:case ne:return 32;case At:return 268435456;default:return 32}default:return 32}}var Pf=!1,Ma=null,ya=null,Ea=null,go=new Map,vo=new Map,Ta=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F_(t,n){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function So(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wt(n),n!==null&&z_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function LS(t,n,a,s,u){switch(n){case"focusin":return Ma=So(Ma,t,n,a,s,u),!0;case"dragenter":return ya=So(ya,t,n,a,s,u),!0;case"mouseover":return Ea=So(Ea,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return go.set(f,So(go.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,vo.set(f,So(vo.get(f)||null,t,n,a,s,u)),!0}return!1}function H_(t){var n=Et(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ba(t.priority,function(){B_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ba(t.priority,function(){B_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Nf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Nu=s,a.target.dispatchEvent(s),Nu=null}else return n=wt(a),n!==null&&z_(n),t.blockedOn=a,!1;n.shift()}return!0}function G_(t,n,a){Hl(t)&&a.delete(n)}function NS(){Pf=!1,Ma!==null&&Hl(Ma)&&(Ma=null),ya!==null&&Hl(ya)&&(ya=null),Ea!==null&&Hl(Ea)&&(Ea=null),go.forEach(G_),vo.forEach(G_)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,NS)))}var Vl=null;function V_(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Of(s||a)===null)continue;break}var f=wt(a);f!==null&&(t.splice(n,3),n-=3,Lc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Qr(t){function n(z){return Gl(z,t)}Ma!==null&&Gl(Ma,t),ya!==null&&Gl(ya,t),Ea!==null&&Gl(Ea,t),go.forEach(n),vo.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)H_(a),a.blockedOn===null&&Ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[gn]||null;if(typeof f=="function")_||V_(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[gn]||null)E=_.formAction;else if(Of(u)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),V_(a)}}}function X_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function zf(t){this._internalRoot=t}Xl.prototype.render=zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=kn();O_(a,s,t,n,null,null)},Xl.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;O_(t.current,2,null,t,null,null),El(),n[ea]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,t),a===0&&H_(t)}};var k_=e.version;if(k_!=="19.2.0")throw Error(r(527,k_,"19.2.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var OS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{jt=kl.inject(OS),Ct=kl}catch{}}return Mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Qp,f=Jp,_=$p;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=L_(t,1,!1,null,null,a,s,null,u,f,_,X_),t[ea]=n.current,gf(t),new zf(n)},Mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Qp,_=Jp,E=$p,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=L_(t,1,!0,n,a??null,s,u,z,f,_,E,X_),n.context=N_(null),a=n.current,s=kn(),s=vr(s),u=ua(s),u.callback=null,ca(a,u,s),a=s,n.current.lanes=a,_n(n,a),Si(n),t[ea]=n.current,gf(t),new Xl(n)},Mo.version="19.2.0",Mo}var tg;function WS(){if(tg)return Ff.exports;tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ff.exports=kS(),Ff.exports}var qS=WS();const YS=Qg(qS);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="166",ZS=0,eg=1,jS=2,Jg=1,KS=2,Yi=3,Pa=0,Pn=1,Zi=2,Na=0,_s=1,ng=2,ig=3,ag=4,QS=5,lr=100,JS=101,$S=102,tx=103,ex=104,nx=200,ix=201,ax=202,rx=203,gh=204,vh=205,sx=206,ox=207,lx=208,ux=209,cx=210,fx=211,hx=212,dx=213,px=214,mx=0,_x=1,gx=2,Mu=3,vx=4,Sx=5,xx=6,Mx=7,$g=0,yx=1,Ex=2,Oa=0,Tx=1,Ax=2,bx=3,Rx=4,Cx=5,wx=6,Dx=7,tv=300,Ss=301,xs=302,Sh=303,xh=304,Ru=306,Mh=1e3,fr=1001,yh=1002,ii=1003,Ux=1004,Wl=1005,di=1006,Xf=1007,hr=1008,Qi=1009,ev=1010,nv=1011,Co=1012,$h=1013,pr=1014,ji=1015,wo=1016,td=1017,ed=1018,Ms=1020,iv=35902,av=1021,rv=1022,pi=1023,sv=1024,ov=1025,gs=1026,ys=1027,lv=1028,nd=1029,uv=1030,id=1031,ad=1033,mu=33776,_u=33777,gu=33778,vu=33779,Eh=35840,Th=35841,Ah=35842,bh=35843,Rh=36196,Ch=37492,wh=37496,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,zh=37814,Bh=37815,Ih=37816,Fh=37817,Hh=37818,Gh=37819,Vh=37820,Xh=37821,Su=36492,kh=36494,Wh=36495,cv=36283,qh=36284,Yh=36285,Zh=36286,Lx=3200,Nx=3201,Ox=0,Px=1,La="",xi="srgb",za="srgb-linear",rd="display-p3",Cu="display-p3-linear",yu="linear",Ie="srgb",Eu="rec709",Tu="p3",Jr=7680,rg=519,zx=512,Bx=513,Ix=514,fv=515,Fx=516,Hx=517,Gx=518,Vx=519,sg=35044,og="300 es",Ki=2e3,Au=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=Math.PI/180,jh=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function Xx(o,e){return(o%e+e)%e}function Wf(o,e,i){return(1-i)*o+i*e}function yo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],S=r[7],x=r[2],y=r[5],A=r[8],C=l[0],M=l[3],v=l[6],B=l[1],w=l[4],P=l[7],nt=l[2],H=l[5],O=l[8];return c[0]=h*C+d*B+m*nt,c[3]=h*M+d*w+m*H,c[6]=h*v+d*P+m*O,c[1]=p*C+g*B+S*nt,c[4]=p*M+g*w+S*H,c[7]=p*v+g*P+S*O,c[2]=x*C+y*B+A*nt,c[5]=x*M+y*w+A*H,c[8]=x*v+y*P+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],S=g*h-d*p,x=d*m-g*c,y=p*c-h*m,A=i*S+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(l*p-g*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new se;function hv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kx(){const o=bu("canvas");return o.style.display="block",o}const lg={};function dv(o){o in lg||(lg[o]=!0,console.warn(o))}function Wx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const ug=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cg=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ql={[za]:{transfer:yu,primaries:Eu,toReference:o=>o,fromReference:o=>o},[xi]:{transfer:Ie,primaries:Eu,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Cu]:{transfer:yu,primaries:Tu,toReference:o=>o.applyMatrix3(cg),fromReference:o=>o.applyMatrix3(ug)},[rd]:{transfer:Ie,primaries:Tu,toReference:o=>o.convertSRGBToLinear().applyMatrix3(cg),fromReference:o=>o.applyMatrix3(ug).convertLinearToSRGB()}},qx=new Set([za,Cu]),Re={enabled:!0,_workingColorSpace:za,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!qx.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=ql[e].toReference,l=ql[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return ql[o].primaries},getTransfer:function(o){return o===La?yu:ql[o].transfer}};function vs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class Yx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=bu("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=vs(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(vs(i[r]/255)*255):i[r]=vs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zx=0;class pv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Zf(l[h].image)):c.push(Zf(l[h]))}else c=Zf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Yx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jx=0;class zn extends Ts{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=fr,l=fr,c=di,h=hr,d=pi,m=Qi,p=zn.DEFAULT_ANISOTROPY,g=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Do(),this.name="",this.source=new pv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=tv;zn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],S=m[8],x=m[1],y=m[5],A=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(S-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(S+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,P=(y+1)/2,nt=(v+1)/2,H=(g+x)/4,O=(S+C)/4,Q=(A+M)/4;return w>P&&w>nt?w<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(w),l=H/r,c=O/r):P>nt?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=H/l,c=Q/l):nt<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(nt),r=O/c,l=Q/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-A)*(M-A)+(S-C)*(S-C)+(x-g)*(x-g));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(S-C)/B,this.z=(x-g)/B,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kx extends Ts{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new zn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new pv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Kx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class mv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],S=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(S!==C||m!==x||p!==y||g!==A){let M=1-d;const v=m*x+p*y+g*A+S*C,B=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const nt=Math.sqrt(w),H=Math.atan2(nt,v*B);M=Math.sin(M*H)/nt,d=Math.sin(d*H)/nt}const P=d*B;if(m=m*M+x*P,p=p*M+y*P,g=g*M+A*P,S=S*M+C*P,M===1-d){const nt=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=nt,p*=nt,g*=nt,S*=nt}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],S=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+g*S+m*y-p*x,e[i+1]=m*A+g*x+p*S-d*y,e[i+2]=p*A+g*y+d*x-m*S,e[i+3]=g*A-d*S-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),S=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*g*S+p*y*A,this._y=p*y*S-x*g*A,this._z=p*g*A+x*y*S,this._w=p*g*S-x*y*A;break;case"YXZ":this._x=x*g*S+p*y*A,this._y=p*y*S-x*g*A,this._z=p*g*A-x*y*S,this._w=p*g*S+x*y*A;break;case"ZXY":this._x=x*g*S-p*y*A,this._y=p*y*S+x*g*A,this._z=p*g*A+x*y*S,this._w=p*g*S-x*y*A;break;case"ZYX":this._x=x*g*S-p*y*A,this._y=p*y*S+x*g*A,this._z=p*g*A-x*y*S,this._w=p*g*S+x*y*A;break;case"YZX":this._x=x*g*S+p*y*A,this._y=p*y*S+x*g*A,this._z=p*g*A-x*y*S,this._w=p*g*S-x*y*A;break;case"XZY":this._x=x*g*S-p*y*A,this._y=p*y*S-x*g*A,this._z=p*g*A+x*y*S,this._w=p*g*S+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],S=i[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),S=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*S+this._w*x,this._x=r*S+this._x*x,this._y=l*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+m*p+h*S-d*g,this.y=r+m*g+d*p-c*S,this.z=l+m*S+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new rt,fg=new Uo;class Lo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(c,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Zl.subVectors(this.max,Eo),ts.subVectors(e.a,Eo),es.subVectors(e.b,Eo),ns.subVectors(e.c,Eo),ba.subVectors(es,ts),Ra.subVectors(ns,es),tr.subVectors(ts,ns);let i=[0,-ba.z,ba.y,0,-Ra.z,Ra.y,0,-tr.z,tr.y,ba.z,0,-ba.x,Ra.z,0,-Ra.x,tr.z,0,-tr.x,-ba.y,ba.x,0,-Ra.y,Ra.x,0,-tr.y,tr.x,0];return!Kf(i,ts,es,ns,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,ts,es,ns,Zl))?!1:(jl.crossVectors(ba,Ra),i=[jl.x,jl.y,jl.z],Kf(i,ts,es,ns,Zl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],ui=new rt,Yl=new Lo,ts=new rt,es=new rt,ns=new rt,ba=new rt,Ra=new rt,tr=new rt,Eo=new rt,Zl=new rt,jl=new rt,er=new rt;function Kf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){er.fromArray(o,c);const d=l.x*Math.abs(er.x)+l.y*Math.abs(er.y)+l.z*Math.abs(er.z),m=e.dot(er),p=i.dot(er),g=r.dot(er);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Jx=new Lo,To=new rt,Qf=new rt;class sd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Jx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Qf)),this.expandByPoint(To.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new rt,Jf=new rt,Kl=new rt,Ca=new rt,$f=new rt,Ql=new rt,th=new rt;class $x{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Xi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jf.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),Ca.copy(this.origin).sub(Jf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Ca.dot(this.direction),m=-Ca.dot(Kl),p=Ca.lengthSq(),g=Math.abs(1-h*h);let S,x,y,A;if(g>0)if(S=h*m-d,x=h*d-m,A=c*g,S>=0)if(x>=-A)if(x<=A){const C=1/g;S*=C,x*=C,y=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;else x=-c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;else x<=-A?(S=Math.max(0,-(-h*c+d)),x=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+x*(x+2*m)+p):x<=A?(S=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(S=Math.max(0,-(h*c+d)),x=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+x*(x+2*m)+p);else x=h>0?-c:c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Jf).addScaledVector(Kl,x),y}intersectSphere(e,i){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),l=Xi.dot(Xi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,h=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,h=(e.min.y-x.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,i,r,l,c){$f.subVectors(i,e),Ql.subVectors(r,e),th.crossVectors($f,Ql);let h=this.direction.dot(th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,e);const m=d*this.direction.dot(Ql.crossVectors(Ca,Ql));if(m<0)return null;const p=d*this.direction.dot($f.cross(Ca));if(p<0||m+p>h)return null;const g=-d*Ca.dot(th);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,c,h,d,m,p,g,S,x,y,A,C,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,g,S,x,y,A,C,M)}set(e,i,r,l,c,h,d,m,p,g,S,x,y,A,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=S,v[14]=x,v[3]=y,v[7]=A,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),c=1/is.setFromMatrixColumn(e,1).length(),h=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=h*g,y=h*S,A=d*g,C=d*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=y+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*g,y=m*S,A=p*g,C=p*S;i[0]=x+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*S,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*g,y=m*S,A=p*g,C=p*S;i[0]=x-C*d,i[4]=-h*S,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*g,y=h*S,A=d*g,C=d*S;i[0]=m*g,i[4]=A*p-y,i[8]=x*p+C,i[1]=m*S,i[5]=C*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=C-x*S,i[8]=A*S+y,i[1]=S,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*S+A,i[10]=x-C*S}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=x*S+C,i[5]=h*g,i[9]=y*S-A,i[2]=A*S-y,i[6]=d*g,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,eM)}lookAt(e,i,r){const l=this.elements;return Wn.subVectors(e,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),wa.crossVectors(r,Wn),wa.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),wa.crossVectors(r,Wn)),wa.normalize(),Jl.crossVectors(Wn,wa),l[0]=wa.x,l[4]=Jl.x,l[8]=Wn.x,l[1]=wa.y,l[5]=Jl.y,l[9]=Wn.y,l[2]=wa.z,l[6]=Jl.z,l[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],S=r[5],x=r[9],y=r[13],A=r[2],C=r[6],M=r[10],v=r[14],B=r[3],w=r[7],P=r[11],nt=r[15],H=l[0],O=l[4],Q=l[8],D=l[12],R=l[1],G=l[5],lt=l[9],st=l[13],pt=l[2],ft=l[6],L=l[10],q=l[14],Z=l[3],yt=l[7],Tt=l[11],U=l[15];return c[0]=h*H+d*R+m*pt+p*Z,c[4]=h*O+d*G+m*ft+p*yt,c[8]=h*Q+d*lt+m*L+p*Tt,c[12]=h*D+d*st+m*q+p*U,c[1]=g*H+S*R+x*pt+y*Z,c[5]=g*O+S*G+x*ft+y*yt,c[9]=g*Q+S*lt+x*L+y*Tt,c[13]=g*D+S*st+x*q+y*U,c[2]=A*H+C*R+M*pt+v*Z,c[6]=A*O+C*G+M*ft+v*yt,c[10]=A*Q+C*lt+M*L+v*Tt,c[14]=A*D+C*st+M*q+v*U,c[3]=B*H+w*R+P*pt+nt*Z,c[7]=B*O+w*G+P*ft+nt*yt,c[11]=B*Q+w*lt+P*L+nt*Tt,c[15]=B*D+w*st+P*q+nt*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],S=e[6],x=e[10],y=e[14],A=e[3],C=e[7],M=e[11],v=e[15];return A*(+c*m*S-l*p*S-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*g-c*m*g)+M*(+i*p*S-i*d*y-c*h*S+r*h*y+c*d*g-r*p*g)+v*(-l*d*g-i*m*S+i*d*x+l*h*S-r*h*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],S=e[9],x=e[10],y=e[11],A=e[12],C=e[13],M=e[14],v=e[15],B=S*M*p-C*x*p+C*m*y-d*M*y-S*m*v+d*x*v,w=A*x*p-g*M*p-A*m*y+h*M*y+g*m*v-h*x*v,P=g*C*p-A*S*p+A*d*y-h*C*y-g*d*v+h*S*v,nt=A*S*m-g*C*m-A*d*x+h*C*x+g*d*M-h*S*M,H=i*B+r*w+l*P+c*nt;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=B*O,e[1]=(C*x*c-S*M*c-C*l*y+r*M*y+S*l*v-r*x*v)*O,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*v+r*m*v)*O,e[3]=(S*m*c-d*x*c-S*l*p+r*x*p+d*l*y-r*m*y)*O,e[4]=w*O,e[5]=(g*M*c-A*x*c+A*l*y-i*M*y-g*l*v+i*x*v)*O,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*v-i*m*v)*O,e[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*y+i*m*y)*O,e[8]=P*O,e[9]=(A*S*c-g*C*c-A*r*y+i*C*y+g*r*v-i*S*v)*O,e[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*v+i*d*v)*O,e[11]=(g*d*c-h*S*c-g*r*p+i*S*p+h*r*y-i*d*y)*O,e[12]=nt*O,e[13]=(g*C*l-A*S*l+A*r*x-i*C*x-g*r*M+i*S*M)*O,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*O,e[15]=(h*S*l-g*d*l+g*r*m-i*S*m-h*r*x+i*d*x)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,S=d+d,x=c*p,y=c*g,A=c*S,C=h*g,M=h*S,v=d*S,B=m*p,w=m*g,P=m*S,nt=r.x,H=r.y,O=r.z;return l[0]=(1-(C+v))*nt,l[1]=(y+P)*nt,l[2]=(A-w)*nt,l[3]=0,l[4]=(y-P)*H,l[5]=(1-(x+v))*H,l[6]=(M+B)*H,l[7]=0,l[8]=(A+w)*O,l[9]=(M-B)*O,l[10]=(1-(x+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],ci.copy(this);const p=1/c,g=1/h,S=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=S,ci.elements[9]*=S,ci.elements[10]*=S,i.setFromRotationMatrix(ci),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ki){const m=this.elements,p=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let y,A;if(d===Ki)y=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Au)y=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ki){const m=this.elements,p=1/(i-e),g=1/(r-l),S=1/(h-c),x=(i+e)*p,y=(r+l)*g;let A,C;if(d===Ki)A=(h+c)*S,C=-2*S;else if(d===Au)A=c*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new rt,ci=new sn,tM=new rt(0,0,0),eM=new rt(1,1,1),wa=new rt,Jl=new rt,Wn=new rt,hg=new sn,dg=new Uo;class Ji{constructor(e=0,i=0,r=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],S=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(On(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-On(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nM=0;const pg=new rt,as=new Uo,ki=new sn,$l=new rt,Ao=new rt,iM=new rt,aM=new Uo,mg=new rt(1,0,0),_g=new rt(0,1,0),gg=new rt(0,0,1),vg={type:"added"},rM={type:"removed"},rs={type:"childadded",child:null},eh={type:"childremoved",child:null};class Yn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new rt,i=new Ji,r=new Uo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new se}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(mg,e)}rotateY(e){return this.rotateOnAxis(_g,e)}rotateZ(e){return this.rotateOnAxis(gg,e)}translateOnAxis(e,i){return pg.copy(e).applyQuaternion(this.quaternion),this.position.add(pg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(mg,e)}translateY(e){return this.translateOnAxis(_g,e)}translateZ(e){return this.translateOnAxis(gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?$l.copy(e):$l.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Ao,$l,this.up):ki.lookAt($l,Ao,this.up),this.quaternion.setFromRotationMatrix(ki),l&&(ki.extractRotation(l.matrixWorld),as.setFromRotationMatrix(ki),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vg),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(rM),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vg),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,iM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,aM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),S=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Yn.DEFAULT_UP=new rt(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new rt,Wi=new rt,nh=new rt,qi=new rt,ss=new rt,os=new rt,Sg=new rt,ih=new rt,ah=new rt,rh=new rt;class yi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){fi.subVectors(l,i),Wi.subVectors(r,i),nh.subVectors(e,i);const h=fi.dot(fi),d=fi.dot(Wi),m=fi.dot(nh),p=Wi.dot(Wi),g=Wi.dot(nh),S=h*p-d*d;if(S===0)return c.set(0,0,0),null;const x=1/S,y=(p*m-d*g)*x,A=(h*g-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,qi.x),m.addScaledVector(h,qi.y),m.addScaledVector(d,qi.z),m)}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),Wi.subVectors(e,i),fi.cross(Wi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;ss.subVectors(l,r),os.subVectors(c,r),ih.subVectors(e,r);const m=ss.dot(ih),p=os.dot(ih);if(m<=0&&p<=0)return i.copy(r);ah.subVectors(e,l);const g=ss.dot(ah),S=os.dot(ah);if(g>=0&&S<=g)return i.copy(l);const x=m*S-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ss,h);rh.subVectors(e,c);const y=ss.dot(rh),A=os.dot(rh);if(A>=0&&y<=A)return i.copy(c);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(os,d);const M=g*A-y*S;if(M<=0&&S-g>=0&&y-A>=0)return Sg.subVectors(c,l),d=(S-g)/(S-g+(y-A)),i.copy(l).addScaledVector(Sg,d);const v=1/(M+C+x);return h=C*v,d=x*v,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},tu={h:0,s:0,l:0};function sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Re.workingColorSpace){if(e=Xx(e,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=sh(h,c,e+1/3),this.g=sh(h,c,e),this.b=sh(h,c,e-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(e,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const r=gv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Yf(e.r),this.g=Yf(e.g),this.b=Yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Re.fromWorkingColorSpace(En.copy(this),e),Math.round(On(En.r*255,0,255))*65536+Math.round(On(En.g*255,0,255))*256+Math.round(On(En.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.fromWorkingColorSpace(En.copy(this),i);const r=En.r,l=En.g,c=En.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=g<=.5?S/(h+d):S/(2-h-d),h){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=xi){Re.fromWorkingColorSpace(En.copy(this),e);const i=En.r,r=En.g,l=En.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+i,Da.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Da),e.getHSL(tu);const r=Wf(Da.h,tu.h,i),l=Wf(Da.s,tu.s,i),c=Wf(Da.l,tu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ue;Ue.NAMES=gv;let sM=0;class wu extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=_s,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=vh,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Mu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Pa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Mu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class vv extends wu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=$g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new rt,eu=new Ee;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=sg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(e),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(e),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.transformDirection(e),this.setXYZ(i,en.x,en.y,en.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),c=Nn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sg&&(e.usage=this.usage),e}}class Sv extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class xv extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class dr extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let oM=0;const ni=new sn,oh=new Yn,ls=new rt,qn=new Lo,bo=new Lo,cn=new rt;class _r extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hv(e)?xv:Sv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new dr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];qn.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(qn.min,bo.min),qn.expandByPoint(cn),cn.addVectors(qn.max,bo.max),qn.expandByPoint(cn)):(qn.expandByPoint(bo.min),qn.expandByPoint(bo.max))}qn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)cn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(cn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)cn.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(e,p),cn.add(ls)),l=Math.max(l,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new rt,m[Q]=new rt;const p=new rt,g=new rt,S=new rt,x=new Ee,y=new Ee,A=new Ee,C=new rt,M=new rt;function v(Q,D,R){p.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,D),S.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Q),y.fromBufferAttribute(c,D),A.fromBufferAttribute(c,R),g.sub(p),S.sub(p),y.sub(x),A.sub(x);const G=1/(y.x*A.y-A.x*y.y);isFinite(G)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(S,-y.y).multiplyScalar(G),M.copy(S).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(G),d[Q].add(C),d[D].add(C),d[R].add(C),m[Q].add(M),m[D].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let Q=0,D=B.length;Q<D;++Q){const R=B[Q],G=R.start,lt=R.count;for(let st=G,pt=G+lt;st<pt;st+=3)v(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const w=new rt,P=new rt,nt=new rt,H=new rt;function O(Q){nt.fromBufferAttribute(l,Q),H.copy(nt);const D=d[Q];w.copy(D),w.sub(nt.multiplyScalar(nt.dot(D))).normalize(),P.crossVectors(H,D);const G=P.dot(m[Q])<0?-1:1;h.setXYZW(Q,w.x,w.y,w.z,G)}for(let Q=0,D=B.length;Q<D;++Q){const R=B[Q],G=R.start,lt=R.count;for(let st=G,pt=G+lt;st<pt;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,S=new rt;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),S.subVectors(l,c),g.cross(S),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),S.subVectors(l,c),g.cross(S),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)cn.fromBufferAttribute(e,i),cn.normalize(),e.setXYZ(i,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,S=d.normalized,x=new p.constructor(m.length*g);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let v=0;v<g;v++)x[A++]=p[y++]}return new Ti(x,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _r,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,S=p.length;g<S;g++){const x=p[g],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,x=p.length;S<x;S++){const y=p[S];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],S=c[p];for(let x=0,y=S.length;x<y;x++)g.push(S[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new sn,nr=new $x,nu=new sd,Mg=new rt,us=new rt,cs=new rt,fs=new rt,lh=new rt,iu=new rt,au=new Ee,ru=new Ee,su=new Ee,yg=new rt,Eg=new rt,Tg=new rt,ou=new rt,lu=new rt;class Ei extends Yn{constructor(e=new _r,i=new vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){iu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],S=c[m];g!==0&&(lh.fromBufferAttribute(S,e),h?iu.addScaledVector(lh,g):iu.addScaledVector(lh.sub(i),g))}i.add(iu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(c),nr.copy(e.ray).recast(e.near),!(nu.containsPoint(nr.origin)===!1&&(nr.intersectSphere(nu,Mg)===null||nr.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(xg.copy(c).invert(),nr.copy(e.ray).applyMatrix4(xg),!(r.boundingBox!==null&&nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],v=h[M.materialIndex],B=Math.max(M.start,y.start),w=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let P=B,nt=w;P<nt;P+=3){const H=d.getX(P),O=d.getX(P+1),Q=d.getX(P+2);l=uu(this,v,e,r,p,g,S,H,O,Q),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,v=C;M<v;M+=3){const B=d.getX(M),w=d.getX(M+1),P=d.getX(M+2);l=uu(this,h,e,r,p,g,S,B,w,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],v=h[M.materialIndex],B=Math.max(M.start,y.start),w=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=B,nt=w;P<nt;P+=3){const H=P,O=P+1,Q=P+2;l=uu(this,v,e,r,p,g,S,H,O,Q),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,v=C;M<v;M+=3){const B=M,w=M+1,P=M+2;l=uu(this,h,e,r,p,g,S,B,w,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function lM(o,e,i,r,l,c,h,d){let m;if(e.side===Pn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Pa,d),m===null)return null;lu.copy(d),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function uu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,us),o.getVertexPosition(m,cs),o.getVertexPosition(p,fs);const g=lM(o,e,i,r,us,cs,fs,ou);if(g){l&&(au.fromBufferAttribute(l,d),ru.fromBufferAttribute(l,m),su.fromBufferAttribute(l,p),g.uv=yi.getInterpolation(ou,us,cs,fs,au,ru,su,new Ee)),c&&(au.fromBufferAttribute(c,d),ru.fromBufferAttribute(c,m),su.fromBufferAttribute(c,p),g.uv1=yi.getInterpolation(ou,us,cs,fs,au,ru,su,new Ee)),h&&(yg.fromBufferAttribute(h,d),Eg.fromBufferAttribute(h,m),Tg.fromBufferAttribute(h,p),g.normal=yi.getInterpolation(ou,us,cs,fs,yg,Eg,Tg,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};yi.getNormal(us,cs,fs,S.normal),g.face=S}return g}class No extends _r{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],S=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new dr(p,3)),this.setAttribute("normal",new dr(g,3)),this.setAttribute("uv",new dr(S,2));function A(C,M,v,B,w,P,nt,H,O,Q,D){const R=P/O,G=nt/Q,lt=P/2,st=nt/2,pt=H/2,ft=O+1,L=Q+1;let q=0,Z=0;const yt=new rt;for(let Tt=0;Tt<L;Tt++){const U=Tt*G-st;for(let et=0;et<ft;et++){const gt=et*R-lt;yt[C]=gt*B,yt[M]=U*w,yt[v]=pt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[v]=H>0?1:-1,g.push(yt.x,yt.y,yt.z),S.push(et/O),S.push(1-Tt/Q),q+=1}}for(let Tt=0;Tt<Q;Tt++)for(let U=0;U<O;U++){const et=x+U+ft*Tt,gt=x+U+ft*(Tt+1),W=x+(U+1)+ft*(Tt+1),ot=x+(U+1)+ft*Tt;m.push(et,gt,ot),m.push(gt,W,ot),Z+=6}d.addGroup(y,Z,D),y+=Z,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)e[l]=r[l]}return e}function uM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Mv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const cM={clone:Es,merge:An};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends wu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class od extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ki}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new rt,Ag=new Ee,bg=new Ee;class hi extends od{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=jh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,i){return this.getViewBounds(e,Ag,bg),i.subVectors(bg,Ag)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ds=1;class dM extends Yn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(hs,ds,e,i);l.layers=this.layers,this.add(l);const c=new hi(hs,ds,e,i);c.layers=this.layers,this.add(c);const h=new hi(hs,ds,e,i);h.layers=this.layers,this.add(h);const d=new hi(hs,ds,e,i);d.layers=this.layers,this.add(d);const m=new hi(hs,ds,e,i);m.layers=this.layers,this.add(m);const p=new hi(hs,ds,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(S,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class yv extends zn{constructor(e,i,r,l,c,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:Ss,super(e,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pM extends mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new yv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new No(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Na});c.uniforms.tEquirect.value=i;const h=new Ei(l,c),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=di),new dM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const uh=new rt,mM=new rt,_M=new se;class sr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(mM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||_M.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new sd,cu=new rt;class Ev{constructor(e=new sr,i=new sr,r=new sr,l=new sr,c=new sr,h=new sr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ki){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],S=l[6],x=l[7],y=l[8],A=l[9],C=l[10],M=l[11],v=l[12],B=l[13],w=l[14],P=l[15];if(r[0].setComponents(m-c,x-p,M-y,P-v).normalize(),r[1].setComponents(m+c,x+p,M+y,P+v).normalize(),r[2].setComponents(m+h,x+g,M+A,P+B).normalize(),r[3].setComponents(m-h,x-g,M-A,P-B).normalize(),r[4].setComponents(m-d,x-S,M-C,P-w).normalize(),i===Ki)r[5].setComponents(m+d,x+S,M+C,P+w).normalize();else if(i===Au)r[5].setComponents(d,S,C,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cu.x=l.normal.x>0?e.max.x:e.min.x,cu.y=l.normal.y>0?e.max.y:e.min.y,cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function gM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,p){const g=m.array,S=m._updateRange,x=m.updateRanges;if(o.bindBuffer(p,d),S.count===-1&&x.length===0&&o.bufferSubData(p,0,g),x.length!==0){for(let y=0,A=x.length;y<A;y++){const C=x[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(p,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count),S.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}class Oo extends _r{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,S=e/d,x=i/m,y=[],A=[],C=[],M=[];for(let v=0;v<g;v++){const B=v*x-h;for(let w=0;w<p;w++){const P=w*S-c;A.push(P,-B,0),C.push(0,0,1),M.push(w/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<d;B++){const w=B+p*v,P=B+p*(v+1),nt=B+1+p*(v+1),H=B+1+p*v;y.push(w,P,H),y.push(P,nt,H)}this.setIndex(y),this.setAttribute("position",new dr(A,3)),this.setAttribute("normal",new dr(C,3)),this.setAttribute("uv",new dr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,KM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,my=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_y=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ry=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,AE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:vM,alphahash_pars_fragment:SM,alphamap_fragment:xM,alphamap_pars_fragment:MM,alphatest_fragment:yM,alphatest_pars_fragment:EM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:bM,batching_vertex:RM,begin_vertex:CM,beginnormal_vertex:wM,bsdfs:DM,iridescence_fragment:UM,bumpmap_pars_fragment:LM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:zM,color_fragment:BM,color_pars_fragment:IM,color_pars_vertex:FM,color_vertex:HM,common:GM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:XM,displacementmap_pars_vertex:kM,displacementmap_vertex:WM,emissivemap_fragment:qM,emissivemap_pars_fragment:YM,colorspace_fragment:ZM,colorspace_pars_fragment:jM,envmap_fragment:KM,envmap_common_pars_fragment:QM,envmap_pars_fragment:JM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:cy,envmap_vertex:ty,fog_vertex:ey,fog_pars_vertex:ny,fog_fragment:iy,fog_pars_fragment:ay,gradientmap_pars_fragment:ry,lightmap_pars_fragment:sy,lights_lambert_fragment:oy,lights_lambert_pars_fragment:ly,lights_pars_begin:uy,lights_toon_fragment:fy,lights_toon_pars_fragment:hy,lights_phong_fragment:dy,lights_phong_pars_fragment:py,lights_physical_fragment:my,lights_physical_pars_fragment:_y,lights_fragment_begin:gy,lights_fragment_maps:vy,lights_fragment_end:Sy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:My,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:Ey,map_fragment:Ty,map_pars_fragment:Ay,map_particle_fragment:by,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:wy,morphinstance_vertex:Dy,morphcolor_vertex:Uy,morphnormal_vertex:Ly,morphtarget_pars_vertex:Ny,morphtarget_vertex:Oy,normal_fragment_begin:Py,normal_fragment_maps:zy,normal_pars_fragment:By,normal_pars_vertex:Iy,normal_vertex:Fy,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Gy,clearcoat_normal_fragment_maps:Vy,clearcoat_pars_fragment:Xy,iridescence_pars_fragment:ky,opaque_fragment:Wy,packing:qy,premultiplied_alpha_fragment:Yy,project_vertex:Zy,dithering_fragment:jy,dithering_pars_fragment:Ky,roughnessmap_fragment:Qy,roughnessmap_pars_fragment:Jy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:tE,shadowmap_vertex:eE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:aE,skinning_vertex:rE,skinnormal_vertex:sE,specularmap_fragment:oE,specularmap_pars_fragment:lE,tonemapping_fragment:uE,tonemapping_pars_fragment:cE,transmission_fragment:fE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:_E,background_vert:gE,background_frag:vE,backgroundCube_vert:SE,backgroundCube_frag:xE,cube_vert:ME,cube_frag:yE,depth_vert:EE,depth_frag:TE,distanceRGBA_vert:AE,distanceRGBA_frag:bE,equirect_vert:RE,equirect_frag:CE,linedashed_vert:wE,linedashed_frag:DE,meshbasic_vert:UE,meshbasic_frag:LE,meshlambert_vert:NE,meshlambert_frag:OE,meshmatcap_vert:PE,meshmatcap_frag:zE,meshnormal_vert:BE,meshnormal_frag:IE,meshphong_vert:FE,meshphong_frag:HE,meshphysical_vert:GE,meshphysical_frag:VE,meshtoon_vert:XE,meshtoon_frag:kE,points_vert:WE,points_frag:qE,shadow_vert:YE,shadow_frag:ZE,sprite_vert:jE,sprite_frag:KE},Ut={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ue(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:An([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:An([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ue(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:An([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:An([Ut.points,Ut.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:An([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:An([Ut.common,Ut.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:An([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:An([Ut.sprite,Ut.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:An([Ut.common,Ut.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:An([Ut.lights,Ut.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const fu={r:0,b:0,g:0},ar=new Ji,QE=new sn;function JE(o,e,i,r,l,c,h){const d=new Ue(0);let m=c===!0?0:1,p,g,S=null,x=0,y=null;function A(B){let w=B.isScene===!0?B.background:null;return w&&w.isTexture&&(w=(B.backgroundBlurriness>0?i:e).get(w)),w}function C(B){let w=!1;const P=A(B);P===null?v(d,m):P&&P.isColor&&(v(P,1),w=!0);const nt=o.xr.getEnvironmentBlendMode();nt==="additive"?r.buffers.color.setClear(0,0,0,1,h):nt==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,w){const P=A(w);P&&(P.isCubeTexture||P.mapping===Ru)?(g===void 0&&(g=new Ei(new No(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Es(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(nt,H,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ar.copy(w.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(ar)),g.material.toneMapped=Re.getTransfer(P.colorSpace)!==Ie,(S!==P||x!==P.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,S=P,x=P.version,y=o.toneMapping),g.layers.enableAll(),B.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ei(new Oo(2,2),new $i({name:"BackgroundMaterial",uniforms:Es(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Re.getTransfer(P.colorSpace)!==Ie,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(S!==P||x!==P.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,S=P,x=P.version,y=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function v(B,w){B.getRGB(fu,Mv(o)),r.buffers.color.setClear(fu.r,fu.g,fu.b,w,h)}return{getClearColor:function(){return d},setClearColor:function(B,w=1){d.set(B),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,v(d,m)},render:C,addToRenderList:M}}function $E(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,G,lt,st,pt){let ft=!1;const L=S(st,lt,G);c!==L&&(c=L,p(c.object)),ft=y(R,st,lt,pt),ft&&A(R,st,lt,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,P(R,G,lt,st),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function S(R,G,lt){const st=lt.wireframe===!0;let pt=r[R.id];pt===void 0&&(pt={},r[R.id]=pt);let ft=pt[G.id];ft===void 0&&(ft={},pt[G.id]=ft);let L=ft[st];return L===void 0&&(L=x(m()),ft[st]=L),L}function x(R){const G=[],lt=[],st=[];for(let pt=0;pt<i;pt++)G[pt]=0,lt[pt]=0,st[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:st,object:R,attributes:{},index:null}}function y(R,G,lt,st){const pt=c.attributes,ft=G.attributes;let L=0;const q=lt.getAttributes();for(const Z in q)if(q[Z].location>=0){const Tt=pt[Z];let U=ft[Z];if(U===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),Tt===void 0||Tt.attribute!==U||U&&Tt.data!==U.data)return!0;L++}return c.attributesNum!==L||c.index!==st}function A(R,G,lt,st){const pt={},ft=G.attributes;let L=0;const q=lt.getAttributes();for(const Z in q)if(q[Z].location>=0){let Tt=ft[Z];Tt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const U={};U.attribute=Tt,Tt&&Tt.data&&(U.data=Tt.data),pt[Z]=U,L++}c.attributes=pt,c.attributesNum=L,c.index=st}function C(){const R=c.newAttributes;for(let G=0,lt=R.length;G<lt;G++)R[G]=0}function M(R){v(R,0)}function v(R,G){const lt=c.newAttributes,st=c.enabledAttributes,pt=c.attributeDivisors;lt[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),pt[R]!==G&&(o.vertexAttribDivisor(R,G),pt[R]=G)}function B(){const R=c.newAttributes,G=c.enabledAttributes;for(let lt=0,st=G.length;lt<st;lt++)G[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function w(R,G,lt,st,pt,ft,L){L===!0?o.vertexAttribIPointer(R,G,lt,pt,ft):o.vertexAttribPointer(R,G,lt,st,pt,ft)}function P(R,G,lt,st){C();const pt=st.attributes,ft=lt.getAttributes(),L=G.defaultAttributeValues;for(const q in ft){const Z=ft[q];if(Z.location>=0){let yt=pt[q];if(yt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const Tt=yt.normalized,U=yt.itemSize,et=e.get(yt);if(et===void 0)continue;const gt=et.buffer,W=et.type,ot=et.bytesPerElement,St=W===o.INT||W===o.UNSIGNED_INT||yt.gpuType===$h;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,Ht=Mt.stride,Ft=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ee=0;ee<Z.locationSize;ee++)v(Z.location+ee,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ee=0;ee<Z.locationSize;ee++)M(Z.location+ee);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ee=0;ee<Z.locationSize;ee++)w(Z.location+ee,U/Z.locationSize,W,Tt,Ht*ot,(Ft+U/Z.locationSize*ee)*ot,St)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<Z.locationSize;Mt++)v(Z.location+Mt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)M(Z.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Mt=0;Mt<Z.locationSize;Mt++)w(Z.location+Mt,U/Z.locationSize,W,Tt,U*ot,U/Z.locationSize*Mt*ot,St)}}else if(L!==void 0){const Tt=L[q];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Z.location,Tt);break;case 3:o.vertexAttrib3fv(Z.location,Tt);break;case 4:o.vertexAttrib4fv(Z.location,Tt);break;default:o.vertexAttrib1fv(Z.location,Tt)}}}}B()}function nt(){Q();for(const R in r){const G=r[R];for(const lt in G){const st=G[lt];for(const pt in st)g(st[pt].object),delete st[pt];delete G[lt]}delete r[R]}}function H(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const lt in G){const st=G[lt];for(const pt in st)g(st[pt].object),delete st[pt];delete G[lt]}delete r[R.id]}function O(R){for(const G in r){const lt=r[G];if(lt[R.id]===void 0)continue;const st=lt[R.id];for(const pt in st)g(st[pt].object),delete st[pt];delete lt[R.id]}}function Q(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:D,dispose:nt,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function tT(o,e,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,S){S!==0&&(o.drawArraysInstanced(r,p,g,S),i.update(g,r,S))}function d(p,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,S);let y=0;for(let A=0;A<S;A++)y+=g[A];i.update(y,r,1)}function m(p,g,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,S);let A=0;for(let C=0;C<S;C++)A+=g[C];for(let C=0;C<x.length;C++)i.update(A,r,x[C])}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function eT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==pi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const O=H===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Qi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ji&&!O)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),C=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,nt=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:C,maxAttributes:M,maxVertexUniforms:v,maxVaryings:B,maxFragmentUniforms:w,vertexTextures:P,maxSamples:nt}}function nT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new sr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||l;return l=x,r=S.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=g(S,x,0)},this.setState=function(S,x,y){const A=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,v=o.get(S);if(!l||A===null||A.length===0||c&&!M)c?g(null):p();else{const B=c?0:r,w=B*4;let P=v.clippingState||null;m.value=P,P=g(A,x,w,y);for(let nt=0;nt!==w;++nt)P[nt]=i[nt];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,x,y,A){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const v=y+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<v)&&(M=new Float32Array(v));for(let w=0,P=y;w!==C;++w,P+=4)h.copy(S[w]).applyMatrix4(B,d),h.normal.toArray(M,P),M[P+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function iT(o){let e=new WeakMap;function i(h,d){return d===Sh?h.mapping=Ss:d===xh&&(h.mapping=xs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Sh||d===xh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new pM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class aT extends od{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ms=4,Rg=[.125,.215,.35,.446,.526,.582],ur=20,ch=new aT,Cg=new Ue;let fh=null,hh=0,dh=0,ph=!1;const or=(1+Math.sqrt(5))/2,ps=1/or,wg=[new rt(-or,ps,0),new rt(or,ps,0),new rt(-ps,0,or),new rt(ps,0,or),new rt(0,or,-ps),new rt(0,or,ps),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,hu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ss||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:wo,format:pi,colorSpace:za,depthBuffer:!1},l=Ug(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rT(c)),this._blurMaterial=sT(c,e,i)}return l}_compileMaterial(e){const i=new Ei(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l){const d=new hi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(Cg),g.toneMapping=Oa,g.autoClear=!1;const y=new vv({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),A=new Ei(new No,y);let C=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,C=!0):(y.color.copy(Cg),C=!0);for(let v=0;v<6;v++){const B=v%3;B===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):B===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const w=this._cubeSize;hu(l,B*w,v>2?w:0,w,w),g.setRenderTarget(l),C&&g.render(A,d),g.render(e,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=x,g.autoClear=S,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ss||e.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;hu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=wg[(l-c-1)%wg.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new Ei(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ur-1),C=c/A,M=isFinite(c)?1+Math.floor(g*C):ur;M>ur&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ur}`);const v=[];let B=0;for(let O=0;O<ur;++O){const Q=O/C,D=Math.exp(-Q*Q/2);v.push(D),O===0?B+=D:O<M&&(B+=2*D)}for(let O=0;O<v.length;O++)v[O]=v[O]/B;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:w}=this;x.dTheta.value=A,x.mipInt.value=w-r;const P=this._sizeLods[l],nt=3*P*(l>w-ms?l-w+ms:0),H=4*(this._cubeSize-P);hu(i,nt,H,3*P,2*P),m.setRenderTarget(i),m.render(S,ch)}}function rT(o){const e=[],i=[],r=[];let l=o;const c=o-ms+1+Rg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ms?m=Rg[h-o+ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,S=1+p,x=[g,g,S,g,S,S,g,g,S,S,g,S],y=6,A=6,C=3,M=2,v=1,B=new Float32Array(C*A*y),w=new Float32Array(M*A*y),P=new Float32Array(v*A*y);for(let H=0;H<y;H++){const O=H%3*2/3-1,Q=H>2?0:-1,D=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];B.set(D,C*A*H),w.set(x,M*A*H);const R=[H,H,H,H,H,H];P.set(R,v*A*H)}const nt=new _r;nt.setAttribute("position",new Ti(B,C)),nt.setAttribute("uv",new Ti(w,M)),nt.setAttribute("faceIndex",new Ti(P,v)),e.push(nt),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Ug(o,e,i){const r=new mr(o,e,i);return r.texture.mapping=Ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function sT(o,e,i){const r=new Float32Array(ur),l=new rt(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Lg(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Ng(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sh||m===xh,g=m===Ss||m===xs;if(p||g){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Dg(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Dg(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function lT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&dv("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function uT(o,e,i,r){const l={},c=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);for(const A in x.morphAttributes){const C=x.morphAttributes[A];for(let M=0,v=C.length;M<v;M++)e.remove(C[M])}x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const A in x)e.update(x[A],o.ARRAY_BUFFER);const y=S.morphAttributes;for(const A in y){const C=y[A];for(let M=0,v=C.length;M<v;M++)e.update(C[M],o.ARRAY_BUFFER)}}function p(S){const x=[],y=S.index,A=S.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let w=0,P=B.length;w<P;w+=3){const nt=B[w+0],H=B[w+1],O=B[w+2];x.push(nt,H,H,O,O,nt)}}else if(A!==void 0){const B=A.array;C=A.version;for(let w=0,P=B.length/3-1;w<P;w+=3){const nt=w+0,H=w+1,O=w+2;x.push(nt,H,H,O,O,nt)}}else return;const M=new(hv(x)?xv:Sv)(x,1);M.version=C;const v=c.get(S);v&&e.remove(v),c.set(S,M)}function g(S){const x=c.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:g}}function cT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function g(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let v=0;v<A;v++)M+=y[v];i.update(M,r,1)}function S(x,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,y[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,A);let v=0;for(let B=0;B<A;B++)v+=y[B];for(let B=0;B<C.length;B++)i.update(v,r,C[B])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function fT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function hT(o,e,i){const r=new WeakMap,l=new fn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let R=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let P=0;A===!0&&(P=1),C===!0&&(P=2),M===!0&&(P=3);let nt=d.attributes.position.count*P,H=1;nt>e.maxTextureSize&&(H=Math.ceil(nt/e.maxTextureSize),nt=e.maxTextureSize);const O=new Float32Array(nt*H*4*S),Q=new mv(O,nt,H,S);Q.type=ji,Q.needsUpdate=!0;const D=P*4;for(let G=0;G<S;G++){const lt=v[G],st=B[G],pt=w[G],ft=nt*H*4*G;for(let L=0;L<lt.count;L++){const q=L*D;A===!0&&(l.fromBufferAttribute(lt,L),O[ft+q+0]=l.x,O[ft+q+1]=l.y,O[ft+q+2]=l.z,O[ft+q+3]=0),C===!0&&(l.fromBufferAttribute(st,L),O[ft+q+4]=l.x,O[ft+q+5]=l.y,O[ft+q+6]=l.z,O[ft+q+7]=0),M===!0&&(l.fromBufferAttribute(pt,L),O[ft+q+8]=l.x,O[ft+q+9]=l.y,O[ft+q+10]=l.z,O[ft+q+11]=pt.itemSize===4?l.w:1)}}x={count:S,texture:Q,size:new Ee(nt,H)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function dT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,S=e.get(m,g);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}class Av extends zn{constructor(e,i,r,l,c,h,d,m,p,g=gs){if(g!==gs&&g!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===gs&&(r=pr),r===void 0&&g===ys&&(r=Ms),super(null,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:ii,this.minFilter=m!==void 0?m:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const bv=new zn,Og=new Av(1,1),Rv=new mv,Cv=new Qx,wv=new yv,Pg=[],zg=[],Bg=new Float32Array(16),Ig=new Float32Array(9),Fg=new Float32Array(4);function As(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=Pg[l];if(c===void 0&&(c=new Float32Array(l),Pg[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Du(o,e){let i=zg[e];i===void 0&&(i=new Int32Array(e),zg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function vT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Fg.set(r),o.uniformMatrix2fv(this.addr,!1,Fg),ln(i,r)}}function ST(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Ig.set(r),o.uniformMatrix3fv(this.addr,!1,Ig),ln(i,r)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;Bg.set(r),o.uniformMatrix4fv(this.addr,!1,Bg),ln(i,r)}}function MT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function AT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function wT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Og.compareFunction=fv,c=Og):c=bv,i.setTexture2D(e||c,l)}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Cv,l)}function UT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||wv,l)}function LT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Rv,l)}function NT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return _T;case 35666:return gT;case 35674:return vT;case 35675:return ST;case 35676:return xT;case 5124:case 35670:return MT;case 35667:case 35671:return yT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return bT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}function OT(o,e){o.uniform1fv(this.addr,e)}function PT(o,e){const i=As(e,this.size,2);o.uniform2fv(this.addr,i)}function zT(o,e){const i=As(e,this.size,3);o.uniform3fv(this.addr,i)}function BT(o,e){const i=As(e,this.size,4);o.uniform4fv(this.addr,i)}function IT(o,e){const i=As(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function FT(o,e){const i=As(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function HT(o,e){const i=As(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function GT(o,e){o.uniform1iv(this.addr,e)}function VT(o,e){o.uniform2iv(this.addr,e)}function XT(o,e){o.uniform3iv(this.addr,e)}function kT(o,e){o.uniform4iv(this.addr,e)}function WT(o,e){o.uniform1uiv(this.addr,e)}function qT(o,e){o.uniform2uiv(this.addr,e)}function YT(o,e){o.uniform3uiv(this.addr,e)}function ZT(o,e){o.uniform4uiv(this.addr,e)}function jT(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||bv,c[h])}function KT(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Cv,c[h])}function QT(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||wv,c[h])}function JT(o,e,i){const r=this.cache,l=e.length,c=Du(i,l);on(r,c)||(o.uniform1iv(this.addr,c),ln(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Rv,c[h])}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return BT;case 35674:return IT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return XT;case 35669:case 35673:return kT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class tA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=NT(i.type)}}class eA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$T(i.type)}}class nA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function Hg(o,e){o.seq.push(e),o.map[e.id]=e}function iA(o,e,i){const r=o.name,l=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),h=mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Hg(i,p===void 0?new tA(d,o,e):new eA(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new nA(d),Hg(i,S)),i=S}}}class xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);iA(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Gg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const aA=37297;let rA=0;function sA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function oA(o){const e=Re.getPrimaries(Re.workingColorSpace),i=Re.getPrimaries(o);let r;switch(e===i?r="":e===Tu&&i===Eu?r="LinearDisplayP3ToLinearSRGB":e===Eu&&i===Tu&&(r="LinearSRGBToLinearDisplayP3"),o){case za:case Cu:return[r,"LinearTransferOETF"];case xi:case rd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Vg(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+sA(o.getShaderSource(e),h)}else return l}function lA(o,e){const i=oA(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function uA(o,e){let i;switch(e){case Tx:i="Linear";break;case Ax:i="Reinhard";break;case bx:i="OptimizedCineon";break;case Rx:i="ACESFilmic";break;case wx:i="AgX";break;case Dx:i="Neutral";break;case Cx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function cA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function fA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function hA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ro(o){return o!==""}function Xg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(o){return o.replace(dA,mA)}const pA=new Map;function mA(o,e){let i=re[e];if(i===void 0){const r=pA.get(e);if(r!==void 0)i=re[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kh(i)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(o){return o.replace(_A,gA)}function gA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function qg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===KS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case xs:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function MA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $g:e="ENVMAP_BLENDING_MULTIPLY";break;case yx:e="ENVMAP_BLENDING_MIX";break;case Ex:e="ENVMAP_BLENDING_ADD";break}return e}function yA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function EA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=vA(i),p=SA(i),g=xA(i),S=MA(i),x=yA(i),y=cA(i),A=fA(c),C=l.createProgram();let M,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ro).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ro).join(`
`),v.length>0&&(v+=`
`)):(M=[qg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),v=[qg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?re.tonemapping_pars_fragment:"",i.toneMapping!==Oa?uA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,lA("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),h=Kh(h),h=Xg(h,i),h=kg(h,i),d=Kh(d),d=Xg(d,i),d=kg(d,i),h=Wg(h),d=Wg(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===og?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=B+M+h,P=B+v+d,nt=Gg(l,l.VERTEX_SHADER,w),H=Gg(l,l.FRAGMENT_SHADER,P);l.attachShader(C,nt),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(G){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(nt).trim(),pt=l.getShaderInfoLog(H).trim();let ft=!0,L=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,nt,H);else{const q=Vg(l,nt,"vertex"),Z=Vg(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+q+`
`+Z)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||pt==="")&&(L=!1);L&&(G.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:st,prefix:M},fragmentShader:{log:pt,prefix:v}})}l.deleteShader(nt),l.deleteShader(H),Q=new xu(l,C),D=hA(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,aA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=nt,this.fragmentShader=H,this}let TA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new bA(e),i.set(e,r)),r}}class bA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function RA(o,e,i,r,l,c,h){const d=new _v,m=new AA,p=new Set,g=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,G,lt,st){const pt=lt.fog,ft=st.geometry,L=D.isMeshStandardMaterial?lt.environment:null,q=(D.isMeshStandardMaterial?i:e).get(D.envMap||L),Z=q&&q.mapping===Ru?q.image.height:null,yt=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Tt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,U=Tt!==void 0?Tt.length:0;let et=0;ft.morphAttributes.position!==void 0&&(et=1),ft.morphAttributes.normal!==void 0&&(et=2),ft.morphAttributes.color!==void 0&&(et=3);let gt,W,ot,St;if(yt){const ge=Mi[yt];gt=ge.vertexShader,W=ge.fragmentShader}else gt=D.vertexShader,W=D.fragmentShader,m.update(D),ot=m.getVertexShaderID(D),St=m.getFragmentShaderID(D);const Mt=o.getRenderTarget(),Ht=st.isInstancedMesh===!0,Ft=st.isBatchedMesh===!0,ee=!!D.map,Le=!!D.matcap,I=!!q,Ve=!!D.aoMap,ue=!!D.lightMap,Se=!!D.bumpMap,Gt=!!D.normalMap,Xe=!!D.displacementMap,Jt=!!D.emissiveMap,$t=!!D.metalnessMap,N=!!D.roughnessMap,T=D.anisotropy>0,it=D.clearcoat>0,xt=D.dispersion>0,_t=D.iridescence>0,vt=D.sheen>0,Wt=D.transmission>0,Dt=T&&!!D.anisotropyMap,Lt=it&&!!D.clearcoatMap,ne=it&&!!D.clearcoatNormalMap,At=it&&!!D.clearcoatRoughnessMap,Nt=_t&&!!D.iridescenceMap,he=_t&&!!D.iridescenceThicknessMap,jt=vt&&!!D.sheenColorMap,Ct=vt&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Zt=!!D.specularColorMap,Pe=!!D.specularIntensityMap,V=Wt&&!!D.transmissionMap,bt=Wt&&!!D.thicknessMap,ht=!!D.gradientMap,mt=!!D.alphaMap,Rt=D.alphaTest>0,Xt=!!D.alphaHash,oe=!!D.extensions;let Oe=Oa;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Oe=o.toneMapping);const nn={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:gt,fragmentShader:W,defines:D.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Ft,batchingColor:Ft&&st._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&st.instanceColor!==null,instancingMorph:Ht&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:za,alphaToCoverage:!!D.alphaToCoverage,map:ee,matcap:Le,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:Z,aoMap:Ve,lightMap:ue,bumpMap:Se,normalMap:Gt,displacementMap:x&&Xe,emissiveMap:Jt,normalMapObjectSpace:Gt&&D.normalMapType===Px,normalMapTangentSpace:Gt&&D.normalMapType===Ox,metalnessMap:$t,roughnessMap:N,anisotropy:T,anisotropyMap:Dt,clearcoat:it,clearcoatMap:Lt,clearcoatNormalMap:ne,clearcoatRoughnessMap:At,dispersion:xt,iridescence:_t,iridescenceMap:Nt,iridescenceThicknessMap:he,sheen:vt,sheenColorMap:jt,sheenRoughnessMap:Ct,specularMap:Yt,specularColorMap:Zt,specularIntensityMap:Pe,transmission:Wt,transmissionMap:V,thicknessMap:bt,gradientMap:ht,opaque:D.transparent===!1&&D.blending===_s&&D.alphaToCoverage===!1,alphaMap:mt,alphaTest:Rt,alphaHash:Xt,combine:D.combine,mapUv:ee&&C(D.map.channel),aoMapUv:Ve&&C(D.aoMap.channel),lightMapUv:ue&&C(D.lightMap.channel),bumpMapUv:Se&&C(D.bumpMap.channel),normalMapUv:Gt&&C(D.normalMap.channel),displacementMapUv:Xe&&C(D.displacementMap.channel),emissiveMapUv:Jt&&C(D.emissiveMap.channel),metalnessMapUv:$t&&C(D.metalnessMap.channel),roughnessMapUv:N&&C(D.roughnessMap.channel),anisotropyMapUv:Dt&&C(D.anisotropyMap.channel),clearcoatMapUv:Lt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:ne&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:he&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&C(D.sheenRoughnessMap.channel),specularMapUv:Yt&&C(D.specularMap.channel),specularColorMapUv:Zt&&C(D.specularColorMap.channel),specularIntensityMapUv:Pe&&C(D.specularIntensityMap.channel),transmissionMapUv:V&&C(D.transmissionMap.channel),thicknessMapUv:bt&&C(D.thicknessMap.channel),alphaMapUv:mt&&C(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Gt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(ee||mt),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ee&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Zi,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:oe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&D.extensions.multiDraw===!0||Ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return nn.vertexUv1s=p.has(1),nn.vertexUv2s=p.has(2),nn.vertexUv3s=p.has(3),p.clear(),nn}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(R,D),w(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function B(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function w(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),D.push(d.mask)}function P(D){const R=A[D.type];let G;if(R){const lt=Mi[R];G=cM.clone(lt.uniforms)}else G=D.uniforms;return G}function nt(D,R){let G;for(let lt=0,st=g.length;lt<st;lt++){const pt=g[lt];if(pt.cacheKey===R){G=pt,++G.usedTimes;break}}return G===void 0&&(G=new EA(o,R,D,c),g.push(G)),G}function H(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function O(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:P,acquireProgram:nt,releaseProgram:H,releaseShaderCache:O,programs:g,dispose:Q}}function CA(){let o=new WeakMap;function e(c){let h=o.get(c);return h===void 0&&(h={},o.set(c,h)),h}function i(c){o.delete(c)}function r(c,h,d){o.get(c)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function wA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Yg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Zg(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,x,y,A,C,M){let v=o[e];return v===void 0?(v={id:S.id,object:S,geometry:x,material:y,groupOrder:A,renderOrder:S.renderOrder,z:C,group:M},o[e]=v):(v.id=S.id,v.object=S,v.geometry=x,v.material=y,v.groupOrder=A,v.renderOrder=S.renderOrder,v.z=C,v.group=M),e++,v}function d(S,x,y,A,C,M){const v=h(S,x,y,A,C,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(S,x,y,A,C,M){const v=h(S,x,y,A,C,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(S,x){i.length>1&&i.sort(S||wA),r.length>1&&r.sort(x||Yg),l.length>1&&l.sort(x||Yg)}function g(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function DA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Zg,o.set(r,[h])):l>=c.length?(h=new Zg,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function UA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ue};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function LA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let NA=0;function OA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function PA(o){const e=new UA,i=LA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new sn,h=new sn;function d(p){let g=0,S=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,A=0,C=0,M=0,v=0,B=0,w=0,P=0,nt=0,H=0,O=0;p.sort(OA);for(let D=0,R=p.length;D<R;D++){const G=p[D],lt=G.color,st=G.intensity,pt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*st,S+=lt.g*st,x+=lt.b*st;else if(G.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(G.sh.coefficients[L],st);O++}else if(G.isDirectionalLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,Z=i.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=G.shadow.matrix,B++}r.directional[y]=L,y++}else if(G.isSpotLight){const L=e.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(lt).multiplyScalar(st),L.distance=pt,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,r.spot[C]=L;const q=G.shadow;if(G.map&&(r.spotLightMap[nt]=G.map,nt++,q.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[C]=q.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[C]=Z,r.spotShadowMap[C]=ft,P++}C++}else if(G.isRectAreaLight){const L=e.get(G);L.color.copy(lt).multiplyScalar(st),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=L,M++}else if(G.isPointLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const q=G.shadow,Z=i.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=G.shadow.matrix,w++}r.point[A]=L,A++}else if(G.isHemisphereLight){const L=e.get(G);L.skyColor.copy(G.color).multiplyScalar(st),L.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[v]=L,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=S,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==A||Q.spotLength!==C||Q.rectAreaLength!==M||Q.hemiLength!==v||Q.numDirectionalShadows!==B||Q.numPointShadows!==w||Q.numSpotShadows!==P||Q.numSpotMaps!==nt||Q.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+nt-H,r.spotLightMap.length=nt,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=O,Q.directionalLength=y,Q.pointLength=A,Q.spotLength=C,Q.rectAreaLength=M,Q.hemiLength=v,Q.numDirectionalShadows=B,Q.numPointShadows=w,Q.numSpotShadows=P,Q.numSpotMaps=nt,Q.numLightProbes=O,r.version=NA++)}function m(p,g){let S=0,x=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let v=0,B=p.length;v<B;v++){const w=p[v];if(w.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),S++}else if(w.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(w.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),h.identity(),c.copy(w.matrixWorld),c.premultiply(M),h.extractRotation(c),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),A++}else if(w.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),x++}else if(w.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function jg(o){const e=new PA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function zA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new jg(o),e.set(l,[d])):c>=h.length?(d=new jg(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class BA extends wu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IA extends wu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GA(o,e,i){let r=new Ev;const l=new Ee,c=new Ee,h=new fn,d=new BA({depthPacking:Nx}),m=new IA,p={},g=i.maxTextureSize,S={[Pa]:Pn,[Pn]:Pa,[Zi]:Zi},x=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:FA,fragmentShader:HA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new _r;A.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ei(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jg;let v=this.type;this.render=function(H,O,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Na),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=v!==Yi&&this.type===Yi,pt=v===Yi&&this.type!==Yi;for(let ft=0,L=H.length;ft<L;ft++){const q=H[ft],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const yt=Z.getFrameExtents();if(l.multiply(yt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,Z.mapSize.y=c.y)),Z.map===null||st===!0||pt===!0){const U=this.type!==Yi?{minFilter:ii,magFilter:ii}:{};Z.map!==null&&Z.map.dispose(),Z.map=new mr(l.x,l.y,U),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const Tt=Z.getViewportCount();for(let U=0;U<Tt;U++){const et=Z.getViewport(U);h.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),lt.viewport(h),Z.updateMatrices(q,U),r=Z.getFrustum(),P(O,Q,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===Yi&&B(Z,Q),Z.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,G)};function B(H,O){const Q=e.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new mr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,Q,x,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,Q,y,C,null)}function w(H,O,Q,D){let R=null;const G=Q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)R=G;else if(R=Q.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=R.uuid,st=O.uuid;let pt=p[lt];pt===void 0&&(pt={},p[lt]=pt);let ft=pt[st];ft===void 0&&(ft=R.clone(),pt[st]=ft,O.addEventListener("dispose",nt)),R=ft}if(R.visible=O.visible,R.wireframe=O.wireframe,D===Yi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:S[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,Q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=Q}return R}function P(H,O,Q,D,R){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===Yi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,H.matrixWorld);const st=e.update(H),pt=H.material;if(Array.isArray(pt)){const ft=st.groups;for(let L=0,q=ft.length;L<q;L++){const Z=ft[L],yt=pt[Z.materialIndex];if(yt&&yt.visible){const Tt=w(H,yt,D,R);H.onBeforeShadow(o,H,O,Q,st,Tt,Z),o.renderBufferDirect(Q,null,st,Tt,H,Z),H.onAfterShadow(o,H,O,Q,st,Tt,Z)}}}else if(pt.visible){const ft=w(H,pt,D,R);H.onBeforeShadow(o,H,O,Q,st,ft,null),o.renderBufferDirect(Q,null,st,ft,H,null),H.onAfterShadow(o,H,O,Q,st,ft,null)}}const lt=H.children;for(let st=0,pt=lt.length;st<pt;st++)P(lt[st],O,Q,D,R)}function nt(H){H.target.removeEventListener("dispose",nt);for(const Q in p){const D=p[Q],R=H.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function VA(o){function e(){let V=!1;const bt=new fn;let ht=null;const mt=new fn(0,0,0,0);return{setMask:function(Rt){ht!==Rt&&!V&&(o.colorMask(Rt,Rt,Rt,Rt),ht=Rt)},setLocked:function(Rt){V=Rt},setClear:function(Rt,Xt,oe,Oe,nn){nn===!0&&(Rt*=Oe,Xt*=Oe,oe*=Oe),bt.set(Rt,Xt,oe,Oe),mt.equals(bt)===!1&&(o.clearColor(Rt,Xt,oe,Oe),mt.copy(bt))},reset:function(){V=!1,ht=null,mt.set(-1,0,0,0)}}}function i(){let V=!1,bt=null,ht=null,mt=null;return{setTest:function(Rt){Rt?St(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(Rt){bt!==Rt&&!V&&(o.depthMask(Rt),bt=Rt)},setFunc:function(Rt){if(ht!==Rt){switch(Rt){case mx:o.depthFunc(o.NEVER);break;case _x:o.depthFunc(o.ALWAYS);break;case gx:o.depthFunc(o.LESS);break;case Mu:o.depthFunc(o.LEQUAL);break;case vx:o.depthFunc(o.EQUAL);break;case Sx:o.depthFunc(o.GEQUAL);break;case xx:o.depthFunc(o.GREATER);break;case Mx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ht=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){mt!==Rt&&(o.clearDepth(Rt),mt=Rt)},reset:function(){V=!1,bt=null,ht=null,mt=null}}}function r(){let V=!1,bt=null,ht=null,mt=null,Rt=null,Xt=null,oe=null,Oe=null,nn=null;return{setTest:function(ge){V||(ge?St(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(ge){bt!==ge&&!V&&(o.stencilMask(ge),bt=ge)},setFunc:function(ge,Bn,_n){(ht!==ge||mt!==Bn||Rt!==_n)&&(o.stencilFunc(ge,Bn,_n),ht=ge,mt=Bn,Rt=_n)},setOp:function(ge,Bn,_n){(Xt!==ge||oe!==Bn||Oe!==_n)&&(o.stencilOp(ge,Bn,_n),Xt=ge,oe=Bn,Oe=_n)},setLocked:function(ge){V=ge},setClear:function(ge){nn!==ge&&(o.clearStencil(ge),nn=ge)},reset:function(){V=!1,bt=null,ht=null,mt=null,Rt=null,Xt=null,oe=null,Oe=null,nn=null}}}const l=new e,c=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},g={},S=new WeakMap,x=[],y=null,A=!1,C=null,M=null,v=null,B=null,w=null,P=null,nt=null,H=new Ue(0,0,0),O=0,Q=!1,D=null,R=null,G=null,lt=null,st=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ft=!1,L=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(q)[1]),ft=L>=1):q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ft=L>=2);let Z=null,yt={};const Tt=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),et=new fn().fromArray(Tt),gt=new fn().fromArray(U);function W(V,bt,ht,mt){const Rt=new Uint8Array(4),Xt=o.createTexture();o.bindTexture(V,Xt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<ht;oe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(bt+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return Xt}const ot={};ot[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),ot[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ot[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),St(o.DEPTH_TEST),c.setFunc(Mu),Se(!1),Gt(eg),St(o.CULL_FACE),Ve(Na);function St(V){p[V]!==!0&&(o.enable(V),p[V]=!0)}function Mt(V){p[V]!==!1&&(o.disable(V),p[V]=!1)}function Ht(V,bt){return g[V]!==bt?(o.bindFramebuffer(V,bt),g[V]=bt,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ft(V,bt){let ht=x,mt=!1;if(V){ht=S.get(bt),ht===void 0&&(ht=[],S.set(bt,ht));const Rt=V.textures;if(ht.length!==Rt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let Xt=0,oe=Rt.length;Xt<oe;Xt++)ht[Xt]=o.COLOR_ATTACHMENT0+Xt;ht.length=Rt.length,mt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,mt=!0);mt&&o.drawBuffers(ht)}function ee(V){return y!==V?(o.useProgram(V),y=V,!0):!1}const Le={[lr]:o.FUNC_ADD,[JS]:o.FUNC_SUBTRACT,[$S]:o.FUNC_REVERSE_SUBTRACT};Le[tx]=o.MIN,Le[ex]=o.MAX;const I={[nx]:o.ZERO,[ix]:o.ONE,[ax]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[cx]:o.SRC_ALPHA_SATURATE,[lx]:o.DST_COLOR,[sx]:o.DST_ALPHA,[rx]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[ux]:o.ONE_MINUS_DST_COLOR,[ox]:o.ONE_MINUS_DST_ALPHA,[fx]:o.CONSTANT_COLOR,[hx]:o.ONE_MINUS_CONSTANT_COLOR,[dx]:o.CONSTANT_ALPHA,[px]:o.ONE_MINUS_CONSTANT_ALPHA};function Ve(V,bt,ht,mt,Rt,Xt,oe,Oe,nn,ge){if(V===Na){A===!0&&(Mt(o.BLEND),A=!1);return}if(A===!1&&(St(o.BLEND),A=!0),V!==QS){if(V!==C||ge!==Q){if((M!==lr||w!==lr)&&(o.blendEquation(o.FUNC_ADD),M=lr,w=lr),ge)switch(V){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ng:o.blendFunc(o.ONE,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ag:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ng:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ag:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}v=null,B=null,P=null,nt=null,H.set(0,0,0),O=0,C=V,Q=ge}return}Rt=Rt||bt,Xt=Xt||ht,oe=oe||mt,(bt!==M||Rt!==w)&&(o.blendEquationSeparate(Le[bt],Le[Rt]),M=bt,w=Rt),(ht!==v||mt!==B||Xt!==P||oe!==nt)&&(o.blendFuncSeparate(I[ht],I[mt],I[Xt],I[oe]),v=ht,B=mt,P=Xt,nt=oe),(Oe.equals(H)===!1||nn!==O)&&(o.blendColor(Oe.r,Oe.g,Oe.b,nn),H.copy(Oe),O=nn),C=V,Q=!1}function ue(V,bt){V.side===Zi?Mt(o.CULL_FACE):St(o.CULL_FACE);let ht=V.side===Pn;bt&&(ht=!ht),Se(ht),V.blending===_s&&V.transparent===!1?Ve(Na):Ve(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const mt=V.stencilWrite;h.setTest(mt),mt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Jt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){D!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),D=V)}function Gt(V){V!==ZS?(St(o.CULL_FACE),V!==R&&(V===eg?o.cullFace(o.BACK):V===jS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),R=V}function Xe(V){V!==G&&(ft&&o.lineWidth(V),G=V)}function Jt(V,bt,ht){V?(St(o.POLYGON_OFFSET_FILL),(lt!==bt||st!==ht)&&(o.polygonOffset(bt,ht),lt=bt,st=ht)):Mt(o.POLYGON_OFFSET_FILL)}function $t(V){V?St(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function N(V){V===void 0&&(V=o.TEXTURE0+pt-1),Z!==V&&(o.activeTexture(V),Z=V)}function T(V,bt,ht){ht===void 0&&(Z===null?ht=o.TEXTURE0+pt-1:ht=Z);let mt=yt[ht];mt===void 0&&(mt={type:void 0,texture:void 0},yt[ht]=mt),(mt.type!==V||mt.texture!==bt)&&(Z!==ht&&(o.activeTexture(ht),Z=ht),o.bindTexture(V,bt||ot[V]),mt.type=V,mt.texture=bt)}function it(){const V=yt[Z];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function xt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(V){et.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),et.copy(V))}function Ct(V){gt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),gt.copy(V))}function Yt(V,bt){let ht=m.get(bt);ht===void 0&&(ht=new WeakMap,m.set(bt,ht));let mt=ht.get(V);mt===void 0&&(mt=o.getUniformBlockIndex(bt,V.name),ht.set(V,mt))}function Zt(V,bt){const mt=m.get(bt).get(V);d.get(bt)!==mt&&(o.uniformBlockBinding(bt,mt,V.__bindingPointIndex),d.set(bt,mt))}function Pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},Z=null,yt={},g={},S=new WeakMap,x=[],y=null,A=!1,C=null,M=null,v=null,B=null,w=null,P=null,nt=null,H=new Ue(0,0,0),O=0,Q=!1,D=null,R=null,G=null,lt=null,st=null,et.set(0,0,o.canvas.width,o.canvas.height),gt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:St,disable:Mt,bindFramebuffer:Ht,drawBuffers:Ft,useProgram:ee,setBlending:Ve,setMaterial:ue,setFlipSided:Se,setCullFace:Gt,setLineWidth:Xe,setPolygonOffset:Jt,setScissorTest:$t,activeTexture:N,bindTexture:T,unbindTexture:it,compressedTexImage2D:xt,compressedTexImage3D:_t,texImage2D:Nt,texImage3D:he,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:ne,texStorage3D:At,texSubImage2D:vt,texSubImage3D:Wt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Lt,scissor:jt,viewport:Ct,reset:Pe}}function Kg(o,e,i,r){const l=XA(r);switch(i){case av:return o*e;case sv:return o*e;case ov:return o*e*2;case lv:return o*e/l.components*l.byteLength;case nd:return o*e/l.components*l.byteLength;case uv:return o*e*2/l.components*l.byteLength;case id:return o*e*2/l.components*l.byteLength;case rv:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case ad:return o*e*4/l.components*l.byteLength;case mu:case _u:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Th:case bh:return Math.max(o,16)*Math.max(e,8)/4;case Eh:case Ah:return Math.max(o,8)*Math.max(e,8)/2;case Rh:case Ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Su:case kh:case Wh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case cv:case qh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yh:case Zh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XA(o){switch(o){case Qi:case ev:return{byteLength:1,components:1};case Co:case nv:case wo:return{byteLength:2,components:1};case td:case ed:return{byteLength:2,components:4};case pr:case $h:case ji:return{byteLength:4,components:1};case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function kA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,g=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,T){return y?new OffscreenCanvas(N,T):bu("canvas")}function C(N,T,it){let xt=1;const _t=$t(N);if((_t.width>it||_t.height>it)&&(xt=it/Math.max(_t.width,_t.height)),xt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const vt=Math.floor(xt*_t.width),Wt=Math.floor(xt*_t.height);S===void 0&&(S=A(vt,Wt));const Dt=T?A(vt,Wt):S;return Dt.width=vt,Dt.height=Wt,Dt.getContext("2d").drawImage(N,0,0,vt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+vt+"x"+Wt+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function M(N){return N.generateMipmaps&&N.minFilter!==ii&&N.minFilter!==di}function v(N){o.generateMipmap(N)}function B(N,T,it,xt,_t=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let vt=T;if(T===o.RED&&(it===o.FLOAT&&(vt=o.R32F),it===o.HALF_FLOAT&&(vt=o.R16F),it===o.UNSIGNED_BYTE&&(vt=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.R8UI),it===o.UNSIGNED_SHORT&&(vt=o.R16UI),it===o.UNSIGNED_INT&&(vt=o.R32UI),it===o.BYTE&&(vt=o.R8I),it===o.SHORT&&(vt=o.R16I),it===o.INT&&(vt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(vt=o.RG32F),it===o.HALF_FLOAT&&(vt=o.RG16F),it===o.UNSIGNED_BYTE&&(vt=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RG8UI),it===o.UNSIGNED_SHORT&&(vt=o.RG16UI),it===o.UNSIGNED_INT&&(vt=o.RG32UI),it===o.BYTE&&(vt=o.RG8I),it===o.SHORT&&(vt=o.RG16I),it===o.INT&&(vt=o.RG32I)),T===o.RGB&&it===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),T===o.RGBA){const Wt=_t?yu:Re.getTransfer(xt);it===o.FLOAT&&(vt=o.RGBA32F),it===o.HALF_FLOAT&&(vt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(vt=Wt===Ie?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function w(N,T){let it;return N?T===null||T===pr||T===Ms?it=o.DEPTH24_STENCIL8:T===ji?it=o.DEPTH32F_STENCIL8:T===Co&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===pr||T===Ms?it=o.DEPTH_COMPONENT24:T===ji?it=o.DEPTH_COMPONENT32F:T===Co&&(it=o.DEPTH_COMPONENT16),it}function P(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==ii&&N.minFilter!==di?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function nt(N){const T=N.target;T.removeEventListener("dispose",nt),O(T),T.isVideoTexture&&g.delete(T)}function H(N){const T=N.target;T.removeEventListener("dispose",H),D(T)}function O(N){const T=r.get(N);if(T.__webglInit===void 0)return;const it=N.source,xt=x.get(it);if(xt){const _t=xt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&Q(N),Object.keys(xt).length===0&&x.delete(it)}r.remove(N)}function Q(N){const T=r.get(N);o.deleteTexture(T.__webglTexture);const it=N.source,xt=x.get(it);delete xt[T.__cacheKey],h.memory.textures--}function D(N){const T=r.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let _t=0;_t<T.__webglFramebuffer[xt].length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[xt][_t]);else o.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[xt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=N.textures;for(let xt=0,_t=it.length;xt<_t;xt++){const vt=r.get(it[xt]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),h.memory.textures--),r.remove(it[xt])}r.remove(N)}let R=0;function G(){R=0}function lt(){const N=R;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),R+=1,N}function st(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function pt(N,T){const it=r.get(N);if(N.isVideoTexture&&Xe(N),N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){const xt=N.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(it,N,T);return}}i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function ft(N,T){const it=r.get(N);if(N.version>0&&it.__version!==N.version){gt(it,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function L(N,T){const it=r.get(N);if(N.version>0&&it.__version!==N.version){gt(it,N,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function q(N,T){const it=r.get(N);if(N.version>0&&it.__version!==N.version){W(it,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const Z={[Mh]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[yh]:o.MIRRORED_REPEAT},yt={[ii]:o.NEAREST,[Ux]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},Tt={[zx]:o.NEVER,[Vx]:o.ALWAYS,[Bx]:o.LESS,[fv]:o.LEQUAL,[Ix]:o.EQUAL,[Gx]:o.GEQUAL,[Fx]:o.GREATER,[Hx]:o.NOTEQUAL};function U(N,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===di||T.magFilter===Xf||T.magFilter===Wl||T.magFilter===hr||T.minFilter===di||T.minFilter===Xf||T.minFilter===Wl||T.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Z[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Z[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Z[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Tt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ii||T.minFilter!==Wl&&T.minFilter!==hr||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function et(N,T){let it=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",nt));const xt=T.source;let _t=x.get(xt);_t===void 0&&(_t={},x.set(xt,_t));const vt=st(T);if(vt!==N.__cacheKey){_t[vt]===void 0&&(_t[vt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),_t[vt].usedTimes++;const Wt=_t[N.__cacheKey];Wt!==void 0&&(_t[N.__cacheKey].usedTimes--,Wt.usedTimes===0&&Q(T)),N.__cacheKey=vt,N.__webglTexture=_t[vt].texture}return it}function gt(N,T,it){let xt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=o.TEXTURE_3D);const _t=et(N,T),vt=T.source;i.bindTexture(xt,N.__webglTexture,o.TEXTURE0+it);const Wt=r.get(vt);if(vt.version!==Wt.__version||_t===!0){i.activeTexture(o.TEXTURE0+it);const Dt=Re.getPrimaries(Re.workingColorSpace),Lt=T.colorSpace===La?null:Re.getPrimaries(T.colorSpace),ne=T.colorSpace===La||Dt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let At=C(T.image,!1,l.maxTextureSize);At=Jt(T,At);const Nt=c.convert(T.format,T.colorSpace),he=c.convert(T.type);let jt=B(T.internalFormat,Nt,he,T.colorSpace,T.isVideoTexture);U(xt,T);let Ct;const Yt=T.mipmaps,Zt=T.isVideoTexture!==!0,Pe=Wt.__version===void 0||_t===!0,V=vt.dataReady,bt=P(T,At);if(T.isDepthTexture)jt=w(T.format===ys,T.type),Pe&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,jt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Nt,he,null));else if(T.isDataTexture)if(Yt.length>0){Zt&&Pe&&i.texStorage2D(o.TEXTURE_2D,bt,jt,Yt[0].width,Yt[0].height);for(let ht=0,mt=Yt.length;ht<mt;ht++)Ct=Yt[ht],Zt?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Ct.width,Ct.height,Nt,he,Ct.data):i.texImage2D(o.TEXTURE_2D,ht,jt,Ct.width,Ct.height,0,Nt,he,Ct.data);T.generateMipmaps=!1}else Zt?(Pe&&i.texStorage2D(o.TEXTURE_2D,bt,jt,At.width,At.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Nt,he,At.data)):i.texImage2D(o.TEXTURE_2D,0,jt,At.width,At.height,0,Nt,he,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,jt,Yt[0].width,Yt[0].height,At.depth);for(let ht=0,mt=Yt.length;ht<mt;ht++)if(Ct=Yt[ht],T.format!==pi)if(Nt!==null)if(Zt){if(V)if(T.layerUpdates.size>0){const Rt=Kg(Ct.width,Ct.height,T.format,T.type);for(const Xt of T.layerUpdates){const oe=Ct.data.subarray(Xt*Rt/Ct.data.BYTES_PER_ELEMENT,(Xt+1)*Rt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,Xt,Ct.width,Ct.height,1,Nt,oe,0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Ct.width,Ct.height,At.depth,Nt,Ct.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ht,jt,Ct.width,Ct.height,At.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ht,0,0,0,Ct.width,Ct.height,At.depth,Nt,he,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ht,jt,Ct.width,Ct.height,At.depth,0,Nt,he,Ct.data)}else{Zt&&Pe&&i.texStorage2D(o.TEXTURE_2D,bt,jt,Yt[0].width,Yt[0].height);for(let ht=0,mt=Yt.length;ht<mt;ht++)Ct=Yt[ht],T.format!==pi?Nt!==null?Zt?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ht,0,0,Ct.width,Ct.height,Nt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,ht,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Ct.width,Ct.height,Nt,he,Ct.data):i.texImage2D(o.TEXTURE_2D,ht,jt,Ct.width,Ct.height,0,Nt,he,Ct.data)}else if(T.isDataArrayTexture)if(Zt){if(Pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,jt,At.width,At.height,At.depth),V)if(T.layerUpdates.size>0){const ht=Kg(At.width,At.height,T.format,T.type);for(const mt of T.layerUpdates){const Rt=At.data.subarray(mt*ht/At.data.BYTES_PER_ELEMENT,(mt+1)*ht/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,At.width,At.height,1,Nt,he,Rt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Nt,he,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,Nt,he,At.data);else if(T.isData3DTexture)Zt?(Pe&&i.texStorage3D(o.TEXTURE_3D,bt,jt,At.width,At.height,At.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Nt,he,At.data)):i.texImage3D(o.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,Nt,he,At.data);else if(T.isFramebufferTexture){if(Pe)if(Zt)i.texStorage2D(o.TEXTURE_2D,bt,jt,At.width,At.height);else{let ht=At.width,mt=At.height;for(let Rt=0;Rt<bt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,jt,ht,mt,0,Nt,he,null),ht>>=1,mt>>=1}}else if(Yt.length>0){if(Zt&&Pe){const ht=$t(Yt[0]);i.texStorage2D(o.TEXTURE_2D,bt,jt,ht.width,ht.height)}for(let ht=0,mt=Yt.length;ht<mt;ht++)Ct=Yt[ht],Zt?V&&i.texSubImage2D(o.TEXTURE_2D,ht,0,0,Nt,he,Ct):i.texImage2D(o.TEXTURE_2D,ht,jt,Nt,he,Ct);T.generateMipmaps=!1}else if(Zt){if(Pe){const ht=$t(At);i.texStorage2D(o.TEXTURE_2D,bt,jt,ht.width,ht.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,he,At)}else i.texImage2D(o.TEXTURE_2D,0,jt,Nt,he,At);M(T)&&v(xt),Wt.__version=vt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function W(N,T,it){if(T.image.length!==6)return;const xt=et(N,T),_t=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+it);const vt=r.get(_t);if(_t.version!==vt.__version||xt===!0){i.activeTexture(o.TEXTURE0+it);const Wt=Re.getPrimaries(Re.workingColorSpace),Dt=T.colorSpace===La?null:Re.getPrimaries(T.colorSpace),Lt=T.colorSpace===La||Wt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ne=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let mt=0;mt<6;mt++)!ne&&!At?Nt[mt]=C(T.image[mt],!0,l.maxCubemapSize):Nt[mt]=At?T.image[mt].image:T.image[mt],Nt[mt]=Jt(T,Nt[mt]);const he=Nt[0],jt=c.convert(T.format,T.colorSpace),Ct=c.convert(T.type),Yt=B(T.internalFormat,jt,Ct,T.colorSpace),Zt=T.isVideoTexture!==!0,Pe=vt.__version===void 0||xt===!0,V=_t.dataReady;let bt=P(T,he);U(o.TEXTURE_CUBE_MAP,T);let ht;if(ne){Zt&&Pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Yt,he.width,he.height);for(let mt=0;mt<6;mt++){ht=Nt[mt].mipmaps;for(let Rt=0;Rt<ht.length;Rt++){const Xt=ht[Rt];T.format!==pi?jt!==null?Zt?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,0,0,Xt.width,Xt.height,jt,Xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,Yt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,0,0,Xt.width,Xt.height,jt,Ct,Xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt,Yt,Xt.width,Xt.height,0,jt,Ct,Xt.data)}}}else{if(ht=T.mipmaps,Zt&&Pe){ht.length>0&&bt++;const mt=$t(Nt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Yt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(At){Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Nt[mt].width,Nt[mt].height,jt,Ct,Nt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,Nt[mt].width,Nt[mt].height,0,jt,Ct,Nt[mt].data);for(let Rt=0;Rt<ht.length;Rt++){const oe=ht[Rt].image[mt].image;Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,0,0,oe.width,oe.height,jt,Ct,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,Yt,oe.width,oe.height,0,jt,Ct,oe.data)}}else{Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,jt,Ct,Nt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,jt,Ct,Nt[mt]);for(let Rt=0;Rt<ht.length;Rt++){const Xt=ht[Rt];Zt?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,0,0,jt,Ct,Xt.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Rt+1,Yt,jt,Ct,Xt.image[mt])}}}M(T)&&v(o.TEXTURE_CUBE_MAP),vt.__version=_t.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ot(N,T,it,xt,_t,vt){const Wt=c.convert(it.format,it.colorSpace),Dt=c.convert(it.type),Lt=B(it.internalFormat,Wt,Dt,it.colorSpace);if(!r.get(T).__hasExternalTextures){const At=Math.max(1,T.width>>vt),Nt=Math.max(1,T.height>>vt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,vt,Lt,At,Nt,T.depth,0,Wt,Dt,null):i.texImage2D(_t,vt,Lt,At,Nt,0,Wt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Gt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,_t,r.get(it).__webglTexture,0,Se(T)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,_t,r.get(it).__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(N,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const xt=T.depthTexture,_t=xt&&xt.isDepthTexture?xt.type:null,vt=w(T.stencilBuffer,_t),Wt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Se(T);Gt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,vt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,vt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,vt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,N)}else{const xt=T.textures;for(let _t=0;_t<xt.length;_t++){const vt=xt[_t],Wt=c.convert(vt.format,vt.colorSpace),Dt=c.convert(vt.type),Lt=B(vt.internalFormat,Wt,Dt,vt.colorSpace),ne=Se(T);it&&Gt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Lt,T.width,T.height):Gt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ne,Lt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Lt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Mt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const xt=r.get(T.depthTexture).__webglTexture,_t=Se(T);if(T.depthTexture.format===gs)Gt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(T.depthTexture.format===ys)Gt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Ht(N){const T=r.get(N),it=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Mt(T.__webglFramebuffer,N)}else if(it){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]=o.createRenderbuffer(),St(T.__webglDepthbuffer[xt],N,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),St(T.__webglDepthbuffer,N,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(N,T,it){const xt=r.get(N);T!==void 0&&ot(xt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Ht(N)}function ee(N){const T=N.texture,it=r.get(N),xt=r.get(T);N.addEventListener("dispose",H);const _t=N.textures,vt=N.isWebGLCubeRenderTarget===!0,Wt=_t.length>1;if(Wt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=T.version,h.memory.textures++),vt){it.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[Dt]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)it.__webglFramebuffer[Dt][Lt]=o.createFramebuffer()}else it.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)it.__webglFramebuffer[Dt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Dt=0,Lt=_t.length;Dt<Lt;Dt++){const ne=r.get(_t[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Gt(N)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Dt=0;Dt<_t.length;Dt++){const Lt=_t[Dt];it.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Dt]);const ne=c.convert(Lt.format,Lt.colorSpace),At=c.convert(Lt.type),Nt=B(Lt.internalFormat,ne,At,Lt.colorSpace,N.isXRRenderTarget===!0),he=Se(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Nt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,it.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),St(it.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(vt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)ot(it.__webglFramebuffer[Dt][Lt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Lt);else ot(it.__webglFramebuffer[Dt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Dt=0,Lt=_t.length;Dt<Lt;Dt++){const ne=_t[Dt],At=r.get(ne);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),U(o.TEXTURE_2D,ne),ot(it.__webglFramebuffer,N,ne,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(ne)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,xt.__webglTexture),U(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)ot(it.__webglFramebuffer[Lt],N,T,o.COLOR_ATTACHMENT0,Dt,Lt);else ot(it.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Dt,0);M(T)&&v(Dt),i.unbindTexture()}N.depthBuffer&&Ht(N)}function Le(N){const T=N.textures;for(let it=0,xt=T.length;it<xt;it++){const _t=T[it];if(M(_t)){const vt=N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Wt=r.get(_t).__webglTexture;i.bindTexture(vt,Wt),v(vt),i.unbindTexture()}}}const I=[],Ve=[];function ue(N){if(N.samples>0){if(Gt(N)===!1){const T=N.textures,it=N.width,xt=N.height;let _t=o.COLOR_BUFFER_BIT;const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(N),Dt=T.length>1;if(Dt)for(let Lt=0;Lt<T.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Lt]);const ne=r.get(T[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,it,xt,0,0,it,xt,_t,o.NEAREST),m===!0&&(I.length=0,Ve.length=0,I.push(o.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(I.push(vt),Ve.push(vt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Lt=0;Lt<T.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Lt]);const ne=r.get(T[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Se(N){return Math.min(l.maxSamples,N.samples)}function Gt(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xe(N){const T=h.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Jt(N,T){const it=N.colorSpace,xt=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||it!==za&&it!==La&&(Re.getTransfer(it)===Ie?(xt!==pi||_t!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function $t(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=G,this.setTexture2D=pt,this.setTexture2DArray=ft,this.setTexture3D=L,this.setTextureCube=q,this.rebindTextures=Ft,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Gt}function WA(o,e){function i(r,l=La){let c;const h=Re.getTransfer(l);if(r===Qi)return o.UNSIGNED_BYTE;if(r===td)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return o.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ev)return o.BYTE;if(r===nv)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===$h)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===ji)return o.FLOAT;if(r===wo)return o.HALF_FLOAT;if(r===av)return o.ALPHA;if(r===rv)return o.RGB;if(r===pi)return o.RGBA;if(r===sv)return o.LUMINANCE;if(r===ov)return o.LUMINANCE_ALPHA;if(r===gs)return o.DEPTH_COMPONENT;if(r===ys)return o.DEPTH_STENCIL;if(r===lv)return o.RED;if(r===nd)return o.RED_INTEGER;if(r===uv)return o.RG;if(r===id)return o.RG_INTEGER;if(r===ad)return o.RGBA_INTEGER;if(r===mu||r===_u||r===gu||r===vu)if(h===Ie)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===Th||r===Ah||r===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh||r===Ch||r===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rh||r===Ch)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===Xh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Dh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Su||r===kh||r===Wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Su)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cv||r===qh||r===Yh||r===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Su)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ms?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class qA extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class du extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YA={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),v=this._getHandJoint(p,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=g.position.distanceTo(S.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new du;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new zn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new $i({vertexShader:ZA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Oo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends Ts{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,S=null,x=null,y=null,A=null;const C=new KA,M=i.getContextAttributes();let v=null,B=null;const w=[],P=[],nt=new Ee;let H=null;const O=new hi;O.layers.enable(1),O.viewport=new fn;const Q=new hi;Q.layers.enable(2),Q.viewport=new fn;const D=[O,Q],R=new qA;R.layers.enable(1),R.layers.enable(2);let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ot=w[W];return ot===void 0&&(ot=new _h,w[W]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(W){let ot=w[W];return ot===void 0&&(ot=new _h,w[W]=ot),ot.getGripSpace()},this.getHand=function(W){let ot=w[W];return ot===void 0&&(ot=new _h,w[W]=ot),ot.getHandSpace()};function st(W){const ot=P.indexOf(W.inputSource);if(ot===-1)return;const St=w[ot];St!==void 0&&(St.update(W.inputSource,W.frame,p||h),St.dispatchEvent({type:W.type,data:W.inputSource}))}function pt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ft);for(let W=0;W<w.length;W++){const ot=P[W];ot!==null&&(P[W]=null,w[W].disconnect(ot))}G=null,lt=null,C.reset(),e.setRenderTarget(v),y=null,x=null,S=null,l=null,B=null,gt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(nt.width,nt.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(nt),l.renderState.layers===void 0){const ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new mr(y.framebufferWidth,y.framebufferHeight,{format:pi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let ot=null,St=null,Mt=null;M.depth&&(Mt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=M.stencil?ys:gs,St=M.stencil?Ms:pr);const Ht={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:c};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(Ht),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new mr(x.textureWidth,x.textureHeight,{format:pi,type:Qi,depthTexture:new Av(x.textureWidth,x.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),gt.setContext(l),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ft(W){for(let ot=0;ot<W.removed.length;ot++){const St=W.removed[ot],Mt=P.indexOf(St);Mt>=0&&(P[Mt]=null,w[Mt].disconnect(St))}for(let ot=0;ot<W.added.length;ot++){const St=W.added[ot];let Mt=P.indexOf(St);if(Mt===-1){for(let Ft=0;Ft<w.length;Ft++)if(Ft>=P.length){P.push(St),Mt=Ft;break}else if(P[Ft]===null){P[Ft]=St,Mt=Ft;break}if(Mt===-1)break}const Ht=w[Mt];Ht&&Ht.connect(St)}}const L=new rt,q=new rt;function Z(W,ot,St){L.setFromMatrixPosition(ot.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const Mt=L.distanceTo(q),Ht=ot.projectionMatrix.elements,Ft=St.projectionMatrix.elements,ee=Ht[14]/(Ht[10]-1),Le=Ht[14]/(Ht[10]+1),I=(Ht[9]+1)/Ht[5],Ve=(Ht[9]-1)/Ht[5],ue=(Ht[8]-1)/Ht[0],Se=(Ft[8]+1)/Ft[0],Gt=ee*ue,Xe=ee*Se,Jt=Mt/(-ue+Se),$t=Jt*-ue;ot.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX($t),W.translateZ(Jt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const N=ee+Jt,T=Le+Jt,it=Gt-$t,xt=Xe+(Mt-$t),_t=I*Le/T*N,vt=Ve*Le/T*N;W.projectionMatrix.makePerspective(it,xt,_t,vt,N,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function yt(W,ot){ot===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ot.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;C.texture!==null&&(W.near=C.depthNear,W.far=C.depthFar),R.near=Q.near=O.near=W.near,R.far=Q.far=O.far=W.far,(G!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,lt=R.far,O.near=G,O.far=lt,Q.near=G,Q.far=lt,O.updateProjectionMatrix(),Q.updateProjectionMatrix(),W.updateProjectionMatrix());const ot=W.parent,St=R.cameras;yt(R,ot);for(let Mt=0;Mt<St.length;Mt++)yt(St[Mt],ot);St.length===2?Z(R,O,Q):R.projectionMatrix.copy(O.projectionMatrix),Tt(W,R,ot)};function Tt(W,ot,St){St===null?W.matrix.copy(ot.matrixWorld):(W.matrix.copy(St.matrixWorld),W.matrix.invert(),W.matrix.multiply(ot.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=jh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let U=null;function et(W,ot){if(g=ot.getViewerPose(p||h),A=ot,g!==null){const St=g.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let Mt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,Mt=!0);for(let Ft=0;Ft<St.length;Ft++){const ee=St[Ft];let Le=null;if(y!==null)Le=y.getViewport(ee);else{const Ve=S.getViewSubImage(x,ee);Le=Ve.viewport,Ft===0&&(e.setRenderTargetTextures(B,Ve.colorTexture,x.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(B))}let I=D[Ft];I===void 0&&(I=new hi,I.layers.enable(Ft),I.viewport=new fn,D[Ft]=I),I.matrix.fromArray(ee.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ee.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Le.x,Le.y,Le.width,Le.height),Ft===0&&(R.matrix.copy(I.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Mt===!0&&R.cameras.push(I)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Ft=S.getDepthInformation(St[0]);Ft&&Ft.isValid&&Ft.texture&&C.init(e,Ft,l.renderState)}}for(let St=0;St<w.length;St++){const Mt=P[St],Ht=w[St];Mt!==null&&Ht!==void 0&&Ht.update(Mt,ot,p||h)}U&&U(W,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),A=null}const gt=new Tv;gt.setAnimationLoop(et),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}const rr=new Ji,JA=new sn;function $A(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,Mv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,B,w,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),S(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,P)):v.isMeshMatcapMaterial?(c(M,v),A(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,B,w):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Pn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Pn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const B=e.get(v),w=B.envMap,P=B.envMapRotation;w&&(M.envMap.value=w,rr.copy(P),rr.x*=-1,rr.y*=-1,rr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),M.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(rr)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,B,w){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*B,M.scale.value=w*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function S(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,B){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Pn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const B=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function tb(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,w){const P=w.program;r.uniformBlockBinding(B,P)}function p(B,w){let P=l[B.id];P===void 0&&(A(B),P=g(B),l[B.id]=P,B.addEventListener("dispose",M));const nt=w.program;r.updateUBOMapping(B,nt);const H=e.render.frame;c[B.id]!==H&&(x(B),c[B.id]=H)}function g(B){const w=S();B.__bindingPointIndex=w;const P=o.createBuffer(),nt=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,nt,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,P),P}function S(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const w=l[B.id],P=B.uniforms,nt=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let H=0,O=P.length;H<O;H++){const Q=Array.isArray(P[H])?P[H]:[P[H]];for(let D=0,R=Q.length;D<R;D++){const G=Q[D];if(y(G,H,D,nt)===!0){const lt=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ft=0;ft<st.length;ft++){const L=st[ft],q=C(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,lt+pt,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,pt),pt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,w,P,nt){const H=B.value,O=w+"_"+P;if(nt[O]===void 0)return typeof H=="number"||typeof H=="boolean"?nt[O]=H:nt[O]=H.clone(),!0;{const Q=nt[O];if(typeof H=="number"||typeof H=="boolean"){if(Q!==H)return nt[O]=H,!0}else if(Q.equals(H)===!1)return Q.copy(H),!0}return!1}function A(B){const w=B.uniforms;let P=0;const nt=16;for(let O=0,Q=w.length;O<Q;O++){const D=Array.isArray(w[O])?w[O]:[w[O]];for(let R=0,G=D.length;R<G;R++){const lt=D[R],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let pt=0,ft=st.length;pt<ft;pt++){const L=st[pt],q=C(L),Z=P%nt;Z!==0&&nt-Z<q.boundary&&(P+=nt-Z),lt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=P,P+=q.storage}}}const H=P%nt;return H>0&&(P+=nt-H),B.__size=P,B.__cache={},this}function C(B){const w={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(w.boundary=4,w.storage=4):B.isVector2?(w.boundary=8,w.storage=8):B.isVector3||B.isColor?(w.boundary=16,w.storage=12):B.isVector4?(w.boundary=16,w.storage=16):B.isMatrix3?(w.boundary=48,w.storage=48):B.isMatrix4?(w.boundary=64,w.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),w}function M(B){const w=B.target;w.removeEventListener("dispose",M);const P=h.indexOf(w.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class eb{constructor(e={}){const{canvas:i=kx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const y=new Uint32Array(4),A=new Int32Array(4);let C=null,M=null;const v=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=Oa,this.toneMappingExposure=1;const w=this;let P=!1,nt=0,H=0,O=null,Q=-1,D=null;const R=new fn,G=new fn;let lt=null;const st=new Ue(0);let pt=0,ft=i.width,L=i.height,q=1,Z=null,yt=null;const Tt=new fn(0,0,ft,L),U=new fn(0,0,ft,L);let et=!1;const gt=new Ev;let W=!1,ot=!1;const St=new sn,Mt=new rt,Ht=new fn,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Le(){return O===null?q:1}let I=r;function Ve(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jh}`),i.addEventListener("webglcontextlost",ht,!1),i.addEventListener("webglcontextrestored",mt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),I===null){const X="webgl2";if(I=Ve(X,b),I===null)throw Ve(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ue,Se,Gt,Xe,Jt,$t,N,T,it,xt,_t,vt,Wt,Dt,Lt,ne,At,Nt,he,jt,Ct,Yt,Zt,Pe;function V(){ue=new lT(I),ue.init(),Yt=new WA(I,ue),Se=new eT(I,ue,e,Yt),Gt=new VA(I),Xe=new fT(I),Jt=new CA,$t=new kA(I,ue,Gt,Jt,Se,Yt,Xe),N=new iT(w),T=new oT(w),it=new gM(I),Zt=new $E(I,it),xt=new uT(I,it,Xe,Zt),_t=new dT(I,xt,it,Xe),he=new hT(I,Se,$t),ne=new nT(Jt),vt=new RA(w,N,T,ue,Se,Zt,ne),Wt=new $A(w,Jt),Dt=new DA,Lt=new zA(ue),Nt=new JE(w,N,T,Gt,_t,x,m),At=new GA(w,_t,Se),Pe=new tb(I,Xe,Se,Gt),jt=new tT(I,ue,Xe),Ct=new cT(I,ue,Xe),Xe.programs=vt.programs,w.capabilities=Se,w.extensions=ue,w.properties=Jt,w.renderLists=Dt,w.shadowMap=At,w.state=Gt,w.info=Xe}V();const bt=new QA(w,I);this.xr=bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(ft,L,!1))},this.getSize=function(b){return b.set(ft,L)},this.setSize=function(b,X,$=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ft=b,L=X,i.width=Math.floor(b*q),i.height=Math.floor(X*q),$===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ft*q,L*q).floor()},this.setDrawingBufferSize=function(b,X,$){ft=b,L=X,q=$,i.width=Math.floor(b*$),i.height=Math.floor(X*$),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,X,$,tt){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,X,$,tt),Gt.viewport(R.copy(Tt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(U)},this.setScissor=function(b,X,$,tt){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,X,$,tt),Gt.scissor(G.copy(U).multiplyScalar(q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){Gt.setScissorTest(et=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(b=!0,X=!0,$=!0){let tt=0;if(b){let Y=!1;if(O!==null){const Et=O.texture.format;Y=Et===ad||Et===id||Et===nd}if(Y){const Et=O.texture.type,wt=Et===Qi||Et===pr||Et===Co||Et===Ms||Et===td||Et===ed,Ot=Nt.getClearColor(),Pt=Nt.getClearAlpha(),zt=Ot.r,Qt=Ot.g,qt=Ot.b;wt?(y[0]=zt,y[1]=Qt,y[2]=qt,y[3]=Pt,I.clearBufferuiv(I.COLOR,0,y)):(A[0]=zt,A[1]=Qt,A[2]=qt,A[3]=Pt,I.clearBufferiv(I.COLOR,0,A))}else tt|=I.COLOR_BUFFER_BIT}X&&(tt|=I.DEPTH_BUFFER_BIT),$&&(tt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ht,!1),i.removeEventListener("webglcontextrestored",mt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Dt.dispose(),Lt.dispose(),Jt.dispose(),N.dispose(),T.dispose(),_t.dispose(),Zt.dispose(),Pe.dispose(),vt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",_n),bt.removeEventListener("sessionend",Po),mi.stop()};function ht(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Xe.autoReset,X=At.enabled,$=At.autoUpdate,tt=At.needsUpdate,Y=At.type;V(),Xe.autoReset=b,At.enabled=X,At.autoUpdate=$,At.needsUpdate=tt,At.type=Y}function Rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const X=b.target;X.removeEventListener("dispose",Xt),oe(X)}function oe(b){Oe(b),Jt.remove(b)}function Oe(b){const X=Jt.get(b).programs;X!==void 0&&(X.forEach(function($){vt.releaseProgram($)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,$,tt,Y,Et){X===null&&(X=Ft);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=gn(b,X,$,tt,Y);Gt.setMaterial(tt,wt);let Pt=$.index,zt=1;if(tt.wireframe===!0){if(Pt=xt.getWireframeAttribute($),Pt===void 0)return;zt=2}const Qt=$.drawRange,qt=$.attributes.position;let le=Qt.start*zt,Te=(Qt.start+Qt.count)*zt;Et!==null&&(le=Math.max(le,Et.start*zt),Te=Math.min(Te,(Et.start+Et.count)*zt)),Pt!==null?(le=Math.max(le,0),Te=Math.min(Te,Pt.count)):qt!=null&&(le=Math.max(le,0),Te=Math.min(Te,qt.count));const Fe=Te-le;if(Fe<0||Fe===1/0)return;Zt.setup(Y,tt,Ot,$,Pt);let vn,ve=jt;if(Pt!==null&&(vn=it.get(Pt),ve=Ct,ve.setIndex(vn)),Y.isMesh)tt.wireframe===!0?(Gt.setLineWidth(tt.wireframeLinewidth*Le()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(Y.isLine){let Vt=tt.linewidth;Vt===void 0&&(Vt=1),Gt.setLineWidth(Vt*Le()),Y.isLineSegments?ve.setMode(I.LINES):Y.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else Y.isPoints?ve.setMode(I.POINTS):Y.isSprite&&ve.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ve.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Vt=Y._multiDrawStarts,ke=Y._multiDrawCounts,me=Y._multiDrawCount,Ye=Pt?it.get(Pt).bytesPerElement:1,an=Jt.get(tt).currentProgram.getUniforms();for(let Sn=0;Sn<me;Sn++)an.setValue(I,"_gl_DrawID",Sn),ve.render(Vt[Sn]/Ye,ke[Sn])}else if(Y.isInstancedMesh)ve.renderInstances(le,Fe,Y.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ke=Math.min($.instanceCount,Vt);ve.renderInstances(le,Fe,ke)}else ve.render(le,Fe)};function nn(b,X,$){b.transparent===!0&&b.side===Zi&&b.forceSinglePass===!1?(b.side=Pn,b.needsUpdate=!0,Ba(b,X,$),b.side=Pa,b.needsUpdate=!0,Ba(b,X,$),b.side=Zi):Ba(b,X,$)}this.compile=function(b,X,$=null){$===null&&($=b),M=Lt.get($),M.init(X),B.push(M),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),b!==$&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const tt=new Set;return b.traverse(function(Y){const Et=Y.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const Ot=Et[wt];nn(Ot,$,Y),tt.add(Ot)}else nn(Et,$,Y),tt.add(Et)}),B.pop(),M=null,tt},this.compileAsync=function(b,X,$=null){const tt=this.compile(b,X,$);return new Promise(Y=>{function Et(){if(tt.forEach(function(wt){Jt.get(wt).currentProgram.isReady()&&tt.delete(wt)}),tt.size===0){Y(b);return}setTimeout(Et,10)}ue.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ge=null;function Bn(b){ge&&ge(b)}function _n(){mi.stop()}function Po(){mi.start()}const mi=new Tv;mi.setAnimationLoop(Bn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(b){ge=b,bt.setAnimationLoop(b),b===null?mi.stop():mi.start()},bt.addEventListener("sessionstart",_n),bt.addEventListener("sessionend",Po),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(X),X=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,X,O),M=Lt.get(b,B.length),M.init(X),B.push(M),St.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),gt.setFromProjectionMatrix(St),ot=this.localClippingEnabled,W=ne.init(this.clippingPlanes,ot),C=Dt.get(b,v.length),C.init(),v.push(C),bt.enabled===!0&&bt.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&gr(Et,X,-1/0,w.sortObjects)}gr(b,X,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Z,yt),ee=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ee&&Nt.addToRenderList(C,b),this.info.render.frame++,W===!0&&ne.beginShadows();const $=M.state.shadowsArray;At.render($,b,X),W===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=C.opaque,Y=C.transmissive;if(M.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let wt=0,Ot=Et.length;wt<Ot;wt++){const Pt=Et[wt];vr(tt,Y,b,Pt)}ee&&Nt.render(b);for(let wt=0,Ot=Et.length;wt<Ot;wt++){const Pt=Et[wt];bs(C,b,Pt,Pt.viewport)}}else Y.length>0&&vr(tt,Y,b,X),ee&&Nt.render(b),bs(C,b,X);O!==null&&($t.updateMultisampleRenderTarget(O),$t.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(w,b,X),Zt.resetDefaultState(),Q=-1,D=null,B.pop(),B.length>0?(M=B[B.length-1],W===!0&&ne.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,v.pop(),v.length>0?C=v[v.length-1]:C=null};function gr(b,X,$,tt){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||gt.intersectsSprite(b)){tt&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);const wt=_t.update(b),Ot=b.material;Ot.visible&&C.push(b,wt,Ot,$,Ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||gt.intersectsObject(b))){const wt=_t.update(b),Ot=b.material;if(tt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ht.copy(wt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){const Pt=wt.groups;for(let zt=0,Qt=Pt.length;zt<Qt;zt++){const qt=Pt[zt],le=Ot[qt.materialIndex];le&&le.visible&&C.push(b,wt,le,$,Ht.z,qt)}}else Ot.visible&&C.push(b,wt,Ot,$,Ht.z,null)}}const Et=b.children;for(let wt=0,Ot=Et.length;wt<Ot;wt++)gr(Et[wt],X,$,tt)}function bs(b,X,$,tt){const Y=b.opaque,Et=b.transmissive,wt=b.transparent;M.setupLightsView($),W===!0&&ne.setGlobalState(w.clippingPlanes,$),tt&&Gt.viewport(R.copy(tt)),Y.length>0&&ta(Y,X,$),Et.length>0&&ta(Et,X,$),wt.length>0&&ta(wt,X,$),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function vr(b,X,$,tt){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[tt.id]===void 0&&(M.state.transmissionRenderTarget[tt.id]=new mr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?wo:Qi,minFilter:hr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Et=M.state.transmissionRenderTarget[tt.id],wt=tt.viewport||R;Et.setSize(wt.z,wt.w);const Ot=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(st),pt=w.getClearAlpha(),pt<1&&w.setClearColor(16777215,.5),ee?Nt.render($):w.clear();const Pt=w.toneMapping;w.toneMapping=Oa;const zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),M.setupLightsView(tt),W===!0&&ne.setGlobalState(w.clippingPlanes,tt),ta(b,$,tt),$t.updateMultisampleRenderTarget(Et),$t.updateRenderTargetMipmap(Et),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let qt=0,le=X.length;qt<le;qt++){const Te=X[qt],Fe=Te.object,vn=Te.geometry,ve=Te.material,Vt=Te.group;if(ve.side===Zi&&Fe.layers.test(tt.layers)){const ke=ve.side;ve.side=Pn,ve.needsUpdate=!0,Rs(Fe,$,tt,vn,ve,Vt),ve.side=ke,ve.needsUpdate=!0,Qt=!0}}Qt===!0&&($t.updateMultisampleRenderTarget(Et),$t.updateRenderTargetMipmap(Et))}w.setRenderTarget(Ot),w.setClearColor(st,pt),zt!==void 0&&(tt.viewport=zt),w.toneMapping=Pt}function ta(b,X,$){const tt=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=b.length;Y<Et;Y++){const wt=b[Y],Ot=wt.object,Pt=wt.geometry,zt=tt===null?wt.material:tt,Qt=wt.group;Ot.layers.test($.layers)&&Rs(Ot,X,$,Pt,zt,Qt)}}function Rs(b,X,$,tt,Y,Et){b.onBeforeRender(w,X,$,tt,Y,Et),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.transparent===!0&&Y.side===Zi&&Y.forceSinglePass===!1?(Y.side=Pn,Y.needsUpdate=!0,w.renderBufferDirect($,X,tt,Y,b,Et),Y.side=Pa,Y.needsUpdate=!0,w.renderBufferDirect($,X,tt,Y,b,Et),Y.side=Zi):w.renderBufferDirect($,X,tt,Y,b,Et),b.onAfterRender(w,X,$,tt,Y,Et)}function Ba(b,X,$){X.isScene!==!0&&(X=Ft);const tt=Jt.get(b),Y=M.state.lights,Et=M.state.shadowsArray,wt=Y.state.version,Ot=vt.getParameters(b,Y.state,Et,X,$),Pt=vt.getProgramCacheKey(Ot);let zt=tt.programs;tt.environment=b.isMeshStandardMaterial?X.environment:null,tt.fog=X.fog,tt.envMap=(b.isMeshStandardMaterial?T:N).get(b.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",Xt),zt=new Map,tt.programs=zt);let Qt=zt.get(Pt);if(Qt!==void 0){if(tt.currentProgram===Qt&&tt.lightsStateVersion===wt)return Ke(b,Ot),Qt}else Ot.uniforms=vt.getUniforms(b),b.onBeforeCompile(Ot,w),Qt=vt.acquireProgram(Ot,Pt),zt.set(Pt,Qt),tt.uniforms=Ot.uniforms;const qt=tt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=ne.uniform),Ke(b,Ot),tt.needsLights=Cs(b),tt.lightsStateVersion=wt,tt.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),tt.currentProgram=Qt,tt.uniformsList=null,Qt}function ai(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=xu.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Ke(b,X){const $=Jt.get(b);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function gn(b,X,$,tt,Y){X.isScene!==!0&&(X=Ft),$t.resetTextureUnits();const Et=X.fog,wt=tt.isMeshStandardMaterial?X.environment:null,Ot=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:za,Pt=(tt.isMeshStandardMaterial?T:N).get(tt.envMap||wt),zt=tt.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qt=!!$.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),qt=!!$.morphAttributes.position,le=!!$.morphAttributes.normal,Te=!!$.morphAttributes.color;let Fe=Oa;tt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Fe=w.toneMapping);const vn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ve=vn!==void 0?vn.length:0,Vt=Jt.get(tt),ke=M.state.lights;if(W===!0&&(ot===!0||b!==D)){const bn=b===D&&tt.id===Q;ne.setState(tt,b,bn)}let me=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ke.state.version||Vt.outputColorSpace!==Ot||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isBatchedMesh&&Vt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Vt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Vt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Vt.instancingMorph===!1&&Y.morphTexture!==null||Vt.envMap!==Pt||tt.fog===!0&&Vt.fog!==Et||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ne.numPlanes||Vt.numIntersection!==ne.numIntersection)||Vt.vertexAlphas!==zt||Vt.vertexTangents!==Qt||Vt.morphTargets!==qt||Vt.morphNormals!==le||Vt.morphColors!==Te||Vt.toneMapping!==Fe||Vt.morphTargetsCount!==ve)&&(me=!0):(me=!0,Vt.__version=tt.version);let Ye=Vt.currentProgram;me===!0&&(Ye=Ba(tt,X,Y));let an=!1,Sn=!1,ws=!1;const He=Ye.getUniforms(),ri=Vt.uniforms;if(Gt.useProgram(Ye.program)&&(an=!0,Sn=!0,ws=!0),tt.id!==Q&&(Q=tt.id,Sn=!0),an||D!==b){He.setValue(I,"projectionMatrix",b.projectionMatrix),He.setValue(I,"viewMatrix",b.matrixWorldInverse);const bn=He.map.cameraPosition;bn!==void 0&&bn.setValue(I,Mt.setFromMatrixPosition(b.matrixWorld)),Se.logarithmicDepthBuffer&&He.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&He.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),D!==b&&(D=b,Sn=!0,ws=!0)}if(Y.isSkinnedMesh){He.setOptional(I,Y,"bindMatrix"),He.setOptional(I,Y,"bindMatrixInverse");const bn=Y.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),He.setValue(I,"boneTexture",bn.boneTexture,$t))}Y.isBatchedMesh&&(He.setOptional(I,Y,"batchingTexture"),He.setValue(I,"batchingTexture",Y._matricesTexture,$t),He.setOptional(I,Y,"batchingIdTexture"),He.setValue(I,"batchingIdTexture",Y._indirectTexture,$t),He.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&He.setValue(I,"batchingColorTexture",Y._colorsTexture,$t));const na=$.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&he.update(Y,$,Ye),(Sn||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,He.setValue(I,"receiveShadow",Y.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ri.envMap.value=Pt,ri.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&X.environment!==null&&(ri.envMapIntensity.value=X.environmentIntensity),Sn&&(He.setValue(I,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&ea(ri,ws),Et&&tt.fog===!0&&Wt.refreshFogUniforms(ri,Et),Wt.refreshMaterialUniforms(ri,tt,q,L,M.state.transmissionRenderTarget[b.id]),xu.upload(I,ai(Vt),ri,$t)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(xu.upload(I,ai(Vt),ri,$t),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&He.setValue(I,"center",Y.center),He.setValue(I,"modelViewMatrix",Y.modelViewMatrix),He.setValue(I,"normalMatrix",Y.normalMatrix),He.setValue(I,"modelMatrix",Y.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const bn=tt.uniformsGroups;for(let xn=0,Ds=bn.length;xn<Ds;xn++){const Us=bn[xn];Pe.update(Us,Ye),Pe.bind(Us,Ye)}}return Ye}function ea(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Cs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,X,$){Jt.get(b.texture).__webglTexture=X,Jt.get(b.depthTexture).__webglTexture=$;const tt=Jt.get(b);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=$===void 0,tt.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const $=Jt.get(b);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,$=0){O=b,nt=X,H=$;let tt=!0,Y=null,Et=!1,wt=!1;if(b){const Pt=Jt.get(b);Pt.__useDefaultFramebuffer!==void 0?(Gt.bindFramebuffer(I.FRAMEBUFFER,null),tt=!1):Pt.__webglFramebuffer===void 0?$t.setupRenderTarget(b):Pt.__hasExternalTextures&&$t.rebindTextures(b,Jt.get(b.texture).__webglTexture,Jt.get(b.depthTexture).__webglTexture);const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Qt=Jt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?Y=Qt[X][$]:Y=Qt[X],Et=!0):b.samples>0&&$t.useMultisampledRTT(b)===!1?Y=Jt.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[$]:Y=Qt,R.copy(b.viewport),G.copy(b.scissor),lt=b.scissorTest}else R.copy(Tt).multiplyScalar(q).floor(),G.copy(U).multiplyScalar(q).floor(),lt=et;if(Gt.bindFramebuffer(I.FRAMEBUFFER,Y)&&tt&&Gt.drawBuffers(b,Y),Gt.viewport(R),Gt.scissor(G),Gt.setScissorTest(lt),Et){const Pt=Jt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pt.__webglTexture,$)}else if(wt){const Pt=Jt.get(b.texture),zt=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pt.__webglTexture,$||0,zt)}Q=-1},this.readRenderTargetPixels=function(b,X,$,tt,Y,Et,wt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Jt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){Gt.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Pt=b.texture,zt=Pt.format,Qt=Pt.type;if(!Se.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-tt&&$>=0&&$<=b.height-Y&&I.readPixels(X,$,tt,Y,Yt.convert(zt),Yt.convert(Qt),Et)}finally{const Pt=O!==null?Jt.get(O).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,X,$,tt,Y,Et,wt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Jt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ot=Ot[wt]),Ot){Gt.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Pt=b.texture,zt=Pt.format,Qt=Pt.type;if(!Se.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-tt&&$>=0&&$<=b.height-Y){const qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(X,$,tt,Y,Yt.convert(zt),Yt.convert(Qt),0),I.flush();const le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Wx(I,le,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et)}finally{I.deleteBuffer(qt),I.deleteSync(le)}return Et}}finally{const Pt=O!==null?Jt.get(O).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(b,X=null,$=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const tt=Math.pow(2,-$),Y=Math.floor(b.image.width*tt),Et=Math.floor(b.image.height*tt),wt=X!==null?X.x:0,Ot=X!==null?X.y:0;$t.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,wt,Ot,Y,Et),Gt.unbindTexture()},this.copyTextureToTexture=function(b,X,$=null,tt=null,Y=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,b=arguments[1],X=arguments[2],Y=arguments[3]||0,$=null);let Et,wt,Ot,Pt,zt,Qt;$!==null?(Et=$.max.x-$.min.x,wt=$.max.y-$.min.y,Ot=$.min.x,Pt=$.min.y):(Et=b.image.width,wt=b.image.height,Ot=0,Pt=0),tt!==null?(zt=tt.x,Qt=tt.y):(zt=0,Qt=0);const qt=Yt.convert(X.format),le=Yt.convert(X.type);$t.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),Fe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vn=I.getParameter(I.UNPACK_SKIP_PIXELS),ve=I.getParameter(I.UNPACK_SKIP_ROWS),Vt=I.getParameter(I.UNPACK_SKIP_IMAGES),ke=b.isCompressedTexture?b.mipmaps[Y]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ke.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ke.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,zt,Qt,Et,wt,qt,le,ke.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,zt,Qt,ke.width,ke.height,qt,ke.data):I.texSubImage2D(I.TEXTURE_2D,Y,zt,Qt,Et,wt,qt,le,ke),I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt),Y===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Gt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,$=null,tt=null,Y=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,tt=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0);let Et,wt,Ot,Pt,zt,Qt,qt,le,Te;const Fe=b.isCompressedTexture?b.mipmaps[Y]:b.image;$!==null?(Et=$.max.x-$.min.x,wt=$.max.y-$.min.y,Ot=$.max.z-$.min.z,Pt=$.min.x,zt=$.min.y,Qt=$.min.z):(Et=Fe.width,wt=Fe.height,Ot=Fe.depth,Pt=0,zt=0,Qt=0),tt!==null?(qt=tt.x,le=tt.y,Te=tt.z):(qt=0,le=0,Te=0);const vn=Yt.convert(X.format),ve=Yt.convert(X.type);let Vt;if(X.isData3DTexture)$t.setTexture3D(X,0),Vt=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)$t.setTexture2DArray(X,0),Vt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const ke=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ye=I.getParameter(I.UNPACK_SKIP_PIXELS),an=I.getParameter(I.UNPACK_SKIP_ROWS),Sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Vt,Y,qt,le,Te,Et,wt,Ot,vn,ve,Fe.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Vt,Y,qt,le,Te,Et,wt,Ot,vn,Fe.data):I.texSubImage3D(Vt,Y,qt,le,Te,Et,wt,Ot,vn,ve,Fe),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,an),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Sn),Y===0&&X.generateMipmaps&&I.generateMipmap(Vt),Gt.unbindTexture()},this.initRenderTarget=function(b){Jt.get(b).__webglFramebuffer===void 0&&$t.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$t.setTextureCube(b,0):b.isData3DTexture?$t.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$t.setTexture2DArray(b,0):$t.setTexture2D(b,0),Gt.unbindTexture()},this.resetState=function(){nt=0,H=0,O=null,Gt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===rd?"display-p3":"srgb",i.unpackColorSpace=Re.workingColorSpace===Cu?"display-p3":"srgb"}}class nb extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);function ib(){const o=pu.useRef(null),e=pu.useRef(null);return pu.useEffect(()=>{if(!o.current)return;const i=o.current,r=`
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `,l=`
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `,c=new od;c.position.z=1;const h=new nb,d=new Oo(2,2),m={time:{type:"f",value:1},resolution:{type:"v2",value:new Ee}},p=new $i({uniforms:m,vertexShader:r,fragmentShader:l}),g=new Ei(d,p);h.add(g);const S=new eb({antialias:!0});S.setPixelRatio(window.devicePixelRatio),i.appendChild(S.domElement);const x=()=>{const A=i.clientWidth,C=i.clientHeight;S.setSize(A,C),m.resolution.value.x=S.domElement.width,m.resolution.value.y=S.domElement.height};x(),window.addEventListener("resize",x,!1);const y=()=>{const A=requestAnimationFrame(y);m.time.value+=.05,S.render(h,c),e.current&&(e.current.animationId=A)};return e.current={camera:c,scene:h,renderer:S,uniforms:m,animationId:0},y(),()=>{window.removeEventListener("resize",x),e.current&&(cancelAnimationFrame(e.current.animationId),i&&e.current.renderer.domElement&&i.removeChild(e.current.renderer.domElement),e.current.renderer.dispose(),d.dispose(),p.dispose())}},[]),cr.jsx("div",{ref:o,className:"absolute inset-0 w-full h-full",style:{background:"#000",overflow:"hidden"}})}function ab(){return cr.jsxs("main",{className:"relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden",children:[cr.jsx(ib,{}),cr.jsxs("h1",{className:"absolute pointer-events-none z-10 text-center text-5xl md:text-7xl leading-tight font-bold tracking-tighter text-white drop-shadow-lg",children:["Welcome to",cr.jsx("br",{}),"table no 01"]})]})}const Dv=document.getElementById("root");if(!Dv)throw new Error("Could not find root element to mount to");const rb=YS.createRoot(Dv);rb.render(cr.jsx(FS.StrictMode,{children:cr.jsx(ab,{})}));
