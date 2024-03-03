import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as m}from"./assets/vendor-882a65c2.js";async function A(){const o="https://books-backend.p.goit.global/books/"+"category-list";return(await m.get(o)).data}async function $(){const o="https://books-backend.p.goit.global/books/"+"top-books";return(await m.get(o)).data}async function k(t){const e="https://books-backend.p.goit.global/books/",o=`category?category=${t}`,r=e+o;return(await m.get(r)).data}function M(t){return t.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function D(t){const e=M(t);s.categories.insertAdjacentHTML("beforeend",e)}function N(t){return t.map(({list_name:e,books:o})=>{let r;return window.innerWidth>=1440?r=b(o,e):window.innerWidth>=768?r=b(o.slice(0,3),e):r=b(o.slice(0,1),e),`
       
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
`)}function R(t){const e=N(t);s.bestBooks.insertAdjacentHTML("beforeend",e)}function b(t,e){return t.filter(({list_name:o})=>o===e).map(({author:o,list_name:r,book_image:n,title:a,_id:u})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${u}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${a}</h3>
    <p class="best-books-text">${o}</p>
    </div>
  `).join(`
`)}function _(t){const e=t.target.closest("li");!e||e===t.currentTarget||(s.categoriesItems.forEach(o=>o.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}function h(t){return t.target.closest("li").textContent.trim()}function L(t){if(t.target.classList.contains("btn-see-more")){const e=t.target.dataset.cat.trim();return s.categoriesItems.forEach(o=>{o.classList.remove("sidebar-active"),o.textContent.trim()===e&&o.classList.add("sidebar-active")}),e}}function O(t){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${t.map(({author:e,list_name:o,book_image:r,title:n,_id:a})=>`
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
  `}function w(t){const e=O(t);s.bestBooks.innerHTML=e}function B(t){const e=t.split(" "),o=e.slice(-1),n=`<h1 class="best-books-title">${e.slice(0,-1).join(" ")} <span class="best-books-title-colour">${o.join(" ")}</span></h1>`;s.categoryTitle.innerHTML=n}async function E(){const t=await A(),e=await $();D(t),R(e),s.oneCategory=document.querySelector(".sidebar-category-link"),s.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),s.allCategories.classList.add("sidebar-active"),s.categories.addEventListener("click",x),s.seeMoreBtn.addEventListener("click",j)}async function j(t){const e=await k(L(t));w(e),B(L(t))}async function x(t){const e=await k(h(t));h(t)==="All categories"&&E(),w(e),B(h(t)),_(t)}k();function U(){s.headerMenu.classList.toggle("hidden"),s.burgerSvg.getAttribute("href")=="../img/header/symbol-defs.svg#icon-burger"?(s.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-close"),s.headerIcon.setAttribute("width","18"),s.headerIcon.setAttribute("height","18"),s.headerMenu.style.padding="5px"):(s.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-burger"),s.headerIcon.setAttribute("width","28"),s.headerIcon.setAttribute("height","28"))}function W(t){t.preventDefault(),localStorage.removeItem("colorScheme"),s.root.classList.toggle("dark"),s.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function P(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(s.root.classList.add("dark"),s.headerToggle.checked=!0):(s.root.classList.remove("dark"),s.headerToggle.checked=!1)}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".item-charity"),e=document.querySelector(".btn-scroll-up"),o=document.querySelector(".btn-scroll-down"),r=document.querySelector(".swiper"),n=2;T(0,5),o.addEventListener("click",a),e.addEventListener("click",u);function a(){y(r,r.scrollTop+(r.scrollHeight-r.scrollTop)/n),o.classList.add("hidden"),e.classList.remove("hidden")}function u(){y(r,0),o.classList.remove("hidden"),e.classList.add("hidden")}function T(i,g){for(let l=i;l<=g;l++)t[l].classList.remove("hidden")}function y(i,g){const f=i.scrollTop,C=g-f,p=20;function q(c,d,S,I){return c/=I/2,c<1?S/2*c*c+d:(c--,-S/2*(c*(c-2)-1)+d)}function v(c){c+=p;const d=q(c,f,C,500);i.scrollTop=d,c<500&&setTimeout(function(){v(c)},p)}v(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-url");window.open(o,"_blank")})})});const s={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root")};E();s.headerBtn.addEventListener("click",U);s.headerToggle.addEventListener("change",W);P();
//# sourceMappingURL=commonHelpers.js.map
