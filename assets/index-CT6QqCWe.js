import{P as v,r as m,l as e,G as r,a1 as I,S as a,D as n,F as S,O as W,M as V,T as O,ab as p,a5 as $,$ as M}from"./index-aYNdDFsw.js";import{F as w}from"./FormControl-Dj_1sEpm.js";import{S as B}from"./Select-DVXOMGOZ.js";import{O as H}from"./OutlinedInput-CX89FYVG.js";import{M as P}from"./MenuItem-BtCOIvr_.js";import{T as j}from"./TextField-DGRzrz84.js";import{I as x}from"./InputLabel-Dj0od2Bo.js";import{c as L,a as b}from"./index.esm-Cs06t5W7.js";import{d as Q}from"./DeleteTwoTone-BKDxg_KV.js";import{T as z,a as G,b as D,c as K}from"./TableRow-DaIFs5wn.js";import{T as Z}from"./TableHead-CmeJcxgQ.js";import{T as c}from"./TableCell-CM4Hu41t.js";import{S as _}from"./SubCard-DNvCAQ00.js";import{u as J}from"./formik.esm-BnGHO-0j.js";import{L as U}from"./dateViewRenderers-DtPWu7er.js";import{A as X}from"./AdapterDateFns-DdGwa7T7.js";import{D as Y}from"./DatePicker-CJ8c0NH0.js";import{F as ee}from"./FormHelperText-C1AdVjvj.js";import{D as te,a as re}from"./DialogContent-v1P_Pn4u.js";import{D as ie}from"./DialogContentText-rEL4-FoX.js";import{D as se}from"./DialogActions-DE2c5d4J.js";import"./utils-DoM3o7-Q.js";import"./Menu-BcGYJvIj.js";import"./InputBase-DT8iEGhH.js";import"./InputLabel-taUurEu1.js";import"./FormLabel-CLieAm2i.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";import"./ListItem-C7PTSiU0.js";import"./ListItemSecondaryAction-BoxADv29.js";import"./InputAdornment-P1yKTSAa.js";import"./index-DhB-ElUn.js";import"./typeof-QjJsDpFa.js";import"./toPropertyKey-H7AvS4qg.js";import"./DesktopDatePicker-D67ugVtj.js";import"./useDesktopPicker-D5r1bgKN.js";import"./useMobilePicker-bAYllFi4.js";function k({handleAddItem:t,setAddItemClicked:u}){const[s,y]=m.useState({}),[d,g]=m.useState(1),[q,N]=m.useState(0),[h,A]=m.useState({quantityError:""}),C=[{id:111,name:"Product Name 1",amount:260,desc:"Product Description 1"},{id:112,name:"Product Name 2",amount:200,desc:"Product Description 2"},{id:113,name:"Product Name 3",amount:300,desc:"Product Description 3"}];m.useEffect(()=>{s.id&&N(s.amount*d)},[d,s]);const f=o=>{const l=o.target.value;if(o.target.name==="quantity")Number(l)<0?(A({...h,quantityError:"negative values not allowed"}),g(l)):Number(l)===0?(A({...h,quantityError:"quantity can not be zero"}),g(l)):(g(l),A({...h,quantityError:""}));else{const i=C.find(T=>T.id===l);y(i)}},E=()=>{const o={...s,totalAmount:q,selectedQuantity:d};t(o)};return e.jsx(e.Fragment,{children:e.jsxs(r,{container:!0,spacing:I,children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{spacing:1,children:[e.jsx(n,{variant:"subtitle1",children:"Product Name"}),e.jsx(w,{children:e.jsxs(B,{fullWidth:!0,displayEmpty:!0,value:(s==null?void 0:s.id)||"",onChange:f,input:e.jsx(H,{}),renderValue:o=>{if(o.length===0)return e.jsx(n,{color:"textSecondary",sx:{lineHeight:"1.4375em"},children:"Select Product"});const l=C.filter(i=>i.id===o)[0];return e.jsxs(a,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{width:"100%"},children:[e.jsx(n,{variant:"subtitle1",sx:{lineHeight:"1.4375em"},children:l.name}),e.jsxs(n,{children:["Rate : ",l.amount]})]})},inputProps:{"aria-label":"Without label"},children:[e.jsx(P,{disabled:!0,value:"",children:e.jsx(n,{color:"textSecondary",children:"Select Product"})}),C.map((o,l)=>e.jsx(P,{value:o.id,children:e.jsxs(a,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{width:"100%"},children:[e.jsx(n,{variant:"subtitle1",children:o.name}),e.jsxs(n,{children:["Rate : ",o.amount]})]})},l))]})})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{spacing:1,children:[e.jsx(n,{variant:"subtitle1",id:"itemQuantity",children:"Quantity"}),e.jsx(j,{fullWidth:!0,type:"number",name:"quantity",value:d,onChange:f,error:!!h.quantityError,helperText:h.quantityError,disabled:!s.id})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{spacing:1,children:[e.jsx(n,{variant:"subtitle1",id:"itemAmount",children:"Amount"}),e.jsx(j,{fullWidth:!0,name:"amount",value:q,disabled:!0})]})}),e.jsx(r,{item:!0,container:!0,justifyContent:"flex-end",children:e.jsxs(a,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(S,{color:"error",onClick:()=>u(!1),children:"Cancel"}),e.jsx(S,{disabled:!s.id||!d||!!h.quantityError,variant:"contained",size:"small",onClick:E,children:"Add"})]})})]})})}k.propTypes={handleAddItem:v.func,setAddItemClicked:v.func};function F({productsData:t,deleteProductHandler:u}){return e.jsx(e.Fragment,{children:t.length?e.jsx(r,{item:!0,xs:12,children:e.jsx(z,{children:e.jsxs(G,{children:[e.jsx(Z,{children:e.jsxs(D,{children:[e.jsx(c,{sx:{pl:3},children:"Description"}),e.jsx(c,{align:"right",children:"Quantity"}),e.jsx(c,{align:"right",children:"Amount"}),e.jsx(c,{align:"right",children:"Total"}),e.jsx(c,{align:"right",sx:{pr:3}})]})}),e.jsx(K,{children:t.map((s,y)=>e.jsxs(D,{children:[e.jsxs(c,{sx:{pl:3},children:[e.jsx(n,{variant:"subtitle1",children:s.product}),e.jsx(n,{variant:"body2",children:s.description})]}),e.jsx(c,{align:"right",children:s.quantity}),e.jsxs(c,{align:"right",children:["$",s.amount]}),e.jsxs(c,{align:"right",children:["$",s.total]}),e.jsx(c,{sx:{pr:1},align:"right",children:e.jsx(W,{color:"error",size:"small",onClick:()=>u(s.id),"aria-label":"'Delete'",children:e.jsx(Q,{fontSize:"small"})})})]},y))})]})})}):null})}F.propTypes={productsData:v.array,deleteProductHandler:v.func};function R({productsData:t,allAmounts:u}){const s=V();return e.jsx(e.Fragment,{children:t.length?e.jsxs(r,{item:!0,xs:12,children:[e.jsx(_,{sx:{mx:0,mb:0,bgcolor:s.palette.mode===O.DARK?"dark.main":"primary.light"},children:e.jsx(r,{container:!0,justifyContent:"flex-end",spacing:2,children:e.jsx(r,{item:!0,sm:6,md:4,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(n,{align:"right",variant:"subtitle1",children:"Sub Total :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(n,{align:"right",variant:"body2",children:["$",u.subTotal]})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(n,{align:"right",variant:"subtitle1",children:"Taxes (10%) :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(n,{align:"right",variant:"body2",children:["$",u.taxesAmount]})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(n,{align:"right",variant:"subtitle1",children:"Discount (5%) :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(n,{align:"right",variant:"body2",children:["$",u.discountAmount]})})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(p,{sx:{bgcolor:"dark.main"}})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(n,{align:"right",color:"primary",variant:"subtitle1",children:"Total :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(n,{align:"right",color:"primary",variant:"subtitle1",children:["$",u.totalAmount]})})]})})]})})})}),e.jsx(r,{item:!0,sx:{mt:3},xs:12,children:e.jsx(p,{})})]}):null})}R.propTypes={productsData:v.array,allAmounts:v.object};const ne=L({invoiceNumber:b().required("Invoice Number is Required"),customerName:b().required("Customer Name is Required"),customerEmail:b().email("Enter a valid email").required("Customer Email is Required"),customerPhone:b().min(10,"Phone number should be of minimum 10 characters").required("Customer Phone is Required"),customerAddress:b().required("Customer Address is Required"),orderStatus:b().required("Order Status is required")});function Qe(){const t=J({initialValues:{invoiceNumber:"",customerName:"",customerEmail:"",customerPhone:"",customerAddress:"",orderStatus:"pending"},validationSchema:ne,onSubmit:i=>{i&&N(!0)}}),u=[{id:1,product:"Logo Design",description:"lorem ipsum dolor sit amat, connecter adieu siccing eliot",quantity:6,amount:200,total:1200},{id:2,product:"Landing Page",description:"lorem ipsum dolor sit amat, connecter adieu siccing eliot",quantity:7,amount:100,total:700},{id:3,product:"Admin Template",description:"lorem ipsum dolor sit amat, connecter adieu siccing eliot",quantity:5,amount:150,total:750}],[s,y]=m.useState({subTotal:0,appliedTaxValue:.1,appliedDiscountValue:.05,taxesAmount:0,discountAmount:0,totalAmount:0}),[d,g]=m.useState(u),[q,N]=m.useState(!1),[h,A]=$.useState(new Date),[C,f]=m.useState(!1);m.useEffect(()=>{const i={subTotal:0,appliedTaxValue:.1,appliedDiscountValue:.05,taxesAmount:0,discountAmount:0,totalAmount:0};d.forEach(T=>{i.subTotal+=T.total}),i.taxesAmount=i.subTotal*i.appliedTaxValue,i.discountAmount=(i.subTotal+i.taxesAmount)*i.appliedDiscountValue,i.totalAmount=i.subTotal+i.taxesAmount-i.discountAmount,y(i)},[d]);const E=i=>{g(d.filter(T=>T.id!==i))},o=()=>{N(!1),t.resetForm()},l=i=>{g([...d,{id:i.id,product:i.name,description:i.desc,quantity:i.selectedQuantity,amount:i.amount,total:i.totalAmount}]),f(!1)};return e.jsx(e.Fragment,{children:e.jsx(M,{title:"Create Invoice",children:e.jsx("form",{onSubmit:t.handleSubmit,children:e.jsxs(r,{container:!0,spacing:I,children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Invoice Number"}),e.jsx(j,{id:"invoiceNumber",name:"invoiceNumber",value:t.values.invoiceNumber,onBlur:t.handleBlur,error:t.touched.invoiceNumber&&!!t.errors.invoiceNumber,helperText:t.touched.invoiceNumber&&t.errors.invoiceNumber,onChange:t.handleChange,fullWidth:!0,placeholder:"Invoice #"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(p,{})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Customer Name"}),e.jsx(j,{fullWidth:!0,id:"customerName",name:"customerName",value:t.values.customerName,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.customerName&&!!t.errors.customerName,helperText:t.touched.customerName&&t.errors.customerName,placeholder:"Alex Z."})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Customer Email"}),e.jsx(j,{type:"email",fullWidth:!0,id:"customerEmail",name:"customerEmail",value:t.values.customerEmail,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.customerEmail&&!!t.errors.customerEmail,helperText:t.touched.customerEmail&&t.errors.customerEmail,placeholder:"alex@company.com"})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Customer Contact Numer"}),e.jsx(j,{type:"number",fullWidth:!0,id:"customerPhone",name:"customerPhone",value:t.values.customerPhone,onBlur:t.handleBlur,error:t.touched.customerPhone&&!!t.errors.customerPhone,helperText:t.touched.customerPhone&&t.errors.customerPhone,onChange:t.handleChange,placeholder:"+ 00 00000 00000"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Customer Address"}),e.jsx(j,{fullWidth:!0,id:"customerAddress",name:"customerAddress",value:t.values.customerAddress,onBlur:t.handleBlur,error:t.touched.customerAddress&&!!t.errors.customerAddress,helperText:t.touched.customerAddress&&t.errors.customerAddress,onChange:t.handleChange,multiline:!0,placeholder:"Enter Address"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(p,{})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Invoice Date"}),e.jsx(U,{dateAdapter:X,children:e.jsx(Y,{format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0}},value:h,onChange:i=>{A(i)}})})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Status"}),e.jsxs(B,{id:"orderStatus",name:"orderStatus",defaultValue:t.values.orderStatus,value:t.values.orderStatus,onChange:t.handleChange,children:[e.jsx(P,{value:"pending",children:"Pending"}),e.jsx(P,{value:"refund",children:"Refund"}),e.jsx(P,{value:"paid",children:"Paid"})]}),t.errors.orderStatus&&e.jsx(ee,{error:!0,children:t.errors.orderStatus})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(p,{})}),e.jsx(F,{productsData:d,deleteProductHandler:E}),C?e.jsx(r,{item:!0,xs:12,children:e.jsx(k,{handleAddItem:l,setAddItemClicked:f})}):e.jsx(r,{item:!0,children:e.jsx(S,{variant:"text",onClick:()=>f(!0),children:"+ Add Item"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(p,{})}),e.jsx(R,{productsData:d,allAmounts:s}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(a,{children:[e.jsx(x,{required:!0,children:"Terms and Condition:"}),e.jsx(j,{fullWidth:!0,id:"customerAddress",name:"customerAddress",defaultValue:"I acknowledge terms and conditions.",multiline:!0,placeholder:"Enter Address"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(p,{})}),e.jsx(r,{item:!0,sx:{display:"flex",justifyContent:"flex-end"},xs:12,children:e.jsx(S,{variant:"contained",type:"submit",children:"Add Invoice"})}),e.jsx(r,{item:!0,children:e.jsxs(te,{open:q,children:[e.jsx(re,{children:e.jsx(ie,{sx:{fontWeight:500,color:"secondary.dark"},children:"Invoice Created Successfully"})}),e.jsx(se,{sx:{pr:"20px"},children:e.jsx(S,{autoFocus:!0,variant:"contained",onClick:o,children:"Ok"})})]})})]})})})})}export{Qe as default};