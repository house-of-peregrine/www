import{m as l,o as w}from"./Login.jzdBbfpg.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./Login.jzdBbfpg.js").then(i=>i.dj),__vite__mapDeps([0,1,2]))).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/Login.jzdBbfpg.js","_astro/index.hfxd0CuE.js","_astro/tokens.Ppa7r3iO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
