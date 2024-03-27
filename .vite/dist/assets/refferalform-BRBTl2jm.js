import{x as _,y as g,l as e,M as L,V as U,r as x,$ as J,G as i,D as l,ae as G,K as X,ab as K,F as Q,a4 as h}from"./index-DRAxbQhQ.js";import{d as Y}from"./DateRange-yiouSo3_.js";import{u as Z,a as ee}from"./useLogout-CQkkUGAe.js";import{d as te}from"./Person-DZ1hqw_I.js";import{c as ne,a as p}from"./index.esm-Dd68ZLmj.js";import{F as re}from"./formik.esm-GkfYgtGj.js";import{S as ae}from"./swal-D3ymrZ7_.js";import{T as u}from"./TextField-C23CKz-E.js";import{I as f}from"./InputAdornment-Cj0cTNRg.js";import{C as oe}from"./Checkbox-DF2srxXR.js";import{F as ie}from"./FormHelperText-YH3vNJL3.js";import{C as se}from"./CardActions-DgWdTrRU.js";import{C as ce}from"./CircularProgress-BO7Tj77P.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";import"./FormControl-DTGQKB1F.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BTLx1hne.js";import"./FormLabel-D7QhHnPX.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./InputBase-C10xFuq9.js";import"./OutlinedInput-C-PMnjYA.js";var T={},le=g;Object.defineProperty(T,"__esModule",{value:!0});var A=T.default=void 0,me=le(_()),de=e;A=T.default=(0,me.default)((0,de.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");var w={},ue=g;Object.defineProperty(w,"__esModule",{value:!0});var E=w.default=void 0,he=ue(_()),pe=e;E=w.default=(0,he.default)((0,pe.jsx)("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"}),"Call");var B={},fe=g;Object.defineProperty(B,"__esModule",{value:!0});var k=B.default=void 0,xe=fe(_()),je=e;k=B.default=(0,xe.default)((0,je.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment");var $={},_e=g;Object.defineProperty($,"__esModule",{value:!0});var z=$.default=void 0,ge=_e(_()),be=e;z=$.default=(0,ge.default)((0,be.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 6h1v12H4zm16 12h-1V6h1z"}),"WidthFull");function Ue(){const N=L(),{user:c}=Z(),{logout:I}=ee(),q=U(N.breakpoints.down("md")),[R,M]=x.useState([]),[b,O]=x.useState([]);x.useState("");const F=new Date().toISOString().split("T")[0],[m]=x.useState({name:"",nic:"",dob:"",email:"",contact_no:"",address:"",course_name:"",branch_name:""}),j=ae.mixin({toast:!0,position:"bottom-end",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:3500,timerProgressBar:!0}),W=async()=>{try{const r=await(await fetch(h.apiUrl+"api/courses",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`}})).json();r&&r.length>0&&M(r)}catch(t){console.log(t)}};console.log(R);const V=async()=>{try{const r=await(await fetch(h.apiUrl+"api/branches",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`}})).json();r&&r.length>0&&O(r)}catch(t){console.log(t)}};console.log(b),x.useEffect(()=>{W(),V(),console.log(F),console.log(c)},[]);const H=async(t,{setSubmitting:r,setFieldError:s,setErrors:D,setStatus:y})=>{const n={name:t.name,nic:t.nic,dob:t.dob,email:t.email,contact_no:t.contact_no,address:t.address,course_name:t.course_name,branch_name:t.branch_name,referee_id:c._id,comment:t.comment};try{const a=await fetch(h.apiUrl+"api/referral/checkForDuplicate",{method:"POST",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify({nic:t.nic,course_name:t.course_name,branch_name:t.branch_name})});if(!a.ok)throw new Error("Error checking duplicates");const o=await a.json();if(console.log("Check Refferal",o.isDuplicate),o.isDuplicate){console.log("Refferal with the same student's NIC, course, and branch already exists."),j.fire({icon:"error",title:"Refferal with the same student's NIC, course, and branch already exists."});return}const v=await fetch(h.apiUrl+"api/referral/checkDuplicateStudent",{method:"POST",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify({nic:t.nic,email:t.email,contact_no:t.contact_no})});if(!v.ok){console.error("Error checking existing student",v.statusText);return}const S=await v.json();if(console.log("Check referral student",S.isDuplicateStudent),S.isDuplicateStudent){const d=await fetch(h.apiUrl+"api/referral/checkDuplicateStudentLead",{method:"POST",headers:{Authorization:`Bearer ${c.token}`,"Content-Type":"application/json"},body:JSON.stringify({email:t.email})});if(!d.ok){console.error("Error checking existing student",d.statusText);return}const C=await d.json();console.log("Check Student",C.isDuplicateStudent);const P=await fetch(h.apiUrl+"api/referral/addReferralWithExistingStudent",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`},body:JSON.stringify({...n,student_id:S.student._id})});if(!P.ok){console.error("Error adding lead with existing student:",P.statusText);return}console.log("Refferal added successfully!"),j.fire({icon:"success",title:"Refferal added successfully!"})}else{const d=await fetch(h.apiUrl+"api/referral/add-new-referral",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c.token}`},body:JSON.stringify(n)});if(!d.ok){if(d.status===401&&(console.error("Unauthorized access. Logging out."),I()),d.status===500){console.error("Internal Server Error."),I();return}return}console.log("Request complete.");const C=await d.json();console.log("Server response:",C),j.fire({icon:"success",title:"New Refferal added successfully!"})}}catch(a){console.error("Error submitting form:",a),j.fire({icon:"error",title:"Error submitting form"}),s("submit",a.message)}finally{r(!1)}};return e.jsx(e.Fragment,{children:e.jsx(J,{title:"Add New Referral",children:e.jsx(re,{initialValues:{name:m.name||"",nic:m.nic||"",dob:m.dob||"",email:m.email||"",contact_no:m.contact_no||"",address:m.address||"",course_name:m.course_name||"",branch_name:m.branch_name||"",comment:"",checked:!1},validationSchema:ne().shape({name:p().required("Name is required"),nic:p().matches(/^(?:\d{9}[vVxX]|\d{12})$/,"NIC should either contain 9 digits with an optional last character as a letter (v/V/x/X) or have exactly 12 digits"),contact_no:p().matches(/^\+?\d{10,12}$/,"Contact No should be 10 to 12 digits with an optional leading + sign").required("Contact No is required"),email:p().email("Invalid email format"),course_name:p().required("Course is required"),branch_name:p().required("Branch is required"),comment:p().max(255,"Maximum 255 characters allowed")}),onSubmit:H,children:({errors:t,handleBlur:r,handleChange:s,handleSubmit:D,isSubmitting:y,touched:n,values:a})=>e.jsx("form",{onSubmit:D,children:e.jsxs(i,{container:!0,direction:"column",justifyContent:"center",children:[e.jsxs(i,{container:!0,sx:{p:3},style:{marginTop:"-50px"},spacing:q?0:2,children:[e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Name"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"name",type:"text",onChange:s,onBlur:r,value:a.name,error:!!(n.name&&t.name),helperText:n.name&&t.name,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(te,{})})}})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"NIC"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"nic",type:"text",onChange:s,onBlur:r,value:a.nic,error:!!(n.nic&&t.nic),helperText:n.nic&&t.nic,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(z,{})})}})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Date of birth"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"dob",type:"date",onChange:s,value:a.dob,onBlur:r,error:!!(n.dob&&t.dob),helperText:n.dob&&t.dob,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(Y,{})})}})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Email"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"email",type:"email",onBlur:r,onChange:s,value:a.email,error:!!(n.email&&t.email),helperText:n.email&&t.email,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(A,{})})}})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Contact Number"}),e.jsx(u,{fullWidth:!0,margin:"normal",name:"contact_no",type:"text",onChange:s,onBlur:r,value:a.contact_no,error:!!(n.contact_no&&t.contact_no),helperText:n.contact_no&&t.contact_no,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(E,{})})}})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Select Branch"}),e.jsxs(u,{fullWidth:!0,margin:"normal",name:"branch_name",select:!0,onChange:s,onBlur:r,SelectProps:{native:!0},value:a.branch_name,error:!!(n.branch_name&&t.branch_name),helperText:n.branch_name&&t.branch_name,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(k,{})})},children:[e.jsx("option",{value:"",disabled:!0,children:"Select branch"}),b.length>0&&b.filter(o=>o.name==="Main Branch - Padukka").map(o=>e.jsx("option",{value:o.name,children:o.name},o._id))]})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Select Course"}),e.jsxs(u,{fullWidth:!0,margin:"normal",name:"course_name",select:!0,onChange:s,onBlur:r,SelectProps:{native:!0},value:a.course_name,error:!!(n.course_name&&t.course_name),helperText:n.course_name&&t.course_name,InputProps:{startAdornment:e.jsx(f,{position:"start",children:e.jsx(k,{})})},children:[e.jsx("option",{value:"",disabled:!0,children:"Select course"}),R.map(o=>e.jsx("option",{value:o.name,children:o.name},o._id))]})]}),e.jsxs(i,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h5",component:"h5",children:"Comments"}),e.jsx(u,{multiline:!0,rows:2,fullWidth:!0,margin:"normal",name:"comment",placeholder:"Enter your comment here...",onChange:s,onBlur:r,value:a.comment,error:!!(n.comment&&t.comment),helperText:n.comment&&t.comment,InputProps:{style:{borderRadius:"8px",resize:"none",boxSizing:"border-box",outline:"none",overflowY:"auto"}}})]}),e.jsx(i,{container:!0,alignItems:"center",justifyContent:"flex-end",children:e.jsx(i,{item:!0,children:e.jsx(G,{control:e.jsx(oe,{checked:a.checked,onChange:o=>{s(o),setChecked(o.target.checked)},name:"checked",color:"primary"}),label:e.jsx(l,{variant:"subtitle1",children:"I would like the student counsellor to contact the student"}),error:n.checked&&!!t.checked,helperText:n.checked&&t.checked?t.checked:null})})}),t.submit&&e.jsx(X,{sx:{mt:3},children:e.jsx(ie,{error:!0,children:t.submit})})]}),e.jsx(K,{sx:{mt:-3,mb:2}}),e.jsx(se,{sx:{justifyContent:"flex-end"},children:e.jsx(Q,{variant:"contained",type:"submit",sx:{mt:-3},disabled:y,endIcon:y?e.jsx(ce,{size:20,color:"inherit"}):null,children:"Add Referral"})})]})})})})})}export{Ue as default};