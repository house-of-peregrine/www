import{ak as t,t as a,T as e}from"./Login.kXXM0ZeX.js";class i{featureName=t.name;constructor(r){this.contractWrapper=r}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}setRecipient=a(async r=>e.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[r]}))}export{i as C};
