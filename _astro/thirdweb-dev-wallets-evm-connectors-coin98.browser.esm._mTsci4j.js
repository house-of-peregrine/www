import{_ as h,w as d,e as u,f as a,g as p,R as m,ca as l}from"./Login.VljSKXrW.js";import{InjectedConnector as w}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.JrVD5-xu.js";import"./jsx-runtime.7BJwlAz-.js";import"./index.9orYzNvn.js";import"./tokens.xyBxlAX2.js";import"./index.JdUBUp0J.js";import"./url-bc88b2b6.browser.esm.ca_vOvX1.js";class v extends w{constructor(e){const n={...{name:"Coin98 Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:l},...e.options};super({chains:e.chains,options:n,connectorStorage:e.connectorStorage}),h(this,"id",d.coin98)}async connect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const t=await this.getProvider();if(!t)throw new u;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(c){if(this.isUserRejectedRequestError(c))throw new a(c)}if(!n){const i=await t.request({method:"eth_requestAccounts"});n=p(i[0])}let o=await this.getChainId(),s=this.isChainUnsupported(o);if(e.chainId&&o!==e.chainId)try{await this.switchChain(e.chainId),o=e.chainId,s=this.isChainUnsupported(e.chainId)}catch(i){console.error(`Could not switch to chain id : ${e.chainId}`,i)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const r={chain:{id:o,unsupported:s},provider:t,account:n};return this.emit("connect",r),r}catch(t){throw this.isUserRejectedRequestError(t)?new a(t):t.code===-32002?new m(t):t}}}export{v as Coin98Connector};
