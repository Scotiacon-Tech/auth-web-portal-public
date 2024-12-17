import{aW as ge,S as _,a4 as X,aX as j,ah as $,aK as O,R as Y,J as T,M as I,b as i,aY as K,af as Z,a8 as k,r as fe,g as E,O as me,ay as ye,j as be,ai as G,ak as he,F as Se,aj as _e,a1 as z,ad as Q,al as p,ap as xe,aZ as Te,ae as Ve,N as ke}from"./EXqdmSXJ.js";import{u as ee,l as H,r as L,y as te,k as Ie,z as Pe,M as Ce,v as Be,o as A,m as we,q as ze,N as Ne,x as Re,H as ae,w as De,A as Ae,G as Ee}from"./BtRdvlQN.js";import{u as je,a as N,m as $e,b as R,c as F}from"./CmT917pQ.js";const pe=_({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function et(e,r){let t=()=>{};function n(a){t==null||t();const s=Number(a?e.openDelay:e.closeDelay);return new Promise(g=>{t=ge(s,()=>{r==null||r(a),g(a)})})}function c(){return n(!0)}function d(){return n(!1)}return{clearDelay:t,runOpenDelay:c,runCloseDelay:d}}function tt(){const r=X("useScopeId").vnode.scopeId;return{scopeId:r?{[r]:""}:void 0}}const Oe=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),D=(e,r)=>{let{slots:t}=r;const{transition:n,disabled:c,group:d,...a}=e,{component:s=d?j:$,...g}=typeof n=="object"?n:{};return O(s,Y(typeof n=="string"?{name:c?"":n}:g,typeof n=="string"?{}:Object.fromEntries(Object.entries({disabled:c,group:d}).filter(l=>{let[o,v]=l;return v!==void 0})),a),t)};function He(e){return{aspectStyles:I(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const ne=_({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...R(),...$e()},"VResponsive"),J=T()({name:"VResponsive",props:ne(),setup(e,r){let{slots:t}=r;const{aspectStyles:n}=He(e),{dimensionStyles:c}=je(e);return N(()=>{var d;return i("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[i("div",{class:"v-responsive__sizer",style:n.value},null),(d=t.additional)==null?void 0:d.call(t),t.default&&i("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function Le(e,r){if(!K)return;const t=r.modifiers||{},n=r.value,{handler:c,options:d}=typeof n=="object"?n:{handler:n,options:{}},a=new IntersectionObserver(function(){var v;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const l=(v=e._observe)==null?void 0:v[r.instance.$.uid];if(!l)return;const o=s.some(b=>b.isIntersecting);c&&(!t.quiet||l.init)&&(!t.once||o||l.init)&&c(o,s,g),o&&t.once?se(e,r):l.init=!0},d);e._observe=Object(e._observe),e._observe[r.instance.$.uid]={init:!1,observer:a},a.observe(e)}function se(e,r){var n;const t=(n=e._observe)==null?void 0:n[r.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[r.instance.$.uid])}const Fe={mounted:Le,unmounted:se},We=_({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ne(),...R(),...L(),...Oe()},"VImg"),ie=T()({name:"VImg",directives:{intersect:Fe},props:We(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:t,slots:n}=r;const{backgroundColorClasses:c,backgroundColorStyles:d}=ee(Z(e,"color")),{roundedClasses:a}=H(e),s=X("VImg"),g=k(""),l=fe(),o=k(e.eager?"loading":"idle"),v=k(),b=k(),f=I(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),x=I(()=>f.value.aspect||v.value/b.value||0);E(()=>e.src,()=>{P(o.value!=="idle")}),E(x,(u,m)=>{!u&&m&&l.value&&h(l.value)}),ye(()=>P());function P(u){if(!(e.eager&&u)&&!(K&&!u&&!e.eager)){if(o.value="loading",f.value.lazySrc){const m=new Image;m.src=f.value.lazySrc,h(m,null)}f.value.src&&me(()=>{var m;t("loadstart",((m=l.value)==null?void 0:m.currentSrc)||f.value.src),setTimeout(()=>{var S;if(!s.isUnmounted)if((S=l.value)!=null&&S.complete){if(l.value.naturalWidth||B(),o.value==="error")return;x.value||h(l.value,null),o.value==="loading"&&C()}else x.value||h(l.value),w()})})}}function C(){var u;s.isUnmounted||(w(),h(l.value),o.value="loaded",t("load",((u=l.value)==null?void 0:u.currentSrc)||f.value.src))}function B(){var u;s.isUnmounted||(o.value="error",t("error",((u=l.value)==null?void 0:u.currentSrc)||f.value.src))}function w(){const u=l.value;u&&(g.value=u.currentSrc||u.src)}let V=-1;be(()=>{clearTimeout(V)});function h(u){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{if(clearTimeout(V),s.isUnmounted)return;const{naturalHeight:q,naturalWidth:M}=u;q||M?(v.value=M,b.value=q):!u.complete&&o.value==="loading"&&m!=null?V=window.setTimeout(S,m):(u.currentSrc.endsWith(".svg")||u.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,b.value=1)};S()}const W=I(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),le=()=>{var S;if(!f.value.src||o.value==="idle")return null;const u=i("img",{class:["v-img__img",W.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:C,onError:B},null),m=(S=n.sources)==null?void 0:S.call(n);return i(D,{transition:e.transition,appear:!0},{default:()=>[G(m?i("picture",{class:"v-img__picture"},[m,u]):u,[[_e,o.value==="loaded"]])]})},ue=()=>i(D,{transition:e.transition},{default:()=>[f.value.lazySrc&&o.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",W.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),ce=()=>n.placeholder?i(D,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!n.error)&&i("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,de=()=>n.error?i(D,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&i("div",{class:"v-img__error"},[n.error()])]}):null,ve=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,U=k(!1);{const u=E(x,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{U.value=!0})}),u())})}return N(()=>{const u=J.filterProps(e);return G(i(J,Y({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!U.value},c.value,a.value,e.class],style:[{width:z(e.width==="auto"?v.value:e.width)},d.value,e.style]},u,{aspectRatio:x.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>i(Se,null,[i(le,null,null),i(ue,null,null),i(ve,null,null),i(ce,null,null),i(de,null,null)]),default:n.default}),[[he("intersect"),{handler:P,options:e.options},null,{once:!0}]])}),{currentSrc:g,image:l,state:o,naturalWidth:v,naturalHeight:b}}}),Ue=_({start:Boolean,end:Boolean,icon:xe,image:String,text:String,...ae(),...R(),...Re(),...L(),...Ne(),...F(),...p(),...ze({variant:"flat"})},"VAvatar"),at=T()({name:"VAvatar",props:Ue(),setup(e,r){let{slots:t}=r;const{themeClasses:n}=Q(e),{borderClasses:c}=te(e),{colorClasses:d,colorStyles:a,variantClasses:s}=Ie(e),{densityClasses:g}=Pe(e),{roundedClasses:l}=H(e),{sizeClasses:o,sizeStyles:v}=Ce(e);return N(()=>i(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,c.value,d.value,g.value,l.value,o.value,s.value,e.class],style:[a.value,v.value,e.style]},{default:()=>[t.default?i(A,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?i(ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?i(Be,{key:"icon",icon:e.icon},null):e.text,we(!1,"v-avatar")]})),{}}}),qe=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function y(e,r,t){return T()({name:e,props:qe({mode:t,origin:r}),setup(n,c){let{slots:d}=c;const a={onBeforeEnter(s){n.origin&&(s.style.transformOrigin=n.origin)},onLeave(s){if(n.leaveAbsolute){const{offsetTop:g,offsetLeft:l,offsetWidth:o,offsetHeight:v}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${g}px`,s.style.left=`${l}px`,s.style.width=`${o}px`,s.style.height=`${v}px`}n.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(n.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:g,top:l,left:o,width:v,height:b}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=g||"",s.style.top=l||"",s.style.left=o||"",s.style.width=v||"",s.style.height=b||""}}};return()=>{const s=n.group?j:$;return O(s,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:a},d.default)}}})}function re(e,r){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return T()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(n,c){let{slots:d}=c;const a=n.group?j:$;return()=>O(a,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:r},d.default)}})}function oe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=Te(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const s=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const g=`${a[n]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=s.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=g})},onAfterEnter:d,onEnterCancelled:d,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[n]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:c,onLeaveCancelled:c};function c(a){e&&a._parent&&a._parent.classList.remove(e),d(a)}function d(a){const s=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,s!=null&&(a.style[t]=s),delete a._initialStyle}}y("fab-transition","center center","out-in");y("dialog-bottom-transition");y("dialog-top-transition");y("fade-transition");const nt=y("scale-transition");y("scroll-x-transition");y("scroll-x-reverse-transition");y("scroll-y-transition");y("scroll-y-reverse-transition");y("slide-x-transition");y("slide-x-reverse-transition");const st=y("slide-y-transition");y("slide-y-reverse-transition");const Me=re("expand-transition",oe()),it=re("expand-x-transition",oe("",!0)),rt=De("v-spacer","div","VSpacer"),Ge=_({text:String,...R(),...F()},"VToolbarTitle"),Je=T()({name:"VToolbarTitle",props:Ge(),setup(e,r){let{slots:t}=r;return N(()=>{const n=!!(t.default||t.text||e.text);return i(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var c;return[n&&i("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(c=t.default)==null?void 0:c.call(t)])]}})}),{}}}),Xe=[null,"prominent","default","comfortable","compact"],Ye=_({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ae(),...R(),...Ee(),...L(),...F({tag:"header"}),...p()},"VToolbar"),ot=T()({name:"VToolbar",props:Ye(),setup(e,r){var f;let{slots:t}=r;const{backgroundColorClasses:n,backgroundColorStyles:c}=ee(Z(e,"color")),{borderClasses:d}=te(e),{elevationClasses:a}=Ae(e),{roundedClasses:s}=H(e),{themeClasses:g}=Q(e),{rtlClasses:l}=Ve(),o=k(!!(e.extended||(f=t.extension)!=null&&f.call(t))),v=I(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=I(()=>o.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),N(()=>{var B;const x=!!(e.title||t.title),P=!!(t.image||e.image),C=(B=t.extension)==null?void 0:B.call(t);return o.value=!!(e.extended||C),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,d.value,a.value,s.value,g.value,l.value,e.class],style:[c.value,e.style]},{default:()=>[P&&i("div",{key:"image",class:"v-toolbar__image"},[t.image?i(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):i(ie,{key:"image-img",cover:!0,src:e.image},null)]),i(A,{defaults:{VTabs:{height:z(v.value)}}},{default:()=>{var w,V,h;return[i("div",{class:"v-toolbar__content",style:{height:z(v.value)}},[t.prepend&&i("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),x&&i(Je,{key:"title",text:e.title},{text:t.title}),(V=t.default)==null?void 0:V.call(t),t.append&&i("div",{class:"v-toolbar__append"},[(h=t.append)==null?void 0:h.call(t)])])]}}),i(A,{defaults:{VTabs:{height:z(b.value)}}},{default:()=>[i(Me,null,{default:()=>[o.value&&i("div",{class:"v-toolbar__extension",style:{height:z(b.value)}},[C])]})]})]})}),{contentHeight:v,extensionHeight:b}}});export{Fe as I,D as M,rt as V,tt as a,Oe as b,at as c,ie as d,ot as e,Je as f,nt as g,st as h,it as i,Ye as j,Ge as k,Me as l,pe as m,et as u};
