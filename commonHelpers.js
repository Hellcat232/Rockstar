import{r as s,s as f,a as T,b as $}from"./assets/check-page-04bdd8a8.js";import{a as d,b as E,i as C}from"./assets/vendor-cd34f230.js";const p="https://books-backend.p.goit.global/books/",u={"Content-Type":"application/json","Cache-Control":"max-age=1300"};async function B(){const e="category-list";try{const t=`${p}${e}`;return(await d.get(t,{headers:u})).data}catch(t){console.log(t)}}async function S(){const e="top-books";try{const t=`${p}${e}`;return(await d.get(t,{headers:u})).data}catch(t){console.log(t)}}async function y(e){const t=`category?category=${e}`;try{const o=`${p}${t}`;return(await d.get(o,{headers:u})).data}catch(o){console.log(o)}}function x(e){return e.map(t=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${t.list_name}
   </a>
  </li>`).join(`
`)}function _(e){const t=x(e);s.categories.insertAdjacentHTML("beforeend",t)}function q(e){return e.map(({list_name:t,books:o})=>{let n;return window.innerWidth>=1440?n=l(o,t):window.innerWidth>=768?n=l(o.slice(0,3),t):n=l(o.slice(0,1),t),`
       
      <div class="best-books-category">

          <p class="best-books-subtitle">${t}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${n}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${t}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function A(e){const t=q(e);s.bestBooks.insertAdjacentHTML("beforeend",t)}function l(e,t){return e.filter(({list_name:o})=>o===t).map(({author:o,list_name:n,book_image:a,title:i,_id:r})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${r}">
      <img class="best-books-image" src="${a}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${i}</h3>
    <p class="best-books-text">${o}</p>
    </div>
  `).join(`
`)}function R(e){const t=e.target.closest("li");!t||t===e.currentTarget||(s.categoriesItems.forEach(o=>o.classList.remove("sidebar-active")),t.classList.add("sidebar-active"))}function c(e){const t=e.target.closest("li");if(t)return t.textContent.trim()}function v(e){if(e.target.classList.contains("btn-see-more")){const t=e.target.dataset.cat.trim();return s.categoriesItems.forEach(o=>{o.classList.remove("sidebar-active"),o.textContent.trim()===t&&o.classList.add("sidebar-active")}),t}}function j(e){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${e.map(({author:t,list_name:o,book_image:n,title:a,_id:i})=>`
          <li class="hardcover-item" id="${i}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${n}" alt="card" loading="lazy">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${a}</h3>
            <p class="hardcover-descr">${t}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function k(e){const t=j(e);s.bestBooks.innerHTML=t}function w(e){if(!e)return;let t;if(e==="All categories")t=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,s.categoryTitle.innerHTML=t;else{const o=e.split(" "),n=o.slice(-1);t=`<h1 class="best-books-title">${o.slice(0,-1).join(" ")} <span class="best-books-title-colour">${n.join(" ")}</span></h1>`,s.categoryTitle.innerHTML=t}}function b(e){e.forEach(t=>{const o=document.getElementById(t._id);o&&o.addEventListener("click",n=>{n.preventDefault();function a(i){const r=E.create(`
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
        `,{onShow:()=>{document.addEventListener("keydown",g)},onClose:()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",g)}});r.show(),document.body.style.overflow="hidden";function g(m){m.code==="Escape"&&r.close()}document.querySelector(".modal-close-btn").addEventListener("click",m=>{r.close()})}a(t),document.querySelector(".add-to-sl-button").addEventListener("click",i=>{f(t._id)?(T(t._id),document.querySelector(".book-added-text").style.display="none",document.querySelector(".add-to-sl-button").textContent="Add to shopping list"):($(t),document.querySelector(".book-added-text").style.display="block",document.querySelector(".add-to-sl-button").textContent="Remove from the shopping list")})})})}async function L(){s.loader.classList.remove("hidden"),s.loader1.classList.remove("hidden");try{const e=await B(),t=await S();_(e),A(t),s.loader.classList.add("hidden"),s.loader1.classList.add("hidden");let o=t.flatMap(n=>n.books).filter((n,a,i)=>i.indexOf(n)===a);b(o)}catch(e){h(e)}s.oneCategory=document.querySelector(".sidebar-category-link"),s.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),s.allCategories.classList.add("sidebar-active"),s.categories.addEventListener("click",M),document.querySelectorAll(".btn-see-more").forEach(e=>{e.addEventListener("click",I)})}async function I(e){s.loader1.classList.remove("hidden");try{const t=await y(v(e));k(t),w(v(e)),s.loader1.classList.add("hidden"),s.scrollToEl.scrollIntoView({behavior:"smooth"}),b(t)}catch(t){h(t)}}async function M(e){if(c(e)!==void 0){s.loader.classList.remove("hidden");try{const t=await y(c(e));c(e)==="All categories"&&L(),k(t),w(c(e)),R(e),s.loader.classList.add("hidden"),window.innerWidth<1440&&s.scrollToEl.scrollIntoView({behavior:"smooth"}),b(t)}catch(t){h(t)}}}function h(e){throw C.warning({title:"Caution",message:`Error: ${e}`,position:"topRight"}),e}function P(){window.addEventListener("scroll",t);let e=window.pageYOffset;function t(){window.scrollY>200?s.btnToTop.classList.add("show"):s.btnToTop.classList.remove("show");const n=window.pageYOffset;e>n?document.querySelector(".header-container").style.top="0":document.querySelector(".header-container").style.top="-118px",e=n}s.btnToTop.addEventListener("click",o);function o(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),o()},10)}}L();P();
//# sourceMappingURL=commonHelpers.js.map
