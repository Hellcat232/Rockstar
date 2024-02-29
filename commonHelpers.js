import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as c}from"./assets/vendor-0cb09735.js";async function b(){const s="https://books-backend.p.goit.global/books/"+"category-list";return(await c.get(s)).data}async function d(){const s="https://books-backend.p.goit.global/books/"+"top-books";return(await c.get(s)).data}function u(t){return t.map(e=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${e.list_name}
   </a>
  </li>`).join(`
`)}function g(t){const e=u(t);a.categories.insertAdjacentHTML("beforeend",e)}function k(t){return t.map(({list_name:e,books:s})=>{let o;return window.innerWidth>=1440?o=i(s,e):window.innerWidth>=768?o=i(s.slice(0,3),e):o=i(s.slice(0,1),e),`
        <div class="best-books-category">
          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${o}</li>
          </ul>
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
      `}).join(`
`)}function p(t){const e=k(t);a.bestBooks.insertAdjacentHTML("beforeend",e)}function i(t,e){return t.filter(({list_name:s})=>s===e).map(({author:s,list_name:o,book_image:n,title:r,_id:l})=>`
    <div class="best-books-content"  id="${l}">
      <img class="best-books-image" src="${n}" alt="book" loading="lazy"/>
      <p class="best-books-hidden-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${r}</h3>
    <p class="best-books-text">${s}</p>
  `).join(`
`)}function m(t){const e=t.target.closest("li");!e||e===t.currentTarget||(a.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}const a={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories")};async function f(){const t=await b(),e=await d();g(t),p(e),a.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),a.allCategories.classList.add("sidebar-active"),a.categories.addEventListener("click",y)}f();function y(t){m(t)}
//# sourceMappingURL=commonHelpers.js.map
