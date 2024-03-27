import{r as j,g as q,d as D,e as g,h as p,f as E,_ as V,l as e,m as z,n as _,bT as ne,di as he,ah as ae,D as l,G as a,ae as Y,a7 as se,aa as G,a5 as U,$ as oe,S as A,E as T,F as S,P as y,a1 as je}from"./index-DRAxbQhQ.js";import{T as c}from"./TextField-C23CKz-E.js";import{C as Z}from"./Checkbox-DF2srxXR.js";import{L as H}from"./ListItem-5UQNGP8M.js";import{S as ve}from"./CardSecondaryAction-DhIG1Y_S.js";import{u as ie}from"./formik.esm-GkfYgtGj.js";import{c as le,a as O}from"./index.esm-Dd68ZLmj.js";import"./FormControl-DTGQKB1F.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BTLx1hne.js";import"./FormLabel-D7QhHnPX.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./InputBase-C10xFuq9.js";import"./OutlinedInput-C-PMnjYA.js";import"./FormHelperText-YH3vNJL3.js";import"./ListItemSecondaryAction-Nz3BUvML.js";import"./Tooltip-CFImnuRV.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";const be=j.createContext({}),K=be,fe=j.createContext({}),te=fe;function ge(t){return q("MuiStep",t)}D("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Ce=["active","children","className","component","completed","disabled","expanded","index","last"],ye=t=>{const{classes:r,orientation:n,alternativeLabel:i,completed:s}=t;return _({root:["root",n,i&&"alternativeLabel",s&&"completed"]},ge,r)},Se=g("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:t})=>p({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),Ne=j.forwardRef(function(r,n){const i=E({props:r,name:"MuiStep"}),{active:s,children:o,className:d,component:m="div",completed:x,disabled:v,expanded:h=!1,index:u,last:b}=i,w=V(i,Ce),{activeStep:P,connector:C,alternativeLabel:B,orientation:W,nonLinear:R}=j.useContext(K);let[f=!1,M=!1,N=!1]=[s,x,v];P===u?f=s!==void 0?s:!0:!R&&P>u?M=x!==void 0?x:!0:!R&&P<u&&(N=v!==void 0?v:!0);const I=j.useMemo(()=>({index:u,last:b,expanded:h,icon:u+1,active:f,completed:M,disabled:N}),[u,b,h,f,M,N]),L=p({},i,{active:f,orientation:W,alternativeLabel:B,completed:M,disabled:N,expanded:h,component:m}),F=ye(L),k=e.jsxs(Se,p({as:m,className:z(F.root,d),ref:n,ownerState:L},w,{children:[C&&B&&u!==0?C:null,o]}));return e.jsx(te.Provider,{value:I,children:C&&!B&&u!==0?e.jsxs(j.Fragment,{children:[C,k]}):k})}),ce=Ne,Le=ne(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),$e=ne(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Pe(t){return q("MuiStepIcon",t)}const Be=D("MuiStepIcon",["root","active","completed","error","text"]),Q=Be;var re;const Re=["active","className","completed","error","icon"],we=t=>{const{classes:r,active:n,completed:i,error:s}=t;return _({root:["root",n&&"active",i&&"completed",s&&"error"],text:["text"]},Pe,r)},X=g(he,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,r)=>r.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${Q.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${Q.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${Q.error}`]:{color:(t.vars||t).palette.error.main}})),We=g("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,r)=>r.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),Me=j.forwardRef(function(r,n){const i=E({props:r,name:"MuiStepIcon"}),{active:s=!1,className:o,completed:d=!1,error:m=!1,icon:x}=i,v=V(i,Re),h=p({},i,{active:s,completed:d,error:m}),u=we(h);if(typeof x=="number"||typeof x=="string"){const b=z(o,u.root);return m?e.jsx(X,p({as:$e,className:b,ref:n,ownerState:h},v)):d?e.jsx(X,p({as:Le,className:b,ref:n,ownerState:h},v)):e.jsxs(X,p({className:b,ref:n,ownerState:h},v,{children:[re||(re=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(We,{className:u.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:x})]}))}return x}),Ie=Me;function Fe(t){return q("MuiStepLabel",t)}const ke=D("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),$=ke,ze=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Ae=t=>{const{classes:r,orientation:n,active:i,completed:s,error:o,disabled:d,alternativeLabel:m}=t;return _({root:["root",n,o&&"error",d&&"disabled",m&&"alternativeLabel"],label:["label",i&&"active",s&&"completed",o&&"error",d&&"disabled",m&&"alternativeLabel"],iconContainer:["iconContainer",i&&"active",s&&"completed",o&&"error",d&&"disabled",m&&"alternativeLabel"],labelContainer:["labelContainer",m&&"alternativeLabel"]},Fe,r)},Te=g("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation]]}})(({ownerState:t})=>p({display:"flex",alignItems:"center",[`&.${$.alternativeLabel}`]:{flexDirection:"column"},[`&.${$.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ue=g("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,r)=>r.label})(({theme:t})=>p({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${$.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${$.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${$.alternativeLabel}`]:{marginTop:16},[`&.${$.error}`]:{color:(t.vars||t).palette.error.main}})),qe=g("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,r)=>r.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${$.alternativeLabel}`]:{paddingRight:0}})),De=g("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,r)=>r.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${$.alternativeLabel}`]:{textAlign:"center"}})),de=j.forwardRef(function(r,n){var i;const s=E({props:r,name:"MuiStepLabel"}),{children:o,className:d,componentsProps:m={},error:x=!1,icon:v,optional:h,slotProps:u={},StepIconComponent:b,StepIconProps:w}=s,P=V(s,ze),{alternativeLabel:C,orientation:B}=j.useContext(K),{active:W,disabled:R,completed:f,icon:M}=j.useContext(te),N=v||M;let I=b;N&&!I&&(I=Ie);const L=p({},s,{active:W,alternativeLabel:C,completed:f,disabled:R,error:x,orientation:B}),F=Ae(L),k=(i=u.label)!=null?i:m.label;return e.jsxs(Te,p({className:z(F.root,d),ref:n,ownerState:L},P,{children:[N||I?e.jsx(qe,{className:F.iconContainer,ownerState:L,children:e.jsx(I,p({completed:f,active:W,error:x,icon:N},w))}):null,e.jsxs(De,{className:F.labelContainer,ownerState:L,children:[o?e.jsx(Ue,p({ownerState:L},k,{className:z(F.label,k==null?void 0:k.className),children:o})):null,h]})]}))});de.muiName="StepLabel";const me=de;function Ee(t){return q("MuiStepConnector",t)}D("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Ve=["className"],_e=t=>{const{classes:r,orientation:n,alternativeLabel:i,active:s,completed:o,disabled:d}=t,m={root:["root",n,i&&"alternativeLabel",s&&"active",o&&"completed",d&&"disabled"],line:["line",`line${ae(n)}`]};return _(m,Ee,r)},Je=g("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:t})=>p({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Ge=g("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.line,r[`line${ae(n.orientation)}`]]}})(({ownerState:t,theme:r})=>{const n=r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600];return p({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),He=j.forwardRef(function(r,n){const i=E({props:r,name:"MuiStepConnector"}),{className:s}=i,o=V(i,Ve),{alternativeLabel:d,orientation:m="horizontal"}=j.useContext(K),{active:x,disabled:v,completed:h}=j.useContext(te),u=p({},i,{alternativeLabel:d,orientation:m,active:x,completed:h,disabled:v}),b=_e(u);return e.jsx(Je,p({className:z(b.root,s),ref:n,ownerState:u},o,{children:e.jsx(Ge,{className:b.line,ownerState:u})}))}),Oe=He;function Ye(t){return q("MuiStepper",t)}D("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const Ze=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Ke=t=>{const{orientation:r,alternativeLabel:n,classes:i}=t;return _({root:["root",r,n&&"alternativeLabel"]},Ye,i)},Qe=g("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel]}})(({ownerState:t})=>p({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),Xe=e.jsx(Oe,{}),et=j.forwardRef(function(r,n){const i=E({props:r,name:"MuiStepper"}),{activeStep:s=0,alternativeLabel:o=!1,children:d,className:m,component:x="div",connector:v=Xe,nonLinear:h=!1,orientation:u="horizontal"}=i,b=V(i,Ze),w=p({},i,{alternativeLabel:o,orientation:u,component:x}),P=Ke(w),C=j.Children.toArray(d).filter(Boolean),B=C.map((R,f)=>j.cloneElement(R,p({index:f,last:f+1===C.length},R.props))),W=j.useMemo(()=>({activeStep:s,alternativeLabel:o,connector:v,nonLinear:h,orientation:u}),[s,o,v,h,u]);return e.jsx(K.Provider,{value:W,children:e.jsx(Qe,p({as:x,ownerState:w,className:z(P.root,m),ref:n},b,{children:B}))})}),ue=et;function tt(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Shipping address"}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"firstNameBasic",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"lastNameBasic",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{required:!0,id:"address1Basic",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"shipping address-line1"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{id:"address2Basic",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"shipping address-line2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"cityBasic",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"stateBasic",name:"state",label:"State/Province/Region",fullWidth:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"zipBasic",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"countryBasic",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Y,{control:e.jsx(Z,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})})]})]})}function rt(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Payment method"}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Y,{control:e.jsx(Z,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"})})]})]})}const nt=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],at=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],st=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}];function ot(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Order summary"}),e.jsxs(se,{disablePadding:!0,children:[nt.map(t=>e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(G,{primary:t.name,secondary:t.desc}),e.jsx(l,{variant:"body2",children:t.price})]},t.name)),e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(G,{primary:"Total"}),e.jsx(l,{variant:"subtitle1",children:"$34.06"})]})]}),e.jsxs(a,{container:!0,spacing:2,children:[e.jsxs(a,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Shipping"}),e.jsx(l,{gutterBottom:!0,children:"John Smith"}),e.jsx(l,{gutterBottom:!0,children:at.join(", ")})]}),e.jsxs(a,{item:!0,container:!0,direction:"column",xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Payment details"}),e.jsx(a,{container:!0,children:st.map(t=>e.jsxs(j.Fragment,{children:[e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.name})}),e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.detail})})]},t.name))})]})]})]})}const ee=["Shipping address","Payment details","Review your order"];function it(t){switch(t){case 0:return e.jsx(tt,{});case 1:return e.jsx(rt,{});case 2:return e.jsx(ot,{});default:throw new Error("Unknown step")}}const lt=()=>{const[t,r]=U.useState(0),n=()=>{r(t+1)},i=()=>{r(t-1)};return e.jsxs(oe,{title:"Basic",secondary:e.jsx(ve,{link:"https://next.material-ui.com/components/steppers/#main-content"}),children:[e.jsx(ue,{activeStep:t,sx:{pt:3,pb:5},children:ee.map(s=>e.jsx(ce,{children:e.jsx(me,{children:s})},s))}),e.jsx(e.Fragment,{children:t===ee.length?e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),e.jsx(l,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."}),e.jsx(A,{direction:"row",justifyContent:"flex-end",children:e.jsx(T,{children:e.jsx(S,{variant:"contained",color:"error",onClick:()=>r(0),sx:{my:3,ml:1},children:"Reset"})})})]}):e.jsxs(e.Fragment,{children:[it(t),e.jsxs(A,{direction:"row",justifyContent:t!==0?"space-between":"flex-end",children:[t!==0&&e.jsx(S,{onClick:i,sx:{my:3,ml:1},children:"Back"}),e.jsx(T,{children:e.jsx(S,{variant:"contained",onClick:n,sx:{my:3,ml:1},children:t===ee.length-1?"Place order":"Next"})})]})]})})]})},ct=le({firstName:O().required("First Name is required"),lastName:O().required("Last Name is required")}),pe=({shippingData:t,setShippingData:r,handleNext:n,setErrorIndex:i})=>{const s=ie({initialValues:{firstName:t.firstName,lastName:t.lastName},validationSchema:ct,onSubmit:o=>{r({firstName:o.firstName,lastName:o.lastName}),n()}});return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Shipping address"}),e.jsx("form",{onSubmit:s.handleSubmit,id:"validation-forms",children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"firstName",name:"firstName",label:"First Name *",value:s.values.firstName,onChange:s.handleChange,error:s.touched.firstName&&!!s.errors.firstName,helperText:s.touched.firstName&&s.errors.firstName,fullWidth:!0,autoComplete:"given-name"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"lastName",name:"lastName",label:"Last Name *",value:s.values.lastName,onChange:s.handleChange,error:s.touched.lastName&&!!s.errors.lastName,helperText:s.touched.lastName&&s.errors.lastName,fullWidth:!0,autoComplete:"family-name"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"shipping address-line1"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"shipping address-line2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Y,{control:e.jsx(Z,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(A,{direction:"row",justifyContent:"flex-end",children:e.jsx(T,{children:e.jsx(S,{variant:"contained",sx:{my:3,ml:1},type:"submit",onClick:()=>i(0),children:"Next"})})})})]})})]})};pe.propTypes={shippingData:y.object,setShippingData:y.func,handleNext:y.func,setErrorIndex:y.func};const dt=le({cardName:O().required("First Name is required"),cardNumber:O().required("Last Name is required")});function xe({paymentData:t,setPaymentData:r,handleNext:n,handleBack:i,setErrorIndex:s}){const o=ie({initialValues:{cardName:t.cardName,cardNumber:t.cardNumber},validationSchema:dt,onSubmit:d=>{r({cardName:d.cardName,cardNumber:d.cardNumber}),n()}});return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Payment method"}),e.jsx("form",{onSubmit:o.handleSubmit,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"cardName",name:"cardName",value:o.values.cardName,onChange:o.handleChange,error:o.touched.cardName&&!!o.errors.cardName,helperText:o.touched.cardName&&o.errors.cardName,label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"cardNumber",name:"cardNumber",label:"Card number",value:o.values.cardNumber,onChange:o.handleChange,error:o.touched.cardNumber&&!!o.errors.cardNumber,helperText:o.touched.cardNumber&&o.errors.cardNumber,fullWidth:!0,autoComplete:"cc-number"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(Y,{control:e.jsx(Z,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(A,{direction:"row",justifyContent:"space-between",children:[e.jsx(S,{onClick:i,sx:{my:3,ml:1},children:"Back"}),e.jsx(T,{children:e.jsx(S,{variant:"contained",type:"submit",sx:{my:3,ml:1},onClick:()=>s(1),children:"Next"})})]})})]})})]})}xe.propTypes={paymentData:y.object,setPaymentData:y.func,handleNext:y.func,handleBack:y.func,setErrorIndex:y.func};const mt=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],ut=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],pt=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}];function xt(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Order summary"}),e.jsxs(se,{disablePadding:!0,children:[mt.map(t=>e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(G,{primary:t.name,secondary:t.desc}),e.jsx(l,{variant:"body2",children:t.price})]},t.name)),e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(G,{primary:"Total"}),e.jsx(l,{variant:"subtitle1",children:"$34.06"})]})]}),e.jsxs(a,{container:!0,spacing:2,children:[e.jsxs(a,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Shipping"}),e.jsx(l,{gutterBottom:!0,children:"John Smith"}),e.jsx(l,{gutterBottom:!0,children:ut.join(", ")})]}),e.jsxs(a,{item:!0,container:!0,direction:"column",xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Payment details"}),e.jsx(a,{container:!0,children:pt.map(t=>e.jsxs(j.Fragment,{children:[e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.name})}),e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.detail})})]},t.name))})]})]})]})}const J=["Shipping address","Payment details","Review your order"],ht=(t,r,n,i,s,o,d,m)=>{switch(t){case 0:return e.jsx(pe,{handleNext:r,setErrorIndex:i,shippingData:s,setShippingData:o});case 1:return e.jsx(xe,{handleNext:r,handleBack:n,setErrorIndex:i,paymentData:d,setPaymentData:m});case 2:return e.jsx(xt,{});default:throw new Error("Unknown step")}},jt=()=>{const[t,r]=U.useState(0),[n,i]=U.useState({}),[s,o]=U.useState({}),[d,m]=U.useState(null),x=()=>{r(t+1),m(null)},v=()=>{r(t-1)};return e.jsxs(oe,{title:"Validation",children:[e.jsx(ue,{activeStep:t,sx:{pt:3,pb:5},children:J.map((h,u)=>{const b={};return u===d&&(b.optional=e.jsx(l,{variant:"caption",color:"error",children:"Error"}),b.error=!0),e.jsx(ce,{children:e.jsx(me,{...b,children:h})},h)})}),e.jsx(e.Fragment,{children:t===J.length?e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),e.jsx(l,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."}),e.jsx(A,{direction:"row",justifyContent:"flex-end",children:e.jsx(T,{children:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{i({}),o({}),r(0)},sx:{my:3,ml:1},children:"Reset"})})})]}):e.jsxs(e.Fragment,{children:[ht(t,x,v,m,n,i,s,o),t===J.length-1&&e.jsxs(A,{direction:"row",justifyContent:t!==0?"space-between":"flex-end",children:[t!==0&&e.jsx(S,{onClick:v,sx:{my:3,ml:1},children:"Back"}),e.jsx(T,{children:e.jsx(S,{variant:"contained",onClick:x,sx:{my:3,ml:1},children:t===J.length-1?"Place order":"Next"})})]})]})})]})},Tt=()=>e.jsxs(a,{container:!0,spacing:je,justifyContent:"center",children:[e.jsx(a,{item:!0,xs:12,md:9,lg:7,children:e.jsx(lt,{})}),e.jsx(a,{item:!0,xs:12,md:9,lg:7,children:e.jsx(jt,{})})]});export{Tt as default};
