import{r as a,am as S,an as j,cF as v,l as t,$ as E,G as i,a1 as x,F as I,D as b,ab as k,cG as D}from"./index-D8YYVO5u.js";import{d as A,U as O,a as _}from"./AddCircleOutlineOutlined-hOvushsH.js";import{C as z}from"./ContactCard-D150ByMg.js";import{U as M}from"./avatar-1-D6B1HTf2.js";import{i as F}from"./isEmpty-DdMHM1Dz.js";import{O as G}from"./OutlinedInput-DWLv5J1V.js";import{I as W}from"./InputAdornment-BzK__wF4.js";import{I as w}from"./IconSearch-d1XV2t6t.js";import"./SubCard-Dry_26qu.js";import"./getImageUrl-CsHsmFJf.js";import"./HighlightOffTwoTone-BFKVz64C.js";import"./WorkTwoTone-Xa4pXJPp.js";import"./MailTwoTone-CDULcGqi.js";import"./CallTwoTone-jvjMbIJh.js";import"./PinDropTwoTone-CejM73TG.js";import"./ChatBubbleTwoTone-DnYl7j3Y.js";import"./NotInterestedTwoTone-CECrizik.js";import"./useScrollTrigger-MyrWv-6z.js";import"./FormControl-CK8irnJG.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D3KD0Tiy.js";import"./FormLabel-CkCbamwV.js";import"./Autocomplete-ov49sIe9.js";import"./Select-BCrvOGUu.js";import"./Menu-CF8hg8nh.js";import"./InputBase-CYOPOv7O.js";import"./ListSubheader-CI_sh-aD.js";import"./usePreviousProps-BZSYhglc.js";import"./TextField-C6zly-qr.js";import"./FormHelperText-J-lHncki.js";import"./MoreHorizOutlined-BqIbV6o6.js";import"./PhoneTwoTone-CyYAQvzL.js";import"./MenuItem-BsENe2oa.js";import"./_getTag-D0Y4uZ2p.js";import"./isArrayLike-C-wli46Q.js";const gt=()=>{const[m,d]=a.useState({}),[u,C]=a.useState({}),{contacts:l}=S(e=>e.contact),g=e=>e.reduce((s,r)=>{var h;const c=(h=r.name[0])==null?void 0:h.toUpperCase();return Object.prototype.hasOwnProperty.call(s,c)?s[c].push(r):s[c]=[r],s},{});a.useEffect(()=>{if(C(g(l)),!F(m)){const e=l.findIndex(s=>s.id===m.id);e>-1&&d(l[e])}},[l,m]),a.useEffect(()=>{j(v())},[]);const y=async e=>{await j(D(e))},[f,o]=a.useState(!1),[p,n]=a.useState(!1),U=()=>{d({name:"",company:"",role:"",work_email:"",personal_email:"",work_phone:"",personal_phone:"",location:"USA",image:M,status:"I am online",lastMessage:"2h ago",birthdayText:""}),o(!1),n(!0)};return t.jsx(E,{title:"Contact Cards",children:t.jsxs(i,{container:!0,spacing:x,children:[t.jsx(i,{className:"block",item:!0,xs:!0,zeroMinWidth:!0,sx:{display:f||p?{xs:"none",md:"flex"}:"flex"},children:t.jsxs(i,{container:!0,alignItems:"center",spacing:x,children:[t.jsx(i,{item:!0,xs:!0,zeroMinWidth:!0,children:t.jsx(G,{id:"input-search-card-style1",placeholder:"Search Contact",fullWidth:!0,startAdornment:t.jsx(W,{position:"start",children:t.jsx(w,{stroke:1.5,size:"16px"})})})}),t.jsx(i,{item:!0,children:t.jsx(I,{variant:"contained",size:"large",startIcon:t.jsx(A,{}),onClick:U,children:"Add"})}),Object.keys(u).map((e,s)=>t.jsxs(a.Fragment,{children:[t.jsxs(i,{item:!0,xs:12,children:[t.jsx(b,{variant:"h4",color:"primary",sx:{fontSize:"1rem"},children:e.toUpperCase()}),t.jsx(k,{sx:{borderColor:"divider",mt:1.875,mb:.625}})]}),t.jsx(i,{item:!0,xs:12,children:t.jsx(i,{container:!0,direction:"row",spacing:x,children:u[e].map((r,c)=>t.jsx(i,{item:!0,xs:12,md:p?12:6,lg:p?6:4,xl:3,children:t.jsx(z,{avatar:r.avatar,name:r.name,role:r.role,email:r.work_email,contact:r.phone,location:r.location,onActive:()=>{d(r),o(!0),n(!1)}})},c))})})]},s))]})}),f&&t.jsx(i,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:t.jsx(O,{user:m,onEditClick:()=>{o(!1),n(!0)},onClose:()=>{o(!1),n(!1)}})}),p&&t.jsx(i,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:t.jsx(_,{user:m,onSave:e=>{e.id&&o(!0),n(!1),y(e)},onCancel:e=>{e.id&&o(!0),n(!1)}})})]})})};export{gt as default};