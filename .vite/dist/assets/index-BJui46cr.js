import{r as a,am as S,an as j,cF as v,l as t,$ as E,G as i,a1 as x,F as I,D as b,ab as k,cG as D}from"./index-DRAxbQhQ.js";import{d as A,U as O,a as _}from"./AddCircleOutlineOutlined-CZ3E2LHl.js";import{C as z}from"./ContactCard-4Qgtm3rX.js";import{U as M}from"./avatar-1-DysEhUg8.js";import{i as F}from"./isEmpty-DdMHM1Dz.js";import{O as G}from"./OutlinedInput-C-PMnjYA.js";import{I as W}from"./InputAdornment-Cj0cTNRg.js";import{I as w}from"./IconSearch-DB3OZ0iF.js";import"./SubCard-DHuXmrDE.js";import"./getImageUrl-nY85S8xQ.js";import"./HighlightOffTwoTone-Djt8Dy61.js";import"./WorkTwoTone-Yj0ZVdCO.js";import"./MailTwoTone-CSrpwzNm.js";import"./CallTwoTone-evgyMC4n.js";import"./PinDropTwoTone-BRbeDmdH.js";import"./ChatBubbleTwoTone-hBUUG7Y2.js";import"./NotInterestedTwoTone-DLztMmxQ.js";import"./useScrollTrigger-CTJtHQzL.js";import"./FormControl-DTGQKB1F.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BTLx1hne.js";import"./FormLabel-D7QhHnPX.js";import"./Autocomplete-IOsgmMSK.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./InputBase-C10xFuq9.js";import"./ListSubheader-B3jp8p9v.js";import"./usePreviousProps-GibiJsmS.js";import"./TextField-C23CKz-E.js";import"./FormHelperText-YH3vNJL3.js";import"./MoreHorizOutlined-h4BueNny.js";import"./PhoneTwoTone-CgMjbmzn.js";import"./MenuItem-I_H4wdck.js";import"./_getTag-D0Y4uZ2p.js";import"./isArrayLike-C-wli46Q.js";const gt=()=>{const[m,d]=a.useState({}),[u,C]=a.useState({}),{contacts:l}=S(e=>e.contact),g=e=>e.reduce((s,r)=>{var h;const c=(h=r.name[0])==null?void 0:h.toUpperCase();return Object.prototype.hasOwnProperty.call(s,c)?s[c].push(r):s[c]=[r],s},{});a.useEffect(()=>{if(C(g(l)),!F(m)){const e=l.findIndex(s=>s.id===m.id);e>-1&&d(l[e])}},[l,m]),a.useEffect(()=>{j(v())},[]);const y=async e=>{await j(D(e))},[f,o]=a.useState(!1),[p,n]=a.useState(!1),U=()=>{d({name:"",company:"",role:"",work_email:"",personal_email:"",work_phone:"",personal_phone:"",location:"USA",image:M,status:"I am online",lastMessage:"2h ago",birthdayText:""}),o(!1),n(!0)};return t.jsx(E,{title:"Contact Cards",children:t.jsxs(i,{container:!0,spacing:x,children:[t.jsx(i,{className:"block",item:!0,xs:!0,zeroMinWidth:!0,sx:{display:f||p?{xs:"none",md:"flex"}:"flex"},children:t.jsxs(i,{container:!0,alignItems:"center",spacing:x,children:[t.jsx(i,{item:!0,xs:!0,zeroMinWidth:!0,children:t.jsx(G,{id:"input-search-card-style1",placeholder:"Search Contact",fullWidth:!0,startAdornment:t.jsx(W,{position:"start",children:t.jsx(w,{stroke:1.5,size:"16px"})})})}),t.jsx(i,{item:!0,children:t.jsx(I,{variant:"contained",size:"large",startIcon:t.jsx(A,{}),onClick:U,children:"Add"})}),Object.keys(u).map((e,s)=>t.jsxs(a.Fragment,{children:[t.jsxs(i,{item:!0,xs:12,children:[t.jsx(b,{variant:"h4",color:"primary",sx:{fontSize:"1rem"},children:e.toUpperCase()}),t.jsx(k,{sx:{borderColor:"divider",mt:1.875,mb:.625}})]}),t.jsx(i,{item:!0,xs:12,children:t.jsx(i,{container:!0,direction:"row",spacing:x,children:u[e].map((r,c)=>t.jsx(i,{item:!0,xs:12,md:p?12:6,lg:p?6:4,xl:3,children:t.jsx(z,{avatar:r.avatar,name:r.name,role:r.role,email:r.work_email,contact:r.phone,location:r.location,onActive:()=>{d(r),o(!0),n(!1)}})},c))})})]},s))]})}),f&&t.jsx(i,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:t.jsx(O,{user:m,onEditClick:()=>{o(!1),n(!0)},onClose:()=>{o(!1),n(!1)}})}),p&&t.jsx(i,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:t.jsx(_,{user:m,onSave:e=>{e.id&&o(!0),n(!1),y(e)},onCancel:e=>{e.id&&o(!0),n(!1)}})})]})})};export{gt as default};