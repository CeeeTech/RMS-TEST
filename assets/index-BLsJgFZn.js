import{P as m,z as Ie,V as T,r as u,l as e,G as t,a1 as M,$ as k,J as Pe,K as w,N as _,x as L,y as D,bf as Me,aC as $e,am as ge,cK as ee,bh as se,S as p,D as o,ab as F,aH as _e,ae as Le,aI as De,L as q,F as R,M as Ee,aj as Fe,T as te,cM as qe,ad as E,a2 as Oe,a7 as Ve,aa as We,cN as Ne,cO as Be,cH as Ae,an as He,cI as Ge,aD as Ue,aF as Ke,aG as re}from"./index-aYNdDFsw.js";import{g as fe,I as ve}from"./getImageUrl-CsHsmFJf.js";import{S as be}from"./index-CwKWgbdT.js";import{R as Xe}from"./index.es-DpzY0_HS.js";import{u as Je,J as Qe,a as Ye,K as Ze}from"./formik.esm-BnGHO-0j.js";import{c as es,a as ss,e as ts}from"./index.esm-Cs06t5W7.js";import{C as O}from"./Chip-DGdPIkhH.js";import{C as rs}from"./ColorOptions-D497-Pxd.js";import{d as is}from"./FavoriteBorder-TGWwVMog.js";import{d as G}from"./StarTwoTone-BM1lbiNi.js";import{d as U}from"./StarBorderTwoTone-DHubI3YZ.js";import{d as as}from"./Add-CSK2dzS_.js";import{d as ns}from"./Remove-Dr6Ukb8H.js";import{d as os}from"./ShoppingCartTwoTone-CWCL_1dM.js";import{R as K}from"./Rating-D3bzGr7Q.js";import{a as V,c as W,b as I,T as ie}from"./TableRow-DaIFs5wn.js";import{T as S}from"./TableCell-CM4Hu41t.js";import{F as ae}from"./FormHelperText-C1AdVjvj.js";import{F as ls}from"./FormControl-Dj_1sEpm.js";import{S as cs}from"./Select-DVXOMGOZ.js";import{M as $}from"./MenuItem-BtCOIvr_.js";import{T as N}from"./Tooltip-DeGY6c7u.js";import{B as ds}from"./ButtonGroup-djuIob70.js";import{A as xs}from"./Accordion-CaSa1hM-.js";import{d as us}from"./MoreHorizOutlined-DSV9vp6G.js";import{f as ms}from"./index-DhB-ElUn.js";import{M as hs}from"./Menu-BcGYJvIj.js";import{L as ps}from"./ListItem-C7PTSiU0.js";import{L as js}from"./ListItemAvatar-D0Owu6Ze.js";import{S as C}from"./Skeleton-Dpoonwxf.js";import{P as gs,F as fs}from"./FloatingCart-DFaEUUCs.js";import"./isArrayLike-C-wli46Q.js";import"./_getTag-D0Y4uZ2p.js";import"./isSymbol-ckKrFcy_.js";import"./utils-DoM3o7-Q.js";import"./InputBase-DT8iEGhH.js";import"./OutlinedInput-CX89FYVG.js";import"./getValidReactChildren-DDCjogcs.js";import"./ExpandMore-BdcRNYpM.js";import"./typeof-QjJsDpFa.js";import"./ListItemSecondaryAction-BoxADv29.js";import"./sum-BkhpHGG4.js";import"./Fab-BoVIyOe2.js";import"./Badge-CDA4sBMQ.js";import"./usePreviousProps-BFuD_vnI.js";const ne="/RMS-TEST/assets/prod-1-HZVVZx_S.png",oe="/RMS-TEST/assets/prod-2-Du1XTQ2F.png",le="/RMS-TEST/assets/prod-3-BWUks3T1.png",ce="/RMS-TEST/assets/prod-4-DwdasrVz.png",de="/RMS-TEST/assets/prod-5-Cl9js1ye.png",xe="/RMS-TEST/assets/prod-6-xAq4opmM.png",ue="/RMS-TEST/assets/prod-7-L09j58z4.png",me="/RMS-TEST/assets/prod-8-RXCiLo2k.png",he="/RMS-TEST/assets/prod-9-CBJwxhUX.png",Se=({product:s})=>{const{borderRadius:i}=Ie(),r=[ne,oe,le,ce,de,xe,ue,me,he],a=T(y=>y.breakpoints.up("lg")),[l,d]=u.useState(""),[n,g]=u.useState(!1),[b,f]=u.useState(!1),[c,v]=u.useState(0),h=[ne,oe,le,ce,de,xe,ue,me,he],P=a?4:3,x={dots:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,initialSlide:Number(s.id)+1,centerPadding:"0px",slidesToShow:r.length>3?P:r.length};return u.useEffect(()=>{d(s&&(s!=null&&s.image)?fe(`${s.image}`,ve.ECOMMERCE):"")},[s]),e.jsxs(e.Fragment,{children:[e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"center",spacing:M,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(k,{content:!1,sx:{m:"0 auto"},children:e.jsx(Pe,{onClick:()=>{g(!n),f(!0)},component:"img",image:l,sx:{borderRadius:`${i}px`,overflow:"hidden",cursor:"zoom-in"},alt:"product images"})})}),e.jsx(t,{item:!0,xs:11,sm:7,md:9,lg:10,xl:8,children:e.jsx(be,{...x,children:r.map((y,Z)=>e.jsx(w,{onClick:()=>{d(y),v(Z)},sx:{p:1},children:e.jsx(_,{outline:l===y,size:a?"lg":"md",color:"primary",src:y,variant:"rounded",sx:{m:"0 auto",cursor:"pointer"},alt:"product images"})},Z))})})]}),b&&e.jsx(Xe,{mainSrc:h[c],nextSrc:h[(c+1)%h.length],prevSrc:h[(c+h.length-1)%h.length],onCloseRequest:()=>f(!1),onMovePrevRequest:()=>v((c+h.length-1)%h.length),onMoveNextRequest:()=>v((c+1)%h.length)})]})};Se.propTypes={product:m.object};var X={},vs=D;Object.defineProperty(X,"__esModule",{value:!0});var B=X.default=void 0,bs=vs(L()),Ss=e;B=X.default=(0,bs.default)((0,Ss.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"}),"Circle");function ys(s){return rs.filter(i=>i.value===s)}const ws=[8,10,12,14,16,18,20],Cs=es({color:ss().required("Color selection is required"),size:ts().required("Size selection is required.")}),A=({checked:s,colorsData:i})=>{const r=Ee();return e.jsx(t,{item:!0,children:e.jsx(N,{title:i[0].label,children:e.jsx(Fe,{sx:{borderRadius:"50%"},children:e.jsxs(_,{color:"inherit",size:"badge",sx:{bgcolor:i[0].bg,color:r.palette.mode===te.DARK?"grey.800":"grey.50"},children:[s&&e.jsx(B,{sx:{color:r.palette.mode===te.DARK?"grey.800":"grey.50",fontSize:"0.75rem"}}),!s&&e.jsx(B,{sx:{color:i[0].bg,fontSize:"0.75rem"}})]})})})})};A.propTypes={checked:m.bool,colorsData:m.array};const Rs=s=>{const[i,,r]=Ze(s),{value:a}=i,{setValue:l}=r;return e.jsxs(ds,{size:"large",variant:"text",color:"inherit",sx:{border:"1px solid",borderColor:"grey.400"},children:[e.jsx(R,{disabled:a<=1,onClick:()=>l(a-1),sx:{pr:.75,pl:.75,minWidth:"0px !important"},"aria-label":"'decrease'",children:e.jsx(ns,{fontSize:"inherit"})},"three"),e.jsx(R,{sx:{pl:.5,pr:.5},children:a},"two"),e.jsx(R,{onClick:()=>l(a+1),sx:{pl:.75,pr:.75,minWidth:"0px !important"},"aria-label":"'increase'",children:e.jsx(as,{fontSize:"inherit"})},"one")]})},ye=({product:s})=>{const i=Me(),r=$e(),a=ge(c=>c.cart),l=Je({enableReinitialize:!0,initialValues:{id:s.id,name:s.name,image:s.image,salePrice:s.salePrice,offerPrice:s.offerPrice,color:"",size:"",quantity:1},validationSchema:Cs,onSubmit:c=>{i(ee(c,a.checkout.products)),i(se({open:!0,message:"Submit Success",variant:"alert",alert:{color:"success"},close:!1})),r("/apps/e-commerce/checkout")}}),{values:d,errors:n,handleSubmit:g,handleChange:b}=l,f=()=>{d.color=d.color?d.color:"primaryDark",d.size=d.size?d.size:"8",i(ee(d,a.checkout.products)),i(se({open:!0,message:"Add To Cart Success",variant:"alert",alert:{color:"success"},close:!1}))};return e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(p,{direction:"row",alignItems:"flex-start",justifyContent:"space-between",children:[e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(O,{size:"small",label:s.isStock?"In Stock":"Out of Stock",chipcolor:s.isStock?"success":"error",sx:{borderRadius:"4px",textTransform:"capitalize"}})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(o,{variant:"h3",children:s.name}),e.jsx(O,{size:"small",label:"New",chipcolor:"primary",variant:"outlined"})]})})]}),e.jsx(_,{variant:"rounded",sx:{bgcolor:"grey.200",color:"grey.800"},children:e.jsx(is,{})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(o,{variant:"body2",children:s.description})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(K,{name:"simple-controlled",value:s.rating,icon:e.jsx(G,{fontSize:"inherit"}),emptyIcon:e.jsx(U,{fontSize:"inherit"}),precision:.1,readOnly:!0}),e.jsxs(o,{variant:"caption",children:["(",s.salePrice,"+)"]})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,children:[e.jsxs(o,{variant:"h2",color:"primary",children:["$",s.offerPrice]}),e.jsxs(o,{variant:"body1",sx:{textDecoration:"line-through"},children:["$",s.salePrice]}),e.jsx(o,{variant:"caption",children:"(Inclusive of all taxes)"})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(F,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(Qe,{value:l,children:e.jsx(Ye,{autoComplete:"off",noValidate:!0,onSubmit:g,children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,lg:10,children:e.jsx(V,{children:e.jsxs(W,{sx:{"& .MuiTableCell-root":{borderBottom:"none"}},children:[e.jsxs(I,{children:[e.jsx(S,{children:e.jsxs(o,{variant:"body2",children:["Colors",e.jsx(o,{color:"error",component:"span",children:"*"})]})}),e.jsxs(S,{children:[e.jsx(_e,{row:!0,value:d.color,onChange:b,"aria-label":"colors",name:"color",id:"color",sx:{ml:1},children:s.colors&&s.colors.map((c,v)=>{const h=ys(c);return e.jsx(Le,{value:c,control:e.jsx(De,{sx:{p:.25},disableRipple:!0,checkedIcon:e.jsx(A,{checked:!0,colorsData:h}),icon:e.jsx(A,{colorsData:h})}),label:""},v)})}),n.color&&e.jsx(ae,{error:!0,id:"standard-label-color",children:n.color})]})]}),e.jsxs(I,{children:[e.jsx(S,{children:e.jsxs(p,{children:[e.jsxs(o,{variant:"body2",children:["Size",e.jsx(o,{color:"error",component:"span",children:"*"})]}),e.jsx(o,{variant:"caption",color:"primary",component:q,to:"#",children:"Size Chart?"})]})}),e.jsxs(S,{children:[e.jsx(ls,{sx:{minWidth:120},children:e.jsxs(cs,{id:"size",name:"size",value:d.size,onChange:b,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[e.jsx($,{value:"",children:e.jsx("em",{children:"None"})}),ws.map((c,v)=>e.jsx($,{sx:{p:1.25},value:c,children:c},v))]})}),n.size&&e.jsx(ae,{error:!0,id:"standard-label-size",children:n.size})]})]}),e.jsxs(I,{children:[e.jsx(S,{children:e.jsx(o,{variant:"body2",children:"Quantity"})}),e.jsx(S,{children:e.jsx(Rs,{name:"quantity"})})]})]})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(F,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,spacing:1,children:[e.jsx(t,{item:!0,xs:6,children:e.jsx(R,{fullWidth:!0,color:"primary",variant:"contained",size:"large",startIcon:e.jsx(os,{}),onClick:f,children:"Add to Cart"})}),e.jsx(t,{item:!0,xs:6,children:e.jsx(R,{type:"submit",fullWidth:!0,color:"secondary",variant:"contained",size:"large",children:"Buy Now"})})]})})]})})})})]})};ye.propTypes={product:m.object};function j(s,i){return{key:s,value:i}}const Ts=[j("Sales Package","5 Items"),j("Gift Box","Yes"),j("Plastic Wrapper","Yes"),j("Safety Wrapper","No")],zs=[j("Type","Hooded Neck, Paint Clothes"),j("Sleeve","Full"),j("Fit","Regular"),j("Fabric","Hosiery, Smooth, Silk"),j("Style","CV-TS9865"),j("Ideal For","All"),j("Size","Free"),j("Pattern","Printed"),j("Reversible","No"),j("Secondary Color","Black, Brown")],ks=()=>e.jsxs(t,{container:!0,spacing:2,children:[e.jsxs(t,{item:!0,xs:12,lg:6,children:[e.jsx(o,{variant:"h4",sx:{pb:1.5},children:"General"}),e.jsx(ie,{children:e.jsx(V,{sx:{maxWidth:380},size:"small","aria-label":"simple table",children:e.jsx(W,{children:zs.map(s=>e.jsxs(I,{sx:{"& td, & th":{border:0}},children:[e.jsx(S,{component:"th",scope:"row",sx:{pl:0},children:e.jsx(o,{variant:"caption",sx:{fontWeight:500},children:s.key})}),e.jsx(S,{children:s.value})]},s.key))})})})]}),e.jsxs(t,{item:!0,xs:12,lg:6,children:[e.jsx(o,{variant:"h4",sx:{pb:1.5},children:"In The Box"}),e.jsx(ie,{children:e.jsx(V,{sx:{maxWidth:280},size:"small","aria-label":"simple table",children:e.jsx(W,{children:Ts.map(s=>e.jsxs(I,{sx:{"& td, & th":{border:0}},children:[e.jsx(S,{component:"th",scope:"row",sx:{pl:0},children:e.jsx(o,{variant:"caption",sx:{fontWeight:500},children:s.key})}),e.jsx(S,{children:s.value})]},s.key))})})})]})]}),Is=[{id:"basic1",defaultExpand:!0,title:"Specification",content:e.jsx(ks,{})},{id:"basic2",title:"Material and Wash instruction",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum"},{id:"basic3",title:"Add on data",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"}],Ps=()=>e.jsx(xs,{data:Is});var J={},Ms=D;Object.defineProperty(J,"__esModule",{value:!0});var we=J.default=void 0,$s=Ms(L()),_s=e;we=J.default=(0,$s.default)((0,_s.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"VerifiedUser");var Q={},Ls=D;Object.defineProperty(Q,"__esModule",{value:!0});var Ce=Q.default=void 0,Ds=Ls(L()),Es=e;Ce=Q.default=(0,Ds.default)((0,Es.jsx)("path",{d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m-3.6 13.9 1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2z"}),"DirectionsRun");const Re=({avatar:s,date:i,name:r,status:a,rating:l,review:d})=>{const[n,g]=u.useState(null),b=c=>{g(c==null?void 0:c.currentTarget)},f=()=>{g(null)};return e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,md:4,lg:3,xl:2,children:e.jsxs(p,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(_,{alt:r,src:s&&fe(`${s}`,ve.USERS)}),e.jsxs(p,{spacing:.5,children:[e.jsxs(p,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(o,{variant:"subtitle1",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"block"},children:r}),a&&e.jsx(N,{title:"Purchased Verified",children:e.jsx(we,{fontSize:"small",sx:{color:"success.dark"}})}),!a&&e.jsx(N,{title:"Goodwill",children:e.jsx(Ce,{fontSize:"small",sx:{color:"error.main"}})})]}),e.jsx(o,{variant:"caption",children:ms(new Date(i),"E, MMM d yyyy")})]})]})}),e.jsx(t,{item:!0,xs:12,md:8,lg:9,xl:10,children:e.jsxs(t,{container:!0,alignItems:"center",spacing:2,children:[e.jsx(t,{item:!0,xs:11,children:e.jsxs(p,{spacing:1,children:[e.jsx(K,{size:"small",name:"simple-controlled",value:l<4?l+1:l,icon:e.jsx(G,{fontSize:"inherit"}),emptyIcon:e.jsx(U,{fontSize:"inherit"}),precision:.1,readOnly:!0}),e.jsx(o,{variant:"body2",children:d})]})}),e.jsx(t,{item:!0,xs:1,children:e.jsxs(p,{justifyContent:"flex-end",children:[e.jsx(us,{fontSize:"small","aria-controls":"menu-popular-card","aria-haspopup":"true",onClick:b,sx:{color:"grey.500",cursor:"pointer"}}),e.jsxs(hs,{id:"menu-popular-card",anchorEl:n,keepMounted:!0,open:!!n,onClose:f,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx($,{onClick:f,children:" Edit"}),e.jsx($,{onClick:f,children:" Delete"})]})]})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(F,{})})]})};Re.propTypes={avatar:m.string,date:m.string,name:m.string,status:m.bool,rating:m.number,review:m.string};var Y={},Fs=D;Object.defineProperty(Y,"__esModule",{value:!0});var Te=Y.default=void 0,qs=Fs(L()),pe=e;Te=Y.default=(0,qs.default)([(0,pe.jsx)("path",{d:"m4 17.17.59-.59.58-.58H20V4H4zM18 14h-7.5l2-2H18zM6 11.53l5.88-5.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6z",opacity:".3"},"0"),(0,pe.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17l-.59.59-.58.58V4h16zm-9.5-2H18v-2h-5.5zm3.86-5.87c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47z"},"1")],"RateReviewTwoTone");function z({like:s,star:i,color:r,value:a,...l}){return e.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(w,{sx:{minWidth:50},children:e.jsx(o,{variant:"body2",color:"textSecondary",children:`${Math.round(i)} Stars`})}),e.jsx(w,{sx:{width:"100%",mr:1},children:e.jsx(Oe,{value:a,variant:"determinate",color:r,...l})}),e.jsx(w,{sx:{minWidth:35},children:e.jsx(o,{variant:"subtitle1",children:`(${Math.round(s)})`})})]})}z.propTypes={like:m.number,star:m.number,color:m.string,value:m.number};const ze=({product:s})=>{const[i,r]=u.useState([]),[a,l]=u.useState(!0);u.useEffect(()=>{(async()=>await qe().then(n=>{r(n.data.productReviews),l(!1)}))()},[]);let d=e.jsx(t,{item:!0,xs:12,children:e.jsx(Ve,{children:[1,2,3].map(n=>e.jsxs(ps,{alignItems:"flex-start",sx:{mb:2.5},children:[e.jsx(js,{sx:{minWidth:72},children:e.jsx(C,{variant:"rectangular",width:62,height:62})}),e.jsx(We,{primary:e.jsx(C,{animation:"wave",height:22}),secondary:e.jsxs(e.Fragment,{children:[e.jsx(C,{animation:"wave",height:14,width:"60%"}),e.jsx(C,{animation:"wave",height:18,width:"20%"}),e.jsx(C,{animation:"wave",height:14,width:"35%",sx:{mt:1.25}}),e.jsx(C,{animation:"wave",height:14,width:"100%"}),e.jsx(C,{animation:"wave",height:14,width:"55%"})]})})]},n))})});return i&&!a&&(d=i.map((n,g)=>e.jsx(t,{item:!0,xs:12,children:e.jsx(Re,{avatar:n.profile.avatar,date:n.date,status:n.profile.status,name:n.profile.name,rating:n.rating,review:n.review})},g))),e.jsxs(t,{container:!0,spacing:M,children:[e.jsx(t,{item:!0,xs:12,lg:4,children:e.jsx(k,{content:!1,sx:{height:"100%"},children:e.jsx(E,{sx:{height:"100%"},children:s&&e.jsxs(p,{alignItems:"center",justifyContent:"center",spacing:2,sx:{height:"100%"},children:[e.jsx(o,{variant:"subtitle1",children:"Average Rating"}),e.jsxs(o,{variant:"h1",color:"primary",children:[Number((s.rating<4?s.rating+1:s.rating).toFixed(1)),"/5"]}),e.jsxs(p,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(K,{name:"simple-controlled",value:s.rating<4?s.rating+1:s.rating,icon:e.jsx(G,{fontSize:"inherit"}),emptyIcon:e.jsx(U,{fontSize:"inherit"}),readOnly:!0,precision:.1}),e.jsxs(o,{variant:"caption",children:["(",s.salePrice+s.offerPrice,")"]})]})]})})})}),e.jsx(t,{item:!0,xs:12,md:6,lg:4,children:e.jsx(k,{content:!1,sx:{height:"100%"},children:e.jsx(E,{children:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:1,children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(z,{color:"secondary",star:1,value:15,like:125})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(z,{color:"secondary",star:2,value:15,like:125})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(z,{color:"secondary",star:3,value:20,like:160})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(z,{color:"secondary",star:4,value:40,like:320})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(z,{color:"secondary",star:5,value:10,like:80})})]})})})}),e.jsx(t,{item:!0,xs:12,md:6,lg:4,children:e.jsx(k,{content:!1,sx:{height:"100%"},children:e.jsx(E,{sx:{height:"100%"},children:e.jsx(p,{alignItems:"center",justifyContent:"center",spacing:2,sx:{height:"100%"},children:e.jsx(R,{variant:"outlined",size:"large",startIcon:e.jsx(Te,{fontSize:"inherit"}),children:"Write an Review"})})})})}),d,e.jsx(t,{item:!0,xs:12,children:e.jsx(p,{direction:"row",justifyContent:"center",children:e.jsx(R,{variant:"text",children:" Load more Comments "})})})]})};ze.propTypes={product:m.object};const ke=({id:s})=>{const[i,r]=u.useState([]),[a,l]=u.useState(5),d=T(x=>x.breakpoints.down("sm")),n=T(x=>x.breakpoints.down("md")),g=T(x=>x.breakpoints.down("lg")),b=T(x=>x.breakpoints.down("xl")),f=T(x=>x.breakpoints.up("xl")),[c,v]=u.useState(!0);u.useEffect(()=>{(async()=>await Ne(s).then(x=>{r(x.data),v(!1)}))()},[s]),u.useEffect(()=>{if(d){l(1);return}if(n){l(2);return}if(g){l(3);return}if(b){l(4);return}f&&l(5)},[d,n,g,b,f,a]);const h={dots:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,centerPadding:"0px",slidesToShow:a};let P=e.jsx(e.Fragment,{});return i&&!c&&(P=i.map((x,y)=>e.jsx(w,{sx:{p:1.5},children:e.jsx(gs,{id:x.id,image:x.image,name:x.name,offerPrice:x.offerPrice,salePrice:x.salePrice,rating:x.rating},y)},y))),e.jsx(be,{...h,children:P})};ke.propTypes={id:m.string};function H({children:s,value:i,index:r,...a}){return e.jsx(w,{role:"tabpanel",hidden:i!==r,id:`product-details-tabpanel-${r}`,"aria-labelledby":`product-details-tab-${r}`,...a,children:i===r&&e.jsx(w,{children:s})})}H.propTypes={children:m.node,index:m.any.isRequired,value:m.any.isRequired};function je(s){return{id:`product-details-tab-${s}`,"aria-controls":`product-details-tabpanel-${s}`}}const Pt=()=>{var c;const{id:s}=Be(),i=ge(v=>v.cart),r=Ae(),[a,l]=u.useState(0),d=(v,h)=>{l(h)};u.useEffect(()=>{i.checkout.step>2&&He(Ge())},[s,i.checkout.step]);const{pathname:n}=Ue();u.useEffect(()=>{window.scrollTo(0,0)},[n]);const g=u.useMemo(()=>e.jsx(Se,{product:r}),[r]),b=u.useMemo(()=>e.jsx(ze,{product:r}),[r]),f=u.useMemo(()=>e.jsx(ke,{id:s}),[s]);return e.jsx(e.Fragment,{children:r&&Number(r.id)===Number(s)&&e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"center",spacing:M,children:[e.jsx(t,{item:!0,xs:12,lg:10,children:e.jsx(k,{children:r&&(r==null?void 0:r.id)===Number(s)&&e.jsxs(t,{container:!0,spacing:M,children:[e.jsx(t,{item:!0,xs:12,md:6,children:g}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(ye,{product:r})}),e.jsxs(t,{item:!0,xs:12,children:[e.jsxs(Ke,{value:a,indicatorColor:"primary",onChange:d,sx:{},"aria-label":"product description tabs example",variant:"scrollable",children:[e.jsx(re,{component:q,to:"#",label:"Description",...je(0)}),e.jsx(re,{component:q,to:"#",label:e.jsxs(p,{direction:"row",alignItems:"center",children:["Reviews"," ",e.jsx(O,{label:String((c=r.offerPrice)==null?void 0:c.toFixed(0)),size:"small",chipcolor:"secondary",sx:{ml:1.5}})]}),...je(1)})]}),e.jsx(H,{value:a,index:0,children:e.jsx(Ps,{})}),e.jsx(H,{value:a,index:1,children:b})]})]})})}),e.jsx(t,{item:!0,xs:12,lg:10,sx:{mt:3},children:e.jsx(o,{variant:"h2",children:"Related Products"})}),e.jsx(t,{item:!0,xs:11,lg:10,children:f}),e.jsx(fs,{})]})})};export{Pt as default};
