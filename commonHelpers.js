import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as m,i as A,b as M}from"./assets/vendor-0f1e0a6f.js";async function x(){const t="https://books-backend.p.goit.global/books/",e="category-list";try{const s=`${t}${e}`;return(await m.get(s)).data}catch(s){console.log(s)}}async function j(){const t="https://books-backend.p.goit.global/books/",e="top-books";try{const s=`${t}${e}`;return(await m.get(s)).data}catch(s){console.log(s)}}async function w(t){const e="https://books-backend.p.goit.global/books/",s=`category?category=${t}`;try{const r=`${e}${s}`;return(await m.get(r)).data}catch(r){console.log(r)}}function D(t){return t.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function R(t){const e=D(t);o.categories.insertAdjacentHTML("beforeend",e)}function N(t){return t.map(({list_name:e,books:s})=>{let r;return window.innerWidth>=1440?r=b(s,e):window.innerWidth>=768?r=b(s.slice(0,3),e):r=b(s.slice(0,1),e),`
       
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
`)}function O(t){const e=N(t);o.bestBooks.insertAdjacentHTML("beforeend",e)}function b(t,e){return t.filter(({list_name:s})=>s===e).map(({author:s,list_name:r,book_image:n,title:a,_id:u})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${u}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${a}</h3>
    <p class="best-books-text">${s}</p>
    </div>
  `).join(`
`)}function U(t){const e=t.target.closest("li");!e||e===t.currentTarget||(o.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}function h(t){return t.target.closest("li").textContent.trim()}function S(t){if(t.target.classList.contains("btn-see-more")){const e=t.target.dataset.cat.trim();return o.categoriesItems.forEach(s=>{s.classList.remove("sidebar-active"),s.textContent.trim()===e&&s.classList.add("sidebar-active")}),e}}function W(t){return`
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
  `}function T(t){const e=W(t);o.bestBooks.innerHTML=e}function B(t){if(!t)return;let e;if(t==="All categories")e=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,o.categoryTitle.innerHTML=e;else{const s=t.split(" "),r=s.slice(-1);e=`<h1 class="best-books-title">${s.slice(0,-1).join(" ")} <span class="best-books-title-colour">${r.join(" ")}</span></h1>`,o.categoryTitle.innerHTML=e}}async function E(){o.loader.classList.remove("hidden"),o.loader1.classList.remove("hidden");try{const t=await x(),e=await j();R(t),O(e),o.loader.classList.add("hidden"),o.loader1.classList.add("hidden")}catch(t){k(t)}o.oneCategory=document.querySelector(".sidebar-category-link"),o.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),o.allCategories.classList.add("sidebar-active"),o.categories.addEventListener("click",H),o.seeMoreBtn.addEventListener("click",_)}async function _(t){o.loader1.classList.remove("hidden");try{const e=await w(S(t));T(e),B(S(t)),o.loader1.classList.add("hidden"),o.scrollToEl.scrollIntoView({behavior:"smooth"})}catch(e){k(e)}}async function H(t){o.loader.classList.remove("hidden");try{const e=await w(h(t));h(t)==="All categories"&&E(),T(e),B(h(t)),U(t),o.loader.classList.add("hidden"),o.scrollToEl.scrollIntoView({behavior:"smooth"})}catch(e){k(e)}}function k(t){A.warning({title:"Caution",message:`Error: ${t}`,position:"topRight"})}function P(){window.addEventListener("scroll",t);function t(){window.scrollY>200?o.btnToTop.classList.add("show"):o.btnToTop.classList.remove("show")}o.btnToTop.addEventListener("click",e);function e(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),e()},10)}}function Y(t){const e=M.create(`
    <div class="modal">
      <div class="modal-content">
        <span class="modal-close">&times;</span>
        <div class="modal-book-details">${t}</div>
      </div>
    </div>
  `);e.show(),e.element().querySelector(".modal-close").addEventListener("click",()=>e.close())}function z(t){const e=`
    <h2>${t.title}</h2>
    <p>${t.author}</p>
    <img src="${t.imageUrl}" alt="${t.title}">
  `;Y(e)}const F={title:"Book Title",author:"Author Name",imageUrl:"https://example.com/book.jpg"};z(F);function V(){o.headerMenu.classList.toggle("hidden"),o.burgerSvg.getAttribute("href")=="../img/header/symbol-defs.svg#icon-burger"?(o.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-close"),o.headerIcon.setAttribute("width","18"),o.headerIcon.setAttribute("height","18"),o.headerMenu.style.padding="5px"):(o.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-burger"),o.headerIcon.setAttribute("width","28"),o.headerIcon.setAttribute("height","28"))}function G(t){t.preventDefault(),localStorage.removeItem("colorScheme"),o.root.classList.toggle("dark"),o.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function Q(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(o.root.classList.add("dark"),o.headerToggle.checked=!0):(o.root.classList.remove("dark"),o.headerToggle.checked=!1)}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".item-charity"),e=document.querySelector(".btn-scroll-up"),s=document.querySelector(".btn-scroll-down"),r=document.querySelector(".swiper"),n=2;$(0,5),s.addEventListener("click",a),e.addEventListener("click",u);function a(){p(r,r.scrollTop+(r.scrollHeight-r.scrollTop)/n),s.classList.add("hidden"),e.classList.remove("hidden")}function u(){p(r,0),s.classList.remove("hidden"),e.classList.add("hidden")}function $(i,g){for(let l=i;l<=g;l++)t[l].classList.remove("hidden")}function p(i,g){const v=i.scrollTop,C=g-v,y=20;function q(c,d,L,I){return c/=I/2,c<1?L/2*c*c+d:(c--,-L/2*(c*(c-2)-1)+d)}function f(c){c+=y;const d=q(c,v,C,500);i.scrollTop=d,c<500&&setTimeout(function(){f(c)},y)}f(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-url");window.open(s,"_blank")})})});const o={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),loader:document.querySelector(".loader"),loader1:document.querySelector(".loader1"),scrollToEl:document.querySelector(".global-books-block"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root"),btnToTop:document.querySelector(".to-top")};E();P();o.headerBtn.addEventListener("click",V);o.headerToggle.addEventListener("change",G);Q();
//# sourceMappingURL=commonHelpers.js.map
