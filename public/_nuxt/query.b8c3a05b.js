import{C as U,D as S,E as k,F as K,G as v,q as N,u as I,k as q,e as E,H as W,I as J,J as Q,_ as G}from"./entry.6d072c04.js";import{w as P,s as V}from"./utils.4f075719.js";import{u as X}from"./preview.a3a67f8b.js";const Y=()=>null;function Bt(...n){var u;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??Y,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const i=U(),a=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],c=()=>a()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:S(a()??((u=t.default)==null?void 0:u.call(t))??null),pending:S(!c()),error:S(i.payload._errors[r]?k(i.payload._errors[r]):null)});const o={...i._asyncData[r]};o.refresh=o.execute=(y={})=>{if(i._asyncDataPromises[r]){if(y.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if(y._initial&&c())return a();o.pending.value=!0;const g=new Promise((f,m)=>{try{f(e(i))}catch(x){m(x)}}).then(f=>{if(g.cancelled)return i._asyncDataPromises[r];t.transform&&(f=t.transform(f)),t.pick&&(f=Z(f,t.pick)),o.data.value=f,o.error.value=null}).catch(f=>{var m;if(g.cancelled)return i._asyncDataPromises[r];o.error.value=f,o.data.value=I(((m=t.default)==null?void 0:m.call(t))??null)}).finally(()=>{g.cancelled||(o.pending.value=!1,i.payload.data[r]=o.data.value,o.error.value&&(i.payload._errors[r]=k(o.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=g,i._asyncDataPromises[r]};const l=()=>o.refresh({_initial:!0}),h=t.server!==!1&&i.payload.serverRendered;{const y=q();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const f=y._nuxtOnBeforeMountCbs;y&&(K(()=>{f.forEach(m=>{m()}),f.splice(0,f.length)}),v(()=>f.splice(0,f.length)))}h&&i.isHydrating&&c()?o.pending.value=!1:y&&(i.payload.serverRendered&&i.isHydrating||t.lazy)&&t.immediate?y._nuxtOnBeforeMountCbs.push(l):t.immediate&&l(),t.watch&&N(t.watch,()=>o.refresh());const g=i.hook("app:data:refresh",f=>{if(!f||f.includes(r))return o.refresh()});y&&v(g)}const p=Promise.resolve(i._asyncDataPromises[r]).then(()=>o);return Object.assign(p,o),p}function Z(n,s){const r={};for(const e of s)r[e]=n[e];return r}const D=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function tt(n,s){s?s={...D,...s}:s=D;const r=$(s);return r.dispatch(n),r.toString()}const et=Object.freeze(["prototype","__proto__","constructor"]);function $(n){let s="",r=new Map;const e=t=>{s+=t};return{toString(){return s},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let a="";const c=i.length;c<10?a="unknown:["+i+"]":a=i.slice(8,c-1),a=a.toLowerCase();let o=null;if((o=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this[a]?this[a](t):n.ignoreUnknown||this.unkown(t,a);else{let l=Object.keys(t);n.unorderedObjects&&(l=l.sort());let h=[];n.respectType!==!1&&!C(t)&&(h=et),n.excludeKeys&&(l=l.filter(u=>!n.excludeKeys(u)),h=h.filter(u=>!n.excludeKeys(u))),e("object:"+(l.length+h.length)+":");const p=u=>{this.dispatch(u),e(":"),n.excludeValues||this.dispatch(t[u]),e(",")};for(const u of l)p(u);for(const u of h)p(u)}},array(t,i){if(i=i===void 0?n.unorderedArrays!==!1:i,e("array:"+t.length+":"),!i||t.length<=1){for(const o of t)this.dispatch(o);return}const a=new Map,c=t.map(o=>{const l=$(n);l.dispatch(o);for(const[h,p]of l.getContext())a.set(h,p);return l.toString()});return r=a,c.sort(),this.array(c,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,i){if(e(i),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),C(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const i=[...t];return this.array(i,n.unorderedSets!==!1)},set(t){e("set:");const i=[...t];return this.array(i,n.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const j="[native code] }",rt=j.length;function C(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-rt)===j}class w{constructor(s,r){s=this.words=s||[],this.sigBytes=r===void 0?s.length*4:r}toString(s){return(s||st).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const e=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const st={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},nt={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,i=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,a=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|i<<8|a;for(let o=0;o<4&&e*8+o*6<n.sigBytes*8;o++)r.push(s.charAt(c>>>6*(3-o)&63))}return r.join("")}},it={parse(n){const s=n.length,r=[];for(let e=0;e<s;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new w(r,s)}},at={parse(n){return it.parse(unescape(encodeURIComponent(n)))}};class ot{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=at.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let a=0;a<t;a+=this.blockSize)this._doProcessBlock(this._data.words,a);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new w(r,i)}}class ct extends ot{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const O=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],_=[];class lt extends ct{constructor(){super(...arguments),this._hash=new w([...O])}reset(){super.reset(),this._hash=new w([...O])}_doProcessBlock(s,r){const e=this._hash.words;let t=e[0],i=e[1],a=e[2],c=e[3],o=e[4],l=e[5],h=e[6],p=e[7];for(let u=0;u<64;u++){if(u<16)_[u]=s[r+u]|0;else{const B=_[u-15],M=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,b=_[u-2],H=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;_[u]=M+_[u-7]+H+_[u-16]}const y=o&l^~o&h,g=t&i^t&a^i&a,f=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),m=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),x=p+m+y+ut[u]+_[u],T=f+g;p=h,h=l,l=o,o=c+x|0,c=a,a=i,i=t,t=x+T|0}e[0]=e[0]+t|0,e[1]=e[1]+i|0,e[2]=e[2]+a|0,e[3]=e[3]+c|0,e[4]=e[4]+o|0,e[5]=e[5]+l|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ft(n){return new lt().finalize(n).toString(nt)}function A(n,s={}){const r=typeof n=="string"?n:tt(n,s);return ft(r).slice(0,10)}const z=(n,s)=>s.split(".").reduce((r,e)=>r&&r[e],n),F=(n,s)=>Object.keys(n).filter(s).reduce((r,e)=>Object.assign(r,{[e]:n[e]}),{}),bt=n=>s=>Array.isArray(s)?s.map(r=>n(r)):n(s),R=n=>{const s=[],r=[];for(const e of n)["$","_"].includes(e)?s.push(e):r.push(e);return{prefixes:s,properties:r}},xt=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=R(n);return F(s,t=>!e.includes(t)&&!r.includes(t[0]))},St=(n=[])=>s=>{if(n.length===0||!s)return s;const{prefixes:r,properties:e}=R(n);return F(s,t=>e.includes(t)||r.includes(t[0]))},kt=(n,s)=>{const r=new Intl.Collator(s.$locale,{numeric:s.$numeric,caseFirst:s.$caseFirst,sensitivity:s.$sensitivity}),e=Object.keys(s).filter(t=>!t.startsWith("$"));for(const t of e)n=n.sort((i,a)=>{const c=[z(i,t),z(a,t)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return s[t]===-1&&c.reverse(),r.compare(c[0],c[1])});return n},vt=(n,s="Expected an array")=>{if(!Array.isArray(n))throw new TypeError(s)},d=n=>Array.isArray(n)?n:[void 0,null].includes(n)?[]:[n],ht=["sort","where","only","without"],pt=(n,s)=>{const r={...s};for(const i of ht)r[i]&&(r[i]=d(r[i]));const e=(i,a=c=>c)=>(...c)=>(r[i]=a(...c),t),t={params:()=>({...r,...r.where?{where:[...d(r.where)]}:{},...r.sort?{sort:[...d(r.sort)]}:{}}),only:e("only",d),without:e("without",d),where:e("where",i=>[...d(r.where),...d(i)]),sort:e("sort",i=>[...d(r.sort),...d(i)]),limit:e("limit",i=>parseInt(String(i),10)),skip:e("skip",i=>parseInt(String(i),10)),find:()=>n(t),findOne:()=>(r.first=!0,n(t)),findSurround:(i,a)=>(r.surround={query:i,...a},n(t)),locale:i=>t.where({_locale:i})};return t};function L(n){return JSON.stringify(n,yt)}function yt(n,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}const dt=n=>{let s=L(n);return s=typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s),s=s.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(s.match(/.{1,100}/g)||[]).join("/")},gt=()=>async n=>{const{content:s}=E().public,r=n.params(),e=s.experimental.stripQueryParameters?P(`/query/${`${A(r)}.${s.integrity}`}/${dt(r)}.json`):P(`/query/${A(r)}.${s.integrity}.json`);if(V())return(await G(()=>import("./client-db.16728fbd.js"),["./client-db.16728fbd.js","./entry.6d072c04.js","./entry.8ca420f3.css","./index.a6ef77ff.js","./preview.a3a67f8b.js","./utils.4f075719.js"],import.meta.url).then(a=>a.useContentDatabase())).fetch(n);const t=await $fetch(e,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:L(r),previewToken:X().getPreviewToken()}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function Pt(n,...s){const{content:r}=E().public,e=pt(gt(),typeof n!="string"?n:{});let t;typeof n=="string"&&(t=W(J(n,...s)));const i=e.params;return e.params=()=>{var c,o,l;const a=i();return t&&(a.where=a.where||[],a.first&&(a.where||[]).length===0?a.where.push({_path:Q(t)}):a.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(c=a.sort)!=null&&c.length||(a.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((l=(o=a.where)==null?void 0:o.find(p=>p._locale))!=null&&l._locale||(a.where=a.where||[],a.where.push({_locale:r.defaultLocale}))),a},e}export{vt as a,d as b,bt as c,St as d,dt as e,pt as f,z as g,A as h,L as j,Pt as q,kt as s,Bt as u,xt as w};
