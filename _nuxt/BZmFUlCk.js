import{u as w,e as k,c as n,a as t,b as g,w as f,t as r,f as o,g as y,h as B,_ as C,o as l,d as h}from"./5pxuG1Xh.js";import{_ as M}from"./ByspTCCV.js";import{q as N}from"./D750AbYP.js";import{u as V}from"./LUHUoV45.js";import{_ as D}from"./DlAUqK2U.js";const q={class:"bg-gray-50"},z={class:"mx-auto max-w-7xl"},H={class:"px-4 py-4 sm:px-6 lg:px-8"},L={class:"flex items-center space-x-2 text-sm text-gray-500"},R={class:"text-gray-900 font-medium"},S={class:"mx-auto px-4 sm:px-6 lg:px-8"},$={class:"bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-8"},j={class:"text-3xl font-bold text-gray-900 mb-4"},A={class:"flex items-center gap-4 text-sm text-gray-500 mb-6"},E=["datetime"],I={key:1,class:"rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600"},T={class:"prose prose-blue prose-lg max-w-none"},F={key:1,class:"text-center py-12"},G={__name:"[slug]",async setup(J){var c,d;let a,i;const v=w().params.slug,e=([a,i]=k(()=>N("blog").path("/blog/"+v).first()),a=await a,i(),a);return V({title:`${((c=e.value)==null?void 0:c.title)||"Blog"} - Mission`,meta:[{name:"description",content:((d=e.value)==null?void 0:d.description)||"Mission blog article"}]}),(K,s)=>{var u,_,x,p;const m=C,b=M;return l(),n("div",q,[t("div",z,[t("nav",H,[t("ol",L,[t("li",null,[g(m,{to:"/",class:"hover:text-blue-600"},{default:f(()=>s[0]||(s[0]=[h("Home")])),_:1})]),s[2]||(s[2]=t("li",null,[t("svg",{class:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})])],-1)),t("li",null,[g(m,{to:"/blog",class:"hover:text-blue-600"},{default:f(()=>s[1]||(s[1]=[h("Blog")])),_:1})]),s[3]||(s[3]=t("li",null,[t("svg",{class:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})])],-1)),t("li",R,r((u=o(e))==null?void 0:u.title),1)])]),t("article",S,[t("div",$,[t("h1",j,r((_=o(e))==null?void 0:_.title),1),t("div",A,[(x=o(e))!=null&&x.date?(l(),n("time",{key:0,datetime:o(e).date},r(new Date(o(e).date).toLocaleDateString()),9,E)):y("",!0),(p=o(e))!=null&&p.meta.category?(l(),n("span",I,r(o(e).meta.category),1)):y("",!0)]),t("div",T,[o(e)&&o(e).body?(l(),B(b,{key:0,value:o(e)},null,8,["value"])):(l(),n("div",F,s[4]||(s[4]=[t("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 2v4M8 2v4M3 10h18"})],-1),t("h3",{class:"mt-4 text-lg font-semibold text-gray-900"},"Blog is not found",-1)])))])])])])])}}},X=D(G,[["__scopeId","data-v-aa764166"]]);export{X as default};
