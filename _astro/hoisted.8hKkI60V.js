import{S as y,I as f}from"./hoisted.Y6wm6BLm.js";import{P as g,a as h,L as b,T as k}from"./tokens.Ppa7r3iO.js";async function C(o,t,e){const n={operationName:null,variables:{},query:`{
	keys(where: {owner: "${o.toLowerCase()}", lock: "${t.toLowerCase()}"}) {
		id
		lock {
			id
		}
		keyId
		tokenURI
	}
}`};return(await fetch(`${y}/${e}`,{method:"POST",body:JSON.stringify(n)})).json()}async function E(o,t,e){let n={data:{keys:[]}};for(let a=0;a<t.length;a++){const r=t[a],i={operationName:null,variables:{},query:`{
		keys(where: {owner: "${o.toLowerCase()}", lock: "${r.toLowerCase()}"}) {
			id
			lock {
				id
			}
			tokenId
			tokenURI
			owner
			cancelled
		}
	}`},l=await fetch(`${y}/${e}`,{method:"POST",body:JSON.stringify(i)}).then(d=>d.json());n.data.keys=[...n.data.keys,...l?.data?.keys]}return n}const I=1,x={autoconnect:!0,skipRecipient:!0,skipSelect:!0,network:I,locks:{"0xe931fbe75b69d1c7abe2bbbd10449b01a8abe82b":{network:1,name:"HOP Genesis"}},callToAction:{default:"Become a genesis member of House of Peregrine!"},pessimistic:!0,title:"House Of Peregrine",icon:"https://www.houseofperegrine.com/images/hop_mark_x96.png",emailRequired:!1,password:!1,metadataInputs:[]};console.debug("setting window");window.unlockProtocolConfig=x;function v(o){return"detail"in o}var B="https://www.houseofperegrine.com/de4085";async function w(o,t){return(await fetch(t)).json()}function P(o){let t={canvas:"",blend:"",vision:""};return o.forEach(({trait_type:e,value:n})=>{switch(e){case"Base":t.canvas=n;break;case"Canvas":t.canvas=n;break;case"Blend":t.blend=n;break;case"Effect":t.blend=n;break;case"Vision":t.vision=n;break}}),t}async function L(o,{keyId:t,tokenURI:e}){const n=t,{name:a,image:r,animation_url:i,attributes:l}=await w(n,`${B}/${n}`),c=document.getElementById("membership-template").content.cloneNode(!0),u=c.querySelectorAll("h2")[0];u.textContent=a;const m=c.querySelectorAll("video")[0];m&&(m.src=i.replace("ipfs:/",f),m.poster=r.replace("ipfs:/",f));const p=P(l);let s=c.getElementById("canvas");s&&(s.textContent=p.canvas),s=c.getElementById("blend"),s&&(s.textContent=p.blend),s=c.getElementById("vision"),s&&(s.textContent=p.vision),s=c.getElementById("top"),s&&(s.textContent=""),o.textContent="",o.appendChild(c)}async function O(o,{tokenId:t,tokenURI:e}){const{name:n,image:a,description:r}=await w(t,e),l=document.getElementById("poap-template").content.cloneNode(!0),d=l.querySelectorAll("h2")[0];d.textContent=n;const c=l.getElementById("poster");c.src=a.replace("ipfs:/",f);const u=l.getElementById("description");u.textContent=r,e.indexOf("2350ba")!==-1||e.indexOf(g)!==-1?(d.textContent="HOP x Laser 3.14 Event",u.textContent="Original spray can top used by Laser 3.14 and made into a keychain."):e.indexOf(h)!==-1&&(d.textContent=`52°22'08.9"N 4°52'51.1"E`,u.textContent='"Now is when we bloom". On the street in Amsterdam. Created August 14th 2022'),o.appendChild(l)}(function(){let o;document.addEventListener("logout",e=>{location.reload()}),document.addEventListener("switch",e=>{location.reload()}),document.addEventListener("login",e=>{if(!v(e))throw new Error("not a StringDetailEvent");t(e.detail)});async function t(e){o=e;let n=document.getElementById("membership-holder"),a=document.getElementById("poap-holder");document.getElementById("pass-holder"),document.getElementById("audience-holder");let r=await C(o,b,"unlock");r?.data?.keys?.forEach(i=>L(n,i)),r=await E(o,[h,g,k],"polygon-v2"),r?.data?.keys?.length>0&&(a.textContent="",r.data.keys.forEach(i=>O(a,i)))}window.addEventListener("unlockProtocol.status",async function(e){console.debug("unlockProtocol.status",e)})})();
