(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ks(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const oe={},Qt=[],Be=()=>{},pl=()=>!1,gl=/^on[^a-z]/,Ur=t=>gl.test(t),zs=t=>t.startsWith("onUpdate:"),ye=Object.assign,qs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ml=Object.prototype.hasOwnProperty,G=(t,e)=>ml.call(t,e),U=Array.isArray,Zt=t=>Fr(t)==="[object Map]",na=t=>Fr(t)==="[object Set]",j=t=>typeof t=="function",be=t=>typeof t=="string",Gs=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",ra=t=>ue(t)&&j(t.then)&&j(t.catch),sa=Object.prototype.toString,Fr=t=>sa.call(t),_l=t=>Fr(t).slice(8,-1),ia=t=>Fr(t)==="[object Object]",Js=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fr=Ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vl=/-(\w)/g,Ze=Br(t=>t.replace(vl,(e,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,dn=Br(t=>t.replace(yl,"-$1").toLowerCase()),jr=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),es=Br(t=>t?`on${jr(t)}`:""),Mn=(t,e)=>!Object.is(t,e),dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},br=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ys=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Si;const bs=()=>Si||(Si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ys(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=be(r)?Il(r):Ys(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(be(t))return t;if(ue(t))return t}}const bl=/;(?![^(]*\))/g,wl=/:([^]+)/,El=new RegExp("\\/\\*.*?\\*\\/","gs");function Il(t){const e={};return t.replace(El,"").split(bl).forEach(n=>{if(n){const r=n.split(wl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xs(t){let e="";if(be(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=Xs(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tl=Ks(Rl);function oa(t){return!!t||t===""}const Dt=t=>be(t)?t:t==null?"":U(t)||ue(t)&&(t.toString===sa||!j(t.toString))?JSON.stringify(t,aa,2):String(t),aa=(t,e)=>e&&e.__v_isRef?aa(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!U(e)&&!ia(e)?String(e):e;let Ne;class ca{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function la(t){return new ca(t)}function Cl(t,e=Ne){e&&e.active&&e.effects.push(t)}function ua(){return Ne}function Sl(t){Ne&&Ne.cleanups.push(t)}const Qs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},fa=t=>(t.w&Rt)>0,da=t=>(t.n&Rt)>0,Pl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},Al=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];fa(s)&&!da(s)?s.delete(t):e[n++]=s,s.w&=~Rt,s.n&=~Rt}e.length=n}},wr=new WeakMap;let In=0,Rt=1;const ws=30;let Le;const Mt=Symbol(""),Es=Symbol("");class Zs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cl(this,r)}run(){if(!this.active)return this.fn();let e=Le,n=bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Le,Le=this,bt=!0,Rt=1<<++In,In<=ws?Pl(this):Pi(this),this.fn()}finally{In<=ws&&Al(this),Rt=1<<--In,Le=this.parent,bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(Pi(this),this.onStop&&this.onStop(),this.active=!1)}}function Pi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bt=!0;const ha=[];function hn(){ha.push(bt),bt=!1}function pn(){const t=ha.pop();bt=t===void 0?!0:t}function Pe(t,e,n){if(bt&&Le){let r=wr.get(t);r||wr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qs()),pa(s)}}function pa(t,e){let n=!1;In<=ws?da(t)||(t.n|=Rt,n=!fa(t)):n=!t.has(Le),n&&(t.add(Le),Le.deps.push(t))}function it(t,e,n,r,s,i){const o=wr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Js(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),Zt(t)&&a.push(o.get(Es)));break;case"delete":U(t)||(a.push(o.get(Mt)),Zt(t)&&a.push(o.get(Es)));break;case"set":Zt(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&Is(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Is(Qs(c))}}function Is(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&Ai(r);for(const r of n)r.computed||Ai(r)}function Ai(t,e){(t!==Le||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Ol(t,e){var n;return(n=wr.get(t))==null?void 0:n.get(e)}const kl=Ks("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gs)),Nl=ei(),Dl=ei(!1,!0),xl=ei(!0),Oi=$l();function $l(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hn();const r=J(this)[e].apply(this,n);return pn(),r}}),t}function Ml(t){const e=J(this);return Pe(e,"has",t),e.hasOwnProperty(t)}function ei(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Ql:ba:e?ya:va).get(r))return r;const o=U(r);if(!t){if(o&&G(Oi,s))return Reflect.get(Oi,s,i);if(s==="hasOwnProperty")return Ml}const a=Reflect.get(r,s,i);return(Gs(s)?ga.has(s):kl(s))||(t||Pe(r,"get",s),e)?a:ae(a)?o&&Js(s)?a:a.value:ue(a)?t?wa(a):at(a):a}}const Ll=ma(),Ul=ma(!0);function ma(t=!1){return function(n,r,s,i){let o=n[r];if(Ft(o)&&ae(o)&&!ae(s))return!1;if(!t&&(!Er(s)&&!Ft(s)&&(o=J(o),s=J(s)),!U(n)&&ae(o)&&!ae(s)))return o.value=s,!0;const a=U(n)&&Js(r)?Number(r)<n.length:G(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?Mn(s,o)&&it(n,"set",r,s):it(n,"add",r,s)),c}}function Fl(t,e){const n=G(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&it(t,"delete",e,void 0),r}function Bl(t,e){const n=Reflect.has(t,e);return(!Gs(e)||!ga.has(e))&&Pe(t,"has",e),n}function jl(t){return Pe(t,"iterate",U(t)?"length":Mt),Reflect.ownKeys(t)}const _a={get:Nl,set:Ll,deleteProperty:Fl,has:Bl,ownKeys:jl},Hl={get:xl,set(t,e){return!0},deleteProperty(t,e){return!0}},Vl=ye({},_a,{get:Dl,set:Ul}),ti=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function sr(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(e!==i&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=Hr(s),a=r?ti:n?si:Ln;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ir(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(t!==s&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function or(t,e=!1){return t=t.__v_raw,!e&&Pe(J(t),"iterate",Mt),Reflect.get(t,"size",t)}function ki(t){t=J(t);const e=J(this);return Hr(e).has.call(e,t)||(e.add(t),it(e,"add",t,t)),this}function Ni(t,e){e=J(e);const n=J(this),{has:r,get:s}=Hr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Mn(e,o)&&it(n,"set",t,e):it(n,"add",t,e),this}function Di(t){const e=J(this),{has:n,get:r}=Hr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&it(e,"delete",t,void 0),i}function xi(){const t=J(this),e=t.size!==0,n=t.clear();return e&&it(t,"clear",void 0,void 0),n}function ar(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?ti:t?si:Ln;return!t&&Pe(a,"iterate",Mt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function cr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Zt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ti:e?si:Ln;return!e&&Pe(i,"iterate",c?Es:Mt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:this}}function Wl(){const t={get(i){return sr(this,i)},get size(){return or(this)},has:ir,add:ki,set:Ni,delete:Di,clear:xi,forEach:ar(!1,!1)},e={get(i){return sr(this,i,!1,!0)},get size(){return or(this)},has:ir,add:ki,set:Ni,delete:Di,clear:xi,forEach:ar(!1,!0)},n={get(i){return sr(this,i,!0)},get size(){return or(this,!0)},has(i){return ir.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:ar(!0,!1)},r={get(i){return sr(this,i,!0,!0)},get size(){return or(this,!0)},has(i){return ir.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=cr(i,!1,!1),n[i]=cr(i,!0,!1),e[i]=cr(i,!1,!0),r[i]=cr(i,!0,!0)}),[t,n,e,r]}const[Kl,zl,ql,Gl]=Wl();function ni(t,e){const n=e?t?Gl:ql:t?zl:Kl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Jl={get:ni(!1,!1)},Yl={get:ni(!1,!0)},Xl={get:ni(!0,!1)},va=new WeakMap,ya=new WeakMap,ba=new WeakMap,Ql=new WeakMap;function Zl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eu(t){return t.__v_skip||!Object.isExtensible(t)?0:Zl(_l(t))}function at(t){return Ft(t)?t:ri(t,!1,_a,Jl,va)}function tu(t){return ri(t,!1,Vl,Yl,ya)}function wa(t){return ri(t,!0,Hl,Xl,ba)}function ri(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=eu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function st(t){return Ft(t)?st(t.__v_raw):!!(t&&t.__v_isReactive)}function Ft(t){return!!(t&&t.__v_isReadonly)}function Er(t){return!!(t&&t.__v_isShallow)}function Ea(t){return st(t)||Ft(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function on(t){return br(t,"__v_skip",!0),t}const Ln=t=>ue(t)?at(t):t,si=t=>ue(t)?wa(t):t;function Ia(t){bt&&Le&&(t=J(t),pa(t.dep||(t.dep=Qs())))}function Ra(t,e){t=J(t);const n=t.dep;n&&Is(n)}function ae(t){return!!(t&&t.__v_isRef===!0)}function ve(t){return Ta(t,!1)}function nu(t){return Ta(t,!0)}function Ta(t,e){return ae(t)?t:new ru(t,e)}class ru{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:Ln(e)}get value(){return Ia(this),this._value}set value(e){const n=this.__v_isShallow||Er(e)||Ft(e);e=n?e:J(e),Mn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ln(e),Ra(this))}}function z(t){return ae(t)?t.value:t}const su={get:(t,e,n)=>z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ae(s)&&!ae(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ca(t){return st(t)?t:new Proxy(t,su)}function iu(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=au(t,n);return e}class ou{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ol(J(this._object),this._key)}}function au(t,e,n){const r=t[e];return ae(r)?r:new ou(t,e,n)}class cu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zs(e,()=>{this._dirty||(this._dirty=!0,Ra(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return Ia(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lu(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Be):(r=t.get,s=t.set),new cu(r,s,i||!s,n)}function wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Vr(i,e,n)}return s}function je(t,e,n,r){if(j(t)){const i=wt(t,e,n,r);return i&&ra(i)&&i.catch(o=>{Vr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(je(t[i],e,n,r));return s}function Vr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wt(c,null,10,[t,o,a]);return}}uu(t,n,s,r)}function uu(t,e,n,r=!0){console.error(t)}let Un=!1,Rs=!1;const Ie=[];let Ge=0;const en=[];let tt=null,Ot=0;const Sa=Promise.resolve();let ii=null;function Fn(t){const e=ii||Sa;return t?e.then(this?t.bind(this):t):e}function fu(t){let e=Ge+1,n=Ie.length;for(;e<n;){const r=e+n>>>1;Bn(Ie[r])<t?e=r+1:n=r}return e}function oi(t){(!Ie.length||!Ie.includes(t,Un&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?Ie.push(t):Ie.splice(fu(t.id),0,t),Pa())}function Pa(){!Un&&!Rs&&(Rs=!0,ii=Sa.then(Oa))}function du(t){const e=Ie.indexOf(t);e>Ge&&Ie.splice(e,1)}function hu(t){U(t)?en.push(...t):(!tt||!tt.includes(t,t.allowRecurse?Ot+1:Ot))&&en.push(t),Pa()}function $i(t,e=Un?Ge+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function Aa(t){if(en.length){const e=[...new Set(en)];if(en.length=0,tt){tt.push(...e);return}for(tt=e,tt.sort((n,r)=>Bn(n)-Bn(r)),Ot=0;Ot<tt.length;Ot++)tt[Ot]();tt=null,Ot=0}}const Bn=t=>t.id==null?1/0:t.id,pu=(t,e)=>{const n=Bn(t)-Bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Oa(t){Rs=!1,Un=!0,Ie.sort(pu);const e=Be;try{for(Ge=0;Ge<Ie.length;Ge++){const n=Ie[Ge];n&&n.active!==!1&&wt(n,null,14)}}finally{Ge=0,Ie.length=0,Aa(),Un=!1,ii=null,(Ie.length||en.length)&&Oa()}}function gu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||oe;p&&(s=n.map(_=>be(_)?_.trim():_)),d&&(s=n.map(ys))}let a,c=r[a=es(e)]||r[a=es(Ze(e))];!c&&i&&(c=r[a=es(dn(e))]),c&&je(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(l,t,6,s)}}function ka(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=ka(l,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):ye(o,i),ue(t)&&r.set(t,o),o)}function Wr(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,dn(e))||G(t,e))}let De=null,Na=null;function Ir(t){const e=De;return De=t,Na=t&&t.type.__scopeId||null,e}function Rr(t,e=De,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&zi(-1);const i=Ir(e);let o;try{o=t(...s)}finally{Ir(i),r._d&&zi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ts(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:p,setupState:_,ctx:m,inheritAttrs:w}=t;let R,C;const D=Ir(t);try{if(n.shapeFlag&4){const k=s||r;R=qe(u.call(k,k,d,i,_,p,m)),C=c}else{const k=e;R=qe(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),C=e.props?c:mu(c)}}catch(k){An.length=0,Vr(k,t,1),R=we(Bt)}let H=R;if(C&&w!==!1){const k=Object.keys(C),{shapeFlag:q}=H;k.length&&q&7&&(o&&k.some(zs)&&(C=_u(C,o)),H=an(H,C))}return n.dirs&&(H=an(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),R=H,Ir(D),R}const mu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},_u=(t,e)=>{const n={};for(const r in t)(!zs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Wr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Mi(r,o,l):!0:!!o;return!1}function Mi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wr(n,i))return!0}return!1}function yu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bu=t=>t.__isSuspense;function wu(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):hu(t)}const lr={};function Ye(t,e,n){return Da(t,e,n)}function Da(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=oe){var a;const c=ua()===((a=_e)==null?void 0:a.scope)?_e:null;let l,u=!1,d=!1;if(ae(t)?(l=()=>t.value,u=Er(t)):st(t)?(l=()=>t,r=!0):U(t)?(d=!0,u=t.some(k=>st(k)||Er(k)),l=()=>t.map(k=>{if(ae(k))return k.value;if(st(k))return xt(k);if(j(k))return wt(k,c,2)})):j(t)?e?l=()=>wt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),je(t,c,3,[_])}:l=Be,e&&r){const k=l;l=()=>xt(k())}let p,_=k=>{p=D.onStop=()=>{wt(k,c,4)}},m;if(Vn)if(_=Be,e?n&&je(e,c,3,[l(),d?[]:void 0,_]):l(),s==="sync"){const k=pf();m=k.__watcherHandles||(k.__watcherHandles=[])}else return Be;let w=d?new Array(t.length).fill(lr):lr;const R=()=>{if(D.active)if(e){const k=D.run();(r||u||(d?k.some((q,ee)=>Mn(q,w[ee])):Mn(k,w)))&&(p&&p(),je(e,c,3,[k,w===lr?void 0:d&&w[0]===lr?[]:w,_]),w=k)}else D.run()};R.allowRecurse=!!e;let C;s==="sync"?C=R:s==="post"?C=()=>Se(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),C=()=>oi(R));const D=new Zs(l,C);e?n?R():w=D.run():s==="post"?Se(D.run.bind(D),c&&c.suspense):D.run();const H=()=>{D.stop(),c&&c.scope&&qs(c.scope.effects,D)};return m&&m.push(H),H}function Eu(t,e,n){const r=this.proxy,s=be(t)?t.includes(".")?xa(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=_e;cn(this);const a=Da(s,i.bind(r),n);return o?cn(o):Lt(),a}function xa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function xt(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ae(t))xt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)xt(t[n],e);else if(na(t)||Zt(t))t.forEach(n=>{xt(n,e)});else if(ia(t))for(const n in t)xt(t[n],e);return t}function Sn(t,e){const n=De;if(n===null)return t;const r=Gr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=oe]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&xt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function St(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(hn(),je(c,n,8,[t.el,a,t,e]),pn())}}function $a(t,e){return j(t)?(()=>ye({name:t.name},e,{setup:t}))():t}const hr=t=>!!t.type.__asyncLoader,Ma=t=>t.type.__isKeepAlive;function Iu(t,e){La(t,"a",e)}function Ru(t,e){La(t,"da",e)}function La(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ma(s.parent.vnode)&&Tu(r,e,n,s),s=s.parent}}function Tu(t,e,n,r){const s=Kr(e,t,r,!0);Ba(()=>{qs(r[e],s)},n)}function Kr(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;hn(),cn(n);const a=je(e,n,t,o);return Lt(),pn(),a});return r?s.unshift(i):s.push(i),i}}const ct=t=>(e,n=_e)=>(!Vn||t==="sp")&&Kr(t,(...r)=>e(...r),n),Ua=ct("bm"),Cu=ct("m"),Su=ct("bu"),Pu=ct("u"),Fa=ct("bum"),Ba=ct("um"),Au=ct("sp"),Ou=ct("rtg"),ku=ct("rtc");function Nu(t,e=_e){Kr("ec",t,e)}const ja="components";function Tr(t,e){return xu(ja,t,!0,e)||t}const Du=Symbol.for("v-ndc");function xu(t,e,n=!0,r=!1){const s=De||_e;if(s){const i=s.type;if(t===ja){const a=ff(i,!1);if(a&&(a===e||a===Ze(e)||a===jr(Ze(e))))return i}const o=Li(s[t]||i[t],e)||Li(s.appContext[t],e);return!o&&r?i:o}}function Li(t,e){return t&&(t[e]||t[Ze(e)]||t[jr(Ze(e))])}const Ts=t=>t?Za(t)?Gr(t)||t.proxy:Ts(t.parent):null,Pn=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ts(t.parent),$root:t=>Ts(t.root),$emit:t=>t.emit,$options:t=>ai(t),$forceUpdate:t=>t.f||(t.f=()=>oi(t.update)),$nextTick:t=>t.n||(t.n=Fn.bind(t.proxy)),$watch:t=>Eu.bind(t)}),ns=(t,e)=>t!==oe&&!t.__isScriptSetup&&G(t,e),$u={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ns(r,e))return o[e]=1,r[e];if(s!==oe&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==oe&&G(n,e))return o[e]=4,n[e];Cs&&(o[e]=0)}}const u=Pn[e];let d,p;if(u)return e==="$attrs"&&Pe(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==oe&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ns(s,e)?(s[e]=n,!0):r!==oe&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==oe&&G(t,o)||ns(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Pn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ui(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cs=!0;function Mu(t){const e=ai(t),n=t.proxy,r=t.ctx;Cs=!1,e.beforeCreate&&Fi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:_,updated:m,activated:w,deactivated:R,beforeDestroy:C,beforeUnmount:D,destroyed:H,unmounted:k,render:q,renderTracked:ee,renderTriggered:V,errorCaptured:B,serverPrefetch:ce,expose:fe,inheritAttrs:ge,components:Ae,directives:Ce,filters:Oe}=e;if(l&&Lu(l,r,null),o)for(const te in o){const Y=o[te];j(Y)&&(r[te]=Y.bind(n))}if(s){const te=s.call(n,n);ue(te)&&(t.data=at(te))}if(Cs=!0,i)for(const te in i){const Y=i[te],$e=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Be,X=!j(Y)&&j(Y.set)?Y.set.bind(n):Be,me=W({get:$e,set:X});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>me.value,set:le=>me.value=le})}if(a)for(const te in a)Ha(a[te],r,n,te);if(c){const te=j(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Y=>{tn(Y,te[Y])})}u&&Fi(u,t,"c");function he(te,Y){U(Y)?Y.forEach($e=>te($e.bind(n))):Y&&te(Y.bind(n))}if(he(Ua,d),he(Cu,p),he(Su,_),he(Pu,m),he(Iu,w),he(Ru,R),he(Nu,B),he(ku,ee),he(Ou,V),he(Fa,D),he(Ba,k),he(Au,ce),U(fe))if(fe.length){const te=t.exposed||(t.exposed={});fe.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:$e=>n[Y]=$e})})}else t.exposed||(t.exposed={});q&&t.render===Be&&(t.render=q),ge!=null&&(t.inheritAttrs=ge),Ae&&(t.components=Ae),Ce&&(t.directives=Ce)}function Lu(t,e,n=Be){U(t)&&(t=Ss(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=xe(s.from||r,s.default,!0):i=xe(s.from||r):i=xe(s),ae(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Fi(t,e,n){je(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ha(t,e,n,r){const s=r.includes(".")?xa(n,r):()=>n[r];if(be(t)){const i=e[t];j(i)&&Ye(s,i)}else if(j(t))Ye(s,t.bind(n));else if(ue(t))if(U(t))t.forEach(i=>Ha(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Ye(s,i,t)}}function ai(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Cr(c,l,o,!0)),Cr(c,e,o)),ue(e)&&i.set(e,c),c}function Cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cr(t,i,n,!0),s&&s.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Uu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Uu={data:Bi,props:ji,emits:ji,methods:Rn,computed:Rn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Rn,directives:Rn,watch:Bu,provide:Bi,inject:Fu};function Bi(t,e){return e?t?function(){return ye(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Fu(t,e){return Rn(Ss(t),Ss(e))}function Ss(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Rn(t,e){return t?ye(Object.create(null),t,e):e}function ji(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:ye(Object.create(null),Ui(t),Ui(e??{})):e}function Bu(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function Va(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ju=0;function Hu(t,e){return function(r,s=null){j(r)||(r=ye({},r)),s!=null&&!ue(s)&&(s=null);const i=Va(),o=new Set;let a=!1;const c=i.app={_uid:ju++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const p=we(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,d),a=!0,c._container=l,l.__vue_app__=c,Gr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Sr=c;try{return l()}finally{Sr=null}}};return c}}let Sr=null;function tn(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function xe(t,e,n=!1){const r=_e||De;if(r||Sr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Sr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Vu(t,e,n,r=!1){const s={},i={};br(i,qr,1),t.propsDefaults=Object.create(null),Wa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:tu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Wu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Wr(t.emitsOptions,p))continue;const _=e[p];if(c)if(G(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const m=Ze(p);s[m]=Ps(c,a,m,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Wa(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!G(e,d)&&((u=dn(d))===d||!G(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ps(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!G(e,d))&&(delete i[d],l=!0)}l&&it(t,"set","$attrs")}function Wa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fr(c))continue;const l=e[c];let u;s&&G(s,u=Ze(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Wr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||oe;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ps(s,c,d,l[d],t,!G(l,d))}}return o}function Ps(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(cn(s),r=l[n]=c.call(null,e),Lt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dn(n))&&(r=!0))}return r}function Ka(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=d=>{c=!0;const[p,_]=Ka(d,e,!0);ye(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,Qt),Qt;if(U(i))for(let u=0;u<i.length;u++){const d=Ze(i[u]);Hi(d)&&(o[d]=oe)}else if(i)for(const u in i){const d=Ze(u);if(Hi(d)){const p=i[u],_=o[d]=U(p)||j(p)?{type:p}:ye({},p);if(_){const m=Ki(Boolean,_.type),w=Ki(String,_.type);_[0]=m>-1,_[1]=w<0||m<w,(m>-1||G(_,"default"))&&a.push(d)}}}const l=[o,a];return ue(t)&&r.set(t,l),l}function Hi(t){return t[0]!=="$"}function Vi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wi(t,e){return Vi(t)===Vi(e)}function Ki(t,e){return U(e)?e.findIndex(n=>Wi(n,t)):j(e)&&Wi(e,t)?0:-1}const za=t=>t[0]==="_"||t==="$stable",ci=t=>U(t)?t.map(qe):[qe(t)],Ku=(t,e,n)=>{if(e._n)return e;const r=Rr((...s)=>ci(e(...s)),n);return r._c=!1,r},qa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(za(s))continue;const i=t[s];if(j(i))e[s]=Ku(s,i,r);else if(i!=null){const o=ci(i);e[s]=()=>o}}},Ga=(t,e)=>{const n=ci(e);t.slots.default=()=>n},zu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),br(e,"_",n)):qa(e,t.slots={})}else t.slots={},e&&Ga(t,e);br(t.slots,qr,1)},qu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,qa(e,s)),o=e}else e&&(Ga(t,e),o={default:1});if(i)for(const a in s)!za(a)&&!(a in o)&&delete s[a]};function As(t,e,n,r,s=!1){if(U(t)){t.forEach((p,_)=>As(p,e&&(U(e)?e[_]:e),n,r,s));return}if(hr(r)&&!s)return;const i=r.shapeFlag&4?Gr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,G(d,l)&&(d[l]=null)):ae(l)&&(l.value=null)),j(c))wt(c,a,12,[o,u]);else{const p=be(c),_=ae(c);if(p||_){const m=()=>{if(t.f){const w=p?G(d,c)?d[c]:u[c]:c.value;s?U(w)&&qs(w,i):U(w)?w.includes(i)||w.push(i):p?(u[c]=[i],G(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,G(d,c)&&(d[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Se(m,n)):m()}}}const Se=wu;function Gu(t){return Ju(t)}function Ju(t,e){const n=bs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:_=Be,insertStaticContent:m}=t,w=(f,h,g,v=null,b=null,E=null,A=!1,T=null,S=!!h.dynamicChildren)=>{if(f===h)return;f&&!wn(f,h)&&(v=y(f),le(f,b,E,!0),f=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:I,ref:$,shapeFlag:N}=h;switch(I){case zr:R(f,h,g,v);break;case Bt:C(f,h,g,v);break;case rs:f==null&&D(h,g,v,A);break;case ze:Ae(f,h,g,v,b,E,A,T,S);break;default:N&1?q(f,h,g,v,b,E,A,T,S):N&6?Ce(f,h,g,v,b,E,A,T,S):(N&64||N&128)&&I.process(f,h,g,v,b,E,A,T,S,P)}$!=null&&b&&As($,f&&f.ref,E,h||f,!h)},R=(f,h,g,v)=>{if(f==null)r(h.el=a(h.children),g,v);else{const b=h.el=f.el;h.children!==f.children&&l(b,h.children)}},C=(f,h,g,v)=>{f==null?r(h.el=c(h.children||""),g,v):h.el=f.el},D=(f,h,g,v)=>{[f.el,f.anchor]=m(f.children,h,g,v,f.el,f.anchor)},H=({el:f,anchor:h},g,v)=>{let b;for(;f&&f!==h;)b=p(f),r(f,g,v),f=b;r(h,g,v)},k=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},q=(f,h,g,v,b,E,A,T,S)=>{A=A||h.type==="svg",f==null?ee(h,g,v,b,E,A,T,S):ce(f,h,b,E,A,T,S)},ee=(f,h,g,v,b,E,A,T)=>{let S,I;const{type:$,props:N,shapeFlag:M,transition:F,dirs:K}=f;if(S=f.el=o(f.type,E,N&&N.is,N),M&8?u(S,f.children):M&16&&B(f.children,S,null,v,b,E&&$!=="foreignObject",A,T),K&&St(f,null,v,"created"),V(S,f,f.scopeId,A,v),N){for(const re in N)re!=="value"&&!fr(re)&&i(S,re,null,N[re],E,f.children,v,b,Ee);"value"in N&&i(S,"value",null,N.value),(I=N.onVnodeBeforeMount)&&Ke(I,v,f)}K&&St(f,null,v,"beforeMount");const ie=(!b||b&&!b.pendingBranch)&&F&&!F.persisted;ie&&F.beforeEnter(S),r(S,h,g),((I=N&&N.onVnodeMounted)||ie||K)&&Se(()=>{I&&Ke(I,v,f),ie&&F.enter(S),K&&St(f,null,v,"mounted")},b)},V=(f,h,g,v,b)=>{if(g&&_(f,g),v)for(let E=0;E<v.length;E++)_(f,v[E]);if(b){let E=b.subTree;if(h===E){const A=b.vnode;V(f,A,A.scopeId,A.slotScopeIds,b.parent)}}},B=(f,h,g,v,b,E,A,T,S=0)=>{for(let I=S;I<f.length;I++){const $=f[I]=T?ht(f[I]):qe(f[I]);w(null,$,h,g,v,b,E,A,T)}},ce=(f,h,g,v,b,E,A)=>{const T=h.el=f.el;let{patchFlag:S,dynamicChildren:I,dirs:$}=h;S|=f.patchFlag&16;const N=f.props||oe,M=h.props||oe;let F;g&&Pt(g,!1),(F=M.onVnodeBeforeUpdate)&&Ke(F,g,h,f),$&&St(h,f,g,"beforeUpdate"),g&&Pt(g,!0);const K=b&&h.type!=="foreignObject";if(I?fe(f.dynamicChildren,I,T,g,v,K,E):A||Y(f,h,T,null,g,v,K,E,!1),S>0){if(S&16)ge(T,h,N,M,g,v,b);else if(S&2&&N.class!==M.class&&i(T,"class",null,M.class,b),S&4&&i(T,"style",N.style,M.style,b),S&8){const ie=h.dynamicProps;for(let re=0;re<ie.length;re++){const pe=ie[re],Me=N[pe],zt=M[pe];(zt!==Me||pe==="value")&&i(T,pe,Me,zt,b,f.children,g,v,Ee)}}S&1&&f.children!==h.children&&u(T,h.children)}else!A&&I==null&&ge(T,h,N,M,g,v,b);((F=M.onVnodeUpdated)||$)&&Se(()=>{F&&Ke(F,g,h,f),$&&St(h,f,g,"updated")},v)},fe=(f,h,g,v,b,E,A)=>{for(let T=0;T<h.length;T++){const S=f[T],I=h[T],$=S.el&&(S.type===ze||!wn(S,I)||S.shapeFlag&70)?d(S.el):g;w(S,I,$,null,v,b,E,A,!0)}},ge=(f,h,g,v,b,E,A)=>{if(g!==v){if(g!==oe)for(const T in g)!fr(T)&&!(T in v)&&i(f,T,g[T],null,A,h.children,b,E,Ee);for(const T in v){if(fr(T))continue;const S=v[T],I=g[T];S!==I&&T!=="value"&&i(f,T,I,S,A,h.children,b,E,Ee)}"value"in v&&i(f,"value",g.value,v.value)}},Ae=(f,h,g,v,b,E,A,T,S)=>{const I=h.el=f?f.el:a(""),$=h.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:M,slotScopeIds:F}=h;F&&(T=T?T.concat(F):F),f==null?(r(I,g,v),r($,g,v),B(h.children,g,$,b,E,A,T,S)):N>0&&N&64&&M&&f.dynamicChildren?(fe(f.dynamicChildren,M,g,b,E,A,T),(h.key!=null||b&&h===b.subTree)&&Ja(f,h,!0)):Y(f,h,g,$,b,E,A,T,S)},Ce=(f,h,g,v,b,E,A,T,S)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?b.ctx.activate(h,g,v,A,S):Oe(h,g,v,b,E,A,S):de(f,h,S)},Oe=(f,h,g,v,b,E,A)=>{const T=f.component=of(f,v,b);if(Ma(f)&&(T.ctx.renderer=P),af(T),T.asyncDep){if(b&&b.registerDep(T,he),!f.el){const S=T.subTree=we(Bt);C(null,S,h,g)}return}he(T,f,h,g,b,E,A)},de=(f,h,g)=>{const v=h.component=f.component;if(vu(f,h,g))if(v.asyncDep&&!v.asyncResolved){te(v,h,g);return}else v.next=h,du(v.update),v.update();else h.el=f.el,v.vnode=h},he=(f,h,g,v,b,E,A)=>{const T=()=>{if(f.isMounted){let{next:$,bu:N,u:M,parent:F,vnode:K}=f,ie=$,re;Pt(f,!1),$?($.el=K.el,te(f,$,A)):$=K,N&&dr(N),(re=$.props&&$.props.onVnodeBeforeUpdate)&&Ke(re,F,$,K),Pt(f,!0);const pe=ts(f),Me=f.subTree;f.subTree=pe,w(Me,pe,d(Me.el),y(Me),f,b,E),$.el=pe.el,ie===null&&yu(f,pe.el),M&&Se(M,b),(re=$.props&&$.props.onVnodeUpdated)&&Se(()=>Ke(re,F,$,K),b)}else{let $;const{el:N,props:M}=h,{bm:F,m:K,parent:ie}=f,re=hr(h);if(Pt(f,!1),F&&dr(F),!re&&($=M&&M.onVnodeBeforeMount)&&Ke($,ie,h),Pt(f,!0),N&&Q){const pe=()=>{f.subTree=ts(f),Q(N,f.subTree,f,b,null)};re?h.type.__asyncLoader().then(()=>!f.isUnmounted&&pe()):pe()}else{const pe=f.subTree=ts(f);w(null,pe,g,v,f,b,E),h.el=pe.el}if(K&&Se(K,b),!re&&($=M&&M.onVnodeMounted)){const pe=h;Se(()=>Ke($,ie,pe),b)}(h.shapeFlag&256||ie&&hr(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Se(f.a,b),f.isMounted=!0,h=g=v=null}},S=f.effect=new Zs(T,()=>oi(I),f.scope),I=f.update=()=>S.run();I.id=f.uid,Pt(f,!0),I()},te=(f,h,g)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,Wu(f,h.props,v,g),qu(f,h.children,g),hn(),$i(),pn()},Y=(f,h,g,v,b,E,A,T,S=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,N=h.children,{patchFlag:M,shapeFlag:F}=h;if(M>0){if(M&128){X(I,N,g,v,b,E,A,T,S);return}else if(M&256){$e(I,N,g,v,b,E,A,T,S);return}}F&8?($&16&&Ee(I,b,E),N!==I&&u(g,N)):$&16?F&16?X(I,N,g,v,b,E,A,T,S):Ee(I,b,E,!0):($&8&&u(g,""),F&16&&B(N,g,v,b,E,A,T,S))},$e=(f,h,g,v,b,E,A,T,S)=>{f=f||Qt,h=h||Qt;const I=f.length,$=h.length,N=Math.min(I,$);let M;for(M=0;M<N;M++){const F=h[M]=S?ht(h[M]):qe(h[M]);w(f[M],F,g,null,b,E,A,T,S)}I>$?Ee(f,b,E,!0,!1,N):B(h,g,v,b,E,A,T,S,N)},X=(f,h,g,v,b,E,A,T,S)=>{let I=0;const $=h.length;let N=f.length-1,M=$-1;for(;I<=N&&I<=M;){const F=f[I],K=h[I]=S?ht(h[I]):qe(h[I]);if(wn(F,K))w(F,K,g,null,b,E,A,T,S);else break;I++}for(;I<=N&&I<=M;){const F=f[N],K=h[M]=S?ht(h[M]):qe(h[M]);if(wn(F,K))w(F,K,g,null,b,E,A,T,S);else break;N--,M--}if(I>N){if(I<=M){const F=M+1,K=F<$?h[F].el:v;for(;I<=M;)w(null,h[I]=S?ht(h[I]):qe(h[I]),g,K,b,E,A,T,S),I++}}else if(I>M)for(;I<=N;)le(f[I],b,E,!0),I++;else{const F=I,K=I,ie=new Map;for(I=K;I<=M;I++){const ke=h[I]=S?ht(h[I]):qe(h[I]);ke.key!=null&&ie.set(ke.key,I)}let re,pe=0;const Me=M-K+1;let zt=!1,Ri=0;const bn=new Array(Me);for(I=0;I<Me;I++)bn[I]=0;for(I=F;I<=N;I++){const ke=f[I];if(pe>=Me){le(ke,b,E,!0);continue}let We;if(ke.key!=null)We=ie.get(ke.key);else for(re=K;re<=M;re++)if(bn[re-K]===0&&wn(ke,h[re])){We=re;break}We===void 0?le(ke,b,E,!0):(bn[We-K]=I+1,We>=Ri?Ri=We:zt=!0,w(ke,h[We],g,null,b,E,A,T,S),pe++)}const Ti=zt?Yu(bn):Qt;for(re=Ti.length-1,I=Me-1;I>=0;I--){const ke=K+I,We=h[ke],Ci=ke+1<$?h[ke+1].el:v;bn[I]===0?w(null,We,g,Ci,b,E,A,T,S):zt&&(re<0||I!==Ti[re]?me(We,g,Ci,2):re--)}}},me=(f,h,g,v,b=null)=>{const{el:E,type:A,transition:T,children:S,shapeFlag:I}=f;if(I&6){me(f.component.subTree,h,g,v);return}if(I&128){f.suspense.move(h,g,v);return}if(I&64){A.move(f,h,g,P);return}if(A===ze){r(E,h,g);for(let N=0;N<S.length;N++)me(S[N],h,g,v);r(f.anchor,h,g);return}if(A===rs){H(f,h,g);return}if(v!==2&&I&1&&T)if(v===0)T.beforeEnter(E),r(E,h,g),Se(()=>T.enter(E),b);else{const{leave:N,delayLeave:M,afterLeave:F}=T,K=()=>r(E,h,g),ie=()=>{N(E,()=>{K(),F&&F()})};M?M(E,K,ie):ie()}else r(E,h,g)},le=(f,h,g,v=!1,b=!1)=>{const{type:E,props:A,ref:T,children:S,dynamicChildren:I,shapeFlag:$,patchFlag:N,dirs:M}=f;if(T!=null&&As(T,null,g,f,!0),$&256){h.ctx.deactivate(f);return}const F=$&1&&M,K=!hr(f);let ie;if(K&&(ie=A&&A.onVnodeBeforeUnmount)&&Ke(ie,h,f),$&6)rr(f.component,g,v);else{if($&128){f.suspense.unmount(g,v);return}F&&St(f,null,h,"beforeUnmount"),$&64?f.type.remove(f,h,g,b,P,v):I&&(E!==ze||N>0&&N&64)?Ee(I,h,g,!1,!0):(E===ze&&N&384||!b&&$&16)&&Ee(S,h,g),v&&Wt(f)}(K&&(ie=A&&A.onVnodeUnmounted)||F)&&Se(()=>{ie&&Ke(ie,h,f),F&&St(f,null,h,"unmounted")},g)},Wt=f=>{const{type:h,el:g,anchor:v,transition:b}=f;if(h===ze){Kt(g,v);return}if(h===rs){k(f);return}const E=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:T}=b,S=()=>A(g,E);T?T(f.el,E,S):S()}else E()},Kt=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},rr=(f,h,g)=>{const{bum:v,scope:b,update:E,subTree:A,um:T}=f;v&&dr(v),b.stop(),E&&(E.active=!1,le(A,f,h,g)),T&&Se(T,h),Se(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ee=(f,h,g,v=!1,b=!1,E=0)=>{for(let A=E;A<f.length;A++)le(f[A],h,g,v,b)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),O=(f,h,g)=>{f==null?h._vnode&&le(h._vnode,null,null,!0):w(h._vnode||null,f,h,null,null,null,g),$i(),Aa(),h._vnode=f},P={p:w,um:le,m:me,r:Wt,mt:Oe,mc:B,pc:Y,pbc:fe,n:y,o:t};let x,Q;return e&&([x,Q]=e(P)),{render:O,hydrate:x,createApp:Hu(O,x)}}function Pt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ja(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ht(s[i]),a.el=o.el),n||Ja(o,a)),a.type===zr&&(a.el=o.el)}}function Yu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xu=t=>t.__isTeleport,ze=Symbol.for("v-fgt"),zr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),rs=Symbol.for("v-stc"),An=[];let Fe=null;function Ue(t=!1){An.push(Fe=t?null:[])}function Qu(){An.pop(),Fe=An[An.length-1]||null}let jn=1;function zi(t){jn+=t}function Ya(t){return t.dynamicChildren=jn>0?Fe||Qt:null,Qu(),jn>0&&Fe&&Fe.push(t),t}function Je(t,e,n,r,s,i){return Ya(Z(t,e,n,r,s,i,!0))}function Zu(t,e,n,r,s){return Ya(we(t,e,n,r,s,!0))}function Os(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const qr="__vInternal",Xa=({key:t})=>t??null,pr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||ae(t)||j(t)?{i:De,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===ze?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xa(e),ref:e&&pr(e),scopeId:Na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return a?(li(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),jn>0&&!o&&Fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Fe.push(c),c}const we=ef;function ef(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Du)&&(t=Bt),Os(t)){const a=an(t,e,!0);return n&&li(a,n),jn>0&&!i&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(t)]=a:Fe.push(a)),a.patchFlag|=-2,a}if(df(t)&&(t=t.__vccOpts),e){e=tf(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=Xs(a)),ue(c)&&(Ea(c)&&!U(c)&&(c=ye({},c)),e.style=Ys(c))}const o=be(t)?1:bu(t)?128:Xu(t)?64:ue(t)?4:j(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function tf(t){return t?Ea(t)||qr in t?ye({},t):t:null}function an(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?nf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xa(a),ref:e&&e.ref?n&&s?U(s)?s.concat(pr(e)):[s,pr(e)]:pr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Hn(t=" ",e=0){return we(zr,null,t,e)}function $t(t="",e=!1){return e?(Ue(),Zu(Bt,null,t)):we(Bt,null,t)}function qe(t){return t==null||typeof t=="boolean"?we(Bt):U(t)?we(ze,null,t.slice()):typeof t=="object"?ht(t):we(zr,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function li(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),li(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(qr in e)?e._ctx=De:s===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:De},n=32):(e=String(e),r&64?(n=16,e=[Hn(e)]):n=8);t.children=e,t.shapeFlag|=n}function nf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xs([e.class,r.class]));else if(s==="style")e.style=Ys([e.style,r.style]);else if(Ur(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ke(t,e,n,r=null){je(t,e,7,[n,r])}const rf=Va();let sf=0;function of(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||rf,i={uid:sf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ca(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ka(r,s),emitsOptions:ka(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gu.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const Qa=()=>_e||De;let ui,qt,qi="__VUE_INSTANCE_SETTERS__";(qt=bs()[qi])||(qt=bs()[qi]=[]),qt.push(t=>_e=t),ui=t=>{qt.length>1?qt.forEach(e=>e(t)):qt[0](t)};const cn=t=>{ui(t),t.scope.on()},Lt=()=>{_e&&_e.scope.off(),ui(null)};function Za(t){return t.vnode.shapeFlag&4}let Vn=!1;function af(t,e=!1){Vn=e;const{props:n,children:r}=t.vnode,s=Za(t);Vu(t,n,s,e),zu(t,r);const i=s?cf(t,e):void 0;return Vn=!1,i}function cf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=on(new Proxy(t.ctx,$u));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?uf(t):null;cn(t),hn();const i=wt(r,t,0,[t.props,s]);if(pn(),Lt(),ra(i)){if(i.then(Lt,Lt),e)return i.then(o=>{Gi(t,o,e)}).catch(o=>{Vr(o,t,0)});t.asyncDep=i}else Gi(t,i,e)}else ec(t,e)}function Gi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Ca(e)),ec(t,n)}let Ji;function ec(t,e,n){const r=t.type;if(!t.render){if(!e&&Ji&&!r.render){const s=r.template||ai(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ye(ye({isCustomElement:i,delimiters:a},o),c);r.render=Ji(s,l)}}t.render=r.render||Be}cn(t),hn(),Mu(t),pn(),Lt()}function lf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}}))}function uf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return lf(t)},slots:t.slots,emit:t.emit,expose:e}}function Gr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ca(on(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pn)return Pn[n](t)},has(e,n){return n in e||n in Pn}}))}function ff(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function df(t){return j(t)&&"__vccOpts"in t}const W=(t,e)=>lu(t,e,Vn);function tc(t,e,n){const r=arguments.length;return r===2?ue(e)&&!U(e)?Os(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Os(n)&&(n=[n]),we(t,e,n))}const hf=Symbol.for("v-scx"),pf=()=>xe(hf),gf="3.3.2",mf="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Yi=kt&&kt.createElement("template"),_f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?kt.createElementNS(mf,t):kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kt.createTextNode(t),createComment:t=>kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Yi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function yf(t,e,n){const r=t.style,s=be(n);if(n&&!s){if(e&&!be(e))for(const i in e)n[i]==null&&ks(r,i,"");for(const i in n)ks(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Xi=/\s*!important$/;function ks(t,e,n){if(U(n))n.forEach(r=>ks(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bf(t,e);Xi.test(n)?t.setProperty(dn(r),n.replace(Xi,""),"important"):t[r]=n}}const Qi=["Webkit","Moz","ms"],ss={};function bf(t,e){const n=ss[e];if(n)return n;let r=Ze(e);if(r!=="filter"&&r in t)return ss[e]=r;r=jr(r);for(let s=0;s<Qi.length;s++){const i=Qi[s]+r;if(i in t)return ss[e]=i}return e}const Zi="http://www.w3.org/1999/xlink";function wf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zi,e.slice(6,e.length)):t.setAttributeNS(Zi,e,n);else{const i=Tl(e);n==null||i&&!oa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ef(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=oa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Jt(t,e,n,r){t.addEventListener(e,n,r)}function If(t,e,n,r){t.removeEventListener(e,n,r)}function Rf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Tf(e);if(r){const l=i[e]=Pf(r,s);Jt(t,a,l,c)}else o&&(If(t,a,o,c),i[e]=void 0)}}const eo=/(?:Once|Passive|Capture)$/;function Tf(t){let e;if(eo.test(t)){e={};let r;for(;r=t.match(eo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dn(t.slice(2)),e]}let is=0;const Cf=Promise.resolve(),Sf=()=>is||(Cf.then(()=>is=0),is=Date.now());function Pf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Af(r,n.value),e,5,[r])};return n.value=t,n.attached=Sf(),n}function Af(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const to=/^on[a-z]/,Of=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?vf(t,r,s):e==="style"?yf(t,n,r):Ur(e)?zs(e)||Rf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kf(t,e,r,s))?Ef(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wf(t,e,r,s))};function kf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&to.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||to.test(e)&&be(n)?!1:e in t}const no=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>dr(e,n):e};function Nf(t){t.target.composing=!0}function ro(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const On={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=no(s);const i=r||s.props&&s.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ys(a)),t._assign(a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",Nf),Jt(t,"compositionend",ro),Jt(t,"change",ro))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=no(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ys(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Df=["ctrl","shift","alt","meta"],xf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Df.some(n=>t[`${n}Key`]&&!e.includes(n))},nc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=xf[e[s]];if(i&&i(n,e))return}return t(n,...r)},$f=ye({patchProp:Of},_f);let so;function Mf(){return so||(so=Gu($f))}const Lf=(...t)=>{const e=Mf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uf(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uf(t){return be(t)?document.querySelector(t):t}var Ff=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let rc;const Jr=t=>rc=t,sc=Symbol();function Ns(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(kn||(kn={}));function Bf(){const t=la(!0),e=t.run(()=>ve({}));let n=[],r=[];const s=on({install(i){Jr(s),s._a=i,i.provide(sc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Ff?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ic=()=>{};function io(t,e,n,r=ic){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ua()&&Sl(s),s}function Gt(t,...e){t.slice().forEach(n=>{n(...e)})}function Ds(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ns(s)&&Ns(r)&&t.hasOwnProperty(n)&&!ae(r)&&!st(r)?t[n]=Ds(s,r):t[n]=r}return t}const jf=Symbol();function Hf(t){return!Ns(t)||!t.hasOwnProperty(jf)}const{assign:dt}=Object;function Vf(t){return!!(ae(t)&&t.effect)}function Wf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=iu(n.state.value[t]);return dt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=on(W(()=>{Jr(n);const _=n._s.get(t);return o[p].call(_,_)})),d),{}))}return c=oc(t,l,e,n,r,!0),c}function oc(t,e,n={},r,s,i){let o;const a=dt({actions:{}},n),c={deep:!0};let l,u,d=on([]),p=on([]),_;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),ve({});let w;function R(V){let B;l=u=!1,typeof V=="function"?(V(r.state.value[t]),B={type:kn.patchFunction,storeId:t,events:_}):(Ds(r.state.value[t],V),B={type:kn.patchObject,payload:V,storeId:t,events:_});const ce=w=Symbol();Fn().then(()=>{w===ce&&(l=!0)}),u=!0,Gt(d,B,r.state.value[t])}const C=i?function(){const{state:B}=n,ce=B?B():{};this.$patch(fe=>{dt(fe,ce)})}:ic;function D(){o.stop(),d=[],p=[],r._s.delete(t)}function H(V,B){return function(){Jr(r);const ce=Array.from(arguments),fe=[],ge=[];function Ae(de){fe.push(de)}function Ce(de){ge.push(de)}Gt(p,{args:ce,name:V,store:q,after:Ae,onError:Ce});let Oe;try{Oe=B.apply(this&&this.$id===t?this:q,ce)}catch(de){throw Gt(ge,de),de}return Oe instanceof Promise?Oe.then(de=>(Gt(fe,de),de)).catch(de=>(Gt(ge,de),Promise.reject(de))):(Gt(fe,Oe),Oe)}}const k={_p:r,$id:t,$onAction:io.bind(null,p),$patch:R,$reset:C,$subscribe(V,B={}){const ce=io(d,V,B.detached,()=>fe()),fe=o.run(()=>Ye(()=>r.state.value[t],ge=>{(B.flush==="sync"?u:l)&&V({storeId:t,type:kn.direct,events:_},ge)},dt({},c,B)));return ce},$dispose:D},q=at(k);r._s.set(t,q);const ee=r._e.run(()=>(o=la(),o.run(()=>e())));for(const V in ee){const B=ee[V];if(ae(B)&&!Vf(B)||st(B))i||(m&&Hf(B)&&(ae(B)?B.value=m[V]:Ds(B,m[V])),r.state.value[t][V]=B);else if(typeof B=="function"){const ce=H(V,B);ee[V]=ce,a.actions[V]=B}}return dt(q,ee),dt(J(q),ee),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:V=>{R(B=>{dt(B,V)})}}),r._p.forEach(V=>{dt(q,o.run(()=>V({store:q,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(q.$state,m),l=!0,u=!0,q}function Kf(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Qa();return a=a||l&&xe(sc,null),a&&Jr(a),a=rc,a._s.has(r)||(i?oc(r,e,s,a):Wf(r,s,a)),a._s.get(r)}return o.$id=r,o}const gn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},zf={},qf=Z("div",{id:"app"},null,-1);function Gf(t,e){const n=Tr("router-view");return Ue(),Je(ze,null,[qf,we(n)],64)}const Jf=gn(zf,[["render",Gf]]),Yf="modulepreload",Xf=function(t){return"/"+t},oo={},ao=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Xf(i),i in oo)return;oo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Yf,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window<"u";function Qf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function os(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const Nn=()=>{},He=Array.isArray,Zf=/\/$/,ed=t=>t.replace(Zf,"");function as(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function td(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function co(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&ac(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ac(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rd(t[n],e[n]))return!1;return!0}function rd(t,e){return He(t)?lo(t,e):He(e)?lo(e,t):t===e}function lo(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Wn;(function(t){t.pop="pop",t.push="push"})(Wn||(Wn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function id(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ed(t)}const od=/^[^#]+#/;function ad(t,e){return t.replace(od,"#")+e}function cd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ld(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uo(t,e){return(history.state?history.state.position-e:-1)+t}const xs=new Map;function ud(t,e){xs.set(t,e)}function fd(t){const e=xs.get(t);return xs.delete(t),e}let dd=()=>location.protocol+"//"+location.host;function cc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),co(c,"")}return co(n,t)+r+s}function hd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=cc(t,location),m=n.value,w=e.value;let R=0;if(p){if(n.value=_,e.value=p,o&&o===m){o=null;return}R=w?p.position-w.position:0}else r(_);s.forEach(C=>{C(n.value,m,{delta:R,type:Wn.pop,direction:R?R>0?Dn.forward:Dn.back:Dn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const m=s.indexOf(p);m>-1&&s.splice(m,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:Yr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function fo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Yr():null}}function pd(t){const{history:e,location:n}=window,r={value:cc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:dd()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=ne({},e.state,fo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ne({},s.value,e.state,{forward:c,scroll:Yr()});i(u.current,u,!0);const d=ne({},fo(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function gd(t){t=id(t);const e=pd(t),n=hd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:ad.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function md(t){return typeof t=="string"||t&&typeof t=="object"}function lc(t){return typeof t=="string"||typeof t=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uc=Symbol("");var ho;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ho||(ho={}));function un(t,e){return ne(new Error,{type:t,[uc]:!0},e)}function et(t,e){return t instanceof Error&&uc in t&&(e==null||!!(t.type&e))}const po="[^/]+?",_d={sensitive:!1,strict:!1,start:!0,end:!0},vd=/[.+*?^${}()[\]/\\]/g;function yd(t,e){const n=ne({},_d,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let _=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(vd,"\\$&"),_+=40;else if(p.type===1){const{value:m,repeatable:w,optional:R,regexp:C}=p;i.push({name:m,repeatable:w,optional:R});const D=C||po;if(D!==po){_+=10;try{new RegExp(`(${D})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+k.message)}}let H=w?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(H=R&&l.length<2?`(?:/${H})`:"/"+H),R&&(H+="?"),s+=H,_+=20,R&&(_+=-8),w&&(_+=-20),D===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",m=i[p-1];d[m.name]=_&&m.repeatable?_.split("/"):_}return d}function c(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:R}=_,C=m in l?l[m]:"";if(He(C)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=He(C)?C.join("/"):C;if(!D)if(R)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function bd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=bd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(go(r))return 1;if(go(s))return-1}return s.length-r.length}function go(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ed={type:0,value:""},Id=/[a-zA-Z0-9_]/;function Rd(t){if(!t)return[[]];if(t==="/")return[[Ed]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Id.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Td(t,e,n){const r=yd(Rd(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Cd(t,e){const n=[],r=new Map;e=vo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,p){const _=!p,m=Sd(u);m.aliasOf=p&&p.record;const w=vo(e,u),R=[m];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of H)R.push(ne({},m,{components:p?p.record.components:m.components,path:k,aliasOf:p?p.record:m}))}let C,D;for(const H of R){const{path:k}=H;if(d&&k[0]!=="/"){const q=d.record.path,ee=q[q.length-1]==="/"?"":"/";H.path=d.record.path+(k&&ee+k)}if(C=Td(H,d,w),p?p.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),_&&u.name&&!_o(C)&&o(u.name)),m.children){const q=m.children;for(let ee=0;ee<q.length;ee++)i(q[ee],C,p&&p.children[ee])}p=p||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return D?()=>{o(D)}:Nn}function o(u){if(lc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&wd(u,n[d])>=0&&(u.record.path!==n[d].record.path||!fc(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!_o(u)&&r.set(u.record.name,u)}function l(u,d){let p,_={},m,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw un(1,{location:u});w=p.record.name,_=ne(mo(d.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&mo(u.params,p.keys.map(D=>D.name))),m=p.stringify(_)}else if("path"in u)m=u.path,p=n.find(D=>D.re.test(m)),p&&(_=p.parse(m),w=p.record.name);else{if(p=d.name?r.get(d.name):n.find(D=>D.re.test(d.path)),!p)throw un(1,{location:u,currentLocation:d});w=p.record.name,_=ne({},d.params,u.params),m=p.stringify(_)}const R=[];let C=p;for(;C;)R.unshift(C.record),C=C.parent;return{name:w,path:m,params:_,matched:R,meta:Ad(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function mo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Pd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Pd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function _o(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ad(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function vo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fc(t,e){return e.children.some(n=>n===t||fc(t,n))}const dc=/#/g,Od=/&/g,kd=/\//g,Nd=/=/g,Dd=/\?/g,hc=/\+/g,xd=/%5B/g,$d=/%5D/g,pc=/%5E/g,Md=/%60/g,gc=/%7B/g,Ld=/%7C/g,mc=/%7D/g,Ud=/%20/g;function fi(t){return encodeURI(""+t).replace(Ld,"|").replace(xd,"[").replace($d,"]")}function Fd(t){return fi(t).replace(gc,"{").replace(mc,"}").replace(pc,"^")}function $s(t){return fi(t).replace(hc,"%2B").replace(Ud,"+").replace(dc,"%23").replace(Od,"%26").replace(Md,"`").replace(gc,"{").replace(mc,"}").replace(pc,"^")}function Bd(t){return $s(t).replace(Nd,"%3D")}function jd(t){return fi(t).replace(dc,"%23").replace(Dd,"%3F")}function Hd(t){return t==null?"":jd(t).replace(kd,"%2F")}function Pr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Vd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hc," "),o=i.indexOf("="),a=Pr(o<0?i:i.slice(0,o)),c=o<0?null:Pr(i.slice(o+1));if(a in e){let l=e[a];He(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yo(t){let e="";for(let n in t){const r=t[n];if(n=Bd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&$s(i)):[r&&$s(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Wd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Kd=Symbol(""),bo=Symbol(""),di=Symbol(""),_c=Symbol(""),Ms=Symbol("");function En(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(un(4,{from:n,to:e})):d instanceof Error?a(d):md(d)?a(un(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function cs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(zd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(pt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Qf(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&pt(p,n,r,i,o)()}))}}return s}function zd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wo(t){const e=xe(di),n=xe(_c),r=W(()=>e.resolve(z(t.to))),s=W(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(ln.bind(null,u));if(p>-1)return p;const _=Eo(c[l-2]);return l>1&&Eo(u)===_&&d[d.length-1].path!==_?d.findIndex(ln.bind(null,c[l-2])):p}),i=W(()=>s.value>-1&&Yd(n.params,r.value.params)),o=W(()=>s.value>-1&&s.value===n.matched.length-1&&ac(n.params,r.value.params));function a(c={}){return Jd(c)?e[z(t.replace)?"replace":"push"](z(t.to)).catch(Nn):Promise.resolve()}return{route:r,href:W(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const qd=$a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wo,setup(t,{slots:e}){const n=at(wo(t)),{options:r}=xe(di),s=W(()=>({[Io(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Io(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Gd=qd;function Jd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Eo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Io=(t,e,n)=>t??e??n,Xd=$a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xe(Ms),s=W(()=>t.route||r.value),i=xe(bo,0),o=W(()=>{let l=z(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=W(()=>s.value.matched[o.value]);tn(bo,W(()=>o.value+1)),tn(Kd,a),tn(Ms,s);const c=ve();return Ye(()=>[c.value,a.value,t.name],([l,u,d],[p,_,m])=>{u&&(u.instances[d]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!ln(u,_)||!p)&&(u.enterCallbacks[d]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,p=d&&d.components[u];if(!p)return Ro(n.default,{Component:p,route:l});const _=d.props[u],m=_?_===!0?l.params:typeof _=="function"?_(l):_:null,R=tc(p,ne({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ro(n.default,{Component:R,route:l})||R}}});function Ro(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qd=Xd;function Zd(t){const e=Cd(t.routes,t),n=t.parseQuery||Vd,r=t.stringifyQuery||yo,s=t.history,i=En(),o=En(),a=En(),c=nu(ut);let l=ut;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=os.bind(null,y=>""+y),d=os.bind(null,Hd),p=os.bind(null,Pr);function _(y,O){let P,x;return lc(y)?(P=e.getRecordMatcher(y),x=O):x=y,e.addRoute(x,P)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function w(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function C(y,O){if(O=ne({},O||c.value),typeof y=="string"){const g=as(n,y,O.path),v=e.resolve({path:g.path},O),b=s.createHref(g.fullPath);return ne(g,v,{params:p(v.params),hash:Pr(g.hash),redirectedFrom:void 0,href:b})}let P;if("path"in y)P=ne({},y,{path:as(n,y.path,O.path).path});else{const g=ne({},y.params);for(const v in g)g[v]==null&&delete g[v];P=ne({},y,{params:d(g)}),O.params=d(O.params)}const x=e.resolve(P,O),Q=y.hash||"";x.params=u(p(x.params));const f=td(r,ne({},y,{hash:Fd(Q),path:x.path})),h=s.createHref(f);return ne({fullPath:f,hash:Q,query:r===yo?Wd(y.query):y.query||{}},x,{redirectedFrom:void 0,href:h})}function D(y){return typeof y=="string"?as(n,y,c.value.path):ne({},y)}function H(y,O){if(l!==y)return un(8,{from:O,to:y})}function k(y){return V(y)}function q(y){return k(ne(D(y),{replace:!0}))}function ee(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:P}=O;let x=typeof P=="function"?P(y):P;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=D(x):{path:x},x.params={}),ne({query:y.query,hash:y.hash,params:"path"in x?{}:y.params},x)}}function V(y,O){const P=l=C(y),x=c.value,Q=y.state,f=y.force,h=y.replace===!0,g=ee(P);if(g)return V(ne(D(g),{state:typeof g=="object"?ne({},Q,g.state):Q,force:f,replace:h}),O||P);const v=P;v.redirectedFrom=O;let b;return!f&&nd(r,x,P)&&(b=un(16,{to:v,from:x}),me(x,x,!0,!1)),(b?Promise.resolve(b):fe(v,x)).catch(E=>et(E)?et(E,2)?E:X(E):Y(E,v,x)).then(E=>{if(E){if(et(E,2))return V(ne({replace:h},D(E.to),{state:typeof E.to=="object"?ne({},Q,E.to.state):Q,force:f}),O||v)}else E=Ae(v,x,!0,h,Q);return ge(v,x,E),E})}function B(y,O){const P=H(y,O);return P?Promise.reject(P):Promise.resolve()}function ce(y){const O=Kt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function fe(y,O){let P;const[x,Q,f]=eh(y,O);P=cs(x.reverse(),"beforeRouteLeave",y,O);for(const g of x)g.leaveGuards.forEach(v=>{P.push(pt(v,y,O))});const h=B.bind(null,y,O);return P.push(h),Ee(P).then(()=>{P=[];for(const g of i.list())P.push(pt(g,y,O));return P.push(h),Ee(P)}).then(()=>{P=cs(Q,"beforeRouteUpdate",y,O);for(const g of Q)g.updateGuards.forEach(v=>{P.push(pt(v,y,O))});return P.push(h),Ee(P)}).then(()=>{P=[];for(const g of y.matched)if(g.beforeEnter&&!O.matched.includes(g))if(He(g.beforeEnter))for(const v of g.beforeEnter)P.push(pt(v,y,O));else P.push(pt(g.beforeEnter,y,O));return P.push(h),Ee(P)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),P=cs(f,"beforeRouteEnter",y,O),P.push(h),Ee(P))).then(()=>{P=[];for(const g of o.list())P.push(pt(g,y,O));return P.push(h),Ee(P)}).catch(g=>et(g,8)?g:Promise.reject(g))}function ge(y,O,P){for(const x of a.list())ce(()=>x(y,O,P))}function Ae(y,O,P,x,Q){const f=H(y,O);if(f)return f;const h=O===ut,g=Yt?history.state:{};P&&(x||h?s.replace(y.fullPath,ne({scroll:h&&g&&g.scroll},Q)):s.push(y.fullPath,Q)),c.value=y,me(y,O,P,h),X()}let Ce;function Oe(){Ce||(Ce=s.listen((y,O,P)=>{if(!rr.listening)return;const x=C(y),Q=ee(x);if(Q){V(ne(Q,{replace:!0}),x).catch(Nn);return}l=x;const f=c.value;Yt&&ud(uo(f.fullPath,P.delta),Yr()),fe(x,f).catch(h=>et(h,12)?h:et(h,2)?(V(h.to,x).then(g=>{et(g,20)&&!P.delta&&P.type===Wn.pop&&s.go(-1,!1)}).catch(Nn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),Y(h,x,f))).then(h=>{h=h||Ae(x,f,!1),h&&(P.delta&&!et(h,8)?s.go(-P.delta,!1):P.type===Wn.pop&&et(h,20)&&s.go(-1,!1)),ge(x,f,h)}).catch(Nn)}))}let de=En(),he=En(),te;function Y(y,O,P){X(y);const x=he.list();return x.length?x.forEach(Q=>Q(y,O,P)):console.error(y),Promise.reject(y)}function $e(){return te&&c.value!==ut?Promise.resolve():new Promise((y,O)=>{de.add([y,O])})}function X(y){return te||(te=!y,Oe(),de.list().forEach(([O,P])=>y?P(y):O()),de.reset()),y}function me(y,O,P,x){const{scrollBehavior:Q}=t;if(!Yt||!Q)return Promise.resolve();const f=!P&&fd(uo(y.fullPath,0))||(x||!P)&&history.state&&history.state.scroll||null;return Fn().then(()=>Q(y,O,f)).then(h=>h&&ld(h)).catch(h=>Y(h,y,O))}const le=y=>s.go(y);let Wt;const Kt=new Set,rr={currentRoute:c,listening:!0,addRoute:_,removeRoute:m,hasRoute:R,getRoutes:w,resolve:C,options:t,push:k,replace:q,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:$e,install(y){const O=this;y.component("RouterLink",Gd),y.component("RouterView",Qd),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>z(c)}),Yt&&!Wt&&c.value===ut&&(Wt=!0,k(s.location).catch(Q=>{}));const P={};for(const Q in ut)P[Q]=W(()=>c.value[Q]);y.provide(di,O),y.provide(_c,at(P)),y.provide(Ms,c);const x=y.unmount;Kt.add(y),y.unmount=function(){Kt.delete(y),Kt.size<1&&(l=ut,Ce&&Ce(),Ce=null,c.value=ut,Wt=!1,te=!1),x()}}};function Ee(y){return y.reduce((O,P)=>O.then(()=>ce(P)),Promise.resolve())}return rr}function eh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ln(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ln(l,c))||s.push(c))}return[n,r,s]}/**
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
 */const vc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},th=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[d],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):th(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new nh;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),d!==64){const m=l<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rh=function(t){const e=vc(t);return yc.encodeByteArray(e,!0)},bc=function(t){return rh(t).replace(/\./g,"")},wc=function(t){try{return yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ih=()=>sh().__FIREBASE_DEFAULTS__,oh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ah=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wc(t[1]);return e&&JSON.parse(e)},hi=()=>{try{return ih()||oh()||ah()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ch=t=>{var e,n;return(n=(e=hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ec=()=>{var t;return(t=hi())===null||t===void 0?void 0:t.config},Ic=t=>{var e;return(e=hi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function fh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hh(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ph(){try{return typeof indexedDB=="object"}catch{return!1}}function gh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const mh="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mh,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_h(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,r)}}function _h(t,e){return t.replace(vh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vh=/\{\$([^}]+)}/g;function yh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(To(i)&&To(o)){if(!Ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function To(t){return t!==null&&typeof t=="object"}/**
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
 */function Xn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bh(t,e){const n=new wh(t,e);return n.subscribe.bind(n)}class wh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Eh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ls),s.error===void 0&&(s.error=ls),s.complete===void 0&&(s.complete=ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ls(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Ih{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Th(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rh(t){return t===At?void 0:t}function Th(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ch{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ih(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Sh={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ph=se.INFO,Ah={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Oh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ah[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=Ph,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const kh=(t,e)=>e.some(n=>t instanceof n);let Co,So;function Nh(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dh(){return So||(So=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tc=new WeakMap,Ls=new WeakMap,Cc=new WeakMap,us=new WeakMap,pi=new WeakMap;function xh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tc.set(n,t)}).catch(()=>{}),pi.set(e,t),e}function $h(t){if(Ls.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ls.set(t,e)}let Us={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ls.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mh(t){Us=t(Us)}function Lh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fs(this),e,...n);return Cc.set(r,e.sort?e.sort():[e]),Et(r)}:Dh().includes(t)?function(...e){return t.apply(fs(this),e),Et(Tc.get(this))}:function(...e){return Et(t.apply(fs(this),e))}}function Uh(t){return typeof t=="function"?Lh(t):(t instanceof IDBTransaction&&$h(t),kh(t,Nh())?new Proxy(t,Us):t)}function Et(t){if(t instanceof IDBRequest)return xh(t);if(us.has(t))return us.get(t);const e=Uh(t);return e!==t&&(us.set(t,e),pi.set(e,t)),e}const fs=t=>pi.get(t);function Fh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Et(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Bh=["get","getKey","getAll","getAllKeys","count"],jh=["put","add","delete","clear"],ds=new Map;function Po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Bh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ds.set(e,i),i}Mh(t=>({...t,get:(e,n,r)=>Po(e,n)||t.get(e,n,r),has:(e,n)=>!!Po(e,n)||t.has(e,n)}));/**
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
 */class Hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fs="@firebase/app",Ao="0.9.10";/**
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
 */const jt=new Rc("@firebase/app"),Wh="@firebase/app-compat",Kh="@firebase/analytics-compat",zh="@firebase/analytics",qh="@firebase/app-check-compat",Gh="@firebase/app-check",Jh="@firebase/auth",Yh="@firebase/auth-compat",Xh="@firebase/database",Qh="@firebase/database-compat",Zh="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",rp="@firebase/messaging",sp="@firebase/messaging-compat",ip="@firebase/performance",op="@firebase/performance-compat",ap="@firebase/remote-config",cp="@firebase/remote-config-compat",lp="@firebase/storage",up="@firebase/storage-compat",fp="@firebase/firestore",dp="@firebase/firestore-compat",hp="firebase",pp="9.22.0";/**
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
 */const Bs="[DEFAULT]",gp={[Fs]:"fire-core",[Wh]:"fire-core-compat",[zh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Gh]:"fire-app-check",[qh]:"fire-app-check-compat",[Jh]:"fire-auth",[Yh]:"fire-auth-compat",[Xh]:"fire-rtdb",[Qh]:"fire-rtdb-compat",[Zh]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[rp]:"fire-fcm",[sp]:"fire-fcm-compat",[ip]:"fire-perf",[op]:"fire-perf-compat",[ap]:"fire-rc",[cp]:"fire-rc-compat",[lp]:"fire-gcs",[up]:"fire-gcs-compat",[fp]:"fire-fst",[dp]:"fire-fst-compat","fire-js":"fire-js",[hp]:"fire-js-all"};/**
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
 */const Or=new Map,js=new Map;function mp(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(js.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;js.set(e,t);for(const n of Or.values())mp(n,t);return!0}function Sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _p={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Yn("app","Firebase",_p);/**
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
 */class vp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=pp;function Pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=Ec()),!n)throw It.create("no-options");const i=Or.get(s);if(i){if(Ar(n,i.options)&&Ar(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new Ch(s);for(const c of js.values())o.addComponent(c);const a=new vp(n,r,o);return Or.set(s,a),a}function yp(t=Bs){const e=Or.get(t);if(!e&&t===Bs&&Ec())return Pc();if(!e)throw It.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=gp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}Kn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",wp=1,zn="firebase-heartbeat-store";let hs=null;function Ac(){return hs||(hs=Fh(bp,wp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zn)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),hs}async function Ep(t){try{return await(await Ac()).transaction(zn).objectStore(zn).get(Oc(t))}catch(e){if(e instanceof Tt)jt.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function Oo(t,e){try{const r=(await Ac()).transaction(zn,"readwrite");await r.objectStore(zn).put(e,Oc(t)),await r.done}catch(n){if(n instanceof Tt)jt.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function Oc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ip=1024,Rp=30*24*60*60*1e3;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ko(),{heartbeatsToSend:n,unsentEntries:r}=Cp(this._heartbeatsCache.heartbeats),s=bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ko(){return new Date().toISOString().substring(0,10)}function Cp(t,e=Ip){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),No(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),No(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?gh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ep(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function No(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Pp(t){Kn(new fn("platform-logger",e=>new Hh(e),"PRIVATE")),Kn(new fn("heartbeat",e=>new Tp(e),"PRIVATE")),nn(Fs,Ao,t),nn(Fs,Ao,"esm2017"),nn("fire-js","")}Pp("");var Ap="firebase",Op="9.22.0";/**
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
 */nn(Ap,Op,"app");function gi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kp=kc,Nc=new Yn("auth","Firebase",kc());/**
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
 */const kr=new Rc("@firebase/auth");function Np(t,...e){kr.logLevel<=se.WARN&&kr.warn(`Auth (${Qn}): ${t}`,...e)}function gr(t,...e){kr.logLevel<=se.ERROR&&kr.error(`Auth (${Qn}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw mi(t,...e)}function Xe(t,...e){return mi(t,...e)}function Dp(t,e,n){const r=Object.assign(Object.assign({},kp()),{[e]:n});return new Yn("auth","Firebase",r).create(e,{appName:t.name})}function mi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nc.create(t,...e)}function L(t,e,...n){if(!t)throw mi(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function ot(t,e){t||nt(e)}/**
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
 */function Hs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xp(){return Do()==="http:"||Do()==="https:"}function Do(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $p(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xp()||fh()||"connection"in navigator)?navigator.onLine:!0}function Mp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=uh()||dh()}get(){return $p()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _i(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Dc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Up=new Zn(3e4,6e4);function mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,r,s={}){return xc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Xn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Dc.fetch()($c(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lp),e);try{const s=new Fp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ur(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ur(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ur(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dp(t,u,l);Ve(t,u)}}catch(s){if(s instanceof Tt)throw s;Ve(t,"network-request-failed",{message:String(s)})}}async function er(t,e,n,r,s={}){const i=await _n(t,e,n,r,s);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $c(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_i(t.config,s):`${t.config.apiScheme}://${s}`}class Fp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),Up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ur(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Bp(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function jp(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hp(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),s=vi(r);L(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xn(ps(s.auth_time)),issuedAtTime:xn(ps(s.iat)),expirationTime:xn(ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ps(t){return Number(t)*1e3}function vi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=wc(n);return s?JSON.parse(s):(gr("Failed to decode base64 JWT payload"),null)}catch(s){return gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vp(t){const e=vi(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&Wp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qn(t,jp(n,{idToken:r}));L(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gp(i.providerUserInfo):[],a=qp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function zp(t){const e=Ct(t);await Nr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gp(t){return t.map(e=>{var{providerId:n}=e,r=gi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Jp(t,e){const n=await xc(t,{},async()=>{const r=Xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$c(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gn;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function ft(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qn(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hp(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qn(this,Bp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:k,isAnonymous:q,providerData:ee,stsTokenManager:V}=n;L(H&&V,e,"internal-error");const B=Gn.fromJSON(this.name,V);L(typeof H=="string",e,"internal-error"),ft(d,e.name),ft(p,e.name),L(typeof k=="boolean",e,"internal-error"),L(typeof q=="boolean",e,"internal-error"),ft(_,e.name),ft(m,e.name),ft(w,e.name),ft(R,e.name),ft(C,e.name),ft(D,e.name);const ce=new Ut({uid:H,auth:e,email:p,emailVerified:k,displayName:d,isAnonymous:q,photoURL:m,phoneNumber:_,tenantId:w,stsTokenManager:B,createdAt:C,lastLoginAt:D});return ee&&Array.isArray(ee)&&(ce.providerData=ee.map(fe=>Object.assign({},fe))),R&&(ce._redirectEventId=R),ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gn;s.updateFromServerResponse(n);const i=new Ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nr(i),i}}/**
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
 */const xo=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=xo.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xo.set(t,e),e)}/**
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
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lc.type="NONE";const $o=Lc;/**
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
 */function mr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(rt($o),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt($o);const o=mr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ut._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new rn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new rn(i,e,r))}}/**
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
 */function Mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hc(e))return"Blackberry";if(Vc(e))return"Webos";if(yi(e))return"Safari";if((e.includes("chrome/")||Fc(e))&&!e.includes("edge/"))return"Chrome";if(jc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uc(t=Re()){return/firefox\//i.test(t)}function yi(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fc(t=Re()){return/crios\//i.test(t)}function Bc(t=Re()){return/iemobile/i.test(t)}function jc(t=Re()){return/android/i.test(t)}function Hc(t=Re()){return/blackberry/i.test(t)}function Vc(t=Re()){return/webos/i.test(t)}function Xr(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yp(t=Re()){var e;return Xr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xp(){return hh()&&document.documentMode===10}function Wc(t=Re()){return Xr(t)||jc(t)||Vc(t)||Hc(t)||/windows phone/i.test(t)||Bc(t)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kc(t,e=[]){let n;switch(t){case"Browser":n=Mo(Re());break;case"Worker":n=`${Mo(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${r}`}async function zc(t,e){return _n(t,"GET","/v2/recaptchaConfig",mn(t,e))}function Lo(t){return t!==void 0&&t.enterprise!==void 0}class qc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Zp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zp().appendChild(r)})}function eg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tg="https://www.google.com/recaptcha/enterprise.js?render=",ng="recaptcha-enterprise",rg="NO_RECAPTCHA";class Jc{constructor(e){this.type=ng,this.auth=vn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new qc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Lo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(rg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Lo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gc(tg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dr(t,e,n,r=!1){const s=new Jc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ig{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uo(this),this.idTokenSubscription=new Uo(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}async initializeRecaptchaConfig(){const e=await zc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new qc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Jc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Np(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vn(t){return Ct(t)}class Uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=bh(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function og(t,e){const n=Sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ar(i,e??{}))return s;Ve(s,"already-initialized")}return n.initialize({options:e})}function ag(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cg(t,e,n){const r=vn(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Yc(e),{host:o,port:a}=lg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ug()}function Yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lg(t){const e=Yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fo(o)}}}function Fo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ug(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function fg(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gs(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",mn(t,e))}/**
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
 */async function dg(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}async function hg(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",mn(t,e))}/**
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
 */class Jn extends bi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Jn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Dr(e,r,"signInWithPassword");return gs(e,s)}else return gs(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Dr(e,r,"signInWithPassword");return gs(e,i)}else return Promise.reject(s)});case"emailLink":return dg(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function sn(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",mn(t,e))}/**
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
 */const pg="http://localhost";class Ht extends bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xn(n)}return e}}/**
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
 */function gg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mg(t){const e=Tn(Cn(t)).link,n=e?Tn(Cn(e)).deep_link_id:null,r=Tn(Cn(t)).deep_link_id;return(r?Tn(Cn(r)).link:null)||r||n||e||t}class wi{constructor(e){var n,r,s,i,o,a;const c=Tn(Cn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=gg((s=c.mode)!==null&&s!==void 0?s:null);L(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mg(e);try{return new wi(n)}catch{return null}}}/**
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
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,n){return Jn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wi.parseLink(n);return L(r,"argument-error"),Jn._fromEmailAndCode(e,r.code,r.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tr extends Xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends tr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class _t extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
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
 */class vt extends tr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
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
 */class yt extends tr{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function ms(t,e){return er(t,"POST","/v1/accounts:signUp",mn(t,e))}/**
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
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ut._fromIdTokenResponse(e,r,s),o=Bo(r);return new Vt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bo(r);return new Vt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xr extends Tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xr(e,n,r,s)}}function Qc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(t,i,e,r):i})}async function _g(t,e,n=!1){const r=await qn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vt._forOperation(t,"link",r)}/**
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
 */async function vg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await qn(t,Qc(r,s,e,t),n);L(i.idToken,r,"internal-error");const o=vi(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Vt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),i}}/**
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
 */async function Zc(t,e,n=!1){const r="signIn",s=await Qc(t,r,e),i=await Vt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yg(t,e){return Zc(vn(t),e)}async function bg(t,e,n){var r;const s=vn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Dr(s,i,"signUpPassword");o=ms(s,l)}else o=ms(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Dr(s,i,"signUpPassword");return ms(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Vt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function wg(t,e,n){return yg(Ct(t),yn.credential(e,n))}function Eg(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function Ig(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function Rg(t){return Ct(t).signOut()}const $r="__sak";/**
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
 */class el{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Tg(){const t=Re();return yi(t)||Xr(t)}const Cg=1e3,Sg=10;class tl extends el{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tg()&&Qp(),this.fallbackToPolling=Wc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tl.type="LOCAL";const Pg=tl;/**
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
 */class nl extends el{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nl.type="SESSION";const rl=nl;/**
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
 */function Ag(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ag(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
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
 */function Ei(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Og{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ei("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function kg(t){Qe().location.href=t}/**
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
 */function sl(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function Ng(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xg(){return sl()?self:null}/**
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
 */const il="firebaseLocalStorageDb",$g=1,Mr="firebaseLocalStorage",ol="fbase_key";class nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zr(t,e){return t.transaction([Mr],e?"readwrite":"readonly").objectStore(Mr)}function Mg(){const t=indexedDB.deleteDatabase(il);return new nr(t).toPromise()}function Vs(){const t=indexedDB.open(il,$g);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mr,{keyPath:ol})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mr)?e(r):(r.close(),await Mg(),e(await Vs()))})})}async function jo(t,e,n){const r=Zr(t,!0).put({[ol]:e,value:n});return new nr(r).toPromise()}async function Lg(t,e){const n=Zr(t,!1).get(e),r=await new nr(n).toPromise();return r===void 0?null:r.value}function Ho(t,e){const n=Zr(t,!0).delete(e);return new nr(n).toPromise()}const Ug=800,Fg=3;class al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(xg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ng(),!this.activeServiceWorker)return;this.sender=new Og(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vs();return await jo(e,$r,"1"),await Ho(e,$r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ho(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zr(s,!1).getAll();return new nr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}al.type="LOCAL";const Bg=al;new Zn(3e4,6e4);/**
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
 */function jg(t,e){return e?rt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ii extends bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hg(t){return Zc(t.auth,new Ii(t),t.bypassAuthState)}function Vg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),vg(n,new Ii(t),t.bypassAuthState)}async function Wg(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),_g(n,new Ii(t),t.bypassAuthState)}/**
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
 */class cl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hg;case"linkViaPopup":case"linkViaRedirect":return Wg;case"reauthViaPopup":case"reauthViaRedirect":return Vg;default:Ve(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kg=new Zn(2e3,1e4);class Xt extends cl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kg.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const zg="pendingRedirect",_r=new Map;class qg extends cl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const r=await Gg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gg(t,e){const n=Xg(e),r=Yg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Jg(t,e){_r.set(t._key(),e)}function Yg(t){return rt(t._redirectPersistence)}function Xg(t){return mr(zg,t.config.apiKey,t.name)}async function Qg(t,e,n=!1){const r=vn(t),s=jg(r,e),o=await new qg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zg=10*60*1e3;class em{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ll(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vo(e))}saveEventToCache(e){this.cachedEventUids.add(Vo(e)),this.lastProcessedEventTime=Date.now()}}function Vo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ll({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ll(t);default:return!1}}/**
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
 */async function nm(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
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
 */const rm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sm=/^https?/;async function im(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nm(t);for(const n of e)try{if(om(n))return}catch{}Ve(t,"unauthorized-domain")}function om(t){const e=Hs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sm.test(n))return!1;if(rm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const am=new Zn(3e4,6e4);function Wo(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cm(t){return new Promise((e,n)=>{var r,s,i;function o(){Wo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wo(),n(Xe(t,"network-request-failed"))},timeout:am.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)o();else{const a=eg("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},Gc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vr=null,e})}let vr=null;function lm(t){return vr=vr||cm(t),vr}/**
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
 */const um=new Zn(5e3,15e3),fm="__/auth/iframe",dm="emulator/auth/iframe",hm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gm(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_i(e,dm):`https://${t.config.authDomain}/${fm}`,r={apiKey:e.apiKey,appName:t.name,v:Qn},s=pm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xn(r).slice(1)}`}async function mm(t){const e=await lm(t),n=Qe().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:gm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},um.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const _m={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vm=500,ym=600,bm="_blank",wm="http://localhost";class Ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Em(t,e,n,r=vm,s=ym){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_m),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Fc(l)?bm:n),Uc(l)&&(e=e||wm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,m])=>`${p}${_}=${m},`,"");if(Yp(l)&&a!=="_self")return Im(e||"",a),new Ko(null);const d=window.open(e||"",a,u);L(d,t,"popup-blocked");try{d.focus()}catch{}return new Ko(d)}function Im(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rm="__/auth/handler",Tm="emulator/auth/handler",Cm=encodeURIComponent("fac");async function zo(t,e,n,r,s,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qn,eventId:s};if(e instanceof Xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(e instanceof tr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Cm}=${encodeURIComponent(c)}`:"";return`${Sm(t)}?${Xn(a).slice(1)}${l}`}function Sm({config:t}){return t.emulator?_i(t,Tm):`https://${t.authDomain}/${Rm}`}/**
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
 */const _s="webStorageSupport";class Pm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rl,this._completeRedirectFn=Qg,this._overrideRedirectResult=Jg}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zo(e,n,r,Hs(),s);return Em(e,o,Ei())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zo(e,n,r,Hs(),s);return kg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mm(e),r=new em(e);return n.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_s,{type:_s},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_s];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=im(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wc()||yi()||Xr()}}const Am=Pm;var qo="@firebase/auth",Go="0.23.2";/**
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
 */class Om{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function km(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Nm(t){Kn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kc(t)},l=new ig(r,s,i,c);return ag(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new fn("auth-internal",e=>{const n=vn(e.getProvider("auth").getImmediate());return(r=>new Om(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(qo,Go,km(t)),nn(qo,Go,"esm2017")}/**
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
 */const Dm=5*60,xm=Ic("authIdTokenMaxAge")||Dm;let Jo=null;const $m=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xm)return;const s=n==null?void 0:n.token;Jo!==s&&(Jo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mm(t=yp()){const e=Sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=og(t,{popupRedirectResolver:Am,persistence:[Bg,Pg,rl]}),r=Ic("authTokenSyncURL");if(r){const i=$m(r);Ig(n,i,()=>i(n.currentUser)),Eg(n,o=>i(o))}const s=ch("auth");return s&&cg(n,`http://${s}`),n}Nm("Browser");const Lm={apiKey:"AIzaSyD90pwiuqR06L0iKU8WaUybW9dOGCTKMWQ",authDomain:"chat-app-7d2ab.firebaseapp.com",projectId:"chat-app-7d2ab",storageBucket:"chat-app-7d2ab.appspot.com",messagingSenderId:"628495416638",appId:"1:628495416638:web:2374864db86ec05fc3806f"};Pc(Lm);const Nt=Mm(),Um=Kf("UserStore",{state:()=>({user:null}),actions:{async signup(t,e){try{await bg(Nt,t,e),$n.push("/login")}catch(n){switch(n.code){case"auth/email-already-in-use":throw new Error("Email already in use");case"auth/invalid-email":throw new Error("Invalid email");case"auth/operation-not-allowed":throw new Error("Operation not allowed");case"auth/weak-password":throw new Error("Weak password");default:throw new Error(n+"Something went wrong")}}this.user=Nt.currentUser},async login(t,e){try{await wg(Nt,t,e),$n.push("/")}catch(n){switch(n.code){case"auth/invalid-email":throw new Error("Invalid email");case"auth/user-not-found":throw new Error("User not found");case"auth/wrong-password":throw new Error("Wrong password");default:throw new Error("Something went wrong")}}this.user=Nt.currentUser},async logout(){await Rg(Nt),this.$reset(),$n.push("/login")}}}),Fm={name:"LoginView",setup(){const t=ve(""),e=ve(""),n=Um(),r=ve(null),s=ve({});return{login:async()=>{if(s.value={},r.value=null,t.value||(s.value.email="Email is required"),e.value||(s.value.password="Password is required"),!Object.keys(s.value).length)try{await n.login(t.value,e.value)}catch(o){r.value=o}},email:t,password:e,error:r,errors:s,store:n}}},Bm={class:"wraper"},jm={class:"card"},Hm=Z("h1",{class:"headline"},"Log in",-1),Vm={class:"form__group"},Wm=Z("label",{for:"email",class:"form__label"},"Email address",-1),Km={key:0,class:"error"},zm={class:"form__group"},qm=Z("label",{for:"password",class:"form__label"},"Password",-1),Gm={key:0,class:"error"},Jm={class:"form__group"},Ym={key:0,class:"error"},Xm=Z("button",{type:"submit",class:"btn btn--submit"}," Sign in ",-1),Qm={class:"form__link form__link--register"};function Zm(t,e,n,r,s,i){const o=Tr("router-link");return Ue(),Je("div",Bm,[Z("div",jm,[Z("form",{class:"form",onSubmit:e[2]||(e[2]=nc((...a)=>r.login&&r.login(...a),["prevent"]))},[Hm,Z("section",Vm,[Wm,Sn(Z("input",{type:"text",autocomplete:"email",required:"",id:"email","onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),class:"form__input form__input--email"},null,512),[[On,r.email]]),r.errors.email?(Ue(),Je("div",Km,Dt(r.errors.email),1)):$t("",!0)]),Z("section",zm,[qm,Sn(Z("input",{type:"password",autocomplete:"current-password",required:"",id:"password","onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),class:"form__input form__input--password"},null,512),[[On,r.password]]),r.errors.password?(Ue(),Je("div",Gm,Dt(r.errors.password),1)):$t("",!0)]),Z("section",Jm,[r.error?(Ue(),Je("div",Ym,Dt(r.error.message),1)):$t("",!0)]),Xm,Z("div",Qm,[Z("p",null,[Hn(" Not a member? "),we(o,{to:"/register",class:"link"},{default:Rr(()=>[Hn("Register")]),_:1})])])],32)])])}const e_=gn(Fm,[["render",Zm]]);function Yo(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yo(Object(n),!0).forEach(function(r){t_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yo(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function t_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=z(t[r])),n),{})}function Lr(t){return typeof t=="function"}function n_(t){return st(t)||Ft(t)}function ul(t,e,n){let r=t;const s=e.split(".");for(let i=0;i<s.length;i++){if(!r[s[i]])return n;r=r[s[i]]}return r}function vs(t,e,n){return W(()=>t.some(r=>ul(e,r,{[n]:!1})[n]))}function Qo(t,e,n){return W(()=>t.reduce((r,s)=>{const i=ul(e,s,{[n]:!1})[n]||[];return r.concat(i)},[]))}function fl(t,e,n,r){return t.call(r,z(e),z(n),r)}function dl(t){return t.$valid!==void 0?!t.$valid:!t}function r_(t,e,n,r,s,i,o){let{$lazy:a,$rewardEarly:c}=s,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,d=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const _=ve(!!r.value),m=ve(0);n.value=!1;const w=Ye([e,r].concat(l,p),()=>{if(a&&!r.value||c&&!d.value&&!n.value)return;let R;try{R=fl(t,e,u,o)}catch(C){R=Promise.reject(C)}m.value++,n.value=!!m.value,_.value=!1,Promise.resolve(R).then(C=>{m.value--,n.value=!!m.value,i.value=C,_.value=dl(C)}).catch(C=>{m.value--,n.value=!!m.value,i.value=C,_.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:_,$unwatch:w}}function s_(t,e,n,r,s,i,o,a){let{$lazy:c,$rewardEarly:l}=r;const u=()=>({}),d=W(()=>{if(c&&!n.value||l&&!a.value)return!1;let p=!0;try{const _=fl(t,e,o,i);s.value=_,p=dl(_)}catch(_){s.value=_}return p});return{$unwatch:u,$invalid:d}}function i_(t,e,n,r,s,i,o,a,c,l,u){const d=ve(!1),p=t.$params||{},_=ve(null);let m,w;t.$async?{$invalid:m,$unwatch:w}=r_(t.$validator,e,d,n,r,_,s,t.$watchTargets,c,l,u):{$invalid:m,$unwatch:w}=s_(t.$validator,e,n,r,_,s,c,l);const R=t.$message;return{$message:Lr(R)?W(()=>R(Xo({$pending:d,$invalid:m,$params:Xo(p),$model:e,$response:_,$validator:i,$propertyPath:a,$property:o}))):R||"",$params:p,$pending:d,$invalid:m,$response:_,$unwatch:w}}function o_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=z(t),n=Object.keys(e),r={},s={},i={};let o=null;return n.forEach(a=>{const c=e[a];switch(!0){case Lr(c.$validator):r[a]=c;break;case Lr(c):r[a]={$validator:c};break;case a==="$validationGroups":o=c;break;case a.startsWith("$"):i[a]=c;break;default:s[a]=c}}),{rules:r,nestedValidators:s,config:i,validationGroups:o}}const a_="__root";function c_(t,e,n,r,s,i,o,a,c){const l=Object.keys(t),u=r.get(s,t),d=ve(!1),p=ve(!1),_=ve(0);if(u){if(!u.$partial)return u;u.$unwatch(),d.value=u.$dirty.value}const m={$dirty:d,$path:s,$touch:()=>{d.value||(d.value=!0)},$reset:()=>{d.value&&(d.value=!1)},$commit:()=>{}};return l.length?(l.forEach(w=>{m[w]=i_(t[w],e,m.$dirty,i,o,w,n,s,c,p,_)}),m.$externalResults=W(()=>a.value?[].concat(a.value).map((w,R)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${R}`,$message:w,$params:{},$response:null,$pending:!1})):[]),m.$invalid=W(()=>{const w=l.some(R=>z(m[R].$invalid));return p.value=w,!!m.$externalResults.value.length||w}),m.$pending=W(()=>l.some(w=>z(m[w].$pending))),m.$error=W(()=>m.$dirty.value?m.$pending.value||m.$invalid.value:!1),m.$silentErrors=W(()=>l.filter(w=>z(m[w].$invalid)).map(w=>{const R=m[w];return at({$propertyPath:s,$property:n,$validator:w,$uid:`${s}-${w}`,$message:R.$message,$params:R.$params,$response:R.$response,$pending:R.$pending})}).concat(m.$externalResults.value)),m.$errors=W(()=>m.$dirty.value?m.$silentErrors.value:[]),m.$unwatch=()=>l.forEach(w=>{m[w].$unwatch()}),m.$commit=()=>{p.value=!0,_.value=Date.now()},r.set(s,t,m),m):(u&&r.set(s,t,m),m)}function l_(t,e,n,r,s,i,o){const a=Object.keys(t);return a.length?a.reduce((c,l)=>(c[l]=Ws({validations:t[l],state:e,key:l,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),c),{}):{}}function u_(t,e,n){const r=W(()=>[e,n].filter(m=>m).reduce((m,w)=>m.concat(Object.values(z(w))),[])),s=W({get(){return t.$dirty.value||(r.value.length?r.value.every(m=>m.$dirty):!1)},set(m){t.$dirty.value=m}}),i=W(()=>{const m=z(t.$silentErrors)||[],w=r.value.filter(R=>(z(R).$silentErrors||[]).length).reduce((R,C)=>R.concat(...C.$silentErrors),[]);return m.concat(w)}),o=W(()=>{const m=z(t.$errors)||[],w=r.value.filter(R=>(z(R).$errors||[]).length).reduce((R,C)=>R.concat(...C.$errors),[]);return m.concat(w)}),a=W(()=>r.value.some(m=>m.$invalid)||z(t.$invalid)||!1),c=W(()=>r.value.some(m=>z(m.$pending))||z(t.$pending)||!1),l=W(()=>r.value.some(m=>m.$dirty)||r.value.some(m=>m.$anyDirty)||s.value),u=W(()=>s.value?c.value||a.value:!1),d=()=>{t.$touch(),r.value.forEach(m=>{m.$touch()})},p=()=>{t.$commit(),r.value.forEach(m=>{m.$commit()})},_=()=>{t.$reset(),r.value.forEach(m=>{m.$reset()})};return r.value.length&&r.value.every(m=>m.$dirty)&&d(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:l,$error:u,$pending:c,$touch:d,$reset:_,$silentErrors:i,$commit:p}}function Ws(t){let{validations:e,state:n,key:r,parentKey:s,childResults:i,resultsCache:o,globalConfig:a={},instance:c,externalResults:l}=t;const u=s?`${s}.${r}`:r,{rules:d,nestedValidators:p,config:_,validationGroups:m}=o_(e),w=gt(gt({},a),_),R=r?W(()=>{const X=z(n);return X?z(X[r]):void 0}):n,C=gt({},z(l)||{}),D=W(()=>{const X=z(l);return r?X?z(X[r]):void 0:X}),H=c_(d,R,r,o,u,w,c,D,n),k=l_(p,R,u,o,w,c,D),q={};m&&Object.entries(m).forEach(X=>{let[me,le]=X;q[me]={$invalid:vs(le,k,"$invalid"),$error:vs(le,k,"$error"),$pending:vs(le,k,"$pending"),$errors:Qo(le,k,"$errors"),$silentErrors:Qo(le,k,"$silentErrors")}});const{$dirty:ee,$errors:V,$invalid:B,$anyDirty:ce,$error:fe,$pending:ge,$touch:Ae,$reset:Ce,$silentErrors:Oe,$commit:de}=u_(H,k,i),he=r?W({get:()=>z(R),set:X=>{ee.value=!0;const me=z(n),le=z(l);le&&(le[r]=C[r]),ae(me[r])?me[r].value=X:me[r]=X}}):null;r&&w.$autoDirty&&Ye(R,()=>{ee.value||Ae();const X=z(l);X&&(X[r]=C[r])},{flush:"sync"});async function te(){return Ae(),w.$rewardEarly&&(de(),await Fn()),await Fn(),new Promise(X=>{if(!ge.value)return X(!B.value);const me=Ye(ge,()=>{X(!B.value),me()})})}function Y(X){return(i.value||{})[X]}function $e(){ae(l)?l.value=C:Object.keys(C).length===0?Object.keys(l).forEach(X=>{delete l[X]}):Object.assign(l,C)}return at(gt(gt(gt({},H),{},{$model:he,$dirty:ee,$error:fe,$errors:V,$invalid:B,$anyDirty:ce,$pending:ge,$touch:Ae,$reset:Ce,$path:u||a_,$silentErrors:Oe,$validate:te,$commit:de},i&&{$getResultsForChild:Y,$clearExternalResults:$e,$validationGroups:q}),k))}class f_{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const s=Object.keys(r),i=Object.keys(n);return i.length!==s.length||!i.every(a=>s.includes(a))?!1:i.every(a=>n[a].$params?Object.keys(n[a].$params).every(c=>z(r[a].$params[c])===z(n[a].$params[c])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:s,result:i}=r,o=this.checkRulesValidity(e,n,s),a=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:a}}}const yr={COLLECT_ALL:!0,COLLECT_NONE:!1},Zo=Symbol("vuelidate#injectChildResults"),ea=Symbol("vuelidate#removeChildResults");function d_(t){let{$scope:e,instance:n}=t;const r={},s=ve([]),i=W(()=>s.value.reduce((u,d)=>(u[d]=z(r[d]),u),{}));function o(u,d){let{$registerAs:p,$scope:_,$stopPropagation:m}=d;m||e===yr.COLLECT_NONE||_===yr.COLLECT_NONE||e!==yr.COLLECT_ALL&&e!==_||(r[p]=u,s.value.push(p))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(u){s.value=s.value.filter(d=>d!==u),delete r[u]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const c=xe(Zo,[]);tn(Zo,n.__vuelidateInjectInstances);const l=xe(ea,[]);return tn(ea,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:l}}function hl(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?hl(e[n]):W(()=>e[n])}})}let ta=0;function h_(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:s,$scope:i=yr.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:c}=r;const l=c||((n=Qa())===null||n===void 0?void 0:n.proxy),u=l?l.$options:{};s||(ta+=1,s=`_vuelidate_${ta}`);const d=ve({}),p=new f_,{childResults:_,sendValidationResultsToParent:m,removeValidationResultsFromParent:w}=l?d_({$scope:i,instance:l}):{childResults:ve({})};if(!t&&u.validations){const R=u.validations;e=ve({}),Ua(()=>{e.value=l,Ye(()=>Lr(R)?R.call(e.value,new hl(e.value)):R,C=>{d.value=Ws({validations:C,state:e,childResults:_,resultsCache:p,globalConfig:r,instance:l,externalResults:a||l.vuelidateExternalResults})},{immediate:!0})}),r=u.validationsConfig||r}else{const R=ae(t)||n_(t)?t:at(t||{});Ye(R,C=>{d.value=Ws({validations:C,state:e,childResults:_,resultsCache:p,globalConfig:r,instance:l??{},externalResults:a})},{immediate:!0})}return l&&(m.forEach(R=>R(d,{$registerAs:s,$scope:i,$stopPropagation:o})),Fa(()=>w.forEach(R=>R(s)))),W(()=>gt(gt({},z(d.value)),_.value))}const p_={name:"RegisterView",setup(){const t=reactive({email:"",password:"",cPassword:""}),e=W(()=>{}),n=h_(e,t);return{state:t,v$:n}}},g_=Z("h1",{class:"headline"},"Register",-1),m_={class:"form__group pa3 text-left"},__=Z("label",{for:"email"},"Email address",-1),v_={key:0,class:"error"},y_={class:"form__group pa3 text-left"},b_=Z("label",{for:"password"},"Password",-1),w_={key:0,class:"error"},E_={class:"form__group pa3 text-left"},I_=Z("label",{for:"cPassword"},"Confirm Password",-1),R_={key:0,class:"error"},T_={class:"form__group"},C_={key:0,class:"error"},S_=["disabled"],P_={class:"form__link form__link--login ma12"};function A_(t,e,n,r,s,i){const o=Tr("router-link"),a=Tr("card");return Ue(),Je("div",null,[we(a,{class:"pa4 pt12"},{default:Rr(()=>[Z("form",{class:"form",onSubmit:e[3]||(e[3]=nc((...c)=>t.register&&t.register(...c),["prevent"]))},[g_,Z("section",m_,[__,Sn(Z("input",{type:"text",autocomplete:"email",required:"",id:"email","onUpdate:modelValue":e[0]||(e[0]=c=>r.state.email=c),class:"form__input form__input--email"},null,512),[[On,r.state.email]]),r.v$.email.$error?(Ue(),Je("div",v_,Dt(r.v$.email.$errors[0].$message),1)):$t("",!0)]),Z("section",y_,[b_,Sn(Z("input",{type:"password",autocomplete:"new-password",required:"",id:"password","onUpdate:modelValue":e[1]||(e[1]=c=>r.state.password=c),class:"form__input form__input--password"},null,512),[[On,r.state.password]]),r.v$.password.$error?(Ue(),Je("div",w_,Dt(r.v$.password.$errors[0].$message),1)):$t("",!0)]),Z("section",E_,[I_,Sn(Z("input",{type:"password",autocomplete:"off",required:"",id:"cPassword","onUpdate:modelValue":e[2]||(e[2]=c=>r.state.cPassword=c),class:"form__input form__input--cPassword"},null,512),[[On,r.state.cPassword]]),t.errors.cPassword.$error?(Ue(),Je("div",R_,Dt(r.v$.cPassword.$errors[0].$message),1)):$t("",!0)]),Z("section",T_,[t.error?(Ue(),Je("div",C_,Dt(t.error.message),1)):$t("",!0)]),Z("button",{type:"submit",disabled:!t.valid||t.isDisabled,class:"btn btn--submit mt12 pa4 px9"}," Sign up ",8,S_),Z("p",P_,[Hn(" Already have an account? "),we(o,{to:"/login",class:"link"},{default:Rr(()=>[Hn("Login")]),_:1})])],32)]),_:1})])}const O_=gn(p_,[["render",A_]]),k_={};function N_(t,e){return null}const D_=gn(k_,[["render",N_]]),x_={};function $_(t,e){return null}const M_=gn(x_,[["render",$_]]),L_={};function U_(t,e){return null}const F_=gn(L_,[["render",U_]]),$n=Zd({history:gd(),routes:[{path:"/login",name:"LoginView",component:e_},{path:"/register",name:"RegisterView",component:O_},{path:"/",name:"ChatView",component:D_,children:[{path:"",name:"Contacts",component:()=>ao(()=>import("./Contacts-821955f2.js"),[]),meta:{requiresAuth:!0}},{path:"",name:"Chat",component:()=>ao(()=>import("./Chat-48edb108.js"),[]),meta:{requiresAuth:!0}}]},{path:"/NoAccessView",name:"NoAccessView",component:F_},{path:"/:pathMatch(.*)*",name:"NotFoundView",component:M_}]});$n.beforeEach((t,e,n)=>{if(t.path==="/login"&&e.path==="/login"&&Nt.currentUser){n("/");return}if(t.matched.some(r=>r.meta.requiresAuth)&&!Nt.currentUser){n("/NoAccessView");return}n()});const B_=Lf(Jf),j_=Bf();B_.use($n).use(j_).mount("#app");export{gn as _};
