import{_ as h,w as d,e as u,f as a,g as p,R as m,bu as l}from"./Login.kXXM0ZeX.js";import{InjectedConnector as w}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.hOn4tOex.js";import"./index.hfxd0CuE.js";import"./tokens.xGG2VBAi.js";import"./url-bc88b2b6.browser.esm.TxzGMoGi.js";class b extends w{constructor(e){const n={...{name:"Rabby Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:l},...e.options};super({chains:e.chains,options:n,connectorStorage:e.connectorStorage}),h(this,"id",d.rabby)}async connect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const t=await this.getProvider();if(!t)throw new u;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(c){if(this.isUserRejectedRequestError(c))throw new a(c)}if(!n){const s=await t.request({method:"eth_requestAccounts"});n=p(s[0])}let o=await this.getChainId(),i=this.isChainUnsupported(o);if(e.chainId&&o!==e.chainId)try{await this.switchChain(e.chainId),o=e.chainId,i=this.isChainUnsupported(e.chainId)}catch(s){console.error(`Could not switch to chain id : ${e.chainId}`,s)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const r={chain:{id:o,unsupported:i},provider:t,account:n};return this.emit("connect",r),r}catch(t){throw this.isUserRejectedRequestError(t)?new a(t):t.code===-32002?new m(t):t}}}export{b as RabbyConnector};
