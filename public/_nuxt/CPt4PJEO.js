import"./BtRdvlQN.js";import{u as R,a as G,c as u,m as _,b as f}from"./CmT917pQ.js";import{J as d,ae as B,b as I,S as g,M as k,aN as c,aO as y,aK as N}from"./EXqdmSXJ.js";const M=g({fluid:{type:Boolean,default:!1},...f(),..._(),...u()},"VContainer"),Q=d()({name:"VContainer",props:M(),setup(e,a){let{slots:t}=a;const{rtlClasses:s}=B(),{dimensionStyles:n}=R(e);return G(()=>I(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:[n.value,e.style]},t)),{}}}),v=c.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),j=c.reduce((e,a)=>{const t="offset"+y(a);return e[t]={type:[String,Number],default:null},e},{}),L=c.reduce((e,a)=>{const t="order"+y(a);return e[t]={type:[String,Number],default:null},e},{}),b={col:Object.keys(v),offset:Object.keys(j),order:Object.keys(L)};function T(e,a,t){let s=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const U=["auto","start","end","center","baseline","stretch"],K=g({cols:{type:[Boolean,String,Number],default:!1},...v,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>U.includes(e)},...f(),...u()},"VCol"),X=d()({name:"VCol",props:K(),setup(e,a){let{slots:t}=a;const s=k(()=>{const n=[];let l;for(l in b)b[l].forEach(o=>{const i=e[o],S=T(l,o,i);S&&n.push(S)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return N(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),m=["start","end","center"],P=["space-between","space-around","space-evenly"];function C(e,a){return c.reduce((t,s)=>{const n=e+y(s);return t[n]=a(),t},{})}const F=[...m,"baseline","stretch"],$=e=>F.includes(e),h=C("align",()=>({type:String,default:null,validator:$})),x=[...m,...P],w=e=>x.includes(e),E=C("justify",()=>({type:String,default:null,validator:w})),D=[...m,...P,"stretch"],A=e=>D.includes(e),O=C("alignContent",()=>({type:String,default:null,validator:A})),V={align:Object.keys(h),justify:Object.keys(E),alignContent:Object.keys(O)},J={align:"align",justify:"justify",alignContent:"align-content"};function z(e,a,t){let s=J[e];if(t!=null){if(a){const n=a.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const W=g({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:A},...O,...f(),...u()},"VRow"),Z=d()({name:"VRow",props:W(),setup(e,a){let{slots:t}=a;const s=k(()=>{const n=[];let l;for(l in V)V[l].forEach(r=>{const o=e[r],i=z(l,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return N(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{Z as V,X as a,Q as b};