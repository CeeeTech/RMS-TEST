import{M as k,a5 as o,am as y,an as C,aP as S,l as e,S as l,N as T,D as x,a3 as d,T as m,Y as j,O as p,$ as I,G as i,a1 as u,F as v}from"./index-aYNdDFsw.js";import{g as R,I as z}from"./getImageUrl-CsHsmFJf.js";import{d as A}from"./CheckCircle-BYV4yvUL.js";import{d as M}from"./ChatBubbleTwoTone-BY0ZveSa.js";import{d as P}from"./BlockTwoTone-B2OXrnlT.js";import{T as E,a as U,b as g,c as w}from"./TableRow-DaIFs5wn.js";import{T as B}from"./TableHead-CmeJcxgQ.js";import{T as r}from"./TableCell-CM4Hu41t.js";import{T as f}from"./Tooltip-DeGY6c7u.js";import{d as D}from"./ExpandMoreRounded-BQM6yTb9.js";import{O}from"./OutlinedInput-CX89FYVG.js";import{I as $}from"./InputAdornment-P1yKTSAa.js";import{I as L}from"./IconSearch-DQDVId2E.js";import{P as _}from"./Pagination-Ceovdtzn.js";import{M as F}from"./Menu-BcGYJvIj.js";import{M as h}from"./MenuItem-BtCOIvr_.js";import"./InputBase-DT8iEGhH.js";import"./utils-DoM3o7-Q.js";import"./LastPage-Ddm1Z4up.js";const K=()=>{const t=k(),[n,c]=o.useState([]),{usersS1:a}=y(s=>s.user);return o.useEffect(()=>{c(a)},[a]),o.useEffect(()=>{C(S())},[]),e.jsx(E,{children:e.jsxs(U,{children:[e.jsx(B,{children:e.jsxs(g,{children:[e.jsx(r,{sx:{pl:3},children:"#"}),e.jsx(r,{children:"User Profile"}),e.jsx(r,{children:"Country"}),e.jsx(r,{children:"Friends"}),e.jsx(r,{children:"Followers"}),e.jsx(r,{children:"Status"}),e.jsx(r,{align:"center",sx:{pr:3},children:"Actions"})]})}),e.jsx(w,{children:n&&n.map((s,b)=>e.jsxs(g,{hover:!0,children:[e.jsx(r,{sx:{pl:3},children:s.id}),e.jsx(r,{children:e.jsxs(l,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(T,{alt:"User 1",src:R(`${s.avatar}`,z.USERS)}),e.jsxs(l,{children:[e.jsxs(l,{direction:"row",alignItems:"center",spacing:.25,children:[e.jsx(x,{variant:"subtitle1",children:s.name}),s.status==="Active"&&e.jsx(A,{sx:{color:"success.dark",width:14,height:14}})]}),e.jsx(x,{variant:"subtitle2",noWrap:!0,children:s.email})]})]})}),e.jsx(r,{children:s.location}),e.jsx(r,{children:s.friends}),e.jsx(r,{children:s.followers}),e.jsxs(r,{children:[s.status==="Active"&&e.jsx(d,{label:"Active",size:"small",sx:{bgcolor:t.palette.mode===m.DARK?"dark.main":j(t.palette.success.light,.6),color:"success.dark"}}),s.status==="Rejected"&&e.jsx(d,{label:"Rejected",size:"small",sx:{bgcolor:t.palette.mode===m.DARK?"dark.main":j(t.palette.orange.light,.8),color:"orange.dark"}}),s.status==="Pending"&&e.jsx(d,{label:"Pending",size:"small",sx:{bgcolor:t.palette.mode===m.DARK?"dark.main":"warning.light",color:"warning.dark"}})]}),e.jsx(r,{align:"center",sx:{pr:3},children:e.jsxs(l,{direction:"row",justifyContent:"center",alignItems:"center",children:[e.jsx(f,{placement:"top",title:"Message",children:e.jsx(p,{color:"primary","aria-label":"delete",size:"large",children:e.jsx(M,{sx:{fontSize:"1.1rem"}})})}),e.jsx(f,{placement:"top",title:"Block",children:e.jsx(p,{color:"primary",sx:{color:"orange.dark",borderColor:"orange.main","&:hover ":{bgcolor:"orange.light"}},size:"large",children:e.jsx(P,{sx:{fontSize:"1.1rem"}})})})]})})]},b))})]})})},oe=()=>{const[t,n]=o.useState(null),c=s=>{n(s.currentTarget)},a=()=>{n(null)};return e.jsxs(I,{title:e.jsxs(i,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:u,children:[e.jsx(i,{item:!0,children:e.jsx(x,{variant:"h3",children:"List"})}),e.jsx(i,{item:!0,children:e.jsx(O,{id:"input-search-list-style1",placeholder:"Search",startAdornment:e.jsx($,{position:"start",children:e.jsx(L,{stroke:1.5,size:"16px"})}),size:"small"})})]}),content:!1,children:[e.jsx(K,{}),e.jsx(i,{item:!0,xs:12,sx:{p:3},children:e.jsxs(i,{container:!0,justifyContent:"space-between",spacing:u,children:[e.jsx(i,{item:!0,children:e.jsx(_,{count:10,color:"primary"})}),e.jsxs(i,{item:!0,children:[e.jsx(v,{size:"large",sx:{color:"grey.900"},color:"secondary",endIcon:e.jsx(D,{}),onClick:c,children:"10 Rows"}),t&&e.jsxs(F,{id:"menu-user-list-style1",anchorEl:t,keepMounted:!0,open:!!t,onClose:a,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[e.jsx(h,{onClick:a,children:" 10 Rows"}),e.jsx(h,{onClick:a,children:" 20 Rows"}),e.jsx(h,{onClick:a,children:" 30 Rows "})]})]})]})})]})};export{oe as default};
