import{g as re,d as se,e as Y,b3 as le,Z as ae,h as r,f as ce,r as i,k as X,cq as ie,bP as pe,bU as ue,bK as L,l as m,n as de,bS as Pe,bN as W,_ as O,bO as fe,O as me}from"./index-DRAxbQhQ.js";import{m as ke,n as he,a as Re,o as xe,p as Se,L as ve}from"./dateViewRenderers-CPN42OR2.js";import{I as ye}from"./InputAdornment-Cj0cTNRg.js";function Ee(e){return re("MuiPickersPopper",e)}se("MuiPickersPopper",["root","paper"]);const be=["PaperComponent","popperPlacement","ownerState","children","paperSlotProps","paperClasses","onPaperClick","onPaperTouchStart"],we=e=>{const{classes:s}=e;return de({root:["root"],paper:["paper"]},Ee,s)},Te=Y(le,{name:"MuiPickersPopper",slot:"Root",overridesResolver:(e,s)=>s.root})(({theme:e})=>({zIndex:e.zIndex.modal})),Ce=Y(ae,{name:"MuiPickersPopper",slot:"Paper",overridesResolver:(e,s)=>s.paper})(({ownerState:e})=>r({outline:0,transformOrigin:"top center"},e.placement.includes("top")&&{transformOrigin:"bottom center"}));function Fe(e,s){return s.documentElement.clientWidth<e.clientX||s.documentElement.clientHeight<e.clientY}function Ae(e,s){const p=i.useRef(!1),d=i.useRef(!1),a=i.useRef(null),P=i.useRef(!1);i.useEffect(()=>{if(!e)return;function o(){P.current=!0}return document.addEventListener("mousedown",o,!0),document.addEventListener("touchstart",o,!0),()=>{document.removeEventListener("mousedown",o,!0),document.removeEventListener("touchstart",o,!0),P.current=!1}},[e]);const l=Pe(o=>{if(!P.current)return;const n=d.current;d.current=!1;const t=W(a.current);if(!a.current||"clientX"in o&&Fe(o,t))return;if(p.current){p.current=!1;return}let u;o.composedPath?u=o.composedPath().indexOf(a.current)>-1:u=!t.documentElement.contains(o.target)||a.current.contains(o.target),!u&&!n&&s(o)}),S=()=>{d.current=!0};return i.useEffect(()=>{if(e){const o=W(a.current),n=()=>{p.current=!0};return o.addEventListener("touchstart",l),o.addEventListener("touchmove",n),()=>{o.removeEventListener("touchstart",l),o.removeEventListener("touchmove",n)}}},[e,l]),i.useEffect(()=>{if(e){const o=W(a.current);return o.addEventListener("click",l),()=>{o.removeEventListener("click",l),d.current=!1}}},[e,l]),[a,S,S]}const Ie=i.forwardRef((e,s)=>{const{PaperComponent:p,popperPlacement:d,ownerState:a,children:P,paperSlotProps:l,paperClasses:S,onPaperClick:o,onPaperTouchStart:n}=e,t=O(e,be),u=r({},a,{placement:d}),c=L({elementType:p,externalSlotProps:l,additionalProps:{tabIndex:-1,elevation:8,ref:s},className:S,ownerState:u});return m.jsx(p,r({},t,c,{onClick:f=>{var x;o(f),(x=c.onClick)==null||x.call(c,f)},onTouchStart:f=>{var x;n(f),(x=c.onTouchStart)==null||x.call(c,f)},ownerState:u,children:P}))});function Le(e){var s,p,d,a;const P=ce({props:e,name:"MuiPickersPopper"}),{anchorEl:l,children:S,containerRef:o=null,shouldRestoreFocus:n,onBlur:t,onDismiss:u,open:c,role:f,placement:x,slots:k,slotProps:h,reduceAnimations:b}=P;i.useEffect(()=>{function R(y){c&&(y.key==="Escape"||y.key==="Esc")&&u()}return document.addEventListener("keydown",R),()=>{document.removeEventListener("keydown",R)}},[u,c]);const v=i.useRef(null);i.useEffect(()=>{f==="tooltip"||n&&!n()||(c?v.current=ke(document):v.current&&v.current instanceof HTMLElement&&setTimeout(()=>{v.current instanceof HTMLElement&&v.current.focus()}))},[c,f,n]);const[_,g,D]=Ae(c,t??u),B=i.useRef(null),M=X(B,o),U=X(M,_),w=P,T=we(w),E=he(),$=b??E,C=R=>{R.key==="Escape"&&(R.stopPropagation(),u())},F=((s=k==null?void 0:k.desktopTransition)!=null?s:$)?ie:pe,V=(p=k==null?void 0:k.desktopTrapFocus)!=null?p:ue,z=(d=k==null?void 0:k.desktopPaper)!=null?d:Ce,j=(a=k==null?void 0:k.popper)!=null?a:Te,H=L({elementType:j,externalSlotProps:h==null?void 0:h.popper,additionalProps:{transition:!0,role:f,open:c,anchorEl:l,placement:x,onKeyDown:C},className:T.root,ownerState:P});return m.jsx(j,r({},H,{children:({TransitionProps:R,placement:y})=>m.jsx(V,r({open:c,disableAutoFocus:!0,disableRestoreFocus:!0,disableEnforceFocus:f==="tooltip",isEnabled:()=>!0},h==null?void 0:h.desktopTrapFocus,{children:m.jsx(F,r({},R,h==null?void 0:h.desktopTransition,{children:m.jsx(Ie,{PaperComponent:z,ownerState:w,popperPlacement:y,ref:U,onPaperClick:g,onPaperTouchStart:D,paperClasses:T.paper,paperSlotProps:h==null?void 0:h.desktopPaper,children:S})}))}))}))}const _e=["props","getOpenDialogAriaText"],ge=["ownerState"],$e=["ownerState"],Me=e=>{var s,p,d,a,P;let{props:l,getOpenDialogAriaText:S}=e,o=O(e,_e);const{slots:n,slotProps:t,className:u,sx:c,format:f,formatDensity:x,timezone:k,name:h,label:b,inputRef:v,readOnly:_,disabled:g,autoFocus:D,localeText:B,reduceAnimations:M}=l,U=Re(),w=i.useRef(null),T=i.useRef(null),E=fe(),$=(s=t==null||(p=t.toolbar)==null?void 0:p.hidden)!=null?s:!1,{open:C,actions:F,hasUIView:V,layoutProps:z,renderCurrentView:j,shouldRestoreFocus:H,fieldProps:R}=xe(r({},o,{props:l,inputRef:w,autoFocusView:!0,additionalViewProps:{},wrapperVariant:"desktop"})),y=(d=n.inputAdornment)!=null?d:ye,Z=L({elementType:y,externalSlotProps:t==null?void 0:t.inputAdornment,additionalProps:{position:"end"},ownerState:l}),K=O(Z,ge),q=(a=n.openPickerButton)!=null?a:me,J=L({elementType:q,externalSlotProps:t==null?void 0:t.openPickerButton,additionalProps:{disabled:g||_,onClick:C?F.onClose:F.onOpen,"aria-label":S(R.value,U),edge:K.position},ownerState:l}),Q=O(J,$e),ee=n.openPickerIcon,G=n.field,A=L({elementType:G,externalSlotProps:t==null?void 0:t.field,additionalProps:r({},R,$&&{id:E},{readOnly:_,disabled:g,className:u,sx:c,format:f,formatDensity:x,timezone:k,label:b,name:h,autoFocus:D&&!l.open,focused:C?!0:void 0}),ownerState:l});V&&(A.InputProps=r({},A.InputProps,{ref:T,[`${K.position}Adornment`]:m.jsx(y,r({},K,{children:m.jsx(q,r({},Q,{children:m.jsx(ee,r({},t==null?void 0:t.openPickerIcon))}))}))}));const oe=r({textField:n.textField,clearIcon:n.clearIcon,clearButton:n.clearButton},A.slots),te=(P=n.layout)!=null?P:Se,ne=X(w,A.inputRef,v);let N=E;$&&(b?N=`${E}-label`:N=void 0);const I=r({},t,{toolbar:r({},t==null?void 0:t.toolbar,{titleId:E}),popper:r({"aria-labelledby":N},t==null?void 0:t.popper)});return{renderPicker:()=>m.jsxs(ve,{localeText:B,children:[m.jsx(G,r({},A,{slots:oe,slotProps:I,inputRef:ne})),m.jsx(Le,r({role:"dialog",placement:"bottom-start",anchorEl:T.current},F,{open:C,slots:n,slotProps:I,shouldRestoreFocus:H,reduceAnimations:M,children:m.jsx(te,r({},z,I==null?void 0:I.layout,{slots:n,slotProps:I,children:j()}))}))]})}};export{Me as u};
