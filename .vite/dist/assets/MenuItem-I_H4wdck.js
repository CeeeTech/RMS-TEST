import{d as P,g as T,e as F,aj as G,b$ as L,h as r,c8 as C,Y as c,c9 as x,ca as $,r as d,f as w,_ as E,cb as I,j as U,k as _,l as M,m as O,n as H}from"./index-DRAxbQhQ.js";function S(e){return T("MuiMenuItem",e)}const z=P("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=z,D=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,s)=>{const{ownerState:a}=e;return[s.root,a.dense&&s.dense,a.divider&&s.divider,!a.disableGutters&&s.gutters]},Y=e=>{const{disabled:s,dense:a,divider:t,disableGutters:l,selected:p,classes:o}=e,i=H({root:["root",a&&"dense",s&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},S,o);return r({},o,i)},q=F(G,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:s})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${x.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.inset}`]:{marginLeft:52},[`& .${$.root}`]:{marginTop:0,marginBottom:0},[`& .${$.inset}`]:{paddingLeft:36},[`& .${C.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${C.root} svg`]:{fontSize:"1.25rem"}}))),A=d.forwardRef(function(s,a){const t=w({props:s,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:v,className:j}=t,B=E(t,D),f=d.useContext(I),m=d.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),u=d.useRef(null);U(()=>{l&&u.current&&u.current.focus()},[l]);const V=r({},t,{dense:m.dense,divider:g,disableGutters:i}),b=Y(t),N=_(u,a);let y;return t.disabled||(y=v!==void 0?v:-1),M.jsx(I.Provider,{value:m,children:M.jsx(q,r({ref:N,role:R,tabIndex:y,component:p,focusVisibleClassName:O(b.focusVisible,k),className:O(b.root,j)},B,{ownerState:V,classes:b}))})}),K=A;export{K as M};
