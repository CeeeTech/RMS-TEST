import{e as R,cq as W,l as t,h as l,_ as q,r as z,bO as H,bK as K,k as B}from"./index-aYNdDFsw.js";import{q as G,a as N,o as U,t as J,p as Q,L as X}from"./dateViewRenderers-DtPWu7er.js";import{D as Y,d as h,a as Z}from"./DialogContent-v1P_Pn4u.js";const oo=R(Y)({[`& .${h.container}`]:{outline:0},[`& .${h.paper}`]:{outline:0,minWidth:G}}),eo=R(Z)({"&:first-of-type":{padding:0}});function lo(p){var n,i;const{children:u,onDismiss:r,open:P,slots:s,slotProps:o}=p,e=(n=s==null?void 0:s.dialog)!=null?n:oo,b=(i=s==null?void 0:s.mobileTransition)!=null?i:W;return t.jsx(e,l({open:P,onClose:r},o==null?void 0:o.dialog,{TransitionComponent:b,TransitionProps:o==null?void 0:o.mobileTransition,PaperComponent:s==null?void 0:s.mobilePaper,PaperProps:o==null?void 0:o.mobilePaper,children:t.jsx(eo,{children:u})}))}const so=["props","getOpenDialogAriaText"],ao=p=>{var n,i,u;let{props:r,getOpenDialogAriaText:P}=p,s=q(p,so);const{slots:o,slotProps:e,className:b,sx:F,format:O,formatDensity:_,timezone:j,name:C,label:g,inputRef:I,readOnly:m,disabled:v,localeText:$}=r,S=N(),y=z.useRef(null),c=H(),D=(n=e==null||(i=e.toolbar)==null?void 0:i.hidden)!=null?n:!1,{open:w,actions:f,layoutProps:L,renderCurrentView:M,fieldProps:k}=U(l({},s,{props:r,inputRef:y,autoFocusView:!0,additionalViewProps:{},wrapperVariant:"mobile"})),T=o.field,a=K({elementType:T,externalSlotProps:e==null?void 0:e.field,additionalProps:l({},k,D&&{id:c},!(v||m)&&{onClick:f.onOpen,onKeyDown:J(f.onOpen)},{readOnly:m??!0,disabled:v,className:b,sx:F,format:O,formatDensity:_,timezone:j,label:g,name:C}),ownerState:r});a.inputProps=l({},a.inputProps,{"aria-label":P(k.value,S)});const V=l({textField:o.textField},a.slots),A=(u=o.layout)!=null?u:Q,E=B(y,a.inputRef,I);let x=c;D&&(g?x=`${c}-label`:x=void 0);const d=l({},e,{toolbar:l({},e==null?void 0:e.toolbar,{titleId:c}),mobilePaper:l({"aria-labelledby":x},e==null?void 0:e.mobilePaper)});return{renderPicker:()=>t.jsxs(X,{localeText:$,children:[t.jsx(T,l({},a,{slots:V,slotProps:d,inputRef:E})),t.jsx(lo,l({},f,{open:w,slots:o,slotProps:d,children:t.jsx(A,l({},L,d==null?void 0:d.layout,{slots:o,slotProps:d,children:M()}))}))]})}};export{ao as u};
