import{a as b,S,i as n}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const w="https://pixabay.com/api/",E="48325012-3ccc1b5d8b9c25a12d61b57d7",u=(o,e)=>{const i={params:{key:E,q:o,page:e,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}};return b.get(`${w}`,i)},g=o=>o.map(({webformatURL:e,largeImageURL:i,tags:l,likes:t,views:s,comments:a,downloads:L})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img 
			class="gallery-img" 
			src="${e}" 
			alt="${l}" 
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
                        <p class="info-list-text">${L}</p>
                    </li>
                </ul>
    </li>
    `).join(""),h=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),r=document.querySelector(".loader"),c=document.querySelector(".js-load-more");let d=1,y=" ",m=15;r.style.display="none";const f=new S(".js-gallery a",{captionsData:"alt",captionDelay:250,className:"simple-lightbox"}),F=async o=>{try{if(o.preventDefault(),y=o.currentTarget.elements.user_query.value.trim(),p.innerHTML=" ",y===""){n.warning({title:"Caution",message:"You forgot important data",position:"topRight"});return}r.style.display="block",d=1,c.classList.add("is-hidden");const{data:e}=await u(y,d);if(e.total===0){r.style.display="none",n.error({title:"",messageColor:"#FFFFFF",messageSize:16,messageLineHeight:1.5,backgroundColor:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML=" ",h.reset();return}p.insertAdjacentHTML("beforeend",g(e.hits)),f.refresh(),e.hits.length<m?c.classList.add("is-hidden"):c.classList.remove("is-hidden"),r.style.display="none",o.target.reset()}catch(e){r.style.display="block",n.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("An error occurred:",e.message),r.style.display="none"}},q=async o=>{try{d++,r.style.display="block";const{data:e}=await u(y,d);p.insertAdjacentHTML("beforeend",g(e.hits)),f.refresh(),(d*m>=e.totalHits||e.hits.length<m)&&(c.classList.add("is-hidden"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results"})),r.style.display="none";const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:l*2,behavior:"smooth"})}catch{r.style.display="block",n.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("An error occurred:",err.message),r.style.display="none"}};h.addEventListener("submit",F);c.addEventListener("click",q);
//# sourceMappingURL=index.js.map
