import{P as q,r as n,am as O,an as L,aJ as z,l as e,G as r,S as d,F as D,ab as T,D as l,O as H,M as Q,T as V,cH as G,a1 as B,aC as X,bf as _,bh as J,$ as K}from"./index-aYNdDFsw.js";import{c as Z,a as P}from"./index.esm-Cs06t5W7.js";import{u as U}from"./formik.esm-BnGHO-0j.js";import Y from"./index-Dt7gt8A5.js";import{d as k}from"./Add-CSK2dzS_.js";import{I as v}from"./InputLabel-taUurEu1.js";import{T as C}from"./TextField-DGRzrz84.js";import{r as ee}from"./random-D-oTin4B.js";import{S as N}from"./Select-DVXOMGOZ.js";import{I as te}from"./InputAdornment-P1yKTSAa.js";import{M as A}from"./MenuItem-BtCOIvr_.js";import{A as re}from"./AdapterDateFns-DdGwa7T7.js";import{F as se}from"./FormHelperText-C1AdVjvj.js";import{D as ie}from"./DialogContent-v1P_Pn4u.js";import{L as ne}from"./dateViewRenderers-DtPWu7er.js";import{D as ae}from"./DatePicker-CJ8c0NH0.js";import{d as le}from"./DeleteTwoTone-BKDxg_KV.js";import{T as oe,a as de,b as I,c as ue}from"./TableRow-DaIFs5wn.js";import{T as ce}from"./TableHead-CmeJcxgQ.js";import{T as j}from"./TableCell-CM4Hu41t.js";import{S as me}from"./SubCard-DNvCAQ00.js";import{F as he}from"./FormControl-Dj_1sEpm.js";import{O as xe}from"./OutlinedInput-CX89FYVG.js";import{I as pe}from"./InputLabel-Dj0od2Bo.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";import"./Checkbox-BjGpkq_j.js";import"./WorkTwoTone-D6VkduLV.js";import"./PersonAddTwoTone-DBDc3Y4w.js";import"./PinDropTwoTone-DIP_Ioum.js";import"./CardActions-BixJOMBP.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-CLieAm2i.js";import"./Menu-BcGYJvIj.js";import"./InputBase-DT8iEGhH.js";import"./index-DhB-ElUn.js";import"./typeof-QjJsDpFa.js";import"./toPropertyKey-H7AvS4qg.js";import"./DialogActions-DE2c5d4J.js";import"./ListItem-C7PTSiU0.js";import"./ListItemSecondaryAction-BoxADv29.js";import"./DesktopDatePicker-D67ugVtj.js";import"./useDesktopPicker-D5r1bgKN.js";import"./useMobilePicker-bAYllFi4.js";const M=({formik:t,handleOnSelectValue:h})=>{const[o,i]=n.useState([]),[c,p]=n.useState(!1),[S,g]=n.useState(t.values.client),[a,E]=n.useState(new Date),{detailCards:y}=O(u=>u.user),x=()=>{p(!c)},b=u=>{g(u.target.value)};return n.useEffect(()=>{i(y),h(y[1])},[y,h]),n.useEffect(()=>{L(z())},[]),e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,sx:{color:"grey.500",fontWeight:"400"},children:"Invoice Number"}),e.jsx(C,{id:"invoiceNumber",name:"invoiceNumber",defaultValue:`#${ee(1e4,99999)}`,disabled:!0,fullWidth:!0,placeholder:"Invoice #"})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{children:[e.jsx(v,{id:"demo-simple-select-label",children:"Select Client"}),e.jsxs(N,{endAdornment:e.jsx(te,{position:"end",children:e.jsx(D,{onClick:x,startIcon:e.jsx(k,{}),children:"New client"})}),sx:{"& .MuiSelect-icon":{right:120}},labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Select Client",onChange:b,value:S,children:[e.jsx(A,{value:"",children:"Select Client"}),o&&o.map((u,s)=>e.jsx(A,{value:s,onClick:()=>h(u),selected:!0,children:u.name},s))]})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,children:"Client Name"}),e.jsx(C,{fullWidth:!0,id:"customerName",name:"customerName",value:t.values.customerName,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.customerName&&!!t.errors.customerName,helperText:t.touched.customerName&&t.errors.customerName,placeholder:"Alex Z."})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,children:"Client Email"}),e.jsx(C,{type:"email",fullWidth:!0,id:"customerEmail",name:"customerEmail",value:t.values.customerEmail,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.customerEmail&&!!t.errors.customerEmail,helperText:t.touched.customerEmail&&t.errors.customerEmail,placeholder:"alex@company.com"})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,children:"Client Contact Numer"}),e.jsx(C,{fullWidth:!0,id:"customerPhone",name:"customerPhone",value:t.values.customerPhone,onBlur:t.handleBlur,error:t.touched.customerPhone&&!!t.errors.customerPhone,helperText:t.touched.customerPhone&&t.errors.customerPhone,onChange:t.handleChange,placeholder:"+ 00 00000 00000"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,children:"Client Address"}),e.jsx(C,{fullWidth:!0,id:"customerAddress",name:"customerAddress",value:t.values.customerAddress,onBlur:t.handleBlur,error:t.touched.customerAddress&&!!t.errors.customerAddress,helperText:t.touched.customerAddress&&t.errors.customerAddress,onChange:t.handleChange,multiline:!0,placeholder:"Enter Address"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,children:"Invoice Date"}),e.jsx(ne,{dateAdapter:re,children:e.jsx(ae,{format:"dd/MM/yyyy",slotProps:{textField:{fullWidth:!0}},value:a,onChange:u=>{E(u)}})})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(d,{children:[e.jsx(v,{required:!0,children:"Status"}),e.jsxs(N,{id:"orderStatus",name:"orderStatus",defaultValue:t.values.orderStatus,value:t.values.orderStatus,onChange:t.handleChange,children:[e.jsx(A,{value:"pending",children:"Pending"}),e.jsx(A,{value:"refund",children:"Refund"}),e.jsx(A,{value:"paid",children:"Paid"})]}),t.errors.orderStatus&&e.jsx(se,{error:!0,children:t.errors.orderStatus})]})}),e.jsx(ie,{open:c,onClose:x,sx:{"& .MuiDialog-paper":{maxWidth:"100%",width:980}},children:c&&e.jsx(Y,{isOpen:!0,handleDialogToggler:x})})]})};M.propTypes={formik:q.object,handleOnSelectValue:q.func};function W({productsData:t,deleteProductHandler:h}){return e.jsx(oe,{children:e.jsxs(de,{children:[e.jsx(ce,{children:e.jsxs(I,{children:[e.jsx(j,{sx:{pl:3},children:"Description"}),e.jsx(j,{align:"right",children:"Quantity"}),e.jsx(j,{align:"right",children:"Amount"}),e.jsx(j,{align:"right",children:"Total"}),e.jsx(j,{})]})}),e.jsx(ue,{children:t.map((o,i)=>e.jsxs(I,{children:[e.jsxs(j,{sx:{pl:3},children:[e.jsx(l,{variant:"h5",children:o.product}),e.jsx(l,{variant:"body2",children:o.description})]}),e.jsx(j,{align:"right",children:o.quantity}),e.jsxs(j,{align:"right",children:["$",o.amount]}),e.jsxs(j,{align:"right",children:["$",Math.round(o.total*100)/100]}),e.jsx(j,{sx:{pr:1},align:"right",children:e.jsx(H,{color:"error",size:"small",onClick:()=>h(o.id),"aria-label":"'Delete'",children:e.jsx(le,{fontSize:"small"})})})]},i))})]})})}W.propTypes={productsData:q.array,deleteProductHandler:q.func};function R({allAmounts:t}){const h=Q();return e.jsx(me,{sx:{bgcolor:h.palette.mode===V.DARK?"dark.main":"primary.light"},children:e.jsx(r,{container:!0,justifyContent:"flex-end",spacing:2,children:e.jsx(r,{item:!0,sm:6,md:4,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(l,{align:"right",variant:"subtitle1",children:"Sub Total :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(l,{align:"right",variant:"body2",children:["$",Math.round(t.subTotal*100)/100]})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(l,{align:"right",variant:"subtitle1",children:"Tax (10%) :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(l,{align:"right",variant:"body2",children:["$",Math.round(t.taxesAmount*100)/100]})}),e.jsx(r,{item:!0,xs:6,children:e.jsx(l,{align:"right",variant:"subtitle1",children:"Discount (5%) :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(l,{align:"right",variant:"body2",children:["$",Math.round(t.discountAmount*100)/100]})})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(r,{container:!0,spacing:1,children:[e.jsx(r,{item:!0,xs:6,children:e.jsx(l,{align:"right",color:"primary",variant:"subtitle1",children:"Total :"})}),e.jsx(r,{item:!0,xs:6,children:e.jsxs(l,{align:"right",color:"primary",variant:"subtitle1",children:["$",Math.round(t.totalAmount*100)/100]})})]})})]})})})})}R.propTypes={allAmounts:q.object};function F({handleAddItem:t,setAddItemClicked:h}){const o=G(),[i,c]=n.useState(),[p,S]=n.useState(1),[g,a]=n.useState(0),[E,y]=n.useState([]),[x,b]=n.useState({quantityError:""});n.useEffect(()=>{y(o)},[o]),n.useEffect(()=>{i!=null&&i.id&&a((i==null?void 0:i.offerPrice)*p)},[i==null?void 0:i.id,i==null?void 0:i.offerPrice,p]);const u=m=>{const f=m.target.value;if(m.target.name==="quantity")Number(f)<0?(b({...x,quantityError:"negative values not allowed"}),S(f)):Number(f)===0?(b({...x,quantityError:"quantity can not be zero"}),S(f)):(S(f),b({...x,quantityError:""}));else{const $=E.find(w=>w.id===f);c($)}},s=()=>{const m={...i,totalAmount:g,selectedQuantity:p};t(m)};return e.jsxs(r,{container:!0,spacing:B,children:[e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(l,{sx:{color:"grey.500",fontWeight:"400"},children:"Item Name"}),e.jsx(he,{children:e.jsxs(N,{fullWidth:!0,displayEmpty:!0,value:(i==null?void 0:i.id)||"",onChange:u,input:e.jsx(xe,{}),inputProps:{"aria-label":"Without label"},children:[e.jsx(A,{disabled:!0,value:"",children:e.jsx(l,{color:"textSecondary",children:"Select Item"})}),E.map((m,f)=>e.jsx(A,{value:m.id,children:e.jsxs(d,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{width:"100%"},children:[e.jsx(l,{variant:"subtitle1",children:m.name}),e.jsxs(l,{children:["Rate : ",m.offerPrice]})]})},f))]})})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(l,{sx:{color:"grey.500",fontWeight:"400"},children:"Quantity"}),e.jsx(C,{fullWidth:!0,type:"number",name:"quantity",value:p,onChange:u,error:!!x.quantityError,helperText:x.quantityError,disabled:!(i!=null&&i.id)})]})}),e.jsx(r,{item:!0,xs:12,md:4,children:e.jsxs(d,{spacing:1,children:[e.jsx(l,{sx:{color:"grey.500",fontWeight:"400"},children:"Amount"}),e.jsx(C,{fullWidth:!0,name:"amount",value:Math.round(g*100)/100,disabled:!0})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(d,{direction:"row",spacing:1,alignItems:"center",justifyContent:"flex-end",children:[e.jsx(D,{color:"error",onClick:()=>h(!1),children:"Cancel"}),e.jsx(D,{disabled:!(i!=null&&i.id)||!p,variant:"contained",size:"small",onClick:s,children:"Add"})]})})]})}F.propTypes={handleAddItem:q.func,setAddItemClicked:q.func};const je=Z({invoiceNumber:P().required("Invoice Number is Required"),customerName:P().required("Client Name is Required"),customerEmail:P().email("Enter a valid email").required("Client Email is Required"),customerPhone:P().min(10,"Phone number should be of minimum 10 characters").required("Client Phone is Required"),customerAddress:P().required("Client Address is Required"),orderStatus:P().required("Order Status is required")}),ge=[{id:1,product:"Canon EOS 1500D 24.1 Digital SLR",description:"SLR Camera (Black) with EF S18-55...",quantity:1,amount:12.99,total:12.99},{id:2,product:"Fitbit MX30 Smart Watch",description:"(MX30- waterproof) watch",quantity:1,amount:49.9,total:49.9},{id:3,product:"Apple iPhone 13 Mini ",description:"13 cm (5.4-inch) Super",quantity:1,amount:86.99,total:86.99}];function dt(){const t=X(),h=_(),[o,i]=n.useState({subTotal:0,appliedTaxValue:.1,appliedDiscountValue:.05,taxesAmount:0,discountAmount:0,totalAmount:0}),[c,p]=n.useState(ge),[S,g]=n.useState(!0),[a,E]=n.useState(),y=s=>{p(c.filter(m=>m.id!==s))},x=s=>{E(s)},b=U({enableReinitialize:!0,initialValues:{client:1,customerName:a==null?void 0:a.name,customerEmail:a==null?void 0:a.email,customerPhone:a==null?void 0:a.contact,customerAddress:a==null?void 0:a.location,orderStatus:"pending"},validationSchema:je,onSubmit:s=>{s&&(t("/apps/invoice/invoice-list"),h(J({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1})))}});n.useEffect(()=>{const s={subTotal:0,appliedTaxValue:.1,appliedDiscountValue:.05,taxesAmount:0,discountAmount:0,totalAmount:0};c.forEach(m=>{s.subTotal+=m.total}),s.taxesAmount=s.subTotal*s.appliedTaxValue,s.discountAmount=(s.subTotal+s.taxesAmount)*s.appliedDiscountValue,s.totalAmount=s.subTotal+s.taxesAmount-s.discountAmount,i(s)},[c]);const u=s=>{p([...c,{id:s.id,product:s.name,description:s.description,quantity:s.selectedQuantity,amount:s.offerPrice,total:s.totalAmount}]),g(!1)};return e.jsx(K,{children:e.jsx("form",{onSubmit:b.handleSubmit,children:e.jsxs(r,{container:!0,spacing:B,children:[e.jsx(M,{formik:b,handleOnSelectValue:x}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),c.length>0&&e.jsx(r,{item:!0,xs:12,children:e.jsx(W,{productsData:c,deleteProductHandler:y})}),S?e.jsx(r,{item:!0,xs:12,children:e.jsx(F,{handleAddItem:u,setAddItemClicked:g})}):e.jsx(r,{item:!0,xs:12,children:e.jsx(D,{variant:"text",onClick:()=>g(!0),children:"+ Add Item"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(R,{allAmounts:o})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(d,{children:[e.jsx(pe,{required:!0,children:"Terms and Condition:"}),e.jsx(C,{fullWidth:!0,id:"customerAddress",name:"customerAddress",defaultValue:"I acknowledge terms and conditions.",multiline:!0,placeholder:"Enter Address"})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(T,{})}),e.jsx(r,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(D,{variant:"contained",type:"submit",children:"Submit"})})]})})})}export{dt as default};
