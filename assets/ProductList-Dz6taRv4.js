import{P as x,M as X,r as u,cH as Y,l as e,$ as Z,ad as B,G as k,O as S,N as ee,D as T,L as te,aT as se}from"./index-aYNdDFsw.js";import{C as re}from"./Chip-DGdPIkhH.js";import{g as ie,I as ne}from"./getImageUrl-CsHsmFJf.js";import{d as ae}from"./Delete-DOAAHRMZ.js";import{d as oe}from"./FilterListTwoTone-CY-NkPtw.js";import{d as le}from"./PrintTwoTone-BLqMOsV6.js";import{d as ce}from"./FileCopyTwoTone-2o7qjW9t.js";import{d as de}from"./Search-BLI-QLQu.js";import{d as me}from"./AddTwoTone-UpWEN4t6.js";import{d as pe}from"./MoreHorizOutlined-DSV9vp6G.js";import{T as he}from"./TextField-DGRzrz84.js";import{I as ue}from"./InputAdornment-P1yKTSAa.js";import{T as P}from"./Tooltip-DeGY6c7u.js";import{F as xe}from"./Fab-BoVIyOe2.js";import{T as ge,a as fe,c as je,b as R}from"./TableRow-DaIFs5wn.js";import{T as m}from"./TableCell-CM4Hu41t.js";import{C as D}from"./Checkbox-BjGpkq_j.js";import{f as be}from"./index-DhB-ElUn.js";import{M as Se}from"./Menu-BcGYJvIj.js";import{M as O}from"./MenuItem-BtCOIvr_.js";import{T as Pe}from"./TablePagination-6yzWYrV2.js";import{T as Te}from"./TableHead-CmeJcxgQ.js";import{T as Ce}from"./TableSortLabel-COUqlmg8.js";import"./FormControl-Dj_1sEpm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-taUurEu1.js";import"./FormLabel-CLieAm2i.js";import"./Select-DVXOMGOZ.js";import"./InputBase-DT8iEGhH.js";import"./OutlinedInput-CX89FYVG.js";import"./FormHelperText-C1AdVjvj.js";import"./typeof-QjJsDpFa.js";import"./LastPage-Ddm1Z4up.js";function q(n,a,r){return a[r]<n[r]?-1:a[r]>n[r]?1:0}const ke=(n,a)=>n==="desc"?(r,s)=>q(r,s,a):(r,s)=>-q(r,s,a);function Re(n,a){const r=n.map((s,p)=>[s,p]);return r.sort((s,p)=>{const o=a(s[0],p[0]);return o!==0?o:s[1]-p[1]}),r.map(s=>s[0])}const ye=[{id:"id",numeric:!0,label:"#",align:"center"},{id:"name",numeric:!1,label:"Product Name",align:"left"},{id:"created",numeric:!1,label:"Created",align:"left"},{id:"price",numeric:!0,label:"Price",align:"right"},{id:"sale-price",numeric:!0,label:"Sale Price",align:"right"},{id:"status",numeric:!0,label:"Status",align:"center"}];function w({onSelectAllClick:n,order:a,orderBy:r,numSelected:s,rowCount:p,onRequestSort:o,selected:b}){const g=c=>f=>{o(f,c)};return e.jsx(Te,{children:e.jsxs(R,{children:[e.jsx(m,{padding:"checkbox",sx:{pl:3},children:e.jsx(D,{color:"primary",indeterminate:s>0&&s<p,checked:p>0&&s===p,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),s>0&&e.jsx(m,{padding:"none",colSpan:7,children:e.jsx(L,{numSelected:b.length})}),s<=0&&ye.map(c=>e.jsx(m,{align:c.align,padding:c.disablePadding?"none":"normal",sortDirection:r===c.id?a:!1,children:e.jsxs(Ce,{active:r===c.id,direction:r===c.id?a:"asc",onClick:g(c.id),children:[c.label,r===c.id?e.jsx(T,{component:"span",sx:{display:"none"},children:a==="desc"?"sorted descending":"sorted ascending"}):null]})},c.id)),s<=0&&e.jsx(m,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}w.propTypes={selected:x.array,numSelected:x.number.isRequired,onRequestSort:x.func.isRequired,onSelectAllClick:x.func.isRequired,order:x.oneOf(["asc","desc"]).isRequired,orderBy:x.string.isRequired,rowCount:x.number.isRequired};const L=({numSelected:n})=>e.jsxs(se,{sx:{p:0,pl:2,pr:1,color:n>0?"secondary.main":"inherit"},children:[n>0?e.jsxs(T,{sx:{flex:"1 1 100%"},color:"inherit",variant:"h4",children:[n," Selected"]}):e.jsx(T,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",children:"Nutrition"}),n>0&&e.jsx(P,{title:"Delete",children:e.jsx(S,{size:"large",children:e.jsx(ae,{fontSize:"small"})})})]});L.propTypes={numSelected:x.number.isRequired};const at=()=>{const n=X(),[a,r]=u.useState("asc"),[s,p]=u.useState("calories"),[o,b]=u.useState([]),[g,c]=u.useState(0),[f,_]=u.useState(5),[H,F]=u.useState(""),[h,y]=u.useState([]),z=Y(),[M,I]=u.useState(null),N=t=>{I(t==null?void 0:t.currentTarget)},C=()=>{I(null)};u.useEffect(()=>{y(z)},[z]);const G=t=>{const i=t==null?void 0:t.target.value;if(F(i||""),i){const l=h==null?void 0:h.filter(d=>{let j=!0;const K=["name","description","rating","salePrice","offerPrice","gender"];let $=!1;return K.forEach(V=>{d[V].toString().toLowerCase().includes(i.toString().toLowerCase())&&($=!0)}),$||(j=!1),j});y(l)}},v=(t,i)=>{r(s===i&&a==="asc"?"desc":"asc"),p(i)},Q=t=>{if(t.target.checked){const i=h==null?void 0:h.map(l=>l.name);b(i);return}b([])},E=(t,i)=>{const l=o.indexOf(i);let d=[];l===-1?d=d.concat(o,i):l===0?d=d.concat(o.slice(1)):l===o.length-1?d=d.concat(o.slice(0,-1)):l>0&&(d=d.concat(o.slice(0,l),o.slice(l+1))),b(d)},U=(t,i)=>{c(i)},W=t=>{t!=null&&t.target.value&&_(parseInt(t==null?void 0:t.target.value,10)),c(0)},J=t=>o.indexOf(t)!==-1,A=g>0?Math.max(0,(1+g)*f-h.length):0;return e.jsxs(Z,{content:!1,children:[e.jsx(B,{children:e.jsxs(k,{container:!0,justifyContent:"space-between",alignItems:"center",spacing:2,children:[e.jsx(k,{item:!0,xs:12,sm:6,children:e.jsx(he,{InputProps:{startAdornment:e.jsx(ue,{position:"start",children:e.jsx(de,{fontSize:"small"})})},onChange:G,placeholder:"Search Product",value:H,size:"small"})}),e.jsxs(k,{item:!0,xs:12,sm:6,sx:{textAlign:"right"},children:[e.jsx(P,{title:"Copy",children:e.jsx(S,{size:"large",children:e.jsx(ce,{})})}),e.jsx(P,{title:"Print",children:e.jsx(S,{size:"large",children:e.jsx(le,{})})}),e.jsx(P,{title:"Filter",children:e.jsx(S,{size:"large",children:e.jsx(oe,{})})}),e.jsx(P,{title:"Add Product",children:e.jsx(xe,{color:"primary",size:"small",sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:e.jsx(me,{fontSize:"small"})})})]})]})}),e.jsx(ge,{children:e.jsxs(fe,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[e.jsx(w,{numSelected:o.length,order:a,orderBy:s,onSelectAllClick:Q,onRequestSort:v,rowCount:h.length,selected:o}),e.jsxs(je,{children:[Re(h,ke(a,s)).slice(g*f,g*f+f).map((t,i)=>{if(typeof t=="number")return null;const l=J(t.name),d=`enhanced-table-checkbox-${i}`;return e.jsxs(R,{hover:!0,role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[e.jsx(m,{padding:"checkbox",sx:{pl:3},onClick:j=>E(j,t.name),children:e.jsx(D,{color:"primary",checked:l,inputProps:{"aria-labelledby":d}})}),e.jsx(m,{align:"center",component:"th",id:d,scope:"row",onClick:j=>E(j,t.name),sx:{cursor:"pointer"},children:e.jsx(ee,{alt:"'product images'",src:t.image&&ie(`${t.image}`,ne.ECOMMERCE),size:"md",variant:"rounded"})}),e.jsx(m,{sx:{cursor:"pointer"},children:e.jsx(T,{component:te,to:`/apps/e-commerce/product-details/${t.id}`,variant:"h5",sx:{textDecoration:"none"},children:t.name})}),e.jsx(m,{children:be(new Date(t.created),"E, MMM d yyyy")}),e.jsxs(m,{align:"right",children:["$",t.offerPrice]}),e.jsxs(m,{align:"right",children:["$",t.salePrice]}),e.jsx(m,{align:"center",children:e.jsx(re,{size:"small",label:t.isStock?"In Stock":"Out of Stock",chipcolor:t.isStock?"success":"error",sx:{borderRadius:"4px",textTransform:"capitalize"}})}),e.jsxs(m,{align:"center",sx:{pr:3},children:[e.jsx(S,{onClick:N,size:"large","aria-label":"more options",children:e.jsx(pe,{fontSize:"small","aria-controls":"menu-popular-card-1","aria-haspopup":"true",sx:{color:"grey.500"}})}),e.jsxs(Se,{id:"menu-popular-card-1",anchorEl:M,keepMounted:!0,open:!!M,onClose:C,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},sx:{"& .MuiMenu-paper":{boxShadow:n.customShadows.z1}},children:[e.jsx(O,{onClick:C,children:" Edit"}),e.jsx(O,{onClick:C,children:" Delete"})]})]})]},i)}),A>0&&e.jsx(R,{sx:{height:53*A},children:e.jsx(m,{colSpan:6})})]})]})}),e.jsx(Pe,{rowsPerPageOptions:[5,10,25],component:"div",count:h.length,rowsPerPage:f,page:g,onPageChange:U,onRowsPerPageChange:W})]})};export{at as default};
