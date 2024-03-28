import{al as N,r as m,l as e,G as t,a1 as b,S as q,E as D,F as E,a4 as _,D as f,P as v,M as W,a5 as F,$ as R,aF as z,T as L,aG as T,L as S,K as M}from"./index-aYNdDFsw.js";import{S as A}from"./swal-f1uanR0_.js";import{F as I,a as G}from"./formik.esm-BnGHO-0j.js";import{c as U,a as u,b as O}from"./index.esm-Cs06t5W7.js";import"./SubCard-DNvCAQ00.js";import{T as d}from"./TextField-DGRzrz84.js";import{b as V,a as J}from"./branches-DNXF9m6l.js";import{M as $}from"./MenuItem-BtCOIvr_.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";import"./FormControl-Dj_1sEpm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-taUurEu1.js";import"./FormLabel-CLieAm2i.js";import"./Select-DVXOMGOZ.js";import"./Menu-BcGYJvIj.js";import"./InputBase-DT8iEGhH.js";import"./OutlinedInput-CX89FYVG.js";import"./FormHelperText-C1AdVjvj.js";const H=new URLSearchParams(window.location.search);H.get("id");const K=()=>{const{user:n}=N(),[o,i]=m.useState(null),[h,l]=m.useState(!1),p=U().shape({full_name:u().required("Name is required"),email:u().email("Invalid email address").required("Email is required"),contact_number:u().matches(/^[0-9]{10}$/,"Invalid phone number").required("Phone number is required")});m.useEffect(()=>{(async()=>{try{const s=await(await fetch(_.apiUrl+"api/referral/referees/"+n._id,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.token}`}})).json();i(s),console.log("User:",s)}catch(a){console.error("Error:",a)}})()},[n]);const x=A.mixin({toast:!0,position:"bottom-end",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0}),g=async r=>{try{l(!0);const s=await(await fetch(_.apiUrl+"api/referral/update-referee/"+n._id,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.token}`},body:JSON.stringify(r)})).json();console.log("Success:",s),x.fire({icon:"success",title:"Success",text:"Account details updated successfully"}),l(!1)}catch(a){console.error("Error:",a),x.fire({icon:"error",title:"Error",text:"An error occurred while updating account details"}),l(!1)}};return o?e.jsx(t,{container:!0,spacing:b,children:e.jsx(t,{item:!0,xs:12,children:e.jsx(I,{initialValues:o,validationSchema:p,onSubmit:g,children:r=>e.jsx("form",{onSubmit:r.handleSubmit,children:e.jsxs(t,{container:!0,spacing:b,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(d,{style:{marginTop:"5px"},fullWidth:!0,margin:"normal",label:"Full Name",name:"full_name",type:"text",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.full_name,error:r.touched.full_name&&!!r.errors.full_name,helperText:r.touched.full_name&&r.errors.full_name})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(d,{style:{marginTop:"-10px"},fullWidth:!0,label:"Email",margin:"normal",name:"email",disabled:!0,value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.email&&!!r.errors.email,helperText:r.touched.email&&r.errors.email,variant:"outlined"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(d,{style:{marginTop:"-10px"},fullWidth:!0,label:"Contact Number",margin:"normal",name:"contact_number",disabled:!0,value:r.values.contact_number,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.contact_number&&!!r.errors.contact_number,helperText:r.touched.contact_number&&r.errors.contact_number,variant:"outlined"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(q,{direction:"row",style:{marginTop:"-10px"},children:e.jsx(D,{children:e.jsx(E,{type:"submit",variant:"contained",disabled:h,children:"Change Details"})})})})]})})})})}):e.jsx("div",{children:"Loading..."})},Q=new URLSearchParams(window.location.search);Q.get("id");const X=()=>{const{user:n}=N(),[o,i]=m.useState(null),[h,l]=m.useState(!1),p=U().shape({account_name:u().required("Account name is required"),account_number:u().required("Account number is required"),bank_name:u().required("Bank name is required"),branch:u().required("Branch is required"),NIC:u().required("NIC is required")});m.useEffect(()=>{(async()=>{try{const s=await(await fetch(_.apiUrl+"api/referral/referees/"+n._id,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.token}`}})).json();i(s),console.log("User:",s)}catch(a){console.error("Error:",a)}})()},[n]);const x=A.mixin({toast:!0,position:"bottom-end",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0}),g=async r=>{try{l(!0);const s=await(await fetch(_.apiUrl+"api/referral/update-bank-details/"+n._id,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.token}`},body:JSON.stringify(r)})).json();console.log("Success:",s),x.fire({icon:"success",title:"Success",text:"Account details updated successfully"}),l(!1)}catch(a){console.error("Error:",a),x.fire({icon:"error",title:"Error",text:"An error occurred while updating account details"}),l(!1)}};return o?e.jsxs(t,{container:!0,spacing:b,children:[e.jsx(t,{item:!0,sm:6,md:4}),e.jsx(t,{item:!0,sm:6,md:12,children:e.jsx(I,{initialValues:o,validationSchema:p,onSubmit:g,children:r=>e.jsx(G,{children:e.jsxs(t,{container:!0,style:{marginTop:"-60px"},spacing:b,children:[e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(d,{fullWidth:!0,label:"Account Name",margin:"normal",name:"account_name",value:r.values.account_name,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.account_name&&!!r.errors.account_name,helperText:r.touched.account_name&&r.errors.account_name,variant:"outlined"})}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(d,{fullWidth:!0,label:"Account Number",margin:"normal",name:"account_number",value:r.values.account_number,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.account_number&&!!r.errors.account_number,helperText:r.touched.account_number&&r.errors.account_number,variant:"outlined"})}),e.jsx(t,{item:!0,xs:12,md:6,style:{marginTop:"-25px"},children:e.jsx(d,{fullWidth:!0,select:!0,label:"Bank Name",margin:"normal",name:"bank_name",value:r.values.bank_name,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.bank_name&&!!r.errors.bank_name,helperText:r.touched.bank_name&&r.errors.bank_name,variant:"outlined",children:V.slice().sort((a,s)=>a.ProductParticipation.localeCompare(s.ProductParticipation)).map(a=>e.jsx($,{value:a.BankName,children:a.ProductParticipation},a.BankName))})}),e.jsx(t,{item:!0,xs:12,md:6,style:{marginTop:"-25px"},children:e.jsx(d,{fullWidth:!0,select:!0,label:"Branch",margin:"normal",name:"branch",value:r.values.branch,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.branch&&!!r.errors.branch,helperText:r.touched.branch&&r.errors.branch,variant:"outlined",children:J.filter(a=>a.BankCode===r.values.bank_name).slice().sort((a,s)=>a.BranchName.localeCompare(s.BranchName)).map(a=>e.jsx($,{value:a.BranchName,children:a.BranchName},a.BranchCode))})}),e.jsx(t,{item:!0,xs:12,md:6,style:{marginTop:"-25px"},children:e.jsx(d,{fullWidth:!0,label:"NIC",margin:"normal",name:"NIC",value:r.values.NIC,onChange:r.handleChange,onBlur:r.handleBlur,error:r.touched.NIC&&!!r.errors.NIC,helperText:r.touched.NIC&&r.errors.NIC,variant:"outlined"})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(q,{direction:"row",style:{marginTop:"-10px"},children:e.jsx(D,{children:e.jsx(E,{type:"submit",variant:"contained",disabled:h,children:"Update Bank Details"})})})})]})})})})]}):e.jsx("div",{children:"Loading..."})},Y=()=>{const[n,o]=m.useState(!1),{user:i}=N(),[h,l]=m.useState(!1),[p,x]=m.useState({}),g=A.mixin({toast:!0,position:"bottom-end",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0});m.useEffect(()=>{i&&x({current_password:"",password:"",confirm_password:""})},[i]);const r=async(a,{resetForm:s})=>{l(!0);const{current_password:j,confirm_password:y}=a,B=i._id;console.log("userID:",B),console.log("current_password:",j),console.log("confirm_password:",y);try{const c=await fetch(_.apiUrl+"api/referral/update-referee-password",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.token}`},body:JSON.stringify({current_password:j,confirm_password:y,userID:B})});if(!c.ok){const w=await c.json();throw new Error(w.error)}console.log("Password updated successfully"),g.fire({icon:"success",title:"Success",text:"Password updated successfully"}),s(),l(!1),o(!0)}catch(c){console.error("Error updating password:",c),g.fire({icon:"error",title:"Error",text:c.message}),l(!1)}};return e.jsx(t,{container:!0,spacing:b,children:e.jsx(t,{item:!0,sm:6,md:12,children:e.jsx(t,{container:!0,spacing:b,children:e.jsx(t,{item:!0,xs:12,children:e.jsx(I,{enableReinitialize:!0,initialValues:{current_password:p.current_password,password:p.password,confirm_password:p.confirm_password},validationSchema:U().shape({current_password:u().required("Current Password is required"),password:u().min(5,"Password must be at least 5 characters").required("Password is required"),confirm_password:u().oneOf([O("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:r,children:({errors:a,handleBlur:s,handleChange:j,handleSubmit:y,isSubmitting:B,touched:c,values:w})=>e.jsx("form",{onSubmit:y,children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"center",children:[e.jsxs(t,{container:!0,spacing:b,children:[e.jsxs(t,{item:!0,xs:12,style:{marginTop:"0px"},children:[e.jsx(f,{variant:"h5",component:"h5",children:"Current Password"}),e.jsx(d,{fullWidth:!0,type:"password",margin:"normal",name:"current_password",onBlur:s,onChange:j,value:w.current_password,variant:"outlined",error:!!(c.current_password&&a.current_password),helperText:c.current_password&&a.current_password})]}),e.jsxs(t,{item:!0,xs:12,sm:6,style:{marginTop:"-5px"},children:[e.jsx(f,{variant:"h5",component:"h5",children:"New Password"}),e.jsx(d,{fullWidth:!0,type:"password",margin:"normal",name:"password",onBlur:s,onChange:j,value:w.password,variant:"outlined",error:!!(c.password&&a.password),helperText:c.password&&a.password})]}),e.jsxs(t,{item:!0,xs:12,sm:6,children:[e.jsx(f,{variant:"h5",component:"h5",style:{marginTop:"-5px"},children:"Confirm Password"}),e.jsx(d,{fullWidth:!0,type:"password",margin:"normal",name:"confirm_password",onBlur:s,onChange:j,value:w.confirm_password,variant:"outlined",error:!!(c.confirm_password&&a.confirm_password),helperText:c.confirm_password&&a.confirm_password})]})]}),e.jsx(t,{item:!0,xs:12,children:e.jsx(q,{direction:"row",style:{marginTop:"15px"},children:e.jsx(D,{children:e.jsx(E,{type:"submit",variant:"contained",color:"primary",disabled:B,children:"Save Password"})})})})]})})})})})})})};function C({children:n,value:o,index:i,...h}){return e.jsx("div",{role:"tabpanel",hidden:o!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...h,children:o===i&&e.jsx(M,{sx:{p:0},children:n})})}C.propTypes={children:v.node,index:v.any.isRequired,value:v.any.isRequired};function P(n){return{id:`simple-tab-${n}`,"aria-controls":`simple-tabpanel-${n}`}}const je=()=>{const n=W(),[o,i]=F.useState(0),h=(l,p)=>{i(p)};return e.jsx(R,{style:{marginTop:20},title:"Account",children:e.jsxs("div",{children:[e.jsxs(z,{value:o,indicatorColor:"primary",onChange:h,sx:{mb:3,minHeight:"auto","& button":{minWidth:100},"& a":{minHeight:"auto",minWidth:10,py:1.5,px:1,mr:2.25,color:n.palette.mode===L.DARK?"grey.600":"grey.900"},"& a.Mui-selected":{color:"primary.main"}},"aria-label":"simple tabs example",variant:"scrollable",children:[e.jsx(T,{component:S,to:"#",label:"Profile",...P(0)}),e.jsx(T,{component:S,to:"#",label:"Bank Details",...P(0)}),e.jsx(T,{component:S,to:"#",label:"password",...P(2)})]}),e.jsx(C,{value:o,index:0,children:e.jsx(K,{})}),e.jsx(C,{value:o,index:1,children:e.jsx(X,{})}),e.jsx(C,{value:o,index:2,children:e.jsx(Y,{})})]})})};export{je as default};
