import{N as g,o as f,p as W,bF as w,q as C,G as m,r as y,s as p,t as o,T as l,B as u,Q as T}from"./Login.VljSKXrW.js";import{C as b,a as E,b as v,G as R}from"./contract-appuri-a05d1c9a.browser.esm.qjqvg_1Z.js";import{C as S}from"./contract-interceptor-d7b164a7.browser.esm.amNiAGmN.js";import{C as A}from"./contract-platform-fee-dbafd1a2.browser.esm.n39B2Yys.js";import{C as B}from"./contract-roles-37b20d5a.browser.esm.fsx3DRGP.js";import{C as F}from"./contract-sales-5eb82407.browser.esm.sf40rXs5.js";import{a as O}from"./erc-20-dccc5c20.browser.esm.9C-iTLxN.js";import{S as V}from"./erc-20-standard-151d82d7.browser.esm.BeD1krRJ.js";import"./jsx-runtime.7BJwlAz-.js";import"./index.9orYzNvn.js";import"./tokens.xyBxlAX2.js";import"./index.JdUBUp0J.js";import"./assertEnabled-55070897.browser.esm.SeC5mxnZ.js";import"./drop-claim-conditions-b44061c8.browser.esm.QqaKEqM2.js";import"./index.9Jh5xny-.js";import"./setErc20Allowance-832742d0.browser.esm.oUZvzRI0.js";class M{constructor(t,a){this.contractWrapper=t,this.events=a}async getAllHolderBalances(){const a=(await this.events.getEvents("Transfer")).map(e=>e.data),r={};a.forEach(e=>{const n=e?.from,s=e?.to,h=e?.value;n!==p&&(n in r||(r[n]=u.from(0)),r[n]=r[n].sub(h)),s!==p&&(s in r||(r[s]=u.from(0)),r[s]=r[s].add(h))});const c=Object.entries(r),i=await Promise.all(c.map(e=>{let[,n]=e;return T(this.contractWrapper.getProvider(),this.contractWrapper.address,n)}));return c.map((e,n)=>{let[s]=e;return{holder:s,balance:i[n]}})}}class d extends V{static contractRoles=g;constructor(t,a,r){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,e=arguments.length>5?arguments[5]:void 0,n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new f(t,a,i,c,r);super(n,r,e),this.abi=W.parse(i||[]),this.metadata=new b(this.contractWrapper,w,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new B(this.contractWrapper,d.contractRoles),this.sales=new F(this.contractWrapper),this.events=new v(this.contractWrapper),this.history=new M(this.contractWrapper,this.events),this.encoder=new C(this.contractWrapper),this.estimator=new R(this.contractWrapper),this.platformFees=new A(this.contractWrapper),this.interceptor=new S(this.contractWrapper),this.signature=new O(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[t]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await m(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[y("transfer"),p])}mint=o(async t=>this.erc20.mint.prepare(t));mintTo=o(async(t,a)=>this.erc20.mintTo.prepare(t,a));async getMintTransaction(t,a){return this.erc20.getMintTransaction(t,a)}mintBatchTo=o(async t=>this.erc20.mintBatchTo.prepare(t));delegateTo=o(async t=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await m(t)]}));burn=o(t=>this.erc20.burn.prepare(t));burnFrom=o(async(t,a)=>this.erc20.burnFrom.prepare(t,a));async prepare(t,a,r){return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}export{d as Token};
