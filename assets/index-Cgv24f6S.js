import{a5 as d,l as e,d6 as a,x as j,y as v,G as t,D as i,S as b,$ as y,a1 as V}from"./index-aYNdDFsw.js";import{S as u}from"./SubCard-DNvCAQ00.js";import{S as C}from"./CardSecondaryAction-CQwsXTZR.js";import"./Tooltip-DeGY6c7u.js";function _(){const[r,n]=d.useState(50),l=(c,s)=>{n(s)};return e.jsx(a,{value:r,onChange:l,"aria-labelledby":"continuous-slider"})}function T(){const[r,n]=d.useState(35),l=(c,s)=>{n(s)};return e.jsx(a,{disabled:!0,value:r,onChange:l,"aria-labelledby":"continuous-slider"})}var x={},$=v;Object.defineProperty(x,"__esModule",{value:!0});var p=x.default=void 0,D=$(j()),I=e;p=x.default=(0,D.default)((0,I.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M5 9v6h4l5 5V4L9 9z"}),"VolumeDown");var h={},L=v;Object.defineProperty(h,"__esModule",{value:!0});var g=h.default=void 0,M=L(j()),P=e;g=h.default=(0,M.default)((0,P.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"}),"VolumeUp");function R(){const[r,n]=d.useState(30),l=(c,s)=>{n(s)};return e.jsxs(t,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(t,{item:!0,children:e.jsx(p,{color:"primary"})}),e.jsx(t,{item:!0,xs:!0,children:e.jsx(a,{value:r,onChange:l,"aria-labelledby":"continuous-slider"})}),e.jsx(t,{item:!0,children:e.jsx(g,{color:"primary"})})]})}function A(){const[r,n]=d.useState(50),l=(S,o)=>{n(o)},[c,s]=d.useState(78),f=(S,o)=>{s(o)};return e.jsxs(t,{container:!0,direction:"column",children:[e.jsxs(t,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,children:e.jsx(i,{variant:"caption",children:"Progress"})}),e.jsx(t,{item:!0,xs:!0,children:e.jsx(a,{value:r,onChange:l,"aria-labelledby":"continuous-slider"})}),e.jsx(t,{item:!0,children:e.jsxs(i,{variant:"h6",children:[r,"%"]})})]}),e.jsxs(t,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,children:e.jsx(i,{variant:"caption",children:"Progress"})}),e.jsx(t,{item:!0,xs:!0,children:e.jsx(a,{value:c,color:"secondary",onChange:f,"aria-labelledby":"continuous-slider"})}),e.jsx(t,{item:!0,children:e.jsxs(i,{variant:"h6",children:[c,"%"]})})]})]})}function k(r){return`${r}°C`}function q(){return e.jsxs(t,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[e.jsx(t,{item:!0,children:e.jsx(i,{variant:"h6",color:"primary",children:"15K"})}),e.jsx(t,{item:!0,xs:!0,children:e.jsx(a,{defaultValue:40,getAriaValueText:k,valueLabelDisplay:"on",min:15,max:60})}),e.jsx(t,{item:!0,children:e.jsx(i,{variant:"h6",color:"primary",children:"60K"})})]})}function K(r){return`${r}°C`}function w(){return e.jsxs(t,{item:!0,xs:12,container:!0,spacing:2,alignItems:"center",sx:{mt:2.5},children:[e.jsx(t,{item:!0,children:e.jsx(i,{variant:"h6",color:"primary",children:"15K"})}),e.jsx(t,{item:!0,xs:!0,children:e.jsx(a,{defaultValue:25,getAriaValueText:K,valueLabelDisplay:"on","aria-labelledby":"discrete-slider-small-steps",marks:!0,step:5,min:15,max:60})}),e.jsx(t,{item:!0,children:e.jsx(i,{variant:"h6",color:"primary",children:"60K"})})]})}function m(r){return`${r}°C`}const W=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function z(){return e.jsxs(b,{sx:{height:300},spacing:1,direction:"row",children:[e.jsx(a,{"aria-label":"Temperature",orientation:"vertical",getAriaValueText:m,defaultValue:30}),e.jsx(a,{"aria-label":"Temperature",orientation:"vertical",defaultValue:30,disabled:!0}),e.jsx(a,{getAriaLabel:()=>"Temperature",orientation:"vertical",getAriaValueText:m,defaultValue:[20,37],marks:W})]})}const U=()=>e.jsx(y,{title:"Slider",secondary:e.jsx(C,{link:"https://next.material-ui.com/components/slider/"}),children:e.jsxs(t,{container:!0,spacing:V,children:[e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"Basic Slider",children:e.jsx(_,{})})}),e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"Disabled",children:e.jsx(T,{})})}),e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"Volume",children:e.jsx(R,{})})}),e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"With Label",children:e.jsx(A,{})})}),e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"With Popup Value",children:e.jsx(q,{})})}),e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"Steps With Popup Value",children:e.jsx(w,{})})}),e.jsx(t,{item:!0,xs:12,md:4,children:e.jsx(u,{title:"Vertical Slider",children:e.jsx(z,{})})})]})});export{U as default};