import{a5 as a,am as S,an as i,aJ as u,l as t,G as s,$ as w,a1 as h,F as k,aK as y}from"./index-D1jq9kJH.js";import{C as I}from"./ContactCard-CWd5WMxu.js";import{d as M}from"./ExpandMoreRounded-r7hx7bt9.js";import{O as R}from"./OutlinedInput-DN1we0wm.js";import{I as z}from"./InputAdornment-DJGYiVlo.js";import{I as E}from"./IconSearch-C9HSEYCH.js";import{P as v}from"./Pagination-CmCZrv9s.js";import{M as O}from"./Menu-SXZ0ZIrG.js";import{M as c}from"./MenuItem-CEXjQcJ-.js";import"./getImageUrl-CsHsmFJf.js";import"./MoreHorizOutlined-B6y-Y7Vh.js";import"./ChatBubbleTwoTone-BexTCy0o.js";import"./PhoneTwoTone-KP1TuBWj.js";import"./InputBase-CmWFd4JY.js";import"./utils-DoM3o7-Q.js";import"./LastPage-Bu0cjKB7.js";const N=()=>{const[l,x]=a.useState([]),[n,m]=a.useState(null),[f,j]=a.useState(""),{detailCards:d}=S(e=>e.user);a.useEffect(()=>{x(d)},[d]),a.useEffect(()=>{i(u())},[]);const C=e=>{m(e.currentTarget)},o=()=>{m(null)},g=async e=>{const r=e==null?void 0:e.target.value;j(r),r?i(y(r)):i(u())};let p=t.jsx(t.Fragment,{});return l&&(p=l.map((e,r)=>t.jsx(s,{item:!0,xs:12,sm:6,lg:4,xl:3,children:t.jsx(I,{avatar:e.avatar,name:e.name,role:e.role,email:e.email,contact:e.contact,location:e.location})},r))),t.jsx(w,{title:"Contact",secondary:t.jsx(R,{id:"input-search-card-style1",placeholder:"Search",value:f,onChange:g,startAdornment:t.jsx(z,{position:"start",children:t.jsx(E,{stroke:1.5,size:"16px"})}),sx:{width:{xs:200,sm:213}},size:"small"}),children:t.jsxs(s,{container:!0,direction:"row",spacing:h,children:[p,t.jsxs(s,{item:!0,container:!0,xs:12,justifyContent:"space-between",spacing:h,children:[t.jsx(s,{item:!0,children:t.jsx(v,{count:10,color:"primary"})}),t.jsxs(s,{item:!0,children:[t.jsx(k,{variant:"text",size:"large",sx:{color:"grey.900"},color:"inherit",endIcon:t.jsx(M,{}),onClick:C,children:"10 Rows"}),n&&t.jsxs(O,{id:"menu-user-card-style1",anchorEl:n,keepMounted:!0,open:!!n,onClose:o,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[t.jsx(c,{onClick:o,children:" 10 Rows"}),t.jsx(c,{onClick:o,children:" 20 Rows"}),t.jsx(c,{onClick:o,children:" 30 Rows "})]})]})]})]})})};export{N as default};