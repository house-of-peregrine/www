import{S as y,I as f}from"./hoisted.FKNbiXgi.js";import{P as g,a as w,L as k,T as b}from"./tokens.xGG2VBAi.js";async function E(n,t,o){const e={operationName:null,variables:{},query:`{
	keys(where: {owner: "${n.toLowerCase()}", lock: "${t.toLowerCase()}"}) {
		id
		lock {
			id
		}
		keyId
		tokenURI
	}
}`};return(await fetch(`${y}/${o}`,{method:"POST",body:JSON.stringify(e)})).json()}async function C(n,t,o){let e={data:{keys:[]}};for(let c=0;c<t.length;c++){const l=t[c],r={operationName:null,variables:{},query:`{
		keys(where: {owner: "${n.toLowerCase()}", lock: "${l.toLowerCase()}"}) {
			id
			lock {
				id
			}
			tokenId
			tokenURI
			owner
			cancelled
		}
	}`},a=await fetch(`${y}/${o}`,{method:"POST",body:JSON.stringify(r)}).then(d=>d.json());e.data.keys=[...e.data.keys,...a?.data?.keys]}return e}const I=1,v={autoconnect:!0,skipRecipient:!0,skipSelect:!0,network:I,locks:{"0xe931fbe75b69d1c7abe2bbbd10449b01a8abe82b":{network:1,name:"HOP Genesis"}},callToAction:{default:"Become a genesis member of House of Peregrine!"},pessimistic:!0,title:"House Of Peregrine",icon:"https://www.houseofperegrine.com/images/hop_mark_x96.png",emailRequired:!1,password:!1,metadataInputs:[]};console.debug("setting window");window.unlockProtocolConfig=v;function x(n){return"detail"in n}var B="https://www.houseofperegrine.com/de4085";async function h(n,t){return(await fetch(t)).json()}function P(n){let t={canvas:"",blend:"",vision:""};return n.forEach(({trait_type:o,value:e})=>{switch(o){case"Base":t.canvas=e;break;case"Canvas":t.canvas=e;break;case"Blend":t.blend=e;break;case"Effect":t.blend=e;break;case"Vision":t.vision=e;break}}),t}async function L(n,{keyId:t,tokenURI:o}){const e=t,{name:c,image:l,animation_url:r,attributes:a}=await h(e,`${B}/${e}`),i=document.getElementById("membership-template").content.cloneNode(!0),u=i.querySelectorAll("h2")[0];u.textContent=c;const m=i.querySelectorAll("video")[0];m&&(m.src=r.replace("ipfs:/",f),m.poster=l.replace("ipfs:/",f));const p=P(a);let s=i.getElementById("canvas");s&&(s.textContent=p.canvas),s=i.getElementById("blend"),s&&(s.textContent=p.blend),s=i.getElementById("vision"),s&&(s.textContent=p.vision),s=i.getElementById("top"),s&&(s.textContent=""),n.textContent="",n.appendChild(i)}async function O(n,{tokenId:t,tokenURI:o}){const{name:e,image:c,description:l}=await h(t,o),a=document.getElementById("poap-template").content.cloneNode(!0),d=a.querySelectorAll("h2")[0];d.textContent=e;const i=a.getElementById("poster");i.src=c.replace("ipfs:/",f);const u=a.getElementById("description");u.textContent=l,o.indexOf("2350ba")!==-1||o.indexOf(g)!==-1?(d.textContent="HOP x Laser 3.14 Event",u.textContent="Original spray can top used by Laser 3.14 and made into a keychain."):o.indexOf(w)!==-1&&(d.textContent=`52°22'08.9"N 4°52'51.1"E`,u.textContent='"Now is when we bloom". On the street in Amsterdam. Created August 14th 2022'),n.appendChild(a)}(function(n,t){var o=n.createElement(t),e=n.getElementsByTagName(t)[0];o.src="https://paywall.unlock-protocol.com/static/unlock.latest.min.js",e.parentNode?.insertBefore(o,e)})(document,"script");(function(){let n;const t=document.getElementById("buy-now");console.debug(t),t&&t.addEventListener("click",e=>{console.debug("btn click",e),e.preventDefault(),window.unlockProtocol.loadCheckoutModal()}),document.addEventListener("logout",e=>{location.reload()}),document.addEventListener("switch",e=>{location.reload()}),document.addEventListener("login",e=>{if(!x(e))throw new Error("not a StringDetailEvent");o(e.detail)});async function o(e){n=e;let c=document.getElementById("membership-holder"),l=document.getElementById("poap-holder");document.getElementById("pass-holder"),document.getElementById("audience-holder");let r=await E(n,k,"unlock");r?.data?.keys?.forEach(a=>L(c,a)),r=await C(n,[w,g,b],"polygon-v2"),r?.data?.keys?.length>0&&(l.textContent="",r.data.keys.forEach(a=>O(l,a)))}window.addEventListener("unlockProtocol.status",async function(e){console.debug("unlockProtocol.status",e)})})();
