const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BmeOkvaA.js","./jctzl8Fq.js"])))=>i.map(i=>d[i]);
import{M as h,N as f,L as m}from"./jctzl8Fq.js";const _={banner:"1ufjDs24bq",homeProducts:"ZuAVFqA0A7",products:"sv5FsjIe3X",blog:"GSoRZAr0Dy"},$={banner:"_content_banner",homeProducts:"_content_homeProducts",products:"_content_products",blog:"_content_blog",info:"_content_info"},j={banner:{fields:{id:"string",stem:"string",extension:"string",meta:"json",slides:"json"}},homeProducts:{fields:{id:"string",stem:"string",extension:"string",meta:"json",products:"json"}},products:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},blog:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json",date:"date"}},info:{fields:{}}},d=(o,i)=>{const t=o._conditions;return t.length>0?`(${t.join(` ${i} `)})`:""},l=o=>{const i=[],t={_conditions:i,where(e,s,n){let r;switch(s.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(n)){const c=n.map(a=>u(a)).join(", ");r=`"${String(e)}" ${s.toUpperCase()} (${c})`}else throw new TypeError(`Value for ${s} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(n)&&n.length===2)r=`"${String(e)}" ${s.toUpperCase()} ${u(n[0])} AND ${u(n[1])}`;else throw new Error(`Value for ${s} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":r=`"${String(e)}" ${s.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":r=`"${String(e)}" ${s.toUpperCase()} ${u(n)}`;break;default:r=`"${String(e)}" ${s} ${u(typeof n=="boolean"?Number(n):n)}`}return i.push(`${r}`),t},andWhere(e){const s=e(l());return i.push(d(s,"AND")),t},orWhere(e){const s=e(l());return i.push(d(s,"OR")),t}};return t},p=(o,i)=>{const t={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},e={__params:t,andWhere(n){const r=n(l());return t.conditions.push(d(r,"AND")),e},orWhere(n){const r=n(l());return t.conditions.push(d(r,"OR")),e},path(n){return e.where("path","=",h(n))},skip(n){return t.offset=n,e},where(n,r,c){return e.andWhere(a=>a.where(String(n),r,c)),e},limit(n){return t.limit=n,e},select(...n){return n.length&&t.selectedFields.push(...n),e},order(n,r){return t.orderBy.push(`"${String(n)}" ${r}`),e},async all(){return i(o,s()).then(n=>n||[])},async first(){return i(o,s({limit:1})).then(n=>n[0]||null)},async count(n="*",r=!1){return i(o,s({count:{field:String(n),distinct:r}})).then(c=>c[0].count)}};function s(n={}){let r="SELECT ";if(n!=null&&n.count)r+=`COUNT(${n.count.distinct?"DISTINCT ":""}${n.count.field}) as count`;else{const a=Array.from(new Set(t.selectedFields));r+=a.length>0?a.map(g=>`"${String(g)}"`).join(", "):"*"}r+=` FROM ${$[String(o)]}`,t.conditions.length>0&&(r+=` WHERE ${t.conditions.join(" AND ")}`),t.orderBy.length>0?r+=` ORDER BY ${t.orderBy.join(", ")}`:r+=" ORDER BY stem ASC";const c=(n==null?void 0:n.limit)||t.limit;return c>0&&(t.offset>0?r+=` LIMIT ${c} OFFSET ${t.offset}`:r+=` LIMIT ${c}`),r}return e};function u(o){return`'${String(o).replace(/'/g,"''")}'`}const E=o=>{var t,e;const i=(e=(t=f())==null?void 0:t.ssrContext)==null?void 0:e.event;return p(o,(s,n)=>y(i,s,n))};async function y(o,i,t){return b(i,t)}async function b(o,i){return await m(()=>import("./BmeOkvaA.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>e.loadDatabaseAdapter(o)).then(e=>e.all(i))}export{j as a,_ as c,E as q,$ as t};
