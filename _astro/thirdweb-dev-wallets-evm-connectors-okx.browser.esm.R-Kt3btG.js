import{_ as h,w as d,e as u,f as a,g as p,R as m,bq as w}from"./Login.kXXM0ZeX.js";import{InjectedConnector as l}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.hOn4tOex.js";import"./index.hfxd0CuE.js";import"./tokens.xGG2VBAi.js";import"./url-bc88b2b6.browser.esm.TxzGMoGi.js";class y extends l{constructor(t){const n={...{name:"OKX",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:w},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),h(this,"id",d.okx)}async connect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new u;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(c){if(this.isUserRejectedRequestError(c))throw new a(c)}if(!n){const o=await e.request({method:"eth_requestAccounts"});n=p(o[0])}let s=await this.getChainId(),i=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,i=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const r={chain:{id:s,unsupported:i},provider:e,account:n};return this.emit("connect",r),r}catch(e){throw this.isUserRejectedRequestError(e)?new a(e):e.code===-32002?new m(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{y as OKXConnector};
