import{P as i,M as C,r as M,l as r,ac as b,T as y,G as e,a1 as o,N as k,O as E,D as t,F as h}from"./index-aYNdDFsw.js";import{g as I,I as T}from"./getImageUrl-CsHsmFJf.js";import{d as z}from"./MoreHorizOutlined-DSV9vp6G.js";import{d as S}from"./NotInterestedTwoTone-BsIT5D8Y.js";import{d as B}from"./ChatBubbleTwoTone-BY0ZveSa.js";import{M as D}from"./Menu-BcGYJvIj.js";import{M as x}from"./MenuItem-BtCOIvr_.js";const P=({about:u,avatar:l,contact:m,email:p,location:j,name:c,role:g})=>{const f=C(),[s,d]=M.useState(null),v=a=>{d(a==null?void 0:a.currentTarget)},n=()=>{d(null)};return r.jsx(b,{sx:{p:2,bgcolor:f.palette.mode===y.DARK?"background.default":"grey.50",border:"1px solid",borderColor:"divider","&:hover":{borderColor:"primary.main"}},children:r.jsxs(e,{container:!0,spacing:o,children:[r.jsx(e,{item:!0,xs:12,children:r.jsxs(e,{container:!0,spacing:o,children:[r.jsx(e,{item:!0,xs:!0,zeroMinWidth:!0,children:r.jsx(k,{alt:c,size:"lg",src:l&&I(`${l}`,T.USERS)})}),r.jsxs(e,{item:!0,children:[r.jsx(E,{size:"small",sx:{mt:-.75,mr:-.75},onClick:v,"aria-label":"more-options",children:r.jsx(z,{fontSize:"small",color:"inherit","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),s&&r.jsxs(D,{id:"menu-user-details-card",anchorEl:s,keepMounted:!0,open:!!s,onClose:n,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[r.jsx(x,{onClick:n,children:"Edit"}),r.jsx(x,{onClick:n,children:"Delete"})]})]})]})}),r.jsxs(e,{item:!0,xs:12,children:[r.jsx(t,{variant:"h3",children:c}),r.jsx(t,{variant:"caption",children:g})]}),r.jsx(e,{item:!0,xs:12,children:r.jsx(t,{variant:"subtitle2",sx:{color:"grey.700"},children:u})}),r.jsxs(e,{item:!0,xs:12,children:[r.jsx(t,{variant:"caption",children:"Email"}),r.jsx(t,{variant:"h6",children:p})]}),r.jsx(e,{item:!0,xs:12,children:r.jsxs(e,{container:!0,spacing:o,children:[r.jsxs(e,{item:!0,xs:6,children:[r.jsx(t,{variant:"caption",children:"Phone"}),r.jsx(t,{variant:"h6",children:m})]}),r.jsxs(e,{item:!0,xs:6,children:[r.jsx(t,{variant:"caption",children:"Location"}),r.jsx(t,{variant:"h6",children:j})]})]})}),r.jsx(e,{item:!0,xs:12,children:r.jsxs(e,{container:!0,spacing:1,children:[r.jsx(e,{item:!0,xs:6,children:r.jsx(h,{variant:"outlined",fullWidth:!0,startIcon:r.jsx(B,{}),children:"Message"})}),r.jsx(e,{item:!0,xs:6,children:r.jsx(h,{variant:"outlined",color:"error",fullWidth:!0,startIcon:r.jsx(S,{}),children:"Block"})})]})})]})})};P.propTypes={about:i.string,avatar:i.string,contact:i.string,email:i.string,location:i.string,name:i.string,role:i.string};export{P as U};
