import{r as s,s as f,a as T,b as $}from"./assets/check-page-a3c351b8.js";import{a as p,b as E,i as C}from"./assets/vendor-cd34f230.js";const u="https://books-backend.p.goit.global/books/",b={"Content-Type":"application/json","Cache-Control":"max-age=1300"};async function B(){const e="category-list";try{const o=`${u}${e}`;return(await p.get(o,{headers:b})).data}catch(o){console.log(o)}}async function S(){const e="top-books";try{const o=`${u}${e}`;return(await p.get(o,{headers:b})).data}catch(o){console.log(o)}}async function y(e){const o=`category?category=${e}`;try{const t=`${u}${o}`;return(await p.get(t,{headers:b})).data}catch(t){console.log(t)}}function x(e){return e.map(o=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${o.list_name}
   </a>
  </li>`).join(`
`)}function _(e){const o=x(e);s.categories.insertAdjacentHTML("beforeend",o)}function q(e){return e.map(({list_name:o,books:t})=>{let n;return window.innerWidth>=1440?n=d(t,o):window.innerWidth>=768?n=d(t.slice(0,3),o):n=d(t.slice(0,1),o),`
       
      <div class="best-books-category">

          <p class="best-books-subtitle">${o}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${n}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${o}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function A(e){const o=q(e);s.bestBooks.insertAdjacentHTML("beforeend",o)}function d(e,o){return e.filter(({list_name:t})=>t===o).map(({author:t,list_name:n,book_image:a,title:i,_id:l})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${l}">
      <img class="best-books-image" src="${a}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${i}</h3>
    <p class="best-books-text">${t}</p>
    </div>
  `).join(`
`)}function R(e){const o=e.target.closest("li");!o||o===e.currentTarget||(s.categoriesItems.forEach(t=>t.classList.remove("sidebar-active")),o.classList.add("sidebar-active"))}function r(e){const o=e.target.closest("li");if(o)return o.textContent.trim()}function v(e){if(e.target.classList.contains("btn-see-more")){const o=e.target.dataset.cat.trim();return s.categoriesItems.forEach(t=>{t.classList.remove("sidebar-active"),t.textContent.trim()===o&&t.classList.add("sidebar-active")}),o}}function j(e){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${e.map(({author:o,list_name:t,book_image:n,title:a,_id:i})=>`
          <li class="hardcover-item" id="${i}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${n}" alt="card" loading="lazy">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${a}</h3>
            <p class="hardcover-descr">${o}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function k(e){const o=j(e);s.bestBooks.innerHTML=o}function w(e){if(!e)return;let o;if(e==="All categories")o=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,s.categoryTitle.innerHTML=o;else{const t=e.split(" "),n=t.slice(-1);o=`<h1 class="best-books-title">${t.slice(0,-1).join(" ")} <span class="best-books-title-colour">${n.join(" ")}</span></h1>`,s.categoryTitle.innerHTML=o}}function g(e){e.forEach(o=>{const t=document.getElementById(o._id);t&&t.addEventListener("click",n=>{n.preventDefault(),console.log(`${o._id} clicked`);function a(i){const l=E.create(`
          <div class="modal">
            <button class="modal-close-btn" type="button">
            <svg class="modal-close-svg" width="16" height="16">
              <use href="./img/icons.svg#icon-close"></use>
            </svg>
            </button>
                            <div class="pop-up-card-wrap">
                              <img class="pop-up-book-cover" src="${i.book_image}" alt="cover">
                                  <div class="pop-up-card-top-line">
                                          <h2 class="pop-up-book-title">${i.title}</h2>
                                          <p class="pop-up-book-author">${i.author}</p>
                                          <p class="pop-up-book-description">${i.description}</p>
                                      <div class="pop-up-card-bottom-line">
                                          <ul class="pop-up-buy-links">
                                              <li class="pop-up-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${i.buy_links[0].url}" target="_blank">
                                                  <svg width="32" height="11" class="pop-up-buy-link-amazon" alt="logo-amazon">
                                              <use href="./img/icons.svg#icon-amazon-1"></use>
                                          </svg>   
                                                  </a>
                                              </li>
                                              <li class="shopping-list-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="pop-up-buy-link" href="${i.buy_links[1].url} " target="_blank">
                                                  <svg width="16" height="16" class="pop-up-buy-link-applebooks" alt="logo-apple-books">
                                              <use href="./img/icons.svg#icon-apple-ibooks"></use>
                                          </svg>    
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                 </div>
                                 </div>
                            
            <button data-id="${i._id}" type="button" class="add-to-sl-button">${f(i._id)?"Remove from the shopping list":"Add to shopping list"}</button>
            <p class='book-added-text'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            
          </div>
        `,{onShow:()=>{document.addEventListener("keydown",m)},onClose:()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",m)}});l.show(),document.body.style.overflow="hidden";function m(c){console.log(c.code),c.code==="Escape"&&l.close()}document.querySelector(".modal-close-btn").addEventListener("click",c=>{l.close()})}a(o),document.querySelector(".add-to-sl-button").addEventListener("click",i=>{f(o._id)?(T(o._id),document.querySelector(".book-added-text").style.display="none",document.querySelector(".add-to-sl-button").textContent="Add to shopping list"):($(o),document.querySelector(".book-added-text").style.display="block",document.querySelector(".add-to-sl-button").textContent="Remove from the shopping list")})})})}async function L(){s.loader.classList.remove("hidden"),s.loader1.classList.remove("hidden");try{const e=await B(),o=await S();_(e),A(o),s.loader.classList.add("hidden"),s.loader1.classList.add("hidden");let t=o.flatMap(n=>n.books).filter((n,a,i)=>i.indexOf(n)===a);g(t)}catch(e){h(e)}s.oneCategory=document.querySelector(".sidebar-category-link"),s.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),s.allCategories.classList.add("sidebar-active"),s.categories.addEventListener("click",M),document.querySelectorAll(".btn-see-more").forEach(e=>{e.addEventListener("click",I)})}async function I(e){s.loader1.classList.remove("hidden");try{const o=await y(v(e));k(o),w(v(e)),s.loader1.classList.add("hidden"),s.scrollToEl.scrollIntoView({behavior:"smooth"}),g(o)}catch(o){h(o)}}async function M(e){if(r(e)!==void 0){s.loader.classList.remove("hidden");try{const o=await y(r(e));console.log(r(e)),r(e)==="All categories"&&L(),k(o),w(r(e)),console.log(r(e)),R(e),s.loader.classList.add("hidden"),window.innerWidth<1440&&s.scrollToEl.scrollIntoView({behavior:"smooth"}),g(o)}catch(o){h(o)}}}function h(e){throw C.warning({title:"Caution",message:`Error: ${e}`,position:"topRight"}),e}function P(){window.addEventListener("scroll",o);let e=window.pageYOffset;function o(){window.scrollY>200?s.btnToTop.classList.add("show"):s.btnToTop.classList.remove("show");const n=window.pageYOffset;e>n?document.querySelector(".header-container").style.top="0":document.querySelector(".header-container").style.top="-118px",e=n}s.btnToTop.addEventListener("click",t);function t(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),t()},10)}}L();P();
//# sourceMappingURL=commonHelpers.js.map
