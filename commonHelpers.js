import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as m,i as $}from"./assets/vendor-d68068f2.js";async function M(){const s="https://books-backend.p.goit.global/books/"+"category-list";return(await m.get(s)).data}async function N(){const s="https://books-backend.p.goit.global/books/"+"top-books";return(await m.get(s)).data}async function k(t){const e="https://books-backend.p.goit.global/books/",s=`category?category=${t}`,r=e+s;return(await m.get(r)).data}function R(t){return t.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function D(t){const e=R(t);o.categories.insertAdjacentHTML("beforeend",e)}function _(t){return t.map(({list_name:e,books:s})=>{let r;return window.innerWidth>=1440?r=g(s,e):window.innerWidth>=768?r=g(s.slice(0,3),e):r=g(s.slice(0,1),e),`
       
      <div class="best-books-category">

          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${r}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function O(t){const e=_(t);o.bestBooks.insertAdjacentHTML("beforeend",e)}function g(t,e){return t.filter(({list_name:s})=>s===e).map(({author:s,list_name:r,book_image:n,title:a,_id:u})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${u}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${a}</h3>
    <p class="best-books-text">${s}</p>
    </div>
  `).join(`
`)}function j(t){const e=t.target.closest("li");!e||e===t.currentTarget||(o.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}function h(t){return t.target.closest("li").textContent.trim()}function w(t){if(t.target.classList.contains("btn-see-more")){const e=t.target.dataset.cat.trim();return o.categoriesItems.forEach(s=>{s.classList.remove("sidebar-active"),s.textContent.trim()===e&&s.classList.add("sidebar-active")}),e}}function x(t){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${t.map(({author:e,list_name:s,book_image:r,title:n,_id:a})=>`
          <li class="hardcover-item" id="${a}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${r}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${n}</h3>
            <p class="hardcover-descr">${e}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function T(t){const e=x(t);o.bestBooks.innerHTML=e}function E(t){let e;if(t==="All categories")e=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,o.categoryTitle.innerHTML=e;else{const s=t.split(" "),r=s.slice(-1);e=`<h1 class="best-books-title">${s.slice(0,-1).join(" ")} <span class="best-books-title-colour">${r.join(" ")}</span></h1>`,o.categoryTitle.innerHTML=e}}async function B(){o.loader.classList.remove("hidden"),o.loader1.classList.remove("hidden");try{const t=await M(),e=await N();D(t),O(e),o.loader.classList.add("hidden"),o.loader1.classList.add("hidden")}catch(t){y(t)}o.oneCategory=document.querySelector(".sidebar-category-link"),o.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),o.allCategories.classList.add("sidebar-active"),o.categories.addEventListener("click",W),o.seeMoreBtn.addEventListener("click",U)}async function U(t){o.loader1.classList.remove("hidden");try{const e=await k(w(t));T(e),E(w(t)),o.loader1.classList.add("hidden"),o.scrollToEl.scrollIntoView({behavior:"smooth"})}catch(e){y(e)}}async function W(t){o.loader.classList.remove("hidden");try{const e=await k(h(t));h(t)==="All categories"&&B(),T(e),E(h(t)),j(t),o.loader.classList.add("hidden"),o.scrollToEl.scrollIntoView({behavior:"smooth"})}catch(e){y(e)}}function y(t){$.warning({title:"Caution",message:`Error: ${t}`,position:"topRight"})}function H(){window.addEventListener("scroll",t);function t(){window.scrollY>200?o.btnToTop.classList.add("show"):o.btnToTop.classList.remove("show")}o.btnToTop.addEventListener("click",e);function e(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),e()},10)}}k();function P(){o.headerMenu.classList.toggle("hidden"),o.burgerSvg.getAttribute("href")=="../img/header/symbol-defs.svg#icon-burger"?(o.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-close"),o.headerIcon.setAttribute("width","18"),o.headerIcon.setAttribute("height","18"),o.headerMenu.style.padding="5px"):(o.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-burger"),o.headerIcon.setAttribute("width","28"),o.headerIcon.setAttribute("height","28"))}function Y(t){t.preventDefault(),localStorage.removeItem("colorScheme"),o.root.classList.toggle("dark"),o.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function z(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(o.root.classList.add("dark"),o.headerToggle.checked=!0):(o.root.classList.remove("dark"),o.headerToggle.checked=!1)}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".item-charity"),e=document.querySelector(".btn-scroll-up"),s=document.querySelector(".btn-scroll-down"),r=document.querySelector(".swiper"),n=2;q(0,5),s.addEventListener("click",a),e.addEventListener("click",u);function a(){f(r,r.scrollTop+(r.scrollHeight-r.scrollTop)/n),s.classList.add("hidden"),e.classList.remove("hidden")}function u(){f(r,0),s.classList.remove("hidden"),e.classList.add("hidden")}function q(i,b){for(let l=i;l<=b;l++)t[l].classList.remove("hidden")}function f(i,b){const p=i.scrollTop,C=b-p,v=20;function I(c,d,L,A){return c/=A/2,c<1?L/2*c*c+d:(c--,-L/2*(c*(c-2)-1)+d)}function S(c){c+=v;const d=I(c,p,C,500);i.scrollTop=d,c<500&&setTimeout(function(){S(c)},v)}S(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-url");window.open(s,"_blank")})})});const o={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),loader:document.querySelector(".loader"),loader1:document.querySelector(".loader1"),scrollToEl:document.querySelector(".global-books-block"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root"),btnToTop:document.querySelector(".to-top")};B();H();o.headerBtn.addEventListener("click",P);o.headerToggle.addEventListener("change",Y);z();
//# sourceMappingURL=commonHelpers.js.map
