import{a5 as n,am as S,an as a,aL as h,l as e,G as t,$ as y,a1 as o,D as w,F as I,aM as M}from"./index-DRAxbQhQ.js";import{U as k}from"./UserSimpleCard-Cy8HphP1.js";import{d as R}from"./ExpandMoreRounded-DnU25RZF.js";import{O as z}from"./OutlinedInput-C-PMnjYA.js";import{I as E}from"./InputAdornment-Cj0cTNRg.js";import{I as O}from"./IconSearch-DB3OZ0iF.js";import{P as b}from"./Pagination-COn3w7FQ.js";import{M as v}from"./Menu-DCGCr4Gv.js";import{M as c}from"./MenuItem-I_H4wdck.js";import"./getImageUrl-nY85S8xQ.js";import"./MoreHorizOutlined-h4BueNny.js";import"./Facebook-BCNCdPI7.js";import"./Twitter-Uxc8GvTD.js";import"./LinkedIn-BO1RsVAE.js";import"./InputBase-C10xFuq9.js";import"./utils-DoM3o7-Q.js";import"./LastPage-CBUA5E5W.js";const V=()=>{const[l,x]=n.useState([]),{simpleCards:m}=S(r=>r.user),[d,p]=n.useState(null),j=r=>{p(r.currentTarget)},i=()=>{p(null)};n.useEffect(()=>{x(m)},[m]),n.useEffect(()=>{a(h())},[]);const[f,g]=n.useState(""),C=async r=>{const s=r==null?void 0:r.target.value;g(s),s?a(M(s)):a(h())};let u=e.jsx(e.Fragment,{});return l&&(u=l.map((r,s)=>e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsx(k,{...r})},s))),e.jsx(y,{title:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:o,children:[e.jsx(t,{item:!0,children:e.jsx(w,{variant:"h3",children:"Cards"})}),e.jsx(t,{item:!0,children:e.jsx(z,{id:"input-search-card-style2",placeholder:"Search",value:f,onChange:C,startAdornment:e.jsx(E,{position:"start",children:e.jsx(O,{stroke:1.5,size:"16px"})}),size:"small"})})]}),children:e.jsxs(t,{container:!0,direction:"row",spacing:o,children:[u,e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,justifyContent:"space-between",spacing:o,children:[e.jsx(t,{item:!0,children:e.jsx(b,{count:10,color:"primary"})}),e.jsxs(t,{item:!0,children:[e.jsx(I,{variant:"text",size:"large",sx:{color:"grey.900"},color:"secondary",endIcon:e.jsx(R,{}),onClick:j,children:"10 Rows"}),e.jsxs(v,{id:"menu-user-card-style2",anchorEl:d,keepMounted:!0,open:!!d,onClose:i,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[e.jsx(c,{onClick:i,children:" 10 Rows"}),e.jsx(c,{onClick:i,children:" 20 Rows"}),e.jsx(c,{onClick:i,children:" 30 Rows "})]})]})]})})]})})};export{V as default};
