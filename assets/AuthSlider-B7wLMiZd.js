import{P as a,l as e,G as r,D as s}from"./index-D8YYVO5u.js";import{S as l}from"./index-B8Y1TzpU.js";const c=({items:i})=>{const n={autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return e.jsx(l,{...n,children:i.map((t,o)=>e.jsxs(r,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[e.jsx(r,{item:!0,children:e.jsx(s,{variant:"h1",children:t.title})}),e.jsx(r,{item:!0,children:e.jsx(s,{variant:"subtitle2",children:t.description})})]},o))})};c.propTypes={items:a.array.isRequired};export{c as A};