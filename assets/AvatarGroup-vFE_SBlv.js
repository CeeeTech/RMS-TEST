import{d as j,g as S,e as U,h as l,cl as L,r as n,f as V,_ as k,l as C,af as z,m as x,n as D}from"./index-D1jq9kJH.js";function I(s){return S("MuiAvatarGroup",s)}const T=j("MuiAvatarGroup",["root","avatar"]),W=T,q=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],P={small:-16,medium:null},w=s=>{const{classes:a}=s;return D({root:["root"],avatar:["avatar"]},I,a)},B=U("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${W.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&P[a.spacing]!==void 0?P[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),F=n.forwardRef(function(a,r){var A;const i=V({props:a,name:"MuiAvatarGroup"}),{children:M,className:N,component:g="div",componentsProps:$={},max:c=5,renderSurplus:f,slotProps:y={},spacing:b="medium",total:E,variant:p="circular"}=i,R=k(i,q);let t=c<2?2:c;const h=l({},i,{max:c,spacing:b,component:g,variant:p}),u=w(h),v=n.Children.toArray(M).filter(o=>n.isValidElement(o)),e=E||v.length;e===t&&(t+=1),t=Math.min(e+1,t);const G=Math.min(v.length,t-1),m=Math.max(e-t,e-G,0),_=f?f(m):`+${m}`,d=(A=y.additionalAvatar)!=null?A:$.additionalAvatar;return C.jsxs(B,l({as:g,ownerState:h,className:x(u.root,N),ref:r},R,{children:[m?C.jsx(z,l({variant:p},d,{className:x(u.avatar,d==null?void 0:d.className),children:_})):null,v.slice(0,G).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,u.avatar),variant:o.props.variant||p}))]}))}),J=F;export{J as A};