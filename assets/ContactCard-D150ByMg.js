import{P as t,M as v,r as T,l as r,ac as y,T as m,G as e,a1 as o,N as k,D as s,F as p}from"./index-D8YYVO5u.js";import{g as E,I}from"./getImageUrl-CsHsmFJf.js";import{d as z}from"./MoreHorizOutlined-BqIbV6o6.js";import{d as S}from"./ChatBubbleTwoTone-DnYl7j3Y.js";import{d as b}from"./PhoneTwoTone-CyYAQvzL.js";import{M as A}from"./Menu-CF8hg8nh.js";import{M as c}from"./MenuItem-BsENe2oa.js";const P=({avatar:l,contact:j,email:g,name:d,location:C,onActive:h,role:f})=>{const x=v(),[n,u]=T.useState(null),M=a=>{u(a==null?void 0:a.currentTarget)},i=()=>{u(null)};return r.jsx(y,{sx:{p:2,bgcolor:x.palette.mode===m.DARK?"dark.main":"grey.50",...x.palette.mode!==m.DARK&&{border:"1px solid",borderColor:"grey.100"}},children:r.jsxs(e,{container:!0,spacing:o,children:[r.jsx(e,{item:!0,xs:12,children:r.jsxs(e,{container:!0,spacing:o,children:[r.jsx(e,{item:!0,xs:!0,zeroMinWidth:!0,onClick:()=>{h&&h()},sx:{cursor:"pointer"},children:r.jsx(k,{alt:d,size:"lg",src:l&&E(`${l}`,I.USERS),sx:{width:72,height:72}})}),r.jsxs(e,{item:!0,children:[r.jsx(z,{fontSize:"small",sx:{color:"grey.500",cursor:"pointer"},"aria-controls":"menu-user-details-card","aria-haspopup":"true",onClick:M}),n&&r.jsxs(A,{id:"menu-user-details-card",anchorEl:n,keepMounted:!0,open:!!n,onClose:i,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[r.jsx(c,{onClick:i,children:" Today"}),r.jsx(c,{onClick:i,children:" This Month"}),r.jsx(c,{onClick:i,children:" This Year "})]})]})]})}),r.jsxs(e,{item:!0,xs:12,children:[r.jsx(s,{variant:"h3",children:d}),r.jsx(s,{variant:"caption",children:f})]}),r.jsxs(e,{item:!0,xs:12,children:[r.jsx(s,{variant:"caption",children:"Email"}),r.jsx(s,{variant:"h6",children:g})]}),r.jsx(e,{item:!0,xs:12,children:r.jsxs(e,{container:!0,spacing:o,children:[r.jsxs(e,{item:!0,xs:6,children:[r.jsx(s,{variant:"caption",children:"Phone"}),r.jsx(s,{variant:"h6",children:j})]}),r.jsxs(e,{item:!0,xs:6,children:[r.jsx(s,{variant:"caption",children:"Location"}),r.jsx(s,{variant:"h6",children:C})]})]})}),r.jsx(e,{item:!0,xs:12,children:r.jsxs(e,{container:!0,spacing:1,children:[r.jsx(e,{item:!0,xs:6,children:r.jsx(p,{variant:"outlined",sx:{width:"100%"},startIcon:r.jsx(S,{}),children:"Message"})}),r.jsx(e,{item:!0,xs:6,children:r.jsx(p,{variant:"outlined",color:"secondary",sx:{width:"100%"},startIcon:r.jsx(b,{}),children:"Call"})})]})})]})})};P.propTypes={avatar:t.string,contact:t.string,email:t.string,location:t.string,name:t.string,onActive:t.func,role:t.string};export{P as C};