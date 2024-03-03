import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as h}from"./assets/vendor-882a65c2.js";async function A(){const o="https://books-backend.p.goit.global/books/"+"category-list";return(await h.get(o)).data}async function $(){const o="https://books-backend.p.goit.global/books/"+"top-books";return(await h.get(o)).data}async function k(e){const t="https://books-backend.p.goit.global/books/",o=`category?category=${e}`,r=t+o;return(await h.get(r)).data}function M(e){return e.map(t=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${t.list_name}
   </a>
  </li>`).join(`
`)}function N(e){const t=M(e);s.categories.insertAdjacentHTML("beforeend",t)}function D(e){return e.map(({list_name:t,books:o})=>{let r;return window.innerWidth>=1440?r=b(o,t):window.innerWidth>=768?r=b(o.slice(0,3),t):r=b(o.slice(0,1),t),`
       
      <div class="best-books-category">
         
          <p class="best-books-subtitle">${t}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${r}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${t}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function R(e){const t=D(e);s.bestBooks.insertAdjacentHTML("beforeend",t)}function b(e,t){return e.filter(({list_name:o})=>o===t).map(({author:o,list_name:r,book_image:n,title:a,_id:u})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${u}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${a}</h3>
    <p class="best-books-text">${o}</p>
    </div>
  `).join(`
`)}function _(e){const t=e.target.closest("li");!t||t===e.currentTarget||(s.categoriesItems.forEach(o=>o.classList.remove("sidebar-active")),t.classList.add("sidebar-active"))}function m(e){return e.target.closest("li").textContent.trim()}function L(e){if(e.target.classList.contains("btn-see-more")){const t=e.target.dataset.cat.trim();return s.categoriesItems.forEach(o=>{o.classList.remove("sidebar-active"),o.textContent.trim()===t&&o.classList.add("sidebar-active")}),t}}function O(e){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${e.map(({author:t,list_name:o,book_image:r,title:n,_id:a})=>`
          <li class="hardcover-item" id="${a}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${r}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${n}</h3>
            <p class="hardcover-descr">${t}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function w(e){const t=O(e);s.bestBooks.innerHTML=t}function E(e){const t=e.split(" "),o=t.slice(-1),n=`<h1 class="best-books-title">${t.slice(0,-1).join(" ")} <span class="best-books-title-colour">${o.join(" ")}</span></h1>`;s.categoryTitle.innerHTML=n}async function B(){const e=await A(),t=await $();N(e),R(t),s.oneCategory=document.querySelector(".sidebar-category-link"),s.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),s.allCategories.classList.add("sidebar-active"),s.categories.addEventListener("click",x),s.seeMoreBtn.addEventListener("click",j)}async function j(e){const t=await k(L(e));w(t),E(L(e))}async function x(e){const t=await k(m(e));m(e)==="All categories"&&B(),w(t),E(m(e)),_(e)}k();booksEl.addEventListener("click",e=>U(e));function U(e,t){const o=e.target.closest(".best-books-item");o&&(o.dataset.id,e.target.nodeName==="IMG"&&e.target.dataset.id)}function W(){s.headerMenu.classList.toggle("hidden"),s.burgerSvg.getAttribute("href")=="../img/header/symbol-defs.svg#icon-burger"?(s.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-close"),s.headerIcon.setAttribute("width","18"),s.headerIcon.setAttribute("height","18"),s.headerMenu.style.padding="5px"):(s.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-burger"),s.headerIcon.setAttribute("width","28"),s.headerIcon.setAttribute("height","28"))}function P(e){e.preventDefault(),localStorage.removeItem("colorScheme"),s.root.classList.toggle("dark"),s.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function H(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(s.root.classList.add("dark"),s.headerToggle.checked=!0):(s.root.classList.remove("dark"),s.headerToggle.checked=!1)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".item-charity"),t=document.querySelector(".btn-scroll-up"),o=document.querySelector(".btn-scroll-down"),r=document.querySelector(".swiper"),n=2;T(0,5),o.addEventListener("click",a),t.addEventListener("click",u);function a(){f(r,r.scrollTop+(r.scrollHeight-r.scrollTop)/n),o.classList.add("hidden"),t.classList.remove("hidden")}function u(){f(r,0),o.classList.remove("hidden"),t.classList.add("hidden")}function T(i,g){for(let l=i;l<=g;l++)e[l].classList.remove("hidden")}function f(i,g){const y=i.scrollTop,I=g-y,p=20;function C(c,d,S,q){return c/=q/2,c<1?S/2*c*c+d:(c--,-S/2*(c*(c-2)-1)+d)}function v(c){c+=p;const d=C(c,y,I,500);i.scrollTop=d,c<500&&setTimeout(function(){v(c)},p)}v(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-url");window.open(o,"_blank")})})});const s={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root")};B();s.headerBtn.addEventListener("click",W);s.headerToggle.addEventListener("change",P);H();
//# sourceMappingURL=commonHelpers.js.map
