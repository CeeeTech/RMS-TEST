import{i as me,b as qr,a as or,c as Te,r as ur,S as ee}from"./isArrayLike-C-wli46Q.js";import{o as Zr,g as sr,M as lr,i as kr,a as cr,b as Xr,c as q,d as Jr,e as fr,f as Ee,n as re,h as dr}from"./_getTag-D0Y4uZ2p.js";import{ai as Qr,r as f}from"./index-DRAxbQhQ.js";import{e as hr,i as et,a as _e}from"./isSymbol-ckKrFcy_.js";var rt=function(r){return tt(r)&&!nt(r)};function tt(e){return!!e&&typeof e=="object"}function nt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||ot(e)}var at=typeof Symbol=="function"&&Symbol.for,it=at?Symbol.for("react.element"):60103;function ot(e){return e.$$typeof===it}function ut(e){return Array.isArray(e)?[]:{}}function te(e,r){return r.clone!==!1&&r.isMergeableObject(e)?W(ut(e),e,r):e}function st(e,r,t){return e.concat(r).map(function(n){return te(n,t)})}function lt(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=te(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=te(r[i],t):n[i]=W(e[i],r[i],t)}),n}function W(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||st,t.isMergeableObject=t.isMergeableObject||rt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):lt(e,r,t):te(r,t)}W.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return W(n,i,t)},{})};var ye=W,Se=Zr(Object.getPrototypeOf,Object),ct="[object Object]",ft=Function.prototype,dt=Object.prototype,pr=ft.toString,ht=dt.hasOwnProperty,pt=pr.call(Object);function ze(e){if(!me(e)||qr(e)!=ct)return!1;var r=Se(e);if(r===null)return!0;var t=ht.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&pr.call(t)==pt}var Ge=Array.isArray,Ke=Object.keys,vt=Object.prototype.hasOwnProperty,yt=typeof Element<"u";function ge(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Ge(e),n=Ge(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!ge(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var h=e instanceof Date,g=r instanceof Date;if(h!=g)return!1;if(h&&g)return e.getTime()==r.getTime();var v=e instanceof RegExp,R=r instanceof RegExp;if(v!=R)return!1;if(v&&R)return e.toString()==r.toString();var I=Ke(e);if(o=I.length,o!==Ke(r).length)return!1;for(i=o;i--!==0;)if(!vt.call(r,I[i]))return!1;if(yt&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=I[i],!(s==="_owner"&&e.$$typeof)&&!ge(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var gt=function(r,t){try{return ge(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const V=Qr(gt);function bt(){this.__data__=[],this.size=0}function ne(e,r){for(var t=e.length;t--;)if(hr(e[t][0],r))return t;return-1}var mt=Array.prototype,Tt=mt.splice;function Et(e){var r=this.__data__,t=ne(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Tt.call(r,t,1),--this.size,!0}function _t(e){var r=this.__data__,t=ne(r,e);return t<0?void 0:r[t][1]}function St(e){return ne(this.__data__,e)>-1}function At(e,r){var t=this.__data__,n=ne(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function $(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}$.prototype.clear=bt;$.prototype.delete=Et;$.prototype.get=_t;$.prototype.has=St;$.prototype.set=At;function It(){this.__data__=new $,this.size=0}function Ct(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Ot(e){return this.__data__.get(e)}function wt(e){return this.__data__.has(e)}var Y=sr(Object,"create");function Ft(){this.__data__=Y?Y(null):{},this.size=0}function Rt(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Mt="__lodash_hash_undefined__",jt=Object.prototype,Lt=jt.hasOwnProperty;function Pt(e){var r=this.__data__;if(Y){var t=r[e];return t===Mt?void 0:t}return Lt.call(r,e)?r[e]:void 0}var $t=Object.prototype,Dt=$t.hasOwnProperty;function Ut(e){var r=this.__data__;return Y?r[e]!==void 0:Dt.call(r,e)}var Nt="__lodash_hash_undefined__";function Vt(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Y&&r===void 0?Nt:r,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=Ft;B.prototype.delete=Rt;B.prototype.get=Pt;B.prototype.has=Ut;B.prototype.set=Vt;function xt(){this.size=0,this.__data__={hash:new B,map:new(lr||$),string:new B}}function Bt(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function ae(e,r){var t=e.__data__;return Bt(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Ht(e){var r=ae(this,e).delete(e);return this.size-=r?1:0,r}function zt(e){return ae(this,e).get(e)}function Gt(e){return ae(this,e).has(e)}function Kt(e,r){var t=ae(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=xt;U.prototype.delete=Ht;U.prototype.get=zt;U.prototype.has=Gt;U.prototype.set=Kt;var Wt=200;function Yt(e,r){var t=this.__data__;if(t instanceof $){var n=t.__data__;if(!lr||n.length<Wt-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function G(e){var r=this.__data__=new $(e);this.size=r.size}G.prototype.clear=It;G.prototype.delete=Ct;G.prototype.get=Ot;G.prototype.has=wt;G.prototype.set=Yt;function qt(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var We=function(){try{var e=sr(Object,"defineProperty");return e({},"",{}),e}catch{}}();function vr(e,r,t){r=="__proto__"&&We?We(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Zt=Object.prototype,kt=Zt.hasOwnProperty;function yr(e,r,t){var n=e[r];(!(kt.call(e,r)&&hr(n,t))||t===void 0&&!(r in e))&&vr(e,r,t)}function ie(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var h=r[o],g=n?n(t[h],e[h],h,t,e):void 0;g===void 0&&(g=e[h]),i?vr(t,h,g):yr(t,h,g)}return t}function Xt(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Jt=Object.prototype,Qt=Jt.hasOwnProperty;function gr(e,r){var t=q(e),n=!t&&kr(e),i=!t&&!n&&cr(e),o=!t&&!n&&!i&&Xr(e),s=t||n||i||o,h=s?Xt(e.length,String):[],g=h.length;for(var v in e)(r||Qt.call(e,v))&&!(s&&(v=="length"||i&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||et(v,g)))&&h.push(v);return h}function Ae(e){return or(e)?gr(e):Jr(e)}function en(e,r){return e&&ie(r,Ae(r),e)}function rn(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var tn=Object.prototype,nn=tn.hasOwnProperty;function an(e){if(!Te(e))return rn(e);var r=fr(e),t=[];for(var n in e)n=="constructor"&&(r||!nn.call(e,n))||t.push(n);return t}function Ie(e){return or(e)?gr(e,!0):an(e)}function on(e,r){return e&&ie(r,Ie(r),e)}var br=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ye=br&&typeof module=="object"&&module&&!module.nodeType&&module,un=Ye&&Ye.exports===br,qe=un?ur.Buffer:void 0,Ze=qe?qe.allocUnsafe:void 0;function sn(e,r){if(r)return e.slice();var t=e.length,n=Ze?Ze(t):new e.constructor(t);return e.copy(n),n}function mr(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function ln(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function Tr(){return[]}var cn=Object.prototype,fn=cn.propertyIsEnumerable,ke=Object.getOwnPropertySymbols,Ce=ke?function(e){return e==null?[]:(e=Object(e),ln(ke(e),function(r){return fn.call(e,r)}))}:Tr;function dn(e,r){return ie(e,Ce(e),r)}function Er(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var hn=Object.getOwnPropertySymbols,_r=hn?function(e){for(var r=[];e;)Er(r,Ce(e)),e=Se(e);return r}:Tr;function pn(e,r){return ie(e,_r(e),r)}function Sr(e,r,t){var n=r(e);return q(e)?n:Er(n,t(e))}function vn(e){return Sr(e,Ae,Ce)}function yn(e){return Sr(e,Ie,_r)}var gn=Object.prototype,bn=gn.hasOwnProperty;function mn(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&bn.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Xe=ur.Uint8Array;function Oe(e){var r=new e.constructor(e.byteLength);return new Xe(r).set(new Xe(e)),r}function Tn(e,r){var t=r?Oe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var En=/\w*$/;function _n(e){var r=new e.constructor(e.source,En.exec(e));return r.lastIndex=e.lastIndex,r}var Je=ee?ee.prototype:void 0,Qe=Je?Je.valueOf:void 0;function Sn(e){return Qe?Object(Qe.call(e)):{}}function An(e,r){var t=r?Oe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var In="[object Boolean]",Cn="[object Date]",On="[object Map]",wn="[object Number]",Fn="[object RegExp]",Rn="[object Set]",Mn="[object String]",jn="[object Symbol]",Ln="[object ArrayBuffer]",Pn="[object DataView]",$n="[object Float32Array]",Dn="[object Float64Array]",Un="[object Int8Array]",Nn="[object Int16Array]",Vn="[object Int32Array]",xn="[object Uint8Array]",Bn="[object Uint8ClampedArray]",Hn="[object Uint16Array]",zn="[object Uint32Array]";function Gn(e,r,t){var n=e.constructor;switch(r){case Ln:return Oe(e);case In:case Cn:return new n(+e);case Pn:return Tn(e,t);case $n:case Dn:case Un:case Nn:case Vn:case xn:case Bn:case Hn:case zn:return An(e,t);case On:return new n;case wn:case Mn:return new n(e);case Fn:return _n(e);case Rn:return new n;case jn:return Sn(e)}}var er=Object.create,Kn=function(){function e(){}return function(r){if(!Te(r))return{};if(er)return er(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function Wn(e){return typeof e.constructor=="function"&&!fr(e)?Kn(Se(e)):{}}var Yn="[object Map]";function qn(e){return me(e)&&Ee(e)==Yn}var rr=re&&re.isMap,Zn=rr?dr(rr):qn;const kn=Zn;var Xn="[object Set]";function Jn(e){return me(e)&&Ee(e)==Xn}var tr=re&&re.isSet,Qn=tr?dr(tr):Jn;const ea=Qn;var ra=1,ta=2,na=4,Ar="[object Arguments]",aa="[object Array]",ia="[object Boolean]",oa="[object Date]",ua="[object Error]",Ir="[object Function]",sa="[object GeneratorFunction]",la="[object Map]",ca="[object Number]",Cr="[object Object]",fa="[object RegExp]",da="[object Set]",ha="[object String]",pa="[object Symbol]",va="[object WeakMap]",ya="[object ArrayBuffer]",ga="[object DataView]",ba="[object Float32Array]",ma="[object Float64Array]",Ta="[object Int8Array]",Ea="[object Int16Array]",_a="[object Int32Array]",Sa="[object Uint8Array]",Aa="[object Uint8ClampedArray]",Ia="[object Uint16Array]",Ca="[object Uint32Array]",T={};T[Ar]=T[aa]=T[ya]=T[ga]=T[ia]=T[oa]=T[ba]=T[ma]=T[Ta]=T[Ea]=T[_a]=T[la]=T[ca]=T[Cr]=T[fa]=T[da]=T[ha]=T[pa]=T[Sa]=T[Aa]=T[Ia]=T[Ca]=!0;T[ua]=T[Ir]=T[va]=!1;function Q(e,r,t,n,i,o){var s,h=r&ra,g=r&ta,v=r&na;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!Te(e))return e;var R=q(e);if(R){if(s=mn(e),!h)return mr(e,s)}else{var I=Ee(e),d=I==Ir||I==sa;if(cr(e))return sn(e,h);if(I==Cr||I==Ar||d&&!i){if(s=g||d?{}:Wn(e),!h)return g?pn(e,on(s,e)):dn(e,en(s,e))}else{if(!T[I])return i?e:{};s=Gn(e,I,h)}}o||(o=new G);var C=o.get(e);if(C)return C;o.set(e,s),ea(e)?e.forEach(function(A){s.add(Q(A,r,t,A,e,o))}):kn(e)&&e.forEach(function(A,E){s.set(E,Q(A,r,t,E,e,o))});var L=v?g?yn:vn:g?Ie:Ae,j=R?void 0:L(e);return qt(j||e,function(A,E){j&&(E=A,A=e[E]),yr(s,E,Q(A,r,t,E,e,o))}),s}var Oa=4;function nr(e){return Q(e,Oa)}function Or(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var wa="Expected a function";function we(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(wa);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(we.Cache||U),t}we.Cache=U;var Fa=500;function Ra(e){var r=we(e,function(n){return t.size===Fa&&t.clear(),n}),t=r.cache;return r}var Ma=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ja=/\\(\\)?/g,La=Ra(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Ma,function(t,n,i,o){r.push(i?o.replace(ja,"$1"):n||t)}),r});const Pa=La;var $a=1/0;function Da(e){if(typeof e=="string"||_e(e))return e;var r=e+"";return r=="0"&&1/e==-$a?"-0":r}var Ua=1/0,ar=ee?ee.prototype:void 0,ir=ar?ar.toString:void 0;function wr(e){if(typeof e=="string")return e;if(q(e))return Or(e,wr)+"";if(_e(e))return ir?ir.call(e):"";var r=e+"";return r=="0"&&1/e==-Ua?"-0":r}function Na(e){return e==null?"":wr(e)}function Fr(e){return q(e)?Or(e,Da):_e(e)?[e]:mr(Pa(Na(e)))}function S(){return S=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},S.apply(this,arguments)}function Rr(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var oe=f.createContext(void 0);oe.displayName="FormikContext";var Va=oe.Provider;oe.Consumer;function Mr(){var e=f.useContext(oe);return e}var F=function(r){return typeof r=="function"},Z=function(r){return r!==null&&typeof r=="object"},xa=function(r){return String(Math.floor(Number(r)))===r},pe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Ba=function(r){return f.Children.count(r)===0},ve=function(r){return Z(r)&&F(r.then)};function O(e,r,t,n){n===void 0&&(n=0);for(var i=Fr(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function x(e,r,t){for(var n=nr(e),i=n,o=0,s=Fr(r);o<s.length-1;o++){var h=s[o],g=O(e,s.slice(0,o+1));if(g&&(Z(g)||Array.isArray(g)))i=i[h]=nr(g);else{var v=s[o+1];i=i[h]=xa(v)&&Number(v)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function jr(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],h=e[s];Z(h)?t.get(h)||(t.set(h,!0),n[s]=Array.isArray(h)?[]:{},jr(h,r,t,n[s])):n[s]=r}return n}function Ha(e,r){switch(r.type){case"SET_VALUES":return S({},e,{values:r.payload});case"SET_TOUCHED":return S({},e,{touched:r.payload});case"SET_ERRORS":return V(e.errors,r.payload)?e:S({},e,{errors:r.payload});case"SET_STATUS":return S({},e,{status:r.payload});case"SET_ISSUBMITTING":return S({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return S({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return S({},e,{values:x(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return S({},e,{touched:x(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return S({},e,{errors:x(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return S({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return S({},e,{touched:jr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return S({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return S({},e,{isSubmitting:!1});default:return e}}var N={},J={};function za(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,h=e.isInitialValid,g=e.enableReinitialize,v=g===void 0?!1:g,R=e.onSubmit,I=Rr(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=S({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:R},I),C=f.useRef(d.initialValues),L=f.useRef(d.initialErrors||N),j=f.useRef(d.initialTouched||J),A=f.useRef(d.initialStatus),E=f.useRef(!1),D=f.useRef({});f.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var Lr=f.useState(0),Pr=Lr[1],k=f.useRef({values:d.initialValues,errors:d.initialErrors||N,touched:d.initialTouched||J,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),m=k.current,b=f.useCallback(function(a){var u=k.current;k.current=Ha(u,a),u!==k.current&&Pr(function(l){return l+1})},[]),Fe=f.useCallback(function(a,u){return new Promise(function(l,c){var p=d.validate(a,u);p==null?l(N):ve(p)?p.then(function(y){l(y||N)},function(y){c(y)}):l(p)})},[d.validate]),ue=f.useCallback(function(a,u){var l=d.validationSchema,c=F(l)?l(u):l,p=u&&c.validateAt?c.validateAt(u,a):Ka(a,c);return new Promise(function(y,_){p.then(function(){y(N)},function(P){P.name==="ValidationError"?y(Ga(P)):_(P)})})},[d.validationSchema]),Re=f.useCallback(function(a,u){return new Promise(function(l){return l(D.current[a].validate(u))})},[]),Me=f.useCallback(function(a){var u=Object.keys(D.current).filter(function(c){return F(D.current[c].validate)}),l=u.length>0?u.map(function(c){return Re(c,O(a,c))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(c){return c.reduce(function(p,y,_){return y==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||y&&(p=x(p,u[_],y)),p},{})})},[Re]),$r=f.useCallback(function(a){return Promise.all([Me(a),d.validationSchema?ue(a):{},d.validate?Fe(a):{}]).then(function(u){var l=u[0],c=u[1],p=u[2],y=ye.all([l,c,p],{arrayMerge:Wa});return y})},[d.validate,d.validationSchema,Me,Fe,ue]),M=w(function(a){return a===void 0&&(a=m.values),b({type:"SET_ISVALIDATING",payload:!0}),$r(a).then(function(u){return E.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:u})),u})});f.useEffect(function(){s&&E.current===!0&&V(C.current,d.initialValues)&&M(C.current)},[s,M]);var K=f.useCallback(function(a){var u=a&&a.values?a.values:C.current,l=a&&a.errors?a.errors:L.current?L.current:d.initialErrors||{},c=a&&a.touched?a.touched:j.current?j.current:d.initialTouched||{},p=a&&a.status?a.status:A.current?A.current:d.initialStatus;C.current=u,L.current=l,j.current=c,A.current=p;var y=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:c,status:p,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(d.onReset){var _=d.onReset(m.values,Be);ve(_)?_.then(y):y()}else y()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);f.useEffect(function(){E.current===!0&&!V(C.current,d.initialValues)&&v&&(C.current=d.initialValues,K(),s&&M(C.current))},[v,d.initialValues,K,s,M]),f.useEffect(function(){v&&E.current===!0&&!V(L.current,d.initialErrors)&&(L.current=d.initialErrors||N,b({type:"SET_ERRORS",payload:d.initialErrors||N}))},[v,d.initialErrors]),f.useEffect(function(){v&&E.current===!0&&!V(j.current,d.initialTouched)&&(j.current=d.initialTouched||J,b({type:"SET_TOUCHED",payload:d.initialTouched||J}))},[v,d.initialTouched]),f.useEffect(function(){v&&E.current===!0&&!V(A.current,d.initialStatus)&&(A.current=d.initialStatus,b({type:"SET_STATUS",payload:d.initialStatus}))},[v,d.initialStatus,d.initialTouched]);var je=w(function(a){if(D.current[a]&&F(D.current[a].validate)){var u=O(m.values,a),l=D.current[a].validate(u);return ve(l)?(b({type:"SET_ISVALIDATING",payload:!0}),l.then(function(c){return c}).then(function(c){b({type:"SET_FIELD_ERROR",payload:{field:a,value:c}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(d.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),ue(m.values,a).then(function(c){return c}).then(function(c){b({type:"SET_FIELD_ERROR",payload:{field:a,value:O(c,a)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Dr=f.useCallback(function(a,u){var l=u.validate;D.current[a]={validate:l}},[]),Ur=f.useCallback(function(a){delete D.current[a]},[]),Le=w(function(a,u){b({type:"SET_TOUCHED",payload:a});var l=u===void 0?i:u;return l?M(m.values):Promise.resolve()}),Pe=f.useCallback(function(a){b({type:"SET_ERRORS",payload:a})},[]),$e=w(function(a,u){var l=F(a)?a(m.values):a;b({type:"SET_VALUES",payload:l});var c=u===void 0?t:u;return c?M(l):Promise.resolve()}),X=f.useCallback(function(a,u){b({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),H=w(function(a,u,l){b({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var c=l===void 0?t:l;return c?M(x(m.values,a,u)):Promise.resolve()}),De=f.useCallback(function(a,u){var l=u,c=a,p;if(!pe(a)){a.persist&&a.persist();var y=a.target?a.target:a.currentTarget,_=y.type,P=y.name,de=y.id,he=y.value,Wr=y.checked,Xa=y.outerHTML,He=y.options,Yr=y.multiple;l=u||P||de,c=/number|range/.test(_)?(p=parseFloat(he),isNaN(p)?"":p):/checkbox/.test(_)?qa(O(m.values,l),Wr,he):He&&Yr?Ya(He):he}l&&H(l,c)},[H,m.values]),se=w(function(a){if(pe(a))return function(u){return De(u,a)};De(a)}),z=w(function(a,u,l){u===void 0&&(u=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var c=l===void 0?i:l;return c?M(m.values):Promise.resolve()}),Ue=f.useCallback(function(a,u){a.persist&&a.persist();var l=a.target,c=l.name,p=l.id,y=l.outerHTML,_=u||c||p;z(_,!0)},[z]),le=w(function(a){if(pe(a))return function(u){return Ue(u,a)};Ue(a)}),Ne=f.useCallback(function(a){F(a)?b({type:"SET_FORMIK_STATE",payload:a}):b({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),Ve=f.useCallback(function(a){b({type:"SET_STATUS",payload:a})},[]),xe=f.useCallback(function(a){b({type:"SET_ISSUBMITTING",payload:a})},[]),ce=w(function(){return b({type:"SUBMIT_ATTEMPT"}),M().then(function(a){var u=a instanceof Error,l=!u&&Object.keys(a).length===0;if(l){var c;try{if(c=Vr(),c===void 0)return}catch(p){throw p}return Promise.resolve(c).then(function(p){return E.current&&b({type:"SUBMIT_SUCCESS"}),p}).catch(function(p){if(E.current)throw b({type:"SUBMIT_FAILURE"}),p})}else if(E.current&&(b({type:"SUBMIT_FAILURE"}),u))throw a})}),Nr=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),ce().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),Be={resetForm:K,validateForm:M,validateField:je,setErrors:Pe,setFieldError:X,setFieldTouched:z,setFieldValue:H,setStatus:Ve,setSubmitting:xe,setTouched:Le,setValues:$e,setFormikState:Ne,submitForm:ce},Vr=w(function(){return R(m.values,Be)}),xr=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),K()}),Br=f.useCallback(function(a){return{value:O(m.values,a),error:O(m.errors,a),touched:!!O(m.touched,a),initialValue:O(C.current,a),initialTouched:!!O(j.current,a),initialError:O(L.current,a)}},[m.errors,m.touched,m.values]),Hr=f.useCallback(function(a){return{setValue:function(l,c){return H(a,l,c)},setTouched:function(l,c){return z(a,l,c)},setError:function(l){return X(a,l)}}},[H,z,X]),zr=f.useCallback(function(a){var u=Z(a),l=u?a.name:a,c=O(m.values,l),p={name:l,value:c,onChange:se,onBlur:le};if(u){var y=a.type,_=a.value,P=a.as,de=a.multiple;y==="checkbox"?_===void 0?p.checked=!!c:(p.checked=!!(Array.isArray(c)&&~c.indexOf(_)),p.value=_):y==="radio"?(p.checked=c===_,p.value=_):P==="select"&&de&&(p.value=p.value||[],p.multiple=!0)}return p},[le,se,m.values]),fe=f.useMemo(function(){return!V(C.current,m.values)},[C.current,m.values]),Gr=f.useMemo(function(){return typeof h<"u"?fe?m.errors&&Object.keys(m.errors).length===0:h!==!1&&F(h)?h(d):h:m.errors&&Object.keys(m.errors).length===0},[h,fe,m.errors,d]),Kr=S({},m,{initialValues:C.current,initialErrors:L.current,initialTouched:j.current,initialStatus:A.current,handleBlur:le,handleChange:se,handleReset:xr,handleSubmit:Nr,resetForm:K,setErrors:Pe,setFormikState:Ne,setFieldTouched:z,setFieldValue:H,setFieldError:X,setStatus:Ve,setSubmitting:xe,setTouched:Le,setValues:$e,submitForm:ce,validateForm:M,validateField:je,isValid:Gr,dirty:fe,unregisterField:Ur,registerField:Dr,getFieldProps:zr,getFieldMeta:Br,getFieldHelpers:Hr,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Kr}function ti(e){var r=za(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return f.useImperativeHandle(o,function(){return r}),f.createElement(Va,{value:r},t?f.createElement(t,r):i?i(r):n?F(n)?n(r):Ba(n)?null:f.Children.only(n):null)}function Ga(e){var r={};if(e.inner){if(e.inner.length===0)return x(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;O(r,s.path)||(r=x(r,s.path,s.message))}}return r}function Ka(e,r,t,n){t===void 0&&(t=!1);var i=be(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function be(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||ze(i)?be(i):i!==""?i:void 0}):ze(e[n])?r[n]=be(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Wa(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var h=t.clone!==!1,g=h&&t.isMergeableObject(o);n[s]=g?ye(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=ye(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Ya(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function qa(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Za=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function w(e){var r=f.useRef(e);return Za(function(){r.current=e}),f.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function ni(e){var r=Mr(),t=r.getFieldProps,n=r.getFieldMeta,i=r.getFieldHelpers,o=r.registerField,s=r.unregisterField,h=Z(e),g=h?e:{name:e},v=g.name,R=g.validate;f.useEffect(function(){return v&&o(v,{validate:R}),function(){v&&s(v)}},[o,s,v,R]);var I=f.useMemo(function(){return i(v)},[i,v]);return[t(g),n(v),I]}var ka=f.forwardRef(function(e,r){var t=e.action,n=Rr(e,["action"]),i=t??"#",o=Mr(),s=o.handleReset,h=o.handleSubmit;return f.createElement("form",S({onSubmit:h,ref:r,onReset:s,action:i},n))});ka.displayName="Form";export{Xt as A,Se as B,we as C,nr as D,kn as E,ti as F,ea as G,Tr as H,Fr as I,Va as J,ni as K,U as M,G as S,Xe as U,ka as a,Q as b,wr as c,Kn as d,mr as e,We as f,qt as g,ie as h,yr as i,Ie as j,Ae as k,Da as l,Er as m,ze as n,vr as o,vn as p,Or as q,en as r,Pa as s,Na as t,za as u,sn as v,An as w,Wn as x,ln as y,yn as z};
