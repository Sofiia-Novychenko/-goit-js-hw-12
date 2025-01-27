import{a as S,S as E,i as m}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",F="48325012-3ccc1b5d8b9c25a12d61b57d7",y=(i,e)=>{const o={params:{key:F,q:i,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return S.get(`${v}`,o)},f=i=>i.map(({webformatURL:e,largeImageURL:o,tags:r,likes:t,views:s,comments:a,downloads:b})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${o}">
		<img 
			class="gallery-img" 
			src="${e}" 
			alt="${r}" 
			/>
	</a>
    <ul class="gallery-info-list">
                    <li class="info-list-item">
                        <h2 class="info-list-title">Likes:</h2>
                        <p class="info-list-text">${t}</p>
                    </li>
                    <li class="inform-item">
                        <h2 class="info-list-title">Views:</h2>
                        <p class="info-list-text">${s}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Comments:</h2>
                        <p class="info-list-text">${a}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Downloads:</h2>
                        <p class="info-list-text">${b}</p>
                    </li>
                </ul>
    </li>
    `).join(""),g=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),n=document.querySelector(".js-load-more");let c=1,u=" ",p=15;l.style.display="none";const h=new E(".js-gallery a",{captionsData:"alt",captionDelay:250,className:"simple-lightbox"}),q=async i=>{try{if(i.preventDefault(),u=i.currentTarget.elements.user_query.value.trim(),d.innerHTML=" ",u===""){m.warning({title:"Caution",message:"You forgot important data",position:"topRight"});return}l.style.display="block",c=1,n.classList.add("is-hidden");const{data:e}=await y(u,c);if(e.total===0){l.style.display="none",m.error({title:"",messageColor:"#FFFFFF",messageSize:16,messageLineHeight:1.5,backgroundColor:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML=" ",g.reset();return}e.totalHits>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",L)),d.insertAdjacentHTML("beforeend",f(e.hits)),h.refresh(),l.style.display="none",i.target.reset()}catch(e){console.log(e.message)}};g.addEventListener("submit",q);const L=async i=>{try{c++,l.style.display="block";const{data:e}=await y(u,c);d.insertAdjacentHTML("beforeend",f(e.hits)),h.refresh(),l.style.display="none";const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),(c*p>=e.totalHits||e.hits.length<p)&&(n.classList.add("is-hidden"),n.removeEventListener("click",L),m.info({position:"topRight",message:"We're sorry, but you've reached the end of search results"}))}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
