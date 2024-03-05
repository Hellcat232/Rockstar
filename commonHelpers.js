import{r as e,s as g,a as w,b as L}from"./assets/support-ukraine-02352ba4.js";import{a as l,b as T,i as $}from"./assets/vendor-cd34f230.js";const d="https://books-backend.p.goit.global/books/",p={"Content-Type":"application/json","Cache-Control":"max-age=1300"};async function E(){const t="category-list";try{const o=`${d}${t}`;return(await l.get(o,{headers:p})).data}catch(o){console.log(o)}}async function B(){const t="top-books";try{const o=`${d}${t}`;return(await l.get(o,{headers:p})).data}catch(o){console.log(o)}}async function m(t){const o=`category?category=${t}`;try{const s=`${d}${o}`;return(await l.get(s,{headers:p})).data}catch(s){console.log(s)}}function C(t){return t.map(o=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${o.list_name}
   </a>
  </li>`).join(`
`)}function S(t){const o=C(t);e.categories.insertAdjacentHTML("beforeend",o)}function _(t){return t.map(({list_name:o,books:s})=>{let a;return window.innerWidth>=1440?a=c(s,o):window.innerWidth>=768?a=c(s.slice(0,3),o):a=c(s.slice(0,1),o),`
       
      <div class="best-books-category">

          <p class="best-books-subtitle">${o}</p>
          <ul class="best-books-list">
            <li class="best-books-item">${a}</li>
          </ul>
          <div class="btn-see-more-wrap">
          <button class="btn-see-more" type="button" data-cat="${o}">SEE MORE</button>
        </div>
          </div>
      `}).join(`
`)}function x(t){const o=_(t);e.bestBooks.insertAdjacentHTML("beforeend",o)}function c(t,o){return t.filter(({list_name:s})=>s===o).map(({author:s,list_name:a,book_image:i,title:n,_id:y})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${y}">
      <img class="best-books-image" src="${i}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${n}</h3>
    <p class="best-books-text">${s}</p>
    </div>
  `).join(`
`)}function I(t){const o=t.target.closest("li");!o||o===t.currentTarget||(e.categoriesItems.forEach(s=>s.classList.remove("sidebar-active")),o.classList.add("sidebar-active"))}function r(t){const o=t.target.closest("li");if(o)return o.textContent.trim()}function h(t){if(t.target.classList.contains("btn-see-more")){const o=t.target.dataset.cat.trim();return e.categoriesItems.forEach(s=>{s.classList.remove("sidebar-active"),s.textContent.trim()===o&&s.classList.add("sidebar-active")}),o}}function j(t){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${t.map(({author:o,list_name:s,book_image:a,title:i,_id:n})=>`
          <li class="hardcover-item" id="${n}">
          <div class="hardcover-books-content">
          <img class="hardcover-img" src="${a}" alt="card">
          <p class="hardcover-books-overlay-text">quick view</p>
          </div>
            
            <h3 class="hardcover-subtitle">${i}</h3>
            <p class="hardcover-descr">${o}</p>
          </li>
        `).join(`
`)}
    </ul>
  </div>
  `}function v(t){const o=j(t);e.bestBooks.innerHTML=o}function k(t){if(!t)return;let o;if(t==="All categories")o=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,e.categoryTitle.innerHTML=o;else{const s=t.split(" "),a=s.slice(-1);o=`<h1 class="best-books-title">${s.slice(0,-1).join(" ")} <span class="best-books-title-colour">${a.join(" ")}</span></h1>`,e.categoryTitle.innerHTML=o}}function u(t){t.forEach(o=>{const s=document.getElementById(o._id);s&&s.addEventListener("click",a=>{a.preventDefault(),console.log(`${o._id} clicked`);const i=T.create(`
          <div class="modal">
            <button class="modal-close-btn" type="button">
            <svg class="modal-close-svg" width="16" height="16">
              <use href="./img/header/symbol-defs.svg#icon-close"></use>
            </svg>
            </button>
                            <div class="pop-up-card-wrap">
                              <img class="pop-up-book-cover" src="${o.book_image}" alt="cover">
                                  <div class="pop-up-card-top-line">
                                          <h2 class="pop-up-book-title">${o.title}</h2>
                                          <p class="pop-up-book-author">${o.author}</p>
                                          <p class="pop-up-book-description">${o.description}</p>
                                      <div class="pop-up-card-bottom-line">
                                          <ul class="pop-up-buy-links">
                                              <li class="pop-up-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="shopping-list-buy-link" href="${o.buy_links[0].url}" target="_blank">
                                                  <svg width="32" height="11" class="pop-up-buy-link-amazon" alt="logo-amazon">
                                              <use href="./images/icons.svg#icon-amazon-1"></use>
                                          </svg>   
                                                  </a>
                                              </li>
                                              <li class="shopping-list-buy-link-item">
                                                  <a rel="noreferrer noopener nofollow" class="pop-up-buy-link" href="${o.buy_links[1].url} " target="_blank">
                                                  <svg width="16" height="16" class="pop-up-buy-link-applebooks" alt="logo-apple-books">
                                              <use href="./images/icons.svg#icon-apple-ibooks"></use>
                                          </svg>    
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                 </div>
                                 </div>
                            
            <button data-id="${o._id}" type="button" class="add-to-sl-button">${g(o._id)?"Remove":"ADD TO SHOPPING LIST"}</button>
            <p class='book-added-text'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            
          </div>
        `);console.log(i),i.show(),document.querySelector(".add-to-sl-button").addEventListener("click",n=>{g(o._id)?w(o._id):(L(o),document.querySelector(".book-added-text"))})})})}async function f(){e.loader.classList.remove("hidden"),e.loader1.classList.remove("hidden");try{const t=await E(),o=await B();S(t),x(o),e.loader.classList.add("hidden"),e.loader1.classList.add("hidden"),console.log("on page load");let s=o.flatMap(a=>a.books).filter((a,i,n)=>n.indexOf(a)===i);u(s)}catch(t){b(t)}e.oneCategory=document.querySelector(".sidebar-category-link"),e.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),e.allCategories.classList.add("sidebar-active"),e.categories.addEventListener("click",R),document.querySelectorAll(".btn-see-more").forEach(t=>{t.addEventListener("click",A)})}async function A(t){e.loader1.classList.remove("hidden");try{const o=await m(h(t));v(o),k(h(t)),e.loader1.classList.add("hidden"),e.scrollToEl.scrollIntoView({behavior:"smooth"}),u(o)}catch(o){b(o)}}async function R(t){if(r(t)!==void 0){e.loader.classList.remove("hidden");try{const o=await m(r(t));console.log(r(t)),r(t)==="All categories"&&f(),v(o),k(r(t)),console.log(r(t)),I(t),e.loader.classList.add("hidden"),window.innerWidth<1440&&e.scrollToEl.scrollIntoView({behavior:"smooth"}),u(o)}catch(o){b(o)}}}function b(t){throw $.warning({title:"Caution",message:`Error: ${t}`,position:"topRight"}),t}function M(){window.addEventListener("scroll",t);function t(){window.scrollY>200?e.btnToTop.classList.add("show"):e.btnToTop.classList.remove("show")}e.btnToTop.addEventListener("click",o);function o(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),o()},10)}}f();M();
//# sourceMappingURL=commonHelpers.js.map
