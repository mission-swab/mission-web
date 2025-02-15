import{p as B,e as y,j as S,m as $,q as N,s as T,c as l,o as i,a as t,b as h,w as b,F as p,r as f,f as m,v as L,t as u,_ as D,d as k,x as E,T as A,n as q,k as I}from"./DrhhBMMz.js";import{q as C}from"./CoXtGtiC.js";import{_ as P}from"./DlAUqK2U.js";import{u as R}from"./bM1tMxP1.js";const V=B("/images/about.png"),z=window.setInterval,F={class:"relative overflow-hidden bg-gray-900"},U={class:"relative h-[600px]"},W=["src","alt"],H={class:"absolute inset-0"},O={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full"},Y={class:"flex h-full items-center"},G={class:"max-w-2xl"},J={class:"text-5xl font-bold tracking-tight text-white sm:text-6xl"},K={class:"mt-6 text-xl text-gray-100"},Q={class:"mt-10"},X={class:"absolute bottom-4 left-0 right-0 flex justify-center space-x-2"},Z=["onClick"],tt={__name:"Banner",async setup(j){let s,d;const w=([s,d]=y(()=>C("banner").first()),s=await s,d(),s),c=S(()=>w.slides||[]),n=$(0),v=$(null),x=()=>{n.value=(n.value+1)%c.value.length},o=()=>{n.value=(n.value-1+c.value.length)%c.value.length},_=()=>{v.value=z(()=>{x()},5e3)};return N(()=>{_()}),T(()=>{v.value&&clearInterval(v.value)}),(e,a)=>{const M=D;return i(),l("div",F,[t("div",U,[h(A,{name:"fade",tag:"div",class:"h-full"},{default:b(()=>[(i(!0),l(p,null,f(m(c),(r,g)=>L((i(),l("div",{key:r.id,class:"absolute inset-0 h-full w-full"},[t("img",{src:r.image,alt:r.title,class:"h-full w-full object-cover"},null,8,W),a[1]||(a[1]=t("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-900/75 to-blue-900/40"},null,-1)),t("div",H,[t("div",O,[t("div",Y,[t("div",G,[t("h1",J,u(r.title),1),t("p",K,u(r.description),1),t("div",Q,[h(M,{to:r.link,class:"inline-flex items-center rounded-md border-2 border-white bg-transparent px-8 py-4 text-lg font-medium text-white hover:bg-white hover:text-blue-900 transition-colors duration-300"},{default:b(()=>[k(u(r.buttonText)+" ",1),a[0]||(a[0]=t("svg",{class:"ml-3 -mr-1 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1))]),_:2},1032,["to"])])])])])])])),[[E,m(n)===g]])),128))]),_:1}),t("div",X,[(i(!0),l(p,null,f(m(c),(r,g)=>(i(),l("button",{key:g,onClick:_t=>n.value=g,class:q(["h-2 w-2 rounded-full transition-all duration-300 focus:outline-none",m(n)===g?"bg-white w-4":"bg-white/50 hover:bg-white/75"])},null,10,Z))),128))]),t("button",{onClick:o,class:"absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus:outline-none transition-colors duration-300"},a[2]||(a[2]=[t("svg",{class:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)])),t("button",{onClick:x,class:"absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus:outline-none transition-colors duration-300"},a[3]||(a[3]=[t("svg",{class:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]))])])}}},et=P(tt,[["__scopeId","data-v-b698bf42"]]),st={class:"min-h-screen bg-white"},ot={class:"py-16 bg-white"},lt={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},it={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"},nt=["src","alt"],at={class:"p-4"},rt={class:"text-lg font-semibold mb-2"},dt={class:"text-gray-600 text-sm mb-4"},ct={class:"py-16 bg-gray-50"},ut={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},mt={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},vt=["src","alt"],xt={class:"p-6"},gt={class:"text-sm text-gray-500 mb-2"},ht={class:"text-xl font-semibold mb-3"},yt={__name:"index",async setup(j){let s,d;R({title:"Mission - Home",meta:[{name:"description",content:"Mission official website - Discover our latest products and industry insights"}]});const w=([s,d]=y(()=>C("homeProducts").first()),s=await s,d(),s),c=S(()=>w.products||[]),n=([s,d]=y(()=>C("blog").order("date","DESC").limit(4).all()),s=await s,d(),s),v=x=>new Date(x).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(x,o)=>{const _=D;return i(),l("div",st,[t("main",null,[h(et),t("section",ot,[t("div",lt,[o[1]||(o[1]=t("h2",{class:"text-center text-3xl font-bold mb-12"},"Our Products",-1)),t("div",it,[(i(!0),l(p,null,f(m(c),e=>(i(),l("div",{key:e.id,class:"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"},[t("img",{src:e.image,alt:e.title,class:"w-full h-48 object-cover rounded-t-lg"},null,8,nt),t("div",at,[t("h3",rt,u(e.title),1),t("p",dt,u(e.description),1),h(_,{to:e.link,class:"inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"},{default:b(()=>o[0]||(o[0]=[k("Read More")])),_:2},1032,["to"])])]))),128))])])]),o[4]||(o[4]=I('<section class="py-16 bg-gray-50"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><img src="'+V+'" alt="关于我们" class="rounded-lg shadow-lg"></div><div><h2 class="text-3xl font-bold mb-6">We Are Ready To Making You Different From Others</h2><p class="text-gray-600 mb-8"> As a leading manufacturer of separated devices, we specialize in providing high-quality products and services to our customers. With years of experience and a commitment to innovation, we strive to deliver exceptional value to our clients. </p><div class="grid grid-cols-2 gap-6"><div class="text-center"><div class="text-3xl font-bold text-blue-600 mb-2">15+</div><div class="text-gray-600">Years of Experience</div></div><div class="text-center"><div class="text-3xl font-bold text-blue-600 mb-2">30+</div><div class="text-gray-600">30 Export Countries</div></div><div class="text-center"><div class="text-3xl font-bold text-blue-600 mb-2">50+</div><div class="text-gray-600">Professional Staff Serving</div></div><div class="text-center"><div class="text-3xl font-bold text-blue-600 mb-2">1000+</div><div class="text-gray-600">Customers Choose us</div></div></div></div></div></div></section>',1)),t("section",ct,[t("div",ut,[o[3]||(o[3]=t("h2",{class:"text-center text-3xl font-bold mb-12"},"LATEST NEWS",-1)),t("div",mt,[(i(!0),l(p,null,f(m(n),e=>(i(),l("div",{key:e.path,class:"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"},[t("img",{src:e.meta.image,alt:e.title,class:"w-full h-48 object-cover rounded-t-lg"},null,8,vt),t("div",xt,[t("div",gt,u(v(e.date)),1),t("h3",ht,u(e.title),1),h(_,{to:e._path,class:"text-blue-600 hover:text-blue-700 font-medium"},{default:b(()=>o[2]||(o[2]=[k("Read More")])),_:2},1032,["to"])])]))),128))])])])])])}}};export{yt as default};
