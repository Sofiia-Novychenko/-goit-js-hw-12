import{a as L,S as b,i as m}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const S="https://pixabay.com/api/",E="48325012-3ccc1b5d8b9c25a12d61b57d7",p=(o,e)=>{const i={params:{key:E,q:o,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return L.get(`${S}`,i)},y=o=>o.map(({webformatURL:e,largeImageURL:i,tags:r,likes:t,views:s,comments:l,downloads:h})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${i}">
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
                        <p class="info-list-text">${l}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Downloads:</h2>
                        <p class="info-list-text">${h}</p>
                    </li>
                </ul>
    </li>
    `).join(""),f=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),a=document.querySelector(".js-load-more");let n=1,u=" ",v=15;c.style.display="none";const F=new b(".js-gallery a",{captionsData:"alt",captionDelay:250,className:"simple-lightbox"}),q=async o=>{try{if(o.preventDefault(),u=o.currentTarget.elements.user_query.value.trim(),d.innerHTML=" ",u===""){m.warning({title:"Caution",message:"You forgot important data",position:"topRight"});return}c.style.display="block",n=1,a.classList.add("is-hidden");const{data:e}=await p(u,n);if(e.total===0){m.error({title:"",messageColor:"#FFFFFF",messageSize:16,messageLineHeight:1.5,backgroundColor:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML=" ",f.reset();return}e.totalHits>1&&(a.classList.remove("is-hidden"),a.addEventListener("click",g)),d.insertAdjacentHTML("beforeend",y(e.hits)),F.refresh(),c.style.display="none",o.target.reset()}catch(e){console.log(e.message)}};f.addEventListener("submit",q);const g=async o=>{try{n++,c.style.display="block";const{data:e}=await p(u,n);d.insertAdjacentHTML("beforeend",y(e.hits)),c.style.display="none";const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),n*v>=e.totalHits&&(a.classList.add("is-hidden"),a.removeEventListener("click",g),m.info({position:"topRight",message:"We're sorry, but you've reached the end of search results"}))}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
