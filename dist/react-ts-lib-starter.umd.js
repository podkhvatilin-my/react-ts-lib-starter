(function(E,O){typeof exports=="object"&&typeof module<"u"?O(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],O):(E=typeof globalThis<"u"?globalThis:E||self,O(E.ReactTSLibStarter={},E.React,E.styled))})(this,function(E,O,Ce){"use strict";var U={},Pe={get exports(){return U},set exports(y){U=y}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function we(){if(Q)return j;Q=1;var y=O,R=Symbol.for("react.element"),B=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,I=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function D(m,l,C){var v,b={},_=null,Y=null;C!==void 0&&(_=""+C),l.key!==void 0&&(_=""+l.key),l.ref!==void 0&&(Y=l.ref);for(v in l)S.call(l,v)&&!W.hasOwnProperty(v)&&(b[v]=l[v]);if(m&&m.defaultProps)for(v in l=m.defaultProps,l)b[v]===void 0&&(b[v]=l[v]);return{$$typeof:R,type:m,key:_,ref:Y,props:b,_owner:I.current}}return j.Fragment=B,j.jsx=D,j.jsxs=D,j}var k={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function xe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var y=O,R=Symbol.for("react.element"),B=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),m=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),re=Symbol.iterator,De="@@iterator";function Fe(e){if(e===null||typeof e!="object")return null;var r=re&&e[re]||e[De];return typeof r=="function"?r:null}var P=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ae("error",e,t)}}function Ae(e,r,t){{var n=P.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ie=!1,We=!1,Ye=!1,$e=!1,Le=!1,te;te=Symbol.for("react.module.reference");function Ne(e){return!!(typeof e=="string"||typeof e=="function"||e===S||e===W||Le||e===I||e===C||e===v||$e||e===Y||Ie||We||Ye||typeof e=="object"&&e!==null&&(e.$$typeof===_||e.$$typeof===b||e.$$typeof===D||e.$$typeof===m||e.$$typeof===l||e.$$typeof===te||e.getModuleId!==void 0))}function Me(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ne(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case B:return"Portal";case W:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return ne(r)+".Consumer";case D:var t=e;return ne(t._context)+".Provider";case l:return Me(e,e.render,"ForwardRef");case b:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case _:{var i=e,u=i._payload,o=i._init;try{return g(o(u))}catch{return null}}}return null}var T=Object.assign,F=0,ae,oe,ie,ue,se,fe,le;function ce(){}ce.__reactDisabledLog=!0;function Ve(){{if(F===0){ae=console.log,oe=console.info,ie=console.warn,ue=console.error,se=console.group,fe=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Ue(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:ae}),info:T({},e,{value:oe}),warn:T({},e,{value:ie}),error:T({},e,{value:ue}),group:T({},e,{value:se}),groupCollapsed:T({},e,{value:fe}),groupEnd:T({},e,{value:le})})}F<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=P.ReactCurrentDispatcher,J;function $(e,r,t){{if(J===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,L;{var Be=typeof WeakMap=="function"?WeakMap:Map;L=new Be}function de(e,r){if(!e||G)return"";{var t=L.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ve();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){n=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){n=h}e.call(o.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Ue(),Error.prepareStackTrace=i}var x=e?e.displayName||e.name:"",Se=x?$(x):"";return typeof e=="function"&&L.set(e,Se),Se}function qe(e,r,t){return de(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Je(e));if(typeof e=="string")return $(e);switch(e){case C:return $("Suspense");case v:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return qe(e.render);case b:return N(e.type,r,t);case _:{var n=e,i=n._payload,u=n._init;try{return N(u(i),r,t)}catch{}}}return""}var M=Object.prototype.hasOwnProperty,ve={},pe=P.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var u=Function.call.bind(M);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(V(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,V(i),c("Failed %s type: %s",t,a.message),V(null))}}}var ze=Array.isArray;function z(e){return ze(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function be(e){if(He(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),ye(e)}var A=P.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},ge,he,K;K={};function Ze(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&A.current&&r&&A.current.stateNode!==r){var t=g(A.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(A.current.type),e.ref),K[t]=!0)}}function rr(e,r){{var t=function(){ge||(ge=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){he||(he=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,u,o){var a={$$typeof:R,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ar(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(be(t),a=""+t),Qe(r)&&(be(r.key),a=""+r.key),Ze(r)&&(d=r.ref,er(r,i));for(u in r)M.call(r,u)&&!Xe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&rr(o,f),d&&tr(o,f)}return nr(e,a,d,i,n,A.current,o)}}var H=P.ReactCurrentOwner,Ee=P.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===R}function Re(){{if(H.current){var e=g(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var me={};function ir(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(me[t])return;me[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),w(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Te(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&_e(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=Fe(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&_e(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===b))t=r.propTypes;else return;if(t){var n=g(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}function Oe(e,r,t,n,i,u){{var o=Ne(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=or(i);d?a+=d:a+=Re();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===R?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=ar(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var x=0;x<p.length;x++)Te(p[x],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(p,e)}return e===S?sr(f):ur(f),f}}function fr(e,r,t){return Oe(e,r,t,!0)}function lr(e,r,t){return Oe(e,r,t,!1)}var cr=lr,dr=fr;k.Fragment=S,k.jsx=cr,k.jsxs=dr}()),k}(function(y){process.env.NODE_ENV==="production"?y.exports=we():y.exports=xe()})(Pe);const je=Ce.button``,ke=({children:y,...R})=>U.jsx(je,{...R,children:y});E.Button=ke,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=react-ts-lib-starter.umd.js.map
