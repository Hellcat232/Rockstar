import{r as e,s as u,a as f,b as y}from"./assets/support-ukraine-02352ba4.js";import{a as l,b as w,i as L}from"./assets/vendor-cd34f230.js";async function T(){const s="https://books-backend.p.goit.global/books/",o="category-list";try{const t=`${s}${o}`;return(await l.get(t)).data}catch(t){console.log(t)}}async function $(){const s="https://books-backend.p.goit.global/books/",o="top-books";try{const t=`${s}${o}`;return(await l.get(t)).data}catch(t){console.log(t)}}async function g(s){const o="https://books-backend.p.goit.global/books/",t=`category?category=${s}`;try{const a=`${o}${t}`;return(await l.get(a)).data}catch(a){console.log(a)}}function E(s){return s.map(o=>`<li class="sidebar-categories-item"><a class="sidebar-category-link">
   ${o.list_name}
   </a>
  </li>`).join(`
`)}function B(s){const o=E(s);e.categories.insertAdjacentHTML("beforeend",o)}function C(s){return s.map(({list_name:o,books:t})=>{let a;return window.innerWidth>=1440?a=r(t,o):window.innerWidth>=768?a=r(t.slice(0,3),o):a=r(t.slice(0,1),o),`
       
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
`)}function S(s){const o=C(s);e.bestBooks.insertAdjacentHTML("beforeend",o)}function r(s,o){return s.filter(({list_name:t})=>t===o).map(({author:t,list_name:a,book_image:i,title:n,_id:v})=>`
    <div class="best-books-wrap" >
      <div class="best-books-content"  id="${v}">
      <img class="best-books-image" src="${i}" alt="book" loading="lazy"/>
      <p class="best-books-overlay-text">quick view</p>
    </div>
    <h3 class="best-books-heading">${n}</h3>
    <p class="best-books-text">${t}</p>
    </div>
  `).join(`
`)}function _(s){const o=s.target.closest("li");!o||o===s.currentTarget||(e.categoriesItems.forEach(t=>t.classList.remove("sidebar-active")),o.classList.add("sidebar-active"))}function c(s){return s.target.closest("li").textContent.trim()}function b(s){if(s.target.classList.contains("btn-see-more")){const o=s.target.dataset.cat.trim();return e.categoriesItems.forEach(t=>{t.classList.remove("sidebar-active"),t.textContent.trim()===o&&t.classList.add("sidebar-active")}),o}}function x(s){return`
  <div class="hardcover-wrap">
    <ul class="hardcover-list">
      ${s.map(({author:o,list_name:t,book_image:a,title:i,_id:n})=>`
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
  `}function h(s){const o=x(s);e.bestBooks.innerHTML=o}function k(s){if(!s)return;let o;if(s==="All categories")o=`<h1 class="best-books-title">
    Best Sellers<span class="best-books-title-colour"> Books</span>
  </h1>`,e.categoryTitle.innerHTML=o;else{const t=s.split(" "),a=t.slice(-1);o=`<h1 class="best-books-title">${t.slice(0,-1).join(" ")} <span class="best-books-title-colour">${a.join(" ")}</span></h1>`,e.categoryTitle.innerHTML=o}}function d(s){s.forEach(o=>{const t=document.getElementById(o._id);t&&t.addEventListener("click",a=>{a.preventDefault(),console.log(`${o._id} clicked`);const i=w.create(`
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
                            
            <button data-id="${o._id}" type="button" class="add-to-sl-button">${u(o._id)?"Remove":"ADD TO SHOPPING LIST"}</button>
            <p class='book-added-text'>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
            
          </div>
        `);console.log(i),i.show(),document.querySelector(".add-to-sl-button").addEventListener("click",n=>{u(o._id)?f(o._id):(y(o),document.querySelector(".book-added-text"))})})})}async function m(){e.loader.classList.remove("hidden"),e.loader1.classList.remove("hidden");try{const s=await T(),o=await $();B(s),S(o),e.loader.classList.add("hidden"),e.loader1.classList.add("hidden"),console.log("on page load");let t=o.flatMap(a=>a.books).filter((a,i,n)=>n.indexOf(a)===i);d(t)}catch(s){p(s)}e.oneCategory=document.querySelector(".sidebar-category-link"),e.categoriesItems=document.querySelectorAll(".sidebar-categories-item"),e.allCategories.classList.add("sidebar-active"),e.categories.addEventListener("click",I),document.querySelectorAll(".btn-see-more").forEach(s=>{s.addEventListener("click",A)})}async function A(s){e.loader1.classList.remove("hidden");try{const o=await g(b(s));h(o),k(b(s)),e.loader1.classList.add("hidden"),e.scrollToEl.scrollIntoView({behavior:"smooth"}),d(o)}catch(o){p(o)}}async function I(s){e.loader.classList.remove("hidden");try{const o=await g(c(s));c(s)==="All categories"&&(console.log("from onCategoriesClick"),m()),h(o),k(c(s)),_(s),e.loader.classList.add("hidden"),e.scrollToEl.scrollIntoView({behavior:"smooth"}),d(o)}catch(o){p(o)}}function p(s){throw L.warning({title:"Caution",message:`Error: ${s}`,position:"topRight"}),s}function R(){window.addEventListener("scroll",s);function s(){window.scrollY>200?e.btnToTop.classList.add("show"):e.btnToTop.classList.remove("show")}e.btnToTop.addEventListener("click",o);function o(){window.scrollY!=0&&setTimeout(function(){window.scrollTo(0,window.scrollY-70),o()},10)}}console.log("main");m();R();
//# sourceMappingURL=commonHelpers.js.map
