var y=Object.defineProperty;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&h(r,t,e[t]);if(u)for(var t of u(e))j.call(e,t)&&h(r,t,e[t]);return r};import{r as x}from"./vendor.0d147815.js";import{w as p,e as k,l as C,c as f,f as V,k as b,C as F,p as S,P as I}from"./index.6003c5c3.js";import{j as c,a as n}from"./index.1979a454.js";function R(r,e,t){const i=[];for(let o=0;o<t;o++)for(let l=0;l<e;l++)for(let a=0;a<r;a++)i.push(Math.random());return i}function d(r,e,t,i=0){const o=[];for(let l=0;l<t;l++)for(let a=0;a<e;a++)for(let s=0;s<r;s++){const v=[s,a,l];o.push(v[i])}return o}const g=[R(10,10,10),d(10,10,10,0),d(10,10,10,1),d(10,10,10,2)];function E(r){const e=x.exports.useContext(I.ViewContext),t=i=>{const o=Number(i.currentTarget.value);r.setValue(o),setTimeout(e.renderView,0)};return n("input",{type:"range",min:"0",step:"1",max:r.max,value:r.value,onChange:t,style:m({position:"absolute",zIndex:100,right:"5px",top:"25px"},r.style)})}function A(r){const[e,t]=x.exports.useState(0),i=e?10:1,o=e?5:.5;return c("div",{style:{width:"100%",height:"100%"},children:[c(p,{id:"0",children:[n(E,{max:g.length-1,value:e,setValue:t}),c(k,{children:[n(C,{rescaleColorMap:!1}),n(f,{children:n(V,{spacing:[1,1,1],dimensions:[10,10,10],origin:[0,0,0],children:n(b,{children:n(F,{registration:"setScalars",type:"Float32Array",values:g[e]})})})})]})]}),n("div",{style:{position:"absolute",width:"20%",height:"20%",bottom:0,right:0},children:n(p,{background:[1,1,1],triggerRender:e,children:n(S,{kSlice:5,property:{colorWindow:i,colorLevel:o},children:n(f,{})})})})]})}export{A as default};
