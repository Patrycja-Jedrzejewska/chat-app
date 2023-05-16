(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function as(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},Nt=[],Ce=()=>{},cc=()=>!1,lc=/^on[^a-z]/,or=t=>lc.test(t),cs=t=>t.startsWith("onUpdate:"),se=Object.assign,ls=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uc=Object.prototype.hasOwnProperty,V=(t,e)=>uc.call(t,e),B=Array.isArray,rn=t=>ar(t)==="[object Map]",fc=t=>ar(t)==="[object Set]",$=t=>typeof t=="function",oe=t=>typeof t=="string",us=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",fo=t=>Z(t)&&$(t.then)&&$(t.catch),dc=Object.prototype.toString,ar=t=>dc.call(t),hc=t=>ar(t).slice(8,-1),pc=t=>ar(t)==="[object Object]",fs=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fn=as(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gc=/-(\w)/g,Be=cr(t=>t.replace(gc,(e,n)=>n?n.toUpperCase():"")),mc=/\B([A-Z])/g,Kt=cr(t=>t.replace(mc,"-$1").toLowerCase()),lr=cr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Er=cr(t=>t?`on${lr(t)}`:""),un=(t,e)=>!Object.is(t,e),Ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_c=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ws;const Fr=()=>Ws||(Ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ds(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?Ec(r):ds(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(oe(t))return t;if(Z(t))return t}}const vc=/;(?![^(]*\))/g,yc=/:([^]+)/,bc=new RegExp("\\/\\*.*?\\*\\/","gs");function Ec(t){const e={};return t.replace(bc,"").split(vc).forEach(n=>{if(n){const r=n.split(yc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hs(t){let e="";if(oe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=hs(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ic="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wc=as(Ic);function ho(t){return!!t||t===""}let Ie;class po{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Tc(t){return new po(t)}function Rc(t,e=Ie){e&&e.active&&e.effects.push(t)}function Cc(){return Ie}const ps=t=>{const e=new Set(t);return e.w=0,e.n=0,e},go=t=>(t.w&ft)>0,mo=t=>(t.n&ft)>0,Ac=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ft},Sc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];go(s)&&!mo(s)?s.delete(t):e[n++]=s,s.w&=~ft,s.n&=~ft}e.length=n}},Br=new WeakMap;let tn=0,ft=1;const $r=30;let we;const yt=Symbol(""),Hr=Symbol("");class gs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rc(this,r)}run(){if(!this.active)return this.fn();let e=we,n=at;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=we,we=this,at=!0,ft=1<<++tn,tn<=$r?Ac(this):zs(this),this.fn()}finally{tn<=$r&&Sc(this),ft=1<<--tn,we=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(zs(this),this.onStop&&this.onStop(),this.active=!1)}}function zs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let at=!0;const _o=[];function qt(){_o.push(at),at=!1}function Gt(){const t=_o.pop();at=t===void 0?!0:t}function pe(t,e,n){if(at&&we){let r=Br.get(t);r||Br.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ps()),vo(s)}}function vo(t,e){let n=!1;tn<=$r?mo(t)||(t.n|=ft,n=!go(t)):n=!t.has(we),n&&(t.add(we),we.deps.push(t))}function Ke(t,e,n,r,s,i){const o=Br.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?fs(n)&&c.push(o.get("length")):(c.push(o.get(yt)),rn(t)&&c.push(o.get(Hr)));break;case"delete":B(t)||(c.push(o.get(yt)),rn(t)&&c.push(o.get(Hr)));break;case"set":rn(t)&&c.push(o.get(yt));break}if(c.length===1)c[0]&&jr(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);jr(ps(a))}}function jr(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&Ks(r);for(const r of n)r.computed||Ks(r)}function Ks(t,e){(t!==we||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pc=as("__proto__,__v_isRef,__isVue"),yo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(us)),Oc=ms(),kc=ms(!1,!0),Nc=ms(!0),qs=Dc();function Dc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qt();const r=W(this)[e].apply(this,n);return Gt(),r}}),t}function xc(t){const e=W(this);return pe(e,"has",t),e.hasOwnProperty(t)}function ms(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Yc:To:e?wo:Io).get(r))return r;const o=B(r);if(!t){if(o&&V(qs,s))return Reflect.get(qs,s,i);if(s==="hasOwnProperty")return xc}const c=Reflect.get(r,s,i);return(us(s)?yo.has(s):Pc(s))||(t||pe(r,"get",s),e)?c:le(c)?o&&fs(s)?c:c.value:Z(c)?t?Ro(c):In(c):c}}const Mc=bo(),Lc=bo(!0);function bo(t=!1){return function(n,r,s,i){let o=n[r];if(Bt(o)&&le(o)&&!le(s))return!1;if(!t&&(!Gn(s)&&!Bt(s)&&(o=W(o),s=W(s)),!B(n)&&le(o)&&!le(s)))return o.value=s,!0;const c=B(n)&&fs(r)?Number(r)<n.length:V(n,r),a=Reflect.set(n,r,s,i);return n===W(i)&&(c?un(s,o)&&Ke(n,"set",r,s):Ke(n,"add",r,s)),a}}function Uc(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ke(t,"delete",e,void 0),r}function Fc(t,e){const n=Reflect.has(t,e);return(!us(e)||!yo.has(e))&&pe(t,"has",e),n}function Bc(t){return pe(t,"iterate",B(t)?"length":yt),Reflect.ownKeys(t)}const Eo={get:Oc,set:Mc,deleteProperty:Uc,has:Fc,ownKeys:Bc},$c={get:Nc,set(t,e){return!0},deleteProperty(t,e){return!0}},Hc=se({},Eo,{get:kc,set:Lc}),_s=t=>t,ur=t=>Reflect.getPrototypeOf(t);function kn(t,e,n=!1,r=!1){t=t.__v_raw;const s=W(t),i=W(e);n||(e!==i&&pe(s,"get",e),pe(s,"get",i));const{has:o}=ur(s),c=r?_s:n?Es:fn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Nn(t,e=!1){const n=this.__v_raw,r=W(n),s=W(t);return e||(t!==s&&pe(r,"has",t),pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Dn(t,e=!1){return t=t.__v_raw,!e&&pe(W(t),"iterate",yt),Reflect.get(t,"size",t)}function Gs(t){t=W(t);const e=W(this);return ur(e).has.call(e,t)||(e.add(t),Ke(e,"add",t,t)),this}function Js(t,e){e=W(e);const n=W(this),{has:r,get:s}=ur(n);let i=r.call(n,t);i||(t=W(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?un(e,o)&&Ke(n,"set",t,e):Ke(n,"add",t,e),this}function Ys(t){const e=W(this),{has:n,get:r}=ur(e);let s=n.call(e,t);s||(t=W(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ke(e,"delete",t,void 0),i}function Xs(){const t=W(this),e=t.size!==0,n=t.clear();return e&&Ke(t,"clear",void 0,void 0),n}function xn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=W(o),a=e?_s:t?Es:fn;return!t&&pe(c,"iterate",yt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function Mn(t,e,n){return function(...r){const s=this.__v_raw,i=W(s),o=rn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?_s:e?Es:fn;return!e&&pe(i,"iterate",a?Hr:yt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function Qe(t){return function(...e){return t==="delete"?!1:this}}function jc(){const t={get(i){return kn(this,i)},get size(){return Dn(this)},has:Nn,add:Gs,set:Js,delete:Ys,clear:Xs,forEach:xn(!1,!1)},e={get(i){return kn(this,i,!1,!0)},get size(){return Dn(this)},has:Nn,add:Gs,set:Js,delete:Ys,clear:Xs,forEach:xn(!1,!0)},n={get(i){return kn(this,i,!0)},get size(){return Dn(this,!0)},has(i){return Nn.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:xn(!0,!1)},r={get(i){return kn(this,i,!0,!0)},get size(){return Dn(this,!0)},has(i){return Nn.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mn(i,!1,!1),n[i]=Mn(i,!0,!1),e[i]=Mn(i,!1,!0),r[i]=Mn(i,!0,!0)}),[t,n,e,r]}const[Vc,Wc,zc,Kc]=jc();function vs(t,e){const n=e?t?Kc:zc:t?Wc:Vc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const qc={get:vs(!1,!1)},Gc={get:vs(!1,!0)},Jc={get:vs(!0,!1)},Io=new WeakMap,wo=new WeakMap,To=new WeakMap,Yc=new WeakMap;function Xc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qc(t){return t.__v_skip||!Object.isExtensible(t)?0:Xc(hc(t))}function In(t){return Bt(t)?t:ys(t,!1,Eo,qc,Io)}function Zc(t){return ys(t,!1,Hc,Gc,wo)}function Ro(t){return ys(t,!0,$c,Jc,To)}function ys(t,e,n,r,s){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Qc(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Dt(t){return Bt(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function Bt(t){return!!(t&&t.__v_isReadonly)}function Gn(t){return!!(t&&t.__v_isShallow)}function Co(t){return Dt(t)||Bt(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function bs(t){return qn(t,"__v_skip",!0),t}const fn=t=>Z(t)?In(t):t,Es=t=>Z(t)?Ro(t):t;function Ao(t){at&&we&&(t=W(t),vo(t.dep||(t.dep=ps())))}function So(t,e){t=W(t);const n=t.dep;n&&jr(n)}function le(t){return!!(t&&t.__v_isRef===!0)}function Po(t){return Oo(t,!1)}function el(t){return Oo(t,!0)}function Oo(t,e){return le(t)?t:new tl(t,e)}class tl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:fn(e)}get value(){return Ao(this),this._value}set value(e){const n=this.__v_isShallow||Gn(e)||Bt(e);e=n?e:W(e),un(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fn(e),So(this))}}function xt(t){return le(t)?t.value:t}const nl={get:(t,e,n)=>xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ko(t){return Dt(t)?t:new Proxy(t,nl)}class rl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new gs(e,()=>{this._dirty||(this._dirty=!0,So(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=W(this);return Ao(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ce):(r=t.get,s=t.set),new rl(r,s,i||!s,n)}function ct(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){fr(i,e,n)}return s}function Ae(t,e,n,r){if($(t)){const i=ct(t,e,n,r);return i&&fo(i)&&i.catch(o=>{fr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ae(t[i],e,n,r));return s}function fr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){ct(a,null,10,[t,o,c]);return}}il(t,n,s,r)}function il(t,e,n,r=!0){console.error(t)}let dn=!1,Vr=!1;const ce=[];let Le=0;const Mt=[];let je=null,_t=0;const No=Promise.resolve();let Is=null;function Do(t){const e=Is||No;return t?e.then(this?t.bind(this):t):e}function ol(t){let e=Le+1,n=ce.length;for(;e<n;){const r=e+n>>>1;hn(ce[r])<t?e=r+1:n=r}return e}function ws(t){(!ce.length||!ce.includes(t,dn&&t.allowRecurse?Le+1:Le))&&(t.id==null?ce.push(t):ce.splice(ol(t.id),0,t),xo())}function xo(){!dn&&!Vr&&(Vr=!0,Is=No.then(Lo))}function al(t){const e=ce.indexOf(t);e>Le&&ce.splice(e,1)}function cl(t){B(t)?Mt.push(...t):(!je||!je.includes(t,t.allowRecurse?_t+1:_t))&&Mt.push(t),xo()}function Qs(t,e=dn?Le+1:0){for(;e<ce.length;e++){const n=ce[e];n&&n.pre&&(ce.splice(e,1),e--,n())}}function Mo(t){if(Mt.length){const e=[...new Set(Mt)];if(Mt.length=0,je){je.push(...e);return}for(je=e,je.sort((n,r)=>hn(n)-hn(r)),_t=0;_t<je.length;_t++)je[_t]();je=null,_t=0}}const hn=t=>t.id==null?1/0:t.id,ll=(t,e)=>{const n=hn(t)-hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lo(t){Vr=!1,dn=!0,ce.sort(ll);const e=Ce;try{for(Le=0;Le<ce.length;Le++){const n=ce[Le];n&&n.active!==!1&&ct(n,null,14)}}finally{Le=0,ce.length=0,Mo(),dn=!1,Is=null,(ce.length||Mt.length)&&Lo()}}function ul(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[f]||Q;g&&(s=n.map(y=>oe(y)?y.trim():y)),h&&(s=n.map(_c))}let c,a=r[c=Er(e)]||r[c=Er(Be(e))];!a&&i&&(a=r[c=Er(Kt(e))]),a&&Ae(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ae(l,t,6,s)}}function Uo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const f=Uo(l,e,!0);f&&(c=!0,se(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(Z(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):se(o,i),Z(t)&&r.set(t,o),o)}function dr(t,e){return!t||!or(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,Kt(e))||V(t,e))}let Te=null,Fo=null;function Jn(t){const e=Te;return Te=t,Fo=t&&t.type.__scopeId||null,e}function fl(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&li(-1);const i=Jn(e);let o;try{o=t(...s)}finally{Jn(i),r._d&&li(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:h,data:g,setupState:y,ctx:A,inheritAttrs:P}=t;let L,k;const x=Jn(t);try{if(n.shapeFlag&4){const M=s||r;L=Me(f.call(M,M,h,i,y,g,A)),k=a}else{const M=e;L=Me(M.length>1?M(i,{attrs:a,slots:c,emit:l}):M(i,null)),k=e.props?a:dl(a)}}catch(M){on.length=0,fr(M,t,1),L=ye(pn)}let j=L;if(k&&P!==!1){const M=Object.keys(k),{shapeFlag:te}=j;M.length&&te&7&&(o&&M.some(cs)&&(k=hl(k,o)),j=$t(j,k))}return n.dirs&&(j=$t(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,Jn(x),L}const dl=t=>{let e;for(const n in t)(n==="class"||n==="style"||or(n))&&((e||(e={}))[n]=t[n]);return e},hl=(t,e)=>{const n={};for(const r in t)(!cs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Zs(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!dr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Zs(r,o,l):!0:!!o;return!1}function Zs(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dr(n,i))return!0}return!1}function gl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ml=t=>t.__isSuspense;function _l(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):cl(t)}const Ln={};function Bn(t,e,n){return Bo(t,e,n)}function Bo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var c;const a=Cc()===((c=ie)==null?void 0:c.scope)?ie:null;let l,f=!1,h=!1;if(le(t)?(l=()=>t.value,f=Gn(t)):Dt(t)?(l=()=>t,r=!0):B(t)?(h=!0,f=t.some(M=>Dt(M)||Gn(M)),l=()=>t.map(M=>{if(le(M))return M.value;if(Dt(M))return Ot(M);if($(M))return ct(M,a,2)})):$(t)?e?l=()=>ct(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ae(t,a,3,[y])}:l=Ce,e&&r){const M=l;l=()=>Ot(M())}let g,y=M=>{g=x.onStop=()=>{ct(M,a,4)}},A;if(mn)if(y=Ce,e?n&&Ae(e,a,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const M=gu();A=M.__watcherHandles||(M.__watcherHandles=[])}else return Ce;let P=h?new Array(t.length).fill(Ln):Ln;const L=()=>{if(x.active)if(e){const M=x.run();(r||f||(h?M.some((te,ne)=>un(te,P[ne])):un(M,P)))&&(g&&g(),Ae(e,a,3,[M,P===Ln?void 0:h&&P[0]===Ln?[]:P,y]),P=M)}else x.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>he(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),k=()=>ws(L));const x=new gs(l,k);e?n?L():P=x.run():s==="post"?he(x.run.bind(x),a&&a.suspense):x.run();const j=()=>{x.stop(),a&&a.scope&&ls(a.scope.effects,x)};return A&&A.push(j),j}function vl(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?$o(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ie;Ht(this);const c=Bo(s,i.bind(r),n);return o?Ht(o):bt(),c}function $o(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ot(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))Ot(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Ot(t[n],e);else if(fc(t)||rn(t))t.forEach(n=>{Ot(n,e)});else if(pc(t))for(const n in t)Ot(t[n],e);return t}function pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(qt(),Ae(a,n,8,[t.el,c,t,e]),Gt())}}function Ho(t,e){return $(t)?(()=>se({name:t.name},e,{setup:t}))():t}const $n=t=>!!t.type.__asyncLoader,jo=t=>t.type.__isKeepAlive;function yl(t,e){Vo(t,"a",e)}function bl(t,e){Vo(t,"da",e)}function Vo(t,e,n=ie){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(hr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jo(s.parent.vnode)&&El(r,e,n,s),s=s.parent}}function El(t,e,n,r){const s=hr(e,t,r,!0);Wo(()=>{ls(r[e],s)},n)}function hr(t,e,n=ie,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qt(),Ht(n);const c=Ae(e,n,t,o);return bt(),Gt(),c});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=ie)=>(!mn||t==="sp")&&hr(t,(...r)=>e(...r),n),Il=Je("bm"),wl=Je("m"),Tl=Je("bu"),Rl=Je("u"),Cl=Je("bum"),Wo=Je("um"),Al=Je("sp"),Sl=Je("rtg"),Pl=Je("rtc");function Ol(t,e=ie){hr("ec",t,e)}const zo="components";function kl(t,e){return Dl(zo,t,!0,e)||t}const Nl=Symbol.for("v-ndc");function Dl(t,e,n=!0,r=!1){const s=Te||ie;if(s){const i=s.type;if(t===zo){const c=du(i,!1);if(c&&(c===e||c===Be(e)||c===lr(Be(e))))return i}const o=ei(s[t]||i[t],e)||ei(s.appContext[t],e);return!o&&r?i:o}}function ei(t,e){return t&&(t[e]||t[Be(e)]||t[lr(Be(e))])}const Wr=t=>t?ta(t)?Ps(t)||t.proxy:Wr(t.parent):null,sn=se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wr(t.parent),$root:t=>Wr(t.root),$emit:t=>t.emit,$options:t=>Ts(t),$forceUpdate:t=>t.f||(t.f=()=>ws(t.update)),$nextTick:t=>t.n||(t.n=Do.bind(t.proxy)),$watch:t=>vl.bind(t)}),Tr=(t,e)=>t!==Q&&!t.__isScriptSetup&&V(t,e),xl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tr(r,e))return o[e]=1,r[e];if(s!==Q&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==Q&&V(n,e))return o[e]=4,n[e];zr&&(o[e]=0)}}const f=sn[e];let h,g;if(f)return e==="$attrs"&&pe(t,"get",e),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&V(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,V(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tr(s,e)?(s[e]=n,!0):r!==Q&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&V(t,o)||Tr(e,o)||(c=i[0])&&V(c,o)||V(r,o)||V(sn,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ti(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zr=!0;function Ml(t){const e=Ts(t),n=t.proxy,r=t.ctx;zr=!1,e.beforeCreate&&ni(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:g,beforeUpdate:y,updated:A,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:x,destroyed:j,unmounted:M,render:te,renderTracked:ne,renderTriggered:ge,errorCaptured:be,serverPrefetch:Pe,expose:_e,inheritAttrs:Ye,components:ht,directives:Oe,filters:Xt}=e;if(l&&Ll(l,r,null),o)for(const J in o){const z=o[J];$(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);Z(J)&&(t.data=In(J))}if(zr=!0,i)for(const J in i){const z=i[J],$e=$(z)?z.bind(n,n):$(z.get)?z.get.bind(n,n):Ce,Xe=!$(z)&&$(z.set)?z.set.bind(n):Ce,ke=ve({get:$e,set:Xe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>ke.value,set:de=>ke.value=de})}if(c)for(const J in c)Ko(c[J],r,n,J);if(a){const J=$(a)?a.call(n):a;Reflect.ownKeys(J).forEach(z=>{Hn(z,J[z])})}f&&ni(f,t,"c");function re(J,z){B(z)?z.forEach($e=>J($e.bind(n))):z&&J(z.bind(n))}if(re(Il,h),re(wl,g),re(Tl,y),re(Rl,A),re(yl,P),re(bl,L),re(Ol,be),re(Pl,ne),re(Sl,ge),re(Cl,x),re(Wo,M),re(Al,Pe),B(_e))if(_e.length){const J=t.exposed||(t.exposed={});_e.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:$e=>n[z]=$e})})}else t.exposed||(t.exposed={});te&&t.render===Ce&&(t.render=te),Ye!=null&&(t.inheritAttrs=Ye),ht&&(t.components=ht),Oe&&(t.directives=Oe)}function Ll(t,e,n=Ce){B(t)&&(t=Kr(t));for(const r in t){const s=t[r];let i;Z(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ni(t,e,n){Ae(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ko(t,e,n,r){const s=r.includes(".")?$o(n,r):()=>n[r];if(oe(t)){const i=e[t];$(i)&&Bn(s,i)}else if($(t))Bn(s,t.bind(n));else if(Z(t))if(B(t))t.forEach(i=>Ko(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Bn(s,i,t)}}function Ts(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Yn(a,l,o,!0)),Yn(a,e,o)),Z(e)&&i.set(e,a),a}function Yn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yn(t,i,n,!0),s&&s.forEach(o=>Yn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Ul[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Ul={data:ri,props:si,emits:si,methods:nn,computed:nn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:nn,directives:nn,watch:Bl,provide:ri,inject:Fl};function ri(t,e){return e?t?function(){return se($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Fl(t,e){return nn(Kr(t),Kr(e))}function Kr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function nn(t,e){return t?se(Object.create(null),t,e):e}function si(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:se(Object.create(null),ti(t),ti(e??{})):e}function Bl(t,e){if(!t)return e;if(!e)return t;const n=se(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function qo(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function Hl(t,e){return function(r,s=null){$(r)||(r=se({},r)),s!=null&&!Z(s)&&(s=null);const i=qo(),o=new Set;let c=!1;const a=i.app={_uid:$l++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...f)):$(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const g=ye(r,s);return g.appContext=i,f&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Ps(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){Xn=a;try{return l()}finally{Xn=null}}};return a}}let Xn=null;function Hn(t,e){if(ie){let n=ie.provides;const r=ie.parent&&ie.parent.provides;r===n&&(n=ie.provides=Object.create(r)),n[t]=e}}function ze(t,e,n=!1){const r=ie||Te;if(r||Xn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function jl(t,e,n,r=!1){const s={},i={};qn(i,gr,1),t.propsDefaults=Object.create(null),Go(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Zc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Vl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=W(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(dr(t.emitsOptions,g))continue;const y=e[g];if(a)if(V(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const A=Be(g);s[A]=qr(a,c,A,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{Go(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!V(e,h)&&((f=Kt(h))===h||!V(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=qr(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!V(e,h))&&(delete i[h],l=!0)}l&&Ke(t,"set","$attrs")}function Go(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Fn(a))continue;const l=e[a];let f;s&&V(s,f=Be(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:dr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=W(n),l=c||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=qr(s,a,h,l[h],t,!V(l,h))}}return o}function qr(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=V(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ht(s),r=l[n]=a.call(null,e),bt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Jo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const f=h=>{a=!0;const[g,y]=Jo(h,e,!0);se(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return Z(t)&&r.set(t,Nt),Nt;if(B(i))for(let f=0;f<i.length;f++){const h=Be(i[f]);ii(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=Be(f);if(ii(h)){const g=i[f],y=o[h]=B(g)||$(g)?{type:g}:se({},g);if(y){const A=ci(Boolean,y.type),P=ci(String,y.type);y[0]=A>-1,y[1]=P<0||A<P,(A>-1||V(y,"default"))&&c.push(h)}}}const l=[o,c];return Z(t)&&r.set(t,l),l}function ii(t){return t[0]!=="$"}function oi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ai(t,e){return oi(t)===oi(e)}function ci(t,e){return B(e)?e.findIndex(n=>ai(n,t)):$(e)&&ai(e,t)?0:-1}const Yo=t=>t[0]==="_"||t==="$stable",Rs=t=>B(t)?t.map(Me):[Me(t)],Wl=(t,e,n)=>{if(e._n)return e;const r=fl((...s)=>Rs(e(...s)),n);return r._c=!1,r},Xo=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yo(s))continue;const i=t[s];if($(i))e[s]=Wl(s,i,r);else if(i!=null){const o=Rs(i);e[s]=()=>o}}},Qo=(t,e)=>{const n=Rs(e);t.slots.default=()=>n},zl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),qn(e,"_",n)):Xo(e,t.slots={})}else t.slots={},e&&Qo(t,e);qn(t.slots,gr,1)},Kl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(se(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Xo(e,s)),o=e}else e&&(Qo(t,e),o={default:1});if(i)for(const c in s)!Yo(c)&&!(c in o)&&delete s[c]};function Gr(t,e,n,r,s=!1){if(B(t)){t.forEach((g,y)=>Gr(g,e&&(B(e)?e[y]:e),n,r,s));return}if($n(r)&&!s)return;const i=r.shapeFlag&4?Ps(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(oe(l)?(f[l]=null,V(h,l)&&(h[l]=null)):le(l)&&(l.value=null)),$(a))ct(a,c,12,[o,f]);else{const g=oe(a),y=le(a);if(g||y){const A=()=>{if(t.f){const P=g?V(h,a)?h[a]:f[a]:a.value;s?B(P)&&ls(P,i):B(P)?P.includes(i)||P.push(i):g?(f[a]=[i],V(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else g?(f[a]=o,V(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(f[t.k]=o))};o?(A.id=-1,he(A,n)):A()}}}const he=_l;function ql(t){return Gl(t)}function Gl(t,e){const n=Fr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:g,setScopeId:y=Ce,insertStaticContent:A}=t,P=(u,d,p,m=null,v=null,b=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!Zt(u,d)&&(m=_(u),de(u,v,b,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:S}=d;switch(E){case pr:L(u,d,p,m);break;case pn:k(u,d,p,m);break;case Rr:u==null&&x(d,p,m,R);break;case xe:ht(u,d,p,m,v,b,R,I,w);break;default:S&1?te(u,d,p,m,v,b,R,I,w):S&6?Oe(u,d,p,m,v,b,R,I,w):(S&64||S&128)&&E.process(u,d,p,m,v,b,R,I,w,T)}N!=null&&v&&Gr(N,u&&u.ref,b,d||u,!d)},L=(u,d,p,m)=>{if(u==null)r(d.el=c(d.children),p,m);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},k=(u,d,p,m)=>{u==null?r(d.el=a(d.children||""),p,m):d.el=u.el},x=(u,d,p,m)=>{[u.el,u.anchor]=A(u.children,d,p,m,u.el,u.anchor)},j=({el:u,anchor:d},p,m)=>{let v;for(;u&&u!==d;)v=g(u),r(u,p,m),u=v;r(d,p,m)},M=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),s(u),u=p;s(d)},te=(u,d,p,m,v,b,R,I,w)=>{R=R||d.type==="svg",u==null?ne(d,p,m,v,b,R,I,w):Pe(u,d,v,b,R,I,w)},ne=(u,d,p,m,v,b,R,I)=>{let w,E;const{type:N,props:S,shapeFlag:D,transition:U,dirs:H}=u;if(w=u.el=o(u.type,b,S&&S.is,S),D&8?f(w,u.children):D&16&&be(u.children,w,null,m,v,b&&N!=="foreignObject",R,I),H&&pt(u,null,m,"created"),ge(w,u,u.scopeId,R,m),S){for(const G in S)G!=="value"&&!Fn(G)&&i(w,G,null,S[G],b,u.children,m,v,ae);"value"in S&&i(w,"value",null,S.value),(E=S.onVnodeBeforeMount)&&De(E,m,u)}H&&pt(u,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,d,p),((E=S&&S.onVnodeMounted)||X||H)&&he(()=>{E&&De(E,m,u),X&&U.enter(w),H&&pt(u,null,m,"mounted")},v)},ge=(u,d,p,m,v)=>{if(p&&y(u,p),m)for(let b=0;b<m.length;b++)y(u,m[b]);if(v){let b=v.subTree;if(d===b){const R=v.vnode;ge(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},be=(u,d,p,m,v,b,R,I,w=0)=>{for(let E=w;E<u.length;E++){const N=u[E]=I?tt(u[E]):Me(u[E]);P(null,N,d,p,m,v,b,R,I)}},Pe=(u,d,p,m,v,b,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:N}=d;w|=u.patchFlag&16;const S=u.props||Q,D=d.props||Q;let U;p&&gt(p,!1),(U=D.onVnodeBeforeUpdate)&&De(U,p,d,u),N&&pt(d,u,p,"beforeUpdate"),p&&gt(p,!0);const H=v&&d.type!=="foreignObject";if(E?_e(u.dynamicChildren,E,I,p,m,H,b):R||z(u,d,I,null,p,m,H,b,!1),w>0){if(w&16)Ye(I,d,S,D,p,m,v);else if(w&2&&S.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",S.style,D.style,v),w&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],Ee=S[ee],At=D[ee];(At!==Ee||ee==="value")&&i(I,ee,Ee,At,v,u.children,p,m,ae)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&E==null&&Ye(I,d,S,D,p,m,v);((U=D.onVnodeUpdated)||N)&&he(()=>{U&&De(U,p,d,u),N&&pt(d,u,p,"updated")},m)},_e=(u,d,p,m,v,b,R)=>{for(let I=0;I<d.length;I++){const w=u[I],E=d[I],N=w.el&&(w.type===xe||!Zt(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,N,null,m,v,b,R,!0)}},Ye=(u,d,p,m,v,b,R)=>{if(p!==m){if(p!==Q)for(const I in p)!Fn(I)&&!(I in m)&&i(u,I,p[I],null,R,d.children,v,b,ae);for(const I in m){if(Fn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(u,I,E,w,R,d.children,v,b,ae)}"value"in m&&i(u,"value",p.value,m.value)}},ht=(u,d,p,m,v,b,R,I,w)=>{const E=d.el=u?u.el:c(""),N=d.anchor=u?u.anchor:c("");let{patchFlag:S,dynamicChildren:D,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),u==null?(r(E,p,m),r(N,p,m),be(d.children,p,N,v,b,R,I,w)):S>0&&S&64&&D&&u.dynamicChildren?(_e(u.dynamicChildren,D,p,v,b,R,I),(d.key!=null||v&&d===v.subTree)&&Zo(u,d,!0)):z(u,d,p,N,v,b,R,I,w)},Oe=(u,d,p,m,v,b,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,w):Xt(d,p,m,v,b,R,w):Tt(u,d,w)},Xt=(u,d,p,m,v,b,R)=>{const I=u.component=au(u,m,v);if(jo(u)&&(I.ctx.renderer=T),cu(I),I.asyncDep){if(v&&v.registerDep(I,re),!u.el){const w=I.subTree=ye(pn);k(null,w,d,p)}return}re(I,u,d,p,v,b,R)},Tt=(u,d,p)=>{const m=d.component=u.component;if(pl(u,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,al(m.update),m.update();else d.el=u.el,m.vnode=d},re=(u,d,p,m,v,b,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:S,u:D,parent:U,vnode:H}=u,X=N,G;gt(u,!1),N?(N.el=H.el,J(u,N,R)):N=H,S&&Ir(S),(G=N.props&&N.props.onVnodeBeforeUpdate)&&De(G,U,N,H),gt(u,!0);const ee=wr(u),Ee=u.subTree;u.subTree=ee,P(Ee,ee,h(Ee.el),_(Ee),u,v,b),N.el=ee.el,X===null&&gl(u,ee.el),D&&he(D,v),(G=N.props&&N.props.onVnodeUpdated)&&he(()=>De(G,U,N,H),v)}else{let N;const{el:S,props:D}=d,{bm:U,m:H,parent:X}=u,G=$n(d);if(gt(u,!1),U&&Ir(U),!G&&(N=D&&D.onVnodeBeforeMount)&&De(N,X,d),gt(u,!0),S&&K){const ee=()=>{u.subTree=wr(u),K(S,u.subTree,u,v,null)};G?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ee()):ee()}else{const ee=u.subTree=wr(u);P(null,ee,p,m,u,v,b),d.el=ee.el}if(H&&he(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;he(()=>De(N,X,ee),v)}(d.shapeFlag&256||X&&$n(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&he(u.a,v),u.isMounted=!0,d=p=m=null}},w=u.effect=new gs(I,()=>ws(E),u.scope),E=u.update=()=>w.run();E.id=u.uid,gt(u,!0),E()},J=(u,d,p)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Vl(u,d.props,m,p),Kl(u,d.children,p),qt(),Qs(),Gt()},z=(u,d,p,m,v,b,R,I,w=!1)=>{const E=u&&u.children,N=u?u.shapeFlag:0,S=d.children,{patchFlag:D,shapeFlag:U}=d;if(D>0){if(D&128){Xe(E,S,p,m,v,b,R,I,w);return}else if(D&256){$e(E,S,p,m,v,b,R,I,w);return}}U&8?(N&16&&ae(E,v,b),S!==E&&f(p,S)):N&16?U&16?Xe(E,S,p,m,v,b,R,I,w):ae(E,v,b,!0):(N&8&&f(p,""),U&16&&be(S,p,m,v,b,R,I,w))},$e=(u,d,p,m,v,b,R,I,w)=>{u=u||Nt,d=d||Nt;const E=u.length,N=d.length,S=Math.min(E,N);let D;for(D=0;D<S;D++){const U=d[D]=w?tt(d[D]):Me(d[D]);P(u[D],U,p,null,v,b,R,I,w)}E>N?ae(u,v,b,!0,!1,S):be(d,p,m,v,b,R,I,w,S)},Xe=(u,d,p,m,v,b,R,I,w)=>{let E=0;const N=d.length;let S=u.length-1,D=N-1;for(;E<=S&&E<=D;){const U=u[E],H=d[E]=w?tt(d[E]):Me(d[E]);if(Zt(U,H))P(U,H,p,null,v,b,R,I,w);else break;E++}for(;E<=S&&E<=D;){const U=u[S],H=d[D]=w?tt(d[D]):Me(d[D]);if(Zt(U,H))P(U,H,p,null,v,b,R,I,w);else break;S--,D--}if(E>S){if(E<=D){const U=D+1,H=U<N?d[U].el:m;for(;E<=D;)P(null,d[E]=w?tt(d[E]):Me(d[E]),p,H,v,b,R,I,w),E++}}else if(E>D)for(;E<=S;)de(u[E],v,b,!0),E++;else{const U=E,H=E,X=new Map;for(E=H;E<=D;E++){const me=d[E]=w?tt(d[E]):Me(d[E]);me.key!=null&&X.set(me.key,E)}let G,ee=0;const Ee=D-H+1;let At=!1,Hs=0;const Qt=new Array(Ee);for(E=0;E<Ee;E++)Qt[E]=0;for(E=U;E<=S;E++){const me=u[E];if(ee>=Ee){de(me,v,b,!0);continue}let Ne;if(me.key!=null)Ne=X.get(me.key);else for(G=H;G<=D;G++)if(Qt[G-H]===0&&Zt(me,d[G])){Ne=G;break}Ne===void 0?de(me,v,b,!0):(Qt[Ne-H]=E+1,Ne>=Hs?Hs=Ne:At=!0,P(me,d[Ne],p,null,v,b,R,I,w),ee++)}const js=At?Jl(Qt):Nt;for(G=js.length-1,E=Ee-1;E>=0;E--){const me=H+E,Ne=d[me],Vs=me+1<N?d[me+1].el:m;Qt[E]===0?P(null,Ne,p,Vs,v,b,R,I,w):At&&(G<0||E!==js[G]?ke(Ne,p,Vs,2):G--)}}},ke=(u,d,p,m,v=null)=>{const{el:b,type:R,transition:I,children:w,shapeFlag:E}=u;if(E&6){ke(u.component.subTree,d,p,m);return}if(E&128){u.suspense.move(d,p,m);return}if(E&64){R.move(u,d,p,T);return}if(R===xe){r(b,d,p);for(let S=0;S<w.length;S++)ke(w[S],d,p,m);r(u.anchor,d,p);return}if(R===Rr){j(u,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),he(()=>I.enter(b),v);else{const{leave:S,delayLeave:D,afterLeave:U}=I,H=()=>r(b,d,p),X=()=>{S(b,()=>{H(),U&&U()})};D?D(b,H,X):X()}else r(b,d,p)},de=(u,d,p,m=!1,v=!1)=>{const{type:b,props:R,ref:I,children:w,dynamicChildren:E,shapeFlag:N,patchFlag:S,dirs:D}=u;if(I!=null&&Gr(I,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&D,H=!$n(u);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&De(X,d,u),N&6)On(u.component,p,m);else{if(N&128){u.suspense.unmount(p,m);return}U&&pt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,T,m):E&&(b!==xe||S>0&&S&64)?ae(E,d,p,!1,!0):(b===xe&&S&384||!v&&N&16)&&ae(w,d,p),m&&Rt(u)}(H&&(X=R&&R.onVnodeUnmounted)||U)&&he(()=>{X&&De(X,d,u),U&&pt(u,null,d,"unmounted")},p)},Rt=u=>{const{type:d,el:p,anchor:m,transition:v}=u;if(d===xe){Ct(p,m);return}if(d===Rr){M(u);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(p,b);I?I(u.el,b,w):w()}else b()},Ct=(u,d)=>{let p;for(;u!==d;)p=g(u),s(u),u=p;s(d)},On=(u,d,p)=>{const{bum:m,scope:v,update:b,subTree:R,um:I}=u;m&&Ir(m),v.stop(),b&&(b.active=!1,de(R,u,d,p)),I&&he(I,d),he(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(u,d,p,m=!1,v=!1,b=0)=>{for(let R=b;R<u.length;R++)de(u[R],d,p,m,v)},_=u=>u.shapeFlag&6?_(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),C=(u,d,p)=>{u==null?d._vnode&&de(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,p),Qs(),Mo(),d._vnode=u},T={p:P,um:de,m:ke,r:Rt,mt:Xt,mc:be,pc:z,pbc:_e,n:_,o:t};let O,K;return e&&([O,K]=e(T)),{render:C,hydrate:O,createApp:Hl(C,O)}}function gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zo(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=tt(s[i]),c.el=o.el),n||Zo(o,c)),c.type===pr&&(c.el=o.el)}}function Jl(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Yl=t=>t.__isTeleport,xe=Symbol.for("v-fgt"),pr=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),Rr=Symbol.for("v-stc"),on=[];let Re=null;function Xl(t=!1){on.push(Re=t?null:[])}function Ql(){on.pop(),Re=on[on.length-1]||null}let gn=1;function li(t){gn+=t}function Zl(t){return t.dynamicChildren=gn>0?Re||Nt:null,Ql(),gn>0&&Re&&Re.push(t),t}function eu(t,e,n,r,s,i){return Zl(Cs(t,e,n,r,s,i,!0))}function Jr(t){return t?t.__v_isVNode===!0:!1}function Zt(t,e){return t.type===e.type&&t.key===e.key}const gr="__vInternal",ea=({key:t})=>t??null,jn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||le(t)||$(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function Cs(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ea(e),ref:e&&jn(e),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return c?(As(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),gn>0&&!o&&Re&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Re.push(a),a}const ye=tu;function tu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Nl)&&(t=pn),Jr(t)){const c=$t(t,e,!0);return n&&As(c,n),gn>0&&!i&&Re&&(c.shapeFlag&6?Re[Re.indexOf(t)]=c:Re.push(c)),c.patchFlag|=-2,c}if(hu(t)&&(t=t.__vccOpts),e){e=nu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=hs(c)),Z(a)&&(Co(a)&&!B(a)&&(a=se({},a)),e.style=ds(a))}const o=oe(t)?1:ml(t)?128:Yl(t)?64:Z(t)?4:$(t)?2:0;return Cs(t,e,n,r,s,o,i,!0)}function nu(t){return t?Co(t)||gr in t?se({},t):t:null}function $t(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?su(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ea(c),ref:e&&e.ref?n&&s?B(s)?s.concat(jn(e)):[s,jn(e)]:jn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ru(t=" ",e=0){return ye(pr,null,t,e)}function Me(t){return t==null||typeof t=="boolean"?ye(pn):B(t)?ye(xe,null,t.slice()):typeof t=="object"?tt(t):ye(pr,null,String(t))}function tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$t(t)}function As(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),As(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(gr in e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[ru(e)]):n=8);t.children=e,t.shapeFlag|=n}function su(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hs([e.class,r.class]));else if(s==="style")e.style=ds([e.style,r.style]);else if(or(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Ae(t,e,7,[n,r])}const iu=qo();let ou=0;function au(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iu,i={uid:ou++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jo(r,s),emitsOptions:Uo(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ul.bind(null,i),t.ce&&t.ce(i),i}let ie=null,Ss,St,ui="__VUE_INSTANCE_SETTERS__";(St=Fr()[ui])||(St=Fr()[ui]=[]),St.push(t=>ie=t),Ss=t=>{St.length>1?St.forEach(e=>e(t)):St[0](t)};const Ht=t=>{Ss(t),t.scope.on()},bt=()=>{ie&&ie.scope.off(),Ss(null)};function ta(t){return t.vnode.shapeFlag&4}let mn=!1;function cu(t,e=!1){mn=e;const{props:n,children:r}=t.vnode,s=ta(t);jl(t,n,s,e),zl(t,r);const i=s?lu(t,e):void 0;return mn=!1,i}function lu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bs(new Proxy(t.ctx,xl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?fu(t):null;Ht(t),qt();const i=ct(r,t,0,[t.props,s]);if(Gt(),bt(),fo(i)){if(i.then(bt,bt),e)return i.then(o=>{fi(t,o,e)}).catch(o=>{fr(o,t,0)});t.asyncDep=i}else fi(t,i,e)}else na(t,e)}function fi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=ko(e)),na(t,n)}let di;function na(t,e,n){const r=t.type;if(!t.render){if(!e&&di&&!r.render){const s=r.template||Ts(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=se(se({isCustomElement:i,delimiters:c},o),a);r.render=di(s,l)}}t.render=r.render||Ce}Ht(t),qt(),Ml(t),Gt(),bt()}function uu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pe(t,"get","$attrs"),e[n]}}))}function fu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return uu(t)},slots:t.slots,emit:t.emit,expose:e}}function Ps(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ko(bs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sn)return sn[n](t)},has(e,n){return n in e||n in sn}}))}function du(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function hu(t){return $(t)&&"__vccOpts"in t}const ve=(t,e)=>sl(t,e,mn);function ra(t,e,n){const r=arguments.length;return r===2?Z(e)&&!B(e)?Jr(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jr(n)&&(n=[n]),ye(t,e,n))}const pu=Symbol.for("v-scx"),gu=()=>ze(pu),mu="3.3.2",_u="http://www.w3.org/2000/svg",vt=typeof document<"u"?document:null,hi=vt&&vt.createElement("template"),vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?vt.createElementNS(_u,t):vt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vt.createTextNode(t),createComment:t=>vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hi.innerHTML=r?`<svg>${t}</svg>`:t;const c=hi.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bu(t,e,n){const r=t.style,s=oe(n);if(n&&!s){if(e&&!oe(e))for(const i in e)n[i]==null&&Yr(r,i,"");for(const i in n)Yr(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const pi=/\s*!important$/;function Yr(t,e,n){if(B(n))n.forEach(r=>Yr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Eu(t,e);pi.test(n)?t.setProperty(Kt(r),n.replace(pi,""),"important"):t[r]=n}}const gi=["Webkit","Moz","ms"],Cr={};function Eu(t,e){const n=Cr[e];if(n)return n;let r=Be(e);if(r!=="filter"&&r in t)return Cr[e]=r;r=lr(r);for(let s=0;s<gi.length;s++){const i=gi[s]+r;if(i in t)return Cr[e]=i}return e}const mi="http://www.w3.org/1999/xlink";function Iu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mi,e.slice(6,e.length)):t.setAttributeNS(mi,e,n);else{const i=wc(e);n==null||i&&!ho(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function wu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ho(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Tu(t,e,n,r){t.addEventListener(e,n,r)}function Ru(t,e,n,r){t.removeEventListener(e,n,r)}function Cu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Au(e);if(r){const l=i[e]=Ou(r,s);Tu(t,c,l,a)}else o&&(Ru(t,c,o,a),i[e]=void 0)}}const _i=/(?:Once|Passive|Capture)$/;function Au(t){let e;if(_i.test(t)){e={};let r;for(;r=t.match(_i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kt(t.slice(2)),e]}let Ar=0;const Su=Promise.resolve(),Pu=()=>Ar||(Su.then(()=>Ar=0),Ar=Date.now());function Ou(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(ku(r,n.value),e,5,[r])};return n.value=t,n.attached=Pu(),n}function ku(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vi=/^on[a-z]/,Nu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?yu(t,r,s):e==="style"?bu(t,n,r):or(e)?cs(e)||Cu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Du(t,e,r,s))?wu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Iu(t,e,r,s))};function Du(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&vi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vi.test(e)&&oe(n)?!1:e in t}const xu=se({patchProp:Nu},vu);let yi;function Mu(){return yi||(yi=ql(xu))}const Lu=(...t)=>{const e=Mu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uu(t){return oe(t)?document.querySelector(t):t}var Fu=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bu=Symbol();var bi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bi||(bi={}));function $u(){const t=Tc(!0),e=t.run(()=>Po({}));let n=[],r=[];const s=bs({install(i){s._a=i,i.provide(Bu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Fu?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Hu={},ju=Cs("div",{id:"app"},null,-1);function Vu(t,e){const n=kl("router-view");return Xl(),eu(xe,null,[ju,ye(n)],64)}const Wu=Jt(Hu,[["render",Vu]]),zu="modulepreload",Ku=function(t){return"/"+t},Ei={},Ii=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ku(i),i in Ei)return;Ei[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":zu,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Pt=typeof window<"u";function qu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Sr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Se(s)?s.map(t):t(s)}return n}const an=()=>{},Se=Array.isArray,Gu=/\/$/,Ju=t=>t.replace(Gu,"");function Pr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Zu(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Yu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xu(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&jt(e.matched[r],n.matched[s])&&sa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qu(t[n],e[n]))return!1;return!0}function Qu(t,e){return Se(t)?Ti(t,e):Se(e)?Ti(e,t):t===e}function Ti(t,e){return Se(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zu(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _n;(function(t){t.pop="pop",t.push="push"})(_n||(_n={}));var cn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cn||(cn={}));function ef(t){if(!t)if(Pt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ju(t)}const tf=/^[^#]+#/;function nf(t,e){return t.replace(tf,"#")+e}function rf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function sf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ri(t,e){return(history.state?history.state.position-e:-1)+t}const Xr=new Map;function of(t,e){Xr.set(t,e)}function af(t){const e=Xr.get(t);return Xr.delete(t),e}let cf=()=>location.protocol+"//"+location.host;function ia(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),wi(a,"")}return wi(n,t)+r+s}function lf(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=ia(t,location),A=n.value,P=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===A){o=null;return}L=P?g.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,A,{delta:L,type:_n.pop,direction:L?L>0?cn.forward:cn.back:cn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const y=()=>{const A=s.indexOf(g);A>-1&&s.splice(A,1)};return i.push(y),y}function f(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:mr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Ci(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?mr():null}}function uf(t){const{history:e,location:n}=window,r={value:ia(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:cf()+t+a;try{e[f?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(a,l){const f=q({},e.state,Ci(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=q({},s.value,e.state,{forward:a,scroll:mr()});i(f.current,f,!0);const h=q({},Ci(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function ff(t){t=ef(t);const e=uf(t),n=lf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:nf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function df(t){return typeof t=="string"||t&&typeof t=="object"}function oa(t){return typeof t=="string"||typeof t=="symbol"}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},aa=Symbol("");var Ai;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ai||(Ai={}));function Vt(t,e){return q(new Error,{type:t,[aa]:!0},e)}function He(t,e){return t instanceof Error&&aa in t&&(e==null||!!(t.type&e))}const Si="[^/]+?",hf={sensitive:!1,strict:!1,start:!0,end:!0},pf=/[.+*?^${}()[\]/\\]/g;function gf(t,e){const n=q({},hf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(pf,"\\$&"),y+=40;else if(g.type===1){const{value:A,repeatable:P,optional:L,regexp:k}=g;i.push({name:A,repeatable:P,optional:L});const x=k||Si;if(x!==Si){y+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+M.message)}}let j=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(j=L&&l.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,y+=20,L&&(y+=-8),P&&(y+=-20),x===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",A=i[g-1];h[A.name]=y&&A.repeatable?y.split("/"):y}return h}function a(l){let f="",h=!1;for(const g of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of g)if(y.type===0)f+=y.value;else if(y.type===1){const{value:A,repeatable:P,optional:L}=y,k=A in l?l[A]:"";if(Se(k)&&!P)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=Se(k)?k.join("/"):k;if(!x)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function mf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _f(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pi(r))return 1;if(Pi(s))return-1}return s.length-r.length}function Pi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vf={type:0,value:""},yf=/[a-zA-Z0-9_]/;function bf(t){if(!t)return[[]];if(t==="/")return[[vf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:yf.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Ef(t,e,n){const r=gf(bf(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function If(t,e){const n=[],r=new Map;e=Ni({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const y=!g,A=wf(f);A.aliasOf=g&&g.record;const P=Ni(e,f),L=[A];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of j)L.push(q({},A,{components:g?g.record.components:A.components,path:M,aliasOf:g?g.record:A}))}let k,x;for(const j of L){const{path:M}=j;if(h&&M[0]!=="/"){const te=h.record.path,ne=te[te.length-1]==="/"?"":"/";j.path=h.record.path+(M&&ne+M)}if(k=Ef(j,h,P),g?g.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),y&&f.name&&!ki(k)&&o(f.name)),A.children){const te=A.children;for(let ne=0;ne<te.length;ne++)i(te[ne],k,g&&g.children[ne])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return x?()=>{o(x)}:an}function o(f){if(oa(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&_f(f,n[h])>=0&&(f.record.path!==n[h].record.path||!ca(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ki(f)&&r.set(f.record.name,f)}function l(f,h){let g,y={},A,P;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Vt(1,{location:f});P=g.record.name,y=q(Oi(h.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Oi(f.params,g.keys.map(x=>x.name))),A=g.stringify(y)}else if("path"in f)A=f.path,g=n.find(x=>x.re.test(A)),g&&(y=g.parse(A),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw Vt(1,{location:f,currentLocation:h});P=g.record.name,y=q({},h.params,f.params),A=g.stringify(y)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:A,params:y,matched:L,meta:Rf(L)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Oi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Tf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Tf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ki(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function Ni(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ca(t,e){return e.children.some(n=>n===t||ca(t,n))}const la=/#/g,Cf=/&/g,Af=/\//g,Sf=/=/g,Pf=/\?/g,ua=/\+/g,Of=/%5B/g,kf=/%5D/g,fa=/%5E/g,Nf=/%60/g,da=/%7B/g,Df=/%7C/g,ha=/%7D/g,xf=/%20/g;function Os(t){return encodeURI(""+t).replace(Df,"|").replace(Of,"[").replace(kf,"]")}function Mf(t){return Os(t).replace(da,"{").replace(ha,"}").replace(fa,"^")}function Qr(t){return Os(t).replace(ua,"%2B").replace(xf,"+").replace(la,"%23").replace(Cf,"%26").replace(Nf,"`").replace(da,"{").replace(ha,"}").replace(fa,"^")}function Lf(t){return Qr(t).replace(Sf,"%3D")}function Uf(t){return Os(t).replace(la,"%23").replace(Pf,"%3F")}function Ff(t){return t==null?"":Uf(t).replace(Af,"%2F")}function Qn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Bf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ua," "),o=i.indexOf("="),c=Qn(o<0?i:i.slice(0,o)),a=o<0?null:Qn(i.slice(o+1));if(c in e){let l=e[c];Se(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Di(t){let e="";for(let n in t){const r=t[n];if(n=Lf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Se(r)?r.map(i=>i&&Qr(i)):[r&&Qr(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $f(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Se(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Hf=Symbol(""),xi=Symbol(""),ks=Symbol(""),pa=Symbol(""),Zr=Symbol("");function en(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Vt(4,{from:n,to:e})):h instanceof Error?c(h):df(h)?c(Vt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(h=>c(h))})}function Or(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(jf(c)){const l=(c.__vccOpts||c)[e];l&&s.push(nt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=qu(l)?l.default:l;i.components[o]=f;const g=(f.__vccOpts||f)[e];return g&&nt(g,n,r,i,o)()}))}}return s}function jf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mi(t){const e=ze(ks),n=ze(pa),r=ve(()=>e.resolve(xt(t.to))),s=ve(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const g=h.findIndex(jt.bind(null,f));if(g>-1)return g;const y=Li(a[l-2]);return l>1&&Li(f)===y&&h[h.length-1].path!==y?h.findIndex(jt.bind(null,a[l-2])):g}),i=ve(()=>s.value>-1&&Kf(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&sa(n.params,r.value.params));function c(a={}){return zf(a)?e[xt(t.replace)?"replace":"push"](xt(t.to)).catch(an):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Vf=Ho({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mi,setup(t,{slots:e}){const n=In(Mi(t)),{options:r}=ze(ks),s=ve(()=>({[Ui(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ui(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ra("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wf=Vf;function zf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Se(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Li(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ui=(t,e,n)=>t??e??n,qf=Ho({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ze(Zr),s=ve(()=>t.route||r.value),i=ze(xi,0),o=ve(()=>{let l=xt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=ve(()=>s.value.matched[o.value]);Hn(xi,ve(()=>o.value+1)),Hn(Hf,c),Hn(Zr,s);const a=Po();return Bn(()=>[a.value,c.value,t.name],([l,f,h],[g,y,A])=>{f&&(f.instances[h]=l,y&&y!==f&&l&&l===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),l&&f&&(!y||!jt(f,y)||!g)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,g=h&&h.components[f];if(!g)return Fi(n.default,{Component:g,route:l});const y=h.props[f],A=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=ra(g,q({},A,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return Fi(n.default,{Component:L,route:l})||L}}});function Fi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gf=qf;function Jf(t){const e=If(t.routes,t),n=t.parseQuery||Bf,r=t.stringifyQuery||Di,s=t.history,i=en(),o=en(),c=en(),a=el(Ze);let l=Ze;Pt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Sr.bind(null,_=>""+_),h=Sr.bind(null,Ff),g=Sr.bind(null,Qn);function y(_,C){let T,O;return oa(_)?(T=e.getRecordMatcher(_),O=C):O=_,e.addRoute(O,T)}function A(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function k(_,C){if(C=q({},C||a.value),typeof _=="string"){const p=Pr(n,_,C.path),m=e.resolve({path:p.path},C),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:Qn(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Pr(n,_.path,C.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),C.params=h(C.params)}const O=e.resolve(T,C),K=_.hash||"";O.params=f(g(O.params));const u=Yu(r,q({},_,{hash:Mf(K),path:O.path})),d=s.createHref(u);return q({fullPath:u,hash:K,query:r===Di?$f(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function x(_){return typeof _=="string"?Pr(n,_,a.value.path):q({},_)}function j(_,C){if(l!==_)return Vt(8,{from:C,to:_})}function M(_){return ge(_)}function te(_){return M(q(x(_),{replace:!0}))}function ne(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=x(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function ge(_,C){const T=l=k(_),O=a.value,K=_.state,u=_.force,d=_.replace===!0,p=ne(T);if(p)return ge(q(x(p),{state:typeof p=="object"?q({},K,p.state):K,force:u,replace:d}),C||T);const m=T;m.redirectedFrom=C;let v;return!u&&Xu(r,O,T)&&(v=Vt(16,{to:m,from:O}),ke(O,O,!0,!1)),(v?Promise.resolve(v):_e(m,O)).catch(b=>He(b)?He(b,2)?b:Xe(b):z(b,m,O)).then(b=>{if(b){if(He(b,2))return ge(q({replace:d},x(b.to),{state:typeof b.to=="object"?q({},K,b.to.state):K,force:u}),C||m)}else b=ht(m,O,!0,d,K);return Ye(m,O,b),b})}function be(_,C){const T=j(_,C);return T?Promise.reject(T):Promise.resolve()}function Pe(_){const C=Ct.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(_):_()}function _e(_,C){let T;const[O,K,u]=Yf(_,C);T=Or(O.reverse(),"beforeRouteLeave",_,C);for(const p of O)p.leaveGuards.forEach(m=>{T.push(nt(m,_,C))});const d=be.bind(null,_,C);return T.push(d),ae(T).then(()=>{T=[];for(const p of i.list())T.push(nt(p,_,C));return T.push(d),ae(T)}).then(()=>{T=Or(K,"beforeRouteUpdate",_,C);for(const p of K)p.updateGuards.forEach(m=>{T.push(nt(m,_,C))});return T.push(d),ae(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!C.matched.includes(p))if(Se(p.beforeEnter))for(const m of p.beforeEnter)T.push(nt(m,_,C));else T.push(nt(p.beforeEnter,_,C));return T.push(d),ae(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Or(u,"beforeRouteEnter",_,C),T.push(d),ae(T))).then(()=>{T=[];for(const p of o.list())T.push(nt(p,_,C));return T.push(d),ae(T)}).catch(p=>He(p,8)?p:Promise.reject(p))}function Ye(_,C,T){for(const O of c.list())Pe(()=>O(_,C,T))}function ht(_,C,T,O,K){const u=j(_,C);if(u)return u;const d=C===Ze,p=Pt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},K)):s.push(_.fullPath,K)),a.value=_,ke(_,C,T,d),Xe()}let Oe;function Xt(){Oe||(Oe=s.listen((_,C,T)=>{if(!On.listening)return;const O=k(_),K=ne(O);if(K){ge(q(K,{replace:!0}),O).catch(an);return}l=O;const u=a.value;Pt&&of(Ri(u.fullPath,T.delta),mr()),_e(O,u).catch(d=>He(d,12)?d:He(d,2)?(ge(d.to,O).then(p=>{He(p,20)&&!T.delta&&T.type===_n.pop&&s.go(-1,!1)}).catch(an),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,u))).then(d=>{d=d||ht(O,u,!1),d&&(T.delta&&!He(d,8)?s.go(-T.delta,!1):T.type===_n.pop&&He(d,20)&&s.go(-1,!1)),Ye(O,u,d)}).catch(an)}))}let Tt=en(),re=en(),J;function z(_,C,T){Xe(_);const O=re.list();return O.length?O.forEach(K=>K(_,C,T)):console.error(_),Promise.reject(_)}function $e(){return J&&a.value!==Ze?Promise.resolve():new Promise((_,C)=>{Tt.add([_,C])})}function Xe(_){return J||(J=!_,Xt(),Tt.list().forEach(([C,T])=>_?T(_):C()),Tt.reset()),_}function ke(_,C,T,O){const{scrollBehavior:K}=t;if(!Pt||!K)return Promise.resolve();const u=!T&&af(Ri(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Do().then(()=>K(_,C,u)).then(d=>d&&sf(d)).catch(d=>z(d,_,C))}const de=_=>s.go(_);let Rt;const Ct=new Set,On={currentRoute:a,listening:!0,addRoute:y,removeRoute:A,hasRoute:L,getRoutes:P,resolve:k,options:t,push:M,replace:te,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:$e,install(_){const C=this;_.component("RouterLink",Wf),_.component("RouterView",Gf),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>xt(a)}),Pt&&!Rt&&a.value===Ze&&(Rt=!0,M(s.location).catch(K=>{}));const T={};for(const K in Ze)T[K]=ve(()=>a.value[K]);_.provide(ks,C),_.provide(pa,In(T)),_.provide(Zr,a);const O=_.unmount;Ct.add(_),_.unmount=function(){Ct.delete(_),Ct.size<1&&(l=Ze,Oe&&Oe(),Oe=null,a.value=Ze,Rt=!1,J=!1),O()}}};function ae(_){return _.reduce((C,T)=>C.then(()=>Pe(T)),Promise.resolve())}return On}function Yf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>jt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>jt(l,a))||s.push(a))}return[n,r,s]}const Xf={};function Qf(t,e){return null}const Zf=Jt(Xf,[["render",Qf]]),ed={};function td(t,e){return null}const nd=Jt(ed,[["render",td]]),rd={};function sd(t,e){return null}const id=Jt(rd,[["render",sd]]),od={};function ad(t,e){return null}const cd=Jt(od,[["render",ad]]),ld={};function ud(t,e){return null}const fd=Jt(ld,[["render",ud]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(g=64)),r.push(n[f],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ga(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new hd;const g=i<<2|c>>4;if(r.push(g),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pd=function(t){const e=ga(t);return ma.encodeByteArray(e,!0)},_a=function(t){return pd(t).replace(/\./g,"")},va=function(t){try{return ma.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=()=>gd().__FIREBASE_DEFAULTS__,_d=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&va(t[1]);return e&&JSON.parse(e)},Ns=()=>{try{return md()||_d()||vd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yd=t=>{var e,n;return(n=(e=Ns())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ya=()=>{var t;return(t=Ns())===null||t===void 0?void 0:t.config},ba=t=>{var e;return(e=Ns())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function Id(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Td(){const t=ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rd(){try{return typeof indexedDB=="object"}catch{return!1}}function Cd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="FirebaseError";class dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ad,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dt(s,c,r)}}function Sd(t,e){return t.replace(Pd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pd=/\{\$([^}]+)}/g;function Od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bi(i)&&Bi(o)){if(!Zn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kd(t,e){const n=new Nd(t,e);return n.subscribe.bind(n)}class Nd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kr),s.error===void 0&&(s.error=kr),s.complete===void 0&&(s.complete=kr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){return t&&t._delegate?t._delegate:t}class Wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ld(e))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mt){return this.instances.has(e)}getOptions(e=mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Md(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mt){return this.component?this.component.multipleInstances?e:mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Md(t){return t===mt?void 0:t}function Ld(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Fd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Bd=Y.INFO,$d={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Hd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$d[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ea{constructor(e){this.name=e,this._logLevel=Bd,this._logHandler=Hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const jd=(t,e)=>e.some(n=>t instanceof n);let $i,Hi;function Vd(){return $i||($i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wd(){return Hi||(Hi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ia=new WeakMap,es=new WeakMap,wa=new WeakMap,Nr=new WeakMap,Ds=new WeakMap;function zd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ia.set(n,t)}).catch(()=>{}),Ds.set(e,t),e}function Kd(t){if(es.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});es.set(t,e)}let ts={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return es.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qd(t){ts=t(ts)}function Gd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dr(this),e,...n);return wa.set(r,e.sort?e.sort():[e]),lt(r)}:Wd().includes(t)?function(...e){return t.apply(Dr(this),e),lt(Ia.get(this))}:function(...e){return lt(t.apply(Dr(this),e))}}function Jd(t){return typeof t=="function"?Gd(t):(t instanceof IDBTransaction&&Kd(t),jd(t,Vd())?new Proxy(t,ts):t)}function lt(t){if(t instanceof IDBRequest)return zd(t);if(Nr.has(t))return Nr.get(t);const e=Jd(t);return e!==t&&(Nr.set(t,e),Ds.set(e,t)),e}const Dr=t=>Ds.get(t);function Yd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(lt(o.result),a.oldVersion,a.newVersion,lt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Xd=["get","getKey","getAll","getAllKeys","count"],Qd=["put","add","delete","clear"],xr=new Map;function ji(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xr.get(e))return xr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Qd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return xr.set(e,i),i}qd(t=>({...t,get:(e,n,r)=>ji(e,n)||t.get(e,n,r),has:(e,n)=>!!ji(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ns="@firebase/app",Vi="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Ea("@firebase/app"),th="@firebase/app-compat",nh="@firebase/analytics-compat",rh="@firebase/analytics",sh="@firebase/app-check-compat",ih="@firebase/app-check",oh="@firebase/auth",ah="@firebase/auth-compat",ch="@firebase/database",lh="@firebase/database-compat",uh="@firebase/functions",fh="@firebase/functions-compat",dh="@firebase/installations",hh="@firebase/installations-compat",ph="@firebase/messaging",gh="@firebase/messaging-compat",mh="@firebase/performance",_h="@firebase/performance-compat",vh="@firebase/remote-config",yh="@firebase/remote-config-compat",bh="@firebase/storage",Eh="@firebase/storage-compat",Ih="@firebase/firestore",wh="@firebase/firestore-compat",Th="firebase",Rh="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]",Ch={[ns]:"fire-core",[th]:"fire-core-compat",[rh]:"fire-analytics",[nh]:"fire-analytics-compat",[ih]:"fire-app-check",[sh]:"fire-app-check-compat",[oh]:"fire-auth",[ah]:"fire-auth-compat",[ch]:"fire-rtdb",[lh]:"fire-rtdb-compat",[uh]:"fire-fn",[fh]:"fire-fn-compat",[dh]:"fire-iid",[hh]:"fire-iid-compat",[ph]:"fire-fcm",[gh]:"fire-fcm-compat",[mh]:"fire-perf",[_h]:"fire-perf-compat",[vh]:"fire-rc",[yh]:"fire-rc-compat",[bh]:"fire-gcs",[Eh]:"fire-gcs-compat",[Ih]:"fire-fst",[wh]:"fire-fst-compat","fire-js":"fire-js",[Th]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Map,ss=new Map;function Ah(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(ss.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;ss.set(e,t);for(const n of er.values())Ah(n,t);return!0}function Ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ut=new wn("app","Firebase",Sh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=Rh;function Ra(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ut.create("bad-app-name",{appName:String(s)});if(n||(n=ya()),!n)throw ut.create("no-options");const i=er.get(s);if(i){if(Zn(n,i.options)&&Zn(r,i.config))return i;throw ut.create("duplicate-app",{appName:s})}const o=new Ud(s);for(const a of ss.values())o.addComponent(a);const c=new Ph(n,r,o);return er.set(s,c),c}function Oh(t=rs){const e=er.get(t);if(!e&&t===rs&&ya())return Ra();if(!e)throw ut.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let s=(r=Ch[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(c.join(" "));return}vn(new Wt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="firebase-heartbeat-database",Nh=1,yn="firebase-heartbeat-store";let Mr=null;function Ca(){return Mr||(Mr=Yd(kh,Nh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yn)}}}).catch(t=>{throw ut.create("idb-open",{originalErrorMessage:t.message})})),Mr}async function Dh(t){try{return await(await Ca()).transaction(yn).objectStore(yn).get(Aa(t))}catch(e){if(e instanceof dt)It.warn(e.message);else{const n=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(n.message)}}}async function Wi(t,e){try{const r=(await Ca()).transaction(yn,"readwrite");await r.objectStore(yn).put(e,Aa(t)),await r.done}catch(n){if(n instanceof dt)It.warn(n.message);else{const r=ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});It.warn(r.message)}}}function Aa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=1024,Mh=30*24*60*60*1e3;class Lh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Mh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zi(),{heartbeatsToSend:n,unsentEntries:r}=Uh(this._heartbeatsCache.heartbeats),s=_a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zi(){return new Date().toISOString().substring(0,10)}function Uh(t,e=xh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ki(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ki(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?Cd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Dh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ki(t){return _a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){vn(new Wt("platform-logger",e=>new Zd(e),"PRIVATE")),vn(new Wt("heartbeat",e=>new Lh(e),"PRIVATE")),Lt(ns,Vi,t),Lt(ns,Vi,"esm2017"),Lt("fire-js","")}Bh("");var $h="firebase",Hh="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt($h,Hh,"app");function xs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jh=Sa,Pa=new wn("auth","Firebase",Sa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Ea("@firebase/auth");function Vh(t,...e){tr.logLevel<=Y.WARN&&tr.warn(`Auth (${Rn}): ${t}`,...e)}function Vn(t,...e){tr.logLevel<=Y.ERROR&&tr.error(`Auth (${Rn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,...e){throw Ms(t,...e)}function Ue(t,...e){return Ms(t,...e)}function Wh(t,e,n){const r=Object.assign(Object.assign({},jh()),{[e]:n});return new wn("auth","Firebase",r).create(e,{appName:t.name})}function Ms(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pa.create(t,...e)}function F(t,e,...n){if(!t)throw Ms(e,...n)}function Ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vn(e),new Error(e)}function Ge(t,e){t||Ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zh(){return qi()==="http:"||qi()==="https:"}function qi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zh()||Id()||"connection"in navigator)?navigator.onLine:!0}function qh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||wd()}get(){return Kh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Cn(3e4,6e4);function ka(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function An(t,e,n,r,s={}){return Na(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Tn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Oa.fetch()(Da(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Na(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gh),e);try{const s=new Xh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Un(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Un(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Un(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Un(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wh(t,f,l);qe(t,f)}}catch(s){if(s instanceof dt)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function Yh(t,e,n,r,s={}){const i=await An(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Da(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ls(t.config,s):`${t.config.apiScheme}://${s}`}class Xh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Jh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Un(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ue(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function Zh(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ep(t,e=!1){const n=Yt(t),r=await n.getIdToken(e),s=Us(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ln(Lr(s.auth_time)),issuedAtTime:ln(Lr(s.iat)),expirationTime:ln(Lr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lr(t){return Number(t)*1e3}function Us(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vn("JWT malformed, contained fewer than 3 sections"),null;try{const s=va(n);return s?JSON.parse(s):(Vn("Failed to decode base64 JWT payload"),null)}catch(s){return Vn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tp(t){const e=Us(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dt&&np(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function np({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ln(this.lastLoginAt),this.creationTime=ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bn(t,Zh(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?op(i.providerUserInfo):[],c=ip(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new xa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function sp(t){const e=Yt(t);await nr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ip(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function op(t){return t.map(e=>{var{providerId:n}=e,r=xs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e){const n=await Na(t,{},async()=>{const r=Tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Da(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Oa.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ap(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new En;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ep(this,e)}reload(){return sp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bn(this,Qh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:M,isAnonymous:te,providerData:ne,stsTokenManager:ge}=n;F(j&&ge,e,"internal-error");const be=En.fromJSON(this.name,ge);F(typeof j=="string",e,"internal-error"),et(h,e.name),et(g,e.name),F(typeof M=="boolean",e,"internal-error"),F(typeof te=="boolean",e,"internal-error"),et(y,e.name),et(A,e.name),et(P,e.name),et(L,e.name),et(k,e.name),et(x,e.name);const Pe=new Et({uid:j,auth:e,email:g,emailVerified:M,displayName:h,isAnonymous:te,photoURL:A,phoneNumber:y,tenantId:P,stsTokenManager:be,createdAt:k,lastLoginAt:x});return ne&&Array.isArray(ne)&&(Pe.providerData=ne.map(_e=>Object.assign({},_e))),L&&(Pe._redirectEventId=L),Pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new En;s.updateFromServerResponse(n);const i=new Et({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await nr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map;function We(t){Ge(t instanceof Function,"Expected a class definition");let e=Gi.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ma.type="NONE";const Ji=Ma;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ut{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ut(We(Ji),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||We(Ji);const o=Wn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Et._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Ut(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ut(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(La(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($a(e))return"Blackberry";if(Ha(e))return"Webos";if(Fs(e))return"Safari";if((e.includes("chrome/")||Ua(e))&&!e.includes("edge/"))return"Chrome";if(Ba(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function La(t=ue()){return/firefox\//i.test(t)}function Fs(t=ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ua(t=ue()){return/crios\//i.test(t)}function Fa(t=ue()){return/iemobile/i.test(t)}function Ba(t=ue()){return/android/i.test(t)}function $a(t=ue()){return/blackberry/i.test(t)}function Ha(t=ue()){return/webos/i.test(t)}function _r(t=ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cp(t=ue()){var e;return _r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lp(){return Td()&&document.documentMode===10}function ja(t=ue()){return _r(t)||Ba(t)||Ha(t)||$a(t)||/windows phone/i.test(t)||Fa(t)}function up(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e=[]){let n;switch(t){case"Browser":n=Yi(ue());break;case"Worker":n=`${Yi(ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rn}/${r}`}async function Wa(t,e){return An(t,"GET","/v2/recaptchaConfig",ka(t,e))}function Xi(t){return t!==void 0&&t.enterprise!==void 0}class za{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ka(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fp().appendChild(r)})}function dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hp="https://www.google.com/recaptcha/enterprise.js?render=",pp="recaptcha-enterprise",gp="NO_RECAPTCHA";class mp{constructor(e){this.type=pp,this.auth=vr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Wa(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new za(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Xi(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(gp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Xi(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ka(hp+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qi(this),this.idTokenSubscription=new Qi(this),this.beforeStateQueue=new _p(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=We(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ut.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}async initializeRecaptchaConfig(){const e=await Wa(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new za(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new mp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&We(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Ut.create(this,[We(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Va(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vr(t){return Yt(t)}class Qi{constructor(e){this.auth=e,this.observer=null,this.addObserver=kd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){const n=Ta(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zn(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function bp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(We);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ep(t,e,n){const r=vr(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=qa(e),{host:o,port:c}=Ip(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wp()}function qa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ip(t){const e=qa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zi(o)}}}function Zi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,n){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return Yh(t,"POST","/v1/accounts:signInWithIdp",ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="http://localhost";class wt extends Ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ft(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ft(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ft(e,n)}buildRequest(){const e={requestUri:Tp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ja{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Sn{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return st.credential(n,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Sn{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Sn{constructor(){super("twitter.com")}static credential(e,n){return wt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com";ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Et._fromIdTokenResponse(e,r,s),o=eo(r);return new zt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=eo(r);return new zt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function eo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends dt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,rr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new rr(e,n,r,s)}}function Ya(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?rr._fromErrorAndOperation(t,i,e,r):i})}async function Rp(t,e,n=!1){const r=await bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await bn(t,Ya(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Us(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(t.uid===c,r,"user-mismatch"),zt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e,n=!1){const r="signIn",s=await Ya(t,r,e),i=await zt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Sp(t,e,n,r){return Yt(t).onIdTokenChanged(e,n,r)}function Pp(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}const sr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sr,"1"),this.storage.removeItem(sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){const t=ue();return Fs(t)||_r(t)}const kp=1e3,Np=10;class Qa extends Xa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Op()&&up(),this.fallbackToPolling=ja(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Np):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qa.type="LOCAL";const Dp=Qa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Xa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Za.type="SESSION";const ec=Za;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await xp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Bs("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function Lp(t){Fe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function Up(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bp(){return tc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="firebaseLocalStorageDb",$p=1,ir="firebaseLocalStorage",rc="fbase_key";class Pn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function br(t,e){return t.transaction([ir],e?"readwrite":"readonly").objectStore(ir)}function Hp(){const t=indexedDB.deleteDatabase(nc);return new Pn(t).toPromise()}function os(){const t=indexedDB.open(nc,$p);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ir,{keyPath:rc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ir)?e(r):(r.close(),await Hp(),e(await os()))})})}async function to(t,e,n){const r=br(t,!0).put({[rc]:e,value:n});return new Pn(r).toPromise()}async function jp(t,e){const n=br(t,!1).get(e),r=await new Pn(n).toPromise();return r===void 0?null:r.value}function no(t,e){const n=br(t,!0).delete(e);return new Pn(n).toPromise()}const Vp=800,Wp=3;class sc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await os(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yr._getInstance(Bp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Up(),!this.activeServiceWorker)return;this.sender=new Mp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await os();return await to(e,sr,"1"),await no(e,sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>to(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>no(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=br(s,!1).getAll();return new Pn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sc.type="LOCAL";const zp=sc;new Cn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){return e?We(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ft(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ft(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qp(t){return Ap(t.auth,new $s(t),t.bypassAuthState)}function Gp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Cp(n,new $s(t),t.bypassAuthState)}async function Jp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Rp(n,new $s(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qp;case"linkViaPopup":case"linkViaRedirect":return Jp;case"reauthViaPopup":case"reauthViaRedirect":return Gp;default:qe(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Cn(2e3,1e4);class kt extends ic{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yp.get())};e()}}kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="pendingRedirect",zn=new Map;class Qp extends ic{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zn.get(this.auth._key());if(!e){try{const r=await Zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zn.set(this.auth._key(),e)}return this.bypassAuthState||zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zp(t,e){const n=ng(e),r=tg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eg(t,e){zn.set(t._key(),e)}function tg(t){return We(t._redirectPersistence)}function ng(t){return Wn(Xp,t.config.apiKey,t.name)}async function rg(t,e,n=!1){const r=vr(t),s=Kp(r,e),o=await new Qp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=10*60*1e3;class ig{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!og(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ue(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ro(e))}saveEventToCache(e){this.cachedEventUids.add(ro(e)),this.lastProcessedEventTime=Date.now()}}function ro(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function og(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e={}){return An(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lg=/^https?/;async function ug(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ag(t);for(const n of e)try{if(fg(n))return}catch{}qe(t,"unauthorized-domain")}function fg(t){const e=is(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lg.test(n))return!1;if(cg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Cn(3e4,6e4);function so(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hg(t){return new Promise((e,n)=>{var r,s,i;function o(){so(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{so(),n(Ue(t,"network-request-failed"))},timeout:dg.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fe().gapi)===null||i===void 0)&&i.load)o();else{const c=dp("iframefcb");return Fe()[c]=()=>{gapi.load?o():n(Ue(t,"network-request-failed"))},Ka(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Kn=null,e})}let Kn=null;function pg(t){return Kn=Kn||hg(t),Kn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Cn(5e3,15e3),mg="__/auth/iframe",_g="emulator/auth/iframe",vg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bg(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ls(e,_g):`https://${t.config.authDomain}/${mg}`,r={apiKey:e.apiKey,appName:t.name,v:Rn},s=yg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Tn(r).slice(1)}`}async function Eg(t){const e=await pg(t),n=Fe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:bg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(t,"network-request-failed"),c=Fe().setTimeout(()=>{i(o)},gg.get());function a(){Fe().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wg=500,Tg=600,Rg="_blank",Cg="http://localhost";class io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ag(t,e,n,r=wg,s=Tg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ig),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ue().toLowerCase();n&&(c=Ua(l)?Rg:n),La(l)&&(e=e||Cg,a.scrollbars="yes");const f=Object.entries(a).reduce((g,[y,A])=>`${g}${y}=${A},`,"");if(cp(l)&&c!=="_self")return Sg(e||"",c),new io(null);const h=window.open(e||"",c,f);F(h,t,"popup-blocked");try{h.focus()}catch{}return new io(h)}function Sg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__/auth/handler",Og="emulator/auth/handler",kg=encodeURIComponent("fac");async function oo(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rn,eventId:s};if(e instanceof Ja){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Sn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${kg}=${encodeURIComponent(a)}`:"";return`${Ng(t)}?${Tn(c).slice(1)}${l}`}function Ng({config:t}){return t.emulator?Ls(t,Og):`https://${t.authDomain}/${Pg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="webStorageSupport";class Dg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ec,this._completeRedirectFn=rg,this._overrideRedirectResult=eg}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await oo(e,n,r,is(),s);return Ag(e,o,Bs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await oo(e,n,r,is(),s);return Lp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Eg(e),r=new ig(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ur,{type:Ur},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ur];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ug(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ja()||Fs()||_r()}}const xg=Dg;var ao="@firebase/auth",co="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ug(t){vn(new Wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Va(t)},l=new vp(r,s,i,a);return bp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new Wt("auth-internal",e=>{const n=vr(e.getProvider("auth").getImmediate());return(r=>new Mg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(ao,co,Lg(t)),Lt(ao,co,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=5*60,Bg=ba("authIdTokenMaxAge")||Fg;let lo=null;const $g=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bg)return;const s=n==null?void 0:n.token;lo!==s&&(lo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hg(t=Oh()){const e=Ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yp(t,{popupRedirectResolver:xg,persistence:[zp,Dp,ec]}),r=ba("authTokenSyncURL");if(r){const i=$g(r);Pp(n,i,()=>i(n.currentUser)),Sp(n,o=>i(o))}const s=yd("auth");return s&&Ep(n,`http://${s}`),n}Ug("Browser");const jg={apiKey:"AIzaSyD90pwiuqR06L0iKU8WaUybW9dOGCTKMWQ",authDomain:"chat-app-7d2ab.firebaseapp.com",projectId:"chat-app-7d2ab",storageBucket:"chat-app-7d2ab.appspot.com",messagingSenderId:"628495416638",appId:"1:628495416638:web:2374864db86ec05fc3806f"};Ra(jg);const uo=Hg(),ac=Jf({history:ff(),routes:[{path:"/login",name:"LoginView",component:Zf},{path:"/register",name:"RegisterView",component:nd},{path:"/",name:"ChatView",component:id,children:[{path:"",name:"Contacts",component:()=>Ii(()=>import("./Contacts-67e15ec7.js"),[]),meta:{requiresAuth:!0}},{path:"",name:"Chat",component:()=>Ii(()=>import("./Chat-0e17247a.js"),[]),meta:{requiresAuth:!0}}]},{path:"/NoAccessView",name:"NoAccessView",component:fd},{path:"/:pathMatch(.*)*",name:"NotFoundView",component:cd}]});ac.beforeEach((t,e,n)=>{if(t.path==="/login"&&e.path==="/login"&&uo.currentUser){n("/");return}if(t.matched.some(r=>r.meta.requiresAuth)&&!uo.currentUser){n("/NoAccessView");return}n()});const Vg=Lu(Wu),Wg=$u();Vg.use(ac).use(Wg).mount("#app");export{Jt as _};
