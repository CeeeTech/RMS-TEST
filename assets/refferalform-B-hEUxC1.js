import{x as _,y as g,l as e,M as J,V as G,r as x,$ as X,G as s,D as l,ae as K,K as Q,ab as Y,F as Z,a4 as h}from"./index-aYNdDFsw.js";import{d as ee}from"./DateRange-WSf_YBba.js";import{u as te,a as ne}from"./useLogout-DNbzExct.js";import{d as re}from"./Person-DKZLfQ8p.js";import{c as oe,a as p}from"./index.esm-Cs06t5W7.js";import{F as ae}from"./formik.esm-BnGHO-0j.js";import{S as se}from"./swal-f1uanR0_.js";import{T as u}from"./TextField-DGRzrz84.js";import{I as f}from"./InputAdornment-P1yKTSAa.js";import{C as ie}from"./Checkbox-BjGpkq_j.js";import{F as ce}from"./FormHelperText-C1AdVjvj.js";import{C as le}from"./CardActions-BixJOMBP.js";import{C as me}from"./CircularProgress-C1hh8GtE.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";import"./FormControl-Dj_1sEpm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-taUurEu1.js";import"./FormLabel-CLieAm2i.js";import"./Select-DVXOMGOZ.js";import"./Menu-BcGYJvIj.js";import"./InputBase-DT8iEGhH.js";import"./OutlinedInput-CX89FYVG.js";var T={},de=g;Object.defineProperty(T,"__esModule",{value:!0});var A=T.default=void 0,ue=de(_()),he=e;A=T.default=(0,ue.default)((0,he.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");var w={},pe=g;Object.defineProperty(w,"__esModule",{value:!0});var E=w.default=void 0,fe=pe(_()),xe=e;E=w.default=(0,fe.default)((0,xe.jsx)("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"}),"Call");var B={},je=g;Object.defineProperty(B,"__esModule",{value:!0});var k=B.default=void 0,_e=je(_()),ge=e;k=B.default=(0,_e.default)((0,ge.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment");var $={},be=g;Object.defineProperty($,"__esModule",{value:!0});var z=$.default=void 0,ye=be(_()),ve=e;z=$.default=(0,ye.default)((0,ve.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 6h1v12H4zm16 12h-1V6h1z"}),"WidthFull");function Ge(){const N=J(),{user:c}=te(),{logout:R}=ne(),q=G(N.breakpoints.down("md")),[I,M]=x.useState([]),[b,O]=x.useState([]),[L,F]=x.useState(!1),W=new Date().toISOString().split("T")[0],[m]=x.useState({name:"",nic:"",dob:"",email:"",contact_no:"",address:"",course_name:"",branch_name:""}),j=se.mixin({toast:!0,position:"bottom-end",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0}),V=async()=>{try{const r=await(await fetch(h.apiUrl+"api/courses",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`}})).json();r&&r.length>0&&M(r)}catch(t){console.log(t)}};console.log(I);const H=async()=>{try{const r=await(await fetch(h.apiUrl+"api/branches",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`}})).json();r&&r.length>0&&O(r)}catch(t){console.log(t)}};console.log(b),x.useEffect(()=>{V(),H(),console.log(W),console.log(c)},[]);const U=async(t,{setSubmitting:r,setFieldError:i,setErrors:D,setStatus:y})=>{console.log(L);const n={name:t.name,nic:t.nic,dob:t.dob,email:t.email,contact_no:t.contact_no,address:t.address,course_name:t.course_name,branch_name:t.branch_name,referee_id:c._id,comment:t.comment};try{const o=await fetch(h.apiUrl+"api/referral/checkForDuplicate",{method:"POST",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify({courseName:t.course_name,branchName:t.branch_name,studentContact_no:t.contact_no})});if(!o.ok)throw new Error("Error checking duplicates");const a=await o.json();if(console.log("Check Referral",a.isDuplicate),a.isDuplicate){console.log("Referral with the same student's contact number, course, and branch already exists."),j.fire({icon:"error",title:"Referral with the same student's contact number, course, and branch already exists."});return}const v=await fetch(h.apiUrl+"api/referral/checkDuplicateStudent",{method:"POST",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify({contact_no:t.contact_no})});if(!v.ok){console.error("Error checking existing student",v.statusText);return}const S=await v.json();if(console.log("Check referral student",S.isDuplicateStudent),S.isDuplicateStudent){const d=await fetch(h.apiUrl+"api/referral/checkDuplicateStudentLead",{method:"POST",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify({contact_no:t.contact_no})});if(!d.ok){console.error("Error checking existing student",d.statusText);return}const C=await d.json();console.log("Check Student",C.isDuplicateStudent);const P=await fetch(h.apiUrl+"api/referral/addReferralWithExistingStudent",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`},body:JSON.stringify({...n,student_id:S.student._id})});if(!P.ok){console.error("Error adding lead with existing student:",P.statusText);return}console.log("Refferal added successfully!"),j.fire({icon:"success",title:"Refferal added successfully!"})}else{const d=await fetch(h.apiUrl+"api/referral/add-new-referral",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`},body:JSON.stringify(n)});if(!d.ok){if(d.status===401&&(console.error("Unauthorized access. Logging out."),R()),d.status===500){console.error("Internal Server Error."),R();return}return}console.log("Request complete.");const C=await d.json();console.log("Server response:",C),j.fire({icon:"success",title:"New Refferal added successfully!"})}}catch(o){console.error("Error submitting form:",o),j.fire({icon:"error",title:"Error submitting form"}),i("submit",o.message)}finally{r(!1)}};return e.jsx(e.Fragment,{children:e.jsx(X,{title:"Add New Referral",children:e.jsx(ae,{initialValues:{name:m.name||"",nic:m.nic||"",dob:m.dob||"",email:m.email||"",contact_no:m.contact_no||"",address:m.address||"",course_name:m.course_name||"",branch_name:m.branch_name||"",comment:"",checked:!1},validationSchema:oe().shape({name:p().required("Name is required"),nic:p().matches(/^(?:\d{9}[vVxX]|\d{12})$/,"NIC should either contain 9 digits with an optional last character as a letter (v/V/x/X) or have exactly 12 digits"),contact_no:p().matches(/^\+?\d{10,12}$/,"Contact No should be 10 to 12 digits with an optional leading + sign").required("Contact No is required"),email:p().email("Invalid email format"),course_name:p().required("Course is required"),branch_name:p().required("Branch is required"),comment:p().max(255,"Maximum 255 characters allowed")}),onSubmit:U,children:({errors:t,handleBlur:r,handleChange:i,handleSubmit:D,isSubmitting:y,touched:n,values:o})=>e.jsx("form",{onSubmit:D,children:e.jsxs(s,{container:!0,direction:"column",justifyContent:"center",children:[e.jsxs(s,{container:!0,sx:{p:3},style:{marginTop:"-50px"},spacing:q?0:2,children:[e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsxs(l,{variant:"h5",component:"h5",children:["Name",e.jsx("span",{style:{color:"red",marginLeft:3},children:"*"})]}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"name",type:"text",onChange:i,onBlur:r,value:o.name,error:!!(n.name&&t.name),helperText:n.name&&t.name,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(re,{})})}})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsxs(l,{variant:"h5",component:"h5",children:["NIC",e.jsx("span",{style:{color:"red",marginLeft:3},children:"*"})]}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"nic",type:"text",onChange:i,onBlur:r,value:o.nic,error:!!(n.nic&&t.nic),helperText:n.nic&&t.nic,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(z,{})})}})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Date of birth"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"dob",type:"date",onChange:i,value:o.dob,onBlur:r,error:!!(n.dob&&t.dob),helperText:n.dob&&t.dob,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(ee,{})})}})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Email"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"email",type:"email",onBlur:r,onChange:i,value:o.email,error:!!(n.email&&t.email),helperText:n.email&&t.email,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(A,{})})}})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsxs(l,{variant:"h5",component:"h5",children:["Contact Number",e.jsx("span",{style:{color:"red",marginLeft:3},children:"*"})]}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"contact_no",type:"text",onChange:i,onBlur:r,value:o.contact_no,error:!!(n.contact_no&&t.contact_no),helperText:n.contact_no&&t.contact_no,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(E,{})})}})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsxs(l,{variant:"h5",component:"h5",children:["Select Branch",e.jsx("span",{style:{color:"red",marginLeft:3},children:"*"})]}),e.jsxs(u,{fullWidth:!0,margin:"normal",name:"branch_name",select:!0,onChange:i,onBlur:r,SelectProps:{native:!0},value:o.branch_name,error:!!(n.branch_name&&t.branch_name),helperText:n.branch_name&&t.branch_name,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(k,{})})},children:[e.jsx("option",{value:"",disabled:!0,children:"Select branch"}),b.length>0&&b.filter(a=>a.name==="Main Branch - Padukka").map(a=>e.jsx("option",{value:a.name,children:a.name},a._id))]})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsxs(l,{variant:"h5",component:"h5",children:["Select Course",e.jsx("span",{style:{color:"red",marginLeft:3},children:"*"})]}),e.jsxs(u,{fullWidth:!0,margin:"normal",name:"course_name",select:!0,onChange:i,onBlur:r,SelectProps:{native:!0},value:o.course_name,error:!!(n.course_name&&t.course_name),helperText:n.course_name&&t.course_name,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(k,{})})},children:[e.jsx("option",{value:"",disabled:!0,children:"Select course"}),I.map(a=>e.jsx("option",{value:a.name,children:a.name},a._id))]})]}),e.jsxs(s,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Comments"}),e.jsx(u,{multiline:!0,rows:2,fullWidth:!0,margin:"normal",name:"comment",placeholder:"Enter your comment here...",onChange:i,onBlur:r,value:o.comment,error:!!(n.comment&&t.comment),helperText:n.comment&&t.comment,InputProps:{style:{borderRadius:"8px",resize:"none",boxSizing:"border-box",outline:"none",overflowY:"auto"}}})]}),e.jsx(s,{container:!0,alignItems:"center",justifyContent:"flex-end",children:e.jsx(s,{item:!0,children:e.jsx(K,{control:e.jsx(ie,{checked:o.checked,onChange:a=>{i(a),F("checked",a.target.checked)},name:"checked",color:"primary"}),label:e.jsxs(l,{variant:"subtitle1",children:["I would like the student counsellor to contact the student",e.jsx("span",{style:{color:"red",marginLeft:3},children:"*"})]}),error:!!(n.checked&&t.checked),helperText:n.checked&&t.checked})})}),t.submit&&e.jsx(Q,{sx:{mt:3},children:e.jsx(ce,{error:!0,children:t.submit})})]}),e.jsx(Y,{sx:{mt:-3,mb:2}}),e.jsx(le,{sx:{justifyContent:"flex-end"},children:e.jsx(Z,{variant:"contained",type:"submit",sx:{mt:-3},disabled:y,endIcon:y?e.jsx(me,{size:20,color:"inherit"}):null,children:"Add Referral"})})]})})})})})}export{Ge as default};
