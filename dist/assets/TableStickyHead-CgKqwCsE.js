import{r as c,l as a,$ as b,S as f}from"./index-DRAxbQhQ.js";import{S as y}from"./CardSecondaryAction-DhIG1Y_S.js";import{C as S}from"./TableExports-C7aPINvc.js";import{header as P}from"./TableBasic-Bx3BQUnJ.js";import{T as j,a as C,b as p,c as u}from"./TableRow-C4jGaY-n.js";import{T}from"./TableHead-DeUPG7xB.js";import{T as h}from"./TableCell-GjZj8q6n.js";import{T as k}from"./TablePagination-1Wm_aae9.js";import"./Tooltip-CFImnuRV.js";import"./LastPage-CBUA5E5W.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./utils-DoM3o7-Q.js";import"./InputBase-C10xFuq9.js";import"./OutlinedInput-C-PMnjYA.js";import"./MenuItem-I_H4wdck.js";const g=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:t=>t.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:t=>t.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:t=>typeof t=="number"&&t.toFixed(2)}];function e(t,o,n,s){const l=n/s;return{name:t,code:o,population:n,size:s,density:l}}const m=[e("India","IN",1324171354,3287263),e("China","CN",1403500365,9596961),e("Italy","IT",60483973,301340),e("United States","US",327167434,9833520),e("Canada","CA",37602103,9984670),e("Australia","AU",25475400,7692024),e("Germany","DE",83019200,357578),e("Ireland","IE",4857e3,70273),e("Mexico","MX",126577691,1972550),e("Japan","JP",126317e3,377973),e("France","FR",67022e3,640679),e("United Kingdom","GB",67545757,242495),e("Russia","RU",146793744,17098246),e("Nigeria","NG",200962417,923768),e("Brazil","BR",210147125,8515767)];function L(){const[t,o]=c.useState(0),[n,s]=c.useState(10),l=(i,r)=>{o(r)},x=i=>{var r;s(+((r=i==null?void 0:i.target)==null?void 0:r.value)),o(0)};return a.jsxs(b,{content:!1,title:"Sticky Header",secondary:a.jsxs(f,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(S,{data:m,filename:"sticky-header-table.csv",header:P}),a.jsx(y,{link:"https://next.material-ui.com/components/tables/"})]}),children:[a.jsx(j,{sx:{maxHeight:440},children:a.jsxs(C,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(T,{children:a.jsx(p,{children:g.map(i=>a.jsx(h,{sx:{py:3,minWidth:i.minWidth},align:i.align,children:i.label},i.id))})}),a.jsx(u,{children:m.slice(t*n,t*n+n).map(i=>a.jsx(p,{sx:{py:3},hover:!0,role:"checkbox",tabIndex:-1,children:g.map(r=>{const d=i[r.id];return a.jsx(h,{align:r.align,children:r.format&&typeof d=="number"?r.format(d):d},r.id)})},i.code))})]})}),a.jsx(k,{rowsPerPageOptions:[10,25,100],component:"div",count:m.length,rowsPerPage:n,page:t,onPageChange:l,onRowsPerPageChange:x})]})}export{L as default};
