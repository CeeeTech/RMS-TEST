import{P as q,M as J,al as U,aC as V,a5 as i,l as e,cR as W,F as w,O as M,G as u,ae as $,D as z,L as G,K as j,E as H,a4 as K}from"./index-aYNdDFsw.js";import{S as b}from"./swal-f1uanR0_.js";import{c as Q,a as y}from"./index.esm-Cs06t5W7.js";import{F as X}from"./formik.esm-BnGHO-0j.js";import{u as Y}from"./useScriptRef-9vKFeFKi.js";import{d as Z}from"./Visibility-CFeX1KQY.js";import{d as ee}from"./VisibilityOff-DfzLwkoA.js";import{F as C}from"./FormControl-Dj_1sEpm.js";import{I as P}from"./InputLabel-taUurEu1.js";import{O as S}from"./OutlinedInput-CX89FYVG.js";import{F as p}from"./FormHelperText-C1AdVjvj.js";import{I as oe}from"./InputAdornment-P1yKTSAa.js";import{C as se}from"./Checkbox-BjGpkq_j.js";const te=({loginProp:v,...I})=>{const f=J(),c=b.mixin({toast:!0,position:"top-start",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0});b.mixin({toast:!0,position:"top-start",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:5500,timerProgressBar:!0});const{login:_}=U(),h=Y(),k=V(),[F,B]=i.useState(!0),[T,x]=i.useState(!1),[R,n]=i.useState(!1),[s,N]=i.useState({}),[m,A]=i.useState(!1),E=()=>{A(!m)},L=o=>{o.preventDefault()},O=async()=>{if(n(!0),console.log(s),localStorage.setItem("tempUser",JSON.stringify({email:s.email,_id:s._id,contact_number:s.contact_number,full_name:s.full_name})),s._id,!s.contact_number){c.fire({icon:"error",title:"No Phone Number Found"}),console.error("No phone number found"),n(!1);return}const o=await fetch(K.apiUrl+"api/referral/resend-verification-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:s.contact_number,id:s._id})});if(o.ok)c.fire({icon:"success",title:"Verification Code Resent Successfully"}),k("/register/code-verification"),n(!1),x(!1);else{n(!1);const r=await o.json();throw new Error(r.error)}};return e.jsx(X,{initialValues:{email:"",password:"",submit:null},validationSchema:Q().shape({email:y().max(255).required("Email/ Phone Number is required"),password:y().max(255).required("Password is required")}),onSubmit:async(o,{setErrors:r,setStatus:a,setSubmitting:l})=>{try{const t=await _(o);t.type=="added_not_verified"&&(x(!0),N(t.json.payload),console.log(t.json.payload)),h.current&&(a({success:!0}),l(!1))}catch(t){c.fire({icon:"error",title:"Invalid Email or Password"}),console.error(t),h.current&&(a({success:!1}),r({submit:t.message}),l(!1))}},children:({errors:o,handleBlur:r,handleChange:a,handleSubmit:l,isSubmitting:t,touched:d,values:g})=>e.jsxs("form",{noValidate:!0,onSubmit:l,...I,children:[T&&e.jsxs(W,{variant:"filled",severity:"error",children:["The user was registered but not verified. Please"," ",e.jsx(w,{onClick:O,style:{color:"#9ec8ff",marginRight:"-3px",marginLeft:"-8px"},children:"Click Here"}),"to resend code and verify."]}),e.jsxs(C,{fullWidth:!0,error:!!(d.email&&o.email),sx:{...f.typography.customInput},children:[e.jsx(P,{htmlFor:"outlined-adornment-email-login",children:"Email Address/ Phone Number"}),e.jsx(S,{id:"outlined-adornment-email-login",type:"email",value:g.email,name:"email",onBlur:r,onChange:a,inputProps:{}}),d.email&&o.email&&e.jsx(p,{error:!0,id:"standard-weight-helper-text-email-login",children:o.email})]}),e.jsxs(C,{fullWidth:!0,error:!!(d.password&&o.password),sx:{...f.typography.customInput},children:[e.jsx(P,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(S,{id:"outlined-adornment-password-login",type:m?"text":"password",value:g.password,name:"password",onBlur:r,onChange:a,endAdornment:e.jsx(oe,{position:"end",children:e.jsx(M,{"aria-label":"toggle password visibility",onClick:E,onMouseDown:L,edge:"end",size:"large",children:m?e.jsx(Z,{}):e.jsx(ee,{})})}),inputProps:{},label:"Password"}),d.password&&o.password&&e.jsx(p,{error:!0,id:"standard-weight-helper-text-password-login",children:o.password})]}),e.jsxs(u,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(u,{item:!0,children:e.jsx($,{control:e.jsx(se,{checked:F,onChange:D=>B(D.target.checked),name:"checked",color:"primary"}),label:"Keep me logged in"})}),e.jsx(u,{item:!0,children:e.jsx(z,{variant:"subtitle1",component:G,to:"/forgot",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})})]}),o.submit&&e.jsx(j,{sx:{mt:3},children:e.jsx(p,{error:!0,children:o.submit})}),e.jsx(j,{sx:{mt:2},children:e.jsx(H,{children:e.jsx(w,{color:"secondary",disabled:t||R,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In"})})})]})})};te.propTypes={loginProp:q.number};export{te as J};
