import{r as x,l as e,$ as V,S as F,Z as G,K as y,aS as L,P as b,aT as N,D as C,O as $}from"./index-DRAxbQhQ.js";import{S as J}from"./CardSecondaryAction-DhIG1Y_S.js";import{C as W}from"./TableExports-C7aPINvc.js";import{header as Z}from"./TableBasic-Bx3BQUnJ.js";import{d as _}from"./Delete-BWDjsRTL.js";import{T as B,a as Q,c as U,b as T}from"./TableRow-C4jGaY-n.js";import{T as u}from"./TableCell-GjZj8q6n.js";import{C as q}from"./Checkbox-DF2srxXR.js";import{T as X}from"./TablePagination-1Wm_aae9.js";import{T as Y}from"./TableHead-DeUPG7xB.js";import{T as ee}from"./TableSortLabel-CpBXLE1m.js";import{T as te}from"./Tooltip-CFImnuRV.js";import"./LastPage-CBUA5E5W.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./utils-DoM3o7-Q.js";import"./InputBase-C10xFuq9.js";import"./OutlinedInput-C-PMnjYA.js";import"./MenuItem-I_H4wdck.js";function o(a,r,t,i,s){return{name:a,calories:r,fat:t,carbs:i,protein:s}}const g=[o("Cupcake",305,3.7,67,4.3),o("Donut",452,25,51,4.9),o("Eclair",262,16,24,6),o("Frozen yoghurt",159,6,24,4),o("Gingerbread",356,16,49,3.9),o("Honeycomb",408,3.2,87,6.5),o("Ice cream sandwich",237,9,37,4.3),o("Jelly Bean",375,0,94,0),o("KitKat",518,26,65,7),o("Lollipop",392,.2,98,0),o("Marshmallow",318,0,81,2),o("Nougat",360,19,9,37),o("Oreo",437,18,63,4)];function R(a,r,t){return r[t]<a[t]?-1:r[t]>a[t]?1:0}const se=(a,r)=>a==="desc"?(t,i)=>R(t,i,r):(t,i)=>-R(t,i,r);function ne(a,r){const t=a.map((i,s)=>[i,s]);return t.sort((i,s)=>{const p=r(i[0],s[0]);return p!==0?p:i[1]-s[1]}),t.map(i=>i[0])}const ae=[{id:"name",numeric:!1,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,label:"Calories"},{id:"fat",numeric:!0,label:"Fat (g)"},{id:"carbs",numeric:!0,label:"Carbs (g)"},{id:"protein",numeric:!0,label:"Protein (g)"}];function I({onSelectAllClick:a,order:r,orderBy:t,numSelected:i,rowCount:s,onRequestSort:p}){const h=c=>j=>{p(j,c)};return e.jsx(Y,{children:e.jsxs(T,{children:[e.jsx(u,{padding:"checkbox",sx:{pl:3},children:e.jsx(q,{color:"primary",indeterminate:i>0&&i<s,checked:s>0&&i===s,onChange:a,inputProps:{"aria-label":"select all desserts"}})}),ae.map(c=>e.jsx(u,{align:c.numeric?"right":"left",padding:"normal",sortDirection:t===c.id?r:!1,children:e.jsxs(ee,{active:t===c.id,direction:t===c.id?r:"asc",onClick:h(c.id),children:[c.label,t===c.id?e.jsx(y,{component:"span",sx:L,children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},c.id))]})})}I.propTypes={numSelected:b.number.isRequired,onRequestSort:b.func.isRequired,onSelectAllClick:b.func.isRequired,order:b.oneOf(["asc","desc"]).isRequired,orderBy:b.string.isRequired,rowCount:b.number.isRequired};const v=({numSelected:a})=>e.jsxs(N,{sx:{p:0,pl:1,pr:1,...a>0&&{color:r=>r.palette.secondary.main}},children:[a>0?e.jsxs(C,{color:"inherit",variant:"subtitle1",children:[a," selected"]}):e.jsx(C,{variant:"h6",id:"tableTitle",children:"Nutrition"}),e.jsx(y,{sx:{flexGrow:1}}),a>0&&e.jsx(te,{title:"Delete",children:e.jsx($,{size:"large",children:e.jsx(_,{})})})]});v.propTypes={numSelected:b.number.isRequired};function Ce(){const[a,r]=x.useState("asc"),[t,i]=x.useState("calories"),[s,p]=x.useState([]),[h,c]=x.useState(0),[j]=x.useState(!1),[f,w]=x.useState(5),[P,D]=x.useState([]),O=(n,m)=>{r(t===m&&a==="asc"?"desc":"asc"),i(m)},E=n=>{if(n.target.checked){if(s.length>0)p([]);else{const m=g.map(l=>l.name);p(m)}return}p([])},A=(n,m)=>{const l=s.indexOf(m);let d=[];l===-1?d=d.concat(s,m):l===0?d=d.concat(s.slice(1)):l===s.length-1?d=d.concat(s.slice(0,-1)):l>0&&(d=d.concat(s.slice(0,l),s.slice(l+1)));const S=g.filter(M=>d.includes(M.name.toString()));D(S),p(d)},H=(n,m)=>{c(m)},z=n=>{w(parseInt(n==null?void 0:n.target.value,10)),c(0)},K=n=>s.indexOf(n)!==-1,k=h>0?Math.max(0,(1+h)*f-g.length):0;return e.jsx(V,{content:!1,title:"Data Tables",secondary:e.jsxs(F,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(W,{data:P.length>0?P:g,filename:"data-tables.csv",header:Z}),e.jsx(J,{link:"https://next.material-ui.com/components/tables/"})]}),children:e.jsxs(G,{sx:{width:"100%",mb:2},children:[e.jsx(v,{numSelected:s.length}),e.jsx(B,{children:e.jsxs(Q,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:j?"small":"medium",children:[e.jsx(I,{numSelected:s.length,order:a,orderBy:t,onSelectAllClick:E,onRequestSort:O,rowCount:g.length}),e.jsxs(U,{children:[ne(g,se(a,t)).slice(h*f,h*f+f).map((n,m)=>{if(typeof n=="number")return null;const l=K(n.name),d=`enhanced-table-checkbox-${m}`;return e.jsxs(T,{hover:!0,onClick:S=>A(S,n.name),role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[e.jsx(u,{padding:"checkbox",sx:{pl:3},children:e.jsx(q,{color:"primary",checked:l,inputProps:{"aria-labelledby":d}})}),e.jsx(u,{children:n.name}),e.jsx(u,{align:"right",children:n.calories}),e.jsx(u,{align:"right",children:n.fat}),e.jsx(u,{align:"right",children:n.carbs}),e.jsx(u,{sx:{pr:3},align:"right",children:n.protein})]},n.name)}),k>0&&e.jsx(T,{sx:{height:(j?33:53)*k},children:e.jsx(u,{colSpan:6})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:g.length,rowsPerPage:f,page:h,onPageChange:H,onRowsPerPageChange:z})]})})}export{Ce as default};
