import{d as z,g as F,e as R,aj as k,b$ as $,ah as d,h as i,r as y,f as w,_ as N,l as V,m as g,n as _}from"./index-aYNdDFsw.js";function m(o){return F("MuiFab",o)}const I=z("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),v=I,M=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],W=o=>{const{color:a,variant:s,classes:r,size:l}=o,t={root:["root",s,`size${d(l)}`,a==="inherit"?"colorInherit":a]},e=_(t,m,r);return i({},r,e)},j=R(k,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>$(o)||o==="classes",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,a[s.variant],a[`size${d(s.size)}`],s.color==="inherit"&&a.colorInherit,a[d(s.size)],a[s.color]]}})(({theme:o,ownerState:a})=>{var s,r;return i({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(s=(r=o.palette).getContrastText)==null?void 0:s.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${v.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]}},a.size==="small"&&{width:40,height:40},a.size==="medium"&&{width:48,height:48},a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},a.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:a})=>i({},a.color!=="inherit"&&a.color!=="default"&&(o.vars||o).palette[a.color]!=null&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}}),({theme:o})=>({[`&.${v.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}})),P=y.forwardRef(function(a,s){const r=w({props:a,name:"MuiFab"}),{children:l,className:t,color:e="default",component:c="button",disabled:u=!1,disableFocusRipple:b=!1,focusVisibleClassName:x,size:h="large",variant:f="circular"}=r,C=N(r,M),p=i({},r,{color:e,component:c,disabled:u,disableFocusRipple:b,size:h,variant:f}),n=W(p);return V.jsx(j,i({className:g(n.root,t),component:c,disabled:u,focusRipple:!b,focusVisibleClassName:g(n.focusVisible,x),ownerState:p,ref:s},C,{classes:n,children:l}))}),B=P;export{B as F};