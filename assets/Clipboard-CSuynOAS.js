import{x as v,y,l as e,bf as b,r as n,$ as S,G as i,a1 as h,bh as r,O as T,F as l,ad as z}from"./index-D1jq9kJH.js";import{l as o}from"./index-T41ZM_P6.js";import{S as L}from"./CardSecondaryAction-DEsegZC-.js";import{S as d}from"./SubCard-DEalaHmc.js";import{d as c}from"./ContentCopyTwoTone-Cc8ifpZY.js";import{d as _}from"./Link-Bw7HTYdk.js";import{T as f}from"./TextField-CZtuqMzg.js";import{I as q}from"./InputAdornment-DJGYiVlo.js";import{T as C}from"./Tooltip-BnzKm6rU.js";import"./FormControl-BhfPE8_O.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-B26CM0Hw.js";import"./FormLabel-Dsek0Nea.js";import"./Select-ZcV0niJu.js";import"./Menu-SXZ0ZIrG.js";import"./InputBase-CmWFd4JY.js";import"./OutlinedInput-DN1we0wm.js";import"./FormHelperText-Cniy_4F_.js";var p={},w=y;Object.defineProperty(p,"__esModule",{value:!0});var j=p.default=void 0,I=w(v()),O=e;j=p.default=(0,I.default)((0,O.jsx)("path",{d:"m19 3-6 6 2 2 7-7V3zm-9 3c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64c.23-.5.36-1.05.36-1.64M6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-8.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5"}),"ContentCutTwoTone");const U=()=>{const t=b(),[m,g]=n.useState("https://berrydashboard.io/"),[s,u]=n.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),[x]=n.useState("Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.");return e.jsx(S,{title:"Clipboard",secondary:e.jsx(L,{icon:e.jsx(_,{fontSize:"small"}),link:"https://www.npmjs.com/package/react-copy-to-clipboard"}),children:e.jsxs(i,{container:!0,spacing:h,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(d,{title:"Copy from TextField",children:e.jsx(f,{fullWidth:!0,label:"Website",type:"text",value:m,onChange:a=>{g(a.target.value)},InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(o.CopyToClipboard,{text:m,onCopy:()=>t(r({open:!0,message:"Text Copied",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"})),children:e.jsx(C,{title:"Copy",children:e.jsx(T,{"aria-label":"Copy from another element",edge:"end",size:"large",children:e.jsx(c,{sx:{fontSize:"1.1rem"}})})})})})}})})}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsxs(d,{title:"Copy from TextArea",children:[e.jsx(f,{multiline:!0,rows:4,fullWidth:!0,label:"Copy text",onChange:a=>u(a.target.value),value:s,sx:{mb:h}}),e.jsx(o.CopyToClipboard,{text:s,onCopy:()=>t(r({open:!0,message:"Text Copied",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"})),children:e.jsxs(l,{variant:"contained",size:"small",sx:{mr:1.5},children:[e.jsx(c,{sx:{fontSize:"1rem",mr:1}})," Copy"]})}),e.jsx(o.CopyToClipboard,{text:s,onCopy:()=>{u(""),t(r({open:!0,message:"Text Cut",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"}))},children:e.jsxs(l,{variant:"contained",size:"small",color:"secondary",children:[e.jsx(j,{sx:{fontSize:"1rem",mr:1}})," Cut"]})})]})}),e.jsx(i,{item:!0,xs:12,md:6,children:e.jsx(d,{title:"Copy from Container",secondary:e.jsx(o.CopyToClipboard,{text:x,onCopy:()=>t(r({open:!0,message:"Text Copied",variant:"alert",alert:{color:"success"},close:!1,anchorOrigin:{vertical:"top",horizontal:"right"},transition:"SlideLeft"})),children:e.jsx(C,{title:"Copy",children:e.jsx(l,{variant:"contained",sx:{mr:1.5,px:1,minWidth:"auto"},children:e.jsx(c,{sx:{fontSize:"1rem"}})})})}),children:e.jsx(z,{sx:{p:0,pb:2.5},children:x})})})]})})};export{U as default};