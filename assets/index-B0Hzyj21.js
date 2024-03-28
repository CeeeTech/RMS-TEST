import{P as p,a5 as b,l as e,S as w,O as y,x as P,y as $,be as B,M as J,Y as D,N as X,D as T,a3 as Z,T as ee,I as te,aT as re,K as se,am as ae,an as ie,aU as ne,$ as le}from"./index-aYNdDFsw.js";import{d as oe}from"./AddTwoTone-UpWEN4t6.js";import{d as ce}from"./FileCopyTwoTone-2o7qjW9t.js";import{d as de}from"./FilterListTwoTone-CY-NkPtw.js";import{d as ue}from"./PrintTwoTone-BLqMOsV6.js";import{d as me}from"./Search-BLI-QLQu.js";import{T as pe}from"./TextField-DGRzrz84.js";import{I as he}from"./InputAdornment-P1yKTSAa.js";import{T as S}from"./Tooltip-DeGY6c7u.js";import{F as fe}from"./Fab-BoVIyOe2.js";import{g as xe,I as je}from"./getImageUrl-CsHsmFJf.js";import{d as ge}from"./AccessTimeOutlined-BoJPSNj1.js";import{d as be}from"./Cached-C5K6cCvd.js";import{d as Se}from"./Cancel-BuM_U1jk.js";import{d as ve}from"./CallOutlined-TBbW7-zy.js";import{d as H}from"./CheckCircle-BYV4yvUL.js";import{d as we}from"./DeleteTwoTone-BKDxg_KV.js";import{d as ye}from"./EditTwoTone-BaB9X3XD.js";import{d as _e}from"./MailTwoTone-CKc1DUs9.js";import{d as Te}from"./VideoCameraFront-Cfc5z1nQ.js";import{d as Re}from"./VisibilityTwoTone-BKY-bSyp.js";import{r as Pe}from"./random-D-oTin4B.js";import{b as C,T as $e,a as ke,c as Ce}from"./TableRow-DaIFs5wn.js";import{T as c}from"./TableCell-CM4Hu41t.js";import{C as E}from"./Checkbox-BjGpkq_j.js";import{d as Ie}from"./Delete-DOAAHRMZ.js";import{T as ze}from"./TableHead-CmeJcxgQ.js";import{T as Me}from"./TableSortLabel-COUqlmg8.js";import{T as Oe}from"./TablePagination-6yzWYrV2.js";import"./FormControl-Dj_1sEpm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-taUurEu1.js";import"./FormLabel-CLieAm2i.js";import"./Select-DVXOMGOZ.js";import"./Menu-BcGYJvIj.js";import"./InputBase-DT8iEGhH.js";import"./OutlinedInput-CX89FYVG.js";import"./FormHelperText-C1AdVjvj.js";import"./isSymbol-ckKrFcy_.js";import"./isArrayLike-C-wli46Q.js";import"./LastPage-Ddm1Z4up.js";import"./MenuItem-BtCOIvr_.js";const L=({rows:r,setRows:a})=>{const[i,n]=b.useState(""),t=u=>{const d=u==null?void 0:u.target.value;if(n(d||""),d){const x=r==null?void 0:r.filter(s=>{let h=!0;const f=["name","company","date","status","qty"];let g=!1;return f.forEach(j=>{s[j].toString().toLowerCase().includes(d.toString().toLowerCase())&&(g=!0)}),g||(h=!1),h});a(x)}else a(r)};return e.jsxs(w,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{sm:"center"},sx:{p:3},spacing:2,children:[e.jsx(pe,{InputProps:{startAdornment:e.jsx(he,{position:"start",children:e.jsx(me,{fontSize:"small"})})},placeholder:"Search History",size:"small",value:i,onChange:t}),e.jsxs(w,{direction:"row",alignItems:"center",justifyContent:{xs:"center"},spacing:1.25,children:[e.jsx(S,{title:"Copy",children:e.jsx(y,{size:"large",children:e.jsx(ce,{})})}),e.jsx(S,{title:"Print",children:e.jsx(y,{size:"large",children:e.jsx(ue,{})})}),e.jsx(S,{title:"Filter",children:e.jsx(y,{size:"large",children:e.jsx(de,{})})}),e.jsx(S,{title:"Add New History",children:e.jsx(fe,{color:"primary",size:"small",sx:{boxShadow:"none",ml:1,width:32,height:32,minHeight:32},children:e.jsx(oe,{fontSize:"small"})})})]})]})};L.propTypes={rows:p.array,setRows:p.func};var I={},qe=$;Object.defineProperty(I,"__esModule",{value:!0});var V=I.default=void 0,De=qe(P()),He=e;V=I.default=(0,De.default)((0,He.jsx)("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26"}),"AutorenewOutlined");var z={},Ae=$;Object.defineProperty(z,"__esModule",{value:!0});var F=z.default=void 0,Ee=Ae(P()),Le=e;F=z.default=(0,Ee.default)((0,Le.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRuleOutlined");var M={},Ve=$;Object.defineProperty(M,"__esModule",{value:!0});var N=M.default=void 0,Fe=Ve(P()),Ne=e;N=M.default=(0,Fe.default)((0,Ne.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"Pending");var O={},Ue=$;Object.defineProperty(O,"__esModule",{value:!0});var U=O.default=void 0,Ke=Ue(P()),Ye=e;U=O.default=(0,Ke.default)((0,Ye.jsx)("path",{d:"M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1"}),"VideocamOutlined");const R=new B.Chance,K=({labelId:r,row:a,selected:i,handleClick:n})=>{const t=J(),d=(k=>i.indexOf(k)!==-1)(a.name),x=new Date(new Date().getTime()-Pe(0,28)*24*60*60*1e3);let s,h,f,g,j,_,v;switch(Math.floor(Math.random()*4+1)){case 1:s=e.jsx(ve,{color:"info"}),v=e.jsx(H,{color:"success",fontSize:"small"});break;case 2:s=e.jsx(_e,{color:"primary"}),v=e.jsx(Se,{color:"error",fontSize:"small"});break;case 4:s=e.jsx(U,{color:"success"}),v=e.jsx(N,{color:"warning",fontSize:"small"});break;case 3:default:s=e.jsx(Te,{color:"error"}),v=e.jsx(be,{color:"primary",fontSize:"small"})}switch(a.status){case 1:h="Review",f="High",g="success.dark",j=D(t.palette.success.light,.6),_=e.jsx(S,{title:"Completed",placement:"right-end",arrow:!0,children:e.jsx(H,{color:"success"})});break;case 2:h="Offer",f="Medium",g="warning.dark",j="warning.light",_=e.jsx(S,{title:"Reopen",placement:"right-end",arrow:!0,children:e.jsx(V,{color:"disabled"})});break;case 3:default:h="New Services",f="Low",g="orange.dark",j=D(t.palette.orange.light,.8),_=e.jsx(S,{title:"Pending",placement:"right-end",arrow:!0,children:e.jsx(ge,{color:"warning"})})}return e.jsxs(C,{hover:!0,role:"checkbox","aria-checked":d,tabIndex:-1,selected:d,children:[e.jsx(c,{padding:"checkbox",sx:{pl:3},onClick:()=>n(a.name),children:e.jsx(E,{color:"primary",checked:d,inputProps:{"aria-labelledby":r}})}),e.jsxs(c,{id:r,children:["#",a.id]}),e.jsx(c,{onClick:()=>n(a.name),sx:{cursor:"pointer"},children:e.jsxs(w,{spacing:1.25,direction:"row",alignItems:"center",children:[e.jsx(X,{alt:"User 1",src:xe(`avatar-${Math.floor(Math.random()*9)+1}.png`,je.USERS)}),e.jsxs(w,{children:[e.jsxs(w,{direction:"row",alignItems:"center",spacing:.5,children:[e.jsx(T,{variant:"h5",children:a.name.slice(0,-2)}),v]}),e.jsx(T,{variant:"subtitle2",children:a.company})]})]})}),e.jsx(c,{align:"center",children:s}),e.jsx(c,{children:R.phone()}),e.jsx(c,{children:h}),e.jsx(c,{align:"center",children:e.jsxs(w,{direction:"row",alignItems:"center",children:[e.jsx(w,{direction:"row",justifyContent:"flex-end",sx:{width:72},children:x.getDate()+"."+(x.getMonth()+1)+"."+x.getFullYear()}),e.jsx(F,{sx:{transform:"rotate(90deg)",color:"divider"}}),R.hour(),":",R.minute(),":",R.millisecond()]})}),e.jsx(c,{children:e.jsx(Z,{label:f,size:"small",sx:{bgcolor:t.palette.mode===ee.DARK?"dark.main":j,color:g,cursor:"pointer"}})}),e.jsx(c,{align:"center",children:_}),e.jsx(c,{children:e.jsx(te,{href:"#",children:"Instruction.doc"})}),e.jsxs(c,{align:"center",sx:{pr:3},children:[e.jsx(y,{color:"primary",size:"large","aria-label":"View",children:e.jsx(Re,{})}),e.jsx(y,{color:"secondary",size:"large","aria-label":"View",children:e.jsx(ye,{})}),e.jsx(y,{color:"error",size:"large","aria-label":"View",children:e.jsx(we,{})})]})]})};K.propTypes={labelId:p.string,row:p.object,selected:p.array,handleClick:p.func};const Ge=[{id:"id",numeric:!0,label:"ID"},{id:"name",numeric:!1,label:"Name"},{id:"type",numeric:!1,label:"Communication Type",align:"center"},{id:"phone",numeric:!1,label:"Phone no"},{id:"subject",numeric:!1,label:"Subject"},{id:"date",numeric:!1,label:"Date and Time",align:"center"},{id:"priority",numeric:!1,label:"Priority"},{id:"status",numeric:!1,label:"Status",align:"center"},{id:"notes",numeric:!1,label:"Notes"}],Y=({numSelected:r})=>e.jsxs(re,{sx:{p:0,px:1,...r>0&&{color:"secondary.main"}},children:[r>0?e.jsxs(T,{color:"inherit",variant:"h4",children:[r," Selected"]}):e.jsx(T,{variant:"h6",id:"tableTitle",children:"Nutrition"}),e.jsx(se,{sx:{flexGrow:1}}),r>0&&e.jsx(S,{title:"Delete",children:e.jsx(y,{size:"large",children:e.jsx(Ie,{fontSize:"small"})})})]});Y.propTypes={numSelected:p.number.isRequired};function G({onSelectAllClick:r,order:a,orderBy:i,numSelected:n,rowCount:t,onRequestSort:u,selected:d}){const x=s=>h=>{u(h,s)};return e.jsx(ze,{children:e.jsxs(C,{children:[e.jsx(c,{align:"center",padding:"checkbox",sx:{pl:3},children:e.jsx(E,{color:"primary",indeterminate:n>0&&n<t,checked:t>0&&n===t,onChange:r,inputProps:{"aria-label":"select all desserts"}})}),n>0&&e.jsx(c,{padding:"none",colSpan:10,children:e.jsx(Y,{numSelected:d.length})}),n<=0&&Ge.map(s=>e.jsx(c,{align:s.align,padding:s.disablePadding?"none":"normal",sortDirection:i===s.id?a:!1,children:e.jsxs(Me,{active:i===s.id,direction:i===s.id?a:"asc",onClick:x(s.id),children:[s.label,i===s.id?e.jsx(T,{component:"span",sx:{display:"none"},children:a==="desc"?"sorted descending":"sorted ascending"}):null]})},s.id)),n<=0&&e.jsx(c,{sortDirection:!1,align:"center",sx:{pr:3},children:"Action"})]})})}G.propTypes={selected:p.array,numSelected:p.number.isRequired,onRequestSort:p.func.isRequired,onSelectAllClick:p.func.isRequired,order:p.oneOf(["asc","desc"]).isRequired,orderBy:p.string.isRequired,rowCount:p.number.isRequired};function A(r,a,i){return a[i]<r[i]?-1:a[i]>r[i]?1:0}const Qe=(r,a)=>r==="desc"?(i,n)=>A(i,n,a):(i,n)=>-A(i,n,a);function We(r,a){const i=r.map((n,t)=>[n,t]);return i.sort((n,t)=>{const u=a(n[0],t[0]);return u!==0?u:n[1]-t[1]}),i.map(n=>n[0])}const At=()=>{const[r,a]=b.useState("asc"),[i,n]=b.useState("calories"),[t,u]=b.useState([]),[d,x]=b.useState(0),[s,h]=b.useState([]),[f,g]=b.useState(10),{orders:j}=ae(l=>l.customer);b.useEffect(()=>{ie(ne())},[]),b.useEffect(()=>{h(j)},[j]);const _=(l,o)=>{a(i===o&&r==="asc"?"desc":"asc"),n(o)},v=l=>{if(l.target.checked){if(t.length>0)u([]);else{const o=s.map(m=>m.name);u(o)}return}u([])},k=l=>{const o=t.indexOf(l);let m=[];o===-1?m=m.concat(t,l):o===0?m=m.concat(t.slice(1)):o===t.length-1?m=m.concat(t.slice(0,-1)):o>0&&(m=m.concat(t.slice(0,o),t.slice(o+1))),u(m)},Q=(l,o)=>{x(o)},W=l=>{l!=null&&l.target.value&&g(parseInt(l==null?void 0:l.target.value,10)),x(0)},q=d>0?Math.max(0,(1+d)*f-s.length):0;return e.jsxs(le,{content:!1,children:[e.jsx(L,{rows:j,setRows:h}),e.jsx($e,{children:e.jsxs(ke,{sx:{minWidth:750,"& .MuiTableCell-root":{whiteSpace:"nowrap"}},"aria-labelledby":"tableTitle",children:[e.jsx(G,{numSelected:t.length,order:r,orderBy:i,onSelectAllClick:v,onRequestSort:_,rowCount:s.length,selected:t}),e.jsxs(Ce,{children:[We(s,Qe(r,i)).slice(d*f,d*f+f).map((l,o)=>{if(typeof l=="number")return null;const m=`enhanced-table-checkbox-${o}`;return e.jsx(K,{selected:t,handleClick:k,row:l,labelId:m},o)}),q>0&&e.jsx(C,{sx:{height:53*q},children:e.jsx(c,{colSpan:6})})]})]})}),e.jsx(Oe,{rowsPerPageOptions:[10,25],component:"div",count:s.length,rowsPerPage:f,page:d,onPageChange:Q,onRowsPerPageChange:W})]})};export{At as default};
