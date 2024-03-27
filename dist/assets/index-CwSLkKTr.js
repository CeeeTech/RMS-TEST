import{P as p,r as c,l as e,S as w,O as C,G as h,K as $,aS as z,be as E,D as g,am as H,an as O,aU as A,a1 as L,$ as _}from"./index-DRAxbQhQ.js";import{d as k}from"./FileCopyTwoTone-Bg44fySo.js";import{d as V}from"./FilterListTwoTone-GVVnBkUc.js";import{d as W}from"./PrintTwoTone-CtilxB6Z.js";import{d as G}from"./Search-BUoZGFEK.js";import{T as K}from"./TextField-C23CKz-E.js";import{I as Q}from"./InputAdornment-Cj0cTNRg.js";import{T as R}from"./Tooltip-CFImnuRV.js";import{F as U}from"./FormControl-DTGQKB1F.js";import{I as Y}from"./InputLabel-BTLx1hne.js";import{S as J}from"./Select-D4CpAZMw.js";import{M}from"./MenuItem-I_H4wdck.js";import{H as N}from"./HoverDataCard-DGGle_xf.js";import{a as X,d as Z}from"./ArrowUpward-CIcxT6DP.js";import{T as B}from"./TableHead-DeUPG7xB.js";import{b as I,T as ee,a as se,c as te}from"./TableRow-C4jGaY-n.js";import{T as m}from"./TableCell-GjZj8q6n.js";import{T as re}from"./TableSortLabel-CpBXLE1m.js";import{r as ne}from"./random-D-oTin4B.js";import{T as ae}from"./TablePagination-1Wm_aae9.js";import"./FormHelperText-YH3vNJL3.js";import"./OutlinedInput-C-PMnjYA.js";import"./InputBase-C10xFuq9.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-D7QhHnPX.js";import"./Menu-DCGCr4Gv.js";import"./isSymbol-ckKrFcy_.js";import"./isArrayLike-C-wli46Q.js";import"./LastPage-CBUA5E5W.js";const D=({rows:s,setRows:t})=>{const[r,a]=c.useState("1"),[n,l]=c.useState(""),u=o=>{const x=o==null?void 0:o.target.value;if(l(x||""),x){const S=s==null?void 0:s.filter(T=>{let j=!0;const b=["id","name","date","qty"];let i=!1;return b.forEach(d=>{T[d].toString().toLowerCase().includes(x.toString().toLowerCase())&&(i=!0)}),i||(j=!1),j});t(S)}else t(s)},f=o=>{a(o.target.value)};return e.jsxs(w,{direction:{xs:"column",sm:"row"},sx:{p:3},justifyContent:"space-between",alignItems:"center",spacing:2,children:[e.jsx(K,{InputProps:{startAdornment:e.jsx(Q,{position:"start",children:e.jsx(G,{fontSize:"small"})})},onChange:u,value:n,placeholder:"Search Transaction",size:"small",sx:{width:{xs:1,sm:"auto"}}}),e.jsxs(w,{direction:"row",alignItems:"center",sx:{justifyContent:"space-between",width:{xs:"100%",sm:"auto"}},spacing:1.25,children:[e.jsxs(w,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1},children:[e.jsx(R,{title:"Copy",children:e.jsx(C,{size:"large",children:e.jsx(k,{})})}),e.jsx(R,{title:"Print",children:e.jsx(C,{size:"large",children:e.jsx(W,{})})}),e.jsx(R,{title:"Filter",children:e.jsx(C,{size:"large",children:e.jsx(V,{})})})]}),e.jsxs(U,{fullWidth:!0,size:"small",sx:{width:147},children:[e.jsx(Y,{id:"demo-simple-select-label",children:"Select Month"}),e.jsxs(J,{labelId:"demo-simple-select-label",id:"demo-simple-select",onChange:f,value:r,label:"Select Month",children:[e.jsx(M,{value:1,children:"Last Month"}),e.jsx(M,{value:2,children:"This Month"})]})]})]})]})};D.propTypes={rows:p.array,setRows:p.func};const ie=[{number:30200,label:"Funds"},{number:9320,label:"Earning"},{number:15234,label:"Fees"}],oe=()=>e.jsx(h,{container:!0,spacing:1,children:e.jsx(h,{item:!0,container:!0,xs:12,spacing:2.5,children:ie.map((s,t)=>e.jsx(h,{item:!0,xs:12,sm:4,children:e.jsx(N,{title:s.label,iconPrimary:(s==null?void 0:s.number)>1e4?X:Z,primary:s.number,secondary:"8% less Last 3 Months",color:(s==null?void 0:s.number)>1e4?"success.dark":"error.main"})},t))})}),le=[{id:"date",numeric:!1,label:" Date"},{id:"name",numeric:!1,label:"Receiver"},{id:"phone no",numeric:!1,label:"Phone no"},{id:"detail",numeric:!1,label:"Detail"},{id:"price",numeric:!0,label:"Price",align:"right"},{id:"amount",numeric:!0,label:"Total Amount",align:"right"}],F=({order:s,orderBy:t,onRequestSort:r})=>{const a=n=>l=>{r(l,n)};return e.jsx(B,{children:e.jsx(I,{children:le.map((n,l)=>e.jsx(m,{sx:{"&:first-of-type":{pl:3},"&:last-of-type":{pr:3}},align:n.align,padding:n.disablePadding?"none":"normal",sortDirection:t===n.id?s:void 0,children:e.jsxs(re,{active:t===n.id,direction:t===n.id?s:void 0,onClick:a(n.id),children:[n.label,t===n.id?e.jsx($,{component:"span",sx:z,children:s==="desc"?"sorted descending":"sorted ascending"}):null]})},l))})})};F.propTypes={onRequestSort:p.func.isRequired,order:p.oneOf(["asc","desc"]).isRequired,orderBy:p.string.isRequired};function v(s,t,r){return t[r]<s[r]?-1:t[r]>s[r]?1:0}const ce=(s,t)=>s==="desc"?(r,a)=>v(r,a,t):(r,a)=>-v(r,a,t);function de(s,t){const r=s.map((a,n)=>[a,n]);return r.sort((a,n)=>{const l=t(a[0],n[0]);return l!==0?l:a[1]-n[1]}),r.map(a=>a[0])}const q=({rows:s})=>{const t=new E.Chance,[r,a]=c.useState("asc"),[n,l]=c.useState("calories"),[u,f]=c.useState(0),[o,x]=c.useState(10),S=(i,d)=>{a(n===d&&r==="asc"?"desc":"asc"),l(d)},T=(i,d)=>{f(d)},j=i=>{i!=null&&i.target.value&&x(parseInt(i==null?void 0:i.target.value,10)),f(0)},b=u>0?Math.max(0,(1+u)*o-s.length):0;return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsxs(se,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[e.jsx(F,{order:r,orderBy:n,onRequestSort:S}),e.jsxs(te,{children:[de(s,ce(r,n)).slice(u*o,u*o+o).map((i,d)=>{if(typeof i=="number")return null;const P=Math.floor(Math.random()*150)+1,y=new Date(new Date().getTime()-ne(0,28)*24*60*60*1e3);return e.jsxs(I,{hover:!0,role:"checkbox",tabIndex:-1,children:[e.jsx(m,{sx:{pl:3},children:y.getDate()+"."+(y.getMonth()+1)+"."+y.getFullYear()}),e.jsx(m,{children:e.jsx(g,{variant:"h5",children:i.name.slice(0,-2)})}),e.jsx(m,{children:e.jsx(g,{children:t.phone()})}),e.jsxs(m,{children:[e.jsx(g,{variant:"h5",children:t.company()}),e.jsxs(g,{variant:"subtitle2",noWrap:!0,children:["#",i.id]})]}),e.jsxs(m,{align:"right",children:["$",i.qty," "]}),e.jsx(m,{align:"right",sx:{pr:3},children:e.jsxs(g,{...P<30&&{color:"error.main"},children:["$",P]})})]},d)}),b>0&&e.jsx(I,{sx:{height:53*b},children:e.jsx(m,{colSpan:6})})]})]})}),e.jsx(ae,{rowsPerPageOptions:[10,25],component:"div",count:s.length,rowsPerPage:o,page:u,onPageChange:T,onRowsPerPageChange:j})]})};q.propTypes={rows:p.array};const _e=()=>{const[s,t]=c.useState([]),{orders:r}=H(a=>a.customer);return c.useEffect(()=>{O(A())},[]),c.useEffect(()=>{t(r)},[r]),e.jsxs(h,{container:!0,spacing:L,children:[e.jsx(h,{item:!0,xs:12,children:e.jsx(oe,{})}),e.jsx(h,{item:!0,xs:12,children:e.jsxs(_,{title:"Transaction History",content:!1,children:[e.jsx(D,{rows:r,setRows:t}),e.jsx(q,{rows:s})]})})]})};export{_e as default};
