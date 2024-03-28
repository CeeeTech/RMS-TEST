import{r as x,l as e,$ as V,S as F,K as y,aS as G,P as b,aT as L,D as C,O as N}from"./index-aYNdDFsw.js";import{S as $}from"./CardSecondaryAction-CQwsXTZR.js";import{C as J}from"./TableExports-6VXYukKQ.js";import{header as W}from"./TableBasic-CDuVE9oH.js";import{d as _}from"./Delete-DOAAHRMZ.js";import{T as B,a as Q,c as U,b as T}from"./TableRow-DaIFs5wn.js";import{T as p}from"./TableCell-CM4Hu41t.js";import{C as q}from"./Checkbox-BjGpkq_j.js";import{T as X}from"./TablePagination-6yzWYrV2.js";import{T as Y}from"./TableHead-CmeJcxgQ.js";import{T as Z}from"./TableSortLabel-COUqlmg8.js";import{T as ee}from"./Tooltip-DeGY6c7u.js";import"./LastPage-Ddm1Z4up.js";import"./Select-DVXOMGOZ.js";import"./Menu-BcGYJvIj.js";import"./utils-DoM3o7-Q.js";import"./InputBase-DT8iEGhH.js";import"./OutlinedInput-CX89FYVG.js";import"./MenuItem-BtCOIvr_.js";function o(a,r,t,i,n){return{name:a,calories:r,fat:t,carbs:i,protein:n}}const g=[o("Cupcake",305,3.7,67,4.3),o("Donut",452,25,51,4.9),o("Eclair",262,16,24,6),o("Frozen yoghurt",159,6,24,4),o("Gingerbread",356,16,49,3.9),o("Honeycomb",408,3.2,87,6.5),o("Ice cream sandwich",237,9,37,4.3),o("Jelly Bean",375,0,94,0),o("KitKat",518,26,65,7),o("Lollipop",392,.2,98,0),o("Marshmallow",318,0,81,2),o("Nougat",360,19,9,37),o("Oreo",437,18,63,4)];function R(a,r,t){return r[t]<a[t]?-1:r[t]>a[t]?1:0}function te(a,r){return a==="desc"?(t,i)=>R(t,i,r):(t,i)=>-R(t,i,r)}function ne(a,r){const t=a.map((i,n)=>[i,n]);return t.sort((i,n)=>{const u=r(i[0],n[0]);return u!==0?u:i[1]-n[1]}),t.map(i=>i[0])}const se=[{id:"name",numeric:!1,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,label:"Calories"},{id:"fat",numeric:!0,label:"Fat (g)"},{id:"carbs",numeric:!0,label:"Carbs (g)"},{id:"protein",numeric:!0,label:"Protein (g)"}];function v({onSelectAllClick:a,order:r,orderBy:t,numSelected:i,rowCount:n,onRequestSort:u}){const h=c=>j=>{u(j,c)};return e.jsx(Y,{children:e.jsxs(T,{children:[e.jsx(p,{padding:"checkbox",sx:{pl:3},children:e.jsx(q,{color:"primary",indeterminate:i>0&&i<n,checked:n>0&&i===n,onChange:a,inputProps:{"aria-label":"select all desserts"}})}),se.map(c=>e.jsx(p,{align:c.numeric?"right":"left",padding:"normal",sortDirection:t===c.id?r:void 0,children:e.jsxs(Z,{active:t===c.id,direction:t===c.id?r:"asc",onClick:h(c.id),children:[c.label,t===c.id?e.jsx(y,{component:"span",sx:G,children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},c.id))]})})}v.propTypes={numSelected:b.number.isRequired,onRequestSort:b.func.isRequired,onSelectAllClick:b.func.isRequired,order:b.oneOf(["asc","desc"]).isRequired,orderBy:b.string.isRequired,rowCount:b.number.isRequired};const I=({numSelected:a})=>e.jsxs(L,{sx:{p:0,pl:1,pr:1,...a>0&&{color:r=>r.palette.secondary.main}},children:[a>0?e.jsxs(C,{color:"inherit",variant:"subtitle1",children:[a," selected"]}):e.jsx(C,{variant:"h4",id:"tableTitle",children:"Nutrition"}),e.jsx(y,{sx:{flexGrow:1}}),a>0&&e.jsx(ee,{title:"Delete",children:e.jsx(N,{size:"large",children:e.jsx(_,{})})})]});I.propTypes={numSelected:b.number.isRequired};function ke(){const[a,r]=x.useState("asc"),[t,i]=x.useState("calories"),[n,u]=x.useState([]),[h,c]=x.useState(0),[j]=x.useState(!1),[f,E]=x.useState(5),[P,O]=x.useState([]),w=(s,m)=>{r(t===m&&a==="asc"?"desc":"asc"),i(m)},D=s=>{if(s.target.checked){if(n.length>0)u([]);else{const m=g.map(l=>l.name);u(m)}return}u([])},A=(s,m)=>{const l=n.indexOf(m);let d=[];l===-1?d=d.concat(n,m):l===0?d=d.concat(n.slice(1)):l===n.length-1?d=d.concat(n.slice(0,-1)):l>0&&(d=d.concat(n.slice(0,l),n.slice(l+1)));const S=g.filter(M=>d.includes(M.name.toString()));O(S),u(d)},H=(s,m)=>{c(m)},z=s=>{E(parseInt(s==null?void 0:s.target.value,10)),c(0)},K=s=>n.indexOf(s)!==-1,k=h>0?Math.max(0,(1+h)*f-g.length):0;return e.jsxs(V,{content:!1,title:"Enhanced Table",secondary:e.jsxs(F,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(J,{data:P.length>0?P:g,filename:"enhanced-table.csv",header:W}),e.jsx($,{link:"https://next.material-ui.com/components/tables/"})]}),children:[e.jsx(I,{numSelected:n.length}),e.jsx(B,{children:e.jsxs(Q,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:j?"small":"medium",children:[e.jsx(v,{numSelected:n.length,order:a,orderBy:t,onSelectAllClick:D,onRequestSort:w,rowCount:g.length}),e.jsxs(U,{children:[ne(g,te(a,t)).slice(h*f,h*f+f).map((s,m)=>{if(typeof s=="number")return null;const l=K(s.name),d=`enhanced-table-checkbox-${m}`;return e.jsxs(T,{hover:!0,onClick:S=>A(S,s.name),role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[e.jsx(p,{sx:{pl:3},padding:"checkbox",children:e.jsx(q,{color:"primary",checked:l,inputProps:{"aria-labelledby":d}})}),e.jsx(p,{children:s.name}),e.jsx(p,{align:"right",children:s.calories}),e.jsx(p,{align:"right",children:s.fat}),e.jsx(p,{align:"right",children:s.carbs}),e.jsx(p,{sx:{pr:3},align:"right",children:s.protein})]},s.name)}),k>0&&e.jsx(T,{sx:{height:(j?33:53)*k},children:e.jsx(p,{colSpan:6})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:g.length,rowsPerPage:f,page:h,onPageChange:H,onRowsPerPageChange:z})]})}export{ke as default};
