import{InjectedConnector as i}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.JrVD5-xu.js";import{ag as n}from"./Login.VljSKXrW.js";import"./url-bc88b2b6.browser.esm.ca_vOvX1.js";import"./jsx-runtime.7BJwlAz-.js";import"./index.9orYzNvn.js";import"./tokens.xyBxlAX2.js";import"./index.JdUBUp0J.js";class w extends i{constructor(o){const e={...{name:"Trust",getProvider(){function t(r){if(r?.isTrust)return r}if(n(globalThis.window))return globalThis.window.ethereum?.providers?globalThis.window.ethereum.providers.find(t):t(globalThis.window.ethereum)}},...o.options};super({chains:o.chains,options:e,connectorStorage:o.connectorStorage})}}export{w as TrustConnector};
