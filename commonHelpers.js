import{a as l}from"./assets/vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();async function d(){const s="https://books-backend.p.goit.global/books/"+"category-list";return(await l.get(s)).data}async function u(){const s="https://books-backend.p.goit.global/books/"+"top-books";return(await l.get(s)).data}function b(t){return t.map(e=>`<li class="sidebar-categories-item">
   ${e.list_name}
  </li>`).join(`
`)}function f(t){const e=b(t);c.categories.insertAdjacentHTML("beforeend",e)}function p(t){return t.map(({list_name:e,books:s})=>{let i;return window.innerWidth>=1440?i=a(s,e):window.innerWidth>=768?i=a(s.slice(0,3),e):i=a(s.slice(0,1),e),`
        <div class="best-books-category">
          <p class="best-books-subtitle">${e}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${i}</li>
          </ul>
          <button class="btn-see-more" type="button" data-cat="${e}">SEE MORE</button>
        </div>
      `}).join(`
`)}function g(t){const e=p(t);c.bestBooks.insertAdjacentHTML("beforeend",e)}function a(t,e){return t.filter(({list_name:s})=>s===e).map(({author:s,list_name:i,book_image:o,title:r})=>`
    <div class="best-books-content">
      <img class="best-books-image" src="${o}" alt="book" />
      <p class="best-books-hidden-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${r}</h3>
    <p class="best-books-text">${s}</p>
  `).join(`
`)}function m(t){const e=t.target.closest("li");!e||e===t.currentTarget||(c.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),e.classList.add("sidebar-active"))}const c={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories")};async function k(){const t=await d(),e=await u();f(t),g(e),c.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),c.allCategories.classList.add("sidebar-active"),c.categories.addEventListener("click",y)}k();function y(t){m(t)}
//# sourceMappingURL=commonHelpers.js.map
