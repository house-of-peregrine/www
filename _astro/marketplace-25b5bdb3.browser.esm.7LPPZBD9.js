import{M as $,o as U,p as V,v as z,q as B,s as m,L as y,B as s,r as v,t as i,x as W,y as O,z as x,T as c,F as R,G as w,H as C,I as G,J as H,K as I,O as K,P as b,Q as T,V as Q,m as P,X as k}from"./Login.VljSKXrW.js";import{D as Y,f as _,I as J,a as X}from"./QueryParams-c7566bb2.browser.esm.JB0fHRhb.js";import{m as E,v as q,h as D,i as Z,a as j}from"./marketplace-fbc507f1.browser.esm.Z_5N2mXt.js";import{C as tt,a as rt,G as et,b as N}from"./contract-appuri-a05d1c9a.browser.esm.qjqvg_1Z.js";import{C as at}from"./contract-interceptor-d7b164a7.browser.esm.amNiAGmN.js";import{C as nt}from"./contract-platform-fee-dbafd1a2.browser.esm.n39B2Yys.js";import{C as st}from"./contract-roles-37b20d5a.browser.esm.fsx3DRGP.js";import{c as F}from"./cleanCurrencyAddress-f70c3199.browser.esm.QJNTmLjJ.js";import{s as S}from"./setErc20Allowance-832742d0.browser.esm.oUZvzRI0.js";import"./jsx-runtime.7BJwlAz-.js";import"./index.9orYzNvn.js";import"./tokens.xyBxlAX2.js";import"./index.JdUBUp0J.js";let h=function(g){return g[g.Direct=0]="Direct",g[g.Auction=1]="Auction",g}({});class ot{constructor(t,r){this.contractWrapper=t,this.storage=r,this.encoder=new B(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.listingId.toString()!==t.toString())throw new y(this.getAddress(),t.toString());if(r.listingType!==h.Auction)throw new R(this.getAddress(),t.toString(),"Direct","Auction");return await this.mapListing(r)}async getWinningBid(t){await this.validateListing(s.from(t));const r=await this.contractWrapper.read("winningBid",[t]);if(r.offeror!==m)return await E(this.contractWrapper.getProvider(),s.from(t),r)}async getWinner(t){const r=await this.validateListing(s.from(t)),e=await this.contractWrapper.read("winningBid",[t]),a=s.from(Math.floor(Date.now()/1e3)),n=s.from(r.endTimeInEpochSeconds);if(a.gt(n)&&e.offeror!==m)return e.offeror;const p=(await new N(this.contractWrapper).getEvents("AuctionClosed")).find(d=>d.data.listingId.eq(s.from(t)));if(!p)throw new Error(`Could not find auction with listingId ${t} in closed auctions`);return p.data.winningBidder}createListing=i(async t=>{q(t);const r=await w(t.assetContractAddress),e=await w(t.currencyContractAddress);await D(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await C(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e),n=await C(this.contractWrapper.getProvider(),t.reservePricePerToken,e);let o=Math.floor(t.startTimestamp.getTime()/1e3);const p=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return o<p&&(o=p),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:F(e),listingType:h.Auction,quantityToList:t.quantity,reservePricePerToken:n,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(o)}],parse:d=>({id:this.contractWrapper.parseLogs("ListingAdded",d?.logs)[0].args.listingId,receipt:d})})});createListingsBatch=i(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e?.logs).map(n=>({id:n.args.listingId,receipt:e}))})});buyoutListing=i(async t=>{const r=await this.validateListing(s.from(t)),e=await G(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,H(r.buyoutPrice,e.decimals))});makeBid=i(async(t,r)=>{const e=await this.validateListing(s.from(t)),a=await C(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(s.from(0)))throw new Error("Cannot make a bid with 0 value");const n=await this.contractWrapper.read("bidBufferBps",[]),o=await this.getWinningBid(t);if(o){const f=Z(o.pricePerToken,a,n);W(f)}else{const f=a,l=s.from(e.reservePrice);W(f.gte(l))}const u=s.from(e.quantity),p=a.mul(u),d=await this.contractWrapper.getCallOverrides()||{};return await S(this.contractWrapper,p,e.currencyContractAddress,d),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,e.quantity,e.currencyContractAddress,a,I],overrides:d})});cancelListing=i(async t=>{const r=await this.validateListing(s.from(t)),e=s.from(Math.floor(Date.now()/1e3)),a=s.from(r.startTimeInEpochSeconds),n=await this.contractWrapper.read("winningBid",[t]);if(e.gt(a)&&n.offeror!==m)throw new K(t.toString());return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),await this.contractWrapper.getSignerAddress()]})});closeListing=i(async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateListing(s.from(t));try{return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"closeAuction",args:[s.from(t),r]})}catch(a){throw a.message.includes("cannot close auction before it has ended")?new b(t.toString(),e.endTimeInEpochSeconds.toString()):a}});executeSale=i(async t=>{const r=await this.validateListing(s.from(t));try{const e=await this.getWinningBid(t);W(e,"No winning bid found");const a=this.encoder.encode("closeAuction",[t,r.sellerAddress]),n=this.encoder.encode("closeAuction",[t,e.buyerAddress]);return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a,n]})}catch(e){throw e.message.includes("cannot close auction before it has ended")?new b(t.toString(),r.endTimeInEpochSeconds.toString()):e}});updateListing=i(async t=>c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.reservePrice,t.buyoutPrice,t.currencyContractAddress,t.startTimeInEpochSeconds,t.endTimeInEpochSeconds]}));async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(),this.getWinningBid(t),this.validateListing(s.from(t))]),n=e?e.currencyValue.value:a.reservePrice,o=n.add(n.mul(r).div(1e4));return T(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await T(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInEpochSeconds:t.startTime,asset:await _(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),reservePriceCurrencyValuePerToken:await T(this.contractWrapper.getProvider(),t.currency,t.reservePricePerToken),reservePrice:s.from(t.reservePricePerToken),endTimeInEpochSeconds:t.endTime,sellerAddress:t.tokenOwner,type:h.Auction}}}class it{constructor(t,r){this.contractWrapper=t,this.storage=r}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===m)throw new y(this.getAddress(),t.toString());if(r.listingType!==h.Direct)throw new R(this.getAddress(),t.toString(),"Auction","Direct");return await this.mapListing(r)}async getActiveOffer(t,r){await this.validateListing(s.from(t)),W(Q(r));const e=await this.contractWrapper.read("offers",[t,await w(r)]);if(e.offeror!==m)return await E(this.contractWrapper.getProvider(),s.from(t),e)}createListing=i(async t=>{q(t);const r=await w(t.assetContractAddress),e=await w(t.currencyContractAddress);await D(this.contractWrapper,this.getAddress(),r,t.tokenId,await this.contractWrapper.getSignerAddress());const a=await C(this.contractWrapper.getProvider(),t.buyoutPricePerToken,e);let n=Math.floor(t.startTimestamp.getTime()/1e3);const u=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return n<u&&(n=u),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r,tokenId:t.tokenId,buyoutPricePerToken:a,currencyToAccept:F(e),listingType:h.Direct,quantityToList:t.quantity,reservePricePerToken:a,secondsUntilEndTime:t.listingDurationInSeconds,startTime:s.from(n)}],parse:p=>({id:this.contractWrapper.parseLogs("ListingAdded",p?.logs)[0].args.listingId,receipt:p})})});createListingsBatch=i(async t=>{const r=(await Promise.all(t.map(e=>this.createListing.prepare(e)))).map(e=>e.encode());return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:e=>this.contractWrapper.parseLogs("ListingAdded",e?.logs).map(n=>({id:n.args.listingId,receipt:e}))})});makeOffer=i(async(t,r,e,a,n)=>{if(O(e))throw new Error("You must use the wrapped native token address when making an offer with a native token");const o=await C(this.contractWrapper.getProvider(),a,e);try{await this.getListing(t)}catch(l){throw console.error("Failed to get listing, err =",l),new Error(`Error getting the listing with id ${t}`)}const u=s.from(r),p=s.from(o).mul(u),d=await this.contractWrapper.getCallOverrides()||{};await S(this.contractWrapper,p,e,d);let f=I;return n&&(f=s.from(Math.floor(n.getTime()/1e3))),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"offer",args:[t,r,e,o,f],overrides:d})});acceptOffer=i(async(t,r)=>{await this.validateListing(s.from(t));const e=await w(r),a=await this.contractWrapper.read("offers",[t,e]);return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t,e,a.currency,a.pricePerToken]})});buyoutListing=i(async(t,r,e)=>{const a=await this.validateListing(s.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error(`Listing ${t} is no longer valid. ${o}`);const u=e||await this.contractWrapper.getSignerAddress(),p=s.from(r),d=s.from(a.buyoutPrice).mul(p),f=await this.contractWrapper.getCallOverrides()||{};return await S(this.contractWrapper,d,a.currencyContractAddress,f),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buy",args:[t,u,p,a.currencyContractAddress,d],overrides:f})});updateListing=i(async t=>c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t.id,t.quantity,t.buyoutPrice,t.buyoutPrice,await w(t.currencyContractAddress),t.startTimeInSeconds,t.secondsUntilEnd]}));cancelListing=i(async t=>c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelDirectListing",args:[t]}));async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error(`Error getting the listing with id ${t}`),r}}async mapListing(t){return{assetContractAddress:t.assetContract,buyoutPrice:s.from(t.buyoutPricePerToken),currencyContractAddress:t.currency,buyoutCurrencyValuePerToken:await T(this.contractWrapper.getProvider(),t.currency,t.buyoutPricePerToken),id:t.listingId.toString(),tokenId:t.tokenId,quantity:t.quantity,startTimeInSeconds:t.startTime,asset:await _(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),secondsUntilEnd:t.endTime,sellerAddress:t.tokenOwner,type:h.Direct}}async isStillValidListing(t,r){if(!await j(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.sellerAddress))return{valid:!1,error:`Token '${t.tokenId}' from contract '${t.assetContractAddress}' is not approved for transfer`};const a=this.contractWrapper.getProvider(),n=(await P(()=>import("./IERC165.rumQzOOh.js"),__vite__mapDeps([]))).default,o=new k(t.assetContractAddress,n,a),u=await o.supportsInterface(J),p=await o.supportsInterface(X);if(u){const d=(await P(()=>import("./Login.VljSKXrW.js").then(L=>L.dk),__vite__mapDeps([0,1,2,3,4]))).default,f=new k(t.assetContractAddress,d,a);let l;try{l=await f.ownerOf(t.tokenId)}catch{}const A=l?.toLowerCase()===t.sellerAddress.toLowerCase();return{valid:A,error:A?void 0:`Seller is not the owner of Token '${t.tokenId}' from contract '${t.assetContractAddress} anymore'`}}else if(p){const d=(await P(()=>import("./Login.VljSKXrW.js").then(L=>L.dm),__vite__mapDeps([0,1,2,3,4]))).default,A=(await new k(t.assetContractAddress,d,a).balanceOf(t.sellerAddress,t.tokenId)).gte(r||t.quantity);return{valid:A,error:A?void 0:`Seller does not have enough balance of Token '${t.tokenId}' from contract '${t.assetContractAddress} to fulfill the listing`}}else return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}}class M{static contractRoles=$;get chainId(){return this._chainId}constructor(t,r,e){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new U(t,r,n,a,e);this._chainId=o,this.abi=V.parse(n||[]),this.contractWrapper=u,this.storage=e,this.metadata=new tt(this.contractWrapper,z,this.storage),this.app=new rt(this.contractWrapper,this.metadata,this.storage),this.roles=new st(this.contractWrapper,M.contractRoles),this.encoder=new B(this.contractWrapper),this.estimator=new et(this.contractWrapper),this.direct=new it(this.contractWrapper,this.storage),this.auction=new ot(this.contractWrapper,this.storage),this.events=new N(this.contractWrapper),this.platformFees=new nt(this.contractWrapper),this.interceptor=new at(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getListing(t){const r=await this.contractWrapper.read("listings",[t]);if(r.assetContract===m)throw new y(this.getAddress(),t.toString());switch(r.listingType){case h.Auction:return await this.auction.mapListing(r);case h.Direct:return await this.direct.mapListing(r);default:throw new Error(`Unknown listing type: ${r.listingType}`)}}async getActiveListings(t){const r=await this.getAllListingsNoFilter(!0),e=this.applyFilter(r,t),a=s.from(Math.floor(Date.now()/1e3));return e.filter(n=>n.type===h.Auction&&s.from(n.endTimeInEpochSeconds).gt(a)&&s.from(n.startTimeInEpochSeconds).lte(a)||n.type===h.Direct&&s.from(n.quantity).gt(0))}async getAllListings(t){const r=await this.getAllListingsNoFilter(!1);return this.applyFilter(r,t)}getAll=this.getAllListings;async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async isRestrictedToListerRoleOnly(){return!await this.contractWrapper.read("hasRole",[v("lister"),m])}async getBidBufferBps(){return this.contractWrapper.read("bidBufferBps",[])}async getTimeBufferInSeconds(){return this.contractWrapper.read("timeBuffer",[])}async getOffers(t){const r=await this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:t}});return await Promise.all(r.map(e=>E(this.contractWrapper.getProvider(),s.from(t),{quantityWanted:e.data.quantityWanted,pricePerToken:e.data.quantityWanted.gt(0)?e.data.totalOfferAmount.div(e.data.quantityWanted):e.data.totalOfferAmount,currency:e.data.currency,offeror:e.data.offeror})))}buyoutListing=i(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new y(this.getAddress(),t.toString());switch(a.listingType){case h.Direct:return W(r!==void 0),await this.direct.buyoutListing.prepare(t,r,e);case h.Auction:return await this.auction.buyoutListing.prepare(t);default:throw Error(`Unknown listing type: ${a.listingType}`)}});makeOffer=i(async(t,r,e)=>{const a=await this.contractWrapper.read("listings",[t]);if(a.listingId.toString()!==t.toString())throw new y(this.getAddress(),t.toString());const n=await this.contractWrapper.getChainID();switch(a.listingType){case h.Direct:return W(e),await this.direct.makeOffer.prepare(t,e,O(a.currency)?x[n].wrapped.address:a.currency,r);case h.Auction:return await this.auction.makeBid.prepare(t,r);default:throw Error(`Unknown listing type: ${a.listingType}`)}});setBidBufferBps=i(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getTimeBufferInSeconds();return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[r,s.from(t)]})});setTimeBufferInSeconds=i(async t=>{await this.roles.verify(["admin"],await this.contractWrapper.getSignerAddress());const r=await this.getBidBufferBps();return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAuctionBuffers",args:[s.from(t),r]})});allowListingFromSpecificAssetOnly=i(async t=>{const r=[];return(await this.roles.get("asset")).includes(m)&&r.push(this.encoder.encode("revokeRole",[v("asset"),m])),r.push(this.encoder.encode("grantRole",[v("asset"),t])),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})});allowListingFromAnyAsset=i(async()=>{const t=[],r=await this.roles.get("asset");for(const e in r)t.push(this.encoder.encode("revokeRole",[v("asset"),e]));return t.push(this.encoder.encode("grantRole",[v("asset"),m])),c.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[t]})});async getAllListingsNoFilter(t){return(await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings",[])).toNumber()).keys()).map(async e=>{let a;try{a=await this.getListing(e)}catch(n){if(n instanceof y)return;console.warn(`Failed to get listing ${e}' - skipping. Try 'marketplace.getListing(${e})' to get the underlying error.`);return}if(a.type===h.Auction)return a;if(t){const{valid:n}=await this.direct.isStillValidListing(a);if(!n)return}return a}))).filter(e=>e!==void 0)}applyFilter(t,r){let e=[...t];const a=s.from(r?.start||0).toNumber(),n=s.from(r?.count||Y).toNumber();return r&&(r.seller&&(e=e.filter(o=>o.sellerAddress.toString().toLowerCase()===r?.seller?.toString().toLowerCase())),r.tokenContract&&(e=e.filter(o=>o.assetContractAddress.toString().toLowerCase()===r?.tokenContract?.toString().toLowerCase())),r.tokenId!==void 0&&(e=e.filter(o=>o.tokenId.toString()===r?.tokenId?.toString())),e=e.filter((o,u)=>u>=a),e=e.slice(0,n)),e}async prepare(t,r,e){return c.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}export{M as Marketplace};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/Login.VljSKXrW.js","_astro/jsx-runtime.7BJwlAz-.js","_astro/index.9orYzNvn.js","_astro/tokens.xyBxlAX2.js","_astro/index.JdUBUp0J.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
