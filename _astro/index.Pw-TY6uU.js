import{j as e}from"./jsx-runtime.7BJwlAz-.js";import{r as d}from"./index.9orYzNvn.js";import{T as y,P as x,a as v,G as j,M as g,D as b,b as k}from"./tokens.VZm6ve4Q.js";import{I as P,S as w}from"./urls.k52fqfOX.js";function f(s){return"detail"in s}async function N(s){if(s.includes("https://locksmith.unlock-protocol.com/lock/")){if(s.includes(y.toLowerCase()))return"ipfs://QmQNYwLkomJixnGtAHQGK3qG2YaqKr2AUCJXm3RoNhLTLP";if(s.includes(x.toLowerCase()))return"ipfs://QmQQ4rehs5xYyD8K4yiJcHRZr4QvbvDr3cBMdHBKtUHd9B";if(s.includes(v.toLowerCase()))return"ipfs://QmZvqFax6a3Pw82kgFbuviDi78dwwFhtEvM6MutyJtPh43"}return s}function p(s){return s.replace("https://house-of-peregrine.mypinata.cloud/ipfs/","ipfs:/").replace("ipfs:/",P)}async function u(s){return await(await fetch(s.tokenURI)).json()}async function C(s){const r=await S(s,j,"unlock"),t=await h(s,g,"polygon-v2"),a=await h(s,b,"goerli-v2");return(await Promise.allSettled([...r.data.keys.map(u),...t.data.keys.map(u),...a.data.keys.map(u)])).filter(o=>o.status=="fulfilled").map(o=>o.value)}async function S(s,r,t){const a={operationName:null,variables:{},query:`{
	keys(where: {owner: "${s.toLowerCase()}", lock: "${r.toLowerCase()}"}) {
		id
		lock {
			id
		}
		keyId
		tokenURI
	}
}`};return(await fetch(`${w}/${t}`,{method:"POST",body:JSON.stringify(a)})).json()}async function h(s,r,t){let a={data:{keys:[]}};const n=JSON.stringify(r.map(c=>c.toLowerCase())),i={operationName:null,variables:{},query:`{
			keys(where: {owner: "${s.toLowerCase()}", lock_: {address_in: ${n}}}) {
				id
				lock {
					id
				}
				tokenId
				tokenURI
				owner
				cancelled
			}
		}`},o=await fetch(`${w}/${t}`,{method:"POST",body:JSON.stringify(i)}).then(c=>c.json());return a.data.keys=[...a.data.keys,...o?.data?.keys],a}function E(s){const{account:r,nomembership:t,className:a}=s,[n,i]=d.useState([]);return d.useEffect(()=>{(async()=>{const o=await C(r);i(o)})()},[r]),e.jsxs("div",{className:a,children:[e.jsx("h1",{className:"pb4",children:"Membership"}),n.length==0&&t,n.length>0&&e.jsx(e.Fragment,{children:n.map((o,c)=>e.jsxs("div",{children:[e.jsx("h3",{children:o.name}),e.jsx("video",{loop:!0,controls:!0,style:{padding:"1em 0em"},className:"br3 w-100",src:p(o.animation_url),poster:p(o.image)}),e.jsx("div",{className:"flex justify-center mb6",children:o.attributes.map((m,l)=>e.jsxs("div",{className:`${l>0?"bl":""} w-25 pa3 mr2`,children:[e.jsx("div",{className:"b f6 tc",children:m.trait_type}),e.jsx("div",{className:"b f3 tc",id:"canvas",children:m.value})]}))})]},c))})]})}function I(s){const{account:r,className:t}=s,[a,n]=d.useState([]);return d.useEffect(()=>{(async()=>{const i=await h(r,k,"polygon-v2"),o=await Promise.all(i.data.keys.map(async c=>{const l=await(await fetch(c.tokenURI)).json();return l.image&&(l.image=await N(l.image)),l}));n(o)})()},[r]),e.jsxs("div",{className:t,children:[e.jsx("h1",{className:"pb5",children:"Proof of Attendance Collectables"}),a.length==0&&e.jsx("div",{id:"poap-holder",children:e.jsx("p",{className:"mb6",children:"You haven't attended any Events yet."})}),a.map(i=>e.jsxs("div",{id:"poap-holder",style:{marginBottom:"4em"},children:[e.jsx("h2",{children:i.name}),e.jsx("p",{children:e.jsx("img",{className:"br3 w-100",src:p(i.image)})}),e.jsx("p",{children:i.description})]},i.name))]})}function F({className:s}){return e.jsxs("div",{className:s,children:[e.jsx("h1",{children:"Event Passes"}),e.jsx("div",{id:"pass-holder",children:e.jsx("p",{className:"mb6",children:"You don't have any event passes right now."})})]})}function $({notloggedin:s,nomembership:r}){const[t,a]=d.useState("");return document.addEventListener("logout",n=>{a("")}),document.addEventListener("switch",n=>{if(!f(n))throw new Error("not a StringDetailEvent");a(n.detail)}),document.addEventListener("login",n=>{if(!f(n))throw new Error("not a StringDetailEvent");a(n.detail)}),e.jsxs(e.Fragment,{children:[t==""&&s,t!=""&&e.jsxs(e.Fragment,{children:[e.jsx(E,{account:t,nomembership:r||e.jsx(e.Fragment,{}),className:"pb3"}),e.jsx(I,{account:t}),e.jsx(F,{account:t})]})]})}export{$ as default};
