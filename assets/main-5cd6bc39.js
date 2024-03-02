import{a as l}from"./vendor-0cb09735.js";async function p(){const o="https://books-backend.p.goit.global/books/"+"category-list";return(await l.get(o)).data}async function m(){const o="https://books-backend.p.goit.global/books/"+"top-books";return(await l.get(o)).data}async function b(t){const e="https://books-backend.p.goit.global/books/",o=`category?category=${t}`,s=e+o;return(await l.get(s)).data}function f(t){return t.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function B(t){const e=f(t);a.categories.insertAdjacentHTML("beforeend",e)}function v(t){return t.map(({list_name:e,books:o})=>{let s;return window.innerWidth>=1440?s=r(o,e):window.innerWidth>=768?s=r(o.slice(0,3),e):s=r(o.slice(0,1),e),`
       
      <div class="best-books-category">
         
          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${s}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function h(t){const e=v(t);a.bestBooks.insertAdjacentHTML("beforeend",e)}function r(t,e){return t.filter(({list_name:o})=>o===e).map(({author:o,list_name:s,book_image:c,title:n,_id:y})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${y}">
      <img class="best-books-image" src="${c}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${n}</h3>
    <p class="best-books-text">${o}</p>
    </div>
  `).join(`
`)}function L(t){const e=t.target.closest("li");!e||e===t.currentTarget||(a.categoriesItems.forEach(o=>o.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}function i(t){return`${t.target.closest("li").textContent.trim()}`}function d(t){if(t.target.classList.contains("btn-see-more"))return t.target.dataset.cat.trim()}function w(t){return t.map(({author:e,list_name:o,book_image:s,title:c,_id:n})=>`

  <div class="hardcover-wrap">
            <ul class="hardcover-list">
                <li class="hardcover-item" id="${n}">
                    <img class="hardcover-img" src="${s}" alt="card">
                    <h3 class="hardcover-subtitle">${c}</h3>
                       <p class="hardcover-descr">${e}</p>
                </li>`).join(`
`)}function u(t){const e=w(t);a.bestBooks.innerHTML=e}function g(t){const e=t.split(" "),o=e.slice(-1),c=`<h1 class="best-books-title">${e.slice(0,-1).join(" ")} <span class="best-books-title-colour">${o.join(" ")}</span></h1>`;a.categoryTitle.innerHTML=c}const a={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category")};async function k(){const t=await p(),e=await m();B(t),h(e),a.oneCategory=document.querySelector(".sidebar-category-link"),a.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),a.allCategories.classList.add("sidebar-active"),a.categories.addEventListener("click",C),a.seeMoreBtn.addEventListener("click",T)}k();async function T(t){const e=await b(d(t));u(e),g(d(t))}async function C(t){i(t)==="All categories"&&k();const e=await b(i(t));u(e),g(i(t)),L(t)}
//# sourceMappingURL=main-5cd6bc39.js.map
