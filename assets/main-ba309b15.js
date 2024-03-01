import{a as i}from"./vendor-0cb09735.js";async function d(){const o="https://books-backend.p.goit.global/books/"+"category-list";return(await i.get(o)).data}async function b(){const o="https://books-backend.p.goit.global/books/"+"top-books";return(await i.get(o)).data}async function g(e){const t="https://books-backend.p.goit.global/books/",o=`category?category=${e}`,s=t+o;return(await i.get(s)).data}function u(e){return e.map(t=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${t.list_name}
   </a>
  </li>`).join(`
`)}function k(e){const t=u(e);a.categories.insertAdjacentHTML("beforeend",t)}function p(e){return e.map(({list_name:t,books:o})=>{let s;return window.innerWidth>=1440?s=n(o,t):window.innerWidth>=768?s=n(o.slice(0,3),t):s=n(o.slice(0,1),t),`
       
      <div class="best-books-category">
         
          <p class="best-books-subtitle">${t}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${s}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${t}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function m(e){const t=p(e);a.bestBooks.insertAdjacentHTML("beforeend",t)}function n(e,t){return e.filter(({list_name:o})=>o===t).map(({author:o,list_name:s,book_image:c,title:r,_id:l})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${l}">
      <img class="best-books-image" src="${c}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${r}</h3>
    <p class="best-books-text">${o}</p>
    </div>
  `).join(`
`)}function y(e){const t=e.target.closest("li");!t||t===e.currentTarget||(a.categoriesItems.forEach(o=>o.classList.remove("sidebar-active")),t.classList.add("sidebar-active"))}function f(e){return`${e.target.closest("a").textContent}`}function v(e){return e.map(({author:t,list_name:o,book_image:s,title:c,_id:r})=>`

  <div class="hardcover-wrap">
            <ul class="hardcover-list">
                <li class="hardcover-item" id="${r}">
                    <img class="hardcover-img" src="${s}" alt="card">
                    <h3 class="hardcover-subtitle">${c}</h3>
                       <p class="hardcover-descr">${t}</p>
                </li>`).join(`
`)}function h(e){const t=v(e);a.bestBooks.innerHTML=t}const a={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories")};async function B(){const e=await d(),t=await b();k(e),m(t),a.oneCategory=document.querySelector(".sidebar-category-link"),a.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),a.allCategories.classList.add("sidebar-active"),a.categories.addEventListener("click",L)}B();async function L(e){const t=f(e);console.log(t);const o=await g(t.trim());console.log(o),h(o),y(e)}
//# sourceMappingURL=main-ba309b15.js.map
