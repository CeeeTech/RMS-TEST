import{M as d,bf as f,aC as b,al as x,l as e,a4 as g,K as u,E as j,F as S}from"./index-aYNdDFsw.js";import{S as w}from"./swal-f1uanR0_.js";import{c as y,a as F}from"./index.esm-Cs06t5W7.js";import{F as P}from"./formik.esm-BnGHO-0j.js";import{u as v}from"./useScriptRef-9vKFeFKi.js";import{F as B}from"./FormControl-Dj_1sEpm.js";import{I as C}from"./InputLabel-taUurEu1.js";import{O as E}from"./OutlinedInput-CX89FYVG.js";import{F as m}from"./FormHelperText-C1AdVjvj.js";const R=({...p})=>{const h=d();v(),f();const c=b(),s=w.mixin({toast:!0,position:"top-start",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0});return x(),e.jsx(P,{initialValues:{phone:"",submit:null},validationSchema:y().shape({phone:F().matches(/^[0-9]{10}$/,"Must be a valid phone number").required("Phone number required")}),onSubmit:async(o,{setErrors:a,setStatus:i,setSubmitting:l})=>{try{const t=o.phone;if(!t){s.fire({icon:"error",title:"No Phone Number Found"}),console.error("No phone number found");return}const r=await fetch(g.apiUrl+"api/referral/request-reset-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:t})});if(r.ok){const n=await r.json();console.log(n),s.fire({icon:"success",title:"Temporary Password Sent Successfully"}),c("/login")}else{const n=await r.json();throw new Error(n.error)}}catch(t){console.error("Error sending verification code:",t.message),s.fire({icon:"error",title:t.message})}},children:({errors:o,handleBlur:a,handleChange:i,handleSubmit:l,isSubmitting:t,touched:r,values:n})=>e.jsxs("form",{noValidate:!0,onSubmit:l,...p,children:[e.jsxs(B,{fullWidth:!0,error:!!(r.phone&&o.phone),sx:{...h.typography.customInput},children:[e.jsx(C,{htmlFor:"outlined-adornment-phone-forgot",children:"Phone number"}),e.jsx(E,{id:"outlined-adornment-phone-forgot",type:"tel",value:n.phone,name:"phone",onBlur:a,onChange:i,label:"Phone number",inputProps:{}}),r.phone&&o.phone&&e.jsx(m,{error:!0,id:"standard-weight-helper-text-phone-forgot",children:o.phone})]}),o.submit&&e.jsx(u,{sx:{mt:3},children:e.jsx(m,{error:!0,children:o.submit})}),e.jsx(u,{sx:{mt:2},children:e.jsx(j,{children:e.jsx(S,{disableElevation:!0,disabled:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send"})})})]})})};export{R as A};
