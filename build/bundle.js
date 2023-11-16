var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,n,e){t.$$.on_destroy.push(u(n,e))}function s(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(){return t=" ",document.createTextNode(t);var t}let d;function h(t){d=t}function $(){if(!d)throw new Error("Function called outside component initialization");return d}function m(t,n){$().$$.context.set(t,n)}function g(t){return $().$$.context.get(t)}const y=[],b=[],x=[],_=[],v=Promise.resolve();let w=!1;function k(t){x.push(t)}const E=new Set;let S=0;function j(){const t=d;do{for(;S<y.length;){const t=y[S];S++,h(t),C(t.$$)}for(h(null),y.length=0,S=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];E.has(n)||(E.add(n),n())}x.length=0}while(y.length);for(;_.length;)_.pop()();w=!1,E.clear(),h(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const O=new Set;function B(t,n){t&&t.i&&(O.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(O.has(t))return;O.add(t),undefined.c.push((()=>{O.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t,e,c,u){const{fragment:i,on_mount:s,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,c),u||k((()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(k)}function z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function M(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function P(n,r,c,u,i,s,a,f=[-1]){const p=d;h(n);const $=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||p.$$.root};a&&a($.root);let m=!1;if($.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&M(n,t)),e})):[],$.update(),m=!0,o($.before_update),$.fragment=!!u&&u($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();r.intro&&B(n.$$.fragment),R(n,r.target,r.anchor,r.customElement),j()}h(p)}class A{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=[];function U(n,e=t){let o;const r=new Set;function u(t){if(c(n,t)&&(n=t,o)){const t=!N.length;for(const t of r)t[1](),N.push(t,n);if(t){for(let t=0;t<N.length;t+=2)N[t][0](N[t+1]);N.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,i=t){const s=[c,i];return r.add(s),1===r.size&&(o=e(u)||t),c(n),()=>{r.delete(s),0===r.size&&(o(),o=null)}}}}function H(n,e,c){const i=!Array.isArray(n),s=i?[n]:n,a=e.length<2;return l=n=>{let c=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=e(i?l[0]:l,n);a?n(o):p=r(o)?o:t},h=s.map(((t,n)=>u(t,(t=>{l[n]=t,f&=~(1<<n),c&&d()}),(()=>{f|=1<<n}))));return c=!0,d(),function(){o(h),p()}},{subscribe:U(c,l).subscribe};var l}const I={},T={};function q(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const D=function(t,n){const e=[];let o=q(t);return{get location(){return o},listen(n){e.push(n);const r=()=>{o=q(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,n):t.history.pushState(r,null,n)}catch(e){t.location[c?"replace":"assign"](n)}o=q(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,r,c){const[u,i=""]=c.split("?");n++,e.push({pathname:u,search:i}),o.push(t)},replaceState(t,r,c){const[u,i=""]=c.split("?");e[n]={pathname:u,search:i},o[n]=t}}}}()),F=/^:(.+)/;function W(t){return"*"===t[0]}function G(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function J(t){return t.replace(/(^\/+|\/+$)/g,"")}function K(t,n){return{route:t,score:t.default?0:G(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return F.test(t)}(n)?W(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function Q(t,n){let e,o;const[r]=n.split("?"),c=G(r),u=""===c[0],i=function(t){return t.map(K).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=i.length;t<r;t++){const r=i[t].route;let s=!1;if(r.default){o={route:r,params:{},uri:n};continue}const a=G(r.path),l={},f=Math.max(c.length,a.length);let p=0;for(;p<f;p++){const t=a[p],n=c[p];if(void 0!==t&&W(t)){l["*"===t?"*":t.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===n){s=!0;break}let e=F.exec(t);if(e&&!u){const t=decodeURIComponent(n);l[e[1]]=t}else if(t!==n){s=!0;break}}if(!s){e={route:r,params:l,uri:"/"+c.slice(0,p).join("/")};break}}return e||o||null}function V(t,n){return`${J("/"===n?t:`${J(t)}/${J(n)}`)}/`}function X(t){let n;const e=t[9].default,o=function(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}(e,t,t[8],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||256&r)&&function(t,n,e,o,r,c){if(r){const u=s(n,e,o,c);t.p(u,r)}}(o,e,t,t[8],n?function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(e,t[8],r,null):function(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}(t[8]),null)},i(t){n||(B(o,t),n=!0)},o(t){L(o,t),n=!1},d(t){o&&o.d(t)}}}function Y(t,n,e){let o,r,c,{$$slots:u={},$$scope:s}=n,{basepath:a="/"}=n,{url:l=null}=n;const f=g(I),p=g(T),d=U([]);i(t,d,(t=>e(6,r=t)));const h=U(null);let y=!1;const b=f||U(l?{pathname:l}:D.location);i(t,b,(t=>e(5,o=t)));const x=p?p.routerBase:U({path:a,uri:a});i(t,x,(t=>e(7,c=t)));const _=H([x,h],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:r}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:r}}));var v;return f||(v=()=>D.listen((t=>{b.set(t.location)})),$().$$.on_mount.push(v),m(I,b)),m(T,{activeRoute:h,base:x,routerBase:_,registerRoute:function(t){const{path:n}=c;let{path:e}=t;if(t._path=e,t.path=V(n,e),"undefined"==typeof window){if(y)return;const n=function(t,n){return Q([t],n)}(t,o.pathname);n&&(h.set(n),y=!0)}else d.update((n=>(n.push(t),n)))},unregisterRoute:function(t){d.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,a=t.basepath),"url"in t&&e(4,l=t.url),"$$scope"in t&&e(8,s=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=c;d.update((n=>(n.forEach((n=>n.path=V(t,n._path))),n)))}if(96&t.$$.dirty){const t=Q(r,o.pathname);h.set(t)}},[d,b,x,a,l,o,r,c,s,u]}class Z extends A{constructor(t){super(),P(this,t,Y,X,c,{basepath:3,url:4})}}function tt(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="containerWrapper svelte-151e5zt"><h1>Coming Soon</h1></div>'},m(t,e){a(t,n,e)},d(t){t&&l(n)}}}function nt(t){let n,e,o,r;return o=new Z({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){var t;n=f("style"),n.textContent='@import url("https://fonts.googleapis.com/css?family=Baloo");',e=p(),(t=o.$$.fragment)&&t.c()},m(t,c){!function(t,n){t.appendChild(n)}(document.head,n),a(t,e,c),R(o,t,c),r=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){r||(B(o.$$.fragment,t),r=!0)},o(t){L(o.$$.fragment,t),r=!1},d(t){l(n),t&&l(e),z(o,t)}}}return new class extends A{constructor(t){super(),P(this,t,null,nt,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
