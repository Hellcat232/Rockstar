import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as c}from"./assets/vendor-0cb09735.js";async function l(){const s="https://books-backend.p.goit.global/books/"+"category-list";return(await c.get(s)).data}async function b(){const s="https://books-backend.p.goit.global/books/"+"top-books";return(await c.get(s)).data}function d(t){return t.map(e=>`<li class="sidebar-categories-item">
   ${e.list_name}
  </li>`).join(`
`)}function u(t){const e=d(t);a.categories.insertAdjacentHTML("beforeend",e)}function g(t){return t.map(({list_name:e,books:s})=>{let o;return window.innerWidth>=1440?o=i(s,e):window.innerWidth>=768?o=i(s.slice(0,3),e):o=i(s.slice(0,1),e),`
        <div class="best-books-category">
          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${o}</li>
          </ul>
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
      `}).join(`
`)}function k(t){const e=g(t);a.bestBooks.insertAdjacentHTML("beforeend",e)}function i(t,e){return t.filter(({list_name:s})=>s===e).map(({author:s,list_name:o,book_image:n,title:r})=>`
    <div class="best-books-content">
      <img class="best-books-image" src="${n}" alt="book" />
      <p class="best-books-hidden-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${r}</h3>
    <p class="best-books-text">${s}</p>
  `).join(`
`)}function p(t){const e=t.target.closest("li");!e||e===t.currentTarget||(a.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}const a={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories")};async function m(){const t=await l(),e=await b();u(t),k(e),a.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),a.allCategories.classList.add("sidebar-active"),a.categories.addEventListener("click",f)}m();function f(t){p(t)}
//# sourceMappingURL=commonHelpers.js.map
