import{l as e,$ as g,ad as j,G as t,S as c,P as r,bf as I,r as h,am as b,J as T,L as x,D as i,F as z,cK as M,bh as P,M as B,O as E,T as F}from"./index-D8YYVO5u.js";import{S as a}from"./Skeleton-Cmx2XEAi.js";import{g as $,I as D}from"./getImageUrl-CsHsmFJf.js";import{d as v}from"./ShoppingCartTwoTone-DPA8QXHU.js";import{R as L}from"./Rating-BR7YcLem.js";import{s as O}from"./sum-BkhpHGG4.js";import{F as q}from"./Fab-Cuj8YIo9.js";import{B as A}from"./Badge-FlIsjnEa.js";const G=()=>e.jsxs(g,{content:!1,boxShadow:!0,children:[e.jsx(a,{variant:"rectangular",height:220}),e.jsx(j,{sx:{p:2},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(a,{variant:"rectangular",height:20})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(a,{variant:"rectangular",height:45})}),e.jsx(t,{item:!0,xs:12,sx:{pt:"8px !important"},children:e.jsxs(c,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(a,{variant:"rectangular",height:20,width:90}),e.jsx(a,{variant:"rectangular",height:20,width:38})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{item:!0,children:e.jsx(a,{variant:"rectangular",height:20,width:40})}),e.jsx(t,{item:!0,children:e.jsx(a,{variant:"rectangular",height:17,width:20})})]}),e.jsx(a,{variant:"rectangular",height:32,width:47})]})})]})})]}),K=({id:n,color:d,name:o,image:s,description:u,offerPrice:l,salePrice:p,rating:w})=>{const m=I(),[f]=h.useState(w),C=b(k=>k.cart),y=()=>{m(M({id:n,name:o,image:s,salePrice:p,offerPrice:l,color:d,size:8,quantity:1},C.checkout.products)),m(P({open:!0,message:"Add To Cart Success",variant:"alert",alert:{color:"success"},close:!1}))},[S,R]=h.useState(!0);return h.useEffect(()=>{R(!1)},[]),e.jsx(e.Fragment,{children:S?e.jsx(G,{}):e.jsxs(g,{content:!1,boxShadow:!0,sx:{"&:hover":{transform:"scale3d(1.02, 1.02, 1)",transition:"all .4s ease-in-out"}},children:[e.jsx(T,{sx:{height:220},image:s&&$(`${s}`,D.ECOMMERCE),title:"Contemplative Reptile",component:x,to:`/apps/e-commerce/product-details/${n}`}),e.jsx(j,{sx:{p:2},children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(i,{component:x,to:`/apps/e-commerce/product-details/${n}`,variant:"subtitle1",noWrap:!0,sx:{overflow:"hidden",textOverflow:"ellipsis",display:"block",textDecoration:"none"},children:o})}),u&&e.jsx(t,{item:!0,xs:12,children:e.jsx(i,{variant:"body2",sx:{overflow:"hidden",height:45},children:u})}),e.jsx(t,{item:!0,xs:12,sx:{pt:"8px !important"},children:e.jsxs(c,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(L,{precision:.5,name:"size-small",value:f,size:"small",readOnly:!0}),e.jsxs(i,{variant:"caption",children:["(",l,"+)"]})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{item:!0,children:e.jsxs(i,{variant:"h4",children:["$",l]})}),e.jsx(t,{item:!0,children:e.jsxs(i,{variant:"h6",sx:{color:"grey.500",textDecoration:"line-through"},children:["$",p]})})]}),e.jsx(z,{variant:"contained",sx:{minWidth:0},onClick:y,"aria-label":"product add to cart",children:e.jsx(v,{fontSize:"small"})})]})})]})})]})})};K.propTypes={id:r.number,color:r.string,name:r.string,image:r.string,description:r.string,offerPrice:r.number,salePrice:r.number,rating:r.number};const V=()=>{const n=B(),d=b(s=>s.cart),o=O(d.checkout.products.map(s=>s.quantity));return e.jsx(q,{component:x,to:"/apps/e-commerce/checkout",size:"large",sx:{top:"50%",position:"fixed",right:0,zIndex:1200,boxShadow:n.customShadows.warning,bgcolor:"warning.dark",color:"warning.light",borderRadius:"8px",borderTopRightRadius:0,borderBottomRightRadius:0,"&:hover":{bgcolor:"warning.main"}},children:e.jsx(E,{disableRipple:!0,"aria-label":"cart",sx:{"&:hover":{bgcolor:"transparent"}},size:"large",children:e.jsx(A,{showZero:!0,badgeContent:o,color:"error",sx:{"& .MuiBadge-badge":{right:0,top:3,border:"2px solid",borderColor:"background.paper",px:.5}},children:e.jsx(v,{sx:{color:n.palette.mode===F.DARK?"background.paper":"text.primary"}})})})})};export{V as F,K as P,G as a};