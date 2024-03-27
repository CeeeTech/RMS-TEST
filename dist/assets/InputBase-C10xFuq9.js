import{r,_ as he,k as be,bW as ce,j as Q,bV as Be,l as R,h as d,w as Ae,d as Fe,g as Ie,ah as ee,e as ge,f as Ee,bX as He,c0 as We,m as pe,bY as Pe,c4 as fe,n as Me,c5 as Le,c3 as Oe}from"./index-DRAxbQhQ.js";import{a as Te}from"./utils-DoM3o7-Q.js";const Ne=["onChange","maxRows","minRows","style","value"];function U(t){return parseInt(t,10)||0}const je={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function me(t){return t==null||Object.keys(t).length===0||t.outerHeightStyle===0&&!t.overflow}const $e=r.forwardRef(function(e,o){const{onChange:p,maxRows:u,minRows:c=1,style:I,value:z}=e,M=he(e,Ne),{current:k}=r.useRef(z!=null),x=r.useRef(null),E=be(o,x),h=r.useRef(null),b=r.useRef(0),[B,H]=r.useState({outerHeightStyle:0}),W=r.useCallback(()=>{const a=x.current,l=ce(a).getComputedStyle(a);if(l.width==="0px")return{outerHeightStyle:0};const s=h.current;s.style.width=l.width,s.value=a.value||e.placeholder||"x",s.value.slice(-1)===`
`&&(s.value+=" ");const g=l.boxSizing,A=U(l.paddingBottom)+U(l.paddingTop),S=U(l.borderBottomWidth)+U(l.borderTopWidth),v=s.scrollHeight;s.value="x";const F=s.scrollHeight;let y=v;c&&(y=Math.max(Number(c)*F,y)),u&&(y=Math.min(Number(u)*F,y)),y=Math.max(y,F);const V=y+(g==="border-box"?A+S:0),L=Math.abs(y-v)<=1;return{outerHeightStyle:V,overflow:L}},[u,c,e.placeholder]),N=(a,w)=>{const{outerHeightStyle:l,overflow:s}=w;return b.current<20&&(l>0&&Math.abs((a.outerHeightStyle||0)-l)>1||a.overflow!==s)?(b.current+=1,{overflow:s,outerHeightStyle:l}):a},f=r.useCallback(()=>{const a=W();me(a)||H(w=>N(w,a))},[W]);Q(()=>{const a=()=>{const v=W();me(v)||Ae.flushSync(()=>{H(F=>N(F,v))})},w=()=>{b.current=0,a()};let l;const s=Be(w),g=x.current,A=ce(g);A.addEventListener("resize",s);let S;return typeof ResizeObserver<"u"&&(S=new ResizeObserver(w),S.observe(g)),()=>{s.clear(),cancelAnimationFrame(l),A.removeEventListener("resize",s),S&&S.disconnect()}},[W]),Q(()=>{f()}),r.useEffect(()=>{b.current=0},[z]);const _=a=>{b.current=0,k||f(),p&&p(a)};return R.jsxs(r.Fragment,{children:[R.jsx("textarea",d({value:z,onChange:_,ref:E,rows:c,style:d({height:B.outerHeightStyle,overflow:B.overflow?"hidden":void 0},I)},M)),R.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:h,tabIndex:-1,style:d({},je.shadow,I,{paddingTop:0,paddingBottom:0})})]})});function De(t){return Ie("MuiInputBase",t)}const Ue=Fe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),te=Ue,_e=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ve=(t,e)=>{const{ownerState:o}=t;return[e.root,o.formControl&&e.formControl,o.startAdornment&&e.adornedStart,o.endAdornment&&e.adornedEnd,o.error&&e.error,o.size==="small"&&e.sizeSmall,o.multiline&&e.multiline,o.color&&e[`color${ee(o.color)}`],o.fullWidth&&e.fullWidth,o.hiddenLabel&&e.hiddenLabel]},Ge=(t,e)=>{const{ownerState:o}=t;return[e.input,o.size==="small"&&e.inputSizeSmall,o.multiline&&e.inputMultiline,o.type==="search"&&e.inputTypeSearch,o.startAdornment&&e.inputAdornedStart,o.endAdornment&&e.inputAdornedEnd,o.hiddenLabel&&e.inputHiddenLabel]},Ke=t=>{const{classes:e,color:o,disabled:p,error:u,endAdornment:c,focused:I,formControl:z,fullWidth:M,hiddenLabel:k,multiline:x,readOnly:E,size:h,startAdornment:b,type:B}=t,H={root:["root",`color${ee(o)}`,p&&"disabled",u&&"error",M&&"fullWidth",I&&"focused",z&&"formControl",h&&h!=="medium"&&`size${ee(h)}`,x&&"multiline",b&&"adornedStart",c&&"adornedEnd",k&&"hiddenLabel",E&&"readOnly"],input:["input",p&&"disabled",B==="search"&&"inputTypeSearch",x&&"inputMultiline",h==="small"&&"inputSizeSmall",k&&"inputHiddenLabel",b&&"inputAdornedStart",c&&"inputAdornedEnd",E&&"readOnly"]};return Me(H,De,e)},qe=ge("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ve})(({theme:t,ownerState:e})=>d({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${te.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},e.multiline&&d({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),Xe=ge("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ge})(({theme:t,ownerState:e})=>{const o=t.palette.mode==="light",p=d({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),u={opacity:"0 !important"},c=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return d({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":p,"&::-moz-placeholder":p,"&:-ms-input-placeholder":p,"&::-ms-input-placeholder":p,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${te.formControl} &`]:{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":c,"&:focus::-moz-placeholder":c,"&:focus:-ms-input-placeholder":c,"&:focus::-ms-input-placeholder":c},[`&.${te.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),Ye=R.jsx(Le,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),Ze=r.forwardRef(function(e,o){var p;const u=Ee({props:e,name:"MuiInputBase"}),{"aria-describedby":c,autoComplete:I,autoFocus:z,className:M,components:k={},componentsProps:x={},defaultValue:E,disabled:h,disableInjectingGlobalStyles:b,endAdornment:B,fullWidth:H=!1,id:W,inputComponent:N="input",inputProps:f={},inputRef:_,maxRows:a,minRows:w,multiline:l=!1,name:s,onBlur:g,onChange:A,onClick:S,onFocus:v,onKeyDown:F,onKeyUp:y,placeholder:V,readOnly:L,renderSuffix:oe,rows:j,slotProps:ne={},slots:re={},startAdornment:O,type:ie="text",value:ye}=u,xe=he(u,_e),$=f.value!=null?f.value:ye,{current:G}=r.useRef($!=null),P=r.useRef(),we=r.useCallback(n=>{},[]),Se=be(P,_,f.ref,we),[K,q]=r.useState(!1),i=He(),m=We({props:u,muiFormControl:i,states:["color","disabled","error","hiddenLabel","size","required","filled"]});m.focused=i?i.focused:K,r.useEffect(()=>{!i&&h&&K&&(q(!1),g&&g())},[i,h,K,g]);const X=i&&i.onFilled,Y=i&&i.onEmpty,T=r.useCallback(n=>{Te(n)?X&&X():Y&&Y()},[X,Y]);Q(()=>{G&&T({value:$})},[$,T,G]);const Ce=n=>{if(m.disabled){n.stopPropagation();return}v&&v(n),f.onFocus&&f.onFocus(n),i&&i.onFocus?i.onFocus(n):q(!0)},ve=n=>{g&&g(n),f.onBlur&&f.onBlur(n),i&&i.onBlur?i.onBlur(n):q(!1)},Re=(n,...de)=>{if(!G){const ue=n.target||P.current;if(ue==null)throw new Error(Oe(1));T({value:ue.value})}f.onChange&&f.onChange(n,...de),A&&A(n,...de)};r.useEffect(()=>{T(P.current)},[]);const ze=n=>{P.current&&n.currentTarget===n.target&&P.current.focus(),S&&S(n)};let Z=N,C=f;l&&Z==="input"&&(j?C=d({type:void 0,minRows:j,maxRows:j},C):C=d({type:void 0,maxRows:a,minRows:w},C),Z=$e);const ke=n=>{T(n.animationName==="mui-auto-fill-cancel"?P.current:{value:"x"})};r.useEffect(()=>{i&&i.setAdornedStart(!!O)},[i,O]);const D=d({},u,{color:m.color||"primary",disabled:m.disabled,endAdornment:B,error:m.error,focused:m.focused,formControl:i,fullWidth:H,hiddenLabel:m.hiddenLabel,multiline:l,size:m.size,startAdornment:O,type:ie}),ae=Ke(D),le=re.root||k.Root||qe,J=ne.root||x.root||{},se=re.input||k.Input||Xe;return C=d({},C,(p=ne.input)!=null?p:x.input),R.jsxs(r.Fragment,{children:[!b&&Ye,R.jsxs(le,d({},J,!fe(le)&&{ownerState:d({},D,J.ownerState)},{ref:o,onClick:ze},xe,{className:pe(ae.root,J.className,M,L&&"MuiInputBase-readOnly"),children:[O,R.jsx(Pe.Provider,{value:null,children:R.jsx(se,d({ownerState:D,"aria-invalid":m.error,"aria-describedby":c,autoComplete:I,autoFocus:z,defaultValue:E,disabled:m.disabled,id:W,onAnimationStart:ke,name:s,placeholder:V,readOnly:L,required:m.required,rows:j,value:$,onKeyDown:F,onKeyUp:y,type:ie},C,!fe(se)&&{as:Z,ownerState:d({},D,C.ownerState)},{ref:Se,className:pe(ae.input,C.className,L&&"MuiInputBase-readOnly"),onBlur:ve,onChange:Re,onFocus:Ce}))}),B,oe?oe(d({},m,{startAdornment:O})):null]}))]})}),et=Ze;export{et as I,qe as a,Xe as b,Ge as c,te as i,Ve as r};
