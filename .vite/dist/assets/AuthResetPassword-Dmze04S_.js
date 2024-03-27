import{M as W,aC as E,a5 as u,al as k,r as q,l as s,an as D,bh as T,O as z,K as l,G as m,D as L,E as M,F as O}from"./index-DRAxbQhQ.js";import{c as $,a as g}from"./index.esm-Dd68ZLmj.js";import{F as G}from"./formik.esm-GkfYgtGj.js";import{u as V}from"./useScriptRef-LwNiAwPE.js";import{s as _,a as H}from"./password-strength-Df8Nbnnk.js";import{d as K}from"./Visibility-Dm0MVkLJ.js";import{d as N}from"./VisibilityOff-RcDSkBzq.js";import{F as a}from"./FormControl-DTGQKB1F.js";import{I as P}from"./InputLabel-BTLx1hne.js";import{O as b}from"./OutlinedInput-C-PMnjYA.js";import{I as J}from"./InputAdornment-Cj0cTNRg.js";import{F as p}from"./FormHelperText-YH3vNJL3.js";const is=({...y})=>{const h=W(),I=E(),f=V(),[c,S]=u.useState(!1),[v,C]=u.useState(0),[t,F]=u.useState(),{isLoggedIn:B}=k(),R=()=>{S(!c)},A=r=>{r.preventDefault()},w=r=>{const e=_(r);C(e),F(H(e))};return q.useEffect(()=>{w("")},[]),s.jsx(G,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:$().shape({password:g().max(255).required("Password is required"),confirmPassword:g().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",(r,e)=>e.parent.password===r)}),onSubmit:async(r,{setErrors:e,setStatus:o,setSubmitting:n})=>{try{f.current&&(o({success:!0}),n(!1),D(T({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout(()=>{I(B?"/auth/login":"/login",{replace:!0})},1500))}catch(i){console.error(i),f.current&&(o({success:!1}),e({submit:i.message}),n(!1))}},children:({errors:r,handleBlur:e,handleChange:o,handleSubmit:n,isSubmitting:i,touched:d,values:x})=>s.jsxs("form",{noValidate:!0,onSubmit:n,...y,children:[s.jsxs(a,{fullWidth:!0,error:!!(d.password&&r.password),sx:{...h.typography.customInput},children:[s.jsx(P,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),s.jsx(b,{id:"outlined-adornment-password-reset",type:c?"text":"password",value:x.password,name:"password",onBlur:e,onChange:j=>{o(j),w(j.target.value)},endAdornment:s.jsx(J,{position:"end",children:s.jsx(z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:A,edge:"end",size:"large",children:c?s.jsx(K,{}):s.jsx(N,{})})}),inputProps:{}})]}),d.password&&r.password&&s.jsx(a,{fullWidth:!0,children:s.jsx(p,{error:!0,id:"standard-weight-helper-text-reset",children:r.password})}),v!==0&&s.jsx(a,{fullWidth:!0,children:s.jsx(l,{sx:{mb:2},children:s.jsxs(m,{container:!0,spacing:2,alignItems:"center",children:[s.jsx(m,{item:!0,children:s.jsx(l,{sx:{width:85,height:8,borderRadius:"7px",bgcolor:t==null?void 0:t.color}})}),s.jsx(m,{item:!0,children:s.jsx(L,{variant:"subtitle1",fontSize:"0.75rem",children:t==null?void 0:t.label})})]})})}),s.jsxs(a,{fullWidth:!0,error:!!(d.confirmPassword&&r.confirmPassword),sx:{...h.typography.customInput},children:[s.jsx(P,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),s.jsx(b,{id:"outlined-adornment-confirm-password",type:"password",value:x.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:e,onChange:o,inputProps:{}})]}),d.confirmPassword&&r.confirmPassword&&s.jsx(a,{fullWidth:!0,children:s.jsxs(p,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",r.confirmPassword," "]})}),r.submit&&s.jsx(l,{sx:{mt:3},children:s.jsx(p,{error:!0,children:r.submit})}),s.jsx(l,{sx:{mt:1},children:s.jsx(M,{children:s.jsx(O,{disableElevation:!0,disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]})})};export{is as A};
