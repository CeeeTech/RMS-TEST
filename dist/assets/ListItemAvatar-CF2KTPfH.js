import{g as x,d as I,e as u,h as o,r as n,f as g,_ as p,cb as v,l as L,m as f,n as d}from"./index-DRAxbQhQ.js";function A(t){return x("MuiListItemAvatar",t)}I("MuiListItemAvatar",["root","alignItemsFlexStart"]);const C=["className"],h=t=>{const{alignItems:s,classes:e}=t;return d({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},A,e)},S=u("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>o({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),R=n.forwardRef(function(s,e){const a=g({props:s,name:"MuiListItemAvatar"}),{className:i}=a,l=p(a,C),m=n.useContext(v),r=o({},a,{alignItems:m.alignItems}),c=h(r);return L.jsx(S,o({className:f(c.root,i),ownerState:r,ref:e},l))}),M=R;export{M as L};
