import{j as e}from"./jsx-runtime.7BJwlAz-.js";import{r as c}from"./index.9orYzNvn.js";import{G as j,M as w,D as x,P as v}from"./tokens.xyBxlAX2.js";import{I as g,S as f}from"./urls.k52fqfOX.js";function p(s){return"detail"in s}function u(s){return s.replace("ipfs:/",g)}async function m(s){return await(await fetch(s.tokenURI)).json()}async function b(s){const o=await k(s,j,"unlock"),t=await h(s,w,"polygon-v2"),n=await h(s,x,"goerli-v2");return(await Promise.allSettled([...o.data.keys.map(m),...t.data.keys.map(m),...n.data.keys.map(m)])).filter(r=>r.status=="fulfilled").map(r=>r.value)}async function k(s,o,t){const n={operationName:null,variables:{},query:`{
	keys(where: {owner: "${s.toLowerCase()}", lock: "${o.toLowerCase()}"}) {
		id
		lock {
			id
		}
		keyId
		tokenURI
	}
}`};return(await fetch(`${f}/${t}`,{method:"POST",body:JSON.stringify(n)})).json()}async function h(s,o,t){let n={data:{keys:[]}};const a=JSON.stringify(o.map(l=>l.toLowerCase())),i={operationName:null,variables:{},query:`{
			keys(where: {owner: "${s.toLowerCase()}", lock_: {address_in: ${a}}}) {
				id
				lock {
					id
				}
				tokenId
				tokenURI
				owner
				cancelled
			}
		}`},r=await fetch(`${f}/${t}`,{method:"POST",body:JSON.stringify(i)}).then(l=>l.json());return n.data.keys=[...n.data.keys,...r?.data?.keys],n}function N(s){const{account:o,nomembership:t,className:n}=s,[a,i]=c.useState([]);return c.useEffect(()=>{(async()=>{const r=await b(o);i(r)})()},[o]),e.jsxs("div",{className:n,children:[e.jsx("h1",{className:"pb4",children:"Membership"}),a.length==0&&t,a.length>0&&e.jsx(e.Fragment,{children:a.map((r,l)=>e.jsxs("div",{children:[e.jsx("h3",{children:r.name}),e.jsx("video",{loop:!0,controls:!0,style:{padding:"1em 0em"},className:"br3 w-100",src:u(r.animation_url),poster:u(r.image)}),e.jsx("div",{className:"flex justify-center mb6",children:r.attributes.map((d,y)=>e.jsxs("div",{className:`${y>0?"bl":""} w-25 pa3 mr2`,children:[e.jsx("div",{className:"b f6 tc",children:d.trait_type}),e.jsx("div",{className:"b f3 tc",id:"canvas",children:d.value})]}))})]},l))})]})}function S(s){const{account:o,className:t}=s,[n,a]=c.useState([]);return c.useEffect(()=>{(async()=>{const i=await h(o,v,"polygon-v2");Promise.all(i.data.keys.map(async r=>await(await fetch(r.tokenURI)).json())).then(r=>{a(r)})})()},[o]),e.jsxs("div",{className:t,children:[e.jsx("h1",{className:"pb5",children:"Proof of Attendance Collectables"}),n.length==0&&e.jsx("div",{id:"poap-holder",children:e.jsx("p",{className:"mb6",children:"You haven't attended any Events yet."})}),n.map(i=>e.jsxs("div",{id:"poap-holder",style:{marginBottom:"4em"},children:[e.jsx("h2",{children:i.name}),e.jsx("p",{children:e.jsx("img",{className:"br3 w-100",src:u(i.image)})}),e.jsx("p",{children:i.description})]},i.name))]})}function P({className:s}){return e.jsxs("div",{className:s,children:[e.jsx("h1",{children:"Event Passes"}),e.jsx("div",{id:"pass-holder",children:e.jsx("p",{className:"mb6",children:"You don't have any event passes right now."})})]})}function F({notloggedin:s,nomembership:o}){const[t,n]=c.useState("");return document.addEventListener("logout",a=>{n("")}),document.addEventListener("switch",a=>{if(!p(a))throw new Error("not a StringDetailEvent");n(a.detail)}),document.addEventListener("login",a=>{if(!p(a))throw new Error("not a StringDetailEvent");n(a.detail)}),e.jsxs(e.Fragment,{children:[t==""&&s,t!=""&&e.jsxs(e.Fragment,{children:[e.jsx(N,{account:t,nomembership:o||e.jsx(e.Fragment,{}),className:"pb3"}),e.jsx(S,{account:t}),e.jsx(P,{account:t})]})]})}export{F as default};
