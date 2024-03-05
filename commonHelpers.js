import{r as s,s as v,a as T,b as $}from"./assets/check-page-30e88e65.js";import{a as p,b as E,i as C}from"./assets/vendor-cd34f230.js";const u="https://books-backend.p.goit.global/books/",b={"Content-Type":"application/json","Cache-Control":"max-age=1300"};async function B(){const t="category-list";try{const o=`${u}${t}`;return(await p.get(o,{headers:b})).data}catch(o){console.log(o)}}async function S(){const t="top-books";try{const o=`${u}${t}`;return(await p.get(o,{headers:b})).data}catch(o){console.log(o)}}async function f(t){const o=`category?category=${t}`;try{const e=`${u}${o}`;return(await p.get(e,{headers:b})).data}catch(e){console.log(e)}}function x(t){return t.map(o=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${o.list_name}
   </a>
  </li>`).join(`
`)}function _(t){const o=x(t);s.categories.insertAdjacentHTML("beforeend",o)}function q(t){return t.map(({list_name:o,books:e})=>{let i;return window.innerWidth>=1440?i=d(e,o):window.innerWidth>=768?i=d(e.slice(0,3),o):i=d(e.slice(0,1),o),`
       
      <div class="best-books-category">

          <p class="best-books-subtitle">${o}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${i}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${o}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function A(t){const o=q(t);s.bestBooks.insertAdjacentHTML("beforeend",o)}function d(t,o){return t.filter(({list_name:e})=>e===o).map(({author:e,list_name:i,book_image:a,title:n,_id:c})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${c}">
      <img class="best-books-image" src="${a}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${n}</h3>
    <p class="best-books-text">${e}</p>
    </div>
  `).join(`
`)}function R(t){const o=t.target.closest("li");!o||o===t.currentTarget||(s.categoriesItems.forEach(e=>e.classList.remove("sidebar-active")),o.classList.add("sidebar-active"))}function r(t){const o=t.target.closest("li");if(o)return o.textContent.trim()}function k(t){if(t.target.classList.contains("btn-see-more")){const o=t.target.dataset.cat.trim();return s.categoriesItems.forEach(e=>{e.classList.remove("sidebar-active"),e.textContent.trim()===o&&e.classList.add("sidebar-active")}),o}}function j(t){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${t.map(({author:o,list_name:e,book_image:i,title:a,_id:n})=>`
          <li class="hardcover-item" id="${n}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${i}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${a}</h3>
            <p class="hardcover-descr">${o}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function y(t){const o=j(t);s.bestBooks.innerHTML=o}function w(t){if(!t)return;let o;if(t==="All categories")o=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,s.categoryTitle.innerHTML=o;else{const e=t.split(" "),i=e.slice(-1);o=`<h1 class="best-books-title">${e.slice(0,-1).join(" ")} <span class="best-books-title-colour">${i.join(" ")}</span></h1>`,s.categoryTitle.innerHTML=o}}function g(t){t.forEach(o=>{const e=document.getElementById(o._id);e&&e.addEventListener("click",i=>{i.preventDefault(),console.log(`${o._id} clicked`);function a(n){const c=E.create(`
          <div class="modal">
            <button class="modal-close-btn" type="button">
            <svg class="modal-close-svg" width="16" height="16">
              <use href="./img/icons.svg#icon-close"></use>
            </svg>
            </button>
                            <div class="pop-up-card-wrap">
                              <img class="pop-up-book-cover" src="${n.book_image}" alt="cover">
                                  <div class="pop-up-card-top-line">
                                          <h2 class="pop-up-book-title">${n.title}</h2>
                                          <p class="pop-up-book-author">${n.author}</p>
                                          <p class="pop-up-book-description">${n.description}</p>
                                      <div class="pop-up-card-bottom-line">
                                          <ul class="pop-up-buy-links">
                                              <li class="pop-up-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${n.buy_links[0].url}" target="_blank">
                                                  <svg width="32" height="11" class="pop-up-buy-link-amazon" alt="logo-amazon">
                                              <use href="./img/icons.svg#icon-amazon-1"></use>
                                          </svg>   
                                                  </a>
                                              </li>
                                              <li class="shopping-list-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="pop-up-buy-link" href="${n.buy_links[1].url} " target="_blank">
                                                  <svg width="16" height="16" class="pop-up-buy-link-applebooks" alt="logo-apple-books">
                                              <use href="./img/icons.svg#icon-apple-ibooks"></use>
                                          </svg>    
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                 </div>
                                 </div>
                            
            <button data-id="${n._id}" type="button" class="add-to-sl-button">${v(n._id)?"Remove from the shopping list":"Add to shopping list"}</button>
            <p class='book-added-text'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            
          </div>
        `,{onShow:()=>{document.addEventListener("keydown",m)},onClose:()=>{document.removeEventListener("keydown",m)}});c.show();function m(l){console.log(l.code),l.code==="Escape"&&c.close()}document.querySelector(".modal-close-btn").addEventListener("click",l=>{c.close()})}a(o),document.querySelector(".add-to-sl-button").addEventListener("click",n=>{v(o._id)?(T(o._id),document.querySelector(".book-added-text").style.display="none",document.querySelector(".add-to-sl-button").textContent="Add to shopping list"):($(o),document.querySelector(".book-added-text").style.display="block",document.querySelector(".add-to-sl-button").textContent="Remove from the shopping list")})})})}async function L(){s.loader.classList.remove("hidden"),s.loader1.classList.remove("hidden");try{const t=await B(),o=await S();_(t),A(o),s.loader.classList.add("hidden"),s.loader1.classList.add("hidden");let e=o.flatMap(i=>i.books).filter((i,a,n)=>n.indexOf(i)===a);g(e)}catch(t){h(t)}s.oneCategory=document.querySelector(".sidebar-category-link"),s.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),s.allCategories.classList.add("sidebar-active"),s.categories.addEventListener("click",M),document.querySelectorAll(".btn-see-more").forEach(t=>{t.addEventListener("click",I)})}async function I(t){s.loader1.classList.remove("hidden");try{const o=await f(k(t));y(o),w(k(t)),s.loader1.classList.add("hidden"),s.scrollToEl.scrollIntoView({behavior:"smooth"}),g(o)}catch(o){h(o)}}async function M(t){if(r(t)!==void 0){s.loader.classList.remove("hidden");try{const o=await f(r(t));console.log(r(t)),r(t)==="All categories"&&L(),y(o),w(r(t)),console.log(r(t)),R(t),s.loader.classList.add("hidden"),window.innerWidth<1440&&s.scrollToEl.scrollIntoView({behavior:"smooth"}),g(o)}catch(o){h(o)}}}function h(t){throw C.warning({title:"Caution",message:`Error: ${t}`,position:"topRight"}),t}function N(){window.addEventListener("scroll",t);function t(){window.scrollY>200?s.btnToTop.classList.add("show"):s.btnToTop.classList.remove("show")}s.btnToTop.addEventListener("click",o);function o(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),o()},10)}}L();N();
//# sourceMappingURL=commonHelpers.js.map
