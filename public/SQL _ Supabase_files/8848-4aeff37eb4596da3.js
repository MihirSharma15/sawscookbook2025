!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b5d26be4-7047-4fff-b9fc-f93865b29a34",e._sentryDebugIdIdentifier="sentry-dbid-b5d26be4-7047-4fff-b9fc-f93865b29a34")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8848],{18207:function(e,t,n){(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var c=[],u=!0,i=!1;try{for(o=o.call(e);!(u=(n=o.next()).done)&&(c.push(n.value),!t||c.length!==t);u=!0);}catch(e){i=!0,r=e}finally{try{u||null==o.return||o.return()}finally{if(i)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var a,s,l,p,f,d={exports:{}};d.exports=(function(){if(f)return p;f=1;var e=l?s:(l=1,s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function t(){}function n(){}return n.resetWarningCache=t,p=function(){function r(t,n,r,o,c,u){if(u!==e){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function o(){return r}r.isRequired=r;var c={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return c.PropTypes=c,c}})()();var h=(a=d.exports)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,m=function(e,n,r){var o=!!r,c=t.useRef(r);t.useEffect(function(){c.current=r},[r]),t.useEffect(function(){if(!o||!e)return function(){};var t=function(){c.current&&c.current.apply(c,arguments)};return e.on(n,t),function(){e.off(n,t)}},[o,n,e,c])},y=function(e){var n=t.useRef(e);return t.useEffect(function(){n.current=e},[e]),n.current},v=function(e){return null!==e&&"object"===o(e)},g="[object Object]",b=function e(t,n){if(!v(t)||!v(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===g;if(o!==(Object.prototype.toString.call(n)===g))return!1;if(!o&&!r)return t===n;var c=Object.keys(t),u=Object.keys(n);if(c.length!==u.length)return!1;for(var i={},a=0;a<c.length;a+=1)i[c[a]]=!0;for(var s=0;s<u.length;s+=1)i[u[s]]=!0;var l=Object.keys(i);return l.length===c.length&&l.every(function(r){return e(t[r],n[r])})},k=function(e,t,n){return v(e)?Object.keys(e).reduce(function(o,u){var i=!v(t)||!b(e[u],t[u]);return n.includes(u)?(i&&console.warn("Unsupported prop change: options.".concat(u," is not a mutable property.")),o):i?r(r({},o||{}),{},c({},u,e[u])):o},null):null},C="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;if(null===e||v(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment)return e;throw Error(t)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;if(v(e)&&"function"==typeof e.then)return{tag:"async",stripePromise:Promise.resolve(e).then(function(e){return E(e,t)})};var n=E(e,t);return null===n?{tag:"empty"}:{tag:"sync",stripe:n}},w=function(e){e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"3.1.0"}),e.registerAppInfo({name:"react-stripe-js",version:"3.1.0",url:"https://stripe.com/docs/stripe-js/react"}))},P=t.createContext(null);P.displayName="ElementsContext";var j=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},O=function(e){var n=e.stripe,r=e.options,o=e.children,c=t.useMemo(function(){return S(n)},[n]),i=u(t.useState(function(){return{stripe:"sync"===c.tag?c.stripe:null,elements:"sync"===c.tag?c.stripe.elements(r):null}}),2),a=i[0],s=i[1];t.useEffect(function(){var e=!0,t=function(e){s(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return"async"!==c.tag||a.stripe?"sync"!==c.tag||a.stripe||t(c.stripe):c.stripePromise.then(function(n){n&&e&&t(n)}),function(){e=!1}},[c,a,r]);var l=y(n);t.useEffect(function(){null!==l&&l!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[l,n]);var p=y(r);return t.useEffect(function(){if(a.elements){var e=k(r,p,["clientSecret","fonts"]);e&&a.elements.update(e)}},[r,p,a.elements]),t.useEffect(function(){w(a.stripe)},[a.stripe]),t.createElement(P.Provider,{value:a},o)};O.propTypes={stripe:h.any,options:h.object};var x=function(e){return j(t.useContext(P),e)},A=function(e){return(0,e.children)(x("mounts <ElementsConsumer>"))};A.propTypes={children:h.func.isRequired};var R=["on","session"],_=t.createContext(null);_.displayName="CheckoutSdkContext";var I=function(e,t){if(!e)throw Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CheckoutProvider> provider."));return e},M=t.createContext(null);M.displayName="CheckoutContext";var L=function(e,t){if(!e)return null;e.on,e.session;var n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,R);return t?r(r({},n),t):r(r({},n),e.session())},N=function(e){var n=e.stripe,r=e.options,o=e.children,c=t.useMemo(function(){return S(n,"Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},[n]),i=u(t.useState(null),2),a=i[0],s=i[1],l=u(t.useState(function(){return{stripe:"sync"===c.tag?c.stripe:null,checkoutSdk:null}}),2),p=l[0],f=l[1],d=function(e,t){f(function(n){return n.stripe&&n.checkoutSdk?n:{stripe:e,checkoutSdk:t}})},h=t.useRef(!1);t.useEffect(function(){var e=!0;return"async"!==c.tag||p.stripe?"sync"===c.tag&&c.stripe&&!h.current&&(h.current=!0,c.stripe.initCheckout(r).then(function(e){e&&(d(c.stripe,e),e.on("change",s))})):c.stripePromise.then(function(t){t&&e&&!h.current&&(h.current=!0,t.initCheckout(r).then(function(e){e&&(d(t,e),e.on("change",s))}))}),function(){e=!1}},[c,p,r,s]);var m=y(n);t.useEffect(function(){null!==m&&m!==n&&console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.")},[m,n]);var g=y(r);t.useEffect(function(){if(p.checkoutSdk){!r.clientSecret||v(g)||b(r.clientSecret,g.clientSecret)||console.warn("Unsupported prop change: options.clientSecret is not a mutable property.");var e,t,n=null==g?void 0:null===(e=g.elementsOptions)||void 0===e?void 0:e.appearance,o=null==r?void 0:null===(t=r.elementsOptions)||void 0===t?void 0:t.appearance;o&&!b(o,n)&&p.checkoutSdk.changeAppearance(o)}},[r,g,p.checkoutSdk]),t.useEffect(function(){w(p.stripe)},[p.stripe]);var k=t.useMemo(function(){return L(p.checkoutSdk,a)},[p.checkoutSdk,a]);return p.checkoutSdk?t.createElement(_.Provider,{value:p},t.createElement(M.Provider,{value:k},o)):null};N.propTypes={stripe:h.any,options:h.shape({clientSecret:h.string.isRequired,elementsOptions:h.object}).isRequired};var T=function(e){var n=t.useContext(_),r=t.useContext(P);if(n&&r)throw Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n?I(n,e):j(r,e)},U=function(e,n){var r="".concat(e.charAt(0).toUpperCase()+e.slice(1),"Element"),o=n?function(e){T("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,c=n.id,i=n.className,a=n.options,s=void 0===a?{}:a,l=n.onBlur,p=n.onFocus,f=n.onReady,d=n.onChange,h=n.onEscape,v=n.onClick,g=n.onLoadError,b=n.onLoaderStart,C=n.onNetworksChange,E=n.onConfirm,S=n.onCancel,w=n.onShippingAddressChange,P=n.onShippingRateChange,j=T("mounts <".concat(r,">")),O="elements"in j?j.elements:null,x="checkoutSdk"in j?j.checkoutSdk:null,A=u(t.useState(null),2),R=A[0],_=A[1],I=t.useRef(null),M=t.useRef(null);m(R,"blur",l),m(R,"focus",p),m(R,"escape",h),m(R,"click",v),m(R,"loaderror",g),m(R,"loaderstart",b),m(R,"networkschange",C),m(R,"confirm",E),m(R,"cancel",S),m(R,"shippingaddresschange",w),m(R,"shippingratechange",P),m(R,"change",d),f&&(o="expressCheckout"===e?f:function(){f(R)}),m(R,"ready",o),t.useLayoutEffect(function(){if(null===I.current&&null!==M.current&&(O||x)){var t=null;x?t=x.createElement(e,s):O&&(t=O.create(e,s)),I.current=t,_(t),t&&t.mount(M.current)}},[O,x,s]);var L=y(s);return t.useEffect(function(){if(I.current){var e=k(s,L,["paymentRequest"]);e&&"update"in I.current&&I.current.update(e)}},[s,L]),t.useLayoutEffect(function(){return function(){if(I.current&&"function"==typeof I.current.destroy)try{I.current.destroy(),I.current=null}catch(e){}}},[]),t.createElement("div",{id:c,className:i,ref:M})};return o.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},o.displayName=r,o.__elementType=e,o},Z="undefined"==typeof window,D=t.createContext(null);D.displayName="EmbeddedCheckoutProviderContext";var B=function(){var e=t.useContext(D);if(!e)throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");return e},Y=Z?function(e){var n=e.id,r=e.className;return B(),t.createElement("div",{id:n,className:r})}:function(e){var n=e.id,r=e.className,o=B().embeddedCheckout,c=t.useRef(!1),u=t.useRef(null);return t.useLayoutEffect(function(){return!c.current&&o&&null!==u.current&&(o.mount(u.current),c.current=!0),function(){if(c.current&&o)try{o.unmount(),c.current=!1}catch(e){}}},[o]),t.createElement("div",{ref:u,id:n,className:r})},q=U("auBankAccount",Z),W=U("card",Z),F=U("cardNumber",Z),V=U("cardExpiry",Z),z=U("cardCvc",Z),H=U("fpxBank",Z),$=U("iban",Z),J=U("idealBank",Z),X=U("p24Bank",Z),G=U("epsBank",Z),K=U("payment",Z),Q=U("expressCheckout",Z),ee=U("currencySelector",Z),et=U("paymentRequestButton",Z),en=U("linkAuthentication",Z),er=U("address",Z),eo=U("shippingAddress",Z),ec=U("paymentMethodMessaging",Z),eu=U("affirmMessage",Z),ei=U("afterpayClearpayMessage",Z);e.AddressElement=er,e.AffirmMessageElement=eu,e.AfterpayClearpayMessageElement=ei,e.AuBankAccountElement=q,e.CardCvcElement=z,e.CardElement=W,e.CardExpiryElement=V,e.CardNumberElement=F,e.CheckoutProvider=N,e.CurrencySelectorElement=ee,e.Elements=O,e.ElementsConsumer=A,e.EmbeddedCheckout=Y,e.EmbeddedCheckoutProvider=function(e){var n=e.stripe,r=e.options,o=e.children,c=t.useMemo(function(){return S(n,"Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},[n]),i=t.useRef(null),a=t.useRef(null),s=u(t.useState({embeddedCheckout:null}),2),l=s[0],p=s[1];t.useEffect(function(){if(!a.current&&!i.current){var e=function(e){a.current||i.current||(a.current=e,i.current=a.current.initEmbeddedCheckout(r).then(function(e){p({embeddedCheckout:e})}))};"async"===c.tag&&!a.current&&(r.clientSecret||r.fetchClientSecret)?c.stripePromise.then(function(t){t&&e(t)}):"sync"===c.tag&&!a.current&&(r.clientSecret||r.fetchClientSecret)&&e(c.stripe)}},[c,r,l,a]),t.useEffect(function(){return function(){l.embeddedCheckout?(i.current=null,l.embeddedCheckout.destroy()):i.current&&i.current.then(function(){i.current=null,l.embeddedCheckout&&l.embeddedCheckout.destroy()})}},[l.embeddedCheckout]),t.useEffect(function(){w(a)},[a]);var f=y(n);t.useEffect(function(){null!==f&&f!==n&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")},[f,n]);var d=y(r);return t.useEffect(function(){if(null!=d){if(null==r){console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");return}void 0===r.clientSecret&&void 0===r.fetchClientSecret&&console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."),null!=d.clientSecret&&r.clientSecret!==d.clientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.fetchClientSecret&&r.fetchClientSecret!==d.fetchClientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.onComplete&&r.onComplete!==d.onComplete&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it."),null!=d.onShippingDetailsChange&&r.onShippingDetailsChange!==d.onShippingDetailsChange&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it."),null!=d.onLineItemsChange&&r.onLineItemsChange!==d.onLineItemsChange&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.")}},[d,r]),t.createElement(D.Provider,{value:l},o)},e.EpsBankElement=G,e.ExpressCheckoutElement=Q,e.FpxBankElement=H,e.IbanElement=$,e.IdealBankElement=J,e.LinkAuthenticationElement=en,e.P24BankElement=X,e.PaymentElement=K,e.PaymentMethodMessagingElement=ec,e.PaymentRequestButtonElement=et,e.ShippingAddressElement=eo,e.useCheckout=function(){e="calls useCheckout()",I(t.useContext(_),e);var e,n=t.useContext(M);if(!n)throw Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");return n},e.useElements=function(){return x("calls useElements()").elements},e.useStripe=function(){return T("calls useStripe()").stripe}})(t,n(52983))},48318:function(e,t,n){var r=n(84546),o=n(45436),c=n(99105),u=n(29233),i=n(31525),a=n(77026);e.exports=function(e,t,n,s){var l=-1,p=o,f=!0,d=e.length,h=[],m=t.length;if(!d)return h;n&&(t=u(t,i(n))),s?(p=c,f=!1):t.length>=200&&(p=a,f=!1,t=new r(t));e:for(;++l<d;){var y=e[l],v=null==n?y:n(y);if(y=s||0!==y?y:0,f&&v==v){for(var g=m;g--;)if(t[g]===v)continue e;h.push(y)}else p(t,v,s)||h.push(y)}return h}},64038:function(e,t,n){var r=n(87500),o=n(17325)(function(e,t,n){r(e,n,t)});e.exports=o},92238:function(e,t,n){var r=n(48318),o=n(29735),c=n(18268),u=o(function(e,t){return c(e)?r(e,t):[]});e.exports=u},38273:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]])},54592:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]])},87566:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},49296:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},94791:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},34133:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]])},5211:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(98266).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},56384:function(e,t,n){"use strict";n.d(t,{bU:function(){return E},fC:function(){return C}});var r=n(83573),o=n(52983),c=n(12527),u=n(61031),i=n(95831),a=n(29650),s=n(87178),l=n(56807),p=n(85418);let f="Switch",[d,h]=(0,i.b)(f),[m,y]=d(f),v=(0,o.forwardRef)((e,t)=>{let{__scopeSwitch:n,name:i,checked:s,defaultChecked:l,required:f,disabled:d,value:h="on",onCheckedChange:y,...v}=e,[g,C]=(0,o.useState)(null),E=(0,u.e)(t,e=>C(e)),S=(0,o.useRef)(!1),w=!g||!!g.closest("form"),[P=!1,j]=(0,a.T)({prop:s,defaultProp:l,onChange:y});return(0,o.createElement)(m,{scope:n,checked:P,disabled:d},(0,o.createElement)(p.WV.button,(0,r.Z)({type:"button",role:"switch","aria-checked":P,"aria-required":f,"data-state":k(P),"data-disabled":d?"":void 0,disabled:d,value:h},v,{ref:E,onClick:(0,c.M)(e.onClick,e=>{j(e=>!e),w&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})})),w&&(0,o.createElement)(b,{control:g,bubbles:!S.current,name:i,value:h,checked:P,required:f,disabled:d,style:{transform:"translateX(-100%)"}}))}),g=(0,o.forwardRef)((e,t)=>{let{__scopeSwitch:n,...c}=e,u=y("SwitchThumb",n);return(0,o.createElement)(p.WV.span,(0,r.Z)({"data-state":k(u.checked),"data-disabled":u.disabled?"":void 0},c,{ref:t}))}),b=e=>{let{control:t,checked:n,bubbles:c=!0,...u}=e,i=(0,o.useRef)(null),a=(0,s.D)(n),p=(0,l.t)(t);return(0,o.useEffect)(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(a!==n&&t){let r=new Event("click",{bubbles:c});t.call(e,n),e.dispatchEvent(r)}},[a,n,c]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},u,{tabIndex:-1,ref:i,style:{...e.style,...p,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function k(e){return e?"checked":"unchecked"}let C=v,E=g},21592:function(e,t,n){"use strict";n.d(t,{J:function(){return m}});var r,o="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,u=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(c.test(n.src))return n}return null},i=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},a=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"5.5.0",startTime:t})},s=null,l=null,p=null,f=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return a(r,n),r},d=!1,h=function(){return r||(r=(null!==s?s:(s=new Promise(function(e,t){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var n,r=u();r?r&&null!==p&&null!==l&&(r.removeEventListener("load",p),r.removeEventListener("error",l),null===(n=r.parentNode)||void 0===n||n.removeChild(r),r=i(null)):r=i(null),p=function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))},l=function(){t(Error("Failed to load Stripe.js"))},r.addEventListener("load",p),r.addEventListener("error",l)}catch(e){t(e);return}})).catch(function(e){return s=null,Promise.reject(e)})).catch(function(e){return r=null,Promise.reject(e)}))};Promise.resolve().then(function(){return h()}).catch(function(e){d||console.warn(e)});var m=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];d=!0;var r=Date.now();return h().then(function(e){return f(e,t,r)})}},7829:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var c=t.length;for(n=0;n<c;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}}}]);