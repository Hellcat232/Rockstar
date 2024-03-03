import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as h,b as A}from"./assets/vendor-e6e22b92.js";async function $(){const o="https://books-backend.p.goit.global/books/"+"category-list";return(await h.get(o)).data}async function M(){const o="https://books-backend.p.goit.global/books/"+"top-books";return(await h.get(o)).data}async function L(t){const e="https://books-backend.p.goit.global/books/",o=`category?category=${t}`,c=e+o;return(await h.get(c)).data}function _(t){return t.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function x(t){const e=_(t);s.categories.insertAdjacentHTML("beforeend",e)}function D(t){return t.map(({list_name:e,books:o})=>{let c;return window.innerWidth>=1440?c=b(o,e):window.innerWidth>=768?c=b(o.slice(0,3),e):c=b(o.slice(0,1),e),`
       
      <div class="best-books-category">
         
          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${c}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function N(t){const e=D(t);s.bestBooks.insertAdjacentHTML("beforeend",e)}function b(t,e){return t.filter(({list_name:o})=>o===e).map(({author:o,list_name:c,book_image:n,title:a,_id:u})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${u}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${a}</h3>
    <p class="best-books-text">${o}</p>
    </div>
  `).join(`
`)}function R(t){const e=t.target.closest("li");!e||e===t.currentTarget||(s.categoriesItems.forEach(o=>o.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}function m(t){return t.target.closest("li").textContent.trim()}function S(t){if(t.target.classList.contains("btn-see-more")){const e=t.target.dataset.cat.trim();return console.log(e),s.categoriesItems.forEach(o=>{o.classList.remove("sidebar-active"),o.textContent.trim()===e&&o.classList.add("sidebar-active"),console.log(o.textContent.trim())}),e}}function O(t){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${t.map(({author:e,list_name:o,book_image:c,title:n,_id:a})=>`
          <li class="hardcover-item" id="${a}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${c}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${n}</h3>
            <p class="hardcover-descr">${e}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function w(t){const e=O(t);s.bestBooks.innerHTML=e}function B(t){const e=t.split(" "),o=e.slice(-1),n=`<h1 class="best-books-title">${e.slice(0,-1).join(" ")} <span class="best-books-title-colour">${o.join(" ")}</span></h1>`;s.categoryTitle.innerHTML=n}async function E(){const t=await $(),e=await M();x(t),N(e),s.oneCategory=document.querySelector(".sidebar-category-link"),s.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),s.allCategories.classList.add("sidebar-active"),s.categories.addEventListener("click",U),s.seeMoreBtn.addEventListener("click",j)}async function j(t){const e=await L(S(t));w(e),B(S(t))}async function U(t){m(t)==="All categories"&&E();const e=await L(m(t));w(e),B(m(t)),R(t)}const W=document.querySelector(".best-books-category");function P(t){const e=t.target.closest(".best-books-item");if(e){const o=e.dataset.id,c=data.find(n=>n._id===o);c&&H(c)}}function H(t){const e=`
    <div class="modal-content-wrap">
      <img class="modal-books-img" src="${t.book_image}" alt="" loading="eager" />
      <div class="modal-text-wrap">
        <div class="hello-beautiful-modal">
          <h3 class="modal-title">${t.title}</h3>
          <p class="modal-authors-name">${t.author}</p>
        </div>
        <p class="modal-book-notice">${t.description}</p>
      </div>
    </div>
  `,o=A.create(e,{});document.querySelector(".modal-close-btn").addEventListener("click",()=>{o.close()}),o.show()}W.addEventListener("click",P);function F(){s.headerMenu.classList.toggle("hidden"),s.burgerSvg.getAttribute("href")=="../img/header/symbol-defs.svg#icon-burger"?(s.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-close"),s.headerIcon.setAttribute("width","18"),s.headerIcon.setAttribute("height","18"),s.headerMenu.style.padding="5px"):(s.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-burger"),s.headerIcon.setAttribute("width","28"),s.headerIcon.setAttribute("height","28"))}function z(t){t.preventDefault(),localStorage.removeItem("colorScheme"),s.root.classList.toggle("dark"),s.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function Q(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(s.root.classList.add("dark"),s.headerToggle.checked=!0):(s.root.classList.remove("dark"),s.headerToggle.checked=!1)}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".item-charity"),e=document.querySelector(".btn-scroll-up"),o=document.querySelector(".btn-scroll-down"),c=document.querySelector(".swiper"),n=2;C(0,5),o.addEventListener("click",a),e.addEventListener("click",u);function a(){k(c,c.scrollTop+(c.scrollHeight-c.scrollTop)/n),o.classList.add("hidden"),e.classList.remove("hidden")}function u(){k(c,0),o.classList.remove("hidden"),e.classList.add("hidden")}function C(i,g){for(let l=i;l<=g;l++)t[l].classList.remove("hidden")}function k(i,g){const f=i.scrollTop,T=g-f,p=20;function q(r,d,y,I){return r/=I/2,r<1?y/2*r*r+d:(r--,-y/2*(r*(r-2)-1)+d)}function v(r){r+=p;const d=q(r,f,T,500);i.scrollTop=d,r<500&&setTimeout(function(){v(r)},p)}v(0)}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".charity-image").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-url");window.open(o,"_blank")})})});const s={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root")};E();s.headerBtn.addEventListener("click",F);s.headerToggle.addEventListener("change",z);Q();
//# sourceMappingURL=commonHelpers.js.map
