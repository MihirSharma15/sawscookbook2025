!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fa21f303-1792-49ca-b0e6-e1e83ab85f7d",e._sentryDebugIdIdentifier="sentry-dbid-fa21f303-1792-49ca-b0e6-e1e83ab85f7d")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1864],{98601:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},11958:function(e,t,n){let r;n.d(t,{ee:function(){return e2},Eh:function(){return e7},x8:function(){return e5},VY:function(){return e3},h_:function(){return e8},fC:function(){return e1},xz:function(){return e6}});var o,a=n(52983),i=n.t(a,2);function u(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var s=n(73109),l=n(97458);function c(e,t=[]){let n=[],r=()=>{let t=n.map(e=>a.createContext(e));return function(n){let r=n?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=a.createContext(r),i=n.length;function u(t){let{scope:n,children:r,...u}=t,s=n?.[e][i]||o,c=a.useMemo(()=>u,Object.values(u));return(0,l.jsx)(s.Provider,{value:c,children:r})}return n=[...n,r],u.displayName=t+"Provider",[u,function(n,u){let s=u?.[e][i]||o,l=a.useContext(s);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}var d=n(63730),f=n(13261),p=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=a.forwardRef((e,n)=>{let{asChild:r,...o}=e,a=r?f.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),v=n(6785),m=n(74818),h="dismissableLayer.update",g=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),y=a.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:c,onInteractOutside:d,onDismiss:f,...y}=e,E=a.useContext(g),[x,C]=a.useState(null),N=x?.ownerDocument??globalThis?.document,[,P]=a.useState({}),R=(0,s.e)(t,e=>C(e)),S=Array.from(E.layers),[O]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),A=S.indexOf(O),L=x?S.indexOf(x):-1,T=E.layersWithOutsidePointerEventsDisabled.size>0,k=L>=A,D=function(e,t=globalThis?.document){let n=(0,v.W)(e),r=a.useRef(!1),o=a.useRef(()=>{});return a.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){w("dismissableLayer.pointerDownOutside",n,a,{discrete:!0})},a={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!k||n||(i?.(e),d?.(e),e.defaultPrevented||f?.())},N),j=function(e,t=globalThis?.document){let n=(0,v.W)(e),r=a.useRef(!1);return a.useEffect(()=>{let e=e=>{e.target&&!r.current&&w("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(c?.(e),d?.(e),e.defaultPrevented||f?.())},N);return(0,m.e)(e=>{L!==E.layers.size-1||(r?.(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))},N),a.useEffect(()=>{if(x)return n&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(o=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(x)),E.layers.add(x),b(),()=>{n&&1===E.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=o)}},[x,N,n,E]),a.useEffect(()=>()=>{x&&(E.layers.delete(x),E.layersWithOutsidePointerEventsDisabled.delete(x),b())},[x,E]),a.useEffect(()=>{let e=()=>P({});return document.addEventListener(h,e),()=>document.removeEventListener(h,e)},[]),(0,l.jsx)(p.div,{...y,ref:R,style:{pointerEvents:T?k?"auto":"none":void 0,...e.style},onFocusCapture:u(e.onFocusCapture,j.onFocusCapture),onBlurCapture:u(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:u(e.onPointerDownCapture,D.onPointerDownCapture)})});function b(){let e=new CustomEvent(h);document.dispatchEvent(e)}function w(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&d.flushSync(()=>o.dispatchEvent(a)):o.dispatchEvent(a)}y.displayName="DismissableLayer",a.forwardRef((e,t)=>{let n=a.useContext(g),r=a.useRef(null),o=(0,s.e)(t,r);return a.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(p.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var E=0;function x(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var C="focusScope.autoFocusOnMount",N="focusScope.autoFocusOnUnmount",P={bubbles:!1,cancelable:!0},R=a.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...u}=e,[c,d]=a.useState(null),f=(0,v.W)(o),m=(0,v.W)(i),h=a.useRef(null),g=(0,s.e)(t,e=>d(e)),y=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let e=function(e){if(y.paused||!c)return;let t=e.target;c.contains(t)?h.current=t:A(h.current,{select:!0})},t=function(e){if(y.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||A(h.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&A(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,y.paused]),a.useEffect(()=>{if(c){L.add(y);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(C,P);c.addEventListener(C,f),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(A(r,{select:t}),document.activeElement!==n)return}(S(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&A(c))}return()=>{c.removeEventListener(C,f),setTimeout(()=>{let t=new CustomEvent(N,P);c.addEventListener(N,m),c.dispatchEvent(t),t.defaultPrevented||A(e??document.body,{select:!0}),c.removeEventListener(N,m),L.remove(y)},0)}}},[c,f,m,y]);let b=a.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=S(e);return[O(t,e),O(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&A(a,{select:!0})):(e.preventDefault(),n&&A(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,l.jsx)(p.div,{tabIndex:-1,...u,ref:g,onKeyDown:b})});function S(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function O(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function A(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}R.displayName="FocusScope";var L=(r=[],{add(e){let t=r[0];e!==t&&t?.pause(),(r=T(r,e)).unshift(e)},remove(e){r=T(r,e),r[0]?.resume()}});function T(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var k=globalThis?.document?a.useLayoutEffect:()=>{},D=i["useId".toString()]||(()=>void 0),j=0,I=n(22296),M=n(62686),F=n(24562),_=a.forwardRef((e,t)=>{let{children:n,width:r=10,height:o=5,...a}=e;return(0,l.jsx)(p.svg,{...a,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,l.jsx)("polygon",{points:"0,0 30,0 15,10"})})});_.displayName="Arrow";var W="Popper",[$,B]=c(W),[z,U]=$(W),Y=e=>{let{__scopePopper:t,children:n}=e,[r,o]=a.useState(null);return(0,l.jsx)(z,{scope:t,anchor:r,onAnchorChange:o,children:n})};Y.displayName=W;var H="PopperAnchor",X=a.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:r,...o}=e,i=U(H,n),u=a.useRef(null),c=(0,s.e)(t,u);return a.useEffect(()=>{i.onAnchorChange(r?.current||u.current)}),r?null:(0,l.jsx)(p.div,{...o,ref:c})});X.displayName=H;var K="PopperContent",[Z,q]=$(K),V=a.forwardRef((e,t)=>{let{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:i="center",alignOffset:u=0,arrowPadding:c=0,avoidCollisions:d=!0,collisionBoundary:f=[],collisionPadding:m=0,sticky:h="partial",hideWhenDetached:g=!1,updatePositionStrategy:y="optimized",onPlaced:b,...w}=e,E=U(K,n),[x,C]=a.useState(null),N=(0,s.e)(t,e=>C(e)),[P,R]=a.useState(null),S=function(e){let[t,n]=a.useState(void 0);return k(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let a=t[0];if("borderBoxSize"in a){let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(P),O=S?.width??0,A=S?.height??0,L="number"==typeof m?m:{top:0,right:0,bottom:0,left:0,...m},T=Array.isArray(f)?f:[f],D=T.length>0,j={padding:L,boundary:T.filter(ee),altBoundary:D},{refs:_,floatingStyles:W,placement:$,isPositioned:B,middlewareData:z}=(0,I.YF)({strategy:"fixed",placement:r+("center"!==i?"-"+i:""),whileElementsMounted:(...e)=>(0,M.Me)(...e,{animationFrame:"always"===y}),elements:{reference:E.anchor},middleware:[(0,F.cv)({mainAxis:o+A,alignmentAxis:u}),d&&(0,F.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===h?(0,F.dr)():void 0,...j}),d&&(0,F.RR)({...j}),(0,F.dp)({...j,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:a}=t.reference,i=e.floating.style;i.setProperty("--radix-popper-available-width",`${n}px`),i.setProperty("--radix-popper-available-height",`${r}px`),i.setProperty("--radix-popper-anchor-width",`${o}px`),i.setProperty("--radix-popper-anchor-height",`${a}px`)}}),P&&(0,I.x7)({element:P,padding:c}),et({arrowWidth:O,arrowHeight:A}),g&&(0,F.Cp)({strategy:"referenceHidden",...j})]}),[Y,H]=en($),X=(0,v.W)(b);k(()=>{B&&X?.()},[B,X]);let q=z.arrow?.x,V=z.arrow?.y,G=z.arrow?.centerOffset!==0,[J,Q]=a.useState();return k(()=>{x&&Q(window.getComputedStyle(x).zIndex)},[x]),(0,l.jsx)("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:B?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:J,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,l.jsx)(Z,{scope:n,placedSide:Y,onArrowChange:R,arrowX:q,arrowY:V,shouldHideArrow:G,children:(0,l.jsx)(p.div,{"data-side":Y,"data-align":H,...w,ref:N,style:{...w.style,animation:B?void 0:"none"}})})})});V.displayName=K;var G="PopperArrow",J={top:"bottom",right:"left",bottom:"top",left:"right"},Q=a.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,o=q(G,n),a=J[o.placedSide];return(0,l.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,l.jsx)(_,{...r,ref:t,style:{...r.style,display:"block"}})})});function ee(e){return null!==e}Q.displayName=G;var et=e=>({name:"transformOrigin",options:e,fn(t){let{placement:n,rects:r,middlewareData:o}=t,a=o.arrow?.centerOffset!==0,i=a?0:e.arrowWidth,u=a?0:e.arrowHeight,[s,l]=en(n),c={start:"0%",center:"50%",end:"100%"}[l],d=(o.arrow?.x??0)+i/2,f=(o.arrow?.y??0)+u/2,p="",v="";return"bottom"===s?(p=a?c:`${d}px`,v=`${-u}px`):"top"===s?(p=a?c:`${d}px`,v=`${r.floating.height+u}px`):"right"===s?(p=`${-u}px`,v=a?c:`${f}px`):"left"===s&&(p=`${r.floating.width+u}px`,v=a?c:`${f}px`),{data:{x:p,y:v}}}});function en(e){let[t,n="center"]=e.split("-");return[t,n]}var er=a.forwardRef((e,t)=>{let{container:n,...r}=e,[o,i]=a.useState(!1);k(()=>i(!0),[]);let u=n||o&&globalThis?.document?.body;return u?d.createPortal((0,l.jsx)(p.div,{...r,ref:t}),u):null});er.displayName="Portal";var eo=e=>{let t,n;let{present:r,children:o}=e,i=function(e){var t,n;let[r,o]=a.useState(),i=a.useRef({}),u=a.useRef(e),s=a.useRef("none"),[l,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},a.useReducer((e,t)=>n[e][t]??e,t));return a.useEffect(()=>{let e=ea(i.current);s.current="mounted"===l?e:"none"},[l]),k(()=>{let t=i.current,n=u.current;if(n!==e){let r=s.current,o=ea(t);e?c("MOUNT"):"none"===o||t?.display==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),u.current=e}},[e,c]),k(()=>{if(r){let e=e=>{let t=ea(i.current).includes(e.animationName);e.target===r&&t&&d.flushSync(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(s.current=ea(i.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:a.useCallback(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(r),u="function"==typeof o?o({present:i.isPresent}):a.Children.only(o),l=(0,s.e)(i.ref,(t=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.ref:(t=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.props.ref:u.props.ref||u.ref);return"function"==typeof o||i.isPresent?a.cloneElement(u,{ref:l}):null};function ea(e){return e?.animationName||"none"}eo.displayName="Presence";var ei=n(40627),eu=n(43112),es=n(81143),el=n(34705),ec=(0,n(34037)._)(),ed=function(){},ef=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:ed,onWheelCapture:ed,onTouchMoveCapture:ed}),o=r[0],i=r[1],u=e.forwardProps,s=e.children,l=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,p=e.sideCar,v=e.noIsolation,m=e.inert,h=e.allowPinchZoom,g=e.as,y=e.gapMode,b=(0,eu._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=(0,el.q)([n,t]),E=(0,eu.pi)((0,eu.pi)({},b),o);return a.createElement(a.Fragment,null,d&&a.createElement(p,{sideCar:ec,removeScrollBar:c,shards:f,noIsolation:v,inert:m,setCallbacks:i,allowPinchZoom:!!h,lockRef:n,gapMode:y}),u?a.cloneElement(a.Children.only(s),(0,eu.pi)((0,eu.pi)({},E),{ref:w})):a.createElement(void 0===g?"div":g,(0,eu.pi)({},E,{className:l,ref:w}),s))});ef.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},ef.classNames={fullWidth:es.zi,zeroRight:es.pF};var ep=n(25061),ev=n(47689),em=n(47231),eh=!1;if("undefined"!=typeof window)try{var eg=Object.defineProperty({},"passive",{get:function(){return eh=!0,!0}});window.addEventListener("test",eg,eg),window.removeEventListener("test",eg,eg)}catch(e){eh=!1}var ey=!!eh&&{passive:!1},eb=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ew=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),eE(e,r)){var o=ex(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},eE=function(e,t){return"v"===e?eb(t,"overflowY"):eb(t,"overflowX")},ex=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eC=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,s=n.target,l=t.contains(s),c=!1,d=u>0,f=0,p=0;do{var v=ex(e,s),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&eE(e,s)&&(f+=h,p+=m),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return d&&(o&&1>Math.abs(f)||!o&&u>f)?c=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(c=!0),c},eN=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eP=function(e){return[e.deltaX,e.deltaY]},eR=function(e){return e&&"current"in e?e.current:e},eS=0,eO=[],eA=(0,ep.L)(ec,function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(eS++)[0],i=a.useState(em.Ws)[0],u=a.useRef(e);a.useEffect(function(){u.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,eu.ev)([e.lockRef.current],(e.shards||[]).map(eR),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=a.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var o,a=eN(e),i=n.current,s="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],c=e.target,d=Math.abs(s)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=ew(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ew(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(s||l)&&(r.current=o),!o)return!0;var p=r.current||o;return eC(p,t,e,"h"===p?s:l,!0)},[]),l=a.useCallback(function(e){if(eO.length&&eO[eO.length-1]===i){var n="deltaY"in e?eP(e):eN(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(eR).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?s(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=a.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=a.useCallback(function(e){n.current=eN(e),r.current=void 0},[]),f=a.useCallback(function(t){c(t.type,eP(t),t.target,s(t,e.lockRef.current))},[]),p=a.useCallback(function(t){c(t.type,eN(t),t.target,s(t,e.lockRef.current))},[]);a.useEffect(function(){return eO.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ey),document.addEventListener("touchmove",l,ey),document.addEventListener("touchstart",d,ey),function(){eO=eO.filter(function(e){return e!==i}),document.removeEventListener("wheel",l,ey),document.removeEventListener("touchmove",l,ey),document.removeEventListener("touchstart",d,ey)}},[]);var v=e.removeScrollBar,m=e.inert;return a.createElement(a.Fragment,null,m?a.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?a.createElement(ev.jp,{gapMode:e.gapMode}):null)}),eL=a.forwardRef(function(e,t){return a.createElement(ef,(0,eu.pi)({},e,{ref:t,sideCar:eA}))});eL.classNames=ef.classNames;var eT="Popover",[ek,eD]=c(eT,[B]),ej=B(),[eI,eM]=ek(eT),eF=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:u=!1}=e,s=ej(t),c=a.useRef(null),[d,f]=a.useState(!1),[p=!1,m]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=a.useState(e),[r]=n,o=a.useRef(r),i=(0,v.W)(t);return a.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,u=i?e:r,s=(0,v.W)(n);return[u,a.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else o(t)},[i,e,o,s])]}({prop:r,defaultProp:o,onChange:i});return(0,l.jsx)(Y,{...s,children:(0,l.jsx)(eI,{scope:t,contentId:function(e){let[t,n]=a.useState(D());return k(()=>{n(e=>e??String(j++))},[void 0]),t?`radix-${t}`:""}(),triggerRef:c,open:p,onOpenChange:m,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:d,onCustomAnchorAdd:a.useCallback(()=>f(!0),[]),onCustomAnchorRemove:a.useCallback(()=>f(!1),[]),modal:u,children:n})})};eF.displayName=eT;var e_="PopoverAnchor",eW=a.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=eM(e_,n),i=ej(n),{onCustomAnchorAdd:u,onCustomAnchorRemove:s}=o;return a.useEffect(()=>(u(),()=>s()),[u,s]),(0,l.jsx)(X,{...i,...r,ref:t})});eW.displayName=e_;var e$="PopoverTrigger",eB=a.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=eM(e$,n),a=ej(n),i=(0,s.e)(t,o.triggerRef),c=(0,l.jsx)(p.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e0(o.open),...r,ref:i,onClick:u(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?c:(0,l.jsx)(X,{asChild:!0,...a,children:c})});eB.displayName=e$;var ez="PopoverPortal",[eU,eY]=ek(ez,{forceMount:void 0}),eH=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,a=eM(ez,t);return(0,l.jsx)(eU,{scope:t,forceMount:n,children:(0,l.jsx)(eo,{present:n||a.open,children:(0,l.jsx)(er,{asChild:!0,container:o,children:r})})})};eH.displayName=ez;var eX="PopoverContent",eK=a.forwardRef((e,t)=>{let n=eY(eX,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,a=eM(eX,e.__scopePopover);return(0,l.jsx)(eo,{present:r||a.open,children:a.modal?(0,l.jsx)(eZ,{...o,ref:t}):(0,l.jsx)(eq,{...o,ref:t})})});eK.displayName=eX;var eZ=a.forwardRef((e,t)=>{let n=eM(eX,e.__scopePopover),r=a.useRef(null),o=(0,s.e)(t,r),i=a.useRef(!1);return a.useEffect(()=>{let e=r.current;if(e)return(0,ei.Ry)(e)},[]),(0,l.jsx)(eL,{as:f.g7,allowPinchZoom:!0,children:(0,l.jsx)(eV,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,e=>{e.preventDefault(),i.current||n.triggerRef.current?.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;i.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:u(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),eq=a.forwardRef((e,t)=>{let n=eM(eX,e.__scopePopover),r=a.useRef(!1),o=a.useRef(!1);return(0,l.jsx)(eV,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eV=a.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,...p}=e,v=eM(eX,n),m=ej(n);return a.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??x()),document.body.insertAdjacentElement("beforeend",e[1]??x()),E++,()=>{1===E&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),E--}},[]),(0,l.jsx)(R,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,l.jsx)(y,{asChild:!0,disableOutsidePointerEvents:u,onInteractOutside:f,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:d,onDismiss:()=>v.onOpenChange(!1),children:(0,l.jsx)(V,{"data-state":e0(v.open),role:"dialog",id:v.contentId,...m,...p,ref:t,style:{...p.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),eG="PopoverClose",eJ=a.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=eM(eG,n);return(0,l.jsx)(p.button,{type:"button",...r,ref:t,onClick:u(e.onClick,()=>o.onOpenChange(!1))})});eJ.displayName=eG;var eQ=a.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=ej(n);return(0,l.jsx)(Q,{...o,...r,ref:t})});function e0(e){return e?"open":"closed"}eQ.displayName="PopoverArrow";var e1=eF,e2=eW,e6=eB,e8=eH,e3=eK,e5=eJ,e7=eQ},6785:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(52983);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},74818:function(e,t,n){n.d(t,{e:function(){return a}});var r=n(52983),o=n(6785);function a(e,t=globalThis?.document){let n=(0,o.W)(e);r.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}}}]);