import{SmartWalletConnector as o}from"./thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm.79x4FSsi.js";import{bx as a,a9 as n}from"./Login.kXXM0ZeX.js";import"./index.hfxd0CuE.js";import"./browser.7ACNNLw6.js";import"./index.DgW_VLN2.js";import"./url-bc88b2b6.browser.esm.TxzGMoGi.js";import"./tokens.xGG2VBAi.js";class d extends o{constructor(t){super({...t,factoryAddress:t.registryAddress||a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,n("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}export{d as TokenBoundSmartWalletConnector};
