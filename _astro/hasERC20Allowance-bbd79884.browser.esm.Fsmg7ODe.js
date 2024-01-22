import{m as l,o as w}from"./Login.FOoZKC81.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./Login.FOoZKC81.js").then(i=>i.dj),__vite__mapDeps([0,1,2,3,4]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/Login.FOoZKC81.js","_astro/jsx-runtime.7BJwlAz-.js","_astro/index.9orYzNvn.js","_astro/tokens.VZm6ve4Q.js","_astro/index.JdUBUp0J.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
