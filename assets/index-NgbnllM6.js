(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const gl=!1;var Ec=Array.isArray,ep=Array.prototype.indexOf,nr=Array.prototype.includes,vo=Array.from,tp=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,cd=Object.getOwnPropertyDescriptors,np=Object.prototype,ip=Array.prototype,Tc=Object.getPrototypeOf,fu=Object.isExtensible;const Za=()=>{};function sp(i){return i()}function _l(i){for(var e=0;e<i.length;e++)i[e]()}function ud(){var i,e,t=new Promise((n,s)=>{i=n,e=s});return{promise:t,resolve:i,reject:e}}const Vt=2,ra=4,aa=8,hd=1<<24,Ei=16,Fn=32,vs=64,vl=128,Sn=512,Dt=1024,Ht=2048,yn=4096,dn=8192,_i=16384,fs=32768,Yr=65536,pu=1<<17,dd=1<<18,pr=1<<19,fd=1<<20,pi=1<<25,ps=65536,xl=1<<21,Ac=1<<22,ki=1<<23,vi=Symbol("$state"),rp=Symbol("legacy props"),ap=Symbol(""),os=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function pd(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function op(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function lp(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function cp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function up(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hp(i){throw new Error("https://svelte.dev/e/effect_orphan")}function dp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function pp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function _p(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const vp=1,xp=2,md=4,Sp=8,Mp=16,yp=2,bp=4,Ep=8,Tp=1,Ap=2,zt=Symbol(),gd="http://www.w3.org/1999/xhtml";function wp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Rp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function _d(i){return i===this.v}function vd(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function xd(i){return!vd(i,this.v)}let mr=!1,Cp=!1;function Pp(){mr=!0}let vt=null;function ir(i){vt=i}function oa(i,e=!1,t){vt={p:vt,i:!1,c:null,e:null,s:i,x:null,l:mr&&!e?{s:null,u:null,$:[]}:null}}function la(i){var e=vt,t=e.e;if(t!==null){e.e=null;for(var n of t)Od(n)}return e.i=!0,vt=e.p,{}}function ca(){return!mr||vt!==null&&vt.l===null}let ls=[];function Sd(){var i=ls;ls=[],_l(i)}function Vi(i){if(ls.length===0&&!Vr){var e=ls;queueMicrotask(()=>{e===ls&&Sd()})}ls.push(i)}function Dp(){for(;ls.length>0;)Sd()}function Md(i){var e=st;if(e===null)return tt.f|=ki,i;if((e.f&fs)===0&&(e.f&ra)===0)throw i;zi(i,e)}function zi(i,e){for(;e!==null;){if((e.f&vl)!==0){if((e.f&fs)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}const Lp=-7169;function Mt(i,e){i.f=i.f&Lp|e}function wc(i){(i.f&Sn)!==0||i.deps===null?Mt(i,Dt):Mt(i,yn)}function yd(i){if(i!==null)for(const e of i)(e.f&Vt)===0||(e.f&ps)===0||(e.f^=ps,yd(e.deps))}function bd(i,e,t){(i.f&Ht)!==0?e.add(i):(i.f&yn)!==0&&t.add(i),yd(i.deps),Mt(i,Dt)}const pa=new Set;let gt=null,Sl=null,Cn=null,en=[],xo=null,Ml=!1,Vr=!1;class Hi{current=new Map;previous=new Map;#i=new Set;#f=new Set;#s=0;#o=0;#n=null;#r=new Set;#e=new Set;#t=new Map;is_fork=!1;#a=!1;#c(){return this.is_fork||this.#o>0}skip_effect(e){this.#t.has(e)||this.#t.set(e,{d:[],m:[]})}unskip_effect(e){var t=this.#t.get(e);if(t){this.#t.delete(e);for(var n of t.d)Mt(n,Ht),Dn(n);for(n of t.m)Mt(n,yn),Dn(n)}}process(e){en=[],this.apply();var t=[],n=[];for(const s of e)this.#l(s,t,n);if(this.#c()){this.#u(n),this.#u(t);for(const[s,r]of this.#t)wd(s,r)}else{for(const s of this.#i)s();this.#i.clear(),this.#s===0&&this.#d(),Sl=this,gt=null,mu(n),mu(t),Sl=null,this.#n?.resolve()}Cn=null}#l(e,t,n){e.f^=Dt;for(var s=e.first;s!==null;){var r=s.f,a=(r&(Fn|vs))!==0,o=a&&(r&Dt)!==0,c=o||(r&dn)!==0||this.#t.has(s);if(!c&&s.fn!==null){a?s.f^=Dt:(r&ra)!==0?t.push(s):gr(s)&&((r&Ei)!==0&&this.#e.add(s),gs(s));var l=s.first;if(l!==null){s=l;continue}}for(;s!==null;){var u=s.next;if(u!==null){s=u;break}s=s.parent}}}#u(e){for(var t=0;t<e.length;t+=1)bd(e[t],this.#r,this.#e)}capture(e,t){t!==zt&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&ki)===0&&(this.current.set(e,e.v),Cn?.set(e,e.v))}activate(){gt=this,this.apply()}deactivate(){gt===this&&(gt=null,Cn=null)}flush(){if(this.activate(),en.length>0){if(Ed(),gt!==null&&gt!==this)return}else this.#s===0&&this.process([]);this.deactivate()}discard(){for(const e of this.#f)e(this);this.#f.clear()}#d(){if(pa.size>1){this.previous.clear();var e=Cn,t=!0;for(const s of pa){if(s===this){t=!1;continue}const r=[];for(const[o,c]of this.current){if(s.current.has(o))if(t&&c!==s.current.get(o))s.current.set(o,c);else continue;r.push(o)}if(r.length===0)continue;const a=[...s.current.keys()].filter(o=>!this.current.has(o));if(a.length>0){var n=en;en=[];const o=new Set,c=new Map;for(const l of r)Td(l,a,o,c);if(en.length>0){gt=s,s.apply();for(const l of en)s.#l(l,[],[]);s.deactivate()}en=n}}gt=null,Cn=e}pa.delete(this)}increment(e){this.#s+=1,e&&(this.#o+=1)}decrement(e){this.#s-=1,e&&(this.#o-=1),!this.#a&&(this.#a=!0,Vi(()=>{this.#a=!1,this.#c()?en.length>0&&this.flush():this.revive()}))}revive(){for(const e of this.#r)this.#e.delete(e),Mt(e,Ht),Dn(e);for(const e of this.#e)Mt(e,yn),Dn(e);this.flush()}oncommit(e){this.#i.add(e)}ondiscard(e){this.#f.add(e)}settled(){return(this.#n??=ud()).promise}static ensure(){if(gt===null){const e=gt=new Hi;pa.add(gt),Vr||Vi(()=>{gt===e&&e.flush()})}return gt}apply(){}}function Ip(i){var e=Vr;Vr=!0;try{for(var t;;){if(Dp(),en.length===0&&(gt?.flush(),en.length===0))return xo=null,t;Ed()}}finally{Vr=e}}function Ed(){Ml=!0;var i=null;try{for(var e=0;en.length>0;){var t=Hi.ensure();if(e++>1e3){var n,s;Np()}t.process(en),Gi.clear()}}finally{en=[],Ml=!1,xo=null}}function Np(){try{dp()}catch(i){zi(i,xo)}}let fi=null;function mu(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(_i|dn))===0&&gr(n)&&(fi=new Set,gs(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Vd(n),fi?.size>0)){Gi.clear();for(const s of fi){if((s.f&(_i|dn))!==0)continue;const r=[s];let a=s.parent;for(;a!==null;)fi.has(a)&&(fi.delete(a),r.push(a)),a=a.parent;for(let o=r.length-1;o>=0;o--){const c=r[o];(c.f&(_i|dn))===0&&gs(c)}}fi.clear()}}fi=null}}function Td(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const s of i.reactions){const r=s.f;(r&Vt)!==0?Td(s,e,t,n):(r&(Ac|Ei))!==0&&(r&Ht)===0&&Ad(s,e,n)&&(Mt(s,Ht),Dn(s))}}function Ad(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const s of i.deps){if(nr.call(e,s))return!0;if((s.f&Vt)!==0&&Ad(s,e,t))return t.set(s,!0),!0}return t.set(i,!1),!1}function Dn(i){var e=xo=i,t=e.b;if(t?.is_pending&&(i.f&(ra|aa|hd))!==0&&(i.f&fs)===0){t.defer_effect(i);return}for(;e.parent!==null;){e=e.parent;var n=e.f;if(Ml&&e===st&&(n&Ei)!==0&&(n&dd)===0&&(n&fs)!==0)return;if((n&(vs|Fn))!==0){if((n&Dt)===0)return;e.f^=Dt}}en.push(e)}function wd(i,e){if(!((i.f&Fn)!==0&&(i.f&Dt)!==0)){(i.f&Ht)!==0?e.d.push(i):(i.f&yn)!==0&&e.m.push(i),Mt(i,Dt);for(var t=i.first;t!==null;)wd(t,e),t=t.next}}function Up(i){let e=0,t=ms(0),n;return()=>{Lc()&&(pe(t),So(()=>(e===0&&(n=jt(()=>i(()=>Hr(t)))),e+=1,()=>{Vi(()=>{e-=1,e===0&&(n?.(),n=void 0,Hr(t))})})))}}var Fp=Yr|pr;function Op(i,e,t,n){new zp(i,e,t,n)}class zp{parent;is_pending=!1;transform_error;#i;#f=null;#s;#o;#n;#r=null;#e=null;#t=null;#a=null;#c=0;#l=0;#u=!1;#d=new Set;#p=new Set;#h=null;#x=Up(()=>(this.#h=ms(this.#c),()=>{this.#h=null}));constructor(e,t,n,s){this.#i=e,this.#s=t,this.#o=r=>{var a=st;a.b=this,a.f|=vl,n(r)},this.parent=st.b,this.transform_error=s??this.parent?.transform_error??(r=>r),this.#n=Bd(()=>{this.#_()},Fp)}#S(){try{this.#r=Hn(()=>this.#o(this.#i))}catch(e){this.error(e)}}#M(e){const t=this.#s.failed;t&&(this.#t=Hn(()=>{t(this.#i,()=>e,()=>()=>{})}))}#y(){const e=this.#s.pending;e&&(this.is_pending=!0,this.#e=Hn(()=>e(this.#i)),Vi(()=>{var t=this.#a=document.createDocumentFragment(),n=Gr();t.append(n),this.#r=this.#g(()=>(Hi.ensure(),Hn(()=>this.#o(n)))),this.#l===0&&(this.#i.before(t),this.#a=null,js(this.#e,()=>{this.#e=null}),this.#m())}))}#_(){try{if(this.is_pending=this.has_pending_snippet(),this.#l=0,this.#c=0,this.#r=Hn(()=>{this.#o(this.#i)}),this.#l>0){var e=this.#a=document.createDocumentFragment();cm(this.#r,e);const t=this.#s.pending;this.#e=Hn(()=>t(this.#i))}else this.#m()}catch(t){this.error(t)}}#m(){this.is_pending=!1;for(const e of this.#d)Mt(e,Ht),Dn(e);for(const e of this.#p)Mt(e,yn),Dn(e);this.#d.clear(),this.#p.clear()}defer_effect(e){bd(e,this.#d,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#s.pending}#g(e){var t=st,n=tt,s=vt;$n(this.#n),bn(this.#n),ir(this.#n.ctx);try{return e()}catch(r){return Md(r),null}finally{$n(t),bn(n),ir(s)}}#v(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#v(e);return}this.#l+=e,this.#l===0&&(this.#m(),this.#e&&js(this.#e,()=>{this.#e=null}),this.#a&&(this.#i.before(this.#a),this.#a=null))}update_pending_count(e){this.#v(e),this.#c+=e,!(!this.#h||this.#u)&&(this.#u=!0,Vi(()=>{this.#u=!1,this.#h&&sr(this.#h,this.#c)}))}get_effect_pending(){return this.#x(),pe(this.#h)}error(e){var t=this.#s.onerror;let n=this.#s.failed;if(!t&&!n)throw e;this.#r&&(In(this.#r),this.#r=null),this.#e&&(In(this.#e),this.#e=null),this.#t&&(In(this.#t),this.#t=null);var s=!1,r=!1;const a=()=>{if(s){Rp();return}s=!0,r&&_p(),this.#t!==null&&js(this.#t,()=>{this.#t=null}),this.#g(()=>{Hi.ensure(),this.#_()})},o=c=>{try{r=!0,t?.(c,a),r=!1}catch(l){zi(l,this.#n&&this.#n.parent)}n&&(this.#t=this.#g(()=>{Hi.ensure();try{return Hn(()=>{var l=st;l.b=this,l.f|=vl,n(this.#i,()=>c,()=>a)})}catch(l){return zi(l,this.#n.parent),null}}))};Vi(()=>{var c;try{c=this.transform_error(e)}catch(l){zi(l,this.#n&&this.#n.parent);return}c!==null&&typeof c=="object"&&typeof c.then=="function"?c.then(o,l=>zi(l,this.#n&&this.#n.parent)):o(c)})}}function Bp(i,e,t,n){const s=ca()?Rc:Cc;var r=i.filter(d=>!d.settled);if(t.length===0&&r.length===0){n(e.map(s));return}var a=st,o=kp(),c=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(d=>d.promise)):null;function l(d){o();try{n(d)}catch(h){(a.f&_i)===0&&zi(h,a)}yl()}if(t.length===0){c.then(()=>l(e.map(s)));return}function u(){o(),Promise.all(t.map(d=>Hp(d))).then(d=>l([...e.map(s),...d])).catch(d=>zi(d,a))}c?c.then(u):u()}function kp(){var i=st,e=tt,t=vt,n=gt;return function(r=!0){$n(i),bn(e),ir(t),r&&n?.activate()}}function yl(i=!0){$n(null),bn(null),ir(null),i&&gt?.deactivate()}function Vp(){var i=st.b,e=gt,t=i.is_rendered();return i.update_pending_count(1),e.increment(t),()=>{i.update_pending_count(-1),e.decrement(t)}}function Rc(i){var e=Vt|Ht,t=tt!==null&&(tt.f&Vt)!==0?tt:null;return st!==null&&(st.f|=pr),{ctx:vt,deps:null,effects:null,equals:_d,f:e,fn:i,reactions:null,rv:0,v:zt,wv:0,parent:t??st,ac:null}}function Hp(i,e,t){st===null&&op();var s=void 0,r=ms(zt),a=!tt,o=new Map;return am(()=>{var c=ud();s=c.promise;try{Promise.resolve(i()).then(c.resolve,c.reject).finally(yl)}catch(h){c.reject(h),yl()}var l=gt;if(a){var u=Vp();o.get(l)?.reject(os),o.delete(l),o.set(l,c)}const d=(h,f=void 0)=>{if(l.activate(),f)f!==os&&(r.f|=ki,sr(r,f));else{(r.f&ki)!==0&&(r.f^=ki),sr(r,h);for(const[_,S]of o){if(o.delete(_),_===l)break;S.reject(os)}}u&&u()};c.promise.then(d,h=>d(null,h||"unknown"))}),Fd(()=>{for(const c of o.values())c.reject(os)}),new Promise(c=>{function l(u){function d(){u===s?c(r):l(s)}u.then(d,d)}l(s)})}function Cc(i){const e=Rc(i);return e.equals=xd,e}function Gp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)In(e[t])}}function Wp(i){for(var e=i.parent;e!==null;){if((e.f&Vt)===0)return(e.f&_i)===0?e:null;e=e.parent}return null}function Pc(i){var e,t=st;$n(Wp(i));try{i.f&=~ps,Gp(i),e=Yd(i)}finally{$n(t)}return e}function Rd(i){var e=Pc(i);if(!i.equals(e)&&(i.wv=qd(),(!gt?.is_fork||i.deps===null)&&(i.v=e,i.deps===null))){Mt(i,Dt);return}qi||(Cn!==null?(Lc()||gt?.is_fork)&&Cn.set(i,e):wc(i))}function Xp(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac?.abort(os),e.teardown=Za,e.ac=null,Kr(e,0),Ic(e))}function Cd(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&gs(e)}let bl=new Set;const Gi=new Map;let Pd=!1;function ms(i,e){var t={f:0,v:i,reactions:null,equals:_d,rv:0,wv:0};return t}function wi(i,e){const t=ms(i);return um(t),t}function jn(i,e=!1,t=!0){const n=ms(i);return e||(n.equals=xd),mr&&t&&vt!==null&&vt.l!==null&&(vt.l.s??=[]).push(n),n}function $i(i,e){return wt(i,jt(()=>pe(i))),e}function wt(i,e,t=!1){tt!==null&&(!Ln||(tt.f&pu)!==0)&&ca()&&(tt.f&(Vt|Ei|Ac|pu))!==0&&(Mn===null||!nr.call(Mn,i))&&gp();let n=t?Ws(e):e;return sr(i,n)}function sr(i,e){if(!i.equals(e)){var t=i.v;qi?Gi.set(i,e):Gi.set(i,t),i.v=e;var n=Hi.ensure();if(n.capture(i,t),(i.f&Vt)!==0){const s=i;(i.f&Ht)!==0&&Pc(s),wc(s)}i.wv=qd(),Dd(i,Ht),ca()&&st!==null&&(st.f&Dt)!==0&&(st.f&(Fn|vs))===0&&(pn===null?hm([i]):pn.push(i)),!n.is_fork&&bl.size>0&&!Pd&&qp()}return e}function qp(){Pd=!1;for(const i of bl)(i.f&Dt)!==0&&Mt(i,yn),gr(i)&&gs(i);bl.clear()}function Hr(i){wt(i,i.v+1)}function Dd(i,e){var t=i.reactions;if(t!==null)for(var n=ca(),s=t.length,r=0;r<s;r++){var a=t[r],o=a.f;if(!(!n&&a===st)){var c=(o&Ht)===0;if(c&&Mt(a,e),(o&Vt)!==0){var l=a;Cn?.delete(l),(o&ps)===0&&(o&Sn&&(a.f|=ps),Dd(l,yn))}else c&&((o&Ei)!==0&&fi!==null&&fi.add(a),Dn(a))}}}function Ws(i){if(typeof i!="object"||i===null||vi in i)return i;const e=Tc(i);if(e!==np&&e!==ip)return i;var t=new Map,n=Ec(i),s=wi(0),r=hs,a=o=>{if(hs===r)return o();var c=tt,l=hs;bn(null),Su(r);var u=o();return bn(c),Su(l),u};return n&&t.set("length",wi(i.length)),new Proxy(i,{defineProperty(o,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&pp();var u=t.get(c);return u===void 0?a(()=>{var d=wi(l.value);return t.set(c,d),d}):wt(u,l.value,!0),!0},deleteProperty(o,c){var l=t.get(c);if(l===void 0){if(c in o){const u=a(()=>wi(zt));t.set(c,u),Hr(s)}}else wt(l,zt),Hr(s);return!0},get(o,c,l){if(c===vi)return i;var u=t.get(c),d=c in o;if(u===void 0&&(!d||qs(o,c)?.writable)&&(u=a(()=>{var f=Ws(d?o[c]:zt),_=wi(f);return _}),t.set(c,u)),u!==void 0){var h=pe(u);return h===zt?void 0:h}return Reflect.get(o,c,l)},getOwnPropertyDescriptor(o,c){var l=Reflect.getOwnPropertyDescriptor(o,c);if(l&&"value"in l){var u=t.get(c);u&&(l.value=pe(u))}else if(l===void 0){var d=t.get(c),h=d?.v;if(d!==void 0&&h!==zt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return l},has(o,c){if(c===vi)return!0;var l=t.get(c),u=l!==void 0&&l.v!==zt||Reflect.has(o,c);if(l!==void 0||st!==null&&(!u||qs(o,c)?.writable)){l===void 0&&(l=a(()=>{var h=u?Ws(o[c]):zt,f=wi(h);return f}),t.set(c,l));var d=pe(l);if(d===zt)return!1}return u},set(o,c,l,u){var d=t.get(c),h=c in o;if(n&&c==="length")for(var f=l;f<d.v;f+=1){var _=t.get(f+"");_!==void 0?wt(_,zt):f in o&&(_=a(()=>wi(zt)),t.set(f+"",_))}if(d===void 0)(!h||qs(o,c)?.writable)&&(d=a(()=>wi(void 0)),wt(d,Ws(l)),t.set(c,d));else{h=d.v!==zt;var S=a(()=>Ws(l));wt(d,S)}var p=Reflect.getOwnPropertyDescriptor(o,c);if(p?.set&&p.set.call(u,l),!h){if(n&&typeof c=="string"){var m=t.get("length"),y=Number(c);Number.isInteger(y)&&y>=m.v&&wt(m,y+1)}Hr(s)}return!0},ownKeys(o){pe(s);var c=Reflect.ownKeys(o).filter(d=>{var h=t.get(d);return h===void 0||h.v!==zt});for(var[l,u]of t)u.v!==zt&&!(l in o)&&c.push(l);return c},setPrototypeOf(){mp()}})}function gu(i){try{if(i!==null&&typeof i=="object"&&vi in i)return i[vi]}catch{}return i}function jp(i,e){return Object.is(gu(i),gu(e))}var _u,Ld,Id,Nd;function Yp(){if(_u===void 0){_u=window,Ld=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;Id=qs(e,"firstChild").get,Nd=qs(e,"nextSibling").get,fu(i)&&(i.__click=void 0,i.__className=void 0,i.__attributes=null,i.__style=void 0,i.__e=void 0),fu(t)&&(t.__t=void 0)}}function Gr(i=""){return document.createTextNode(i)}function ao(i){return Id.call(i)}function ua(i){return Nd.call(i)}function qt(i,e){return ao(i)}function Kp(i,e=!1){{var t=ao(i);return t instanceof Comment&&t.data===""?ua(t):t}}function nn(i,e=1,t=!1){let n=i;for(;e--;)n=ua(n);return n}function Zp(i){i.textContent=""}function $p(){return!1}function Jp(i,e,t){return document.createElementNS(gd,i,void 0)}let vu=!1;function Qp(){vu||(vu=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e.__on_r?.()})},{capture:!0}))}function Dc(i){var e=tt,t=st;bn(null),$n(null);try{return i()}finally{bn(e),$n(t)}}function em(i,e,t,n=t){i.addEventListener(e,()=>Dc(t));const s=i.__on_r;s?i.__on_r=()=>{s(),n(!0)}:i.__on_r=()=>n(!0),Qp()}function Ud(i){st===null&&(tt===null&&hp(),up()),qi&&cp()}function tm(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function ti(i,e,t){var n=st;n!==null&&(n.f&dn)!==0&&(i|=dn);var s={ctx:vt,deps:null,nodes:null,f:i|Ht|Sn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{gs(s)}catch(o){throw In(s),o}else e!==null&&Dn(s);var r=s;if(t&&r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&pr)===0&&(r=r.first,(i&Ei)!==0&&(i&Yr)!==0&&r!==null&&(r.f|=Yr)),r!==null&&(r.parent=n,n!==null&&tm(r,n),tt!==null&&(tt.f&Vt)!==0&&(i&vs)===0)){var a=tt;(a.effects??=[]).push(r)}return s}function Lc(){return tt!==null&&!Ln}function Fd(i){const e=ti(aa,null,!1);return Mt(e,Dt),e.teardown=i,e}function El(i){Ud();var e=st.f,t=!tt&&(e&Fn)!==0&&(e&fs)===0;if(t){var n=vt;(n.e??=[]).push(i)}else return Od(i)}function Od(i){return ti(ra|fd,i,!1)}function nm(i){return Ud(),ti(aa|fd,i,!0)}function im(i){Hi.ensure();const e=ti(vs|pr,i,!0);return(t={})=>new Promise(n=>{t.outro?js(e,()=>{In(e),n(void 0)}):(In(e),n(void 0))})}function zd(i){return ti(ra,i,!1)}function sm(i,e){var t=vt,n={effect:null,ran:!1,deps:i};t.l.$.push(n),n.effect=So(()=>{i(),!n.ran&&(n.ran=!0,jt(e))})}function rm(){var i=vt;So(()=>{for(var e of i.l.$){e.deps();var t=e.effect;(t.f&Dt)!==0&&t.deps!==null&&Mt(t,yn),gr(t)&&gs(t),e.ran=!1}})}function am(i){return ti(Ac|pr,i,!0)}function So(i,e=0){return ti(aa|e,i,!0)}function oo(i,e=[],t=[],n=[]){Bp(n,e,t,s=>{ti(aa,()=>i(...s.map(pe)),!0)})}function Bd(i,e=0){var t=ti(Ei|e,i,!0);return t}function Hn(i){return ti(Fn|pr,i,!0)}function kd(i){var e=i.teardown;if(e!==null){const t=qi,n=tt;xu(!0),bn(null);try{e.call(null)}finally{xu(t),bn(n)}}}function Ic(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const s=t.ac;s!==null&&Dc(()=>{s.abort(os)});var n=t.next;(t.f&vs)!==0?t.parent=null:In(t,e),t=n}}function om(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&Fn)===0&&In(e),e=t}}function In(i,e=!0){var t=!1;(e||(i.f&dd)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(lm(i.nodes.start,i.nodes.end),t=!0),Ic(i,e&&!t),Kr(i,0),Mt(i,_i);var n=i.nodes&&i.nodes.t;if(n!==null)for(const r of n)r.stop();kd(i);var s=i.parent;s!==null&&s.first!==null&&Vd(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=null}function lm(i,e){for(;i!==null;){var t=i===e?null:ua(i);i.remove(),i=t}}function Vd(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function js(i,e,t=!0){var n=[];Hd(i,n,!0);var s=()=>{t&&In(i),e&&e()},r=n.length;if(r>0){var a=()=>--r||s();for(var o of n)o.out(a)}else s()}function Hd(i,e,t){if((i.f&dn)===0){i.f^=dn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var s=i.first;s!==null;){var r=s.next,a=(s.f&Yr)!==0||(s.f&Fn)!==0&&(i.f&Ei)!==0;Hd(s,e,a?t:!1),s=r}}}function Gd(i){Wd(i,!0)}function Wd(i,e){if((i.f&dn)!==0){i.f^=dn,(i.f&Dt)===0&&(Mt(i,Ht),Dn(i));for(var t=i.first;t!==null;){var n=t.next,s=(t.f&Yr)!==0||(t.f&Fn)!==0;Wd(t,s?e:!1),t=n}var r=i.nodes&&i.nodes.t;if(r!==null)for(const a of r)(a.is_global||e)&&a.in()}}function cm(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var s=t===n?null:ua(t);e.append(t),t=s}}let $a=!1,qi=!1;function xu(i){qi=i}let tt=null,Ln=!1;function bn(i){tt=i}let st=null;function $n(i){st=i}let Mn=null;function um(i){tt!==null&&(Mn===null?Mn=[i]:Mn.push(i))}let tn=null,cn=0,pn=null;function hm(i){pn=i}let Xd=1,cs=0,hs=cs;function Su(i){hs=i}function qd(){return++Xd}function gr(i){var e=i.f;if((e&Ht)!==0)return!0;if(e&Vt&&(i.f&=~ps),(e&yn)!==0){for(var t=i.deps,n=t.length,s=0;s<n;s++){var r=t[s];if(gr(r)&&Rd(r),r.wv>i.wv)return!0}(e&Sn)!==0&&Cn===null&&Mt(i,Dt)}return!1}function jd(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Mn!==null&&nr.call(Mn,i)))for(var s=0;s<n.length;s++){var r=n[s];(r.f&Vt)!==0?jd(r,e,!1):e===r&&(t?Mt(r,Ht):(r.f&Dt)!==0&&Mt(r,yn),Dn(r))}}function Yd(i){var e=tn,t=cn,n=pn,s=tt,r=Mn,a=vt,o=Ln,c=hs,l=i.f;tn=null,cn=0,pn=null,tt=(l&(Fn|vs))===0?i:null,Mn=null,ir(i.ctx),Ln=!1,hs=++cs,i.ac!==null&&(Dc(()=>{i.ac.abort(os)}),i.ac=null);try{i.f|=xl;var u=i.fn,d=u();i.f|=fs;var h=i.deps,f=gt?.is_fork;if(tn!==null){var _;if(f||Kr(i,cn),h!==null&&cn>0)for(h.length=cn+tn.length,_=0;_<tn.length;_++)h[cn+_]=tn[_];else i.deps=h=tn;if(Lc()&&(i.f&Sn)!==0)for(_=cn;_<h.length;_++)(h[_].reactions??=[]).push(i)}else!f&&h!==null&&cn<h.length&&(Kr(i,cn),h.length=cn);if(ca()&&pn!==null&&!Ln&&h!==null&&(i.f&(Vt|yn|Ht))===0)for(_=0;_<pn.length;_++)jd(pn[_],i);if(s!==null&&s!==i){if(cs++,s.deps!==null)for(let S=0;S<t;S+=1)s.deps[S].rv=cs;if(e!==null)for(const S of e)S.rv=cs;pn!==null&&(n===null?n=pn:n.push(...pn))}return(i.f&ki)!==0&&(i.f^=ki),d}catch(S){return Md(S)}finally{i.f^=xl,tn=e,cn=t,pn=n,tt=s,Mn=r,ir(a),Ln=o,hs=c}}function dm(i,e){let t=e.reactions;if(t!==null){var n=ep.call(t,i);if(n!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[n]=t[s],t.pop())}}if(t===null&&(e.f&Vt)!==0&&(tn===null||!nr.call(tn,e))){var r=e;(r.f&Sn)!==0&&(r.f^=Sn,r.f&=~ps),wc(r),Xp(r),Kr(r,0)}}function Kr(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)dm(i,t[n])}function gs(i){var e=i.f;if((e&_i)===0){Mt(i,Dt);var t=st,n=$a;st=i,$a=!0;try{(e&(Ei|hd))!==0?om(i):Ic(i),kd(i);var s=Yd(i);i.teardown=typeof s=="function"?s:null,i.wv=Xd;var r;gl&&Cp&&(i.f&Ht)!==0&&i.deps}finally{$a=n,st=t}}}async function fm(){await Promise.resolve(),Ip()}function pe(i){var e=i.f,t=(e&Vt)!==0;if(tt!==null&&!Ln){var n=st!==null&&(st.f&_i)!==0;if(!n&&(Mn===null||!nr.call(Mn,i))){var s=tt.deps;if((tt.f&xl)!==0)i.rv<cs&&(i.rv=cs,tn===null&&s!==null&&s[cn]===i?cn++:tn===null?tn=[i]:tn.push(i));else{(tt.deps??=[]).push(i);var r=i.reactions;r===null?i.reactions=[tt]:nr.call(r,tt)||r.push(tt)}}}if(qi&&Gi.has(i))return Gi.get(i);if(t){var a=i;if(qi){var o=a.v;return((a.f&Dt)===0&&a.reactions!==null||Zd(a))&&(o=Pc(a)),Gi.set(a,o),o}var c=(a.f&Sn)===0&&!Ln&&tt!==null&&($a||(tt.f&Sn)!==0),l=(a.f&fs)===0;gr(a)&&(c&&(a.f|=Sn),Rd(a)),c&&!l&&(Cd(a),Kd(a))}if(Cn?.has(i))return Cn.get(i);if((i.f&ki)!==0)throw i.v;return i.v}function Kd(i){if(i.f|=Sn,i.deps!==null)for(const e of i.deps)(e.reactions??=[]).push(i),(e.f&Vt)!==0&&(e.f&Sn)===0&&(Cd(e),Kd(e))}function Zd(i){if(i.v===zt)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Gi.has(e)||(e.f&Vt)!==0&&Zd(e))return!0;return!1}function jt(i){var e=Ln;try{return Ln=!0,i()}finally{Ln=e}}function pm(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(vi in i)Tl(i);else if(!Array.isArray(i))for(let e in i){const t=i[e];typeof t=="object"&&t&&vi in t&&Tl(t)}}}function Tl(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let n in i)try{Tl(i[n],e)}catch{}const t=Tc(i);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=cd(t);for(let s in n){const r=n[s].get;if(r)try{r.call(i)}catch{}}}}}const mm=["touchstart","touchmove"];function gm(i){return mm.includes(i)}const ma=Symbol("events"),_m=new Set,Mu=new Set;let yu=null;function bu(i){var e=this,t=e.ownerDocument,n=i.type,s=i.composedPath?.()||[],r=s[0]||i.target;yu=i;var a=0,o=yu===i&&i[ma];if(o){var c=s.indexOf(o);if(c!==-1&&(e===document||e===window)){i[ma]=e;return}var l=s.indexOf(e);if(l===-1)return;c<=l&&(a=c)}if(r=s[a]||i.target,r!==e){tp(i,"currentTarget",{configurable:!0,get(){return r||t}});var u=tt,d=st;bn(null),$n(null);try{for(var h,f=[];r!==null;){var _=r.assignedSlot||r.parentNode||r.host||null;try{var S=r[ma]?.[n];S!=null&&(!r.disabled||i.target===r)&&S.call(r,i)}catch(p){h?f.push(p):h=p}if(i.cancelBubble||_===e||_===null)break;r=_}if(h){for(let p of f)queueMicrotask(()=>{throw p});throw h}}finally{i[ma]=e,delete i.currentTarget,bn(u),$n(d)}}}const vm=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function xm(i){return vm?.createHTML(i)??i}function Sm(i){var e=Jp("template");return e.innerHTML=xm(i.replaceAll("<!>","<!---->")),e.content}function Eu(i,e){var t=st;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function Yi(i,e){var t=(e&Tp)!==0,n=(e&Ap)!==0,s,r=!i.startsWith("<!>");return()=>{s===void 0&&(s=Sm(r?i:"<!>"+i),t||(s=ao(s)));var a=n||Ld?document.importNode(s,!0):s.cloneNode(!0);if(t){var o=ao(a),c=a.lastChild;Eu(o,c)}else Eu(a,a);return a}}function Wi(i,e){i!==null&&i.before(e)}function Ys(i,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(i.__t??=i.nodeValue)&&(i.__t=t,i.nodeValue=t+"")}function Mm(i,e){return ym(i,e)}const ga=new Map;function ym(i,{target:e,anchor:t,props:n={},events:s,context:r,intro:a=!0,transformError:o}){Yp();var c=void 0,l=im(()=>{var u=t??e.appendChild(Gr());Op(u,{pending:()=>{}},f=>{oa({});var _=vt;r&&(_.c=r),s&&(n.$$events=s),c=i(f,n)||{},la()},o);var d=new Set,h=f=>{for(var _=0;_<f.length;_++){var S=f[_];if(!d.has(S)){d.add(S);var p=gm(S);for(const E of[e,document]){var m=ga.get(E);m===void 0&&(m=new Map,ga.set(E,m));var y=m.get(S);y===void 0?(E.addEventListener(S,bu,{passive:p}),m.set(S,1)):m.set(S,y+1)}}}};return h(vo(_m)),Mu.add(h),()=>{for(var f of d)for(const p of[e,document]){var _=ga.get(p),S=_.get(f);--S==0?(p.removeEventListener(f,bu),_.delete(f),_.size===0&&ga.delete(p)):_.set(f,S)}Mu.delete(h),u!==t&&u.parentNode?.removeChild(u)}});return bm.set(c,l),c}let bm=new WeakMap;function lo(i,e){return e}function Em(i,e,t){for(var n=[],s=e.length,r,a=e.length,o=0;o<s;o++){let d=e[o];js(d,()=>{if(r){if(r.pending.delete(d),r.done.add(d),r.pending.size===0){var h=i.outrogroups;Al(vo(r.done)),h.delete(r),h.size===0&&(i.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=n.length===0&&t!==null;if(c){var l=t,u=l.parentNode;Zp(u),u.append(l),i.items.clear()}Al(e,!c)}else r={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(r)}function Al(i,e=!0){for(var t=0;t<i.length;t++)In(i[t],e)}var Tu;function co(i,e,t,n,s,r=null){var a=i,o=new Map,c=(e&md)!==0;if(c){var l=i;a=l.appendChild(Gr())}var u=null,d=Cc(()=>{var m=t();return Ec(m)?m:m==null?[]:vo(m)}),h,f=!0;function _(){p.fallback=u,Tm(p,h,a,e,n),u!==null&&(h.length===0?(u.f&pi)===0?Gd(u):(u.f^=pi,Or(u,null,a)):js(u,()=>{u=null}))}var S=Bd(()=>{h=pe(d);for(var m=h.length,y=new Set,E=gt,M=$p(),w=0;w<m;w+=1){var A=h[w],R=n(A,w),g=f?null:o.get(R);g?(g.v&&sr(g.v,A),g.i&&sr(g.i,w),M&&E.unskip_effect(g.e)):(g=Am(o,f?a:Tu??=Gr(),A,R,w,s,e,t),f||(g.e.f|=pi),o.set(R,g)),y.add(R)}if(m===0&&r&&!u&&(f?u=Hn(()=>r(a)):(u=Hn(()=>r(Tu??=Gr())),u.f|=pi)),m>y.size&&lp(),!f)if(M){for(const[v,D]of o)y.has(v)||E.skip_effect(D.e);E.oncommit(_),E.ondiscard(()=>{})}else _();pe(d)}),p={effect:S,items:o,outrogroups:null,fallback:u};f=!1}function br(i){for(;i!==null&&(i.f&Fn)===0;)i=i.next;return i}function Tm(i,e,t,n,s){var r=(n&Sp)!==0,a=e.length,o=i.items,c=br(i.effect.first),l,u=null,d,h=[],f=[],_,S,p,m;if(r)for(m=0;m<a;m+=1)_=e[m],S=s(_,m),p=o.get(S).e,(p.f&pi)===0&&(p.nodes?.a?.measure(),(d??=new Set).add(p));for(m=0;m<a;m+=1){if(_=e[m],S=s(_,m),p=o.get(S).e,i.outrogroups!==null)for(const D of i.outrogroups)D.pending.delete(p),D.done.delete(p);if((p.f&pi)!==0)if(p.f^=pi,p===c)Or(p,null,t);else{var y=u?u.next:c;p===i.effect.last&&(i.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Ri(i,u,p),Ri(i,p,y),Or(p,y,t),u=p,h=[],f=[],c=br(u.next);continue}if((p.f&dn)!==0&&(Gd(p),r&&(p.nodes?.a?.unfix(),(d??=new Set).delete(p))),p!==c){if(l!==void 0&&l.has(p)){if(h.length<f.length){var E=f[0],M;u=E.prev;var w=h[0],A=h[h.length-1];for(M=0;M<h.length;M+=1)Or(h[M],E,t);for(M=0;M<f.length;M+=1)l.delete(f[M]);Ri(i,w.prev,A.next),Ri(i,u,w),Ri(i,A,E),c=E,u=A,m-=1,h=[],f=[]}else l.delete(p),Or(p,c,t),Ri(i,p.prev,p.next),Ri(i,p,u===null?i.effect.first:u.next),Ri(i,u,p),u=p;continue}for(h=[],f=[];c!==null&&c!==p;)(l??=new Set).add(c),f.push(c),c=br(c.next);if(c===null)continue}(p.f&pi)===0&&h.push(p),u=p,c=br(p.next)}if(i.outrogroups!==null){for(const D of i.outrogroups)D.pending.size===0&&(Al(vo(D.done)),i.outrogroups?.delete(D));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||l!==void 0){var R=[];if(l!==void 0)for(p of l)(p.f&dn)===0&&R.push(p);for(;c!==null;)(c.f&dn)===0&&c!==i.fallback&&R.push(c),c=br(c.next);var g=R.length;if(g>0){var v=(n&md)!==0&&a===0?t:null;if(r){for(m=0;m<g;m+=1)R[m].nodes?.a?.measure();for(m=0;m<g;m+=1)R[m].nodes?.a?.fix()}Em(i,R,v)}}r&&Vi(()=>{if(d!==void 0)for(p of d)p.nodes?.a?.apply()})}function Am(i,e,t,n,s,r,a,o){var c=(a&vp)!==0?(a&Mp)===0?jn(t,!1,!1):ms(t):null,l=(a&xp)!==0?ms(s):null;return{v:c,i:l,e:Hn(()=>(r(e,c??t,l??s,o),()=>{i.delete(n)}))}}function Or(i,e,t){if(i.nodes)for(var n=i.nodes.start,s=i.nodes.end,r=e&&(e.f&pi)===0?e.nodes.start:t;n!==null;){var a=ua(n);if(r.before(n),n===s)return;n=a}}function Ri(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const wm=()=>performance.now(),Wn={tick:i=>requestAnimationFrame(i),now:()=>wm(),tasks:new Set};function $d(){const i=Wn.now();Wn.tasks.forEach(e=>{e.c(i)||(Wn.tasks.delete(e),e.f())}),Wn.tasks.size!==0&&Wn.tick($d)}function Rm(i){let e;return Wn.tasks.size===0&&Wn.tick($d),{promise:new Promise(t=>{Wn.tasks.add(e={c:i,f:t})}),abort(){Wn.tasks.delete(e)}}}function Cm(i,e){return i==null?null:String(i)}function Pm(i,e,t,n){var s=i.__style;if(s!==e){var r=Cm(e);r==null?i.removeAttribute("style"):i.style.cssText=r,i.__style=e}return n}function Jd(i,e,t=!1){if(i.multiple){if(e==null)return;if(!Ec(e))return wp();for(var n of i.options)n.selected=e.includes(Wr(n));return}for(n of i.options){var s=Wr(n);if(jp(s,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Dm(i){var e=new MutationObserver(()=>{Jd(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Fd(()=>{e.disconnect()})}function Lm(i,e,t=e){var n=new WeakSet,s=!0;em(i,"change",r=>{var a=r?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(a),Wr);else{var c=i.querySelector(a)??i.querySelector("option:not([disabled])");o=c&&Wr(c)}t(o),gt!==null&&n.add(gt)}),zd(()=>{var r=e();if(i===document.activeElement){var a=Sl??gt;if(n.has(a))return}if(Jd(i,r,s),s&&r===void 0){var o=i.querySelector(":checked");o!==null&&(r=Wr(o),t(r))}i.__value=r,s=!1}),Dm(i)}function Wr(i){return"__value"in i?i.__value:i.value}const Im=Symbol("is custom element"),Nm=Symbol("is html");function Au(i,e,t,n){var s=Um(i);s[e]!==(s[e]=t)&&(e==="loading"&&(i[ap]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Fm(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Um(i){return i.__attributes??={[Im]:i.nodeName.includes("-"),[Nm]:i.namespaceURI===gd}}var wu=new Map;function Fm(i){var e=i.getAttribute("is")||i.nodeName,t=wu.get(e);if(t)return t;wu.set(e,t=[]);for(var n,s=i,r=Element.prototype;r!==s;){n=cd(s);for(var a in n)n[a].set&&t.push(a);s=Tc(s)}return t}function Ru(i,e){return i===e||i?.[vi]===e}function Zr(i={},e,t,n){return zd(()=>{var s,r;return So(()=>{s=r,r=[],jt(()=>{i!==t(...r)&&(e(i,...r),s&&Ru(t(...s),i)&&e(null,...s))})}),()=>{Vi(()=>{r&&Ru(t(...r),i)&&e(null,...r)})}}),i}function Mo(i=!1){const e=vt,t=e.l.u;if(!t)return;let n=()=>pm(e.s);if(i){let s=0,r={};const a=Rc(()=>{let o=!1;const c=e.s;for(const l in c)c[l]!==r[l]&&(r[l]=c[l],o=!0);return o&&s++,s});n=()=>pe(a)}t.b.length&&nm(()=>{Cu(e,n),_l(t.b)}),El(()=>{const s=jt(()=>t.m.map(sp));return()=>{for(const r of s)typeof r=="function"&&r()}}),t.a.length&&El(()=>{Cu(e,n),_l(t.a)})}function Cu(i,e){if(i.l.s)for(const t of i.l.s)pe(t);e()}const bs=[];function Om(i,e=Za){let t=null;const n=new Set;function s(o){if(vd(i,o)&&(i=o,t)){const c=!bs.length;for(const l of n)l[1](),bs.push(l,i);if(c){for(let l=0;l<bs.length;l+=2)bs[l][0](bs[l+1]);bs.length=0}}}function r(o){s(o(i))}function a(o,c=Za){const l=[o,c];return n.add(l),n.size===1&&(t=e(s,r)||Za),o(i),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:a}}let _a=!1;function zm(i){var e=_a;try{return _a=!1,[i(),_a]}finally{_a=e}}function Bm(i,e,t,n){var s=!mr||(t&yp)!==0,r=(t&Ep)!==0,a=n,o=!0,c=()=>(o&&(o=!1,a=n),a),l;{var u=vi in i||rp in i;l=qs(i,e)?.set??(u&&e in i?y=>i[e]=y:void 0)}var d,h=!1;[d,h]=zm(()=>i[e]),d===void 0&&n!==void 0&&(d=c(),l&&(s&&fp(),l(d)));var f;if(s?f=()=>{var y=i[e];return y===void 0?c():(o=!0,y)}:f=()=>{var y=i[e];return y!==void 0&&(a=void 0),y===void 0?a:y},s&&(t&bp)===0)return f;if(l){var _=i.$$legacy;return(function(y,E){return arguments.length>0?((!s||!E||_||h)&&l(E?f():y),y):f()})}var S=!1,p=Cc(()=>(S=!1,f()));pe(p);var m=st;return(function(y,E){if(arguments.length>0){const M=E?pe(p):s&&r?Ws(y):y;return wt(p,M),S=!0,a!==void 0&&(a=M),y}return qi&&S||(m.f&_i)!==0?p.v:pe(p)})}function ha(i){vt===null&&pd(),mr&&vt.l!==null?Vm(vt).m.push(i):El(()=>{const e=jt(i);if(typeof e=="function")return e})}function km(i){vt===null&&pd(),ha(()=>()=>jt(i))}function Vm(i){var e=i.l;return e.u??={a:[],b:[],m:[]}}const Hm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Hm);Pp();function Gm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ja={exports:{}};var Wm=Ja.exports,Pu;function Xm(){return Pu||(Pu=1,(function(i,e){((t,n)=>{i.exports=n()})(Wm,function t(){var n=typeof self<"u"?self:typeof window<"u"?window:n!==void 0?n:{},s,r=!n.document&&!!n.postMessage,a=n.IS_PAPA_WORKER||!1,o={},c=0,l={};function u(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(v){var D=w(v);D.chunkSize=parseInt(D.chunkSize),v.step||v.chunk||(D.chunkSize=null),this._handle=new S(D),(this._handle.streamer=this)._config=D}).call(this,g),this.parseChunk=function(v,D){var T=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<T){let I=this._config.newline;I||(P=this._config.quoteChar||'"',I=this._handle.guessLineEndings(v,P)),v=[...v.split(I).slice(T)].join(I)}this.isFirstChunk&&R(this._config.beforeFirstChunk)&&(P=this._config.beforeFirstChunk(v))!==void 0&&(v=P),this.isFirstChunk=!1,this._halted=!1;var T=this._partialLine+v,P=(this._partialLine="",this._handle.parse(T,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(v=P.meta.cursor,T=(this._finished||(this._partialLine=T.substring(v-this._baseIndex),this._baseIndex=v),P&&P.data&&(this._rowCount+=P.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)n.postMessage({results:P,workerId:l.WORKER_ID,finished:T});else if(R(this._config.chunk)&&!D){if(this._config.chunk(P,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=P=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(P.data),this._completeResults.errors=this._completeResults.errors.concat(P.errors),this._completeResults.meta=P.meta),this._completed||!T||!R(this._config.complete)||P&&P.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||P&&P.meta.paused||this._nextChunk(),P}this._halted=!0},this._sendError=function(v){R(this._config.error)?this._config.error(v):a&&this._config.error&&n.postMessage({workerId:l.WORKER_ID,error:v,finished:!1})}}function d(g){var v;(g=g||{}).chunkSize||(g.chunkSize=l.RemoteChunkSize),u.call(this,g),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(D){this._input=D,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(v=new XMLHttpRequest,this._config.withCredentials&&(v.withCredentials=this._config.withCredentials),r||(v.onload=A(this._chunkLoaded,this),v.onerror=A(this._chunkError,this)),v.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var D,T=this._config.downloadRequestHeaders;for(D in T)v.setRequestHeader(D,T[D])}var P;this._config.chunkSize&&(P=this._start+this._config.chunkSize-1,v.setRequestHeader("Range","bytes="+this._start+"-"+P));try{v.send(this._config.downloadRequestBody)}catch(I){this._chunkError(I.message)}r&&v.status===0&&this._chunkError()}},this._chunkLoaded=function(){v.readyState===4&&(v.status<200||400<=v.status?this._chunkError():(this._start+=this._config.chunkSize||v.responseText.length,this._finished=!this._config.chunkSize||this._start>=(D=>(D=D.getResponseHeader("Content-Range"))!==null?parseInt(D.substring(D.lastIndexOf("/")+1)):-1)(v),this.parseChunk(v.responseText)))},this._chunkError=function(D){D=v.statusText||D,this._sendError(new Error(D))}}function h(g){(g=g||{}).chunkSize||(g.chunkSize=l.LocalChunkSize),u.call(this,g);var v,D,T=typeof FileReader<"u";this.stream=function(P){this._input=P,D=P.slice||P.webkitSlice||P.mozSlice,T?((v=new FileReader).onload=A(this._chunkLoaded,this),v.onerror=A(this._chunkError,this)):v=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var P=this._input,I=(this._config.chunkSize&&(I=Math.min(this._start+this._config.chunkSize,this._input.size),P=D.call(P,this._start,I)),v.readAsText(P,this._config.encoding));T||this._chunkLoaded({target:{result:I}})},this._chunkLoaded=function(P){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(P.target.result)},this._chunkError=function(){this._sendError(v.error)}}function f(g){var v;u.call(this,g=g||{}),this.stream=function(D){return v=D,this._nextChunk()},this._nextChunk=function(){var D,T;if(!this._finished)return D=this._config.chunkSize,v=D?(T=v.substring(0,D),v.substring(D)):(T=v,""),this._finished=!v,this.parseChunk(T)}}function _(g){u.call(this,g=g||{});var v=[],D=!0,T=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(P){this._input=P,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){T&&v.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),v.length?this.parseChunk(v.shift()):D=!0},this._streamData=A(function(P){try{v.push(typeof P=="string"?P:P.toString(this._config.encoding)),D&&(D=!1,this._checkIsFinished(),this.parseChunk(v.shift()))}catch(I){this._streamError(I)}},this),this._streamError=A(function(P){this._streamCleanUp(),this._sendError(P)},this),this._streamEnd=A(function(){this._streamCleanUp(),T=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function S(g){var v,D,T,P,I=Math.pow(2,53),k=-I,O=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,B=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,N=this,Q=0,V=0,ee=!1,G=!1,X=[],Y={data:[],errors:[],meta:{}};function ge($){return g.skipEmptyLines==="greedy"?$.join("").trim()==="":$.length===1&&$[0].length===0}function he(){if(Y&&T&&(ie("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),T=!1),g.skipEmptyLines&&(Y.data=Y.data.filter(function(Ue){return!ge(Ue)})),W()){let Ue=function(Se,be){R(g.transformHeader)&&(Se=g.transformHeader(Se,be)),X.push(Se)};var se=Ue;if(Y)if(Array.isArray(Y.data[0])){for(var $=0;W()&&$<Y.data.length;$++)Y.data[$].forEach(Ue);Y.data.splice(0,1)}else Y.data.forEach(Ue)}function ae(Ue,Se){for(var be=g.header?{}:[],Te=0;Te<Ue.length;Te++){var ue=Te,Ge=Ue[Te],Ge=((L,We)=>(ke=>(g.dynamicTypingFunction&&g.dynamicTyping[ke]===void 0&&(g.dynamicTyping[ke]=g.dynamicTypingFunction(ke)),(g.dynamicTyping[ke]||g.dynamicTyping)===!0))(L)?We==="true"||We==="TRUE"||We!=="false"&&We!=="FALSE"&&((ke=>{if(O.test(ke)&&(ke=parseFloat(ke),k<ke&&ke<I))return 1})(We)?parseFloat(We):B.test(We)?new Date(We):We===""?null:We):We)(ue=g.header?Te>=X.length?"__parsed_extra":X[Te]:ue,Ge=g.transform?g.transform(Ge,ue):Ge);ue==="__parsed_extra"?(be[ue]=be[ue]||[],be[ue].push(Ge)):be[ue]=Ge}return g.header&&(Te>X.length?ie("FieldMismatch","TooManyFields","Too many fields: expected "+X.length+" fields but parsed "+Te,V+Se):Te<X.length&&ie("FieldMismatch","TooFewFields","Too few fields: expected "+X.length+" fields but parsed "+Te,V+Se)),be}var le;Y&&(g.header||g.dynamicTyping||g.transform)&&(le=1,!Y.data.length||Array.isArray(Y.data[0])?(Y.data=Y.data.map(ae),le=Y.data.length):Y.data=ae(Y.data,0),g.header&&Y.meta&&(Y.meta.fields=X),V+=le)}function W(){return g.header&&X.length===0}function ie($,ae,le,se){$={type:$,code:ae,message:le},se!==void 0&&($.row=se),Y.errors.push($)}R(g.step)&&(P=g.step,g.step=function($){Y=$,W()?he():(he(),Y.data.length!==0&&(Q+=$.data.length,g.preview&&Q>g.preview?D.abort():(Y.data=Y.data[0],P(Y,N))))}),this.parse=function($,ae,le){var se=g.quoteChar||'"',se=(g.newline||(g.newline=this.guessLineEndings($,se)),T=!1,g.delimiter?R(g.delimiter)&&(g.delimiter=g.delimiter($),Y.meta.delimiter=g.delimiter):((se=((Ue,Se,be,Te,ue)=>{var Ge,L,We,ke;ue=ue||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var nt=0;nt<ue.length;nt++){for(var Me,C=ue[nt],x=0,F=0,Z=0,ne=(We=void 0,new m({comments:Te,delimiter:C,newline:Se,preview:10}).parse(Ue)),J=0;J<ne.data.length;J++)be&&ge(ne.data[J])?Z++:(Me=ne.data[J].length,F+=Me,We===void 0?We=Me:0<Me&&(x+=Math.abs(Me-We),We=Me));0<ne.data.length&&(F/=ne.data.length-Z),(L===void 0||x<=L)&&(ke===void 0||ke<F)&&1.99<F&&(L=x,Ge=C,ke=F)}return{successful:!!(g.delimiter=Ge),bestDelimiter:Ge}})($,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=se.bestDelimiter:(T=!0,g.delimiter=l.DefaultDelimiter),Y.meta.delimiter=g.delimiter),w(g));return g.preview&&g.header&&se.preview++,v=$,D=new m(se),Y=D.parse(v,ae,le),he(),ee?{meta:{paused:!0}}:Y||{meta:{paused:!1}}},this.paused=function(){return ee},this.pause=function(){ee=!0,D.abort(),v=R(g.chunk)?"":v.substring(D.getCharIndex())},this.resume=function(){N.streamer._halted?(ee=!1,N.streamer.parseChunk(v,!0)):setTimeout(N.resume,3)},this.aborted=function(){return G},this.abort=function(){G=!0,D.abort(),Y.meta.aborted=!0,R(g.complete)&&g.complete(Y),v=""},this.guessLineEndings=function(Ue,se){Ue=Ue.substring(0,1048576);var se=new RegExp(p(se)+"([^]*?)"+p(se),"gm"),le=(Ue=Ue.replace(se,"")).split("\r"),se=Ue.split(`
`),Ue=1<se.length&&se[0].length<le[0].length;if(le.length===1||Ue)return`
`;for(var Se=0,be=0;be<le.length;be++)le[be][0]===`
`&&Se++;return Se>=le.length/2?`\r
`:"\r"}}function p(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(g){var v=(g=g||{}).delimiter,D=g.newline,T=g.comments,P=g.step,I=g.preview,k=g.fastMode,O=null,B=!1,N=g.quoteChar==null?'"':g.quoteChar,Q=N;if(g.escapeChar!==void 0&&(Q=g.escapeChar),(typeof v!="string"||-1<l.BAD_DELIMITERS.indexOf(v))&&(v=","),T===v)throw new Error("Comment character same as delimiter");T===!0?T="#":(typeof T!="string"||-1<l.BAD_DELIMITERS.indexOf(T))&&(T=!1),D!==`
`&&D!=="\r"&&D!==`\r
`&&(D=`
`);var V=0,ee=!1;this.parse=function(G,X,Y){if(typeof G!="string")throw new Error("Input must be a string");var ge=G.length,he=v.length,W=D.length,ie=T.length,$=R(P),ae=[],le=[],se=[],Ue=V=0;if(!G)return x();if(k||k!==!1&&G.indexOf(N)===-1){for(var Se=G.split(D),be=0;be<Se.length;be++){if(se=Se[be],V+=se.length,be!==Se.length-1)V+=D.length;else if(Y)return x();if(!T||se.substring(0,ie)!==T){if($){if(ae=[],ke(se.split(v)),F(),ee)return x()}else ke(se.split(v));if(I&&I<=be)return ae=ae.slice(0,I),x(!0)}}return x()}for(var Te=G.indexOf(v,V),ue=G.indexOf(D,V),Ge=new RegExp(p(Q)+p(N),"g"),L=G.indexOf(N,V);;)if(G[V]===N)for(L=V,V++;;){if((L=G.indexOf(N,L+1))===-1)return Y||le.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ae.length,index:V}),Me();if(L===ge-1)return Me(G.substring(V,L).replace(Ge,N));if(N===Q&&G[L+1]===Q)L++;else if(N===Q||L===0||G[L-1]!==Q){Te!==-1&&Te<L+1&&(Te=G.indexOf(v,L+1));var We=nt((ue=ue!==-1&&ue<L+1?G.indexOf(D,L+1):ue)===-1?Te:Math.min(Te,ue));if(G.substr(L+1+We,he)===v){se.push(G.substring(V,L).replace(Ge,N)),G[V=L+1+We+he]!==N&&(L=G.indexOf(N,V)),Te=G.indexOf(v,V),ue=G.indexOf(D,V);break}if(We=nt(ue),G.substring(L+1+We,L+1+We+W)===D){if(se.push(G.substring(V,L).replace(Ge,N)),C(L+1+We+W),Te=G.indexOf(v,V),L=G.indexOf(N,V),$&&(F(),ee))return x();if(I&&ae.length>=I)return x(!0);break}le.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ae.length,index:V}),L++}}else if(T&&se.length===0&&G.substring(V,V+ie)===T){if(ue===-1)return x();V=ue+W,ue=G.indexOf(D,V),Te=G.indexOf(v,V)}else if(Te!==-1&&(Te<ue||ue===-1))se.push(G.substring(V,Te)),V=Te+he,Te=G.indexOf(v,V);else{if(ue===-1)break;if(se.push(G.substring(V,ue)),C(ue+W),$&&(F(),ee))return x();if(I&&ae.length>=I)return x(!0)}return Me();function ke(Z){ae.push(Z),Ue=V}function nt(Z){var ne=0;return ne=Z!==-1&&(Z=G.substring(L+1,Z))&&Z.trim()===""?Z.length:ne}function Me(Z){return Y||(Z===void 0&&(Z=G.substring(V)),se.push(Z),V=ge,ke(se),$&&F()),x()}function C(Z){V=Z,ke(se),se=[],ue=G.indexOf(D,V)}function x(Z){if(g.header&&!X&&ae.length&&!B){var ne=ae[0],J=Object.create(null),Ae=new Set(ne);let fe=!1;for(let Re=0;Re<ne.length;Re++){let Ie=ne[Re];if(J[Ie=R(g.transformHeader)?g.transformHeader(Ie,Re):Ie]){let re,ce=J[Ie];for(;re=Ie+"_"+ce,ce++,Ae.has(re););Ae.add(re),ne[Re]=re,J[Ie]++,fe=!0,(O=O===null?{}:O)[re]=Ie}else J[Ie]=1,ne[Re]=Ie;Ae.add(Ie)}fe&&console.warn("Duplicate headers found and renamed."),B=!0}return{data:ae,errors:le,meta:{delimiter:v,linebreak:D,aborted:ee,truncated:!!Z,cursor:Ue+(X||0),renamedHeaders:O}}}function F(){P(x()),ae=[],le=[]}},this.abort=function(){ee=!0},this.getCharIndex=function(){return V}}function y(g){var v=g.data,D=o[v.workerId],T=!1;if(v.error)D.userError(v.error,v.file);else if(v.results&&v.results.data){var P={abort:function(){T=!0,E(v.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:M,resume:M};if(R(D.userStep)){for(var I=0;I<v.results.data.length&&(D.userStep({data:v.results.data[I],errors:v.results.errors,meta:v.results.meta},P),!T);I++);delete v.results}else R(D.userChunk)&&(D.userChunk(v.results,P,v.file),delete v.results)}v.finished&&!T&&E(v.workerId,v.results)}function E(g,v){var D=o[g];R(D.userComplete)&&D.userComplete(v),D.terminate(),delete o[g]}function M(){throw new Error("Not implemented.")}function w(g){if(typeof g!="object"||g===null)return g;var v,D=Array.isArray(g)?[]:{};for(v in g)D[v]=w(g[v]);return D}function A(g,v){return function(){g.apply(v,arguments)}}function R(g){return typeof g=="function"}return l.parse=function(g,v){var D=(v=v||{}).dynamicTyping||!1;if(R(D)&&(v.dynamicTypingFunction=D,D={}),v.dynamicTyping=D,v.transform=!!R(v.transform)&&v.transform,!v.worker||!l.WORKERS_SUPPORTED)return D=null,l.NODE_STREAM_INPUT,typeof g=="string"?(g=(T=>T.charCodeAt(0)!==65279?T:T.slice(1))(g),D=new(v.download?d:f)(v)):g.readable===!0&&R(g.read)&&R(g.on)?D=new _(v):(n.File&&g instanceof File||g instanceof Object)&&(D=new h(v)),D.stream(g);(D=(()=>{var T;return!!l.WORKERS_SUPPORTED&&(T=(()=>{var P=n.URL||n.webkitURL||null,I=t.toString();return l.BLOB_URL||(l.BLOB_URL=P.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",I,")();"],{type:"text/javascript"})))})(),(T=new n.Worker(T)).onmessage=y,T.id=c++,o[T.id]=T)})()).userStep=v.step,D.userChunk=v.chunk,D.userComplete=v.complete,D.userError=v.error,v.step=R(v.step),v.chunk=R(v.chunk),v.complete=R(v.complete),v.error=R(v.error),delete v.worker,D.postMessage({input:g,config:v,workerId:D.id})},l.unparse=function(g,v){var D=!1,T=!0,P=",",I=`\r
`,k='"',O=k+k,B=!1,N=null,Q=!1,V=((()=>{if(typeof v=="object"){if(typeof v.delimiter!="string"||l.BAD_DELIMITERS.filter(function(X){return v.delimiter.indexOf(X)!==-1}).length||(P=v.delimiter),typeof v.quotes!="boolean"&&typeof v.quotes!="function"&&!Array.isArray(v.quotes)||(D=v.quotes),typeof v.skipEmptyLines!="boolean"&&typeof v.skipEmptyLines!="string"||(B=v.skipEmptyLines),typeof v.newline=="string"&&(I=v.newline),typeof v.quoteChar=="string"&&(k=v.quoteChar),typeof v.header=="boolean"&&(T=v.header),Array.isArray(v.columns)){if(v.columns.length===0)throw new Error("Option columns is empty");N=v.columns}v.escapeChar!==void 0&&(O=v.escapeChar+k),v.escapeFormulae instanceof RegExp?Q=v.escapeFormulae:typeof v.escapeFormulae=="boolean"&&v.escapeFormulae&&(Q=/^[=+\-@\t\r].*$/)}})(),new RegExp(p(k),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return ee(null,g,B);if(typeof g[0]=="object")return ee(N||Object.keys(g[0]),g,B)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||N),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),ee(g.fields||[],g.data||[],B);throw new Error("Unable to serialize unrecognized input");function ee(X,Y,ge){var he="",W=(typeof X=="string"&&(X=JSON.parse(X)),typeof Y=="string"&&(Y=JSON.parse(Y)),Array.isArray(X)&&0<X.length),ie=!Array.isArray(Y[0]);if(W&&T){for(var $=0;$<X.length;$++)0<$&&(he+=P),he+=G(X[$],$);0<Y.length&&(he+=I)}for(var ae=0;ae<Y.length;ae++){var le=(W?X:Y[ae]).length,se=!1,Ue=W?Object.keys(Y[ae]).length===0:Y[ae].length===0;if(ge&&!W&&(se=ge==="greedy"?Y[ae].join("").trim()==="":Y[ae].length===1&&Y[ae][0].length===0),ge==="greedy"&&W){for(var Se=[],be=0;be<le;be++){var Te=ie?X[be]:be;Se.push(Y[ae][Te])}se=Se.join("").trim()===""}if(!se){for(var ue=0;ue<le;ue++){0<ue&&!Ue&&(he+=P);var Ge=W&&ie?X[ue]:ue;he+=G(Y[ae][Ge],ue)}ae<Y.length-1&&(!ge||0<le&&!Ue)&&(he+=I)}}return he}function G(X,Y){var ge,he;return X==null?"":X.constructor===Date?JSON.stringify(X).slice(1,25):(he=!1,Q&&typeof X=="string"&&Q.test(X)&&(X="'"+X,he=!0),ge=X.toString().replace(V,O),(he=he||D===!0||typeof D=="function"&&D(X,Y)||Array.isArray(D)&&D[Y]||((W,ie)=>{for(var $=0;$<ie.length;$++)if(-1<W.indexOf(ie[$]))return!0;return!1})(ge,l.BAD_DELIMITERS)||-1<ge.indexOf(P)||ge.charAt(0)===" "||ge.charAt(ge.length-1)===" ")?k+ge+k:ge)}},l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!n.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=m,l.ParserHandle=S,l.NetworkStreamer=d,l.FileStreamer=h,l.StringStreamer=f,l.ReadableStreamStreamer=_,n.jQuery&&((s=n.jQuery).fn.parse=function(g){var v=g.config||{},D=[];return this.each(function(I){if(!(s(this).prop("tagName").toUpperCase()==="INPUT"&&s(this).attr("type").toLowerCase()==="file"&&n.FileReader)||!this.files||this.files.length===0)return!0;for(var k=0;k<this.files.length;k++)D.push({file:this.files[k],inputElem:this,instanceConfig:s.extend({},v)})}),T(),this;function T(){if(D.length===0)R(g.complete)&&g.complete();else{var I,k,O,B,N=D[0];if(R(g.before)){var Q=g.before(N.file,N.inputElem);if(typeof Q=="object"){if(Q.action==="abort")return I="AbortError",k=N.file,O=N.inputElem,B=Q.reason,void(R(g.error)&&g.error({name:I},k,O,B));if(Q.action==="skip")return void P();typeof Q.config=="object"&&(N.instanceConfig=s.extend(N.instanceConfig,Q.config))}else if(Q==="skip")return void P()}var V=N.instanceConfig.complete;N.instanceConfig.complete=function(ee){R(V)&&V(ee,N.file,N.inputElem),P()},l.parse(N.file,N.instanceConfig)}}function P(){D.splice(0,1),T()}}),a&&(n.onmessage=function(g){g=g.data,l.WORKER_ID===void 0&&g&&(l.WORKER_ID=g.workerId),typeof g.input=="string"?n.postMessage({workerId:l.WORKER_ID,results:l.parse(g.input,g.config),finished:!0}):(n.File&&g.input instanceof File||g.input instanceof Object)&&(g=l.parse(g.input,g.config))&&n.postMessage({workerId:l.WORKER_ID,results:g,finished:!0})}),(d.prototype=Object.create(u.prototype)).constructor=d,(h.prototype=Object.create(u.prototype)).constructor=h,(f.prototype=Object.create(f.prototype)).constructor=f,(_.prototype=Object.create(u.prototype)).constructor=_,l})})(Ja)),Ja.exports}var qm=Xm();const jm=Gm(qm);const Nc="183",Ks={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ym=0,Du=1,Km=2,Qa=1,Qd=2,zr=3,Mi=0,rn=1,sn=2,xi=0,Zs=1,Lu=2,Iu=3,Nu=4,Zm=5,rs=100,$m=101,Jm=102,Qm=103,eg=104,tg=200,ng=201,ig=202,sg=203,wl=204,Rl=205,rg=206,ag=207,og=208,lg=209,cg=210,ug=211,hg=212,dg=213,fg=214,Cl=0,Pl=1,Dl=2,rr=3,Ll=4,Il=5,Nl=6,Ul=7,ef=0,pg=1,mg=2,Yn=0,tf=1,nf=2,sf=3,rf=4,af=5,of=6,lf=7,Uu="attached",gg="detached",cf=300,_s=301,ar=302,Co=303,Po=304,yo=306,or=1e3,Xn=1001,uo=1002,Ct=1003,uf=1004,Br=1005,Pt=1006,eo=1007,mi=1008,un=1009,hf=1010,df=1011,$r=1012,Uc=1013,Jn=1014,_n=1015,yi=1016,Fc=1017,Oc=1018,Jr=1020,ff=35902,pf=35899,mf=1021,gf=1022,vn=1023,bi=1026,us=1027,zc=1028,Bc=1029,lr=1030,kc=1031,Vc=1033,to=33776,no=33777,io=33778,so=33779,Fl=35840,Ol=35841,zl=35842,Bl=35843,kl=36196,Vl=37492,Hl=37496,Gl=37488,Wl=37489,Xl=37490,ql=37491,jl=37808,Yl=37809,Kl=37810,Zl=37811,$l=37812,Jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,oc=36492,lc=36494,cc=36495,uc=36283,hc=36284,dc=36285,fc=36286,Qr=2300,ea=2301,Do=2302,Fu=2303,Ou=2400,zu=2401,Bu=2402,_g=2500,vg=0,_f=1,pc=2,xg=3200,vf=0,Sg=1,Oi="",Bt="srgb",Jt="srgb-linear",ho="linear",ot="srgb",Es=7680,ku=519,Mg=512,yg=513,bg=514,Hc=515,Eg=516,Tg=517,Gc=518,Ag=519,mc=35044,Vu="300 es",qn=2e3,ta=2001;function wg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cg(){const i=na("canvas");return i.style.display="block",i}const Hu={};function fo(...i){const e="THREE."+i.shift();console.log(e,...i)}function xf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=xf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=xf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function po(...i){const e=i.join(" ");e in Hu||(Hu[e]=!0,Oe(...i))}function Pg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Dg={[Cl]:Pl,[Dl]:Nl,[Ll]:Ul,[rr]:Il,[Pl]:Cl,[Nl]:Dl,[Ul]:Ll,[Il]:rr};class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gu=1234567;const Xr=Math.PI/180,cr=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function Lg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ig(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Ng(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function Ug(i,e=1){return e-Math.abs(Wc(i,e*2)-e)}function Fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bg(i,e){return i+Math.random()*(e-i)}function kg(i){return i*(.5-Math.random())}function Vg(i){i!==void 0&&(Gu=i);let e=Gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hg(i){return i*Xr}function Gg(i){return i*cr}function Wg(i){return(i&i-1)===0&&i!==0}function Xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jg(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*f,o*u,o*l);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $s={DEG2RAD:Xr,RAD2DEG:cr,generateUUID:Nn,clamp:Je,euclideanModulo:Wc,mapLinear:Lg,inverseLerp:Ig,lerp:qr,damp:Ng,pingpong:Ug,smoothstep:Fg,smootherstep:Og,randInt:zg,randFloat:Bg,randFloatSpread:kg,seededRandom:Vg,degToRad:Hg,radToDeg:Gg,isPowerOfTwo:Wg,ceilPowerOfTwo:Xg,floorPowerOfTwo:qg,setQuaternionFromProperEuler:jg,normalize:lt,denormalize:Pn};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class En{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||c!==h||l!==f||u!==_){let p=c*h+l*f+u*_+d*S;p<0&&(h=-h,f=-f,_=-_,S=-S,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,c=c*m+h*o,l=l*m+f*o,u=u*m+_*o,d=d*m+S*o}else{c=c*m+h*o,l=l*m+f*o,u=u*m+_*o,d=d*m+S*o;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*d+c*f-l*h,e[t+1]=c*_+u*h+l*d-o*f,e[t+2]=l*_+u*f+o*h-c*d,e[t+3]=u*_-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"YZX":this._x=h*u*d+l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d-h*f*_;break;case"XZY":this._x=h*u*d-l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d+h*f*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new U,Wu=new En;class Ye{constructor(e,t,n,s,r,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],S=s[0],p=s[3],m=s[6],y=s[1],E=s[4],M=s[7],w=s[2],A=s[5],R=s[8];return r[0]=a*S+o*y+c*w,r[3]=a*p+o*E+c*A,r[6]=a*m+o*M+c*R,r[1]=l*S+u*y+d*w,r[4]=l*p+u*E+d*A,r[7]=l*m+u*M+d*R,r[2]=h*S+f*y+_*w,r[5]=h*p+f*E+_*A,r[8]=h*m+f*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,_=t*d+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(s*l-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(u*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Ye,Xu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yg(){const i={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jt]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}const et=Yg();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class Kg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=na("canvas")),Ts.width=e.width,Ts.height=e.height;const s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zg=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(No(s[a].image)):r.push(No(s[a]))}else r=No(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function No(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let $g=0;const Uo=new U;class Lt extends xs{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Xn,s=Xn,r=Pt,a=mi,o=vn,c=un,l=Lt.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Nn(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=cf;Lt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],_=c[9],S=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,M=(f+1)/2,w=(m+1)/2,A=(u+h)/4,R=(d+S)/4,g=(_+p)/4;return E>M&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=R/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=g/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=g/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(d-S)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jg extends xs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Lt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Jg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sf extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qg extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class je{constructor(e,t,n,s,r,a,o,c,l,u,d,h,f,_,S,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,h,f,_,S,p)}set(e,t,n,s,r,a,o,c,l,u,d,h,f,_,S,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,f=a*d,_=o*u,S=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=_+f*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,_=l*u,S=l*d;t[0]=h+S*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,_=l*u,S=l*d;t[0]=h-S*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,f=a*d,_=o*u,S=o*d;t[0]=c*u,t[4]=_*l-f,t[8]=h*l+S,t[1]=c*d,t[5]=S*l+h,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*u,t[4]=S-h*d,t[8]=_*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+_,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*c,f=a*l,_=o*c,S=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+S,t[5]=a*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Ci.crossVectors(n,on),Ci.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ci.crossVectors(n,on)),Ci.normalize(),va.crossVectors(on,Ci),s[0]=Ci.x,s[4]=va.x,s[8]=on.x,s[1]=Ci.y,s[5]=va.y,s[9]=on.y,s[2]=Ci.z,s[6]=va.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],S=n[6],p=n[10],m=n[14],y=n[3],E=n[7],M=n[11],w=n[15],A=s[0],R=s[4],g=s[8],v=s[12],D=s[1],T=s[5],P=s[9],I=s[13],k=s[2],O=s[6],B=s[10],N=s[14],Q=s[3],V=s[7],ee=s[11],G=s[15];return r[0]=a*A+o*D+c*k+l*Q,r[4]=a*R+o*T+c*O+l*V,r[8]=a*g+o*P+c*B+l*ee,r[12]=a*v+o*I+c*N+l*G,r[1]=u*A+d*D+h*k+f*Q,r[5]=u*R+d*T+h*O+f*V,r[9]=u*g+d*P+h*B+f*ee,r[13]=u*v+d*I+h*N+f*G,r[2]=_*A+S*D+p*k+m*Q,r[6]=_*R+S*T+p*O+m*V,r[10]=_*g+S*P+p*B+m*ee,r[14]=_*v+S*I+p*N+m*G,r[3]=y*A+E*D+M*k+w*Q,r[7]=y*R+E*T+M*O+w*V,r[11]=y*g+E*P+M*B+w*ee,r[15]=y*v+E*I+M*N+w*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],S=e[7],p=e[11],m=e[15],y=c*f-l*h,E=o*f-l*d,M=o*h-c*d,w=a*f-l*u,A=a*h-c*u,R=a*d-o*u;return t*(S*y-p*E+m*M)-n*(_*y-p*w+m*A)+s*(_*E-S*w+m*R)-r*(_*M-S*A+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],S=e[13],p=e[14],m=e[15],y=t*o-n*a,E=t*c-s*a,M=t*l-r*a,w=n*c-s*o,A=n*l-r*o,R=s*l-r*c,g=u*S-d*_,v=u*p-h*_,D=u*m-f*_,T=d*p-h*S,P=d*m-f*S,I=h*m-f*p,k=y*I-E*P+M*T+w*D-A*v+R*g;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return e[0]=(o*I-c*P+l*T)*O,e[1]=(s*P-n*I-r*T)*O,e[2]=(S*R-p*A+m*w)*O,e[3]=(h*A-d*R-f*w)*O,e[4]=(c*D-a*I-l*v)*O,e[5]=(t*I-s*D+r*v)*O,e[6]=(p*M-_*R-m*E)*O,e[7]=(u*R-h*M+f*E)*O,e[8]=(a*P-o*D+l*g)*O,e[9]=(n*D-t*P-r*g)*O,e[10]=(_*A-S*M+m*y)*O,e[11]=(d*M-u*A-f*y)*O,e[12]=(o*v-a*T-c*g)*O,e[13]=(t*T-n*v+s*g)*O,e[14]=(S*E-_*w-p*y)*O,e[15]=(u*w-d*E+h*y)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,_=r*d,S=a*u,p=a*d,m=o*d,y=c*l,E=c*u,M=c*d,w=n.x,A=n.y,R=n.z;return s[0]=(1-(S+m))*w,s[1]=(f+M)*w,s[2]=(_-E)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(h+m))*A,s[6]=(p+y)*A,s[7]=0,s[8]=(_+E)*R,s[9]=(p-y)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),c=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);const l=1/a,u=1/o,d=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let _,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===qn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ta)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let _,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===qn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===ta)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new U,An=new je,e_=new U(0,0,0),t_=new U(1,1,1),Ci=new U,va=new U,on=new U,ju=new je,Yu=new En;class Qn{constructor(e=0,t=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const Ku=new U,ws=new En,oi=new je,xa=new U,Er=new U,i_=new U,s_=new En,Zu=new U(1,0,0),$u=new U(0,1,0),Ju=new U(0,0,1),Qu={type:"added"},r_={type:"removed"},Rs={type:"childadded",child:null},Fo={type:"childremoved",child:null};class xt extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new U,t=new Qn,n=new En,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ye}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Zu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xa.copy(e):xa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Er,xa,this.up):oi.lookAt(xa,Er,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(oi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}xt.DEFAULT_UP=new U(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),m=this._getHandJoint(l,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Wc(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zo(a,r,e+1/3),this.g=zo(a,r,e),this.b=zo(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return et.workingToColorSpace(Xt.copy(this),e),Math.round(Je(Xt.r*255,0,255))*65536+Math.round(Je(Xt.g*255,0,255))*256+Math.round(Je(Xt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Bt){et.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Sa);const n=qr(Pi.h,Sa.h,t),s=qr(Pi.s,Sa.s,t),r=qr(Pi.l,Sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new He;He.NAMES=Mf;class jc extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new U,li=new U,Bo=new U,ci=new U,Cs=new U,Ps=new U,eh=new U,ko=new U,Vo=new U,Ho=new U,Go=new _t,Wo=new _t,Xo=new _t;class gn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),li.subVectors(n,t),Bo.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(li),c=wn.dot(Bo),l=li.dot(li),u=li.dot(Bo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),li.subVectors(e,t),wn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),wn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Cs.subVectors(s,n),Ps.subVectors(r,n),ko.subVectors(e,n);const c=Cs.dot(ko),l=Ps.dot(ko);if(c<=0&&l<=0)return t.copy(n);Vo.subVectors(e,s);const u=Cs.dot(Vo),d=Ps.dot(Vo);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Cs,a);Ho.subVectors(e,r);const f=Cs.dot(Ho),_=Ps.dot(Ho);if(_>=0&&f<=_)return t.copy(r);const S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ps,o);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return eh.subVectors(r,s),o=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(eh,o);const m=1/(p+S+h);return a=S*m,o=h*m,t.copy(n).addScaledVector(Cs,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ni{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),ya.subVectors(this.max,Tr),Ds.subVectors(e.a,Tr),Ls.subVectors(e.b,Tr),Is.subVectors(e.c,Tr),Di.subVectors(Ls,Ds),Li.subVectors(Is,Ls),Ji.subVectors(Ds,Is);let t=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Li.z,0,-Li.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-Ji.y,Ji.x,0];return!qo(t,Ds,Ls,Is,ya)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Ds,Ls,Is,ya))?!1:(ba.crossVectors(Di,Li),t=[ba.x,ba.y,ba.z],qo(t,Ds,Ls,Is,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,Ma=new ni,Ds=new U,Ls=new U,Is=new U,Di=new U,Li=new U,Ji=new U,Tr=new U,ya=new U,ba=new U,Qi=new U;function qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);const o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Et=new U,Ea=new Be;let o_=0;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}}class yf extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bf extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}const l_=new ni,Ar=new U,jo=new U;class ii{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):l_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(jo)),this.expandByPoint(Ar.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let c_=0;const fn=new je,Yo=new xt,Ns=new U,ln=new ni,wr=new ni,Ft=new U;class mt extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?bf:yf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ln.min,wr.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,wr.max),ln.expandByPoint(Ft)):(ln.expandByPoint(wr.min),ln.expandByPoint(wr.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ft.fromBufferAttribute(o,l),c&&(Ns.fromBufferAttribute(e,l),Ft.add(Ns)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let g=0;g<n.count;g++)o[g]=new U,c[g]=new U;const l=new U,u=new U,d=new U,h=new Be,f=new Be,_=new Be,S=new U,p=new U;function m(g,v,D){l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,g),f.fromBufferAttribute(r,v),_.fromBufferAttribute(r,D),u.sub(l),d.sub(l),f.sub(h),_.sub(h);const T=1/(f.x*_.y-_.x*f.y);isFinite(T)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(T),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(T),o[g].add(S),o[v].add(S),o[D].add(S),c[g].add(p),c[v].add(p),c[D].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let g=0,v=y.length;g<v;++g){const D=y[g],T=D.start,P=D.count;for(let I=T,k=T+P;I<k;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new U,M=new U,w=new U,A=new U;function R(g){w.fromBufferAttribute(s,g),A.copy(w);const v=o[g];E.copy(v),E.sub(w.multiplyScalar(w.dot(v))).normalize(),M.crossVectors(A,v);const T=M.dot(c[g])<0?-1:1;a.setXYZW(g,E.x,E.y,E.z,T)}for(let g=0,v=y.length;g<v;++g){const D=y[g],T=D.start,P=D.count;for(let I=T,k=T+P;I<k;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,_=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*u;for(let m=0;m<u;m++)h[_++]=l[f++]}return new $t(h,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ef{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new U;class ia{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ia(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let u_=0;class Un extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Zs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Rl,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ds extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const Rr=new U,Fs=new U,Os=new U,zs=new Be,Cr=new Be,Tf=new je,Ta=new U,Pr=new U,Aa=new U,th=new Be,Ko=new Be,nh=new Be;class Qs extends xt{constructor(e=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ef(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new ia(n,3,0,!1)),Us.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=Us,this.material=e,this.center=new Be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Tf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;wa(Ta.set(-.5,-.5,0),Os,a,Fs,s,r),wa(Pr.set(.5,-.5,0),Os,a,Fs,s,r),wa(Aa.set(.5,.5,0),Os,a,Fs,s,r),th.set(0,0),Ko.set(1,0),nh.set(1,1);let o=e.ray.intersectTriangle(Ta,Pr,Aa,!1,Rr);if(o===null&&(wa(Pr.set(-.5,.5,0),Os,a,Fs,s,r),Ko.set(0,1),o=e.ray.intersectTriangle(Ta,Aa,Pr,!1,Rr),o===null))return;const c=e.ray.origin.distanceTo(Rr);c<e.near||c>e.far||t.push({distance:c,point:Rr.clone(),uv:gn.getInterpolation(Rr,Ta,Pr,Aa,th,Ko,nh,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wa(i,e,t,n,s,r){zs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*zs.x-s*zs.y,Cr.y=s*zs.x+r*zs.y):Cr.copy(zs),i.copy(e),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(Tf)}const hi=new U,Zo=new U,Ra=new U,Ii=new U,$o=new U,Ca=new U,Jo=new U;class _r{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zo.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Zo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ra),o=Ii.dot(this.direction),c=-Ii.dot(Ra),l=Ii.lengthSq(),u=Math.abs(1-a*a);let d,h,f,_;if(u>0)if(d=a*c-o,h=a*o-c,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zo).addScaledVector(Ra,h),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){$o.subVectors(t,e),Ca.subVectors(n,e),Jo.crossVectors($o,Ca);let a=this.direction.dot(Jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const c=o*this.direction.dot(Ca.crossVectors(Ii,Ca));if(c<0)return null;const l=o*this.direction.dot($o.cross(Ii));if(l<0||c+l>a)return null;const u=-o*Ii.dot(Jo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ih=new je,es=new _r,Pa=new ii,sh=new U,Da=new U,La=new U,Ia=new U,Qo=new U,Na=new U,rh=new U,Ua=new U;class rt extends xt{constructor(e=new mt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(Qo.fromBufferAttribute(d,e),a?Na.addScaledVector(Qo,u):Na.addScaledVector(Qo.sub(t),u))}t.add(Na)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Pa.containsPoint(es.origin)===!1&&(es.intersectSphere(Pa,sh)===null||es.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),es.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const p=h[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,w=E;M<w;M+=3){const A=o.getX(M),R=o.getX(M+1),g=o.getX(M+2);s=Fa(this,m,e,n,l,u,d,A,R,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){const y=o.getX(p),E=o.getX(p+1),M=o.getX(p+2);s=Fa(this,a,e,n,l,u,d,y,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const p=h[_],m=a[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,w=E;M<w;M+=3){const A=M,R=M+1,g=M+2;s=Fa(this,m,e,n,l,u,d,A,R,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){const y=p,E=p+1,M=p+2;s=Fa(this,a,e,n,l,u,d,y,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function h_(i,e,t,n,s,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Mi,o),c===null)return null;Ua.copy(o),Ua.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ua);return l<t.near||l>t.far?null:{distance:l,point:Ua.clone(),object:i}}function Fa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Da),i.getVertexPosition(c,La),i.getVertexPosition(l,Ia);const u=h_(i,e,t,n,Da,La,Ia,rh);if(u){const d=new U;gn.getBarycoord(rh,Da,La,Ia,d),s&&(u.uv=gn.getInterpolatedAttribute(s,o,c,l,d,new Be)),r&&(u.uv1=gn.getInterpolatedAttribute(r,o,c,l,d,new Be)),a&&(u.normal=gn.getInterpolatedAttribute(a,o,c,l,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};gn.getNormal(Da,La,Ia,h.normal),u.face=h,u.barycoord=d}return u}const ah=new U,oh=new _t,lh=new _t,d_=new U,ch=new je,Oa=new U,el=new ii,uh=new je,tl=new _r;class f_ extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uu,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oa),this.boundingBox.expandByPoint(Oa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oa),this.boundingSphere.expandByPoint(Oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(s),e.ray.intersectsSphere(el)!==!1&&(uh.copy(s).invert(),tl.copy(e.ray).applyMatrix4(uh),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;oh.fromBufferAttribute(s.attributes.skinIndex,e),lh.fromBufferAttribute(s.attributes.skinWeight,e),ah.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=lh.getComponent(r);if(a!==0){const o=oh.getComponent(r);ch.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(d_.copy(ah).applyMatrix4(ch),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Af extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yc extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ct,u=Ct,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new je,p_=new je;class Kc{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:p_;hh.multiplyMatrices(o,t[r]),hh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yc(t,e,e,vn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Oe("Skeleton: No bone found with UUID:",r),a=new Af),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class gc extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new je,dh=new je,za=[],fh=new ni,m_=new je,Dr=new rt,Lr=new ii;class g_ extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),fh.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Lr.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),dh.multiplyMatrices(n,Bs),Dr.matrixWorld=dh,Dr.raycast(e,za);for(let a=0,o=za.length;a<o;a++){const c=za[a];c.instanceId=r,c.object=this,t.push(c)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(s*this.count),s,this.count,zc,_n));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nl=new U,__=new U,v_=new Ye;class Fi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=nl.subVectors(n,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v_.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ii,x_=new Be(.5,.5),Ba=new U;class Zc{constructor(e=new Fi,t=new Fi,n=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],_=r[8],S=r[9],p=r[10],m=r[11],y=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,m-_,w-y).normalize(),s[1].setComponents(l+a,f+u,m+_,w+y).normalize(),s[2].setComponents(l+o,f+d,m+S,w+E).normalize(),s[3].setComponents(l-o,f-d,m-S,w-E).normalize(),n)s[4].setComponents(c,h,p,M).normalize(),s[5].setComponents(l-c,f-h,m-p,w-M).normalize();else if(s[4].setComponents(l-c,f-h,m-p,w-M).normalize(),t===qn)s[5].setComponents(l+c,f+h,m+p,w+M).normalize();else if(t===ta)s[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=x_.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xn extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new U,go=new U,ph=new je,Ir=new _r,ka=new ii,il=new U,mh=new U;class hn extends xt{constructor(e=new mt,t=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)mo.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);e.setAttribute("lineDistance",new Tt(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;ph.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=l){const m=u.getX(S),y=u.getX(S+1),E=Va(this,e,Ir,c,m,y,S);E&&t.push(E)}if(this.isLineLoop){const S=u.getX(_-1),p=u.getX(f),m=Va(this,e,Ir,c,S,p,_-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=l){const m=Va(this,e,Ir,c,S,S+1,S);m&&t.push(m)}if(this.isLineLoop){const S=Va(this,e,Ir,c,_-1,f,_-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Va(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(mo.fromBufferAttribute(o,s),go.fromBufferAttribute(o,r),t.distanceSqToSegment(mo,go,il,mh)>n)return;il.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(il);if(!(l<e.near||l>e.far))return{distance:l,point:mh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const gh=new U,_h=new U;class S_ extends hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gh.fromBufferAttribute(t,s),_h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gh.distanceTo(_h);e.setAttribute("lineDistance",new Tt(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class M_ extends hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wf extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new je,_c=new _r,Ha=new ii,Ga=new U;class y_ extends xt{constructor(e=new mt,t=new wf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;vh.copy(s).invert(),_c.copy(e.ray).applyMatrix4(vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=h,S=f;_<S;_++){const p=l.getX(_);Ga.fromBufferAttribute(d,p),xh(Ga,p,c,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=h,S=f;_<S;_++)Ga.fromBufferAttribute(d,_),xh(Ga,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xh(i,e,t,n,s,r,a){const o=_c.distanceSqToPoint(i);if(o<t){const c=new U;_c.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Rf extends Lt{constructor(e=[],t=_s,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class er extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sa extends Lt{constructor(e,t,n=Jn,s,r,a,o=Ct,c=Ct,l,u=bi,d=1){if(u!==bi&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class b_ extends sa{constructor(e,t=Jn,n=_s,s,r,a=Ct,o=Ct,c,l=bi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cf extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ji extends mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(d,2));function _(S,p,m,y,E,M,w,A,R,g,v){const D=M/R,T=w/g,P=M/2,I=w/2,k=A/2,O=R+1,B=g+1;let N=0,Q=0;const V=new U;for(let ee=0;ee<B;ee++){const G=ee*T-I;for(let X=0;X<O;X++){const Y=X*D-P;V[S]=Y*y,V[p]=G*E,V[m]=k,l.push(V.x,V.y,V.z),V[S]=0,V[p]=0,V[m]=A>0?1:-1,u.push(V.x,V.y,V.z),d.push(X/R),d.push(1-ee/g),N+=1}}for(let ee=0;ee<g;ee++)for(let G=0;G<R;G++){const X=h+G+O*ee,Y=h+G+O*(ee+1),ge=h+(G+1)+O*(ee+1),he=h+(G+1)+O*ee;c.push(X,Y,he),c.push(Y,ge,he),Q+=6}o.addGroup(f,Q,v),f+=Q,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $c extends mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let _=0;const S=[],p=n/2;let m=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function y(){const M=new U,w=new U;let A=0;const R=(t-e)/n;for(let g=0;g<=r;g++){const v=[],D=g/r,T=D*(t-e)+e;for(let P=0;P<=s;P++){const I=P/s,k=I*c+o,O=Math.sin(k),B=Math.cos(k);w.x=T*O,w.y=-D*n+p,w.z=T*B,d.push(w.x,w.y,w.z),M.set(O,R,B).normalize(),h.push(M.x,M.y,M.z),f.push(I,1-D),v.push(_++)}S.push(v)}for(let g=0;g<s;g++)for(let v=0;v<r;v++){const D=S[v][g],T=S[v+1][g],P=S[v+1][g+1],I=S[v][g+1];(e>0||v!==0)&&(u.push(D,T,I),A+=3),(t>0||v!==r-1)&&(u.push(T,P,I),A+=3)}l.addGroup(m,A,0),m+=A}function E(M){const w=_,A=new Be,R=new U;let g=0;const v=M===!0?e:t,D=M===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,p*D,0),h.push(0,D,0),f.push(.5,.5),_++;const T=_;for(let P=0;P<=s;P++){const k=P/s*c+o,O=Math.cos(k),B=Math.sin(k);R.x=v*B,R.y=p*D,R.z=v*O,d.push(R.x,R.y,R.z),h.push(0,D,0),A.x=O*.5+.5,A.y=B*.5*D+.5,f.push(A.x,A.y),_++}for(let P=0;P<s;P++){const I=w+P,k=T+P;M===!0?u.push(k,k+1,I):u.push(k+1,k,I),g+=3}l.addGroup(m,g,M===!0?1:2),m+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ss extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],_=[],S=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let E=0;E<l;E++){const M=E*d-r;_.push(M,-y,0),S.push(0,0,1),p.push(E/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const E=y+l*m,M=y+l*(m+1),w=y+1+l*(m+1),A=y+1+l*m;f.push(E,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=e;const h=(t-e)/s,f=new U,_=new Be;for(let S=0;S<=s;S++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,u.push(_.x,_.y)}d+=h}for(let S=0;S<s;S++){const p=S*(n+1);for(let m=0;m<n;m++){const y=m+p,E=y,M=y+n+1,w=y+n+2,A=y+1;o.push(E,M,A),o.push(M,w,A)}}this.setIndex(o),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zn extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new U,h=new U,f=[],_=[],S=[],p=[];for(let m=0;m<=n;m++){const y=[],E=m/n;let M=0;m===0&&a===0?M=.5/t:m===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const A=w/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),p.push(A+M,1-E),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const E=u[m][y+1],M=u[m][y],w=u[m+1][y],A=u[m+1][y+1];(m!==0||a>0)&&f.push(E,M,A),(m!==n-1||c<Math.PI)&&f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const s in n)e[s]=n[s]}return e}function E_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const T_={clone:ur,merge:Kt};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=E_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class R_ extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xi extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends Xi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class C_ extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P_ extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function D_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Sh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Df(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class vr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class L_ extends vr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zu:r=e,o=2*t-n;break;case Bu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zu:a=e,c=2*n-t;break;case Bu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),S=_*_,p=S*_,m=-h*p+2*h*S-h*_,y=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*_+1,E=(-1-f)*p+(1.5+f)*S+.5*_,M=f*p-f*S;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+y*a[l+w]+E*a[c+w]+M*a[d+w];return r}}class I_ extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}}class N_ extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class U_ extends vr{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){const S=(n-t)/(s-t),p=1-S;for(let m=0;m!==o;++m)r[m]=a[l+m]*p+a[c+m]*S;return r}const f=o*2,_=e-1;for(let S=0;S!==o;++S){const p=a[l+S],m=a[c+S],y=_*f+S*2,E=h[y],M=h[y+1],w=e*f+S*2,A=d[w],R=d[w+1];let g=(n-t)/(s-t),v,D,T,P,I;for(let k=0;k<8;k++){v=g*g,D=v*g,T=1-g,P=T*T,I=P*T;const B=I*t+3*P*g*E+3*T*v*A+D*s-n;if(Math.abs(B)<1e-10)break;const N=3*P*(E-t)+6*T*g*(A-E)+3*v*(s-A);if(Math.abs(N)<1e-10)break;g=g-B/N,g=Math.max(0,Math.min(1,g))}r[S]=I*p+3*P*g*M+3*T*v*R+D*m}return r}}class On{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new N_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new L_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new U_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case Do:t=this.InterpolantFactoryMethodSmooth;break;case Fu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return Fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Rg(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const d=o*n,h=d-n,f=d+n;for(let _=0;_!==n;++_){const S=t[d+_];if(S!==t[h+_]||S!==t[f+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ea;class xr extends On{constructor(e,t,n){super(e,t,n)}}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=Qr;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lf extends On{constructor(e,t,n,s){super(e,t,n,s)}}Lf.prototype.ValueTypeName="color";class hr extends On{constructor(e,t,n,s){super(e,t,n,s)}}hr.prototype.ValueTypeName="number";class F_ extends vr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)En.slerpFlat(r,0,a,l-o,a,l,c);return r}}class dr extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new F_(this.times,this.values,this.getValueSize(),e)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends On{constructor(e,t,n){super(e,t,n)}}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=Qr;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends On{constructor(e,t,n,s){super(e,t,n,s)}}fr.prototype.ValueTypeName="vector";class O_{constructor(e="",t=-1,n=[],s=_g){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(B_(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=D_(c);c=Sh(c,1,u),l=Sh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new hr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Oe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,_,S){if(f.length!==0){const p=[],m=[];Df(f,p,m,_),p.length!==0&&S.push(new d(h,p,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let S=0;S<h[_].morphTargets.length;S++)f[h[_].morphTargets[S]]=-1;for(const S in f){const p=[],m=[];for(let y=0;y!==h[_].morphTargets.length;++y){const E=h[_];p.push(E.time),m.push(E.morphTarget===S?1:0)}s.push(new hr(".morphTargetInfluence["+S+"]",p,m))}c=f.length*a}else{const f=".bones["+t[d].name+"]";n(fr,f+".position",h,"pos",s),n(dr,f+".quaternion",h,"rot",s),n(fr,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function z_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return Lf;case"quaternion":return dr;case"bool":case"boolean":return xr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function B_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=z_(i.type);if(i.times===void 0){const t=[],n=[];Df(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Mh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Mh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mh(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class k_{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const V_=new k_;class Mr{constructor(e){this.manager=e!==void 0?e:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class H_ extends Error{constructor(e,t){super(e),this.response=t}}class If extends Mr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:s});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=di[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,_=f!==0;let S=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:E,value:M})=>{if(E)m.close();else{S+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:S,total:f});for(let A=0,R=u.length;A<R;A++){const g=u[A];g.onProgress&&g.onProgress(w)}m.enqueue(M),y()}},E=>{m.error(E)})}}});return new Response(p)}else throw new H_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{gi.add(`file:${e}`,l);const u=di[e];delete di[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=di[e];if(u===void 0)throw this.manager.itemError(e),l;delete di[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ks=new WeakMap;class G_ extends Mr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ks.get(a);d===void 0&&(d=[],ks.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=na("img");function c(){u(),t&&t(this);const d=ks.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ks.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),gi.remove(`image:${e}`);const h=ks.get(this)||[];for(let f=0;f<h.length;f++){const _=h[f];_.onError&&_.onError(d)}ks.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class W_ extends Mr{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,a=new G_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class bo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const sl=new je,yh=new U,bh=new U;class Jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bh),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ta||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xa=new U,qa=new En,Bn=new U;class Nf extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xa,qa,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new U,Eh=new Be,Th=new Be;class kt extends Nf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class X_ extends Jc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class q_ extends bo{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new X_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class j_ extends Jc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}}class Y_ extends bo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Eo extends Nf{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class K_ extends Jc{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uf extends bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new K_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qc extends bo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class jr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const rl=new WeakMap;class Z_ extends Mr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(rl.has(a)===!0)s&&s(rl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),rl.set(c,l),gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vs=-90,Hs=1;class $_ extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(Vs,Hs,e,t);s.layers=this.layers,this.add(s);const r=new kt(Vs,Hs,e,t);r.layers=this.layers,this.add(r);const a=new kt(Vs,Hs,e,t);a.layers=this.layers,this.add(a);const o=new kt(Vs,Hs,e,t);o.layers=this.layers,this.add(o);const c=new kt(Vs,Hs,e,t);c.layers=this.layers,this.add(c);const l=new kt(Vs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class J_ extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const eu="\\[\\]\\.:\\/",Q_=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",e0="[^"+eu.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",tu),n0=/(WCOD+)?/.source.replace("WCOD",e0),i0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),s0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),r0=new RegExp("^"+t0+n0+i0+s0+"$"),a0=["material","materials","bones","map"];class o0{constructor(e,t,n){const s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q_,"")}static parseTrackName(e){const t=r0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=o0;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ah=new je;class l0{constructor(e,t,n=0,s=1/0){this.ray=new _r(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(e,t=!0,n=[]){return vc(e,this,n,t),n.sort(wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vc(e[s],this,n,t);return n.sort(wh),n}}function wh(i,e){return i.distance-e.distance}function vc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)vc(r[a],e,t,!0)}}class Rh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class c0 extends xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ch(i,e,t,n){const s=u0(n);switch(t){case mf:return i*e;case zc:return i*e/s.components*s.byteLength;case Bc:return i*e/s.components*s.byteLength;case lr:return i*e*2/s.components*s.byteLength;case kc:return i*e*2/s.components*s.byteLength;case gf:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Vc:return i*e*4/s.components*s.byteLength;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Vl:case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Xl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u0(i){switch(i){case un:case hf:return{byteLength:1,components:1};case $r:case df:case yi:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case Jn:case Uc:case _n:return{byteLength:4,components:1};case ff:case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function Ff(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function h0(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const S=d[f];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ax=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Px=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ix=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:x0,batching_pars_vertex:S0,batching_vertex:M0,begin_vertex:y0,beginnormal_vertex:b0,bsdfs:E0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:P0,color_fragment:D0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:N0,common:U0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:z0,displacementmap_vertex:B0,emissivemap_fragment:k0,emissivemap_pars_fragment:V0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:sv,envmap_vertex:Y0,fog_vertex:K0,fog_pars_vertex:Z0,fog_fragment:$0,fog_pars_fragment:J0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:ev,lights_lambert_fragment:tv,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:rv,lights_toon_pars_fragment:av,lights_phong_fragment:ov,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:hv,lights_fragment_maps:dv,lights_fragment_end:fv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:Sv,map_particle_pars_fragment:Mv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:bv,morphinstance_vertex:Ev,morphcolor_vertex:Tv,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:zv,opaque_fragment:Bv,packing:kv,premultiplied_alpha_fragment:Vv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:Yv,shadowmap_vertex:Kv,shadowmask_pars_fragment:Zv,skinbase_vertex:$v,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:sx,transmission_fragment:rx,transmission_pars_fragment:ax,uv_pars_fragment:ox,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:dx,backgroundCube_vert:fx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:_x,depth_frag:vx,distance_vert:xx,distance_frag:Sx,equirect_vert:Mx,equirect_frag:yx,linedashed_vert:bx,linedashed_frag:Ex,meshbasic_vert:Tx,meshbasic_frag:Ax,meshlambert_vert:wx,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Nx,meshphysical_vert:Ux,meshphysical_frag:Fx,meshtoon_vert:Ox,meshtoon_frag:zx,points_vert:Bx,points_frag:kx,shadow_vert:Vx,shadow_frag:Hx,sprite_vert:Gx,sprite_frag:Wx},_e={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Kt([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Kt([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Kt([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Kt([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Kt([_e.lights,_e.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Gn.physical={uniforms:Kt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ja={r:0,b:0,g:0},ns=new Qn,Xx=new je;function qx(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const M=y.backgroundBlurriness>0;E=e.get(E,M)}return E}function _(y){let E=!1;const M=f(y);M===null?p(a,o):M&&M.isColor&&(p(M,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,E){const M=f(E);M&&(M.isCubeTexture||M.mapping===yo)?(l===void 0&&(l=new rt(new ji(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ur(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ns.copy(E.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(ns)),l.material.toneMapped=et.getTransfer(M.colorSpace)!==ot,(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new rt(new Ss(2,2),new ei({name:"BackgroundMaterial",uniforms:ur(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(ja,Pf(i)),t.buffers.color.setClear(ja.r,ja.g,ja.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:_,addToRenderList:S,dispose:m}}function jx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(T,P,I,k,O){let B=!1;const N=d(T,k,I,P);r!==N&&(r=N,l(r.object)),B=f(T,k,I,O),B&&_(T,k,I,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(T,P,I,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function d(T,P,I,k){const O=k.wireframe===!0;let B=n[P.id];B===void 0&&(B={},n[P.id]=B);const N=T.isInstancedMesh===!0?T.id:0;let Q=B[N];Q===void 0&&(Q={},B[N]=Q);let V=Q[I.id];V===void 0&&(V={},Q[I.id]=V);let ee=V[O];return ee===void 0&&(ee=h(c()),V[O]=ee),ee}function h(T){const P=[],I=[],k=[];for(let O=0;O<t;O++)P[O]=0,I[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:k,object:T,attributes:{},index:null}}function f(T,P,I,k){const O=r.attributes,B=P.attributes;let N=0;const Q=I.getAttributes();for(const V in Q)if(Q[V].location>=0){const G=O[V];let X=B[V];if(X===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(X=T.instanceColor)),G===void 0||G.attribute!==X||X&&G.data!==X.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function _(T,P,I,k){const O={},B=P.attributes;let N=0;const Q=I.getAttributes();for(const V in Q)if(Q[V].location>=0){let G=B[V];G===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(G=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(G=T.instanceColor));const X={};X.attribute=G,G&&G.data&&(X.data=G.data),O[V]=X,N++}r.attributes=O,r.attributesNum=N,r.index=k}function S(){const T=r.newAttributes;for(let P=0,I=T.length;P<I;P++)T[P]=0}function p(T){m(T,0)}function m(T,P){const I=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;I[T]=1,k[T]===0&&(i.enableVertexAttribArray(T),k[T]=1),O[T]!==P&&(i.vertexAttribDivisor(T,P),O[T]=P)}function y(){const T=r.newAttributes,P=r.enabledAttributes;for(let I=0,k=P.length;I<k;I++)P[I]!==T[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function E(T,P,I,k,O,B,N){N===!0?i.vertexAttribIPointer(T,P,I,O,B):i.vertexAttribPointer(T,P,I,k,O,B)}function M(T,P,I,k){S();const O=k.attributes,B=I.getAttributes(),N=P.defaultAttributeValues;for(const Q in B){const V=B[Q];if(V.location>=0){let ee=O[Q];if(ee===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const G=ee.normalized,X=ee.itemSize,Y=e.get(ee);if(Y===void 0)continue;const ge=Y.buffer,he=Y.type,W=Y.bytesPerElement,ie=he===i.INT||he===i.UNSIGNED_INT||ee.gpuType===Uc;if(ee.isInterleavedBufferAttribute){const $=ee.data,ae=$.stride,le=ee.offset;if($.isInstancedInterleavedBuffer){for(let se=0;se<V.locationSize;se++)m(V.location+se,$.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let se=0;se<V.locationSize;se++)E(V.location+se,X/V.locationSize,he,G,ae*W,(le+X/V.locationSize*se)*W,ie)}else{if(ee.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)m(V.location+$,ee.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let $=0;$<V.locationSize;$++)p(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let $=0;$<V.locationSize;$++)E(V.location+$,X/V.locationSize,he,G,X*W,X/V.locationSize*$*W,ie)}}else if(N!==void 0){const G=N[Q];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(V.location,G);break;case 3:i.vertexAttrib3fv(V.location,G);break;case 4:i.vertexAttrib4fv(V.location,G);break;default:i.vertexAttrib1fv(V.location,G)}}}}y()}function w(){v();for(const T in n){const P=n[T];for(const I in P){const k=P[I];for(const O in k){const B=k[O];for(const N in B)u(B[N].object),delete B[N];delete k[O]}}delete n[T]}}function A(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const I in P){const k=P[I];for(const O in k){const B=k[O];for(const N in B)u(B[N].object),delete B[N];delete k[O]}}delete n[T.id]}function R(T){for(const P in n){const I=n[P];for(const k in I){const O=I[k];if(O[T.id]===void 0)continue;const B=O[T.id];for(const N in B)u(B[N].object),delete B[N];delete O[T.id]}}}function g(T){for(const P in n){const I=n[P],k=T.isInstancedMesh===!0?T.id:0,O=I[k];if(O!==void 0){for(const B in O){const N=O[B];for(const Q in N)u(N[Q].object),delete N[Q];delete O[B]}delete I[k],Object.keys(I).length===0&&delete n[P]}}}function v(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:v,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:p,disableUnusedAttributes:y}}function Yx(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)a(l[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=u[S]*h[S];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Kx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!g)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Oe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:A}}function Zx(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fi,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const y=r?0:n,E=y*4;let M=m.clippingState||null;c.value=M,M=u(_,h,E,f);for(let w=0;w!==E;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=c.value,_!==!0||p===null){const m=f+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,M=f;E!==S;++E,M+=4)a.copy(d[E]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const Bi=4,Ph=[.125,.215,.35,.446,.526,.582],as=20,$x=256,Nr=new Eo,Dh=new He;let al=null,ol=0,ll=0,cl=!1;const Jx=new U;class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Jx}=r;al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ol,ll),this._renderer.xr.enabled=cl,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:yi,format:vn,colorSpace:Jt,depthBuffer:!1},s=Ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=tS(r,e,t),this._ggxMaterial=eS(r,e,t)}return s}_compileMaterial(e){const t=new rt(new mt,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s,r){const c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Dh),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new ji,new Rt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let m=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(Dh),m=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const w=this._cubeSize;Gs(s,M*w,E>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(S,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Gs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:_}=this,S=this._sizeLods[n],p=3*S*(n>_-Bi?n-_+Bi:0),m=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=_-t,Gs(r,p,m,3*S,2*S),s.setRenderTarget(r),s.render(o,Nr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Gs(e,p,m,3*S,2*S),s.setRenderTarget(e),s.render(o,Nr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),S=r/_,p=isFinite(r)?1+Math.floor(u*S):as;p>as&&Oe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);const m=[];let y=0;for(let R=0;R<as;++R){const g=R/S,v=Math.exp(-g*g/2);m.push(v),R===0?y+=v:R<p&&(y+=2*v)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-n;const M=this._sizeLods[s],w=3*M*(s>E-Bi?s-E+Bi:0),A=4*(this._cubeSize-M);Gs(t,w,A,3*M,2*M),c.setRenderTarget(t),c.render(d,Nr)}}function Qx(i){const e=[],t=[],n=[];let s=i;const r=i-Bi+1+Ph.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Bi?c=Ph[a-i+Bi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,S=3,p=2,m=1,y=new Float32Array(S*_*f),E=new Float32Array(p*_*f),M=new Float32Array(m*_*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,g=A>2?0:-1,v=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];y.set(v,S*_*A),E.set(h,p*_*A);const D=[A,A,A,A,A,A];M.set(D,m*_*A)}const w=new mt;w.setAttribute("position",new $t(y,S)),w.setAttribute("uv",new $t(E,p)),w.setAttribute("faceIndex",new $t(M,m)),n.push(new rt(w,null)),s>Bi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ih(i,e,t){const n=new Kn(i,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function eS(i,e,t){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function tS(i,e,t){const n=new Float32Array(as),s=new U(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Uh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Of extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ji(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:xi});r.uniforms.tEquirect.value=t;const a=new rt(s,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=Pt),new $_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function nS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Co||f===Po)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new Of(_.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,_=f===Co||f===Po,S=f===_s||f===ar;if(_||S){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Lh(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const y=h.image;return _&&y&&y.height>0||S&&y&&c(y)?(n===null&&(n=new Lh(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Co?h.mapping=_s:f===Po&&(h.mapping=ar),h}function c(h){let f=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&f++;return f===_}function l(h){const f=h.target;f.removeEventListener("dispose",l);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function iS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&po("WebGLRenderer: "+n+" extension not supported."),s}}}function sS(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(f!==null){const y=f.array;S=f.version;for(let E=0,M=y.length;E<M;E+=3){const w=y[E+0],A=y[E+1],R=y[E+2];h.push(w,A,A,R,R,w)}}else{const y=_.array;S=_.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const w=E+0,A=E+1,R=E+2;h.push(w,A,A,R,R,w)}}const p=new(_.count>=65535?bf:yf)(h,1);p.version=S;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function rS(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function l(h,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,h*a,_),t.update(f,n,_))}function u(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}function d(h,f,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/a,f[m],S[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,S,0,_);let m=0;for(let y=0;y<_;y++)m+=f[y]*S[y];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function aS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function oS(i,e,t){const n=new WeakMap,s=new _t;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var f=D;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),p===!0&&(M=3);let w=o.attributes.position.count*M,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*d),g=new Sf(R,w,A,d);g.type=_n,g.needsUpdate=!0;const v=M*4;for(let T=0;T<d;T++){const P=m[T],I=y[T],k=E[T],O=w*A*4*T;for(let B=0;B<P.count;B++){const N=B*v;_===!0&&(s.fromBufferAttribute(P,B),R[O+N+0]=s.x,R[O+N+1]=s.y,R[O+N+2]=s.z,R[O+N+3]=0),S===!0&&(s.fromBufferAttribute(I,B),R[O+N+4]=s.x,R[O+N+5]=s.y,R[O+N+6]=s.z,R[O+N+7]=0),p===!0&&(s.fromBufferAttribute(k,B),R[O+N+8]=s.x,R[O+N+9]=s.y,R[O+N+10]=s.z,R[O+N+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:g,size:new Be(w,A)},n.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function lS(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const cS={[tf]:"LINEAR_TONE_MAPPING",[nf]:"REINHARD_TONE_MAPPING",[sf]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[lf]:"NEUTRAL_TONE_MAPPING",[af]:"CUSTOM_TONE_MAPPING"};function uS(i,e,t,n,s){const r=new Kn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Kn(e,t,{type:yi,depthBuffer:!1,stencilBuffer:!1}),o=new mt;o.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const c=new R_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new rt(o,c),u=new Eo(-1,1,1,-1,0,1);let d=null,h=null,f=!1,_,S=null,p=[],m=!1;this.setSize=function(y,E){r.setSize(y,E),a.setSize(y,E);for(let M=0;M<p.length;M++){const w=p[M];w.setSize&&w.setSize(y,E)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,M=r.height;for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(E,M)}},this.begin=function(y,E){if(f||y.toneMapping===Yn&&p.length===0)return!1;if(S=E,E!==null){const M=E.width,w=E.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return m===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return m},this.end=function(y,E){y.toneMapping=_,f=!0;let M=r,w=a;for(let A=0;A<p.length;A++){const R=p[A];if(R.enabled!==!1&&(R.render(y,w,M,E),R.needsSwap!==!1)){const g=M;M=w,w=g}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,c.defines={},et.getTransfer(d)===ot&&(c.defines.SRGB_TRANSFER="");const A=cS[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(S),y.render(l,u),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const zf=new Lt,xc=new sa(1,1),Bf=new Sf,kf=new Qg,Vf=new Rf,Fh=[],Oh=[],zh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function yr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function pS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function mS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),Nt(t,n)}}function gS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),Nt(t,n)}}function _S(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),Nt(t,n)}}function vS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function MS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function yS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function ES(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function AS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xc.compareFunction=t.isReversedDepthBuffer()?Gc:Hc,r=xc):r=zf,t.setTexture2D(e||r,s)}function wS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kf,s)}function RS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vf,s)}function CS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bf,s)}function PS(i){switch(i){case 5126:return hS;case 35664:return dS;case 35665:return fS;case 35666:return pS;case 35674:return mS;case 35675:return gS;case 35676:return _S;case 5124:case 35670:return vS;case 35667:case 35671:return xS;case 35668:case 35672:return SS;case 35669:case 35673:return MS;case 5125:return yS;case 36294:return bS;case 36295:return ES;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return AS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return CS}}function DS(i,e){i.uniform1fv(this.addr,e)}function LS(i,e){const t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function IS(i,e){const t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function NS(i,e){const t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function US(i,e){const t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FS(i,e){const t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OS(i,e){const t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zS(i,e){i.uniform1iv(this.addr,e)}function BS(i,e){i.uniform2iv(this.addr,e)}function kS(i,e){i.uniform3iv(this.addr,e)}function VS(i,e){i.uniform4iv(this.addr,e)}function HS(i,e){i.uniform1uiv(this.addr,e)}function GS(i,e){i.uniform2uiv(this.addr,e)}function WS(i,e){i.uniform3uiv(this.addr,e)}function XS(i,e){i.uniform4uiv(this.addr,e)}function qS(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=xc:a=zf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function jS(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kf,r[a])}function YS(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vf,r[a])}function KS(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bf,r[a])}function ZS(i){switch(i){case 5126:return DS;case 35664:return LS;case 35665:return IS;case 35666:return NS;case 35674:return US;case 35675:return FS;case 35676:return OS;case 5124:case 35670:return zS;case 35667:case 35671:return BS;case 35668:case 35672:return kS;case 35669:case 35673:return VS;case 5125:return HS;case 36294:return GS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return KS}}class $S{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PS(t.type)}}class JS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}}class QS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function eM(i,e,t){const n=i.name,s=n.length;for(ul.lastIndex=0;;){const r=ul.exec(n),a=ul.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vh(t,l===void 0?new $S(o,i,e):new JS(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new QS(o),Vh(t,d)),t=d}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);eM(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Hh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tM=37297;let nM=0;function iM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gh=new Ye;function sM(i){et._getMatrix(Gh,et.workingColorSpace,i);const e=`mat3( ${Gh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ho:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iM(i.getShaderSource(e),o)}else return r}function rM(i,e){const t=sM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aM={[tf]:"Linear",[nf]:"Reinhard",[sf]:"Cineon",[rf]:"ACESFilmic",[of]:"AgX",[lf]:"Neutral",[af]:"Custom"};function oM(i,e){const t=aM[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new U;function lM(){et.getLuminanceCoefficients(Ya);const i=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function uM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function kr(i){return i!==""}function Xh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(dM,pM)}const fM=new Map;function pM(i,e){let t=Ke[e];if(t===void 0){const n=fM.get(e);if(n!==void 0)t=Ke[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sc(t)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(mM,gM)}function gM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _M={[Qa]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function vM(i){return _M[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xM={[_s]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function SM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const MM={[ar]:"ENVMAP_MODE_REFRACTION"};function yM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bM={[ef]:"ENVMAP_BLENDING_MULTIPLY",[pg]:"ENVMAP_BLENDING_MIX",[mg]:"ENVMAP_BLENDING_ADD"};function EM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bM[i.combine]||"ENVMAP_BLENDING_NONE"}function TM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function AM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=vM(t),l=SM(t),u=yM(t),d=EM(t),h=TM(t),f=cM(t),_=uM(r),S=s.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(kr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(kr).join(`
`),m.length>0&&(m+=`
`)):(p=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),m=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Yn?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=Sc(a),a=Xh(a,t),a=qh(a,t),o=Sc(o),o=Xh(o,t),o=qh(o,t),a=jh(a),o=jh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=y+p+a,M=y+m+o,w=Hh(s,s.VERTEX_SHADER,E),A=Hh(s,s.FRAGMENT_SHADER,M);s.attachShader(S,w),s.attachShader(S,A),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(T){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(S)||"",I=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(A)||"",O=P.trim(),B=I.trim(),N=k.trim();let Q=!0,V=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,w,A);else{const ee=Wh(s,w,"vertex"),G=Wh(s,A,"fragment");Ve("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+ee+`
`+G)}else O!==""?Oe("WebGLProgram: Program Info Log:",O):(B===""||N==="")&&(V=!1);V&&(T.diagnostics={runnable:Q,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(w),s.deleteShader(A),g=new ro(s,S),v=hM(s,S)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(S,tM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=A,this}let wM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CM(e),t.set(e,n)),n}}class CM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function PM(i,e,t,n,s,r){const a=new qc,o=new RM,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function S(g,v,D,T,P){const I=T.fog,k=P.geometry,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?T.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,N=e.get(g.envMap||O,B),Q=N&&N.mapping===yo?N.image.height:null,V=f[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Oe("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=ee!==void 0?ee.length:0;let X=0;k.morphAttributes.position!==void 0&&(X=1),k.morphAttributes.normal!==void 0&&(X=2),k.morphAttributes.color!==void 0&&(X=3);let Y,ge,he,W;if(V){const at=Gn[V];Y=at.vertexShader,ge=at.fragmentShader}else Y=g.vertexShader,ge=g.fragmentShader,o.update(g),he=o.getVertexShaderID(g),W=o.getFragmentShaderID(g);const ie=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),ae=P.isInstancedMesh===!0,le=P.isBatchedMesh===!0,se=!!g.map,Ue=!!g.matcap,Se=!!N,be=!!g.aoMap,Te=!!g.lightMap,ue=!!g.bumpMap,Ge=!!g.normalMap,L=!!g.displacementMap,We=!!g.emissiveMap,ke=!!g.metalnessMap,nt=!!g.roughnessMap,Me=g.anisotropy>0,C=g.clearcoat>0,x=g.dispersion>0,F=g.iridescence>0,Z=g.sheen>0,ne=g.transmission>0,J=Me&&!!g.anisotropyMap,Ae=C&&!!g.clearcoatMap,fe=C&&!!g.clearcoatNormalMap,Re=C&&!!g.clearcoatRoughnessMap,Ie=F&&!!g.iridescenceMap,re=F&&!!g.iridescenceThicknessMap,ce=Z&&!!g.sheenColorMap,Ce=Z&&!!g.sheenRoughnessMap,De=!!g.specularMap,ye=!!g.specularColorMap,Ze=!!g.specularIntensityMap,z=ne&&!!g.transmissionMap,me=ne&&!!g.thicknessMap,de=!!g.gradientMap,we=!!g.alphaMap,oe=g.alphaTest>0,te=!!g.alphaHash,Pe=!!g.extensions;let Xe=Yn;g.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const pt={shaderID:V,shaderType:g.type,shaderName:g.name,vertexShader:Y,fragmentShader:ge,defines:g.defines,customVertexShaderID:he,customFragmentShaderID:W,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:le,batchingColor:le&&P._colorsTexture!==null,instancing:ae,instancingColor:ae&&P.instanceColor!==null,instancingMorph:ae&&P.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Jt,alphaToCoverage:!!g.alphaToCoverage,map:se,matcap:Ue,envMap:Se,envMapMode:Se&&N.mapping,envMapCubeUVHeight:Q,aoMap:be,lightMap:Te,bumpMap:ue,normalMap:Ge,displacementMap:L,emissiveMap:We,normalMapObjectSpace:Ge&&g.normalMapType===Sg,normalMapTangentSpace:Ge&&g.normalMapType===vf,metalnessMap:ke,roughnessMap:nt,anisotropy:Me,anisotropyMap:J,clearcoat:C,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:x,iridescence:F,iridescenceMap:Ie,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:De,specularColorMap:ye,specularIntensityMap:Ze,transmission:ne,transmissionMap:z,thicknessMap:me,gradientMap:de,opaque:g.transparent===!1&&g.blending===Zs&&g.alphaToCoverage===!1,alphaMap:we,alphaTest:oe,alphaHash:te,combine:g.combine,mapUv:se&&_(g.map.channel),aoMapUv:be&&_(g.aoMap.channel),lightMapUv:Te&&_(g.lightMap.channel),bumpMapUv:ue&&_(g.bumpMap.channel),normalMapUv:Ge&&_(g.normalMap.channel),displacementMapUv:L&&_(g.displacementMap.channel),emissiveMapUv:We&&_(g.emissiveMap.channel),metalnessMapUv:ke&&_(g.metalnessMap.channel),roughnessMapUv:nt&&_(g.roughnessMap.channel),anisotropyMapUv:J&&_(g.anisotropyMap.channel),clearcoatMapUv:Ae&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(g.sheenRoughnessMap.channel),specularMapUv:De&&_(g.specularMap.channel),specularColorMapUv:ye&&_(g.specularColorMap.channel),specularIntensityMapUv:Ze&&_(g.specularIntensityMap.channel),transmissionMapUv:z&&_(g.transmissionMap.channel),thicknessMapUv:me&&_(g.thicknessMap.channel),alphaMapUv:we&&_(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ge||Me),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(se||we),fog:!!I,useFog:g.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&Ge===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:se&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===ot,decodeVideoTextureEmissive:We&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===ot,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===sn,flipSided:g.side===rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Pe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&g.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(g){const v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)v.push(D),v.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(m(v,g),y(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function m(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function y(g,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),g.push(a.mask)}function E(g){const v=f[g.type];let D;if(v){const T=Gn[v];D=T_.clone(T.uniforms)}else D=g.uniforms;return D}function M(g,v){let D=u.get(v);return D!==void 0?++D.usedTimes:(D=new AM(i,v,g,s),l.push(D),u.set(v,D)),D}function w(g){if(--g.usedTimes===0){const v=l.indexOf(g);l[v]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:R}}function DM(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function LM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,S,p,m){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:m},i[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=_,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=p,y.group=m),e++,y}function c(h,f,_,S,p,m){const y=o(h,f,_,S,p,m);_.transmission>0?n.push(y):_.transparent===!0?s.push(y):t.push(y)}function l(h,f,_,S,p,m){const y=o(h,f,_,S,p,m);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||LM),n.length>1&&n.sort(f||Kh),s.length>1&&s.sort(f||Kh)}function d(){for(let h=e,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function IM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zh,i.set(n,[a])):s>=r.length?(a=new Zh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function NM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new He};break;case"SpotLight":t={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function UM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let FM=0;function OM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zM(i){const e=new NM,t=UM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new je,a=new je;function o(l){let u=0,d=0,h=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,S=0,p=0,m=0,y=0,E=0,M=0,w=0,A=0,R=0;l.sort(OM);for(let v=0,D=l.length;v<D;v++){const T=l[v],P=T.color,I=T.intensity,k=T.distance;let O=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===lr?O=T.shadow.map.texture:O=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=P.r*I,d+=P.g*I,h+=P.b*I;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],I);R++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const N=T.shadow,Q=t.get(T);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=T.shadow.matrix,y++}n.directional[f]=B,f++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(P).multiplyScalar(I),B.distance=k,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[S]=B;const N=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,N.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[S]=N.matrix,T.castShadow){const Q=t.get(T);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=O,M++}S++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(P).multiplyScalar(I),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=B,p++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const N=T.shadow,Q=t.get(T);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,Q.shadowCameraNear=N.camera.near,Q.shadowCameraFar=N.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=T.shadow.matrix,E++}n.point[_]=B,_++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(I),B.groundColor.copy(T.groundColor).multiplyScalar(I),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const g=n.hash;(g.directionalLength!==f||g.pointLength!==_||g.spotLength!==S||g.rectAreaLength!==p||g.hemiLength!==m||g.numDirectionalShadows!==y||g.numPointShadows!==E||g.numSpotShadows!==M||g.numSpotMaps!==w||g.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=S,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,g.directionalLength=f,g.pointLength=_,g.spotLength=S,g.rectAreaLength=p,g.hemiLength=m,g.numDirectionalShadows=y,g.numPointShadows=E,g.numSpotShadows=M,g.numSpotMaps=w,g.numLightProbes=R,n.version=FM++)}function c(l,u){let d=0,h=0,f=0,_=0,S=0;const p=u.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const E=l[m];if(E.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(E.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:o,setupView:c,state:n}}function $h(i){const e=new zM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function BM(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $h(i),e.set(s,[o])):r>=a.length?(o=new $h(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],GM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Jh=new je,Ur=new U,hl=new U;function WM(i,e,t){let n=new Zc;const s=new Be,r=new Be,a=new _t,o=new C_,c=new P_,l={},u=t.maxTextureSize,d={[Mi]:rn,[rn]:Mi,[sn]:sn},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:kM,fragmentShader:VM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new mt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new rt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let m=this.type;this.render=function(A,R,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Qd&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qa);const v=i.getRenderTarget(),D=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(xi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=m!==this.type;I&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=A.length;k<O;k++){const B=A[k],N=B.shadow;if(N===void 0){Oe("WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Q=N.getFrameExtents();s.multiply(Q),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,N.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=V,N.map===null||I===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===zr){if(B.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Kn(s.x,s.y,{format:lr,type:yi,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),N.map.texture.name=B.name+".shadowMap",N.map.depthTexture=new sa(s.x,s.y,_n),N.map.depthTexture.name=B.name+".shadowMapDepth",N.map.depthTexture.format=bi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ct,N.map.depthTexture.magFilter=Ct}else B.isPointLight?(N.map=new Of(s.x),N.map.depthTexture=new b_(s.x,Jn)):(N.map=new Kn(s.x,s.y),N.map.depthTexture=new sa(s.x,s.y,Jn)),N.map.depthTexture.name=B.name+".shadowMap",N.map.depthTexture.format=bi,this.type===Qa?(N.map.depthTexture.compareFunction=V?Gc:Hc,N.map.depthTexture.minFilter=Pt,N.map.depthTexture.magFilter=Pt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ct,N.map.depthTexture.magFilter=Ct);N.camera.updateProjectionMatrix()}const ee=N.map.isWebGLCubeRenderTarget?6:1;for(let G=0;G<ee;G++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,G),i.clear();else{G===0&&(i.setRenderTarget(N.map),i.clear());const X=N.getViewport(G);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),P.viewport(a)}if(B.isPointLight){const X=N.camera,Y=N.matrix,ge=B.distance||X.far;ge!==X.far&&(X.far=ge,X.updateProjectionMatrix()),Ur.setFromMatrixPosition(B.matrixWorld),X.position.copy(Ur),hl.copy(X.position),hl.add(HM[G]),X.up.copy(GM[G]),X.lookAt(hl),X.updateMatrixWorld(),Y.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Jh.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Jh,X.coordinateSystem,X.reversedDepth)}else N.updateMatrices(B);n=N.getFrustum(),M(R,g,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===zr&&y(N,g),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(v,D,T)};function y(A,R){const g=e.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(s.x,s.y,{format:lr,type:yi})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,g,h,S,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,g,f,S,null)}function E(A,R,g,v){let D=null;const T=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)D=T;else if(D=g.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=D.uuid,I=R.uuid;let k=l[P];k===void 0&&(k={},l[P]=k);let O=k[I];O===void 0&&(O=D.clone(),k[I]=O,R.addEventListener("dispose",w)),D=O}if(D.visible=R.visible,D.wireframe=R.wireframe,v===zr?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const P=i.properties.get(D);P.light=g}return D}function M(A,R,g,v,D){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===zr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);const I=e.update(A),k=A.material;if(Array.isArray(k)){const O=I.groups;for(let B=0,N=O.length;B<N;B++){const Q=O[B],V=k[Q.materialIndex];if(V&&V.visible){const ee=E(A,V,v,D);A.onBeforeShadow(i,A,R,g,I,ee,Q),i.renderBufferDirect(g,null,I,ee,A,Q),A.onAfterShadow(i,A,R,g,I,ee,Q)}}}else if(k.visible){const O=E(A,k,v,D);A.onBeforeShadow(i,A,R,g,I,O,null),i.renderBufferDirect(g,null,I,O,A,null),A.onAfterShadow(i,A,R,g,I,O,null)}}const P=A.children;for(let I=0,k=P.length;I<k;I++)M(P[I],R,g,v,D)}function w(A){A.target.removeEventListener("dispose",w);for(const g in l){const v=l[g],D=A.target.uuid;D in v&&(v[D].dispose(),delete v[D])}}}function XM(i,e){function t(){let z=!1;const me=new _t;let de=null;const we=new _t(0,0,0,0);return{setMask:function(oe){de!==oe&&!z&&(i.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){z=oe},setClear:function(oe,te,Pe,Xe,pt){pt===!0&&(oe*=Xe,te*=Xe,Pe*=Xe),me.set(oe,te,Pe,Xe),we.equals(me)===!1&&(i.clearColor(oe,te,Pe,Xe),we.copy(me))},reset:function(){z=!1,de=null,we.set(-1,0,0,0)}}}function n(){let z=!1,me=!1,de=null,we=null,oe=null;return{setReversed:function(te){if(me!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),me=te;const Xe=oe;oe=null,this.setClear(Xe)}},getReversed:function(){return me},setTest:function(te){te?ie(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(te){de!==te&&!z&&(i.depthMask(te),de=te)},setFunc:function(te){if(me&&(te=Dg[te]),we!==te){switch(te){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=te}},setLocked:function(te){z=te},setClear:function(te){oe!==te&&(oe=te,me&&(te=1-te),i.clearDepth(te))},reset:function(){z=!1,de=null,we=null,oe=null,me=!1}}}function s(){let z=!1,me=null,de=null,we=null,oe=null,te=null,Pe=null,Xe=null,pt=null;return{setTest:function(at){z||(at?ie(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(at){me!==at&&!z&&(i.stencilMask(at),me=at)},setFunc:function(at,ri,ai){(de!==at||we!==ri||oe!==ai)&&(i.stencilFunc(at,ri,ai),de=at,we=ri,oe=ai)},setOp:function(at,ri,ai){(te!==at||Pe!==ri||Xe!==ai)&&(i.stencilOp(at,ri,ai),te=at,Pe=ri,Xe=ai)},setLocked:function(at){z=at},setClear:function(at){pt!==at&&(i.clearStencil(at),pt=at)},reset:function(){z=!1,me=null,de=null,we=null,oe=null,te=null,Pe=null,Xe=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,S=!1,p=null,m=null,y=null,E=null,M=null,w=null,A=null,R=new He(0,0,0),g=0,v=!1,D=null,T=null,P=null,I=null,k=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,N=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=N>=1):Q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=N>=2);let V=null,ee={};const G=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),Y=new _t().fromArray(G),ge=new _t().fromArray(X);function he(z,me,de,we){const oe=new Uint8Array(4),te=i.createTexture();i.bindTexture(z,te),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<de;Pe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(me+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return te}const W={};W[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(rr),ue(!1),Ge(Du),ie(i.CULL_FACE),be(xi);function ie(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function $(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function ae(z,me){return d[z]!==me?(i.bindFramebuffer(z,me),d[z]=me,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=me),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=me),!0):!1}function le(z,me){let de=f,we=!1;if(z){de=h.get(me),de===void 0&&(de=[],h.set(me,de));const oe=z.textures;if(de.length!==oe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Pe=oe.length;te<Pe;te++)de[te]=i.COLOR_ATTACHMENT0+te;de.length=oe.length,we=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,we=!0);we&&i.drawBuffers(de)}function se(z){return _!==z?(i.useProgram(z),_=z,!0):!1}const Ue={[rs]:i.FUNC_ADD,[$m]:i.FUNC_SUBTRACT,[Jm]:i.FUNC_REVERSE_SUBTRACT};Ue[Qm]=i.MIN,Ue[eg]=i.MAX;const Se={[tg]:i.ZERO,[ng]:i.ONE,[ig]:i.SRC_COLOR,[wl]:i.SRC_ALPHA,[cg]:i.SRC_ALPHA_SATURATE,[og]:i.DST_COLOR,[rg]:i.DST_ALPHA,[sg]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[lg]:i.ONE_MINUS_DST_COLOR,[ag]:i.ONE_MINUS_DST_ALPHA,[ug]:i.CONSTANT_COLOR,[hg]:i.ONE_MINUS_CONSTANT_COLOR,[dg]:i.CONSTANT_ALPHA,[fg]:i.ONE_MINUS_CONSTANT_ALPHA};function be(z,me,de,we,oe,te,Pe,Xe,pt,at){if(z===xi){S===!0&&($(i.BLEND),S=!1);return}if(S===!1&&(ie(i.BLEND),S=!0),z!==Zm){if(z!==p||at!==v){if((m!==rs||M!==rs)&&(i.blendEquation(i.FUNC_ADD),m=rs,M=rs),at)switch(z){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",z);break}else switch(z){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",z);break}y=null,E=null,w=null,A=null,R.set(0,0,0),g=0,p=z,v=at}return}oe=oe||me,te=te||de,Pe=Pe||we,(me!==m||oe!==M)&&(i.blendEquationSeparate(Ue[me],Ue[oe]),m=me,M=oe),(de!==y||we!==E||te!==w||Pe!==A)&&(i.blendFuncSeparate(Se[de],Se[we],Se[te],Se[Pe]),y=de,E=we,w=te,A=Pe),(Xe.equals(R)===!1||pt!==g)&&(i.blendColor(Xe.r,Xe.g,Xe.b,pt),R.copy(Xe),g=pt),p=z,v=!1}function Te(z,me){z.side===sn?$(i.CULL_FACE):ie(i.CULL_FACE);let de=z.side===rn;me&&(de=!de),ue(de),z.blending===Zs&&z.transparent===!1?be(xi):be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const we=z.stencilWrite;o.setTest(we),we&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),We(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(z){D!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),D=z)}function Ge(z){z!==Ym?(ie(i.CULL_FACE),z!==T&&(z===Du?i.cullFace(i.BACK):z===Km?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),T=z}function L(z){z!==P&&(B&&i.lineWidth(z),P=z)}function We(z,me,de){z?(ie(i.POLYGON_OFFSET_FILL),(I!==me||k!==de)&&(I=me,k=de,a.getReversed()&&(me=-me),i.polygonOffset(me,de))):$(i.POLYGON_OFFSET_FILL)}function ke(z){z?ie(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function nt(z){z===void 0&&(z=i.TEXTURE0+O-1),V!==z&&(i.activeTexture(z),V=z)}function Me(z,me,de){de===void 0&&(V===null?de=i.TEXTURE0+O-1:de=V);let we=ee[de];we===void 0&&(we={type:void 0,texture:void 0},ee[de]=we),(we.type!==z||we.texture!==me)&&(V!==de&&(i.activeTexture(de),V=de),i.bindTexture(z,me||W[z]),we.type=z,we.texture=me)}function C(){const z=ee[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Z(){try{i.texSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ne(){try{i.texSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function fe(){try{i.texStorage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Re(){try{i.texStorage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function Ie(){try{i.texImage2D(...arguments)}catch(z){Ve("WebGLState:",z)}}function re(){try{i.texImage3D(...arguments)}catch(z){Ve("WebGLState:",z)}}function ce(z){Y.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Y.copy(z))}function Ce(z){ge.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ge.copy(z))}function De(z,me){let de=l.get(me);de===void 0&&(de=new WeakMap,l.set(me,de));let we=de.get(z);we===void 0&&(we=i.getUniformBlockIndex(me,z.name),de.set(z,we))}function ye(z,me){const we=l.get(me).get(z);c.get(me)!==we&&(i.uniformBlockBinding(me,we,z.__bindingPointIndex),c.set(me,we))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},V=null,ee={},d={},h=new WeakMap,f=[],_=null,S=!1,p=null,m=null,y=null,E=null,M=null,w=null,A=null,R=new He(0,0,0),g=0,v=!1,D=null,T=null,P=null,I=null,k=null,Y.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:$,bindFramebuffer:ae,drawBuffers:le,useProgram:se,setBlending:be,setMaterial:Te,setFlipSided:ue,setCullFace:Ge,setLineWidth:L,setPolygonOffset:We,setScissorTest:ke,activeTexture:nt,bindTexture:Me,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ie,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:ye,texStorage2D:fe,texStorage3D:Re,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:J,compressedTexSubImage3D:Ae,scissor:ce,viewport:Ce,reset:Ze}}function qM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return f?new OffscreenCanvas(C,x):na("canvas")}function S(C,x,F){let Z=1;const ne=Me(C);if((ne.width>F||ne.height>F)&&(Z=F/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*ne.width),Ae=Math.floor(Z*ne.height);d===void 0&&(d=_(J,Ae));const fe=x?_(J,Ae):d;return fe.width=J,fe.height=Ae,fe.getContext("2d").drawImage(C,0,0,J,Ae),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ae+")."),fe}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,x,F,Z,ne=!1){if(C!==null){if(i[C]!==void 0)return i[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=x;if(x===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),x===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){const Ae=ne?ho:et.getTransfer(Z);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=Ae===ot?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(C,x){let F;return C?x===null||x===Jn||x===Jr?F=i.DEPTH24_STENCIL8:x===_n?F=i.DEPTH32F_STENCIL8:x===$r&&(F=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Jr?F=i.DEPTH_COMPONENT24:x===_n?F=i.DEPTH_COMPONENT32F:x===$r&&(F=i.DEPTH_COMPONENT16),F}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==Pt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),g(x),x.isVideoTexture&&u.delete(x)}function R(C){const x=C.target;x.removeEventListener("dispose",R),D(x)}function g(C){const x=n.get(C);if(x.__webglInit===void 0)return;const F=C.source,Z=h.get(F);if(Z){const ne=Z[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(C),Object.keys(Z).length===0&&h.delete(F)}n.remove(C)}function v(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const F=C.source,Z=h.get(F);delete Z[x.__cacheKey],a.memory.textures--}function D(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ne=0;ne<x.__webglFramebuffer[Z].length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[Z][ne]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=C.textures;for(let Z=0,ne=F.length;Z<ne;Z++){const J=n.get(F[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(F[Z])}n.remove(C)}let T=0;function P(){T=0}function I(){const C=T;return C>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function k(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function O(C,x){const F=n.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const Z=C.image;if(Z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,C,x);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function B(C,x){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){W(F,C,x);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function N(C,x){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){W(F,C,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function Q(C,x){const F=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&F.__version!==C.version){ie(F,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const V={[or]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},ee={[Ct]:i.NEAREST,[uf]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},G={[Mg]:i.NEVER,[Ag]:i.ALWAYS,[yg]:i.LESS,[Hc]:i.LEQUAL,[bg]:i.EQUAL,[Gc]:i.GEQUAL,[Eg]:i.GREATER,[Tg]:i.NOTEQUAL};function X(C,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Pt||x.magFilter===eo||x.magFilter===Br||x.magFilter===mi||x.minFilter===Pt||x.minFilter===eo||x.minFilter===Br||x.minFilter===mi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,V[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ee[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ee[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,G[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==Br&&x.minFilter!==mi||x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Y(C,x){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let ne=h.get(Z);ne===void 0&&(ne={},h.set(Z,ne));const J=k(x);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[J].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&v(x)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return F}function ge(C,x,F){return Math.floor(Math.floor(C/F)/x)}function he(C,x,F,Z){const J=C.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,Z,x.data);else{J.sort((re,ce)=>re.start-ce.start);let Ae=0;for(let re=1;re<J.length;re++){const ce=J[Ae],Ce=J[re],De=ce.start+ce.count,ye=ge(Ce.start,x.width,4),Ze=ge(ce.start,x.width,4);Ce.start<=De+1&&ye===Ze&&ge(Ce.start+Ce.count-1,x.width,4)===ye?ce.count=Math.max(ce.count,Ce.start+Ce.count-ce.start):(++Ae,J[Ae]=Ce)}J.length=Ae+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let re=0,ce=J.length;re<ce;re++){const Ce=J[re],De=Math.floor(Ce.start/4),ye=Math.ceil(Ce.count/4),Ze=De%x.width,z=Math.floor(De/x.width),me=ye,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ze,z,me,de,F,Z,x.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function W(C,x,F){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const ne=Y(C,x),J=x.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+F);const Ae=n.get(J);if(J.version!==Ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);const fe=et.getPrimaries(et.workingColorSpace),Re=x.colorSpace===Oi?null:et.getPrimaries(x.colorSpace),Ie=x.colorSpace===Oi||fe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let re=S(x.image,!1,s.maxTextureSize);re=nt(x,re);const ce=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type);let De=E(x.internalFormat,ce,Ce,x.colorSpace,x.isVideoTexture);X(Z,x);let ye;const Ze=x.mipmaps,z=x.isVideoTexture!==!0,me=Ae.__version===void 0||ne===!0,de=J.dataReady,we=w(x,re);if(x.isDepthTexture)De=M(x.format===us,x.type),me&&(z?t.texStorage2D(i.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,ce,Ce,null));else if(x.isDataTexture)if(Ze.length>0){z&&me&&t.texStorage2D(i.TEXTURE_2D,we,De,Ze[0].width,Ze[0].height);for(let oe=0,te=Ze.length;oe<te;oe++)ye=Ze[oe],z?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ye.width,ye.height,ce,Ce,ye.data):t.texImage2D(i.TEXTURE_2D,oe,De,ye.width,ye.height,0,ce,Ce,ye.data);x.generateMipmaps=!1}else z?(me&&t.texStorage2D(i.TEXTURE_2D,we,De,re.width,re.height),de&&he(x,re,ce,Ce)):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,ce,Ce,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,De,Ze[0].width,Ze[0].height,re.depth);for(let oe=0,te=Ze.length;oe<te;oe++)if(ye=Ze[oe],x.format!==vn)if(ce!==null)if(z){if(de)if(x.layerUpdates.size>0){const Pe=Ch(ye.width,ye.height,x.format,x.type);for(const Xe of x.layerUpdates){const pt=ye.data.subarray(Xe*Pe/ye.data.BYTES_PER_ELEMENT,(Xe+1)*Pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Xe,ye.width,ye.height,1,ce,pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,re.depth,ce,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,De,ye.width,ye.height,re.depth,0,ye.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,re.depth,ce,Ce,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,De,ye.width,ye.height,re.depth,0,ce,Ce,ye.data)}else{z&&me&&t.texStorage2D(i.TEXTURE_2D,we,De,Ze[0].width,Ze[0].height);for(let oe=0,te=Ze.length;oe<te;oe++)ye=Ze[oe],x.format!==vn?ce!==null?z?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ye.width,ye.height,ce,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,De,ye.width,ye.height,0,ye.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ye.width,ye.height,ce,Ce,ye.data):t.texImage2D(i.TEXTURE_2D,oe,De,ye.width,ye.height,0,ce,Ce,ye.data)}else if(x.isDataArrayTexture)if(z){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,De,re.width,re.height,re.depth),de)if(x.layerUpdates.size>0){const oe=Ch(re.width,re.height,x.format,x.type);for(const te of x.layerUpdates){const Pe=re.data.subarray(te*oe/re.data.BYTES_PER_ELEMENT,(te+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ce,Ce,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ce,Ce,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ce,Ce,re.data);else if(x.isData3DTexture)z?(me&&t.texStorage3D(i.TEXTURE_3D,we,De,re.width,re.height,re.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ce,Ce,re.data)):t.texImage3D(i.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ce,Ce,re.data);else if(x.isFramebufferTexture){if(me)if(z)t.texStorage2D(i.TEXTURE_2D,we,De,re.width,re.height);else{let oe=re.width,te=re.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,De,oe,te,0,ce,Ce,null),oe>>=1,te>>=1}}else if(Ze.length>0){if(z&&me){const oe=Me(Ze[0]);t.texStorage2D(i.TEXTURE_2D,we,De,oe.width,oe.height)}for(let oe=0,te=Ze.length;oe<te;oe++)ye=Ze[oe],z?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ce,Ce,ye):t.texImage2D(i.TEXTURE_2D,oe,De,ce,Ce,ye);x.generateMipmaps=!1}else if(z){if(me){const oe=Me(re);t.texStorage2D(i.TEXTURE_2D,we,De,oe.width,oe.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ce,re)}else t.texImage2D(i.TEXTURE_2D,0,De,ce,Ce,re);p(x)&&m(Z),Ae.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ie(C,x,F){if(x.image.length!==6)return;const Z=Y(C,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const J=n.get(ne);if(ne.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const Ae=et.getPrimaries(et.workingColorSpace),fe=x.colorSpace===Oi?null:et.getPrimaries(x.colorSpace),Re=x.colorSpace===Oi||Ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!Ie&&!re?ce[te]=S(x.image[te],!0,s.maxCubemapSize):ce[te]=re?x.image[te].image:x.image[te],ce[te]=nt(x,ce[te]);const Ce=ce[0],De=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),Ze=E(x.internalFormat,De,ye,x.colorSpace),z=x.isVideoTexture!==!0,me=J.__version===void 0||Z===!0,de=ne.dataReady;let we=w(x,Ce);X(i.TEXTURE_CUBE_MAP,x);let oe;if(Ie){z&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,Ce.width,Ce.height);for(let te=0;te<6;te++){oe=ce[te].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){const Xe=oe[Pe];x.format!==vn?De!==null?z?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Xe.width,Xe.height,De,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,Ze,Xe.width,Xe.height,0,Xe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Xe.width,Xe.height,De,ye,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,Ze,Xe.width,Xe.height,0,De,ye,Xe.data)}}}else{if(oe=x.mipmaps,z&&me){oe.length>0&&we++;const te=Me(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,te.width,te.height)}for(let te=0;te<6;te++)if(re){z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,De,ye,ce[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,ce[te].width,ce[te].height,0,De,ye,ce[te].data);for(let Pe=0;Pe<oe.length;Pe++){const pt=oe[Pe].image[te].image;z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,pt.width,pt.height,De,ye,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,Ze,pt.width,pt.height,0,De,ye,pt.data)}}else{z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,ye,ce[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ze,De,ye,ce[te]);for(let Pe=0;Pe<oe.length;Pe++){const Xe=oe[Pe];z?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,De,ye,Xe.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,Ze,De,ye,Xe.image[te])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),J.__version=ne.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function $(C,x,F,Z,ne,J){const Ae=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),Re=E(F.internalFormat,Ae,fe,F.colorSpace),Ie=n.get(x),re=n.get(F);if(re.__renderTarget=x,!Ie.__hasExternalTextures){const ce=Math.max(1,x.width>>J),Ce=Math.max(1,x.height>>J);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,Re,ce,Ce,x.depth,0,Ae,fe,null):t.texImage2D(ne,J,Re,ce,Ce,0,Ae,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ne,re.__webglTexture,0,L(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ne,re.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const Z=x.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,J=M(x.stencilBuffer,ne),Ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(x),J,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{const Z=x.textures;for(let ne=0;ne<Z.length;ne++){const J=Z[ne],Ae=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),Re=E(J.internalFormat,Ae,fe,J.colorSpace);We(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(x),Re,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(x),Re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Re,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(C,x,F){const Z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(x.depthTexture);if(ne.__renderTarget=x,(!ne.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),X(i.TEXTURE_CUBE_MAP,x.depthTexture);const Ie=r.convert(x.depthTexture.format),re=r.convert(x.depthTexture.type);let ce;x.depthTexture.format===bi?ce=i.DEPTH_COMPONENT24:x.depthTexture.format===us&&(ce=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ce,x.width,x.height,0,Ie,re,null)}}else O(x.depthTexture,0);const J=ne.__webglTexture,Ae=L(x),fe=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Re=x.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===bi)We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,fe,J,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,Re,fe,J,0);else if(x.depthTexture.format===us)We(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,fe,J,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,Re,fe,J,0);else throw new Error("Unknown depthTexture format")}function se(C){const x=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=Z}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)le(x.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?le(x.__webglFramebuffer[0],C,0):le(x.__webglFramebuffer,C,0)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),ae(x.__webglDepthbuffer[Z],C,!1);else{const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ae(x.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(C,x,F){const Z=n.get(C);x!==void 0&&$(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&se(C)}function Se(C){const x=C.texture,F=n.get(C),Z=n.get(x);C.addEventListener("dispose",R);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),J){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Re=0;Re<x.mipmaps.length;Re++)F.__webglFramebuffer[fe][Re]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let fe=0,Re=ne.length;fe<Re;fe++){const Ie=n.get(ne[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&We(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const Re=ne[fe];F.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Ie=r.convert(Re.format,Re.colorSpace),re=r.convert(Re.type),ce=E(Re.internalFormat,Ie,re,Re.colorSpace,C.isXRRenderTarget===!0),Ce=L(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ce,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),X(i.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)$(F.__webglFramebuffer[fe][Re],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else $(F.__webglFramebuffer[fe],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,Re=ne.length;fe<Re;fe++){const Ie=ne[fe],re=n.get(Ie);let ce=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,re.__webglTexture),X(ce,Ie),$(F.__webglFramebuffer,C,Ie,i.COLOR_ATTACHMENT0+fe,ce,0),p(Ie)&&m(ce)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),X(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)$(F.__webglFramebuffer[Re],C,x,i.COLOR_ATTACHMENT0,fe,Re);else $(F.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,fe,0);p(x)&&m(fe),t.unbindTexture()}C.depthBuffer&&se(C)}function be(C){const x=C.textures;for(let F=0,Z=x.length;F<Z;F++){const ne=x[F];if(p(ne)){const J=y(C),Ae=n.get(ne).__webglTexture;t.bindTexture(J,Ae),m(J),t.unbindTexture()}}}const Te=[],ue=[];function Ge(C){if(C.samples>0){if(We(C)===!1){const x=C.textures,F=C.width,Z=C.height;let ne=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),fe=x.length>1;if(fe)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ie]);const re=n.get(x[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,ne,i.NEAREST),c===!0&&(Te.length=0,ue.length=0,Te.push(i.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Te.push(J),ue.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ie]);const re=n.get(x[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function L(C){return Math.min(s.maxSamples,C.samples)}function We(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ke(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function nt(C,x){const F=C.colorSpace,Z=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Jt&&F!==Oi&&(et.getTransfer(F)===ot?(Z!==vn||ne!==un)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",F)),x}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=Ue,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=$,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jM(i,e){function t(n,s=Oi){let r;const a=et.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hf)return i.BYTE;if(n===df)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===mf)return i.ALPHA;if(n===gf)return i.RGB;if(n===vn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Vc)return i.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===zl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Vl)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xl)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Yl||n===Kl||n===Zl||n===$l||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===hc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:YM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends xs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,_=null;const S=typeof XRWebGLBinding<"u",p=new ZM,m={},y=t.getContextAttributes();let E=null,M=null;const w=[],A=[],R=new Be;let g=null;const v=new kt;v.viewport=new _t;const D=new kt;D.viewport=new _t;const T=[v,D],P=new J_;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=w[W];return ie===void 0&&(ie=new Oo,w[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=w[W];return ie===void 0&&(ie=new Oo,w[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=w[W];return ie===void 0&&(ie=new Oo,w[W]=ie),ie.getHandSpace()};function O(W){const ie=A.indexOf(W.inputSource);if(ie===-1)return;const $=w[ie];$!==void 0&&($.update(W.inputSource,W.frame,l||a),$.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",N);for(let W=0;W<w.length;W++){const ie=A[W];ie!==null&&(A[W]=null,w[W].disconnect(ie))}I=null,k=null,p.reset();for(const W in m)delete m[W];e.setRenderTarget(E),f=null,h=null,d=null,s=null,M=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ae=null,le=null;y.depth&&(le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=y.stencil?us:bi,ae=y.stencil?Jr:Jn);const se={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(se),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Kn(h.textureWidth,h.textureHeight,{format:vn,type:un,depthTexture:new sa(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const $={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Kn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(W){for(let ie=0;ie<W.removed.length;ie++){const $=W.removed[ie],ae=A.indexOf($);ae>=0&&(A[ae]=null,w[ae].disconnect($))}for(let ie=0;ie<W.added.length;ie++){const $=W.added[ie];let ae=A.indexOf($);if(ae===-1){for(let se=0;se<w.length;se++)if(se>=A.length){A.push($),ae=se;break}else if(A[se]===null){A[se]=$,ae=se;break}if(ae===-1)break}const le=w[ae];le&&le.connect($)}}const Q=new U,V=new U;function ee(W,ie,$){Q.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition($.matrixWorld);const ae=Q.distanceTo(V),le=ie.projectionMatrix.elements,se=$.projectionMatrix.elements,Ue=le[14]/(le[10]-1),Se=le[14]/(le[10]+1),be=(le[9]+1)/le[5],Te=(le[9]-1)/le[5],ue=(le[8]-1)/le[0],Ge=(se[8]+1)/se[0],L=Ue*ue,We=Ue*Ge,ke=ae/(-ue+Ge),nt=ke*-ue;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(ke),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),le[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=Ue+ke,C=Se+ke,x=L-nt,F=We+(ae-nt),Z=be*Se/C*Me,ne=Te*Se/C*Me;W.projectionMatrix.makePerspective(x,F,Z,ne,Me,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function G(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ie=W.near,$=W.far;p.texture!==null&&(p.depthNear>0&&(ie=p.depthNear),p.depthFar>0&&($=p.depthFar)),P.near=D.near=v.near=ie,P.far=D.far=v.far=$,(I!==P.near||k!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,k=P.far),P.layers.mask=W.layers.mask|6,v.layers.mask=P.layers.mask&-5,D.layers.mask=P.layers.mask&-3;const ae=W.parent,le=P.cameras;G(P,ae);for(let se=0;se<le.length;se++)G(le[se],ae);le.length===2?ee(P,v,D):P.projectionMatrix.copy(v.projectionMatrix),X(W,P,ae)};function X(W,ie,$){$===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy($.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(W){return m[W]};let Y=null;function ge(W,ie){if(u=ie.getViewerPose(l||a),_=ie,u!==null){const $=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ae=!1;$.length!==P.cameras.length&&(P.cameras.length=0,ae=!0);for(let Se=0;Se<$.length;Se++){const be=$[Se];let Te=null;if(f!==null)Te=f.getViewport(be);else{const Ge=d.getViewSubImage(h,be);Te=Ge.viewport,Se===0&&(e.setRenderTargetTextures(M,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(M))}let ue=T[Se];ue===void 0&&(ue=new kt,ue.layers.enable(Se),ue.viewport=new _t,T[Se]=ue),ue.matrix.fromArray(be.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(be.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Te.x,Te.y,Te.width,Te.height),Se===0&&(P.matrix.copy(ue.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ae===!0&&P.cameras.push(ue)}const le=s.enabledFeatures;if(le&&le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const Se=d.getDepthInformation($[0]);Se&&Se.isValid&&Se.texture&&p.init(Se,s.renderState)}if(le&&le.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let Se=0;Se<$.length;Se++){const be=$[Se].camera;if(be){let Te=m[be];Te||(Te=new Cf,m[be]=Te);const ue=d.getCameraImage(be);Te.sourceTexture=ue}}}}for(let $=0;$<w.length;$++){const ae=A[$],le=w[$];ae!==null&&le!==void 0&&le.update(ae,ie,l||a)}Y&&Y(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const he=new Ff;he.setAnimationLoop(ge),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}const is=new Qn,JM=new je;function QM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Pf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,E,M){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,y,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),E=y.envMap,M=y.envMapRotation;E&&(p.envMap.value=E,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(is)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ey(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const M=E.program;n.uniformBlockBinding(y,M)}function l(y,E){let M=s[y.id];M===void 0&&(_(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",p));const w=E.program;n.updateUBOMapping(y,w);const A=e.render.frame;r[y.id]!==A&&(h(y),r[y.id]=A)}function u(y){const E=d();y.__bindingPointIndex=E;const M=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,R=M.length;A<R;A++){const g=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,D=g.length;v<D;v++){const T=g[v];if(f(T,A,v,w)===!0){const P=T.__offset,I=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let O=0;O<I.length;O++){const B=I[O],N=S(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,P+k,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,k),k+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,M,w){const A=y.value,R=E+"_"+M;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const g=w[R];if(typeof A=="number"||typeof A=="boolean"){if(g!==A)return w[R]=A,!0}else if(g.equals(A)===!1)return g.copy(A),!0}return!1}function _(y){const E=y.uniforms;let M=0;const w=16;for(let R=0,g=E.length;R<g;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let D=0,T=v.length;D<T;D++){const P=v[D],I=Array.isArray(P.value)?P.value:[P.value];for(let k=0,O=I.length;k<O;k++){const B=I[k],N=S(B),Q=M%w,V=Q%N.boundary,ee=Q+V;M+=V,ee!==0&&w-ee<N.storage&&(M+=w-ee),P.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=N.storage}}}const A=M%w;return A>0&&(M+=w-A),y.__size=M,y.__cache={},this}function S(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",y),E}function p(y){const E=y.target;E.removeEventListener("dispose",p);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}const ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function ny(){return kn===null&&(kn=new Yc(ty,16,16,lr,yi),kn.name="DFG_LUT",kn.minFilter=Pt,kn.magFilter=Pt,kn.wrapS=Xn,kn.wrapT=Xn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class nu{constructor(e={}){const{canvas:t=Cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=f,p=new Set([Vc,kc,Bc]),m=new Set([un,Jn,$r,Jr,Fc,Oc]),y=new Uint32Array(4),E=new Int32Array(4);let M=null,w=null;const A=[],R=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let D=!1;this._outputColorSpace=Bt;let T=0,P=0,I=null,k=-1,O=null;const B=new _t,N=new _t;let Q=null;const V=new He(0);let ee=0,G=t.width,X=t.height,Y=1,ge=null,he=null;const W=new _t(0,0,G,X),ie=new _t(0,0,G,X);let $=!1;const ae=new Zc;let le=!1,se=!1;const Ue=new je,Se=new U,be=new _t,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Ge(){return I===null?Y:1}let L=n;function We(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",pt,!1),L===null){const H="webgl2";if(L=We(H,b),L===null)throw We(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ve("WebGLRenderer: "+b.message),b}let ke,nt,Me,C,x,F,Z,ne,J,Ae,fe,Re,Ie,re,ce,Ce,De,ye,Ze,z,me,de,we;function oe(){ke=new iS(L),ke.init(),me=new jM(L,ke),nt=new Kx(L,ke,e,me),Me=new XM(L,ke),nt.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),C=new aS(L),x=new DM,F=new qM(L,ke,Me,x,nt,me,C),Z=new nS(v),ne=new h0(L),de=new jx(L,ne),J=new sS(L,ne,C,de),Ae=new lS(L,J,ne,de,C),ye=new oS(L,nt,F),ce=new Zx(x),fe=new PM(v,Z,ke,nt,de,ce),Re=new QM(v,x),Ie=new IM,re=new BM(ke),De=new qx(v,Z,Me,Ae,_,c),Ce=new WM(v,Ae,nt),we=new ey(L,C,nt,Me),Ze=new Yx(L,ke,C),z=new rS(L,ke,C),C.programs=fe.programs,v.capabilities=nt,v.extensions=ke,v.properties=x,v.renderLists=Ie,v.shadowMap=Ce,v.state=Me,v.info=C}oe(),S!==un&&(g=new uS(S,t.width,t.height,s,r));const te=new $M(v,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(G,X,!1))},this.getSize=function(b){return b.set(G,X)},this.setSize=function(b,H,K=!0){if(te.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,X=H,t.width=Math.floor(b*Y),t.height=Math.floor(H*Y),K===!0&&(t.style.width=b+"px",t.style.height=H+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(G*Y,X*Y).floor()},this.setDrawingBufferSize=function(b,H,K){G=b,X=H,Y=K,t.width=Math.floor(b*K),t.height=Math.floor(H*K),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(S===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,H,K,j){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,H,K,j),Me.viewport(B.copy(W).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,H,K,j){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,H,K,j),Me.scissor(N.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){Me.setScissorTest($=b)},this.setOpaqueSort=function(b){ge=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,K=!0){let j=0;if(b){let q=!1;if(I!==null){const ve=I.texture.format;q=p.has(ve)}if(q){const ve=I.texture.type,Ee=m.has(ve),xe=De.getClearColor(),Le=De.getClearAlpha(),Fe=xe.r,qe=xe.g,$e=xe.b;Ee?(y[0]=Fe,y[1]=qe,y[2]=$e,y[3]=Le,L.clearBufferuiv(L.COLOR,0,y)):(E[0]=Fe,E[1]=qe,E[2]=$e,E[3]=Le,L.clearBufferiv(L.COLOR,0,E))}else j|=L.COLOR_BUFFER_BIT}H&&(j|=L.DEPTH_BUFFER_BIT),K&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),De.dispose(),Ie.dispose(),re.dispose(),x.dispose(),Z.dispose(),Ae.dispose(),de.dispose(),we.dispose(),fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",ru),te.removeEventListener("sessionend",au),Ki.stop()};function Pe(b){b.preventDefault(),fo("WebGLRenderer: Context Lost."),D=!0}function Xe(){fo("WebGLRenderer: Context Restored."),D=!1;const b=C.autoReset,H=Ce.enabled,K=Ce.autoUpdate,j=Ce.needsUpdate,q=Ce.type;oe(),C.autoReset=b,Ce.enabled=H,Ce.autoUpdate=K,Ce.needsUpdate=j,Ce.type=q}function pt(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const H=b.target;H.removeEventListener("dispose",at),ri(H)}function ri(b){ai(b),x.remove(b)}function ai(b){const H=x.get(b).programs;H!==void 0&&(H.forEach(function(K){fe.releaseProgram(K)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,K,j,q,ve){H===null&&(H=Te);const Ee=q.isMesh&&q.matrixWorld.determinant()<0,xe=Yf(b,H,K,j,q);Me.setMaterial(j,Ee);let Le=K.index,Fe=1;if(j.wireframe===!0){if(Le=J.getWireframeAttribute(K),Le===void 0)return;Fe=2}const qe=K.drawRange,$e=K.attributes.position;let ze=qe.start*Fe,ut=(qe.start+qe.count)*Fe;ve!==null&&(ze=Math.max(ze,ve.start*Fe),ut=Math.min(ut,(ve.start+ve.count)*Fe)),Le!==null?(ze=Math.max(ze,0),ut=Math.min(ut,Le.count)):$e!=null&&(ze=Math.max(ze,0),ut=Math.min(ut,$e.count));const yt=ut-ze;if(yt<0||yt===1/0)return;de.setup(q,j,xe,K,Le);let St,ht=Ze;if(Le!==null&&(St=ne.get(Le),ht=z,ht.setIndex(St)),q.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*Ge()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(q.isLine){let Gt=j.linewidth;Gt===void 0&&(Gt=1),Me.setLineWidth(Gt*Ge()),q.isLineSegments?ht.setMode(L.LINES):q.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else q.isPoints?ht.setMode(L.POINTS):q.isSprite&&ht.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ht.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Gt=q._multiDrawStarts,Ne=q._multiDrawCounts,an=q._multiDrawCount,it=Le?ne.get(Le).bytesPerElement:1,Tn=x.get(j).currentProgram.getUniforms();for(let zn=0;zn<an;zn++)Tn.setValue(L,"_gl_DrawID",zn),ht.render(Gt[zn]/it,Ne[zn])}else if(q.isInstancedMesh)ht.renderInstances(ze,yt,q.count);else if(K.isInstancedBufferGeometry){const Gt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ne=Math.min(K.instanceCount,Gt);ht.renderInstances(ze,yt,Ne)}else ht.render(ze,yt)};function su(b,H,K){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,fa(b,H,K),b.side=Mi,b.needsUpdate=!0,fa(b,H,K),b.side=sn):fa(b,H,K)}this.compile=function(b,H,K=null){K===null&&(K=b),w=re.get(K),w.init(H),R.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),b!==K&&b.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const j=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ve=q.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const xe=ve[Ee];su(xe,K,q),j.add(xe)}else su(ve,K,q),j.add(ve)}),w=R.pop(),j},this.compileAsync=function(b,H,K=null){const j=this.compile(b,H,K);return new Promise(q=>{function ve(){if(j.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){q(b);return}setTimeout(ve,10)}ke.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let wo=null;function jf(b){wo&&wo(b)}function ru(){Ki.stop()}function au(){Ki.start()}const Ki=new Ff;Ki.setAnimationLoop(jf),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(b){wo=b,te.setAnimationLoop(b),b===null?Ki.stop():Ki.start()},te.addEventListener("sessionstart",ru),te.addEventListener("sessionend",au),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const K=te.enabled===!0&&te.isPresenting===!0,j=g!==null&&(I===null||K)&&g.begin(v,I);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(H),H=te.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,H,I),w=re.get(b,R.length),w.init(H),R.push(w),Ue.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(Ue,qn,H.reversedDepth),se=this.localClippingEnabled,le=ce.init(this.clippingPlanes,se),M=Ie.get(b,A.length),M.init(),A.push(M),te.enabled===!0&&te.isPresenting===!0){const Ee=v.xr.getDepthSensingMesh();Ee!==null&&Ro(Ee,H,-1/0,v.sortObjects)}Ro(b,H,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(ge,he),ue=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ue&&De.addToRenderList(M,b),this.info.render.frame++,le===!0&&ce.beginShadows();const q=w.state.shadowsArray;if(Ce.render(q,b,H),le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&g.hasRenderPass())===!1){const Ee=M.opaque,xe=M.transmissive;if(w.setupLights(),H.isArrayCamera){const Le=H.cameras;if(xe.length>0)for(let Fe=0,qe=Le.length;Fe<qe;Fe++){const $e=Le[Fe];lu(Ee,xe,b,$e)}ue&&De.render(b);for(let Fe=0,qe=Le.length;Fe<qe;Fe++){const $e=Le[Fe];ou(M,b,$e,$e.viewport)}}else xe.length>0&&lu(Ee,xe,b,H),ue&&De.render(b),ou(M,b,H)}I!==null&&P===0&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),j&&g.end(v),b.isScene===!0&&b.onAfterRender(v,b,H),de.resetDefaultState(),k=-1,O=null,R.pop(),R.length>0?(w=R[R.length-1],le===!0&&ce.setGlobalState(v.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Ro(b,H,K,j){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ae.intersectsSprite(b)){j&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ue);const Ee=Ae.update(b),xe=b.material;xe.visible&&M.push(b,Ee,xe,K,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ae.intersectsObject(b))){const Ee=Ae.update(b),xe=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),be.copy(Ee.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(Ue)),Array.isArray(xe)){const Le=Ee.groups;for(let Fe=0,qe=Le.length;Fe<qe;Fe++){const $e=Le[Fe],ze=xe[$e.materialIndex];ze&&ze.visible&&M.push(b,Ee,ze,K,be.z,$e)}}else xe.visible&&M.push(b,Ee,xe,K,be.z,null)}}const ve=b.children;for(let Ee=0,xe=ve.length;Ee<xe;Ee++)Ro(ve[Ee],H,K,j)}function ou(b,H,K,j){const{opaque:q,transmissive:ve,transparent:Ee}=b;w.setupLightsView(K),le===!0&&ce.setGlobalState(v.clippingPlanes,K),j&&Me.viewport(B.copy(j)),q.length>0&&da(q,H,K),ve.length>0&&da(ve,H,K),Ee.length>0&&da(Ee,H,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function lu(b,H,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){const ze=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new Kn(1,1,{generateMipmaps:!0,type:ze?yi:un,minFilter:mi,samples:nt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ve=w.state.transmissionRenderTarget[j.id],Ee=j.viewport||B;ve.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);const xe=v.getRenderTarget(),Le=v.getActiveCubeFace(),Fe=v.getActiveMipmapLevel();v.setRenderTarget(ve),v.getClearColor(V),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),ue&&De.render(K);const qe=v.toneMapping;v.toneMapping=Yn;const $e=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),le===!0&&ce.setGlobalState(v.clippingPlanes,j),da(b,K,j),F.updateMultisampleRenderTarget(ve),F.updateRenderTargetMipmap(ve),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ut=0,yt=H.length;ut<yt;ut++){const St=H[ut],{object:ht,geometry:Gt,material:Ne,group:an}=St;if(Ne.side===sn&&ht.layers.test(j.layers)){const it=Ne.side;Ne.side=rn,Ne.needsUpdate=!0,cu(ht,K,j,Gt,Ne,an),Ne.side=it,Ne.needsUpdate=!0,ze=!0}}ze===!0&&(F.updateMultisampleRenderTarget(ve),F.updateRenderTargetMipmap(ve))}v.setRenderTarget(xe,Le,Fe),v.setClearColor(V,ee),$e!==void 0&&(j.viewport=$e),v.toneMapping=qe}function da(b,H,K){const j=H.isScene===!0?H.overrideMaterial:null;for(let q=0,ve=b.length;q<ve;q++){const Ee=b[q],{object:xe,geometry:Le,group:Fe}=Ee;let qe=Ee.material;qe.allowOverride===!0&&j!==null&&(qe=j),xe.layers.test(K.layers)&&cu(xe,H,K,Le,qe,Fe)}}function cu(b,H,K,j,q,ve){b.onBeforeRender(v,H,K,j,q,ve),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(v,H,K,j,b,ve),q.transparent===!0&&q.side===sn&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,v.renderBufferDirect(K,H,j,q,b,ve),q.side=Mi,q.needsUpdate=!0,v.renderBufferDirect(K,H,j,q,b,ve),q.side=sn):v.renderBufferDirect(K,H,j,q,b,ve),b.onAfterRender(v,H,K,j,q,ve)}function fa(b,H,K){H.isScene!==!0&&(H=Te);const j=x.get(b),q=w.state.lights,ve=w.state.shadowsArray,Ee=q.state.version,xe=fe.getParameters(b,q.state,ve,H,K),Le=fe.getProgramCacheKey(xe);let Fe=j.programs;j.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;const qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;j.envMap=Z.get(b.envMap||j.environment,qe),j.envMapRotation=j.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",at),Fe=new Map,j.programs=Fe);let $e=Fe.get(Le);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===Ee)return hu(b,xe),$e}else xe.uniforms=fe.getUniforms(b),b.onBeforeCompile(xe,v),$e=fe.acquireProgram(xe,Le),Fe.set(Le,$e),j.uniforms=xe.uniforms;const ze=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ce.uniform),hu(b,xe),j.needsLights=Zf(b),j.lightsStateVersion=Ee,j.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function uu(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=ro.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function hu(b,H){const K=x.get(b);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Yf(b,H,K,j,q){H.isScene!==!0&&(H=Te),F.resetTextureUnits();const ve=H.fog,Ee=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,xe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jt,Le=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Fe=Z.get(j.envMap||Ee,Le),qe=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,yt=!!K.morphAttributes.color;let St=Yn;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(St=v.toneMapping);const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Gt=ht!==void 0?ht.length:0,Ne=x.get(j),an=w.state.lights;if(le===!0&&(se===!0||b!==O)){const Ut=b===O&&j.id===k;ce.setState(j,b,Ut)}let it=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==an.state.version||Ne.outputColorSpace!==xe||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Fe||j.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==qe||Ne.vertexTangents!==$e||Ne.morphTargets!==ze||Ne.morphNormals!==ut||Ne.morphColors!==yt||Ne.toneMapping!==St||Ne.morphTargetsCount!==Gt)&&(it=!0):(it=!0,Ne.__version=j.version);let Tn=Ne.currentProgram;it===!0&&(Tn=fa(j,H,q));let zn=!1,Zi=!1,Ms=!1;const ft=Tn.getUniforms(),Ot=Ne.uniforms;if(Me.useProgram(Tn.program)&&(zn=!0,Zi=!0,Ms=!0),j.id!==k&&(k=j.id,Zi=!0),zn||O!==b){Me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(L,"projectionMatrix",b.projectionMatrix),ft.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ai=ft.map.cameraPosition;Ai!==void 0&&Ai.setValue(L,Se.setFromMatrixPosition(b.matrixWorld)),nt.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,Zi=!0,Ms=!0)}if(Ne.needsLights&&(an.state.directionalShadowMap.length>0&&ft.setValue(L,"directionalShadowMap",an.state.directionalShadowMap,F),an.state.spotShadowMap.length>0&&ft.setValue(L,"spotShadowMap",an.state.spotShadowMap,F),an.state.pointShadowMap.length>0&&ft.setValue(L,"pointShadowMap",an.state.pointShadowMap,F)),q.isSkinnedMesh){ft.setOptional(L,q,"bindMatrix"),ft.setOptional(L,q,"bindMatrixInverse");const Ut=q.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(L,"boneTexture",Ut.boneTexture,F))}q.isBatchedMesh&&(ft.setOptional(L,q,"batchingTexture"),ft.setValue(L,"batchingTexture",q._matricesTexture,F),ft.setOptional(L,q,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",q._indirectTexture,F),ft.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",q._colorsTexture,F));const Ti=K.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ye.update(q,K,Tn),(Zi||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,ft.setValue(L,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(Ot.envMapIntensity.value=H.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=ny()),Zi&&(ft.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&Kf(Ot,Ms),ve&&j.fog===!0&&Re.refreshFogUniforms(Ot,ve),Re.refreshMaterialUniforms(Ot,j,Y,X,w.state.transmissionRenderTarget[b.id]),ro.upload(L,uu(Ne),Ot,F)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ro.upload(L,uu(Ne),Ot,F),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(L,"center",q.center),ft.setValue(L,"modelViewMatrix",q.modelViewMatrix),ft.setValue(L,"normalMatrix",q.normalMatrix),ft.setValue(L,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ut=j.uniformsGroups;for(let Ai=0,ys=Ut.length;Ai<ys;Ai++){const du=Ut[Ai];we.update(du,Tn),we.bind(du,Tn)}}return Tn}function Kf(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Zf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,H,K){const j=x.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=H,x.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const K=x.get(b);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const $f=L.createFramebuffer();this.setRenderTarget=function(b,H=0,K=0){I=b,T=H,P=K;let j=null,q=!1,ve=!1;if(b){const xe=x.get(b);if(xe.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),B.copy(b.viewport),N.copy(b.scissor),Q=b.scissorTest,Me.viewport(B),Me.scissor(N),Me.setScissorTest(Q),k=-1;return}else if(xe.__webglFramebuffer===void 0)F.setupRenderTarget(b);else if(xe.__hasExternalTextures)F.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qe=b.depthTexture;if(xe.__boundDepthTexture!==qe){if(qe!==null&&x.has(qe)&&(b.width!==qe.image.width||b.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(b)}}const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ve=!0);const Fe=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?j=Fe[H][K]:j=Fe[H],q=!0):b.samples>0&&F.useMultisampledRTT(b)===!1?j=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[K]:j=Fe,B.copy(b.viewport),N.copy(b.scissor),Q=b.scissorTest}else B.copy(W).multiplyScalar(Y).floor(),N.copy(ie).multiplyScalar(Y).floor(),Q=$;if(K!==0&&(j=$f),Me.bindFramebuffer(L.FRAMEBUFFER,j)&&Me.drawBuffers(b,j),Me.viewport(B),Me.scissor(N),Me.setScissorTest(Q),q){const xe=x.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,xe.__webglTexture,K)}else if(ve){const xe=H;for(let Le=0;Le<b.textures.length;Le++){const Fe=x.get(b.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,K,xe)}}else if(b!==null&&K!==0){const xe=x.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,K)}k=-1},this.readRenderTargetPixels=function(b,H,K,j,q,ve,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){Me.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Fe=b.textures[xe],qe=Fe.format,$e=Fe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!nt.textureFormatReadable(qe)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable($e)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-j&&K>=0&&K<=b.height-q&&L.readPixels(H,K,j,q,me.convert(qe),me.convert($e),ve)}finally{const Fe=I!==null?x.get(I).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,H,K,j,q,ve,Ee,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le)if(H>=0&&H<=b.width-j&&K>=0&&K<=b.height-q){Me.bindFramebuffer(L.FRAMEBUFFER,Le);const Fe=b.textures[xe],qe=Fe.format,$e=Fe.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!nt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ze),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),L.readPixels(H,K,j,q,me.convert(qe),me.convert($e),0);const ut=I!==null?x.get(I).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ut);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pg(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(ze),L.deleteSync(yt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,K=0){const j=Math.pow(2,-K),q=Math.floor(b.image.width*j),ve=Math.floor(b.image.height*j),Ee=H!==null?H.x:0,xe=H!==null?H.y:0;F.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Ee,xe,q,ve),Me.unbindTexture()};const Jf=L.createFramebuffer(),Qf=L.createFramebuffer();this.copyTextureToTexture=function(b,H,K=null,j=null,q=0,ve=0){let Ee,xe,Le,Fe,qe,$e,ze,ut,yt;const St=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(K!==null)Ee=K.max.x-K.min.x,xe=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Fe=K.min.x,qe=K.min.y,$e=K.isBox3?K.min.z:0;else{const Ot=Math.pow(2,-q);Ee=Math.floor(St.width*Ot),xe=Math.floor(St.height*Ot),b.isDataArrayTexture?Le=St.depth:b.isData3DTexture?Le=Math.floor(St.depth*Ot):Le=1,Fe=0,qe=0,$e=0}j!==null?(ze=j.x,ut=j.y,yt=j.z):(ze=0,ut=0,yt=0);const ht=me.convert(H.format),Gt=me.convert(H.type);let Ne;H.isData3DTexture?(F.setTexture3D(H,0),Ne=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(F.setTexture2DArray(H,0),Ne=L.TEXTURE_2D_ARRAY):(F.setTexture2D(H,0),Ne=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const an=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),zn=L.getParameter(L.UNPACK_SKIP_ROWS),Zi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$e);const Ms=b.isDataArrayTexture||b.isData3DTexture,ft=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Ot=x.get(b),Ti=x.get(H),Ut=x.get(Ot.__renderTarget),Ai=x.get(Ti.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ys=0;ys<Le;ys++)Ms&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(b).__webglTexture,q,$e+ys),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(H).__webglTexture,ve,yt+ys)),L.blitFramebuffer(Fe,qe,Ee,xe,ze,ut,Ee,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||x.has(b)){const Ot=x.get(b),Ti=x.get(H);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Jf),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qf);for(let Ut=0;Ut<Le;Ut++)Ms?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,q,$e+Ut):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,q),ft?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ti.__webglTexture,ve,yt+Ut):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ti.__webglTexture,ve),q!==0?L.blitFramebuffer(Fe,qe,Ee,xe,ze,ut,Ee,xe,L.COLOR_BUFFER_BIT,L.NEAREST):ft?L.copyTexSubImage3D(Ne,ve,ze,ut,yt+Ut,Fe,qe,Ee,xe):L.copyTexSubImage2D(Ne,ve,ze,ut,Fe,qe,Ee,xe);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ne,ve,ze,ut,yt,Ee,xe,Le,ht,Gt,St.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,ve,ze,ut,yt,Ee,xe,Le,ht,St.data):L.texSubImage3D(Ne,ve,ze,ut,yt,Ee,xe,Le,ht,Gt,St):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ve,ze,ut,Ee,xe,ht,Gt,St.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ve,ze,ut,St.width,St.height,ht,St.data):L.texSubImage2D(L.TEXTURE_2D,ve,ze,ut,Ee,xe,ht,Gt,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,an),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,zn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zi),ve===0&&H.generateMipmaps&&L.generateMipmap(Ne),Me.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&F.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?F.setTextureCube(b,0):b.isData3DTexture?F.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?F.setTexture2DArray(b,0):F.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){T=0,P=0,I=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Qh(i){return Object.prototype.toString.call(i)==="[object Date]"}function iy(i){return i}function sy(i){const e=i-1;return e*e*e+1}function Mc(i,e){if(i===e||i!==i)return()=>i;const t=typeof i;if(t!==typeof e||Array.isArray(i)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const n=e.map((s,r)=>Mc(i[r],s));return s=>n.map(r=>r(s))}if(t==="object"){if(!i||!e)throw new Error("Object cannot be null");if(Qh(i)&&Qh(e)){const r=i.getTime(),o=e.getTime()-r;return c=>new Date(r+c*o)}const n=Object.keys(e),s={};return n.forEach(r=>{s[r]=Mc(i[r],e[r])}),r=>{const a={};return n.forEach(o=>{a[o]=s[o](r)}),a}}if(t==="number"){const n=e-i;return s=>i+s*n}return()=>e}function ry(i,e={}){const t=Om(i);let n,s=i;function r(a,o){if(s=a,i==null)return t.set(i=a),Promise.resolve();let c=n,l=!1,{delay:u=0,duration:d=400,easing:h=iy,interpolate:f=Mc}={...e,...o};if(d===0)return c&&(c.abort(),c=null),t.set(i=s),Promise.resolve();const _=Wn.now()+u;let S;return n=Rm(p=>{if(p<_)return!0;l||(S=f(i,a),typeof d=="function"&&(d=d(i,a)),l=!0),c&&(c.abort(),c=null);const m=p-_;return m>d?(t.set(i=a),!1):(t.set(i=S(h(m/d))),!0)}),n.promise}return{set:r,update:(a,o)=>r(a(s,i),o),subscribe:t.subscribe}}function ed(i,e){if(e===vg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pc||e===_f){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===pc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function ay(i){const e=new Map,t=new Map,n=i.clone();return Hf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Hf(i.children[n],e.children[n],t)}class Gf extends Mr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new td(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new td(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ey(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=jr.extractUrlBase(e);a=jr.resolveURL(l,this.path)}else a=jr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new If(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wf){try{a[Qe.KHR_BINARY_GLTF]=new Ty(e)}catch(d){s&&s(d);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new zy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:a[d]=new cy;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ay(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[d]=new wy;break;case Qe.KHR_MESH_QUANTIZATION:a[d]=new Ry;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function oy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function bt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ly{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new He(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Jt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Uf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Y_(u),l.distance=d;break;case"spot":l=new q_(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class cy{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){const s=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}}class uy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class hy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(r,r)}return Promise.all(s)}}class dy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class py{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class my{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class gy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],Jt),Promise.all(s)}}class _y{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class vy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],Jt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(s)}}class xy{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class Sy{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return bt(this.parser,e,this.name)!==null?si:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class My{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class yy{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class by{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class td{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}}class Ey{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const _ of d){const S=new je,p=new U,m=new En,y=new U(1,1,1),E=new g_(_.geometry,_.material,h);for(let M=0;M<h;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),E.setMatrixAt(M,S.compose(p,m,y));for(const M in c)if(M==="_COLOR_0"){const w=c[M];E.instanceColor=new gc(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,c[M]);xt.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Wf="glTF",Fr=12,nd={JSON:1313821514,BIN:5130562};class Ty{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Fr,r=new DataView(e,Fr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===nd.JSON){const l=new Uint8Array(e,Fr+a,o);this.content=n.decode(l)}else if(c===nd.BIN){const l=Fr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ay{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const d=yc[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=yc[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],f=tr[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(const _ in f.attributes){const S=f.attributes[_],p=c[_];p!==void 0&&(S.normalized=p)}d(f)},o,l,Jt,h)})})}}class wy{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ry{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class Xf extends vr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,_=e*l,S=_-l,p=-2*f+3*h,m=f-h,y=1-p,E=m-h+d;for(let M=0;M!==o;M++){const w=a[S+M+o],A=a[S+M+c]*u,R=a[_+M+o],g=a[_+M]*u;r[M]=y*w+E*A+p*R+m*g}return r}}const Cy=new En;class Py extends Xf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Cy.fromArray(r).normalize().toArray(r),r}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},id={9728:Ct,9729:Pt,9984:uf,9985:eo,9986:Br,9987:mi},sd={33071:Xn,33648:uo,10497:or},dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dy={CUBICSPLINE:void 0,LINEAR:ea,STEP:Qr},fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ly(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mi})),i.DefaultMaterial}function ss(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Iy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Ny(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uy(i){let e;const t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pl(t.attributes):e=i.indices+":"+pl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+pl(i.targets[n]);return e}function pl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Oy=new je;class zy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new W_(this.options.manager):this.textureLoader=new Z_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new If(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ss(r,o,s),Vn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(jr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=dl[s.type],o=tr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new $t(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=dl[s.type],l=tr[s.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let S,p;if(f&&f!==d){const m=Math.floor(h/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let E=t.cache.get(y);E||(S=new l(o,m*f,s.count*f/u),E=new Ef(S,f/u),t.cache.add(y,E)),p=new ia(E,c,h%f/u,_)}else o===null?S=new l(s.count*c):S=new l(o,h,s.count*c),p=new $t(S,c,_);if(s.sparse!==void 0){const m=dl.SCALAR,y=tr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new y(a[1],E,s.sparse.count*m),A=new l(a[2],M,s.sparse.count*c);o!==null&&(p=new $t(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,g=w.length;R<g;R++){const v=w[R];if(p.setX(v,A[R*c]),c>=2&&p.setY(v,A[R*c+1]),c>=3&&p.setZ(v,A[R*c+2]),c>=4&&p.setW(v,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=id[h.magFilter]||Pt,u.minFilter=id[h.minFilter]||mi,u.wrapS=sd[h.wrapS]||or,u.wrapT=sd[h.wrapT]||or,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ct&&u.minFilter!==Pt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let _=h;t.isImageBitmapLoader===!0&&(_=function(S){const p=new Lt(S);p.needsUpdate=!0,h(p)}),t.load(jr.resolveURL(d,r.path),_,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Vn(d,a),d.userData.mimeType=a.mimeType||Fy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wf,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new xn,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xi}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){const d=s[Qe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Jt),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Bt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);const u=r.alphaMode||fl.OPAQUE;if(u===fl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===fl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Rt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rt){const d=r.emissiveFactor;o.emissive=new He().setRGB(d[0],d[1],d[2],Jt)}return r.emissiveTexture!==void 0&&a!==Rt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Vn(d,r),t.associations.set(d,{materials:e}),r.extensions&&ss(s,d,r),d})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return rd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Uy(l),d=s[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=rd(new mt,l,t),s[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Ly(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,_=u.length;f<_;f++){const S=u[f],p=a[f];let m;const y=l[f];if(p.mode===mn.TRIANGLES||p.mode===mn.TRIANGLE_STRIP||p.mode===mn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new f_(S,y):new rt(S,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===mn.TRIANGLE_STRIP?m.geometry=ed(m.geometry,_f):p.mode===mn.TRIANGLE_FAN&&(m.geometry=ed(m.geometry,pc));else if(p.mode===mn.LINES)m=new S_(S,y);else if(p.mode===mn.LINE_STRIP)m=new hn(S,y);else if(p.mode===mn.LINE_LOOP)m=new M_(S,y);else if(p.mode===mn.POINTS)m=new y_(S,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ny(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vn(m,r),p.extensions&&ss(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,_=d.length;f<_;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&ss(s,d[0],r),d[0];const h=new Zt;r.extensions&&ss(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,_=d.length;f<_;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt($s.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Eo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const d=a[l];if(d){o.push(d);const h=new je;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Kc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const f=s.channels[d],_=s.samplers[f.sampler],S=f.target,p=S.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,y=s.parameters!==void 0?s.parameters[_.output]:_.output;S.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(_),u.push(S))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],_=d[2],S=d[3],p=d[4],m=[];for(let E=0,M=h.length;E<M;E++){const w=h[E],A=f[E],R=_[E],g=S[E],v=p[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const D=n._createAnimationTracks(w,A,R,g,v);if(D)for(let T=0;T<D.length;T++)m.push(D[T])}const y=new O_(r,void 0,m);return Vn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Oy)});for(let f=0,_=d.length;f<_;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,_=d[0];u.pivot=new U().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],_.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Af:l.length>1?u=new Zt:l.length===1?u=l[0]:u=new xt,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Vn(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){const d=new je;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Zt;n.name&&(r.name=s.createUniqueName(n.name)),Vn(r,n),n.extensions&&ss(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){const h=c[u];h.parent!==null?r.add(ay(h)):r.add(h)}const l=u=>{const d=new Map;for(const[h,f]of s.associations)(h instanceof Un||h instanceof Lt)&&d.set(h,f);return u.traverse(h=>{const f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let l;switch(Ui[r.path]){case Ui.weights:l=hr;break;case Ui.rotation:l=dr;break;case Ui.translation:case Ui.scale:l=fr;break;default:n.itemSize===1?l=hr:l=fr;break}const u=s.interpolation!==void 0?Dy[s.interpolation]:ea,d=this._getArrayFromAccessor(n);for(let h=0,f=c.length;h<f;h++){const _=new l(c[h]+"."+Ui[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=bc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof dr?Py:Xf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function By(i,e,t){const n=e.attributes,s=new ni;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){const u=bc(tr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,_=h.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),h.normalized){const S=bc(tr[h.componentType]);c.multiplyScalar(S)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new ii;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function rd(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=yc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Vn(i,e),By(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Iy(i,e.targets,t):i})}var ky=Yi('<img class="drawing-image svelte-9fg3t2"/>'),Vy=Yi('<div class="scroll-section svelte-9fg3t2"></div>'),Hy=Yi('<div class="layout svelte-9fg3t2"><div class="globe svelte-9fg3t2"></div> <div class="info svelte-9fg3t2"><div class="info-content svelte-9fg3t2"><p class="svelte-9fg3t2">Colônia de Una, Bahia ✤ Escala de Bortle: 3-5</p> <h2 class="svelte-9fg3t2"> </h2> <p style="" class="svelte-9fg3t2"> </p> <div style="height:20px;border-bottom: #9ea7e5 1px solid;padding-bottom:10px;width:50%;text-align: center;margin:auto"></div> <p style="font-size: 0.9em;padding:30px" class="svelte-9fg3t2"> </p> <div class="drawing-container svelte-9fg3t2"></div></div> <!></div></div>');function Gy(i,e){oa(e,!1);let t=Bm(e,"globeStart",8,0),n=jn();const s=-15.263,r=-39.145,a=80;let o,c,l,u;const d=[{id:"pata",title:"Pata da Ema (Nhandu pysá)",month:"Março-Abril",arch:"Entre março e abril, a constelação torna-se visível ao entardecer, surgindo progressivamente no quadrante Sudeste. Até cerca das 21h30–22h00 pode ser enquadrada por meio de janela vertical alta orientada a Sul ou Sudeste, permitindo acompanhar sua ascensão. Entre 22h00 e 1h00 atinge maior elevação, podendo ser observada através de pátio interno ou varanda aberta voltada a Sul, favorecendo um enquadramento mais amplo do céu austral.",drawing:[1,4,5]},{id:"colibri",title:"Colibrì (Mainamy)",month:"Março-Abril",arch:"Nos meses de março e abril, a constelação surge no quadrante Leste–Sudeste ao anoitecer, tornando-se visível entre 19h00 e 21h30. Entre 22h00 e 0h00 aproxima-se do meridiano Sul, atingindo maior altura no céu e permitindo enquadramento através de varanda ou abertura orientada a Sul. Após 1h00 desloca-se progressivamente para Oeste–Sudoeste, iniciando sua descida em direção ao horizonte.",drawing:[1,2,4]},{id:"jabuti",title:"Jabuti (Zauxihu Ragapaw)",month:"Maio",arch:"Em maio, a constelação surge no quadrante Nordeste ao anoitecer, tornando-se mais elevada entre 21h00 e 0h00. Pode ser enquadrada por janela vertical orientada a Nordeste ou por pátio interno que permita maior ângulo de visão zenital. Entre 0h00 e 3h00 desloca-se para Noroeste, sendo possível observá-la através de aberturas superiores ou varandas abertas voltadas a Norte.",drawing:[1,4,5]},{id:"ema",title:"Ema (Guirá Nhandú)",month:"Maio-Junho",arch:"Entre maio e junho, a constelação torna-se visível ao anoitecer no quadrante Sudeste, alcançando maior presença entre 20h00 e 23h30. Recomenda-se varanda profunda ou abertura vertical orientada a Sudeste, permitindo acompanhar sua extensão no céu austral. Quando próxima ao horizonte, entre 19h00 e 20h00, pode ser enquadrada por janela horizontal baixa voltada a Sudeste ou Sul, desde que o relevo local não ultrapasse a linha visual inferior. Entre 23h30 e 2h00 atinge posição mais elevada, sendo mais adequada a observação através de pátio interno amplo.",drawing:[1,4,5,3,6]},{id:"homenvelho",title:"Homem Velho (Tuiváe)",month:"Dezembro",arch:"Durante o mês de dezembro, a constelação surge no quadrante Leste entre 19h00 e 20h00, podendo ser enquadrada por janela horizontal baixa orientada a Leste, valorizando sua emergência no horizonte, desde que não haja obstrução topográfica significativa. Entre 21h00 e 2h00 atinge maior elevação, sendo mais adequada a janela vertical alta, pórtico ou pátio interno. A partir das 4h00, já em deslocamento para Oeste, volta a permitir enquadramento por abertura baixa voltada a Oeste.",drawing:[1,2,3,6]},{id:"pleiade",title:"Plêiades (Seichú)",month:"Novembro",arch:"Em novembro, a constelação surge no quadrante Leste a partir das 19h30–20h00, tornando-se mais elevada entre 22h00 e 1h00. Pode ser enquadrada por janela vertical alta orientada a Leste ou por abertura zenital controlada, valorizando sua configuração compacta. Após 2h00 desloca-se para Oeste, sendo observável por pátio interno ou aberturas voltadas a Noroeste.",drawing:[1,4,5]}];let h=jn(0);const f={},_=ry(100,{duration:500,easing:sy});function S(V,ee,G,X,Y){const ge=Ge=>Ge*Math.PI/180,he=Ge=>Ge*180/Math.PI,W=V*15;let se=(18.697374558+24.06570982441908*(Y.getTime()/864e5+24405875e-1-2451545))%24*15+X-W;se=(se+360)%360;const Ue=ge(se),Se=ge(ee),be=ge(G),Te=Math.asin(Math.sin(Se)*Math.sin(be)+Math.cos(Se)*Math.cos(be)*Math.cos(Ue)),ue=Math.atan2(-Math.sin(Ue),Math.tan(Se)*Math.cos(be)-Math.sin(be)*Math.cos(Ue));return{alt:he(Te),az:(he(ue)+360)%360}}function p(V,ee,G){const X=$s.degToRad(V),Y=$s.degToRad(ee);return{x:G*Math.cos(X)*Math.sin(Y),y:G*Math.sin(X),z:-G*Math.cos(X)*Math.cos(Y)}}function m(V,ee){const G=[];for(let X=18;X<=30;X+=.25){const Y=new Date(ee);Y.setHours(X%24),X>=24&&Y.setDate(Y.getDate()+1);const{alt:ge,az:he}=S(V.ra,V.dec,s,r,Y);if(ge>0){const W=p(ge,he,a+1);G.push(new U(W.x,W.y,W.z))}}return G}function y(V,ee=5,G=64){const X=new Zt;for(let Y=ee;Y<=90;Y+=ee){const ge=$s.degToRad(Y),he=V*Math.cos(ge),W=V*Math.sin(ge),ie=[];for(let ue=0;ue<=G;ue++){const Ge=ue/G*Math.PI*2;ie.push(new U(he*Math.sin(Ge),W,he*Math.cos(Ge)))}const $=new mt().setFromPoints(ie),ae=new xn({color:2763307}),le=new hn($,ae);X.add(le);const se=document.createElement("canvas");se.width=128,se.height=32;const Ue=se.getContext("2d");Ue.fillStyle="#888888",Ue.font="18px Arial",Ue.fillText(`${Y}°`,0,18);const Se=new er(se),be=new ds({map:Se}),Te=new Qs(be);Te.scale.set(10,2.5,1),Te.position.set(he,W,0),X.add(Te)}return X}function E(V=100){const ee=new Zt,G=(ie,$,ae=1)=>{const le=new xn({color:$}),se=new mt().setFromPoints([new U(0,.1,0),ie.clone().multiplyScalar(V)]);ee.add(new hn(se,le))};G(new U(0,0,-1),16777215),G(new U(1,0,0),7829367),G(new U(0,0,1),7829367),G(new U(-1,0,0),7829367);const X=document.createElement("canvas");X.width=128,X.height=128;const Y=X.getContext("2d");Y.fillStyle="white",Y.font="Bold 36px Arial",Y.textAlign="center",Y.textBaseline="middle",Y.fillText("N",64,64);const ge=new er(X),he=new ds({map:ge}),W=new Qs(he);W.scale.set(15,15,1),W.position.set(0,5,-V-5),ee.add(W),o.add(ee)}function M(V,ee,G,X){const Y=new Zt;Y.visible=!1,ee.forEach((ge,he)=>{const W=m(ge,X),ie=new mt().setFromPoints(W),$=new xn({color:G,transparent:!0,opacity:.8});if(Y.add(new hn(ie,$)),W.forEach((ae,le)=>{if(le%4===0){const se=new rt(new Zn(.4,16,16),new Rt({color:G}));se.position.copy(ae),Y.add(se)}}),he===0&&W.length>0){const ae=W[0],le=W[W.length-1];[ae,le].forEach((se,Ue)=>{const Se=document.createElement("canvas");Se.width=256,Se.height=128;const be=Se.getContext("2d");be.fillStyle="#9ea7e5",be.font="bold 36px Arial",be.textAlign="center",be.textBaseline="middle",be.fillText(Ue===0?"18:00":"06:00",Se.width/2,Se.height/2);const Te=new er(Se);Te.needsUpdate=!0;const ue=new Qs(new ds({map:Te,transparent:!0}));ue.scale.set(20,10,1),ue.position.set(se.x,se.y+5,se.z),Y.add(ue)})}}),o.add(Y),f[V]=Y}function w(){Object.values(f).forEach(ee=>ee.visible=!1);const V=d[pe(h)]?.id;V&&(f[V].visible=!0),_.set(-100),setTimeout(()=>_.set(0),50)}function A(){const V=window.innerHeight,ee=window.scrollY-t();if(ee<0)return;let G=Math.floor(ee/V);G=Math.max(0,Math.min(d.length-1,G)),G!==pe(h)&&(wt(h,G),w())}ha(()=>{o=new jc,o.background=new He(132116),E();const V=new rt(new Ss(500,500),new Rt({color:132116,side:sn}));V.rotation.x=-Math.PI/2,V.position.y=0,o.add(V);function ee(he=100){const W=new Zt,ie=new xn({color:16777215}),$=new mt().setFromPoints([new U(0,0,0),new U(0,he,0)]),ae=new hn($,ie);W.add(ae);const le=new rt(new Zn(0,0,0),new Rt({color:65535}));le.position.set(0,he,0),W.add(le),o.add(W)}ee(80);const G=new rt(new ji(0,0,0),new Xi({color:16777215,visible:!1}));G.position.y=5,o.add(G),new Gf().load("/arquitetura-estelar-tupi-guarani/model/estrelar.glb",he=>{const W=he.scene;W.scale.set(.04,.04,.04),W.position.set(-5,-5,20),G.add(W)},void 0,he=>{console.error("Error",he)}),c=new kt(50,pe(n).clientWidth/pe(n).clientHeight,.1,1e3),c.position.set(200,200,200),c.lookAt(0,0,0),l=new nu({antialias:!0}),l.setSize(pe(n).clientWidth,pe(n).clientHeight),pe(n).appendChild(l.domElement),o.add(new Qc(16777215,.6));const Y=new rt(new Zn(a,64,64),new Rt({color:6379546,wireframe:!0,transparent:!0,opacity:.1}));o.add(Y),o.add(y(a,5)),M("pata",[{name:"α Cru",ra:12.4433,dec:-63.0992},{name:"β Cru",ra:12.7953,dec:-59.6889},{name:"γ Cru",ra:12.5195,dec:-57.1151},{name:"δ Cru",ra:12.2524,dec:-58.7489},{name:"ε Cru",ra:12.37,dec:-60.1}],10397669,new Date("2026-04-01T18:00:00")),M("colibri",[{name:"γ Crv",ra:12.2634,dec:-17.5419},{name:"α Crv",ra:12.1402,dec:-24.7289},{name:"β Crv",ra:12.5731,dec:-23.3968},{name:"δ Crv",ra:12.4977,dec:-16.5154},{name:"ε Crv",ra:12.1687,dec:-22.6198}],10397669,new Date("2026-03-25T18:00:00")),M("jabuti",[{name:"α CrB",ra:15.5781,dec:26.7147},{name:"β CrB",ra:15.4638,dec:29.1057},{name:"γ CrB",ra:15.7124,dec:26.2955},{name:"δ CrB",ra:15.8266,dec:26.0684},{name:"ε CrB",ra:15.9598,dec:26.8779},{name:"ι CrB",ra:15.9468,dec:29.6159},{name:"θ CrB",ra:16.024,dec:31.6031}],10397669,new Date("2026-05-15T18:00:00")),M("ema",[{name:"α Cen",ra:14.6601,dec:-60.8339},{name:"β Cen",ra:14.0637,dec:-60.373},{name:"α Mus",ra:12.6197,dec:-69.1356},{name:"β Cir",ra:15.2919,dec:-58.8012},{name:"β TrA",ra:16.0056,dec:-63.7755},{name:"ε¹ Ara",ra:16.977,dec:-60.6739},{name:"α Ara",ra:17.5307,dec:-49.8761},{name:"θ Sco",ra:17.6219,dec:-43.0054},{name:"γ Sco",ra:17.7081,dec:-37.1038},{name:"α Sco",ra:16.4901,dec:-26.432},{name:"δ Sco",ra:16.0055,dec:-22.6217},{name:"ζ Lup",ra:15.2048,dec:-52.0991},{name:"γ Lup",ra:15.5857,dec:-41.1667}],10397669,new Date("2026-06-01T18:00:00")),M("homenvelho",[{name:"α Ori",ra:5.9195,dec:7.4071},{name:"γ Ori",ra:5.4189,dec:6.3497},{name:"β Ori",ra:5.2423,dec:-8.2016},{name:"δ Ori",ra:5.5334,dec:-.2991},{name:"ε Ori",ra:5.6036,dec:-1.2019},{name:"ζ Ori",ra:5.6793,dec:-1.9426},{name:"κ Ori",ra:5.7959,dec:-9.6696},{name:"π³ Ori",ra:4.8307,dec:6.9613},{name:"π⁵ Ori",ra:4.9042,dec:2.4407},{name:"15 Ori",ra:5.1321,dec:-9.6696},{name:"β Eri",ra:5.1308,dec:-5.0864},{name:"α Tau",ra:4.5987,dec:16.5093},{name:"M45",ra:3.7923,dec:24.1051}],10397669,new Date("2026-12-15T18:00:00")),M("pleiade",[{name:"16 Tau",ra:3.7405,dec:24.1133},{name:"17 Tau",ra:3.7433,dec:24.1051},{name:"19 Tau",ra:3.7535,dec:24.4673},{name:"20 Tau",ra:3.7638,dec:24.3678},{name:"21 Tau",ra:3.7721,dec:24.1352},{name:"23 Tau",ra:3.7794,dec:23.9483},{name:"25 Tau",ra:3.7904,dec:24.1051}],10397669,new Date("2026-11-15T18:00:00")),w();function ge(){u=requestAnimationFrame(ge),o.rotation.y+=.01,l.render(o,c)}ge(),window.addEventListener("scroll",A),window.addEventListener("resize",()=>{c.aspect=pe(n).clientWidth/pe(n).clientHeight,c.updateProjectionMatrix(),l.setSize(pe(n).clientWidth,pe(n).clientHeight)}),km(()=>{cancelAnimationFrame(u),l.dispose(),window.removeEventListener("scroll",A)})}),Mo();var R=Hy(),g=qt(R);Zr(g,V=>wt(n,V),()=>pe(n));var v=nn(g,2),D=qt(v),T=nn(qt(D),2),P=qt(T),I=nn(T,2),k=qt(I),O=nn(I,4),B=qt(O),N=nn(O,2);co(N,5,()=>(pe(h),jt(()=>d[pe(h)]?.drawing??[])),lo,(V,ee)=>{var G=ky();oo(()=>{Au(G,"src",(pe(ee),jt(()=>`/arquitetura-estelar-tupi-guarani/img/${pe(ee)}.png`))),Au(G,"alt",`drawing-${pe(ee)}`)}),Wi(V,G)});var Q=nn(D,2);co(Q,1,()=>d,lo,(V,ee)=>{var G=Vy();Wi(V,G)}),oo(()=>{Pm(v,`--sections:${jt(()=>d.length)??""}`),Ys(P,(pe(h),jt(()=>d[pe(h)]?.title))),Ys(k,`Aparição e melhor época de observação: ${pe(h),jt(()=>d[pe(h)]?.month)??""}`),Ys(B,(pe(h),jt(()=>d[pe(h)]?.arch)))}),Wi(i,R),la()}const ad={type:"change"},iu={type:"start"},qf={type:"end"},Ka=new _r,od=new Fi,Wy=Math.cos(70*$s.DEG2RAD),At=new U,Qt=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class Xy extends c0{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new En,this._lastTargetPosition=new U,this._quat=new En().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rh,this._sphericalDelta=new Rh,this._scale=1,this._panOffset=new U,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new U,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jy.bind(this),this._onPointerDown=qy.bind(this),this._onPointerUp=Yy.bind(this),this._onContextMenu=tb.bind(this),this._onMouseWheel=$y.bind(this),this._onKeyDown=Jy.bind(this),this._onTouchStart=Qy.bind(this),this._onTouchMove=eb.bind(this),this._onMouseDown=Ky.bind(this),this._onMouseMove=Zy.bind(this),this._interceptControlDown=nb.bind(this),this._interceptControlUp=ib.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ad),this.update(),this.state=dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=At.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<Wy?this.object.lookAt(this.target):(od.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(od,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(ad),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qf),this.state=dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ky(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=dt.DOLLY;break;case Ks.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}break;case Ks.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(iu)}function Zy(i){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $y(i){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(i.preventDefault(),this.dispatchEvent(iu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qf))}function Jy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=dt.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=dt.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(iu)}function eb(i){switch(this._trackPointer(i),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=dt.NONE}}function tb(i){this.enabled!==!1&&i.preventDefault()}function nb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ib(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ld=[{name:"Estrela Vagalume (Uam-rana)",date:"01/01/2026",season:"Gennaio",notes:"Alta, orientata verso E-NE",stars:[{name:"α CMa",az:112,alt:74,dec:-16.73,azRise:112,azSet:248,RA:"06:45:07.929",Dec:"-16:43:29.82",mag:4.8}]},{name:"Estrela Tinguaçu (Tinguaçu)",date:"03/01/2026",season:"Gennaio",notes:"Standard, orientata verso NE",stars:[{name:"41 Ari",az:64,alt:63,dec:27.25,azRise:64,azSet:296,RA:"02:49:59.163",Dec:"+27:15:34.79",mag:4.8}]},{name:"Pata da Ema (Nhandu pysá)",date:"28/03/2026",season:"Marzo",notes:"Bassa, E-SE",stars:[{name:"α Cru",az:128,alt:35,dec:-63.1,azRise:128,azSet:232,RA:"12:26:35.757",Dec:"-63:05:57.12",mag:4.8},{name:"β Cru",az:128,alt:35,dec:-59.69,azRise:128,azSet:232,RA:"12:47:43.120",Dec:"-59:41:20.00",mag:4.8},{name:"γ Cru",az:128,alt:35,dec:-57.12,azRise:128,azSet:232,RA:"12:31:10.051",Dec:"-57:06:54.52",mag:4.8},{name:"δ Cru",az:128,alt:35,dec:-58.75,azRise:128,azSet:232,RA:"12:15:08.596",Dec:"-58:44:56.41",mag:4.8}]},{name:"Ovos de Pássaro (Guirá rupiá)",date:"31/03/2026",season:"Marzo",notes:"Bassa, E-SE",stars:[{name:"δ Mus",az:130,alt:30,dec:-71.82,azRise:130,azSet:230,RA:"13:02:17.725",Dec:"-71:32:56.47",mag:4.8},{name:"γ Mus",az:130,alt:30,dec:-72.13,azRise:130,azSet:230,RA:"12:32:27.721",Dec:"-72:07:58.90",mag:4.8}]},{name:"Colibri (Mainamy)",date:"31/03/2026",season:"Marzo",notes:"Standard, E",stars:[{name:"γ Crv",az:112,alt:57,dec:-17.54,azRise:112,azSet:248,RA:"12:15:48.400",Dec:"-17:32:30.0",mag:4.8},{name:"α Crv",az:112,alt:57,dec:-24.73,azRise:112,azSet:248,RA:"12:26:36.000",Dec:"-24:44:00.0",mag:4.8},{name:"β Crv",az:112,alt:57,dec:-23.4,azRise:112,azSet:248,RA:"12:35:53.900",Dec:"-23:23:47.0",mag:4.8},{name:"δ Crv",az:112,alt:57,dec:-16.51,azRise:112,azSet:248,RA:"12:29:51.900",Dec:"-16:30:55.0",mag:4.8},{name:"ε Crv",az:112,alt:57,dec:-22.62,azRise:112,azSet:248,RA:"12:10:07.600",Dec:"-22:37:11.0",mag:4.8}]},{name:"Canoa (Yar Ragapaw)",date:"05/04/2026",season:"Aprile",notes:"Alta, NE-N",stars:[{name:"η UMa",az:38,alt:37,dec:49.31,azRise:38,azSet:322,RA:"13:47:32.437",Dec:"+49:18:47.76",mag:4.8},{name:"ζ UMa",az:38,alt:37,dec:54.92,azRise:38,azSet:322,RA:"13:23:55.500",Dec:"+54:55:31.00",mag:4.8},{name:"ε UMa",az:38,alt:37,dec:55.96,azRise:38,azSet:322,RA:"12:54:01.749",Dec:"+55:57:35.36",mag:4.8},{name:"δ UMa",az:38,alt:37,dec:57.03,azRise:38,azSet:322,RA:"12:15:25.600",Dec:"+57:01:57.00",mag:4.8},{name:"γ UMa",az:38,alt:37,dec:53.69,azRise:38,azSet:322,RA:"11:53:49.800",Dec:"+53:41:41.00",mag:4.8}]},{name:"Jabuti (Zauxihu Ragapaw)",date:"18/05/2026",season:"Maggio",notes:"Standard, NE",stars:[{name:"α CrB",az:56,alt:60,dec:26.71,azRise:56,azSet:304,RA:"15:34:41.268",Dec:"+26:42:52.89",mag:4.8},{name:"β CrB",az:56,alt:60,dec:29.11,azRise:56,azSet:304,RA:"15:27:49.731",Dec:"+29:06:20.53",mag:4.8},{name:"γ CrB",az:56,alt:60,dec:26.29,azRise:56,azSet:304,RA:"15:42:44.566",Dec:"+26:17:44.28",mag:4.8},{name:"δ CrB",az:56,alt:60,dec:26.07,azRise:56,azSet:304,RA:"15:49:35.647",Dec:"+26:04:06.21",mag:4.8},{name:"ε CrB",az:56,alt:60,dec:26.88,azRise:56,azSet:304,RA:"15:57:35.251",Dec:"+26:52:40.36",mag:4.8},{name:"ι CrB",az:56,alt:60,dec:29.85,azRise:56,azSet:304,RA:"16:01:26.565",Dec:"+29:51:03.82",mag:4.8},{name:"θ CrB",az:56,alt:60,dec:31.36,azRise:56,azSet:304,RA:"15:32:55.782",Dec:"+31:21:32.88",mag:4.8}]},{name:"Ema (Guirá Nhandú)",date:"28/05/2026",season:"Maggio",notes:"Bassa, SE",stars:[{name:"α Cen",az:124,alt:50,dec:-60.83,azRise:124,azSet:236,RA:"14:39:23.205",Dec:"-60:49:49.87",mag:4.8},{name:"β Cen",az:124,alt:50,dec:-60.3,azRise:124,azSet:236,RA:"14:06:03.445",Dec:"-60:17:49.18",mag:4.8},{name:"α Mus",az:124,alt:50,dec:-69.11,azRise:124,azSet:236,RA:"12:40:03.200",Dec:"-69:06:39.64",mag:4.8},{name:"β Cir",az:124,alt:50,dec:-58.69,azRise:124,azSet:236,RA:"15:19:29.375",Dec:"-58:41:24.86",mag:4.8},{name:"β TrA",az:124,alt:50,dec:-63.31,azRise:124,azSet:236,RA:"15:57:05.229",Dec:"-63:18:27.57",mag:4.8},{name:"ε¹ Ara",az:124,alt:50,dec:-53.02,azRise:124,azSet:236,RA:"17:01:08.340",Dec:"-53:01:05.73",mag:4.8},{name:"α Ara",az:124,alt:50,dec:-49.73,azRise:124,azSet:236,RA:"17:33:16.581",Dec:"-49:43:51.30",mag:4.8},{name:"θ Sco",az:124,alt:50,dec:-42.85,azRise:124,azSet:236,RA:"17:38:43.498",Dec:"-42:51:06.11",mag:4.8},{name:"γ Sco",az:124,alt:50,dec:-22.49,azRise:124,azSet:236,RA:"16:05:50.881",Dec:"-22:29:34.85",mag:4.8},{name:"α Sco",az:124,alt:50,dec:-26.3,azRise:124,azSet:236,RA:"16:30:52.322",Dec:"-26:17:46.88",mag:4.8},{name:"δ Sco",az:124,alt:50,dec:-22.49,azRise:124,azSet:236,RA:"16:01:48.453",Dec:"-22:29:38.49",mag:4.8},{name:"ζ Lup",az:124,alt:50,dec:-51.99,azRise:124,azSet:236,RA:"15:14:08.163",Dec:"-51:59:23.52",mag:4.8},{name:"γ Lup",az:124,alt:50,dec:-41.06,azRise:124,azSet:236,RA:"15:38:06.249",Dec:"-41:03:50.69",mag:4.8}]},{name:"Onça Celeste (Xivi / Charia)",date:"30/05/2026",season:"Maggio",notes:"Standard, E",stars:[{name:"α Sco",az:118,alt:61,dec:-26.42,azRise:118,azSet:242,RA:"16:29:24.440",Dec:"-26:25:55.81",mag:4.8}]},{name:"Cobra de Fogo (Mboi Tatá)",date:"04/06/2026",season:"Giugno",notes:"Standard, SE",stars:[{name:"α Sco",az:120,alt:55,dec:-26.42,azRise:120,azSet:240,RA:"16:29:24.460",Dec:"-26:25:55.20",mag:4.8},{name:"τ Sco",az:120,alt:55,dec:-28.22,azRise:120,azSet:240,RA:"16:35:52.960",Dec:"-28:12:57.70",mag:4.8},{name:"ε Sco",az:120,alt:55,dec:-34.29,azRise:120,azSet:240,RA:"16:50:09.307",Dec:"-34:17:36.50",mag:4.8},{name:"μ Sco",az:120,alt:55,dec:-38.05,azRise:120,azSet:240,RA:"16:51:52.207",Dec:"-38:02:51.15",mag:4.8},{name:"ζ² Sco",az:120,alt:55,dec:-42.36,azRise:120,azSet:240,RA:"16:54:34.703",Dec:"-42:21:46.78",mag:4.8},{name:"η Sco",az:120,alt:55,dec:-43.24,azRise:120,azSet:240,RA:"17:12:13.900",Dec:"-43:14:19.00",mag:4.8},{name:"ι¹ Sco",az:120,alt:55,dec:-40.13,azRise:120,azSet:240,RA:"17:47:35.081",Dec:"-40:07:37.35",mag:4.8},{name:"θ Sco",az:120,alt:55,dec:-42.99,azRise:120,azSet:240,RA:"17:37:19.100",Dec:"-42:59:52.00",mag:4.8},{name:"λ Sco",az:120,alt:55,dec:-37.1,azRise:120,azSet:240,RA:"17:33:36.525",Dec:"-37:06:13.84",mag:4.8},{name:"κ Sco",az:120,alt:55,dec:-39.03,azRise:120,azSet:240,RA:"17:42:29.264",Dec:"-39:01:47.92",mag:4.8}]},{name:"Seriema (Azim)",date:"28/06/2026",season:"Giugno",notes:"Standard, SE",stars:[{name:"λ Sco",az:122,alt:58,dec:-37.1,azRise:122,azSet:238,RA:"17:33:36.529",Dec:"-38:19:25.82",mag:4.8},{name:"ν Sco",az:122,alt:58,dec:-19.46,azRise:122,azSet:238,RA:"16:11:59.726",Dec:"-19:27:38.96",mag:4.8},{name:"κ Sco",az:122,alt:58,dec:-39.03,azRise:122,azSet:238,RA:"17:42:29.234",Dec:"-39:01:48.78",mag:4.8},{name:"ε Sgr",az:122,alt:58,dec:-34.39,azRise:122,azSet:238,RA:"18:24:10.234",Dec:"-34:23:07.91",mag:4.8},{name:"η Sgr",az:122,alt:58,dec:-36.76,azRise:122,azSet:238,RA:"18:17:37.349",Dec:"-36:45:46.47",mag:4.8},{name:"λ CrA",az:122,alt:58,dec:-38.32,azRise:122,azSet:238,RA:"18:43:46.944",Dec:"-38:19:25.82",mag:4.8},{name:"ε CrA",az:122,alt:58,dec:-37.11,azRise:122,azSet:238,RA:"18:58:43.470",Dec:"-37:06:25.50",mag:4.8},{name:"ν686 CrA",az:122,alt:58,dec:-37.34,azRise:122,azSet:238,RA:"18:56:40.505",Dec:"-37:20:36.38",mag:4.8},{name:"α CrA",az:122,alt:58,dec:-37.9,azRise:122,azSet:238,RA:"19:09:28.531",Dec:"-37:54:18.65",mag:4.8},{name:"β CrA",az:122,alt:58,dec:-39.34,azRise:122,azSet:238,RA:"19:10:01.766",Dec:"-39:20:27.84",mag:4.8},{name:"δ CrA",az:122,alt:58,dec:-40.5,azRise:122,azSet:238,RA:"19:08:21.080",Dec:"-40:29:48.83",mag:4.8},{name:"ζ CrA",az:122,alt:58,dec:-42.1,azRise:122,azSet:238,RA:"19:03:07.011",Dec:"-42:05:43.62",mag:4.8}]},{name:"Cervo (Guaśú / Suçu-Guasu)",date:"04/07/2026",season:"Luglio",notes:"Bassa, SE",stars:[{name:"β Car",az:126,alt:40,dec:-69.81,azRise:126,azSet:234,RA:"09:15:45.724",Dec:"-69:48:53.73",mag:4.8},{name:"117 Vel",az:126,alt:40,dec:-44.95,azRise:126,azSet:234,RA:"10:23:12.908",Dec:"-44:56:59.50",mag:4.8},{name:"Ψ Vel",az:126,alt:40,dec:-40.35,azRise:126,azSet:234,RA:"10:46:10.137",Dec:"-40:21:07.81",mag:4.8},{name:"λ Vel",az:126,alt:40,dec:-43.53,azRise:126,azSet:234,RA:"09:09:45.925",Dec:"-43:31:57.92",mag:4.8},{name:"γ Vel",az:126,alt:40,dec:-47.46,azRise:126,azSet:234,RA:"08:11:14.195",Dec:"-47:27:38.93",mag:4.8},{name:"δ Vel",az:126,alt:40,dec:-54.82,azRise:126,azSet:234,RA:"08:46:36.866",Dec:"-54:49:08.44",mag:4.8},{name:"κ Vel",az:126,alt:40,dec:-55.1,azRise:126,azSet:234,RA:"09:24:07.543",Dec:"-55:06:14.05",mag:4.8},{name:"φ Vel",az:126,alt:40,dec:-54.67,azRise:126,azSet:234,RA:"09:59:34.572",Dec:"-54:40:00.06",mag:4.8},{name:"ι Car",az:126,alt:40,dec:-59.37,azRise:126,azSet:234,RA:"09:19:12.219",Dec:"-59:22:15.00",mag:4.8},{name:"q Car",az:126,alt:40,dec:-60.46,azRise:126,azSet:234,RA:"11:02:09.328",Dec:"-60:27:48.00",mag:4.8},{name:"π Cen",az:126,alt:40,dec:-50.51,azRise:126,azSet:234,RA:"11:43:07.276",Dec:"-50:30:41.62",mag:4.8},{name:"γ Cru",az:126,alt:40,dec:-57.09,azRise:126,azSet:234,RA:"12:33:25.508",Dec:"-57:05:33.32",mag:4.8},{name:"β Cru",az:126,alt:40,dec:-59.66,azRise:126,azSet:234,RA:"12:50:03.806",Dec:"-59:39:26.99",mag:4.8},{name:"α Cru",az:126,alt:40,dec:-63.08,azRise:126,azSet:234,RA:"12:29:06.568",Dec:"-63:04:52.70",mag:4.8},{name:"γ Mus",az:126,alt:40,dec:-72.11,azRise:126,azSet:234,RA:"12:35:37.798",Dec:"-72:06:40.29",mag:4.8},{name:"δ Mus",az:126,alt:40,dec:-71.51,azRise:126,azSet:234,RA:"13:05:21.175",Dec:"-71:30:30.47",mag:4.8}]},{name:"Anta do Norte (Tapí’i)",date:"31/08/2026",season:"Agosto",notes:"Alta, NE",stars:[{name:"α Cyg",az:42,alt:45,dec:45.28,azRise:42,azSet:318,RA:"20:41:25.920",Dec:"+45:16:49.27",mag:4.8},{name:"T Cyg",az:42,alt:45,dec:34.37,azRise:42,azSet:318,RA:"20:47:10.838",Dec:"+34:22:26.17",mag:4.8},{name:"72 Cyg",az:42,alt:45,dec:38.54,azRise:42,azSet:318,RA:"21:34:46.258",Dec:"+38:32:05.68",mag:4.8},{name:"V Cyg",az:42,alt:45,dec:48.23,azRise:42,azSet:318,RA:"20:41:18.306",Dec:"+48:13:39.16",mag:4.8},{name:"π² Cyg",az:42,alt:45,dec:49.61,azRise:42,azSet:318,RA:"21:30:02.176",Dec:"+49:36:47.71",mag:4.8},{name:"α Cep",az:42,alt:45,dec:62.59,azRise:42,azSet:318,RA:"21:18:35.329",Dec:"+62:35:09.20",mag:4.8},{name:"ι Cep",az:42,alt:45,dec:66.2,azRise:42,azSet:318,RA:"22:49:41.041",Dec:"+66:12:06.26",mag:4.8},{name:"β Cas",az:42,alt:45,dec:59.15,azRise:42,azSet:318,RA:"00:09:12.500",Dec:"+59:08:54.42",mag:4.8},{name:"32 Cas",az:42,alt:45,dec:55.11,azRise:42,azSet:318,RA:"00:59:34.805",Dec:"+55:06:24.38",mag:4.8},{name:"δ Cas",az:42,alt:45,dec:60.23,azRise:42,azSet:318,RA:"01:25:49.239",Dec:"+60:14:06.91",mag:4.8},{name:"η Cas",az:42,alt:45,dec:57.81,azRise:42,azSet:318,RA:"00:49:09.917",Dec:"+57:48:39.76",mag:4.8},{name:"ξ Cas",az:42,alt:45,dec:50.51,azRise:42,azSet:318,RA:"00:42:03.930",Dec:"+50:30:44.92",mag:4.8},{name:"λ And",az:42,alt:45,dec:46.45,azRise:42,azSet:318,RA:"23:37:34.255",Dec:"+46:27:18.10",mag:4.8},{name:"2 Lac",az:42,alt:45,dec:39.63,azRise:42,azSet:318,RA:"22:41:27.818",Dec:"+39:38:02.02",mag:4.8}]},{name:"Poço do Caititu (Coxi Huguá)",date:"04/10/2026",season:"Ottobre",notes:"Bassa, SE",stars:[{name:"SMC",az:131,alt:28,dec:-72.83,azRise:131,azSet:229,RA:"00:52:44.8",Dec:"-72:49:43.00",mag:4.8}]},{name:"Arapuca (Aka’ekorá / Seichu Jurá)",date:"20/10/2026",season:"Ottobre",notes:"Standard, NE",stars:[{name:"β Peg",az:68,alt:60,dec:28.08,azRise:68,azSet:292,RA:"23:03:46.455",Dec:"+28:04:58.03",mag:4.8},{name:"α Peg",az:68,alt:60,dec:15.21,azRise:68,azSet:292,RA:"23:04:45.660",Dec:"+15:12:19.70",mag:4.8},{name:"γ Peg",az:68,alt:60,dec:15.18,azRise:68,azSet:292,RA:"00:13:14.158",Dec:"+15:11:00.90",mag:4.8},{name:"α And",az:68,alt:60,dec:29.09,azRise:68,azSet:292,RA:"00:08:23.258",Dec:"+29:05:26.88",mag:4.8},{name:"δ And",az:68,alt:60,dec:30.32,azRise:68,azSet:292,RA:"23:37:33.280",Dec:"+30:19:10.50",mag:4.8},{name:"α Tri",az:68,alt:60,dec:29.57,azRise:68,azSet:292,RA:"01:53:04.900",Dec:"+29:34:43.00",mag:4.8},{name:"41 Ari",az:68,alt:60,dec:27.06,azRise:68,azSet:292,RA:"02:50:41.780",Dec:"+27:03:38.80",mag:4.8},{name:"M-45",az:68,alt:60,dec:24.12,azRise:68,azSet:292,RA:"03:47:00.000",Dec:"+24:07:00.0",mag:4.8}]},{name:"Plêiades (Seichú)",date:"18/11/2026",season:"Novembre",notes:"Standard, NE",stars:[{name:"16 Tau",az:68,alt:61,dec:24.29,azRise:68,azSet:292,RA:"03:44:48.26",Dec:"+24:17:20.91",mag:4.8},{name:"17 Tau",az:68,alt:61,dec:24.11,azRise:68,azSet:292,RA:"03:44:52.58",Dec:"+24:06:46.77",mag:4.8},{name:"19 Tau",az:68,alt:61,dec:24.47,azRise:68,azSet:292,RA:"03:45:12.54",Dec:"+24:28:01.12",mag:4.8},{name:"20 Tau",az:68,alt:61,dec:24.37,azRise:68,azSet:292,RA:"03:45:49.65",Dec:"+24:22:02.65",mag:4.8},{name:"21 Tau",az:68,alt:61,dec:24.55,azRise:68,azSet:292,RA:"03:45:54.52",Dec:"+24:33:15.01",mag:4.8},{name:"23 Tau",az:68,alt:61,dec:23.95,azRise:68,azSet:292,RA:"03:46:19.61",Dec:"+23:56:52.79",mag:4.8},{name:"25 Tau",az:68,alt:61,dec:24.1,azRise:68,azSet:292,RA:"03:47:29.11",Dec:"+24:06:17.32",mag:4.8}]},{name:"Queixada da Anta (Tapí’i Rainhykä)",date:"28/11/2026",season:"Novembre",notes:"Standard, NE",stars:[{name:"α Tau",az:74,alt:55,dec:16.51,azRise:74,azSet:286,RA:"04:35:55.239",Dec:"+16:30:33.49",mag:4.8},{name:"δ¹ Tau",az:74,alt:55,dec:17.54,azRise:74,azSet:286,RA:"04:22:56.10",Dec:"+17:32:33.0",mag:4.8},{name:"δ³ Tau",az:74,alt:55,dec:17.96,azRise:74,azSet:286,RA:"04:22:56.00",Dec:"+17:57:45.0",mag:4.8},{name:"ε Tau",az:74,alt:55,dec:19.18,azRise:74,azSet:286,RA:"04:28:37.000",Dec:"+19:10:49.0",mag:4.8},{name:"γ Tau",az:74,alt:55,dec:15.63,azRise:74,azSet:286,RA:"04:19:47.590",Dec:"+15:37:39.60",mag:4.8},{name:"θ² Tau",az:74,alt:55,dec:17.96,azRise:74,azSet:286,RA:"04:28:39.73",Dec:"+17:57:44.0",mag:4.8}]},{name:"Onça Celeste (Xivi / Charia)",date:"30/11/2026",season:"Novembre",notes:"Standard, NE",stars:[{name:"α Tau",az:75,alt:54,dec:16.51,azRise:75,azSet:285,RA:"04:35:55.356",Dec:"+16:30:28.41",mag:4.8}]},{name:"Homem Velho (Tuiváe)",date:"06/12/2026",season:"Dicembre",notes:"Standard, E",stars:[{name:"α Ori",az:89,alt:70,dec:7.41,azRise:89,azSet:271,RA:"05:55:10.305",Dec:"+07:24:25.43",mag:4.8},{name:"γ Ori",az:89,alt:70,dec:6.35,azRise:89,azSet:271,RA:"05:25:07.863",Dec:"+06:20:58.93",mag:4.8},{name:"β Ori",az:89,alt:70,dec:-8.2,azRise:89,azSet:271,RA:"05:14:32.272",Dec:"-08:12:05.90",mag:4.8},{name:"δ Ori",az:89,alt:70,dec:-.3,azRise:89,azSet:271,RA:"05:32:00.400",Dec:"-00:17:56.7",mag:4.8},{name:"ε Ori",az:89,alt:70,dec:-1.95,azRise:89,azSet:271,RA:"05:36:12.813",Dec:"-01:12:06.90",mag:4.8}]},{name:"Poço do Tapir (Tapirĩ)",date:"12/12/2026",season:"Dicembre",notes:"Bassa, SE",stars:[{name:"α Vir",az:118,alt:46,dec:-1.94,azRise:118,azSet:242,RA:"13:25:11.579",Dec:"-01:57:04.96",mag:4.8},{name:"β Vir",az:118,alt:46,dec:1.35,azRise:118,azSet:242,RA:"11:50:41.789",Dec:"+01:45:53.83",mag:4.8}]},{name:"Encantado da Fertilidade (Iara / Naiara)",date:"15/12/2026",season:"Dicembre",notes:"Alta, NE",stars:[{name:"α Gem",az:68,alt:68,dec:22.02,azRise:68,azSet:292,RA:"07:39:18.119",Dec:"+22:00:52.2",mag:4.8},{name:"β Gem",az:68,alt:68,dec:28.03,azRise:68,azSet:292,RA:"07:45:18.949",Dec:"+28:01:34.3",mag:4.8},{name:"γ Gem",az:68,alt:68,dec:32.26,azRise:68,azSet:292,RA:"07:45:58.317",Dec:"+32:19:30.3",mag:4.8},{name:"δ Gem",az:68,alt:68,dec:21.95,azRise:68,azSet:292,RA:"07:50:18.710",Dec:"+21:52:00.2",mag:4.8}]}];var sb=Yi("<option> </option>"),rb=Yi('<div class="canvas-container svelte-npfk7q"><select class="svelte-npfk7q"><option>Todas as constelações</option><!></select> <div class="tooltip svelte-npfk7q"></div></div>');function ab(i,e){oa(e,!1);let t=jn(),n=jn(),s,r=null;const a=[];let o=jn("");const c=[16739179,16233063,16645526,7855479,8697588,6970061,13347531,16758734,10545125,16767681];function l(M,w=5,A=64){const R=new Zt;for(let g=w;g<=90;g+=w){const v=$s.degToRad(g),D=M*Math.cos(v),T=M*Math.sin(v),P=[];for(let G=0;G<=A;G++){const X=G/A*Math.PI*2;P.push(new U(D*Math.sin(X),T,D*Math.cos(X)))}const I=new mt().setFromPoints(P),k=new xn({color:2763307}),O=new hn(I,k);R.add(O);const B=document.createElement("canvas");B.width=128,B.height=32;const N=B.getContext("2d");N.fillStyle="#888888",N.font="18px Arial",N.fillText(`${g}°`,0,18);const Q=new er(B),V=new ds({map:Q}),ee=new Qs(V);ee.scale.set(10,2.5,1),ee.position.set(D,T,0),R.add(ee)}return R}function u(M){const w=new ni().setFromObject(M),A=new U;w.getCenter(A);const R=new U;w.getSize(R);const g=new ji(R.x*1.2,R.y*1.2,R.z*1.2),v=new Rt({color:12024971,wireframe:!0,transparent:!0,opacity:.15}),D=new rt(g,v);D.position.copy(A),M.add(D)}function d(M,w,A,R,g=new Date){const v=Y=>Y*Math.PI/180,D=M.split(":").map(Number),T=(D[0]+D[1]/60+D[2]/3600)*15,P=w.split(":").map(Number),I=Math.sign(P[0])*(Math.abs(P[0])+P[1]/60+P[2]/3600);let Q=(18.697374558+24.06570982441908*(g.getTime()/864e5+24405875e-1-2451545))%24*15+R-T;Q=(Q+360)%360*(Math.PI/180);const V=v(I),ee=v(A),G=Math.asin(Math.sin(V)*Math.sin(ee)+Math.cos(V)*Math.cos(ee)*Math.cos(Q)),X=Math.atan2(-Math.sin(Q),Math.tan(V)*Math.cos(ee)-Math.sin(ee)*Math.cos(Q));return{alt:G,az:X}}function h(M){const[w,A,R]=M.split("/");return new Date(R,A-1,w,21,0,0)}function f(M,w,A,R){for(let g=18;g<=30;g++){const v=new Date(R.getFullYear(),R.getMonth(),R.getDate(),g%24);if(M.stars.every(T=>{const{alt:P}=d(T.RA,T.Dec,w,A,v);return P>.35}))return v}return h(M.date)}function _(M){if(!s)return;const w=M.userData.worldVector.clone(),A=new U(0,0,1),R=new En().setFromUnitVectors(w,A);s.quaternion.premultiply(R)}ha(async()=>{wt(n,pe(n)||document.querySelector(".tooltip"));const M=new jc;M.background=new He(132116);const w=new kt(60,pe(t).clientWidth/pe(t).clientHeight,.1,500);w.position.set(120,90,120),w.lookAt(new U(0,5,0));const A=new nu({antialias:!0});A.setSize(pe(t).clientWidth,pe(t).clientHeight),pe(t).appendChild(A.domElement);const R=new Xy(w,A.domElement);M.add(new Qc(16777215,.5));const g=new rt(new Ss(500,500),new Rt({color:132116,side:sn}));g.rotation.x=-Math.PI/2,g.position.y=0,M.add(g);function v(G=100){const X=new Zt,Y=(ae,le,se=1)=>{const Ue=new xn({color:le}),Se=new mt().setFromPoints([new U(0,.1,0),ae.clone().multiplyScalar(G)]);X.add(new hn(Se,Ue))};Y(new U(0,0,-1),16777215),Y(new U(1,0,0),7829367),Y(new U(0,0,1),7829367),Y(new U(-1,0,0),7829367);const ge=document.createElement("canvas");ge.width=128,ge.height=128;const he=ge.getContext("2d");he.fillStyle="white",he.font="Bold 60px Arial",he.textAlign="center",he.textBaseline="middle",he.fillText("N",64,64);const W=new er(ge),ie=new ds({map:W}),$=new Qs(ie);$.scale.set(15,15,1),$.position.set(0,5,-G-10),X.add($),M.add(X)}v();function D(G=100){const X=new Zt,Y=new xn({color:16777215}),ge=new mt().setFromPoints([new U(0,0,0),new U(0,G,0)]),he=new hn(ge,Y);X.add(he);const W=new rt(new Zn(0,0,0),new Rt({color:65535}));W.position.set(0,G,0),X.add(W),M.add(X)}D(80);const T=new rt(new ji(0,0,0),new Xi({color:16777215,visible:!1}));T.position.y=5,M.add(T),new Gf().load("/arquitetura-estelar-tupi-guarani/model/estrelar.glb",G=>{const X=G.scene;X.scale.set(.04,.04,.04),X.position.set(-5,-5,20),T.add(X)},void 0,G=>{console.error("Errore nel caricamento modello:",G)});const I=80;s=new rt(new Zn(I,64,64),new Rt({color:6379546,wireframe:!0,opacity:.1,transparent:!0})),M.add(s),M.add(l(I,5));const k=-15.263,O=-39.145;ld.forEach((G,X)=>{const Y=c[X%c.length]||16777215,ge=new Zt,he=h(G.date),W=f(G,k,O,he);G.stars.forEach(ie=>{const $=new rt(new Zn(.5,8,8),new Rt({color:Y})),{alt:ae,az:le}=d(ie.RA,ie.Dec,k,O,W),se=I*Math.cos(ae)*Math.sin(le),Ue=I*Math.sin(ae),Se=I*Math.cos(ae)*Math.cos(le);$.position.set(se,Ue,Se),$.userData={worldVector:new U(se,Ue,Se).normalize(),constellation:G.name,season:G.season,notes:G.notes,date:G.date,starName:ie.name,RA:ie.RA,Dec:ie.Dec,mag:ie.mag,visibleDate:W},a.push($),ge.add($)}),u(ge),M.add(ge)}),await fm();const B=new l0,N=new Be;function Q(G){const X=A.domElement.getBoundingClientRect();N.x=(G.clientX-X.left)/X.width*2-1,N.y=-((G.clientY-X.top)/X.height)*2+1,B.setFromCamera(N,w);const Y=B.intersectObjects(a);if(Y.length>0){const ge=Y[0].object;r!==ge&&(r&&r.scale.set(1,1,1),r=ge,r.scale.set(1.5,1.5,1.5),$i(t,pe(t).style.cursor="pointer"))}else r&&r.scale.set(1,1,1),r=null,$i(t,pe(t).style.cursor="default")}function V(G){if(!pe(n))return;const X=A.domElement.getBoundingClientRect();N.x=(G.clientX-X.left)/X.width*2-1,N.y=-((G.clientY-X.top)/X.height)*2+1,B.setFromCamera(N,w);const Y=B.intersectObjects(a),ge=M.getObjectByName("selectedAxis");if(ge&&M.remove(ge),Y.length>0){const he=Y[0].object.userData;$i(n,pe(n).style.display="block"),$i(n,pe(n).style.left=`${G.clientX+10}px`),$i(n,pe(n).style.top=`${G.clientY+10}px`),$i(n,pe(n).innerHTML=`
          <strong>${he.constellation}</strong><br>
          Estrela: ${he.starName}<br>
          Data: ${he.date}<br>
          Hora: ${he.visibleDate.getHours().toString().padStart(2,"0")}:${he.visibleDate.getMinutes().toString().padStart(2,"0")}<br>
          RA: ${he.RA}<br>
          Dec: ${he.Dec}<br>
        `),Y[0].object.scale.set(2,2,2),_(Y[0].object);const W=[Y[0].object.position.clone(),T.position.clone()],ie=new mt().setFromPoints(W),$=new xn({color:16777215,linewidth:1}),ae=new hn(ie,$);ae.name="selectedAxis",M.add(ae)}else $i(n,pe(n).style.display="none"),a.forEach(he=>he.scale.set(1,1,1))}window.addEventListener("click",V),window.addEventListener("mousemove",Q);const ee=()=>{requestAnimationFrame(ee),R.update(),A.render(M,w)};ee(),window.addEventListener("resize",()=>{w.aspect=pe(t).clientWidth/pe(t).clientHeight,w.updateProjectionMatrix(),A.setSize(pe(t).clientWidth,pe(t).clientHeight)})}),sm(()=>pe(o),()=>{a.length&&a.forEach(M=>{pe(o)===""||M.userData.constellation===pe(o)?M.visible=!0:M.visible=!1})}),rm(),Mo();var S=rb(),p=qt(S),m=qt(p);m.value=m.__value="";var y=nn(m);co(y,1,()=>ld,lo,(M,w)=>{var A=sb(),R=qt(A),g={};oo(()=>{Ys(R,(pe(w),jt(()=>pe(w).name))),g!==(g=(pe(w),jt(()=>pe(w).name)))&&(A.value=(A.__value=(pe(w),jt(()=>pe(w).name)))??"")}),Wi(M,A)});var E=nn(p,2);Zr(E,M=>wt(n,M),()=>pe(n)),Zr(S,M=>wt(t,M),()=>pe(t)),Lm(p,()=>pe(o),M=>wt(o,M)),Wi(i,S),la()}var ob=Yi('<div style="width:100%; height:100vh;"></div>');function lb(i,e){oa(e,!1);let t=jn(),n,s,r,a,o,c;const l=25,u=[{name:"Solstizio Estate",month:5,day:21,light:null,color:16777215},{name:"Solstizio Inverno",month:11,day:21,light:null,color:16772778}];let d=0,h=6;const f=-15.263,_=[{name:"NSV",az:Math.PI/2-.4,color:10397669},{name:"PSV",az:-Math.PI/2+.4,color:10397669},{name:"NSI",az:Math.PI/2+.4,color:10397669},{name:"PSI",az:-Math.PI/2-.4,color:10397669}];function S(){n=new jc,n.background=new He(132116),s=new kt(50,pe(t).clientWidth/pe(t).clientHeight,.1,1e3),s.position.set(40,30,40),s.lookAt(0,0,0),r=new nu({antialias:!0}),r.setSize(pe(t).clientWidth,pe(t).clientHeight),r.shadowMap.enabled=!0,r.shadowMap.type=Qd,pe(t).appendChild(r.domElement),n.add(new Qc(16777215,.2)),o=new Uf(16777215,1),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.left=-50,o.shadow.camera.right=50,o.shadow.camera.top=50,o.shadow.camera.bottom=-50,o.shadow.camera.near=.1,o.shadow.camera.far=200,n.add(o),c=new rt(new Zn(.5,16,16),new Rt({color:132116})),n.add(c),p(),m(),y(),E(),M(),w(),A(),window.addEventListener("resize",D)}function p(){const P=new rt(new Ss(200,200),new Xi({color:10397669}));P.rotation.x=-Math.PI/2,P.receiveShadow=!0,n.add(P)}function m(){a=new rt(new $c(.3,.3,20),new Xi({color:10397669})),a.position.y=10,a.castShadow=!0,n.add(a)}function y(){const k=new _o(2.95,3.05,64),O=new Rt({color:10397669,side:sn}),B=new rt(k,O);B.rotation.x=-Math.PI/2,B.position.y=.21,n.add(B)}function E(){const P=new _o(l-.2,l+.2,128),I=new Rt({color:10397669,side:sn}),k=new rt(P,I);k.rotation.x=-Math.PI/2,n.add(k)}function M(){[{name:"N",az:0},{name:"L",az:Math.PI/2},{name:"S",az:Math.PI},{name:"O",az:-Math.PI/2}].forEach(I=>{const k=l*Math.sin(I.az),O=l*Math.cos(I.az),B=new mt().setFromPoints([new U(0,.1,0),new U(k,.1,O)]),N=new xn({color:10397669});n.add(new hn(B,N))})}function w(){[{name:"N",az:0},{name:"L",az:Math.PI/2},{name:"S",az:Math.PI},{name:"O",az:-Math.PI/2}].forEach(I=>{const k=(l+2)*Math.sin(I.az),O=(l+2)*Math.cos(I.az),B=R(I.name,"#9ea7e5");B.position.set(k,.2,O),n.add(B)})}function A(){_.forEach(P=>{const I=l*Math.sin(P.az),k=l*Math.cos(P.az),O=new rt(new Zn(.1,16,16),new Xi({color:P.color}));O.position.set(I,.2,k),n.add(O);const B=new mt().setFromPoints([new U(0,.2,0),new U(I,.2,k)]),N=new xn({color:P.color});n.add(new hn(B,N));const Q=R(P.name,"#9ea7e5");Q.position.set(I+.5,.2,k+.5),n.add(Q)})}function R(P,I){const k=document.createElement("canvas");k.width=256,k.height=128;const O=k.getContext("2d");O.fillStyle=I,O.font="48px Arial",O.textAlign="center",O.textBaseline="middle",O.fillText(P,k.width/2,k.height/2);const B=new er(k),N=new ds({map:B,depthTest:!1}),Q=new Qs(N);return Q.scale.set(4,2,1),Q}function g(){requestAnimationFrame(g);const P=u[d],I=v(P.month,P.day,h);o.position.set(I.x,I.y,I.z),o.target.position.set(0,0,0),n.add(o.target),h+=.05,h>18&&(h=6,d=(d+1)%u.length),r.render(n,s)}function v(P,I,k){const O=Math.PI/180,B=f*O,N=23.44*Math.sin(2*Math.PI*(284+I)/365)*O,Q=(k-12)/12*Math.PI,V=Math.asin(Math.sin(B)*Math.sin(N)+Math.cos(B)*Math.cos(N)*Math.cos(Q)),ee=Math.atan2(-Math.sin(Q),Math.tan(N)*Math.cos(B)-Math.sin(B)*Math.cos(Q)),G=50,X=G*Math.cos(V)*Math.sin(ee),Y=G*Math.sin(V),ge=G*Math.cos(V)*Math.cos(ee);return{x:X,y:Y,z:ge}}ha(()=>{S(),g()});function D(){s.aspect=pe(t).clientWidth/pe(t).clientHeight,s.updateProjectionMatrix(),r.setSize(pe(t).clientWidth,pe(t).clientHeight)}Mo();var T=ob();Zr(T,P=>wt(t,P),()=>pe(t)),Wi(i,T),la()}const cb=`# Copyright (C) 2025 Seichú Astronomical Observatory\r
# License: CC BY-NC 4.0 (Attribution-NonCommercial)\r
# Data compiled for Tupi-Guarani Stellar Culture\r
constellation,star,date,RA_hms,Dec_dms,mag\r
Estrela Vagalume (Uam-rana),α CMa,\r
Estrela Tinguaçu (Tinguaçu),41 Ari,\r
Pata da Ema (Nhandu pysá),α Cru β Cru γ Cru δ Cru,\r
Ovos de Pássaro (Guirá rupiá),δ Mus γ Mus,\r
Colibri (Mainamy),γ Crv α Crv β Crv δ Crv ε Crv,\r
Canoa (Yar Ragapaw),η UMa ζ UMa ε UMa δ UMa γ UMa,\r
Jabuti (Zauxihu Ragapaw),α CrB β CrB γ CrB δ CrB ε CrB ι CrB θ CrB,\r
Ema (Guirá Nhandú),α Cen β Cen α Mus β Cir β TrA ε¹ Ara α Ara θ Sco γ Sco α Sco δ Sco ζ Lup γ Lup,\r
Onça Celeste (Xivi / Charia),α Sco,\r
Cobra de Fogo (Mboi Tatá),α Sco τ Sco ε Sco μ Sco ζ² Sco η Sco ι¹ Sco θ Sco λ Sco κ Sco,\r
Seriema (Azim),λ Sco ν Sco κ Sco ε Sgr η Sgr λ CrA ε CrA ν686 CrA α CrA β CrA δ CrA ζ CrA,\r
Cervo (Guaśú / Suçu-Guasu),β Car 117 Vel Ψ Vel λ Vel γ Vel δ Vel κ Vel φ Vel ι Car q Car π Cen γ Cru β Cru α Cru γ Mus δ Mus,\r
Anta do Norte (Tapí’i),α Cyg T Cyg 72 Cyg V Cyg π² Cyg α Cep ι Cep β Cas 32 Cas δ Cas η Cas ξ Cas λ And 2 Lac\r
Poço do Caititu (Coxi Huguá),SMC,\r
Arapuca (Aka’ekorá / Seichu Jurá),β Peg α Peg γ Peg α And δ And α Tri 41 Ari M-45,\r
Plêiades (Seichú),16 Tau 17 Tau 19 Tau 20 Tau 21 Tau 23 Tau 25 Tau,\r
Queixada da Anta (Tapí’i Rainhykä),α Tau δ¹ Tau δ³ Tau ε Tau γ Tau θ² Tau,\r
Onça Celeste (Xivi / Charia),α Tau,\r
Homem Velho (Tuiváe),α Ori γ Ori β Ori δ Ori ε Ori ζ Ori κ Ori π³ Ori π⁵ Ori 15 Ori β Eri α Tau M45,\r
Poço do Tapir (Tapí’i Huguá),LMC,\r
Encantado da Fertilidade (Joykexo),δ Ori ε Ori ζ Ori,\r
`;var ub=Yi('<tr><td class="svelte-1n46o8q"> </td><td class="svelte-1n46o8q"> </td></tr>'),hb=Yi(`<div class="header-chapter mob svelte-1n46o8q"><p class="svelte-1n46o8q">Este projeto imagina explorar como a arquitetura rural tradicional pode
    dialogar com o céu noturno, transformando a observação das estrelas em um
    elemento estrutural e ritual do habitar</p></div> <div class="header-chapter svelte-1n46o8q"><h2 class="svelte-1n46o8q">Arquitetura que respira vento e observa constelações</h2></div> <div class="header-chapter svelte-1n46o8q"><h2 class="svelte-1n46o8q">Habitar ao ritmo do céu</h2></div> <div class="chapter ottanta svelte-1n46o8q" style="border-bottom: #9ea7e5 1px solid;"><p>Inspirado nas práticas e pesquisas sobre astronomia cultural do <a href="https://observatorioseichu.com.br/" target="_blank">Observatório Astronômico Seichú</a>, juntamente com a artista e astrônoma indígena Maybí Machacalis, e à
    arquitetura, design e planejamento rural ecológico da <a href="https://nayalves.com/" target="_blank">Nay Alves</a>, este trabalho
    relaciona as orientações, os princípios bioclimáticos e as tipologias
    espaciais da casa rural tradicional com as formas como a tradição
    Tupi-Guarani observa e nomeia as constelações, marcando o tempo e as
    estações de acordo com os movimentos do céu. A orientação bioclimática
    tradicional integra-se com a cosmopercepção cultural do céu.</p> <h3 class="svelte-1n46o8q">Costurando a estratificação cultural entre a arquitetura colonial e a
    cultura indígena (estelar)</h3> <p>As casas rurais tradicionais da Colônia de Una derivam da cultura material
    colonial e do século XIX, enquanto as referências celestes se inspiram no
    conhecimento astronômico dos povos Tupi-Guarani, que habitavam a faixa
    costeira séculos antes da chegada dos europeus. A combinação no projeto não
    pretende representar uma continuidade histórica direta, mas sim um diálogo
    simbólico entre a arquitetura tradicional e os conhecimentos ancestrais.</p></div> <div class="header-chapter svelte-1n46o8q" style="border-bottom: none;"><h3 class="svelte-1n46o8q">Kûarasy Ra' angaba.<br/>Marcar o Sol, Orientar a Casa</h3> <p class="svelte-1n46o8q">O Kûarasy Ra'angaba é um dispositivo de leitura solar: acompanha a variação
    das sombras ao longo do ano, marcando solstícios, equinócios e a passagem
    zenital do Sol. Tecnologia milenar dos povos Tupi-Guarani, hoje reativada em <a href="https://observatorioseichu.com.br/oficinas/" target="_blank">oficinas do Observatório Astronômico Seichú</a>, constitui uma forma construída de orientação que integra céu, corpo e
    território. Assim como a arquitetura bioclimática utiliza o percurso solar
    para definir aberturas, proteções e ventilações, o observatório solar é um
    instrumento que organiza o espaço a partir do movimento do céu. Este projeto
    prolonga essa lógica para o período noturno, traduzindo os arcos estelares
    das constelações Tupi-Guarani em dispositivos espaciais da casa rural.</p></div> <!> <div class="header-chapter svelte-1n46o8q"><h3 class="svelte-1n46o8q">órbitas que desenham a casa</h3></div> <div class="header-chapter svelte-1n46o8q"><p class="svelte-1n46o8q">As constelações Tupi-Guarani não são aqui representações simbólicas, mas
    trajetórias calculadas a partir da ascensão reta e da declinação,
    convertidas em altitude e azimute para a latitude da Colônia de Una, Bahia.
    Entre as 18h e as 6h, cada estrela descreve um arco no céu; esses arcos
    tornam-se diagramas espaciais. O scroll organiza o tempo como estação: março
    revela a Pata da Ema ao sudeste; maio eleva o Jabuti ao nordeste; dezembro
    traz o Homem Velho emergindo do horizonte leste. Cada movimento sugere um
    tipo de abertura (janela alta, varanda profunda, pátio interno, abertura
    zenital), como dispositivos de enquadramento do firmamento. A ventilação
    cruzada, a orientação solar e os vazios internos dialogam com as órbitas
    noturnas, integrando arquitetura tradicional e astronomia cultural. <br/><br/> Os cálculos das órbitas das constelações assumem um horizonte livre: relevos
    ou edifícios com até 5 m de altura devem estar a pelo menos 500 m do observador
    para que o horizonte aparente permaneça coerente e os dados continuem confiáveis
    para a análise astronômica. Portanto, é preferível um terreno aberto, levemente
    elevado em direção ao sudoeste, com livre acesso visual ao nordeste e ao sul.
    Uma localização em uma colina baixa com vista livre para o sul e sudoeste permite
    combinar ventilação natural e observação noturna. <br/><br/> Colônia de Una, Bahia, apesar de não ser um local astronômico com visibilidade
    estelar ideal, oferece condições de céu noturno significativamente melhores do
    que as áreas urbanas para a observação das constelações incluídas no projeto.
    Essas condições se prestam a ser parte integrante do projeto arquitetônico.</p></div> <div class="globe-section"><!></div> <div class="chapter svelte-1n46o8q"><p>As constelações aqui apresentadas correspondem a uma seleção específica
    dentro de um universo cosmológico muito mais amplo, entre povos de matriz
    Tupi-Guarani. Esta escolha não pretende esgotar nem representar
    integralmente tais sistemas de conhecimento, mas sim estabelecer um recorte
    coerente com o contexto geográfico de Colônia de Una, Bahia, e com as
    estratégias arquitetônicas exploradas no projeto. Reconhece-se que sistemas
    cosmológicos indígenas constituem patrimônios culturais vivos, profundamente
    enraizados em territórios, línguas e práticas coletivas, cuja profundidade
    ultrapassa o âmbito desta investigação espacial. A sua transposição para o
    campo do projeto espacial implica inevitavelmente um deslocamento de
    sentido. O projeto busca dialogar com esse saber de forma respeitosa,
    entendendo-o como referência cultural viva. O projeto não reivindica
    autoridade sobre tais saberes, nem pretende fixá-los como repertório formal.</p></div> <div class="chapter svelte-1n46o8q"><div class="table-container svelte-1n46o8q"><table class="svelte-1n46o8q"><thead><tr><th class="svelte-1n46o8q">Constelação</th><th class="svelte-1n46o8q">Estrelas</th></tr></thead><tbody></tbody></table> <p><br/>Copyright (C) 2025 <a href="https://observatorioseichu.com.br/" target="_blank">Observatório Astronômico Seichú</a>. License: CC BY-NC 4.0 (Attribution-NonCommercial)</p></div></div> <div class="header-chapter svelte-1n46o8q"><h3 class="svelte-1n46o8q">Diagrama sinóptico com as efemérides estelares</h3></div> <div class="header-chapter svelte-1n46o8q" style="margin-bottom: 5em;"><p class="svelte-1n46o8q">Para cada constelação, a ascensão reta e a declinação são convertidas em
    altitude e azimute em relação às coordenadas de Colônia de Una, Bahia, na
    data de suas efemérides. O sistema identifica o horário noturno em que toda
    a constelação ultrapassa o limite mínimo de visibilidade acima do horizonte,
    garantindo a coerência com as condições observáveis reais. O resultado é um
    quadro comparativo que permite verificar a altura relativa das constelações
    (baixa, média, alta); comparar os azimutes de ascensão e posição culminante;
    ler as diferenças sazonais no mesmo sistema espacial; traduzir os vetores
    estelares em orientações arquitetônicas.</p></div> <!> <div class="title-block svelte-1n46o8q">A luz das estrelas no projeto arquitetônico</div>`,1);function db(i,e){oa(e,!1);let t=jn([]),n=jn(),s=jn(0);ha(()=>{wt(t,jm.parse(cb,{header:!0,skipEmptyLines:!0,comments:"#"}).data),wt(s,pe(n).offsetTop)}),Mo();var r=hb(),a=nn(Kp(r),10);lb(a,{});var o=nn(a,6),c=qt(o);Gy(c,{get globeStart(){return pe(s)}}),Zr(o,_=>wt(n,_),()=>pe(n));var l=nn(o,4),u=qt(l),d=qt(u),h=nn(qt(d));co(h,5,()=>pe(t),lo,(_,S)=>{var p=ub(),m=qt(p),y=qt(m),E=nn(m),M=qt(E);oo(()=>{Ys(y,pe(S).constellation),Ys(M,pe(S).star)}),Wi(_,p)});var f=nn(l,6);ab(f,{}),Wi(i,r),la()}Mm(db,{target:document.getElementById("app")});
