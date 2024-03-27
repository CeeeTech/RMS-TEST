import{M as p,a5 as c,am as j,an as g,aQ as f,l as e,T as v,G as t,N as a,S as b,D as s,a1 as x,a2 as y,F as m,$ as S}from"./index-DRAxbQhQ.js";import{g as k,I as A}from"./getImageUrl-nY85S8xQ.js";import{U as C}from"./avatar-1-DysEhUg8.js";import{A as I}from"./avatar-2-BloaqsK2.js";import{A as M}from"./avatar-3-C67F-ecU.js";import{A as T,a as U}from"./avatar-5-C2fWIyMU.js";import{d as w}from"./CheckCircle-B45X2rVL.js";import{d as z}from"./ChatBubbleTwoTone-hBUUG7Y2.js";import{d as R}from"./BlockTwoTone-Dwkpe4AF.js";import{T as B,a as W,c as E,b as P}from"./TableRow-C4jGaY-n.js";import{T as l}from"./TableCell-GjZj8q6n.js";import{A as L}from"./AvatarGroup-CU3P7KiQ.js";import{d as $}from"./ExpandMoreRounded-DnU25RZF.js";import{O}from"./OutlinedInput-C-PMnjYA.js";import{I as _}from"./InputAdornment-Cj0cTNRg.js";import{I as G}from"./IconSearch-DB3OZ0iF.js";import{P as D}from"./Pagination-COn3w7FQ.js";import{M as F}from"./Menu-DCGCr4Gv.js";import{M as h}from"./MenuItem-I_H4wdck.js";import"./InputBase-C10xFuq9.js";import"./utils-DoM3o7-Q.js";import"./LastPage-CBUA5E5W.js";const K=()=>{const n=p(),[o,d]=c.useState([]),{usersS2:i}=j(r=>r.user);return c.useEffect(()=>{d(i)},[i]),c.useEffect(()=>{g(f())},[]),e.jsx(B,{children:e.jsx(W,{sx:{"& td":{whiteSpace:"nowrap"},"& td:first-of-type":{pl:0},"& td:last-of-type":{pr:0,minWidth:260},"& tbody tr:last-of-type  td":{borderBottom:"none"},[n.breakpoints.down("xl")]:{"& tr:not(:last-of-type)":{borderBottom:"1px solid",borderBottomColor:n.palette.mode===v.DARK?"rgb(132, 146, 196, .2)":"rgba(224, 224, 224, 1)"},"& td":{display:"inline-block",borderBottom:"none",pl:0},"& td:first-of-type":{display:"block"}}},children:e.jsx(E,{children:o.map((r,u)=>e.jsxs(P,{children:[e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,children:e.jsx(a,{alt:"User 1",src:k(`${r.image}`,A.USERS),sx:{width:60,height:60}})}),e.jsx(t,{item:!0,sm:!0,zeroMinWidth:!0,children:e.jsxs(t,{container:!0,spacing:1,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(b,{direction:"row",alignItems:"center",spacing:.25,children:[e.jsx(s,{variant:"subtitle1",children:r.name}),r.badgeStatus==="active"&&e.jsx(w,{sx:{color:"success.dark",width:14,height:14}})]}),e.jsx(s,{variant:"subtitle2",sx:{whiteSpace:"break-spaces"},children:r.designation})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(s,{variant:"body2",sx:{whiteSpace:"break-spaces"},children:r.subContent})})]})})]})}),e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsx(s,{variant:"caption",children:"Email"}),e.jsx(s,{variant:"h6",children:r.email})]}),e.jsxs(t,{item:!0,xs:12,children:[e.jsx(s,{variant:"caption",children:"Phone"}),e.jsx(s,{variant:"h6",children:r.phone})]})]})}),e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:1,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsx(s,{variant:"caption",children:"Location"}),e.jsx(s,{variant:"h6",children:r.location})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,children:e.jsxs(L,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32,fontSize:"1rem"}},children:[e.jsx(a,{alt:"User 1",src:C}),e.jsx(a,{alt:"User 2",src:I}),e.jsx(a,{alt:"User 3",src:M}),e.jsx(a,{alt:"User 4",src:T}),e.jsx(a,{alt:"User 5",src:U})]})})})]})}),e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",spacing:x,children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"caption",children:"Progress"})}),e.jsx(t,{item:!0,sm:!0,zeroMinWidth:!0,children:e.jsx(y,{variant:"determinate",value:56,color:"primary",sx:{minWidth:90},"aria-label":"user-progress"})}),e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h6",children:r.progressValue})})]})}),e.jsxs(t,{item:!0,xs:12,container:!0,spacing:1,children:[e.jsx(t,{item:!0,xs:6,children:e.jsx(m,{variant:"outlined",fullWidth:!0,size:"small",sx:{minWidth:120},startIcon:e.jsx(z,{}),children:"Message"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(m,{variant:"outlined",color:"error",fullWidth:!0,size:"small",sx:{minWidth:120},startIcon:e.jsx(R,{}),children:"Block"})})]})]})})]},u))})})})},me=()=>{const[n,o]=c.useState(null),d=r=>{o(r.currentTarget)},i=()=>{o(null)};return e.jsxs(S,{title:e.jsxs(t,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:x,children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h3",children:"List"})}),e.jsx(t,{item:!0,children:e.jsx(O,{id:"input-search-list-style2",placeholder:"Search",startAdornment:e.jsx(_,{position:"start",children:e.jsx(G,{stroke:1.5,size:"16px"})}),size:"small"})})]}),children:[e.jsx(K,{}),e.jsx(t,{item:!0,xs:12,sx:{mt:1.75},children:e.jsxs(t,{container:!0,justifyContent:"space-between",spacing:x,children:[e.jsx(t,{item:!0,children:e.jsx(D,{count:10,color:"primary"})}),e.jsxs(t,{item:!0,children:[e.jsx(m,{variant:"text",size:"large",sx:{color:"grey.900"},color:"secondary",endIcon:e.jsx($,{}),onClick:d,children:"10 Rows"}),e.jsxs(F,{id:"menu-user-list-style2",anchorEl:n,keepMounted:!0,open:!!n,onClose:i,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[e.jsx(h,{onClick:i,children:" 10 Rows"}),e.jsx(h,{onClick:i,children:" 20 Rows"}),e.jsx(h,{onClick:i,children:" 30 Rows "})]})]})]})})]})};export{me as default};
