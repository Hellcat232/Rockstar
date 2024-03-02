import{a as l}from"./vendor-0cb09735.js";async function y(){const s="https://books-backend.p.goit.global/books/"+"category-list";return(await l.get(s)).data}async function h(){const s="https://books-backend.p.goit.global/books/"+"top-books";return(await l.get(s)).data}async function u(e){const t="https://books-backend.p.goit.global/books/",s=`category?category=${e}`,r=t+s;return(await l.get(r)).data}function p(e){return e.map(t=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${t.list_name}
   </a>
  </li>`).join(`
`)}function v(e){const t=p(e);o.categories.insertAdjacentHTML("beforeend",t)}function f(e){return e.map(({list_name:t,books:s})=>{let r;return window.innerWidth>=1440?r=n(s,t):window.innerWidth>=768?r=n(s.slice(0,3),t):r=n(s.slice(0,1),t),`
       
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
`)}function B(e){const t=f(e);o.bestBooks.insertAdjacentHTML("beforeend",t)}function n(e,t){return e.filter(({list_name:s})=>s===t).map(({author:s,list_name:r,book_image:a,title:c,_id:m})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${m}">
      <img class="best-books-image" src="${a}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${c}</h3>
    <p class="best-books-text">${s}</p>
    </div>
  `).join(`
`)}function S(e){const t=e.target.closest("li");!t||t===e.currentTarget||(o.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),t.classList.add("sidebar-active"))}function i(e){return`${e.target.closest("li").textContent.trim()}`}function d(e){if(e.target.classList.contains("btn-see-more"))return e.target.dataset.cat.trim()}function w(e){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${e.map(({author:t,list_name:s,book_image:r,title:a,_id:c})=>`
          <li class="hardcover-item" id="${c}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${r}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${a}</h3>
            <p class="hardcover-descr">${t}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function b(e){const t=w(e);o.bestBooks.innerHTML=t}function g(e){const t=e.split(" "),s=t.slice(-1),a=`<h1 class="best-books-title">${t.slice(0,-1).join(" ")} <span class="best-books-title-colour">${s.join(" ")}</span></h1>`;o.categoryTitle.innerHTML=a}function L(){o.headerMenu.classList.toggle("hidden"),o.burgerSvg.getAttribute("href")=="../img/header/symbol-defs.svg#icon-burger"?(o.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-close"),o.headerIcon.setAttribute("width","18"),o.headerIcon.setAttribute("height","18"),o.headerMenu.style.padding="5px"):(o.burgerSvg.setAttribute("href","../img/header/symbol-defs.svg#icon-burger"),o.headerIcon.setAttribute("width","28"),o.headerIcon.setAttribute("height","28"))}const o={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg")};async function k(){const e=await y(),t=await h();v(e),B(t),o.oneCategory=document.querySelector(".sidebar-category-link"),o.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),o.allCategories.classList.add("sidebar-active"),o.categories.addEventListener("click",A),o.seeMoreBtn.addEventListener("click",T)}k();async function T(e){const t=await u(d(e));b(t),g(d(e))}async function A(e){i(e)==="All categories"&&k();const t=await u(i(e));b(t),g(i(e)),S(e)}o.headerBtn.addEventListener("click",L);
//# sourceMappingURL=main-8130d5a3.js.map
