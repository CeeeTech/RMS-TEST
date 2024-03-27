import{P as x,r as h,am as Q,an as W,aR as J,l as e,$ as U,ad as X,G as k,O as j,D as T,K as O,aS as Y,aT as Z}from"./index-DRAxbQhQ.js";import{C as y}from"./Chip-BBamza95.js";import{d as B}from"./Delete-BWDjsRTL.js";import{d as ee}from"./FilterListTwoTone-GVVnBkUc.js";import{d as se}from"./PrintTwoTone-CtilxB6Z.js";import{d as te}from"./FileCopyTwoTone-Bg44fySo.js";import{d as re}from"./Search-BUoZGFEK.js";import{d as ie}from"./VisibilityTwoTone-Bf8AFLp4.js";import{d as ae}from"./EditTwoTone-BWwZwM-K.js";import{T as ne}from"./TextField-C23CKz-E.js";import{I as le}from"./InputAdornment-Cj0cTNRg.js";import{T as S}from"./Tooltip-CFImnuRV.js";import{T as oe,a as ce,c as de,b as z}from"./TableRow-C4jGaY-n.js";import{T as m}from"./TableCell-GjZj8q6n.js";import{C as $}from"./Checkbox-DF2srxXR.js";import{T as me}from"./TablePagination-1Wm_aae9.js";import{T as pe}from"./TableHead-DeUPG7xB.js";import{T as he}from"./TableSortLabel-CpBXLE1m.js";import"./FormControl-DTGQKB1F.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BTLx1hne.js";import"./FormLabel-D7QhHnPX.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./InputBase-C10xFuq9.js";import"./OutlinedInput-C-PMnjYA.js";import"./FormHelperText-YH3vNJL3.js";import"./LastPage-CBUA5E5W.js";import"./MenuItem-I_H4wdck.js";function A(a,o,t){return o[t]<a[t]?-1:o[t]>a[t]?1:0}const xe=(a,o)=>a==="desc"?(t,i)=>A(t,i,o):(t,i)=>-A(t,i,o);function ue(a,o){const t=a.map((i,r)=>[i,r]);return t.sort((i,r)=>{const p=o(i[0],r[0]);return p!==0?p:i[1]-r[1]}),t.map(i=>i[0])}const fe=[{id:"name",numeric:!1,label:"Customer Name",align:"left"},{id:"location",numeric:!0,label:"Location",align:"left"},{id:"orders",numeric:!0,label:"Orders",align:"right"},{id:"date",numeric:!0,label:"Registered",align:"center"},{id:"status",numeric:!1,label:"Status",align:"center"}];function E({onSelectAllClick:a,order:o,orderBy:t,numSelected:i,rowCount:r,onRequestSort:p,selected:u}){const b=n=>C=>{p(C,n)};return e.jsx(pe,{children:e.jsxs(z,{children:[e.jsx(m,{padding:"checkbox",sx:{pl:3},children:e.jsx($,{color:"primary",indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:a,inputProps:{"aria-label":"select all desserts"}})}),i>0&&e.jsx(m,{padding:"none",colSpan:6,children:e.jsx(_,{numSelected:u.length})}),i<=0&&fe.map(n=>e.jsx(m,{align:n.align,padding:n.disablePadding?"none":"normal",sortDirection:t===n.id?o:!1,children:e.jsxs(he,{active:t===n.id,direction:t===n.id?o:"asc",onClick:b(n.id),children:[n.label,t===n.id?e.jsx(O,{component:"span",sx:Y,children:o==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id)),i<=0&&e.jsx(m,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}E.propTypes={selected:x.array,numSelected:x.number.isRequired,onRequestSort:x.func.isRequired,onSelectAllClick:x.func.isRequired,order:x.oneOf(["asc","desc"]).isRequired,orderBy:x.string.isRequired,rowCount:x.number.isRequired};const _=({numSelected:a})=>e.jsxs(Z,{sx:{p:0,pl:1,pr:1,...a>0&&{color:o=>o.palette.secondary.main}},children:[a>0?e.jsxs(T,{color:"inherit",variant:"h4",children:[a," Selected"]}):e.jsx(T,{variant:"h6",id:"tableTitle",children:"Nutrition"}),e.jsx(O,{sx:{flexGrow:1}}),a>0&&e.jsx(S,{title:"Delete",children:e.jsx(j,{size:"large",children:e.jsx(B,{fontSize:"small"})})})]});_.propTypes={numSelected:x.number.isRequired};const Qe=()=>{const[a,o]=h.useState("asc"),[t,i]=h.useState("calories"),[r,p]=h.useState([]),[u,b]=h.useState(0),[n,C]=h.useState(5),[L,D]=h.useState(""),[f,P]=h.useState([]),{customers:R}=Q(s=>s.customer);h.useEffect(()=>{W(J())},[]),h.useEffect(()=>{P(R)},[R]);const H=s=>{const l=s==null?void 0:s.target.value;if(D(l||""),l){const c=f.filter(d=>{let g=!0;const V=["name","email","location","orders"];let w=!1;return V.forEach(K=>{d[K].toString().toLowerCase().includes(l.toString().toLowerCase())&&(w=!0)}),w||(g=!1),g});P(c)}else P(R)},G=(s,l)=>{o(t===l&&a==="asc"?"desc":"asc"),i(l)},v=s=>{if(s.target.checked){if(r.length>0)p([]);else{const l=f.map(c=>c.name);p(l)}return}p([])},I=(s,l)=>{const c=r.indexOf(l);let d=[];c===-1?d=d.concat(r,l):c===0?d=d.concat(r.slice(1)):c===r.length-1?d=d.concat(r.slice(0,-1)):c>0&&(d=d.concat(r.slice(0,c),r.slice(c+1))),p(d)},F=(s,l)=>{b(l)},M=s=>{s!=null&&s.target.value&&C(parseInt(s==null?void 0:s.target.value,10)),b(0)},N=s=>r.indexOf(s)!==-1,q=u>0?Math.max(0,(1+u)*n-f.length):0;return e.jsxs(U,{content:!1,children:[e.jsx(X,{children:e.jsxs(k,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[e.jsx(k,{item:!0,xs:12,sm:6,children:e.jsx(ne,{InputProps:{startAdornment:e.jsx(le,{position:"start",children:e.jsx(re,{fontSize:"small"})})},onChange:H,placeholder:"Search Customer",value:L,size:"small"})}),e.jsxs(k,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[e.jsx(S,{title:"Copy",children:e.jsx(j,{size:"large",children:e.jsx(te,{})})}),e.jsx(S,{title:"Print",children:e.jsx(j,{size:"large",children:e.jsx(se,{})})}),e.jsx(S,{title:"Filter",children:e.jsx(j,{size:"large",children:e.jsx(ee,{})})})]})]})}),e.jsx(oe,{children:e.jsxs(ce,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[e.jsx(E,{numSelected:r.length,order:a,orderBy:t,onSelectAllClick:v,onRequestSort:G,rowCount:f.length,selected:r}),e.jsxs(de,{children:[ue(f,xe(a,t)).slice(u*n,u*n+n).map((s,l)=>{if(typeof s=="number")return null;const c=N(s.name),d=`enhanced-table-checkbox-${l}`;return e.jsxs(z,{hover:!0,role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[e.jsx(m,{padding:"checkbox",sx:{pl:3},onClick:g=>I(g,s.name),children:e.jsx($,{color:"primary",checked:c,inputProps:{"aria-labelledby":d}})}),e.jsxs(m,{component:"th",id:d,scope:"row",onClick:g=>I(g,s.name),sx:{cursor:"pointer"},children:[e.jsx(T,{variant:"h5",children:s.name}),e.jsxs(T,{variant:"caption",children:[" ",s.email," "]})]}),e.jsx(m,{children:s.location}),e.jsx(m,{align:"right",children:s.orders}),e.jsx(m,{align:"center",children:s.date}),e.jsxs(m,{align:"center",children:[s.status===1&&e.jsx(y,{label:"Complete",size:"small",chipcolor:"success"}),s.status===2&&e.jsx(y,{label:"Processing",size:"small",chipcolor:"orange"}),s.status===3&&e.jsx(y,{label:"Confirm",size:"small",chipcolor:"primary"})]}),e.jsxs(m,{align:"center",sx:{pr:3},children:[e.jsx(j,{color:"primary",size:"large","aria-label":"View",children:e.jsx(ie,{sx:{fontSize:"1.3rem"}})}),e.jsx(j,{color:"secondary",size:"large","aria-label":"View",children:e.jsx(ae,{sx:{fontSize:"1.3rem"}})})]})]},l)}),q>0&&e.jsx(z,{sx:{height:53*q},children:e.jsx(m,{colSpan:6})})]})]})}),e.jsx(me,{rowsPerPageOptions:[5,10,25],component:"div",count:f.length,rowsPerPage:n,page:u,onPageChange:F,onRowsPerPageChange:M})]})};export{Qe as default};
