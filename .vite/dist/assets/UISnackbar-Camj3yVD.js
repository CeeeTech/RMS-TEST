import{l as e,G as r,F as n,dn as a,x as f,y as k,e as E,dp as $,r as u,dq as C,ac as M,D as v,K as V,O as D,ak as F,Z as L,P as y,an as b,dr as A,S as p,d6 as q,aH as O,ae as m,aI as g,ds as G,am as H,dt as U,a5 as N,aV as B,cP as Z,cq as K,bP as J,M as Q,bf as X,$ as ee,a1 as re,bh as s,Y as d}from"./index-DRAxbQhQ.js";import{S as c}from"./SubCard-DHuXmrDE.js";import{S as ne}from"./CardSecondaryAction-DhIG1Y_S.js";import{d as te}from"./CheckCircle-B45X2rVL.js";import{d as ie}from"./KeyboardArrowDownOutlined-N6AnzHIX.js";import{C as ae}from"./CardActions-DgWdTrRU.js";import{C as z}from"./Checkbox-DF2srxXR.js";import{F as R}from"./FormControl-DTGQKB1F.js";import"./Tooltip-CFImnuRV.js";import"./utils-DoM3o7-Q.js";function se(){return e.jsx(c,{title:"Color Variants",children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",sx:{bgcolor:"grey.900","&:hover":{bgcolor:"grey.700"}},onClick:()=>a("This is default message."),children:"Default"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",color:"success",onClick:()=>a("This is success message",{variant:"success"}),children:"Success"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",color:"warning",onClick:()=>a("This is warning message",{variant:"warning"}),children:"Warning"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",color:"info",onClick:()=>a("This is info message",{variant:"info"}),children:"Info"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",color:"error",onClick:()=>a("This is error message",{variant:"error"}),children:"Error"})})]})})}var S={},oe=k;Object.defineProperty(S,"__esModule",{value:!0});var W=S.default=void 0,le=oe(f()),ce=e;W=S.default=(0,le.default)((0,ce.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"CloseOutlined");const de=E($)(()=>({"@media (min-width:600px)":{minWidth:"344px !important"}})),_=u.forwardRef((i,t)=>{const{closeSnackbar:o}=C(),[l,h]=u.useState(!1),x=u.useCallback(()=>{h(Y=>!Y)},[]),j=u.useCallback(()=>{o(i.id)},[i.id,o]);return e.jsx(de,{ref:t,children:e.jsxs(M,{sx:{bgcolor:"warning.light",width:"100%"},children:[e.jsxs(ae,{sx:{padding:"8px 8px 8px 16px",justifyContent:"space-between"},children:[e.jsx(v,{variant:"subtitle2",children:i.message}),e.jsxs(V,{sx:{marginLeft:"auto"},children:[e.jsx(D,{"aria-label":"Show more",sx:{p:1,transition:"all .2s",transform:l?"rotate(180deg)":"rotate(0deg)"},onClick:x,children:e.jsx(ie,{})}),e.jsx(D,{sx:{p:1,transition:"all .2s"},onClick:j,children:e.jsx(W,{})})]})]}),e.jsx(F,{in:l,timeout:"auto",unmountOnExit:!0,children:e.jsxs(L,{sx:{padding:2,borderTopLeftRadius:0,borderTopRightRadius:0,bgcolor:"warning.lighter"},children:[e.jsx(v,{gutterBottom:!0,children:"PDF ready"}),e.jsx(n,{size:"small",startIcon:e.jsx(te,{sx:{fontSize:16}}),sx:{"&:hover":{bgcolor:"transparent"}},children:"Download now"})]})})]})})});_.propTypes={id:y.number,message:y.string};function ue(){return e.jsx(c,{title:"Custom Component",children:e.jsx(n,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{a("You're report is ready",{anchorOrigin:{vertical:"bottom",horizontal:"right"},content:(i,t)=>e.jsx(_,{id:i,message:t})})},children:"Show snackbar"})})}function he(){const[i,t]=u.useState(!1),o=l=>{t(l.target.checked),b(A({dense:l.target.checked}))};return e.jsxs(c,{title:"Dense",children:[e.jsx(z,{checked:i,onChange:o,inputProps:{"aria-label":"controlled"}}),"Dense margins",e.jsx(n,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>a("Your notification here"),children:"Show snackbar"})]})}function xe(){const{closeSnackbar:i}=C();return e.jsx(c,{title:"Dismiss Programmatically",children:e.jsxs(p,{flexDirection:"row",justifyContent:"space-between",children:[e.jsx(n,{variant:"outlined",fullWidth:!0,color:"error",sx:{marginBlockStart:2,marginInlineEnd:2},onClick:()=>a("No connection!",{variant:"error",persist:!0,anchorOrigin:{horizontal:"center",vertical:"bottom"}}),children:"Simulate connection loss"}),e.jsx(n,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>i(),children:"Back Online"})]})})}function me(){const[i,t]=u.useState(1),o=(x,j)=>{typeof j=="number"&&t(j)},l=[{value:1},{value:3},{value:5},{value:7},{value:9},{value:11}];function h(){return i===11?"persist":`${i}s`}return e.jsxs(c,{title:"Hide Duration",children:[e.jsx(q,{value:i,min:1,step:2,max:11,valueLabelDisplay:"on",marks:l,getAriaValueText:h,valueLabelFormat:h,onChange:o}),e.jsx(n,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{i!==11?a("Your notification here",{autoHideDuration:i*1e3,variant:"info"}):a("Your notification here",{persist:!0,variant:"info"})},children:"Show Snackbar"})]})}function ge(){const[i,t]=u.useState("usedefault"),o=l=>{t(l.target.value)};return e.jsxs(c,{title:"With Icons",children:[e.jsx(R,{children:e.jsxs(O,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:i,onChange:o,name:"row-radio-buttons-group",children:[e.jsx(m,{value:"usedefault",control:e.jsx(g,{}),label:"Use Default"}),e.jsx(m,{value:"useemojis",control:e.jsx(g,{}),label:"Use Emojis"}),e.jsx(m,{value:"hide",control:e.jsx(g,{}),label:"Hide"})]})}),e.jsx(n,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{a("Your notification here",{variant:"info"}),b(G({iconVariant:i}))},children:"Show Snackbar"})]})}var w={},je=k;Object.defineProperty(w,"__esModule",{value:!0});var I=w.default=void 0,ve=je(f()),pe=e;I=w.default=(0,ve.default)((0,pe.jsx)("path",{d:"M19 13H5v-2h14z"}),"RemoveOutlined");var T={},fe=k;Object.defineProperty(T,"__esModule",{value:!0});var P=T.default=void 0,ke=fe(f()),Ce=e;P=T.default=(0,ke.default)((0,Ce.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined");function be(){const i={minWidth:"auto"},t=H(x=>x.snackbar),[o,l]=u.useState(3),h=()=>{a("Your notification here",{variant:"info"}),b(U({maxStack:o}))};return e.jsxs(c,{title:"Maximum snackbars",children:[e.jsxs(p,{justifyContent:"space-between",flexDirection:"row",children:[e.jsx(n,{variant:"outlined",size:"small",sx:i,disabled:t.maxStack===0,onClick:()=>l(x=>x-1),children:e.jsx(I,{})}),e.jsxs(v,{variant:"body1",children:["stack up to ",o]}),e.jsx(n,{variant:"outlined",size:"small",sx:i,disabled:t.maxStack===4,onClick:()=>l(x=>x+1),children:e.jsx(P,{})})]}),e.jsx(n,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>h(),children:"Show Snackbar"})]})}function Se(){return e.jsx(c,{title:"Positioning",children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>a("This is default message.",{anchorOrigin:{vertical:"top",horizontal:"left"},variant:"info"}),children:"Top-Left"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>a("his is success message",{anchorOrigin:{vertical:"top",horizontal:"center"},variant:"info"}),children:"Top-Center"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>a("This is warning message",{anchorOrigin:{vertical:"top",horizontal:"right"},variant:"info"}),children:"Top-right"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>a("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"left"},variant:"info"}),children:"Bottom-left"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>a("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"center"},variant:"info"}),children:"Bottom-center"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>a("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"info"}),children:"Bottom-Right"})})]})})}function we(){const[i,t]=N.useState(!0),o=l=>{t(l.target.checked)};return e.jsx(c,{title:"Prevent Duplicate",children:e.jsxs(p,{flexDirection:"row",gap:1,justifyContent:"center",alignItems:"center",flexWrap:"wrap",children:[e.jsx(z,{checked:i,onChange:o,inputProps:{"aria-label":"controlled"}}),"Prevent duplicate",e.jsx(n,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>a("You only see me once.",{preventDuplicate:!!i,variant:"info"}),children:"Show snackbar"})]})})}function Te(){const{closeSnackbar:i}=C(),t=o=>e.jsxs(p,{direction:"row",spacing:.5,children:[e.jsx(n,{size:"small",color:"error",variant:"contained",onClick:()=>{alert(`I belong to snackbar with id ${o}`)},children:"Undo"}),e.jsx(n,{size:"small",color:"secondary",variant:"contained",onClick:()=>i(o),children:"Dismiss"})]});return e.jsx(c,{title:"With Action",children:e.jsx(n,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>a("Your notification here",{action:o=>t(o)}),children:"Show Snackbar"})})}function De(){const[i,t]=u.useState("slide"),o=h=>{t(h.target.value)},l=()=>{switch(i){case"slide":a("Your notification here",{TransitionComponent:B,variant:"info"});break;case"grow":a("Your notification here",{TransitionComponent:J,variant:"info"});break;case"fade":a("Your notification here",{TransitionComponent:K,variant:"info"});break;case"zoom":a("Your notification here",{TransitionComponent:Z,variant:"info"});break;default:a("Your notification here",{TransitionComponent:B,variant:"info"});break}};return e.jsxs(c,{title:"Animation",children:[e.jsx(R,{children:e.jsxs(O,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:i,onChange:o,name:"row-radio-buttons-group",children:[e.jsx(m,{value:"slide",control:e.jsx(g,{}),label:"Slide"}),e.jsx(m,{value:"grow",control:e.jsx(g,{}),label:"Grow"}),e.jsx(m,{value:"fade",control:e.jsx(g,{}),label:"Fade"}),e.jsx(m,{value:"zoom",control:e.jsx(g,{}),label:"Zoom"})]})}),e.jsx(n,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>l(),children:"Show Snackbar"})]})}const Ee=()=>{const i=Q(),t=X();return e.jsx(ee,{title:"Snackbar",secondary:e.jsx(ne,{link:"https://next.material-ui.com/components/snackbars/"}),children:e.jsxs(r,{container:!0,spacing:re,children:[e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx(c,{title:"Basic Snackbar",children:e.jsxs(r,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",onClick:()=>t(s({open:!0,message:"This is default message",variant:"alert",close:!1})),children:"Default"})}),e.jsx(r,{item:!0,children:e.jsx(n,{sx:{color:"error.dark",borderColor:"error.dark","&:hover":{bgcolor:d(i.palette.error.main,.2),borderColor:"error.dark"}},variant:"outlined",onClick:()=>t(s({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"},close:!1})),children:"Error"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",sx:{color:"success.dark",borderColor:"success.dark","&:hover":{bgcolor:d(i.palette.success.main,.2),borderColor:"success.dark"}},onClick:()=>t(s({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"},close:!1})),children:"Success"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",sx:{color:"warning.dark",borderColor:"warning.dark","&:hover":{bgcolor:d(i.palette.warning.main,.2),borderColor:"warning.dark"}},onClick:()=>t(s({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"},close:!1})),children:"Warning"})})]})})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx(c,{title:"With Close",children:e.jsxs(r,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",onClick:()=>t(s({open:!0,message:"This is default message",variant:"alert"})),children:"Default"})}),e.jsx(r,{item:!0,children:e.jsx(n,{sx:{color:"error.dark",borderColor:"error.dark","&:hover":{bgcolor:d(i.palette.error.main,.2),borderColor:"error.dark"}},variant:"outlined",onClick:()=>t(s({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"}})),children:"Error"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",sx:{color:"success.dark",borderColor:"success.dark","&:hover":{bgcolor:d(i.palette.success.main,.2),borderColor:"success.dark"}},onClick:()=>t(s({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"}})),children:"Success"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",sx:{color:"warning.dark",borderColor:"warning.dark","&:hover":{bgcolor:d(i.palette.warning.main,.2),borderColor:"warning.dark"}},onClick:()=>t(s({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"}})),children:"Warning"})})]})})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx(c,{title:"With Close + Action",children:e.jsxs(r,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",onClick:()=>t(s({open:!0,message:"This is default message",variant:"alert",actionButton:!0})),children:"Default"})}),e.jsx(r,{item:!0,children:e.jsx(n,{sx:{color:"error.dark",borderColor:"error.dark","&:hover":{bgcolor:d(i.palette.error.main,.2),borderColor:"error.dark"}},variant:"outlined",onClick:()=>t(s({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"},actionButton:!0})),children:"Error"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",sx:{color:"success.dark",borderColor:"success.dark","&:hover":{bgcolor:d(i.palette.success.main,.2),borderColor:"success.dark"}},onClick:()=>t(s({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"},actionButton:!0})),children:"Success"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"outlined",sx:{color:"warning.dark",borderColor:"warning.dark","&:hover":{bgcolor:d(i.palette.success.main,.2),borderColor:"success.dark"}},onClick:()=>t(s({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"},actionButton:!0})),children:"Warning"})})]})})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsx(c,{title:"Snackbar Position",children:e.jsxs(r,{container:!0,spacing:2,justifyContent:"center",children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,anchorOrigin:{vertical:"top",horizontal:"left"},message:"This is an top-left message!"})),children:"Top-Left"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},message:"This is an top-center message!"})),children:"Top-Center"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},message:"This is an top-right message!"})),children:"Top-Right"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},message:"This is an bottom-right message!"})),children:"Bottom-Right"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"This is an bottom-center message!"})),children:"Bottom-Center"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},message:"This is an bottom-left message!"})),children:"Bottom-Left"})})]})})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsx(c,{title:"Snackbar Trasition",children:e.jsxs(r,{container:!0,spacing:2,justifyContent:"center",children:[e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,message:"This is an fade message!",transition:"Fade"})),children:"Default/Fade"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,message:"This is an slide-left message!",transition:"SlideLeft"})),children:"Slide Left"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,message:"This is an slide-up message!",transition:"SlideUp"})),children:"Slide Up"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,message:"This is an slide-right message!",transition:"SlideRight"})),children:"Slide Right"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,message:"This is an slide-down message!",transition:"SlideDown"})),children:"Slide Down"})}),e.jsx(r,{item:!0,children:e.jsx(n,{variant:"contained",onClick:()=>t(s({open:!0,message:"This is an grow message!",transition:"Grow"})),children:"Grow"})})]})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(v,{variant:"h5",sx:{mt:2},children:"Extended - Notistack"})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(se,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(be,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(ge,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(me,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(Te,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(xe,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(we,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(De,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(he,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(ue,{})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(Se,{})})]})})};export{Ee as default};
