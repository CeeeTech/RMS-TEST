import{d as q,g as J,e as G,h as a,Y as C,cw as K,r as m,f as Q,_ as F,cb as R,j as X,ag as Z,k as tt,m as A,l as c,c4 as E,n as et,aj as st}from"./index-DRAxbQhQ.js";import{L as at}from"./ListItemSecondaryAction-Nz3BUvML.js";function ot(t){return J("MuiListItem",t)}const nt=q("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),l=nt,it=["className"],rt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],ct=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},lt=t=>{const{alignItems:e,button:s,classes:i,dense:d,disabled:p,disableGutters:b,disablePadding:y,divider:x,hasSecondaryAction:u,selected:I}=t;return et({root:["root",d&&"dense",!b&&"gutters",!y&&"padding",x&&"divider",p&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",u&&"secondaryAction",I&&"selected"],container:["container"]},ot,i)},dt=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:ct})(({theme:t,ownerState:e})=>a({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&a({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${K.root}`]:{paddingRight:48}},{[`&.${l.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${l.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${l.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${l.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:C(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:C(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),pt=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),ut=m.forwardRef(function(e,s){const i=Q({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:p=!1,button:b=!1,children:y,className:x,component:u,components:I={},componentsProps:O={},ContainerComponent:j="li",ContainerProps:{className:_}={},dense:k=!1,disabled:N=!1,disableGutters:P=!1,disablePadding:U=!1,divider:T=!1,focusVisibleClassName:D,secondaryAction:h,selected:w=!1,slotProps:z={},slots:H={}}=i,W=F(i.ContainerProps,it),Y=F(i,rt),S=m.useContext(R),$=m.useMemo(()=>({dense:k||S.dense||!1,alignItems:d,disableGutters:P}),[d,S.dense,k,P]),L=m.useRef(null);X(()=>{p&&L.current&&L.current.focus()},[p]);const r=m.Children.toArray(y),M=r.length&&Z(r[r.length-1],["ListItemSecondaryAction"]),f=a({},i,{alignItems:d,autoFocus:p,button:b,dense:$.dense,disabled:N,disableGutters:P,disablePadding:U,divider:T,hasSecondaryAction:M,selected:w}),V=lt(f),B=tt(L,s),v=H.root||I.Root||dt,g=z.root||O.root||{},o=a({className:A(V.root,g.className,x),disabled:N},Y);let n=u||"li";return b&&(o.component=u||"div",o.focusVisibleClassName=A(l.focusVisible,D),n=st),M?(n=!o.component&&!u?"div":n,j==="li"&&(n==="li"?n="div":o.component==="li"&&(o.component="div")),c.jsx(R.Provider,{value:$,children:c.jsxs(pt,a({as:j,className:A(V.container,_),ref:B,ownerState:f},W,{children:[c.jsx(v,a({},g,!E(v)&&{as:n,ownerState:a({},f,g.ownerState)},o,{children:r})),r.pop()]}))})):c.jsx(R.Provider,{value:$,children:c.jsxs(v,a({},g,{as:n,ref:B},!E(v)&&{ownerState:a({},f,g.ownerState)},o,{children:[r,h&&c.jsx(at,{children:h})]}))})}),bt=ut;export{bt as L};
