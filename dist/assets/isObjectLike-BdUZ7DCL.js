var s=typeof window=="object"&&window&&window.Object===Object&&window,l=s,j=l,v=typeof self=="object"&&self&&self.Object===Object&&self,y=j||v||Function("return this")(),d=y,T=d,S=T.Symbol,n=S,w=Array.isArray,N=w,e=n,i=Object.prototype,O=i.hasOwnProperty,u=i.toString,t=e?e.toStringTag:void 0;function p(r){var b=O.call(r,t),c=r[t];try{r[t]=void 0;var g=!0}catch{}var f=u.call(r);return g&&(b?r[t]=c:delete r[t]),f}var $=p,_=Object.prototype,m=_.toString;function G(r){return m.call(r)}var h=G,o=n,A=$,P=h,R="[object Null]",k="[object Undefined]",a=o?o.toStringTag:void 0;function L(r){return r==null?r===void 0?k:R:a&&a in Object(r)?A(r):P(r)}var U=L;function x(r){return r!=null&&typeof r=="object"}var q=x;export{U as _,n as a,N as b,d as c,l as d,q as i};