import{M as p,a5 as c,am as j,an as g,aQ as f,l as e,T as v,G as t,N as a,S as b,D as s,a1 as x,a2 as y,F as m,$ as S}from"./index-aYNdDFsw.js";import{g as k,I as A}from"./getImageUrl-CsHsmFJf.js";import{U as C}from"./avatar-1-D6B1HTf2.js";import{A as I}from"./avatar-2-su3qFADW.js";import{A as M}from"./avatar-3-b7XCLIC0.js";import{A as T,a as U}from"./avatar-5-c4r0bpJc.js";import{d as w}from"./CheckCircle-BYV4yvUL.js";import{d as z}from"./ChatBubbleTwoTone-BY0ZveSa.js";import{d as R}from"./BlockTwoTone-B2OXrnlT.js";import{T as B,a as W,c as E,b as P}from"./TableRow-DaIFs5wn.js";import{T as l}from"./TableCell-CM4Hu41t.js";import{A as L}from"./AvatarGroup-BoezzsR7.js";import{d as $}from"./ExpandMoreRounded-BQM6yTb9.js";import{O}from"./OutlinedInput-CX89FYVG.js";import{I as _}from"./InputAdornment-P1yKTSAa.js";import{I as G}from"./IconSearch-DQDVId2E.js";import{P as D}from"./Pagination-Ceovdtzn.js";import{M as F}from"./Menu-BcGYJvIj.js";import{M as h}from"./MenuItem-BtCOIvr_.js";import"./InputBase-DT8iEGhH.js";import"./utils-DoM3o7-Q.js";import"./LastPage-Ddm1Z4up.js";const K=()=>{const n=p(),[o,d]=c.useState([]),{usersS2:i}=j(r=>r.user);return c.useEffect(()=>{d(i)},[i]),c.useEffect(()=>{g(f())},[]),e.jsx(B,{children:e.jsx(W,{sx:{"& td":{whiteSpace:"nowrap"},"& td:first-of-type":{pl:0},"& td:last-of-type":{pr:0,minWidth:260},"& tbody tr:last-of-type  td":{borderBottom:"none"},[n.breakpoints.down("xl")]:{"& tr:not(:last-of-type)":{borderBottom:"1px solid",borderBottomColor:n.palette.mode===v.DARK?"rgb(132, 146, 196, .2)":"rgba(224, 224, 224, 1)"},"& td":{display:"inline-block",borderBottom:"none",pl:0},"& td:first-of-type":{display:"block"}}},children:e.jsx(E,{children:o.map((r,u)=>e.jsxs(P,{children:[e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,children:e.jsx(a,{alt:"User 1",src:k(`${r.image}`,A.USERS),sx:{width:60,height:60}})}),e.jsx(t,{item:!0,sm:!0,zeroMinWidth:!0,children:e.jsxs(t,{container:!0,spacing:1,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(b,{direction:"row",alignItems:"center",spacing:.25,children:[e.jsx(s,{variant:"subtitle1",children:r.name}),r.badgeStatus==="active"&&e.jsx(w,{sx:{color:"success.dark",width:14,height:14}})]}),e.jsx(s,{variant:"subtitle2",sx:{whiteSpace:"break-spaces"},children:r.designation})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(s,{variant:"body2",sx:{whiteSpace:"break-spaces"},children:r.subContent})})]})})]})}),e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsx(s,{variant:"caption",children:"Email"}),e.jsx(s,{variant:"h6",children:r.email})]}),e.jsxs(t,{item:!0,xs:12,children:[e.jsx(s,{variant:"caption",children:"Phone"}),e.jsx(s,{variant:"h6",children:r.phone})]})]})}),e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:1,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsx(s,{variant:"caption",children:"Location"}),e.jsx(s,{variant:"h6",children:r.location})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,children:e.jsxs(L,{max:4,sx:{"& .MuiAvatar-root":{width:32,height:32,fontSize:"1rem"}},children:[e.jsx(a,{alt:"User 1",src:C}),e.jsx(a,{alt:"User 2",src:I}),e.jsx(a,{alt:"User 3",src:M}),e.jsx(a,{alt:"User 4",src:T}),e.jsx(a,{alt:"User 5",src:U})]})})})]})}),e.jsx(l,{children:e.jsxs(t,{container:!0,spacing:3,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",spacing:x,children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"caption",children:"Progress"})}),e.jsx(t,{item:!0,sm:!0,zeroMinWidth:!0,children:e.jsx(y,{variant:"determinate",value:56,color:"primary",sx:{minWidth:90},"aria-label":"user-progress"})}),e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h6",children:r.progressValue})})]})}),e.jsxs(t,{item:!0,xs:12,container:!0,spacing:1,children:[e.jsx(t,{item:!0,xs:6,children:e.jsx(m,{variant:"outlined",fullWidth:!0,size:"small",sx:{minWidth:120},startIcon:e.jsx(z,{}),children:"Message"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(m,{variant:"outlined",color:"error",fullWidth:!0,size:"small",sx:{minWidth:120},startIcon:e.jsx(R,{}),children:"Block"})})]})]})})]},u))})})})},me=()=>{const[n,o]=c.useState(null),d=r=>{o(r.currentTarget)},i=()=>{o(null)};return e.jsxs(S,{title:e.jsxs(t,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:x,children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h3",children:"List"})}),e.jsx(t,{item:!0,children:e.jsx(O,{id:"input-search-list-style2",placeholder:"Search",startAdornment:e.jsx(_,{position:"start",children:e.jsx(G,{stroke:1.5,size:"16px"})}),size:"small"})})]}),children:[e.jsx(K,{}),e.jsx(t,{item:!0,xs:12,sx:{mt:1.75},children:e.jsxs(t,{container:!0,justifyContent:"space-between",spacing:x,children:[e.jsx(t,{item:!0,children:e.jsx(D,{count:10,color:"primary"})}),e.jsxs(t,{item:!0,children:[e.jsx(m,{variant:"text",size:"large",sx:{color:"grey.900"},color:"secondary",endIcon:e.jsx($,{}),onClick:d,children:"10 Rows"}),e.jsxs(F,{id:"menu-user-list-style2",anchorEl:n,keepMounted:!0,open:!!n,onClose:i,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[e.jsx(h,{onClick:i,children:" 10 Rows"}),e.jsx(h,{onClick:i,children:" 20 Rows"}),e.jsx(h,{onClick:i,children:" 30 Rows "})]})]})]})})]})};export{me as default};
